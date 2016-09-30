import Vue from 'vue'
import Projects from './views/Projects'
import VueRouter from 'vue-router'
require('./assets/css/projects.css')

/* eslint-disable no-new */
// new Vue({
//   el: 'body',
//   components: { Projects }
// })

Vue.use(VueRouter)

const router = new VueRouter()

router.map({
  '/detail': {
    component: function (resolve) {
      require(['./views/projects/ProjectDetail.vue'], resolve)
    }
  },
  '/list': {
    component: function (resolve) {
      require(['./views/projects/PorjectList.vue'], resolve)
    }
  }
})
router.redirect({
  '*': '/list'
})

router.start(Projects, 'projects') // 挂载点已是组件
