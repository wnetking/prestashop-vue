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
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ({

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var _this = this;

  $("body").on("click", ".v--modal [data-link-action=\"display-register-form\"],\n    .v--modal .lost_password a,\n    .v--modal .go-login-page a", function (event) {
    event.preventDefault();
    _getAuthenticationTpl.getContent.call(_this, event.target.href);
  });

  $("body").on("submit", ".v--modal #login-form,\n    .v--modal #customer-form", function (event) {
    event.preventDefault();
    var query = $(event.target).serialize();

    _this.$nextTick(function () {
      this.themeLoaderShow = true;
    });

    $.post(event.target.action, query, null).then(function (resp) {
      if ($(resp).find("#header").html().trim() === "") {
        _this.$nextTick(function () {});

        _this.$nextTick(function () {
          this.themeLoaderShow = false;
          this.modules.singIn = $(resp).find("#content").html();
        });
      } else {
        _this.$nextTick(function () {
          this.themeLoaderShow = false;
        });
        location.reload();
      }
    });
  });
};

var _getAuthenticationTpl = __webpack_require__(7);

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (event) {
  event.preventDefault();

  getContent.call(this, prestashop.urls.pages.authentication);
};

function getContent(url) {
  var _this = this;

  var finalUrl = url.indexOf('?') === -1 ? url + '?content_only=1' : url + '&content_only=1';

  this.$nextTick(function () {
    this.themeLoaderShow = true;
  });

  $.get(finalUrl).then(function (resp) {
    _this.$nextTick(function () {
      this.themeLoaderShow = false;
      this.modules.singIn = $(resp).find("#content").html();
      this.$modal.show('singInModal');
    });
  }).fail(function (resp) {
    prestashop.emit("handleError", {
      eventType: "clickQuickView",
      resp: resp
    });
  });
}

exports.getContent = getContent;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTU3OGUxZjM2YjllY2UwYjk5NjIiLCJ3ZWJwYWNrOi8vLy4vanMvZ2xvYmFsLW1ldGhvZHMvbG9naW5Gb3JtTW9kYWxFdmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vanMvZ2xvYmFsLW1ldGhvZHMvZ2V0QXV0aGVudGljYXRpb25UcGwuanMiXSwibmFtZXMiOlsiJCIsIm9uIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImdldENvbnRlbnQiLCJjYWxsIiwidGFyZ2V0IiwiaHJlZiIsInF1ZXJ5Iiwic2VyaWFsaXplIiwiJG5leHRUaWNrIiwidGhlbWVMb2FkZXJTaG93IiwicG9zdCIsImFjdGlvbiIsInRoZW4iLCJyZXNwIiwiZmluZCIsImh0bWwiLCJ0cmltIiwibW9kdWxlcyIsInNpbmdJbiIsImxvY2F0aW9uIiwicmVsb2FkIiwicHJlc3Rhc2hvcCIsInVybHMiLCJwYWdlcyIsImF1dGhlbnRpY2F0aW9uIiwidXJsIiwiZmluYWxVcmwiLCJpbmRleE9mIiwiZ2V0IiwiJG1vZGFsIiwic2hvdyIsImZhaWwiLCJlbWl0IiwiZXZlbnRUeXBlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztrQkMzRGUsWUFBVztBQUFBOztBQUN4QkEsSUFBRSxNQUFGLEVBQVVDLEVBQVYsQ0FDRSxPQURGLDhIQUtFLGlCQUFTO0FBQ1BDLFVBQU1DLGNBQU47QUFDQUMscUNBQVdDLElBQVgsQ0FBZ0IsS0FBaEIsRUFBc0JILE1BQU1JLE1BQU4sQ0FBYUMsSUFBbkM7QUFDRCxHQVJIOztBQVdBUCxJQUFFLE1BQUYsRUFBVUMsRUFBVixDQUNFLFFBREYsMERBSUUsaUJBQVM7QUFDUEMsVUFBTUMsY0FBTjtBQUNBLFFBQUlLLFFBQVFSLEVBQUVFLE1BQU1JLE1BQVIsRUFBZ0JHLFNBQWhCLEVBQVo7O0FBRUEsVUFBS0MsU0FBTCxDQUFlLFlBQVc7QUFDeEIsV0FBS0MsZUFBTCxHQUF1QixJQUF2QjtBQUNELEtBRkQ7O0FBSUFYLE1BQUVZLElBQUYsQ0FBT1YsTUFBTUksTUFBTixDQUFhTyxNQUFwQixFQUE0QkwsS0FBNUIsRUFBbUMsSUFBbkMsRUFBeUNNLElBQXpDLENBQThDLGdCQUFRO0FBQ3BELFVBQ0VkLEVBQUVlLElBQUYsRUFDR0MsSUFESCxDQUNRLFNBRFIsRUFFR0MsSUFGSCxHQUdHQyxJQUhILE9BR2MsRUFKaEIsRUFLRTtBQUNBLGNBQUtSLFNBQUwsQ0FBZSxZQUFXLENBQUUsQ0FBNUI7O0FBRUEsY0FBS0EsU0FBTCxDQUFlLFlBQVc7QUFDeEIsZUFBS0MsZUFBTCxHQUF1QixLQUF2QjtBQUNBLGVBQUtRLE9BQUwsQ0FBYUMsTUFBYixHQUFzQnBCLEVBQUVlLElBQUYsRUFDbkJDLElBRG1CLENBQ2QsVUFEYyxFQUVuQkMsSUFGbUIsRUFBdEI7QUFHRCxTQUxEO0FBTUQsT0FkRCxNQWNPO0FBQ0wsY0FBS1AsU0FBTCxDQUFlLFlBQVc7QUFDeEIsZUFBS0MsZUFBTCxHQUF1QixLQUF2QjtBQUNELFNBRkQ7QUFHQVUsaUJBQVNDLE1BQVQ7QUFDRDtBQUNGLEtBckJEO0FBc0JELEdBbENIO0FBb0NELEM7O0FBbERELG1EOzs7Ozs7Ozs7Ozs7OztrQkNBZSxVQUFVcEIsS0FBVixFQUFpQjtBQUM5QkEsUUFBTUMsY0FBTjs7QUFFQUMsYUFBV0MsSUFBWCxDQUFnQixJQUFoQixFQUFzQmtCLFdBQVdDLElBQVgsQ0FBZ0JDLEtBQWhCLENBQXNCQyxjQUE1QztBQUNELEM7O0FBRUQsU0FBU3RCLFVBQVQsQ0FBb0J1QixHQUFwQixFQUF5QjtBQUFBOztBQUN2QixNQUFJQyxXQUFXRCxJQUFJRSxPQUFKLENBQVksR0FBWixNQUFxQixDQUFDLENBQXRCLEdBQTBCRixNQUFNLGlCQUFoQyxHQUFvREEsTUFBTSxpQkFBekU7O0FBRUEsT0FBS2pCLFNBQUwsQ0FBZSxZQUFZO0FBQ3pCLFNBQUtDLGVBQUwsR0FBdUIsSUFBdkI7QUFDRCxHQUZEOztBQUlBWCxJQUFFOEIsR0FBRixDQUFNRixRQUFOLEVBQ0dkLElBREgsQ0FDUSxnQkFBUTtBQUNaLFVBQUtKLFNBQUwsQ0FBZSxZQUFZO0FBQ3pCLFdBQUtDLGVBQUwsR0FBdUIsS0FBdkI7QUFDQSxXQUFLUSxPQUFMLENBQWFDLE1BQWIsR0FBc0JwQixFQUFFZSxJQUFGLEVBQVFDLElBQVIsQ0FBYSxVQUFiLEVBQXlCQyxJQUF6QixFQUF0QjtBQUNBLFdBQUtjLE1BQUwsQ0FBWUMsSUFBWixDQUFpQixhQUFqQjtBQUNELEtBSkQ7QUFLRCxHQVBILEVBUUdDLElBUkgsQ0FRUSxnQkFBUTtBQUNaVixlQUFXVyxJQUFYLENBQWdCLGFBQWhCLEVBQStCO0FBQzdCQyxpQkFBVyxnQkFEa0I7QUFFN0JwQixZQUFNQTtBQUZ1QixLQUEvQjtBQUlELEdBYkg7QUFjRDs7UUFFUVgsVSxHQUFBQSxVIiwiZmlsZSI6Ii4uL2Fzc2V0c1xcanNcXGdsb2JhbC1tZXRob2RzXFxsb2dpbkZvcm1Nb2RhbEV2ZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDI0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAxNTc4ZTFmMzZiOWVjZTBiOTk2MiIsImltcG9ydCB7IGdldENvbnRlbnQgfSBmcm9tIFwiLi9nZXRBdXRoZW50aWNhdGlvblRwbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgJChcImJvZHlcIikub24oXG4gICAgXCJjbGlja1wiLFxuICAgIGAudi0tbW9kYWwgW2RhdGEtbGluay1hY3Rpb249XCJkaXNwbGF5LXJlZ2lzdGVyLWZvcm1cIl0sXG4gICAgLnYtLW1vZGFsIC5sb3N0X3Bhc3N3b3JkIGEsXG4gICAgLnYtLW1vZGFsIC5nby1sb2dpbi1wYWdlIGFgLFxuICAgIGV2ZW50ID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBnZXRDb250ZW50LmNhbGwodGhpcywgZXZlbnQudGFyZ2V0LmhyZWYpO1xuICAgIH1cbiAgKTtcblxuICAkKFwiYm9keVwiKS5vbihcbiAgICBcInN1Ym1pdFwiLFxuICAgIGAudi0tbW9kYWwgI2xvZ2luLWZvcm0sXG4gICAgLnYtLW1vZGFsICNjdXN0b21lci1mb3JtYCxcbiAgICBldmVudCA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgbGV0IHF1ZXJ5ID0gJChldmVudC50YXJnZXQpLnNlcmlhbGl6ZSgpO1xuXG4gICAgICB0aGlzLiRuZXh0VGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy50aGVtZUxvYWRlclNob3cgPSB0cnVlO1xuICAgICAgfSk7XG5cbiAgICAgICQucG9zdChldmVudC50YXJnZXQuYWN0aW9uLCBxdWVyeSwgbnVsbCkudGhlbihyZXNwID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICQocmVzcClcbiAgICAgICAgICAgIC5maW5kKFwiI2hlYWRlclwiKVxuICAgICAgICAgICAgLmh0bWwoKVxuICAgICAgICAgICAgLnRyaW0oKSA9PT0gXCJcIlxuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLiRuZXh0VGljayhmdW5jdGlvbigpIHt9KTtcblxuICAgICAgICAgIHRoaXMuJG5leHRUaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy50aGVtZUxvYWRlclNob3cgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMubW9kdWxlcy5zaW5nSW4gPSAkKHJlc3ApXG4gICAgICAgICAgICAgIC5maW5kKFwiI2NvbnRlbnRcIilcbiAgICAgICAgICAgICAgLmh0bWwoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLiRuZXh0VGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMudGhlbWVMb2FkZXJTaG93ID0gZmFsc2U7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2dsb2JhbC1tZXRob2RzL2xvZ2luRm9ybU1vZGFsRXZlbnRzLmpzIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgZ2V0Q29udGVudC5jYWxsKHRoaXMsIHByZXN0YXNob3AudXJscy5wYWdlcy5hdXRoZW50aWNhdGlvbik7XG59XG5cbmZ1bmN0aW9uIGdldENvbnRlbnQodXJsKSB7XG4gIGxldCBmaW5hbFVybCA9IHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gdXJsICsgJz9jb250ZW50X29ubHk9MScgOiB1cmwgKyAnJmNvbnRlbnRfb25seT0xJ1xuXG4gIHRoaXMuJG5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnRoZW1lTG9hZGVyU2hvdyA9IHRydWU7XG4gIH0pO1xuXG4gICQuZ2V0KGZpbmFsVXJsKVxuICAgIC50aGVuKHJlc3AgPT4ge1xuICAgICAgdGhpcy4kbmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnRoZW1lTG9hZGVyU2hvdyA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1vZHVsZXMuc2luZ0luID0gJChyZXNwKS5maW5kKFwiI2NvbnRlbnRcIikuaHRtbCgpXG4gICAgICAgIHRoaXMuJG1vZGFsLnNob3coJ3NpbmdJbk1vZGFsJylcbiAgICAgIH0pO1xuICAgIH0pXG4gICAgLmZhaWwocmVzcCA9PiB7XG4gICAgICBwcmVzdGFzaG9wLmVtaXQoXCJoYW5kbGVFcnJvclwiLCB7XG4gICAgICAgIGV2ZW50VHlwZTogXCJjbGlja1F1aWNrVmlld1wiLFxuICAgICAgICByZXNwOiByZXNwXG4gICAgICB9KTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IHsgZ2V0Q29udGVudCB9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvZ2xvYmFsLW1ldGhvZHMvZ2V0QXV0aGVudGljYXRpb25UcGwuanMiXSwic291cmNlUm9vdCI6IiJ9