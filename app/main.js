import Vue from 'nativescript-vue';
import VueDevtools from 'nativescript-vue-devtools';
import store from '@/store';
import App from '@/components/App';

/* global TNS_ENV */
if (TNS_ENV !== 'production') {
  Vue.use(VueDevtools);
}

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = TNS_ENV === 'production';
// Vue.config.silent = true;

Vue.prototype.$store = store;

console.warn('📣: main.js', 'asddf');

new Vue({
  store,
  render: h => h('frame', [h(App)]),
}).$start();
