import prestashop from 'prestashop'
import VueCarousel from 'VueCarousel'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import SocialSharing from 'vue-social-sharing'
import Avatar from 'vue-avatar'
import VueStringFilter from 'vue-string-filter'
import filters from './filters'
import components from './components'

prestashop.blockcart = prestashop.blockcart || {};
prestashop.blockcart.modalData = '<h1>Hello cart</h1>'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

$('[data-module-name]').each(function () {
  prestashop.modules[$(this).data('module-name')] = $(this).data('module-data')
})

Vue.use(BootstrapVue)
Vue.use(VueStringFilter)
Vue.use(SocialSharing)

filters()
components()

new Vue({
  el: '#app',
  data: prestashop,
  components: {
    'avatar': Avatar,
    'carousel': window.VueCarousel.Carousel,
    'slide': window.VueCarousel.Slide
  },
  methods: {
    showModal () {
      this.$refs.blokcart.show()
    },
    hideModal () {
      this.$refs.blokcart.hide()
    }
  },
  created: function(){
    prestashop.on(
      'updateCart',
       (event) => {
        var refreshURL = $('.blockcart').data('refresh-url');
        var requestData = {};

        if (event && event.reason) {
          requestData = {
            id_product_attribute: event.reason.idProductAttribute,
            id_product: event.reason.idProduct,
            action: event.reason.linkAction
          };
        }

        $.post(refreshURL, requestData).then( (resp) => {
          $('.blockcart').replaceWith($(resp.preview).find('.blockcart'));
          
          if (resp.modal) {
            this.showModal();

            this.$nextTick(function () {
              this.blockcart.modalData = resp.modal 
            })
          }
        }).fail(function (resp) {
          prestashop.emit('handleError', {eventType: 'updateShoppingCart', resp: resp});
        });
      }
    );
  }
})
