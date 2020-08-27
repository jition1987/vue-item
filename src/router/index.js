import Vue from 'vue'
import Router from 'vue-router'
import UserLogin from '../components/views/UserLogin'
import UserMenue from '../components/views/UserMenue'
Vue.use(Router)

export default new Router({
  /* 路由模式：bash(地址栏中有#)和history */
  mode: 'history',
  routes: [
    {
      path: '/',
      component: UserLogin
    },
    {
      path: '/usermenue',
      component: UserMenue
    }
  ]
})
