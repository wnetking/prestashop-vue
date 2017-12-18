import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import prestashop from 'prestashop'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

$('[data-module-name]').each(function () {
  prestashop.modules[$(this).data('module-name')] = $(this).data('module-data')
})

Vue.use(BootstrapVue)

Vue.component('product-miniature', {
  template: '#product-miniature-template',
  props: ['product'],
  data: function () {
    return {
      imgBig: this.product.cover.medium.url,
      onHover: false
    }
  },
  methods: {
    changeImg: function () {
      this.counter += 1
      this.$emit('increment')
    }
  }
})

new Vue({
  el: '#wrapper',
  data: prestashop
})
