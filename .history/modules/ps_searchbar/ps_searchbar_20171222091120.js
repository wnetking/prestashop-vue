/* global $ */
$(document).ready(function () {
  var $searchWidget = $('#search_widget')
  var $searchBox = $searchWidget.find('input[type=text]')
  var searchURL = $searchWidget.attr('data-search-controller-url')

  $.widget('prestashop.psBlockSearchAutocomplete', $.ui.autocomplete, {
    _renderItem: function (ul, product) {
      return $('<li>').append(`<a class="py-2">
          <span class="badge badge-secondary mr-1">${product.manufacturer_name}</span>
          <span class="badge badge-secondary">${product.reference}</span>
          <h5 class="mt-2">${product.name}</h5>
          ${product.has_discount ? `<del>${product.regular_price}</del>` : ''}
          <span class="h5 text-primary">${product.price}</span>
          ${product.description_short}
        </a>`).appendTo(ul)
    }
  })

  $searchBox.psBlockSearchAutocomplete({
    source: function (query, response) {
      $.post(searchURL, {
        s: query.term,
        resultsPerPage: 10
      }, null, 'json')
        .then(function (resp) {
          console.log(resp.products)
          response(resp.products)
        })
        .fail(response)
    },
    select: function (event, ui) {
      var url = ui.item.url
      window.location.href = url
    },
    appendTo: $searchWidget
  })
})
