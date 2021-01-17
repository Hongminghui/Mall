<template>
  <div class="shop-cart-wrapper">
    <cart-nav-bar></cart-nav-bar>
    <cart-list></cart-list>
  </div>
</template>

<script>
import CartNavBar from "./childComps/CartNavBar";
import CartList from "./childComps/CartList";

export default {
  name: "ShopCart",
  components: {
    CartNavBar,
    CartList,
  },
  // mounted() {
  //   console.log(this.$store.state.cartList);
  // }
}
</script>

<style scoped>
.shop-cart-wrapper {
  position: absolute;
  width: 100%;
  max-width: 457px;
  left: 0;
  right: 0;
  margin: 0 auto;

}
</style>
