import prestashop from 'prestashop'
import VueCarousel from 'VueCarousel'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import SocialSharing from 'vue-social-sharing'
import Avatar from 'vue-avatar'
import VueStringFilter from 'vue-string-filter'
import filters from './filters'
import components from './components'

// global methods
import updateCart from './global-methods/updateCart'
import initFacets from './global-methods/initFacets'
import showCartModal from './global-methods/showCartModal'
import hideCartModal from './global-methods/hideCartModal'
import productCore from './core/product'

// modules data init
prestashop.modules = prestashop.modules || {}
prestashop.blockcart = prestashop.blockcart || {}
prestashop.themeLoaderShow = false
prestashop.blockcart.modalData = '<h1>Hello cart</h1>'

// import styles
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

// init global vue app
new Vue({
  el: '#app',
  data: prestashop,
  components: {
    'avatar': Avatar,
    // VueCarousel connect from theme.yml
    'carousel': window.VueCarousel.Carousel,
    'slide': window.VueCarousel.Slide
  },
  methods: {
    showCartModal,
    hideCartModal,
    updateCart,
    initFacets,
  productCore},
  created: function () {
    this.updateCart()
    this.initFacets()
    this.productCore()
  }
})
