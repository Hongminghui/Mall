<template>
  <div id="home-nav-bar">
    <nav-bar id="shop"><span slot="center">购物街</span></nav-bar>
  </div>
</template>

<script>
  import NavBar from "../../../components/content/navbar/NavBar";
  export default {
    name: "HomeNavBar",
    components: {
      NavBar
    }
  }
</script>

<style scoped>
  #home-nav-bar {
    background-color: rgb(255,129,152);
    max-width: 457px;
  }
  span {
    font-size: 0.14rem;
    font-weight: bold;
    color: white;
  }
  @media all and (min-width: 457px){
    span {
      font-size: 20px;
    }
  }

</style>
