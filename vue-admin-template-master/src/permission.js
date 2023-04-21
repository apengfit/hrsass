import router from "@/router";
import store from "@/store/index";
import NProgress from "nprogress";
// 还要引入相对应得样式
import 'nprogress/nprogress.css';

const whiteList = ['/login', '/404'];

router.beforeEach((to, from, next) => {
    NProgress.start();//进入页面，开启进度条
    const token = store.getters.token;
    if (token) {
        if (to.path === '/login') {
            // 有token 跳转到登录页 --重定向。
            next('/');
            NProgress.done();
        } else {
            next();//正常放行
            NProgress.done();
        }
    } else {
        if (whiteList.includes(to.path)) {
            next();
            NProgress.done();
        } else {
            next("/login");
            NProgress.done();
        }
    }
})

router.afterEach((to, from) => {
    NProgress.done();
})