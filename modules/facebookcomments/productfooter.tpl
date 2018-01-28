{* {assign var=fcbc_width value=$var['fcbc_width']}
{assign var=fcbc_nbp value=$var['fcbc_nbp']}
{assign var=fcbc_scheme value=$var['fcbc_scheme']}
<div id="fcbcfooter" class="page-content card card-block">
    <div id="fcbc">
        <div data-href="http://{$var['product_page_url']}" 
            class="fb-comments" 
            data-width="{$fcbc_width}" 
            data-num-posts="{$fcbc_nbp}" 
            data-colorscheme="{$fcbc_scheme}"></div>
    </div>
</div> *}

{assign var=fcbc_width value=$var['fcbc_width']}
{assign var=fcbc_nbp value=$var['fcbc_nbp']}
{assign var=fcbc_scheme value=$var['fcbc_scheme']}

<b-tab title="{l s='Comments' d='Shop.Theme.Catalog'}">
  <div id="fcbc" class="">
    <div class="fb-comments" data-width=""></div>
  </div>
</b-tab>