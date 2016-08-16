<template>
  <div id="notice-box">
    <ul class="notice-list">
      <li v-for="notice in noticelist"><a class="notice-title" href="#">{{notice.title}}</a><span class="time">{{notice.time}}</span></li>
    </ul>
  </div>
</template>

<style scoped>
  .notice-list {
    width: 100%;
    margin-top: 35px;
    overflow: auto;
  }
  .notice-list li{
    padding: 5px 5px 5px 25px;
    line-height: 20px;
    border-left: 1px solid #efefef;
  }
  .time {
    display: block;
    text-align: right;
    font-size: .9em;
    color: #aaa;
    padding: 2px 15px;
    cursor: default;
  }
  .notice-title {
    position: relative;
    color: #222;
    transition: all .2s;
  }
  .notice-title:before {
    border-left: 8px solid #69BCCB;
    border-bottom: 5px solid transparent;
    border-top: 5px solid transparent;
    content:'';
    position: absolute;
    top: 5px;
    left: -26px;
  }
  .notice-title:hover {
    color: #eb4f38;
  }
</style>

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