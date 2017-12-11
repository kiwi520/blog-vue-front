<template lang="html">
  <div>
    <div class="about">
      <h1>About Website</h1>
      <h3>本站迭代</h3>
      <!--<p class="text">-->
        <!--大家好，我是Cloud，坐标厦门，是一名90后coder（好吧，其实并没有“后”）,谦虚但喜欢装逼，热爱生活，热爱健身，热爱coding。立志全栈的页面仔。-->
      <!--</p>-->
      <!--<h3>技术栈</h3>-->
      <ul class="list">
        <li>2014年第一版使用WordPress+ALiYun</li>
        <li>2015年第二版使用Laravel5.1+Slim+VueJs1.0+ALiYun</li>
        <li>当前版使用BeeGo+VueJs2.0+DigitalOcean</li>
      </ul>
      <p  class="text">
        从最初的使用开源博客系统,然后自己使用LNMP重构,现在又用GoLang重构...
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
export default {
  data () {
    return {}
  },
  computed: {},
  mounted () {},
  methods: {},
  components: {}
}
</script>

<style lang="css" scoped>
  div.about {
    width: 7.5rem;
    margin: 0 auto;
    padding: 0.4rem 0.8rem;
  }
  div.about > h1 {
    margin-bottom: 0.4rem;
  }
  div.about > h2 {
    margin-bottom: 0.3rem;
  }
  div.about > h3 {
    margin: 0.1rem;
  }
  div.about > p.text {
    margin-bottom: 0.4rem;
    line-height: 200%;
    text-indent: 40px;
    color: #555;
    text-align: justify;
  }
  div.about > ul.list {
    padding-left: 0.4rem;
    list-style-position: inside;
    list-style-type: disc;
    line-height: 200%;
  }
</style>
