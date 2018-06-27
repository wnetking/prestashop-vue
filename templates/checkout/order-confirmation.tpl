{extends file='page.tpl'}

{block name='page_content_container' prepend}
  <section id="content-hook_order_confirmation">
    <div class="row">
      <div class="col-md-12">

        {block name='order_confirmation_header'}
          <h3>
            <i class="fa fa-check done" aria-hidden="true"></i>{l s='Your order is confirmed' d='Shop.Theme.Checkout'}
            <small>
              {l s='An email has been sent to your mail address %email%.' d='Shop.Theme.Checkout' sprintf=['%email%' => $customer.email]}
              {if $order.details.invoice_url}
                {* [1][/1] is for a HTML tag. *}
                {l
                s='You can also [1]download your invoice[/1]'
                d='Shop.Theme.Checkout'
                sprintf=[
                '[1]' => "<a href='{$order.details.invoice_url}'>",
                '[/1]' => "</a>"
                ]
                }
              {/if}
            </small>
          </h3>
        {/block}

        {block name='hook_order_confirmation'}
          {$HOOK_ORDER_CONFIRMATION nofilter}
        {/block}

      </div>
    </div>
  </section>
{/block}

{block name='page_content_container'}
  <section id="content" class="page-content page-order-confirmation">
    <div class="row">

      {block name='order_confirmation_table'}
        {include
        file='checkout/_partials/order-confirmation-table.tpl'
        products=$order.products
        subtotals=$order.subtotals
        totals=$order.totals
        labels=$order.labels
        add_product_link=false
        }
      {/block}

      {block name='order_details'}
        <div id="order-details" class="col-12">
          <h3>
            <i aria-hidden="true" class="fa fa-info done"></i>
            {l s='Order details' d='Shop.Theme.Checkout'}
          </h3>
          <table class="table w-100 mb-4 bg-white">
            <tr>
              <td>
                {l s='Order reference:' d='Shop.Theme.Checkout'}
              </td>
              <td class="text-right">{$order.details.reference}</td>
            </tr>

            <tr>
              <td>
                {l s='Payment method:' d='Shop.Theme.Checkout'}
              </td>
              <td class="text-right">{$order.details.payment}</td>
            </tr>

            {if !$order.details.is_virtual}
              <tr>
                <td>
                  {l s='Shipping method:' d='Shop.Theme.Checkout'}
                  <em>{$order.carrier.delay}</em>
                </td>
                <td class="text-right">
                  {$order.carrier.name}
                </td>
              </tr>
            {/if}
          </table>
        </div>
      {/block}

    </div>
  </section>
  {block name='hook_payment_return'}
    {if ! empty($HOOK_PAYMENT_RETURN)}
      <section id="content-hook_payment_return" class="definition-list mb-3">
        {$HOOK_PAYMENT_RETURN nofilter}
      </section>
    {/if}
  {/block}

  {block name='customer_registration_form'}
    {if $customer.is_guest}
      <div id="registration-form">
        <h4 class="h4">{l s='Save time on your next order, sign up now' d='Shop.Theme.Checkout'}</h4>
        {render file='customer/_partials/customer-form.tpl' ui=$register_form}
      </div>
    {/if}
  {/block}

  {block name='hook_order_confirmation_1'}
    {hook h='displayOrderConfirmation1'}
  {/block}

  {block name='hook_order_confirmation_2'}
    <section id="content-hook-order-confirmation-footer">
      {hook h='displayOrderConfirmation2'}
    </section>
  {/block}
{/block}
