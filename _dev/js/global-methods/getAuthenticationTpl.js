export default function (event) {
  event.preventDefault()

  getContent.call(this, prestashop.urls.pages.authentication)
}

function getContent (url) {
  let finalUrl = url.indexOf('?') === -1 ? url + '?content_only=1' : url + '&content_only=1'

  this.$nextTick(function () {
    this.themeLoaderShow = true
  })

  $.get(finalUrl)
    .then(resp => {
      this.$nextTick(function () {
        this.themeLoaderShow = false
        this.modules.singIn = $(resp).find('#content').html()

        this.$root.$emit('bv::show::modal', 'singInModal', '#singInModal')
      })
    })
    .fail(resp => {
      prestashop.emit('handleError', {
        eventType: 'clickQuickView',
        resp: resp
      })
    })
}

export { getContent }
