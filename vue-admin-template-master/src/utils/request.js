import axios from 'axios'
import { Message } from "element-ui";
import store from "@/store";
import router from "@/router";

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// 添加请求拦截器
service.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  if (store.getters.token) {
    config.headers.Authorization = `Bearer ${store.getters.token}`;
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  // 在这里对错误进行统一判断
  // 这里主要是针对状态码为2xx的，因为响应成功才会返回200
  const res = response.data;
  if (!res.success) {
    Message.error(res.message);
    return Promise.reject(new Error(res.message));
  }
  return res;
}, function (error) {
  //这里是对相应错误进行处理，比如3xx，4xx
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  if (error.response.data.code === 10002 && error.response.status === 401) {
    // 三件事
    store.dispatch("user/logout");
    router.push("/login");
  }
  Message.error(error.message);
  return Promise.reject(error);
});

export default service
