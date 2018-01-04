import prestashop from 'prestashop'

export default function() {
  $('body').on('change', '#search_filters input[data-search-url]', (event) => {
    prestashop.emit('updateFacets', parseSearchUrl(event))

    this.$nextTick(function () {
      this.themeLoaderShow = true
    })
  })

  $('body').on('click', '.js-search-link, .js-search-filters-clear-all', (event) => {
    event.preventDefault()

    prestashop.emit('updateFacets', $(event.target).closest('a').get(0).href)

    this.$nextTick(function () {
      this.themeLoaderShow = true
    })
  })

  prestashop.on('updateProductList', (data) => {
    this.$nextTick(function () {
      this.modules.listingProduct = $(data.rendered_products).filter('#ajs-product-list').data('ajax-products')
      updateProductListDOM(data)
      this.themeLoaderShow = false
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
  $('#js-product-list-bottom').replaceWith(data.rendered_products_bottom)
}
