<template>
  <div class="detail-nav-bar">
    <nav-bar>
      <div slot="left" class="left">
        <i class="el-icon-arrow-left"></i>
      </div>
      <div slot="center" class="center">
        <div v-for="(item, index) in paramsArray"
             :class="{active: index === currentIndex}"
             @click="itemClick(index)">
          <span>{{item}}</span>
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
      this.currentIndex = index;
      if(index === 1) {
        this.$emit('itemClick')
      }
    }
  }
}
</script>

<style scoped>
  .detail-nav-bar div{
    background-color: white;
  }
  .center {
    display: flex;
    justify-content: space-around;
  }
  /* 图标垂直居中 */
  .left {
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  i {
    display: block;
    /*background-color: black;*/
    /* 勉强实现居中 */
    height: 10px;
    margin-top: calc(50% - 5px);
  }
  /* 活跃的参数 */
  .active {
    color: #ff5777;
    font-weight: bold;
  }

</style>
