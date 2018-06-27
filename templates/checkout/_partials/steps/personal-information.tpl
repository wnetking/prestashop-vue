{extends file='checkout/_partials/steps/checkout-step.tpl'}

{block name='step_content'}
  {if $customer.is_logged && !$customer.is_guest}
    <p class="identity">
      {l s='Connected as %first_name% %last_name%.'
        sprintf=['%first_name%' => $customer.firstname, '%last_name%' => $customer.lastname] d='Shop.Theme.Customeraccount'}
    </p>
    <p>
      {l
        s='Not you? [1]Log out[/1]'
        d='Shop.Theme.Customeraccount'
        sprintf=[
          '[1]' => "<div class='mt-2'><a href='{$urls.actions.logout}' class='btn btn-outline-primary'>",
          '[/1]' => "</a></div>"
        ]
      }
    </p>
    {if !isset($empty_cart_on_logout) || $empty_cart_on_logout}
      <p>
        <small>
          {l s='If you sign out now, your cart will be emptied.'
             d='Shop.Theme.Checkout'}
        </small>
      </p>
    {/if}
  {else}
    <b-card no-body>
      <b-tabs card>
        <b-tab title="{l s='Log in' d='Shop.Theme.Customeraccount'}" active>
          {render file='checkout/_partials/login-form.tpl' ui=$login_form}
        </b-tab>
        <b-tab title="{l s='Sing in' d='Shop.Theme.Customeraccount'}" >
          {render file='checkout/_partials/customer-form.tpl' ui=$register_form guest_allowed=$guest_allowed}
        </b-tab>
      </b-tabs>
    </b-card>
  {/if}
{/block}
