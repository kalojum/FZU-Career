<template>
  <div class="training-list clearfix">
    <div class="col-md-3 col-sm-6 col-xs-12" v-for="training in traininglist">
      <div class="training">
        <div class="training-pic" 
          @mouseover="showContent(training)" 
          @mouseout="hideContent(training)">
          <div class="training-mask" 
            v-init:show="training" 
            v-show="training.show"
            transition="fade">
            <p class="training-content">{{training.content}}</p>
          </div>
          <img :src="training.pic" alt="">
        </div>
        <div class="training-info clearfix">
          <h2 class="training-title aligncenter">{{training.title}}</h2>
          <span class="training-detail fl">主讲人：{{training.teacher}}</span>
          <span class="training-detail fr">人数：{{training.students}}/{{training.limit}}</span>
          <span class="training-detail fl">培训时间：<br>{{training.start_time}}至{{training.deadline}}</span>
        </div>
      </div>
        <a class="apply-btn" href="">我要报名</a>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import pic1 from '../../assets/images/classrom1.jpg'
  import pic2 from '../../assets/images/classrom2.jpg'

  export default {
    data () {
      return {
        traininglist: [
          {
            pic: pic1,
            title: 'SYB培训模式',
            content: '课程介绍AA课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍',
            teacher: '林渊腾',
            students: '25',
            limit: '40',
            start_time: '2016-07-01',
            deadline: '2016-08-15'
          },
          {
            pic: pic2,
            title: 'SYB培训模式',
            content: '课程介绍BB',
            teacher: '林渊腾',
            students: '25',
            limit: '40',
            start_time: '2016-07-01',
            deadline: '2016-08-15'
          }]
      }
    },
    methods: {
      showContent (training) {
        training.show = true
      },
      hideContent (training) {
        training.show = false
      }
    },
    directives: {
      init: {
        update (training) {
          Vue.set(training, this.arg, false)
        }
      }
    }
  }
</script>