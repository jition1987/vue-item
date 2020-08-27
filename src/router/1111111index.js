import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Todolist from '@/components/todolist'
import A from '@/components/a'
import A1 from '@/components/a1'
import A2 from '@/components/a2'
import B from '@/components/b'
import Supper from '../components/supperTosub/Supper'
Vue.use(Router)

export default new Router({
  /* 路由模式：bash(地址栏中有#)和history */
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'helloworld',
      component: HelloWorld,
      children: [{
        path: '/b',
        component: B
      }]
    },
    {
      path: '/todo',
      component: Todolist
    },
    {
      path: '/a',
      component: A,
      children: [
        {
          path: '/a1',
          component: A1
        },
        {
          path: '/a2',
          component: A2
        }
      ]
    },
    {
      path: '/supper',
      component: Supper
    }
  ]
})
