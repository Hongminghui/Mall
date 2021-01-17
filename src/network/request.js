import axios from "axios";

const baseUrl = "XXX";

/* 封装axios，避免对第三方框架的过度依赖 */
export function request(config) {
  const instance = axios.create({
    baseURL: baseUrl,
    // 请求超过了5000ms，请求将被中断
    timeout: 15000
  })

  // 添加请求拦截器
  instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
  instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

  // request方法返回：调用instance方法，发起请求的结果，是一个promise对象
  return instance(config);
}
