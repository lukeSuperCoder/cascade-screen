<template>
  <nav class="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md">
    <div :class="onlyLogo ? 'container py-4 px-4 flex justify-between items-center' : 'container mx-auto py-4 px-4 flex justify-between items-start'">
      <!-- Logo -->
      <div class="flex items-center">
        <router-link to="/" class="text-white relative logo-container cyber-glow wave-logo">
          <!-- 主Logo文字 - 鼠标移入波动特效 -->
          <span class="wave-letter">D</span>
          <span class="wave-letter" style="animation-delay:0.05s">O</span>
          <span class="wave-letter" style="animation-delay:0.10s">M</span>
          <span class="wave-letter" style="animation-delay:0.15s">I</span>
          <span class="wave-letter" style="animation-delay:0.20s">N</span>
          <span class="wave-letter" style="animation-delay:0.25s">O</span>
          <span class="wave-letter" style="animation-delay:0.30s;margin-left: 0.5em;">R</span>
          <span class="wave-letter" style="animation-delay:0.35s">I</span>
          <span class="wave-letter" style="animation-delay:0.40s">S</span>
          <span class="wave-letter" style="animation-delay:0.45s">K</span>
        </router-link>
      </div>
      
      <!-- 导航链接和用户图标容器 -->
      <div v-if="!onlyLogo" class="flex items-center space-x-8">
        <!-- 导航链接 -->
        <div class="hidden md:flex items-center space-x-8">
          <button @click="scrollToSection('about')" class="text-white hover:text-blue-400 transition-colors duration-300 relative group py-2 cyber-link">
            <span>About Us</span>
            <span class="cyber-highlight"></span>
          </button>
          <button @click="scrollToSection('approach')" class="text-white hover:text-blue-400 transition-colors duration-300 relative group py-2 cyber-link">
            <span>Our Approach</span>
            <span class="cyber-highlight"></span>
          </button>
          <button @click="scrollToSection('product')" class="text-white hover:text-blue-400 transition-colors duration-300 relative group py-2 cyber-link">
            <span>Latest Insights</span>
            <span class="cyber-highlight"></span>
          </button>
          <button @click="scrollToSection('services')" class="text-white hover:text-blue-400 transition-colors duration-300 relative group py-2 cyber-link">
            <span>Scientific Services</span>
            <span class="cyber-highlight"></span>
          </button>
        </div>
        
        <!-- 用户图标/登录按钮 -->
        <div class="flex items-center">
          <button @click="showLogin = true" class="text-white hover:text-blue-300 transition-colors duration-200 relative group cyber-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user w-5 h-5"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            <span class="cyber-icon-glow"></span>
          </button>
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
    <div v-if="!onlyLogo && mobileMenuOpen" class="md:hidden bg-gray-900/95 backdrop-blur-lg border-b border-blue-500/20 py-4 animate-fadeIn flex items-center">
      <div class="container mx-auto px-4 flex flex-col space-y-4">
        <button @click="scrollToSection('about', true)" class="text-white hover:text-blue-400 transition-colors py-3 px-4 rounded-md hover:bg-blue-900/20 border border-transparent hover:border-blue-500/30">
          Our Team
        </button>
        <button @click="scrollToSection('approach', true)" class="text-white hover:text-blue-400 transition-colors py-3 px-4 rounded-md hover:bg-blue-900/20 border border-transparent hover:border-blue-500/30">
          Our Approach
        </button>
        <button @click="scrollToSection('product', true)" class="text-white hover:text-blue-400 transition-colors py-3 px-4 rounded-md hover:bg-blue-900/20 border border-transparent hover:border-blue-500/30">
          Latest Insights
        </button>
        <button @click="scrollToSection('services', true)" class="text-white hover:text-blue-400 transition-colors py-3 px-4 rounded-md hover:bg-blue-900/20 border border-transparent hover:border-blue-500/30">
          Scientific Services
        </button>
      </div>
    </div>
  </nav>
  <LoginModal v-model:visible="showLogin" />
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from 'vue'
import LoginModal from './LoginModal.vue'

export default defineComponent({
  name: 'NavBar',
  components: { LoginModal },
  props: {
    onlyLogo: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const mobileMenuOpen = ref(false)
    const isScrolled = ref(false)
    const showLogin = ref(false)
    
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

    // 滚动到指定section的函数
    const scrollToSection = (id: string, closeMenu = false) => {
      // 查找目标section
      const el = document.getElementById(id)
      if (el) {
        // 滚动到目标section，考虑导航栏高度偏移
        const nav = document.querySelector('nav')
        const navHeight = nav ? (nav as HTMLElement).offsetHeight : 0
        const top = el.getBoundingClientRect().top + window.scrollY - navHeight - 8 // 8px间距
        window.scrollTo({ top, behavior: 'smooth' })
      }
      // 如果是移动端菜单，点击后关闭菜单
      if (closeMenu) {
        closeMobileMenu()
      }
    }

    
    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })
    
    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })
    
    return {
      mobileMenuOpen,
      isScrolled,
      toggleMobileMenu,
      closeMobileMenu,
      scrollToSection,
      showLogin
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

/* 删除了router-link-active的底部线条样式 */

/* Logo样式 */
.logo-container {
  padding: 8px 12px;
  display: inline-block;
  position: relative;
  min-width: 120px;
  min-height: 40px;
}

/* 科技感未来感高亮效果 */
.cyber-glow {
  text-shadow: 0 0 10px rgba(96, 165, 250, 0.3), 0 0 20px rgba(96, 165, 250, 0.2);
  transition: text-shadow 0.3s ease;
}

.cyber-link {
  position: relative;
  overflow: hidden;
}

.cyber-highlight {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, #60a5fa, #818cf8, #60a5fa, transparent);
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  transform: translateX(-50%);
}

.cyber-link:hover .cyber-highlight {
  width: 100%;
  box-shadow: 0 0 10px rgba(96, 165, 250, 0.7);
}

.cyber-icon {
  position: relative;
  display: inline-block;
}

.cyber-icon-glow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.3s ease;
  background: radial-gradient(circle, rgba(96, 165, 250, 0.3) 0%, transparent 70%);
}

.cyber-icon:hover .cyber-icon-glow {
  opacity: 1;
}

/* 已删除所有涟漪效果相关的CSS样式 */

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fadeIn {
  animation: fadeIn 0.3s ease-out forwards;
}

.wave-logo {
  cursor: pointer;
  user-select: none;
}

.wave-logo:hover .wave-letter {
  animation: wave-bounce 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.wave-letter {
  display: inline-block;
  transition: color 0.2s;
  font-size: 1.25rem;
  font-weight: bold;
  letter-spacing: 0.05em;
  color: #fff;
  will-change: transform;
}

@keyframes wave-bounce {
  0% {
    transform: translateY(0);
  }
  20% {
    transform: translateY(-8px) scaleX(1.1);
  }
  40% {
    transform: translateY(4px) scaleX(0.95);
  }
  60% {
    transform: translateY(-4px) scaleX(1.05);
  }
  80% {
    transform: translateY(2px) scaleX(0.98);
  }
  100% {
    transform: translateY(0);
  }
}
</style> 