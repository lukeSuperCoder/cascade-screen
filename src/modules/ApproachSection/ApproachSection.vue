<template>
  <div class="container mx-auto px-4 py-16">
    <h2 class="text-4xl font-bold mb-4 text-white">Our Approach</h2>
    <div class="approach-flow flex items-center justify-center gap-0 overflow-x-auto">
      <!-- 节点1：数据获取 -->
      <div class="flow-node group" @mouseenter="activeStep = 0" @mouseleave="activeStep = -1">
        <div class="node-icon data">
          <!-- 数据获取图标 -->
          <svg class="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 21H3V3"/>
            <path d="M21 8L14 15L10 11L3 18"/>
          </svg>
        </div>
        <div class="node-title">Data Infrastructure Building</div>
        <div class="node-desc" :class="{active: activeStep === 0}">Remote Sensing/ Social Survey etc </div>
      </div>
      <!-- 箭头1 -->
      <css-arrow />
      <!-- 节点2：级联风险建模 -->
      <div class="flow-node group" @mouseenter="activeStep = 1" @mouseleave="activeStep = -1">
        <div class="node-icon ai">
          <!-- AI图标 -->
          <svg class="h-8 w-8" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M872.96 601.6c-15.36-10.24-33.28-12.8-51.2-12.8-28.16 0-53.76 10.24-74.24 30.72l-2.56-2.56-89.6-51.2c5.12-17.92 10.24-35.84 10.24-53.76 0-76.8-56.32-138.24-128-151.04V253.44c43.52-10.24 76.8-51.2 76.8-99.84 0-56.32-46.08-102.4-102.4-102.4S409.6 97.28 409.6 153.6c0 48.64 33.28 87.04 76.8 99.84v107.52c-71.68 12.8-128 74.24-128 151.04 0 17.92 2.56 35.84 10.24 53.76l-89.6 51.2-2.56 2.56c-20.48-20.48-48.64-30.72-74.24-30.72-17.92 0-35.84 5.12-51.2 12.8-48.64 28.16-66.56 92.16-38.4 140.8 17.92 33.28 53.76 51.2 89.6 51.2 17.92 0 35.84-5.12 51.2-12.8 40.96-23.04 58.88-71.68 46.08-117.76h2.56l89.6-51.2c28.16 33.28 71.68 56.32 117.76 56.32s89.6-20.48 117.76-56.32l89.6 51.2h2.56c-12.8 43.52 5.12 92.16 46.08 117.76 15.36 10.24 33.28 12.8 51.2 12.8 35.84 0 69.12-17.92 89.6-51.2 33.28-48.64 15.36-112.64-33.28-140.8z" fill="#FFF"></path>
            <path d="M153.6 545.28s2.56 0 0 0c15.36-2.56 28.16-12.8 25.6-28.16V512c0-120.32 66.56-232.96 171.52-291.84 12.8-7.68 17.92-23.04 10.24-35.84-7.68-12.8-23.04-17.92-35.84-10.24C204.8 243.2 128 371.2 128 512v10.24c2.56 12.8 12.8 23.04 25.6 23.04z m519.68-325.12C778.24 279.04 844.8 391.68 844.8 512v5.12c-2.56 12.8 7.68 25.6 23.04 28.16h2.56c12.8 0 23.04-10.24 25.6-23.04V512c0-140.8-76.8-268.8-197.12-335.36-12.8-7.68-28.16-2.56-35.84 10.24-7.68 12.8-2.56 28.16 10.24 33.28z" fill="#FFF"></path>
          </svg>
        </div>
        <div class="node-title">Cascading Risk Modelling</div>
        <div class="node-desc" :class="{active: activeStep === 1}">Machine Learning/ Network Theory etc</div>
      </div>
      <!-- 箭头2 -->
      <css-arrow />
      <!-- 节点3：动态可视化呈现 -->
      <div class="flow-node group" @mouseenter="activeStep = 2" @mouseleave="activeStep = -1">
        <div class="node-icon visual">
          <!-- 可视化图标 -->
          <svg class="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <line x1="22" y1="12" x2="18" y2="12"/>
            <line x1="6" y1="12" x2="2" y2="12"/>
            <line x1="12" y1="6" x2="12" y2="2"/>
            <line x1="12" y1="22" x2="12" y2="18"/>
          </svg>
        </div>
        <div class="node-title">Key Vulnerabilities Identification </div>
        <div class="node-desc" :class="{active: activeStep === 2}">Pinch Points/ Major Channels etc </div>
      </div>
      <!-- 箭头3 -->
      <css-arrow />
      <!-- 节点4：策略决策支持 -->
      <div class="flow-node group" @mouseenter="activeStep = 3" @mouseleave="activeStep = -1">
        <div class="node-icon decision">
          <!-- 决策支持图标 -->
          <svg class="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18457 2.99721 7.13633 4.39828 5.49707C5.79935 3.85782 7.69279 2.71538 9.79619 2.24015C11.8996 1.76491 14.1003 1.98234 16.07 2.86"/>
            <path d="M22 4L12 14.01L9 11.01"/>
          </svg>
        </div>
        <div class="node-title">Effective Strategic Management</div>
        <div class="node-desc" :class="{active: activeStep === 3}">Adaptation Priorities/ Insurance ect</div>
      </div>
    </div>
    <p class="text-lg text-gray-300 max-w-2xl mt-4">
      
    </p>
    <button @click="openApproachPage" class="text-write hover:text-blue-500 transition-colors duration-300 relative group py-2 cyber-link">
            <span>Learn more about our approach &rarr;</span>
            <span class="cyber-highlight"></span>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import CssArrow from '../../components/CssArrow.vue'
import router from '../../router'
export default defineComponent({
  name: 'ApproachSection',
  components: {
    CssArrow
  },
  setup() {
    const activeStep = ref(-1)
    
    // 添加缺少的方法
    const openApproachPage = () => {
      const routeData = router.resolve({ name: 'Empty' });
      window.open(routeData.href, '_blank');
    }
    
    return { 
      activeStep,
      openApproachPage
    }
  }
})
</script>

<style scoped>
.approach-flow-container {
  border-radius: 24px;
  box-shadow: 0 4px 32px 0 #0ea5e980, 0 1.5px 0 0 #1e293b;
  padding: 2.5rem 1.5rem;
  position: relative;
  overflow: hidden;
}
.approach-flow {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  width: 100%;
  min-width: 320px;
  overflow-x: auto;
}
.flow-node {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 1.2rem 1.2rem 1.2rem;
  border-radius: 18px;
  box-shadow: 0 2px 16px 0 #0ea5e930;
  backdrop-filter: blur(8px);
  border: 1.5px solid rgba(96,165,250,0.08);
  margin: 0 0.5rem;
  transition: box-shadow 0.3s, background 0.3s, border 0.3s;
  position: relative;
  z-index: 1;
  cursor: pointer;
}
.flow-node .node-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #1e293b 60%, #2563eb 100%);
  width: 56px;
  height: 56px;
  box-shadow: 0 0 16px 2px #60a5fa55, 0 0 0 4px #2563eb22;
  transition: box-shadow 0.4s, background 0.4s;
  border: 1.5px solid #60a5fa55;
  position: relative;
}
.flow-node:hover .node-icon,
.flow-node:focus .node-icon {
  background: linear-gradient(135deg, #2563eb 0%, #60a5fa 100%);
  box-shadow: 0 0 32px 8px #60a5fa99, 0 0 0 6px #2563eb44;
  border-color: #60a5fa;
}
.node-title {
  font-size: 1.15rem;
  font-weight: 700;
  color: #fff;
  margin-top: 0.25rem;
  letter-spacing: 0.04em;
  text-shadow: 0 2px 8px #0ea5e955;
  transition: color 0.3s, text-shadow 0.3s;
  text-align: center;
}
.flow-node:hover .node-title,
.flow-node:focus .node-title {
  color: #60a5fa;
  text-shadow: 0 0 16px #60a5fa99;
}
.node-desc {
  font-size: 0.98rem;
  color: #7dd3fc;
  margin-top: 0.5rem;
  min-width: 120px;
  min-height: 1.5em;
  opacity: 0.2;
  transition: opacity 0.3s, color 0.3s;
  pointer-events: none;
  text-align: center;
  font-family: 'JetBrains Mono', 'Fira Mono', 'Consolas', monospace;
  letter-spacing: 0.01em;
}
.node-desc.active {
  opacity: 1;
  color: #bae6fd;
  pointer-events: auto;
}
@media (max-width: 900px) {
  .approach-flow {
    flex-wrap: wrap;
    gap: 16px;
  }
  .flow-node {
    min-width: 140px;
    padding: 12px 4px;
  }
}
</style>
