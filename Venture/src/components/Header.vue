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
      <span class="login" v-show="login"><a href="javascript:;">登录</a></span>
      <span class="center" v-show="!login"><a href="javascript:;">个人中心</a></span>
      <span class="separator"></span>
      <span class="signup" v-show="login"><a href="signup.html">注册</a></span>
      <span class="logout" v-show="!login"><a href="javascript:;">注销</a></span>
    </div>
    <span class="mobile-menu"></span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      login: true
    }
  }
}
</script>
