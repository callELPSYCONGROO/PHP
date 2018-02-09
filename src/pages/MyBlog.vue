<template>
  <div class="project-bg-color">

    <div class="bg-grey">
      <div class="container">
      <div class="row">
        <div class="col-lg-8 col-lg-offset-2">
          <p><img src="/static/img/user.png" width="50px" height="50px"> <span class="ba">Stanley Stinson</span></p>
          <p><span class="bd">January 18, 2014</span></p>
          <h4>The Amazing Spiderman</h4>
          <p><b>Spider-Man</b> is a fictional character, a comic book superhero that appears in comic books published by Marvel Comics. Created by writer-editor Stan Lee and writer-artist Steve Ditko, he first appeared in Amazing Fantasy #15 (cover-dated Aug. 1962). </p>
          <p>Lee and Ditko conceived the character as an orphan being raised by his Aunt May and Uncle Ben, and as a teenager, having to deal with the normal struggles of adolescence in addition to those of a costumed crimefighter.</p>
          <p><a href="/#/MyBlogDetail">Continue Reading...</a></p>
        </div>
      </div>
      </div>
    </div>

    <div class="bg-white">
      <div class="container">
      <div class="row">
        <div class="col-lg-8 col-lg-offset-2">
          <p><img src="/static/img/user.png" width="50px" height="50px"> <span class="ba">Stanley Stinson</span></p>
          <p><span class="bd">January 3, 2014</span></p>
          <h4>An Image Post</h4>
          <p><img class="img-responsive" src="/static/img/blog01.jpg" alt=""></p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <p><router-link to="/MyBlogDetail">Continue Reading...</router-link></p>
        </div>
      </div>
      </div>
    </div>

    <div class="bg-grey">
      <div class="container">
      <div class="row">
        <div class="col-lg-8 col-lg-offset-2">
          <p><img src="/static/img/user.png" width="50px" height="50px"> <span class="ba">Stanley Stinson</span></p>
          <p><span class="bd">January 01, 2014</span></p>
          <h4>Believe In Yourself</h4>
          <p class="bq">"A bird sitting on a tree is never afraid of the branch breaking, because her trust is not in the branch, but in her own wings."</p>
          <p><router-link to="/MyBlogDetail">Continue Reading...</router-link></p>
        </div>
      </div>
      </div>
    </div>

    <div id="pullrefresh" class="mui-content mui-scroll-wrapper">
      <div class="mui-scroll">
        <!--数据列表-->
        <ul class="mui-table-view mui-table-view-chevron">
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'MyBlog',
    data () {
      return {
        pageNum: 1,
        pageSize: 10
      }
    },
    mounted: function () {
      mui.init({
        pullRefresh : {
          container: '#pullrefresh',//待刷新区域标识，querySelector能定位的css选择器均可，比如：id、.class等
          up: {
            height: 50,//可选.默认50.触发上拉加载拖动距离
            auto: true,//可选,默认false.自动上拉加载一次
            contentrefresh: '正在加载...',//可选，正在加载状态时，上拉加载控件上显示的标题内容
            contentnomore: '没有更多数据了',//可选，请求完毕若没有更多数据时显示的提醒内容；
            callback: upFreshFunc //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
          }
        }
      });
    },
    methods: {
      // 上拉刷新函数
      upFreshFunc: function () {
        const self = this;
        self.$http
            .get('/api/php/blog/getBlogList', {num: self.$data.pageNum, size: self.$data.pageSize})
            .then(res => {
              var list = res.data.data;
              var table = document.body.querySelector('.mui-table-view');
              var cells = document.body.querySelectorAll('.mui-table-view-cell');
              for (item : list) {
                var li = document.createElement('li');
                li.className = 'mui-table-view-cell';
                
              }
              self.$data.pageSize += 1;
            });
      }
    }
  }
</script>

<style scoped>

</style>
