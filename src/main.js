import Vue from 'vue'
import App from './App.vue'
import '../node_modules/bootstrap/js/src/modal.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueJquery from 'jquery';
import axios from 'axios2';
import VueCookies from 'vue-cookie';
import API_CONFIG from './config.js';


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


new Vue({
    router,
  render: h => h(App),
}).$mount('#app')


