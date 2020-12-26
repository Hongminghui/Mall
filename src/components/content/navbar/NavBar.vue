<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style>
  /*在这个项目中出现的所有顶部导航条都是相同的高度，相同的颜色，所以在这就写好*/
  .nav-bar {
    display: flex;
    height: 0.35rem;
    text-align: center;
    background-color: rgb(255,129,152);
    /* 设置顶部导航栏固定，同时会脱离文档流，覆盖下面的轮播图 */
    position: fixed;
    z-index: 999;
    width: 100%;
    left: 0;
    right: 0;
    top: 0;
    margin: 0 auto;
    /* 设置最大宽度 */
    max-width: 457px;
  }

  .nav-bar > span {
    font-size: 0.14rem;
    font-weight: bold;
    color: white;
  }
  @media all and (min-width: 457px){
    span {
      font-size: 20px;
    }
  }
  .left, .right {
    width: 0.3rem;
  }
  .center {
    flex: 1;
    margin: auto auto;
  }

  @media all and (min-width: 457px){
    .nav-bar {
      height: 50px;
      font-size: 20px;
    }
  }
</style>

