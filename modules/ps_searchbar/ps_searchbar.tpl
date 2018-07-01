{*
* 2007-2015 PrestaShop
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
*  @copyright  2007-2015 PrestaShop SA
*  @license    http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
*  International Registered Trademark & Property of PrestaShop SA
*}

<div id="search_widget" class="search_widget d-flex ml-sm-auto" data-search-controller-url="{$search_controller_url}">
  <b-button variant="link" v-b-modal="'searchModal'">
    <em class="sr-only">{l s='Search' d='Shop.Theme.Actions'}</em>
    <i class="fa fa-search"></i>
  </b-button>

   <b-modal id="searchModal" hide-footer size="sm" title="{l s='Search' d='Shop.Theme.Actions'}">
     <form method="get" action="{$search_controller_url}">
       <p class="d-flex align-items-center">
         <span>{l s='Please, enter you request' d='Shop.Theme.Actions'}</span>
         <i v-if='blockcart.loading' class="fa fa-spinner fa-pulse ml-auto" aria-hidden="true"></i>
       </p>
       <div class="input-group">

         <input type="hidden" name="controller" value="search">
         <input @keyup="searchBarChange"
           class="mr-sm-2 form-control"
           type="search" name="s"
           placeholder="{l s='Search' d='Modules.Searchbar.Shop'}"
           value="{$search_string}" data-search-controller-url="{$search_controller_url}" autocomplete="off">
           <div class="input-group-append">
             <button class="btn my-2 my-sm-0 btn-primary px-3" type="submit">
               <span class="sr-only">{l s='Search' d='Modules.Searchbar.Shop'}</span>
               <i class="fa fa-search"></i>
             </button>
           </div>
         </div>
      </form>

      <div class="mt-2" v-if='blockcart.data.length > 0 || blockcart.noResult'>
        <b-card v-if="!blockcart.noResult">
          <div class="search-info mb-1 p-1">
            <i class="fa fa-smile-o mr-1 fa-lg"></i>
            {l s='We find ' d='Modules.Searchbar.Shop'}
            {literal}{{blockcart.data.length}}{/literal}
            {l s=' products' d='Modules.Searchbar.Shop'}
          </div>
          <div is="products-small-list"
          v-for="product in blockcart.data" :key="product.id" :product='product' class="mb-2"></div>
        </b-card>
        <b-card v-if="blockcart.noResult">
          <div class="search-info mb-1 p-1">
            <i class="fa fa-frown-0 mr-1 fa-lg"></i>
            {l s='Sorry,we find nothing...' d='Modules.Searchbar.Shop'}
          </div>
        </b-card>
     </div>
   </b-modal>

</div>
