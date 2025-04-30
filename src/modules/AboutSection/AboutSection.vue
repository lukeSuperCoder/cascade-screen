<template>
  <div class="container mx-auto px-4 py-16">
    <h2 class="text-4xl font-bold mb-8 text-white">About Cascade</h2>
    
    <div class="mb-12">
      <p class="text-lg text-gray-300 max-w-2xl">
        We provide a platform leveraging open datasets 
        and advanced AI to visualize and analyze 
        spatially-detailed climate cascade risks 
        worldwide.
      </p>
    </div>
    
    <!-- 特性卡片区域 -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <FeatureCard 
        icon="globe"
        title="Open data"
        info="integration"
      />
      
      <FeatureCard 
        icon="ai"
        title="AI-driven"
        info="cascade analysis engine"
      />
      
      <FeatureCard 
        icon="visualization"
        title="Dynamic"
        info="visualization"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FeatureCard from './FeatureCard.vue'

export default defineComponent({
  name: 'AboutSection',
  components: {
    FeatureCard
  }
})
</script>

<style scoped>
/* 可以添加任何特定于AboutSection的样式 */
</style>
