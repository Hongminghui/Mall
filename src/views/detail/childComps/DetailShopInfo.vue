<template>
  <div class="detail-shop-info">
    <!--店铺服务，七天无理由退货之类的-->
    <div class="shop-services">
      <div v-for="item in shopInfo.service" class="service-block">
        <div><img
          :src="item.icon || ''"
          :class="{none: !item.icon}"
          alt=""></div>
        <div><span>{{item.name}}</span></div>
      </div>
    </div>

    <!--店铺商标，名字-->
    <div class="shopName">
      <div class="imgWrapper"><img :src="shopInfo.shopLogo" alt=""></div>
      <span>{{shopInfo.shopName}}</span>
    </div>

    <!--销量评价部分-->
    <div class="sell">
      <div>
        <p>{{shopInfo.sell}}</p>
        <p>总销量</p>
      </div>
      <div>
        <p>{{shopInfo.goodsNumber}}</p>
        <p>全部宝贝</p>
      </div>
      <div class="score">
        <div v-for="item in shopInfo.score">
          <span>{{item.name}}</span>
          <span id="score">{{item.score}}</span>
          <span :class="{red: item.isBetter}" class="better">
            {{item.isBetter ? '高' : '低'}}
          </span>
        </div>
      </div>
    </div>

    <div class="visit"><p>进店逛逛</p></div>

    <div v-for="item in shopInfo.detailImage"><img :src="item" alt=""></div>



    <table>
      <thead>
      <th>信息</th>
      <th>内容</th>
      </thead>
      <tbody>
      <tr
        v-for="item in shopInfo.params && shopInfo.params.set">
        <td class="key">{{item.key}}</td>
        <td class="value">{{item.value}}</td>
      </tr>
      </tbody>
    </table>

  </div>




</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shopInfo: Object
  },



}
</script>

<style scoped>
.detail-shop-info {
  margin-bottom: 200px;
}
.shop-services {
  display: flex;
  /*height: 0.50rem;*/
  flex-wrap: wrap;
  border-bottom: 8px solid rgb(242,245,248);
  color: rgb(51,51,51);
  font-size: 12px;
}
.shop-services img {
  width: 13px;
  height: 13px;
}
.service-block {
  margin: 5px 12px;
}
.service-block > div{
  display: inline-block;
}

.none {
  display: none;
}

/* 调店铺名称的样式 */
.shopName {
  height: 70px;
  position: relative;
}
.imgWrapper {
  height: 60px;
  width: 60px;
  overflow: hidden;
  position: absolute;
  top: 5px;
  left: 10px;
}
.imgWrapper img {
  position: absolute;
  top: 5px;
  height: 60px;
  width: 60px;
}
.shopName span{
  position: absolute;
  line-height: 70px;
  left: 80px;
  font-size: 20px;
}

/* 调销量的样式 */
.sell {

  display: flex;
  height: 80px;
  justify-content: space-around;
  color: black;
}

.sell > div {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

#score {
  display: inline-block;
  width: 27px;
}
.score > div > span{
  margin: 3px;
}
/* 改了一下评分的字体大小 */
@media all and (min-width: 457px){
  .score span {
    font-size: 14px;
  }

}
.better {
  color: white;
  display: inline-block;
  padding: 2px;
  font-weight: bold;
  background-color: rgb(94,167,50);
  text-align: center;
  font-size: 12px;
}
.red {
  background-color: red;
}

.visit {
  position: relative;
  border-bottom: 8px solid rgb(242,245,248);
  height: 70px;
}
.visit > p {
  height: 35px;
  width: 100px;
  background-color: rgb(242,245,248);
  border-radius: 8px;
  line-height: 30px;
  position: absolute;
  left: 0;
  right: 0;
  margin: 5px auto;
  text-align: center;
}

/* 表格 */
table {
  width: 100%;
  border-top: 1px solid rgb(240,240,240);
  border-collapse: collapse;
  padding: 0 5px;
}
th, td {
  text-align: center;
  padding: 5px;
  border-bottom: 1px solid rgb(240,240,240);
  border-collapse: collapse;
  border-spacing: 0;
}
table .key {
  width: 20%;
}
</style>
