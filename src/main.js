import Vue from 'vue'
import App from './App.vue'
import '../node_modules/bootstrap/js/src/modal.js'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import axios from 'axios2';
import VueCookies from 'vue-cookie';

Vue.config.productionTip = false

// route config
// import Route from 'vue-router';

// const route = new Route({
//     routes:[
//         {path:'/',component:Content}
//     ]
// })


//axios config
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
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
  render: h => h(App)
}).$mount('#app')


