<template>
  <div id="hotnews-box" class="hotnews-box" >
    <div class="hotnews-detail" v-for="news in hotnews">
      <div class="hotnews-img fl">
        <img :src="news.pic" alt="{{news.title}}">
      </div>
      <div class="hotnews-content fl">
        <h3 class="hotnews-title"><a href='news.html#!/article'>{{news.title}}</a></h3>
        <p>{{news.content}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import pic1 from '../../assets/images/225046.jpg'
  import pic2 from '../../assets/images/225241.jpg'
  export default {
    data () {
      return {
        hotnews: [
          {
            pic: pic1,
            title: '我校2015-2016年度省科技拥军项目顺利通过验收',
            content: '6月15日下午，我校2015-2016年度省科技拥军项目验收会在行政南楼123会议室举行。校党委副书记陈少平研究员, 省双拥办、市双拥办、项目合作部队、我校相关部门负责人及有关专家参加了会议。会上，陈少平副书记首先感谢省、市双拥办与驻榕部队把科技拥军任务交给福州大学，并表示福州大学作为福建省科技拥军示范单位.校党委副书记陈少平研究员, 省双拥办、市双拥办、项目合作部队、我校相关部门负责人及有关专家参加了会议。会上，陈少平副书记首先感谢省、市双拥办与驻榕部队把科技拥军任务交给福州大学'
          },
          {
            pic: pic2,
            title: '我校开展贯彻学习习近平总书记在哲学社会科学工作座谈会上重要讲话精神报告会',
            content: '6月8日上午，原厦门大学党委书记、副校长，现厦门大学经济研究所博士生导师吴宣恭教授莅临我校作了尤权书记说，总书记的“七一”重要讲话，回顾了我们党走过的95年奋斗历程，总结了我们党为国家、为民族、为人民作出的伟大历史贡献和得出的重要启示，向全党提出了“不忘初心、继续前进”的号召。讲话气势磅礴、内涵丰富、思想深刻，充满了自信和定力。希望在座及全省广大青年党员带头认真学习习总书记“七一”重要讲话精神，深刻领会精神实质，切实把自身成长与福建发展、祖国建设和党的事业紧密联系在一起，在建设新福建、实现中国梦的伟大事业中绽放青春梦想。'
          }]
      }
    },
    ready () {
      this.showHotnews()
    },
    methods: {
      /**
       * 热门资讯轮播
       */
      showHotnews () {
        let hotnewsBox = document.querySelector('.hotnews-box')
        let detailBox = document.querySelectorAll('.hotnews-detail')
        let index = 0
        let timer = setInterval(startChange, 4000)
        detailBox[0].style.display = 'block'
        hotnewsBox.onmouseover = function () {
          clearInterval(timer)
        }
        hotnewsBox.onmouseout = function () {
          timer = setInterval(startChange, 4000)
        }
        function startChange () {
          let shade = null
          let alpha = 0
          index = ++index % detailBox.length // newsbox数目
          for (let box of detailBox) {
            box.style.display = 'none'
          }
          shade = setInterval(() => {
            startShade(2, 100)
          }, 10)
          detailBox[index].style.display = 'block'
          function startShade (speed, target) {
            alpha += speed
            detailBox[index].style.opacity = alpha / 100
            detailBox[index].style.filter = 'alpha(opacity=' + alpha + ')'
            alpha === target && clearInterval(shade)
          }
        }
      }
    }
  }
</script>
