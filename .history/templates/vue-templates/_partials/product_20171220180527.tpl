
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

      <div class="product-flags list-unstyled">
        <b-badge variant="info" v-for="flag in product.flags" :class="flag.type" :key="flag.type">
          {literal}{{flag.label}}{/literal}
        </b-badge>
      </div>

      <div class="product-description-short" itemprop="description" v-html="product.description_short">
        {literal}{{product.description_short | truncate(10)}}{/literal}
      </div>

      <div class="product-list-actions">
        <b-button
          size="lg"
          variant="primary"
          v-if="product.add_to_cart_url"
          class = "add-to-cart"
          :href  = "product.add_to_cart_url"
          rel   = "nofollow"
          :data-id-product="product.id_product"
          :data-id-product-attribute="product.id_product_attribute"
          data-button-action="add-to-cart"
        >{l s='Add to cart' d='Shop.Theme.Actions'}</b-button>

        <b-btn :id="sharePopOverId" variant="primary">
          {l s='Share' d='Shop.Theme.Actions'}
        </b-btn>

        <b-popover
            ref="popover"
            :target="sharePopOverId"
            title="Popover"
            placement="auto"
            >
          <social-sharing :url="product.canonical_url" inline-template>
            <div>
              <network network="facebook">
                <i class="fa fa-fw fa-facebook"></i> Facebook
              </network>
              <network network="googleplus">
                <i class="fa fa-fw fa-google-plus"></i> Google +
              </network>
              <network network="linkedin">
                <i class="fa fa-fw fa-linkedin"></i> LinkedIn
              </network>
              <network network="pinterest">
                <i class="fa fa-fw fa-pinterest"></i> Pinterest
              </network>
              <network network="reddit">
                <i class="fa fa-fw fa-reddit"></i> Reddit
              </network>
              <network network="twitter">
                <i class="fa fa-fw fa-twitter"></i> Twitter
              </network>
              <network network="vk">
                <i class="fa fa-vk"></i> VKontakte
              </network>
              <network network="weibo">
                <i class="fa fa-weibo"></i> Weibo
              </network>
              <network network="whatsapp">
                <i class="fa fa-fw fa-whatsapp"></i> Whatsapp
              </network>
            </div>
          </social-sharing>
        </b-popover>
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

      <div class="variant-links">
        <a v-for="variant in product.main_variants" :href="variant.url"
          :class="variant.type" v-bind:style="{literal}{backgroundColor: variant.html_color_code}{/literal}"
        >
          {literal}{{variant.name}}{/literal}
        </a>
      </div>

      <b-badge v-if="product.show_availability" :class='product.availability' variant="info">
        {literal}{{product.availability_message}}{/literal}
      </b-badge>
  </article>
</script>