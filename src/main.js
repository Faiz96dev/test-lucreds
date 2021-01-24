import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router/index.js'
import store from './store'
import moment from 'moment-timezone'
Vue.use(require('vue-moment'));

Vue.config.productionTip = false

new Vue({
   router,
    store,
    moment,
  vuetify,
  render: h => h(App)
}).$mount('#app')
