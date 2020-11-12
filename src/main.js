import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引进create
// popwindow已经是插件的形式了
import create from '@/plugins/create'

Vue.config.productionTip = false
// Vue.prototype.$create = create;
Vue.use(create)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
