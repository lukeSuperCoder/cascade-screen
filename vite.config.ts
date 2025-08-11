import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // 添加这行，使用相对路径
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  css: {
    postcss: './postcss.config.js'
  },
  server: {
    port: 8088,
    open: true,
    host: true,
    
  }
})
