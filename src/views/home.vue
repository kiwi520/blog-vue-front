<template lang="html">
<div id='home'>
    <div class="post scroll">
      <ul class="posts" v-if="items && items.length">
        <li v-for="item in items">
          <h3  @click='toDetail(item.Id)'>{{item.Title}}</h3>
          <p class="main">
            <span class="leftbg"><i class='iconfont icon-date'></i>{{item.CreateTime | times}}</span>
          </p>
          <p class='description'>亚马逊今天推出全新 Kindle Oasis 电子书阅读器，新品的最大改进是带有防水功能和更大的 7 英吋显示屏。新品的存储容量分 8GB 和 32GB 两个版本，保护套单独出售并不再配备电池。</p>
          <div>
            <router-link :to="{ name: 'detail', params: { id: item.Id }}" class='readmore'>阅读全文</router-link>
          </div>
        </li>
      </ul>
      <ul v-if="errors && errors.length">
        <li v-for="error of errors">
          {{error.message}}
        </li>
      </ul>
    </div>
</div>
</template>
<script>
import scrollTop from '../components/scrollTop.vue'
import NProgress from 'nprogress'
import axios from 'axios'

export default {
  data () {
    return {
      header:'',
      items:[],
      errors: []
    }
  },
  filters:{
    times:function (val) {
      var date = new Date(val);
     return date.toLocaleString('zh');
    }
  },
  beforeRouteEnter (to, from, next){
    NProgress.start();
    axios.get(`/v1/article/latest`).then((response) => {
      next(vm => {
        vm.items = response.data.data
        NProgress.done()
      })
    }).catch(e => {
      next(vm => {
        vm.errors.push(e)
      })
    })
  },
  components: {
    scrollTop
  },
  methods: {
    toDetail(num) {
      this.$router.push('post/'+num)
    }
  }
}
</script>

<style lang="scss" scoped>
#home{
  background:white;
  width: 960px;
  margin: 0 auto;
  box-shadow: 0px 0px 30px rgba(255, 255, 255, 0.2);
  div.post{
    width: 100%;
    padding: 40px;
  }
  ul.posts{
    overflow: hidden;
    width: 100%;
    margin: 0px;
    padding: 0px;
    li{
      width: 100%;
      list-style: none;
      float: left;
      padding-bottom: 30px;
      border-bottom: 1px dotted rgb(223, 223, 223);
      margin-bottom: 10px;
      h3{
        font-size: 30px;
        margin: 10px 0px;
        float: left;
        &:hover{
          color: #00ada7;
          cursor: pointer;
        }
      }
      .description{
        float: left;
        font-size: 14px;
        line-height: 25px;
        margin: 0px;
      }
      p.main{
        float: left;
        width: 100%;
        margin: 0px;
        span.leftbg{
          color: #888;
          font-size: 14px;
          float: left;
          margin: 0px;
          i.iconfont{
            padding-right: 10px;
          }
        }
        
      }
      div{
        width: 100%;
        overflow: hidden;
        .readmore{
          float: left;
          margin-top: 10px;
          box-shadow: 1px 5px 9px rgba(170,129,243,.32);
          border: 1px solid #f28d1a!important;
          background: #f28d1a;
          border-radius: 1px;
          color: white;
          font-size: 12px;
          padding: 0px 5px;
          height: 30px;
          line-height: 30px;
        }
      }
      
    }
  }
}
</style>
