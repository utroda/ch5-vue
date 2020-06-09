import Vue from 'vue';
import * as CrComLib from '@crestron/ch5-crcomlib/build_bundles/cjs/cr-com-lib';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  mounted() {
    console.log(CrComLib);
  },
  render: (h) => h(App),
}).$mount('#app');
