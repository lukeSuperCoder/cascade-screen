<template>
  <nav class="fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-blue-500/20">
    <div class="container mx-auto py-4 px-4 flex justify-between items-center">
      <!-- Logo -->
      <div class="flex items-center">
        <router-link to="/" class="text-white relative logo-container">
          <!-- 主Logo文字 -->
          <span class="text-xl font-bold tracking-wider relative z-20">CASCADE</span>
          
          <!-- 涟漪波动效果 -->
          <div class="absolute inset-0 z-10 overflow-visible flex items-center justify-center">
            <div class="ripple-effect relative w-full h-full" :class="{ 'animate-logo': animationStarted }">
              <div class="ripple ripple-1"></div>
              <div class="ripple ripple-2"></div>
              <div class="ripple ripple-3"></div>
            </div>
          </div>
          
          <!-- 底部渐变线条 -->
          <span class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600"></span>
        </router-link>
      </div>
      
      <!-- 导航链接和用户图标容器 -->
      <div class="flex items-center space-x-8">
        <!-- 导航链接 -->
        <div class="hidden md:flex items-center space-x-8">
          <router-link to="/about" class="text-white hover:text-blue-400 transition-colors duration-300 relative group py-2">
            <span>About Cascade</span>
            <span class="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-blue-400 to-indigo-500 group-hover:w-full transition-all duration-300"></span>
          </router-link>
          <router-link to="/approach" class="text-white hover:text-blue-400 transition-colors duration-300 relative group py-2">
            <span>Our Approach</span>
            <span class="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-blue-400 to-indigo-500 group-hover:w-full transition-all duration-300"></span>
          </router-link>
          <router-link to="/latest" class="text-white hover:text-blue-400 transition-colors duration-300 relative group py-2">
            <span>Latest Product</span>
            <span class="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-blue-400 to-indigo-500 group-hover:w-full transition-all duration-300"></span>
          </router-link>
          <router-link to="/services" class="text-white hover:text-blue-400 transition-colors duration-300 relative group py-2">
            <span>Our Services</span>
            <span class="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-blue-400 to-indigo-500 group-hover:w-full transition-all duration-300"></span>
          </router-link>
        </div>
        
        <!-- 用户图标/登录按钮 -->
        <div class="flex items-center">
          <router-link to="/login" class="text-white hover:text-blue-300 transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </router-link>
        </div>
        
        <!-- 移动端菜单按钮 -->
        <div class="md:hidden flex items-center">
          <button @click="toggleMobileMenu" class="text-white hover:text-blue-300 transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    
    <!-- 移动端菜单 -->
    <div v-if="mobileMenuOpen" class="md:hidden bg-gray-900/95 backdrop-blur-lg border-b border-blue-500/20 py-4 animate-fadeIn flex items-center">
      <div class="container mx-auto px-4 flex flex-col space-y-4">
        <router-link to="/about" class="text-white hover:text-blue-400 transition-colors py-3 px-4 rounded-md hover:bg-blue-900/20 border border-transparent hover:border-blue-500/30" @click="closeMobileMenu">
          About Cascade
        </router-link>
        <router-link to="/approach" class="text-white hover:text-blue-400 transition-colors py-3 px-4 rounded-md hover:bg-blue-900/20 border border-transparent hover:border-blue-500/30" @click="closeMobileMenu">
          Our Approach
        </router-link>
        <router-link to="/latest" class="text-white hover:text-blue-400 transition-colors py-3 px-4 rounded-md hover:bg-blue-900/20 border border-transparent hover:border-blue-500/30" @click="closeMobileMenu">
          Latest Product
        </router-link>
        <router-link to="/services" class="text-white hover:text-blue-400 transition-colors py-3 px-4 rounded-md hover:bg-blue-900/20 border border-transparent hover:border-blue-500/30" @click="closeMobileMenu">
          Our Services
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from 'vue'

export default defineComponent({
  name: 'NavBar',
  setup() {
    const mobileMenuOpen = ref(false)
    const isScrolled = ref(false)
    const animationStarted = ref(false)
    
    const toggleMobileMenu = () => {
      mobileMenuOpen.value = !mobileMenuOpen.value
    }
    
    const closeMobileMenu = () => {
      mobileMenuOpen.value = false
    }
    
    // 监听滚动事件
    const handleScroll = () => {
      isScrolled.value = window.scrollY > 50
    }
    
    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
      // 设置一个短暂的延迟后启动动画
      setTimeout(() => {
        animationStarted.value = true
      }, 500)
    })
    
    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })
    
    return {
      mobileMenuOpen,
      isScrolled,
      animationStarted,
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
  font-weight: 500;
}

.router-link-active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: linear-gradient(to right, #3b82f6, #6366f1);
}

/* Logo动画效果 */
.logo-container {
  padding: 8px 12px;
  display: inline-block;
  position: relative;
  min-width: 120px;
  min-height: 40px;
}

.ripple-effect {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ripple {
  position: absolute;
  border-radius: 50%;
  background: transparent;
  border: 1px solid rgba(99, 179, 237, 0.3);
  opacity: 0;
  transform: scale(0.1);
}

.animate-logo .ripple {
  animation-name: pulse;
  animation-duration: 3s;
  animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  animation-iteration-count: infinite;
}

.ripple-1 {
  width: 30px;
  height: 30px;
}

.animate-logo .ripple-1 {
  animation-delay: 0s;
}

.ripple-2 {
  width: 50px;
  height: 50px;
}

.animate-logo .ripple-2 {
  animation-delay: 0.5s;
}

.ripple-3 {
  width: 70px;
  height: 70px;
}

.animate-logo .ripple-3 {
  animation-delay: 1s;
}

@keyframes pulse {
  0% {
    transform: scale(0.1);
    opacity: 0;
  }
  30% {
    opacity: 0.8;
    border-color: rgba(99, 179, 237, 0.6);
  }
  70% {
    opacity: 0.4;
  }
  100% {
    transform: scale(2.5);
    opacity: 0;
  }
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fadeIn {
  animation: fadeIn 0.3s ease-out forwards;
}
</style> 