<template>
  <div class="academic-team">
    <div class="university-header">CORE MEMBERS</div>
    <div class="team-grid">
      <div v-for="(contributor, idx) in contributors.slice(1)" :key="contributor.id" class="member-card">
        <div class="avatar-wrapper" @mouseenter="hoverIdx=idx" @mouseleave="hoverIdx=null">
          <img :src="contributor.avatar" :alt="contributor.name" class="avatar">
          <transition name="fade">
            <div v-if="hoverIdx===idx" class="member-detail">
              <div class="detail-name">{{ contributor.name }}</div>
              <div class="detail-role">{{ contributor.role }}</div>
              <div class="detail-bio">{{ contributor.bio }}</div>
              <div class="detail-links">
                <a v-for="link in contributor.socialLinks" :key="link.platform" :href="link.url" target="_blank" class="icon-link" v-html="link.icon"></a>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
    <div class="university-header">ADVISOR BOARD</div>
    <div class="team-grid">
      <div v-for="(contributor, idx) in contributors.slice(1)" :key="contributor.id" class="member-card">
        <div class="avatar-wrapper" @mouseenter="hoverIdx=idx" @mouseleave="hoverIdx=null">
          <img :src="contributor.avatar" :alt="contributor.name" class="avatar">
          <transition name="fade">
            <div v-if="hoverIdx===idx" class="member-detail">
              <div class="detail-name">{{ contributor.name }}</div>
              <div class="detail-role">{{ contributor.role }}</div>
              <div class="detail-bio">{{ contributor.bio }}</div>
              <div class="detail-links">
                <a v-for="link in contributor.socialLinks" :key="link.platform" :href="link.url" target="_blank" class="icon-link" v-html="link.icon"></a>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const googleScholarSVG = `<svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:middle"><circle cx="24" cy="24" r="24" fill="#4285F4"/><path d="M24 13L36 32H12L24 13Z" fill="white"/></svg>`;
export default {
  name: 'Approach',
  data() {
    return {
      hoverIdx: null,
      contributors: [
        {
          id: 1,
          name: 'Elco Koks',
          role: 'Project Coordinator and Researcher',
          avatar: '/avatars/elco.jpg',
          bio: '研究方向：气候风险、经济损失建模等。',
          socialLinks: [
            { platform: 'LinkedIn', icon: '<i class="fab fa-linkedin"></i>', url: 'https://linkedin.com/in/elcokoks' },
            { platform: 'Google Scholar', icon: googleScholarSVG, url: 'https://scholar.google.com/citations?user=xxxx' }
          ]
        },
        {
          id: 2,
          name: '成员A',
          role: 'Researcher',
          avatar: '/avatars/memberA.jpg',
          bio: '专注于气候影响评估与数据分析。',
          socialLinks: [
            { platform: 'LinkedIn', icon: '<i class="fab fa-linkedin"></i>', url: 'https://linkedin.com/in/memberA' },
            { platform: 'Google Scholar', icon: googleScholarSVG, url: 'https://scholar.google.com/citations?user=xxxxA' }
          ]
        },
        {
          id: 3,
          name: '成员B',
          role: 'Researcher',
          avatar: '/avatars/memberB.jpg',
          bio: '主要研究极端气候事件的经济影响。',
          socialLinks: [
            { platform: 'LinkedIn', icon: '<i class="fab fa-linkedin"></i>', url: 'https://linkedin.com/in/memberB' },
            { platform: 'Google Scholar', icon: googleScholarSVG, url: 'https://scholar.google.com/citations?user=xxxxB' }
          ]
        },
        {
          id: 4,
          name: '成员C',
          role: 'Researcher',
          avatar: '/avatars/memberC.jpg',
          bio: '关注气候适应与韧性提升策略。',
          socialLinks: [
            { platform: 'LinkedIn', icon: '<i class="fab fa-linkedin"></i>', url: 'https://linkedin.com/in/memberC' },
            { platform: 'Google Scholar', icon: googleScholarSVG, url: 'https://scholar.google.com/citations?user=xxxxC' }
          ]
        },
        {
          id: 5,
          name: '成员D',
          role: 'Researcher',
          avatar: '/avatars/memberD.jpg',
          bio: '致力于数据可视化与科学传播。',
          socialLinks: [
            { platform: 'LinkedIn', icon: '<i class="fab fa-linkedin"></i>', url: 'https://linkedin.com/in/memberD' },
            { platform: 'Google Scholar', icon: googleScholarSVG, url: 'https://scholar.google.com/citations?user=xxxxD' }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.academic-team {
  font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
  background: #fff;
  color: #222;
  min-height: 100vh;
  padding: 40px 0 0 0;
}
.university-header {
  font-size: 1.1rem;
  letter-spacing: 0.08em;
  font-weight: 500;
  margin-bottom: 32px;
  border-bottom: 2px solid #e5e7eb;
  padding-bottom: 8px;
  text-align: left;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}
.team-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 48px 32px;
  max-width: 1200px;
  margin: 0 auto;
}
.highlight-card {
  background: #4ef3c4;
  border-radius: 48px 0 0 0;
  min-height: 340px;
  display: flex;
  align-items: flex-end;
  position: relative;
  box-shadow: 0 4px 32px rgba(0,0,0,0.06);
}
.highlight-content {
  padding: 40px 32px 32px 32px;
}
.highlight-name {
  font-size: 1.5rem;
  font-weight: 600;
  color: #111;
  margin-bottom: 12px;
}
.highlight-role {
  font-size: 1.1rem;
  color: #222;
  margin-bottom: 24px;
}
.highlight-links .icon-link {
  margin-right: 16px;
  font-size: 1.4rem;
  color: #222;
  transition: color 0.2s;
  display: inline-block;
  vertical-align: middle;
}
.highlight-links .icon-link:hover {
  color: #0077b5;
}
.member-card {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
.avatar-wrapper {
  position: relative;
  width: 220px;
  height: 320px;
  border-radius: 20px;
  overflow: hidden;
  background: #f3f4f6;
  box-shadow: 0 2px 16px rgba(0,0,0,0.07);
  transition: box-shadow 0.2s;
}
.avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(1);
  border-radius: 20px;
  transition: filter 0.3s;
}
.avatar-wrapper:hover .avatar {
  filter: grayscale(0);
}
.member-detail {
  position: absolute;
  left: 0; right: 0; bottom: 0;
  background: rgba(255,255,255,0.97);
  color: #222;
  padding: 24px 18px 18px 18px;
  border-radius: 0 0 20px 20px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.10);
  z-index: 2;
  animation: fadeIn 0.3s;
}
.detail-name { font-weight: 600; font-size: 1.1rem; margin-bottom: 6px; }
.detail-role { color: #0077b5; font-size: 1rem; margin-bottom: 8px; }
.detail-bio { font-size: 0.98rem; color: #444; margin-bottom: 10px; }
.detail-links .icon-link { margin-right: 10px; font-size: 1.2rem; color: #222; display: inline-block; vertical-align: middle; }
.detail-links .icon-link:hover { color: #0077b5; }
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s; }
.fade-enter, .fade-leave-to { opacity: 0; }
@media (max-width: 900px) {
  .team-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 600px) {
  .team-grid { grid-template-columns: 1fr; }
  .highlight-card, .member-card { justify-content: center; }
}
</style>
