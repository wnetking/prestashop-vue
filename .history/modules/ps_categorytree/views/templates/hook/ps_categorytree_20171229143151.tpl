{*
* 2007-2016 PrestaShop
*
* NOTICE OF LICENSE
*
* This source file is subject to the Academic Free License (AFL 3.0)
* that is bundled with this package in the file LICENSE.txt.
* It is also available through the world-wide-web at this URL:
* http://opensource.org/licenses/afl-3.0.php
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
*  @author PrestaShop SA <contact@prestashop.com>
*  @copyright  2007-2016 PrestaShop SA
*  @license    http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
*  International Registered Trademark & Property of PrestaShop SA
*}

{* {function name="categories" nodes=[] depth=0}
  {strip}
    {if $nodes|count}
      <ul class="list-unstyled">
        {foreach from=$nodes item=node}
          <li>
            <a href="{$node.link}">{$node.name}</a>
            <div>
              {categories nodes=$node.children depth=$depth+1}
            </div>
          </li>
        {/foreach}
      </ul>
    {/if}
  {/strip}
{/function} *}

{function name="categories" nodes=[] depth=0}
  {strip}
    {if $nodes|count}
      <ul class="list-unstyled">
        {foreach from=$nodes item=node}
          <li data-depth="{$depth}">
            <a href="{$node.link}">{$node.name}</a>
            {if $node.children}
              <b-btn class="float-right" size="sm" v-b-toggle="'exCollapsingNavbar{$node.id}'" variant="link">
                <i class="fa fa-angle-down arrow-down" aria-hidden="true"></i>
              </b-btn>
              <b-collapse id="exCollapsingNavbar{$node.id}" class="p-2">
                {categories nodes=$node.children depth=$depth+1}
              </b-collapse>
            {/if}
          </li>
        {/foreach}
      </ul>
    {/if}
  {/strip}
{/function}

<div class="category-tree bg-white rounded border p-2 p-lg-4 mb-3">
  <h5 class="h6">{l s='Categories' d='Shop.Theme.Catalog'}</h5>
  <ul class="list-unstyled">
    <li><a href="{$categories.link nofilter}">{$categories.name}</a></li>
    <li>{categories nodes=$categories.children}</li>
  </ul>
</div>
