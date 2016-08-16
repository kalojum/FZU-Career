<template>
  <div class="mask" :class="maskObject">
    <div class="login-box popup-box">
      <span class="close"></span>
      <div class="login-top">
        <img src="../../static/logo.png" alt="">
        <span>欢迎登录</span>
      </div>
      <div class="login-line1 login-line">
        <!-- <img src="images/icon-users.png" alt=""> -->
        <input type="text" name="username" id="username" placeholder="请输入用户名" required>
      </div>
      <div class="login-line2 login-line">
        <!-- <img src="images/icon-password.png" alt=""> -->
        <input type="password" name="password" id="password" placeholder="请输入密码" required>
      </div>
      <div class="login-line3">
        <a class="fr" href="#"><span class="forgot">忘记密码</span></a>
      </div>
        <button class='login-btn'>登录</button>
    </div>
  </div>
</template>

<script>
  export default {
    showLoginBox () {
      let mask = document.querySelector('.mask')
      console.log(mask)
    }
  }
</script>
<style>
  @font-face {
    font-family: 'shufa';
    src: url('../assets/SHUFA.ttf');
    font-weight: normal;
    font-style: normal;
  }     
  .mask {
    display: none;
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 99;
    background-color: rgba(49, 57, 68, .95);
  }
  .popup-box {
    position: fixed;
    width: 500px;
    height: 370px;
    left: 50%;
    top: 50%;
    margin: -200px 0 0 -250px ; 
    background-color: #fff;
    z-index:1000;
  }
  .close {
    display: inline-block;
    position: absolute;
    right: -23px;
    top: 2px;
    width: 15px;
    height: 15px;
    /*background: url('../images/close.png') no-repeat;*/
    background-size: contain;
    cursor: pointer;
  }
  .login-top img{
    display: block;
    margin: 0 auto;
    width: 58%;
    padding: 20px;
  }
  .login-top span {
    display: block;
    text-align: center;
    font-family: 'shufa';
    font-size: 20px;
    color: #293352;
    margin-bottom: 20px;
    cursor: default;
  }
  .login-line {
    width: 60%;
    margin: 0 auto;
    padding: 10px;
  }
  .login-box .login-line input{
    border: 1px solid #cecece;
    line-height: 30px;
    width: 86%;
    border-radius: 5px;
    text-indent: 1em;
  }
  .login-box .login-line3 {
    height: 12px;
    width: 50%;
    margin: 10px auto;
    font-size: 13px;
  }
  .login-box .forgot {
    color: #293352;
  }
  .login-box .login-btn {
    display: block;
    width: 200px;
    height: 35px;
    margin: 30px auto;
    background-color:  #61A3E1;
    color: #fff;
    cursor: pointer;
  }
</style>