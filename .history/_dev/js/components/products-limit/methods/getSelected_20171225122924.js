export default function() {
  this.selected = this.data.filter((item, index) => {
    return index >= this.indexes.start && index <= this.indexes.end ? true : false
  })

// setTimeout(function () {
//   window.scrollTo(window.scrollX, window.scrollY - 1)
//   window.scrollTo(window.scrollX, window.scrollY + 1)
// }, 800)
}
