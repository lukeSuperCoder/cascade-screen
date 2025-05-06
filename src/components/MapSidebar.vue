<template>
  <div class="sidebar-container">
    <div class="map-sidebar" :class="{ 'collapsed': isCollapsed }">

      <!-- 侧边栏内容 -->
      <div class="sidebar-content" :class="{ 'collapsed': isCollapsed }">
        <!-- 内容区域 -->
         Loading
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
export default {
  name: 'MapSidebar',
  data() {
    return {
      isCollapsed: true
    }
  },
  methods: {
    toggleSidebar() {
      this.isCollapsed = !this.isCollapsed;
      this.$emit('sidebar-toggle', this.isCollapsed);
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
  @apply bg-black/95 backdrop-blur-md border-r border-blue-500/20;
  height: 100%;
  transition: all 0.3s ease;
  position: relative;
  width: 256px; /* 16rem = 256px */
}

.map-sidebar.collapsed {
  width: 0;
  border-right: none;
  border-left: none;
}


.sidebar-content {
  @apply p-4 bg-black/50 mt-20;
}

/* 添加滚动条样式 */
.sidebar-content {
  @apply overflow-y-auto;
  max-height: calc(100vh - 120px);
}

.sidebar-content::-webkit-scrollbar {
  @apply w-1;
}

.sidebar-content::-webkit-scrollbar-track {
  @apply bg-transparent;
}

.sidebar-content::-webkit-scrollbar-thumb {
  @apply bg-blue-500/20 rounded-full;
}

.sidebar-content::-webkit-scrollbar-thumb:hover {
  @apply bg-blue-500/30;
}

/* 展开/收起按钮样式 */
.toggle-btn {
  @apply absolute p-1 rounded-l-md text-gray-400 hover:text-white hover:bg-blue-900/30 transition-all duration-200;
  @apply bg-black/50 backdrop-blur-sm border border-blue-500/20;
  width: 20px;
  height: 50px;
  top: 50%;
  transform: translateY(-50%);
  left: 256px; /* 与侧边栏宽度相同 */
  z-index: 10;
  transform: rotate(180deg);
}

.toggle-btn.collapsed {
  @apply rounded-r-md rounded-l-none;
  transform: rotate(0deg);
  left: 0;
}

/* 标题过渡效果 */
.sidebar-title {
  @apply transition-opacity duration-200;
}

.sidebar-title.hidden {
  @apply opacity-0 w-0;
}
</style> 