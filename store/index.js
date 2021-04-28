// import { Message } from 'element-ui'
import { getToken, removeToken, setToken } from '~/utils/cookie'
import { getUserInfoApi } from '~/api/user'

export const state = () => ({
  userinfo: {
    id: '',
    nickname: '',
    phone: '',
    avatar: ''
  },
  dialog: 'none',
  token: getToken()
})

export const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },

  SET_USER: (state, user) => {
    state.userinfo = user
  },

  REMOVE_TOKEN: (state) => {
    state.token = ''
  },

  SET_DIALOG: (state, value) => {
    state.dialog = value
  }
}

export const actions = {
  loginSuccessSetToken ({ commit }, token) {
    return new Promise((resolve) => {
      setToken(token)
      commit('SET_TOKEN', token)
      resolve()
    })
  },

  // 获取用户信息
  getInfo ({ commit }) {
    // 返回一个期约
    return new Promise((resolve, reject) => {
      // 请求获取用户信息的API
      getUserInfoApi().then((response) => {
        // 如果token已失效则删除token
        if (response.code === 1) {
          commit('REMOVE_TOKEN')
          removeToken()
        } else {
          // 如果token有效则设置用户信息到sotre中
          const user = response.data.user
          commit('SET_USER', user)
          commit('SET_TOKEN', getToken())
          resolve(user)
        }
      }).catch((error) => {
        reject(error)
      })
    })
  },

  // user logout
  logout ({ commit }) {
    return new Promise((resolve) => {
      commit('SET_USER', {
        nickname: '',
        mobile: '',
        avatar: ''
      })
      removeToken()
      commit('SET_TOKEN')
      resolve()
    })
  },

  // remove token
  resetToken ({ commit }) {
    return new Promise((resolve) => {
      removeToken()
      commit('REMOVE_TOKEN')
      resolve()
    })
  }
}
