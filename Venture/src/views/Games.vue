<template>
  <div id="games">
    <mask v-show="showMask" @click="toggleMask"></mask>
    <nv-header :pos="4" @login="toggleLoginBox"></nv-header>
    <banner class="common-banner"></banner>
    <div class="games-wrapper">
      <div class="container clearfix">
        <sidebar 
          :point="0"
          :site="site">
        </sidebar>
        <games-content></games-content>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '../components/Header'
  import Mask from '../components/Mask'
  import Banner from '../components/Banner'
  import Sidebar from '../components/Sidebar'
  import GamesContent from './games/GamesContent'

  export default {
    data () {
      return {
        site: 'game',
        showMask: false
      }
    },
    components: {
      nvHeader: Header,
      Banner,
      Mask,
      Sidebar,
      GamesContent
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