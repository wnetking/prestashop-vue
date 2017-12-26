<ul>
  {foreach from=$brands item=brand name=brand_list}
    {if $smarty.foreach.brand_list.iteration <= $text_list_nb}
      <li>
        <a href="{$brand['link']}" title="{$brand['name']}">
          {$brand['name']}
        </a>
        {assign var="man_products" value=Manufacturer::getProducts($brand["id_manufacturer"],$language.id,"1","1")}
        {$man_products|var_dump}
      </li>
    {/if}
  {/foreach}
</ul>
