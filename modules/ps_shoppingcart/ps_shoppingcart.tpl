<div id="blockcart-wrapper" class="ml-2 ml-lg-3">
  <div class="blockcart cart-preview position-relative"
      data-refresh-url="{$refresh_url}"
      data-module-name="blockcart" data-module-data="{$cart|@json_encode}">

    <b-button variant="link" v-b-modal="'blockcartModalTotal'">
      <em class="sr-only">{l s='Cart' d='Shop.Theme.Actions'}</em>
      <i class="fa fa-shopping-basket"></i>
    </b-button>

    <b-modal id="blockcartModalTotal" size="sm" body-class="p-2" title="{l s='Cart' d='Shop.Theme.Actions'}">
      <div class="cart-body" v-if="modules.blockcart.products.length">
        <div class="cart-products mb-2">
          <ul class="list-group">
            <li class="list-group-item d-flex align-items-start"
                v-for="product in modules.blockcart.products" :key="Date.now() + Math.random()">
                {include file='module:ps_shoppingcart/ps_shoppingcart-product-line.tpl'}
            </li>
          </ul>
        </div>

        <div class="list-group-item">
          <div class="cart-subtotals">
            <div class="subtotal">
              <p class="d-flex">
                <span class="label mr-auto">
                  {literal}{{ modules.blockcart.subtotals.shipping.label}} :{/literal}
                </span>
                <span class="value">
                  {literal}{{modules.blockcart.subtotals.shipping.amount}} {{currency.sign}}{/literal}
                </span>
              </p>
              <p class="d-flex">
                <span class="label mr-auto">
                  {literal}{{modules.blockcart.subtotals.products.label}} :{/literal}
                </span>
                <span class="value">
                  {literal}{{modules.blockcart.subtotals.products.amount}} {{currency.sign}}{/literal}
                </span>
              </p>
            </div>
          </div>

          <div class="cart-total d-flex">
            <span class="label mr-auto">
              {literal}{{modules.blockcart.totals.total.label}} :{/literal}
            </span>
            <span class="value text-primary">
              {literal}{{modules.blockcart.totals.total.amount}} {{currency.sign}}{/literal}
            </span>
          </div>
        </div>

      </div>
      <div class="cart-body p-2" v-else>
        <h5 class="mb-0">{l s='You cart is empty!' d='Shop.Theme.Actions'}</h5>
      </div>

      <div slot="modal-footer" class="w-100" >
        <a rel="nofollow" href="{$cart_url}" class="btn btn-primary w-100" v-if="modules.blockcart.products.length">
          <span>{l s='Go to checkout' d='Shop.Theme.Actions'}</span>
        </a>
      </div>
    </b-modal>
  </div>
</div>

{if !isset($smarty.request.action) }
  <b-modal id="blokcartModal" body-class="p-0" size="lg" centered title="{l s='Product successfully added' d='Shop.Theme.Actions'}">
    <div v-html="blockcart.modalData">
    </div>
    <div slot="modal-footer" class="w-100 d-flex justify-content-between">
      <b-btn @click="$root.$emit('bv::hide::modal', 'blokcartModal', $event.target)">
        <span>{l s='Continue shopping' d='Shop.Theme.Actions'}</span>
      </b-btn>
      <a rel="nofollow" href="{$cart_url}" class="btn btn-outline-dark">
        <span>{l s='Go to checkout' d='Shop.Theme.Actions'}</span>
      </a>
    </div>
  </b-modal>
{/if}