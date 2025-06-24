<template>
  <div class="sidebar-container">
    <div class="map-sidebar" :class="{ 'collapsed': isCollapsed }">
      <!-- 侧边栏内容 -->
      <div class="sidebar-content" :class="{ 'collapsed': isCollapsed }">
        <div class="layer-management" style="display: none;">
            <h3 class="section-title primary">Layer Management</h3>
            <div class="layer-container">
              <div class="layer-item">
                <label class="layer-label">Heatmap</label>
                <input type="checkbox" v-model="showHeatmap" class="layer-checkbox" />
              </div>
              <div class="layer-item">
                <label class="layer-label">Clusters</label>
                <input type="checkbox" v-model="showClusters" class="layer-checkbox" />
              </div>
              <div class="layer-item">
                <label class="layer-label">Markers</label>
                <input type="checkbox" v-model="showMarkers" class="layer-checkbox" />
              </div>
              <div class="layer-item" v-if="false">
                <label class="layer-label">Base Map</label>
                <select v-model="selectedBaseMap" class="layer-select">
                  <option value="default">Default</option>
                  <option value="satellite">Satellite</option>
                  <option value="terrain">Terrain</option>
                </select>
              </div>
            </div>
          </div>
        <!-- 标签切换区域 -->
        <div class="tags-section">
          <h3 class="section-title primary" id="step2">Select Events</h3>
          <div style="display: flex; align-items: center; margin: -6px 0 -14px 0;">
            <el-checkbox style="color: #FFF;" v-model="selectAllChecked" @change="handleSelectAllChange">Select All</el-checkbox>
          </div>
          <div class="category-tree-container">
            <el-tree-select
              v-model="selectedCategories"
              :data="categoryTags"
              :props="{
                label: 'name',
                children: 'children',
                value: 'id'
              }"
              filterable
              multiple
              show-checkbox
              node-key="id"
              :render-after-expand="false"
              placeholder="Enter a event name to start"
              class="category-tree-select"
              ref="categoryTree"
              @change="handleCategoryChange"
            />
          </div>

          <h3 class="section-title primary" id="step3">Interested Time Range</h3>
          <div class="timeline-container">
            <!-- 新增：年份输入框，左右对称布局 -->
            <el-slider
              v-model="selectedTimeIndex"
              :min="0"
              :max="timeTags.length - 1"
              :marks="timeMarks"
              :format-tooltip="formatTimeTooltip"
              class="time-range-slider"
            />
          </div>

          <!-- <h3 class="section-title primary">Industry Tags</h3>
          <div class="industry-container">
            <div v-for="tag in industryTags" :key="tag.name" class="industry-item">
              <input 
                type="checkbox" 
                :id="tag.name" 
                :checked="selectedIndustries.includes(tag.name)" 
                @change="toggleIndustry(tag.name)" 
                class="industry-checkbox"
              />
              <label :for="tag.id" class="industry-label">{{ tag.name }}</label>
            </div>
          </div> -->
          <!-- <div class="simulation-section">
            <h3 class="section-title primary">Scenario Simulation</h3>
            <div class="simulation-container">
              <div v-for="param in simulationParams" :key="param.id" class="simulation-item">
                <div class="simulation-control">
                  <div class="simulation-header">
                    <label :for="param.id" class="simulation-label">{{ param.name }}</label>
                    <button 
                      v-if="param.active" 
                      @click="zoomToSimulation(param)"
                      class="zoom-btn"
                      title="定位到场景"
                    >
                      <svg t="1746523530564" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                        <path d="M512 85.333333c235.648 0 426.666667 191.018667 426.666667 426.666667s-191.018667 426.666667-426.666667 426.666667S85.333333 747.648 85.333333 512 276.352 85.333333 512 85.333333z m0 64c-200.298667 0-362.666667 162.368-362.666667 362.666667s162.368 362.666667 362.666667 362.666667 362.666667-162.368 362.666667-362.666667-162.368-362.666667-362.666667-362.666667z m0 106.666667c141.152 0 256 114.848 256 256s-114.848 256-256 256-256-114.848-256-256 114.848-256 256-256z m0 64c-106.048 0-192 85.952-192 192s85.952 192 192 192 192-85.952 192-192-85.952-192-192-192z" fill="currentColor"></path>
                      </svg>
                    </button>
                  </div>
                  <label class="switch">
                    <input 
                      type="checkbox" 
                      :checked="param.active"
                      @change="toggleSimulation(param.id)"
                    >
                    <span class="slider"></span>
                  </label>
                </div>
                <input 
                  type="range" 
                  :id="param.id" 
                  :min="param.min" 
                  :max="param.max" 
                  :value="param.value" 
                  @input="updateSimulationParam(param.id, $event)" 
                  class="simulation-slider"
                />
                <span class="simulation-value">{{ param.value }}</span>
              </div>
            </div>
          </div> -->
          <div style="padding-bottom: 10px;"></div>
          <!-- 添加导出功能 -->
          <div class="export-section" v-if="isLoggedIn" id="step4">
            <h3 class="section-title primary">Export Data</h3>
            <div class="export-container">
              <div class="export-selector">
                <button @click="showExportOptions = !showExportOptions" class="export-btn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="export-icon">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  Export Data
                </button>
                <div v-if="showExportOptions" class="export-options">
                  <button @click="exportData('csv')" class="export-option">
                    <span class="format-icon">📊</span>
                    CSV Format
                  </button>
                  <button @click="exportData('geojson')" class="export-option">
                    <span class="format-icon">🗺️</span>
                    GeoJSON Format
                  </button>
                  <button @click="exportData('png')" class="export-option">
                    <span class="format-icon">🖼️</span>
                    PNG Image
                  </button>
                  <button @click="exportData('pdf')" class="export-option">
                    <span class="format-icon">📄</span>
                    PDF Document
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- 添加登录按钮 -->
          <div v-else class="login-section" id="step4">
            <button @click="handleLoginClick" class="login-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="login-icon">
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                <polyline points="10 17 15 12 10 7"></polyline>
                <line x1="15" y1="12" x2="3" y2="12"></line>
              </svg>
              Login to Export
            </button>
          </div>
          <div class="last-updated">
            Last Updated: {{ lastUpdated }}
          </div>
        </div>
      </div>
    </div>

    <!-- 展开/收起按钮 -->
    <button 
      @click="toggleSidebar" 
      class="toggle-btn"
      :class="{ 'collapsed': isCollapsed }"
    >
      <svg t="1746523530564" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6345" width="12" height="12"><path d="M397.513 514.794l-307.163 307.163h187.090l307.163-307.163-312.749-312.749h-187.090l312.749 312.749zM444.983 821.955h187.090l307.163-307.163-312.749-312.749h-187.090l312.749 312.749-307.163 307.163zM444.983 821.955z" fill="#60a5fa" p-id="6346"></path></svg>
    </button>

    <!-- 添加登录模态框 -->
    <LoginModal
      v-model:visible="showLoginModal"
      @update:visible="handleLoginModalClose"
    />
  </div>
</template>

<script>
import { useStore } from 'vuex'
import powerOutage from '@/assets/datas/power.json'
import traffic from '@/assets/datas/traffic.json'
import flood from '@/assets/datas/flood.json'
import communication from '@/assets/datas/communication.json'
import supply from '@/assets/datas/supply.json'
import cyber_line from '@/assets/datas/cyber_line.json'
import earthquake_line from '@/assets/datas/earthquake_line.json'
import weather_line from '@/assets/datas/weather_line.json'
import uk_data from '@/assets/datas/weekly_flood_data.json'
import Dudley from '@/assets/datas/Dudley.json'
import Melik from '@/assets/datas/Melik.json'
import Melik_Dudley from '@/assets/datas/Melik_Dudley.json'
import heatwave from '@/assets/datas/heatwave.json'
import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'
import LoginModal from './LoginModal.vue'
import { ElMessage } from 'element-plus'
import { ElButton, ElCheckbox } from 'element-plus'

export default {
  name: 'MapSidebar',
  components: {
    LoginModal,
    ElButton,
    ElCheckbox
  },
  data() {
    return {
      mapInstance: null,
      isCollapsed: false,
      selectedCategories: [],
      selectedTime: '2022',
      selectedIndustries: ["Energy","Transportation","Communication","Agriculture","Manufacturing"],
      lastUpdated: new Date().toISOString().split('T')[0], // 格式化为 YYYY-MM-DD
      showHeatmap: false,
      showClusters: false,
      showMarkers: false,
      selectedBaseMap: 'default',
      // 转换后的热力图数据
      heatmapData: {
        type: 'FeatureCollection',
        features: []
      },
      simulationParams: [
        { 
          id: 'weather', 
          name: 'Extreme Weather', 
          min: 0, 
          max: 100, 
          value: 50,
          active: false,
          flowLines: [
            {
              coordinates: weather_line.geometry.coordinates,
              style: { 
                color: 'rgba(153, 0, 255, 0.8)'
              }
            }
          ],
          features: [] // 存储创建的要素
        },
        { 
          id: 'earthquake', 
          name: 'Earthquake', 
          min: 0, 
          max: 100, 
          value: 50,
          active: false,
          flowLines: [
            {
              coordinates: earthquake_line.geometry.coordinates,
              style: { 
                color: 'rgba(0, 255, 0, 0.8)'
              }
            }
          ],
          features: [] // 存储创建的要素
        },
        { 
          id: 'cyber', 
          name: 'Cyber Attack', 
          min: 0, 
          max: 100, 
          value: 50,
          active: false,
          flowLines: [
            {
              coordinates: cyber_line.geometry.coordinates,
              style: { 
                color: 'rgba(0, 0, 255, 0.8)'
              }
            }
          ],
          features: [] // 存储创建的要素
        }
      ],
      simulationColor: 'rgba(0, 0, 0, 0.5)',
      categoryTags: [
        {
          id: 'natural',
          name: 'Natural',
          children: [
            {
              id: 'biological',
              name: 'Biological'
            },
            {
              id: 'climatological',
              name: 'Climatological',
              children: [
                {
                  id: 'storm',
                  name: 'Storm',
                  children: [
                    {
                      id: 'melik',
                      name: 'Melik'
                    },
                    {
                      id: 'dudley',
                      name: 'Dudley'
                    }
                  ]
                },
                {
                  id: 'drought',
                  name: 'Drought'
                },
                {
                  id: 'glacial-lake-outburst-flood',
                  name: 'Glacial lake outburst flood'
                },
                {
                  id: 'wildfire',
                  name: 'Wildfire'
                }
              ]
            },
            {
              id: 'extra-terrestrial',
              name: 'Extra-terrestrial',
              children: [
                {
                  id: 'impact',
                  name: 'Impact'
                },
                {
                  id: 'space-weather',
                  name: 'Space weather'
                }
              ]
            },
            {
              id: 'geophysical',
              name: 'Geophysical',
              children: [
                {
                  id: 'earthquake',
                  name: 'Earthquake'
                }
              ]
            }
          ]
        },
        {
          id: 'technological',
          name: 'Technological',
          children: [
            {
              id: 'industrial-accident',
              name: 'Industrial accident'
            },
            {
              id: 'miscellaneous-accident',
              name: 'Miscellaneous accident'
            },
            {
              id: 'transport',
              name: 'Transport'
            }
          ]
        }
      ],
      timeTags: Array.from({length: 31}, (_, i) => ({ id: String(2000 + i), name: String(2000 + i) })),
      industryTags: [
        { id: 'energy', name: 'Energy' },
        { id: 'transportation', name: 'Transportation' },
        { id: 'communication', name: 'Communication' },
        { id: 'agriculture', name: 'Agriculture' },
        { id: 'manufacturing', name: 'Manufacturing' }
      ],
      categoryDataMap: {
        'power': powerOutage,
        'traffic': traffic,
        'flood': flood,
        'communication': communication,
        'supply': supply
      },
      showExportOptions: false,
      showLoginModal: false,
      selectedTimeIndex: 22, // 替换 timeRange
      ukAreaData: [],
      year_week: 1,
      exportUkData: [],
      shapeMap: {
        'Agriculture, Forestry and Fishing': 0,
        'Mining and Quarrying': 1,
        'Manufacturing': 2,
        'Electricity, Gas, Steam and Air Conditioning Supply': 3,
        'Water Supply, Sewerage, Waste Management and Remediation Activities': 4,
        'Construction': 5,
        'Wholesale and Retail Trade, Repair of Motor Vehicles and Motorcycles': 6,
        'Transport and Storage': 7,
        'Accommodation and Food Service Activities': 8,
        'Information and Communication': 9,
        'Financial and Insurance Activities': 10,
        'Real Estate Activities': 11,
        'Professional, Scientific and Technical Activities': 12,
        'Administrative and Support Service Activities': 13,
        'Public Administration and Defence': 14,
        'Education': 15,
        'Human Health and Social Work Activities': 16,
        'Arts, Entertainment and Recreation': 17,
        'Other Service Activities': 18
      },
      selectAllChecked: false
    }
  },
  computed: {
    // 从 store 获取登录状态
    isLoggedIn() {
      return this.$store.state.isLoggedIn
    },
    timeMarks() {
      const marks = {};
      this.timeTags.forEach((tag, index) => {
        if(index == 0 || index == this.timeTags.length - 1) {
          marks[index] = tag.name;
        }
      });
      return marks;
    }
  },
  watch: {
    showHeatmap() {
      this.updateMapLayers();
    },
    showClusters() {
      this.updateMapLayers();
    },
    showMarkers() {
      this.updateMapLayers();
    },
    selectedCategories(val) {
      function getAllLeafIds(nodes) {
        let ids = [];
        nodes.forEach(node => {
          if (node.children && node.children.length > 0) {
            ids = ids.concat(getAllLeafIds(node.children));
          } else {
            ids.push(node.id);
          }
        });
        return ids;
      }
      const allLeafIds = getAllLeafIds(this.categoryTags);
      this.selectAllChecked = val.length === allLeafIds.length;
      this.$store.commit('setSelectAllChecked', this.selectAllChecked);
    }
  },
  mounted() {
    // 等待地图实例初始化
    this.initMapInstance();
    // 转换数据为GeoJSON格式
    // this.convertToGeoJSON();
    document.addEventListener('click', this.handleClickOutside);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.handleClickOutside);
  },
  methods: {
    initMapInstance() {
      // 检查地图实例是否已初始化
      if (window.olMap) {
        this.mapInstance = window.olMap;
        setTimeout(() => {
          this.showMarkers = true;
        }, 1000);
      } else {
        // 如果地图实例还未初始化，等待一段时间后重试
        setTimeout(() => {
          this.initMapInstance();
        }, 100);
      }
    },
    toggleSidebar() {
      this.isCollapsed = !this.isCollapsed;
      this.$emit('sidebar-toggle', this.isCollapsed);
    },
    handleCategoryChange(value) {
      const checkedKeys = this.$refs['categoryTree'].getCheckedKeys();
      if(checkedKeys.includes('dudley') && !checkedKeys.includes('storm') && !this.selectAllChecked) {
        this.ukAreaData = Dudley;
        this.addMarkerLayer(this.formatData(this.ukAreaData));
      } else if(checkedKeys.includes('melik') && !checkedKeys.includes('storm') && !this.selectAllChecked) {
        this.ukAreaData = Melik;
        this.addMarkerLayer(this.formatData(this.ukAreaData));
      } else if(checkedKeys.includes('storm') && !this.selectAllChecked) {
        this.ukAreaData = Melik_Dudley;
        this.addMarkerLayer(this.formatData(this.ukAreaData));
      } else if(this.selectAllChecked) {
        this.ukAreaData = heatwave;
        this.addMarkerLayer(this.formatData(this.ukAreaData));
      } else {
        if(this.mapInstance && this.mapInstance.markerLayer) {
          this.mapInstance.markerLayer.clearMarkers();
        }
      }
    },
    formatData(data) {
      // 获取当前年份范围
      if(data && data.length == 0) {
        return [];
      }
      // const startIdx = this.selectedTimeIndex;
      // const startYear = parseInt(this.timeTags[startIdx].id);
      const startIdx = parseInt(data[0].properties['Date'].substr(2,4));
      const startYear = parseInt(this.timeTags[startIdx].id);
      this.selectedTimeIndex = startIdx;
      return data.map(item => ({
        coordinate: item.coordinate,
        properties: {
          ...item.properties
        }
      })).filter(item => (item.properties.year_week === this.year_week && parseInt(item.properties.Date.substr(0,4))==startYear) && item.properties.MaxLoss > 1);
    },
    handleTimeChange(value) {
      this.year_week = value;
      this.addMarkerLayer(this.formatData(this.ukAreaData));
    },
    toggleIndustry(id) {
      const index = this.selectedIndustries.indexOf(id);
      if (index === -1) {
        this.selectedIndustries.push(id);
      } else {
        this.selectedIndustries.splice(index, 1);
      }
      this.$emit('industry-change', this.selectedIndustries);
      this.updateMapLayers();
    },
    toggleSimulation(id) {
      const param = this.simulationParams.find(p => p.id === id);
      if (param) {
        param.active = !param.active;
        
        if (param.active) {
          // 添加流动线并保存要素引用
          param.features = this.mapInstance.flowLinesLayer.addFlowLines(param.flowLines);
        } else {
          // 移除该场景的所有流动线
          param.features.forEach(feature => {
            this.mapInstance.flowLinesLayer.removeFlowLine(feature);
          });
          param.features = [];
        }
      }
    },
    updateSimulationParam(id, event) {
      const param = this.simulationParams.find(p => p.id === id);
      if (param) {
        param.value = parseInt(event.target.value);
        this.updateSimulationColor();
        
        // 更新流动线速度
        if (param.active) {
          const speed = param.value / 50; // 调整速度计算方式
          param.features.forEach(feature => {
            this.mapInstance.flowLinesLayer.updateFlowLineSpeed(feature, speed);
          });
        }
      }
    },
    updateSimulationColor() {
      const avgValue = this.simulationParams.reduce((acc, param) => acc + param.value, 0) / this.simulationParams.length;
      this.simulationColor = `rgba(0, 0, 0, ${avgValue / 100})`;
    },
    //更新图层
    updateMapLayers() {
      if (!this.mapInstance) return;
      
      // 清除现有的图层
      if(this.mapInstance && this.mapInstance.heatMapLayer) {
        this.mapInstance.heatMapLayer.clearAllLayers();
      }
      if(this.mapInstance && this.mapInstance.clusterMakerLayer) {
        this.mapInstance.clusterMakerLayer.clearMarkers();
      }
      if(this.mapInstance && this.mapInstance.markerLayer) {
        this.mapInstance.markerLayer.clearMarkers();
      }

      // 获取所有选中的叶子节点ID
      const selectedLeafIds = this.selectedCategories.filter(id => {
        // 检查是否是叶子节点（不包含在父节点的children中）
        return !this.categoryTags.some(category => 
          category.children?.some(child => child.id === id)
        );
      });

      // 遍历选中的分类
      selectedLeafIds.forEach(categoryId => {
        const data = this.categoryDataMap[categoryId];
        if (!data) return;
        // 根据选中的时间和行业类型过滤数据
        const filteredData = data.filter(item => {
          // 时间过滤
          const [startIndex, endIndex] = this.selectedTimeIndex;
          const startYear = parseInt(this.timeTags[startIndex].id);
          const endYear = parseInt(this.timeTags[endIndex].id);
          const timeMatch = item['Incident Time'] >= startYear && 
                           item['Incident Time'] <= endYear;
          
          // 行业类型过滤
          const industryMatch = this.selectedIndustries.some(industry => {
            return item['Industry Tags'] && item['Industry Tags'].includes(industry);
          });

          return timeMatch && industryMatch;
        });

        // 根据热力图勾选状态添加热力图
        if (this.showHeatmap) {
          const heatmapFeatures = filteredData.map(item => ({
            type: 'Feature',
            properties: {
              weight: this.calculateWeight(item),
              ...item
            },
            geometry: {
              type: 'Point',
              coordinates: item.coordinate
            }
          }));

          this.mapInstance.heatMapLayer.addLayer({
            id: `${categoryId}-heatmap`,
            name: `${categoryId}热力图`,
            data: {
              type: 'FeatureCollection',
              features: heatmapFeatures
            },
            type: 'geojson',
            config: {
              radius: 10,
              blur: 20,
              gradient: [
                'rgba(5, 48, 97, 0)',
                'rgba(5, 48, 97, 0.85)',
                'rgba(33, 102, 172, 0.85)',
                'rgba(103, 169, 207, 0.85)',
                'rgba(247, 247, 247, 0.85)',
                'rgba(239, 138, 98, 0.85)',
                'rgba(214, 96, 77, 0.85)',
                'rgba(178, 24, 43, 0.85)'
              ]
            }
          });
        }

        // 根据聚合点勾选状态添加聚合点
        if (this.showClusters) {
          const markers = filteredData.map(item => ({
            coordinates: item.coordinate,
            properties: {
              ...item
            },
            style: {
              radius: 6,
              showStroke: false,
              fillColor: this.getEcoLossColor(item.properties.Eco_loss)
            }
          }));

          // 添加到聚合图层
          this.mapInstance.clusterMakerLayer.addMarkers(markers);
          this.mapInstance.clusterMakerLayer.setMinZoom(1);
          this.mapInstance.clusterMakerLayer.setMaxZoom(18);
        }

        // 根据标记点勾选状态添加标记点
        if (this.showMarkers) {
          const markers = filteredData.map(item => ({
            coordinates: item.coordinate,
            properties: {
              ...item
            },
            style: {
              radius: (1 - item.properties.Eco_Intensity) * 15,
              showStroke: false,
              fillColor: this.getEcoLossColor(item.properties.Cumulative_loss)
            }
          }));

          // 添加到标记图层
          this.mapInstance.markerLayer.addMarkers(markers);
          this.mapInstance.markerLayer.setMinZoom(1);
          this.mapInstance.markerLayer.setMaxZoom(18);
        }
      });
    },
    //添加标记点图层
    addMarkerLayer(data) {
      if (!this.mapInstance) return;
      
      // 清除现有的图层
      if(this.mapInstance && this.mapInstance.markerLayer) {
        this.mapInstance.markerLayer.clearMarkers();
      }
      // 线性插值函数，将MaxLoss从1-100映射到不同半径，1-20区间变化大，20-100区间变化小
      function mapMaxLossToRadius(maxLoss) {
        if (maxLoss <= 20) {
          // 1~20 映射到 5~15
          const minLoss = 1, maxLoss20 = 20;
          const minRadius = 0.1, maxRadius = 0.25;
          return minRadius + (maxLoss - minLoss) * (maxRadius - minRadius) / (maxLoss20 - minLoss);
        } else {
          // 20~100 映射到 15~20
          const minLoss = 20, maxLoss100 = 100;
          const minRadius = 0.25, maxRadius = 0.35;
          return minRadius + (maxLoss - minLoss) * (maxRadius - minRadius) / (maxLoss100 - minLoss);
        }
      }

      // 线性插值函数，将MaxLoss从1-100映射到不同半径，1-20区间变化大，20-100区间变化小
      function mapMaxLossToRadiusAll(maxLoss) {
        if (maxLoss <= 20) {
          // 1~20 映射到 5~15
          const minLoss = 1, maxLoss20 = 50;
          const minRadius = 0.1, maxRadius = 0.2;
          return minRadius + (maxLoss - minLoss) * (maxRadius - minRadius) / (maxLoss20 - minLoss);
        } else {
          // 20~100 映射到 15~20
          const minLoss = 50, maxLoss100 = 100;
          const minRadius = 0.2, maxRadius = 0.3;
          return minRadius + (maxLoss - minLoss) * (maxRadius - minRadius) / (maxLoss100 - minLoss);
        }
      }

      const markers = data.map(item => ({
        coordinates: item.coordinate,
        properties: {
          ...item
        },
        style: {
          iconUrl: `/src/assets/icons/${this.shapeMap[item.properties.WorstSector]}.png`,
          iconScale: this.selectAllChecked? mapMaxLossToRadiusAll(item.properties.MaxLoss): mapMaxLossToRadius(item.properties.MaxLoss),
        }
      }));
      this.mapInstance.markerLayer.addMarkers(markers);
      this.mapInstance.markerLayer.setMinZoom(1);
      this.mapInstance.markerLayer.setMaxZoom(18);
      this.exportUkData = data;
    },
    // 添加获取分类颜色的辅助方法
    getEcoLossColor(ecoLoss) {
      // RdBu_r色系渐变 (蓝色到白色到红色)
      const min = 1;
      const max = 10;
      const value = Math.max(min, Math.min(max, parseFloat(ecoLoss)));
      const percent = (value - min) / (max - min);
      
      let r, g, b;
      if (percent <= 0.167) {
        // 深蓝色到蓝色
        const p = percent * 6;
        r = Math.round(5 + (33 - 5) * p);
        g = Math.round(48 + (102 - 48) * p);
        b = Math.round(97 + (172 - 97) * p);
      } else if (percent <= 0.333) {
        // 蓝色到浅蓝色
        const p = (percent - 0.167) * 6;
        r = Math.round(33 + (103 - 33) * p);
        g = Math.round(102 + (169 - 102) * p);
        b = Math.round(172 + (207 - 172) * p);
      } else if (percent <= 0.5) {
        // 浅蓝色到白色
        const p = (percent - 0.333) * 6;
        r = Math.round(103 + (247 - 103) * p);
        g = Math.round(169 + (247 - 169) * p);
        b = Math.round(207 + (247 - 207) * p);
      } else if (percent <= 0.667) {
        // 白色到浅红色
        const p = (percent - 0.5) * 6;
        r = Math.round(247 - (247 - 239) * p);
        g = Math.round(247 - (247 - 138) * p);
        b = Math.round(247 - (247 - 98) * p);
      } else if (percent <= 0.833) {
        // 浅红色到红色
        const p = (percent - 0.667) * 6;
        r = Math.round(239 - (239 - 214) * p);
        g = Math.round(138 - (138 - 96) * p);
        b = Math.round(98 - (98 - 77) * p);
      } else {
        // 红色到深红色
        const p = (percent - 0.833) * 6;
        r = Math.round(214 - (214 - 178) * p);
        g = Math.round(96 - (96 - 24) * p);
        b = Math.round(77 - (77 - 43) * p);
      }
      return `rgba(${r},${g},${b},0.85)`;
    },
    /**
     * 定位到指定场景的线条
     * @param {Object} param 场景参数
     */
    zoomToSimulation(param) {
      if (param.active && param.features.length > 0) {
        this.mapInstance.flowLinesLayer.zoomToFlowLines(param.features, {
          padding: 100,
          duration: 1000
        });
      }
    },
    // 转换数据为GeoJSON格式
    convertToGeoJSON() {
      this.heatmapData.features = powerOutage.map(item => {
        // 根据影响程度计算权重
        const weight = this.calculateWeight(item);
        
        return {
          type: 'Feature',
          properties: {
            weight: weight,
            ...item
          },
          geometry: {
            type: 'Point',
            coordinates: item.coordinate
          }
        };
      });
    },

    // 计算热力图权重
    calculateWeight(item) {
      // 根据影响程度计算权重
      let weight = 0.2; // 基础权重

      // 根据影响人口调整权重
      if (item.Eco_loss) {
        weight += item.Eco_loss / 10000; // 每10000增加0.1的权重
      }

      // 根据持续时间调整权重
      // if (item.Total_Daily_Period) {
      //   weight += item.Total_Daily_Period / 24; // 每24小时增加0.1的权重
      // }

      // 限制权重在0-1之间
      return Math.min(Math.max(weight, 0), 1);
    },

    // 获取当前筛选后的数据
    getFilteredData() {
      let allData = [];
      
      // 遍历选中的分类
      this.selectedCategories.forEach(categoryId => {
        const data = this.categoryDataMap[categoryId];
        if (!data) return;

        // 根据选中的时间和行业类型过滤数据
        const filteredData = data.filter(item => {
          // 时间过滤
          const timeMatch = item['Incident Time'] === parseInt(this.selectedTime);
          
          // 行业类型过滤
          const industryMatch = this.selectedIndustries.some(industry => {
            return item['Industry Tags'] && item['Industry Tags'].includes(industry);
          });

          return timeMatch && industryMatch;
        });

        allData = allData.concat(filteredData);
      });

      return allData;
    },

    // 添加点击外部关闭选择器的方法
    handleClickOutside(event) {
      const exportSelector = this.$el.querySelector('.export-selector');
      if (exportSelector && !exportSelector.contains(event.target)) {
        this.showExportOptions = false;
      }
    },

    // 修改导出数据方法，添加登录检查
    exportData(format) {
      if (!this.isLoggedIn) {
        ElMessage.warning('Please login before exporting data')
        return
      }

      this.showExportOptions = false
      const data = this.exportUkData
      
      if (format === 'csv') {
        if (data.length === 0) {
          ElMessage.warning('No data available for export')
          return
        }
        this.exportCSV(data)
      } else if (format === 'geojson') {
        if (data.length === 0) {
          ElMessage.warning('No data available for export')
          return
        }
        this.exportGeoJSON(data)
      } else if (format === 'png') {
        this.exportPNG()
      } else if (format === 'pdf') {
        this.exportPDF()
      }
    },

    // 导出 CSV
    exportCSV(data) {
      // 收集所有properties里的字段
      const fields = new Set();
      data.forEach(item => {
        if (item.properties) {
          Object.keys(item.properties).forEach(key => fields.add(key));
        }
      });
      // 创建 CSV 头部
      const headers = Array.from(fields);
      const csvContent = [
        headers.join(','),
        ...data.map(item => 
          headers.map(header => {
            const value = item.properties ? item.properties[header] : '';
            // 处理包含逗号的字段
            return typeof value === 'string' && value.includes(',') 
              ? `"${value}"` 
              : value;
          }).join(',')
        )
      ].join('\n');

      // 创建下载链接
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `export_${this.selectedTime}_${new Date().toISOString().split('T')[0]}.csv`;
      link.click();
    },

    // 导出 GeoJSON
    exportGeoJSON(data) {
      const geojson = {
        type: 'FeatureCollection',
        features: data.map(item => ({
          type: 'Feature',
          properties: {
            ...item.properties
          },
          geometry: {
            type: 'Point',
            coordinates: item.coordinate
          }
        }))
      };

      // 创建下载链接
      const blob = new Blob([JSON.stringify(geojson, null, 2)], { type: 'application/json' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `export_${this.selectedTime}_${new Date().toISOString().split('T')[0]}.geojson`;
      link.click();
    },

    // 添加 PNG 导出方法
    async exportPNG() {
      try {
        // 获取地图容器
        const mapContainer = document.querySelector('.ol-viewport');
        if (!mapContainer) {
          alert('无法找到地图容器');
          return;
        }

        // 使用 html2canvas 截图
        const canvas = await html2canvas(mapContainer, {
          useCORS: true,
          scale: 2, // 提高清晰度
          backgroundColor: null,
          logging: false
        });

        // 转换为图片并下载
        const link = document.createElement('a');
        link.download = `map_export_${this.selectedTime}_${new Date().toISOString().split('T')[0]}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
      } catch (error) {
        console.error('导出 PNG 失败:', error);
        alert('导出 PNG 失败，请重试');
      }
    },

    // 添加 PDF 导出方法
    async exportPDF() {
      try {
        // 获取地图容器
        const mapContainer = document.querySelector('.ol-viewport');
        if (!mapContainer) {
          alert('无法找到地图容器');
          return;
        }

        // 使用 html2canvas 截图
        const canvas = await html2canvas(mapContainer, {
          useCORS: true,
          scale: 2, // 提高清晰度
          backgroundColor: null,
          logging: false
        });

        // 创建 PDF 文档
        const pdf = new jsPDF({
          orientation: 'landscape',
          unit: 'px',
          format: [canvas.width, canvas.height]
        });

        // 将图片添加到 PDF
        const imgData = canvas.toDataURL('image/png');
        pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);

        // 下载 PDF
        pdf.save(`map_export_${this.selectedTime}_${new Date().toISOString().split('T')[0]}.pdf`);
      } catch (error) {
        console.error('导出 PDF 失败:', error);
        alert('导出 PDF 失败，请重试');
      }
    },

    // 处理登录模态框关闭
    handleLoginModalClose(visible) {
      this.showLoginModal = visible
    },

    // 修改登录按钮点击事件
    handleLoginClick() {
      this.showLoginModal = true
    },

    formatTimeTooltip(val) {
      return this.timeTags[val].name;
    },

    onTimeInput(event, idx) {
      // 输入框输入后联动滑块
      let val = parseInt(event.target.value)
      if (isNaN(val)) return
      val = Math.max(2000, Math.min(2026, val))
      // 找到对应的 timeTags 索引
      const tagIdx = this.timeTags.findIndex(t => t.id === String(val))
      if (tagIdx === -1) return
      this.selectedTimeIndex = tagIdx
      this.handleTimeChange(tagIdx)
    },

    // 全选/全不选事件分类
    handleSelectAllChange(val) {
      function getAllLeafIds(nodes) {
        let ids = [];
        nodes.forEach(node => {
          if (node.children && node.children.length > 0) {
            ids = ids.concat(getAllLeafIds(node.children));
          } else {
            ids.push(node.id);
          }
        });
        return ids;
      }
      if (val) {
        this.selectedCategories = getAllLeafIds(this.categoryTags);
      } else {
        this.selectedCategories = [];
      }
      this.handleCategoryChange();
    },
  }
}
</script>

<style scoped>
.sidebar-container {
  @apply relative;
  height: 100%;
}

.map-sidebar {
  @apply bg-black/95 backdrop-blur-md border-r border-gray-700;
  transition: all 0.3s ease;
  position: relative;
  width: 256px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
}

.map-sidebar.collapsed {
  width: 0;
  border-right: none;
  border-left: none;
}

.sidebar-content {
  @apply p-4 bg-black/50 mt-20;
  height: calc(100% - 80px);
  overflow-y: auto;
  overflow-x: hidden;
  max-height: calc(100vh - 80px); /* 确保内容超出时显示滚动条 */
  scrollbar-width: thin; /* 适用于Firefox */
  scrollbar-color: rgba(75, 85, 99, 0.8) transparent; /* 适用于Firefox */
}

/* 标签区域样式 */
.tags-section {
  @apply space-y-6;
}

.section-title {
  @apply text-gray-300 text-sm font-medium mb-2;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
  position: relative;
  display: inline-block;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #60a5fa;
  transition: width 0.3s ease;
}

.section-title:hover::after {
  width: 100%;
}

.section-title.primary {
  @apply text-lg font-bold text-white;
  text-shadow: 0 0 15px rgba(255, 255, 255, 0.2);
}

.section-title.secondary {
  @apply text-xs text-gray-400;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.1);
}

/* 开关容器样式 */
.switch-container {
  @apply space-y-4;
  @apply bg-gray-800/10 rounded-lg;
  backdrop-filter: blur(8px);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
}

.switch-item {
  @apply flex items-center justify-between;
  @apply rounded-md transition-all duration-200;
  @apply hover:bg-gray-800/20;
}

.switch-label {
  @apply text-gray-300 text-sm font-medium;
  @apply transition-all duration-200;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
}

.switch-item:hover .switch-label {
  @apply text-gray-200;
  text-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
}

/* 开关样式 */
.switch {
  @apply relative inline-block w-12 h-6;
}

.switch input {
  @apply opacity-0 w-0 h-0;
}

.slider {
  @apply absolute cursor-pointer top-0 left-0 right-0 bottom-0;
  @apply bg-gray-800/30 transition-all duration-300;
  @apply rounded-full;
  @apply border border-gray-700;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
}

.slider:before {
  @apply absolute content-[''] h-5 w-5 left-0.5 bottom-0.5;
  @apply bg-gradient-to-br from-gray-400 to-gray-600 transition-all duration-300;
  @apply rounded-full;
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.3);
}

input:checked + .slider {
  @apply bg-gradient-to-r from-gray-600/50 to-gray-800/50;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.2);
}

input:checked + .slider:before {
  @apply transform translate-x-6;
  @apply bg-gradient-to-br from-gray-300 to-gray-500;
  box-shadow: 0 0 12px rgba(255, 255, 255, 0.4);
}

/* 添加悬停效果 */
.switch:hover .slider {
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.2);
}

.switch:hover .slider:before {
  box-shadow: 0 0 12px rgba(255, 255, 255, 0.4);
}

/* 添加点击波纹效果 */
.slider:after {
  @apply absolute content-[''] w-full h-full rounded-full;
  @apply bg-gray-400/20;
  @apply scale-0 opacity-0 transition-all duration-300;
  @apply pointer-events-none;
}

input:checked + .slider:after {
  @apply scale-100 opacity-0;
  animation: ripple 0.6s ease-out;
}

@keyframes ripple {
  0% {
    @apply scale-0 opacity-50;
  }
  100% {
    transform: scale(2);
    @apply opacity-0;
  }
}

/* 其他标签样式 */
.tags-container {
  @apply flex flex-wrap gap-2;
}

.tag-btn {
  @apply px-3 py-1.5 rounded-full text-sm transition-all duration-200;
  @apply bg-gray-800/30 text-gray-300 hover:bg-gray-700/50;
  @apply border border-gray-700;
}

.tag-btn.active {
  @apply bg-gray-600 text-white border-gray-500;
}

/* 滚动条样式 */
.sidebar-content::-webkit-scrollbar {
  @apply w-0.5; /* 缩小宽度 */
}

.sidebar-content::-webkit-scrollbar-track {
  @apply bg-transparent;
}

.sidebar-content::-webkit-scrollbar-thumb {
  @apply bg-gray-700/20 rounded-full; /* 改为深灰色 */
}

.sidebar-content::-webkit-scrollbar-thumb:hover {
  @apply bg-gray-700/30; /* 改为深灰色 */
}

/* 展开/收起按钮样式 */
.toggle-btn {
  @apply absolute p-1 rounded-l-md text-gray-400 hover:text-white hover:bg-gray-800/30 transition-all duration-200;
  @apply bg-black/50 backdrop-blur-sm border border-gray-700;
  width: 20px;
  height: 50px;
  top: 50%;
  transform: translateY(-50%);
  left: 256px;
  z-index: 10;
  transform: rotate(180deg);
}

.toggle-btn.collapsed {
  @apply rounded-r-md rounded-l-none;
  transform: rotate(0deg);
  left: 0;
}

/* 时间轴样式 */
.timeline-container {
  @apply flex flex-col items-center my-4 px-2;
}

:deep(.time-range-slider) {
  @apply w-full;
}

:deep(.el-slider__runway) {
  @apply h-2 bg-gray-500/30;
}

:deep(.el-slider__bar) {
  @apply bg-gray-500/50;
}

:deep(.el-slider__button) {
  @apply w-4 h-4 border-2 border-gray-500 bg-gray-500;
}

:deep(.el-slider__button:hover) {
  @apply border-gray-400 bg-gray-400;
}

:deep(.el-slider__marks-text) {
  @apply text-xs text-gray-300;
}

/* 隐藏标记点 */
:deep(.el-slider__stop),
:deep(.el-slider__marks-stop) {
  @apply hidden;
}

/* 优化标记文本位置 */
:deep(.el-slider__marks) {
  @apply mt-2;
}

:deep(.el-slider__marks-text) {
  @apply transform -translate-x-1/2;
}

/* 优化提示框样式 */
:deep(.el-tooltip__popper) {
  @apply bg-gray-800/95 backdrop-blur-sm border border-gray-700;
  @apply text-xs text-gray-300;
  @apply py-1 px-2;
}

:deep(.el-tooltip__popper .el-popper__arrow::before) {
  @apply bg-gray-800/95 border-gray-700;
}

/* 优化滑块轨道样式 */
:deep(.el-slider__runway) {
  @apply rounded-full;
}

:deep(.el-slider__bar) {
  @apply rounded-full;
}

/* 优化滑块按钮样式 */
:deep(.el-slider__button) {
  @apply rounded-full;
  @apply transition-all duration-200;
  @apply shadow-sm;
}

:deep(.el-slider__button:hover) {
  @apply transform scale-110;
  @apply shadow-md;
}

/* 行业标签样式 */
.industry-container {
  @apply flex flex-col gap-2;
}
.industry-item {
  @apply flex items-center gap-2;
}
.industry-checkbox {
  @apply w-4 h-4 rounded border-gray-700;
}
.industry-label {
  @apply text-sm text-gray-300;
}

.last-updated {
  @apply text-xs text-gray-400 mt-4 text-center;
}

.simulation-section {
  @apply mt-6;
}
.simulation-container {
  @apply space-y-4;
}
.simulation-item {
  @apply flex flex-col gap-2;
}
.simulation-control {
  @apply flex items-center justify-between mb-2;
}
.simulation-label {
  @apply text-sm text-gray-300;
}
.simulation-slider {
  @apply w-full h-2 bg-gray-600/30 rounded-full appearance-none;
  outline: none;
}
.simulation-slider::-webkit-slider-thumb {
  @apply appearance-none w-4 h-4 bg-gray-500 rounded-full cursor-pointer;
}
.simulation-value {
  @apply text-xs text-gray-300 ml-2;
}
.simulation-result {
  @apply mt-4 p-4 rounded-lg text-center text-white;
}

.layer-management {
  @apply mb-6;
}
.layer-container {
  @apply space-y-4;
}
.layer-item {
  @apply flex items-center justify-between;
}
.layer-label {
  @apply text-sm text-gray-300;
}
.layer-checkbox {
  @apply w-4 h-4 rounded border-gray-700;
}
.layer-select {
  @apply bg-gray-800 text-gray-300 rounded p-1;
}

/* 修改开关样式 */
.simulation-item .switch {
  @apply relative inline-block w-12 h-6 ml-auto; /* 添加 ml-auto 使开关靠右 */
}

.simulation-item .slider {
  @apply absolute cursor-pointer top-0 left-0 right-0 bottom-0;
  @apply bg-gray-800/30 transition-all duration-300;
  @apply rounded-full;
  @apply border border-gray-700;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
}

.simulation-item .slider:before {
  @apply absolute content-[''] h-5 w-5 left-0.5 bottom-0.5;
  @apply bg-gradient-to-br from-gray-400 to-gray-600 transition-all duration-300;
  @apply rounded-full;
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.3);
}

.simulation-item input:checked + .slider {
  @apply bg-gradient-to-r from-gray-600/50 to-gray-800/50;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.2);
}

.simulation-item input:checked + .slider:before {
  @apply transform translate-x-6;
  @apply bg-gradient-to-br from-gray-300 to-gray-500;
  box-shadow: 0 0 12px rgba(255, 255, 255, 0.4);
}

.simulation-header {
  @apply flex items-center gap-2;
}

.zoom-btn {
  @apply p-1 rounded-full text-gray-400 hover:text-white hover:bg-gray-800/30 transition-all duration-200;
  @apply bg-black/50 backdrop-blur-sm border border-gray-700;
}

.zoom-btn:hover {
  @apply bg-gray-800/50;
}

.zoom-btn .icon {
  @apply transition-transform duration-200;
}

.zoom-btn:hover .icon {
  transform: scale(1.1);
}

.export-section {
  @apply mt-6;
}

.export-container {
  @apply relative;
}

.export-selector {
  @apply relative;
}

.export-btn {
  @apply flex items-center justify-center gap-2 px-4 py-2 rounded-md w-full;
  @apply bg-blue-600/20 text-blue-400 hover:bg-blue-600/30;
  @apply border border-blue-500/20;
  @apply transition-colors duration-200;
}

.export-btn:hover {
  @apply bg-blue-600/30;
}

.export-icon {
  @apply transition-transform duration-200;
}

.export-btn:hover .export-icon {
  transform: translateY(-2px);
}

.export-options {
  @apply absolute bottom-full left-0 right-0 mb-1;
  @apply bg-gray-800/95 backdrop-blur-sm;
  @apply border border-blue-500/20 rounded-md;
  @apply shadow-lg;
  @apply z-50;
  @apply min-w-[200px];
}

.export-option {
  @apply flex items-center gap-2 px-4 py-2.5 w-full;
  @apply text-gray-300 hover:text-white;
  @apply hover:bg-blue-600/20;
  @apply transition-colors duration-200;
  @apply text-sm;
}

.format-icon {
  @apply text-lg w-6 text-center;
}

.login-section {
  @apply mt-6;
}

.login-btn {
  @apply flex items-center justify-center gap-2 px-4 py-2 rounded-md w-full;
  @apply bg-gray-700/20 text-gray-400 hover:text-white;
  @apply border border-gray-600/20 hover:border-gray-500/30;
  @apply transition-all duration-200;
  @apply text-sm;
}

.login-btn:hover {
  @apply bg-gray-700/30;
}

.login-icon {
  @apply transition-transform duration-200;
}

.login-btn:hover .login-icon {
  transform: translateX(2px);
}

/* 树形选择器样式 */
.category-tree-container {
  @apply mb-4;
}

:deep(.category-tree-select) {
  @apply w-full;
}

:deep(.el-tree-select__popper) {
  @apply bg-gray-800/95 backdrop-blur-sm border border-gray-700;
}

:deep(.el-tree-select__popper .el-tree) {
  @apply bg-transparent;
}

:deep(.el-tree-select__popper .el-tree-node__content) {
  @apply text-gray-300 hover:bg-gray-700/30;
}

:deep(.el-tree-select__popper .el-tree-node.is-current > .el-tree-node__content) {
  @apply bg-gray-700/50 text-white;
}

:deep(.el-tree-select__popper .el-checkbox__inner) {
  @apply bg-gray-700 border-gray-600;
}

:deep(.el-tree-select__popper .el-checkbox__input.is-checked .el-checkbox__inner) {
  @apply bg-blue-500 border-blue-500;
}

:deep(.el-tree-select__popper .el-tree-node__expand-icon) {
  @apply text-gray-400;
}

:deep(.el-tree-select__popper .el-tree-node__expand-icon.expanded) {
  @apply text-gray-300;
}

:deep(.el-tree-select__popper .el-select-dropdown__item) {
  @apply text-gray-300 hover:bg-gray-700/30;
}

:deep(.el-tree-select__popper .el-select-dropdown__item.selected) {
  @apply bg-gray-700/50 text-white;
}

:deep(.el-select__wrapper) {
  @apply bg-black/30 shadow-none;
  @apply hover:border-gray-400/20;
  @apply focus-within:border-gray-400/30;
  @apply transition-colors duration-200;
  border: 1px solid #404040;
}

:deep(.el-input__inner) {
  @apply text-white;
  @apply placeholder:text-white/30;
}

:deep(.el-input__suffix) {
  @apply text-white/50;
}

:deep(.el-select__caret) {
  @apply text-white/50;
  @apply transition-transform duration-200;
}

:deep(.el-select .el-input.is-focus .el-input__wrapper) {
  @apply shadow-none;
  @apply border-white/30;
}

:deep(.el-select-dropdown) {
  @apply bg-black/95 backdrop-blur-sm;
  @apply border border-white/10;
  @apply shadow-lg;
}

:deep(.el-select-dropdown__item) {
  @apply text-white/80;
  @apply hover:bg-white/10;
  @apply transition-colors duration-200;
}

:deep(.el-select-dropdown__item.selected) {
  @apply text-white bg-white/20;
}

:deep(.el-select-dropdown__item.hover) {
  @apply bg-white/10;
}

:deep(.el-select-dropdown__empty) {
  @apply text-white/50;
}

:deep(.el-select__tags) {
  @apply bg-black/50;
  @apply border border-white/10;
  @apply rounded-md;
  @apply px-2 py-1;
}

:deep(.el-tag) {
  @apply bg-white/10;
  @apply border border-white/20;
  @apply text-white;
  @apply rounded-md;
  @apply px-2 py-0.5;
  @apply text-xs;
  @apply transition-colors duration-200;
}

:deep(.el-tag:hover) {
  @apply bg-white/20;
  @apply border-white/30;
}

:deep(.el-tag__close) {
  @apply text-white/50;
  @apply hover:bg-white/20;
  @apply hover:text-white;
  @apply transition-colors duration-200;
}

:deep(.el-select__tags-text) {
  @apply text-white/80;
}

:deep(.el-select .el-input__wrapper.is-focus) {
  @apply border-white/30;
  @apply shadow-none;
}

:deep(.el-select .el-input.is-disabled .el-input__wrapper) {
  @apply bg-black/20;
  @apply border-white/5;
}

:deep(.el-select .el-input.is-disabled .el-input__inner) {
  @apply text-white/30;
}

:deep(.el-select .el-input.is-disabled .el-input__suffix) {
  @apply text-white/30;
}

/* 下拉箭头动画 */
:deep(.el-select .el-input__suffix-inner) {
  @apply transition-transform duration-200;
}

:deep(.el-select.is-focus .el-input__suffix-inner) {
  @apply transform rotate-180;
}

.time-range-inputs {
  display: flex;
  justify-content: center; /* 修改为居中对齐 */
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
}
.time-input-group {
  display: flex;
  align-items: center;
  width: 120px; /* 设置固定宽度 */
}
.right-input {
  justify-content: flex-end;
}
.time-input-label {
  color: #e5e7eb;
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 2px;
  letter-spacing: 0.5px;
  text-align: center;
  text-shadow: none;
  margin-right: 5px;
}
.time-input {
  width: 60px;
  height: 28px;
  padding: 2px 6px;
  border: 1px solid #444a;
  border-radius: 7px;
  font-size: 13px;
  text-align: center;
  background: #181c20;
  color: #fff;
  outline: none;
  box-shadow: none;
  transition: border 0.2s;
}
.time-input:focus {
  border: 1.5px solid #60a5fa;
  box-shadow: 0 0 0 1.5px #60a5fa33;
}
</style> 
