<template>
  <nav class="fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur-sm">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <!-- Logo -->
      <div class="flex items-center">
        <router-link to="/" class="text-white text-2xl font-bold uppercase tracking-wider">
          CASCADE
        </router-link>
      </div>
      
      <!-- 导航链接 -->
      <div class="hidden md:flex items-center space-x-8">
        <router-link to="/about" class="text-white hover:text-blue-400 transition-colors">
          About Cascade
        </router-link>
        <router-link to="/approach" class="text-white hover:text-blue-400 transition-colors">
          Our Approach
        </router-link>
        <router-link to="/latest" class="text-white hover:text-blue-400 transition-colors">
          Latest Product
        </router-link>
        <router-link to="/services" class="text-white hover:text-blue-400 transition-colors">
          Our Services
        </router-link>
      </div>
      
      <!-- 用户图标/登录按钮 -->
      <div class="flex items-center">
        <router-link to="/login" class="text-white hover:text-blue-400">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </router-link>
      </div>
      
      <!-- 移动端菜单按钮 -->
      <div class="md:hidden">
        <button @click="toggleMobileMenu" class="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
    
    <!-- 移动端菜单 -->
    <div v-if="mobileMenuOpen" class="md:hidden bg-gray-900 py-4">
      <div class="container mx-auto px-4 flex flex-col space-y-4">
        <router-link to="/about" class="text-white hover:text-blue-400 transition-colors py-2" @click="closeMobileMenu">
          About Cascade
        </router-link>
        <router-link to="/approach" class="text-white hover:text-blue-400 transition-colors py-2" @click="closeMobileMenu">
          Our Approach
        </router-link>
        <router-link to="/latest" class="text-white hover:text-blue-400 transition-colors py-2" @click="closeMobileMenu">
          Latest Product
        </router-link>
        <router-link to="/services" class="text-white hover:text-blue-400 transition-colors py-2" @click="closeMobileMenu">
          Our Services
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'NavBar',
  setup() {
    const mobileMenuOpen = ref(false)
    
    const toggleMobileMenu = () => {
      mobileMenuOpen.value = !mobileMenuOpen.value
    }
    
    const closeMobileMenu = () => {
      mobileMenuOpen.value = false
    }
    
    return {
      mobileMenuOpen,
      toggleMobileMenu,
      closeMobileMenu
    }
  }
})
</script>

<style scoped>
/* 导航栏动画 */
.router-link-active {
  color: #60a5fa; /* tailwind text-blue-400 */
}
</style> 