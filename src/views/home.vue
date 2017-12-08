<template lang="html">
  <div>
    <div class="post scroll">
      <h3 class="post-title">[顶] {{header.title}}</h3>
      <p class="datetime">{{header.datetime}}</p>
      <ul v-if="items && items.length">
        <li class="content" v-for="item in items">
          {{ item.Title }}
        </li>
      </ul>
      <ul v-if="errors && errors.length">
        <li v-for="error of errors">
          {{error.message}}
        </li>
      </ul>
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
      header:'',
      items:[],
      errors: []
    }
  },
  created (){
    axios.get(`http://localhost:8889/v1/article/list`).then((response) => {
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
