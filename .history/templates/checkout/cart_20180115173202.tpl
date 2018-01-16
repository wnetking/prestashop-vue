{**
 * 2007-2017 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2017 PrestaShop SA
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 * International Registered Trademark & Property of PrestaShop SA
 *}
{extends file=$layout}

{block name='content'}

  <section id="main">
    <h1 class="h3 border bg-white py-2 px-3 rounded mb-3">
      {l s='Shopping Cart' d='Shop.Theme.Checkout'}
    </h1>

    <div class="row">
      <div class="col-7">
        {block name='cart_overview'}
          {include file='checkout/_partials/cart-detailed.tpl' cart=$cart}
        {/block}
        {block name='continue_shopping'}
          <a href="{$urls.pages.index}" class="btn btn-secondary mt-3">
            {l s='Continue shopping' d='Shop.Theme.Actions'}
          </a>
        {/block}
      </div>
      <div class="col-5">
        <div class="p-2 p-xl-3 border bg-white">
          {block name='hook_shopping_cart_footer'}
            {hook h='displayShoppingCartFooter'}
          {/block}

          {block name='cart_summary'}
            {block name='cart_summary_line'}
              {include file='checkout/_partials/cart-summary-items-subtotal.tpl' cart=$cart}
            {/block}

            {block name='cart_voucher'}
              {include file='checkout/_partials/cart-voucher.tpl'}
            {/block}

            {block name='hook_shopping_cart'}
              {hook h='displayShoppingCart'}
            {/block}

            {block name='cart_totals'}
              {include file='checkout/_partials/cart-detailed-totals.tpl' cart=$cart}
            {/block}

            {block name='cart_actions'}
              {if $cart.minimalPurchaseRequired}
                <div class="notification notification-warning" role="alert" data-alert="warning">
                  {$cart.minimalPurchaseRequired}
                </div>
                <button disabled>{l s='Checkout' d='Shop.Theme.Actions'}</button>
              {elseif empty($cart.products)}
                <button disabled>{l s='Checkout' d='Shop.Theme.Actions'}</button>
              {else}
                <a href="{$urls.pages.order}">{l s='Checkout' d='Shop.Theme.Actions'}</a>
                {hook h='displayExpressCheckout'}
              {/if}
            {/block}

          {/block}
          {block name='hook_reassurance'}
            {hook h='displayReassurance'}
          {/block}
        </div>
      </div>
    </div>
  </section>
{/block}
