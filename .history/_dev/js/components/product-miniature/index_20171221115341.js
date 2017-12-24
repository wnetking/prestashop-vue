import Vue from 'vue'
import zoomBg from './methods/zoomBg'
import changeImg from './methods/changeImg'

var productMiniature = Vue.extend({
  template: '#product-miniature-template',
  props: ['product'],
  data: function () {
    return {
      imgBig: this.product.cover.bySize.medium_default.url,
      imgLarge: this.product.cover.large.url,
      isHover: false,
      static_token: prestashop.static_token,
      urls: prestashop.urls,
      configuration: prestashop.configuration,
      sharePopOverId: `share-popover-${this.product.id_product}-${this.product.id_category_default}`
    }
  },
  methods: {
    changeImg: changeImg,
    zoomBg: zoomBg,
    zoomLeave: function (event) {
      let container = event.target.parentNode
      let elementZoom = event.target

      elementZoom.style.opacity = 1
      container.style.backgroundImage = ''
      container.style.backgroundPosition = ''
    }
  }
})

export default productMiniature
