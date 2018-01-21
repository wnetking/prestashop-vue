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
<!doctype html>
<html lang="{$language.locale}">

  <head>
    {block name='head'}
      {include file='_partials/head.tpl'}
    {/block}
  </head>

  <body id="{$page.page_name}" class="{$page.body_classes|classnames} bg-light">
    <main id="app">
      {block name='hook_after_body_opening_tag'}
        {hook h='displayAfterBodyOpeningTag'}
      {/block}

      <header id="header" class="bg-secondary mb-3">
        {block name='header'}
          {include file='_partials/header.tpl'}
        {/block}
      </header>

      {block name='notifications'}
        {include file='_partials/notifications.tpl'}
      {/block}

      <div id="wrapper" class="container">
        {block name='top-column'}
          {hook h="displayTopColumn"}
          {hook h="displayWrapperTop"}
        {/block}

        {block name='breadcrumb'}
          {include file='_partials/breadcrumb.tpl'}
        {/block}

        <div class="row">
          {block name='left_column'}
            <div id="left-column" class="col-12 col-md-2 col-lg-3">
              {if $page.page_name == 'product'}
                {hook h='displayLeftColumnProduct'}
              {else}
                {hook h="displayLeftColumn"}
              {/if}
            </div>
          {/block}

          {block name='content_wrapper'}
            <div id="content-wrapper" class="col-12 col-md-8 col-lg-6">
              {hook h="displayContentWrapperTop"}
              {block name='content'}
                <p>Hello world! This is HTML5 Boilerplate.</p>
              {/block}
              {hook h="displayContentWrapperBottom"}
            </div>
          {/block}

          {block name='right_column'}
            <div id="right-column" class="col-12 col-md-2 col-lg-3">
              {if $page.page_name == 'product'}
                {hook h='displayRightColumnProduct'}
              {else}
                {hook h="displayRightColumn"}
              {/if}
            </div>
          {/block}
        </div>

        {hook h="displayWrapperBottom"}
      </div>

      <footer id="footer" class="bg-dark text-white py-3 mt-3">
        {block name='footer'}
          {include file='_partials/footer.tpl'}
        {/block}
      </footer>
      {block name="quickview-modal"}
        <modal name="quickviewModal" 
          transition="nice-modal-fade"
          @closed="onCloseQuickView"
          height="auto"
          width="70%"
          :min-width="300"
          :scrollable="true"
          :adaptive="true">
          {include file="vue-templates/_partials/quickview.tpl"}
        </modal>
      {/block}
    </main>
    {block name='vue-templates'}
      {include file="vue-templates/_partials/product.tpl"}
      {include file="vue-templates/_partials/product-small-list.tpl"}
      {include file="vue-templates/checkout/cart-detailed-product.tpl"}
    {/block}


    <!-- Modal Component -->


    {block name='javascript_bottom'}
      {include file="_partials/javascript.tpl" javascript=$javascript.bottom}
    {/block}

    {block name='hook_before_body_closing_tag'}
      {hook h='displayBeforeBodyClosingTag'}
    {/block}

  </body>

</html>
