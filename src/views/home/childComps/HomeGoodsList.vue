<template>
  <div id="home-goods-list">
    <div v-for="good in goodsList"
         @click="toDetail(good)"
         class="home-goods">
      <div class="img">
        <img :src="good.show.img" :alt="good.show.title">
      </div>
      <div class="text">
        <p class="title">{{good.title}}</p>
        <div class="price">
          <span>{{good.orgPrice}}</span>
          <span>销量：{{good.sale}}</span>
        </div>
      </div>
    </div>
    <!--加上一个空白块，防止被底部导航栏遮盖，后续有其他方法-->
    <div class="space"></div>
  </div>
</template>

<script>
export default {
  name: "HomeGoodsList",
  props: {
    goodsList: Array
  },
  methods: {
    // 跳转到详情页
    toDetail(good) {
      this.$router.push(`/detail/${good.iid}`)
    }
  }
}
</script>

<style scoped>
  #home-goods-list {
    display: flex;
    flex-wrap: wrap;
    position: absolute;
    top: 5.53rem;
    max-width: 457px;
    left: 0;
    right: 0;
    margin: 0 auto;
    /*bottom: 65px;*/
  }
  .home-goods {
    width: 50%;
    padding: 10px;

  }
  .home-goods .img {
    width: 100%;
    overflow: hidden;
    border-radius: 10px 10px;
    background-color: #ff5777;
  }

  .img img {
    width: 100%;
  }

  /* 调整商品信息 */
  .text {
    height: 0.31rem;
    max-height: 60px;
    width: 100%;
    color: black;
    padding: 3px 5px;
  }
  .text .title {
    height: 0.15rem;
    max-height: 30px;
    width: 1.5rem;
    max-width: 220px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .text .price {
    height: 0.15rem;
  }
  span {
    font-size: 12px;
    margin: 0 6px;
  }
  .space {
    height: 60px;
    width: 100%;
    background-color: white;

  }

  @media all and (min-width: 457px) {
    #home-goods-list {
      top: 748px;
    }

  }

</style>
