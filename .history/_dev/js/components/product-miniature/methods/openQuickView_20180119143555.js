export default function(event) {
  console.log(event.target);
  let data = {
    action: "quickview",
    id_product: event.target.dataset.idProduct,
    id_product_attribute: event.target.dataset.idProductAttribute
  };
  $.post(prestashop.urls.pages.product, data, null, "json")
    .then(function(resp) {
      console.log(resp);
      // $('body').append(resp.quickview_html)
      // let productModal = $(`#quickview-modal-${resp.product.id}-${resp.product.id_product_attribute}`)
      // productModal.modal('show')
      // productConfig(productModal)

      // productModal.on('shown.bs.modal', function () {
      //   createProductThumbnails($('.quickview'))
      // })

      // productModal.on('hidden.bs.modal', function () {
      //   productModal.remove()
      // })
    })
    .fail(resp => {
      prestashop.emit("handleError", {
        eventType: "clickQuickView",
        resp: resp
      });
    });
}
