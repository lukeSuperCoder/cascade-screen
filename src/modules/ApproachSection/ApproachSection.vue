<template>
  <div class="container mx-auto px-4 py-16">
    <h2 class="text-4xl font-bold mb-12 text-white">Our Approach</h2>
    
    <!-- 方法卡片区域 -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="bg-gray-800/50 border border-gray-700 rounded-md p-6">
        <div class="flex items-center mb-4">
          <!-- 数据获取图标 -->
          <div class="mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="22" y1="12" x2="18" y2="12"></line>
              <line x1="6" y1="12" x2="2" y2="12"></line>
              <line x1="12" y1="6" x2="12" y2="2"></line>
              <line x1="12" y1="22" x2="12" y2="18"></line>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-white">Data acquisition</h3>
        </div>
        
        <!-- 数据图标 -->
        <div class="flex space-x-4 mt-6">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="8"></circle>
            <line x1="1.5" y1="9" x2="6.5" y2="9"></line>
            <line x1="1.5" y1="15" x2="6.5" y2="15"></line>
            <line x1="17.5" y1="9" x2="22.5" y2="9"></line>
            <line x1="17.5" y1="15" x2="22.5" y2="15"></line>
          </svg>
          
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 10H3M21 6H3M21 14H3M21 18H3"></path>
          </svg>
          
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 9L12 2L21 9V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9Z"></path>
            <path d="M9 21V15C9 14.4477 9.44772 14 10 14H14C14.5523 14 15 14.4477 15 15V21"></path>
          </svg>
        </div>
        
        <!-- 箭头 -->
        <div class="flex justify-end mt-8">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </div>
      </div>
      
      <div class="bg-gray-800/50 border border-gray-700 rounded-md p-6">
        <div class="flex items-center mb-4">
          <!-- 风险建模图标 -->
          <div class="mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M2 3H8C9.06087 3 10.0783 3.42143 10.8284 4.17157C11.5786 4.92172 12 5.93913 12 7C12 8.06087 11.5786 9.07828 10.8284 9.82843C10.0783 10.5786 9.06087 11 8 11H2V3Z"></path>
              <path d="M2 11H8C9.06087 11 10.0783 11.4214 10.8284 12.1716C11.5786 12.9217 12 13.9391 12 15C12 16.0609 11.5786 17.0783 10.8284 17.8284C10.0783 18.5786 9.06087 19 8 19H2V11Z"></path>
              <path d="M12 7H18C19.0609 7 20.0783 7.42143 20.8284 8.17157C21.5786 8.92172 22 9.93913 22 11C22 12.0609 21.5786 13.0783 20.8284 13.8284C20.0783 14.5786 19.0609 15 18 15H12V7Z"></path>
              <path d="M12 15H18C19.0609 15 20.0783 15.4214 20.8284 16.1716C21.5786 16.9217 22 17.9391 22 19C22 20.0609 21.5786 21.0783 20.8284 21.8284C20.0783 22.5786 19.0609 23 18 23H12V15Z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-white">Cascade risk modeling</h3>
        </div>
      </div>
      
      <div class="bg-gray-800/50 border border-gray-700 rounded-md p-6">
        <div class="flex items-center mb-4">
          <!-- 决策支持图标 -->
          <div class="mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18457 2.99721 7.13633 4.39828 5.49707C5.79935 3.85782 7.69279 2.71538 9.79619 2.24015C11.8996 1.76491 14.1003 1.98234 16.07 2.86"></path>
              <path d="M22 4L12 14.01L9 11.01"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-white">Strategic decision support</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ApproachSection'
})
</script>

<style scoped>
/* 可以添加任何特定于ApproachSection的样式 */
</style>
