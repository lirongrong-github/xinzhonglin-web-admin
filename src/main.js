import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './plugins/element.js'

// 清除默认样式
import 'normalize.css/normalize.css'

// base.css
import '@/base/css/base.css'

// flexible
import '@/base/utils/flexible.js'

// 引入MD5加密
import md5 from 'md5'

// 引入lodash
import _ from 'lodash'

import axios from '@/base/http/axios.js'

Vue.prototype.$http = axios

Vue.prototype.$md5 = md5

Vue.prototype._ = _

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
