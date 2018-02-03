import Vue from 'vue'
import App from './App'
import router from './router'
import moment from 'vue-moment'

window.axios = require('axios');

Vue.config.productionTip = false;

Vue.use(moment);

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
