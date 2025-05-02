<template>
  <footer class="bg-gray-1000 border-t border-gray-800 py-8 mx-auto">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <!-- Logo -->
        <div class="text-white text-2xl font-bold uppercase tracking-wider mb-4 md:mb-0">
          CASCADE
        </div>
        
        <!-- 版权信息 -->
        <div class="text-gray-500 text-sm">
          © {{ new Date().getFullYear() }} Cascade. All rights reserved.
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FooterSection'
})
</script>

<style scoped>
/* 可以添加任何特定于FooterSection的样式 */
</style>
