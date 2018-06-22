import prestashop from 'prestashop'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import SocialSharing from 'vue-social-sharing'
import Avatar from 'vue-avatar'
import VueStringFilter from 'vue-string-filter'
import Vuebar from 'vuebar'

import VueImg from 'v-img'
import filters from './filters'
import components from './components'

// global methods
import updateCart from './global-methods/updateCart'
import initFacets from './global-methods/initFacets'
import showCartModal from './global-methods/showCartModal'
import hideCartModal from './global-methods/hideCartModal'
import openQuickView from './global-methods/openQuickView'
import { onCloseQuickView } from './global-methods/openQuickView'
import changeProductCoverImage from './global-methods/changeProductCoverImage'
import productZoom from './global-methods/productZoom'
import zoomLeave from './global-methods/zoomLeave'
import productCore from './core/product'
import searchBarChange from './global-methods/searchBarChange'
import getAuthenticationTpl from './global-methods/getAuthenticationTpl'
import loginFormModalEvents from './global-methods/loginFormModalEvents'
import { updateCartCore } from './core/cart'
import getModalWidth from './global-methods/modalWidth'

// modules data init
prestashop.modules = prestashop.modules || {}
prestashop.blockcart = prestashop.blockcart || {}
prestashop.modules.productPageData = prestashop.modules.productPageData || {}
prestashop.modules.quickView = prestashop.modules.quickView || {}
prestashop.modules.quickView.variants = ''
prestashop.modules.quickView.additionalInfo = ''
prestashop.modules.quickView.accessoriesProduct = []
prestashop.modules.quickView.packProduct = []
prestashop.modules.singIn = ''
prestashop.themeLoaderShow = false
prestashop.modalWidth = 1110
prestashop.blockcart = {
  modalData: '<h1>Hello cart</h1>',
  data: []
}

// import styles
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
// import 'vue-js-modal/dist/styles.css'

$('[data-module-name]').each(function () {
  prestashop.modules[$(this).data('module-name')] = $(this).data('module-data')
})
Vue.use(BootstrapVue)
Vue.use(VueStringFilter)
Vue.use(SocialSharing)
Vue.use(Vuebar)
Vue.use(VueImg)
// Vue.use(window['vue-js-modal'].default)

filters()
components()

// init global vue app
new Vue({
  el: '#app',
  data: prestashop,
  components: {
    avatar: Avatar,
    // VueCarousel connect from theme.yml
    carousel: window.VueCarousel.Carousel,
    slide: window.VueCarousel.Slide
  },
  methods: {
    showCartModal,
    hideCartModal,
    updateCart,
    initFacets,
    productCore,
    changeProductCoverImage,
    productZoom,
    zoomLeave,
    searchBarChange,
    updateCartCore,
    openQuickView,
    onCloseQuickView,
    getAuthenticationTpl,
    loginFormModalEvents,
  getModalWidth},
  created: function () {
    this.updateCart()
    this.initFacets()
    this.productCore()
    this.openQuickView()
    this.loginFormModalEvents()
  }
})
