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

prestashop.blockcart = prestashop.blockcart || {}
prestashop.blockcart.modalData = '<h1>Hello cart</h1>'

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
    'carousel': window.VueCarousel.Carousel,
    'slide': window.VueCarousel.Slide
  },
  methods: {
    showModal() {
      this.$refs.blokcart.show()
    },
    hideModal() {
      this.$refs.blokcart.hide()
    },
  updateCart},
  created: function () {
    this.updateCart()
    // prestashop.on(
    //   'updateCart',
    //    (event) => {
    //     var refreshURL = $('.blockcart').data('refresh-url')
    //     var requestData = {}

    //     if (event && event.reason) {
    //       requestData = {
    //         id_product_attribute: event.reason.idProductAttribute,
    //         id_product: event.reason.idProduct,
    //         action: event.reason.linkAction
    //       }
    //     }

    //     $.post(refreshURL, requestData).then( (resp) => {
    //       $('.blockcart').replaceWith($(resp.preview).find('.blockcart'))

    //       if (resp.modal) {
    //         this.showModal()

    //         this.$nextTick(function () {
    //           this.blockcart.modalData = resp.modal
    //         })
    //       }
    //     }).fail(function (resp) {
    //       prestashop.emit('handleError', {eventType: 'updateShoppingCart', resp: resp})
    //     })
    //   }
    // )

    const parseSearchUrl = function (event) {
      if (event.target.dataset.searchUrl !== undefined) {
        return event.target.dataset.searchUrl
      }

      if ($(event.target).parent()[0].dataset.searchUrl === undefined) {
        throw new Error('Can not parse search URL')
      }

      return $(event.target).parent()[0].dataset.searchUrl
    }

    $('body').on('click', '.js-search-filters-clear-all', function (event) {
      event.preventDefault()
      prestashop.emit('updateFacets', parseSearchUrl(event))
    })

    $('body').on('change', '#search_filters input[data-search-url]', function (event) {
      prestashop.emit('updateFacets', parseSearchUrl(event))
    })

    $('body').on('click', '.js-search-link', function (event) {
      event.preventDefault()
      prestashop.emit('updateFacets', $(event.target).closest('a').get(0).href)
    })

    prestashop.on('updateProductList', (data) => {
      this.$nextTick(function () {
        this.modules.listingProduct = $(data.rendered_products).filter('#ajax-products-list').data('ajax-products')
        updateProductListDOM(data)
      })
    })

    function updateProductListDOM (data) {
      $('#search_filters').replaceWith(data.rendered_facets)
      $('#js-active-search-filters').replaceWith(data.rendered_active_filters)
      $('#js-product-list-top').replaceWith(data.rendered_products_top)
      // $('#js-product-list').replaceWith(data.rendered_products)
      $('#js-product-list-bottom').replaceWith(data.rendered_products_bottom)
    }
  }
})
