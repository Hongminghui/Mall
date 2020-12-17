<template>
  <div id="tabBar">
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: "TabBar"
}
</script>

<style scoped>
#tabBar {
  display: flex;
  height: 49px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(240, 240, 240);
  box-shadow: 0 -1px 1px rgba(200, 200, 200, 0.9);
}
</style>