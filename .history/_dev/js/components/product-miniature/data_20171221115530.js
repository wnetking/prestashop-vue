export default function () {
  return {
    imgBig: this.product.cover.bySize.medium_default.url,
    imgLarge: this.product.cover.large.url,
    isHover: false,
    static_token: prestashop.static_token,
    urls: prestashop.urls,
    configuration: prestashop.configuration,
    sharePopOverId: `share-popover-${this.product.id_product}-${this.product.id_category_default}`
  }
}
