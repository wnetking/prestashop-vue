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

{block name='social_sharing'}
  {if $social_share_links}
    <div class="social-sharing">
        <b-btn id="productSharePopOverId" variant="outline-dark" class="mr-2">
          <span class="sr-only">{l s='Share' d='Shop.Theme.Actions'}</span>
          <i class="fa fa-share-alt" aria-hidden="true"></i>
        </b-btn>
        
        <b-popover
            ref="popover"
            target="productSharePopOverId"
            :title="modules.productPageData.name"
            placement="top"
            >
          <social-sharing :url="modules.productPageData.canonical_url" inline-template>
            <div class="product-share-btns">
              <network network="email">
                <i class="fa fa-envelope"></i> Email
              </network>
              <network network="facebook">
                <i class="fab fa-facebook"></i> Facebook
              </network>
              <network network="googleplus">
                <i class="fab fa-google-plus"></i> Google +
              </network>
              <network network="line">
                <i class="fab fa-linode"></i> Line
              </network>
              <network network="linkedin">
                <i class="fab fa-linkedin"></i> LinkedIn
              </network>
              <network network="odnoklassniki">
                <i class="fab fa-odnoklassniki"></i> Odnoklassniki
              </network>
              <network network="pinterest">
                <i class="fab fa-pinterest"></i> Pinterest
              </network>
              <network network="reddit">
                <i class="fab fa-reddit"></i> Reddit
              </network>
              <network network="skype">
                <i class="fab fa-skype"></i> Skype
              </network>
              <network network="sms">
                <i class="fas fa-comments"></i> SMS
              </network>
              <network network="telegram">
                <i class="fab fa-telegram"></i> Telegram
              </network>
              <network network="twitter">
                <i class="fab fa-twitter"></i> Twitter
              </network>
              <network network="vk">
                <i class="fab fa-vk"></i> VKontakte
              </network>
              <network network="weibo">
                <i class="fab fa-weibo"></i> Weibo
              </network>
              <network network="whatsapp">
                <i class="fab fa-whatsapp"></i> Whatsapp
              </network>
            </div>
          </social-sharing>
        </b-popover>
    </div>
  {/if}
{/block}
