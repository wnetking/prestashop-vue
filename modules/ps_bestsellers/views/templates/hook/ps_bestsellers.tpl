{*
* 2007-2016 PrestaShop
*
* NOTICE OF LICENSE
*
* This source file is subject to the Academic Free License (AFL 3.0)
* that is bundled with this package in the file LICENSE.txt.
* It is also available through the world-wide-web at this URL:
* http://opensource.org/licenses/afl-3.0.php
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
*  @author PrestaShop SA <contact@prestashop.com>
*  @copyright  2007-2016 PrestaShop SA
*  @license    http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
*  International Registered Trademark & Property of PrestaShop SA
*}
<section  class="featured-products clearfix" data-module-name="bestSellers" data-module-data="{$products|@json_encode}">
  <h2 class="h1 products-section-title text-center mb-2 mb-xl-4">{l s='Best Sellers' d='Modules.Bestsellers.Shop'}</h2>
  <div class="products">
    <div is="product-miniature" v-for="product in modules.bestSellers" :product='product'></div>
  </div>
  {* <div class="products">
    {foreach from=$products item="product"}
      {include file="catalog/_partials/miniatures/product.tpl" product=$product}
    {/foreach}
  </div> *}
  <a href="{$allBestSellers}">{l s='All best sellers' d='Modules.Bestsellers.Shop'}</a>
</section>
