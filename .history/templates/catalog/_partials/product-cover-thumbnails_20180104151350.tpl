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
 {if isset($smarty.request["ajax"]) }
  <div id="ajax-product-images" data-ajax-products="{$product|@json_encode}"></div>
  {return}
 {/if}

<div class="images-container position-relative"
  v-bind:style="{literal}{paddingLeft: modules.productPageData.cover.small.width + 'px'}{/literal}">
  {block name='product_images'}
    <div class="product-images list-unstyled"
        v-bind:style="{literal}{maxWidth: modules.productPageData.cover.small.width + 'px'}{/literal}">
      <div v-bar>
        <div>
          <b-img-lazy
            v-for="image in modules.productPageData.images"
            class="img-fluid bg-white border rounded"
            v-bind:class="{ active: (image.bySize.large_default.url === modules.productPageData.cover.bySize.large_default.url)}"
            v-on:mouseover.native="changeProductCoverImage"
            :src="image.small.url"
            :data-cover-data="image | json"
            :alt="image.legend"
            :width="image.small.width"
            :height="image.small.height"
            :key="image.id_image"
            fluid-grow center blank-color="#ccc"
            v-img
            {* v-img="{group:product, src: image.bySize.large_default.url}" *}
            />
        </div>
      </div>
    </div>
  {/block}

  {block name='product_cover'}
    <div class="product-cover text-center bg-white border rounded">
      <b-img-lazy
        {* v-img="{group:product, src: image.bySize.large_default.url}" *}
        class="img-fluid w-100"
        v-on:mousemove.native="productZoom"
        v-on:mouseleave.native="zoomLeave"
        :src="modules.productPageData.cover.bySize.medium_default.url"
        :data-large-img="modules.productPageData.cover.bySize.large_default.url"
        :alt="modules.productPageData.cover.legend"
        :width="modules.productPageData.cover.bySize.medium_default.width"
        :height="modules.productPageData.cover.bySize.medium_default.height"
        fluid-grow center blank-color="#ccc" itemprop="image"/>
    </div>
  {/block}
</div>
