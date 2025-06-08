<template>
  <div class="container mx-auto px-4 py-16">
    <h2 class="text-4xl font-bold mb-12 text-white">Scientific Services</h2>
    
    <!-- 服务列表 -->
    <ul class="space-y-4">
      <li class="flex items-center py-1">
        <span class="text-blue-400 mr-3">•</span>
        <span class="text-gray-300">Cascading business risk assessments</span>
      </li>
      
      <li class="flex items-center py-1">
        <span class="text-blue-400 mr-3">•</span>
        <span class="text-gray-300">Infrastructure criticality assessments</span>
      </li>
      
      <li class="flex items-center py-1">
        <span class="text-blue-400 mr-3">•</span>
        <span class="text-gray-300">Supply chain risk management strategy consulting</span>
      </li>
      
      <li class="flex items-center py-1">
        <span class="text-blue-400 mr-3">•</span>
        <span class="text-gray-300">Cross-sector collaboration</span>
      </li>

      <li class="flex items-center py-1">
        <span class="text-gray-300">
          <a href="https://example.org/" class="text-blue-400 hover:text-blue-600">
            Read more &rarr;
          </a> 
        </span>
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
