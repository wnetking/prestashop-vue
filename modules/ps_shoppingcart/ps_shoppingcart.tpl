<div id="blockcart-wrapper" class="ml-auto">
  <div class="blockcart cart-preview position-relative" data-refresh-url="{$refresh_url}">
    <a class="nav-link dropdown-toggle" href="{$cart_url}"
       id="blockCartLink"
       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <span>{l s='Cart' d='Shop.Theme.Actions'}</span>
      <span>{$cart.summary_string}</span>
    </a>
    <div class="dropdown-menu dropdown-menu-right"
          aria-labelledby="blockCartLink">
      <div class="cart-body px-2">
        <ul class="list-group">
          {foreach from=$cart.products item=product}
            <li class="list-group-item d-flex align-items-start">
              {include 'module:ps_shoppingcart/ps_shoppingcart-product-line.tpl' product=$product}
            </li>
          {/foreach}
        </ul>
        <div class="cart-subtotals">
          {foreach from=$cart.subtotals item="subtotal"}
            <div class="cart-{$subtotal.type}">
              <span class="label">{$subtotal.label}</span>
              <span class="value">{$subtotal.amount}</span>
            </div>
          {/foreach}
        </div>
        <div class="cart-total">
          <span class="label">{$cart.totals.total.label}</span>
          <span class="value">{$cart.totals.total.amount}</span>
        </div>

        <a rel="nofollow" href="{$cart_url}" class="btn btn-outline-dark w-100 mt-3">
          <span>{l s='Go to checkout' d='Shop.Theme.Actions'}</span>
        </a>
      </div>
    </div>
  </div>
</div>

{if !isset($smarty.request.action) }
<b-modal ref="blokcart" lazy size="lg">
  <div v-html="blockcart.modalData">
  </div>
  <div slot="modal-footer" class="w-100 d-flex justify-content-end">
    <b-btn size="sm" variant="primary" href="{$urls.pages.cart}">
      {l s='Proceed to checkout' d='Shop.Theme.Actions'}
    </b-btn>
  </div>            
</b-modal>
{/if}