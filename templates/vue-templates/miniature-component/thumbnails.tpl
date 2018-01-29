<transition name="fade" mode="out-in" appear>
  <div v-if="{if isset($show)}true{else}isHover{/if}" class="position-absolute product-list-thumb p-1" :key="product.id_product">
    <div v-bar>
      <div>
          <b-img-lazy v-for="thumb in product.images"
          v-bind:src="thumb.small.url"
          :alt="thumb.legend"
          :width="thumb.small.width"
          :height="thumb.small.height"
          :key="thumb.id_image"
          block
          fluid
          :data-big-img="{if isset($big_img)}thumb.large.url{else}thumb.medium.url{/if}"
          :data-large-img="thumb.large.url"
          @mouseover.native="changeImg"
          blank-color="#ccc"
          v-bind:class="{ active: ({if isset($big_img)}thumb.large.url{else}thumb.medium.url{/if} === imgBig)}"
          {* v-img:name *}
          v-img="{literal}{src: thumb.large.url, title: product.name, group: sharePopOverId}{/literal}"></b-img-lazy>
      </div>
    </div>
  </div>
</transition>