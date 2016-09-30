<template>
  <div class="news clearfix">
    <div class="news-nav clearfix">
      <ul>
        <li class="active" :class="isActive ? active: '' "><a href="javascript:;" @click.self="toggleNews('news',$event)"><i class="iconfont">&#xe605;</i>新闻热点</a></li>
        <li><a href="javascript:;" @click.self="toggleNews('notice',$event)"><i class="iconfont">&#xe60c;</i>通知公告</a></li>
        <li><a href="javascript:;" @click.self="toggleNews('policy',$event)"><i class="iconfont">&#xe60d;</i>政策法规</a></li>
      </ul>
    </div>
    <div class="news-wrapper">
        <div class="news-content">
          <ul class="news-detail news-list clearfix" v-show="news">
            <li v-for="news of newslist">
              <a v-link="{ path: '/article'}"><i class="iconfont icon-circle">&#xe60f;</i>{{news.theme}}</a>
              <span class="time fr">{{news.date}}</span>
            </li>
          </ul>
          <ul class="news-detail notice-list" v-show="notice">
            <li v-for="notice of noticelist">
              <a v-link="{ path: '/article'}"><i class="iconfont icon-circle">&#xe60f;</i>{{notice.theme}}</a>
              <span class="time fr">{{notice.date}}</span>
            </li>
          </ul>
          <ul class="news-detail policy-list" v-show="policy">
             <li v-for="policy of policylist">
              <a v-link="{ path: '/article'}"><i class="iconfont icon-circle">&#xe60f;</i>{{policy.theme}}</a>
              <span class="time fr">{{policy.date}}</span>
            </li>
          </ul>
        </div>
    </div>
  </div>
  
</template>

<script>
  import { baseUrl } from '../../assets/js/public.js'
  import 'whatwg-fetch'
  export default {
    data () {
      return {
        type: 'news',
        news: true,
        notice: false,
        policy: false,
        size: 5,
        typeState: {
          news: 0,
          notice: 1,
          policy: 2
        },
        newslist: [],
        noticelist: [],
        policylist: []
      }
    },
    created () {
      /**
       * 初始化列表
       */
      this.showNewsList(this.typeState.news, this.size, 1)
      this.showNewsList(this.typeState.notice, this.size, 1)
      this.showNewsList(this.typeState.policy, this.size, 1)
    },
    watch: {
      type (val) {
        this.news = false
        this.notice = false
        this.policy = false
        this[val] = true
      }
    },
    methods: {
      /**
       * 点击侧边导航切换资讯选项
       * @param  {String} type  资讯选项：news/notice/policy
       */
      toggleNews (type, event) {
        this.type = type
        let nav = document.querySelector('.news-nav')
        let lis = nav.querySelectorAll('li')
        let target = event.target.parentNode
        for (let li of lis) {
          li.className = ''
        }
        target.className += 'active'
        this.showNewsList(this.typeState[type], this.size, 1)
      },
      showNewsList (typeNum, size, page) {
        let typeArr = ['newslist', 'noticelist', 'policylist']
        this[typeArr[typeNum]] = []
        this.$http.get(baseUrl + 'notice/list.html', {
          params: { type: typeNum, size, page }
        }).then((response) => {
          let data = response.body.data
          // console.log(response)
          for (let i in data) {
            // this[typeArr[typeNum]]
            if (i === 'pages') break
            this[typeArr[typeNum]].push((data[i]))
          }
          // console.log(this[typeArr[typeNum]])
        })
      }
    }
}
</script>
