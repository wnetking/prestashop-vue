import Vue from 'vue'

var productSmallList = Vue.extend({
  template: '#product-small-list',
  props: ['product'],
})

export default productSmallList
