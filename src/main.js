import Vue from 'vue'
import App from './App'
import router from './router/'
import moment from 'moment'

// 导入vue-resource
import VueResource from 'vue-resource'
// 注册vue-resource
Vue.use(VueResource)

Vue.http.options.root = 'http://www.lovegf.cn:8899/'

Vue.http.options.emulateJSON = true

Vue.config.productionTip = false

// 按需导入需要的mint-ui组件
import {
  Header,
  Swipe,
  SwipeItem,
  Button
} from 'mint-ui'

// 注册组件
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)

// 导入mui的样式
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

// 引入自己的全局样式
import './css/common.less'

import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)

import VuePreview from 'vue2-preview'
Vue.use(VuePreview)

Vue.filter('dateFormat', function(dateStr,pattern='YYYY-MM-DD HH:mm:ss') {
  return moment(dateStr).format(pattern)
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
