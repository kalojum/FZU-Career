<template>
  <div id="header">
    <a href="index.html" id="logo"></a>
    <div class="main-nav">
      <ul class="clearfix">
        <li class="fl"><a href="index.html">首页</a></li>
        <li class="fl"><a href="news.html">新闻资讯</a></li>
        <li class="fl"><a href="bases.html">孵化基地</a></li>
        <li class="fl"><a href="projects.html">创业项目</a></li>
        <li class="fl"><a href="games.html">相关比赛</a></li>
        <li class="fl"><a href="classes.html">培训课堂</a></li>
      </ul>
    </div>
    <div class="user-panel" :class="classUser">
      <span class="login" v-if="login" @click="showLoginBox"><a href="javascript:;">登录</a></span>
      <span class="center" v-else="login"><a href="javascript:;">个人中心</a></span>
      <span class="separator"></span>
      <span class="signup" v-if="login"><a href="signup.html">注册</a></span>
      <span class="logout" v-else="login"><a href="javascript:;">注销</a></span>
    </div>
    <span class="mobile-btn" @click="showMobileMenu"></span>
    <div class="mobile-nav" :class="isOpen? 'open': ''">
      <ul>      
        <li><a href="index.html">首页</a></li>
        <li><a href="news.html">新闻资讯</a></li>
        <li><a href="bases.html">孵化基地</a></li>
        <li><a href="projects.html">创业项目</a></li>
        <li><a href="games.html">相关比赛</a></li>
        <li><a href="classes.html">培训课堂</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isOpen: false,
      login: true
    }
  },
  props: ['pos'], // 当前位置
  ready () {
    this.showNavStyle()
  },
  methods: {
    showMobileMenu () {
      this.isOpen = !this.isOpen
    },
    /**
     * 修改导航样式
     */
    showNavStyle () {
      let nav = document.querySelector('.main-nav')
      let navLi = nav.querySelectorAll('li')
      navLi[this.pos].className += ' on'
    },
    showLoginBox () {
      this.$dispatch('login') // 沿着父链派发事件
    }
  }
}
</script>

