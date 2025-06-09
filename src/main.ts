import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/tailwind.css'
import 'element-plus/dist/index.css'
import store from './store'
import ElementPlus from 'element-plus'

// 创建Vue应用
const app = createApp(App)

// 使用路由
app.use(router)
app.use(store)
app.use(ElementPlus)

// 挂载应用
app.mount('#app')
