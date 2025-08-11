import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import MapPage from '../pages/MapPage.vue'
import Approach from '../pages/Approach.vue'
import Empty from '../pages/Empty.vue'

// 创建路由
const router = createRouter({
  history: createWebHashHistory(), // 改为 Hash 模式
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/map',
      name: 'Map',
      component: MapPage
    },
    {
      path: '/contribute',
      name: 'Contribute',
      component: Approach
    },
    {
      path: '/empty',
      name: 'Empty',
      component: Empty
    },
    // 其他路由可以在这里添加
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ]
})

export default router
