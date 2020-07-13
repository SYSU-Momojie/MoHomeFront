'use strict'

import api from '../../api/blog-api'

const state = {
  groups: [],
  previewSrc: ''
}

const actions = {
  getGroups (context) {
    api.get('gallery/getGroups', {})
      .then((res) => {
        context.commit('updateGalleryGroup', res)
      })
  }
}

const mutations = {
  updateGalleryGroup (state, groups) {
    state.groups = groups
  },
  previewImg (state, src) {
    state.previewSrc = src
  },
  hidePreview (state) {
    state.previewSrc = ''
  }
}

const getters = {
  existsPreview (state) {
    return state.previewSrc !== ''
  },
  toPreview (state) {
    return state.previewSrc
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
