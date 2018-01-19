<template>
  <div class="container pt1">
    <div class="row mt1 centered" v-for="(index, repo) in githubList" v-if="index < 3" :key="repo.ppId">
      <div class="col-lg-4 ct1 github-widget" :data-repo="repo.accountName + '/' + repo.repoName"></div>
    </div>
    <div class="row mt1 centered" v-else></div>
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
  .mt1 {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .pt1 {
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .ct1 {
    padding-top: 10px;
    padding-bottom: 10px;
  }
</style>
