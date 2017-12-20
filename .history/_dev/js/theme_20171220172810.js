import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import prestashop from 'prestashop'
import productMiniature from './components/product-miniature'
import VueStringFilter from 'vue-string-filter'
import SocialSharing from 'vue-social-sharing'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

$('[data-module-name]').each(function () {
  prestashop.modules[$(this).data('module-name')] = $(this).data('module-data')
})

Vue.use(BootstrapVue)
Vue.use(VueStringFilter)

Vue.component('product-miniature', productMiniature)

new Vue({
  el: '#app',
  data: prestashop
})
