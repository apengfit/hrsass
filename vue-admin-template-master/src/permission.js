import router from "@/router";
import store from "@/store/index";

const whiteList = ['/login', '/404'];

router.beforeEach((to, from, next) => {
    const token = store.getters.token;
    if (token) {
        if (to.path === '/login') {
            // 有token 跳转到登录页
            next('/');
        } else {
            next();//正常放行
        }
    } else {
        if (whiteList.includes(to.path)) {
            next();
        } else {
            next("/login");
        }
    }
})