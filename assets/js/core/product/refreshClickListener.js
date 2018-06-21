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
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ({

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (event, extraParameters) {
  event.preventDefault();

  var $productRefresh = $(this);
  var eventType = 'updatedProductCombination';
  var updateEventName = 'customUpdateProduct';

  if (typeof extraParameters !== 'undefined' && extraParameters.eventType) {
    eventType = extraParameters.eventType;
  }

  var preview = (0, _getRequestParameter.getRequestParameter)('preview');
  if (preview !== null) {
    preview = '&preview=' + preview;
  } else {
    preview = '';
  }

  var query = $(event.target.form).serialize() + '&ajax=1&action=productrefresh' + preview;
  var actionURL = $(event.target.form).attr('action');

  $.post(actionURL, query, null, 'json').then(function (resp) {
    prestashop.emit(updateEventName, {
      reason: {
        productUrl: resp.productUrl
      },
      refreshUrl: $productRefresh.data('url-update'),
      eventType: eventType,
      resp: resp
    });
  });
};

var _getRequestParameter = __webpack_require__(9);

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRequestParameter = getRequestParameter;
function getRequestParameter(paramName) {
  var vars = {};
  window.location.href.replace(location.hash, '').replace(/[?&]+([^=&]+)=?([^&]*)?/gi, function (m, key, value) {
    vars[key] = value !== undefined ? value : '';
  });
  if (paramName !== undefined) {
    return vars[paramName] ? vars[paramName] : null;
  }

  return vars;
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTU3OGUxZjM2YjllY2UwYjk5NjIiLCJ3ZWJwYWNrOi8vLy4vanMvY29yZS9wcm9kdWN0L3JlZnJlc2hDbGlja0xpc3RlbmVyLmpzIiwid2VicGFjazovLy8uL2pzL2NvcmUvcHJvZHVjdC9nZXRSZXF1ZXN0UGFyYW1ldGVyLmpzIl0sIm5hbWVzIjpbImV2ZW50IiwiZXh0cmFQYXJhbWV0ZXJzIiwicHJldmVudERlZmF1bHQiLCIkcHJvZHVjdFJlZnJlc2giLCIkIiwiZXZlbnRUeXBlIiwidXBkYXRlRXZlbnROYW1lIiwicHJldmlldyIsInF1ZXJ5IiwidGFyZ2V0IiwiZm9ybSIsInNlcmlhbGl6ZSIsImFjdGlvblVSTCIsImF0dHIiLCJwb3N0IiwidGhlbiIsInJlc3AiLCJwcmVzdGFzaG9wIiwiZW1pdCIsInJlYXNvbiIsInByb2R1Y3RVcmwiLCJyZWZyZXNoVXJsIiwiZGF0YSIsImdldFJlcXVlc3RQYXJhbWV0ZXIiLCJwYXJhbU5hbWUiLCJ2YXJzIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwicmVwbGFjZSIsImhhc2giLCJtIiwia2V5IiwidmFsdWUiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O2tCQzNEZSxVQUFVQSxLQUFWLEVBQWlCQyxlQUFqQixFQUFrQztBQUMvQ0QsUUFBTUUsY0FBTjs7QUFFQSxNQUFJQyxrQkFBa0JDLEVBQUUsSUFBRixDQUF0QjtBQUNBLE1BQUlDLFlBQVksMkJBQWhCO0FBQ0EsTUFBSUMsa0JBQWtCLHFCQUF0Qjs7QUFFQSxNQUFJLE9BQU9MLGVBQVAsS0FBMkIsV0FBM0IsSUFBMENBLGdCQUFnQkksU0FBOUQsRUFBeUU7QUFDdkVBLGdCQUFZSixnQkFBZ0JJLFNBQTVCO0FBQ0Q7O0FBRUQsTUFBSUUsVUFBVSw4Q0FBb0IsU0FBcEIsQ0FBZDtBQUNBLE1BQUlBLFlBQVksSUFBaEIsRUFBc0I7QUFDcEJBLGNBQVUsY0FBY0EsT0FBeEI7QUFDRCxHQUZELE1BRU87QUFDTEEsY0FBVSxFQUFWO0FBQ0Q7O0FBRUQsTUFBSUMsUUFBUUosRUFBRUosTUFBTVMsTUFBTixDQUFhQyxJQUFmLEVBQXFCQyxTQUFyQixLQUFtQywrQkFBbkMsR0FBcUVKLE9BQWpGO0FBQ0EsTUFBSUssWUFBWVIsRUFBRUosTUFBTVMsTUFBTixDQUFhQyxJQUFmLEVBQXFCRyxJQUFyQixDQUEwQixRQUExQixDQUFoQjs7QUFFQVQsSUFBRVUsSUFBRixDQUFPRixTQUFQLEVBQWtCSixLQUFsQixFQUF5QixJQUF6QixFQUErQixNQUEvQixFQUF1Q08sSUFBdkMsQ0FBNEMsVUFBVUMsSUFBVixFQUFnQjtBQUMxREMsZUFBV0MsSUFBWCxDQUFnQlosZUFBaEIsRUFBaUM7QUFDL0JhLGNBQVE7QUFDTkMsb0JBQVlKLEtBQUtJO0FBRFgsT0FEdUI7QUFJL0JDLGtCQUFZbEIsZ0JBQWdCbUIsSUFBaEIsQ0FBcUIsWUFBckIsQ0FKbUI7QUFLL0JqQixpQkFBV0EsU0FMb0I7QUFNL0JXLFlBQU1BO0FBTnlCLEtBQWpDO0FBUUQsR0FURDtBQVVELEM7O0FBakNELGtEOzs7Ozs7Ozs7Ozs7O1FDQWdCTyxtQixHQUFBQSxtQjtBQUFULFNBQVNBLG1CQUFULENBQTZCQyxTQUE3QixFQUF3QztBQUMzQyxNQUFJQyxPQUFPLEVBQVg7QUFDQUMsU0FBT0MsUUFBUCxDQUFnQkMsSUFBaEIsQ0FBcUJDLE9BQXJCLENBQTZCRixTQUFTRyxJQUF0QyxFQUE0QyxFQUE1QyxFQUFnREQsT0FBaEQsQ0FDRSwyQkFERixFQUVFLFVBQVVFLENBQVYsRUFBYUMsR0FBYixFQUFrQkMsS0FBbEIsRUFBeUI7QUFDdkJSLFNBQUtPLEdBQUwsSUFBWUMsVUFBVUMsU0FBVixHQUFzQkQsS0FBdEIsR0FBOEIsRUFBMUM7QUFDRCxHQUpIO0FBTUEsTUFBSVQsY0FBY1UsU0FBbEIsRUFBNkI7QUFDM0IsV0FBT1QsS0FBS0QsU0FBTCxJQUFrQkMsS0FBS0QsU0FBTCxDQUFsQixHQUFvQyxJQUEzQztBQUNEOztBQUVELFNBQU9DLElBQVA7QUFDSCxDIiwiZmlsZSI6Ii4uL2Fzc2V0c1xcanNcXGNvcmVcXHByb2R1Y3RcXHJlZnJlc2hDbGlja0xpc3RlbmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDE1NzhlMWYzNmI5ZWNlMGI5OTYyIiwiaW1wb3J0IHsgZ2V0UmVxdWVzdFBhcmFtZXRlciB9IGZyb20gJy4vZ2V0UmVxdWVzdFBhcmFtZXRlcidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGV2ZW50LCBleHRyYVBhcmFtZXRlcnMpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gIHZhciAkcHJvZHVjdFJlZnJlc2ggPSAkKHRoaXMpXG4gIGxldCBldmVudFR5cGUgPSAndXBkYXRlZFByb2R1Y3RDb21iaW5hdGlvbidcbiAgbGV0IHVwZGF0ZUV2ZW50TmFtZSA9ICdjdXN0b21VcGRhdGVQcm9kdWN0J1xuXG4gIGlmICh0eXBlb2YgZXh0cmFQYXJhbWV0ZXJzICE9PSAndW5kZWZpbmVkJyAmJiBleHRyYVBhcmFtZXRlcnMuZXZlbnRUeXBlKSB7XG4gICAgZXZlbnRUeXBlID0gZXh0cmFQYXJhbWV0ZXJzLmV2ZW50VHlwZVxuICB9XG5cbiAgdmFyIHByZXZpZXcgPSBnZXRSZXF1ZXN0UGFyYW1ldGVyKCdwcmV2aWV3JylcbiAgaWYgKHByZXZpZXcgIT09IG51bGwpIHtcbiAgICBwcmV2aWV3ID0gJyZwcmV2aWV3PScgKyBwcmV2aWV3XG4gIH0gZWxzZSB7XG4gICAgcHJldmlldyA9ICcnXG4gIH1cblxuICB2YXIgcXVlcnkgPSAkKGV2ZW50LnRhcmdldC5mb3JtKS5zZXJpYWxpemUoKSArICcmYWpheD0xJmFjdGlvbj1wcm9kdWN0cmVmcmVzaCcgKyBwcmV2aWV3XG4gIHZhciBhY3Rpb25VUkwgPSAkKGV2ZW50LnRhcmdldC5mb3JtKS5hdHRyKCdhY3Rpb24nKVxuXG4gICQucG9zdChhY3Rpb25VUkwsIHF1ZXJ5LCBudWxsLCAnanNvbicpLnRoZW4oZnVuY3Rpb24gKHJlc3ApIHtcbiAgICBwcmVzdGFzaG9wLmVtaXQodXBkYXRlRXZlbnROYW1lLCB7XG4gICAgICByZWFzb246IHtcbiAgICAgICAgcHJvZHVjdFVybDogcmVzcC5wcm9kdWN0VXJsXG4gICAgICB9LFxuICAgICAgcmVmcmVzaFVybDogJHByb2R1Y3RSZWZyZXNoLmRhdGEoJ3VybC11cGRhdGUnKSxcbiAgICAgIGV2ZW50VHlwZTogZXZlbnRUeXBlLFxuICAgICAgcmVzcDogcmVzcFxuICAgIH0pXG4gIH0pXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9jb3JlL3Byb2R1Y3QvcmVmcmVzaENsaWNrTGlzdGVuZXIuanMiLCJleHBvcnQgZnVuY3Rpb24gZ2V0UmVxdWVzdFBhcmFtZXRlcihwYXJhbU5hbWUpIHtcbiAgICBsZXQgdmFycyA9IHt9O1xuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmLnJlcGxhY2UobG9jYXRpb24uaGFzaCwgJycpLnJlcGxhY2UoXG4gICAgICAvWz8mXSsoW149Jl0rKT0/KFteJl0qKT8vZ2ksXG4gICAgICBmdW5jdGlvbiAobSwga2V5LCB2YWx1ZSkge1xuICAgICAgICB2YXJzW2tleV0gPSB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiAnJztcbiAgICAgIH1cbiAgICApO1xuICAgIGlmIChwYXJhbU5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHZhcnNbcGFyYW1OYW1lXSA/IHZhcnNbcGFyYW1OYW1lXSA6IG51bGw7XG4gICAgfVxuICBcbiAgICByZXR1cm4gdmFycztcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9jb3JlL3Byb2R1Y3QvZ2V0UmVxdWVzdFBhcmFtZXRlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=