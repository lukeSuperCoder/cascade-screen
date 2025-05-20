<template>
  <transition name="modal-fade">
    <div v-if="visible" class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div class="bg-white/5 border border-gray-700 rounded-2xl shadow-2xl p-8 w-full max-w-sm relative cyber-modal">
        <!-- Close button -->
        <button class="absolute top-4 right-4 text-gray-400 hover:text-gray-200" @click="$emit('update:visible', false)">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 class="text-2xl font-bold text-gray-100 mb-6 text-center tracking-widest cyber-glow">Sign In</h2>
        <form @submit.prevent="handleLogin" class="space-y-6">
          <div>
            <label class="block text-sm text-gray-300 mb-1">Username</label>
            <input v-model="username" type="text" autocomplete="username" class="w-full px-4 py-2 rounded-lg bg-black/80 border border-gray-600 focus:border-gray-400 focus:ring-2 focus:ring-gray-500/40 text-white placeholder-gray-400 cyber-input" placeholder="Enter your username" />
          </div>
          <div>
            <label class="block text-sm text-gray-300 mb-1">Password</label>
            <input v-model="password" type="password" autocomplete="current-password" class="w-full px-4 py-2 rounded-lg bg-black/80 border border-gray-600 focus:border-gray-400 focus:ring-2 focus:ring-gray-500/40 text-white placeholder-gray-400 cyber-input" placeholder="Enter your password" />
          </div>
          <button type="submit"
            class="w-full relative group bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-md transition-all duration-300 backdrop-blur-sm border border-blue-500/30 hover:border-blue-400/50 overflow-hidden active:scale-95 active:animate-shake">
            <span class="relative z-10">Sign In</span>
            <!-- 科技感光效 -->
            <div class="absolute inset-0 bg-gradient-to-r from-blue-700/90 via-blue-600/90 to-blue-700/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.7),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <!-- 扫光动画效果 -->
            <div class="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000"></div>
            <!-- 边缘发光效果 -->
            <div class="absolute -inset-px bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 opacity-0 group-hover:opacity-40 group-hover:blur-sm transition-all duration-300"></div>
          </button>
        </form>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { ElMessage } from 'element-plus'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'LoginModal',
  props: {
    visible: {
      type: Boolean,
      required: true
    }
  },
  emits: ['update:visible'],
  setup(_, { emit }) {
    const store = useStore()
    const username = ref('')
    const password = ref('')

    // 登录处理
    const handleLogin = async () => {
      if (!username.value || !password.value) {
        ElMessage.error('Please enter your username and password')
        return
      }

      try {
        // 使用 store 的 login action
        const success = await store.dispatch('login', {
          username: username.value,
          password: password.value
        })

        if (success) {
          ElMessage.success('Login successful')
          emit('update:visible', false)
        } else {
          ElMessage.error('Login failed, please try again')
        }
      } catch (error) {
        console.error('Login error:', error)
        ElMessage.error('Login failed, please try again')
      }
    }

    return {
      username,
      password,
      handleLogin
    }
  }
})
</script>

<style scoped>
.cyber-modal {
  box-shadow: 0 0 32px 4px #2226, 0 0 0 2px #222a;
  border-radius: 1.5rem;
  position: relative;
  overflow: hidden;
  background: #000;
}
.cyber-glow {
  text-shadow: 0 0 12px #fff2, 0 0 24px #fff1;
}
.cyber-input {
  font-family: 'JetBrains Mono', 'Fira Mono', 'Consolas', monospace;
  letter-spacing: 0.05em;
  box-shadow: 0 0 8px #2224;
  background: #181818;
  color: #fff;
  border: 1px solid #333;
  transition: box-shadow 0.2s, border 0.2s;
}
.cyber-input:focus {
  box-shadow: 0 0 16px #fff2;
  border: 1.5px solid #aaa;
}
.cyber-btn {
  font-family: 'JetBrains Mono', 'Fira Mono', 'Consolas', monospace;
  letter-spacing: 0.1em;
  box-shadow: 0 0 16px #60a5fa44;
  border: none;
  background: linear-gradient(90deg, #2563eb 0%, #60a5fa 100%);
}
.modal-fade-enter-active, .modal-fade-leave-active {
  transition: opacity 0.25s;
}
.modal-fade-enter-from, .modal-fade-leave-to {
  opacity: 0;
}
</style>
