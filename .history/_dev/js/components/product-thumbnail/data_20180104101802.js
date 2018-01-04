export default function () {
  return {
    imgBig: this.productPageData.cover.bySize.large_default.url,
    imgLarge: this.product.cover.large.url
  }
}
