<template lang="html">
  <span class="scrollTop" @click="scrollTop" :class='show ? "active" : ""'><i class='iconfont icon-scroll_top'></i></span>
</template>

<script>
export default {
  data () {
    return {
      show: false
    }
  },
  created() {
    window.addEventListener('scroll', this.ifShowScrollButton)
  },
  destory() {
    window.removeEventListener('scroll', this.ifShowScrollButton)
  },
  methods: {
    scrollTop() {
      window.scrollTo(0, 0)
    },
    ifShowScrollButton() {
      if(window.scrollY > 300) {
        this.show = true
        return
      }
      this.show = false
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
  span.scrollTop {
    position: fixed;
    bottom: -100px;
    right: 40px;
    display: block;
    width: 50px;
    height: 50px;
    opacity: 0;
    cursor: pointer;
    transition: opacity, bottom .5s ease-in-out;
    &.active{
      opacity: 1;
      bottom: 40px;
    }
    i.iconfont{
      font-size: 50px;
      color: #4c5667;
      font-weight: 500;
      text-shadow: 0px 0px rgba(0, 0, 0, 0.3);
    }
  }
</style>
