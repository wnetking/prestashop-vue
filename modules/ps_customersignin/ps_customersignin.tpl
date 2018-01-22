<div class="user-info ml-2 ml-lg-3">
  {if $logged}
    <b-nav-item-dropdown right>
        <template slot="button-content">
          <em class="sr-only">User</em>
          <i class="fas fa-user"></i>
        </template>
        <div class="user-info-body px-3">
          <div class="d-flex align-items-center mb-2 mb-lg-4">
            <avatar username="{$customerName}" background-color="#000"></avatar>
            <h5 class="ml-2">{$customerName}</h5>
          </div>

          <b-list-group class="mb-2 mb-lg-4">
            <b-list-group-item :href="urls.pages.my_account">
              {l s='My Account' d='Shop.Theme.Customeraccount'}
            </b-list-group-item>
            <b-list-group-item :href="urls.pages.order_slip">
              {l s='My credit slips' d='Shop.Theme.Customeraccount'}
            </b-list-group-item>
            <b-list-group-item :href="urls.pages.addresses">
              {l s='My addresses' d='Shop.Theme.Customeraccount'}
            </b-list-group-item>
            <b-list-group-item :href="urls.pages.identity">
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
    <b-nav-item class="login"
      @click="getAuthenticationTpl"
      href="{$my_account_url}"
      rel="nofollow" title="{l s='Log in to your customer account' d='Shop.Theme.Customeraccount'}">
      <em class="sr-only">{l s='Sign in' d='Shop.Theme.Actions'}</em>
      <i class="fas fa-user"></i>
    </b-nav-item>

  {/if}
</div>
{if !$logged}
<modal name="singInModal"
        transition="nice-modal-fade"
        height="auto"
        :width="modalWidth"
        :min-width="300"
        :scrollable="true"
        :adaptive="true"
        @before-open="getModalWidth">
  <div class="row no-gutters">
    <div class="col-md-6 bg-light d-flex login-form">
      <div class="p-3 flex-column d-flex w-100"  v-html="modules.singIn">
      </div>
    </div>
    <div class="col-md-6 d-flex">
      <div class="w-100 bg-dark text-center text-secondary d-flex flex-column justify-content-center">
        <div class="display-2 mb-4"><i class="far fa-smile mr-1 fa-lg"></i></div>
        <h3>{l s='Welcome to our store' d='Shop.Theme.Actions'}</h3>
      </div>
    </div>
  </div>
</modal>
{/if}