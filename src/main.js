// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueParticles from 'vue-particles'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import MarkdownEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

import App from './App'
import Router from './router'
import Store from './store/store'

import LocalStorage from './mixins/localstorage'

const needAdmin = ['/postArticle', '/uploadPic']

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueParticles)

Vue.use(ElementUI)
Vue.use(MarkdownEditor)

Vue.mixin(LocalStorage)

Router.beforeEach((to, from, next) => {
  if (needAdmin.includes(to.fullPath) && Store.getters['user/isAdmin'] !== true) {
    next({
      path: '/',
      replace: true
    })
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
    components: { App },
    template: '<App/>',
    router: Router,
    store: Store,
    render: h => h(App)
}).$mount("#app")
