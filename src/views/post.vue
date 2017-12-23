<template lang="html">
  <div class="post-full">
    <div class="post-cart">
      <h3 class="post-title">{{item.Title}}</h3>
      <p class="datetime">发表于：{{item.CreateTime | times}}</p>
      <div class="content markdown-body" v-html="mark"></div>
      <scrollTop></scrollTop>
    </div>
  </div>
</template>
<script scoped>
import axios from 'axios'
import scrollTop from '../components/scrollTop.vue'
import prism from 'markdown-it-prism'
import MarkdownIt from 'markdown-it'
import 'prismjs/themes/prism-okaidia.css'
import nprogress from 'nprogress'

export default {
  data () {
    return {
      item: [],
      mark:''
    }
  },
  filters:{
    times:function (val) {
      var date = new Date(val);
      return date.toLocaleString('zh');
    }
  },
  beforeRouteEnter(to, from, next) {
    nprogress.start();
    var article_id = to.params.id;
    axios.get('/v1/article/detail/'+article_id).then((response) => {
      next(vm => {
        vm.item = response.data.data
        var md = new MarkdownIt()
        md.use(prism)
        vm.mark = md.render(response.data.data.Content)
        nprogress.done()
      })
    }).catch(e => {
      next(vm => {
        vm.errors.push(e)
        nprogress.done()
      })
    })
  },
  components: {
    scrollTop,
  }
}
</script>
<style lang="css" scoped>
  div.post-full{
    /*width: 960px;*/
    width: 100%;
    margin-bottom: 50px;
    
  }
  div.post-cart {
    opacity: 1;
    width: 960px;
    margin: 20px auto;
    padding: 35px;
    border-radius: 3px;
    z-index: 100;
    background: #ffffff;
    min-height: calc(100vh - 221px);
  }
  div.post-cart > h3.post-title {
    text-align: center;
    line-height: 160%;
    margin-bottom: 0.2rem;
    font-size: 24px;
    color: #444;
  }
  div.post-cart > p.datetime {
    text-align: center;
    color: #888;
    font-size: 14px;
  }

  div.post-cart div.content pre {
    background-color: #ffffff;
    padding: 0.2rem 0.3rem;
  }
  div.post-cart div.content blockquote > p{
    position: relative;
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
