import {request} from "./request";

/* 这个文件用来写所有首页需要的网络请求 */

/* 请求首页轮播图，好物推荐的数据 */
export function getMultiData() {
  return request({
    url: '/home/multidata',
    timeout: 5000
  }).catch(err => console.log(err));
}

/* 请求首页商品列表的数据 */
export function getData(type, page) {
  return request({
    url: 'home/data',
    params: {
      type,
      page
    }
  }).catch(err => console.log(err));
}
