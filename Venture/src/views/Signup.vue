<template>
  <div id="signup" class="signup">
    <div class="container">
      <div class="signup-content">
        <div class="signup-top aligncenter"><a href="index.html"><img src="../../static/logo.png" alt=""></a></div>
        <div class="signup-form">
          <div class="signup-role">
              <input id="select0" type="radio" checked="checked" name="student"  class="st">
              <span class="role now">福大学子</span>
              <input id="select1" type="radio" name="teacher"  class="st">
              <span class="role">创业导师</span>
              <input id="select2" type="radio" name="investor"  class="st">
              <span class="role">投资企业</span>
            </div>
            <div class="signup-box">
              <p class="base-information">
                <label for="username">用户名：</label>
                <input id="username" name="username" type="text" required>
              </p> 
              <p class="base-information">
                <label for="name">姓名：</label>
                <input id="name" name="name" type="text" required>
              </p> 

              <p class="base-information">
                <label for="password">密码：</label>
                <input id="password" name="password" type="password" required>
              </p>
              <p class="base-information">
                <label for="confirm-password">确认密码：</label>
                <input id="confirm-password" name="confirm_password" type="password" required>
              </p>
              <p class="base-information">
                <label for="email">邮箱：</label>
                <input id="email" name="email" type="email">
              </p>
              <p class="base-information">
                <label for="tel">手机号：</label>
                <input id="tel" name="tel" type="text">
              </p>
              <p class="base-information">
                <label for="v-code">短信验证码：</label>
                <input id="v-code" class="v-code" type="v-code" name="v_code" type="text">
                <input type="button" class="send-code" value='发送验证码'>
              </p>
              <p>
                <input id="submit" class="submit-signup" type="submit" value="提交">
              </p>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>