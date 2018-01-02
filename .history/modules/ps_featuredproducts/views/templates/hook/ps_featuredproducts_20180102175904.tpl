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
  <b-card header="{l s='Popular Products' d='Shop.Theme.Catalog'}" body-class="p-2" header-tag="h5">
    <carousel class="products" :per-page-custom="[[768, 3], [1024, 4], [2560, 4]]"
        :pagination-padding="5"
        paginationActiveColor="var(--secondary)" paginationColor="var(--secondary)">
      <slide v-for="product in modules.featuredProduct" :key="product.id">
        <div is="product-miniature" :product='product'></div>
      </slide>
    </carousel>
  </b-card>
</section>
