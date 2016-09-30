<template>
  <ul class="news-nav clearfix">
    <li class="fl news" :class="news ? 'hover': ''" @mouseover="switch"><a href="">新闻热点</a></li>
    <li class="fl" :class="news ? '': 'hover'" @mouseover="switch"><a href="">最新政策</a></li>
  </ul>
  <div id="news-box">
    <div class="news-list-box clearfix" v-show="news">
      <div class="news-list news-left fl" >
        <ul>
          <li v-for="news in newslist"><span class="time">{{news.time}}</span><a class="news-title" href="news.html">{{news.title}}</a></li>
        </ul>
      </div>
      <div class="news-list news-right fl">
        <ul>
          <li v-for="news in newslist"><span class="time">{{news.time}}</span><a class="news-title" href="news.html#!/article">{{news.title}}</a></li>
        </ul>
      </div>
    </div>
    <div class="policy-list-box clearfix" v-show="!news">
      <div class="news-list news-left fl">
        <ul>
          <li v-for="policy in policylist"><span class="time">{{policy.time}}</span><a class="news-title" href="news.html#!/article">{{policy.title}}</a></li>
        </ul>
      </div>
      <div class="news-list news-right fl">
        <ul>
          <li v-for="policy in policylist"><span class="time">{{policy.time}}</span><a class="news-title" href="#">{{policy.title}}</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        news: true,
        newslist: [
          {
            time: '2016-06-02',
            title: '苏州相城实习录取名单录取录取录取录取'
          },
          {
            time: '2016-06-02',
            title: '关于2016届毕业生网上办理签约手续'
          },
          {
            time: '2016-07-15',
            title: '暑期实习时间广州实习'
          },
          {
            time: '2016-08-22',
            title: '2016年北京金融街高校专场实习双选会'
          }],
        policylist: [
          {
            time: '2016-06-02',
            title: '关于2016届毕业生网上办理签约手续'
          },
          {
            time: '2016-06-02',
            title: '苏州相城实习录取名单录取录取录取录取'
          },
          {
            time: '2016-07-15',
            title: '2016年北京金融街高校专场实习双选会'
          },
          {
            time: '2016-08-22',
            title: '暑期实习时间广州实习'
          }]
      }
    },
    methods: {
      /**
       * 新闻选项卡切换
       * @param  {[event]} event onmouseover事件
       */
      switch (event) {
        let className = event.target.parentNode.className
        let isNews = new RegExp('news').test(className)
        this.news = isNews
      }
    }
  }
</script>

