var productMiniature = Vue.extend({
  props: ['imgNornal', 'imgZoom'],
  template: '<img src="http://www.afalchi.it/media/img/lens.png" alt="" class="plus"><div class="img normal" style="background-image:url( {{ imgNornal }} )"></div><div class="img zoom" style="background-image:url({{ imgZoom }})"></div>'
})

export default productMiniature
