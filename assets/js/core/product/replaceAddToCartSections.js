/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ({

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var replaceAddToCartSections = function replaceAddToCartSections(addCartHtml) {
  var $addToCartSnippet = $(addCartHtml);
  var $addProductToCart = $('.product-add-to-cart');

  function replaceAddToCartSection(replacement) {
    var replace = replacement.$addToCartSnippet.find(replacement.targetSelector);

    if ($(replacement.$targetParent.find(replacement.targetSelector)).length > 0) {
      if (replace.length > 0) {
        $(replacement.$targetParent.find(replacement.targetSelector)).replaceWith(replace[0].outerHTML);
      } else {
        $(replacement.$targetParent.find(replacement.targetSelector)).html('');
      }
    }
  }

  var productAvailabilitySelector = '.add';
  replaceAddToCartSection({
    $addToCartSnippet: $addToCartSnippet,
    $targetParent: $addProductToCart,
    targetSelector: productAvailabilitySelector
  });

  var productAvailabilityMessageSelector = '#product-availability';
  replaceAddToCartSection({
    $addToCartSnippet: $addToCartSnippet,
    $targetParent: $addProductToCart,
    targetSelector: productAvailabilityMessageSelector
  });

  var productMinimalQuantitySelector = '.product-minimal-quantity';
  replaceAddToCartSection({
    $addToCartSnippet: $addToCartSnippet,
    $targetParent: $addProductToCart,
    targetSelector: productMinimalQuantitySelector
  });
};

exports.default = replaceAddToCartSections;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTU3OGUxZjM2YjllY2UwYjk5NjIiLCJ3ZWJwYWNrOi8vLy4vanMvY29yZS9wcm9kdWN0L3JlcGxhY2VBZGRUb0NhcnRTZWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJyZXBsYWNlQWRkVG9DYXJ0U2VjdGlvbnMiLCJhZGRDYXJ0SHRtbCIsIiRhZGRUb0NhcnRTbmlwcGV0IiwiJCIsIiRhZGRQcm9kdWN0VG9DYXJ0IiwicmVwbGFjZUFkZFRvQ2FydFNlY3Rpb24iLCJyZXBsYWNlbWVudCIsInJlcGxhY2UiLCJmaW5kIiwidGFyZ2V0U2VsZWN0b3IiLCIkdGFyZ2V0UGFyZW50IiwibGVuZ3RoIiwicmVwbGFjZVdpdGgiLCJvdXRlckhUTUwiLCJodG1sIiwicHJvZHVjdEF2YWlsYWJpbGl0eVNlbGVjdG9yIiwicHJvZHVjdEF2YWlsYWJpbGl0eU1lc3NhZ2VTZWxlY3RvciIsInByb2R1Y3RNaW5pbWFsUXVhbnRpdHlTZWxlY3RvciJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzdEQSxJQUFJQSwyQkFBNEIsU0FBNUJBLHdCQUE0QixDQUFDQyxXQUFELEVBQWlCO0FBQy9DLE1BQUlDLG9CQUFvQkMsRUFBRUYsV0FBRixDQUF4QjtBQUNBLE1BQUlHLG9CQUFvQkQsRUFBRSxzQkFBRixDQUF4Qjs7QUFFQSxXQUFTRSx1QkFBVCxDQUFrQ0MsV0FBbEMsRUFBK0M7QUFDN0MsUUFBSUMsVUFBVUQsWUFBWUosaUJBQVosQ0FBOEJNLElBQTlCLENBQW1DRixZQUFZRyxjQUEvQyxDQUFkOztBQUVBLFFBQUlOLEVBQUVHLFlBQVlJLGFBQVosQ0FBMEJGLElBQTFCLENBQStCRixZQUFZRyxjQUEzQyxDQUFGLEVBQThERSxNQUE5RCxHQUF1RSxDQUEzRSxFQUE4RTtBQUM1RSxVQUFJSixRQUFRSSxNQUFSLEdBQWlCLENBQXJCLEVBQXdCO0FBQ3RCUixVQUFFRyxZQUFZSSxhQUFaLENBQTBCRixJQUExQixDQUErQkYsWUFBWUcsY0FBM0MsQ0FBRixFQUE4REcsV0FBOUQsQ0FBMEVMLFFBQVEsQ0FBUixFQUFXTSxTQUFyRjtBQUNELE9BRkQsTUFFTztBQUNMVixVQUFFRyxZQUFZSSxhQUFaLENBQTBCRixJQUExQixDQUErQkYsWUFBWUcsY0FBM0MsQ0FBRixFQUE4REssSUFBOUQsQ0FBbUUsRUFBbkU7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsTUFBTUMsOEJBQThCLE1BQXBDO0FBQ0FWLDBCQUF3QjtBQUN0QkgsdUJBQW1CQSxpQkFERztBQUV0QlEsbUJBQWVOLGlCQUZPO0FBR3RCSyxvQkFBZ0JNO0FBSE0sR0FBeEI7O0FBTUEsTUFBTUMscUNBQXFDLHVCQUEzQztBQUNBWCwwQkFBd0I7QUFDdEJILHVCQUFtQkEsaUJBREc7QUFFdEJRLG1CQUFlTixpQkFGTztBQUd0Qkssb0JBQWdCTztBQUhNLEdBQXhCOztBQU1BLE1BQU1DLGlDQUFpQywyQkFBdkM7QUFDQVosMEJBQXdCO0FBQ3RCSCx1QkFBbUJBLGlCQURHO0FBRXRCUSxtQkFBZU4saUJBRk87QUFHdEJLLG9CQUFnQlE7QUFITSxHQUF4QjtBQUtELENBcENEOztrQkFzQ2VqQix3QiIsImZpbGUiOiIuLi9hc3NldHNcXGpzXFxjb3JlXFxwcm9kdWN0XFxyZXBsYWNlQWRkVG9DYXJ0U2VjdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxOSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMTU3OGUxZjM2YjllY2UwYjk5NjIiLCJsZXQgcmVwbGFjZUFkZFRvQ2FydFNlY3Rpb25zID0gKChhZGRDYXJ0SHRtbCkgPT4ge1xuICBsZXQgJGFkZFRvQ2FydFNuaXBwZXQgPSAkKGFkZENhcnRIdG1sKVxuICBsZXQgJGFkZFByb2R1Y3RUb0NhcnQgPSAkKCcucHJvZHVjdC1hZGQtdG8tY2FydCcpXG5cbiAgZnVuY3Rpb24gcmVwbGFjZUFkZFRvQ2FydFNlY3Rpb24gKHJlcGxhY2VtZW50KSB7XG4gICAgbGV0IHJlcGxhY2UgPSByZXBsYWNlbWVudC4kYWRkVG9DYXJ0U25pcHBldC5maW5kKHJlcGxhY2VtZW50LnRhcmdldFNlbGVjdG9yKVxuXG4gICAgaWYgKCQocmVwbGFjZW1lbnQuJHRhcmdldFBhcmVudC5maW5kKHJlcGxhY2VtZW50LnRhcmdldFNlbGVjdG9yKSkubGVuZ3RoID4gMCkge1xuICAgICAgaWYgKHJlcGxhY2UubGVuZ3RoID4gMCkge1xuICAgICAgICAkKHJlcGxhY2VtZW50LiR0YXJnZXRQYXJlbnQuZmluZChyZXBsYWNlbWVudC50YXJnZXRTZWxlY3RvcikpLnJlcGxhY2VXaXRoKHJlcGxhY2VbMF0ub3V0ZXJIVE1MKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJChyZXBsYWNlbWVudC4kdGFyZ2V0UGFyZW50LmZpbmQocmVwbGFjZW1lbnQudGFyZ2V0U2VsZWN0b3IpKS5odG1sKCcnKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHByb2R1Y3RBdmFpbGFiaWxpdHlTZWxlY3RvciA9ICcuYWRkJ1xuICByZXBsYWNlQWRkVG9DYXJ0U2VjdGlvbih7XG4gICAgJGFkZFRvQ2FydFNuaXBwZXQ6ICRhZGRUb0NhcnRTbmlwcGV0LFxuICAgICR0YXJnZXRQYXJlbnQ6ICRhZGRQcm9kdWN0VG9DYXJ0LFxuICAgIHRhcmdldFNlbGVjdG9yOiBwcm9kdWN0QXZhaWxhYmlsaXR5U2VsZWN0b3JcbiAgfSlcblxuICBjb25zdCBwcm9kdWN0QXZhaWxhYmlsaXR5TWVzc2FnZVNlbGVjdG9yID0gJyNwcm9kdWN0LWF2YWlsYWJpbGl0eSdcbiAgcmVwbGFjZUFkZFRvQ2FydFNlY3Rpb24oe1xuICAgICRhZGRUb0NhcnRTbmlwcGV0OiAkYWRkVG9DYXJ0U25pcHBldCxcbiAgICAkdGFyZ2V0UGFyZW50OiAkYWRkUHJvZHVjdFRvQ2FydCxcbiAgICB0YXJnZXRTZWxlY3RvcjogcHJvZHVjdEF2YWlsYWJpbGl0eU1lc3NhZ2VTZWxlY3RvclxuICB9KVxuXG4gIGNvbnN0IHByb2R1Y3RNaW5pbWFsUXVhbnRpdHlTZWxlY3RvciA9ICcucHJvZHVjdC1taW5pbWFsLXF1YW50aXR5J1xuICByZXBsYWNlQWRkVG9DYXJ0U2VjdGlvbih7XG4gICAgJGFkZFRvQ2FydFNuaXBwZXQ6ICRhZGRUb0NhcnRTbmlwcGV0LFxuICAgICR0YXJnZXRQYXJlbnQ6ICRhZGRQcm9kdWN0VG9DYXJ0LFxuICAgIHRhcmdldFNlbGVjdG9yOiBwcm9kdWN0TWluaW1hbFF1YW50aXR5U2VsZWN0b3JcbiAgfSlcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IHJlcGxhY2VBZGRUb0NhcnRTZWN0aW9uc1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvY29yZS9wcm9kdWN0L3JlcGxhY2VBZGRUb0NhcnRTZWN0aW9ucy5qcyJdLCJzb3VyY2VSb290IjoiIn0=