import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/home.vue'
import Posts from './views/posts.vue'
import Post from './views/post.vue'
import About from './views/about.vue'
import Banner from './views/banner.vue'
import common from './views/common.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '',
      component: Banner
    },
    {
      path: '/',
      component: common,
      children: [
        {
          path: '/home',
          component: Home
        },
        {
          path: '/posts',
          component: Posts
        },
        {
          path: '/post/:id',
          name:'detail',
          component: Post
        },
        {
          path: '/about',
          component: About
        }
      ]
    }
  ]
})
