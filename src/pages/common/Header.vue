<template>
  <div class="navbar navbar-inverse navbar-static-top">
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <router-link class="navbar-brand" to="/Home">無痕剑</router-link>
    </div>
    <div class="navbar-collapse collapse">
      <ul class="nav navbar-nav navbar-right">
        <li><router-link to="/MyProject"><i class="fa fa-code">&nbsp;项目</i></router-link></li>
        <li><router-link to="/MyBlog"><i class="fa fa-pencil-square-o">&nbsp;博客</i></router-link></li>
        <li><router-link to="/AboutMe"><i class="fa fa-grav">&nbsp;关于</i></router-link></li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    name: "Header",
    methods: {
      blogTips: function () {
        this.$alert('博客页面未开放，敬请期待...')
      }
    }
  }
</script>

<style scoped>
  
</style>
