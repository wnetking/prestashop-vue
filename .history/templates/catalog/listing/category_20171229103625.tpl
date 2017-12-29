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
{extends file='catalog/listing/product-list.tpl'}

{block name='product_list_header'}

  <div class="category-cover py-5 px-3 px-lg-4 mb-2 mb-lg-4 border rounded" style="background-image: url({$category.image.large.url})">
    <h3>{$category.name}</h3>
    <div id="category-description">{$category.description nofilter}</div>
  </div>

  {block name='category_subcategories'}
    <aside class="mb-2">
      {if $subcategories|count}
        <nav class="subcategories row">
          {foreach from=$subcategories item="subcategory"}
            <div class="col-3 col-lg-2">
              {block name='category_miniature'}
                {include file='catalog/_partials/miniatures/category.tpl' category=$subcategory}
              {/block}
            </div>
          {/foreach}
        </nav>
      {/if}
    </aside>
  {/block}
  <hr class="my-4">
{/block}
