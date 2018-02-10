<template>
  <div class="project-bg-color">
    <div class="bg-white">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-lg-offset-2">
            <h3>{{blog.title}}</h3>
            <p><span class="bd">{{blog.createdAt | formatDate}}</span></p>
            <p><img class="img-responsive" src="static/img/blog01.jpg" alt=""></p>
            <p v-if="blog.content != null" v-html="blog.content"></p>
            <p v-else class="bg-grey">
              {{blog.description}}
              <hr>
              <span><i class="fa fa-spinner fa-spin"></i>&nbsp;文章内容无法加载，请点击下方查看原文</span>
            </p>
            <br>
            <p v-if="blog.tags != null"><span class="bt"><i class="fa fa-tags"></i>&nbsp;<a href="#">{{blog.tags}}</a></span></p>
            <hr>
            <p><router-link to="/MyBlog"><i class="fa fa-link"></i>&nbsp;查看原文</router-link></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {formatDate} from '../util/date.js'

  export default {
    name: 'MyBlogDetail',
    data () {
      return {
        blog: null
      }
    },
    filters: {
        formatDate: function (time) {
          var date = new Date(time);
          return formatDate(date, 'yyyy-MM-dd hh:mm:ss');
        }
    },
    mounted: function () {
      let pbId = this.$route.query.pbId;
      this.getBlogDetail(pbId);
    },
    methods: {
      getBlogDetail: function (pbId) {
        const self = this;
        if (!pbId ||  !/^[1-9]\d*$/.test(pbId)) {
          console.log(pbId)
          self.$alert('请求参数有误！');
          return;
        }
        self.$http
            .get('/api/php/blog/getBlogDetail', {params: {pbId: pbId}})
            .then(function (res) {
              if (!res.data.data) {
                self.$alert('url参数错误，请检查后重新访问');
                return;
              }
              self.$data.blog = res.data.data;
            });
      }
    }
  }
</script>

<style scoped>

</style>
