import Vue from 'vue';
import App from './App.vue';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import sourceConfig  from './source_config'

/* set icons */
let icons = {};

Object.keys(sourceConfig).forEach(key => {
  // const lib = require('../../packages/vue/' + key + '/dist/index.bundle.js')
  const lib = require('../../packages/vue/' + key + '/index.js')
  Vue.use(lib.default, {
    prefix: key
  })

  delete lib.default
  icons[key] = {
    title: sourceConfig[key].title,
    lib: lib
  }
})

Vue.prototype.icons = icons

/* set vue */
Vue.config.productionTip = false;

Vue.use(Element);

new Vue({
  render: h => h(App),
}).$mount('#app');
