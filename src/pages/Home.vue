<template>
<div id="app" class="home-bg-color">
  <div>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-lg-offset-2 centered">
          <img src="static/img/icon/bigicon.png" alt="Stanley">
          <h1>你好！我是無痕剑！</h1>
          <p>我是一个中国的90后JAVA工程师。我的开源项目可以在我的&nbsp;<a href="https://github.com/callELPSYCONGROO" title="我的GitHub"
                                             target="_blank"><i class="fa fa-github"></i>&nbsp;GitHub</a>&nbsp;上看到。</p>
          <p>也可以关注我的&nbsp;<a href="http://blog.csdn.net/qq_20112609" title="我的技术博客" target="_blank"><i
            class="fa fa-rss-square"></i>&nbsp;技术博客</a>&nbsp;。我会分享技术文章在上面。</p>
          <p>平时喜欢旅行、美食和运动，感兴趣的话可以看我的&nbsp;<a href="https://weibo.com/314268372" title="我的新浪微博" target="_blank"><i
            class="fa fa-weibo"></i>&nbsp;新浪微博</a>&nbsp;。我会在上面分享我的生活。</p>
          <hr>
        </div>
      </div>
    </div>
  </div>
  <GithubRepo></GithubRepo>
</div>
</template>

<script>
  import GithubRepo from '@/components/GithubRepo'

  export default {
    name: 'Home',
    data () {
      return {
        githubRepoParam: {
          accountName: 'callELPSYCONGROO',
          num: 1,
          size: 3
        }
      }
    },
    components: {'GithubRepo': GithubRepo}
  }
</script>

<style>
</style>
