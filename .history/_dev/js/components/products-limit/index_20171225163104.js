import Vue from 'vue'
import data from './data'
import temp from './template'
import getSelected from './methods/getSelected'

var productsLimit = Vue.extend({
  template: temp,
  props: ['data', 'max', 'list-item'],
  data: data,
  methods: {
    getSelected,
    next() {
      if (this.indexes.end - 1 < this.data.length) {
        this.indexes.end = this.indexes.end + 1
        this.indexes.start = this.indexes.start + 1

        this.getSelected()
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
