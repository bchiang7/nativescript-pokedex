import Vue from 'nativescript-vue';
import App from './components/App';

import VueDevtools from 'nativescript-vue-devtools';
import store from './store';

/* global TNS_ENV */
if (TNS_ENV !== 'production') {
  Vue.use(VueDevtools);
}

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = TNS_ENV === 'production';

Vue.prototype.$store = store;

// console.log('sdfsddfsdfsd sdffs');

new Vue({
  store,
  render: h => h('frame', [h(App)]),
}).$start();
