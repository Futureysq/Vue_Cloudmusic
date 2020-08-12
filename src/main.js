import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import { Search } from 'vant';
Vue.use(Search);

import { Form } from 'vant';
Vue.use(Form);
import { Field } from 'vant';
Vue.use(Field);
import { Button } from 'vant';
Vue.use(Button);

import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe);
Vue.use(SwipeItem);

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Element)


// axios
import axios from 'axios'
import VueAxios from 'vue-axios'
axios.defaults.baseURL = "http://127.0.0.1:3009" 
Vue.prototype.$axios = axios;

Vue.use(VueAxios, axios)

// swiper插件
import "swiper/swiper-bundle.min.css";
// 动画第三方样式
import "animate.css";
// 多次点击标签页报错
Vue.config.productionTip = false
import Router from 'vue-router'
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
