<template lang="html">
  <div class="post scroll">
    <h4>文章归档</h4>
    <ul class="posts">
      <li v-for="post in items">
        <h3>{{post.Title}}</h3>
        <p class="main">
          <span class="leftbg"><i class="newbg"></i>{{post.CreateTime | times}}</span>
          <span class="full">
          <i class="fullbg"></i>
          <router-link :to="{ name: 'detail', params: { id: post.Id }}">看全文</router-link>
          </span>
        </p>
      </li>
    </ul>
    <scrollTop></scrollTop>
  </div>
</template>

<script>
import scrollTop from '../components/scrollTop.vue'
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
  created () {
    this.$http.get(`/v1/article/list`).then((response) => {
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
    /*width: 7.5rem;*/
    margin: 0 auto;
    /*padding: 0.4rem 0.8rem;*/
    list-style: none;
  }
  ul.posts h3 {
    color: #555;
  }

  ul.posts > li:first-child{
    border-top: 1px dashed #ccc;
  }

  ul.posts > li >.main > span.leftbg{
    width: 85%;
    float: left;
    font-size: 20px;
  }
  ul.posts > li >.main > span.leftbg > i.newbg{
    width: 16px;
    height: 16px;
    display: inline-block;
    margin-right: 8px;
    background: url(../assets/newsbg01.png) no-repeat left center;
  }
  ul.posts > li >.main > span.full{
    width: 60px;
    height: auto;
  }
  ul.posts > li >.main > span.full >i.fullbg{
    width:16px;
    height: 16px;
    display: inline-block;
    background: url(../assets/newsbg02.png) no-repeat left center;
  }
  ul.posts > li >.main > span.full > a{
    /*margin-left: 19px;*/
    font-size: 18px;
    font-style: italic;
    color: #838383;
    display: inline-block;
  }
  ul.posts > li {
    position: relative;
    /*padding: 0.4rem 0;*/
    margin-left: 0px;
    padding-left: 0px;
    border-bottom: 1px dashed #ccc;
  }
  ul.posts > li > p {
    font-size: 12px;
    color: #666;
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

