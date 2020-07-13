'use strict'

import api from '../../api/auth-api'

const state = {
  login: false,
  name: '',
  roles: [],
  auths: []
}

const actions = {
  login (context, {name, pwd}) {
    return api.post('login', {name, pwd}).then((res) => {
      context.commit('updateUserInfo', res)
    })
  },
  logout (context) {
    return api.post('logout', {}).then(() => {
      context.commit('updateUserInfo', {})
    })
  },
  fetchUserInfo (context) {
    const promise = api.get('getUserInfo', {})
    promise.then((res) => {
      context.commit('updateUserInfo', res)
    })
    return promise
  }
}

const mutations = {
  updateUserInfo (state, info) {
    state.login = info.login === true
    if (state.login === true) {
      state.name = info.name
      state.roles = info.roles
      state.auths = info.auths
    } else {
      state.name = ''
      state.roles = []
      state.auths = []
    }
  }
}

const getters = {
  isLogin (state) {
    return state.login === true
  },
  isAdmin (state) {
    return state.roles.includes('admin')
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
