export default function() {
  $("body").on("click", '[data-button-action="add-to-cart"]', event => {
    this.$nextTick(function() {
      this.themeLoaderShow = true;
    });
  });

  prestashop.on("updateCart", event => {
    var refreshURL = $(".blockcart").data("refresh-url");
    var requestData = {};

    if (event && event.reason) {
      requestData = {
        id_product_attribute: event.reason.idProductAttribute,
        id_product: event.reason.idProduct,
        action: event.reason.linkAction
      };
    }

    $.post(refreshURL, requestData)
      .then(resp => {
        this.$nextTick(function() {
          this.modules.blockcart = $(resp.preview)
            .find(".blockcart")
            .data("module-data");
        });

        if (resp.modal) {
          
          this.showCartModal();

          this.$nextTick(function() {
            this.themeLoaderShow = false;
            this.blockcart.modalData = resp.modal;
          });
        }
      })
      .fail(function(resp) {
        prestashop.emit("handleError", {
          eventType: "updateShoppingCart",
          resp: resp
        });
      });
  });
}
