import {request} from "./request";

// 根据iid请求某个商品的数据
export function getDetail(iid) {
  return request({
    url: '/detail',
    params: {iid}
  }).catch(err => console.log(err));

}
