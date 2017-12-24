<template>
<div id="common">
    <nav class="navbar">
      <ul class="nav">
        <li><router-link to='/home'>首页</router-link></li>
        <li><router-link to='/posts'>文章</router-link></li>
        <li><router-link to='/about'>关于</router-link></li>
      </ul>
    </nav>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <div class="footer">
      <div class="main">
        Copyright © 2017 <a href="/." rel="nofollow" class="author">kiwi blog</a>
        <a class='fonts small' >PowerBy</a>
        <a class="fonts" rel="nofollow" target="_blank" href="https://golang.org/" >GoLang</a>
        <a class="fonts" rel="nofollow" target="_blank" href="https://pages.coding.me">Beego</a>
        <a class="fonts" rel="nofollow" target="_blank" href="https://pages.coding.me">VueJs</a>
        <a class="fonts" rel="nofollow" target="_blank" href="https://pages.coding.me">DigitalOcean</a>
      </div>
    </div>
</div>
</template>
<script>
export default {
  
}
</script>
<style lang='scss' scoped>
#common{
  height: 100%;
  .fade-enter-active {
    transition: opacity .5s ease-in
  }
  .fade-leave-active {
    transition: opacity .2s ease-out
  }
  .fade-enter{
    opacity: 0
  }
  .fade-leave-to {
    opacity: 0
  }
  .fade-enter-to, .fade-leave{
    opacity: 1;
  }
  .router-link-active{
    color: white;
    font-weight: 700;
    padding: 0px 10px;
    border-bottom: 2px solid #f28d1a;
  }
  nav.navbar {
    @media screen and (max-width:760px){
      margin:0px;
    }
    width: 100%;
    height: 50px;
    background-color: #24292e;
    box-shadow:0 1px 1px 0 rgba(0,0,0,.1);
    margin-bottom: 30px;
  }
  nav.navbar > ul.nav {
    width: 7.5rem;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    box-sizing: border-box;
    @media screen and (max-width:760px){
      padding: 0px 20px;
      justify-content: space-between;
    }
    margin: 0 auto;
    list-style: none;
    padding: 0;
  }
  nav.navbar > ul.nav > li {
    padding-right: 50px;
    height: 100%;
    line-height: 50px;
    text-align: center;
    @media screen and (max-width:760px){
      padding-right: 0px;
    }
  }
  nav.navbar > ul.nav > li > a {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    color: rgba(255,255,255,0.75);
    padding: 0px 10px;
  }
  nav.navbar > ul.nav > li > a.router-link-active::before {
    content: "";
    position: absolute;
    top: 0;
    left: 6px;
    height: 100%;
    font-size: 28px;
    border: 0px;
  }
  nav.navbar > ul.nav > li > a.router-link-active::after {
    content: "";
    position: absolute;
    top: 0;
    right: 6px;
    height: 100%;
    font-size: 28px;
    border: 0px;
  }
}
div.footer{
  height: auto;
  div.main{
    overflow: hidden;
    width: 960px;
    @media screen and (max-width:960px){
      width: 760px; 
    }
    @media screen and (max-width:760px){
      width: 100%; 
    }
    height: auto;
    margin-top: 40px;
    margin-bottom: 20px;
    border-top: 1px dashed rgba(0,0,0,0.1);
    padding-top: 20px;
    font-size: 12px;
    a.author{
      color: #00ada7;
      padding-right: 10px;
      padding-left: 10px;
      font-size: 12px;
      font-weight: 700;
    }
    a.fonts{
      @media screen and (max-width:760px){
        display: none;
      }
      font-weight: 400;
      color: #999;
      font-style: normal;
      font-size: 12px;
      &:hover{
        color: #00ada7;
      }
    }
    a.small{
      color: #999;
      font-weight: 400;
      font-size: 12px;
      &:hover{
        color: #999;
      }
    }
  }
}
 
</style>


