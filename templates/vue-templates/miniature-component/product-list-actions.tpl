<div class="product-list-actions mb-2 d-flex justify-content-center">
    <form :action="urls.pages.cart" method="post" class="add-to-cart-or-refresh mr-2" v-if="product.quantity > 0">
        <input type="hidden" name="token" :value="static_token">
        <input type="hidden" name="id_product" :value="product.id" class="product_page_product_id">
        <input type="hidden" name="id_customization"
        value="{if isset($product.id_customization)}{$product.id_customization}{/if}"
        class="product_customization_id">
        <b-button
        variant="outline-dark"
        v-if="product.add_to_cart_url && !configuration.is_catalog || product.availability != 'last_remaining_items' && product.availability != 'available'"
        class="btn btn-md btn-primary add-to-cart"
        data-button-action="add-to-cart" type="submit">
        <span class="sr-only">{l s='Add to cart' d='Shop.Theme.Actions'}</span>
        <i class="fa fa-cart-plus"></i>
        </b-button>
    </form>

    <b-btn :id="sharePopOverId" variant="outline-dark" class="mr-2">
        <span class="sr-only">{l s='Share' d='Shop.Theme.Actions'}</span>
        <i class="fa fa-share-alt" aria-hidden="true"></i>
    </b-btn>

    <b-btn
        variant="outline-dark"
        data-link-action="quickview"
        class="quick-view"
        :data-id-product="product.id_product"
        :data-id-product-attribute="product.id_product_attribute">
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
            <i class="fa fa-facebook"></i> Facebook
            </network>
            <network network="googleplus">
            <i class="fa fa-google-plus"></i> Google +
            </network>
            <network network="line">
            <i class="fa fa-linode"></i> Line
            </network>
            <network network="linkedin">
            <i class="fa fa-linkedin"></i> LinkedIn
            </network>
            <network network="odnoklassniki">
            <i class="fa fa-odnoklassniki"></i> Odnoklassniki
            </network>
            <network network="pinterest">
            <i class="fa fa-pinterest"></i> Pinterest
            </network>
            <network network="reddit">
            <i class="fa fa-reddit"></i> Reddit
            </network>
            <network network="skype">
            <i class="fa fa-skype"></i> Skype
            </network>
            <network network="sms">
            <i class="fa fa-comments"></i> SMS
            </network>
            <network network="telegram">
            <i class="fa fa-telegram"></i> Telegram
            </network>
            <network network="twitter">
            <i class="fa fa-twitter"></i> Twitter
            </network>
            <network network="vk">
            <i class="fa fa-vk"></i> VKontakte
            </network>
            <network network="weibo">
            <i class="fa fa-weibo"></i> Weibo
            </network>
            <network network="whatsapp">
            <i class="fa fa-whatsapp"></i> Whatsapp
            </network>
        </div>
        </social-sharing>
    </b-popover>
</div>