<template>
  <div id="projects-box" class="projects-box clearfix" >
    <div class="project-box col-md-3 col-sm-6 col-xs-12" v-for="project in projects | limitBy 4">
        <div class="project-detail">
          <div class="project-img">
            <a class="project-pic" href="project_info.html?pid={{pid}}"><img :src="project.pic" alt=""></a>
          </div>
          <div class="project-info">
            <a href="project_info.html?pid={{pid}}"><h4 class="project-name aligncenter">{{project.name}}</h4></a>
            <p class="project-content"> {{project.synopsis}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="project-box col-md-3 col-sm-6 col-xs-12" v-for="project in projects | limitBy 4 4">
        <div class="project-detail">
          <div class="project-img">
            <a class="project-pic" href="project_info.html?pid={{pid}}"><img :src="project.pic" alt=""></a>
          </div>
          <div class="project-info">
            <a href="project_info.html?pid={{pid}}"><h4 class="project-name aligncenter">{{project.name}}</h4></a>
            <p class="project-content"> {{project.synopsis}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import pic1 from '../../assets/images/baseoic.jpg'
  import pic2 from '../../assets/images/66ed930fgw1f4kuznrz1aj223q1i6npd.jpg'
  import pic3 from '../../assets/images/225046.jpg'
  import pic4 from '../../assets/images/225241.jpg'
  export default {
    data () {
      return {
        projects: [
          {
            pic: pic1,
            name: '吃货的外卖工程',
            synopsis: '就介绍一下好吃的啊 外卖啊 还他妈有什么啊'
          },
          {
            pic: pic2,
            name: '电动车顺风车绿丝带红丝带什么鬼',
            synopsis: '泡妞神器嗯嗯'
          },
          {
            pic: pic3,
            name: '大大基地',
            synopsis: '想不出要介绍什么鬼啦啊啊啊啊'
          },
          {
            pic: pic4,
            name: '重构还是要微笑',
            synopsis: '想不出要介绍什么鬼啦啊啊啊啊'
          },
          {
            pic: pic3,
            name: '宇宙世界第一美丽的美少女我最棒',
            synopsis: '想不出要介绍什么鬼啦啊啊啊啊'
          },
          {
            pic: pic3,
            name: '大大基地',
            synopsis: '想不出要介绍什么鬼啦啊啊啊啊'
          },
          {
            pic: pic1,
            name: '吃货的外卖工程',
            synopsis: '就介绍一下好吃的啊 外卖啊 还他妈有什么啊'
          },
          {
            pic: pic2,
            name: '电动车顺风车绿丝带红丝带什么鬼',
            synopsis: '泡妞神器嗯嗯'
          }]
      }
    }
  }
</script>
