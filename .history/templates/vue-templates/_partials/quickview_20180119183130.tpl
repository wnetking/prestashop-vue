<section class="page-content quickview" v-if="modules.productPageData.name">
  {block name='page_content'}
    <div class="row mb-3">
      <div class="col-12 col-md-6">
        {block name='product_cover_thumbnails'}
          {include file='catalog/_partials/product-cover-thumbnails.tpl'}
        {/block}
      </div>
      <div class="col-12 col-md-6 col-lg-5">
        <div class="product-information">
          <div class="d-flex">
            {block name='product_availability'}
              <p id="product-availability" class="mr-2" v-if="modules.productPageData.show_availability && modules.productPageData.availability_message !== ''">
                <span class="badge badge-success">
                  {literal}{{modules.productPageData.availability_message}}{/literal}
                </span>
                <span class="mr-2">|</span>
              </p>
            {/block}
            {block name='product_reference'}
              <p id="product-reference" v-if="modules.productPageData.reference">
                <label class="mb-0">
                  {l s='Reference: ' d='Shop.Theme.Catalog'}
                </label>
                <span itemprop="sku" class="badge badge-info">
                  {literal}{{modules.productPageData.reference}}{/literal}
                </span>
              </p>
            {/block}
          </div>
          {block name="product-name"}
            <h1 class="h4" itemprop="name">
              {block name='page_title'}
                {literal}{{modules.productPageData.name}}{/literal}
              {/block}
            </h1>
          {/block}
          {block name='product_condition'}
            <p id="product-condition" v-if="modules.productPageData.condition">
              <label>{l s='Condition' d='Shop.Theme.Catalog'}</label>
              <link itemprop="itemCondition" :href="modules.productPageData.condition.schema_url"/>
              <span>
                {literal}{{modules.productPageData.condition.label}}{/literal}
              </span>
            </p>
          {/block}
          {block name='product_description_short'}
            <div id="product-description-short" itemprop="description">
              {{modules.productPageData.description_short | striphtml}}
            </div>
          {/block}
          {block name='product_flags'}
            <ul class="product-flags list-inline">
                <li class="list-inline-item {if !$smarty.foreach.flag.last}mr-2{/if}" v-for="flag in modules.productPageData.flags">
                  <span class="badge badge-info">
                    {literal}{{flag.label}}{/literal}
                  </span>
                </li>
            </ul>
          {/block}
          {block name='product_quantities'}
            <p id="product-quantities" class="h6" v-if="modules.productPageData.show_quantities">
              {literal}{{modules.productPageData.quantity}}{/literal}
              {literal}{{modules.productPageData.quantity_label}}{/literal}
            </p>
          {/block}
          {block name='product_availability_date'}
            <p id="product-availability-date" v-if="modules.productPageData.availability_date">
              <label>{l s='Availability date:' d='Shop.Theme.Catalog'} </label>
              <span>
                {literal}{{modules.productPageData.availability_date}}{/literal}
              </span>
            </p>
          {/block}
        </div>
        {* <div class="product-actions">
          {block name='product_buy'}
            <form :action="urls.pages.cart" method="post" id="add-to-cart-or-refresh">
              <input type="hidden" name="token" :value="static_token">
              <input type="hidden" name="id_product" :value="{modules.productPageData.id}" id="product_page_product_id">
              <input type="hidden" name="id_customization" :value="{modules.productPageData.id_customization}" id="product_customization_id">
              {block name='product_prices'}
                {include file='catalog/_partials/product-prices.tpl'}
              {/block}
              {block name='product_variants'}
                {include file='catalog/_partials/product-variants.tpl'}
              {/block}
              {block name='product_add_to_cart'}
                {include file='catalog/_partials/product-add-to-cart.tpl'}
              {/block}
              {block name='product_additional_info'}
                {include file='catalog/_partials/product-additional-info.tpl'}
              {/block}
              {block name='product_refresh'}
                <input class="custom-product-refresh ps-hidden-by-js"
                       name="refresh" type="submit"
                       value="{l s='Refresh' d='Shop.Theme.Actions'}">
              {/block}
            </form>
          {/block}
        </div> *}
        {* {block name='product_discounts'}
          {include file='catalog/_partials/product-discounts.tpl'}
        {/block} *}
      </div>
    </div>
    <b-card no-body class="mb-3">
      <b-tabs card>
        <b-tab title="{l s='Description' d='Shop.Theme.Catalog'}" active>
          {block name='product_description'}
            {literal}{{modules.productPageData.description | striphtml}}{/literal}
          {/block}
        </b-tab>
        {* {block name='product_features'}
          {if $product.features}
            <b-tab title="{l s='Data sheet' d='Shop.Theme.Catalog'}">
              <section class="product-features">
                <h3 class="sr-only">{l s='Data sheet' d='Shop.Theme.Catalog'}</h3>
                <table class="table table-sm table-bordered">
                  <tbody>
                    {foreach from=$product.features item=feature}
                      <tr>
                        <td>{$feature.name}</td>
                        <td>{$feature.value}</td>
                      </tr>
                    {/foreach}
                  </tbody>
                </table>
              </section>
            </b-tab>
          {/if}
        {/block} *}
        {* {block name='product_attachments'}
          {if $product.attachments}
            <b-tab title="{l s='Attachments' d='Shop.Theme.Catalog'}">
              <section class="product-attachments">
                <h3 class="sr-only">{l s='Download' d='Shop.Theme.Actions'}</h3>
                {foreach from=$product.attachments item=attachment}
                  <div class="attachment">
                    <h5 class="mb-2">
                      <a href="{url entity='attachment' params=['id_attachment' => $attachment.id_attachment]}">
                        {$attachment.name}
                      </a>
                    </h5>
                    {if $attachment.description !== ''}
                      <p>{$attachment.description}</p>
                    {/if}
                    <a class="btn btn-outline-dark" href="{url entity='attachment' params=['id_attachment' => $attachment.id_attachment]}">
                      {l s='Download' d='Shop.Theme.Actions'} ({$attachment.file_size_formatted})
                    </a>
                  </div>
                {/foreach}
              </section>
            </b-tab>
          {/if}
        {/block} *}
        {* {if $product.is_customizable && count($product.customizations.fields)}
          {block name='product_customization'}
            <b-tab title="{l s='Customization' d='Shop.Theme.Catalog'}">
              {include file='catalog/_partials/product-customization.tpl' customizations=$product.customizations}
            </b-tab>
          {/block}
        {/if} *}
      </b-tabs>
    </b-card>

    {* {block name='product_pack'}
      {if $packItems}
        <section class="product-pack mb-3" data-module-name="packProduct" data-module-data="{$packItems|@json_encode}">
          <b-card header="{l s='Pack content' d='Shop.Theme.Catalog'}" body-class="p-2" header-tag="h5">
            <carousel class="products" :per-page-custom="[[768, 3], [1024, 4], [2560, 4]]"
              :pagination-padding="5"
              pagination-active-color="var(--gray-dark)"
              pagination-color="var(--secondary)"
              navigation-next-label=""
              navigation-prev-label="">
              <slide v-for="product in modules.packProduct" :key="product.id">
                <div is="product-miniature" :product='product'></div>
              </slide>
          </carousel>
          </b-card>
        </section>
      {/if}
    {/block} *}
    {* {block name='product_accessories'}
      {if $accessories}
        <section class="product-accessories mb-3" data-module-name="accessoriesProduct" data-module-data="{$accessories|@json_encode}">
          <b-card header="{l s='Accessories' d='Shop.Theme.Catalog'}" body-class="p-2" header-tag="h5">
            <carousel class="products" :per-page-custom="[[768, 3], [1024, 4], [2560, 4]]"
              :pagination-padding="5"
              pagination-active-color="var(--gray-dark)"
              pagination-color="var(--secondary)"
              navigation-next-label=""
              navigation-prev-label=""
              >
              <slide v-for="product in modules.accessoriesProduct" :key="product.id">
                <div is="product-miniature" :product='product'></div>
              </slide>
            </carousel>
          </b-card>
        </section>
      {/if}
    {/block} *}
  {/block}
</section>