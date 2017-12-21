<div class="user-info">
  {if $logged}
    <b-nav-item-dropdown right>
        <template slot="button-content">
          <em class="sr-only">User</em>
          <i class="fas fa-user"></i>
        </template>
        <a class="btn btn-outline-dark w-100 logout"  href="{$logout_url}"
          rel="nofollow" title="{l s='Log me out' d='Shop.Theme.Customeraccount'}">
          {l s='Sign out' d='Shop.Theme.Actions'}
        </a>
        <a class="btn btn-outline-dark w-100 account" href="{$my_account_url}"
          title="{l s='View my customer account' d='Shop.Theme.Customeraccount'}"
          rel="nofollow">
          <span>{$customerName}</span>
        </a>
      </b-nav-item-dropdown>
  {else}

    <a class="login" href="{$my_account_url}" rel="nofollow" title="{l s='Log in to your customer account' d='Shop.Theme.Customeraccount'}">{l s='Sign in' d='Shop.Theme.Actions'}</a>
  {/if}
</div>
