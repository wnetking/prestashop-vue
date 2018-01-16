
<script type="text/x-template" id="product-miniature-template">
  <article class="product-miniature js-product-miniature"
    @mouseover="isHover = true" @mouseleave="isHover = false"
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
          fluid-grow center blank-color="#ccc"></b-img-lazy>
      </a>

      <transition name="fade" mode="out-in" appear>
        <div v-if="isHover" class="position-absolute product-list-thumb p-1" :key="product.id_product">
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
            v-bind:class="{ active: (thumb.medium.url === imgBig)}"
            {* v-img:name *}
            v-img="{literal}{src: thumb.large.url, title: product.name, group: sharePopOverId}{/literal}"></b-img-lazy>
        </div>
      </transition>
    </div>

      <h2 class="h6 mt-2" itemprop="name">
        <a :href="product.url">
          {literal}{{product.name | truncate(25)}}{/literal}
        </a>
      </h2>

      <div class="product-flags list-unstyled">
        <b-badge v-if="product.show_availability && product.availability_message !== ''" :class='product.availability' variant="info">
          {literal}{{product.availability_message}}{/literal}
        </b-badge>
        <b-badge variant="info" v-for="flag in product.flags" :class="flag.type" :key="flag.type">
          {literal}{{flag.label}}{/literal}
        </b-badge>
      </div>

      <div class="product-description-short" itemprop="description">
        {literal}{{product.description_short | striphtml | truncate(25)}}{/literal}
      </div>

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

      <div class="product-list-actions mb-2 d-flex justify-content-center">
        <form :action="urls.pages.cart" method="post" class="add-to-cart-or-refresh mr-2">
          <input type="hidden" name="token" :value="static_token">
          <input type="hidden" name="id_product" :value="product.id" class="product_page_product_id">
          <input type="hidden" name="id_customization"
            value="{if isset($product.id_customization)}{$product.id_customization}{/if}"
            class="product_customization_id">
          <b-button
            variant="outline-dark"
            v-if=" product.add_to_cart_url && !configuration.is_catalog || product.availability != 'last_remaining_items' && product.availability != 'available'"
            class="btn btn-md btn-primary add-to-cart"
            data-button-action="add-to-cart" type="submit">
            <span class="sr-only">{l s='Add to cart' d='Shop.Theme.Actions'}</span>
            <i class="fas fa-cart-plus"></i>
          </b-button>
        </form>

        <b-btn :id="sharePopOverId" variant="outline-dark" class="mr-2">
          <span class="sr-only">{l s='Share' d='Shop.Theme.Actions'}</span>
          <i class="fa fa-share-alt" aria-hidden="true"></i>
        </b-btn>

        <b-btn variant="outline-dark" data-link-action="quickview" class="quick-view">
          <span class="sr-only">{l s='Quick view' d='Shop.Theme.Actions'}</span>
          <i class="fa fa-eye" aria-hidden="true"></i>
        </b-btn>

        <b-popover
            ref="popover"
            :target="sharePopOverId"
            :title="product.name"
            placement="top"
            >
          <social-sharing :url="product.canonical_url" inline-template>
            <div class="product-share-btns">
              <network network="email">
                <i class="fa fa-envelope"></i> Email
              </network>
              <network network="facebook">
                <i class="fab fa-facebook"></i> Facebook
              </network>
              <network network="googleplus">
                <i class="fab fa-google-plus"></i> Google +
              </network>
              <network network="line">
                <i class="fab fa-linode"></i> Line
              </network>
              <network network="linkedin">
                <i class="fab fa-linkedin"></i> LinkedIn
              </network>
              <network network="odnoklassniki">
                <i class="fab fa-odnoklassniki"></i> Odnoklassniki
              </network>
              <network network="pinterest">
                <i class="fab fa-pinterest"></i> Pinterest
              </network>
              <network network="reddit">
                <i class="fab fa-reddit"></i> Reddit
              </network>
              <network network="skype">
                <i class="fab fa-skype"></i> Skype
              </network>
              <network network="sms">
                <i class="fas fa-comments"></i> SMS
              </network>
              <network network="telegram">
                <i class="fab fa-telegram"></i> Telegram
              </network>
              <network network="twitter">
                <i class="fab fa-twitter"></i> Twitter
              </network>
              <network network="vk">
                <i class="fab fa-vk"></i> VKontakte
              </network>
              <network network="weibo">
                <i class="fab fa-weibo"></i> Weibo
              </network>
              <network network="whatsapp">
                <i class="fab fa-whatsapp"></i> Whatsapp
              </network>
            </div>
          </social-sharing>
        </b-popover>
      </div>

      <div class="variant-links">
        <a v-for="variant in product.main_variants" :href="variant.url"
          :class="variant.type"
          v-bind:style="{literal}{backgroundColor: variant.html_color_code}{/literal}">
          {literal}{{variant.name}}{/literal}
        </a>
      </div>
  </article>
</script>