export default function (event) {
  if (event) {
    this.imgBig = event.target.dataset.bigImg
    this.imgLarge = event.target.dataset.largeImg
  }
}
