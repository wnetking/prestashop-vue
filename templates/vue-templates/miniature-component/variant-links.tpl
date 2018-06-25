<div class="variant-links justify-content-center mb-2">
  <a v-for="variant in product.main_variants" :href="variant.url"
    :class="variant.type"
    v-bind:style="{literal}{backgroundColor: variant.html_color_code}{/literal}">
    <span class="sr-only">
      {literal}{{variant.name}}{/literal}
    </span>
  </a>
</div>