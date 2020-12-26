<template>
  <div class="bottom">
    <div class="left">

      <el-button :plain="true" @click="openCenter1" class="item" offset="300">
        <div class="innerWrapper">
          <img src="~@/assets/img/detail/service.svg" alt="">
          <img v-if="isActive" src="~@/assets/img/detail/service_active.svg" alt="">
          <p>客服</p>
        </div>
      </el-button>

      <el-button :plain="true" class="item">
        <div class="innerWrapper" @click="cartClick">
          <img src="../../../assets/img/detail/cart.svg" alt="">
          <img v-if="isActive" src="../../../assets/img/detail/cart_active.svg" alt="">
          <p>购物车</p>
        </div>
      </el-button>

      <el-button :plain="true" @click="openCenter2" class="item">
        <div class="innerWrapper">
          <img src="~@/assets/img/detail/shop.svg" alt="">
          <img v-if="isActive" src="~@/assets/img/detail/shop_active.svg" alt="">
          <p>店铺</p>
        </div>
      </el-button>


    </div>
    <div class="rightWrapper">
      <div class="right">
        <div class="cart" @click="cartItemClick"><p>加入购物车</p></div>
        <div class="buy"><p>立刻购买</p></div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "DetailBottom",
  data() {
    return {
      isActive: false
    }
  },
  methods: {

    openCenter1() {
      this.$message({
        message: '我们没客服',
        center: true,
        offset: 200,
      });
    },
    openCenter2() {
      this.$message.success({
        message: '收藏成功',
        center: true,
        offset: 200,
      });
    },
    cartClick() {
      this.$router.push('/shop-cart');
    },
    cartItemClick() {
      this.$message.success({
        message: '添加成功',
        center: true,
        offset: 200,
      });
      this.$emit('cartClick');
    },
  }
}
</script>

<style scoped>
.bottom {
  display: flex;
  z-index: 9999;
  position: fixed;
  bottom: 0;
  height: 0.49rem;
  max-height: 60px;
  width: 100%;
  background-color: white;
  max-width: 457px;
}

.el-button {
  border: none;
}

.left {
  width: 40%;
  display: flex;
}

.item {
  display: flex;
  flex-direction: column;
  width: 30%;
  text-align: center;
  justify-content: space-evenly;
  position: relative;
}

/* 使图片和文字居中 */
.innerWrapper {
  position: absolute;
  left: 0;
  right: 0;
  top: 10px;
  margin: auto auto;
}

.item img {
  width: 0.15rem;
  height: 0.15rem;
  /*left: calc(50% - 0.075rem);*/

  margin: 0 auto;
  max-width: 22px;
  max-height: 22px;
}

.item p {
  font-size: 12px;
  margin-top: 3px;
}

/* 把.right修剪成胶囊形状 */
.rightWrapper {
  width: 60%;
  padding-right: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.right {
  display: flex;
  width: 95%;
  text-align: center;
  color: white;
  padding: 5px 10px;
  background-image: linear-gradient(to right, rgb(255, 192, 29), rgb(241, 26, 39));
  border-radius: 18px 18px 18px 18px;
  height: 36px;

  position: relative;
  left: 10px;
}

/* 使div中的p标签居中 */
.right div {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

}

.cart {
  height: 100%;
  padding-right: 4px;
  border-right: 1px solid rgb(255, 137, 23);
}

p {
  font-size: 12px;
}


/*.right > div {*/
/*  flex: 1;*/
/*  position: relative;*/
/*  height: 30px;*/
/*  margin-top: calc(0.25rem - 20px);*/
/*}*/


/*.right p {*/
/*  !*background-color: #999999;*!*/
/*  position: absolute;*/
/*  left: 0;*/
/*  right: 0;*/

/*  vertical-align: middle;*/
/*  !*line-height: 34px;*!*/
/*  top: 0;*/
/*  bottom: 0;*/
/*  margin: auto auto;*/

/*}*/

</style>
