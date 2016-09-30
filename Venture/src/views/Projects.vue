<template>
  <div id="projects">
    <mask v-show="showMask" @click="toggleMask"></mask>
    <nv-header :pos="3" @login="toggleLoginBox"></nv-header>
    <banner class="common-banner"></banner>
    <div class="projects-wrapper">
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '../components/Header'
  import Mask from '../components/Mask'
  import Banner from '../components/Banner'
  import ProjectsList from './projects/PorjectList.vue'
  
  export default {
    data () {
      return {
        showMask: false
      }
    },
    components: {
      nvHeader: Header,
      Banner,
      Mask,
      ProjectsList
    },
    methods: {
      // 父组件header绑定login事件（Vue事件）显示loginBox
      toggleLoginBox () {
        this.showMask = true
      },
      // mask绑定click事件（Dom事件）隐藏loginBox
      toggleMask (event) {
        let target = event.target.className
        let box = new RegExp('login-box')
        if (!box.test(target)) {
          this.showMask = false
        }
      }
    }
  }
</script>