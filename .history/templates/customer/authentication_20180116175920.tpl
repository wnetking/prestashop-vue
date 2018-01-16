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
{extends file='page.tpl'}

{block name='page_header_container'}{/block}

{block name='page_content_container'}
  <section id="content" class="page-content page-authentication">
    <header>
      <h3 class="h5 font-weight-normal border bg-white py-2 px-3 rounded mb-3">
        {l s='Log in to your account' d='Shop.Theme.Customeraccount'}
      </h1>
    </header>
    {block name='login_form_container'}
      <div class="bg-white border rounded p-3 p-xl-5 mb-3">
        <p>
          <a href="{$urls.pages.register}" data-link-action="display-register-form">
            {l s='No account? Create one here' d='Shop.Theme.Customeraccount'}
          </a>
        </p>
        <section class="login-form">
          {render file='customer/_partials/login-form.tpl' ui=$login_form}
        </section>
        {block name='display_after_login_form'}
          {hook h='displayCustomerLoginFormAfter'}
        {/block}
      </div>
    {/block}
  </section>
{/block}
