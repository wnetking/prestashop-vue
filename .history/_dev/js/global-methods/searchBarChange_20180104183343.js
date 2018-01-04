export default function(event) {
  let minLetters = 2
  let searchURL = event.target.dataset.searchControllerUrl

  if (event.target.value > minLetters) {
    $.post(searchURL, {
      s: event.target.value,
      resultsPerPage: 30
    }, null, 'json').then(function (resp) {
      // response(resp.products)
      console.log(resp)
    }).fail(e => {
      console.log(e)
    })
  }
}
