'use strict'

import api from '../../api/quant-api'

const state = {
}

const actions = {
    getPage (context, pageParam) {
        return api.get('article/getPage', pageParam)
    }
}

const mutations = {

}

const getters = {

}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
