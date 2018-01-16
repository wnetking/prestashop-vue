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
{block name='cart_summary_product_line'}
  <div class="media">
    <a class="product-thumbnail mr-3" href="{$product.url}" title="{$product.name}">
      <img class="img-fluid" src="{$product.cover.small.url}" alt="{$product.name}">
    </a>
    <div class="media-body">
      <h3 class="h6 product-title">{$product.name}</h3>
      <div class="product-price">
        <span class="price">{$product.price}</span>
        {hook h='displayProductPriceBlock' product=$product type="unit_price"}
      </div>
      <div class="product-quantity">{l s='Quantity' d='Shop.Theme.Actions'}: {$product.quantity}</div>
    </div>
  </div>
{/block}
