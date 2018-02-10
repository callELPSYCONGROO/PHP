<template>
  <div id="blogListId" class="project-bg-color">
    <div v-for="(blog, index) in blogList">
      <div class="bg-grey" v-if="index % 2 == 0">
        <BlogItem v-bind:blog=blog></BlogItem>
      </div>
      <div class="bg-white" v-else>
        <BlogItem v-bind:blog=blog></BlogItem>
      </div>
    </div>
  </div>
</template>

<script>
  import BlogItem from '@/components/BlogItem'

  export default {
    name: 'MyBlog',
    data () {
      return {
        flag: true,// 返回数据为空之后就不再查询了
        scrollFlag: true,// 解决下滑的时候，滑动幅度太大，执行过多次handlerScroll方法
        pageNum: 1,
        pageSize: 10,
        blogList: []
      }
    },
    mounted: function () {
      window.addEventListener('scroll', this.handlerScroll);
      this.getBlogList();
    },
    methods: {
      getBlogList: function () {
        const self = this;
        if (!self.$data.flag) {
          return;
        }
        self.$data.flag = false;
        self.$http
            .get('/api/php/blog/getBlogList', {params: {num: self.$data.pageNum, size: self.$data.pageSize}})
            .then(function (res) {
              var list = res.data.data;
              if (!list || list.length == 0) {
                self.$data.flag = false;
                self.$data.scrollFlag = false;
                return;
              } else {
                self.$data.flag = true;
                self.$data.scrollFlag = true;
              }
              for (var i = 0; i < list.length; i++) {
                self.$data.blogList.push(list[i]);
              }
            });
      },
      handlerScroll: function () {
        if (!this.$data.scrollFlag) {
          return;
        }
        let scrollHeight = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        let eleHeight = document.getElementById('blogListId').clientHeight;
        let changeHeight = eleHeight * 4 / 5;
        if (scrollHeight > changeHeight) {
          this.$data.scrollFlag = false;
          this.$data.pageNum = 1 + this.$data.pageNum;
          this.getBlogList();
        }
      }
    },
    components: {
      'BlogItem': BlogItem
    }
  }
</script>

<style scoped>

</style>
