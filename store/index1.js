import Vuex from 'vuex'
import { removeToken, setToken } from '~/utils/cookie'

const { getToken } = require('~/utils/cookie')

const store = new Vuex.Store({
  state: () => ({
    userinfo: {
      nickname: '',
      mobile: '',
      avatar: ''
    },
    token: getToken()
  }),

  getters: {
    getToken (state) {
      return state.token
    }
  },

  mutations: {
    setToken (state, token) {
      state.token = token
    },

    removeToken (state) {
      state.token = ''
    }
  },

  actions: {
  }
})
// const state = {
//   userinfo: {
//     nickname: '',
//     mobile: '',
//     avatar: ''
//   },
//   token: getToken()
// }
//
// const mutations = {
//   SET_TOKEN: (state, token) => {
//     state.token = token
//   },
//
//   SET_USER: (state, user) => {
//     state.userinfo = user
//   },
//
//   REMOVE_TOKEN: (state) => {
//     state.token = ''
//   }
// }
//
// const actions = {
//   loginSuccessSetToken ({ commit }, token) {
//     return new Promise((resolve) => {
//       setToken(token)
//       commit('SET_TOKEN', token)
//       resolve()
//     })
//   },
//
//   // get user info
//   getInfo ({ commit }) {
//     return new Promise((resolve, reject) => {
//       getUserInfo().then((response) => {
//         const user = response.data
//         if (!user) {
//           // reject('登录失败，请重新登录')
//         }
//         commit('SET_USER', user)
//         resolve(user)
//       }).catch((error) => {
//         reject(error)
//       })
//     })
//   },
//
//   // user logout
//   logout ({ commit }) {
//     return new Promise((resolve) => {
//       commit('SET_USER', {
//         nickname: '',
//         mobile: '',
//         avatar: ''
//       })
//       removeToken()
//       commit('SET_TOKEN')
//       resolve()
//     })
//   },
//
//   // remove token
//   resetToken ({ commit }) {
//     return new Promise((resolve) => {
//       removeToken()
//       commit('REMOVE_TOKEN')
//       resolve()
//     })
//   }
// }

// export default {
//   state,
//   mutations,
//   actions
// }

export default () => {
  return store
}
