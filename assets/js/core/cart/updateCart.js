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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ({

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (event) {
    var _this = this;

    event.preventDefault();
    this.$nextTick(function () {
        this.themeLoaderShow = true;
    });
    abortPreviousRequests();
    $.ajax({
        url: event.target.href,
        method: 'POST',
        data: requestData,
        dataType: 'json',
        beforeSend: function beforeSend(jqXHR) {
            promises.push(jqXHR);
        }
    }).then(function (resp) {
        _this.$nextTick(function () {
            this.modules.blockcart = resp.cart;
            this.themeLoaderShow = false;
        });
    }).fail(function (resp) {
        prestashop.emit('handleError', {
            eventType: 'updateProductInCart',
            resp: resp
            // cartAction: cartAction.type
        });
    });
};

var promises = [];
var abortPreviousRequests = function abortPreviousRequests() {
    var promise;
    while (promises.length > 0) {
        promise = promises.pop();
        promise.abort();
    }
};
var requestData = {
    ajax: '1',
    action: 'update'
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTU3OGUxZjM2YjllY2UwYjk5NjIiLCJ3ZWJwYWNrOi8vLy4vanMvY29yZS9jYXJ0L3VwZGF0ZUNhcnQuanMiXSwibmFtZXMiOlsiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIiRuZXh0VGljayIsInRoZW1lTG9hZGVyU2hvdyIsImFib3J0UHJldmlvdXNSZXF1ZXN0cyIsIiQiLCJhamF4IiwidXJsIiwidGFyZ2V0IiwiaHJlZiIsIm1ldGhvZCIsImRhdGEiLCJyZXF1ZXN0RGF0YSIsImRhdGFUeXBlIiwiYmVmb3JlU2VuZCIsImpxWEhSIiwicHJvbWlzZXMiLCJwdXNoIiwidGhlbiIsIm1vZHVsZXMiLCJibG9ja2NhcnQiLCJyZXNwIiwiY2FydCIsImZhaWwiLCJwcmVzdGFzaG9wIiwiZW1pdCIsImV2ZW50VHlwZSIsInByb21pc2UiLCJsZW5ndGgiLCJwb3AiLCJhYm9ydCIsImFjdGlvbiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7a0JDaERlLFVBQVVBLEtBQVYsRUFBaUI7QUFBQTs7QUFDNUJBLFVBQU1DLGNBQU47QUFDQSxTQUFLQyxTQUFMLENBQWUsWUFBWTtBQUN2QixhQUFLQyxlQUFMLEdBQXVCLElBQXZCO0FBQ0gsS0FGRDtBQUdBQztBQUNBQyxNQUFFQyxJQUFGLENBQU87QUFDSEMsYUFBS1AsTUFBTVEsTUFBTixDQUFhQyxJQURmO0FBRUhDLGdCQUFRLE1BRkw7QUFHSEMsY0FBTUMsV0FISDtBQUlIQyxrQkFBVSxNQUpQO0FBS0hDLG9CQUFZLG9CQUFVQyxLQUFWLEVBQWlCO0FBQ3pCQyxxQkFBU0MsSUFBVCxDQUFjRixLQUFkO0FBQ0g7QUFQRSxLQUFQLEVBUUdHLElBUkgsQ0FRUyxnQkFBUTtBQUNiLGNBQUtoQixTQUFMLENBQWUsWUFBWTtBQUN2QixpQkFBS2lCLE9BQUwsQ0FBYUMsU0FBYixHQUF5QkMsS0FBS0MsSUFBOUI7QUFDQSxpQkFBS25CLGVBQUwsR0FBdUIsS0FBdkI7QUFDSCxTQUhEO0FBS0gsS0FkRCxFQWNHb0IsSUFkSCxDQWNRLFVBQUNGLElBQUQsRUFBVTtBQUNkRyxtQkFBV0MsSUFBWCxDQUFnQixhQUFoQixFQUErQjtBQUMzQkMsdUJBQVcscUJBRGdCO0FBRTNCTCxrQkFBTUE7QUFDTjtBQUgyQixTQUEvQjtBQUtILEtBcEJEO0FBcUJILEM7O0FBeENELElBQUlMLFdBQVcsRUFBZjtBQUNBLElBQUlaLHdCQUF3QixTQUF4QkEscUJBQXdCLEdBQU07QUFDOUIsUUFBSXVCLE9BQUo7QUFDQSxXQUFPWCxTQUFTWSxNQUFULEdBQWtCLENBQXpCLEVBQTRCO0FBQ3hCRCxrQkFBVVgsU0FBU2EsR0FBVCxFQUFWO0FBQ0FGLGdCQUFRRyxLQUFSO0FBQ0g7QUFDSixDQU5EO0FBT0EsSUFBSWxCLGNBQWM7QUFDZE4sVUFBTSxHQURRO0FBRWR5QixZQUFRO0FBRk0sQ0FBbEIsQyIsImZpbGUiOiIuLi9hc3NldHNcXGpzXFxjb3JlXFxjYXJ0XFx1cGRhdGVDYXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTYpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDE1NzhlMWYzNmI5ZWNlMGI5OTYyIiwibGV0IHByb21pc2VzID0gW11cbmxldCBhYm9ydFByZXZpb3VzUmVxdWVzdHMgPSAoKSA9PiB7XG4gICAgdmFyIHByb21pc2U7XG4gICAgd2hpbGUgKHByb21pc2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcHJvbWlzZSA9IHByb21pc2VzLnBvcCgpO1xuICAgICAgICBwcm9taXNlLmFib3J0KCk7XG4gICAgfVxufVxubGV0IHJlcXVlc3REYXRhID0ge1xuICAgIGFqYXg6ICcxJyxcbiAgICBhY3Rpb246ICd1cGRhdGUnXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB0aGlzLiRuZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudGhlbWVMb2FkZXJTaG93ID0gdHJ1ZVxuICAgIH0pXG4gICAgYWJvcnRQcmV2aW91c1JlcXVlc3RzKCk7XG4gICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiBldmVudC50YXJnZXQuaHJlZixcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGRhdGE6IHJlcXVlc3REYXRhLFxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbiAoanFYSFIpIHtcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2goanFYSFIpO1xuICAgICAgICB9XG4gICAgfSkudGhlbiggcmVzcCA9PiB7XG4gICAgICAgIHRoaXMuJG5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMubW9kdWxlcy5ibG9ja2NhcnQgPSByZXNwLmNhcnRcbiAgICAgICAgICAgIHRoaXMudGhlbWVMb2FkZXJTaG93ID0gZmFsc2VcbiAgICAgICAgfSlcblxuICAgIH0pLmZhaWwoKHJlc3ApID0+IHtcbiAgICAgICAgcHJlc3Rhc2hvcC5lbWl0KCdoYW5kbGVFcnJvcicsIHtcbiAgICAgICAgICAgIGV2ZW50VHlwZTogJ3VwZGF0ZVByb2R1Y3RJbkNhcnQnLFxuICAgICAgICAgICAgcmVzcDogcmVzcCxcbiAgICAgICAgICAgIC8vIGNhcnRBY3Rpb246IGNhcnRBY3Rpb24udHlwZVxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9jb3JlL2NhcnQvdXBkYXRlQ2FydC5qcyJdLCJzb3VyY2VSb290IjoiIn0=