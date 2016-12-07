import Vue from 'vue'
import App from './App'
import Tap from 'v-tap'
import Routers from './routers'
/* eslint-disable no-new */
Vue.filter('time', function (value) {
  return (function (t) {
    var now = Math.floor(new Date().getTime() / 1000)
    var tdStart = new Date()
    tdStart.setHours(0)
    tdStart.setMinutes(0)
    tdStart.setSeconds(0)
    tdStart = Math.floor(tdStart.getTime() / 1000)
    if (t > tdStart && now - t >= 0) {
      if (now - t <= 60) {
        return '刚刚'
      } else if (now - t < 3600) {
        return Math.floor((now - t) / 60) + '分钟前'
      } else {
        return Math.ceil((now - t) / 3600) + '小时前'
      }
    } else {
      var nD = new Date()
      nD.setTime(t * 1000)
      var m = nD.getMonth() + 1
      var d = nD.getDate()
      var H = nD.getHours()
      var M = nD.getMinutes()
      if (m < 10) m = '0' + m
      if (d < 10) d = '0' + d
      if (H < 10) H = '0' + H
      if (M < 10) M = '0' + M
      return nD.getFullYear() + '-' + m + '-' + d + ' ' + H + ':' + M
    }
  })(value)
})
Vue.use(Tap)
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router: Routers
})
