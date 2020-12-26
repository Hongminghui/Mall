import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "./mutaitons";
import actions from "./actions";


Vue.use(Vuex)

const state = {
  // 购物车的列表，存储有多少种商品
  cartList: [],
};

export default new Vuex.Store({
  state,
  actions,
  mutations
})
