import Vue from 'vue'
import productMiniature from './product-miniature'
import productSmallList from './product-small-list'
// import cartDetailedProduct from './cart-detailed-product'

export default function() {
  Vue.component('product-miniature', productMiniature)
  Vue.component('products-small-list', productSmallList)
  // Vue.component('cart-detailed-product', cartDetailedProduct)
}
