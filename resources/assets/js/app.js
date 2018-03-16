
require('./bootstrap');

window.Vue = require('vue');

import Bulma from 'bulma';
import Vuetify from 'vuetify';
import colors from 'vuetify/es5/util/colors';
import 'vuetify/dist/vuetify.min.css'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import 'mdi/css/materialdesignicons.min.css';
import VueRouter from 'vue-router';
import VueProgressBar from 'vue-progressbar';
import infiniteScroll from 'vue-infinite-scroll';

Vue.use(Vuetify, {
  theme: {
    primary: colors.teal.lighten1,
    secondary: colors.blue.lighten1,
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  }
});
Vue.use(ElementUI);

Vue.use(infiniteScroll);

Vue.use(VueProgressBar, {
    color: 'rgb(1, 98, 86)',
    failedColor: 'red',
    height: '2px'
});

Vue.use(VueRouter);
let Myheader = require('./components/Myheader.vue');
let Myfooter = require('./components/Myfooter.vue');

const routes = [
]

const router = new VueRouter({
	mode: 'history',
  routes // short for `routes: routes`
})

const app = new Vue({
    el: '#app',
    router,
    components:{Myheader,Myfooter}
});
