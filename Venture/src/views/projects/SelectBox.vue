<template>
  <div id="select-box" class="select-box">
      <div class="select-top">
        <div class="select-line clearfix">
          <span class="fl">所属领域：</span>
          <ul class="select-list fr"> 
            <li class="fl aligncenter" :class=" $index === 0 ? 'now' : '' " v-for="area in areas" @click="switchSelect">{{area.name}}</li>
          </ul>
        </div>
        <div class="select-line clearfix">
          <span class="fl">公司形式：</span>
          <ul class="select-list fr"> 
            <li class="fl aligncenter" :class=" $index === 0 ? 'now' : '' " v-for="form in forms" @click="switchSelect">{{form.name}}</li>
          </ul>
        </div>
        <div class="select-line clearfix">
          <span class="fl">融资阶段：</span>
          <ul class="select-list fr"> 
            <li class="fl aligncenter" :index="$index" :class=" $index === 0 ? 'now' : '' " v-for="stage in stages" @click="switchSelect">{{stage.name}}</li>
          </ul>
        </div>
        <div class="select-line clearfix">
          <span class="fl">产品类别：</span>
          <ul class="select-list fr"> 
            <li class="fl aligncenter" :index="$index" :class=" $index === 0 ? 'now' : '' " v-for="category in categories" @click="switchSelect">{{category.name}}</li>
          </ul>
        </div>
        <div class="select-line clearfix">
          <span class="fl">面向群体：</span>
          <ul class="select-list fr"> 
            <li class="fl aligncenter" :index="$index" :class=" $index === 0 ? 'now' : '' " v-for="group in groups" @click="switchSelect">{{group.name}}</li>
          </ul>
        </div>
        <div class="select-line clearfix noborder">
          <div class="search-box fr">
            <input class="search-text" type="text">
            <button class="projects-search-btn"><i class="iconfont icon-search">&#xe617;</i></button>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        areas: [
          {name: '不限'},
          {name: '文化创业类'},
          {name: '科技创业类'},
          {name: '创业苗圃'},
          {name: '互联网+现代农业'},
          {name: '互联网+制造业'},
          {name: '互联网+信息技术服务'},
          {name: '互联网+商务服务'},
          {name: '互联网+公共服务'},
          {name: '互联网+公益创业'}],
        forms: [
          {name: '不限'},
          {name: '未注册'},
          {name: '无限责任公司'},
          {name: '有限责任公司'},
          {name: '股份有限公司'},
          {name: '个人独资企业'},
          {name: '合伙企业'},
          {name: '公司制企业'}],
        stages: [
          {name: '不限'},
          {name: '未融资'},
          {name: '天使轮'},
          {name: 'A轮'},
          {name: 'B轮'},
          {name: 'C轮'},
          {name: 'E轮'}],
        categories: [
          {name: '不限'},
          {name: '硬件'},
          {name: '软件'},
          {name: 'APP'},
          {name: '网站'}],
        groups: [
          {name: '不限'},
          {name: '公司企业'},
          {name: '学校单位'},
          {name: '学生'},
          {name: '母婴'},
          {name: '老年人'},
          {name: '公司职员'},
          {name: '公职人员'},
          {name: '社会人士'}]
      }
    },
    methods: {
      /**
       * 切换项目选项
       */
      switchSelect (event) {
        let line = event.target.parentNode
        let selects = line.querySelectorAll('li')
        for (let select of selects) {
          select.className = select.className.replace(/ now/, '')
        }
        event.target.className += ' now'
      }
    }
  }
</script>