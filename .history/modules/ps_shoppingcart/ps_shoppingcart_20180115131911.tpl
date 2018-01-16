<div id="blockcart-wrapper">
  <div class="blockcart cart-preview position-relative"
      data-refresh-url="{$refresh_url}"
      data-module-name="blockcart" data-module-data="{$cart|@json_encode}">
    <b-nav-item-dropdown right>
        <template slot="button-content">
          <em class="sr-only">{l s='Cart' d='Shop.Theme.Actions'}</em>
          <i class="fas fa-shopping-basket"></i>
        </template>
        <div class="cart-body px-2">
          <ul class="list-group">
          <transition-group name="fade" mode="out-in" appear>
            <li class="list-group-item d-flex align-items-start"
                v-for="product in modules.blockcart.products" :key="Date.now() + Math.random()">
                {include file='module:ps_shoppingcart/ps_shoppingcart-product-line.tpl'}
            </li>
            </transition-group>
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
    </b-nav-item-dropdown>
  </div>
</div>

{if !isset($smarty.request.action) }
<b-modal ref="blokcart" lazy hide-header>
  <div v-html="blockcart.modalData">
  </div>
  <div slot="modal-footer" class="w-100 d-flex justify-content-end">
    <b-btn size="sm" class="mr-auto" variant="outline-dark" @click="hideCartModal">
      {l s='Continue shopping' d='Shop.Theme.Actions'}
    </b-btn>
    <b-btn size="sm" variant="outline-primary" href="{$cart_url}">
      {l s='Proceed to checkout' d='Shop.Theme.Actions'}
    </b-btn>
  </div>
</b-modal>
{/if}