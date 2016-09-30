import Vue from 'vue'
import News from './views/News'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

require('./assets/css/news.css')

/* eslint-disable no-new */
// new Vue({
//   el: 'body',
//   components: { News }
// })

Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter()

router.map({
  '/article': {
    component: function (resolve) {
      require(['./views/news/Article.vue'], resolve)
    }
  },
  '/list': {
    component: function (resolve) {
      require(['./views/news/NewsList.vue'], resolve)
    }
  }
})

router.redirect({
  '*': '/list'
})

router.start(News, 'news') // 挂载点已是组件
