import Vue from 'vue'
import data from './data'
import getSelected from './methods/getSelected'
// import changeImg from './methods/changeImg'
// import zoomLeave from './methods/zoomLeave'

var productsLimit = Vue.extend({
	template: `<div>
                <transition name="fade" mode="out-in" appear>
                    <div class="products" v-if="animationOn">
                        <div is="product-miniature" v-for="product in selected" :product='product'></div>
                    </div>
                </transition>    
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
