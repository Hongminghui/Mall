<template>
  <div class="detail-goods-info">
    <p>{{goodsInfo.description}}</p>
    <div>
      <span class="price">￥{{goodsInfo.price}}</span>
      <span class="discount">{{goodsInfo.discount}}</span>
    </div>
    <div class="sellInfo">
      <span v-for="item in goodsInfo.sellInfo">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  props: {
    goodsInfo: {
      type: Object
    }
  }
}
</script>

<style scoped>
  p {
    padding: 8px;
    font-size: 14px;
    color: black;
  }
  span {
    margin: 0 10px;
  }
  .price {
    font-size: 18px;
    color: rgb(255,87,119);
  }
  .discount {
    font-size: 16px;
    color: white;
    padding: 2px 8px;
    background-color: red;
    border-radius: 4px 4px;
  }

  .sellInfo {
    font-size: 12px;
    margin-top: 15px;
    padding-bottom: 3px;
    color: rgb(153,153,153);
    border-bottom: 1px solid rgb(239,239,239);
  }
</style>
