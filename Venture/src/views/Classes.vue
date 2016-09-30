<template>
  <div id="classes">
    <mask v-show="showMask" @click="toggleMask"></mask>
    <nv-header :pos="5" @login="toggleLoginBox"></nv-header>
    <banner class="common-banner"></banner>
    <div class="classes-wrapper">
      <div class="container">
        <div class="training-box">
          <div class="training-box-top"><h2><i class="iconfont icon-training">&#xe618;</i>创业培训</h2></div>
          <training-list></training-list>
        </div>
        <div class="textbook-box">
          <div class="textbook-box-top"><h2><i class="iconfont icon-textbook">&#xe61a;</i>创业教材</h2></div>
          <textbook-list></textbook-list>
        </div> 
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '../components/Header'
  import Mask from '../components/Mask'
  import Banner from '../components/Banner'
  import TrainingList from './classes/TrainingList'
  import TextbookList from './classes/TextbookList'

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
      TrainingList,
      TextbookList
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