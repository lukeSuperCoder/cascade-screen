<template>
  <div class="container mx-auto px-4 py-16">

    <div class="team-intro-section flex flex-col md:flex-row items-center justify-between mb-16">
      <!-- 左侧照片墙 -->
      <div class="team-photos grid grid-cols-5 grid-rows-3 gap-2 w-full md:w-1/2 p-2">
        <img v-for="n in 15" :key="n" :src="getPhoto(n)" class="w-full h-16 object-cover rounded shadow-sm bg-gray-200" :alt="`team member ${n}`" />
      </div>
      <!-- 右侧简介 -->
      <div class="team-intro-text w-full md:w-1/2 p-4">
        <h3 class="text-2xl font-bold mb-4 text-white">Team Introduction</h3>
        <p class="text-lg text-gray-300 mb-2">
          Our team consists of multidisciplinary experts in geography, climate, economics, artificial intelligence, and more, dedicated to advancing the frontier of cascading risk research. Team members have rich international backgrounds, spanning universities, research institutes, and industry, with strong theoretical and practical capabilities.
        </p>
        <p class="text-lg text-gray-300 mb-2">
          We focus on leveraging AI and data science methods to uncover the complex transmission mechanisms of risks in areas such as extreme events, infrastructure, and supply chains. With open collaboration and innovation as our core values, we serve governments, enterprises, and society in risk management and decision support.
        </p>
        <p class="text-lg text-gray-300">
          Through interdisciplinary cooperation and international exchange, we continuously expand the boundaries of risk science, contributing to global sustainable development and enhanced societal resilience.
        </p>
      </div>
    </div>
    <h2 class="text-4xl font-bold mb-8 text-white">About Domino Risk</h2>

    <div class="mb-12">
      <p class="text-lg text-gray-300 max-w-2xl">
        Domino Risk brings together a global network of multidisciplinary experts 
        to revolutionise how we understand cascading risks. 
        We develop cutting-edge AI models with deep expertise in machine learning, network theory, and economics
        to map how local disruptions cascade into systemic impacts.
      </p>
      <p class="text-lg text-gray-300 max-w-2xl mt-4">

      </p>
      <p class="text-lg text-gray-300 max-w-2xl">
        Our mission is to help governments, businesses, and communities anticipate complex threats and strengthen resilience. 
        Through advanced risk modelling and quantitative analysis, we enable better decisions in an increasingly interconnected and volatile world.
      </p>
      <p class="text-lg text-gray-300 max-w-2xl mt-4">
      
      </p>
      <button @click="openTeamContribute" class="text-write hover:text-blue-500 transition-colors duration-300 relative group py-2 cyber-link">
            <span>Learn more about our team and work &rarr;</span>
            <span class="cyber-highlight"></span>
      </button>

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

    <h2 class="text-4xl font-bold mb-8 text-white pt-16">Our Project</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FeatureCard from './FeatureCard.vue'
import router from '../../router'
export default defineComponent({
  name: 'AboutSection',
  components: {
    FeatureCard
  },
  methods: {
    openTeamContribute() {
      // 导航到团队贡献页面
      const routeData = router.resolve({ name: 'Contribute' });
      window.open(routeData.href, '_blank');
    },
    getPhoto(n: number) {
      // 可根据实际头像路径替换，默认用 u1~u6 循环
      const idx = (n-1) + 1;
      return `/src/assets/images/u${idx}.png`;
    }
  }
})
</script>

<style scoped>
/* 可以添加任何特定于AboutSection的样式 */
</style>
