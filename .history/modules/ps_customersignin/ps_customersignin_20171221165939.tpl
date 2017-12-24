<div class="user-info">
  {if $logged}
    <b-nav-item-dropdown right>
        <template slot="button-content">
          <em class="sr-only">User</em>
          <i class="fas fa-user"></i>
        </template>
        <div class="px-3">
          <a class="btn btn-outline-dark w-100 logout mb-2"  href="{$logout_url}"
            rel="nofollow" title="{l s='Log me out' d='Shop.Theme.Customeraccount'}">
            {l s='Sign out' d='Shop.Theme.Actions'}
          </a>
          <b-list-group>
            <b-list-group-item href="#some-link">Awesome link</b-list-group-item>
            <b-list-group-item href="#" active>Link with active state</b-list-group-item>
            <b-list-group-item href="#">Action links are easy</b-list-group-item>
            <b-list-group-item href="#foobar" disabled>Disabled link</b-list-group-item>
          </b-list-group>
          <a class="btn btn-outline-dark w-100 account" href="{$my_account_url}"
            title="{l s='View my customer account' d='Shop.Theme.Customeraccount'}"
            rel="nofollow">
            <span>{$customerName}</span>
          </a>
        </div>
      </b-nav-item-dropdown>
  {else}
    <b-nav-item class="login" href="{$my_account_url}" rel="nofollow" title="{l s='Log in to your customer account' d='Shop.Theme.Customeraccount'}">
      {l s='Sign in' d='Shop.Theme.Actions'}
    </b-nav-item>
  {/if}
</div>
