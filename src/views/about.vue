<template lang="html">
  <div>
    <div class="about">
      <h1>About Website</h1>
      <h3>本站迭代</h3>
      <ul class="list">
        <li>2014年第一版使用WordPress+ALiYun</li>
        <li>2015年第二版使用Laravel5.1+Slim+VueJs1.0+ALiYun</li>
        <li>当前版使用BeeGo+VueJs2.0+DigitalOcean</li>
      </ul>
      <p  class="text">
        从最初的使用开源博客系统,然后自己使用LNMP重构,现在又用GoLang+VueJs2.0 前后端分离重构...
      </p>
    </div>
    <div class="about">
      <h1>About Me</h1>
      <h3>基本信息</h3>
      <p class="text">
        大家好，我是Kiwi，坐标济南，是一名90后coder,谦虚但喜欢装逼，热爱生活，热爱户外登山徒步等，热爱coding...
      </p>
      <h3>技术栈</h3>
      <ul class="list">
        <li>Linux(Ubuntu Centos)</li>
        <li>GoLang(标准库+BeeGo框架)</li>
        <li>PHP(Laravel4+,Yii2+等主流组件框架)</li>
        <li>Database(主要使用Mysql)</li>
        <li>Cache(Redis,MemCached)</li>
        <li>VCS(Git、SVN)</li>
        <li>JS(VueJs1.0+,jQuery等)</li>
        <li>Html(Bootstrap,Element UI)</li>
      </ul>
      <p  class="text">
        虽然可以手敲前端代码,目前还是主要做后端,倾向于全栈开发，励志做一个前后端通吃的kiwi...
      </p>
      <h3>联系我</h3>
      <ul class="list">
        <li><a href="https://weibo.com/6126271354" target="_blank">新浪微博</a></li>
        <li><a href="https://github.com/kiwi520" target="_blank">Gitbub</a></li>
        <li>QQ:1102861547</li>
      </ul>
    </div>
  </div>
</template>

<script>
import nprogress from 'nprogress'

export default {
  data () {
    return {}
  },
  beforeRouteEnter(to, from ,next){
    nprogress.start()
    next(() => {
      nprogress.done()
    })
  }
}
</script>

<style lang="scss" scoped>
  a{
   color: #f28d1a; 
  }
  div.about {
    width: 960px;
    @media screen and (max-width:960px){
      width: 760px; 
    }
    @media screen and (max-width:760px){
      width: 100%; 
    }
    background: white;
    margin: 0 auto;
    padding: 30px 40px 0px 40px;
  }
  div.about:nth-child(2){
    padding-bottom: 40px;
  }
  div.about h1{
    border-left: 3px solid #00ada7;
    text-indent: 20px;
  }
  div.about h3{
    text-indent: 20px;
  }
  div.about > p.text {
    line-height: 200%;
    text-indent: 40px;
    margin: 0px;
    color: #555;
    text-align: justify;
  }
  div.about > ul.list {
    padding-left: 0.4rem;
    list-style-position: inside;
    list-style-type: disc ;
    line-height: 28px;
    margin: 0px;
  }
</style>
