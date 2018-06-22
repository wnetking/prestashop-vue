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
<div id="search_filters" class="bg-white rounded border p-2 p-lg-4 mb-3 ">
  {foreach from=$facets item="facet" name=facet}
    {if $facet.displayed}
      <section class="facet">
        <h5 class="h6">{$facet.label}</h1>
        {if $facet.widgetType !== 'dropdown'}
          <ul>
            {foreach from=$facet.filters item="filter"}
              {assign var=facet_unique_id value=10|mt_rand:1000}
              {if $filter.displayed}
                <li class="{if isset($filter.properties.color)}list-inline-item d-inline-block{/if} mb-2">
                  {if $facet.type == 'price'}
                    <div class="p-1 pt-2">
                      <input id="price-slider"{if !$_collapse} class="active"{/if} data-slidermin="{$facet.properties.min}" data-slidermax="{$facet.properties.max}" type="hidden" value="{$facet.properties.min},{$facet.properties.max}" />
                      <a href="{$filter.nextEncodedFacetsURL}" id="price-slider-link" class="d-none search-link js-search-link" rel="nofollow"></a>
                    </div>
                    {break}
                  {elseif $facet.multipleSelectionAllowed}
                    <div class="custom-control custom-checkbox">
                      <input
                        id="facet_input_{$_expand_id}_{$filter_key}"
                        class="custom-control-input"
                        data-search-url="{$filter.nextEncodedFacetsURL}"
                        type="checkbox"
                        {if $filter.active } checked {/if}
                      >
                      <label class="facet-label custom-control-label{if $filter.active} active{/if}" for="facet_input_{$_expand_id}_{$filter_key}"{if isset($filter.properties.color)} style="background-color:{$filter.properties.color}"{/if}{if isset($filter.properties.texture)} style="background-image:url({$filter.properties.texture})"{/if}>
                        <span {if !$js_enabled}class="ps-shown-by-js"{/if}>
                          <a href="{$filter.nextEncodedFacetsURL}" class="search-link js-search-link" rel="nofollow">
                            {$filter.label}
                            {if $filter.magnitude}
                              <span class="magnitude">({$filter.magnitude})</span>
                            {/if}
                          </a>
                        </span>
                      </label>
                    </div>
                  {else}
                    <div class="custom-control custom-radio">
                      <input
                        id="facet_input_{$_expand_id}_{$filter_key}"
                        class="custom-control-input"
                        data-search-url="{$filter.nextEncodedFacetsURL}"
                        type="radio"
                        name="filter {$facet.label}"
                        {if $filter.active } checked {/if}
                      >
                      <label class="facet-label custom-control-label{if $filter.active} active{/if}" for="facet_input_{$_expand_id}_{$filter_key}">
                        <span {if !$js_enabled}class="ps-shown-by-js"{/if}>
                          <a href="{$filter.nextEncodedFacetsURL}" class="search-link js-search-link" rel="nofollow">
                            {$filter.label}
                            {if $filter.magnitude}
                              <span class="magnitude">({$filter.magnitude})</span>
                            {/if}
                          </a>
                        </span>
                      </label>
                    </div>
                  {/if}
                </li>
              {/if}
            {/foreach}
          </ul>
        {else}
          <form>
            <input type="hidden" name="order" value="{$sort_order}">
            <select name="q">
              <option disabled selected hidden>{l s='(no filter)' d='Shop.Theme.Global'}</option>
              {foreach from=$facet.filters item="filter"}
                {if $filter.displayed}
                  <option
                    {if $filter.active}
                      selected
                      value="{$smarty.get.q}"
                    {else}
                      value="{$filter.nextEncodedFacets}"
                    {/if}
                  >
                    {$filter.label}
                    {if $filter.magnitude}
                      ({$filter.magnitude})
                    {/if}
                  </option>
                {/if}
              {/foreach}
            </select>
            {if !$js_enabled}
              <button class="ps-hidden-by-js" type="submit">
                {l s='Filter' d='Shop.Theme.Actions'}
              </button>
            {/if}
          </form>
        {/if}
      </section>
      {if !$smarty.foreach.facet.last}
        <hr class="mt-2">
      {/if}
    {/if}
  {/foreach}
</div>
