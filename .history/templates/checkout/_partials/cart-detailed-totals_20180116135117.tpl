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
{block name='cart_detailed_totals'}
  <div class="cart-detailed-totals mb-2">
    {* <div class="cart-subtotals">
      <div class="subtotal">
        <span class="label">
          {literal}{{ modules.blockcart.subtotals.shipping.label}}{/literal}
        </span>:
        <span class="value">
          {literal}{{modules.blockcart.subtotals.shipping.amount}}{/literal}
          {literal}{{currency.sign}}{/literal}
        </span>
        <br>
        <span class="label">
          {literal}{{modules.blockcart.subtotals.products.label}}{/literal}
        </span>:
        <span class="value">
          {literal}{{modules.blockcart.subtotals.products.amount}}{/literal}
          {literal}{{currency.sign}}{/literal}
        </span>
      </div>
    </div> *}
    <table class="table">
      <tbody>
        <tr>
          <td>
             {literal}{{ modules.blockcart.subtotals.shipping.label}}{/literal}
          </td>
          <td>
            {literal}{{modules.blockcart.subtotals.shipping.amount}}{/literal}
            {literal}{{currency.sign}}{/literal}
          </td>
        </tr>
        <tr>
          <td>
            {literal}{{modules.blockcart.subtotals.products.label}}{/literal}
          </td>
          <td>
            {literal}{{modules.blockcart.subtotals.products.amount}}{/literal}
            {literal}{{currency.sign}}{/literal}
          </td>
        </tr>
        <tr>
          <td>
            {literal}{{modules.blockcart.totals.total.label}}{/literal}
          </td>
          <th>
            {literal}{{modules.blockcart.totals.total.amount}}{/literal}
            {literal}{{currency.sign}}{/literal}
          </th>
        </tr>
      </tbody>
    </table>
    <div class="cart-total">
      {* <span class="label">
        {literal}{{modules.blockcart.totals.total.label}}{/literal}
      </span>:
      <span class="value">
        {literal}{{modules.blockcart.totals.total.amount}}{/literal}
        {literal}{{currency.sign}}{/literal}
      </span> *}
      {foreach from=$cart.subtotals item="subtotal"}
      {if $subtotal.type === 'shipping'}
          {hook h='displayCheckoutSubtotalDetails' subtotal=$subtotal}
      {/if}
      {/foreach}
    </div>
  </div>
{/block}
