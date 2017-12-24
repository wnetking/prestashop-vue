
<img src="{$product.cover.bySize.cart_default.url}" class="img-fluid"/>
<div class="ml-2 ml-lg-3">
  <span class="product-quantity">{$product.quantity}</span>
  <span class="product-name">{$product.name}</span>
  <p class="product-price">{$product.price}</p>
  <a class="remove-from-cart ml-auto" rel="nofollow"
    href="{$product.remove_from_cart_url}" data-link-action="remove-from-cart">
    <span class="sr-only">{l s="Remove" d="Shop.Theme.Actions"}</span>
    <i class="far fa-trash-alt"></i>
  </a>

  {if $product.customizations|count}
    <div class="customizations">
      <ul class="list-group">
        {foreach from=$product.customizations item="customization"}
          <li class="list-group-item">
            <span class="product-quantity">{$customization.quantity}</span>
            <a href="{$customization.remove_from_cart_url}" class="remove-from-cart" rel="nofollow">{l s='Remove' d="Shop.Theme.Actions"}</a>
            <ul class="list-group">
              {foreach from=$customization.fields item="field"}
                <li class="list-group-item">
                  <label>{$field.label}</label>
                  {if $field.type == 'text'}
                    <span>{$field.text}</span>
                  {elseif $field.type == 'image'}
                  <img src="{$field.image.small.url}"> {/if}
                </li>
              {/foreach}
            </ul>
          </li>
        {/foreach}
      </ul>
    </div>
  {/if}
</div>
