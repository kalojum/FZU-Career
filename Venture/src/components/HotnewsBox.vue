<template>
  <div id="hotnews-box" class="hotnews-box">
    <div class="hotnews-detail" v-for="news in hotnews">
      <div class="hotnews-img fl">
        <img :src="news.pic" alt="{{news.title}}">
      </div>
      <div class="hotnews-content fl">
        <h3 class="hotnews-title"><a href='article.html?id='>{{news.title}}</a></h3>
        <p>{{news.content}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import pic1 from '../assets/225046.jpg'
  export default {
    data () {
      return {
        hotnews: [
          {
            pic: pic1,
            title: '我校2015-2016年度省科技拥军项目顺利通过验收',
            content: '6月15日下午，我校2015-2016年度省科技拥军项目验收会在行政南楼123会议室举行。校党委副书记陈少平研究员, 省双拥办、市双拥办、项目合作部队、我校相关部门负责人及有关专家参加了会议。会上，陈少平副书记首先感谢省、市双拥办与驻榕部队把科技拥军任务交给福州大学，并表示福州大学作为福建省科技拥军示范单位.校党委副书记陈少平研究员, 省双拥办、市双拥办、项目合作部队、我校相关部门负责人及有关专家参加了会议。会上，陈少平副书记首先感谢省、市双拥办与驻榕部队把科技拥军任务交给福州大学'
          }]
      }
    }
  }
</script>

<style>
  .hotnews-detail {
    margin-bottom: 8px;
    height: 250px;
    padding: 10px;
    z-index: 1000;
    overflow: hidden;
  }
  .hotnews-img {
    width: 50%;
    height: 100%;
    overflow: hidden;
  }
  .hotnews-img img {
    width: 100%;
    height: 100%;
  }
  .hotnews-title {
    max-height: 3em;
    overflow: hidden;
  }
  .hotnews-title a {
    color: #002443;
  }
  .hotnews-content {
    width: 48%;
    line-height: 1.5em;
    height: 16.5em;
    overflow: hidden;
    margin-left: 2%;
    cursor: default;
  }
</style>