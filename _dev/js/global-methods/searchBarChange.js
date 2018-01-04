export default function(event) {
  let minLetters = 2
  let searchURL = event.target.dataset.searchControllerUrl

  if (event.target.value.length > minLetters) {
    $.post(searchURL, {
      s: event.target.value,
      resultsPerPage: 30
    }, null, 'json').then((resp) => {
      console.log($(resp.rendered_products).filter('#js-product-list').data('module-data'))
    }).fail(e => {
      console.log(e)
    })
  }
}
