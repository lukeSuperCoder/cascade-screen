<template>
  <div class="min-h-screen bg-black/80 text-white">
    <!-- 顶部导航栏 -->
    <NavBar />
    
    <!-- Hero部分 -->
    <section class="relative">
      <HeroSection />
    </section>
    
    <!-- About部分 -->
    <section id="about">
      <AboutSection />
    </section>
    
    <!-- Our Approach部分 -->
    <section id="approach">
      <ApproachSection />
    </section>
    
    <!-- Latest Product和Services部分 -->
    <div class="flex container mx-auto">
      <!-- Latest Product部分 -->
      <section id="product" class="w-1/2">
        <LatestProductSection />
      </section>
      
      <!-- Our Services部分 -->
      <section id="services" class="w-1/2">
        <ServicesSection />
      </section>
    </div>
    
    <!-- 页脚部分 -->
    <FooterSection />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from '../components/NavBar.vue'
import HeroSection from '../modules/HeroSection/HeroSection.vue'
import AboutSection from '../modules/AboutSection/AboutSection.vue'
import ApproachSection from '../modules/ApproachSection/ApproachSection.vue'
import LatestProductSection from '../modules/LatestProductSection/LatestProductSection.vue'
import ServicesSection from '../modules/ServicesSection/ServicesSection.vue'
import FooterSection from '../modules/FooterSection/FooterSection.vue'

export default defineComponent({
  name: 'HomePage',
  components: {
    NavBar,
    HeroSection,
    AboutSection,
    ApproachSection,
    LatestProductSection,
    ServicesSection,
    FooterSection
  }
})
</script>

<style scoped>
section {
  overflow: hidden;
}
</style>
