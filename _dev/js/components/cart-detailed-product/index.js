import Vue from 'vue'
import { deleteFromCart } from '../../core/cart'

var cartDetailedProduct = Vue.extend({
  template: '#cart-detailed-product',
  props: ['product']
})

export default cartDetailedProduct
