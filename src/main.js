// npm套件
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import VeeValidate from 'vee-validate'
import zhTWValidate from 'vee-validate/dist/locale/zh_TW'
// BT 套件
import 'bootstrap'
// 官方套件
import App from './App.vue'
import router from './router'
// 載入自定義 js 設定檔
import './bus'
import './all'
// jquery
// import 'jquery';
import './jquery-vendor'
// 載入自定義 Filter 檔案
import currencyFilter from './filters/currency'
import dateFilter from './filters/date'
import textFilter from './filters/textShow'
import titleFilter from './filters/productTitleShow'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(VeeValidate)
VeeValidate.Validator.localize('zh_TW', zhTWValidate)
Vue.component('Loading', Loading)

// 全域啟用 Filter 設定
Vue.filter('currency', currencyFilter)
Vue.filter('date', dateFilter)
Vue.filter('textShow', textFilter)
Vue.filter('titleFilter', titleFilter)

// 跨網域撈資料設定
axios.defaults.withCredentials = true

// 導航守衛
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const api = `${process.env.VUE_APP_APIPATH}/api/user/check`
    axios.post(api).then((response) => {
      console.log(response.data)
      if (response.data.success) {
        next()
      } else {
        next({
          path: '/login'
        })
      }
    })
  } else {
    next()
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
