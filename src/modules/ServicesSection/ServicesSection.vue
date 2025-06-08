<template>
  <div class="container mx-auto px-4 py-16">
    <h2 class="text-4xl font-bold mb-12 text-white">Scientific Services</h2>
    
    <!-- 服务列表 -->
    <ul class="space-y-4">
      <li class="flex items-center py-1">
        <span class="text-write mr-3">•</span>
        <span class="text-gray-300">Business interruption risk assessments</span>
      </li>
      
      <li class="flex items-center py-1">
        <span class="text-write mr-3">•</span>
        <span class="text-gray-300">Supply chain risk management strategies</span>
      </li>

      <li class="flex items-center py-1">
        <span class="text-write mr-3">•</span>
        <span class="text-gray-300">Infrastructure criticality assessments and adaptation priorities</span>
      </li>
      
      <li class="flex items-center py-1">
        <span class="text-write mr-3">•</span>
        <span class="text-gray-300">Cross-sector collaboration</span>
      </li>

      <button @click="openServicePage" class="text-write hover:text-blue-500 transition-colors duration-300 relative group py-2 cyber-link">
            <span>Read more &rarr;</span>
            <span class="cyber-highlight"></span>
      </button>

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
