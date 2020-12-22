<template>
  <div id="recommend">
    <div v-for="item in imgList" class="item">
      <a :href="item.link">
        <img :src="item.image" alt="好物特卖">
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommend",
    props: {
      imgList: {
        type: Array,
        default: [],
        required: true
      }
    }
  }
</script>

<style scoped>
  #recommend {
    display: flex;
    position: absolute;
    top: 2rem;
    background-color: white;
    max-width: 457px;
    left: 0;
    right: 0;
    margin: 0 auto;
    box-shadow: 0 1px 1px rgba(100, 100, 100, 0.5);
  }
  .item {
    flex: 1 1 auto;
    margin: 10px;
  }
  .item a {
    display: block;
    width: 100%;
  }
  .item img {
    width: 100%;
  }

  @media all and (min-width: 457px){
    #recommend {
      top: 285px;
    }
  }
</style>
