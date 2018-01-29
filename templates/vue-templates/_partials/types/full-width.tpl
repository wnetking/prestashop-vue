<div class="row">
  <div class="col-6">
    <div class="position-relative thumbnail-container">
      <a :href="product.url" class="thumbnail product-thumbnail d-block">
        <b-img-lazy
          v-on:mousemove.native="zoomBg"
          v-on:mouseleave.native="zoomLeave"
          v-bind:src="imgBig"
          :data-large-img="imgLarge"
          :alt="product.cover.legend"
          :width="product.cover.bySize.medium_default.width"
          :height="product.cover.bySize.medium_default.height"
          fluid-grow center blank-color="#ccc"></b-img-lazy>
      </a>
      {include file="vue-templates/miniature-component/thumbnails.tpl" show="true" big_img="true"}
    </div>
  </div>
  <div class="col-6 d-flex flex-column justify-content-center">
    <h2 class="h3 mt-2" itemprop="name">
      <a :href="product.url">
          {literal}{{product.name | truncate(80)}}{/literal}
      </a>
    </h2>

    <div class="product-flags list-unstyled">
      <b-badge v-if="product.show_availability && product.availability_message !== ''" :class='product.availability' variant="info">
          {literal}{{product.availability_message}}{/literal}
      </b-badge>
      <b-badge variant="info" v-for="flag in product.flags" :class="flag.type" :key="flag.type">
          {literal}{{flag.label}}{/literal}
      </b-badge>
    </div>

    <div class="product-description-short px-xl-4 text-center" itemprop="description">
      {literal}{{product.description_short | striphtml | truncate(200)}}{/literal}
    </div>

    {include file="vue-templates/miniature-component/price.tpl"}
    {include file="vue-templates/miniature-component/product-list-actions.tpl"}
    {include file="vue-templates/miniature-component/variant-links.tpl"}
  </div>
</div>
