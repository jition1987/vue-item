// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 通过事件总线方式实现组件兄弟之间传值：建立中转站
let bus = new Vue()
Vue.prototype.bus = bus
/* eslint-disable no-new */
// eslint-disable-next-line no-unused-vars
Vue.use(ElementUI)
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
