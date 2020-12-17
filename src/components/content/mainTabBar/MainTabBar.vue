<template>
  <div id="main-tab-bar">
    <tab-bar>
      <tab-bar-item class="home" path="/home">
        <img src="~@/assets/img/tabbar/home-active.svg" slot="item-icon-active" alt="">
        <img slot="item-icon" src="~@/assets/img/tabbar/home.svg"  alt="">
        <span slot="item-text">首页</span>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img src="~@/assets/img/tabbar/category-active.svg" slot="item-icon-active" alt="">
        <img slot="item-icon" src="@/assets/img/tabbar/category.svg"  alt="">
        <span slot="item-text">分类</span>
      </tab-bar-item>
      <tab-bar-item path="/shop-cart">
        <img src="~@/assets/img/tabbar/shop-cart-active.svg" slot="item-icon-active" alt="">
        <img slot="item-icon" src="~@/assets/img/tabbar/shop-cart.svg"  alt="">
        <span slot="item-text">购物车</span>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img src="~@/assets/img/tabbar/profile-active.svg" slot="item-icon-active" alt="">
        <img slot="item-icon" src="~@/assets/img/tabbar/profile.svg"  alt="">
        <span slot="item-text">我的</span>
      </tab-bar-item>
    </tab-bar>

  </div>
</template>

<script>
  import TabBar from "../../common/tabBar/TabBar";
  import TabBarItem from "../../common/tabBar/TabBarItem";
  export default {
    name: "MainTabBar",
    components: {
      TabBarItem,
      TabBar
    }
  }
</script>

<style scoped>

img {
  height: 100%;
  vertical-align: middle;
}
</style>
