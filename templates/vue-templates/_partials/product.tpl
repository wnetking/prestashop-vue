
<script type="text/x-template" id="product-miniature-template">
  <article :data-type="type" class="product-miniature js-product-miniature"
    @mouseenter="changeVisibility" @mouseleave="changeVisibility"
    :data-id-product="product.id_product"
    :data-id-product-attribute="product.id_product_attribute"
    itemscope itemtype="http://schema.org/Product">
    <div v-if="type === 'full-width'">
      {include file="vue-templates/_partials/types/full-width.tpl"}
    </div>

    <div v-else>
      {include file="vue-templates/_partials/types/default.tpl"}
    </div>
  </article>
</script>