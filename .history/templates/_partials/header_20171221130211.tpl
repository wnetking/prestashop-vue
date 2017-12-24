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

<b-navbar toggleable="md" type="dark" variant="primary">
  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
  {block name='header_logo'}
    <b-navbar-brand href="{$urls.base_url}" title="{$shop.name}" class="logo">
      <img src="{$shop.logo}" alt="{$shop.name}">
    </b-navbar-brand>
  {/block}
  <b-collapse is-nav id="nav_collapse">
    <b-navbar-nav class="ml-auto">
      {block name='header_nav'}
        {* <div class="header-nav"> *}
          {hook h='displayNav'}
        {* </div> *}
      {/block}
    </b-navbar-nav>
  </b-collapse>
</b-navbar>


<b-container>
  <b-row>
     <b-col>
      {block name='header_top'}
        <div class="header-top">
          {hook h='displayTop'}
        </div>

        {hook h='displayNavFullWidth'}

      {/block}
     </b-col>
  </b-row>
</b-container>



