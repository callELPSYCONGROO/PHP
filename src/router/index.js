import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import MyProject from '@/pages/MyProject'
import MyBlog from '@/pages/MyBlog'
import MyBlogDetail from '@/pages/MyBlogDetail'
import ABoutMe from '@/pages/ABoutMe'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/MyProject',
      name: 'MyProject',
      component: MyProject
    },
    {
      path: '/MyBlog',
      name: 'MyBlog',
      component: MyBlog
    },
    {
      path: '/MyBlogDetail',
      name: 'MyBlogDetail',
      component: MyBlogDetail
    },
    {
      path: '/ABoutMe',
      name: 'ABoutMe',
      component: ABoutMe
    }
  ]
})
