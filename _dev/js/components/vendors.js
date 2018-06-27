import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
// import { Tabs, Image, Card, Button, Collapse, Dropdown, ListGroup, Modal, Carousel, Badge, Popover } from 'bootstrap-vue/es/components'

import SocialSharing from 'vue-social-sharing'
import VueStringFilter from 'vue-string-filter'
import Vuebar from 'vuebar'
import VueImg from 'v-img'

export default function() {
  Vue.use(BootstrapVue)
  // Vue.use(Tabs)
  // Vue.use(Image)
  // Vue.use(Card)
  // Vue.use(Button)
  // Vue.use(Collapse)
  // Vue.use(Dropdown)
  // Vue.use(ListGroup)
  // Vue.use(Modal)
  // Vue.use(Carousel)
  // Vue.use(Badge)
  // Vue.use(Popover)

  Vue.use(VueStringFilter)
  Vue.use(SocialSharing)
  Vue.use(Vuebar)
  Vue.use(VueImg)
}
