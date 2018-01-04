export default function (event) {
  this.modules.productPageData.cover = JSON.parse(event.target.dataset.coverData)
}
