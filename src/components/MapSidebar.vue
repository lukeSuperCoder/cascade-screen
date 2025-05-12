<template>
  <div class="sidebar-container">
    <div class="map-sidebar" :class="{ 'collapsed': isCollapsed }">
      <!-- 侧边栏内容 -->
      <div class="sidebar-content" :class="{ 'collapsed': isCollapsed }">
        <div class="layer-management">
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
          <h3 class="section-title primary">Category Tags</h3>
          <div class="switch-container">
            <div v-for="tag in categoryTags" 
                 :key="tag.id" 
                 class="switch-item">
              <span class="switch-label">{{ tag.name }}</span>
              <label class="switch">
                <input 
                  type="checkbox" 
                  :checked="selectedCategories.includes(tag.id)"
                  @change="toggleCategory(tag.id)"
                >
                <span class="slider"></span>
              </label>
            </div>
          </div>

          <h3 class="section-title primary">Time Range</h3>
          <div class="timeline-container">
            <input 
              type="range" 
              :min="0" 
              :max="timeTags.length - 1" 
              :value="timeTags.findIndex(tag => tag.id === selectedTime)" 
              @input="handleTimeChange" 
              class="timeline-slider"
            />
            <div class="timeline-labels">
              <span v-for="tag in timeTags" :key="tag.id" class="timeline-label">{{ tag.name }}</span>
            </div>
          </div>

          <h3 class="section-title primary">Industry Tags</h3>
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
          </div>
          <div class="simulation-section">
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
  </div>
</template>

<script>
import powerOutage from '@/assets/datas/power.json'
import traffic from '@/assets/datas/traffic.json'
import flood from '@/assets/datas/flood.json'
import communication from '@/assets/datas/communication.json'
import supply from '@/assets/datas/supply.json'
import cyber_line from '@/assets/datas/cyber_line.json'
import earthquake_line from '@/assets/datas/earthquake_line.json'
import weather_line from '@/assets/datas/weather_line.json'

export default {
  name: 'MapSidebar',
  data() {
    return {
      mapInstance: null,
      isCollapsed: true,
      selectedCategories: [],
      selectedTime: '2023',
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
        { id: 'power', name: 'Power Outage', color: 'red' },
        { id: 'traffic', name: 'Traffic Disruption', color: 'blue' },
        { id: 'flood', name: 'Flood', color: 'green' },
        { id: 'communication', name: 'Communication Disruption', color: 'yellow' },
        { id: 'supply', name: 'Supply Chain Disruption', color: 'purple' }
      ],
      timeTags: [
        { id: '2023', name: '2023' },
        { id: '2024', name: '2024' },
        { id: '2025', name: '2025' },
        { id: '2026', name: '2026' }
      ],
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
      }
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
    }
  },
  mounted() {
    // 等待地图实例初始化
    this.initMapInstance();
    // 转换数据为GeoJSON格式
    this.convertToGeoJSON();
  },
  methods: {
    initMapInstance() {
      // 检查地图实例是否已初始化
      if (window.olMap) {
        this.mapInstance = window.olMap;
        setTimeout(() => {
          this.showHeatmap = true;
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
    toggleCategory(id) {
      const index = this.selectedCategories.indexOf(id);
      if (index === -1) {
        this.selectedCategories.push(id);
      } else {
        this.selectedCategories.splice(index, 1);
      }
      this.$emit('category-change', this.selectedCategories);
      this.updateMapLayers();
    },
    handleTimeChange(event) {
      const index = parseInt(event.target.value);
      const selectedTag = this.timeTags[index];
      this.selectedTime = selectedTag.id;
      this.$emit('time-change', selectedTag.id);
      this.updateMapLayers();
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
            // 检查数据中的 Industry Tags 字段是否包含当前选中的行业
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
              radius: 20,
              blur: 30,
              gradient: [
                'rgba(0, 255, 255, 0)',
                'rgba(0, 255, 255, 0.5)',
                'rgba(0, 255, 255, 0.8)',
                'rgba(0, 255, 255, 1)',
                'rgba(0, 255, 0, 1)',
                'rgba(255, 255, 0, 1)',
                'rgba(255, 0, 0, 1)'
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
              fillColor: this.categoryTags.find(tag => tag.id === categoryId).color
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
              radius: 6,
              showStroke: false,
              fillColor: this.categoryTags.find(tag => tag.id === categoryId).color
            }
          }));

          // 添加到标记图层
          this.mapInstance.markerLayer.addMarkers(markers);
          this.mapInstance.markerLayer.setMinZoom(1);
          this.mapInstance.markerLayer.setMaxZoom(18);
        }
      });
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
      let weight = 0.5; // 基础权重

      // 根据影响范围调整权重
      if (item.affectedArea) {
        weight += item.affectedArea / 1000; // 每1000平方公里增加0.1的权重
      }

      // 根据影响人口调整权重
      if (item.affectedPopulation) {
        weight += item.affectedPopulation / 10000; // 每10000人增加0.1的权重
      }

      // 根据持续时间调整权重
      if (item.duration) {
        weight += item.duration / 24; // 每24小时增加0.1的权重
      }

      // 限制权重在0-1之间
      return Math.min(Math.max(weight, 0), 1);
    }
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
  @apply flex flex-col items-center my-4;
}
.timeline-slider {
  @apply w-full h-2 bg-gray-500/30 rounded-full appearance-none;
  outline: none;
}
.timeline-slider::-webkit-slider-thumb {
  @apply appearance-none w-4 h-4 bg-gray-500 rounded-full cursor-pointer;
}
.timeline-labels {
  @apply flex justify-between w-full mt-2;
}
.timeline-label {
  @apply text-xs text-gray-300;
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
</style> 