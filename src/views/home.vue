<template lang="html">
  <div>
    <div class="post scroll">
      <h3 class="post-title">[顶] {{header.title}}</h3>
      <p class="datetime">{{header.datetime}}</p>
      <ul>
        <li class="content" v-for="item in items">
          {{ item.Title }}
        </li>
      </ul>
      <scrollTop></scrollTop>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)
import scrollTop from '../components/scrollTop.vue'
export default {
  data () {
    return {
      header:'',
      items:[]
    }
  },
  created (){
    this.$http.get('http://localhost:8889/v1/article/list').then(function(res){
        if(res.status == 200){
          this.items = res.data.data
        }
    })
  },
  computed: {},
  mounted () {},
  methods: {},
  components: {
    scrollTop
  }
}
</script>

<style lang="css">

</style>
