// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import  VueRouter from 'vue-router';
import directive from "./plugins/directive.js";
Vue.use(directive);
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios,axios);
// 在Vue中移动端在单击事件  https://github.com/vuejs/vue-touch/tree/next
import VueTouch from "vue-touch";
Vue.use(VueTouch, {name: 'v-touch'});
// Vue中图片懒加载  https://www.npmjs.com/package/vue-lazyload
import VueLazyload from 'vue-lazyload';
Vue.use(VueLazyload, {
  preLoad: 1,
  // error: 'dist/error.png',
  loading: '../static/loading.gif',
  attempt: 1
})
Vue.config.productionTip = false
const routes = [
    {
        path:"/jingxuan",
        name:"精选",
        component(){
            return System.import("./view/jingxuan/index.vue")
        }
    },
    {
        path:"/shipin",
        name:"视频",
        component(){
            return System.import("./view/shipin/index.vue")
        }
    },
    {
        path:"/duanzi",
        name:"段子",
        component(){
            return System.import("./view/duanzi/index.vue")
        }
    },
    {
        path:"/wode",
        name:"我的",
        component(){
            return System.import("./view/wode/index.vue")
        }
    },
    {
        path:"*",
        redirect:"/jingxuan"
    }
];
Vue.use(VueRouter);
const router = new VueRouter({
    routes
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
