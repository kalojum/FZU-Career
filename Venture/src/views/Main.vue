<template>
  <div id="main">
    <mask v-show="showMask" @click="toggleMask"></mask>
    <nv-header :pos="0" @login="toggleLoginBox"></nv-header>
    <banner class="index-banner"></banner>
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
      showMask: false
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
  methods: {
    // 父组件header绑定login事件（Vue事件）显示loginBox
    toggleLoginBox () {
      this.showMask = true
    },
    // mask绑定click事件（Dom事件）隐藏loginBox
    toggleMask (event) {
      let target = event.target.className
      let box = new RegExp('login-box')
      if (!box.test(target)) {
        this.showMask = false
      }
    }
  }
}
</script>
