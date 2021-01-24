import Vue from 'vue'
import Vuex from 'vuex'
import main from "@/store/modules/main";

Vue.use(Vuex);

const store = new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    modules: {
        main,
    }
});

export default store