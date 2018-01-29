<div v-if="product.show_price" class="product-price-and-shipping mb-2">
  <div>
    <span v-if="product.has_discount" class="regular-price">
      {literal}{{product.regular_price}}{/literal}
    </span>
    <span v-if="product.discount_type === 'percentage'" class="discount-percentage discount-product text-danger">
      {literal}{{product.discount_percentage}}{/literal}
    </span>
    <span v-else-if="product.discount_type === 'amount'" class="discount-amount discount-product text-danger">
      {literal}{{product.discount_amount_to_display}}{/literal}
    </span>
    <span itemprop="price" class="price text-primary h5">
      {literal}{{product.price}}{/literal}
    </span>
  </div>
</div>