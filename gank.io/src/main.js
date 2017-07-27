import Vue from 'vue';
import iView from 'iview';
import VueRouter from 'vue-router';
import Routers from './router';
import Vuex from 'vuex';
import axios from 'axios'
import Util from './libs/util';
import App from './app.vue';
// import NotFound from './components/404.vue';
// import Gank from './components/Gank.vue';
// import Bonus from './components/Bonus.vue';
import 'iview/dist/styles/iview.css';


Vue.use(VueRouter);
Vue.use(Vuex);
// Vue.use(axios);
Vue.use(iView);

// 开启debug模式
Vue.config.debug = true;

// Ajax配置
// axios.defaults.timeout = 5000;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// axios.defaults.baseURL = 'http://gank.io/api';

// 路由配置
const RouterConfig = {
  mode: 'history',
  routes: Routers
};

const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
  Util.title(to.meta.title);
  next();
});

router.afterEach(() => {
  iView.LoadingBar.finish();
  window.scrollTo(0, 0);
});


const store = new Vuex.Store({
  state: {

  },
  getters: {

  },
  mutations: {

  },
  actions: {

  }
});


new Vue({
  el: '#app',
  router: router,
  store: store,
  render: h => h(App)
});
