<template>
  <div class="min-h-screen relative overflow-hidden bg-gray-900">
    <!-- 背景图层 -->
    <div class="absolute inset-0 z-0">
      <!-- 背景渐变效果 -->
      <div class="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-purple-900/30"></div>
      
      <!-- 地球效果使用简单背景色代替 -->
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800 via-gray-900 to-black"></div>
      
      <!-- 橙色和蓝色轨迹线可以用简单的圆形渐变代替 -->
      <div class="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-orange-500/20 blur-3xl"></div>
      <div class="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-blue-500/20 blur-3xl"></div>
      
      <!-- 渐变叠加层 -->
      <div class="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-transparent to-gray-900"></div>
    </div>
    
    <!-- 内容层 -->
    <div class="container mx-auto px-4 h-screen flex flex-col justify-center relative z-10 pt-20">
      <div class="max-w-3xl">
        <h1 class="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Mapping Climate <br />
          Cascade Effects <br />
          with AI-Powered <br />
          Insight
        </h1>
        
        <p class="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl">
          We provide a platform leveraging open datasets 
          and advanced AI to visualize and analyze spatially-
          detailed climate cascade risks worldwide.
        </p>
        
        <!-- CTA按钮 -->
        <div class="flex flex-wrap gap-4">
          <a href="#" class="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-md transition-colors">
            Explore the Map
          </a>
          <a href="#" class="bg-transparent border border-white text-white px-8 py-3 rounded-md hover:bg-white/10 transition-colors">
            Discover Cascade
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HeroSection'
})
</script>

<style scoped>
/* 可以添加任何特定于HeroSection的样式 */
</style>
