<template>
  <div class="min-h-screen relative overflow-hidden bg-black">
    <!-- 背景图层 -->
    <div class="absolute inset-0 z-0">
      <!-- 渐变叠加层，增强可读性和视觉效果 -->
      <div class="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-transparent bg-hero-pattern"></div>
    </div>
    
    <!-- 内容层 -->
    <div class="container mx-auto px-4 h-screen flex flex-col justify-center relative z-10 pt-20">
      <div class="max-w-3xl">
        <h1 class="text-4xl md:text-6xl font-bold text-white leading-tight mb-6 [text-shadow:_0_2px_10px_rgba(0,0,0,0.5)]">
          PROJECTING <br />
          CASCADING RISK <br />
          WITH <br />
          ADVANCED AI TECH
        </h1>
        
        <p class="text-lg md:text-xl text-zinc-200 mb-10 max-w-2xl [text-shadow:_0_1px_5px_rgba(0,0,0,0.3)]">
          Mapping local disruptions to systemic impacts — <br />
          Anticipate earlier, act faster, build resilience, and mitigate losses <br />
          through AI-driven risk intelligence
        </p>
        
        <!-- CTA按钮 -->
        <div class="flex flex-wrap gap-4">
          <!-- 使用router-link进行页面跳转 -->
          <router-link to="/map" class="relative group bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-md transition-all duration-300 backdrop-blur-sm border border-blue-500/30 hover:border-blue-400/50 overflow-hidden active:scale-95 active:animate-shake">
            <span class="relative z-10">Explore the Risk Map</span>
            <!-- 科技感光效 -->
            <div class="absolute inset-0 bg-gradient-to-r from-blue-700/90 via-blue-600/90 to-blue-700/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.7),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <!-- 扫光动画效果 -->
            <div class="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000"></div>
            <!-- 边缘发光效果 -->
            <div class="absolute -inset-px bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 opacity-0 group-hover:opacity-40 group-hover:blur-sm transition-all duration-300"></div>
          </router-link>
          <a href="#" class="relative group bg-transparent backdrop-blur-sm border border-blue-500/20 text-white px-8 py-3 rounded-md hover:border-blue-400/40 transition-all duration-300 overflow-hidden active:scale-95 active:animate-shake-sm">
            <span class="relative z-10">Contribute Data</span>
            <!-- 科技感扫光效果 -->
            <div class="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-blue-400/10 to-transparent transition-transform duration-1000"></div>
            <!-- 悬停时的微光效果 -->
            <div class="absolute inset-0 opacity-0 group-hover:opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.4),transparent_70%)] transition-opacity duration-300"></div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HeroSection'
})
</script>

<style scoped>
.bg-hero-pattern {
  background-image: url('/src/assets/images/earth-bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 55% 100%;
  filter: saturate(1.1) brightness(0.4) contrast(1.1);
}

/* 确保图片加载前也有基础样式 */
@media (max-width: 768px) {
  .bg-hero-pattern {
    background-position: 70% center;
  }
}

/* 按钮悬停时的发光动画 */
@keyframes button-glow {
  0% {
    box-shadow: 0 0 5px rgba(59, 130, 246, 0.4),
                0 0 15px rgba(59, 130, 246, 0.2),
                0 0 25px rgba(59, 130, 246, 0.1);
  }
  50% {
    box-shadow: 0 0 10px rgba(59, 130, 246, 0.5),
                0 0 25px rgba(59, 130, 246, 0.4),
                0 0 35px rgba(59, 130, 246, 0.3);
  }
  100% {
    box-shadow: 0 0 5px rgba(59, 130, 246, 0.4),
                0 0 15px rgba(59, 130, 246, 0.2),
                0 0 25px rgba(59, 130, 246, 0.1);
  }
}

/* 主按钮抖动动画 */
@keyframes shake {
  0%, 100% { transform: scale(0.95) translate(0, 0); }
  25% { transform: scale(0.95) translate(-2px, 0); }
  50% { transform: scale(0.95) translate(2px, 0); }
  75% { transform: scale(0.95) translate(-1px, 0); }
}

/* 次要按钮抖动动画 */
@keyframes shake-sm {
  0%, 100% { transform: scale(0.95) translate(0, 0); }
  25% { transform: scale(0.95) translate(-1px, 0); }
  50% { transform: scale(0.95) translate(1px, 0); }
  75% { transform: scale(0.95) translate(-1px, 0); }
}

.group:hover {
  animation: button-glow 2s infinite;
}

.animate-shake {
  animation: shake 0.3s cubic-bezier(.36,.07,.19,.97) both;
}

.animate-shake-sm {
  animation: shake-sm 0.3s cubic-bezier(.36,.07,.19,.97) both;
}
</style>
