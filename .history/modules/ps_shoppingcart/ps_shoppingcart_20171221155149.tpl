<div id="blockcart-wrapper">
  <div class="blockcart cart-preview" data-refresh-url="{$refresh_url}">

    <b-nav-item-dropdown right>
        <!-- Using button-content slot -->
        <template slot="button-content">
          <a rel="nofollow" href="{$cart_url}">
            <span>{l s='Cart' d='Shop.Theme.Actions'}</span>
            <span>{$cart.summary_string}</span>
          </a>
        </template>

        <b-dropdown-item>
          <div class="body">
            <ul>
              {foreach from=$cart.products item=product}
                <li>{include 'module:ps_shoppingcart/ps_shoppingcart-product-line.tpl' product=$product}</li>
              {/foreach}
            </ul>
            <div class="cart-subtotals">
              {foreach from=$cart.subtotals item="subtotal"}
                <div class="{$subtotal.type}">
                  <span class="label">{$subtotal.label}</span>
                  <span class="value">{$subtotal.amount}</span>
                </div>
              {/foreach}
            </div>
            <div class="cart-total">
              <span class="label">{$cart.totals.total.label}</span>
              <span class="value">{$cart.totals.total.amount}</span>
            </div>
          </div>
        </b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>

    {* <div class="header">
      <a rel="nofollow" href="{$cart_url}">
        <span>{l s='Cart' d='Shop.Theme.Actions'}</span>
        <span>{$cart.summary_string}</span>
      </a>
    </div>
    <div class="body">
      <ul>
        {foreach from=$cart.products item=product}
          <li>{include 'module:ps_shoppingcart/ps_shoppingcart-product-line.tpl' product=$product}</li>
        {/foreach}
      </ul>
      <div class="cart-subtotals">
        {foreach from=$cart.subtotals item="subtotal"}
          <div class="{$subtotal.type}">
            <span class="label">{$subtotal.label}</span>
            <span class="value">{$subtotal.amount}</span>
          </div>
        {/foreach}
      </div>
      <div class="cart-total">
        <span class="label">{$cart.totals.total.label}</span>
        <span class="value">{$cart.totals.total.amount}</span>
      </div>
    </div> *}
  </div>
</div>
