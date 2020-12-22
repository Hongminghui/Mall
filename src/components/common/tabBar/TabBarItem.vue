<template>
    <div class="tab-bar-item" @click="itemClick">
      <!--用一个div包裹插槽，以免插槽被替换掉，样式失效-->
      <div v-if="isActive" class="img"><slot name="item-icon-active" ></slot></div>
      <div v-else class="img"><slot name="item-icon"></slot></div>
      <div :class="{active: isActive}"><slot name="item-text"></slot></div>
    </div>
</template>

<script>
export default {
  name: "TabBarItem",
  data() {
    return {

    }
  },
  computed: {
    isActive() {
      // 当路由活跃时，才变红
      return this.$route.path.includes(this.path)
    }
  },
  props: {
    path: {
      type: String,
      require: true
    }
  },
  methods: {
    itemClick() {
      // 成功解决重复点击报错的问题
      if(this.$route.path !== this.path) {
        this.$router.replace(this.path);
      }else {
        console.log('redundant click');
      }
    }
  }
}
</script>

<style scoped>
.tab-bar-item {
  flex: 1 1 auto;
  text-align: center;
  position: relative;
  top: 0;
  bottom: 0;
  margin: auto 0;
}

.img {
  height: 0.22rem;
}

/* 根据底部tabbar等比例放缩的*/
@media all and (min-width: 391px){
  .img {
    width: 27px;
    height: 27px;
    margin: 0 auto;
  }
  .tab-bar-item {
    flex: 1;
    font-size: 14px;
  }
}

.active {
  color: red;
}
</style>

