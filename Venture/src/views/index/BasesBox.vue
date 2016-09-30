<template>
  <div id="bases-box" class="bases-box clearfix" >
    <div class="col-md-4 col-xs-12 aligncenter" v-for="base in bases">
      <div class="base-detail" >
        <div class="base-img" >
          <img :src="base.pic" alt="{{bases.title}}">
        </div>
        <div class="base-content">
          <h3 class="base-title aligncenter"><a class="base-name" href='article.html?id='>{{base.title}}</a></h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import pic from '../../assets/images/baseoic.jpg'
  export default {
    data () {
      return {
        // activeUrl: url(pic),
        bases: [
          {
            pic: pic,
            title: '第一基地'
          },
          {
            pic: pic,
            title: '第二基地'
          },
          {
            pic: pic,
            title: '第三基地'
          }]
      }
    }
  }
</script>
