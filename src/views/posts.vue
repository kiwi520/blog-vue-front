<template lang="html">
  <div class="post scroll">
    <ul class="posts">
      <li v-for="post in items">
        <h3>{{post.Title}}</h3>
        <p>{{post.CreateTime}}</p>
        <router-link :to="{ name: 'detail', params: { id: post.Id }}">{{ post.Title }}</router-link>
      </li>
    </ul>
    <scrollTop></scrollTop>
  </div>
</template>

<script>
import axios from 'axios'
import router from '../router.js'
import scrollTop from '../components/scrollTop.vue'
export default {
  data () {
    return {
      items : [],
      errors: []
    }
  },
  created () {
    axios.get(`http://localhost:8889/v1/article/list`).then((response) => {
      this.items = response.data.data
    }).catch(e => {
      this.errors.push(e)
    })
  },
  computed: {},
  mounted () {},
  methods: {
  },
  components: {
    scrollTop
  }
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
