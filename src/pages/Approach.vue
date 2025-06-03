<template>
  <div class="approach-container">
    <div class="approach-header">
      <h1 class="title">Contributors</h1>
      <p class="subtitle">Meet the team behind Cascade Screen</p>
    </div>

    <div class="contributors-grid">
      <!-- 贡献者卡片 -->
      <div v-for="contributor in contributors" :key="contributor.id" class="contributor-card">
        <div class="card-content">
          <div class="avatar-wrapper">
            <img :src="contributor.avatar" :alt="contributor.name" class="avatar">
            <div class="status-indicator" :class="{ 'online': contributor.online }"></div>
          </div>
          <h3 class="name">{{ contributor.name }}</h3>
          <p class="role">{{ contributor.role }}</p>
          <p class="bio">{{ contributor.bio }}</p>
          <div class="social-links">
            <a v-for="link in contributor.socialLinks" 
               :key="link.platform" 
               :href="link.url" 
               target="_blank"
               class="social-link"
               :title="link.platform">
              <i :class="link.icon"></i>
            </a>
          </div>
          <div class="contribution-stats">
            <div class="stat">
              <span class="stat-value">{{ contributor.contributions }}</span>
              <span class="stat-label">Contributions</span>
            </div>
            <div class="stat">
              <span class="stat-value">{{ contributor.repositories }}</span>
              <span class="stat-label">Repositories</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Approach',
  data() {
    return {
      contributors: [
        {
          id: 1,
          name: 'Luke Chen',
          role: 'Lead Developer',
          bio: '专注于地理信息系统和可视化技术，致力于构建高效的数据分析平台。',
          avatar: '/avatars/luke.jpg',
          online: true,
          contributions: 128,
          repositories: 5,
          socialLinks: [
            { platform: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/lukechen' },
            { platform: 'LinkedIn', icon: 'fab fa-linkedin', url: 'https://linkedin.com/in/lukechen' },
            { platform: 'Twitter', icon: 'fab fa-twitter', url: 'https://twitter.com/lukechen' }
          ]
        },
        {
          id: 2,
          name: 'Sarah Wang',
          role: 'Data Scientist',
          bio: '数据科学专家，擅长机器学习和空间数据分析，为项目提供强大的数据支持。',
          avatar: '/avatars/sarah.jpg',
          online: false,
          contributions: 96,
          repositories: 3,
          socialLinks: [
            { platform: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/sarahwang' },
            { platform: 'LinkedIn', icon: 'fab fa-linkedin', url: 'https://linkedin.com/in/sarahwang' }
          ]
        },
        {
          id: 3,
          name: 'Michael Zhang',
          role: 'UI/UX Designer',
          bio: '用户体验设计师，专注于创建直观且富有吸引力的用户界面。',
          avatar: '/avatars/michael.jpg',
          online: true,
          contributions: 75,
          repositories: 2,
          socialLinks: [
            { platform: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/michaelzhang' },
            { platform: 'Dribbble', icon: 'fab fa-dribbble', url: 'https://dribbble.com/michaelzhang' }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.approach-container {
  @apply min-h-screen bg-gray-900 text-white p-8;
  background: linear-gradient(to bottom, #1a1a1a, #2d3748);
}

.approach-header {
  @apply text-center mb-12;
}

.title {
  @apply text-4xl font-bold mb-4;
  background: linear-gradient(to right, #60a5fa, #34d399);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 20px rgba(96, 165, 250, 0.3);
}

.subtitle {
  @apply text-gray-400 text-lg;
}

.contributors-grid {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto;
}

.contributor-card {
  @apply bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden;
  @apply border border-gray-700/50;
  @apply transition-all duration-300;
  @apply hover:transform hover:scale-105;
  @apply hover:shadow-xl hover:shadow-blue-500/10;
  @apply hover:border-blue-500/30;
}

.card-content {
  @apply p-6 flex flex-col items-center;
}

.avatar-wrapper {
  @apply relative mb-4;
}

.avatar {
  @apply w-32 h-32 rounded-full object-cover;
  @apply border-4 border-gray-700;
  @apply transition-all duration-300;
  @apply hover:border-blue-500;
}

.status-indicator {
  @apply absolute bottom-2 right-2 w-4 h-4 rounded-full;
  @apply border-2 border-gray-800;
  @apply bg-gray-500;
}

.status-indicator.online {
  @apply bg-green-500;
  @apply animate-pulse;
}

.name {
  @apply text-xl font-bold mb-1;
  @apply text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400;
}

.role {
  @apply text-blue-400 text-sm mb-3;
}

.bio {
  @apply text-gray-400 text-sm text-center mb-4;
  @apply line-clamp-3;
}

.social-links {
  @apply flex gap-4 mb-4;
}

.social-link {
  @apply text-gray-400 hover:text-white;
  @apply transition-colors duration-200;
  @apply transform hover:scale-110;
}

.social-link i {
  @apply text-xl;
}

.contribution-stats {
  @apply flex gap-6 mt-2;
  @apply border-t border-gray-700/50 pt-4 w-full;
}

.stat {
  @apply flex flex-col items-center flex-1;
}

.stat-value {
  @apply text-xl font-bold text-blue-400;
}

.stat-label {
  @apply text-xs text-gray-500;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .contributors-grid {
    @apply grid-cols-1;
  }
  
  .contributor-card {
    @apply max-w-md mx-auto;
  }
}

/* 添加动画效果 */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.contributor-card {
  animation: fadeIn 0.6s ease-out forwards;
}

.contributor-card:nth-child(2) {
  animation-delay: 0.2s;
}

.contributor-card:nth-child(3) {
  animation-delay: 0.4s;
}
</style>
