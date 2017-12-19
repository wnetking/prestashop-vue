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

<div class="mb-5" data-module-name="homeslider" data-module-data="{$homeslider|@json_encode}" v-if="modules.homeslider.slides">
  <b-carousel id="carousel"
                style="text-shadow: 1px 1px 2px #333;"
                indicators
                background="#ababab"
                img-blank
                :interval="4000"
                img-width="1024"
                img-height="480"
                label-next="{l s='Next' d='Shop.Theme.Global'}"
                label-prev="{l s='Previous' d='Shop.Theme.Global'}" >
      <b-carousel-slide v-for="slide in modules.homeslider.slides" :caption="slide.title" :key="slide.id_slide"
                        :text="slide.description"
                        :img-src="slide.image_url"
                        img-height="480"
      >
        <b-button size="lg" variant="variant" href="#">

        </b-button>
      </b-carousel-slide>
    </b-carousel>
</div>