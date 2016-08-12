<template>
  <ul class="news-nav clearfix">
    <li class="fl hover"><a href="">新闻热点</a></li>
    <li class="fl"><a href="">最新政策</a></li>
  </ul>
  <div id="news-box" class="news-box clearfix">
    <div class="news-list news-left fl">
      <ul>
        <li v-for="news in newslist"><span class="time">{{news.time}}</span><a class="new-title" href="#">{{news.title}}</a></li>
      </ul>
    </div>
    <div class="news-list news-right fl">
      <ul>
        <li v-for="news in newslist"><span class="time">{{news.time}}</span><a class="new-title" href="#">{{news.title}}</a></li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
  .news-nav {
    margin-left: 15px;
  }
  .news-nav a {
    display: inline-block;
    padding: 10px 20px;
    text-align: center;
    font-size: 16px;
    color: #61A3E1;
    border-bottom: 3px solid transparent;
    cursor: pointer;
  }
  .news-nav li.hover {
    border-bottom: 3px solid #61A3E1;
  } 
  .news-list {
    box-sizing: border-box;
    width: 50%;
    margin: 15px 0;
    padding: 0 20px;
    height: 12em;
    overflow: hidden;
  }
  .news-list .time {
    vertical-align: middle;
    color: #999;
    padding-right: 5px;
    font-size: .9em;
    cursor: default;
  }
  .news-list .new-title {
    display: inline-block;
    height: 3em;
    line-height: 3em;
    width: 73%;
    overflow: hidden;
    vertical-align: middle;
    color: #002443;
    white-space: nowrap;
    text-overflow: ellipsis;
    transition: all .2s;
  }
  .news-list .new-title:hover {
    color: #eb4f38;
  }
</style>

<script>
  export default {
    data () {
      return {
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
          }]
      }
    }
  }
</script>