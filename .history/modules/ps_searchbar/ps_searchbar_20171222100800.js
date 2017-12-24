/* global $ */
$(document).ready(function () {
  var $searchWidget = $('#search_widget')
  var $searchBox = $searchWidget.find('input[type=text]')
  var searchURL = $searchWidget.attr('data-search-controller-url')

  $.widget('prestashop.psBlockSearchAutocomplete', $.ui.autocomplete, {
    _renderItem: function (ul, product) {
      return $('<li>').append(`<a class="py-2">
          <div class="d-flex align-items-start">
            <img src="${prestashop.urls.img_prod_url}${product.id_product}/${product.id_product}-small_default.jpg"/>
            <div class="ml-2">
              <h5 class="h6 mt-2 my-0">${product.name}</h5>
              <p>
                <span class="badge badge-secondary mr-1">${product.manufacturer_name}</span>
                <span class="badge badge-secondary">${product.reference}</span>
              </p>
              ${product.has_discount ? `<del>${product.regular_price}</del>` : ''}
              <p class="text-primary">${product.price}</p>
            </div>
          </div>
        </a>`).appendTo(ul)
    }
  })

  $searchBox.psBlockSearchAutocomplete({
    source: function (query, response) {
      $.post(searchURL, {
        s: query.term,
        resultsPerPage: 30
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
