let temp = `<div class="products-limit">
<transition-group appear name="list" tag="div" class="products" mode="out-in">
  <div is="product-miniature" v-for="product in selected" :product='product' :key='product.id'></div>
</transition-group>
<button v-if="indexes.start !== 0" class="prev btn btn default" @click="prev">Prev</button>
<button v-if="indexes.end !== data.length" class="next btn btn default" @click="next">Next</button>
</div>`
export default temp
