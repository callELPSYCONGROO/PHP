<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-8 col-lg-offset-2">
        <h4><router-link :to="{path: '/MyBlogDetail', query: {pbId: blog.pbId}}"><span class="blog-type" v-if="blog.type === 'original'">【原创】</span><span class="blog-type" v-else>【转载】</span>&nbsp;{{blog.title}}</router-link></h4>
        <br>
        <p><span class="bd">{{blog.createdAt | formatDate}}</span></p>
        <p class="bq"><i class="fa fa-quote-right"></i>&nbsp;{{blog.description}}</p>
        <p><router-link :to="{path: '/MyBlogDetail', query: {pbId: blog.pbId}}">阅读全文...</router-link></p>
      </div>
    </div>
  </div>
</template>

<script>
  import {formatDate} from '../util/date.js'

  export default {
    name: "BlogItem",
    props: {
      blog: {
        type: Object,
        required: true
      }
    },
    filters: {
        formatDate: function (time) {
          var date = new Date(time);
          return formatDate(date, 'yyyy-MM-dd hh:mm:ss');
        }
    },
    data () {
      return {
        
      }
    },
    mounted: function () {
      
    },
    methods: {
      
    },
    updated: function () {
      
    }
  }
</script>

<style scoped>
  .blog-type {
    font-weight: normal;
    font-size: 14px;
  }
</style>
