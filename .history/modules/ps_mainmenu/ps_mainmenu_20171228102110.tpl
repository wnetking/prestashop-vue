{function name="menu" nodes=[] depth=0}
  {strip}
    {if $nodes|count}
      <ul data-depth="{$depth}">
        {foreach from=$nodes item=node}
          <li class="{$node.type}{if $node.current} current{/if}">
            <a href="{$node.url}" {if $node.open_in_new_window} target="_blank" {/if}>{$node.label}</a>
            <div>
              {menu nodes=$node.children depth=$node.depth}
              {if $node.image_urls|count}
                <div class="menu-images-container d-flex">
                  {foreach from=$node.image_urls item=image_url}
                    <img class="img-fluid" src="{$image_url}">
                  {/foreach}
                </div>
              {/if}
            </div>
          </li>
        {/foreach}
      </ul>
    {/if}
  {/strip}
{/function}
<div class=" border border-left-0 border-right-0 border-bottom-0 border-dark">
  <div class="container menu text-center py-1">
    {menu nodes=$menu.children}
  </div>
</div>

