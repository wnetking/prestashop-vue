<div class="variant-links">
  <a v-for="variant in product.main_variants" :href="variant.url"
    :class="variant.type"
    v-bind:style="{literal}{backgroundColor: variant.html_color_code}{/literal}">
    {literal}{{variant.name}}{/literal}
  </a>
</div>