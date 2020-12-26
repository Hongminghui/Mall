<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>


<script>
  import MainTabBar from "./components/content/mainTabBar/MainTabBar";

  export default {
    name: 'app',
    components: {
      MainTabBar,
    }
  }
</script>
<style>
  @import "./assets/css/base.css";
  html {
    /*iphone5进行调试，调试窗口320px = 100vw，所以10px = */
    font-size: calc(100vw / 3.2);

    /*background-color: #5588aa;
    background-image: linear-gradient(white 1px, transparent 0),
    linear-gradient(90deg, white 1px, transparent 0);
    background-size: 30px 30px;
    max-width: 457px;*/
  }
  #app {
    max-width: 457px;
  }


</style>

