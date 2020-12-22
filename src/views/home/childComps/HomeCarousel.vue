<template>
  <!--此处使用了element-ui-->
  <!--轮播图，自动切换，点击切换-->
  <div class="home-carousel">
    <div class="block1">
      <el-carousel height="1.65rem" arrow="always">
        <el-carousel-item v-for="(item, index) in imgList" >
          <a :href="item.link">
            <img :src="item.image" alt="蘑菇街">
          </a>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="block2">
      <el-carousel height="235px" arrow="always">
        <el-carousel-item v-for="(item, index) in imgList" >
          <a :href="item.link">
            <img :src="item.image" alt="蘑菇街">
          </a>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeCarousel",
    props: {
      imgList: {
        type: Array,
        required: true,
        default: []
      }
    },
    created() {
      // 测试数据是否传过来了
      // console.log('轮播图', this.imgList);
    }
  }
</script>

<style>

  .home-carousel {
    position: absolute;
    /* 处理和上方高度地问题，都有最外面的容器解决，由包裹的容器解决*/
    /*top: 0.35rem;*/
    width: 100%;

  }
  .home-carousel img {
    width: 100%;
  }
  .block1 {
    /* 脱离文档流之后，宽度不再默认填满父元素的宽度 */
    position: absolute;
    width: 100%;
  }
  .block2 {
    display: none;

  }
  /* 当视口过大时，为了避免轮播图占据太大的页面，选择切换成固定尺寸的轮播图
     又为了图片不至于变形太多，设置了固定的宽度，其他地方用背景图片填充 */
  @media all and (min-width: 457px){
    .block1 {
      display: none;
    }
    .home-carousel {
      /*top: 50px;*/
    }
    .block2 {
      display: block;
      position: relative;
      width: 457px;
      left: 0;
      right: 0;
      margin: 0 auto;

    }
    .home-carousel img {
      width: 457px;
      height: 100%;
    }
  }


  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }




</style>
