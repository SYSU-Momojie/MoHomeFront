'use strict'

import api from '../../api/blog-api'

const actions = {
  postArticle (context, art) {
    return api.post('article/post', art)
  },
  getPage (context, pageParam) {
    return api.get('article/getPage', pageParam)
  }
}

export default {
  namespaced: true,
  actions
}
