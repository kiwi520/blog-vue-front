<template lang="html">
    <div class="post scroll">
      <p class="datetime">{{header.datetime}}</p>
      <ul v-if="items && items.length">
        <li class="content" v-for="item in items">
          <p>{{item.CreateTime | times}}</p>
          <router-link :to="{ name: 'detail', params: { id: item.Id }}">{{ item.Title }}</router-link>

        </li>
      </ul>
      <ul v-if="errors && errors.length">
        <li v-for="error of errors">
          {{error.message}}
        </li>
      </ul>
      <scrollTop></scrollTop>
    </div>
</template>
<script>
import axios from 'axios'
import scrollTop from '../components/scrollTop.vue'
export default {
  data () {
    return {
      header:'',
      items:[],
      errors: [],

    }
  },
  filters:{
    times:function (val) {
      var date = new Date(val);
     return date.toLocaleString('zh');
    }
  },
  created (){
    axios.get(`http://localhost:8889/v1/article/latest`).then((response) => {
      this.items = response.data.data
    }).catch(e => {
      this.errors.push(e)
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
