<template>
  <div class="project-bg-color">
    <div class="container pt1">
      <div class="row mt1">
        <div class="col-lg-6 col-lg-offset-3 centered">
          <h1>我的项目</h1>
          <hr>
          <p>我的开源项目都放在 <a href="https://github.com/callELPSYCONGROO" title="我的GitHub"
                          target="_blank"> <i class="fa fa-github"></i> GitHub </a>上面。</p>
          <p><a href="https://github.com/callELPSYCONGROO/aurora"><b>Auraro</b></a>&nbsp;这个项目是最近在做的Spring Cloud分布式集群系统。它从上到下由网关、API服务和基础服务组成。现在这个网站就是由它提供的接口。</p>
          <p>
            如果有感兴趣的朋友，可以&nbsp;<i class="fa fa-code-fork">&nbsp;fork</i>，一起来完善这个项目。
            当然也可以&nbsp;<i class="fa fa-star">&nbsp;star</i>&nbsp;一下。
            如果发现&nbsp;<i class="fa fa-bug">&nbsp;BUG</i>，请及时联系我。
          </p>
          <hr>
        </div>
      </div>
    </div>
    <div class="centered">
      <h3>Github 项目源</h3>
    </div>
    <GithubRepo></GithubRepo>
  </div>
</template>

<script>
  import GithubRepo from '@/components/GithubRepo'

  export default {
    name: 'MyProject',
    data() {
      return {
        githubRepoParam: {
          accountName: 'callELPSYCONGROO'
        }
      }
    },
    components: {'GithubRepo': GithubRepo}
  }
</script>

<style scoped>

</style>
