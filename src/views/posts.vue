<template lang="html">
  <div class="post scroll">
    <h4>文章归档</h4>
    <ul class="posts">
      <li v-for="post in items">
        <span class="time">{{post.CreateTime | times}}</span>
        <router-link :to="{ name: 'detail', params: { id: post.Id }}" class='title'><h3>{{post.Title}}</h3></router-link>
      </li>
    </ul>
    <scrollTop></scrollTop>
  </div>
</template>

<script>
import scrollTop from '../components/scrollTop.vue'
import axios from 'axios'
import nprogress from 'nprogress'

export default {
  data () {
    return {
      items : [],
      errors: []
    }
  },
  filters:{
    times:function (val) {
      var date = new Date(val);
      return date.toLocaleString('zh');
    }
  },
  beforeRouteEnter(to, from, next){
    nprogress.start()
    axios.get(`/v1/article/list`).then((response) => {
      next(vm => {
        vm.items = response.data.data
        nprogress.done()
      })
    }).catch(e => {
      next(vm => {
        vm.errors.push(e)
      })
    })
  },
  components: {
    scrollTop
  }
}
</script>

<style lang="scss" scoped>
div.post{
  width: 960px;
  min-height: calc(100vh - 211px);
  background: white;
  margin: 0 auto;
  h4{
    border-left: 3px solid #00ada7;
    height: 20px;
    line-height: 20px;
    text-indent: 20px;
  }
  h3{
    margin: 0px;
    width: 300px;
    color: #00ada7;
    font-weight: 400;
    text-overflow: ellipsis;
    white-space:nowrap;
  }
  ul.posts {
    width: 100%;
    list-style: none;
    overflow: hidden;
    li{
      float: left;
      width: 100%;
      .title,.time{
        float: left;
      }
      span.time{
        width: 200px;
      }
    }
    
  }
}
</style>

