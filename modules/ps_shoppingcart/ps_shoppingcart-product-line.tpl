<div>
  <b-img
    class="ml-auto mr-auto d-block"
    :src="product.cover.bySize.small_default.url"
    :alt="product.cover.legend"
    :width="product.cover.bySize.small_default.width"
    :height="product.cover.bySize.small_default.height"
    fluid blank-color="#ccc"></b-img>

</div>
<div class="mx-2 ml-lg-3">
  <a :href="product.url" class="product-name">
    {literal}{{product.name}}{/literal}
  </a>
  <p class="product-quantity mb-0">
    {l s="Quantity" d="Shop.Theme.Actions"} :
    <span>{literal}{{product.quantity}}{/literal}</span>
  </p>
  <p class="product-price mb-0">{literal}{{product.price}}{/literal}</p>
    <div class="customizations" v-if="product.customizations.length">
      <div v-for="customization in product.customizations">
        <span class="product-quantity">
          {literal}{{customization.quantity}}{/literal}
        </span>
        <a  @click="updateCartCore" :href="customization.remove_from_cart_url" class="remove-from-cart btn btn-link btn-sm" rel="nofollow">{l s='Remove' d="Shop.Theme.Actions"}</a>
        <ul class="list-group">
          <li class="list-group-item" v-for="field in customization.fields">
            <label>
              {literal}{{field.label}}{/literal}
            </label>
              <span v-if="field.type == 'text'">
                {literal}{{field.text}}{/literal}
              </span>
              <img v-else-if="field.type == 'image'" :src="field.image.small.url" alt="">
          </li>
        </ul>
      </div>
    </div>
  </p>
  <div class="d-flex mt-1">
    <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
      <a class="btn btn-secondary fa fa-minus"
      @click="updateCartCore" v-if="product.down_quantity_url" :href="product.down_quantity_url">
      </a>
      <a class="btn btn-secondary fa fa-plus"
          @click="updateCartCore"
          v-if="product.up_quantity_url && (product.quantity_available - product.quantity) > 0"
          :href="product.up_quantity_url">
      </a>
      <a class="btn btn-danger remove-from-cart fa fa-trash-o"
          @click="updateCartCore"
          :href="product.remove_from_cart_url">
          {* {l s='Remove' d='Shop.Theme.Actions'} *}
      </a>
    </div>
  </div>
</div>
