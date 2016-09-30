<template>
  <div id="notice-box">
    <ul class="notice-list">
      <li v-for="notice in noticelist"><a class="notice-title" href="news.html#!/article">{{notice.title}}</a><span class="time">{{notice.time}}</span></li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        noticelist: [
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
          }]
      }
    }
  }
</script>