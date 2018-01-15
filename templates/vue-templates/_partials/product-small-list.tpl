
<script type="text/x-template" id="product-small-list">
    <b-media>
        <b-carousel id="carousel"
                slot="aside"
                class="border"        
                controls
                background="#ababab"
                img-blank
                :interval="1500"
                {* img-width="60" *}
                {* img-height="480" *}
                label-next="{l s='Next' d='Shop.Theme.Global'}"
                label-prev="{l s='Previous' d='Shop.Theme.Global'}" >
        <b-carousel-slide 
            v-for="thumb in product.images" 
            :key="thumb.id_image"
            :img-src="thumb.small.url"
            :img-height="thumb.small.height"
        >
        </b-carousel-slide>
        </b-carousel>
        <a :href="product.url" class="mt-0 mb-1">
            {literal}{{product.name}}{/literal}
        </a>
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
                <span itemprop="price" class="price text-primary">
                {literal}{{product.price}}{/literal}
                </span>
            </div>
        </div>

        <div class="variant-links links-small">
        <a v-for="variant in product.main_variants" :href="variant.url"
            :class="variant.type"
            v-bind:style="{literal}{backgroundColor: variant.html_color_code}{/literal}">
            {literal}{{variant.name}}{/literal}
        </a>
        </div>
    
    </b-media>
</script>