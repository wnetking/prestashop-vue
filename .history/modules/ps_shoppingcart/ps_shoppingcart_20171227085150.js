/* global $, prestashop */

/**
 * This module exposes an extension point in the form of the `showModal` function.
 *
 * If you want to override the way the modal window is displayed, simply define:
 *
 * prestashop.blockcart = prestashop.blockcart || {};
 * prestashop.blockcart.showModal = function myOwnShowModal (modalHTML) {
 *   // your own code
 *   // please not that it is your responsibility to handle closing the modal too
 * };
 *
 * Attention: your "override" JS needs to be included **before** this file.
 * The safest way to do so is to place your "override" inside the theme's main JS file.
 *
 */

$(document).ready(function () {
  // prestashop.blockcart = prestashop.blockcart || {};

  // var showModal = prestashop.blockcart.showModal || function (modal) {
  //   var $body = $('body');
  //   $body.append(modal);
  //   $body.one('click', '#blockcart-modal', function (event) {
  //     if (event.target.id === 'blockcart-modal') {
  //       $(event.target).remove();
  //     }
  //   });
  // };

  $(document).ready(function () {
    
  });
});
