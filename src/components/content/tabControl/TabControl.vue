<template>
  <div class="tabControl">
    <div v-for="(item, index) in textList"
    @click="itemClick(index)">
      <span :class="{active: currentIndex === index}">{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props: {
      textList: {
        type: Array,
        default: []
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      // 控制栏点击事件
      itemClick(index) {
        this.currentIndex = index;
        // 将点击事件传出
        this.$emit('tabItemClick', index);
      }
    }
    }

</script>

<style scoped>
  .tabControl {
    width: 100%;
    display: flex;
    text-align: center;
    height: 0.36rem;
    max-height: 48px;
    padding: 0.01rem;
    font-size: 18px;
    justify-content: center;
    background-color: white;
  }
  .tabControl > div {
    flex: 1;
    height: 100%;
    text-align: center;
    position: relative;
    line-height: 100%;
    padding: 5px;
    margin: 0 13px;
  }
  span {
    display: inline-block;
    height: 100%;
    line-height: 34px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto auto;

  }
  .active {
    color: #ff5777;
    border-bottom: 2px solid #ff5777;
  }
  @media all and (min-width: 457px){
    .tabControl {
      line-height: 48px;
    }
  }
</style>
