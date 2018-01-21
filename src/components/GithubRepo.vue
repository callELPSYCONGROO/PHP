<template>
  <div class="container pt1">
    <div class="row mt1 centered">
      <div class="ct1 github-widget" v-for="repo in githubList" :data-repo="repo.accountName + '/' + repo.repoName"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GithubRepo",
    data () {
      return {
        githubList: []
      }
    },
    mounted: function () {
      this.getRepoName();
    },
    methods: {
      getRepoName: function () {
        const self = this;
        self.$http
          .get(
            '/api/php/project/getAll',
            {
              params: {
                accountName: self.$parent.githubRepoParam.accountName,
                num: self.$parent.githubRepoParam.num,
                size: self.$parent.githubRepoParam.size
              }
            }
          )
          .then(function (res) {
            self.githubList = res.data.data;
          })
      }
    },
    updated: function () {
      GithubRepoWidget.init();
    }
  }
</script>

<style scoped>
  
</style>
