<template>
<div id="common">
    <nav class="navbar">
      <ul class="nav">
        <li><router-link to='/home'>首页</router-link></li>
        <li><router-link to='/posts'>文章</router-link></li>
        <li><router-link to='/about'>关于</router-link></li>
      </ul>
    </nav>
    <router-view></router-view>
    <div class="footer">
      <div class="main">
        Copyright © 2017 <a href="/." rel="nofollow" class="author">kiwi blog</a> PowerBy
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
  nav.navbar {
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
    margin: 0 auto;
    list-style: none;
    padding: 0;
  }
  nav.navbar > ul.nav > li {
    flex: 1;
    height: 100%;
    line-height: 50px;
    text-align: center;
  }
  nav.navbar > ul.nav > li > a {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    color: rgba(255,255,255,0.75);
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
  div.main{
    a.author{
      color: #00ada7;
      padding-right: 10px;
      padding-left: 10px;
    }
    a.fonts{
      font-weight: 400;
      color: #999;
      font-size: 14px;
      font-style: normal;
      &:hover{
        color: #00ada7;
      }
    }
  }
}
 
</style>


