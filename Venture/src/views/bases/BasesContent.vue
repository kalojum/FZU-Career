<template>
  <div id="base-content" class="base-content">
    <div><h1 class="base-title aligncenter">第一基地</h1></div>
    <div class="base-introduction-box">
      <div class="base-introduction-top"><h2>基地介绍</h2></div>
      <div class="base-introduction-detail">
        <p>介绍基地介绍基地啊介绍基地</p>
      </div>
      <div class="base-show-top"><h2>基地展示</h2></div>
      <div class="base-show-detail">
        <div class="base-show-pic aligncenter" v-for="pic in pics">
          <img :src='pic.src' alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import pic1 from '../../assets/images/225046.jpg'
  import pic2 from '../../assets/images/baseoic.jpg'

  export default {
    data () {
      return {
        pics: [
        { src: pic1 },
        { src: pic2 }]
      }
    }
  }
</script>