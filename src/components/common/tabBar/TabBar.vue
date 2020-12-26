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
  height: 0.49rem;
  position: fixed;
  left: 0;
  right: 0;
  margin: 0 auto;
  bottom: 0;
  background-color: rgb(240, 240, 240);
  box-shadow: 0 -1px 1px rgba(200, 200, 200, 0.9);
  z-index: 99;
  /* 设置最大宽度 */
  max-width: 457px;
}

/*当设备宽度大于391px时，tabBar的高度为60px*/
@media all and (min-width: 391px){
  #tabBar {
    display: flex;
    height: 60px;
  }
}
</style>
