import Vue from 'vue'

var productMiniature = Vue.extend({
  template: '#product-miniature-template',
  props: ['product'],
  model: {
    prop: 'checked',
    event: 'change'
  },
  data: function () {
    return {
      imgBig: this.product.cover.bySize.medium_default.url,
      onHover: false
    }
  },
  methods: {
    changeImg: function (event) {
      if (event) {
        this.imgBig = event.target.dataset.bigImg
      }
    },

    zoomBg: function (event) {
      let container = event.target.parentNode
      let elementZoom = event.target
      var docEl = document.documentElement

      let e = {
        w: elementZoom.offsetWidth,
        h: elementZoom.offsetHeight
      }

      var c = {
        x: Math.round((event.clientX - (container.offsetLeft - docEl.scrollTop)) / (e.w / 12)),
        y: Math.round((event.clientY - (container.offsetTop - docEl.scrollLeft)) / (e.h / 20))
      }
      var x = e.offsetX == undefined ? e.layerX : e.offsetX
      var y = e.offsetY == undefined ? e.layerY : e.offsetY

      console.log(c)

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
