import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './pages/Home.vue'
import MapPage from './pages/MapPage.vue'
import Approach from './pages/Approach.vue'
import './styles/tailwind.css'
import 'element-plus/dist/index.css'
import store from './store'
import ElementPlus from 'element-plus'

// 创建路由
const router = createRouter({
  history: createWebHistory(),
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
    // 其他路由可以在这里添加
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ]
})

// 创建Vue应用
const app = createApp(App)

// 使用路由
app.use(router)
app.use(store)
app.use(ElementPlus)

// 挂载应用
app.mount('#app')
