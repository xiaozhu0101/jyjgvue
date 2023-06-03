import Vue from 'vue';
import router from './router'
import '@/assets/global.css'
import '@/assets/allcss.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import axios from 'axios'
Vue.prototype.$axios = axios

Vue.use(ElementUI);

new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
