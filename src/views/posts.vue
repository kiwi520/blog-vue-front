<template lang="html">
  <div>
    <ul class="posts">
      <li v-for="post in posts">
        <h3>{{post.Title}}</h3>
        <!--<p>{{post.datetime}}</p>-->
        <p class="click" v-on:click="read(post.Id)">点击阅读>></p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import router from '../router.js'
export default {
  data () {
    return {
      posts : []
    }
  },
  created () {
    this.$http.get('http://localhost:8889/v1/article/list').then(function(res){
      if(res.status == 200){
        this.posts = res.data.data;
      }
    })
  },
  computed: {},
  mounted () {},
  methods: {
  },
  components: {}
}
</script>

<style lang="css" scoped>
  ul.posts {
    width: 7.5rem;
    margin: 0 auto;
    padding: 0.4rem 0.8rem;
    list-style: none;
  }
  ul.posts h3 {
    color: #555;
  }
  ul.posts > li {
    position: relative;
    /*padding: 0.4rem 0;*/
    border-bottom: 1px dashed #ccc;
  }
  ul.posts > li > p {
    font-size: 12px;
    color: #666;
    /*margin-top: 6px;*/
  }
  ul.posts > li > p.click {
    position: absolute;
    right: 0;
    bottom: 0;
    font-size: 14px;
    cursor: pointer;
    text-decoration: underline;
  }
</style>
