<template>
  <div id="sidebar">
    <div class="bases-sidebar fl" v-if="base" v-show="show" transition="appear">
      <ul class="sidebar">
        <li v-for="base in bases" :class=" $index === 0 ? 'now' : '' " @click="toggleLi($index)">{{base.name}}</li>
      </ul>
    </div>
    <div class="games-sidebar fl" v-if="game" v-show="show" transition="appear">
      <ul class="sidebar">
        <li v-for="game in games" :class=" $index === 0 ? 'now' : '' " @click="toggleLi($index)">{{game.name}}</li>
      </ul>
    </div>
    <div class="sidebar-btn"><i class="iconfont icon-sidebar" @click="showSidebar">&#xe61b;</i></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        base: false,
        game: false,
        show: false,
        bases: [
        { name: '第一基地' },
        { name: '第二基地' },
        { name: '第三基地' }],
        games: [
        { name: '第一届“互联网+”大学生创新创业大赛' },
        { name: '软件杯服务外包大赛' },
        { name: '蓝桥杯程序大赛' }]
      }
    },
    props: {
      point: {
        type: Number,
        default: 0
      },
      site: String
    },
    created () {
      let curType = this.site
      this[curType] = true
    },
    ready () {
      let btn = document.querySelector('.sidebar-btn')
      if (!btn.offsetWidth) {
        this.show = true
      } else {
        this.show = false
      }
    },
    methods: {
      toggleLi (index) {
        let sidebar = document.querySelector('.sidebar')
        let lis = sidebar.querySelectorAll('li')
        for (let li of lis) {
          li.className = ''
        }
        lis[index].className += 'now'
      },
      showSidebar (event) {
        this.show = !this.show
      }
    }
  }
</script>
