import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1478c940 = () => interopDefault(import('..\\pages\\404\\index.vue' /* webpackChunkName: "pages_404_index" */))
const _8e4a60fa = () => interopDefault(import('..\\pages\\500\\index.vue' /* webpackChunkName: "pages_500_index" */))
const _6a299cdc = () => interopDefault(import('..\\pages\\cart\\index.vue' /* webpackChunkName: "pages_cart_index" */))
const _4b690857 = () => interopDefault(import('..\\pages\\forum\\index.vue' /* webpackChunkName: "pages_forum_index" */))
const _09fcd88d = () => interopDefault(import('..\\pages\\freeCompute\\index.vue' /* webpackChunkName: "pages_freeCompute_index" */))
const _07969387 = () => interopDefault(import('..\\pages\\hardDiskRepair\\index.vue' /* webpackChunkName: "pages_hardDiskRepair_index" */))
const _8c4c2de2 = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "pages_login_index" */))
const _4a69c698 = () => interopDefault(import('..\\pages\\recover\\index.vue' /* webpackChunkName: "pages_recover_index" */))
const _b98e5f0e = () => interopDefault(import('..\\pages\\register\\index.vue' /* webpackChunkName: "pages_register_index" */))
const _7124a351 = () => interopDefault(import('..\\pages\\user\\index.vue' /* webpackChunkName: "pages_user_index" */))
const _10461558 = () => interopDefault(import('..\\pages\\cart\\confirmOrder.vue' /* webpackChunkName: "pages_cart_confirmOrder" */))
const _68bc3e32 = () => interopDefault(import('..\\pages\\cart\\pay.vue' /* webpackChunkName: "pages_cart_pay" */))
const _a6b360aa = () => interopDefault(import('..\\pages\\login\\phone.vue' /* webpackChunkName: "pages_login_phone" */))
const _8f1d3312 = () => interopDefault(import('..\\pages\\product\\list.vue' /* webpackChunkName: "pages_product_list" */))
const _5c83f050 = () => interopDefault(import('..\\pages\\register\\bindPhone.vue' /* webpackChunkName: "pages_register_bindPhone" */))
const _ee4c6238 = () => interopDefault(import('..\\pages\\register\\company.vue' /* webpackChunkName: "pages_register_company" */))
const _db2cc106 = () => interopDefault(import('..\\pages\\register\\company1.vue' /* webpackChunkName: "pages_register_company1" */))
const _575217b3 = () => interopDefault(import('..\\pages\\user\\address.vue' /* webpackChunkName: "pages_user_address" */))
const _1996ba79 = () => interopDefault(import('..\\pages\\user\\collect\\index.vue' /* webpackChunkName: "pages_user_collect_index" */))
const _31aebb8e = () => interopDefault(import('..\\pages\\user\\companyCertification.vue' /* webpackChunkName: "pages_user_companyCertification" */))
const _a444b892 = () => interopDefault(import('..\\pages\\user\\coupon.vue' /* webpackChunkName: "pages_user_coupon" */))
const _154904ab = () => interopDefault(import('..\\pages\\user\\depositInfo.vue' /* webpackChunkName: "pages_user_depositInfo" */))
const _f9495302 = () => interopDefault(import('..\\pages\\user\\info.vue' /* webpackChunkName: "pages_user_info" */))
const _68383bb8 = () => interopDefault(import('..\\pages\\user\\news.vue' /* webpackChunkName: "pages_user_news" */))
const _fda2ffd6 = () => interopDefault(import('..\\pages\\user\\order\\index.vue' /* webpackChunkName: "pages_user_order_index" */))
const _78174170 = () => interopDefault(import('..\\pages\\user\\collect\\forum.vue' /* webpackChunkName: "pages_user_collect_forum" */))
const _11a48f13 = () => interopDefault(import('..\\pages\\forum\\module\\_id.vue' /* webpackChunkName: "pages_forum_module__id" */))
const _d1329506 = () => interopDefault(import('..\\pages\\forum\\search\\_keyWord.vue' /* webpackChunkName: "pages_forum_search__keyWord" */))
const _a914bf2a = () => interopDefault(import('..\\pages\\forum\\tag\\_id.vue' /* webpackChunkName: "pages_forum_tag__id" */))
const _3edcca4b = () => interopDefault(import('..\\pages\\product\\search\\_keyWord.vue' /* webpackChunkName: "pages_product_search__keyWord" */))
const _391783bd = () => interopDefault(import('..\\pages\\user\\order\\_id.vue' /* webpackChunkName: "pages_user_order__id" */))
const _e5099702 = () => interopDefault(import('..\\pages\\forum\\_id.vue' /* webpackChunkName: "pages_forum__id" */))
const _0afd68f1 = () => interopDefault(import('..\\pages\\product\\_id.vue' /* webpackChunkName: "pages_product__id" */))
const _dd21c608 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/404",
    component: _1478c940,
    name: "404"
  }, {
    path: "/500",
    component: _8e4a60fa,
    name: "500"
  }, {
    path: "/cart",
    component: _6a299cdc,
    name: "cart"
  }, {
    path: "/forum",
    component: _4b690857,
    name: "forum"
  }, {
    path: "/freeCompute",
    component: _09fcd88d,
    name: "freeCompute"
  }, {
    path: "/hardDiskRepair",
    component: _07969387,
    name: "hardDiskRepair"
  }, {
    path: "/login",
    component: _8c4c2de2,
    name: "login"
  }, {
    path: "/recover",
    component: _4a69c698,
    name: "recover"
  }, {
    path: "/register",
    component: _b98e5f0e,
    name: "register"
  }, {
    path: "/user",
    component: _7124a351,
    name: "user"
  }, {
    path: "/cart/confirmOrder",
    component: _10461558,
    name: "cart-confirmOrder"
  }, {
    path: "/cart/pay",
    component: _68bc3e32,
    name: "cart-pay"
  }, {
    path: "/login/phone",
    component: _a6b360aa,
    name: "login-phone"
  }, {
    path: "/product/list",
    component: _8f1d3312,
    name: "product-list"
  }, {
    path: "/register/bindPhone",
    component: _5c83f050,
    name: "register-bindPhone"
  }, {
    path: "/register/company",
    component: _ee4c6238,
    name: "register-company"
  }, {
    path: "/register/company1",
    component: _db2cc106,
    name: "register-company1"
  }, {
    path: "/user/address",
    component: _575217b3,
    name: "user-address"
  }, {
    path: "/user/collect",
    component: _1996ba79,
    name: "user-collect"
  }, {
    path: "/user/companyCertification",
    component: _31aebb8e,
    name: "user-companyCertification"
  }, {
    path: "/user/coupon",
    component: _a444b892,
    name: "user-coupon"
  }, {
    path: "/user/depositInfo",
    component: _154904ab,
    name: "user-depositInfo"
  }, {
    path: "/user/info",
    component: _f9495302,
    name: "user-info"
  }, {
    path: "/user/news",
    component: _68383bb8,
    name: "user-news"
  }, {
    path: "/user/order",
    component: _fda2ffd6,
    name: "user-order"
  }, {
    path: "/user/collect/forum",
    component: _78174170,
    name: "user-collect-forum"
  }, {
    path: "/forum/module/:id?",
    component: _11a48f13,
    name: "forum-module-id"
  }, {
    path: "/forum/search/:keyWord?",
    component: _d1329506,
    name: "forum-search-keyWord"
  }, {
    path: "/forum/tag/:id?",
    component: _a914bf2a,
    name: "forum-tag-id"
  }, {
    path: "/product/search/:keyWord?",
    component: _3edcca4b,
    name: "product-search-keyWord"
  }, {
    path: "/user/order/:id",
    component: _391783bd,
    name: "user-order-id"
  }, {
    path: "/forum/:id",
    component: _e5099702,
    name: "forum-id"
  }, {
    path: "/product/:id?",
    component: _0afd68f1,
    name: "product-id"
  }, {
    path: "/",
    component: _dd21c608,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
