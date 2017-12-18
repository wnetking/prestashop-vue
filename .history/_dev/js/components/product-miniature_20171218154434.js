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
      imgBig: this.product.cover.medium.url,
      onHover: false,
      zoomStyle: {},
      mainImgStyle: {
        opacity: 1
      }
    }
  },
  methods: {
    changeImg: function (event) {
      if (event) {
        this.imgBig = event.target.dataset.bigImg
      }
    },

    moveBG: function (event) {
      let container = event.target.parentNode
      let elementZoom = event.target
      let styles = {}

      let e = {
        w: elementZoom.offsetWidth,
        h: elementZoom.offsetHeight
      }

      var c = {
        x: Math.round((event.clientX - (container.offsetLeft - window.scrollX)) / (e.w / 100)),
        y: Math.round((event.clientY - (container.offsetTop - window.scrollY)) / (e.h / 100))
      }
      console.log(this.zoomStyle)

      styles.backgroundImage = `url(${elementZoom.dataset.largeImg})`
      styles.backgroundPosition = c.x + '% ' + c.y + '%'

      container.style = styles
    }
  }
})

export default productMiniature
