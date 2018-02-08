<template>
   <div id="grey">
      <div class="container">
      <div class="row">
        <div class="col-lg-8 col-lg-offset-2">
          <p><img src="/static/img/user.png" width="50px" height="50px"> <span class="ba">Stanley Stinson</span></p>
          <p><span class="bd">January 18, 2014</span></p>
          <h4>The Amazing Spiderman</h4>
          <p><b>Spider-Man</b> is a fictional character, a comic book superhero that appears in comic books published by Marvel Comics. Created by writer-editor Stan Lee and writer-artist Steve Ditko, he first appeared in Amazing Fantasy #15 (cover-dated Aug. 1962). </p>
          <p>Lee and Ditko conceived the character as an orphan being raised by his Aunt May and Uncle Ben, and as a teenager, having to deal with the normal struggles of adolescence in addition to those of a costumed crimefighter.</p>
          <p><router-link to="/MyBlogDetail">Continue Reading...</router-link></p>
        </div>
      </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: "BlogItem",
    data () {
      return {
        blog: {}
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

</style>
