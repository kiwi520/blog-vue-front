<template>
  <div id='head' :class="state">
      <header class="header">
        <!-- <iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=298 height=52
        src="//music.163.com/outchain/player?type=2&id=19497991&auto=1&height=32"></iframe> -->
        <div class="box">
          <h1>kiwi Blog</h1>
          <h3>Tired for their own life fighting for life</h3>
          <p class="socials">
            <a href="https://weibo.com/6126271354" target="_blank"><i class="iconfont icon-weibo1"></i></a>
            <a href="https://github.com/kiwi520" target="_blank"><i class="iconfont icon-github"></i></a>
            <a href="https://coding.net/u/alltrue"  target="_blank"><i class="iconfont icon-coding"></i></a>
          </p>
        </div>
        <i class="icon-down" @click="rollDown"><i class="iconfont icon-arrowdownb"></i></i>
      </header>
  </div>
</template>
<script>
export default {
    methods: {
        rollDown: function () {
        this.$router.push('/home')
        }
    } 
}
</script>
<style lang='scss' scoped>
 .header {
  position: relative;
  width: 100%;
  height: 100%;
  background: url('../assets/theme10-min.jpg') no-repeat center;
  background-size: cover;
  iframe {
    position: absolute;
    top: 10%;
    left: -254px;
    opacity: 0.4;
  }
  div.box {
  position: absolute;
  top: 40%;
  left: 50%;
  width: 7.5rem;
  font-size: 30px;
  transform: translate(-50%,-50%);
  h1{
    color: white;
    font-size: 30px;
    text-align: center;
  }
  h3 {
    color: white;
    text-align: center;
    margin-top: 10px;
    font-size: 25px;
    font-weight: 400;
    width: 440px;
    text-align: left;
    text-indent: 20px;
    height: 25px;
    line-height: 25px;
    margin: 0 auto;
    font-style: normal;
    border-left: 3px solid red;
  }
  p.socials {
   margin: 30px auto 0 auto;
   width: 200px;
   display: flex;
   justify-content: space-between;
  }
  p.socials > a {
    width: 40px;
    height: 40px;
    i.iconfont{
      color: white;
      font-size: 38px;
    }
    i.icon-coding{
      font-size: 34px;
      &:before{
        line-height: 38px;
      }
    }
  }
 }
 .icon-down {
   position: absolute;
   bottom: 5%;
   left: 50%;
   display: block;
   margin: 10px;
   background-size: 100% 100%;
   animation: pull-down 0.8s linear infinite;
   cursor: pointer;
   text-align: center;
   .iconfont{
     font-size: 40px;
     color: white;
     padding: 0px;
     margin: 0px;
   }
   &:before{
    content: 'Click me';
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%,-150%);
    color: white;
    white-space: nowrap;
    text-align: center;
    font-weight: 600;
   }
  }
}
@media (min-width: 768px) {
  body {
    font-size: 20px;
  }
  .header > .icon-down{
    width: 50px;
    height: 50px;
  }
}
@media (max-width: 768px) {
  body {
    font-size: 16px;
  }
  .header > .icon-down{
    width: 30px;
    height: 30px;
  }
}
@keyframes pull-down {
  from {
    transform: translate3d(-50%,0,0);
    opacity: 0.6;
  }
  to {
    transform: translate3d(-50%,20px,0);
    opacity: 0.2;
  }
}
#head {
  width: 100%;
  height: 100%;
  transition: transform 1s;
}
#head.roll-down {
  transform: translate3d(0,-100%,0);
}
#head.roll-up {
  transform: translate3d(0,0,0);
}
</style>


