import { createStore } from 'vuex'

interface UserInfo {
  username: string
  loginTime: string
}

interface State {
  isLoggedIn: boolean
  userInfo: UserInfo | null
  selectAllChecked: boolean
}

interface Credentials {
  username: string
  password: string
}

export default createStore({
  state: {
    isLoggedIn: false,
    userInfo: null,
    selectAllChecked: false
  } as State,
  mutations: {
    setLoginStatus(state: State, status: boolean) {
      state.isLoggedIn = status
    },
    setUserInfo(state: State, userInfo: UserInfo) {
      state.userInfo = userInfo
    },
    clearUserInfo(state: State) {
      state.userInfo = null
      state.isLoggedIn = false
    },
    setSelectAllChecked(state: State, checked: boolean) {
      state.selectAllChecked = checked
    }
  },
  actions: {
    // 登录
    async login({ commit }: { commit: Function }, credentials: Credentials) {
      try {
        // 这里可以添加实际的登录 API 调用
        // 模拟登录成功
        commit('setLoginStatus', true)
        commit('setUserInfo', {
          username: credentials.username,
          loginTime: new Date().toISOString()
        })
        return true
      } catch (error) {
        console.error('Login failed:', error)
        return false
      }
    },
    // 登出
    logout({ commit }: { commit: Function }) {
      commit('clearUserInfo')
    }
  },
  getters: {
    isLoggedIn: (state: State) => state.isLoggedIn,
    userInfo: (state: State) => state.userInfo,
    selectAllChecked: (state: State) => state.selectAllChecked
  }
}) 