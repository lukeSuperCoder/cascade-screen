<template>
  <div class="container mx-auto px-4 py-16">
    <h2 class="text-4xl font-bold mb-8 text-white">About Domino Risk</h2>
    
    <div class="mb-12">
      <p class="text-lg text-gray-300 max-w-2xl">
        Domino Risk brings together a global network of 
        multidisciplinary experts to revolutionise how we 
        understand cascading risks. 
        We develop cutting-edge AI models with deep expertise 
        in economics, network theory, and policy research to map how local disruptions cascade into systemic impacts.
      </p>
      <p class="text-lg text-gray-300 max-w-2xl">
        Our mission is to help governments, businesses, and communities anticipate complex threats and strengthen resilience. 
        Through advanced risk mapping and actionable insights, we enable better decisions in an increasingly interconnected and volatile world.
      </p>
    </div>
    
    <!-- 特性卡片区域 -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <FeatureCard 
        icon="globe"
        title="Cascading Risk"  
        info="Complex threats"
      />
      
      <FeatureCard 
        icon="ai"
        title="AI-driven Approach"
        info="High-quality assessments"
      />
      
      <FeatureCard 
        icon="visualization"
        title="Actionable Insights"
        info="Real-world decision support"
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
