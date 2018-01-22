<section class="page-content quickview" v-if="modules.productPageData.name">
  <b-tabs card>
    <b-tab active title="{l s='Variants' d='Shop.Theme.Catalog'}" >
      <div class="row">
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
                {literal}{{modules.productPageData.description_short | striphtml}}{/literal}
              </div>
            {/block}
            {block name='product_flags'}
              <ul class="product-flags list-inline">
                  <li class="list-inline-item" v-for="flag in modules.productPageData.flags">
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
          <div class="product-actions">
            {block name='product_buy'}
              <form :action="urls.pages.cart" method="post" id="add-to-cart-or-refresh" class="mb-3">
                <input type="hidden" name="token" :value="static_token">
                <input type="hidden" name="id_product"
                  :value="modules.productPageData.id"
                  id="product_page_product_id">
                <input type="hidden" name="id_customization" :value="modules.productPageData.id_customization" id="product_customization_id">
                {block name='product_prices'}
                  {include file='catalog/_partials/product-prices.tpl'}
                {/block}

                <div id="quickview-product-variants" v-html="modules.quickView.variants">
                </div>

                {block name='product_add_to_cart'}
                  {include file='catalog/_partials/product-add-to-cart.tpl'}
                {/block}

                {block name='product_refresh'}
                  <input class="custom-product-refresh ps-hidden-by-js sr-only"
                        name="refresh" type="submit"
                        value="{l s='Refresh' d='Shop.Theme.Actions'}">
                {/block}
              </form>
              <div v-html="modules.quickView.additionalInfo" id="quickview-additional-info" class="flex-column flex-sm-row"></div>
            {/block}
          </div>
          {* {block name='product_discounts'}
            {include file='catalog/_partials/product-discounts.tpl'}
          {/block} *}
        </div>
      </div>
    </b-tab>
    <b-tab title="{l s='Description' d='Shop.Theme.Catalog'}"
      v-html="modules.productPageData.description">
    </b-tab>
    {block name='product_features'}
      <b-tab  title="{l s='Data sheet' d='Shop.Theme.Catalog'}" v-if="modules.productPageData.features">
        <section class="product-features">
          <h3 class="sr-only">{l s='Data sheet' d='Shop.Theme.Catalog'}</h3>
          <table class="table table-bordered">
            <tbody>
                <tr v-for="feature in modules.productPageData.features">
                  <td>
                    {literal}{{feature.name}}{/literal}
                  </td>
                  <td>
                    {literal}{{feature.value}}{/literal}
                  </td>
                </tr>
            </tbody>
          </table>
        </section>
      </b-tab>
    {/block}
    <b-tab  title="{l s='Accessories' d='Shop.Theme.Catalog'}"
      v-if="modules.quickView.accessoriesProduct.length">
      <div class="row">
        <div class="col-4 mb-3"
          v-for="product in modules.quickView.accessoriesProduct"
          :key="Date.now() + Math.random()">
          <div is="products-small-list" :product='product'></div>
        </div>
      </div>
    </b-tab>
  </b-tabs>
</section>