import Vue from 'vue'
import data from './data'
import zoomBg from './methods/zoomBg'
import changeImg from './methods/changeImg'
import zoomLeave from './methods/zoomLeave'

var productMiniature = Vue.extend({
  template: '#product-miniature-template',
  props: ['product', 'type'],
  data: data,
  methods: {
    changeImg,
    zoomBg,
    zoomLeave,
    changeVisibility(visability){
      if(document.documentElement.clientWidth > 992){
        this.isHover = this.isHover ? false: true
      }
    },
    onresizeCheck(){
      if(document.documentElement.clientWidth > 992){
        this.isHover = this.isHover ? false: true
      }
    } 
  },
  created(){
    $(window).on('resize', this.onresizeCheck)
  },

  updated() {
    if (!this.isHover) {
      this.imgBig = this.product.cover.bySize.medium_default.url
      this.imgLarge = this.product.cover.large.url
    }
  }
})

export default productMiniature
