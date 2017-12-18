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

      let e = {
        w: elementZoom.offsetWidth,
        h: elementZoom.offsetHeight
      }

      var c = {
        x: Math.round((event.clientX - ((elementZoom.offsetWidth / 2) - window.scrollX)) / (e.w / 100)),
        y: Math.round((event.clientY - ((elementZoom.offsetTop / 2) - window.scrollY)) / (e.h / 100))
      }
      console.log(container.offsetTop)

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
