<div class="row">
  <div class="col-3">
    <b-img-lazy
        slot="aside"
        :src="product.cover.medium.url"
        :alt="product.cover.legend"
        :width="product.cover.medium.width"
        :height="product.cover.medium.height"
        fluid blank-color="#ccc"></b-img-lazy>
  </div>

  <div class="col-9">
    <h6 class="product-name mb-1">
      <a :href="product.url"
      :data-id_customization="product.id_customization">
          {literal}{{product.name}}{/literal}
      </a>
    </h6>
    <span class="product-attributes mr-1" v-for="(value, key) in product.attributes">
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
    <p class="mb-1">
      <span class="product-availability">
        {literal}{{product.availability}}{/literal}
      </span>
    </p>

    <div class="d-flex mb-1">
      <span class="product-price">
          {literal}{{product.price}}{/literal}
      </span>
      <small v-if="product.unit_price_full" class="sub">
          {literal}{{product.unit_price_full}}{/literal}
      </small>
      <span class="product-price text-primary">
          <span v-if="product.is_gift" class="gift">
              {l s='Gift' d='Shop.Theme.Checkout'}
          </span>
          <span v-else>
              {literal}{{product.total}}{/literal}
          </span>
      </span>
    </div>

    <div class="mb-2">
      {l s='Quantity' d='Shop.Theme.Checkout'} :
      <span class="h5">
          {literal}{{product.quantity}}{/literal}
      </span>
    </div>

    <div class="d-flex">
      <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
        <a class="btn btn-secondary"
        @click="updateCartCore" v-if="product.down_quantity_url" :href="product.down_quantity_url">
        -
        </a>
        <a class="btn btn-secondary fas fa-plus"
            @click="updateCartCore"
            v-if="product.up_quantity_url && (product.quantity_available - product.quantity) > 0"
            :href="product.up_quantity_url">
        </a>
        <a class="btn btn-danger remove-from-cart"
            @click="updateCartCore"
            :href="product.remove_from_cart_url">
            {l s='Remove' d='Shop.Theme.Actions'}
        </a>
      </div>
    </div>
  </div>
</div>