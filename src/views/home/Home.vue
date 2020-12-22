<template>
  <div class="home">
    <!--导航栏-->
    <home-nav-bar ref="nav"></home-nav-bar>
    <div class="infinite-list-wrapper"
         @scroll="tabScroll($event)"
         ref="scrollWrapper"
         style="overflow:auto">
      <ul
        class="list"
        v-infinite-scroll="load"
        infinite-scroll-disabled="disabled"
      >
        <!--轮播图-->
        <home-carousel :img-list="banner"></home-carousel>
        <!--好物特卖-->
        <home-recommend :img-list="recommend"></home-recommend>
        <!--分隔条-->
        <div class="separate"></div>
        <!--本周流行-->
        <home-popular></home-popular>
        <!--控制栏-->
        <tab-control
          :text-list="['流行', '新款', '精选']" class="tab-control"
          @tabItemClick="tabItemClick"
          :class="{fixed: isFixed}"
          ref="tabControl"
          @scroll="tabScroll($event)"
        ></tab-control>
        <!--商品列表-->
        <home-goods-list :goods-list="goodsList[currentType].list"></home-goods-list>
      </ul>
      <div class="message">
        <p v-if="loading">加载中...</p>
        <p v-if="noMore">没有更多了</p>
      </div>
    </div>
    <!--回到顶部-->
    <el-backtop target=".infinite-list-wrapper" :bottom="100"></el-backtop>

  </div>
</template>

<script>

// 公共组件
import TabControl from "../../components/content/tabControl/TabControl";

// 子组件
import HomeNavBar from "./childComps/HomeNavBar";
import HomeCarousel from "./childComps/HomeCarousel";
import HomeRecommend from "./childComps/HomeRecommend";
import HomePopular from "./childComps/HomePopular";
import HomeGoodsList from "./childComps/HomeGoodsList";

// 网络请求
import {getMultiData, getData} from "../../network/home";

export default {
  name: 'Home',
  components: {
    HomeNavBar,
    HomeCarousel,
    HomeRecommend,
    HomePopular,
    TabControl,
    HomeGoodsList
  },
  data() {
    return {
      // 轮播图
      banner: [],
      // 好物特卖
      recommend: [],
      goodsList: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []},
      },
      // 控制栏当前类型
      currentType: 'pop',
      // 吸顶的类
      isFixed: false,
      count: 10,
      loading: false,
      // 上拉请求的数据，用来判断是否为空
      goodsRequest: {},
      // 滚动部分的滚动高度
      scrollTop: 0,
      // 保存控制栏的offsetTop
      offsetTop: 0
    }
  },
  computed: {
    noMore() {
      return !this.goodsRequest
    },
    disabled() {
      return false
    }
  },
  methods: {
    // 请求导航条和好物特卖的方法
    getMultiData,
    // 请求商品列表的方法
    getData,
    // 封装请求商品列表的方法，请求相应类型的下一页数据
    requestGoods(type) {
      // console.log(type);
      console.log(this.goodsRequest);
      if (this.goodsList[type].page < 20) {
        this.goodsList[type].page++;
        let requestPage = this.goodsList[type].page;
        return this.getData(type, requestPage).then(res => {
          this.goodsRequest = res.data.data.list[0];
          this.goodsList[type].list.push(...res.data.data.list);
        })
      }

    },
    // 控制栏点击切换数据
    tabItemClick(index) {
      // 测试是否监听到点击事件
      // console.log('click');
      // 点击切换类型
      if (index === 0) {
        this.currentType = 'pop';
      } else if (index === 1) {
        this.currentType = 'new';
      } else {
        this.currentType = 'sell';
      }
    },
    // 确定控制栏是否吸顶，需要加上防抖
    tabScroll(event) {
      this.scrollTop = this.$refs.scrollWrapper.scrollTop;
      // 如果被卷曲的高度大于吸顶元素到顶端位置的距离
      // offsetTop偏移尺寸，相对于包含元素的
      // 这样写有问题，this.$refs.tabControl.$el.offsetTop吸顶之后就变成0.35rem了
      // this.isFixed = this.scrollTop > this.$refs.tabControl.$el.offsetTop;
      // console.log(this.isFixed);
      // 现在的思路是在某个时候获取offsetTop
      // 时灵时不灵，不知道为啥
      this.isFixed = this.scrollTop > this.offsetTop;

    },
    load() {
      this.debounce(() => console.log('loadMore'))
      // console.log('loadMore');
      // this.requestGoods(this.currentType)

    },
    debounce(fn, delay) {
      let timer = null //借助闭包
      return function () {
        if (timer) {
          clearTimeout(timer)
        }
        timer = setTimeout(fn, delay) // 简化写法
      }
    }
  },
  created() {
    // 看一看请求这个网址，返回了什么
    // this.getMultiData().then(res => console.log(res));
    // 请求轮播图，好物特卖的数据
    this.getMultiData().then(res => {
      // 经验证，这样能拿到包含轮播图的list
      // console.log(res.data.data.recommend.list);
      this.banner = res.data.data.banner.list;
      this.recommend = res.data.data.recommend.list;
    })

    this.requestGoods('pop');
    this.requestGoods('new');
    this.requestGoods('sell');

  },
  // 所有的节点都加载后
  mounted() {
    this.offsetTop = this.$refs.tabControl.$el.offsetTop;
  }

}
</script>

<style scoped>

.home {
  position: relative;
}

/* 分割的块 */
.separate {
  width: 100%;
  height: 9px;
  max-width: 457px;
  background-color: rgb(238, 238, 238);
  position: absolute;
  top: 2.83rem;
  left: 0;
  right: 0;
  margin: 0 auto;
  box-shadow: 1px 0 1px rgba(0, 0, 0, 0.2);
  z-index: 9;
}

@media all and (min-width: 457px) {
  .separate {
    top: 402px;
  }
}

/* tabControl */
.tab-control {
  position: absolute;
  top: 5.17rem;
  z-index: 99;
  max-width: 457px;
  left: 0;
  right: 0;
  margin: 0 auto;
}

/* tabControl的吸顶效果 */
.fixed {
  position: fixed;
  top: 0.35rem;
  z-index: 999;
}

/* 滚动部分的容器 */
.infinite-list-wrapper {
  /* 包含的元素可能脱离文档流，所以需要设置position */
  position: absolute;
  height: 100vh;
  overflow: scroll;
  top: 0.35rem;
  width: 100%;
  max-width: 457px;
  left: 0;
  right: 0;
  margin: 0 auto;
}

/* 给子元素设置100%的高度，自然就滚动不了了 */
.infinite-list-wrapper > ul {
  position: relative;

  height: 10rem;
 /* overflow: scroll;*/

}

/* 大家都脱离文档流了，必须也脱离，才会在底部出现 */
.message {
  position: fixed;
  bottom: 0;
  font-size: 100px;
  background-color: black;
  height: 100px;
  z-index: 999;
}

@media all and (min-width: 457px) {
  .tab-control {
    top: 745px;
  }

  .infinite-list-wrapper {
    top: 50px;
  }

  .fixed {
    top: 50px;
  }
}
</style>
