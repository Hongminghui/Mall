<template>
  <div class="detail-nav-bar">
    <nav-bar>
      <div slot="left" id="imgWrapper" @click="back">
          <img src="~@/assets/img/detail/arrow_left.svg" alt="">
      </div>
      <div slot="center" class="center">
        <div v-for="(item, index) in paramsArray"
             :class="{active: index === currentIndex}"
             @click="itemClick(index)">
          <span>{{ item }}</span>
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "../../../components/content/navbar/NavBar";

export default {
  name: "detailNavBar",
  components: {
    NavBar,
  },
  data() {
    return {
      paramsArray: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0,

    }
  },
  methods: {
    itemClick(index) {
      // 权宜之计，只监听参数的点击
      this.currentIndex = index;

      this.$emit('itemClick', index)

    },
    back() {
      this.$router.replace('/home');
    }
  }
}
</script>

<style scoped>
.detail-nav-bar {
  box-shadow: 0 0 10px black;
}
.detail-nav-bar div {
  background-color: white;
}

.center {
  display: flex;
  justify-content: space-around;
}

/* 图标垂直居中 */
#imgWrapper {
  /*position: relative;*/
  padding-top: calc(50% - 8px);
  padding-left: 8px;
}
@media all and (min-width: 457px){
  #imgWrapper {
    padding-top: 15px;
  }
}
img {
  display: block;
  width: 0.15rem;
  height: 0.15rem;
  max-height: 20px;
  max-width: 20px;

}



/* 活跃的参数 */
.active {
  color: #ff5777;
  font-weight: bold;
}

</style>
