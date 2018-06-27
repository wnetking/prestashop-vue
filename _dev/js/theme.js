import prestashop from 'prestashop'
import Vue from 'vue'
import Avatar from 'vue-avatar'

import filters from './filters'
import components from './components'
import dataInit from './core/dataInit'
import vendors from './components/vendors'
import methods from './global-methods'

dataInit()
vendors()
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
  methods: methods,
  created: function () {
    this.updateCart()
    this.initFacets()
    this.productCore()
    this.openQuickView()
    this.loginFormModalEvents()
  }
})
