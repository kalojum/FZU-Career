<template>
  <div id="header">
    <a href="index.html" id="logo"></a>
    <div class="main-nav">
      <ul class="clearfix">
        <li class="fl on"><a href="index.html">首页</a></li>
        <li class="fl"><a href="index.html">新闻资讯</a></li>
        <li class="fl"><a href="index.html">孵化基地</a></li>
        <li class="fl"><a href="index.html">创业项目</a></li>
        <li class="fl"><a href="index.html">相关比赛</a></li>
        <li class="fl"><a href="index.html">培训课堂</a></li>
      </ul>
    </div>
    <div class="user-panel" :class="classUser">
      <span class="login" v-if="login"><a href="javascript:;">登录</a></span>
      <span class="center" v-else="login"><a href="javascript:;">个人中心</a></span>
      <span class="separator"></span>
      <span class="signup" v-if="login"><a href="signup.html">注册</a></span>
      <span class="logout" v-else="login"><a href="javascript:;">注销</a></span>
    </div>
    <span class="mobile-menu" @click="showMobileMenu"></span>
    <div class="mobile-nav" :class="isOpen? 'open': ''">
      <ul>      
        <li><a href="index.html">首页</a></li>
        <li><a href="information.html">新闻资讯</a></li>
        <li><a href="base.html">孵化基地</a></li>
        <li><a href="projects.html">创业项目</a></li>
        <li><a href="game.html">相关比赛</a></li>
        <li><a href="classroom.html">培训课堂</a></li>
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
  methods: {
    showMobileMenu () {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style>
  .mobile-nav {
    display: none;
    width: 100%;
    background-color: #fff;
    opacity: 0;
    transition: opacity .3s;
  }
  .mobile-nav li{
      box-shadow: 0 0 1px 0 #cecece;
  }
  .open {
    display: block;
    opacity: 1;
  }
  .mobile-nav a {
    display: block;
    padding: 10px 20px;
    color: #293352;
  }

</style>
