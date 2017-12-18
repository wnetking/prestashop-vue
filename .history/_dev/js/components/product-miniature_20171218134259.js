var productMiniature = Vue.extend({
  template: '#product-miniature-template',
  props: ['product'],
  data: function () {
    return {
      imgBig: this.product.cover.medium.url,
      onHover: false
    }
  },
  methods: {
    changeImg: function (event) {
      if (event) {
        this.imgBig = event.target.dataset.bigImg
      }
    }
  }
})

export default productMiniature
