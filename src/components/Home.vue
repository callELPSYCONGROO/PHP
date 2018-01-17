<template>
  <div id="app">
    <div id="ww">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-lg-offset-2 centered">
            <img src="static/img/icon/bigicon.png" alt="Stanley">
            <h1>你好！我是無痕剑！</h1>
            <p>我是一个中国的90后JAVA工程师。我的开源项目可以在我的<a href="https://github.com/callELPSYCONGROO" title="我的GitHub"
                                               target="_blank"> <i class="fa fa-github"></i> GitHub </a>上看到。</p>
            <p>也可以关注我的<a href="http://blog.csdn.net/qq_20112609" title="我的技术博客" target="_blank"> <i
              class="fa fa-rss-square"></i> 技术博客 </a>。我会分享技术文章在上面。</p>
            <p>平时喜欢旅行、美食和运动，感兴趣的话可以看我的<a href="https://weibo.com/314268372" title="我的新浪微博" target="_blank"> <i
              class="fa fa-weibo"></i> 新浪微博 </a>。我会在上面分享我的生活。</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container pt">
      <div class="row mt centered">
        <div class="col-lg-4 github-widget" v-for="repo in githubList" :data-repo="repo"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    created: function () {
      this.$http.get('/api/php/project/getAll', {params: {accountName: 'callELPSYCONGROO', num: 1, size: 3}})
        .then((res) => {

        })
        .catch((err) => {
          alert(err)
        })
    }
  }
</script>

<style>
</style>
