<template>
  <div class="mask" :class="maskObject">
    <div class="login-box popup-box">
      <i class="iconfont close">&#xe616;</i>
      <div class="login-top">
        <img src="../../static/logo.png" alt="">
        <span>欢迎登录</span>
      </div>
      <div class="login-line1 login-line">
        <!-- <img src="images/icon-users.png" alt=""> -->
        <i class="iconfont icon-login">&#xe603;</i>
        <input type="text" name="username" id="username" placeholder="请输入用户名" required>
      </div>
      <div class="login-line2 login-line">
        <!-- <img src="images/icon-password.png" alt=""> -->
        <i class="iconfont icon-login">&#xe608;</i>
        <input type="password" name="password" id="password" placeholder="请输入密码" required>
      </div>
      <div class="login-line3">
        <a class="fr" href="#"><span class="forgot">忘记密码</span></a>
      </div>
        <button class='login-btn'>登录</button>
    </div>
  </div>
</template>
