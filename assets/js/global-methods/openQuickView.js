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
/******/ 	return __webpack_require__(__webpack_require__.s = 26);
/******/ })
/************************************************************************/
/******/ ({

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var _this = this;

  $(document).on("click", "[data-link-action='quickview']", function (event) {
    oldProductData = Object.assign({}, _this.modules.productPageData);

    _this.$nextTick(function () {
      this.themeLoaderShow = true;
    });

    var data = {
      action: "quickview",
      id_product: event.target.dataset.idProduct,
      id_product_attribute: event.target.dataset.idProductAttribute
    };

    $.post(prestashop.urls.pages.product, data, null, "json").then(function (resp) {
      _this.$nextTick(function () {
        this.modules.productPageData = resp.product;
        this.modules.quickView.variants = $(resp.quickview_html).find("#quickview-product-variants").html();
        this.modules.quickView.additionalInfo = $(resp.quickview_html).find("#quickview-additional-info").html();
        this.modules.quickView.accessoriesProduct = $(resp.quickview_html).find(".product-accessories").data("module-data");
        this.modules.quickView.packProduct = $(resp.quickview_html).find(".product-pack").data("module-data");
        this.themeLoaderShow = false;
        this.$modal.show("quickviewModal");

        // console.log(resp.quickview_html);
      });
    }).fail(function (resp) {
      prestashop.emit("handleError", {
        eventType: "clickQuickView",
        resp: resp
      });
    });
  });
};

exports.onCloseQuickView = onCloseQuickView;
var oldProductData = {};

function onCloseQuickView() {
  this.$nextTick(function () {
    this.modules.productPageData = Object.assign({}, oldProductData);
  });
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTU3OGUxZjM2YjllY2UwYjk5NjIiLCJ3ZWJwYWNrOi8vLy4vanMvZ2xvYmFsLW1ldGhvZHMvb3BlblF1aWNrVmlldy5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJvbiIsIm9sZFByb2R1Y3REYXRhIiwiT2JqZWN0IiwiYXNzaWduIiwibW9kdWxlcyIsInByb2R1Y3RQYWdlRGF0YSIsIiRuZXh0VGljayIsInRoZW1lTG9hZGVyU2hvdyIsImRhdGEiLCJhY3Rpb24iLCJpZF9wcm9kdWN0IiwiZXZlbnQiLCJ0YXJnZXQiLCJkYXRhc2V0IiwiaWRQcm9kdWN0IiwiaWRfcHJvZHVjdF9hdHRyaWJ1dGUiLCJpZFByb2R1Y3RBdHRyaWJ1dGUiLCJwb3N0IiwicHJlc3Rhc2hvcCIsInVybHMiLCJwYWdlcyIsInByb2R1Y3QiLCJ0aGVuIiwicmVzcCIsInF1aWNrVmlldyIsInZhcmlhbnRzIiwicXVpY2t2aWV3X2h0bWwiLCJmaW5kIiwiaHRtbCIsImFkZGl0aW9uYWxJbmZvIiwiYWNjZXNzb3JpZXNQcm9kdWN0IiwicGFja1Byb2R1Y3QiLCIkbW9kYWwiLCJzaG93IiwiZmFpbCIsImVtaXQiLCJldmVudFR5cGUiLCJvbkNsb3NlUXVpY2tWaWV3Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztrQkMzRGUsWUFBVztBQUFBOztBQUN4QkEsSUFBRUMsUUFBRixFQUFZQyxFQUFaLENBQWUsT0FBZixFQUF3QixnQ0FBeEIsRUFBMEQsaUJBQVM7QUFDakVDLHFCQUFpQkMsT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0IsTUFBS0MsT0FBTCxDQUFhQyxlQUEvQixDQUFqQjs7QUFFQSxVQUFLQyxTQUFMLENBQWUsWUFBVztBQUN4QixXQUFLQyxlQUFMLEdBQXVCLElBQXZCO0FBQ0QsS0FGRDs7QUFJQSxRQUFJQyxPQUFPO0FBQ1RDLGNBQVEsV0FEQztBQUVUQyxrQkFBWUMsTUFBTUMsTUFBTixDQUFhQyxPQUFiLENBQXFCQyxTQUZ4QjtBQUdUQyw0QkFBc0JKLE1BQU1DLE1BQU4sQ0FBYUMsT0FBYixDQUFxQkc7QUFIbEMsS0FBWDs7QUFNQWxCLE1BQUVtQixJQUFGLENBQU9DLFdBQVdDLElBQVgsQ0FBZ0JDLEtBQWhCLENBQXNCQyxPQUE3QixFQUFzQ2IsSUFBdEMsRUFBNEMsSUFBNUMsRUFBa0QsTUFBbEQsRUFDR2MsSUFESCxDQUNRLGdCQUFRO0FBQ1osWUFBS2hCLFNBQUwsQ0FBZSxZQUFXO0FBQ3hCLGFBQUtGLE9BQUwsQ0FBYUMsZUFBYixHQUErQmtCLEtBQUtGLE9BQXBDO0FBQ0EsYUFBS2pCLE9BQUwsQ0FBYW9CLFNBQWIsQ0FBdUJDLFFBQXZCLEdBQWtDM0IsRUFBRXlCLEtBQUtHLGNBQVAsRUFDL0JDLElBRCtCLENBQzFCLDZCQUQwQixFQUUvQkMsSUFGK0IsRUFBbEM7QUFHQSxhQUFLeEIsT0FBTCxDQUFhb0IsU0FBYixDQUF1QkssY0FBdkIsR0FBd0MvQixFQUFFeUIsS0FBS0csY0FBUCxFQUNyQ0MsSUFEcUMsQ0FDaEMsNEJBRGdDLEVBRXJDQyxJQUZxQyxFQUF4QztBQUdBLGFBQUt4QixPQUFMLENBQWFvQixTQUFiLENBQXVCTSxrQkFBdkIsR0FBNENoQyxFQUFFeUIsS0FBS0csY0FBUCxFQUN6Q0MsSUFEeUMsQ0FDcEMsc0JBRG9DLEVBRXpDbkIsSUFGeUMsQ0FFcEMsYUFGb0MsQ0FBNUM7QUFHQSxhQUFLSixPQUFMLENBQWFvQixTQUFiLENBQXVCTyxXQUF2QixHQUFxQ2pDLEVBQUV5QixLQUFLRyxjQUFQLEVBQ2xDQyxJQURrQyxDQUM3QixlQUQ2QixFQUVsQ25CLElBRmtDLENBRTdCLGFBRjZCLENBQXJDO0FBR0EsYUFBS0QsZUFBTCxHQUF1QixLQUF2QjtBQUNBLGFBQUt5QixNQUFMLENBQVlDLElBQVosQ0FBaUIsZ0JBQWpCOztBQUVBO0FBQ0QsT0FsQkQ7QUFtQkQsS0FyQkgsRUFzQkdDLElBdEJILENBc0JRLGdCQUFRO0FBQ1poQixpQkFBV2lCLElBQVgsQ0FBZ0IsYUFBaEIsRUFBK0I7QUFDN0JDLG1CQUFXLGdCQURrQjtBQUU3QmIsY0FBTUE7QUFGdUIsT0FBL0I7QUFJRCxLQTNCSDtBQTRCRCxHQXpDRDtBQTBDRCxDOztRQUVlYyxnQixHQUFBQSxnQjtBQS9DaEIsSUFBSXBDLGlCQUFpQixFQUFyQjs7QUErQ08sU0FBU29DLGdCQUFULEdBQTRCO0FBQ2pDLE9BQUsvQixTQUFMLENBQWUsWUFBVztBQUN4QixTQUFLRixPQUFMLENBQWFDLGVBQWIsR0FBK0JILE9BQU9DLE1BQVAsQ0FBYyxFQUFkLEVBQWtCRixjQUFsQixDQUEvQjtBQUNELEdBRkQ7QUFHRCxDIiwiZmlsZSI6Ii4uL2Fzc2V0c1xcanNcXGdsb2JhbC1tZXRob2RzXFxvcGVuUXVpY2tWaWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMjYpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDE1NzhlMWYzNmI5ZWNlMGI5OTYyIiwibGV0IG9sZFByb2R1Y3REYXRhID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICAkKGRvY3VtZW50KS5vbihcImNsaWNrXCIsIFwiW2RhdGEtbGluay1hY3Rpb249J3F1aWNrdmlldyddXCIsIGV2ZW50ID0+IHtcbiAgICBvbGRQcm9kdWN0RGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMubW9kdWxlcy5wcm9kdWN0UGFnZURhdGEpO1xuXG4gICAgdGhpcy4kbmV4dFRpY2soZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLnRoZW1lTG9hZGVyU2hvdyA9IHRydWU7XG4gICAgfSk7XG5cbiAgICBsZXQgZGF0YSA9IHtcbiAgICAgIGFjdGlvbjogXCJxdWlja3ZpZXdcIixcbiAgICAgIGlkX3Byb2R1Y3Q6IGV2ZW50LnRhcmdldC5kYXRhc2V0LmlkUHJvZHVjdCxcbiAgICAgIGlkX3Byb2R1Y3RfYXR0cmlidXRlOiBldmVudC50YXJnZXQuZGF0YXNldC5pZFByb2R1Y3RBdHRyaWJ1dGVcbiAgICB9O1xuXG4gICAgJC5wb3N0KHByZXN0YXNob3AudXJscy5wYWdlcy5wcm9kdWN0LCBkYXRhLCBudWxsLCBcImpzb25cIilcbiAgICAgIC50aGVuKHJlc3AgPT4ge1xuICAgICAgICB0aGlzLiRuZXh0VGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICB0aGlzLm1vZHVsZXMucHJvZHVjdFBhZ2VEYXRhID0gcmVzcC5wcm9kdWN0O1xuICAgICAgICAgIHRoaXMubW9kdWxlcy5xdWlja1ZpZXcudmFyaWFudHMgPSAkKHJlc3AucXVpY2t2aWV3X2h0bWwpXG4gICAgICAgICAgICAuZmluZChcIiNxdWlja3ZpZXctcHJvZHVjdC12YXJpYW50c1wiKVxuICAgICAgICAgICAgLmh0bWwoKTtcbiAgICAgICAgICB0aGlzLm1vZHVsZXMucXVpY2tWaWV3LmFkZGl0aW9uYWxJbmZvID0gJChyZXNwLnF1aWNrdmlld19odG1sKVxuICAgICAgICAgICAgLmZpbmQoXCIjcXVpY2t2aWV3LWFkZGl0aW9uYWwtaW5mb1wiKVxuICAgICAgICAgICAgLmh0bWwoKTtcbiAgICAgICAgICB0aGlzLm1vZHVsZXMucXVpY2tWaWV3LmFjY2Vzc29yaWVzUHJvZHVjdCA9ICQocmVzcC5xdWlja3ZpZXdfaHRtbClcbiAgICAgICAgICAgIC5maW5kKFwiLnByb2R1Y3QtYWNjZXNzb3JpZXNcIilcbiAgICAgICAgICAgIC5kYXRhKFwibW9kdWxlLWRhdGFcIik7XG4gICAgICAgICAgdGhpcy5tb2R1bGVzLnF1aWNrVmlldy5wYWNrUHJvZHVjdCA9ICQocmVzcC5xdWlja3ZpZXdfaHRtbClcbiAgICAgICAgICAgIC5maW5kKFwiLnByb2R1Y3QtcGFja1wiKVxuICAgICAgICAgICAgLmRhdGEoXCJtb2R1bGUtZGF0YVwiKTtcbiAgICAgICAgICB0aGlzLnRoZW1lTG9hZGVyU2hvdyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuJG1vZGFsLnNob3coXCJxdWlja3ZpZXdNb2RhbFwiKTtcbiAgICAgICAgICAgXG4gICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzcC5xdWlja3ZpZXdfaHRtbCk7XG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICAgIC5mYWlsKHJlc3AgPT4ge1xuICAgICAgICBwcmVzdGFzaG9wLmVtaXQoXCJoYW5kbGVFcnJvclwiLCB7XG4gICAgICAgICAgZXZlbnRUeXBlOiBcImNsaWNrUXVpY2tWaWV3XCIsXG4gICAgICAgICAgcmVzcDogcmVzcFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uQ2xvc2VRdWlja1ZpZXcoKSB7XG4gIHRoaXMuJG5leHRUaWNrKGZ1bmN0aW9uKCkge1xuICAgIHRoaXMubW9kdWxlcy5wcm9kdWN0UGFnZURhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBvbGRQcm9kdWN0RGF0YSk7XG4gIH0pO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvZ2xvYmFsLW1ldGhvZHMvb3BlblF1aWNrVmlldy5qcyJdLCJzb3VyY2VSb290IjoiIn0=