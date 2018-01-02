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

<section data-module-name="viewedProduct" data-module-data="{$products|@json_encode}">
  <b-card header="{l s='Viewed products' d='Modules.Viewedproduct.Shop'}" class="" body-class="p-2" header-tag="h5">
    <carousel class="products" :per-page-custom="[[768, 3], [1024, 4], [2560, 4]]" 
      :pagination-padding="5"
      pagination-active-color="var(--gray-dark)" pagination-color="var(--secondary)"
      navigation-next-label=""
      navigation-prev-label="">
      <slide v-for="product in modules.viewedProduct" :key="product.id">
        <div is="product-miniature" :product='product'></div>
      </slide>
    </carousel>
  </b-card>
</section>
