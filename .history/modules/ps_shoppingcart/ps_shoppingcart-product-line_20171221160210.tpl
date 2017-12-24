<span class="product-quantity">{$product.quantity}</span>
<span class="product-name">{$product.name}</span>
<span class="product-price">{$product.price}</span>
<b-badge variant="primary" pill>
  <a class="remove-from-cart" rel="nofollow"
     href="{$product.remove_from_cart_url}" data-link-action="remove-from-cart">
    <span class="sr-only">{l s="Remove" d="Shop.Theme.Actions"}</span>
  </a>
</b-badge>

{if $product.customizations|count}
  <div class="customizations">
    <b-list-group>
      {foreach from=$product.customizations item="customization"}
        <b-list-group-item>
          <span class="product-quantity">{$customization.quantity}</span>
          <a href="{$customization.remove_from_cart_url}" class="remove-from-cart" rel="nofollow">{l s='Remove' d="Shop.Theme.Actions"}</a>
          <b-list-group>
            {foreach from=$customization.fields item="field"}
              <b-list-group-item>
                <label>{$field.label}</label>
                {if $field.type == 'text'}
                  <span>{$field.text}</span>
                {elseif $field.type == 'image'}
                 <img src="{$field.image.small.url}"> {/if}
              <b-list-group-item>
            {/foreach}
          </b-list-group>
        </b-list-group-item>
      {/foreach}
    </b-list-group>
  </div>
{/if}