<b-img-lazy
  :src="product.cover.bySize.cart_default.url"
  :alt="product.cover.legend"
  :width="product.cover.bySize.cart_default.width"
  :height="product.cover.bySize.cart_default.height"
  fluid blank-color="#ccc"></b-img-lazy>
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
</div>
<a @click="updateCartCore" class="remove-from-cart ml-auto far fa-trash-alt" rel="nofollow"
    :href="product.remove_from_cart_url" data-link-action="remove-from-cart">
    <span class="sr-only">{l s="Remove" d="Shop.Theme.Actions"}</span>
</a>