<template>
  <div id='head' :class="state">
      <header class="header">
        <!-- <iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=298 height=52
        src="//music.163.com/outchain/player?type=2&id=19497991&auto=1&height=32"></iframe> -->
        <div class="box">
          <h1>kiwi Blog</h1>
          <h3 style="font-style: italic">Tired for their own life fighting for life</h3>
          <p class="socials">
            <a href="https://github.com/kiwi520" target="_blank" class='icon github'></a>
            <a href="https://coding.net/u/alltrue"  target="_blank" class='icon coding'></a>
            <a href="https://weibo.com/6126271354" target="_blank" class='icon sina'></a>
          </p>
        </div>
        <i class="icon-down" @click="rollDown"></i>
        <i class="icon-up" @click="rollUp"></i>
      </header>
  </div>
</template>
<script>
export default {
    data() {
      return {
        state:'roll-up'
      }
    },
    methods: {
        rollDown: function () {
        this.state = 'roll-down'
        this.$router.push('/home')
        },
        rollUp: function () {
        this.state = 'roll-up'
        }
    } 
}
</script>
<style>
 .header {
   position: relative;
   width: 100%;
   height: 100%;
   background: url('../assets/theme10-min.jpg') no-repeat center;
   background-size: cover;
 }
 .header > iframe {
   position: absolute;
   top: 10%;
   left: -254px;
   opacity: 0.4;
 }
 .header > div.box {
   position: absolute;
   top: 40%;
   left: 50%;
   width: 7.5rem;
   transform: translate(-50%,-50%);
 }
 .header  h1 {
   color: white;
   text-align: center;
 }
 .header  h3 {
   color: white;
   text-align: center;
   margin-top: 10px;
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
  p.socials {
   margin: 30px auto 0 auto;
   overflow: hidden;
   width: 210px;
 }
 p.socials > a.icon {
   float: left;
   width: 30px;
   height: 30px;
   margin: 0 20px;
   background-size: 100% 100%;
   border-radius: 5px;
 }
 p.socials > a.github {
   background-image: url('../assets/github-10-xxl.png');
 }
 p.socials > a.sina {
   background-image: url('../assets/sina-logo.png');
 }
 p.socials > a.coding {
   background-image: url('../assets/coding-logo.png');
 }
 .header > .icon-down {
   position: absolute;
   bottom: 5%;
   left: 50%;
   display: block;
   margin: 10px;
   background-image: url('../assets/Arrowhead-Down.png');
   background-size: 100% 100%;
   animation: pull-down 0.8s linear infinite;
   cursor: pointer;
 }
 .header > .icon-down::before {
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
 .header > .icon-up {
   position: absolute;
   top: 200%;
   left: 10px;
   z-index: 1000;
   display: block;
   width: 60px;
   height: 60px;
   background-image: url('../assets/rocket.png');
   background-size: 100% 100%;
   transform: translate(0,calc(-100% - 0.5rem));
   cursor: pointer;
   opacity: 0.2;
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


