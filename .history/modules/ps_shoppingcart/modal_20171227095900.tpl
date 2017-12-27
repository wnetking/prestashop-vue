<div id="blockcart-modal" data-close-on-click="true">
  <div>
    <div class="row">
          <div class="col-12">
            {if $cart.products_count > 1}
              <p class="border border-info p-2 rounded cart-products-count">{l s='There are %products_count% items in your cart.' sprintf=['%products_count%' => $cart.products_count] d='Shop.Theme.Checkout'}</p>
            {else}
              <p class="border border-info p-2 rounded cart-products-count">{l s='There is %product_count% item in your cart.' sprintf=['%product_count%' =>$cart.products_count] d='Shop.Theme.Checkout'}</p>
            {/if}
          </div>
          <div class="col-md-6 divide-right">
            <img class="img-fluid product-image" src="{$product.cover.medium.url}" alt="{$product.cover.legend}" title="{$product.cover.legend}" itemprop="image">
            <div class="mt-2">
              <h6 class="h6 product-name">{$product.name}</h6>
              <p class="text-primary mb-1">{$product.price}</p>
              {hook h='displayProductPriceBlock' product=$product type="unit_price"}
              {foreach from=$product.attributes item="property_value" name=property_value key="property"}
                <span>{$property}&nbsp;:&nbsp;{$property_value}</span>&nbsp;|&nbsp;
              {/foreach}
              <span>{l s='Quantity:' d='Shop.Theme.Checkout'}&nbsp;{$product.cart_quantity}</span>
            </div>
          </div>
          <div class="col-md-6">
            <div class="cart-content">
              <p><strong>{l s='Total products:' d='Shop.Theme.Checkout'}</strong>&nbsp;{$cart.subtotals.products.value}</p>
              <p><strong>{l s='Total shipping:' d='Shop.Theme.Checkout'}</strong>&nbsp;{$cart.subtotals.shipping.value} {hook h='displayCheckoutSubtotalDetails' subtotal=$cart.subtotals.shipping}</p>
              {if $cart.subtotals.tax}
              	<p><strong>{$cart.subtotals.tax.label}</strong>&nbsp;{$cart.subtotals.tax.value}</p>
              {/if}
              <p><strong>{l s='Total:' d='Shop.Theme.Checkout'}</strong>&nbsp;{$cart.totals.total.value} {$cart.labels.tax_short}</p>
            </div>
          </div>
        </div>
      </div>
  </div>
</div>
