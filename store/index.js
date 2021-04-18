import { getToken, removeToken, setToken } from '~/utils/cookie'
import { getUserInfoApi } from '~/api/user'

export const state = () => ({
  userinfo: {
    id: '',
    nickname: '',
    phone: '',
    avatar: ''
  },
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

  // get user info
  getInfo ({ commit }) {
    return new Promise((resolve, reject) => {
      getUserInfoApi().then((response) => {
        const user = response.data.user
        if (!user) {
          // reject('登录失败，请重新登录')
        }
        commit('SET_USER', user)
        resolve(user)
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
