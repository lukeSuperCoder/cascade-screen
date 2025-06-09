declare module 'vuex' {
  import { ComponentCustomProperties } from 'vue'
  import { Store } from 'vuex'

  // 声明自己的 store 状态
  interface State {
    isLoggedIn: boolean
    userInfo: {
      username: string
      loginTime: string
    } | null
    [key: string]: any
  }

  // 为 `this.$store` 提供类型声明
  declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
      $store: Store<State>
    }
  }
  
  // 声明缺失的类型
  export function createStore(options: any): any
  export function useStore<T = any>(): any
} 