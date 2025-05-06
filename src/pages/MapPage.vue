<template>
  <div class="map-page">
    <!-- 顶部导航栏 -->
    <NavBar onlyLogo />
    
    <!-- 主体内容区 -->
    <div class="map-content">
      <!-- 左侧菜单 -->
      <MapSidebar
        @layer-toggle="handleLayerToggle"
        @tool-click="handleToolClick"
      />
      
      <!-- 右侧地图区域 -->
      <div class="map-container">
        <screenMap ref="mapComponent" />
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import ScreenMap from '@/components/ScreenMap.vue'
import MapSidebar from '@/components/MapSidebar.vue'

export default {
  name: 'MapPage',
  components: {
    NavBar,
    ScreenMap,
    MapSidebar
  },
  methods: {
    handleLayerToggle({ layerId, active }) {
      // 处理图层显示/隐藏
      console.log('Layer toggle:', layerId, active);
      // TODO: 调用地图组件的方法来控制图层
    },
    handleToolClick(toolId) {
      // 处理工具点击
      console.log('Tool clicked:', toolId);
      // TODO: 根据工具ID执行相应操作
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