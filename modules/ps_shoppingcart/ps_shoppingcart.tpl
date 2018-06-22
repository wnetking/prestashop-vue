<div id="blockcart-wrapper">
  <div class="blockcart cart-preview position-relative"
      data-refresh-url="{$refresh_url}"
      data-module-name="blockcart" data-module-data="{$cart|@json_encode}">

    <b-nav-item v-b-modal="'blockcartModalTotal'">
      <em class="sr-only">{l s='Cart' d='Shop.Theme.Actions'}</em>
      <i class="fa fa-shopping-basket"></i>
    </b-nav-item>

    <b-modal id="blockcartModalTotal" size="sm" centered hide-footer title="{l s='Cart' d='Shop.Theme.Actions'}">
      <div class="cart-body px-2">
        <ul class="list-group">
          <li class="list-group-item d-flex align-items-start"
              v-for="product in modules.blockcart.products" :key="Date.now() + Math.random()">
              {include file='module:ps_shoppingcart/ps_shoppingcart-product-line.tpl'}
          </li>
        </ul>
        <div class="cart-subtotals">
          <div class="subtotal">
            <span class="label">
              {literal}{{ modules.blockcart.subtotals.shipping.label}}{/literal}
            </span>
            <span class="value">
              {literal}{{modules.blockcart.subtotals.shipping.amount}}{/literal}
            </span>
            <span class="label">
              {literal}{{modules.blockcart.subtotals.products.label}}{/literal}
            </span>
            <span class="value">
              {literal}{{modules.blockcart.subtotals.products.amount}}{/literal}
            </span>
          </div>
        </div>

        <div class="cart-total">
          <span class="label">
            {literal}{{modules.blockcart.totals.total.label}}{/literal}
          </span>
          <span class="value">
            {literal}{{modules.blockcart.totals.total.amount}}{/literal}
          </span>
        </div>

        <a rel="nofollow" href="{$cart_url}" class="btn btn-outline-dark w-100 mt-3">
          <span>{l s='Go to checkout' d='Shop.Theme.Actions'}</span>
        </a>
      </div>
    </b-modal>
  </div>
</div>

{if !isset($smarty.request.action) }
  <b-modal id="blokcartModal" body-class="p-0" centered hide-footer title="{l s='Product successfully added' d='Shop.Theme.Actions'}">
    <div v-html="blockcart.modalData">
    </div>
  </b-modal>
{/if}