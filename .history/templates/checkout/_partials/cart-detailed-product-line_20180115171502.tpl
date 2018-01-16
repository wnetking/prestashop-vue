<div class="row">
  <div class="col-4">
    <b-img-lazy
        slot="aside"
        :src="product.cover.medium.url"
        :alt="product.cover.legend"
        :width="product.cover.medium.width"
        :height="product.cover.medium.height"
        fluid blank-color="#ccc"></b-img-lazy>
    <div class="d-flex mt-1">
      <div class="btn-group btn-group-sm ml-auto mr-auto" role="group" aria-label="Basic example">
        <a class="btn btn-secondary fas fa-minus"
        @click="updateCartCore" v-if="product.down_quantity_url" :href="product.down_quantity_url">
        </a>
        <a class="btn btn-secondary fas fa-plus"
            @click="updateCartCore"
            v-if="product.up_quantity_url && (product.quantity_available - product.quantity) > 0"
            :href="product.up_quantity_url">
        </a>
        <a class="btn btn-danger remove-from-cart far fa-trash-alt"
            @click="updateCartCore"
            :href="product.remove_from_cart_url">
            {* {l s='Remove' d='Shop.Theme.Actions'} *}
        </a>
      </div>
    </div>
  </div>

  <div class="col-8">
    <h6 class="product-name mb-1">
      <a :href="product.url"
      :data-id_customization="product.id_customization">
          {literal}{{product.name}}{/literal}
      </a>
    </h6>
    <small class="product-attributes mr-1" v-for="(value, key) in product.attributes">
      <span class="label">{literal}{{key}}{/literal}</span> -
      <span class="value">{literal}{{value}}{/literal}</span>
      <br>
    </small>

    <div v-if="product.customizations.length">
      <div v-for="customization in product.customizations">
        <div v-for="field in customization.fields">
          <span class="product-line-info">
            <span class="label">
              {literal}{{field.label}}{/literal}:
            </span>
            <span class="value">
                <span v-if="field.type == 'text'">
                  <span v-if="field.id_module">
                    {literal}{{field.text}}{/literal}
                  </span>
                  <span v-else>
                    {literal}{{field.text}}{/literal}
                  </span>
                </span>
                <span v-else-if="field.type == 'image'">
                    <img src="{$field.image.small.url}">
                </span>
            </span>
          </span>
        </div>
      </div>
    </div>

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

    <div class="mb-2 align-items-center">
      {l s='Quantity' d='Shop.Theme.Checkout'} :
      <span class="h5">
          {literal}{{product.quantity}}{/literal}
      </span>
    </div>


  </div>
</div>