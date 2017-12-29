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
<div id="search_filters">
  {foreach from=$facets item="facet"}
    {if $facet.displayed}
      <section class="facet">
        <h5 class="h6">{$facet.label}</h1>
        {if $facet.widgetType !== 'dropdown'}
          <ul>
            {foreach from=$facet.filters item="filter"}
              {assign var=facet_unique_id value=10|mt_rand:1000}
              {if $filter.displayed}
                <li>

                  <label class="custom-control {if $facet.multipleSelectionAllowed}custom-checkbox{else}custom-radio{/if}">
                    {if $facet.multipleSelectionAllowed}
                      <input
                        data-search-url="{$filter.nextEncodedFacetsURL}"
                        class="custom-control-input {if !$js_enabled}ps-shown-by-js{/if}"
                        type="checkbox"
                        autocomplete="off"
                        {if $filter.active } checked {/if}
                      >
                    {else}
                      <input
                        id="{$facet_unique_id}"
                        data-search-url="{$filter.nextEncodedFacetsURL}"
                        class="custom-control-input {if !$js_enabled}ps-shown-by-js{/if}"
                        type="radio"
                        name="filter {$facet.label}"
                        autocomplete="off"
                        {if $filter.active } checked {/if}
                      >
                    {/if}

                    <span aria-hidden="true" class="custom-control-indicator"></span>
                    <span class="custom-control-description">
                      {$filter.label}
                      {if $filter.magnitude}
                        <span class="magnitude">{$filter.magnitude}</span>
                      {/if}
                    </span>
                  </label>

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
      <hr>
    {/if}
  {/foreach}
</div>
