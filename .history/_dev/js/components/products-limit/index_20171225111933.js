import Vue from 'vue'
import data from './data'
import getSelected from './methods/getSelected'

var productsLimit = Vue.extend({
  template: `<div>
							<div class="products" v-if="animationOn">
							<transition-group name="list" tag="div" class="products" mode="out-in">
                <div is="product-miniature" v-for="product in selected" :product='product' :key='product.id'></div>
							</transition-group>
								</div>
              <button class="next btn btn default" @click="next">Next</button>
              <button class="prev btn btn default" @click="prev">Prev</button>
            </div>`,
  props: ['data'],
  data: data,
  methods: {
    getSelected,
    next() {
      if (this.indexes.end < this.data.length) {
        this.animationOn = false
        this.indexes.end = this.indexes.end + 1
        this.indexes.start = this.indexes.start + 1

        this.getSelected()
        this.animationOn = true
      }
    },
    prev() {
      if (this.indexes.start !== 0) {
        this.indexes.end = this.indexes.end - 1
        this.indexes.start = this.indexes.start - 1
        this.getSelected()
      }
    }
  },
  created: function () {
    this.getSelected()
  }
})

export default productsLimit
