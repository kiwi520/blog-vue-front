<template lang="html">
  <div class="post-full">
    <div class="post-cart">
      <h3 class="post-title">{{item.Title}}</h3>
      <p class="datetime">发表于：{{item.CreateTime}}</p>
      <div class="content">{{item.Content}}</div>
      <scrollTop></scrollTop>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import scrollTop from '../components/scrollTop.vue'
export default {
  data () {
    return {
      item: [],
      Mtime: ''
    }
  },
  created () {
    var article_id = this.$route.params.id;
    if(article_id){
      axios.get('http://localhost:8889/v1/article/detail/'+article_id).then((response) => {
        this.item = response.data.data
      }).catch(e => {
        this.errors.push(e)
      })
    }
  },
  computed: {},
  mounted () {},
  methods: {},
  components: {
    scrollTop
  }
}
</script>
<style lang="css" scoped>
  div.post-full{
    width: 960px;
    height: calc(100% - 250px);
    margin: 30px auto;
  }
  div.post-cart {
    opacity: 1;
    margin-top:0px;
    min-height: 100px;
    padding: 35px;
    background: rgba(0,0,0,0.1);
    border-radius: 4px;
    z-index: 100;
    box-shadow: 10px 10px 30px rgba(0,0,0,0.3);
  }
  div.post-cart > h3.post-title {
    text-align: center;
    line-height: 160%;
    margin-bottom: 0.2rem;
    color: #444;
  }
  div.post-cart > p.datetime {
    text-align: center;
    color: #888;
    font-size: 14px;
  }
  div.post-cart div.content pre {
    background-color: #eee;
    overflow-x: scroll;
    padding: 0.2rem 0.3rem;
  }
  div.post-cart div.content blockquote > p{
    position: relative;
    overflow: visible;
  }
  div.post-cart div.content blockquote > p::after {
    content: '';
    position: absolute;
    left: -20px;
    top: 0;
    width: 6px;
    height: 100%;
    background-color: #ddd;
  }
</style>
