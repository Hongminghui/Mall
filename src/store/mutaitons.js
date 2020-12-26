import {ADD_COUNTER, COMMIT_GOODS, ADD_TO_CART} from "./mutation_type";

const mutations = {
  /**
   * @Description: 实现新商品加入购物车功能
   * @param:
   *         state: this.$store.state
   *         payload: 期待传入的对象，一个包含商品信息的对象
  */
  [ADD_TO_CART](state, payload) {
    // 给新加入的商品添加一个属性count，来表示商品数量
    payload.count = 1;
    state.cartList.push(payload);
    console.log('mutations')
    // 每次更改cartList，都让localStorage来存储
    localStorage.setItem('cartList', JSON.stringify(state.cartList));
  },
  /**
   * @Description: 实现已经添加过的商品，增加数量的功能
   * @param:
   *          state: this.$store.state
   *          item: 期待传入的对象，为已经添加过的商品，在actions.js中处理
  */
  [ADD_COUNTER](state, item) {
    let oldGoods = state.cartList.find(goods => goods.id === item.id);
    oldGoods.count++;
    localStorage.setItem('cartList', JSON.stringify(state.cartList));
    console.log('mutations')
  },
  /**
   * @Description: 实现提交订单的功能
   * @param:
   *          state: this.$store.state
   *          commitList: 期待传入的数组，内部包含选中的商品
  */
  [COMMIT_GOODS](state, commitList) {

  }
}

export default mutations;
