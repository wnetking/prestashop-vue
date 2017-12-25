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

<section class="col-12 featured-products clearfix" data-module-name="featuredProduct" data-module-data="{$products|@json_encode}">
  <h2 class="h1 products-section-title text-center mb-2 mb-xl-4">
    {l s='Popular Products' d='Shop.Theme.Catalog'}
  </h2>
  <carousel perPage="4" navigationEnabled="true">
    <slide v-for="product in modules.featuredProduct">
      <div is="product-miniature" :product='product'></div>
    </slide>
  </carousel>

  {* <div class="products">
    <div is="product-miniature" v-for="product in modules.featuredProduct" :product='product'></div>
  </div> *}

  {* <a class="all-product-link float-xs-left float-md-right h4" href="{$allProductsLink}">
    {l s='All products' d='Shop.Theme.Catalog'}
  </a> *}
</section>
