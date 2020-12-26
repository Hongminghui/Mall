<template>
  <div class="detailWrapper">
    <div class="detail">
      <!--导航栏-->
      <detail-nav-bar @itemClick="scrollToBottom"></detail-nav-bar>
      <div class="scroll" ref="scroll">
        <div class="content">
          <!--轮播图-->
          <div class="block">
            <span class="demonstration"></span>
            <el-carousel height="2.0rem">
              <el-carousel-item v-for="item in images" :key="item">
                <img :src="item" alt="">
              </el-carousel-item>
            </el-carousel>
          </div>

          <!--商品信息-->
          <detail-goods-info :goods-info="goodsInfo"></detail-goods-info>

          <!--店铺信息，商品详图，厂家信息-->
          <detail-shop-info :shop-info="shopInfo"></detail-shop-info>

          <!--底部购物车等-->
          <detail-bottom @cartClick="addToCart">

          </detail-bottom>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* 子组件 */
import DetailNavBar from "./childComps/DetailNavBar";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailBottom from "./childComps/DetailBottom";

/* 网络方法 */
import {getDetail} from "../../network/detail";

/* Vuex */
import {ADD_TO_CART, ADD_COUNTER, COMMIT_GOODS} from "../../store/mutation_type";

export default {
  name: 'Detail',
  components: {
    DetailNavBar,
    DetailGoodsInfo,
    DetailShopInfo,
    DetailBottom
  },
  data() {
    return {
      count: 10,
      loading: false,
      // 轮播图数据
      images: [],
      goodsInfo: {
        // 商品描述
        description: '',
        discount: '',
        price: '',
        // 销售信息，销量等
        sellInfo: [],
        // 店铺信息
      },
      shopInfo: {
        // 内含icon和name
      }

    }
  },
  computed: {},
  methods: {
    getDetail,
    scrollToBottom(index) {
      // 暂时这样粗略实现
      if (index === 0) {
        window.scrollTo(0, 0);
      } else {
        window.scrollTo(0, 200000);
      }
    },
    addToCart() {
      // 购物车中展示的商品信息
      const goodsToShow = {
        description: this.goodsInfo.description,
        image: this.images[0],
        price: this.goodsInfo.price,
        id: this.$route.params.iid
      };
      this.$store.dispatch(ADD_TO_CART, goodsToShow);
    }
  },
  created() {
    /* 请求详情页的一些信息 */
    this.getDetail(this.$route.params.iid).then(res => {
      // 测试返回了啥
      // console.log(res);
      // 请求返回的数据都保存在这里
      const result = res.data.result;
      console.log(result);
      // 轮播图，商品描述，价格，折扣，
      this.images = result.itemInfo.topImages;
      this.goodsInfo.description = result.itemInfo.title;
      this.goodsInfo.price = result.itemInfo.highPrice;
      this.goodsInfo.discount = result.itemInfo.discountDesc;
      this.goodsInfo.sellInfo = result.columns;

      const shopInfo = result.shopInfo;
      // 店铺信息
      this.shopInfo = {
        service: shopInfo.services,
        shopName: shopInfo.name,
        // 评价，数组里存对象，对象有isBetter:false name:描述相符，score: 5.0三个属性
        score: shopInfo.score,
        shopLogo: shopInfo.shopLogo,
        sell: shopInfo.cSells,
        goodsNumber: shopInfo.cGoods,
        // 尺寸啥的
        params: result.itemParams.info,
        rules: result.itemParams.rule,
        // 细节图片
        detailImage: result.detailInfo.detailImage[0].list,
      }
    })
  }
}
</script>

<style>
.detailWrapper {
  max-width: 457px;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  border-left: 1px solid rgb(240, 240, 240);
  border-right: 1px solid rgb(240, 240, 240);
}
.detail .block {
  max-width: 457px;
  max-height: 300px;
  overflow: hidden;
}

.scroll {
  max-width: 457px;
}

.content {
  position: relative;
  top: 0.35rem;
}
/* 保证离顶部的距离存在最大值 */
@media all and (min-width: 457px){
  .content {
    top: 50px;
  }

}
img {
  width: 100%;
}
.detail .block img {
  width: 100%;
  /* 图片太大，而且上面无效背景太多，选择上移图片 */
  position: relative;
  /*top: -30%;*/

}

/* 轮播图容器指示器容器的类 */
.el-carousel__indicators--horizontal {
  width: 2rem;
  max-width: 400px;
  padding-left: 50px;
}

/* 包装指示器的块 */
.el-carousel__indicator {
  width: 15px;
  /*position: absolute;*/
}

/* 轮播图指示器 */
.el-carousel__button {
  width: 5px;
  height: 5px;
}

</style>
