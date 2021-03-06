import Vue from 'vue'
import App from './App.vue'
import '../node_modules/bootstrap/js/src/modal.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueJquery from 'jquery';
import axios from 'axios2';
import VueCookies from 'vue-cookie';
import API_CONFIG from './config.js';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faComments } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

//FontAwesomeIcon
library.add(faComments)
library.add(faBell)
Vue.component('font-awesome-icon', FontAwesomeIcon)

//use jquery
Vue.prototype.$ = VueJquery;

Vue.config.productionTip = false

// route config
//TODO 这里的路由定义和导入的子组件，最好分离成单独的文件定义好。清晰易于维护
import VueRouter from 'vue-router';
import Home from './components/Home';
import Message from './components/Message';
import Share from './components/Share';
import Profile from './components/Profile';
import Donate from './components/Donate';
import Feedback from './components/Feedback';
import AboutUs from './components/AboutUs';
import Login from './components/Login';
import Dialogue from './components/Dialogue';
import WritePackae from './components/WritePackage';
import ReplyProperPackage from './components/ReplyProperPackage';

const router = new VueRouter({
    routes:[
        {path:'/',component:Home},
        {path:'/message',component:Message},
        {path:'/share',component:Share},
        {path:'/profile',component:Profile},
        {path:'/donate',component:Donate},
        {path:'/feedback',component:Feedback},
        {path:'/about_us',component:AboutUs},
        {path:'/login',component:Login},
        {path:'/dialogue',component:Dialogue},
        {path:'/write_package',component:WritePackae},
        {path:'/reply_proper_package',component:ReplyProperPackage},
    ],
    mode:'history',
})
Vue.use(VueRouter)

//api config
Vue.prototype.$API_CONFIG = API_CONFIG;

//axios config
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = 'http://housebackend.com:8099';
axios.defaults.transformRequest = [function (data) {
    let ret = ''
    for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
    }
    return ret
}]
Vue.prototype.$axios = axios;


//VueCookies config
Vue.prototype.$vueCookies = VueCookies;
if(VueCookies.get('houseToken')){
    axios.defaults.headers.common['token'] = VueCookies.get('houseToken');
}


//websocket
var ws = null;
ws = new WebSocket("ws://127.0.0.1:2000");
Vue.prototype.$ws = ws;


// use KindEditor
import VueKindEditor from 'vue-kindeditor'
import 'kindeditor/kindeditor-all-min.js'
import 'kindeditor/themes/default/default.css'


Vue.use(VueKindEditor)

new Vue({
    router,
  render: h => h(App),
}).$mount('#app')


