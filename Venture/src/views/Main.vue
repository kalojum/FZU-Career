<template>
  <div id="main">
    <mask></mask>
    <nv-header></nv-header>
    <banner :class="classBanner"></banner>
    <div class="news-panel">
      <div class="news-container container clearfix">
        <div class="col-lg-8 col-md-8 col-xs-12">
          <div class="news-box">
            <div class="hotnews-top"><h1 class="hotnews-h1"><i class="iconfont icon-hot">&#xe60e;</i><a href="">热门资讯</a></h1></div>
            <hotnews-box></hotnews-box>
            <news-box></news-box>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-xs-12">
          <div class="notice-box">
            <div class="notice-top"><h1 class="notice-h1"><i class="iconfont icon-notice">&#xe600;</i><a href="">通知公告</a></h1></div>
            <notice-box></notice-box>
          </div>
        </div>
      </div>
    </div>
    <div class="tutors-panel">
      <div class="tutors-container container clearfix">
        <div class="tutors-top">
          <h1><a href="#">导师团队</a></h1>
        </div>
        <div class="col-md-4 col-xs-12 aligncenter">
          <div class="tutors-box">
            <div class="tutors-img aligncenter"><i class="iconfont icon-tutors ">&#xe60b;</i></div>
            <div class="tutors-content">
              <div class="tutors-title aligncenter">专家团队亲面指导</div>
              <div class="tutors-detail aligncenter">
                <p>优秀入营项目可配备专属创业导师</p>
                <p>全程辅导、极速孵化，创业路上伴你同行。</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-xs-12 aligncenter">
          <div class="tutors-box">
            <div class="tutors-img aligncenter"><i class="iconfont icon-tutors ">&#xe615;</i></div>
            <div class="tutors-content">
              <div class="tutors-title aligncenter">行业前辈经验切磋</div>
              <div class="tutors-detail aligncenter">
                <p>优秀入营项目可配备专属创业导师</p>
                <p>全程辅导、极速孵化，创业路上伴你同行。</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-xs-12 aligncenter">
          <div class="tutors-box">
            <div class="tutors-img aligncenter"><i class="iconfont icon-tutors">&#xe613;</i></div>
            <div class="tutors-content">
              <div class="tutors-title aligncenter">专家团队亲面指导</div>
              <div class="tutors-detail aligncenter">
                <p>优秀入营项目可配备专属创业导师</p>
                <p>全程辅导、极速孵化，创业路上伴你同行。</p>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
    <div class="bases-panel">
      <div class="bases-container container clearfix">
        <div class="bases-top">
          <h1><a class="aligncenter" href="">创业孵化基地</a></h1>
          <p class="aligncenter">为创业者搭建的制度性、智能化的服务平台，为新创办的小企业提供有利于存活、发展的服务环境和空间环境的公益性服务</p>
        </div>
        <bases-box></bases-box>
      </div>
    </div>
    <div class="projects-panel">
      <div class="projects-container container clearfix">
        <div class="projects-top">
          <h1><a href="#">项目展示</a></h1>
        </div>
        <projects-box></projects-box>
      </div>
    </div>
  </div>
</template> 

<script>
import Header from '../components/Header'
import Banner from '../components/Banner'
import Mask from '../components/Mask.vue'
import HotnewsBox from './index/HotnewsBox'
import NewsBox from './index/NewsBox'
import NoticeBox from './index/NoticeBox'
import BasesBox from './index/BasesBox'
import ProjectsBox from './index/ProjectsBox'
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
    Mask,
    HotnewsBox,
    NewsBox,
    NoticeBox,
    BasesBox,
    ProjectsBox
  },
  ready () {
    let loginBtn = document.querySelector('.login')
    let that = this
    loginBtn.onclick = function () {
      that.showLoginBox()
    }
  },
  methods: {
    showLoginBox () { // 父子组件绑定方法？？？
      let mask = document.querySelector('.mask')
      mask.style.display = 'block'
      mask.addEventListener('click', function (e) {
        var dom = e.srcElement || e.target
        if ((dom.className === 'mask') || (dom.className === 'close')) {
          mask.style.display = 'none'
        }
      })
    }
  }
}
</script>

<style scoped>        
  @font-face {
    font-family: 'shufa';
    src: url('../assets/SHUFA.ttf');
    font-weight: normal;
    font-style: normal;
  }     
  .news-panel {
    box-sizing: border-box;
    width: 100%;
    padding-top: 50px;
    background: url("../assets/news-bg.jpg");
    background-size: cover;
    overflow: hidden;
  }
  .news-container {
    box-sizing: border-box;
  }
  .news-box {
    background: #fff;
    padding: 0 12px;
    box-shadow: 0 0 25px 0 #cecece;
    opacity: .9;
    margin-bottom: 50px;
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
    height: 571px;
    box-sizing: border-box;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 0 25px 0 #cecece;
    opacity: .9;
    margin-bottom: 50px;
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
  .tutors-container,
  .projects-container,
  .bases-container {
    box-sizing: border-box;
    padding: 30px;
  }
  .tutors-top a,
  .projects-top a {
    display: inline-block;
    width: 100px;
    font-size: 22px;
    font-weight: normal;
    padding: 20px 0;
    color: #4E4E5B;
    border-top: 2px solid #61A3E1;
  }
  .tutors-box .icon-tutors{
    color: #61a3e1;
    font-size: 8em;
  }
  .tutors-title {
    padding: 15px;
    font-size: 16px;
    font-weight: bold;
    color: #61A3E1;
  }
  .tutors-detail {
    color: #666;
  }
  .bases-panel {
    background-color: #33A7D6;
  }
  .bases-top {
    color: #fff;
  }
  .bases-top p {
    margin-bottom: 20px;
  }
  .bases-top a {
    display: block;
    color: #fff;
    padding: 20px;
    font-size: 42px;
    font-family: 'shufa';
    font-weight: normal;
  }
  @media (max-height: 768px) {
    .notice-box {
      height: 400px;
    }
  }
</style>
