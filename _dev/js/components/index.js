import Vue from 'vue'
import productMiniature from './product-miniature'
import productsLimit from './products-limit'

export default function() {
  Vue.component('product-miniature', productMiniature)
  Vue.component('products-limit', productsLimit)
}
