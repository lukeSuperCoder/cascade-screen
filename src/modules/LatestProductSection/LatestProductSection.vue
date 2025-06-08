<template>
  <div class="container mx-auto px-4 py-16">
    <h2 class="text-4xl font-bold mb-12 text-white">Latest Insights</h2>
    
    <!-- 产品列表 -->
    <ul class="space-y-4">
      <li class="flex items-center py-1">
        <span class="text-blue-400 mr-3">•</span>
        <span class="text-gray-300">Energy storage shields UK supply chains from costly disruptions</span>
      </li>


      <li class="flex items-center py-1">
        <span class="text-blue-400 mr-3">•</span>
        <span class="text-gray-300"> 
          <a href="https://www.nature.com/articles/s44284-024-00172-z" class="text-blue-400 hover:text-blue-600">
            Residents' heat adaptation influences food delivery service industry (Nature Cities)
          </a>
        </span>
      </li>

      <li class="flex items-center py-1">
        <span class="text-blue-400 mr-3">•</span>
        <span class="text-gray-300"> 
          <a href="https://www.nature.com/articles/s41586-024-07147-z" class="text-blue-400 hover:text-blue-600">
            Global supply chains amplify economic costs of future extreme heat risk (Nature)
          </a>
        </span>
      </li>
      
      <li class="flex items-center py-1">
        <span class="text-blue-400 mr-3">•</span>
        <span class="text-gray-300">
          <a href="https://www.nature.com/articles/s41893-020-00646-7" class="text-blue-400 hover:text-blue-600">
            Most of California wildfires’ economic impacts are indirect (Nature Sustainability)
          </a>
        </span>
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
  name: 'LatestProductSection'
})
</script>

<style scoped>
/* 可以添加任何特定于LatestProductSection的样式 */
</style>
