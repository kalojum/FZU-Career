<template>
  <div id="news">
    <mask v-show="showMask" @click="toggleMask"></mask>
    <nv-header :pos="1" @login="toggleLoginBox"></nv-header>
    <banner class="common-banner"></banner>
    <div id="news-container" class="container">
      <router-view></router-view> 
    </div>
  </div>
</template>

<script>
  import Header from '../components/Header'
  import Banner from '../components/Banner'
  import Mask from '../components/Mask.vue'

  export default {
    data () {
      return {
        showMask: false
      }
    },
    components: {
      nvHeader: Header,
      Banner,
      Mask
    },
    methods: {
      toggleLoginBox () {
        this.showMask = true
      },
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
