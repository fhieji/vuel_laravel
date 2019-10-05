import Vue from 'vue'
import Vuex from 'vuex'

import auth from './auth'
import message from './message'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        auth
    }
})

const store = new Vuex.Store({
    modules: {
        auth,
        error,
        message
    }
})

export default store