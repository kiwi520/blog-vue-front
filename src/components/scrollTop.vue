<template lang="html">
  <span class="scrollTop" v-on:click="scrollTop"><i class='iconfont icon-scroll_top'></i></span>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {},
  mounted () {},
  methods: {
    scrollTop : function(){
      var scrollBox = document.getElementById('view');
      var T = setInterval(function(){
        scrollBox.scrollTop -=100;
        if(scrollBox.scrollTop == 0){
          clearInterval(T)
        }
      },10)
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
  span.scrollTop {
    position: fixed;
    bottom: 40px;
    right: 40px;
    display: block;
    width: 40px;
    height: 40px;
    opacity: 0.2;
    cursor: pointer;
    i.iconfont{
      font-size: 50px;
      color: green;
      font-weight: 700;
    }
  }
</style>
