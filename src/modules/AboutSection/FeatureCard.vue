<template>
  <div class="feature-wrapper group">
    <!-- 图标 -->
    <div class="icon-container">
      <!-- 地球图标 -->
      <svg v-if="icon === 'globe'" xmlns="http://www.w3.org/2000/svg" class="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
      </svg>
      
      <!-- AI图标 -->
      <svg v-else-if="icon==='ai'" class="feature-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path d="M872.96 601.6c-15.36-10.24-33.28-12.8-51.2-12.8-28.16 0-53.76 10.24-74.24 30.72l-2.56-2.56-89.6-51.2c5.12-17.92 10.24-35.84 10.24-53.76 0-76.8-56.32-138.24-128-151.04V253.44c43.52-10.24 76.8-51.2 76.8-99.84 0-56.32-46.08-102.4-102.4-102.4S409.6 97.28 409.6 153.6c0 48.64 33.28 87.04 76.8 99.84v107.52c-71.68 12.8-128 74.24-128 151.04 0 17.92 2.56 35.84 10.24 53.76l-89.6 51.2-2.56 2.56c-20.48-20.48-48.64-30.72-74.24-30.72-17.92 0-35.84 5.12-51.2 12.8-48.64 28.16-66.56 92.16-38.4 140.8 17.92 33.28 53.76 51.2 89.6 51.2 17.92 0 35.84-5.12 51.2-12.8 40.96-23.04 58.88-71.68 46.08-117.76h2.56l89.6-51.2c28.16 33.28 71.68 56.32 117.76 56.32s89.6-20.48 117.76-56.32l89.6 51.2h2.56c-12.8 43.52 5.12 92.16 46.08 117.76 15.36 10.24 33.28 12.8 51.2 12.8 35.84 0 69.12-17.92 89.6-51.2 33.28-48.64 15.36-112.64-33.28-140.8zM227.84 734.72c-7.68 5.12-15.36 7.68-25.6 7.68-17.92 0-35.84-10.24-43.52-25.6-15.36-25.6-5.12-56.32 17.92-69.12 7.68-5.12 15.36-7.68 25.6-7.68 17.92 0 35.84 10.24 43.52 25.6 15.36 25.6 5.12 56.32-17.92 69.12zM460.8 153.6c0-28.16 23.04-51.2 51.2-51.2s51.2 23.04 51.2 51.2-23.04 51.2-51.2 51.2-51.2-23.04-51.2-51.2zM512 614.4c-56.32 0-102.4-46.08-102.4-102.4S455.68 409.6 512 409.6 614.4 455.68 614.4 512 568.32 614.4 512 614.4z m355.84 102.4c-10.24 15.36-25.6 25.6-43.52 25.6-10.24 0-17.92-2.56-25.6-7.68-25.6-15.36-33.28-46.08-17.92-69.12 10.24-15.36 25.6-25.6 43.52-25.6 10.24 0 17.92 2.56 25.6 7.68 23.04 12.8 30.72 43.52 17.92 69.12z m-174.08 76.8h-7.68l-5.12 2.56c-102.4 61.44-238.08 61.44-340.48 0l-5.12-2.56h-7.68c-15.36 0-25.6 10.24-25.6 25.6 0 10.24 5.12 17.92 12.8 23.04C373.76 878.08 440.32 896 509.44 896S645.12 878.08 704 842.24c7.68-5.12 15.36-12.8 15.36-23.04 0-12.8-10.24-25.6-25.6-25.6z" fill="currentColor"/>
        <path d="M153.6 545.28s2.56 0 0 0c15.36-2.56 28.16-12.8 25.6-28.16V512c0-120.32 66.56-232.96 171.52-291.84 12.8-7.68 17.92-23.04 10.24-35.84-7.68-12.8-23.04-17.92-35.84-10.24C204.8 243.2 128 371.2 128 512v10.24c2.56 12.8 12.8 23.04 25.6 23.04z m519.68-325.12C778.24 279.04 844.8 391.68 844.8 512v5.12c-2.56 12.8 7.68 25.6 23.04 28.16h2.56c12.8 0 23.04-10.24 25.6-23.04V512c0-140.8-76.8-268.8-197.12-335.36-12.8-7.68-28.16-2.56-35.84 10.24-7.68 12.8-2.56 28.16 10.24 33.28z" fill="currentColor"/>
      </svg>
      
      <!-- 可视化图标 -->
      <svg v-else-if="icon === 'visualization'" class="feature-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 21H3V3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M21 8L14 15L10 11L3 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      
      <!-- 默认图标 -->
      <svg v-else class="feature-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 16V12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 8H12.01" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    
    <!-- 文字内容 -->
    <div class="text-content">
      <h3 class="feature-title">{{ title }}</h3>
      <p class="feature-info">{{ info }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FeatureCard',
  props: {
    icon: {
      type: String,
      default: 'default'
    },
    title: {
      type: String,
      required: true
    },
    info: {
      type: String,
      required: true
    }
  }
})
</script>

<style scoped>
.feature-wrapper {
  @apply flex items-start relative;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.icon-container {
  @apply relative mr-6;
}

.icon-container::before {
  content: '';
  @apply absolute -inset-3 rounded-xl opacity-0 transition-all duration-500;
  background: linear-gradient(
    135deg,
    rgba(96, 165, 250, 0.05) 0%,
    rgba(96, 165, 250, 0.1) 50%,
    rgba(96, 165, 250, 0.05) 100%
  );
  transform: scale(0.95);
}

.group:hover .icon-container::before {
  @apply opacity-100;
  transform: scale(1);
}

.feature-icon {
  @apply h-12 w-12 text-blue-400 relative transition-all duration-500;
  filter: drop-shadow(0 0 1px rgba(96, 165, 250, 0.2));
}

.group:hover .feature-icon {
  @apply text-blue-300;
  filter: drop-shadow(0 0 2px rgba(96, 165, 250, 0.4));
  transform: translateY(-1px);
}

.text-content {
  @apply flex flex-col gap-2;
}

.feature-title {
  @apply text-xl font-semibold text-white transition-all duration-500;
}

.group:hover .feature-title {
  @apply text-blue-300;
  letter-spacing: 0.01em;
}

.feature-info {
  @apply text-gray-400 transition-colors duration-500;
}

.group:hover .feature-info {
  @apply text-gray-300;
}
</style>
