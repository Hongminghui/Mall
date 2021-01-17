<template>
  <div class="profile">
    <nav-bar>
      <span slot="center" id="topFont">蘑菇街商城</span>
    </nav-bar>

    <div class="main">
      <div class="register">
        <div class="imgWrapper">
          <img src="~@/assets/img/profile/profile.svg" alt="">
        </div>
        <div id="register">
          <p>登录/注册</p>
        </div>
      </div>

      <div class="info">
        <div>
          <p><span class="number">0.00</span><span>元</span></p>
          <p>我的余额</p>
        </div>
        <div>
          <p><span class="number">0.00</span><span>元</span></p>
          <p>我的优惠</p>
        </div>
        <div>
          <p><span class="number">0</span><span>个</span></p>
          <p>我的积分</p>
        </div>
      </div>

      <div class="message">
        <div>
          <i class="el-icon-bell"></i>
          <span>我的消息</span>
        </div>
        <div>
          <i class="el-icon-bell"></i>
          <span>积分商城</span>
        </div>
        <div>
          <i class="el-icon-bell"></i>
          <span>会员卡</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../../components/content/navbar/NavBar";

export default {
  data() {
    return {

    }
  },
  components: {
    NavBar
  }
}
</script>
<style scoped>
.profile {
  position: relative;
}
.main {
  position: relative;
  top: 0.35rem;
}
* {
  font-size: 18px;
}
#topFont {
  color: white;
}
.register {
  position: relative;
  display: flex;
  height: 0.8rem;
  overflow: hidden;
  background-color: rgb(255, 129, 152);
  width: 100%;
  color: white;
}

.imgWrapper {
  border-radius: 50%;
  height: 0.6rem;
  width: 0.6rem;
  overflow: hidden;
  background-color: white;
  margin: 0.05rem 0.1rem;
  position: relative;
}

img {
  width: 60%;
  position: absolute;
  top: 20%;
  left: 20%;
}

#register {
  margin-left: 20px;
  margin-top: 0.1rem;
}

#register p {
  font-size: 0.22rem;
  margin-left: 20px;
  margin-top: 20px;
}

.info {
  display: flex;
  width: 100%;
  height: 0.9rem;
  padding: 15px;
  border-bottom: 10px solid rgb(242,242,242);
}
.info > div {
  flex: 1;
  border-right: 1px solid white;

}
.info .number {
  color: rgb(255,95,62);
  font-size: 30px;
  margin-bottom: 10px;
}
.info p {
  margin: 5px;
  font-size: 16px;
}

.message > div {
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid rgb(239,239,239);
}

.message i {
  margin: 0 10px;
}
</style>
