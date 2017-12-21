import prestashop from 'prestashop'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import SocialSharing from 'vue-social-sharing'
import { truncate } from 'vue-truncate-collapsed'
import VueStringFilter from 'vue-string-filter'
import filters from './filters'
import components from './components'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

$('[data-module-name]').each(function () {
  prestashop.modules[$(this).data('module-name')] = $(this).data('module-data')
})

Vue.use(BootstrapVue)
Vue.use(VueStringFilter)
Vue.use(SocialSharing)
new Vue({
  components: {
  truncate}
})

filters()
components()

new Vue({
  el: '#app',
  data: prestashop
})
