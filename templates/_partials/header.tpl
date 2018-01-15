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
{block name='header_banner'}
  <div class="header-banner">
    {hook h='displayBanner'}
  </div>
{/block}

<div class="bg-dark">
  <b-navbar toggleable type="dark" class="container">  
    <b-navbar-nav class="w-100">
      {block name='header_nav'}
          {hook h='displayNav'}
      {/block}
    </b-navbar-nav>
  </b-navbar>
</div>

<div class="container">
  <b-navbar toggleable type="light" class="py-lg-4">
    <b-navbar-brand href="{$urls.base_url}" class="d-lg-none">
      <img :src="shop.stores_icon"/>
      <span>{literal}{{shop.name}}{/literal}</span>
    </b-navbar-brand>

    {block name='header_logo'}
      <b-navbar-brand href="{$urls.base_url}" title="{$shop.name}" class="logo d-none d-lg-inline-block">
        <img src="{$shop.logo}" alt="{$shop.name}">
      </b-navbar-brand>
    {/block}
    {* <b-navbar-toggle target="header-top"></b-navbar-toggle> *}

    <b-collapse is-nav id="header-top" class="justify-content-end">
      <b-navbar-nav class="w-100">
        {hook h='displayTop'}
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>

{hook h='displayNavFullWidth'}


{* <b-container class="pt-5">
  <b-row class="mt-2">
     <b-col>
      {block name='header_top'}
        <div class="header-top">
          {hook h='displayTop'}
        </div>



      {/block}
     </b-col>
  </b-row>
</b-container> *}



