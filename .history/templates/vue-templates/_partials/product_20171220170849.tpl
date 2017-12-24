
<script type="text/x-template" id="product-miniature-template">
  <article class="product-miniature"
    @mouseover="onHover = true" @mouseleave="onHover = false"
    :data-id-product="product.id_product"
    :data-id-product-attribute="product.id_product_attribute"
    itemscope itemtype="http://schema.org/Product">

    <div class="position-relative thumbnail-container">
      <a :href="product.url" class="thumbnail product-thumbnail d-block">

        <b-img-lazy
          v-on:mousemove.native="zoomBg"
          v-on:mouseleave.native="zoomLeave"
          v-bind:src="imgBig"
          :data-large-img="imgLarge"
          :alt="product.cover.legend"
          :width="product.cover.bySize.medium_default.width"
          :height="product.cover.bySize.medium_default.height"
          fluid-grow center blank-color="#ccc" />
      </a>

      <transition name="fade" mode="out-in" appear>
        <div v-if="onHover" class="position-absolute product-list-thumb p-1" :key="product.id_product">
          <b-img-lazy v-for="thumb in product.images"
            v-bind:src="thumb.small.url"
            :alt="thumb.legend"
            :width="thumb.small.width"
            :height="thumb.small.height"
            :key="thumb.id_image"
            block
            fluid
            :data-big-img="thumb.medium.url"
            :data-large-img="thumb.large.url"
            @mouseover.native="changeImg"
            blank-color="#ccc"
            v-bind:class="{ active: (thumb.medium.url === imgBig)}" />
        </div>
      </transition>
    </div>

      <h2 class="h5 mt-2" itemprop="name">
        <a :href="product.url">
          {literal}{{product.name}}{/literal}
        </a>
      </h2>

      <div class="product-description-short" itemprop="description" v-html="product.description_short">
        {literal}{{product.description_short}}{/literal}
      </div>

      <div class="product-list-actions">
        <a
          v-if="product.add_to_cart_url"
          class = "add-to-cart"
          :href  = "product.add_to_cart_url"
          rel   = "nofollow"
          :data-id-product="product.id_product"
          :data-id-product-attribute="product.id_product_attribute"
          data-button-action="add-to-cart"
        >{l s='Add to cart' d='Shop.Theme.Actions'}</a>
      </div>

      <div class="variant-links">
        <a v-for="variant in product.main_variants" :href="variant.url"
          :class="variant.type" v-bind:style="{literal}{backgroundColor: variant.html_color_code}{/literal}"
        >
          {literal}{{variant.name}}{/literal}
        </a>
      </div>

      <div v-if="product.show_price" class="product-price-and-shipping">
        <div v-if="product.has_discount">
          <span v-if="product.has_discount" class="regular-price">
            {literal}{{product.regular_price}}{/literal}
          </span>
          <span v-if="product.discount_type === 'percentage'" class="discount-percentage discount-product">
            {literal}{{product.discount_percentage}}{/literal}
          </span>
          <span v-else-if="product.discount_type === 'amount'" class="discount-amount discount-product">
            {literal}{{product.discount_amount_to_display}}{/literal}
          </span>
        </div>
        <span itemprop="price" class="price">
          {literal}{{product.price}}{/literal}
        </span>
      </div>

      <div class="product-flags list-unstyled">
        <b-badge variant="info" v-for="flag in product.flags" :class="flag.type" >
          {literal}{{flag.label}}{/literal}
        </b-badge>
      </div>

      <b-badge v-if="product.show_availability" :class='product.availability' variant="info">
        {literal}{{product.availability_message}}{/literal}
      </b-badge>
  </article>
</script>