let oldProductData = {};

export default function() {
  $(document).on("click", "[data-link-action='quickview']", event => {
    oldProductData = Object.assign({}, this.modules.productPageData);

    this.$nextTick(function() {
      this.themeLoaderShow = true;
    });

    let data = {
      action: "quickview",
      id_product: event.target.dataset.idProduct,
      id_product_attribute: event.target.dataset.idProductAttribute
    };

    $.post(prestashop.urls.pages.product, data, null, "json")
      .then(resp => {
        this.$nextTick(function() {
          this.modules.productPageData = resp.product;
          this.modules.quickView.variants = $(resp.quickview_html).find('#quickview-product-variants').html();
          this.modules.quickView.additionalInfo = $(resp.quickview_html).find('#quickview-additional-info').html();
          this.themeLoaderShow = false;
          this.$modal.show('quickviewModal')

          console.log(resp.quickview_html)
        });
      })
      .fail(resp => {
        prestashop.emit("handleError", {
          eventType: "clickQuickView",
          resp: resp
        });
      });
  });
}

export function onCloseQuickView() {
  this.$nextTick(function() {
    this.modules.productPageData = Object.assign({}, oldProductData);
  });
}
