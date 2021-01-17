<template>
  <div>
    <nav-bar>
      <p slot="center">购物车({{number}})</p>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "../../../components/content/navbar/NavBar";
export default {
  name: "CartNavBar",
  components: {
    NavBar
  },
  data() {
    const item = localStorage.getItem('cartList')
    return {
      number: item ? JSON.parse(item).length : 0
    }
  }
}
</script>

<style scoped>
p {
  color: white;
  font-size: 16px;
}
</style>
