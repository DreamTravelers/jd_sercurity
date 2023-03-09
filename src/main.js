import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import JsonViewer from 'vue-json-viewer';
Vue.use(JsonViewer);

import CodeEditor from 'bin-code-editor';
Vue.use(CodeEditor);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
