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
    return {
      number: JSON.parse(localStorage.getItem('cartList')).length
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
