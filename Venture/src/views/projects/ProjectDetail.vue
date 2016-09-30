<template>
  <div id="project-detail">
    <div class="project-detail-box" v-for="project in projects">
      <div class="project-detail-top clearfix">
        <div class="project-detail-img fl"><img :src="project.logo" alt="logo"></div>
        <div class="fl">
          <div class="project-detail-line"><span class="project-detail-title">项目名称：</span>{{project.name}}</div>
          <div class="project-detail-line"><span class="project-detail-title">项目所属领域：</span>{{project.area}}</div>
          <div class="project-detail-line"><span class="project-detail-title">创建时间：</span>{{project.time}}</div>
          <div class="project-detail-line"><span class="project-detail-title">团队人数：</span>{{project.num}}</div>
          <div class="project-detail-line"><span class="project-detail-title">项目负责人：</span> <a href="">{{project.principal}}</a></div>
        </div>
      </div>
      <div class="project-detail-details">
        <div class="project-detail-info">
          <h2 class="project-detail-title">项目简介</h2>
          <div class="project-detail-intro project-detail-content">
            {{project.synopsis}}
          </div>
        </div>
        <div class="project-detail-info">
          <h2 class="project-detail-title">项目开发进度</h2>
          <div class="project-detail-progress project-detail-content">
            {{project.progress}}
          </div>
        </div>
        <div class="project-detail-info">
          <h2 class="project-detail-title">已融资金额</h2>
          <div class="project-detail-amount project-detail-content">
            {{project.finan_amount}}
          </div>
        </div>
        <div class="project-detail-info">
          <h2 class="project-detail-title">下一融资阶段</h2>
          <div class="project-detail-stage project-detail-content">
            {{project.stage}}
          </div>
        </div>
        <div class="project-detail-info">
          <h2 class="project-detail-title">项目展示</h2>
        </div>
      </div>
      <a class="return" href="javascript :;" onClick="javascript :history.back(-1);" >返回上一级</a>
    </div>
  </div>
</template>

<script>
  import logo from '../../assets/images/3b87e950352ac65cd6c9c90cfbf2b21192138a85.jpg'
  export default {
    data () {
      return {
        projects: [
          {
            logo: logo,
            name: '吃吃吃一体化项目',
            area: '造车轮子',
            time: '2016-08-22',
            num: '3',
            principal: 'cherrycherryan',
            synopsis: '吃吃吃胖死你还吃',
            progress: '二期二期',
            finan_amount: '123456',
            stage: 'A轮'
          }]
      }
    }
  }
</script>