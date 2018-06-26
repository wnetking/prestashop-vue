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
  <div id="quickview-product-variants">
    {block name='product_variants'}
      {include file='catalog/_partials/product-variants.tpl'}
    {/block}
  </div>

  <div id="quickview-additional-info" class="flex-column flex-sm-row">
    {hook h='displayProductAdditionalInfo' product=$product}
  </div>

  <div class="product-accessories mb-3"
    data-module-name="accessoriesProduct"
    data-module-data="{$accessories|@json_encode}">
  </div>
</div>
