<template>
  <div class="container mx-auto px-4 py-16">
    <h2 class="text-4xl font-bold mb-12 text-white">Our services</h2>
    
    <!-- 服务列表 -->
    <ul class="space-y-4">
      <li class="flex items-center py-1">
        <span class="text-blue-400 mr-3">•</span>
        <span class="text-gray-300">AI simulation tools development</span>
      </li>
      
      <li class="flex items-center py-1">
        <span class="text-blue-400 mr-3">•</span>
        <span class="text-gray-300">High-resolution mapping APIs</span>
      </li>
      
      <li class="flex items-center py-1">
        <span class="text-blue-400 mr-3">•</span>
        <span class="text-gray-300">Custom domino risk reporting</span>
      </li>
      
      <li class="flex items-center py-1">
        <span class="text-blue-400 mr-3">•</span>
        <span class="text-gray-300">Cross-sector collaboration</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ServicesSection'
})
</script>

<style scoped>
/* 可以添加任何特定于ServicesSection的样式 */
</style>
