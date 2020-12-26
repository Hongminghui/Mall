import {ADD_COUNTER, COMMIT_GOODS, ADD_TO_CART} from "./mutation_type";

export default {
  /**
   * @Description: 中转一下，决定是增加新商品，还是增加数量
   * @param:
   *          context: this.$store
   *          payload: 期待传入的对象，dispatch的第二个参数
   */
  addToCart(context, payload) {
    let list = JSON.parse(localStorage.getItem('cartList')) || [];
    context.state.cartList = list;
    if (list[0]) {
      // 保证vuex中的数据和localStorage中的数据一致，并且操纵的是Vuex中的数据

      let oldGoods = list.find(item => item.id === payload.id);
      if (oldGoods) {
        context.commit(ADD_COUNTER, payload);
      } else {
        context.commit(ADD_TO_CART, payload);
      }
    }else {
      context.commit(ADD_TO_CART, payload);
    }

  }
}
