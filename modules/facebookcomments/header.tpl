{*
* PrestaShop module created by VEKIA, a guy from official PrestaShop community ;-)
*
* @author    VEKIA https://www.prestashop.com/forums/user/132608-vekia/
* @copyright 2010-9999 VEKIA
* @license   This program is not free software and you can't resell and redistribute it
*
* CONTACT WITH DEVELOPER http://mypresta.eu
* support@mypresta.eu
*}

{assign var=fcbc_appid value=$var['fcbc_appid']}
{assign var=fcbc_admins value=$var['fcbc_admins']}
{assign var=fcbc_lang value=$var['fcbc_lang']}
{assign var=fcbc_appid value=$var['fcbc_appid']}
<meta property="fb:app_id" content="{$fcbc_appid}"/>

{if Configuration::get('fcbc_addappid') ==1 }
  <meta property="fb:admins" content="{$fcbc_admins}"/>
{/if}
<div id="fb-root"></div>
{if Configuration::get('fcbc_addappid')==1}
    <script>{literal}(function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            js.src = "//connect.facebook.net/{/literal}{$fcbc_lang}{literal}/all.js#xfbml=1&appId={/literal}{$fcbc_appid}{literal}";
            fjs.parentNode.insertBefore(js, fjs);
        }{/literal}(document, 'script', 'facebook-jssdk'));</script>
{else}
    <script>(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.11';
    fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));</script>
{/if}
