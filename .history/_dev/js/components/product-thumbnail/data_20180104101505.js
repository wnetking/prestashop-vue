export default function () {
  return {
    imgBig: this.product.cover.bySize.medium_default.url,
    imgLarge: this.product.cover.large.url
  }
}
