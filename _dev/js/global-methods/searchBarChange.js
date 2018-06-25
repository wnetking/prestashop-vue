export default function(event) {
  let minLetters = 2
  let searchURL = event.target.dataset.searchControllerUrl

  if (event.target.value.length > minLetters) {
    this.blockcart.loading = true

    delayCall($(this), 500, () => {
      $.post(searchURL, {
        s: event.target.value,
        resultsPerPage: 30
      }, null, 'json').then((resp) => {
        this.blockcart.data = $(resp.rendered_products).filter('#js-product-list').data('module-data')

        if ($(resp.rendered_products).filter('#js-product-list').data('module-data').length === 0) {
          this.blockcart.noResult = true
        }

        this.blockcart.loading = false
      }).fail(e => {
        console.log(e)
        this.blockcart.loading = false
      })
    })
  }else {
    this.blockcart.data = []
    this.blockcart.noResult = false
    this.blockcart.loading = false
  }
}

function delayCall (obj, ms, fn) {
  return $(obj).each(function () {
    if (typeof this.timer == 'undefined') {
      // Define an array to keep track of all fields needed delays
      // This is in order to make this a multiple delay handling
      // function
      this.timer = []
    }
    var obj = this
    if (this.timer[obj.id]) {
      clearTimeout(this.timer[obj.id])
      delete (this.timer[obj.id])
    }

    this.timer[obj.id] = setTimeout(function () {
      fn(obj);}, ms)
  })
}
