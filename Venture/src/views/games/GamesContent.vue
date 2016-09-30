<template>
  <div id="game-content" class="game-content">
    <div><h1 class="game-title aligncenter">第一届“互联网+”大学生创新创业大赛</h1></div>
    <div class="game-time clearfix">
      <div class="release-time fl">发布时间：</div>
      <div class="end-time fr"><i class="iconfont icon-endtime">&#xe602;</i>截止时间：</div>
    </div>
    <div class="game-introduction-box">
      <div class="game-introduction-top"><h2>大赛介绍</h2></div>
      <div class="game-introduction-detail">
        <p>介绍比赛啊介绍比赛啊介绍比赛</p>
      </div>
      <div class="game-show-top" v-if="hasPast"><h2>往届比赛</h2></div>
      <div class="game-show-detail">
        <ul>
          <li class="pastgame" v-for="past in pastlist">{{past.name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        hasPast: true,
        pastlist: [
        { name: '第一届“互联网+”大学生创新创业大赛' }]
      }
    }
  }
</script>
