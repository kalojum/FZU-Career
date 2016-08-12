<template>
  <div id="main">
    <nv-header></nv-header>
    <banner :class="classBanner"></banner>
    <div class="news-panel">
      <div class="news-container container clearfix">
        <div class="col-md-8">
          <div class="news-box">
            <div class="hotnews-top"><h1 class="hotnews-h1"><i class="iconfont icon-hot">&#xe60e;</i><a href="">热门资讯</a></h1></div>
            <hotnews-box></hotnews-box>
            <news-box></news-box>
          </div>
        </div>
        <div class="col-md-4">
          <div class="notice-box">
            <div class="notice-top"><h1 class="notice-h1"><i class="iconfont icon-notice">&#xe600;</i><a href="">通知公告</a></h1></div>
            <notice-box></notice-box>
          </div>
        </div>
      </div>
    </div>
    <div class="tutors-panel"></div>
    <div class="bases-panel"></div>
    <div class="projects-panel"></div>
  </div>
</template> 

<script>
import Header from './Header'
import Banner from './Banner'
import HotnewsBox from './HotnewsBox'
import NewsBox from './NewsBox'
import NoticeBox from './NoticeBox'

export default {
  data () {
    return {
      classBanner: {
        'index-banner': true,
        'common-banner': false
      }
    }
  },
  components: {
    nvHeader: Header,
    Banner,
    HotnewsBox,
    NewsBox,
    NoticeBox
  }
}
</script>

<style scoped>               
  .news-panel {
    box-sizing: border-box;
    width: 100%;
    padding: 50px;
    background: url("../assets/news-bg.jpg");
    background-size: cover;
    overflow: hidden;
  }
  .news-box {
    background: #fff;
    padding: 0 12px;
    box-shadow: 0 0 25px 0 #cecece;
    opacity: .9
  }
  .hotnews-top {
    padding: 20px 0 0 10px;
    
  }
  .hotnews-top .icon-hot {
    font-size: 1.1em;
    margin-right: 5px;
  }
  .hotnews-top .hotnews-h1 {
    font-size: 20px;
    font-weight: normal;
  }
  .notice-box {
    position: relative;
    width: 100%;
    height: 566px;
    box-sizing: border-box;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 0 25px 0 #cecece;
    opacity: .9;
  }

  .hotnews-h1 a,
  .notice-h1 a {
    color: #002443;
  }
  .notice-top {
    position: absolute;
  }
  .notice-top .notice-h1{
    font-size: 17px;
    font-weight: normal;
  }
  .notice-top .icon-notice {
    color: #eb4f38;
    font-size: 1.1em;
    margin-right: 5px;
    margin-top: -2px;
  }
  .container {
    margin: 0 auto;
  }

  @media (min-width: 768px) {
    .container {
      width: 750px;
    }
  }
  @media (min-width: 992px) {
    .container {
      width: 970px;
    }
  }
  @media (min-width: 1200px) {
    .container {
      width: 1170px;
    }
  }
  .col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {
    box-sizing: border-box;
    position: relative;
    float: left;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
  }
  .col-xs-12 {
    width: 100%;
  }
  .col-xs-11 {
    width: 91.66666667%;
  }
  .col-xs-10 {
    width: 83.33333333%;
  }
  .col-xs-9 {
    width: 75%;
  }
  .col-xs-8 {
    width: 66.66666667%;
  }
  .col-xs-7 {
    width: 58.33333333%;
  }
  .col-xs-6 {
    width: 50%;
  }
  .col-xs-5 {
    width: 41.66666667%;
  }
  .col-xs-4 {
    width: 33.33333333%;
  }
  .col-xs-3 {
    width: 25%;
  }
  .col-xs-2 {
    width: 16.66666667%;
  }
  .col-xs-1 {
    width: 8.33333333%;
  }
  @media (min-width: 768px) {
    .col-sm-12 {
      width: 100%;
    }
    .col-sm-11 {
      width: 91.66666667%;
    }
    .col-sm-10 {
      width: 83.33333333%;
    }
    .col-sm-9 {
      width: 75%;
    }
    .col-sm-8 {
      width: 66.66666667%;
    }
    .col-sm-7 {
      width: 58.33333333%;
    }
    .col-sm-6 {
      width: 50%;
    }
    .col-sm-5 {
      width: 41.66666667%;
    }
    .col-sm-4 {
      width: 33.33333333%;
    }
    .col-sm-3 {
      width: 25%;
    }
    .col-sm-2 {
      width: 16.66666667%;
    }
    .col-sm-1 {
      width: 8.33333333%;
    }
  }

  @media (min-width: 992px) {
    .col-md-12 {
      width: 100%;
    }
    .col-md-11 {
      width: 91.66666667%;
    }
    .col-md-10 {
      width: 83.33333333%;
    }
    .col-md-9 {
      width: 75%;
    }
    .col-md-8 {
      width: 66.66666667%;
    }
    .col-md-7 {
      width: 58.33333333%;
    }
    .col-md-6 {
      width: 50%;
    }
    .col-md-5 {
      width: 41.66666667%;
    }
    .col-md-4 {
      width: 33.33333333%;
    }
    .col-md-3 {
      width: 25%;
    }
    .col-md-2 {
      width: 16.66666667%;
    }
    .col-md-1 {
      width: 8.33333333%;
    }
   }

</style>
