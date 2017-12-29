export default function() {
  $('body').on('click', '.js-search-filters-clear-all', function (event) {
    event.preventDefault()
    prestashop.emit('updateFacets', parseSearchUrl(event))
  })

  $('body').on('change', '#search_filters input[data-search-url]', function (event) {
    prestashop.emit('updateFacets', parseSearchUrl(event))
  })

  $('body').on('click', '.js-search-link', function (event) {
    event.preventDefault()
    prestashop.emit('updateFacets', $(event.target).closest('a').get(0).href)
  })

  prestashop.on('updateProductList', (data) => {
    this.$nextTick(function () {
      this.modules.listingProduct = $(data.rendered_products).filter('#ajax-products-list').data('ajax-products')
      updateProductListDOM(data)
    })
  })
}

function parseSearchUrl (event) {
  if (event.target.dataset.searchUrl !== undefined) {
    return event.target.dataset.searchUrl
  }

  if ($(event.target).parent()[0].dataset.searchUrl === undefined) {
    throw new Error('Can not parse search URL')
  }

  return $(event.target).parent()[0].dataset.searchUrl
}

function updateProductListDOM (data) {
  $('#search_filters').replaceWith(data.rendered_facets)
  $('#js-active-search-filters').replaceWith(data.rendered_active_filters)
  $('#js-product-list-top').replaceWith(data.rendered_products_top)
  // $('#js-product-list').replaceWith(data.rendered_products)
  $('#js-product-list-bottom').replaceWith(data.rendered_products_bottom)
}
