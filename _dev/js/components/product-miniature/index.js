import Vue from "vue";
import data from "./data";
import zoomBg from "./methods/zoomBg";
import changeImg from "./methods/changeImg";
import zoomLeave from "./methods/zoomLeave";

var productMiniature = Vue.extend({
  template: "#product-miniature-template",
  props: ["product", "type"],
  data: data,
  methods: {
    changeImg: changeImg,
    zoomBg: zoomBg,
    zoomLeave: zoomLeave
  },
  updated: function() {
    if (!this.isHover) {
      this.imgBig = this.product.cover.bySize.medium_default.url;
      this.imgLarge = this.product.cover.large.url;
    }
  }
});

export default productMiniature;
