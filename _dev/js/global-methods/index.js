// global methods
import updateCart from './updateCart'
import initFacets from './initFacets'
import showCartModal from './showCartModal'
import hideCartModal from './hideCartModal'
import openQuickView from './openQuickView'
import { onCloseQuickView } from './openQuickView'
import changeProductCoverImage from './changeProductCoverImage'
import productZoom from './productZoom'
import zoomLeave from './zoomLeave'
import productCore from '../core/product'
import searchBarChange from './searchBarChange'
import getAuthenticationTpl from './getAuthenticationTpl'
import loginFormModalEvents from './loginFormModalEvents'
import { updateCartCore } from '../core/cart'
import getModalWidth from './modalWidth'

export default {
  showCartModal,
  hideCartModal,
  updateCart,
  initFacets,
  productCore,
  changeProductCoverImage,
  productZoom,
  zoomLeave,
  searchBarChange,
  updateCartCore,
  openQuickView,
  onCloseQuickView,
  getAuthenticationTpl,
  loginFormModalEvents,
getModalWidth}
