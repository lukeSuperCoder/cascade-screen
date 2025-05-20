<template>
    <div class='screen-map' id="olmap">
      <!-- 地图控制按钮 -->
      <div class="absolute top-20 right-4 z-20 flex flex-col space-y-2">
        <button @click="handleZoomIn" class="w-8 h-8 bg-blue-950/70 backdrop-blur-sm border border-blue-900/50 rounded-md flex items-center justify-center text-white hover:bg-blue-900/50 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zoom-in w-4 h-4">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" x2="16.65" y1="21" y2="16.65"></line>
            <line x1="11" x2="11" y1="8" y2="14"></line>
            <line x1="8" x2="14" y1="11" y2="11"></line>
          </svg>
        </button>
        <button @click="handleZoomOut" class="w-8 h-8 bg-blue-950/70 backdrop-blur-sm border border-blue-900/50 rounded-md flex items-center justify-center text-white hover:bg-blue-900/50 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zoom-out w-4 h-4">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" x2="16.65" y1="21" y2="16.65"></line>
            <line x1="8" x2="14" y1="11" y2="11"></line>
          </svg>
        </button>
        <button @click="handleLocateMe" class="w-8 h-8 bg-blue-950/70 backdrop-blur-sm border border-blue-900/50 rounded-md flex items-center justify-center text-white hover:bg-blue-900/50 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-locate w-4 h-4">
            <line x1="2" x2="5" y1="12" y2="12"></line>
            <line x1="19" x2="22" y1="12" y2="12"></line>
            <line x1="12" x2="12" y1="2" y2="5"></line>
            <line x1="12" x2="12" y1="19" y2="22"></line>
            <circle cx="12" cy="12" r="7"></circle>
          </svg>
        </button>
      <button @click="handleFullScreen" class="w-8 h-8 bg-blue-950/70 backdrop-blur-sm border border-blue-900/50 rounded-md flex items-center justify-center text-white hover:bg-blue-900/50 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-maximize w-4 h-4">
          <path d="M8 3H5a2 2 0 0 0-2 2v3"></path>
          <path d="M21 8V5a2 2 0 0 0-2-2h-3"></path>
          <path d="M3 16v3a2 2 0 0 0 2 2h3"></path>
          <path d="M16 21h3a2 2 0 0 0 2-2v-3"></path>
        </svg>
      </button>
      </div>

      <!-- 弹出框 -->
      <div v-if="showPopup" class="popup-container" :style="popupStyle">
        <div class="popup-content">
          <div class="popup-header">
            <h3 class="text-lg font-medium">Details</h3>
            <button @click="closePopup" class="close-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <div class="popup-body">
            <div class="info-item">
              <span class="label">Eco_loss:</span>
              <span class="value">{{ popupData.ecoLoss }}</span>
            </div>
            <div class="info-item">
              <span class="label">Incident Time:</span>
              <span class="value">{{ popupData.incidentTime }}</span>
            </div>
            <div class="info-item">
              <span class="label">Month:</span>
              <span class="value">{{ popupData.month }}</span>
            </div>
            <div class="info-item">
              <span class="label">Total_Daily_Period:</span>
              <span class="value">{{ popupData.totalDailyPeriod }}</span>
            </div>
            <div class="info-item">
              <span class="label">nuts218cd:</span>
              <span class="value">{{ popupData.nuts218cd }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { OlMap } from '@/olmap/index'

  export default {
    components: {},
    data() {
      return {
        mapInstance:null,
        popupHtml:'<div class="popup-content"></div>',
        showPopup: false,
        popupData: null,
        popupStyle: {
          top: '0px',
          left: '0px'
        }
      };
    },
    props:{
      data:{
        type:Array,
        default:()=>[]
      }
    },
    computed: {},
    methods: {
      initMap(){
        let that = this;
        let options = {
          targetId: 'olmap',
          baseMapName: 'OSM_DARK',
          center: [-1.7370224109938552,54.91845581490148],
          minZoom: 3,
          zoom: 5.5
        }
        this.mapInstance = new OlMap('olmap',options);
        this.mapInstance.view.setMinZoom(3);
        window.olMap = this.mapInstance;
        // 触发地图初始化完成事件
        this.$emit('map-ready', this.mapInstance);

        // 聚类点击事件
        this.mapInstance.clusterMakerLayer.setOnClick((featureData, event) => {
          if(featureData.length > 0){
            if(featureData[0].type === 'cluster'){
              this.mapInstance.view.setCenter(featureData[0].geometry);
              this.mapInstance.view.zoomIn();
              this.showPopup = false;
            }
          }
        });
        // 点标记点击事件
        this.mapInstance.markerLayer.setOnClick(async (featureData, event) => {
          const zoom = this.mapInstance.view.getZoom();
          if(featureData.type === 'marker' && featureData.properties){
            const data = featureData.properties.properties;
            this.popupData = {
              name: 'Details',
              ecoLoss: data.Eco_loss ? `${data.Eco_loss}` : 'Unknown',
              incidentTime: data['Incident Time'] || 'Unknown',
              month: data.Month || 'Unknown',
              totalDailyPeriod: data.Total_Daily_Period ? `${data.Total_Daily_Period}` : 'Unknown',
              nuts218cd: data.nuts218cd || 'Unknown'
            };
            this.showPopup = true;
            
            // 计算弹出框位置
            const mapElement = document.getElementById('olmap');
            const rect = mapElement.getBoundingClientRect();
            const x = event.pixel[0] + rect.left;
            const y = event.pixel[1] + rect.top - 10; // 向上偏移10px
            
            this.popupStyle = {
              top: `${y}px`,
              left: `${x}px`
            };
          }
        });

        // 热力图点击事件
        this.mapInstance.heatMapLayer.setOnClick((featureData, event) => {
          if (featureData.type === 'heatmap' && featureData.properties) {
            const data = featureData.properties;
            this.popupData = {
              name: 'Power Outage Details',
              ecoLoss: data.Eco_loss ? `${data.Eco_loss}` : 'Unknown',
              incidentTime: data['Incident Time'] || 'Unknown',
              month: data.Month || 'Unknown',
              totalDailyPeriod: data.Total_Daily_Period ? `${data.Total_Daily_Period}` : 'Unknown',
              nuts218cd: data.nuts218cd || 'Unknown'
            };
            this.showPopup = true;
            
            // 计算弹出框位置
            const mapElement = document.getElementById('olmap');
            const rect = mapElement.getBoundingClientRect();
            const x = event.pixel[0] + rect.left;
            const y = event.pixel[1] + rect.top - 10;
            
            this.popupStyle = {
              top: `${y}px`,
              left: `${x}px`
            };
          }
        });
      },
      async getListById(id){
        const res = await currentGETById('getListById',id);
        if(res.code===200 && res.data){
          return res.data
        }else{
          return null
        }
      },
      // 新增地图控制方法
      handleZoomIn() {
        if (this.mapInstance && this.mapInstance.view) {
          this.mapInstance.view.zoomIn();
        }
      },
      handleZoomOut() {
        if (this.mapInstance && this.mapInstance.view) {
          this.mapInstance.view.zoomOut();
        }
      },
      handleLocateMe() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const { longitude, latitude } = position.coords;
              if (this.mapInstance && this.mapInstance.view) {
                this.mapInstance.view.setCenter([longitude, latitude]);
                this.mapInstance.view.setZoom(12); // 设置合适的缩放级别
              }
            },
            (error) => {
              console.error('获取位置失败:', error);
            }
          );
        }
      },
      // 处理全屏功能
      handleFullScreen() {
        const mapElement = document.getElementById('olmap');
        if (!mapElement) return;

        if (!document.fullscreenElement) {
          // 进入全屏
          if (mapElement.requestFullscreen) {
            mapElement.requestFullscreen();
          } else if (mapElement.webkitRequestFullscreen) { // Safari
            mapElement.webkitRequestFullscreen();
          } else if (mapElement.msRequestFullscreen) { // IE11
            mapElement.msRequestFullscreen();
          }
        } else {
          // 退出全屏
          if (document.exitFullscreen) {
            document.exitFullscreen();
          } else if (document.webkitExitFullscreen) { // Safari
            document.webkitExitFullscreen();
          } else if (document.msExitFullscreen) { // IE11
            document.msExitFullscreen();
          }
        }
      },
      closePopup() {
        this.showPopup = false;
        this.popupData = null;
      }
    },
    created() {
    
    },
    mounted() {
      this.initMap();
    },
    beforeDestroy() { 
    },
  }
  </script>
  
  <style scoped>
  .screen-map {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #000;
  }

  /* 弹出框样式 */
  .popup-container {
    @apply fixed z-50 transform -translate-x-1/2 -translate-y-full;
    min-width: 300px;
    max-width: 400px;
  }

  .popup-content {
    @apply bg-black/90 backdrop-blur-md border border-blue-500/20 rounded-lg shadow-lg;
    @apply text-white;
  }

  .popup-header {
    @apply flex justify-between items-center p-3 border-b border-blue-500/20;
  }

  .popup-header h3 {
    @apply m-0;
  }

  .close-btn {
    @apply p-1 rounded-full hover:bg-blue-500/20 transition-colors;
  }

  .popup-body {
    @apply p-3;
  }

  .info-item {
    @apply mb-2 last:mb-0;
  }

  .info-item .label {
    @apply text-blue-400 mr-2;
  }

  .info-item .value {
    @apply text-gray-300;
  }
  </style>