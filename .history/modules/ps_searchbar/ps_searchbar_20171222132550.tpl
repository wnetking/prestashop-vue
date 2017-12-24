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

<div id="search_widget" class="search_widget d-flex ml-2 ml-lg-3" data-search-controller-url="{$search_controller_url}">
	<form class="d-flex form-inline w-100" method="get" action="{$search_controller_url}">
		<input type="hidden" name="controller" value="search">
		<input class="mr-sm-2 form-control form-control-sm"
			type="text" name="s"
			placeholder="{l s='Search' d='Modules.Searchbar.Shop'}"
			value="{$search_string}">
		<button class="btn my-2 my-sm-0 btn-secondary btn-sm" type="submit">
			<span class="sr-only">{l s='Search' d='Modules.Searchbar.Shop'}</span>
			<i class="fas fa-search"></i>
		</button>
	</form>
</div>
