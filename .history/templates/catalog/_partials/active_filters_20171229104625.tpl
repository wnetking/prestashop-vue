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
<section id="js-active-search-filters" class="active_filters">
  {if $activeFilters|count}
    <h5 class="h6">{l s='Active filters' d='Shop.Theme.Global'}</h5>
    <div class="d-flex align-items-center p-2 bg-white border">
      <ul class="list-inline mb-0">
        {foreach from=$activeFilters item="filter"}
          <li class="list-inline-item mb-1 mr-1 bg-light py-1 px-2 border">
            {l s='%facet_label%: %facet_value%'
              sprintf=['%facet_label%' => $filter.facetLabel,
                        '%facet_value%' => $filter.label] d='Shop.Theme.Catalog'}
            <a  class="js-search-link p-1" href="{$filter.nextEncodedFacetsURL}">
              <i class="far fa-times-circle"></i>
              <span class="sr-only">{l s='Remove' d='Shop.Theme.Actions'}</span>
            </a>
          </li>
        {/foreach}
      </ul>
      <a href="{$clear_all_link}" data-search-url="{$clear_all_link}"
        class="rounded-0 btn btn-sm btn-light js-search-filters-clear-all ml-auto">
        {l s='Reset all filter' d='Shop.Theme.Actions'}
      </a>
    </div>
  {/if}
</section>
