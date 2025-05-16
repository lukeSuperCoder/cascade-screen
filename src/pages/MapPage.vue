<template>
  <div class="map-page">
    <!-- 顶部导航栏 -->
    <NavBar onlyLogo />
    
    <!-- 主体内容区 -->
    <div class="map-content">
      <!-- 左侧菜单 -->
      <MapSidebar
        ref="sidebar"
        @layer-toggle="handleLayerToggle"
        @tool-click="handleToolClick"
      />
      
      <!-- 右侧地图区域 -->
      <div class="map-container">
        <screenMap 
          ref="mapComponent" 
          @map-ready="handleMapReady"
        />
        <!-- 热力图图例 -->
        <!-- <HeatMapLegend
          v-if="showHeatMapLegend"
          :gradient="heatMapGradient"
          :min-value="heatMapMinValue"
          :max-value="heatMapMaxValue"
        /> -->
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import ScreenMap from '@/components/ScreenMap.vue'
import MapSidebar from '@/components/MapSidebar.vue'
import HeatMapLegend from '@/components/HeatMapLegend.vue'

export default {
  name: 'MapPage',
  components: {
    NavBar,
    ScreenMap,
    MapSidebar,
    HeatMapLegend
  },
  data() {
    return {
      showHeatMapLegend: true,
      heatMapGradient: ['rgba(0, 255, 255, 0)',
                'rgba(0, 255, 255, 0.5)',
                'rgba(0, 255, 255, 0.8)',
                'rgba(0, 255, 255, 1)',
                'rgba(0, 255, 0, 1)',
                'rgba(255, 255, 0, 1)',
                'rgba(255, 0, 0, 1)'],
      heatMapMinValue: 0,
      heatMapMaxValue: 1
    }
  },
  methods: {
    handleLayerToggle({ layerId, active }) {
      // 处理图层显示/隐藏
      console.log('Layer toggle:', layerId, active);
      // 如果是热力图图层，控制图例显示
      if (layerId.startsWith('heatmap')) {
        this.showHeatMapLegend = active;
        // 如果激活热力图，更新图例配置
        if (active && this.$refs.mapComponent) {
          const layer = this.$refs.mapComponent.getLayer(layerId);
          if (layer) {
            const config = layer.getProperties();
            this.heatMapGradient = config.gradient || this.heatMapGradient;
            this.heatMapMinValue = config.minWeight || this.heatMapMinValue;
            this.heatMapMaxValue = config.maxWeight || this.heatMapMaxValue;
          }
        }
      }
    },
    handleToolClick(toolId) {
      // 处理工具点击
      console.log('Tool clicked:', toolId);
      // TODO: 根据工具ID执行相应操作
    },
    handleMapReady(mapInstance) {
      // 当地图初始化完成时，将地图实例传递给侧边栏组件
      if (this.$refs.sidebar) {
        this.$refs.sidebar.mapInstance = mapInstance;
      }
    }
  }
}
</script>

<style scoped>
.map-page {
  @apply w-screen h-screen flex flex-col bg-black;
}

.map-content {
  @apply flex-1 flex relative;
  height: calc(100vh - 64px); /* 减去导航栏高度 */
}

.map-container {
  @apply flex-1 relative;
}

/* 确保地图容器内的screenMap组件正确显示 */
.map-container :deep(.screen-map) {
  @apply absolute inset-0;
}
</style> 