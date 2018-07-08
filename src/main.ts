import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import './styles/index.scss';
import App from './App.vue';
import router from './router';
import store from './store';
import VueI18n from 'vue-i18n';
import '@babel/polyfill';
Vue.use(ElementUI);
Vue.use(VueI18n);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
