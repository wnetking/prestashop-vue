<div id="blockcart-wrapper">
  <div class="blockcart cart-preview" data-refresh-url="{$refresh_url}">
    <b-nav-item-dropdown right split >
        <template slot="button-content">
          <a rel="nofollow" href="{$cart_url}" class="text-white">
            <span>{l s='Cart' d='Shop.Theme.Actions'}</span>
            <span>{$cart.summary_string}</span>
          </a>
        </template>

        <b-dropdown-item>
          <div class="body">
            <b-list-group>
              {foreach from=$cart.products item=product}
                <b-list-group-item class="d-flex">
                  {include 'module:ps_shoppingcart/ps_shoppingcart-product-line.tpl' product=$product}
                </b-list-group-item>
              {/foreach}
            </b-list-group>
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

            <a rel="nofollow" href="{$cart_url}" class="">
              <span>{l s='Go to checkout' d='Shop.Theme.Actions'}</span>
            </a>
          </div>
        </b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </div>
</div>
