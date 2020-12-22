<template>
  <div id="home-popular">
    <img src="../../../assets/img/home/popular_bg.png" alt="popular">
  </div>
</template>

<script>
export default {
  name: "HomePopular"
}
</script>

<style scoped>
  #home-popular {
    position: absolute;
    width: 100%;
    top: 2.84rem;
    max-width: 457px;
    left: 0;
    right: 0;
    margin: 0 auto;

  }
  img {
    width: 100%;
  }
  @media all and (min-width: 457px){
    #home-popular {
      top: 412px;
    }
  }

</style>
