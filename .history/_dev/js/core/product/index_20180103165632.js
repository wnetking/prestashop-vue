import prestashop from 'prestashop'
import refreshEmit from './refreshClickEmit'
import refreshClickListener from './refreshClickListener'
import replaceAddToCartSections from './replaceAddToCartSections'

export default function () {
  let updateEventName = 'customUpdateProduct'
  refreshEmit.call(this)

  $('body').on('click', '.custom-product-refresh', refreshClickListener)

  prestashop.on(updateEventName, (event) => {
    if (typeof event.refreshUrl == 'undefined') {
      event.refreshUrl = true
    }

    var eventType = event.eventType

    $.post(event.reason.productUrl, {ajax: '1',action: 'refresh'}, null, 'json').then((resp) => {
      // console.log(resp)

      this.$nextTick(function () {
        this.modules.productPageData = $(resp.product_cover_thumbnails).filter('#ajax-product-images').data('ajax-products')
        this.themeLoaderShow = false
      })

      $('.product-prices').replaceWith(resp.product_prices)
      $('.product-customization').replaceWith(resp.product_customization)
      $('.product-variants').replaceWith(resp.product_variants)
      $('.product-discounts').replaceWith(resp.product_discounts)
      $('.product-additional-info').replaceWith(resp.product_additional_info)
      $('#product-details').replaceWith(resp.product_details)

      // Replace all "add to cart" sections but the quantity input in order to keep quantity field intact i.e.
      // Prevent quantity input from blinking with classic theme.
      let $productAddToCart
      $(resp.product_add_to_cart).each(function (index, value) {
        if ($(value).hasClass('product-add-to-cart')) {
          $productAddToCart = $(value)
        }
      })

      replaceAddToCartSections($productAddToCart)

      const minimalProductQuantity = parseInt(resp.product_minimal_quantity, 10)
      const quantityInputSelector = '#quantity_wanted'
      let quantityInput = $(quantityInputSelector)
      const quantity_wanted = quantityInput.val()

      if (!isNaN(minimalProductQuantity) && quantity_wanted < minimalProductQuantity && eventType !== 'updatedProductQuantity') {
        quantityInput.attr('min', minimalProductQuantity)
        quantityInput.val(minimalProductQuantity)
      }

      if (event.refreshUrl) {
        window.history.pushState({
          id_product_attribute: resp.id_product_attribute
        }, undefined, resp.product_url)
      }

    //   prestashop.emit(updateEventName, resp)
    })
  })
}
