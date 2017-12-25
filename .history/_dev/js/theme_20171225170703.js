import prestashop from 'prestashop'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import SocialSharing from 'vue-social-sharing'
import Avatar from 'vue-avatar'
import VueStringFilter from 'vue-string-filter'
import filters from './filters'
import components from './components'
import '../node_modules/vue-carousel'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

$('[data-module-name]').each(function () {
  prestashop.modules[$(this).data('module-name')] = $(this).data('module-data')
})

Vue.use(BootstrapVue)
Vue.use(VueStringFilter)
Vue.use(SocialSharing)

filters()
components()

new Vue({
  el: '#app',
  data: prestashop,
  components: {
    'avatar': Avatar,
    'carousel': VueCarousel.Carousel,
    'slide': VueCarousel.Slide
  }
})
