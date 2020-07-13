'use strict'

import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import article from './modules/article'
import gallery from './modules/gallery'
import quant from "./modules/quant";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        user,
        article,
        gallery,
        quant
    }
})
