import Vue from 'vue'
import Vuex from 'vuex'
import popup from './modules/popup'

Vue.use(Vuex);

const store = new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    modules: {
        popup,
    }
});

export default store