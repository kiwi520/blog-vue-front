<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      state: ''
    }
  }
}
</script>
<style >

 * {
   box-sizing: border-box;
    -webkit-text-size-adjust: 100%;
    /* Font varient */
    font-variant-ligatures: none;
    -webkit-font-variant-ligatures: none;
    /* Smoothing */
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    font-smoothing: antialiased;
    -webkit-font-smoothing: antialiased;
    text-shadow: rgba(0, 0, 0, .01) 0 0 1px;
    font-size: 16px;
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"PingFang SC","Hiragino Sans GB","Microsoft YaHei",sans-serif;
    color: #4c5667;
    transition: background-color 0.2s ease-in-out;
    transition: color 0.2s ease-in-out;
 }
 a {
   text-decoration: none;
 }
 body {
   font-family: 'Lato', "PingFang SC", "Microsoft YaHei", sans-serif;
 }
 html,body {
   width: 100%;
   height: 100%;
   background: #EBEBEB;
   margin: 0;
   padding: 0;
 }
 #app {
   width: 100%;
   height: 100%;
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
  .footer{
    width: auto;
    height: 50px;
  }
  .footer .main{
    width: 70%;
    height: 30px;
    line-height: 50px;
    margin: 0 auto;
    text-align: center;
  }
 .footer .main .fonts{
   color: #000000;
 }
 div.post {
   width: 7.5rem;
   margin: 0 auto;
   padding: 0.4rem 0.8rem;
   color: #666;
   line-height: 200%;
   text-align: justify;
 }
</style>
