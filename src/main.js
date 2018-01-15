// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Dashboard from './components/Dashboard'
import router from './router'

Vue.config.productionTip = false

// include jQuery
var $ = window.jQuery = require('jquery');
console.log('Getting ready...');
$(function() {
  console.log('Ready!');
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
