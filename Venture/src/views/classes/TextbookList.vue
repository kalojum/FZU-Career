<template>
  <div class="textbook-list clearfix">
    <div class="col-md-3 col-sm-6 col-xs-12" v-for="textbook in textbooklist">
      <div class="textbook">
        <div class="textbook-pic">
          <a href="http://ow365.cn/?i=10263&furl=http://123.207.58.12/FZU-VentureService/Upload/Courses/Word/test.docx" target="_blank"><img :src="textbook.pic" alt=""></a>
        </div>
        <div class="textbook-info">
          <h2 class="textbook-title aligncenter">{{textbook.title}}</h2>
          <a class="textbook-download" href="http://123.207.58.12/FZU-VentureService/Upload/Courses/Word/test.docx">下载</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import pic1 from '../../assets/images/classrom1.jpg'
  import pic2 from '../../assets/images/classrom2.jpg'

  export default {
    data () {
      return {
        content: false,
        textbooklist: [
          {
            pic: pic1,
            title: '如何撰写商业计划书'
          },
          {
            pic: pic2,
            title: 'SYB培训模式'
          }]
      }
    }
  }
</script>