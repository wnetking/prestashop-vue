<script type="text/x-template" id="cart-detailed-product">
    <div>
        <span class="product-image">
            <img :src="product.cover.small.url">
        </span>
        <h5 class="product-name">
            <a :href="product.url" 
            :data-id_customization="product.id_customization">
                {literal}{{product.name}}{/literal}
            </a>
        </h5>
        <span class="product-attributes" v-for="(value, key) in product.attributes">
            <span class="label">{literal}{{key}}{/literal}:</span>
            <span class="value">{literal}{{value}}{/literal}</span>
        </span>

        {* {if $product.customizations|count}
            {foreach from=$product.customizations item="customization"}
                {foreach from=$customization.fields item="field"}
                    <span class="product-line-info">
                        <span class="label">{$field.label}:</span>
                        <span class="value">
                            {if $field.type == 'text'}
                                {if $field.id_module}
                                    {$field.text nofilter}
                                {else}
                                    {$field.text}
                                {/if}
                            {elseif $field.type == 'image'}
                                <img src="{$field.image.small.url}">
                            {/if}
                        </span>
                    </span>
                {/foreach}
            {/foreach}
        {/if} *}

        <span class="product-availability">
            {literal}{{product.availability}}{/literal}
        </span>
        <span class="product-price">
            {literal}{{product.price}}{/literal}
        </span>
        <small v-if="product.unit_price_full" class="sub">
            {literal}{{product.unit_price_full}}{/literal}
        </small>

        <a v-if="product.down_quantity_url" :href="product.down_quantity_url" class="js-decrease-product-quantity" data-link-action="update-quantity">
            -
        </a>
        
        <span class="product-quantity">
            {literal}{{product.quantity}}{/literal}
        </span>
        
        <a v-if="product.up_quantity_url" :href="product.up_quantity_url" class="js-increase-product-quantity" data-link-action="update-quantity">
            +
        </a>
        
        <a @click="deleteFromCart"
            class="remove-from-cart"
            {* data-link-action="remove-from-cart" *}
            {* data-id-product="product.id_product" *}
            {* data-id-product-attribute="product.id_product_attribute" *}
            :href="product.remove_from_cart_url"
            rel="nofollow"
        >
            {l s='Remove' d='Shop.Theme.Actions'}
        </a>

        <span class="product-price">
            <span v-if="product.is_gift" class="gift">
                {l s='Gift' d='Shop.Theme.Checkout'}
            </span>
            <span v-else>
                {literal}{{product.total}}{/literal}
            </span>
        </span>
    </div>
</script>