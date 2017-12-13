<template lang="html">
  <div class="post-full">
    <div class="post-cart">
      <h3 class="post-title">{{item.Title}}</h3>
      <p class="datetime">发表于：{{item.CreateTime}}</p>
      <!--<div class="content">{{item.Content}}</div>-->
      <div id="makeHtml" style="display: none">{{item.Content}}</div>
      <div id="markdown"></div>
      <scrollTop></scrollTop>
    </div>
  </div>
</template>


<script scoped>
import axios from 'axios'
import scrollTop from '../components/scrollTop.vue'
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import showdown from '/static/js/showdown.min.js'
import prism from '/static/js/prism.js'



var converter = new showdown.Converter(),
  texts = $('#makeHtml').html();
texts = texts.replace(/&lt;/g,"<");
texts = texts.replace(/&gt;/g,">");
texts = texts.replace(/&nbsp;/g," ");
texts = texts.replace(/\n+/g,function(ns){
  if(ns.length==1)
    return '  '+ns
  return ns
});
$('#markdown').html(converter.makeHtml(texts));


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
  methods: {
    // 绑定@imgAdd event
    $imgAdd(pos, $file){
      alert("qweq")
      // 第一步.将图片上传到服务器.
      var formdata = new FormData();
      formdata.append('image', $file);
      axios({
        url: 'http://localhost:8889/ueidtor',
        method: 'post',
        data: formdata,
        headers: { 'Content-Type': 'multipart/form-data' },
      }).then((url) => {
        // 第二步.将返回的url替换到文本原位置![...](./0) -> ![...](url)
        // $vm.$img2Url 详情见本页末尾
        $vm.$img2Url(pos, url);
      })
    }
  },
  components: {
    scrollTop,
    mavonEditor
  }
}
</script>
<style lang="css" scoped>
  @import '/static/css/prism.css';
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
