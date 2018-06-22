<div id="blockcart-modal">
  <div class="row no-gutters">
      <div class="col-md-6 bg-light d-flex">
        <div class="p-3 flex-column d-flex w-100">
          <div class="mt-2">
            <h6 class="h6 product-name">{$product.name}</h6>
            <p class="text-primary mb-1">{$product.price}</p>
            {hook h='displayProductPriceBlock' product=$product type="unit_price"}
            {foreach from=$product.attributes item="property_value" name=property_value key="property"}
              <span>{$property}&nbsp;:&nbsp;{$property_value}</span>&nbsp;|&nbsp;
            {/foreach}
            <span>{l s='Quantity:' d='Shop.Theme.Checkout'}&nbsp;{$product.cart_quantity}</span>
          </div>
          <hr class="mb-auto">
          {if $cart.products_count > 1}
            <h6 class="cart-products-count">{l s='There are %products_count% items in your cart.' sprintf=['%products_count%' => $cart.products_count] d='Shop.Theme.Checkout'}</h6>
          {else}
            <h6 class="cart-products-count">{l s='There is %product_count% item in your cart.' sprintf=['%product_count%' =>$cart.products_count] d='Shop.Theme.Checkout'}</h6>
          {/if}
          <div class="cart-content">
            <table class="table table-sm">
              <tbody>
                <tr>
                  <td>
                    {l s='Total products:' d='Shop.Theme.Checkout'}
                  </td>
                  <td class="text-right">
                    {$cart.subtotals.products.value}
                  </td>
                </tr>
                <tr>
                  <td>
                    {l s='Total shipping:' d='Shop.Theme.Checkout'}
                  </td>
                  <td class="text-right">
                    {$cart.subtotals.shipping.value}
                    {hook h='displayCheckoutSubtotalDetails' subtotal=$cart.subtotals.shipping}
                  </td>
                </tr>
                {if $cart.subtotals.tax}
                  <tr>
                    <td>
                      {$cart.subtotals.tax.label}
                    </td>
                    <td class="text-right">
                      {$cart.subtotals.tax.value}
                    </td>
                  </tr>
                {/if}
                <tr>
                  <td>
                    {l s='Total:' d='Shop.Theme.Checkout'}
                  </td>
                  <th class="text-right">
                    {$cart.totals.total.value} {$cart.labels.tax_short}
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="col-md-6 divide-right">
        <img class="img-fluid product-image" src="{$product.cover.large.url}" alt="{$product.cover.legend}" title="{$product.cover.legend}" itemprop="image">
      </div>
    </div>
  </div>
</div>
