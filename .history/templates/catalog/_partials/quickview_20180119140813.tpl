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

<div id="quickview-resp" class="d-none">

  <div id="quickview-product-prices">
    {block name='product_prices'}
      {include file='catalog/_partials/product-prices.tpl'}
    {/block}
  </div>

  <div id="quickview-product-variants">
    <input type="hidden" name="token" value="{$static_token}">
    <input type="hidden" name="id_product" value="{$product.id}" id="product_page_product_id">
    <input type="hidden" name="id_customization" value="{$product.id_customization}" id="product_customization_id">
    {block name='product_variants'}
      {include file='catalog/_partials/product-variants.tpl'}
    {/block}
  </div>

  <div id="quickview-product-addToCart">
    {block name='product_add_to_cart'}
      {include file='catalog/_partials/product-add-to-cart.tpl'}
    {/block}
  </div>

  <div id="quickview-product-footer" class="modal-footer flex-column flex-sm-row">
    {hook h='displayProductAdditionalInfo' product=$product}
  </div>

</div>
