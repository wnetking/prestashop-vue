import prestashop from 'prestashop'

export default function() {
  prestashop.modules = prestashop.modules || {}
  prestashop.blockcart = prestashop.blockcart || {}
  prestashop.modules.productPageData = prestashop.modules.productPageData || {}
  prestashop.modules.quickView = prestashop.modules.quickView || {}
  prestashop.modules.quickView.variants = ''
  prestashop.modules.quickView.additionalInfo = ''
  prestashop.modules.quickView.accessoriesProduct = []
  prestashop.modules.quickView.packProduct = []
  prestashop.modules.singIn = ''
  prestashop.themeLoaderShow = false
  prestashop.modalWidth = 1110
  prestashop.blockcart = {
    modalData: '<h1>Hello cart</h1>',
    data: [],
    loading: false
  }

  $('[data-module-name]').each(function () {
    prestashop.modules[$(this).data('module-name')] = $(this).data('module-data')
  })
}
