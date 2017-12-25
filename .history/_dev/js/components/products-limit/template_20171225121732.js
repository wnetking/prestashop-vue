let temp = `<div class="products-limit">
<transition-group appear name="list" tag="div" class="products" mode="out-in">
  <div is="product-miniature" v-for="product in selected" :product='product' :key='product.id'></div>
</transition-group>
<button v-if="indexes.start !== 0" class="prev btn btn-secondary btn-lg" @click="prev">
  <span class="sr-only">Prev</span>
  <i class="fas fa-caret-left"></i>
</button>
<button v-if="indexes.end !== data.length" class="next btn btn-secondary btn-lg" @click="next">
  <span class="sr-only">Next</span>
  <i class="fas fa-caret-right"></i>
</button>
</div>`
export default temp
