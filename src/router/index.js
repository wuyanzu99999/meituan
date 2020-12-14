import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../pages/index";
import My from "../pages/my";
import Emile from "../pages/emile";
import Goodlist from "../pages/Goodlist";
import Vip from "../pages/Vip";
import Recharge from "../pages/Recharge";
import GoodsNews from "../pages/GoodsNews";
import GoBank from "../pages/GoBank";
import Ticket from "../pages/Ticket";
import Cart from "../pages/Cart";
import Bus from "../pages/Bus";
import Found from "../pages/Found";
import Login from "../pages/Login";
import Reg from "../pages/Reg";
import Order from "../pages/Order";
import Ktv from "../pages/Ktv";
import { Dialog } from 'vant';
Vue.use(Dialog);
Vue.use(VueRouter);

let routes = [{
        path: "/",
        component: Index
    },
    {
        path: "/index",
        component: Index
    },
    {
        path: "/my",
        component: My
    },
    {
        path: "/emile",
        component: Emile
    },
    {
        path: "/goodslist/:shopId",
        component: Goodlist
    },
    {
        path: "/vip",
        component: Vip,
        meta: {
            requireAuth: true
        }
    },
    {
        path: "/recharge",
        component: Recharge,
        meta: {
            requireAuth: true
        }
    },
    {
        path: "/goodsNews",
        name: 'goodsnews',
        component: GoodsNews
    },
    {
        path: "/goBank",
        component: GoBank,
        meta: {
            requireAuth: true
        }
    },
    {
        path: "/ticket",
        component: Ticket
    },
    {
        path: "/cart",
        component: Cart,
        name:'cart',
        meta: {
            requireAuth: true
        }
    },
    {
        path: "/bus",
        component: Bus
    },
    {
        path: "/found",
        component: Found
    },
    {
        path: "/login",
        component: Login
    },
    {
        path: "/reg",
        component: Reg
    },
    {
        path: "/order",
        component: Order,
        meta: {
            requireAuth: true
        }
    },
    {
        path: "/ktv",
        component: Ktv
    }
]
let router = new VueRouter({
    routes
});
// 全局守卫
router.beforeEach((to, from, next) => {
    // console.log("beforeEach");
    // console.log("to",to);
    // 进入购物车和我的，必须要登录
    if (to.meta.requireAuth) {
        // if(是否登录){
        if (sessionStorage.getItem("userid")) {
            next();
        } else {
            Dialog.confirm({
                    title: '您还尚未登录',
                    message: '是否前往登录页面',
                })
                .then(() => {
                    next({ path: "/login"});
                })
                .catch(() => {
                    next({ path: "/index"});
                });
        }
    } else {
        next();
    }
});
export default router;