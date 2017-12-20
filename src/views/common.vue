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
        Copyright © 2017 <a href="/." rel="nofollow" style="font-style: italic">kiwi blog</a> PowerBy
        <a class="fonts" rel="nofollow" target="_blank" href="https://golang.org/" style="font-weight: bold"> GoLang </a> |
        <a class="fonts" rel="nofollow" target="_blank" href="https://pages.coding.me" style="font-weight: bold"> Beego </a> |
        <a class="fonts" rel="nofollow" target="_blank" href="https://pages.coding.me" style="font-weight: bold"> VueJs </a> |
        <a class="fonts" rel="nofollow" target="_blank" href="https://pages.coding.me" style="font-weight: bold"> DigitalOcean </a>
      </div>
    </div>
</div>
</template>
<script>
export default {
  
}
</script>
<style>

</style>


