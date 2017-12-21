<div class="user-info">
  {if $logged}
    <b-nav-item-dropdown right>
        <template slot="button-content">
          <em class="sr-only">User</em>
          <i class="fas fa-user"></i>
        </template>
        <div class="px-3">
          <span>{$customerName}</span>

          <b-list-group class="mb-2 mb-lg-4">
            <b-list-group-item :href="url.pages.my_account">
              {l s='My Account' d='Shop.Theme.Customeraccount'}
            </b-list-group-item>
            <b-list-group-item :href="url.pages.my_account">
              {l s='My credit slips' d='Shop.Theme.Customeraccount'}
            </b-list-group-item>
            <b-list-group-item :href="url.pages.my_account">
              {l s='My addresses' d='Shop.Theme.Customeraccount'}
            </b-list-group-item>
            <b-list-group-item :href="url.pages.my_account">
              {l s='My personal info' d='Shop.Theme.Customeraccount'}
            </b-list-group-item>
          </b-list-group>

          <a class="btn btn-outline-dark w-100 logout mb-2"  href="{$logout_url}"
            rel="nofollow" title="{l s='Log me out' d='Shop.Theme.Customeraccount'}">
            {l s='Sign out' d='Shop.Theme.Actions'}
          </a>
        </div>
      </b-nav-item-dropdown>
  {else}
    <b-nav-item class="login" href="{$my_account_url}" rel="nofollow" title="{l s='Log in to your customer account' d='Shop.Theme.Customeraccount'}">
      {l s='Sign in' d='Shop.Theme.Actions'}
    </b-nav-item>
  {/if}
</div>
