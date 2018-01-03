import prestashop from 'prestashop'
import refreshEmit from './refreshClickEmit'
import refreshClickListener from './refreshClickListener'

export default function () {
  let updateEventName = 'customUpdateProduct'
  refreshEmit()

  $('body').on('click', '.custom-product-refresh', refreshClickListener)

  prestashop.on(updateEventName, function (event) {
    if (typeof event.refreshUrl == 'undefined') {
      event.refreshUrl = true
    }

    var eventType = event.eventType

    let replaceAddToCartSections = ((addCartHtml) => {
      let $addToCartSnippet = $(addCartHtml)
      let $addProductToCart = $('.product-add-to-cart')

      function replaceAddToCartSection (replacement) {
        let replace = replacement.$addToCartSnippet.find(replacement.targetSelector)

        if ($(replacement.$targetParent.find(replacement.targetSelector)).length > 0) {
          if (replace.length > 0) {
            $(replacement.$targetParent.find(replacement.targetSelector)).replaceWith(replace[0].outerHTML)
          } else {
            $(replacement.$targetParent.find(replacement.targetSelector)).html('')
          }
        }
      }

      const productAvailabilitySelector = '.add'
      replaceAddToCartSection({
        $addToCartSnippet: $addToCartSnippet,
        $targetParent: $addProductToCart,
        targetSelector: productAvailabilitySelector
      })

      const productAvailabilityMessageSelector = '#product-availability'
      replaceAddToCartSection({
        $addToCartSnippet: $addToCartSnippet,
        $targetParent: $addProductToCart,
        targetSelector: productAvailabilityMessageSelector
      })

      const productMinimalQuantitySelector = '.product-minimal-quantity'
      replaceAddToCartSection({
        $addToCartSnippet: $addToCartSnippet,
        $targetParent: $addProductToCart,
        targetSelector: productMinimalQuantitySelector
      })
    })

    $.post(event.reason.productUrl,
      {
        ajax: '1',
        action: 'refresh'
      }, null, 'json').then(function (resp) {
      //
      console.log(resp)

      $('.product-prices').replaceWith(resp.product_prices)
      $('.product-customization').replaceWith(resp.product_customization)
      $('.product-variants').replaceWith(resp.product_variants)
      $('.product-discounts').replaceWith(resp.product_discounts)
      $('.images-container').replaceWith(resp.product_cover_thumbnails)
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
