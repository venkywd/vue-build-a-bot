import Vue from 'vue';
import App from './App.vue';
import router from './router';
import pinDirective from './shared/pin-directive';
import store from './store';

Vue.config.productionTip = false;
Vue.directive('pin', pinDirective);

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app');
