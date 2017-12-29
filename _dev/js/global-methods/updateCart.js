export default function() {
  prestashop.on(
    'updateCart',
    (event) => {
      var refreshURL = $('.blockcart').data('refresh-url')
      var requestData = {}

      if (event && event.reason) {
        requestData = {
          id_product_attribute: event.reason.idProductAttribute,
          id_product: event.reason.idProduct,
          action: event.reason.linkAction
        }
      }

      $.post(refreshURL, requestData).then((resp) => {
        $('.blockcart').replaceWith($(resp.preview).find('.blockcart'))

        if (resp.modal) {
          this.showCartModal()

          this.$nextTick(function () {
            this.blockcart.modalData = resp.modal
          })
        }
      }).fail(function (resp) {
        prestashop.emit('handleError', {eventType: 'updateShoppingCart', resp: resp})
      })
    }
  )
}
