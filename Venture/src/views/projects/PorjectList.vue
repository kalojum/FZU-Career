<template>
    <div class="projects">
      <select-box></select-box>
      <div id="projects-list">
        <div class="project clearfix" v-for="project in projects">
          <div class="project-pic fl">
            <img :src="project.pic" alt="">
          </div>
          <div class="project-detail fl">
            <h2 class="project-title"><a v-link="{ path: '/detail'}">{{project.name}}</a></h2>
            <div class="project-content">
              <p>{{project.synopsis}}</p>
            </div>
          </div>
        </div>
      </div>
  </div>
  
  </div>
</template>

<script>
  import pic1 from '../../assets/images/66ed930fgw1f4kuznrz1aj223q1i6npd.jpg'
  import pic2 from '../../assets/images/3b87e950352ac65cd6c9c90cfbf2b21192138a85.jpg'
  import pic3 from '../../assets/images/user-projects1.png'
  import SelectBox from './SelectBox'

  export default {
    data () {
      return {
        projects: [
          {
            pic: pic1,
            name: '吃货项目',
            synopsis: '吃好喝好吃嘛嘛香吃好喝好吃嘛嘛香吃好喝好吃嘛嘛香吃好喝好吃嘛嘛香吃好喝好吃嘛嘛香吃好喝好吃嘛嘛香吃好喝好吃嘛嘛香吃好喝好吃嘛嘛香吃好喝好吃嘛嘛香吃好喝好吃嘛嘛香吃好喝好吃嘛嘛香吃好喝好吃嘛嘛香吃好喝好吃嘛嘛香吃好喝好吃嘛嘛香吃好喝好吃嘛嘛香吃好喝好吃嘛嘛香吃好喝好吃嘛嘛香吃好喝好吃嘛嘛香吃好喝好吃嘛嘛香吃好喝好吃嘛嘛香吃好喝好吃嘛嘛香吃好喝好吃嘛嘛香吃好喝好吃嘛嘛香吃好喝好吃嘛嘛香吃好喝好吃嘛嘛香吃好喝好吃嘛嘛香吃好喝好吃嘛嘛香吃好喝好吃嘛嘛香吃好喝好吃嘛嘛香吃好喝好吃嘛嘛香吃好喝好吃嘛嘛香吃好喝好吃嘛嘛香吃好喝好吃嘛嘛香吃好喝好吃嘛嘛香吃好喝好吃嘛嘛香吃好喝好吃嘛嘛香吃好喝好吃嘛嘛香吃好喝好吃嘛嘛香吃好喝好吃嘛嘛香吃好喝好吃嘛嘛香吃好喝好吃嘛嘛香吃好喝好吃嘛嘛香吃好喝好吃嘛嘛香吃好喝好吃嘛嘛香吃好喝好吃嘛嘛香吃好喝好吃嘛嘛香吃好喝好吃嘛嘛香吃好喝好吃嘛嘛香吃好喝好吃嘛嘛香吃好喝好吃嘛嘛香吃好喝好吃嘛嘛香吃好喝好吃嘛嘛香'
          },
          {
            pic: pic2,
            name: '今晚要不要吃炒白果',
            synopsis: '又想吃炒白果啊 啊啊啊'
          },
          {
            pic: pic3,
            name: '我控记不住我记己啊啊啊啊',
            synopsis: '又想吃炒白果啊 啊啊啊'
          }
        ]
      }
    },
    components: {
      SelectBox
    }
  }
</script>