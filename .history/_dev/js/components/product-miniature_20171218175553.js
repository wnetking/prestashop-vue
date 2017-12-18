import Vue from 'vue'

var productMiniature = Vue.extend({
  template: '#product-miniature-template',
  props: ['product'],
  data: function () {
    return {
      imgBig: this.product.cover.bySize.medium_default.url,
      imgLarge: this.product.cover.large.url,
      onHover: false
    }
  },
  methods: {
    changeImg: function (event) {
      if (event) {
        this.imgBig = event.target.dataset.bigImg
        this.imgLarge = event.target.dataset.largeImg
      }
    },

    zoomBg: function (event) {
      let container = event.target.parentNode
      let elementZoom = event.target
      var docEl = document.documentElement

      var x = event.offsetX == undefined ? event.layerX : event.offsetX
      var y = event.offsetY == undefined ? event.layerY : event.offsetY

      let e = {
        w: elementZoom.offsetWidth,
        h: elementZoom.offsetHeight
      }

      let c = {
        x: (x / (e.w / 80)),
        y: (y / (e.h / 100))
      }

      elementZoom.style.opacity = 0
      container.style.backgroundImage = `url(${elementZoom.dataset.largeImg})`
      container.style.backgroundPosition = c.x + '% ' + c.y + '%'
    },

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
