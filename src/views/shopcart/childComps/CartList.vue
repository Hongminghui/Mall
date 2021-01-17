<template>
  <div class="cart-list">
    <div v-for="item in cartList" class="cart-item">
      <div class="cart-checkbox">
        <el-checkbox v-model="checked"></el-checkbox>
      </div>

      <div class="cart-img-wrapper">
        <img :src="item.image" alt="">
      </div>

      <div class="cart-item-info">
        <p class="cart-item-desc">{{ item.description }}</p>
        <p class="cart-item-price">
          <span id="price">￥{{ item.price }}</span>
          <span id="count">×{{ item.count }}</span>
        </p>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: "CartList",
  data() {
    return {
      cartList: JSON.parse(localStorage.getItem('cartList')),
      checked: false
    }
  },
  created() {
    console.log(this.cartList)
  }


}
</script>

<style>

.cart-list {
  position: relative;
  top: 0.35rem;
  height: calc(100vh - 0.71rem);
}

.cart-item {
  display: flex;
  height: 1.1rem;
  border-top: 1px solid rgb(233, 233, 233);
}


/* 复选框的调试 */
.cart-checkbox {
  width: 0.3rem;
  height: 100%;
  padding: 10px;
  position: relative;
  top: 0.4rem;
}

.el-checkbox__inner {
  width: 20px;
  height: 20px;
  border-radius: 50%;
}

.el-checkbox__inner::after {
  width: 10px;
  height: 10px;
  left: 5px;
}

/* 图片 */
.cart-img-wrapper {
  height: 0.9rem;
  width: 0.75rem;
  margin: 0.1rem;
  border-radius: 0.1rem;
  overflow: hidden;
}

.cart-img-wrapper > img {
  height: 100%;
  width: 100%;
}

.cart-item-info {
  width: calc(100% - 1.2rem);
  padding: 10px;
  overflow: hidden;
  position: relative;
}

.cart-item-info p, span {
  font-size: 18px;
}

.cart-item-desc {
  height: 0.3rem;
  overflow: hidden;
  line-height: 0.3rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0 20px;
}

.cart-item-price {
  position: absolute;
  bottom: 15px;
  height: 20px;
  width: 100%;
  margin: 0 10px;
}

.cart-item-price #price {
  position: absolute;
  left: 5px;
  color: rgb(255, 163, 129);
}

.cart-item-price #count {
  position: absolute;
  right: 45px;
}


.cart-item-price #count {
  font-size: 24px;
}

</style>
