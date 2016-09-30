<template>
  <div class="article-wrapper">
    <div class="article" v-for="article in articles">
      <div class="article-top">
        <h1 class="article-title aligncenter">{{article.theme}}</h1>
      </div>
      <div class="article-info">
        <div class="col-md-4 aligncenter">发布时间: <span>{{article.date}}</span></div>
        <div class="col-md-4 aligncenter">发布者：<span>{{article.name.name}}</span></div>
        <div class="col-md-4 aligncenter">浏览量：<span>{{article.hits}}</span></div>
      </div>
      <div class="article-content">{{article.content}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        articles: [
          {
            theme: '我最可爱我最可爱',
            date: '2016-08-21',
            name: {
              name: 'cherry'
            },
            hits: '123',
            content: 'hahah'
          }]
      }
    }
  }
</script>