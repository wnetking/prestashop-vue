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
 {* {literal}{{modules.productPageData.availability_date}}{/literal} *}

<div class="product-prices" v-if="modules.productPageData.show_price">
  {block name='product_price'}
    <div class="product-price d-flex align-items-center mb-2"
      itemprop="offers" itemscope itemtype="https://schema.org/Offer">
      {block name='product_discount'}
        <div class="product-discount mr-2" v-if="modules.productPageData.has_discount">
          {hook h='displayProductPriceBlock' product=$product type="old_price"}
          <span class="regular-price">
            {literal}{{modules.productPageData.regular_price}}{/literal}
          </span>
        </div>
      {/block}

      <link itemprop="availability" href="https://schema.org/InStock"/>
      <span class="mb-0 mr-1 h6" itemprop="price" :content="modules.productPageData.price_amount">
        {literal}{{modules.productPageData.price}}{/literal}
      </span>

        <small class="form-text text-muted mr-2 mt-0" v-if="configuration.display_taxes_label">
          {literal}{{modules.productPageData.labels.tax_short}}{/literal}
        </small>

      <meta itemprop="priceCurrency" :content="currency.iso_code">
      {hook h='displayProductPriceBlock' type="price"}

      <div v-if="modules.productPageData.has_discount">
        <span class="discount-percentage text-danger" v-if="modules.productPageData.discount_type === 'percentage'">
          {l s='Save ' d='Shop.Theme.Catalog'}
          {literal}{{modules.productPageData.discount_percentage}}{/literal}
        </span>
        <span class="discount-amount text-danger" v-else>
          {l s='Save' d='Shop.Theme.Catalog'}
          {literal}{{modules.productPageData.discount_amount}}{/literal}
        </span>
      </div>
    </div>
  {/block}

  {block name='product_without_taxes'}
    <p class="product-without-taxes" v-if="modules.productPageData.price_tax_exc">
      {literal}{{modules.productPageData.price_tax_exc}}{/literal}
      {l s=' tax excl.' d='Shop.Theme.Catalog'}
    </p>
  {/block}

  {* {block name='product_pack_price'}
    {if $displayPackPrice}
      <p class="product-pack-price">
        <span>
          {l s='Instead of %price%' d='Shop.Theme.Catalog' sprintf=['%price%' => $noPackPrice]}
        </span>
      </p>
    {/if}
  {/block} *}

  {block name='product_ecotax'}
      <p class="price-ecotax" v-if="modules.productPageData.ecotax.amount > 0">
        {literal}{{modules.productPageData.ecotax.value}}{/literal}
        {l s='including for ecotax' d='Shop.Theme.Catalog'}
        <span v-if="modules.productPageData.has_discount">
          {l s='(not impacted by the discount)' d='Shop.Theme.Catalog'}
        </span>
      </p>
  {/block}

  {block name='product_unit_price'}
    {* {if $displayUnitPrice} *}
      <p class="product-unit-price" v-if="modules.productPageData.unit_price_full">
        {literal}{{modules.productPageData.unit_price_full}}{/literal}
      </p>
    {* {/if} *}
  {/block}

  {hook h='displayProductPriceBlock' type="weight" hook_origin='product_sheet'}
  {hook h='displayProductPriceBlock' type="after_price"}

  <span class="delivery-information" v-if="modules.productPageData.delivery_information">
    {literal}{{modules.productPageData.delivery_information}}{/literal}
  </span>
</div>
