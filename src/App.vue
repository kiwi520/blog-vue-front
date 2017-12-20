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
   overflow: hidden;
   background: #fff;
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
 nav.navbar {
   width: 100%;
   height: 100px;
   background-color: black;
 }
 nav.navbar > ul.nav {
   width: 7.5rem;
   height: 100%;
   display: flex;
   margin: 0 auto;
   list-style: none;
   padding: 0;
 }
 nav.navbar > ul.nav > li {
   flex: 1;
   height: 100%;
   line-height: 100px;
   text-align: center;
   color: white;
 }
 nav.navbar > ul.nav > li > a {
   position: relative;
   display: block;
   width: 100%;
   height: 100%;
   color: white;
 }
 nav.navbar > ul.nav > li > a.router-link-active::before {
   content: ">";
   position: absolute;
   top: 0;
   left: 6px;
   height: 100%;
   font-size: 28px;
   border: 0px;
 }
 nav.navbar > ul.nav > li > a.router-link-active::after {
   content: "<";
   position: absolute;
   top: 0;
   right: 6px;
   height: 100%;
   font-size: 28px;
   border: 0px;
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
   font-style: italic;
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
