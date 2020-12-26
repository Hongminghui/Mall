<template>
  <div class="cart-list">
    <div class="cart-item" v-for="item in cartList">

      <div class="item-selector">
        <label for="check">
          <input type="checkbox" id="check" name="checked">
        </label>
      </div>

      <div class="imageWrapper">
        <img :src="item.image" alt="商品图片">
      </div>

<!--      <div class="textWrapper">-->
<!--        <p>{{ item.description }}</p>-->
<!--        <div>-->
<!--          <span class="price">￥{{ item.price }}</span>-->
<!--          <span>×{{ item.count }}</span>-->
<!--        </div>-->
<!--      </div>-->
    </div>

  </div>
</template>

<script>
export default {
  name: "CartList",
  data() {
    return {
      cartList: JSON.parse(localStorage.getItem('cartList'))
      // cartList: this.$store.state.cartList
    }
  }

}
</script>

<style scoped>

/* 距顶部位置 */
.cart-list {
  position: absolute;
  top: 0.35rem;
  width: 100%;

}

@media all and (min-width: 457px) {
  .cart-list {
    top: 50px;
  }
}

/* 确定cart-item的框架 */
.cart-item {
  height: 110px;
  width: 100%;
  border-top: 1px solid rgb(204, 204, 204);
  padding: 7px;
  position: relative;
}

/* 水平排列 */
.cart-item > div {
  display: inline-block;
}


/* 选择框 */
.item-selector {
  width: 27px;
  height: 95px;
  position: absolute;
  top: 7px;
}

label {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-left: 5px;
}

.cart-item input {
  /* 清除选择框默认样式 */
  /*-webkit-appearance: none;*/
  width: 18px;
  height: 18px;
  border: 1px solid rgb(208, 209, 212);
  border-radius: 50%;
}

/* 图片样式 */
.imageWrapper {
  width: 68px;
  height: 95px;
  border-radius: 5px 5px 5px 5px;
  overflow: hidden;
  position: absolute;
  left: 40px;
}

.imageWrapper img {
  width: 68px;
  height: 95px;
}

/*!* 文字部分 *!*/
/*.textWrapper {*/
/*  position: absolute;*/
/*  left: 140px;*/
/*  margin-right: 20px;*/
/*  color: black;*/
/*  overflow: hidden;*/
/*  width: 300px;*/
/*}*/

/*.textWrapper > p {*/
/*  height: 70px;*/
/*}*/

/*.textWrapper div {*/
/*  position: absolute;*/
/*  border: 15px;*/
/*}*/

/*.textWrapper span {*/
/*  padding: 10px;*/
/*  font-size: 18px;*/
/*}*/

/*.price {*/
/*  color: red;*/
/*}*/

</style>
