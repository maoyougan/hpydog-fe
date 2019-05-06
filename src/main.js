// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import i18n from './lang'

// import Lang from './lang'

// Vue.prototype.lang = Lang.lang
Vue.config.productionTip = false

// // 浏览器获取语言
// const curLang = navigator.language
// if (curLang.toLowerCase().indexOf('zh') > -1) {
//   Lang.changeLang(1) // 切换成中文
// } else {
//   Lang.changeLang(0) // 切换成英文
// }
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
