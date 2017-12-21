import Vue from 'vue'
import data from './data'
import zoomBg from './methods/zoomBg'
import changeImg from './methods/changeImg'
import zoomLeave from './methods/zoomLeave'

var productMiniature = Vue.extend({
  template: '#product-miniature-template',
  props: ['product'],
  data: data,
  methods: {
    changeImg: changeImg,
    zoomBg: zoomBg,
    zoomLeave: zoomLeave
  }
})

export default productMiniature
