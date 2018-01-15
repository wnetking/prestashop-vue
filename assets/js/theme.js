/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(5);
	__webpack_require__(7);
	__webpack_require__(9);
	module.exports = __webpack_require__(11);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */,
/* 7 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 8 */,
/* 9 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _prestashop = __webpack_require__(12);

	var _prestashop2 = _interopRequireDefault(_prestashop);

	var _VueCarousel = __webpack_require__(13);

	var _VueCarousel2 = _interopRequireDefault(_VueCarousel);

	var _vue = __webpack_require__(14);

	var _vue2 = _interopRequireDefault(_vue);

	var _bootstrapVue = __webpack_require__(18);

	var _bootstrapVue2 = _interopRequireDefault(_bootstrapVue);

	var _vueSocialSharing = __webpack_require__(19);

	var _vueSocialSharing2 = _interopRequireDefault(_vueSocialSharing);

	var _vueAvatar = __webpack_require__(20);

	var _vueAvatar2 = _interopRequireDefault(_vueAvatar);

	var _vueStringFilter = __webpack_require__(21);

	var _vueStringFilter2 = _interopRequireDefault(_vueStringFilter);

	var _vuebar = __webpack_require__(22);

	var _vuebar2 = _interopRequireDefault(_vuebar);

	var _vImg = __webpack_require__(23);

	var _vImg2 = _interopRequireDefault(_vImg);

	var _filters = __webpack_require__(24);

	var _filters2 = _interopRequireDefault(_filters);

	var _components = __webpack_require__(26);

	var _components2 = _interopRequireDefault(_components);

	// global methods

	var _globalMethodsUpdateCart = __webpack_require__(33);

	var _globalMethodsUpdateCart2 = _interopRequireDefault(_globalMethodsUpdateCart);

	var _globalMethodsInitFacets = __webpack_require__(34);

	var _globalMethodsInitFacets2 = _interopRequireDefault(_globalMethodsInitFacets);

	var _globalMethodsShowCartModal = __webpack_require__(35);

	var _globalMethodsShowCartModal2 = _interopRequireDefault(_globalMethodsShowCartModal);

	var _globalMethodsHideCartModal = __webpack_require__(36);

	var _globalMethodsHideCartModal2 = _interopRequireDefault(_globalMethodsHideCartModal);

	var _globalMethodsChangeProductCoverImage = __webpack_require__(37);

	var _globalMethodsChangeProductCoverImage2 = _interopRequireDefault(_globalMethodsChangeProductCoverImage);

	var _globalMethodsProductZoom = __webpack_require__(38);

	var _globalMethodsProductZoom2 = _interopRequireDefault(_globalMethodsProductZoom);

	var _globalMethodsZoomLeave = __webpack_require__(39);

	var _globalMethodsZoomLeave2 = _interopRequireDefault(_globalMethodsZoomLeave);

	var _coreProduct = __webpack_require__(40);

	var _coreProduct2 = _interopRequireDefault(_coreProduct);

	var _globalMethodsSearchBarChange = __webpack_require__(45);

	var _globalMethodsSearchBarChange2 = _interopRequireDefault(_globalMethodsSearchBarChange);

	var _coreCart = __webpack_require__(50);

	// modules data init

	// import styles

	__webpack_require__(46);

	__webpack_require__(48);

	_prestashop2['default'].modules = _prestashop2['default'].modules || {};
	_prestashop2['default'].blockcart = _prestashop2['default'].blockcart || {};
	_prestashop2['default'].themeLoaderShow = false;
	_prestashop2['default'].blockcart = {
	  modalData: '<h1>Hello cart</h1>',
	  data: []
	};

	$('[data-module-name]').each(function () {
	  _prestashop2['default'].modules[$(this).data('module-name')] = $(this).data('module-data');
	});

	_vue2['default'].use(_bootstrapVue2['default']);
	_vue2['default'].use(_vueStringFilter2['default']);
	_vue2['default'].use(_vueSocialSharing2['default']);
	_vue2['default'].use(_vuebar2['default']);
	_vue2['default'].use(_vImg2['default']);

	(0, _filters2['default'])();
	(0, _components2['default'])();

	// init global vue app
	new _vue2['default']({
	  el: '#app',
	  data: _prestashop2['default'],
	  components: {
	    'avatar': _vueAvatar2['default'],
	    // VueCarousel connect from theme.yml
	    'carousel': window.VueCarousel.Carousel,
	    'slide': window.VueCarousel.Slide
	  },
	  methods: {
	    showCartModal: _globalMethodsShowCartModal2['default'],
	    hideCartModal: _globalMethodsHideCartModal2['default'],
	    updateCart: _globalMethodsUpdateCart2['default'],
	    initFacets: _globalMethodsInitFacets2['default'],
	    productCore: _coreProduct2['default'],
	    changeProductCoverImage: _globalMethodsChangeProductCoverImage2['default'],
	    productZoom: _globalMethodsProductZoom2['default'],
	    zoomLeave: _globalMethodsZoomLeave2['default'],
	    searchBarChange: _globalMethodsSearchBarChange2['default'],
	    updateCartCore: _coreCart.updateCartCore
	  },
	  created: function created() {
	    this.updateCart();
	    this.initFacets();
	    this.productCore();
	  }
	});

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	module.exports = prestashop;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	module.exports = VueCarousel;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
	 * Vue.js v2.5.13
	 * (c) 2014-2017 Evan You
	 * Released under the MIT License.
	 */ /*  */'use strict';Object.defineProperty(exports,'__esModule',{value:true});var emptyObject=Object.freeze({}); // these helpers produces better vm code in JS engines due to their
	// explicitness and function inlining
	function isUndef(v){return v === undefined || v === null;}function isDef(v){return v !== undefined && v !== null;}function isTrue(v){return v === true;}function isFalse(v){return v === false;} /**
	 * Check if value is primitive
	 */function isPrimitive(value){return typeof value === 'string' || typeof value === 'number' ||  // $flow-disable-line
	typeof value === 'symbol' || typeof value === 'boolean';} /**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 */function isObject(obj){return obj !== null && typeof obj === 'object';} /**
	 * Get the raw type string of a value e.g. [object Object]
	 */var _toString=Object.prototype.toString;function toRawType(value){return _toString.call(value).slice(8,-1);} /**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 */function isPlainObject(obj){return _toString.call(obj) === '[object Object]';}function isRegExp(v){return _toString.call(v) === '[object RegExp]';} /**
	 * Check if val is a valid array index.
	 */function isValidArrayIndex(val){var n=parseFloat(String(val));return n >= 0 && Math.floor(n) === n && isFinite(val);} /**
	 * Convert a value to a string that is actually rendered.
	 */function toString(val){return val == null?'':typeof val === 'object'?JSON.stringify(val,null,2):String(val);} /**
	 * Convert a input value to a number for persistence.
	 * If the conversion fails, return original string.
	 */function toNumber(val){var n=parseFloat(val);return isNaN(n)?val:n;} /**
	 * Make a map and return a function for checking if a key
	 * is in that map.
	 */function makeMap(str,expectsLowerCase){var map=Object.create(null);var list=str.split(',');for(var i=0;i < list.length;i++) {map[list[i]] = true;}return expectsLowerCase?function(val){return map[val.toLowerCase()];}:function(val){return map[val];};} /**
	 * Check if a tag is a built-in tag.
	 */var isBuiltInTag=makeMap('slot,component',true); /**
	 * Check if a attribute is a reserved attribute.
	 */var isReservedAttribute=makeMap('key,ref,slot,slot-scope,is'); /**
	 * Remove an item from an array
	 */function remove(arr,item){if(arr.length){var index=arr.indexOf(item);if(index > -1){return arr.splice(index,1);}}} /**
	 * Check whether the object has the property.
	 */var hasOwnProperty=Object.prototype.hasOwnProperty;function hasOwn(obj,key){return hasOwnProperty.call(obj,key);} /**
	 * Create a cached version of a pure function.
	 */function cached(fn){var cache=Object.create(null);return function cachedFn(str){var hit=cache[str];return hit || (cache[str] = fn(str));};} /**
	 * Camelize a hyphen-delimited string.
	 */var camelizeRE=/-(\w)/g;var camelize=cached(function(str){return str.replace(camelizeRE,function(_,c){return c?c.toUpperCase():'';});}); /**
	 * Capitalize a string.
	 */var capitalize=cached(function(str){return str.charAt(0).toUpperCase() + str.slice(1);}); /**
	 * Hyphenate a camelCase string.
	 */var hyphenateRE=/\B([A-Z])/g;var hyphenate=cached(function(str){return str.replace(hyphenateRE,'-$1').toLowerCase();}); /**
	 * Simple bind, faster than native
	 */function bind(fn,ctx){function boundFn(a){var l=arguments.length;return l?l > 1?fn.apply(ctx,arguments):fn.call(ctx,a):fn.call(ctx);} // record original fn length
	boundFn._length = fn.length;return boundFn;} /**
	 * Convert an Array-like object to a real Array.
	 */function toArray(list,start){start = start || 0;var i=list.length - start;var ret=new Array(i);while(i--) {ret[i] = list[i + start];}return ret;} /**
	 * Mix properties into target object.
	 */function extend(to,_from){for(var key in _from) {to[key] = _from[key];}return to;} /**
	 * Merge an Array of Objects into a single Object.
	 */function toObject(arr){var res={};for(var i=0;i < arr.length;i++) {if(arr[i]){extend(res,arr[i]);}}return res;} /**
	 * Perform no operation.
	 * Stubbing args to make Flow happy without leaving useless transpiled code
	 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
	 */function noop(a,b,c){} /**
	 * Always return false.
	 */var no=function no(a,b,c){return false;}; /**
	 * Return same value
	 */var identity=function identity(_){return _;}; /**
	 * Generate a static keys string from compiler modules.
	 */function genStaticKeys(modules){return modules.reduce(function(keys,m){return keys.concat(m.staticKeys || []);},[]).join(',');} /**
	 * Check if two values are loosely equal - that is,
	 * if they are plain objects, do they have the same shape?
	 */function looseEqual(a,b){if(a === b){return true;}var isObjectA=isObject(a);var isObjectB=isObject(b);if(isObjectA && isObjectB){try{var isArrayA=Array.isArray(a);var isArrayB=Array.isArray(b);if(isArrayA && isArrayB){return a.length === b.length && a.every(function(e,i){return looseEqual(e,b[i]);});}else if(!isArrayA && !isArrayB){var keysA=Object.keys(a);var keysB=Object.keys(b);return keysA.length === keysB.length && keysA.every(function(key){return looseEqual(a[key],b[key]);});}else { /* istanbul ignore next */return false;}}catch(e) { /* istanbul ignore next */return false;}}else if(!isObjectA && !isObjectB){return String(a) === String(b);}else {return false;}}function looseIndexOf(arr,val){for(var i=0;i < arr.length;i++) {if(looseEqual(arr[i],val)){return i;}}return -1;} /**
	 * Ensure a function is called only once.
	 */function once(fn){var called=false;return function(){if(!called){called = true;fn.apply(this,arguments);}};}var SSR_ATTR='data-server-rendered';var ASSET_TYPES=['component','directive','filter'];var LIFECYCLE_HOOKS=['beforeCreate','created','beforeMount','mounted','beforeUpdate','updated','beforeDestroy','destroyed','activated','deactivated','errorCaptured']; /*  */var config={ /**
	   * Option merge strategies (used in core/util/options)
	   */ // $flow-disable-line
	optionMergeStrategies:Object.create(null), /**
	   * Whether to suppress warnings.
	   */silent:false, /**
	   * Show production mode tip message on boot?
	   */productionTip:("develop") !== 'production', /**
	   * Whether to enable devtools
	   */devtools:("develop") !== 'production', /**
	   * Whether to record perf
	   */performance:false, /**
	   * Error handler for watcher errors
	   */errorHandler:null, /**
	   * Warn handler for watcher warns
	   */warnHandler:null, /**
	   * Ignore certain custom elements
	   */ignoredElements:[], /**
	   * Custom user key aliases for v-on
	   */ // $flow-disable-line
	keyCodes:Object.create(null), /**
	   * Check if a tag is reserved so that it cannot be registered as a
	   * component. This is platform-dependent and may be overwritten.
	   */isReservedTag:no, /**
	   * Check if an attribute is reserved so that it cannot be used as a component
	   * prop. This is platform-dependent and may be overwritten.
	   */isReservedAttr:no, /**
	   * Check if a tag is an unknown element.
	   * Platform-dependent.
	   */isUnknownElement:no, /**
	   * Get the namespace of an element
	   */getTagNamespace:noop, /**
	   * Parse the real tag name for the specific platform.
	   */parsePlatformTagName:identity, /**
	   * Check if an attribute must be bound using property, e.g. value
	   * Platform-dependent.
	   */mustUseProp:no, /**
	   * Exposed for legacy reasons
	   */_lifecycleHooks:LIFECYCLE_HOOKS}; /*  */ /**
	 * Check if a string starts with $ or _
	 */function isReserved(str){var c=(str + '').charCodeAt(0);return c === 0x24 || c === 0x5F;} /**
	 * Define a property.
	 */function def(obj,key,val,enumerable){Object.defineProperty(obj,key,{value:val,enumerable:!!enumerable,writable:true,configurable:true});} /**
	 * Parse simple path.
	 */var bailRE=/[^\w.$]/;function parsePath(path){if(bailRE.test(path)){return;}var segments=path.split('.');return function(obj){for(var i=0;i < segments.length;i++) {if(!obj){return;}obj = obj[segments[i]];}return obj;};} /*  */ // can we use __proto__?
	var hasProto=('__proto__' in {}); // Browser environment sniffing
	var inBrowser=typeof window !== 'undefined';var inWeex=typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;var weexPlatform=inWeex && WXEnvironment.platform.toLowerCase();var UA=inBrowser && window.navigator.userAgent.toLowerCase();var isIE=UA && /msie|trident/.test(UA);var isIE9=UA && UA.indexOf('msie 9.0') > 0;var isEdge=UA && UA.indexOf('edge/') > 0;var isAndroid=UA && UA.indexOf('android') > 0 || weexPlatform === 'android';var isIOS=UA && /iphone|ipad|ipod|ios/.test(UA) || weexPlatform === 'ios';var isChrome=UA && /chrome\/\d+/.test(UA) && !isEdge; // Firefox has a "watch" function on Object.prototype...
	var nativeWatch=({}).watch;var supportsPassive=false;if(inBrowser){try{var opts={};Object.defineProperty(opts,'passive',{get:function get(){ /* istanbul ignore next */supportsPassive = true;}}); // https://github.com/facebook/flow/issues/285
	window.addEventListener('test-passive',null,opts);}catch(e) {}} // this needs to be lazy-evaled because vue may be required before
	// vue-server-renderer can set VUE_ENV
	var _isServer;var isServerRendering=function isServerRendering(){if(_isServer === undefined){ /* istanbul ignore if */if(!inBrowser && typeof global !== 'undefined'){ // detect presence of vue-server-renderer and avoid
	// Webpack shimming the process
	_isServer = global['process'].env.VUE_ENV === 'server';}else {_isServer = false;}}return _isServer;}; // detect devtools
	var devtools=inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__; /* istanbul ignore next */function isNative(Ctor){return typeof Ctor === 'function' && /native code/.test(Ctor.toString());}var hasSymbol=typeof Symbol !== 'undefined' && isNative(Symbol) && typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);var _Set; /* istanbul ignore if */ // $flow-disable-line
	if(typeof Set !== 'undefined' && isNative(Set)){ // use native Set when available.
	_Set = Set;}else { // a non-standard Set polyfill that only works with primitive keys.
	_Set = (function(){function Set(){this.set = Object.create(null);}Set.prototype.has = function has(key){return this.set[key] === true;};Set.prototype.add = function add(key){this.set[key] = true;};Set.prototype.clear = function clear(){this.set = Object.create(null);};return Set;})();} /*  */var warn=noop;var tip=noop;var generateComponentTrace=noop; // work around flow check
	var formatComponentName=noop;if(true){var hasConsole=typeof console !== 'undefined';var classifyRE=/(?:^|[-_])(\w)/g;var classify=function classify(str){return str.replace(classifyRE,function(c){return c.toUpperCase();}).replace(/[-_]/g,'');};warn = function(msg,vm){var trace=vm?generateComponentTrace(vm):'';if(config.warnHandler){config.warnHandler.call(null,msg,vm,trace);}else if(hasConsole && !config.silent){console.error("[Vue warn]: " + msg + trace);}};tip = function(msg,vm){if(hasConsole && !config.silent){console.warn("[Vue tip]: " + msg + (vm?generateComponentTrace(vm):''));}};formatComponentName = function(vm,includeFile){if(vm.$root === vm){return '<Root>';}var options=typeof vm === 'function' && vm.cid != null?vm.options:vm._isVue?vm.$options || vm.constructor.options:vm || {};var name=options.name || options._componentTag;var file=options.__file;if(!name && file){var match=file.match(/([^/\\]+)\.vue$/);name = match && match[1];}return (name?"<" + classify(name) + ">":"<Anonymous>") + (file && includeFile !== false?" at " + file:'');};var repeat=function repeat(str,n){var res='';while(n) {if(n % 2 === 1){res += str;}if(n > 1){str += str;}n >>= 1;}return res;};generateComponentTrace = function(vm){if(vm._isVue && vm.$parent){var tree=[];var currentRecursiveSequence=0;while(vm) {if(tree.length > 0){var last=tree[tree.length - 1];if(last.constructor === vm.constructor){currentRecursiveSequence++;vm = vm.$parent;continue;}else if(currentRecursiveSequence > 0){tree[tree.length - 1] = [last,currentRecursiveSequence];currentRecursiveSequence = 0;}}tree.push(vm);vm = vm.$parent;}return '\n\nfound in\n\n' + tree.map(function(vm,i){return "" + (i === 0?'---> ':repeat(' ',5 + i * 2)) + (Array.isArray(vm)?formatComponentName(vm[0]) + "... (" + vm[1] + " recursive calls)":formatComponentName(vm));}).join('\n');}else {return "\n\n(found in " + formatComponentName(vm) + ")";}};} /*  */var uid=0; /**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 */var Dep=function Dep(){this.id = uid++;this.subs = [];};Dep.prototype.addSub = function addSub(sub){this.subs.push(sub);};Dep.prototype.removeSub = function removeSub(sub){remove(this.subs,sub);};Dep.prototype.depend = function depend(){if(Dep.target){Dep.target.addDep(this);}};Dep.prototype.notify = function notify(){ // stabilize the subscriber list first
	var subs=this.subs.slice();for(var i=0,l=subs.length;i < l;i++) {subs[i].update();}}; // the current target watcher being evaluated.
	// this is globally unique because there could be only one
	// watcher being evaluated at any time.
	Dep.target = null;var targetStack=[];function pushTarget(_target){if(Dep.target){targetStack.push(Dep.target);}Dep.target = _target;}function popTarget(){Dep.target = targetStack.pop();} /*  */var VNode=function VNode(tag,data,children,text,elm,context,componentOptions,asyncFactory){this.tag = tag;this.data = data;this.children = children;this.text = text;this.elm = elm;this.ns = undefined;this.context = context;this.fnContext = undefined;this.fnOptions = undefined;this.fnScopeId = undefined;this.key = data && data.key;this.componentOptions = componentOptions;this.componentInstance = undefined;this.parent = undefined;this.raw = false;this.isStatic = false;this.isRootInsert = true;this.isComment = false;this.isCloned = false;this.isOnce = false;this.asyncFactory = asyncFactory;this.asyncMeta = undefined;this.isAsyncPlaceholder = false;};var prototypeAccessors={child:{configurable:true}}; // DEPRECATED: alias for componentInstance for backwards compat.
	/* istanbul ignore next */prototypeAccessors.child.get = function(){return this.componentInstance;};Object.defineProperties(VNode.prototype,prototypeAccessors);var createEmptyVNode=function createEmptyVNode(text){if(text === void 0)text = '';var node=new VNode();node.text = text;node.isComment = true;return node;};function createTextVNode(val){return new VNode(undefined,undefined,undefined,String(val));} // optimized shallow clone
	// used for static nodes and slot nodes because they may be reused across
	// multiple renders, cloning them avoids errors when DOM manipulations rely
	// on their elm reference.
	function cloneVNode(vnode,deep){var componentOptions=vnode.componentOptions;var cloned=new VNode(vnode.tag,vnode.data,vnode.children,vnode.text,vnode.elm,vnode.context,componentOptions,vnode.asyncFactory);cloned.ns = vnode.ns;cloned.isStatic = vnode.isStatic;cloned.key = vnode.key;cloned.isComment = vnode.isComment;cloned.fnContext = vnode.fnContext;cloned.fnOptions = vnode.fnOptions;cloned.fnScopeId = vnode.fnScopeId;cloned.isCloned = true;if(deep){if(vnode.children){cloned.children = cloneVNodes(vnode.children,true);}if(componentOptions && componentOptions.children){componentOptions.children = cloneVNodes(componentOptions.children,true);}}return cloned;}function cloneVNodes(vnodes,deep){var len=vnodes.length;var res=new Array(len);for(var i=0;i < len;i++) {res[i] = cloneVNode(vnodes[i],deep);}return res;} /*
	 * not type checking this file because flow doesn't play well with
	 * dynamically accessing methods on Array prototype
	 */var arrayProto=Array.prototype;var arrayMethods=Object.create(arrayProto);['push','pop','shift','unshift','splice','sort','reverse'].forEach(function(method){ // cache original method
	var original=arrayProto[method];def(arrayMethods,method,function mutator(){var args=[],len=arguments.length;while(len--) args[len] = arguments[len];var result=original.apply(this,args);var ob=this.__ob__;var inserted;switch(method){case 'push':case 'unshift':inserted = args;break;case 'splice':inserted = args.slice(2);break;}if(inserted){ob.observeArray(inserted);} // notify change
	ob.dep.notify();return result;});}); /*  */var arrayKeys=Object.getOwnPropertyNames(arrayMethods); /**
	 * By default, when a reactive property is set, the new value is
	 * also converted to become reactive. However when passing down props,
	 * we don't want to force conversion because the value may be a nested value
	 * under a frozen data structure. Converting it would defeat the optimization.
	 */var observerState={shouldConvert:true}; /**
	 * Observer class that are attached to each observed
	 * object. Once attached, the observer converts target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatches updates.
	 */var Observer=function Observer(value){this.value = value;this.dep = new Dep();this.vmCount = 0;def(value,'__ob__',this);if(Array.isArray(value)){var augment=hasProto?protoAugment:copyAugment;augment(value,arrayMethods,arrayKeys);this.observeArray(value);}else {this.walk(value);}}; /**
	 * Walk through each property and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object.
	 */Observer.prototype.walk = function walk(obj){var keys=Object.keys(obj);for(var i=0;i < keys.length;i++) {defineReactive(obj,keys[i],obj[keys[i]]);}}; /**
	 * Observe a list of Array items.
	 */Observer.prototype.observeArray = function observeArray(items){for(var i=0,l=items.length;i < l;i++) {observe(items[i]);}}; // helpers
	/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 */function protoAugment(target,src,keys){ /* eslint-disable no-proto */target.__proto__ = src; /* eslint-enable no-proto */} /**
	 * Augment an target Object or Array by defining
	 * hidden properties.
	 */ /* istanbul ignore next */function copyAugment(target,src,keys){for(var i=0,l=keys.length;i < l;i++) {var key=keys[i];def(target,key,src[key]);}} /**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 */function observe(value,asRootData){if(!isObject(value) || value instanceof VNode){return;}var ob;if(hasOwn(value,'__ob__') && value.__ob__ instanceof Observer){ob = value.__ob__;}else if(observerState.shouldConvert && !isServerRendering() && (Array.isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue){ob = new Observer(value);}if(asRootData && ob){ob.vmCount++;}return ob;} /**
	 * Define a reactive property on an Object.
	 */function defineReactive(obj,key,val,customSetter,shallow){var dep=new Dep();var property=Object.getOwnPropertyDescriptor(obj,key);if(property && property.configurable === false){return;} // cater for pre-defined getter/setters
	var getter=property && property.get;var setter=property && property.set;var childOb=!shallow && observe(val);Object.defineProperty(obj,key,{enumerable:true,configurable:true,get:function reactiveGetter(){var value=getter?getter.call(obj):val;if(Dep.target){dep.depend();if(childOb){childOb.dep.depend();if(Array.isArray(value)){dependArray(value);}}}return value;},set:function reactiveSetter(newVal){var value=getter?getter.call(obj):val; /* eslint-disable no-self-compare */if(newVal === value || newVal !== newVal && value !== value){return;} /* eslint-enable no-self-compare */if(("develop") !== 'production' && customSetter){customSetter();}if(setter){setter.call(obj,newVal);}else {val = newVal;}childOb = !shallow && observe(newVal);dep.notify();}});} /**
	 * Set a property on an object. Adds the new property and
	 * triggers change notification if the property doesn't
	 * already exist.
	 */function set(target,key,val){if(Array.isArray(target) && isValidArrayIndex(key)){target.length = Math.max(target.length,key);target.splice(key,1,val);return val;}if(key in target && !(key in Object.prototype)){target[key] = val;return val;}var ob=target.__ob__;if(target._isVue || ob && ob.vmCount){("develop") !== 'production' && warn('Avoid adding reactive properties to a Vue instance or its root $data ' + 'at runtime - declare it upfront in the data option.');return val;}if(!ob){target[key] = val;return val;}defineReactive(ob.value,key,val);ob.dep.notify();return val;} /**
	 * Delete a property and trigger change if necessary.
	 */function del(target,key){if(Array.isArray(target) && isValidArrayIndex(key)){target.splice(key,1);return;}var ob=target.__ob__;if(target._isVue || ob && ob.vmCount){("develop") !== 'production' && warn('Avoid deleting properties on a Vue instance or its root $data ' + '- just set it to null.');return;}if(!hasOwn(target,key)){return;}delete target[key];if(!ob){return;}ob.dep.notify();} /**
	 * Collect dependencies on array elements when the array is touched, since
	 * we cannot intercept array element access like property getters.
	 */function dependArray(value){for(var e=void 0,i=0,l=value.length;i < l;i++) {e = value[i];e && e.__ob__ && e.__ob__.dep.depend();if(Array.isArray(e)){dependArray(e);}}} /*  */ /**
	 * Option overwriting strategies are functions that handle
	 * how to merge a parent option value and a child option
	 * value into the final value.
	 */var strats=config.optionMergeStrategies; /**
	 * Options with restrictions
	 */if(true){strats.el = strats.propsData = function(parent,child,vm,key){if(!vm){warn("option \"" + key + "\" can only be used during instance " + 'creation with the `new` keyword.');}return defaultStrat(parent,child);};} /**
	 * Helper that recursively merges two data objects together.
	 */function mergeData(to,from){if(!from){return to;}var key,toVal,fromVal;var keys=Object.keys(from);for(var i=0;i < keys.length;i++) {key = keys[i];toVal = to[key];fromVal = from[key];if(!hasOwn(to,key)){set(to,key,fromVal);}else if(isPlainObject(toVal) && isPlainObject(fromVal)){mergeData(toVal,fromVal);}}return to;} /**
	 * Data
	 */function mergeDataOrFn(parentVal,childVal,vm){if(!vm){ // in a Vue.extend merge, both should be functions
	if(!childVal){return parentVal;}if(!parentVal){return childVal;} // when parentVal & childVal are both present,
	// we need to return a function that returns the
	// merged result of both functions... no need to
	// check if parentVal is a function here because
	// it has to be a function to pass previous merges.
	return function mergedDataFn(){return mergeData(typeof childVal === 'function'?childVal.call(this,this):childVal,typeof parentVal === 'function'?parentVal.call(this,this):parentVal);};}else {return function mergedInstanceDataFn(){ // instance merge
	var instanceData=typeof childVal === 'function'?childVal.call(vm,vm):childVal;var defaultData=typeof parentVal === 'function'?parentVal.call(vm,vm):parentVal;if(instanceData){return mergeData(instanceData,defaultData);}else {return defaultData;}};}}strats.data = function(parentVal,childVal,vm){if(!vm){if(childVal && typeof childVal !== 'function'){("develop") !== 'production' && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.',vm);return parentVal;}return mergeDataOrFn(parentVal,childVal);}return mergeDataOrFn(parentVal,childVal,vm);}; /**
	 * Hooks and props are merged as arrays.
	 */function mergeHook(parentVal,childVal){return childVal?parentVal?parentVal.concat(childVal):Array.isArray(childVal)?childVal:[childVal]:parentVal;}LIFECYCLE_HOOKS.forEach(function(hook){strats[hook] = mergeHook;}); /**
	 * Assets
	 *
	 * When a vm is present (instance creation), we need to do
	 * a three-way merge between constructor options, instance
	 * options and parent options.
	 */function mergeAssets(parentVal,childVal,vm,key){var res=Object.create(parentVal || null);if(childVal){("develop") !== 'production' && assertObjectType(key,childVal,vm);return extend(res,childVal);}else {return res;}}ASSET_TYPES.forEach(function(type){strats[type + 's'] = mergeAssets;}); /**
	 * Watchers.
	 *
	 * Watchers hashes should not overwrite one
	 * another, so we merge them as arrays.
	 */strats.watch = function(parentVal,childVal,vm,key){ // work around Firefox's Object.prototype.watch...
	if(parentVal === nativeWatch){parentVal = undefined;}if(childVal === nativeWatch){childVal = undefined;} /* istanbul ignore if */if(!childVal){return Object.create(parentVal || null);}if(true){assertObjectType(key,childVal,vm);}if(!parentVal){return childVal;}var ret={};extend(ret,parentVal);for(var key$1 in childVal) {var parent=ret[key$1];var child=childVal[key$1];if(parent && !Array.isArray(parent)){parent = [parent];}ret[key$1] = parent?parent.concat(child):Array.isArray(child)?child:[child];}return ret;}; /**
	 * Other object hashes.
	 */strats.props = strats.methods = strats.inject = strats.computed = function(parentVal,childVal,vm,key){if(childVal && ("develop") !== 'production'){assertObjectType(key,childVal,vm);}if(!parentVal){return childVal;}var ret=Object.create(null);extend(ret,parentVal);if(childVal){extend(ret,childVal);}return ret;};strats.provide = mergeDataOrFn; /**
	 * Default strategy.
	 */var defaultStrat=function defaultStrat(parentVal,childVal){return childVal === undefined?parentVal:childVal;}; /**
	 * Validate component names
	 */function checkComponents(options){for(var key in options.components) {validateComponentName(key);}}function validateComponentName(name){if(!/^[a-zA-Z][\w-]*$/.test(name)){warn('Invalid component name: "' + name + '". Component names ' + 'can only contain alphanumeric characters and the hyphen, ' + 'and must start with a letter.');}if(isBuiltInTag(name) || config.isReservedTag(name)){warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + name);}} /**
	 * Ensure all props option syntax are normalized into the
	 * Object-based format.
	 */function normalizeProps(options,vm){var props=options.props;if(!props){return;}var res={};var i,val,name;if(Array.isArray(props)){i = props.length;while(i--) {val = props[i];if(typeof val === 'string'){name = camelize(val);res[name] = {type:null};}else if(true){warn('props must be strings when using array syntax.');}}}else if(isPlainObject(props)){for(var key in props) {val = props[key];name = camelize(key);res[name] = isPlainObject(val)?val:{type:val};}}else if(true){warn("Invalid value for option \"props\": expected an Array or an Object, " + "but got " + toRawType(props) + ".",vm);}options.props = res;} /**
	 * Normalize all injections into Object-based format
	 */function normalizeInject(options,vm){var inject=options.inject;if(!inject){return;}var normalized=options.inject = {};if(Array.isArray(inject)){for(var i=0;i < inject.length;i++) {normalized[inject[i]] = {from:inject[i]};}}else if(isPlainObject(inject)){for(var key in inject) {var val=inject[key];normalized[key] = isPlainObject(val)?extend({from:key},val):{from:val};}}else if(true){warn("Invalid value for option \"inject\": expected an Array or an Object, " + "but got " + toRawType(inject) + ".",vm);}} /**
	 * Normalize raw function directives into object format.
	 */function normalizeDirectives(options){var dirs=options.directives;if(dirs){for(var key in dirs) {var def=dirs[key];if(typeof def === 'function'){dirs[key] = {bind:def,update:def};}}}}function assertObjectType(name,value,vm){if(!isPlainObject(value)){warn("Invalid value for option \"" + name + "\": expected an Object, " + "but got " + toRawType(value) + ".",vm);}} /**
	 * Merge two option objects into a new one.
	 * Core utility used in both instantiation and inheritance.
	 */function mergeOptions(parent,child,vm){if(true){checkComponents(child);}if(typeof child === 'function'){child = child.options;}normalizeProps(child,vm);normalizeInject(child,vm);normalizeDirectives(child);var extendsFrom=child['extends'];if(extendsFrom){parent = mergeOptions(parent,extendsFrom,vm);}if(child.mixins){for(var i=0,l=child.mixins.length;i < l;i++) {parent = mergeOptions(parent,child.mixins[i],vm);}}var options={};var key;for(key in parent) {mergeField(key);}for(key in child) {if(!hasOwn(parent,key)){mergeField(key);}}function mergeField(key){var strat=strats[key] || defaultStrat;options[key] = strat(parent[key],child[key],vm,key);}return options;} /**
	 * Resolve an asset.
	 * This function is used because child instances need access
	 * to assets defined in its ancestor chain.
	 */function resolveAsset(options,type,id,warnMissing){ /* istanbul ignore if */if(typeof id !== 'string'){return;}var assets=options[type]; // check local registration variations first
	if(hasOwn(assets,id)){return assets[id];}var camelizedId=camelize(id);if(hasOwn(assets,camelizedId)){return assets[camelizedId];}var PascalCaseId=capitalize(camelizedId);if(hasOwn(assets,PascalCaseId)){return assets[PascalCaseId];} // fallback to prototype chain
	var res=assets[id] || assets[camelizedId] || assets[PascalCaseId];if(("develop") !== 'production' && warnMissing && !res){warn('Failed to resolve ' + type.slice(0,-1) + ': ' + id,options);}return res;} /*  */function validateProp(key,propOptions,propsData,vm){var prop=propOptions[key];var absent=!hasOwn(propsData,key);var value=propsData[key]; // handle boolean props
	if(isType(Boolean,prop.type)){if(absent && !hasOwn(prop,'default')){value = false;}else if(!isType(String,prop.type) && (value === '' || value === hyphenate(key))){value = true;}} // check default value
	if(value === undefined){value = getPropDefaultValue(vm,prop,key); // since the default value is a fresh copy,
	// make sure to observe it.
	var prevShouldConvert=observerState.shouldConvert;observerState.shouldConvert = true;observe(value);observerState.shouldConvert = prevShouldConvert;}if(true){assertProp(prop,key,value,vm,absent);}return value;} /**
	 * Get the default value of a prop.
	 */function getPropDefaultValue(vm,prop,key){ // no default, return undefined
	if(!hasOwn(prop,'default')){return undefined;}var def=prop['default']; // warn against non-factory defaults for Object & Array
	if(("develop") !== 'production' && isObject(def)){warn('Invalid default value for prop "' + key + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.',vm);} // the raw prop value was also undefined from previous render,
	// return previous default value to avoid unnecessary watcher trigger
	if(vm && vm.$options.propsData && vm.$options.propsData[key] === undefined && vm._props[key] !== undefined){return vm._props[key];} // call factory function for non-Function types
	// a value is Function if its prototype is function even across different execution context
	return typeof def === 'function' && getType(prop.type) !== 'Function'?def.call(vm):def;} /**
	 * Assert whether a prop is valid.
	 */function assertProp(prop,name,value,vm,absent){if(prop.required && absent){warn('Missing required prop: "' + name + '"',vm);return;}if(value == null && !prop.required){return;}var type=prop.type;var valid=!type || type === true;var expectedTypes=[];if(type){if(!Array.isArray(type)){type = [type];}for(var i=0;i < type.length && !valid;i++) {var assertedType=assertType(value,type[i]);expectedTypes.push(assertedType.expectedType || '');valid = assertedType.valid;}}if(!valid){warn("Invalid prop: type check failed for prop \"" + name + "\"." + " Expected " + expectedTypes.map(capitalize).join(', ') + ", got " + toRawType(value) + ".",vm);return;}var validator=prop.validator;if(validator){if(!validator(value)){warn('Invalid prop: custom validator check failed for prop "' + name + '".',vm);}}}var simpleCheckRE=/^(String|Number|Boolean|Function|Symbol)$/;function assertType(value,type){var valid;var expectedType=getType(type);if(simpleCheckRE.test(expectedType)){var t=typeof value;valid = t === expectedType.toLowerCase(); // for primitive wrapper objects
	if(!valid && t === 'object'){valid = value instanceof type;}}else if(expectedType === 'Object'){valid = isPlainObject(value);}else if(expectedType === 'Array'){valid = Array.isArray(value);}else {valid = value instanceof type;}return {valid:valid,expectedType:expectedType};} /**
	 * Use function string name to check built-in types,
	 * because a simple equality check will fail when running
	 * across different vms / iframes.
	 */function getType(fn){var match=fn && fn.toString().match(/^\s*function (\w+)/);return match?match[1]:'';}function isType(type,fn){if(!Array.isArray(fn)){return getType(fn) === getType(type);}for(var i=0,len=fn.length;i < len;i++) {if(getType(fn[i]) === getType(type)){return true;}} /* istanbul ignore next */return false;} /*  */function handleError(err,vm,info){if(vm){var cur=vm;while(cur = cur.$parent) {var hooks=cur.$options.errorCaptured;if(hooks){for(var i=0;i < hooks.length;i++) {try{var capture=hooks[i].call(cur,err,vm,info) === false;if(capture){return;}}catch(e) {globalHandleError(e,cur,'errorCaptured hook');}}}}}globalHandleError(err,vm,info);}function globalHandleError(err,vm,info){if(config.errorHandler){try{return config.errorHandler.call(null,err,vm,info);}catch(e) {logError(e,null,'config.errorHandler');}}logError(err,vm,info);}function logError(err,vm,info){if(true){warn("Error in " + info + ": \"" + err.toString() + "\"",vm);} /* istanbul ignore else */if((inBrowser || inWeex) && typeof console !== 'undefined'){console.error(err);}else {throw err;}} /*  */ /* globals MessageChannel */var callbacks=[];var pending=false;function flushCallbacks(){pending = false;var copies=callbacks.slice(0);callbacks.length = 0;for(var i=0;i < copies.length;i++) {copies[i]();}} // Here we have async deferring wrappers using both micro and macro tasks.
	// In < 2.4 we used micro tasks everywhere, but there are some scenarios where
	// micro tasks have too high a priority and fires in between supposedly
	// sequential events (e.g. #4521, #6690) or even between bubbling of the same
	// event (#6566). However, using macro tasks everywhere also has subtle problems
	// when state is changed right before repaint (e.g. #6813, out-in transitions).
	// Here we use micro task by default, but expose a way to force macro task when
	// needed (e.g. in event handlers attached by v-on).
	var microTimerFunc;var macroTimerFunc;var useMacroTask=false; // Determine (macro) Task defer implementation.
	// Technically setImmediate should be the ideal choice, but it's only available
	// in IE. The only polyfill that consistently queues the callback after all DOM
	// events triggered in the same loop is by using MessageChannel.
	/* istanbul ignore if */if(typeof setImmediate !== 'undefined' && isNative(setImmediate)){macroTimerFunc = function(){setImmediate(flushCallbacks);};}else if(typeof MessageChannel !== 'undefined' && (isNative(MessageChannel) ||  // PhantomJS
	MessageChannel.toString() === '[object MessageChannelConstructor]')){var channel=new MessageChannel();var port=channel.port2;channel.port1.onmessage = flushCallbacks;macroTimerFunc = function(){port.postMessage(1);};}else { /* istanbul ignore next */macroTimerFunc = function(){setTimeout(flushCallbacks,0);};} // Determine MicroTask defer implementation.
	/* istanbul ignore next, $flow-disable-line */if(typeof Promise !== 'undefined' && isNative(Promise)){var p=Promise.resolve();microTimerFunc = function(){p.then(flushCallbacks); // in problematic UIWebViews, Promise.then doesn't completely break, but
	// it can get stuck in a weird state where callbacks are pushed into the
	// microtask queue but the queue isn't being flushed, until the browser
	// needs to do some other work, e.g. handle a timer. Therefore we can
	// "force" the microtask queue to be flushed by adding an empty timer.
	if(isIOS){setTimeout(noop);}};}else { // fallback to macro
	microTimerFunc = macroTimerFunc;} /**
	 * Wrap a function so that if any code inside triggers state change,
	 * the changes are queued using a Task instead of a MicroTask.
	 */function withMacroTask(fn){return fn._withTask || (fn._withTask = function(){useMacroTask = true;var res=fn.apply(null,arguments);useMacroTask = false;return res;});}function nextTick(cb,ctx){var _resolve;callbacks.push(function(){if(cb){try{cb.call(ctx);}catch(e) {handleError(e,ctx,'nextTick');}}else if(_resolve){_resolve(ctx);}});if(!pending){pending = true;if(useMacroTask){macroTimerFunc();}else {microTimerFunc();}} // $flow-disable-line
	if(!cb && typeof Promise !== 'undefined'){return new Promise(function(resolve){_resolve = resolve;});}} /*  */var mark;var measure;if(true){var perf=inBrowser && window.performance; /* istanbul ignore if */if(perf && perf.mark && perf.measure && perf.clearMarks && perf.clearMeasures){mark = function(tag){return perf.mark(tag);};measure = function(name,startTag,endTag){perf.measure(name,startTag,endTag);perf.clearMarks(startTag);perf.clearMarks(endTag);perf.clearMeasures(name);};}} /* not type checking this file because flow doesn't play well with Proxy */var initProxy;if(true){var allowedGlobals=makeMap('Infinity,undefined,NaN,isFinite,isNaN,' + 'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' + 'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' + 'require' // for Webpack/Browserify
	);var warnNonPresent=function warnNonPresent(target,key){warn("Property or method \"" + key + "\" is not defined on the instance but " + 'referenced during render. Make sure that this property is reactive, ' + 'either in the data option, or for class-based components, by ' + 'initializing the property. ' + 'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',target);};var hasProxy=typeof Proxy !== 'undefined' && Proxy.toString().match(/native code/);if(hasProxy){var isBuiltInModifier=makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');config.keyCodes = new Proxy(config.keyCodes,{set:function set(target,key,value){if(isBuiltInModifier(key)){warn("Avoid overwriting built-in modifier in config.keyCodes: ." + key);return false;}else {target[key] = value;return true;}}});}var hasHandler={has:function has(target,key){var has=(key in target);var isAllowed=allowedGlobals(key) || key.charAt(0) === '_';if(!has && !isAllowed){warnNonPresent(target,key);}return has || !isAllowed;}};var getHandler={get:function get(target,key){if(typeof key === 'string' && !(key in target)){warnNonPresent(target,key);}return target[key];}};initProxy = function initProxy(vm){if(hasProxy){ // determine which proxy handler to use
	var options=vm.$options;var handlers=options.render && options.render._withStripped?getHandler:hasHandler;vm._renderProxy = new Proxy(vm,handlers);}else {vm._renderProxy = vm;}};} /*  */var seenObjects=new _Set(); /**
	 * Recursively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 */function traverse(val){_traverse(val,seenObjects);seenObjects.clear();}function _traverse(val,seen){var i,keys;var isA=Array.isArray(val);if(!isA && !isObject(val) || Object.isFrozen(val)){return;}if(val.__ob__){var depId=val.__ob__.dep.id;if(seen.has(depId)){return;}seen.add(depId);}if(isA){i = val.length;while(i--) {_traverse(val[i],seen);}}else {keys = Object.keys(val);i = keys.length;while(i--) {_traverse(val[keys[i]],seen);}}} /*  */var normalizeEvent=cached(function(name){var passive=name.charAt(0) === '&';name = passive?name.slice(1):name;var once$$1=name.charAt(0) === '~'; // Prefixed last, checked first
	name = once$$1?name.slice(1):name;var capture=name.charAt(0) === '!';name = capture?name.slice(1):name;return {name:name,once:once$$1,capture:capture,passive:passive};});function createFnInvoker(fns){function invoker(){var arguments$1=arguments;var fns=invoker.fns;if(Array.isArray(fns)){var cloned=fns.slice();for(var i=0;i < cloned.length;i++) {cloned[i].apply(null,arguments$1);}}else { // return handler return value for single handlers
	return fns.apply(null,arguments);}}invoker.fns = fns;return invoker;}function updateListeners(on,oldOn,add,remove$$1,vm){var name,def,cur,old,event;for(name in on) {def = cur = on[name];old = oldOn[name];event = normalizeEvent(name); /* istanbul ignore if */if(isUndef(cur)){("develop") !== 'production' && warn("Invalid handler for event \"" + event.name + "\": got " + String(cur),vm);}else if(isUndef(old)){if(isUndef(cur.fns)){cur = on[name] = createFnInvoker(cur);}add(event.name,cur,event.once,event.capture,event.passive,event.params);}else if(cur !== old){old.fns = cur;on[name] = old;}}for(name in oldOn) {if(isUndef(on[name])){event = normalizeEvent(name);remove$$1(event.name,oldOn[name],event.capture);}}} /*  */function mergeVNodeHook(def,hookKey,hook){if(def instanceof VNode){def = def.data.hook || (def.data.hook = {});}var invoker;var oldHook=def[hookKey];function wrappedHook(){hook.apply(this,arguments); // important: remove merged hook to ensure it's called only once
	// and prevent memory leak
	remove(invoker.fns,wrappedHook);}if(isUndef(oldHook)){ // no existing hook
	invoker = createFnInvoker([wrappedHook]);}else { /* istanbul ignore if */if(isDef(oldHook.fns) && isTrue(oldHook.merged)){ // already a merged invoker
	invoker = oldHook;invoker.fns.push(wrappedHook);}else { // existing plain hook
	invoker = createFnInvoker([oldHook,wrappedHook]);}}invoker.merged = true;def[hookKey] = invoker;} /*  */function extractPropsFromVNodeData(data,Ctor,tag){ // we are only extracting raw values here.
	// validation and default values are handled in the child
	// component itself.
	var propOptions=Ctor.options.props;if(isUndef(propOptions)){return;}var res={};var attrs=data.attrs;var props=data.props;if(isDef(attrs) || isDef(props)){for(var key in propOptions) {var altKey=hyphenate(key);if(true){var keyInLowerCase=key.toLowerCase();if(key !== keyInLowerCase && attrs && hasOwn(attrs,keyInLowerCase)){tip("Prop \"" + keyInLowerCase + "\" is passed to component " + formatComponentName(tag || Ctor) + ", but the declared prop name is" + " \"" + key + "\". " + "Note that HTML attributes are case-insensitive and camelCased " + "props need to use their kebab-case equivalents when using in-DOM " + "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\".");}}checkProp(res,props,key,altKey,true) || checkProp(res,attrs,key,altKey,false);}}return res;}function checkProp(res,hash,key,altKey,preserve){if(isDef(hash)){if(hasOwn(hash,key)){res[key] = hash[key];if(!preserve){delete hash[key];}return true;}else if(hasOwn(hash,altKey)){res[key] = hash[altKey];if(!preserve){delete hash[altKey];}return true;}}return false;} /*  */ // The template compiler attempts to minimize the need for normalization by
	// statically analyzing the template at compile time.
	//
	// For plain HTML markup, normalization can be completely skipped because the
	// generated render function is guaranteed to return Array<VNode>. There are
	// two cases where extra normalization is needed:
	// 1. When the children contains components - because a functional component
	// may return an Array instead of a single root. In this case, just a simple
	// normalization is needed - if any child is an Array, we flatten the whole
	// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
	// because functional components already normalize their own children.
	function simpleNormalizeChildren(children){for(var i=0;i < children.length;i++) {if(Array.isArray(children[i])){return Array.prototype.concat.apply([],children);}}return children;} // 2. When the children contains constructs that always generated nested Arrays,
	// e.g. <template>, <slot>, v-for, or when the children is provided by user
	// with hand-written render functions / JSX. In such cases a full normalization
	// is needed to cater to all possible types of children values.
	function normalizeChildren(children){return isPrimitive(children)?[createTextVNode(children)]:Array.isArray(children)?normalizeArrayChildren(children):undefined;}function isTextNode(node){return isDef(node) && isDef(node.text) && isFalse(node.isComment);}function normalizeArrayChildren(children,nestedIndex){var res=[];var i,c,lastIndex,last;for(i = 0;i < children.length;i++) {c = children[i];if(isUndef(c) || typeof c === 'boolean'){continue;}lastIndex = res.length - 1;last = res[lastIndex]; //  nested
	if(Array.isArray(c)){if(c.length > 0){c = normalizeArrayChildren(c,(nestedIndex || '') + "_" + i); // merge adjacent text nodes
	if(isTextNode(c[0]) && isTextNode(last)){res[lastIndex] = createTextVNode(last.text + c[0].text);c.shift();}res.push.apply(res,c);}}else if(isPrimitive(c)){if(isTextNode(last)){ // merge adjacent text nodes
	// this is necessary for SSR hydration because text nodes are
	// essentially merged when rendered to HTML strings
	res[lastIndex] = createTextVNode(last.text + c);}else if(c !== ''){ // convert primitive to vnode
	res.push(createTextVNode(c));}}else {if(isTextNode(c) && isTextNode(last)){ // merge adjacent text nodes
	res[lastIndex] = createTextVNode(last.text + c.text);}else { // default key for nested array children (likely generated by v-for)
	if(isTrue(children._isVList) && isDef(c.tag) && isUndef(c.key) && isDef(nestedIndex)){c.key = "__vlist" + nestedIndex + "_" + i + "__";}res.push(c);}}}return res;} /*  */function ensureCtor(comp,base){if(comp.__esModule || hasSymbol && comp[Symbol.toStringTag] === 'Module'){comp = comp['default'];}return isObject(comp)?base.extend(comp):comp;}function createAsyncPlaceholder(factory,data,context,children,tag){var node=createEmptyVNode();node.asyncFactory = factory;node.asyncMeta = {data:data,context:context,children:children,tag:tag};return node;}function resolveAsyncComponent(factory,baseCtor,context){if(isTrue(factory.error) && isDef(factory.errorComp)){return factory.errorComp;}if(isDef(factory.resolved)){return factory.resolved;}if(isTrue(factory.loading) && isDef(factory.loadingComp)){return factory.loadingComp;}if(isDef(factory.contexts)){ // already pending
	factory.contexts.push(context);}else {var contexts=factory.contexts = [context];var sync=true;var forceRender=function forceRender(){for(var i=0,l=contexts.length;i < l;i++) {contexts[i].$forceUpdate();}};var resolve=once(function(res){ // cache resolved
	factory.resolved = ensureCtor(res,baseCtor); // invoke callbacks only if this is not a synchronous resolve
	// (async resolves are shimmed as synchronous during SSR)
	if(!sync){forceRender();}});var reject=once(function(reason){("develop") !== 'production' && warn("Failed to resolve async component: " + String(factory) + (reason?"\nReason: " + reason:''));if(isDef(factory.errorComp)){factory.error = true;forceRender();}});var res=factory(resolve,reject);if(isObject(res)){if(typeof res.then === 'function'){ // () => Promise
	if(isUndef(factory.resolved)){res.then(resolve,reject);}}else if(isDef(res.component) && typeof res.component.then === 'function'){res.component.then(resolve,reject);if(isDef(res.error)){factory.errorComp = ensureCtor(res.error,baseCtor);}if(isDef(res.loading)){factory.loadingComp = ensureCtor(res.loading,baseCtor);if(res.delay === 0){factory.loading = true;}else {setTimeout(function(){if(isUndef(factory.resolved) && isUndef(factory.error)){factory.loading = true;forceRender();}},res.delay || 200);}}if(isDef(res.timeout)){setTimeout(function(){if(isUndef(factory.resolved)){reject( true?"timeout (" + res.timeout + "ms)":null);}},res.timeout);}}}sync = false; // return in case resolved synchronously
	return factory.loading?factory.loadingComp:factory.resolved;}} /*  */function isAsyncPlaceholder(node){return node.isComment && node.asyncFactory;} /*  */function getFirstComponentChild(children){if(Array.isArray(children)){for(var i=0;i < children.length;i++) {var c=children[i];if(isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))){return c;}}}} /*  */ /*  */function initEvents(vm){vm._events = Object.create(null);vm._hasHookEvent = false; // init parent attached events
	var listeners=vm.$options._parentListeners;if(listeners){updateComponentListeners(vm,listeners);}}var target;function add(event,fn,once){if(once){target.$once(event,fn);}else {target.$on(event,fn);}}function remove$1(event,fn){target.$off(event,fn);}function updateComponentListeners(vm,listeners,oldListeners){target = vm;updateListeners(listeners,oldListeners || {},add,remove$1,vm);target = undefined;}function eventsMixin(Vue){var hookRE=/^hook:/;Vue.prototype.$on = function(event,fn){var this$1=this;var vm=this;if(Array.isArray(event)){for(var i=0,l=event.length;i < l;i++) {this$1.$on(event[i],fn);}}else {(vm._events[event] || (vm._events[event] = [])).push(fn); // optimize hook:event cost by using a boolean flag marked at registration
	// instead of a hash lookup
	if(hookRE.test(event)){vm._hasHookEvent = true;}}return vm;};Vue.prototype.$once = function(event,fn){var vm=this;function on(){vm.$off(event,on);fn.apply(vm,arguments);}on.fn = fn;vm.$on(event,on);return vm;};Vue.prototype.$off = function(event,fn){var this$1=this;var vm=this; // all
	if(!arguments.length){vm._events = Object.create(null);return vm;} // array of events
	if(Array.isArray(event)){for(var i=0,l=event.length;i < l;i++) {this$1.$off(event[i],fn);}return vm;} // specific event
	var cbs=vm._events[event];if(!cbs){return vm;}if(!fn){vm._events[event] = null;return vm;}if(fn){ // specific handler
	var cb;var i$1=cbs.length;while(i$1--) {cb = cbs[i$1];if(cb === fn || cb.fn === fn){cbs.splice(i$1,1);break;}}}return vm;};Vue.prototype.$emit = function(event){var vm=this;if(true){var lowerCaseEvent=event.toLowerCase();if(lowerCaseEvent !== event && vm._events[lowerCaseEvent]){tip("Event \"" + lowerCaseEvent + "\" is emitted in component " + formatComponentName(vm) + " but the handler is registered for \"" + event + "\". " + "Note that HTML attributes are case-insensitive and you cannot use " + "v-on to listen to camelCase events when using in-DOM templates. " + "You should probably use \"" + hyphenate(event) + "\" instead of \"" + event + "\".");}}var cbs=vm._events[event];if(cbs){cbs = cbs.length > 1?toArray(cbs):cbs;var args=toArray(arguments,1);for(var i=0,l=cbs.length;i < l;i++) {try{cbs[i].apply(vm,args);}catch(e) {handleError(e,vm,"event handler for \"" + event + "\"");}}}return vm;};} /*  */ /**
	 * Runtime helper for resolving raw children VNodes into a slot object.
	 */function resolveSlots(children,context){var slots={};if(!children){return slots;}for(var i=0,l=children.length;i < l;i++) {var child=children[i];var data=child.data; // remove slot attribute if the node is resolved as a Vue slot node
	if(data && data.attrs && data.attrs.slot){delete data.attrs.slot;} // named slots should only be respected if the vnode was rendered in the
	// same context.
	if((child.context === context || child.fnContext === context) && data && data.slot != null){var name=data.slot;var slot=slots[name] || (slots[name] = []);if(child.tag === 'template'){slot.push.apply(slot,child.children || []);}else {slot.push(child);}}else {(slots['default'] || (slots['default'] = [])).push(child);}} // ignore slots that contains only whitespace
	for(var name$1 in slots) {if(slots[name$1].every(isWhitespace)){delete slots[name$1];}}return slots;}function isWhitespace(node){return node.isComment && !node.asyncFactory || node.text === ' ';}function resolveScopedSlots(fns, // see flow/vnode
	res){res = res || {};for(var i=0;i < fns.length;i++) {if(Array.isArray(fns[i])){resolveScopedSlots(fns[i],res);}else {res[fns[i].key] = fns[i].fn;}}return res;} /*  */var activeInstance=null;var isUpdatingChildComponent=false;function initLifecycle(vm){var options=vm.$options; // locate first non-abstract parent
	var parent=options.parent;if(parent && !options.abstract){while(parent.$options.abstract && parent.$parent) {parent = parent.$parent;}parent.$children.push(vm);}vm.$parent = parent;vm.$root = parent?parent.$root:vm;vm.$children = [];vm.$refs = {};vm._watcher = null;vm._inactive = null;vm._directInactive = false;vm._isMounted = false;vm._isDestroyed = false;vm._isBeingDestroyed = false;}function lifecycleMixin(Vue){Vue.prototype._update = function(vnode,hydrating){var vm=this;if(vm._isMounted){callHook(vm,'beforeUpdate');}var prevEl=vm.$el;var prevVnode=vm._vnode;var prevActiveInstance=activeInstance;activeInstance = vm;vm._vnode = vnode; // Vue.prototype.__patch__ is injected in entry points
	// based on the rendering backend used.
	if(!prevVnode){ // initial render
	vm.$el = vm.__patch__(vm.$el,vnode,hydrating,false, /* removeOnly */vm.$options._parentElm,vm.$options._refElm); // no need for the ref nodes after initial patch
	// this prevents keeping a detached DOM tree in memory (#5851)
	vm.$options._parentElm = vm.$options._refElm = null;}else { // updates
	vm.$el = vm.__patch__(prevVnode,vnode);}activeInstance = prevActiveInstance; // update __vue__ reference
	if(prevEl){prevEl.__vue__ = null;}if(vm.$el){vm.$el.__vue__ = vm;} // if parent is an HOC, update its $el as well
	if(vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode){vm.$parent.$el = vm.$el;} // updated hook is called by the scheduler to ensure that children are
	// updated in a parent's updated hook.
	};Vue.prototype.$forceUpdate = function(){var vm=this;if(vm._watcher){vm._watcher.update();}};Vue.prototype.$destroy = function(){var vm=this;if(vm._isBeingDestroyed){return;}callHook(vm,'beforeDestroy');vm._isBeingDestroyed = true; // remove self from parent
	var parent=vm.$parent;if(parent && !parent._isBeingDestroyed && !vm.$options.abstract){remove(parent.$children,vm);} // teardown watchers
	if(vm._watcher){vm._watcher.teardown();}var i=vm._watchers.length;while(i--) {vm._watchers[i].teardown();} // remove reference from data ob
	// frozen object may not have observer.
	if(vm._data.__ob__){vm._data.__ob__.vmCount--;} // call the last hook...
	vm._isDestroyed = true; // invoke destroy hooks on current rendered tree
	vm.__patch__(vm._vnode,null); // fire destroyed hook
	callHook(vm,'destroyed'); // turn off all instance listeners.
	vm.$off(); // remove __vue__ reference
	if(vm.$el){vm.$el.__vue__ = null;} // release circular reference (#6759)
	if(vm.$vnode){vm.$vnode.parent = null;}};}function mountComponent(vm,el,hydrating){vm.$el = el;if(!vm.$options.render){vm.$options.render = createEmptyVNode;if(true){ /* istanbul ignore if */if(vm.$options.template && vm.$options.template.charAt(0) !== '#' || vm.$options.el || el){warn('You are using the runtime-only build of Vue where the template ' + 'compiler is not available. Either pre-compile the templates into ' + 'render functions, or use the compiler-included build.',vm);}else {warn('Failed to mount component: template or render function not defined.',vm);}}}callHook(vm,'beforeMount');var updateComponent; /* istanbul ignore if */if(("develop") !== 'production' && config.performance && mark){updateComponent = function(){var name=vm._name;var id=vm._uid;var startTag="vue-perf-start:" + id;var endTag="vue-perf-end:" + id;mark(startTag);var vnode=vm._render();mark(endTag);measure("vue " + name + " render",startTag,endTag);mark(startTag);vm._update(vnode,hydrating);mark(endTag);measure("vue " + name + " patch",startTag,endTag);};}else {updateComponent = function(){vm._update(vm._render(),hydrating);};} // we set this to vm._watcher inside the watcher's constructor
	// since the watcher's initial patch may call $forceUpdate (e.g. inside child
	// component's mounted hook), which relies on vm._watcher being already defined
	new Watcher(vm,updateComponent,noop,null,true /* isRenderWatcher */);hydrating = false; // manually mounted instance, call mounted on self
	// mounted is called for render-created child components in its inserted hook
	if(vm.$vnode == null){vm._isMounted = true;callHook(vm,'mounted');}return vm;}function updateChildComponent(vm,propsData,listeners,parentVnode,renderChildren){if(true){isUpdatingChildComponent = true;} // determine whether component has slot children
	// we need to do this before overwriting $options._renderChildren
	var hasChildren=!!(renderChildren ||  // has new static slots
	vm.$options._renderChildren ||  // has old static slots
	parentVnode.data.scopedSlots ||  // has new scoped slots
	vm.$scopedSlots !== emptyObject) // has old scoped slots
	;vm.$options._parentVnode = parentVnode;vm.$vnode = parentVnode; // update vm's placeholder node without re-render
	if(vm._vnode){ // update child tree's parent
	vm._vnode.parent = parentVnode;}vm.$options._renderChildren = renderChildren; // update $attrs and $listeners hash
	// these are also reactive so they may trigger child update if the child
	// used them during render
	vm.$attrs = parentVnode.data && parentVnode.data.attrs || emptyObject;vm.$listeners = listeners || emptyObject; // update props
	if(propsData && vm.$options.props){observerState.shouldConvert = false;var props=vm._props;var propKeys=vm.$options._propKeys || [];for(var i=0;i < propKeys.length;i++) {var key=propKeys[i];props[key] = validateProp(key,vm.$options.props,propsData,vm);}observerState.shouldConvert = true; // keep a copy of raw propsData
	vm.$options.propsData = propsData;} // update listeners
	if(listeners){var oldListeners=vm.$options._parentListeners;vm.$options._parentListeners = listeners;updateComponentListeners(vm,listeners,oldListeners);} // resolve slots + force update if has children
	if(hasChildren){vm.$slots = resolveSlots(renderChildren,parentVnode.context);vm.$forceUpdate();}if(true){isUpdatingChildComponent = false;}}function isInInactiveTree(vm){while(vm && (vm = vm.$parent)) {if(vm._inactive){return true;}}return false;}function activateChildComponent(vm,direct){if(direct){vm._directInactive = false;if(isInInactiveTree(vm)){return;}}else if(vm._directInactive){return;}if(vm._inactive || vm._inactive === null){vm._inactive = false;for(var i=0;i < vm.$children.length;i++) {activateChildComponent(vm.$children[i]);}callHook(vm,'activated');}}function deactivateChildComponent(vm,direct){if(direct){vm._directInactive = true;if(isInInactiveTree(vm)){return;}}if(!vm._inactive){vm._inactive = true;for(var i=0;i < vm.$children.length;i++) {deactivateChildComponent(vm.$children[i]);}callHook(vm,'deactivated');}}function callHook(vm,hook){var handlers=vm.$options[hook];if(handlers){for(var i=0,j=handlers.length;i < j;i++) {try{handlers[i].call(vm);}catch(e) {handleError(e,vm,hook + " hook");}}}if(vm._hasHookEvent){vm.$emit('hook:' + hook);}} /*  */var MAX_UPDATE_COUNT=100;var queue=[];var activatedChildren=[];var has={};var circular={};var waiting=false;var flushing=false;var index=0; /**
	 * Reset the scheduler's state.
	 */function resetSchedulerState(){index = queue.length = activatedChildren.length = 0;has = {};if(true){circular = {};}waiting = flushing = false;} /**
	 * Flush both queues and run the watchers.
	 */function flushSchedulerQueue(){flushing = true;var watcher,id; // Sort queue before flush.
	// This ensures that:
	// 1. Components are updated from parent to child. (because parent is always
	//    created before the child)
	// 2. A component's user watchers are run before its render watcher (because
	//    user watchers are created before the render watcher)
	// 3. If a component is destroyed during a parent component's watcher run,
	//    its watchers can be skipped.
	queue.sort(function(a,b){return a.id - b.id;}); // do not cache length because more watchers might be pushed
	// as we run existing watchers
	for(index = 0;index < queue.length;index++) {watcher = queue[index];id = watcher.id;has[id] = null;watcher.run(); // in dev build, check and stop circular updates.
	if(("develop") !== 'production' && has[id] != null){circular[id] = (circular[id] || 0) + 1;if(circular[id] > MAX_UPDATE_COUNT){warn('You may have an infinite update loop ' + (watcher.user?"in watcher with expression \"" + watcher.expression + "\"":"in a component render function."),watcher.vm);break;}}} // keep copies of post queues before resetting state
	var activatedQueue=activatedChildren.slice();var updatedQueue=queue.slice();resetSchedulerState(); // call component updated and activated hooks
	callActivatedHooks(activatedQueue);callUpdatedHooks(updatedQueue); // devtool hook
	/* istanbul ignore if */if(devtools && config.devtools){devtools.emit('flush');}}function callUpdatedHooks(queue){var i=queue.length;while(i--) {var watcher=queue[i];var vm=watcher.vm;if(vm._watcher === watcher && vm._isMounted){callHook(vm,'updated');}}} /**
	 * Queue a kept-alive component that was activated during patch.
	 * The queue will be processed after the entire tree has been patched.
	 */function queueActivatedComponent(vm){ // setting _inactive to false here so that a render function can
	// rely on checking whether it's in an inactive tree (e.g. router-view)
	vm._inactive = false;activatedChildren.push(vm);}function callActivatedHooks(queue){for(var i=0;i < queue.length;i++) {queue[i]._inactive = true;activateChildComponent(queue[i],true /* true */);}} /**
	 * Push a watcher into the watcher queue.
	 * Jobs with duplicate IDs will be skipped unless it's
	 * pushed when the queue is being flushed.
	 */function queueWatcher(watcher){var id=watcher.id;if(has[id] == null){has[id] = true;if(!flushing){queue.push(watcher);}else { // if already flushing, splice the watcher based on its id
	// if already past its id, it will be run next immediately.
	var i=queue.length - 1;while(i > index && queue[i].id > watcher.id) {i--;}queue.splice(i + 1,0,watcher);} // queue the flush
	if(!waiting){waiting = true;nextTick(flushSchedulerQueue);}}} /*  */var uid$2=0; /**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 */var Watcher=function Watcher(vm,expOrFn,cb,options,isRenderWatcher){this.vm = vm;if(isRenderWatcher){vm._watcher = this;}vm._watchers.push(this); // options
	if(options){this.deep = !!options.deep;this.user = !!options.user;this.lazy = !!options.lazy;this.sync = !!options.sync;}else {this.deep = this.user = this.lazy = this.sync = false;}this.cb = cb;this.id = ++uid$2; // uid for batching
	this.active = true;this.dirty = this.lazy; // for lazy watchers
	this.deps = [];this.newDeps = [];this.depIds = new _Set();this.newDepIds = new _Set();this.expression =  true?expOrFn.toString():''; // parse expression for getter
	if(typeof expOrFn === 'function'){this.getter = expOrFn;}else {this.getter = parsePath(expOrFn);if(!this.getter){this.getter = function(){};("develop") !== 'production' && warn("Failed watching path: \"" + expOrFn + "\" " + 'Watcher only accepts simple dot-delimited paths. ' + 'For full control, use a function instead.',vm);}}this.value = this.lazy?undefined:this.get();}; /**
	 * Evaluate the getter, and re-collect dependencies.
	 */Watcher.prototype.get = function get(){pushTarget(this);var value;var vm=this.vm;try{value = this.getter.call(vm,vm);}catch(e) {if(this.user){handleError(e,vm,"getter for watcher \"" + this.expression + "\"");}else {throw e;}}finally { // "touch" every property so they are all tracked as
	// dependencies for deep watching
	if(this.deep){traverse(value);}popTarget();this.cleanupDeps();}return value;}; /**
	 * Add a dependency to this directive.
	 */Watcher.prototype.addDep = function addDep(dep){var id=dep.id;if(!this.newDepIds.has(id)){this.newDepIds.add(id);this.newDeps.push(dep);if(!this.depIds.has(id)){dep.addSub(this);}}}; /**
	 * Clean up for dependency collection.
	 */Watcher.prototype.cleanupDeps = function cleanupDeps(){var this$1=this;var i=this.deps.length;while(i--) {var dep=this$1.deps[i];if(!this$1.newDepIds.has(dep.id)){dep.removeSub(this$1);}}var tmp=this.depIds;this.depIds = this.newDepIds;this.newDepIds = tmp;this.newDepIds.clear();tmp = this.deps;this.deps = this.newDeps;this.newDeps = tmp;this.newDeps.length = 0;}; /**
	 * Subscriber interface.
	 * Will be called when a dependency changes.
	 */Watcher.prototype.update = function update(){ /* istanbul ignore else */if(this.lazy){this.dirty = true;}else if(this.sync){this.run();}else {queueWatcher(this);}}; /**
	 * Scheduler job interface.
	 * Will be called by the scheduler.
	 */Watcher.prototype.run = function run(){if(this.active){var value=this.get();if(value !== this.value ||  // Deep watchers and watchers on Object/Arrays should fire even
	// when the value is the same, because the value may
	// have mutated.
	isObject(value) || this.deep){ // set new value
	var oldValue=this.value;this.value = value;if(this.user){try{this.cb.call(this.vm,value,oldValue);}catch(e) {handleError(e,this.vm,"callback for watcher \"" + this.expression + "\"");}}else {this.cb.call(this.vm,value,oldValue);}}}}; /**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */Watcher.prototype.evaluate = function evaluate(){this.value = this.get();this.dirty = false;}; /**
	 * Depend on all deps collected by this watcher.
	 */Watcher.prototype.depend = function depend(){var this$1=this;var i=this.deps.length;while(i--) {this$1.deps[i].depend();}}; /**
	 * Remove self from all dependencies' subscriber list.
	 */Watcher.prototype.teardown = function teardown(){var this$1=this;if(this.active){ // remove self from vm's watcher list
	// this is a somewhat expensive operation so we skip it
	// if the vm is being destroyed.
	if(!this.vm._isBeingDestroyed){remove(this.vm._watchers,this);}var i=this.deps.length;while(i--) {this$1.deps[i].removeSub(this$1);}this.active = false;}}; /*  */var sharedPropertyDefinition={enumerable:true,configurable:true,get:noop,set:noop};function proxy(target,sourceKey,key){sharedPropertyDefinition.get = function proxyGetter(){return this[sourceKey][key];};sharedPropertyDefinition.set = function proxySetter(val){this[sourceKey][key] = val;};Object.defineProperty(target,key,sharedPropertyDefinition);}function initState(vm){vm._watchers = [];var opts=vm.$options;if(opts.props){initProps(vm,opts.props);}if(opts.methods){initMethods(vm,opts.methods);}if(opts.data){initData(vm);}else {observe(vm._data = {},true /* asRootData */);}if(opts.computed){initComputed(vm,opts.computed);}if(opts.watch && opts.watch !== nativeWatch){initWatch(vm,opts.watch);}}function initProps(vm,propsOptions){var propsData=vm.$options.propsData || {};var props=vm._props = {}; // cache prop keys so that future props updates can iterate using Array
	// instead of dynamic object key enumeration.
	var keys=vm.$options._propKeys = [];var isRoot=!vm.$parent; // root instance props should be converted
	observerState.shouldConvert = isRoot;var loop=function loop(key){keys.push(key);var value=validateProp(key,propsOptions,propsData,vm); /* istanbul ignore else */if(true){var hyphenatedKey=hyphenate(key);if(isReservedAttribute(hyphenatedKey) || config.isReservedAttr(hyphenatedKey)){warn("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop.",vm);}defineReactive(props,key,value,function(){if(vm.$parent && !isUpdatingChildComponent){warn("Avoid mutating a prop directly since the value will be " + "overwritten whenever the parent component re-renders. " + "Instead, use a data or computed property based on the prop's " + "value. Prop being mutated: \"" + key + "\"",vm);}});}else {defineReactive(props,key,value);} // static props are already proxied on the component's prototype
	// during Vue.extend(). We only need to proxy props defined at
	// instantiation here.
	if(!(key in vm)){proxy(vm,"_props",key);}};for(var key in propsOptions) loop(key);observerState.shouldConvert = true;}function initData(vm){var data=vm.$options.data;data = vm._data = typeof data === 'function'?getData(data,vm):data || {};if(!isPlainObject(data)){data = {};("develop") !== 'production' && warn('data functions should return an object:\n' + 'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',vm);} // proxy data on instance
	var keys=Object.keys(data);var props=vm.$options.props;var methods=vm.$options.methods;var i=keys.length;while(i--) {var key=keys[i];if(true){if(methods && hasOwn(methods,key)){warn("Method \"" + key + "\" has already been defined as a data property.",vm);}}if(props && hasOwn(props,key)){("develop") !== 'production' && warn("The data property \"" + key + "\" is already declared as a prop. " + "Use prop default value instead.",vm);}else if(!isReserved(key)){proxy(vm,"_data",key);}} // observe data
	observe(data,true /* asRootData */);}function getData(data,vm){try{return data.call(vm,vm);}catch(e) {handleError(e,vm,"data()");return {};}}var computedWatcherOptions={lazy:true};function initComputed(vm,computed){ // $flow-disable-line
	var watchers=vm._computedWatchers = Object.create(null); // computed properties are just getters during SSR
	var isSSR=isServerRendering();for(var key in computed) {var userDef=computed[key];var getter=typeof userDef === 'function'?userDef:userDef.get;if(("develop") !== 'production' && getter == null){warn("Getter is missing for computed property \"" + key + "\".",vm);}if(!isSSR){ // create internal watcher for the computed property.
	watchers[key] = new Watcher(vm,getter || noop,noop,computedWatcherOptions);} // component-defined computed properties are already defined on the
	// component prototype. We only need to define computed properties defined
	// at instantiation here.
	if(!(key in vm)){defineComputed(vm,key,userDef);}else if(true){if(key in vm.$data){warn("The computed property \"" + key + "\" is already defined in data.",vm);}else if(vm.$options.props && key in vm.$options.props){warn("The computed property \"" + key + "\" is already defined as a prop.",vm);}}}}function defineComputed(target,key,userDef){var shouldCache=!isServerRendering();if(typeof userDef === 'function'){sharedPropertyDefinition.get = shouldCache?createComputedGetter(key):userDef;sharedPropertyDefinition.set = noop;}else {sharedPropertyDefinition.get = userDef.get?shouldCache && userDef.cache !== false?createComputedGetter(key):userDef.get:noop;sharedPropertyDefinition.set = userDef.set?userDef.set:noop;}if(("develop") !== 'production' && sharedPropertyDefinition.set === noop){sharedPropertyDefinition.set = function(){warn("Computed property \"" + key + "\" was assigned to but it has no setter.",this);};}Object.defineProperty(target,key,sharedPropertyDefinition);}function createComputedGetter(key){return function computedGetter(){var watcher=this._computedWatchers && this._computedWatchers[key];if(watcher){if(watcher.dirty){watcher.evaluate();}if(Dep.target){watcher.depend();}return watcher.value;}};}function initMethods(vm,methods){var props=vm.$options.props;for(var key in methods) {if(true){if(methods[key] == null){warn("Method \"" + key + "\" has an undefined value in the component definition. " + "Did you reference the function correctly?",vm);}if(props && hasOwn(props,key)){warn("Method \"" + key + "\" has already been defined as a prop.",vm);}if(key in vm && isReserved(key)){warn("Method \"" + key + "\" conflicts with an existing Vue instance method. " + "Avoid defining component methods that start with _ or $.");}}vm[key] = methods[key] == null?noop:bind(methods[key],vm);}}function initWatch(vm,watch){for(var key in watch) {var handler=watch[key];if(Array.isArray(handler)){for(var i=0;i < handler.length;i++) {createWatcher(vm,key,handler[i]);}}else {createWatcher(vm,key,handler);}}}function createWatcher(vm,keyOrFn,handler,options){if(isPlainObject(handler)){options = handler;handler = handler.handler;}if(typeof handler === 'string'){handler = vm[handler];}return vm.$watch(keyOrFn,handler,options);}function stateMixin(Vue){ // flow somehow has problems with directly declared definition object
	// when using Object.defineProperty, so we have to procedurally build up
	// the object here.
	var dataDef={};dataDef.get = function(){return this._data;};var propsDef={};propsDef.get = function(){return this._props;};if(true){dataDef.set = function(newData){warn('Avoid replacing instance root $data. ' + 'Use nested data properties instead.',this);};propsDef.set = function(){warn("$props is readonly.",this);};}Object.defineProperty(Vue.prototype,'$data',dataDef);Object.defineProperty(Vue.prototype,'$props',propsDef);Vue.prototype.$set = set;Vue.prototype.$delete = del;Vue.prototype.$watch = function(expOrFn,cb,options){var vm=this;if(isPlainObject(cb)){return createWatcher(vm,expOrFn,cb,options);}options = options || {};options.user = true;var watcher=new Watcher(vm,expOrFn,cb,options);if(options.immediate){cb.call(vm,watcher.value);}return function unwatchFn(){watcher.teardown();};};} /*  */function initProvide(vm){var provide=vm.$options.provide;if(provide){vm._provided = typeof provide === 'function'?provide.call(vm):provide;}}function initInjections(vm){var result=resolveInject(vm.$options.inject,vm);if(result){observerState.shouldConvert = false;Object.keys(result).forEach(function(key){ /* istanbul ignore else */if(true){defineReactive(vm,key,result[key],function(){warn("Avoid mutating an injected value directly since the changes will be " + "overwritten whenever the provided component re-renders. " + "injection being mutated: \"" + key + "\"",vm);});}else {defineReactive(vm,key,result[key]);}});observerState.shouldConvert = true;}}function resolveInject(inject,vm){if(inject){ // inject is :any because flow is not smart enough to figure out cached
	var result=Object.create(null);var keys=hasSymbol?Reflect.ownKeys(inject).filter(function(key){ /* istanbul ignore next */return Object.getOwnPropertyDescriptor(inject,key).enumerable;}):Object.keys(inject);for(var i=0;i < keys.length;i++) {var key=keys[i];var provideKey=inject[key].from;var source=vm;while(source) {if(source._provided && provideKey in source._provided){result[key] = source._provided[provideKey];break;}source = source.$parent;}if(!source){if('default' in inject[key]){var provideDefault=inject[key]['default'];result[key] = typeof provideDefault === 'function'?provideDefault.call(vm):provideDefault;}else if(true){warn("Injection \"" + key + "\" not found",vm);}}}return result;}} /*  */ /**
	 * Runtime helper for rendering v-for lists.
	 */function renderList(val,render){var ret,i,l,keys,key;if(Array.isArray(val) || typeof val === 'string'){ret = new Array(val.length);for(i = 0,l = val.length;i < l;i++) {ret[i] = render(val[i],i);}}else if(typeof val === 'number'){ret = new Array(val);for(i = 0;i < val;i++) {ret[i] = render(i + 1,i);}}else if(isObject(val)){keys = Object.keys(val);ret = new Array(keys.length);for(i = 0,l = keys.length;i < l;i++) {key = keys[i];ret[i] = render(val[key],key,i);}}if(isDef(ret)){ret._isVList = true;}return ret;} /*  */ /**
	 * Runtime helper for rendering <slot>
	 */function renderSlot(name,fallback,props,bindObject){var scopedSlotFn=this.$scopedSlots[name];var nodes;if(scopedSlotFn){ // scoped slot
	props = props || {};if(bindObject){if(("develop") !== 'production' && !isObject(bindObject)){warn('slot v-bind without argument expects an Object',this);}props = extend(extend({},bindObject),props);}nodes = scopedSlotFn(props) || fallback;}else {var slotNodes=this.$slots[name]; // warn duplicate slot usage
	if(slotNodes){if(("develop") !== 'production' && slotNodes._rendered){warn("Duplicate presence of slot \"" + name + "\" found in the same render tree " + "- this will likely cause render errors.",this);}slotNodes._rendered = true;}nodes = slotNodes || fallback;}var target=props && props.slot;if(target){return this.$createElement('template',{slot:target},nodes);}else {return nodes;}} /*  */ /**
	 * Runtime helper for resolving filters
	 */function resolveFilter(id){return resolveAsset(this.$options,'filters',id,true) || identity;} /*  */ /**
	 * Runtime helper for checking keyCodes from config.
	 * exposed as Vue.prototype._k
	 * passing in eventKeyName as last argument separately for backwards compat
	 */function checkKeyCodes(eventKeyCode,key,builtInAlias,eventKeyName){var keyCodes=config.keyCodes[key] || builtInAlias;if(keyCodes){if(Array.isArray(keyCodes)){return keyCodes.indexOf(eventKeyCode) === -1;}else {return keyCodes !== eventKeyCode;}}else if(eventKeyName){return hyphenate(eventKeyName) !== key;}} /*  */ /**
	 * Runtime helper for merging v-bind="object" into a VNode's data.
	 */function bindObjectProps(data,tag,value,asProp,isSync){if(value){if(!isObject(value)){("develop") !== 'production' && warn('v-bind without argument expects an Object or Array value',this);}else {if(Array.isArray(value)){value = toObject(value);}var hash;var loop=function loop(key){if(key === 'class' || key === 'style' || isReservedAttribute(key)){hash = data;}else {var type=data.attrs && data.attrs.type;hash = asProp || config.mustUseProp(tag,type,key)?data.domProps || (data.domProps = {}):data.attrs || (data.attrs = {});}if(!(key in hash)){hash[key] = value[key];if(isSync){var on=data.on || (data.on = {});on["update:" + key] = function($event){value[key] = $event;};}}};for(var key in value) loop(key);}}return data;} /*  */ /**
	 * Runtime helper for rendering static trees.
	 */function renderStatic(index,isInFor){var cached=this._staticTrees || (this._staticTrees = []);var tree=cached[index]; // if has already-rendered static tree and not inside v-for,
	// we can reuse the same tree by doing a shallow clone.
	if(tree && !isInFor){return Array.isArray(tree)?cloneVNodes(tree):cloneVNode(tree);} // otherwise, render a fresh tree.
	tree = cached[index] = this.$options.staticRenderFns[index].call(this._renderProxy,null,this // for render fns generated for functional component templates
	);markStatic(tree,"__static__" + index,false);return tree;} /**
	 * Runtime helper for v-once.
	 * Effectively it means marking the node as static with a unique key.
	 */function markOnce(tree,index,key){markStatic(tree,"__once__" + index + (key?"_" + key:""),true);return tree;}function markStatic(tree,key,isOnce){if(Array.isArray(tree)){for(var i=0;i < tree.length;i++) {if(tree[i] && typeof tree[i] !== 'string'){markStaticNode(tree[i],key + "_" + i,isOnce);}}}else {markStaticNode(tree,key,isOnce);}}function markStaticNode(node,key,isOnce){node.isStatic = true;node.key = key;node.isOnce = isOnce;} /*  */function bindObjectListeners(data,value){if(value){if(!isPlainObject(value)){("develop") !== 'production' && warn('v-on without argument expects an Object value',this);}else {var on=data.on = data.on?extend({},data.on):{};for(var key in value) {var existing=on[key];var ours=value[key];on[key] = existing?[].concat(existing,ours):ours;}}}return data;} /*  */function installRenderHelpers(target){target._o = markOnce;target._n = toNumber;target._s = toString;target._l = renderList;target._t = renderSlot;target._q = looseEqual;target._i = looseIndexOf;target._m = renderStatic;target._f = resolveFilter;target._k = checkKeyCodes;target._b = bindObjectProps;target._v = createTextVNode;target._e = createEmptyVNode;target._u = resolveScopedSlots;target._g = bindObjectListeners;} /*  */function FunctionalRenderContext(data,props,children,parent,Ctor){var options=Ctor.options;this.data = data;this.props = props;this.children = children;this.parent = parent;this.listeners = data.on || emptyObject;this.injections = resolveInject(options.inject,parent);this.slots = function(){return resolveSlots(children,parent);}; // ensure the createElement function in functional components
	// gets a unique context - this is necessary for correct named slot check
	var contextVm=Object.create(parent);var isCompiled=isTrue(options._compiled);var needNormalization=!isCompiled; // support for compiled functional template
	if(isCompiled){ // exposing $options for renderStatic()
	this.$options = options; // pre-resolve slots for renderSlot()
	this.$slots = this.slots();this.$scopedSlots = data.scopedSlots || emptyObject;}if(options._scopeId){this._c = function(a,b,c,d){var vnode=createElement(contextVm,a,b,c,d,needNormalization);if(vnode){vnode.fnScopeId = options._scopeId;vnode.fnContext = parent;}return vnode;};}else {this._c = function(a,b,c,d){return createElement(contextVm,a,b,c,d,needNormalization);};}}installRenderHelpers(FunctionalRenderContext.prototype);function createFunctionalComponent(Ctor,propsData,data,contextVm,children){var options=Ctor.options;var props={};var propOptions=options.props;if(isDef(propOptions)){for(var key in propOptions) {props[key] = validateProp(key,propOptions,propsData || emptyObject);}}else {if(isDef(data.attrs)){mergeProps(props,data.attrs);}if(isDef(data.props)){mergeProps(props,data.props);}}var renderContext=new FunctionalRenderContext(data,props,children,contextVm,Ctor);var vnode=options.render.call(null,renderContext._c,renderContext);if(vnode instanceof VNode){vnode.fnContext = contextVm;vnode.fnOptions = options;if(data.slot){(vnode.data || (vnode.data = {})).slot = data.slot;}}return vnode;}function mergeProps(to,from){for(var key in from) {to[camelize(key)] = from[key];}} /*  */ // Register the component hook to weex native render engine.
	// The hook will be triggered by native, not javascript.
	// Updates the state of the component to weex native render engine.
	/*  */ // https://github.com/Hanks10100/weex-native-directive/tree/master/component
	// listening on native callback
	/*  */ /*  */ // hooks to be invoked on component VNodes during patch
	var componentVNodeHooks={init:function init(vnode,hydrating,parentElm,refElm){if(!vnode.componentInstance || vnode.componentInstance._isDestroyed){var child=vnode.componentInstance = createComponentInstanceForVnode(vnode,activeInstance,parentElm,refElm);child.$mount(hydrating?vnode.elm:undefined,hydrating);}else if(vnode.data.keepAlive){ // kept-alive components, treat as a patch
	var mountedNode=vnode; // work around flow
	componentVNodeHooks.prepatch(mountedNode,mountedNode);}},prepatch:function prepatch(oldVnode,vnode){var options=vnode.componentOptions;var child=vnode.componentInstance = oldVnode.componentInstance;updateChildComponent(child,options.propsData, // updated props
	options.listeners, // updated listeners
	vnode, // new parent vnode
	options.children // new children
	);},insert:function insert(vnode){var context=vnode.context;var componentInstance=vnode.componentInstance;if(!componentInstance._isMounted){componentInstance._isMounted = true;callHook(componentInstance,'mounted');}if(vnode.data.keepAlive){if(context._isMounted){ // vue-router#1212
	// During updates, a kept-alive component's child components may
	// change, so directly walking the tree here may call activated hooks
	// on incorrect children. Instead we push them into a queue which will
	// be processed after the whole patch process ended.
	queueActivatedComponent(componentInstance);}else {activateChildComponent(componentInstance,true /* direct */);}}},destroy:function destroy(vnode){var componentInstance=vnode.componentInstance;if(!componentInstance._isDestroyed){if(!vnode.data.keepAlive){componentInstance.$destroy();}else {deactivateChildComponent(componentInstance,true /* direct */);}}}};var hooksToMerge=Object.keys(componentVNodeHooks);function createComponent(Ctor,data,context,children,tag){if(isUndef(Ctor)){return;}var baseCtor=context.$options._base; // plain options object: turn it into a constructor
	if(isObject(Ctor)){Ctor = baseCtor.extend(Ctor);} // if at this stage it's not a constructor or an async component factory,
	// reject.
	if(typeof Ctor !== 'function'){if(true){warn("Invalid Component definition: " + String(Ctor),context);}return;} // async component
	var asyncFactory;if(isUndef(Ctor.cid)){asyncFactory = Ctor;Ctor = resolveAsyncComponent(asyncFactory,baseCtor,context);if(Ctor === undefined){ // return a placeholder node for async component, which is rendered
	// as a comment node but preserves all the raw information for the node.
	// the information will be used for async server-rendering and hydration.
	return createAsyncPlaceholder(asyncFactory,data,context,children,tag);}}data = data || {}; // resolve constructor options in case global mixins are applied after
	// component constructor creation
	resolveConstructorOptions(Ctor); // transform component v-model data into props & events
	if(isDef(data.model)){transformModel(Ctor.options,data);} // extract props
	var propsData=extractPropsFromVNodeData(data,Ctor,tag); // functional component
	if(isTrue(Ctor.options.functional)){return createFunctionalComponent(Ctor,propsData,data,context,children);} // extract listeners, since these needs to be treated as
	// child component listeners instead of DOM listeners
	var listeners=data.on; // replace with listeners with .native modifier
	// so it gets processed during parent component patch.
	data.on = data.nativeOn;if(isTrue(Ctor.options.abstract)){ // abstract components do not keep anything
	// other than props & listeners & slot
	// work around flow
	var slot=data.slot;data = {};if(slot){data.slot = slot;}} // merge component management hooks onto the placeholder node
	mergeHooks(data); // return a placeholder vnode
	var name=Ctor.options.name || tag;var vnode=new VNode("vue-component-" + Ctor.cid + (name?"-" + name:''),data,undefined,undefined,undefined,context,{Ctor:Ctor,propsData:propsData,listeners:listeners,tag:tag,children:children},asyncFactory); // Weex specific: invoke recycle-list optimized @render function for
	// extracting cell-slot template.
	// https://github.com/Hanks10100/weex-native-directive/tree/master/component
	/* istanbul ignore if */return vnode;}function createComponentInstanceForVnode(vnode, // we know it's MountedComponentVNode but flow doesn't
	parent, // activeInstance in lifecycle state
	parentElm,refElm){var options={_isComponent:true,parent:parent,_parentVnode:vnode,_parentElm:parentElm || null,_refElm:refElm || null}; // check inline-template render functions
	var inlineTemplate=vnode.data.inlineTemplate;if(isDef(inlineTemplate)){options.render = inlineTemplate.render;options.staticRenderFns = inlineTemplate.staticRenderFns;}return new vnode.componentOptions.Ctor(options);}function mergeHooks(data){if(!data.hook){data.hook = {};}for(var i=0;i < hooksToMerge.length;i++) {var key=hooksToMerge[i];var fromParent=data.hook[key];var ours=componentVNodeHooks[key];data.hook[key] = fromParent?mergeHook$1(ours,fromParent):ours;}}function mergeHook$1(one,two){return function(a,b,c,d){one(a,b,c,d);two(a,b,c,d);};} // transform component v-model info (value and callback) into
	// prop and event handler respectively.
	function transformModel(options,data){var prop=options.model && options.model.prop || 'value';var event=options.model && options.model.event || 'input';(data.props || (data.props = {}))[prop] = data.model.value;var on=data.on || (data.on = {});if(isDef(on[event])){on[event] = [data.model.callback].concat(on[event]);}else {on[event] = data.model.callback;}} /*  */var SIMPLE_NORMALIZE=1;var ALWAYS_NORMALIZE=2; // wrapper function for providing a more flexible interface
	// without getting yelled at by flow
	function createElement(context,tag,data,children,normalizationType,alwaysNormalize){if(Array.isArray(data) || isPrimitive(data)){normalizationType = children;children = data;data = undefined;}if(isTrue(alwaysNormalize)){normalizationType = ALWAYS_NORMALIZE;}return _createElement(context,tag,data,children,normalizationType);}function _createElement(context,tag,data,children,normalizationType){if(isDef(data) && isDef(data.__ob__)){("develop") !== 'production' && warn("Avoid using observed data object as vnode data: " + JSON.stringify(data) + "\n" + 'Always create fresh vnode data objects in each render!',context);return createEmptyVNode();} // object syntax in v-bind
	if(isDef(data) && isDef(data.is)){tag = data.is;}if(!tag){ // in case of component :is set to falsy value
	return createEmptyVNode();} // warn against non-primitive key
	if(("develop") !== 'production' && isDef(data) && isDef(data.key) && !isPrimitive(data.key)){{warn('Avoid using non-primitive value as key, ' + 'use string/number value instead.',context);}} // support single function children as default scoped slot
	if(Array.isArray(children) && typeof children[0] === 'function'){data = data || {};data.scopedSlots = {'default':children[0]};children.length = 0;}if(normalizationType === ALWAYS_NORMALIZE){children = normalizeChildren(children);}else if(normalizationType === SIMPLE_NORMALIZE){children = simpleNormalizeChildren(children);}var vnode,ns;if(typeof tag === 'string'){var Ctor;ns = context.$vnode && context.$vnode.ns || config.getTagNamespace(tag);if(config.isReservedTag(tag)){ // platform built-in elements
	vnode = new VNode(config.parsePlatformTagName(tag),data,children,undefined,undefined,context);}else if(isDef(Ctor = resolveAsset(context.$options,'components',tag))){ // component
	vnode = createComponent(Ctor,data,context,children,tag);}else { // unknown or unlisted namespaced elements
	// check at runtime because it may get assigned a namespace when its
	// parent normalizes children
	vnode = new VNode(tag,data,children,undefined,undefined,context);}}else { // direct component options / constructor
	vnode = createComponent(tag,data,context,children);}if(isDef(vnode)){if(ns){applyNS(vnode,ns);}return vnode;}else {return createEmptyVNode();}}function applyNS(vnode,ns,force){vnode.ns = ns;if(vnode.tag === 'foreignObject'){ // use default namespace inside foreignObject
	ns = undefined;force = true;}if(isDef(vnode.children)){for(var i=0,l=vnode.children.length;i < l;i++) {var child=vnode.children[i];if(isDef(child.tag) && (isUndef(child.ns) || isTrue(force))){applyNS(child,ns,force);}}}} /*  */function initRender(vm){vm._vnode = null; // the root of the child tree
	vm._staticTrees = null; // v-once cached trees
	var options=vm.$options;var parentVnode=vm.$vnode = options._parentVnode; // the placeholder node in parent tree
	var renderContext=parentVnode && parentVnode.context;vm.$slots = resolveSlots(options._renderChildren,renderContext);vm.$scopedSlots = emptyObject; // bind the createElement fn to this instance
	// so that we get proper render context inside it.
	// args order: tag, data, children, normalizationType, alwaysNormalize
	// internal version is used by render functions compiled from templates
	vm._c = function(a,b,c,d){return createElement(vm,a,b,c,d,false);}; // normalization is always applied for the public version, used in
	// user-written render functions.
	vm.$createElement = function(a,b,c,d){return createElement(vm,a,b,c,d,true);}; // $attrs & $listeners are exposed for easier HOC creation.
	// they need to be reactive so that HOCs using them are always updated
	var parentData=parentVnode && parentVnode.data; /* istanbul ignore else */if(true){defineReactive(vm,'$attrs',parentData && parentData.attrs || emptyObject,function(){!isUpdatingChildComponent && warn("$attrs is readonly.",vm);},true);defineReactive(vm,'$listeners',options._parentListeners || emptyObject,function(){!isUpdatingChildComponent && warn("$listeners is readonly.",vm);},true);}else {defineReactive(vm,'$attrs',parentData && parentData.attrs || emptyObject,null,true);defineReactive(vm,'$listeners',options._parentListeners || emptyObject,null,true);}}function renderMixin(Vue){ // install runtime convenience helpers
	installRenderHelpers(Vue.prototype);Vue.prototype.$nextTick = function(fn){return nextTick(fn,this);};Vue.prototype._render = function(){var vm=this;var ref=vm.$options;var render=ref.render;var _parentVnode=ref._parentVnode;if(vm._isMounted){ // if the parent didn't update, the slot nodes will be the ones from
	// last render. They need to be cloned to ensure "freshness" for this render.
	for(var key in vm.$slots) {var slot=vm.$slots[key]; // _rendered is a flag added by renderSlot, but may not be present
	// if the slot is passed from manually written render functions
	if(slot._rendered || slot[0] && slot[0].elm){vm.$slots[key] = cloneVNodes(slot,true /* deep */);}}}vm.$scopedSlots = _parentVnode && _parentVnode.data.scopedSlots || emptyObject; // set parent vnode. this allows render functions to have access
	// to the data on the placeholder node.
	vm.$vnode = _parentVnode; // render self
	var vnode;try{vnode = render.call(vm._renderProxy,vm.$createElement);}catch(e) {handleError(e,vm,"render"); // return error render result,
	// or previous vnode to prevent render error causing blank component
	/* istanbul ignore else */if(true){if(vm.$options.renderError){try{vnode = vm.$options.renderError.call(vm._renderProxy,vm.$createElement,e);}catch(e) {handleError(e,vm,"renderError");vnode = vm._vnode;}}else {vnode = vm._vnode;}}else {vnode = vm._vnode;}} // return empty vnode in case the render function errored out
	if(!(vnode instanceof VNode)){if(("develop") !== 'production' && Array.isArray(vnode)){warn('Multiple root nodes returned from render function. Render function ' + 'should return a single root node.',vm);}vnode = createEmptyVNode();} // set parent
	vnode.parent = _parentVnode;return vnode;};} /*  */var uid$1=0;function initMixin(Vue){Vue.prototype._init = function(options){var vm=this; // a uid
	vm._uid = uid$1++;var startTag,endTag; /* istanbul ignore if */if(("develop") !== 'production' && config.performance && mark){startTag = "vue-perf-start:" + vm._uid;endTag = "vue-perf-end:" + vm._uid;mark(startTag);} // a flag to avoid this being observed
	vm._isVue = true; // merge options
	if(options && options._isComponent){ // optimize internal component instantiation
	// since dynamic options merging is pretty slow, and none of the
	// internal component options needs special treatment.
	initInternalComponent(vm,options);}else {vm.$options = mergeOptions(resolveConstructorOptions(vm.constructor),options || {},vm);} /* istanbul ignore else */if(true){initProxy(vm);}else {vm._renderProxy = vm;} // expose real self
	vm._self = vm;initLifecycle(vm);initEvents(vm);initRender(vm);callHook(vm,'beforeCreate');initInjections(vm); // resolve injections before data/props
	initState(vm);initProvide(vm); // resolve provide after data/props
	callHook(vm,'created'); /* istanbul ignore if */if(("develop") !== 'production' && config.performance && mark){vm._name = formatComponentName(vm,false);mark(endTag);measure("vue " + vm._name + " init",startTag,endTag);}if(vm.$options.el){vm.$mount(vm.$options.el);}};}function initInternalComponent(vm,options){var opts=vm.$options = Object.create(vm.constructor.options); // doing this because it's faster than dynamic enumeration.
	var parentVnode=options._parentVnode;opts.parent = options.parent;opts._parentVnode = parentVnode;opts._parentElm = options._parentElm;opts._refElm = options._refElm;var vnodeComponentOptions=parentVnode.componentOptions;opts.propsData = vnodeComponentOptions.propsData;opts._parentListeners = vnodeComponentOptions.listeners;opts._renderChildren = vnodeComponentOptions.children;opts._componentTag = vnodeComponentOptions.tag;if(options.render){opts.render = options.render;opts.staticRenderFns = options.staticRenderFns;}}function resolveConstructorOptions(Ctor){var options=Ctor.options;if(Ctor['super']){var superOptions=resolveConstructorOptions(Ctor['super']);var cachedSuperOptions=Ctor.superOptions;if(superOptions !== cachedSuperOptions){ // super option changed,
	// need to resolve new options.
	Ctor.superOptions = superOptions; // check if there are any late-modified/attached options (#4976)
	var modifiedOptions=resolveModifiedOptions(Ctor); // update base extend options
	if(modifiedOptions){extend(Ctor.extendOptions,modifiedOptions);}options = Ctor.options = mergeOptions(superOptions,Ctor.extendOptions);if(options.name){options.components[options.name] = Ctor;}}}return options;}function resolveModifiedOptions(Ctor){var modified;var latest=Ctor.options;var extended=Ctor.extendOptions;var sealed=Ctor.sealedOptions;for(var key in latest) {if(latest[key] !== sealed[key]){if(!modified){modified = {};}modified[key] = dedupe(latest[key],extended[key],sealed[key]);}}return modified;}function dedupe(latest,extended,sealed){ // compare latest and sealed to ensure lifecycle hooks won't be duplicated
	// between merges
	if(Array.isArray(latest)){var res=[];sealed = Array.isArray(sealed)?sealed:[sealed];extended = Array.isArray(extended)?extended:[extended];for(var i=0;i < latest.length;i++) { // push original options and not sealed options to exclude duplicated options
	if(extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0){res.push(latest[i]);}}return res;}else {return latest;}}function Vue$3(options){if(("develop") !== 'production' && !(this instanceof Vue$3)){warn('Vue is a constructor and should be called with the `new` keyword');}this._init(options);}initMixin(Vue$3);stateMixin(Vue$3);eventsMixin(Vue$3);lifecycleMixin(Vue$3);renderMixin(Vue$3); /*  */function initUse(Vue){Vue.use = function(plugin){var installedPlugins=this._installedPlugins || (this._installedPlugins = []);if(installedPlugins.indexOf(plugin) > -1){return this;} // additional parameters
	var args=toArray(arguments,1);args.unshift(this);if(typeof plugin.install === 'function'){plugin.install.apply(plugin,args);}else if(typeof plugin === 'function'){plugin.apply(null,args);}installedPlugins.push(plugin);return this;};} /*  */function initMixin$1(Vue){Vue.mixin = function(mixin){this.options = mergeOptions(this.options,mixin);return this;};} /*  */function initExtend(Vue){ /**
	   * Each instance constructor, including Vue, has a unique
	   * cid. This enables us to create wrapped "child
	   * constructors" for prototypal inheritance and cache them.
	   */Vue.cid = 0;var cid=1; /**
	   * Class inheritance
	   */Vue.extend = function(extendOptions){extendOptions = extendOptions || {};var Super=this;var SuperId=Super.cid;var cachedCtors=extendOptions._Ctor || (extendOptions._Ctor = {});if(cachedCtors[SuperId]){return cachedCtors[SuperId];}var name=extendOptions.name || Super.options.name;if(("develop") !== 'production' && name){validateComponentName(name);}var Sub=function VueComponent(options){this._init(options);};Sub.prototype = Object.create(Super.prototype);Sub.prototype.constructor = Sub;Sub.cid = cid++;Sub.options = mergeOptions(Super.options,extendOptions);Sub['super'] = Super; // For props and computed properties, we define the proxy getters on
	// the Vue instances at extension time, on the extended prototype. This
	// avoids Object.defineProperty calls for each instance created.
	if(Sub.options.props){initProps$1(Sub);}if(Sub.options.computed){initComputed$1(Sub);} // allow further extension/mixin/plugin usage
	Sub.extend = Super.extend;Sub.mixin = Super.mixin;Sub.use = Super.use; // create asset registers, so extended classes
	// can have their private assets too.
	ASSET_TYPES.forEach(function(type){Sub[type] = Super[type];}); // enable recursive self-lookup
	if(name){Sub.options.components[name] = Sub;} // keep a reference to the super options at extension time.
	// later at instantiation we can check if Super's options have
	// been updated.
	Sub.superOptions = Super.options;Sub.extendOptions = extendOptions;Sub.sealedOptions = extend({},Sub.options); // cache constructor
	cachedCtors[SuperId] = Sub;return Sub;};}function initProps$1(Comp){var props=Comp.options.props;for(var key in props) {proxy(Comp.prototype,"_props",key);}}function initComputed$1(Comp){var computed=Comp.options.computed;for(var key in computed) {defineComputed(Comp.prototype,key,computed[key]);}} /*  */function initAssetRegisters(Vue){ /**
	   * Create asset registration methods.
	   */ASSET_TYPES.forEach(function(type){Vue[type] = function(id,definition){if(!definition){return this.options[type + 's'][id];}else { /* istanbul ignore if */if(("develop") !== 'production' && type === 'component'){validateComponentName(id);}if(type === 'component' && isPlainObject(definition)){definition.name = definition.name || id;definition = this.options._base.extend(definition);}if(type === 'directive' && typeof definition === 'function'){definition = {bind:definition,update:definition};}this.options[type + 's'][id] = definition;return definition;}};});} /*  */function getComponentName(opts){return opts && (opts.Ctor.options.name || opts.tag);}function matches(pattern,name){if(Array.isArray(pattern)){return pattern.indexOf(name) > -1;}else if(typeof pattern === 'string'){return pattern.split(',').indexOf(name) > -1;}else if(isRegExp(pattern)){return pattern.test(name);} /* istanbul ignore next */return false;}function pruneCache(keepAliveInstance,filter){var cache=keepAliveInstance.cache;var keys=keepAliveInstance.keys;var _vnode=keepAliveInstance._vnode;for(var key in cache) {var cachedNode=cache[key];if(cachedNode){var name=getComponentName(cachedNode.componentOptions);if(name && !filter(name)){pruneCacheEntry(cache,key,keys,_vnode);}}}}function pruneCacheEntry(cache,key,keys,current){var cached$$1=cache[key];if(cached$$1 && (!current || cached$$1.tag !== current.tag)){cached$$1.componentInstance.$destroy();}cache[key] = null;remove(keys,key);}var patternTypes=[String,RegExp,Array];var KeepAlive={name:'keep-alive',abstract:true,props:{include:patternTypes,exclude:patternTypes,max:[String,Number]},created:function created(){this.cache = Object.create(null);this.keys = [];},destroyed:function destroyed(){var this$1=this;for(var key in this$1.cache) {pruneCacheEntry(this$1.cache,key,this$1.keys);}},watch:{include:function include(val){pruneCache(this,function(name){return matches(val,name);});},exclude:function exclude(val){pruneCache(this,function(name){return !matches(val,name);});}},render:function render(){var slot=this.$slots['default'];var vnode=getFirstComponentChild(slot);var componentOptions=vnode && vnode.componentOptions;if(componentOptions){ // check pattern
	var name=getComponentName(componentOptions);var ref=this;var include=ref.include;var exclude=ref.exclude;if( // not included
	include && (!name || !matches(include,name)) ||  // excluded
	exclude && name && matches(exclude,name)){return vnode;}var ref$1=this;var cache=ref$1.cache;var keys=ref$1.keys;var key=vnode.key == null // same constructor may get registered as different local components
	// so cid alone is not enough (#3269)
	?componentOptions.Ctor.cid + (componentOptions.tag?"::" + componentOptions.tag:''):vnode.key;if(cache[key]){vnode.componentInstance = cache[key].componentInstance; // make current key freshest
	remove(keys,key);keys.push(key);}else {cache[key] = vnode;keys.push(key); // prune oldest entry
	if(this.max && keys.length > parseInt(this.max)){pruneCacheEntry(cache,keys[0],keys,this._vnode);}}vnode.data.keepAlive = true;}return vnode || slot && slot[0];}};var builtInComponents={KeepAlive:KeepAlive}; /*  */function initGlobalAPI(Vue){ // config
	var configDef={};configDef.get = function(){return config;};if(true){configDef.set = function(){warn('Do not replace the Vue.config object, set individual fields instead.');};}Object.defineProperty(Vue,'config',configDef); // exposed util methods.
	// NOTE: these are not considered part of the public API - avoid relying on
	// them unless you are aware of the risk.
	Vue.util = {warn:warn,extend:extend,mergeOptions:mergeOptions,defineReactive:defineReactive};Vue.set = set;Vue['delete'] = del;Vue.nextTick = nextTick;Vue.options = Object.create(null);ASSET_TYPES.forEach(function(type){Vue.options[type + 's'] = Object.create(null);}); // this is used to identify the "base" constructor to extend all plain-object
	// components with in Weex's multi-instance scenarios.
	Vue.options._base = Vue;extend(Vue.options.components,builtInComponents);initUse(Vue);initMixin$1(Vue);initExtend(Vue);initAssetRegisters(Vue);}initGlobalAPI(Vue$3);Object.defineProperty(Vue$3.prototype,'$isServer',{get:isServerRendering});Object.defineProperty(Vue$3.prototype,'$ssrContext',{get:function get(){ /* istanbul ignore next */return this.$vnode && this.$vnode.ssrContext;}});Vue$3.version = '2.5.13'; /*  */ // these are reserved for web because they are directly compiled away
	// during template compilation
	var isReservedAttr=makeMap('style,class'); // attributes that should be using props for binding
	var acceptValue=makeMap('input,textarea,option,select,progress');var mustUseProp=function mustUseProp(tag,type,attr){return attr === 'value' && acceptValue(tag) && type !== 'button' || attr === 'selected' && tag === 'option' || attr === 'checked' && tag === 'input' || attr === 'muted' && tag === 'video';};var isEnumeratedAttr=makeMap('contenteditable,draggable,spellcheck');var isBooleanAttr=makeMap('allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' + 'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' + 'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' + 'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' + 'required,reversed,scoped,seamless,selected,sortable,translate,' + 'truespeed,typemustmatch,visible');var xlinkNS='http://www.w3.org/1999/xlink';var isXlink=function isXlink(name){return name.charAt(5) === ':' && name.slice(0,5) === 'xlink';};var getXlinkProp=function getXlinkProp(name){return isXlink(name)?name.slice(6,name.length):'';};var isFalsyAttrValue=function isFalsyAttrValue(val){return val == null || val === false;}; /*  */function genClassForVnode(vnode){var data=vnode.data;var parentNode=vnode;var childNode=vnode;while(isDef(childNode.componentInstance)) {childNode = childNode.componentInstance._vnode;if(childNode && childNode.data){data = mergeClassData(childNode.data,data);}}while(isDef(parentNode = parentNode.parent)) {if(parentNode && parentNode.data){data = mergeClassData(data,parentNode.data);}}return renderClass(data.staticClass,data['class']);}function mergeClassData(child,parent){return {staticClass:concat(child.staticClass,parent.staticClass),'class':isDef(child['class'])?[child['class'],parent['class']]:parent['class']};}function renderClass(staticClass,dynamicClass){if(isDef(staticClass) || isDef(dynamicClass)){return concat(staticClass,stringifyClass(dynamicClass));} /* istanbul ignore next */return '';}function concat(a,b){return a?b?a + ' ' + b:a:b || '';}function stringifyClass(value){if(Array.isArray(value)){return stringifyArray(value);}if(isObject(value)){return stringifyObject(value);}if(typeof value === 'string'){return value;} /* istanbul ignore next */return '';}function stringifyArray(value){var res='';var stringified;for(var i=0,l=value.length;i < l;i++) {if(isDef(stringified = stringifyClass(value[i])) && stringified !== ''){if(res){res += ' ';}res += stringified;}}return res;}function stringifyObject(value){var res='';for(var key in value) {if(value[key]){if(res){res += ' ';}res += key;}}return res;} /*  */var namespaceMap={svg:'http://www.w3.org/2000/svg',math:'http://www.w3.org/1998/Math/MathML'};var isHTMLTag=makeMap('html,body,base,head,link,meta,style,title,' + 'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' + 'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' + 'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' + 's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' + 'embed,object,param,source,canvas,script,noscript,del,ins,' + 'caption,col,colgroup,table,thead,tbody,td,th,tr,' + 'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' + 'output,progress,select,textarea,' + 'details,dialog,menu,menuitem,summary,' + 'content,element,shadow,template,blockquote,iframe,tfoot'); // this map is intentionally selective, only covering SVG elements that may
	// contain child elements.
	var isSVG=makeMap('svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' + 'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' + 'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',true);var isPreTag=function isPreTag(tag){return tag === 'pre';};var isReservedTag=function isReservedTag(tag){return isHTMLTag(tag) || isSVG(tag);};function getTagNamespace(tag){if(isSVG(tag)){return 'svg';} // basic support for MathML
	// note it doesn't support other MathML elements being component roots
	if(tag === 'math'){return 'math';}}var unknownElementCache=Object.create(null);function isUnknownElement(tag){ /* istanbul ignore if */if(!inBrowser){return true;}if(isReservedTag(tag)){return false;}tag = tag.toLowerCase(); /* istanbul ignore if */if(unknownElementCache[tag] != null){return unknownElementCache[tag];}var el=document.createElement(tag);if(tag.indexOf('-') > -1){ // http://stackoverflow.com/a/28210364/1070244
	return unknownElementCache[tag] = el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;}else {return unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString());}}var isTextInputType=makeMap('text,number,password,search,email,tel,url'); /*  */ /**
	 * Query an element selector if it's not an element already.
	 */function query(el){if(typeof el === 'string'){var selected=document.querySelector(el);if(!selected){("develop") !== 'production' && warn('Cannot find element: ' + el);return document.createElement('div');}return selected;}else {return el;}} /*  */function createElement$1(tagName,vnode){var elm=document.createElement(tagName);if(tagName !== 'select'){return elm;} // false or null will remove the attribute but undefined will not
	if(vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined){elm.setAttribute('multiple','multiple');}return elm;}function createElementNS(namespace,tagName){return document.createElementNS(namespaceMap[namespace],tagName);}function createTextNode(text){return document.createTextNode(text);}function createComment(text){return document.createComment(text);}function insertBefore(parentNode,newNode,referenceNode){parentNode.insertBefore(newNode,referenceNode);}function removeChild(node,child){node.removeChild(child);}function appendChild(node,child){node.appendChild(child);}function parentNode(node){return node.parentNode;}function nextSibling(node){return node.nextSibling;}function tagName(node){return node.tagName;}function setTextContent(node,text){node.textContent = text;}function setAttribute(node,key,val){node.setAttribute(key,val);}var nodeOps=Object.freeze({createElement:createElement$1,createElementNS:createElementNS,createTextNode:createTextNode,createComment:createComment,insertBefore:insertBefore,removeChild:removeChild,appendChild:appendChild,parentNode:parentNode,nextSibling:nextSibling,tagName:tagName,setTextContent:setTextContent,setAttribute:setAttribute}); /*  */var ref={create:function create(_,vnode){registerRef(vnode);},update:function update(oldVnode,vnode){if(oldVnode.data.ref !== vnode.data.ref){registerRef(oldVnode,true);registerRef(vnode);}},destroy:function destroy(vnode){registerRef(vnode,true);}};function registerRef(vnode,isRemoval){var key=vnode.data.ref;if(!key){return;}var vm=vnode.context;var ref=vnode.componentInstance || vnode.elm;var refs=vm.$refs;if(isRemoval){if(Array.isArray(refs[key])){remove(refs[key],ref);}else if(refs[key] === ref){refs[key] = undefined;}}else {if(vnode.data.refInFor){if(!Array.isArray(refs[key])){refs[key] = [ref];}else if(refs[key].indexOf(ref) < 0){ // $flow-disable-line
	refs[key].push(ref);}}else {refs[key] = ref;}}} /**
	 * Virtual DOM patching algorithm based on Snabbdom by
	 * Simon Friis Vindum (@paldepind)
	 * Licensed under the MIT License
	 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
	 *
	 * modified by Evan You (@yyx990803)
	 *
	 * Not type-checking this because this file is perf-critical and the cost
	 * of making flow understand it is not worth it.
	 */var emptyNode=new VNode('',{},[]);var hooks=['create','activate','update','remove','destroy'];function sameVnode(a,b){return a.key === b.key && (a.tag === b.tag && a.isComment === b.isComment && isDef(a.data) === isDef(b.data) && sameInputType(a,b) || isTrue(a.isAsyncPlaceholder) && a.asyncFactory === b.asyncFactory && isUndef(b.asyncFactory.error));}function sameInputType(a,b){if(a.tag !== 'input'){return true;}var i;var typeA=isDef(i = a.data) && isDef(i = i.attrs) && i.type;var typeB=isDef(i = b.data) && isDef(i = i.attrs) && i.type;return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB);}function createKeyToOldIdx(children,beginIdx,endIdx){var i,key;var map={};for(i = beginIdx;i <= endIdx;++i) {key = children[i].key;if(isDef(key)){map[key] = i;}}return map;}function createPatchFunction(backend){var i,j;var cbs={};var modules=backend.modules;var nodeOps=backend.nodeOps;for(i = 0;i < hooks.length;++i) {cbs[hooks[i]] = [];for(j = 0;j < modules.length;++j) {if(isDef(modules[j][hooks[i]])){cbs[hooks[i]].push(modules[j][hooks[i]]);}}}function emptyNodeAt(elm){return new VNode(nodeOps.tagName(elm).toLowerCase(),{},[],undefined,elm);}function createRmCb(childElm,listeners){function remove(){if(--remove.listeners === 0){removeNode(childElm);}}remove.listeners = listeners;return remove;}function removeNode(el){var parent=nodeOps.parentNode(el); // element may have already been removed due to v-html / v-text
	if(isDef(parent)){nodeOps.removeChild(parent,el);}}function isUnknownElement$$1(vnode,inVPre){return !inVPre && !vnode.ns && !(config.ignoredElements.length && config.ignoredElements.some(function(ignore){return isRegExp(ignore)?ignore.test(vnode.tag):ignore === vnode.tag;})) && config.isUnknownElement(vnode.tag);}var creatingElmInVPre=0;function createElm(vnode,insertedVnodeQueue,parentElm,refElm,nested){vnode.isRootInsert = !nested; // for transition enter check
	if(createComponent(vnode,insertedVnodeQueue,parentElm,refElm)){return;}var data=vnode.data;var children=vnode.children;var tag=vnode.tag;if(isDef(tag)){if(true){if(data && data.pre){creatingElmInVPre++;}if(isUnknownElement$$1(vnode,creatingElmInVPre)){warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.',vnode.context);}}vnode.elm = vnode.ns?nodeOps.createElementNS(vnode.ns,tag):nodeOps.createElement(tag,vnode);setScope(vnode); /* istanbul ignore if */{createChildren(vnode,children,insertedVnodeQueue);if(isDef(data)){invokeCreateHooks(vnode,insertedVnodeQueue);}insert(parentElm,vnode.elm,refElm);}if(("develop") !== 'production' && data && data.pre){creatingElmInVPre--;}}else if(isTrue(vnode.isComment)){vnode.elm = nodeOps.createComment(vnode.text);insert(parentElm,vnode.elm,refElm);}else {vnode.elm = nodeOps.createTextNode(vnode.text);insert(parentElm,vnode.elm,refElm);}}function createComponent(vnode,insertedVnodeQueue,parentElm,refElm){var i=vnode.data;if(isDef(i)){var isReactivated=isDef(vnode.componentInstance) && i.keepAlive;if(isDef(i = i.hook) && isDef(i = i.init)){i(vnode,false, /* hydrating */parentElm,refElm);} // after calling the init hook, if the vnode is a child component
	// it should've created a child instance and mounted it. the child
	// component also has set the placeholder vnode's elm.
	// in that case we can just return the element and be done.
	if(isDef(vnode.componentInstance)){initComponent(vnode,insertedVnodeQueue);if(isTrue(isReactivated)){reactivateComponent(vnode,insertedVnodeQueue,parentElm,refElm);}return true;}}}function initComponent(vnode,insertedVnodeQueue){if(isDef(vnode.data.pendingInsert)){insertedVnodeQueue.push.apply(insertedVnodeQueue,vnode.data.pendingInsert);vnode.data.pendingInsert = null;}vnode.elm = vnode.componentInstance.$el;if(isPatchable(vnode)){invokeCreateHooks(vnode,insertedVnodeQueue);setScope(vnode);}else { // empty component root.
	// skip all element-related modules except for ref (#3455)
	registerRef(vnode); // make sure to invoke the insert hook
	insertedVnodeQueue.push(vnode);}}function reactivateComponent(vnode,insertedVnodeQueue,parentElm,refElm){var i; // hack for #4339: a reactivated component with inner transition
	// does not trigger because the inner node's created hooks are not called
	// again. It's not ideal to involve module-specific logic in here but
	// there doesn't seem to be a better way to do it.
	var innerNode=vnode;while(innerNode.componentInstance) {innerNode = innerNode.componentInstance._vnode;if(isDef(i = innerNode.data) && isDef(i = i.transition)){for(i = 0;i < cbs.activate.length;++i) {cbs.activate[i](emptyNode,innerNode);}insertedVnodeQueue.push(innerNode);break;}} // unlike a newly created component,
	// a reactivated keep-alive component doesn't insert itself
	insert(parentElm,vnode.elm,refElm);}function insert(parent,elm,ref$$1){if(isDef(parent)){if(isDef(ref$$1)){if(ref$$1.parentNode === parent){nodeOps.insertBefore(parent,elm,ref$$1);}}else {nodeOps.appendChild(parent,elm);}}}function createChildren(vnode,children,insertedVnodeQueue){if(Array.isArray(children)){if(true){checkDuplicateKeys(children);}for(var i=0;i < children.length;++i) {createElm(children[i],insertedVnodeQueue,vnode.elm,null,true);}}else if(isPrimitive(vnode.text)){nodeOps.appendChild(vnode.elm,nodeOps.createTextNode(String(vnode.text)));}}function isPatchable(vnode){while(vnode.componentInstance) {vnode = vnode.componentInstance._vnode;}return isDef(vnode.tag);}function invokeCreateHooks(vnode,insertedVnodeQueue){for(var i$1=0;i$1 < cbs.create.length;++i$1) {cbs.create[i$1](emptyNode,vnode);}i = vnode.data.hook; // Reuse variable
	if(isDef(i)){if(isDef(i.create)){i.create(emptyNode,vnode);}if(isDef(i.insert)){insertedVnodeQueue.push(vnode);}}} // set scope id attribute for scoped CSS.
	// this is implemented as a special case to avoid the overhead
	// of going through the normal attribute patching process.
	function setScope(vnode){var i;if(isDef(i = vnode.fnScopeId)){nodeOps.setAttribute(vnode.elm,i,'');}else {var ancestor=vnode;while(ancestor) {if(isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)){nodeOps.setAttribute(vnode.elm,i,'');}ancestor = ancestor.parent;}} // for slot content they should also get the scopeId from the host instance.
	if(isDef(i = activeInstance) && i !== vnode.context && i !== vnode.fnContext && isDef(i = i.$options._scopeId)){nodeOps.setAttribute(vnode.elm,i,'');}}function addVnodes(parentElm,refElm,vnodes,startIdx,endIdx,insertedVnodeQueue){for(;startIdx <= endIdx;++startIdx) {createElm(vnodes[startIdx],insertedVnodeQueue,parentElm,refElm);}}function invokeDestroyHook(vnode){var i,j;var data=vnode.data;if(isDef(data)){if(isDef(i = data.hook) && isDef(i = i.destroy)){i(vnode);}for(i = 0;i < cbs.destroy.length;++i) {cbs.destroy[i](vnode);}}if(isDef(i = vnode.children)){for(j = 0;j < vnode.children.length;++j) {invokeDestroyHook(vnode.children[j]);}}}function removeVnodes(parentElm,vnodes,startIdx,endIdx){for(;startIdx <= endIdx;++startIdx) {var ch=vnodes[startIdx];if(isDef(ch)){if(isDef(ch.tag)){removeAndInvokeRemoveHook(ch);invokeDestroyHook(ch);}else { // Text node
	removeNode(ch.elm);}}}}function removeAndInvokeRemoveHook(vnode,rm){if(isDef(rm) || isDef(vnode.data)){var i;var listeners=cbs.remove.length + 1;if(isDef(rm)){ // we have a recursively passed down rm callback
	// increase the listeners count
	rm.listeners += listeners;}else { // directly removing
	rm = createRmCb(vnode.elm,listeners);} // recursively invoke hooks on child component root node
	if(isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)){removeAndInvokeRemoveHook(i,rm);}for(i = 0;i < cbs.remove.length;++i) {cbs.remove[i](vnode,rm);}if(isDef(i = vnode.data.hook) && isDef(i = i.remove)){i(vnode,rm);}else {rm();}}else {removeNode(vnode.elm);}}function updateChildren(parentElm,oldCh,newCh,insertedVnodeQueue,removeOnly){var oldStartIdx=0;var newStartIdx=0;var oldEndIdx=oldCh.length - 1;var oldStartVnode=oldCh[0];var oldEndVnode=oldCh[oldEndIdx];var newEndIdx=newCh.length - 1;var newStartVnode=newCh[0];var newEndVnode=newCh[newEndIdx];var oldKeyToIdx,idxInOld,vnodeToMove,refElm; // removeOnly is a special flag used only by <transition-group>
	// to ensure removed elements stay in correct relative positions
	// during leaving transitions
	var canMove=!removeOnly;if(true){checkDuplicateKeys(newCh);}while(oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {if(isUndef(oldStartVnode)){oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
	}else if(isUndef(oldEndVnode)){oldEndVnode = oldCh[--oldEndIdx];}else if(sameVnode(oldStartVnode,newStartVnode)){patchVnode(oldStartVnode,newStartVnode,insertedVnodeQueue);oldStartVnode = oldCh[++oldStartIdx];newStartVnode = newCh[++newStartIdx];}else if(sameVnode(oldEndVnode,newEndVnode)){patchVnode(oldEndVnode,newEndVnode,insertedVnodeQueue);oldEndVnode = oldCh[--oldEndIdx];newEndVnode = newCh[--newEndIdx];}else if(sameVnode(oldStartVnode,newEndVnode)){ // Vnode moved right
	patchVnode(oldStartVnode,newEndVnode,insertedVnodeQueue);canMove && nodeOps.insertBefore(parentElm,oldStartVnode.elm,nodeOps.nextSibling(oldEndVnode.elm));oldStartVnode = oldCh[++oldStartIdx];newEndVnode = newCh[--newEndIdx];}else if(sameVnode(oldEndVnode,newStartVnode)){ // Vnode moved left
	patchVnode(oldEndVnode,newStartVnode,insertedVnodeQueue);canMove && nodeOps.insertBefore(parentElm,oldEndVnode.elm,oldStartVnode.elm);oldEndVnode = oldCh[--oldEndIdx];newStartVnode = newCh[++newStartIdx];}else {if(isUndef(oldKeyToIdx)){oldKeyToIdx = createKeyToOldIdx(oldCh,oldStartIdx,oldEndIdx);}idxInOld = isDef(newStartVnode.key)?oldKeyToIdx[newStartVnode.key]:findIdxInOld(newStartVnode,oldCh,oldStartIdx,oldEndIdx);if(isUndef(idxInOld)){ // New element
	createElm(newStartVnode,insertedVnodeQueue,parentElm,oldStartVnode.elm);}else {vnodeToMove = oldCh[idxInOld];if(sameVnode(vnodeToMove,newStartVnode)){patchVnode(vnodeToMove,newStartVnode,insertedVnodeQueue);oldCh[idxInOld] = undefined;canMove && nodeOps.insertBefore(parentElm,vnodeToMove.elm,oldStartVnode.elm);}else { // same key but different element. treat as new element
	createElm(newStartVnode,insertedVnodeQueue,parentElm,oldStartVnode.elm);}}newStartVnode = newCh[++newStartIdx];}}if(oldStartIdx > oldEndIdx){refElm = isUndef(newCh[newEndIdx + 1])?null:newCh[newEndIdx + 1].elm;addVnodes(parentElm,refElm,newCh,newStartIdx,newEndIdx,insertedVnodeQueue);}else if(newStartIdx > newEndIdx){removeVnodes(parentElm,oldCh,oldStartIdx,oldEndIdx);}}function checkDuplicateKeys(children){var seenKeys={};for(var i=0;i < children.length;i++) {var vnode=children[i];var key=vnode.key;if(isDef(key)){if(seenKeys[key]){warn("Duplicate keys detected: '" + key + "'. This may cause an update error.",vnode.context);}else {seenKeys[key] = true;}}}}function findIdxInOld(node,oldCh,start,end){for(var i=start;i < end;i++) {var c=oldCh[i];if(isDef(c) && sameVnode(node,c)){return i;}}}function patchVnode(oldVnode,vnode,insertedVnodeQueue,removeOnly){if(oldVnode === vnode){return;}var elm=vnode.elm = oldVnode.elm;if(isTrue(oldVnode.isAsyncPlaceholder)){if(isDef(vnode.asyncFactory.resolved)){hydrate(oldVnode.elm,vnode,insertedVnodeQueue);}else {vnode.isAsyncPlaceholder = true;}return;} // reuse element for static trees.
	// note we only do this if the vnode is cloned -
	// if the new node is not cloned it means the render functions have been
	// reset by the hot-reload-api and we need to do a proper re-render.
	if(isTrue(vnode.isStatic) && isTrue(oldVnode.isStatic) && vnode.key === oldVnode.key && (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))){vnode.componentInstance = oldVnode.componentInstance;return;}var i;var data=vnode.data;if(isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)){i(oldVnode,vnode);}var oldCh=oldVnode.children;var ch=vnode.children;if(isDef(data) && isPatchable(vnode)){for(i = 0;i < cbs.update.length;++i) {cbs.update[i](oldVnode,vnode);}if(isDef(i = data.hook) && isDef(i = i.update)){i(oldVnode,vnode);}}if(isUndef(vnode.text)){if(isDef(oldCh) && isDef(ch)){if(oldCh !== ch){updateChildren(elm,oldCh,ch,insertedVnodeQueue,removeOnly);}}else if(isDef(ch)){if(isDef(oldVnode.text)){nodeOps.setTextContent(elm,'');}addVnodes(elm,null,ch,0,ch.length - 1,insertedVnodeQueue);}else if(isDef(oldCh)){removeVnodes(elm,oldCh,0,oldCh.length - 1);}else if(isDef(oldVnode.text)){nodeOps.setTextContent(elm,'');}}else if(oldVnode.text !== vnode.text){nodeOps.setTextContent(elm,vnode.text);}if(isDef(data)){if(isDef(i = data.hook) && isDef(i = i.postpatch)){i(oldVnode,vnode);}}}function invokeInsertHook(vnode,queue,initial){ // delay insert hooks for component root nodes, invoke them after the
	// element is really inserted
	if(isTrue(initial) && isDef(vnode.parent)){vnode.parent.data.pendingInsert = queue;}else {for(var i=0;i < queue.length;++i) {queue[i].data.hook.insert(queue[i]);}}}var hydrationBailed=false; // list of modules that can skip create hook during hydration because they
	// are already rendered on the client or has no need for initialization
	// Note: style is excluded because it relies on initial clone for future
	// deep updates (#7063).
	var isRenderedModule=makeMap('attrs,class,staticClass,staticStyle,key'); // Note: this is a browser-only function so we can assume elms are DOM nodes.
	function hydrate(elm,vnode,insertedVnodeQueue,inVPre){var i;var tag=vnode.tag;var data=vnode.data;var children=vnode.children;inVPre = inVPre || data && data.pre;vnode.elm = elm;if(isTrue(vnode.isComment) && isDef(vnode.asyncFactory)){vnode.isAsyncPlaceholder = true;return true;} // assert node match
	if(true){if(!assertNodeMatch(elm,vnode,inVPre)){return false;}}if(isDef(data)){if(isDef(i = data.hook) && isDef(i = i.init)){i(vnode,true /* hydrating */);}if(isDef(i = vnode.componentInstance)){ // child component. it should have hydrated its own tree.
	initComponent(vnode,insertedVnodeQueue);return true;}}if(isDef(tag)){if(isDef(children)){ // empty element, allow client to pick up and populate children
	if(!elm.hasChildNodes()){createChildren(vnode,children,insertedVnodeQueue);}else { // v-html and domProps: innerHTML
	if(isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)){if(i !== elm.innerHTML){ /* istanbul ignore if */if(("develop") !== 'production' && typeof console !== 'undefined' && !hydrationBailed){hydrationBailed = true;console.warn('Parent: ',elm);console.warn('server innerHTML: ',i);console.warn('client innerHTML: ',elm.innerHTML);}return false;}}else { // iterate and compare children lists
	var childrenMatch=true;var childNode=elm.firstChild;for(var i$1=0;i$1 < children.length;i$1++) {if(!childNode || !hydrate(childNode,children[i$1],insertedVnodeQueue,inVPre)){childrenMatch = false;break;}childNode = childNode.nextSibling;} // if childNode is not null, it means the actual childNodes list is
	// longer than the virtual children list.
	if(!childrenMatch || childNode){ /* istanbul ignore if */if(("develop") !== 'production' && typeof console !== 'undefined' && !hydrationBailed){hydrationBailed = true;console.warn('Parent: ',elm);console.warn('Mismatching childNodes vs. VNodes: ',elm.childNodes,children);}return false;}}}}if(isDef(data)){var fullInvoke=false;for(var key in data) {if(!isRenderedModule(key)){fullInvoke = true;invokeCreateHooks(vnode,insertedVnodeQueue);break;}}if(!fullInvoke && data['class']){ // ensure collecting deps for deep class bindings for future updates
	traverse(data['class']);}}}else if(elm.data !== vnode.text){elm.data = vnode.text;}return true;}function assertNodeMatch(node,vnode,inVPre){if(isDef(vnode.tag)){return vnode.tag.indexOf('vue-component') === 0 || !isUnknownElement$$1(vnode,inVPre) && vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase());}else {return node.nodeType === (vnode.isComment?8:3);}}return function patch(oldVnode,vnode,hydrating,removeOnly,parentElm,refElm){if(isUndef(vnode)){if(isDef(oldVnode)){invokeDestroyHook(oldVnode);}return;}var isInitialPatch=false;var insertedVnodeQueue=[];if(isUndef(oldVnode)){ // empty mount (likely as component), create new root element
	isInitialPatch = true;createElm(vnode,insertedVnodeQueue,parentElm,refElm);}else {var isRealElement=isDef(oldVnode.nodeType);if(!isRealElement && sameVnode(oldVnode,vnode)){ // patch existing root node
	patchVnode(oldVnode,vnode,insertedVnodeQueue,removeOnly);}else {if(isRealElement){ // mounting to a real element
	// check if this is server-rendered content and if we can perform
	// a successful hydration.
	if(oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)){oldVnode.removeAttribute(SSR_ATTR);hydrating = true;}if(isTrue(hydrating)){if(hydrate(oldVnode,vnode,insertedVnodeQueue)){invokeInsertHook(vnode,insertedVnodeQueue,true);return oldVnode;}else if(true){warn('The client-side rendered virtual DOM tree is not matching ' + 'server-rendered content. This is likely caused by incorrect ' + 'HTML markup, for example nesting block-level elements inside ' + '<p>, or missing <tbody>. Bailing hydration and performing ' + 'full client-side render.');}} // either not server-rendered, or hydration failed.
	// create an empty node and replace it
	oldVnode = emptyNodeAt(oldVnode);} // replacing existing element
	var oldElm=oldVnode.elm;var parentElm$1=nodeOps.parentNode(oldElm); // create new node
	createElm(vnode,insertedVnodeQueue, // extremely rare edge case: do not insert if old element is in a
	// leaving transition. Only happens when combining transition +
	// keep-alive + HOCs. (#4590)
	oldElm._leaveCb?null:parentElm$1,nodeOps.nextSibling(oldElm)); // update parent placeholder node element, recursively
	if(isDef(vnode.parent)){var ancestor=vnode.parent;var patchable=isPatchable(vnode);while(ancestor) {for(var i=0;i < cbs.destroy.length;++i) {cbs.destroy[i](ancestor);}ancestor.elm = vnode.elm;if(patchable){for(var i$1=0;i$1 < cbs.create.length;++i$1) {cbs.create[i$1](emptyNode,ancestor);} // #6513
	// invoke insert hooks that may have been merged by create hooks.
	// e.g. for directives that uses the "inserted" hook.
	var insert=ancestor.data.hook.insert;if(insert.merged){ // start at index 1 to avoid re-invoking component mounted hook
	for(var i$2=1;i$2 < insert.fns.length;i$2++) {insert.fns[i$2]();}}}else {registerRef(ancestor);}ancestor = ancestor.parent;}} // destroy old node
	if(isDef(parentElm$1)){removeVnodes(parentElm$1,[oldVnode],0,0);}else if(isDef(oldVnode.tag)){invokeDestroyHook(oldVnode);}}}invokeInsertHook(vnode,insertedVnodeQueue,isInitialPatch);return vnode.elm;};} /*  */var directives={create:updateDirectives,update:updateDirectives,destroy:function unbindDirectives(vnode){updateDirectives(vnode,emptyNode);}};function updateDirectives(oldVnode,vnode){if(oldVnode.data.directives || vnode.data.directives){_update(oldVnode,vnode);}}function _update(oldVnode,vnode){var isCreate=oldVnode === emptyNode;var isDestroy=vnode === emptyNode;var oldDirs=normalizeDirectives$1(oldVnode.data.directives,oldVnode.context);var newDirs=normalizeDirectives$1(vnode.data.directives,vnode.context);var dirsWithInsert=[];var dirsWithPostpatch=[];var key,oldDir,dir;for(key in newDirs) {oldDir = oldDirs[key];dir = newDirs[key];if(!oldDir){ // new directive, bind
	callHook$1(dir,'bind',vnode,oldVnode);if(dir.def && dir.def.inserted){dirsWithInsert.push(dir);}}else { // existing directive, update
	dir.oldValue = oldDir.value;callHook$1(dir,'update',vnode,oldVnode);if(dir.def && dir.def.componentUpdated){dirsWithPostpatch.push(dir);}}}if(dirsWithInsert.length){var callInsert=function callInsert(){for(var i=0;i < dirsWithInsert.length;i++) {callHook$1(dirsWithInsert[i],'inserted',vnode,oldVnode);}};if(isCreate){mergeVNodeHook(vnode,'insert',callInsert);}else {callInsert();}}if(dirsWithPostpatch.length){mergeVNodeHook(vnode,'postpatch',function(){for(var i=0;i < dirsWithPostpatch.length;i++) {callHook$1(dirsWithPostpatch[i],'componentUpdated',vnode,oldVnode);}});}if(!isCreate){for(key in oldDirs) {if(!newDirs[key]){ // no longer present, unbind
	callHook$1(oldDirs[key],'unbind',oldVnode,oldVnode,isDestroy);}}}}var emptyModifiers=Object.create(null);function normalizeDirectives$1(dirs,vm){var res=Object.create(null);if(!dirs){ // $flow-disable-line
	return res;}var i,dir;for(i = 0;i < dirs.length;i++) {dir = dirs[i];if(!dir.modifiers){ // $flow-disable-line
	dir.modifiers = emptyModifiers;}res[getRawDirName(dir)] = dir;dir.def = resolveAsset(vm.$options,'directives',dir.name,true);} // $flow-disable-line
	return res;}function getRawDirName(dir){return dir.rawName || dir.name + "." + Object.keys(dir.modifiers || {}).join('.');}function callHook$1(dir,hook,vnode,oldVnode,isDestroy){var fn=dir.def && dir.def[hook];if(fn){try{fn(vnode.elm,dir,vnode,oldVnode,isDestroy);}catch(e) {handleError(e,vnode.context,"directive " + dir.name + " " + hook + " hook");}}}var baseModules=[ref,directives]; /*  */function updateAttrs(oldVnode,vnode){var opts=vnode.componentOptions;if(isDef(opts) && opts.Ctor.options.inheritAttrs === false){return;}if(isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)){return;}var key,cur,old;var elm=vnode.elm;var oldAttrs=oldVnode.data.attrs || {};var attrs=vnode.data.attrs || {}; // clone observed objects, as the user probably wants to mutate it
	if(isDef(attrs.__ob__)){attrs = vnode.data.attrs = extend({},attrs);}for(key in attrs) {cur = attrs[key];old = oldAttrs[key];if(old !== cur){setAttr(elm,key,cur);}} // #4391: in IE9, setting type can reset value for input[type=radio]
	// #6666: IE/Edge forces progress value down to 1 before setting a max
	/* istanbul ignore if */if((isIE || isEdge) && attrs.value !== oldAttrs.value){setAttr(elm,'value',attrs.value);}for(key in oldAttrs) {if(isUndef(attrs[key])){if(isXlink(key)){elm.removeAttributeNS(xlinkNS,getXlinkProp(key));}else if(!isEnumeratedAttr(key)){elm.removeAttribute(key);}}}}function setAttr(el,key,value){if(isBooleanAttr(key)){ // set attribute for blank value
	// e.g. <option disabled>Select one</option>
	if(isFalsyAttrValue(value)){el.removeAttribute(key);}else { // technically allowfullscreen is a boolean attribute for <iframe>,
	// but Flash expects a value of "true" when used on <embed> tag
	value = key === 'allowfullscreen' && el.tagName === 'EMBED'?'true':key;el.setAttribute(key,value);}}else if(isEnumeratedAttr(key)){el.setAttribute(key,isFalsyAttrValue(value) || value === 'false'?'false':'true');}else if(isXlink(key)){if(isFalsyAttrValue(value)){el.removeAttributeNS(xlinkNS,getXlinkProp(key));}else {el.setAttributeNS(xlinkNS,key,value);}}else {if(isFalsyAttrValue(value)){el.removeAttribute(key);}else { // #7138: IE10 & 11 fires input event when setting placeholder on
	// <textarea>... block the first input event and remove the blocker
	// immediately.
	/* istanbul ignore if */if(isIE && !isIE9 && el.tagName === 'TEXTAREA' && key === 'placeholder' && !el.__ieph){var blocker=function blocker(e){e.stopImmediatePropagation();el.removeEventListener('input',blocker);};el.addEventListener('input',blocker); // $flow-disable-line
	el.__ieph = true; /* IE placeholder patched */}el.setAttribute(key,value);}}}var attrs={create:updateAttrs,update:updateAttrs}; /*  */function updateClass(oldVnode,vnode){var el=vnode.elm;var data=vnode.data;var oldData=oldVnode.data;if(isUndef(data.staticClass) && isUndef(data['class']) && (isUndef(oldData) || isUndef(oldData.staticClass) && isUndef(oldData['class']))){return;}var cls=genClassForVnode(vnode); // handle transition classes
	var transitionClass=el._transitionClasses;if(isDef(transitionClass)){cls = concat(cls,stringifyClass(transitionClass));} // set the class
	if(cls !== el._prevClass){el.setAttribute('class',cls);el._prevClass = cls;}}var klass={create:updateClass,update:updateClass}; /*  */var validDivisionCharRE=/[\w).+\-_$\]]/;function parseFilters(exp){var inSingle=false;var inDouble=false;var inTemplateString=false;var inRegex=false;var curly=0;var square=0;var paren=0;var lastFilterIndex=0;var c,prev,i,expression,filters;for(i = 0;i < exp.length;i++) {prev = c;c = exp.charCodeAt(i);if(inSingle){if(c === 0x27 && prev !== 0x5C){inSingle = false;}}else if(inDouble){if(c === 0x22 && prev !== 0x5C){inDouble = false;}}else if(inTemplateString){if(c === 0x60 && prev !== 0x5C){inTemplateString = false;}}else if(inRegex){if(c === 0x2f && prev !== 0x5C){inRegex = false;}}else if(c === 0x7C &&  // pipe
	exp.charCodeAt(i + 1) !== 0x7C && exp.charCodeAt(i - 1) !== 0x7C && !curly && !square && !paren){if(expression === undefined){ // first filter, end of expression
	lastFilterIndex = i + 1;expression = exp.slice(0,i).trim();}else {pushFilter();}}else {switch(c){case 0x22:inDouble = true;break; // "
	case 0x27:inSingle = true;break; // '
	case 0x60:inTemplateString = true;break; // `
	case 0x28:paren++;break; // (
	case 0x29:paren--;break; // )
	case 0x5B:square++;break; // [
	case 0x5D:square--;break; // ]
	case 0x7B:curly++;break; // {
	case 0x7D:curly--;break; // }
	}if(c === 0x2f){ // /
	var j=i - 1;var p=void 0; // find first non-whitespace prev char
	for(;j >= 0;j--) {p = exp.charAt(j);if(p !== ' '){break;}}if(!p || !validDivisionCharRE.test(p)){inRegex = true;}}}}if(expression === undefined){expression = exp.slice(0,i).trim();}else if(lastFilterIndex !== 0){pushFilter();}function pushFilter(){(filters || (filters = [])).push(exp.slice(lastFilterIndex,i).trim());lastFilterIndex = i + 1;}if(filters){for(i = 0;i < filters.length;i++) {expression = wrapFilter(expression,filters[i]);}}return expression;}function wrapFilter(exp,filter){var i=filter.indexOf('(');if(i < 0){ // _f: resolveFilter
	return "_f(\"" + filter + "\")(" + exp + ")";}else {var name=filter.slice(0,i);var args=filter.slice(i + 1);return "_f(\"" + name + "\")(" + exp + "," + args;}} /*  */function baseWarn(msg){console.error("[Vue compiler]: " + msg);}function pluckModuleFunction(modules,key){return modules?modules.map(function(m){return m[key];}).filter(function(_){return _;}):[];}function addProp(el,name,value){(el.props || (el.props = [])).push({name:name,value:value});el.plain = false;}function addAttr(el,name,value){(el.attrs || (el.attrs = [])).push({name:name,value:value});el.plain = false;} // add a raw attr (use this in preTransforms)
	function addRawAttr(el,name,value){el.attrsMap[name] = value;el.attrsList.push({name:name,value:value});}function addDirective(el,name,rawName,value,arg,modifiers){(el.directives || (el.directives = [])).push({name:name,rawName:rawName,value:value,arg:arg,modifiers:modifiers});el.plain = false;}function addHandler(el,name,value,modifiers,important,warn){modifiers = modifiers || emptyObject; // warn prevent and passive modifier
	/* istanbul ignore if */if(("develop") !== 'production' && warn && modifiers.prevent && modifiers.passive){warn('passive and prevent can\'t be used together. ' + 'Passive handler can\'t prevent default event.');} // check capture modifier
	if(modifiers.capture){delete modifiers.capture;name = '!' + name; // mark the event as captured
	}if(modifiers.once){delete modifiers.once;name = '~' + name; // mark the event as once
	} /* istanbul ignore if */if(modifiers.passive){delete modifiers.passive;name = '&' + name; // mark the event as passive
	} // normalize click.right and click.middle since they don't actually fire
	// this is technically browser-specific, but at least for now browsers are
	// the only target envs that have right/middle clicks.
	if(name === 'click'){if(modifiers.right){name = 'contextmenu';delete modifiers.right;}else if(modifiers.middle){name = 'mouseup';}}var events;if(modifiers.native){delete modifiers.native;events = el.nativeEvents || (el.nativeEvents = {});}else {events = el.events || (el.events = {});}var newHandler={value:value};if(modifiers !== emptyObject){newHandler.modifiers = modifiers;}var handlers=events[name]; /* istanbul ignore if */if(Array.isArray(handlers)){important?handlers.unshift(newHandler):handlers.push(newHandler);}else if(handlers){events[name] = important?[newHandler,handlers]:[handlers,newHandler];}else {events[name] = newHandler;}el.plain = false;}function getBindingAttr(el,name,getStatic){var dynamicValue=getAndRemoveAttr(el,':' + name) || getAndRemoveAttr(el,'v-bind:' + name);if(dynamicValue != null){return parseFilters(dynamicValue);}else if(getStatic !== false){var staticValue=getAndRemoveAttr(el,name);if(staticValue != null){return JSON.stringify(staticValue);}}} // note: this only removes the attr from the Array (attrsList) so that it
	// doesn't get processed by processAttrs.
	// By default it does NOT remove it from the map (attrsMap) because the map is
	// needed during codegen.
	function getAndRemoveAttr(el,name,removeFromMap){var val;if((val = el.attrsMap[name]) != null){var list=el.attrsList;for(var i=0,l=list.length;i < l;i++) {if(list[i].name === name){list.splice(i,1);break;}}}if(removeFromMap){delete el.attrsMap[name];}return val;} /*  */ /**
	 * Cross-platform code generation for component v-model
	 */function genComponentModel(el,value,modifiers){var ref=modifiers || {};var number=ref.number;var trim=ref.trim;var baseValueExpression='$$v';var valueExpression=baseValueExpression;if(trim){valueExpression = "(typeof " + baseValueExpression + " === 'string'" + "? " + baseValueExpression + ".trim()" + ": " + baseValueExpression + ")";}if(number){valueExpression = "_n(" + valueExpression + ")";}var assignment=genAssignmentCode(value,valueExpression);el.model = {value:"(" + value + ")",expression:"\"" + value + "\"",callback:"function (" + baseValueExpression + ") {" + assignment + "}"};} /**
	 * Cross-platform codegen helper for generating v-model value assignment code.
	 */function genAssignmentCode(value,assignment){var res=parseModel(value);if(res.key === null){return value + "=" + assignment;}else {return "$set(" + res.exp + ", " + res.key + ", " + assignment + ")";}} /**
	 * Parse a v-model expression into a base path and a final key segment.
	 * Handles both dot-path and possible square brackets.
	 *
	 * Possible cases:
	 *
	 * - test
	 * - test[key]
	 * - test[test1[key]]
	 * - test["a"][key]
	 * - xxx.test[a[a].test1[key]]
	 * - test.xxx.a["asa"][test1[key]]
	 *
	 */var len;var str;var chr;var index$1;var expressionPos;var expressionEndPos;function parseModel(val){len = val.length;if(val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1){index$1 = val.lastIndexOf('.');if(index$1 > -1){return {exp:val.slice(0,index$1),key:'"' + val.slice(index$1 + 1) + '"'};}else {return {exp:val,key:null};}}str = val;index$1 = expressionPos = expressionEndPos = 0;while(!eof()) {chr = next(); /* istanbul ignore if */if(isStringStart(chr)){parseString(chr);}else if(chr === 0x5B){parseBracket(chr);}}return {exp:val.slice(0,expressionPos),key:val.slice(expressionPos + 1,expressionEndPos)};}function next(){return str.charCodeAt(++index$1);}function eof(){return index$1 >= len;}function isStringStart(chr){return chr === 0x22 || chr === 0x27;}function parseBracket(chr){var inBracket=1;expressionPos = index$1;while(!eof()) {chr = next();if(isStringStart(chr)){parseString(chr);continue;}if(chr === 0x5B){inBracket++;}if(chr === 0x5D){inBracket--;}if(inBracket === 0){expressionEndPos = index$1;break;}}}function parseString(chr){var stringQuote=chr;while(!eof()) {chr = next();if(chr === stringQuote){break;}}} /*  */var warn$1; // in some cases, the event used has to be determined at runtime
	// so we used some reserved tokens during compile.
	var RANGE_TOKEN='__r';var CHECKBOX_RADIO_TOKEN='__c';function model(el,dir,_warn){warn$1 = _warn;var value=dir.value;var modifiers=dir.modifiers;var tag=el.tag;var type=el.attrsMap.type;if(true){ // inputs with type="file" are read only and setting the input's
	// value will throw an error.
	if(tag === 'input' && type === 'file'){warn$1("<" + el.tag + " v-model=\"" + value + "\" type=\"file\">:\n" + "File inputs are read only. Use a v-on:change listener instead.");}}if(el.component){genComponentModel(el,value,modifiers); // component v-model doesn't need extra runtime
	return false;}else if(tag === 'select'){genSelect(el,value,modifiers);}else if(tag === 'input' && type === 'checkbox'){genCheckboxModel(el,value,modifiers);}else if(tag === 'input' && type === 'radio'){genRadioModel(el,value,modifiers);}else if(tag === 'input' || tag === 'textarea'){genDefaultModel(el,value,modifiers);}else if(!config.isReservedTag(tag)){genComponentModel(el,value,modifiers); // component v-model doesn't need extra runtime
	return false;}else if(true){warn$1("<" + el.tag + " v-model=\"" + value + "\">: " + "v-model is not supported on this element type. " + 'If you are working with contenteditable, it\'s recommended to ' + 'wrap a library dedicated for that purpose inside a custom component.');} // ensure runtime directive metadata
	return true;}function genCheckboxModel(el,value,modifiers){var number=modifiers && modifiers.number;var valueBinding=getBindingAttr(el,'value') || 'null';var trueValueBinding=getBindingAttr(el,'true-value') || 'true';var falseValueBinding=getBindingAttr(el,'false-value') || 'false';addProp(el,'checked',"Array.isArray(" + value + ")" + "?_i(" + value + "," + valueBinding + ")>-1" + (trueValueBinding === 'true'?":(" + value + ")":":_q(" + value + "," + trueValueBinding + ")"));addHandler(el,'change',"var $$a=" + value + "," + '$$el=$event.target,' + "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" + 'if(Array.isArray($$a)){' + "var $$v=" + (number?'_n(' + valueBinding + ')':valueBinding) + "," + '$$i=_i($$a,$$v);' + "if($$el.checked){$$i<0&&(" + value + "=$$a.concat([$$v]))}" + "else{$$i>-1&&(" + value + "=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}" + "}else{" + genAssignmentCode(value,'$$c') + "}",null,true);}function genRadioModel(el,value,modifiers){var number=modifiers && modifiers.number;var valueBinding=getBindingAttr(el,'value') || 'null';valueBinding = number?"_n(" + valueBinding + ")":valueBinding;addProp(el,'checked',"_q(" + value + "," + valueBinding + ")");addHandler(el,'change',genAssignmentCode(value,valueBinding),null,true);}function genSelect(el,value,modifiers){var number=modifiers && modifiers.number;var selectedVal="Array.prototype.filter" + ".call($event.target.options,function(o){return o.selected})" + ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" + "return " + (number?'_n(val)':'val') + "})";var assignment='$event.target.multiple ? $$selectedVal : $$selectedVal[0]';var code="var $$selectedVal = " + selectedVal + ";";code = code + " " + genAssignmentCode(value,assignment);addHandler(el,'change',code,null,true);}function genDefaultModel(el,value,modifiers){var type=el.attrsMap.type; // warn if v-bind:value conflicts with v-model
	if(true){var value$1=el.attrsMap['v-bind:value'] || el.attrsMap[':value'];if(value$1){var binding=el.attrsMap['v-bind:value']?'v-bind:value':':value';warn$1(binding + "=\"" + value$1 + "\" conflicts with v-model on the same element " + 'because the latter already expands to a value binding internally');}}var ref=modifiers || {};var lazy=ref.lazy;var number=ref.number;var trim=ref.trim;var needCompositionGuard=!lazy && type !== 'range';var event=lazy?'change':type === 'range'?RANGE_TOKEN:'input';var valueExpression='$event.target.value';if(trim){valueExpression = "$event.target.value.trim()";}if(number){valueExpression = "_n(" + valueExpression + ")";}var code=genAssignmentCode(value,valueExpression);if(needCompositionGuard){code = "if($event.target.composing)return;" + code;}addProp(el,'value',"(" + value + ")");addHandler(el,event,code,null,true);if(trim || number){addHandler(el,'blur','$forceUpdate()');}} /*  */ // normalize v-model event tokens that can only be determined at runtime.
	// it's important to place the event as the first in the array because
	// the whole point is ensuring the v-model callback gets called before
	// user-attached handlers.
	function normalizeEvents(on){ /* istanbul ignore if */if(isDef(on[RANGE_TOKEN])){ // IE input[type=range] only supports `change` event
	var event=isIE?'change':'input';on[event] = [].concat(on[RANGE_TOKEN],on[event] || []);delete on[RANGE_TOKEN];} // This was originally intended to fix #4521 but no longer necessary
	// after 2.5. Keeping it for backwards compat with generated code from < 2.4
	/* istanbul ignore if */if(isDef(on[CHECKBOX_RADIO_TOKEN])){on.change = [].concat(on[CHECKBOX_RADIO_TOKEN],on.change || []);delete on[CHECKBOX_RADIO_TOKEN];}}var target$1;function createOnceHandler(handler,event,capture){var _target=target$1; // save current target element in closure
	return function onceHandler(){var res=handler.apply(null,arguments);if(res !== null){remove$2(event,onceHandler,capture,_target);}};}function add$1(event,handler,once$$1,capture,passive){handler = withMacroTask(handler);if(once$$1){handler = createOnceHandler(handler,event,capture);}target$1.addEventListener(event,handler,supportsPassive?{capture:capture,passive:passive}:capture);}function remove$2(event,handler,capture,_target){(_target || target$1).removeEventListener(event,handler._withTask || handler,capture);}function updateDOMListeners(oldVnode,vnode){if(isUndef(oldVnode.data.on) && isUndef(vnode.data.on)){return;}var on=vnode.data.on || {};var oldOn=oldVnode.data.on || {};target$1 = vnode.elm;normalizeEvents(on);updateListeners(on,oldOn,add$1,remove$2,vnode.context);target$1 = undefined;}var events={create:updateDOMListeners,update:updateDOMListeners}; /*  */function updateDOMProps(oldVnode,vnode){if(isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)){return;}var key,cur;var elm=vnode.elm;var oldProps=oldVnode.data.domProps || {};var props=vnode.data.domProps || {}; // clone observed objects, as the user probably wants to mutate it
	if(isDef(props.__ob__)){props = vnode.data.domProps = extend({},props);}for(key in oldProps) {if(isUndef(props[key])){elm[key] = '';}}for(key in props) {cur = props[key]; // ignore children if the node has textContent or innerHTML,
	// as these will throw away existing DOM nodes and cause removal errors
	// on subsequent patches (#3360)
	if(key === 'textContent' || key === 'innerHTML'){if(vnode.children){vnode.children.length = 0;}if(cur === oldProps[key]){continue;} // #6601 work around Chrome version <= 55 bug where single textNode
	// replaced by innerHTML/textContent retains its parentNode property
	if(elm.childNodes.length === 1){elm.removeChild(elm.childNodes[0]);}}if(key === 'value'){ // store value as _value as well since
	// non-string values will be stringified
	elm._value = cur; // avoid resetting cursor position when value is the same
	var strCur=isUndef(cur)?'':String(cur);if(shouldUpdateValue(elm,strCur)){elm.value = strCur;}}else {elm[key] = cur;}}} // check platforms/web/util/attrs.js acceptValue
	function shouldUpdateValue(elm,checkVal){return !elm.composing && (elm.tagName === 'OPTION' || isNotInFocusAndDirty(elm,checkVal) || isDirtyWithModifiers(elm,checkVal));}function isNotInFocusAndDirty(elm,checkVal){ // return true when textbox (.number and .trim) loses focus and its value is
	// not equal to the updated value
	var notInFocus=true; // #6157
	// work around IE bug when accessing document.activeElement in an iframe
	try{notInFocus = document.activeElement !== elm;}catch(e) {}return notInFocus && elm.value !== checkVal;}function isDirtyWithModifiers(elm,newVal){var value=elm.value;var modifiers=elm._vModifiers; // injected by v-model runtime
	if(isDef(modifiers)){if(modifiers.lazy){ // inputs with lazy should only be updated when not in focus
	return false;}if(modifiers.number){return toNumber(value) !== toNumber(newVal);}if(modifiers.trim){return value.trim() !== newVal.trim();}}return value !== newVal;}var domProps={create:updateDOMProps,update:updateDOMProps}; /*  */var parseStyleText=cached(function(cssText){var res={};var listDelimiter=/;(?![^(]*\))/g;var propertyDelimiter=/:(.+)/;cssText.split(listDelimiter).forEach(function(item){if(item){var tmp=item.split(propertyDelimiter);tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());}});return res;}); // merge static and dynamic style data on the same vnode
	function normalizeStyleData(data){var style=normalizeStyleBinding(data.style); // static style is pre-processed into an object during compilation
	// and is always a fresh object, so it's safe to merge into it
	return data.staticStyle?extend(data.staticStyle,style):style;} // normalize possible array / string values into Object
	function normalizeStyleBinding(bindingStyle){if(Array.isArray(bindingStyle)){return toObject(bindingStyle);}if(typeof bindingStyle === 'string'){return parseStyleText(bindingStyle);}return bindingStyle;} /**
	 * parent component style should be after child's
	 * so that parent component's style could override it
	 */function getStyle(vnode,checkChild){var res={};var styleData;if(checkChild){var childNode=vnode;while(childNode.componentInstance) {childNode = childNode.componentInstance._vnode;if(childNode && childNode.data && (styleData = normalizeStyleData(childNode.data))){extend(res,styleData);}}}if(styleData = normalizeStyleData(vnode.data)){extend(res,styleData);}var parentNode=vnode;while(parentNode = parentNode.parent) {if(parentNode.data && (styleData = normalizeStyleData(parentNode.data))){extend(res,styleData);}}return res;} /*  */var cssVarRE=/^--/;var importantRE=/\s*!important$/;var setProp=function setProp(el,name,val){ /* istanbul ignore if */if(cssVarRE.test(name)){el.style.setProperty(name,val);}else if(importantRE.test(val)){el.style.setProperty(name,val.replace(importantRE,''),'important');}else {var normalizedName=normalize(name);if(Array.isArray(val)){ // Support values array created by autoprefixer, e.g.
	// {display: ["-webkit-box", "-ms-flexbox", "flex"]}
	// Set them one by one, and the browser will only set those it can recognize
	for(var i=0,len=val.length;i < len;i++) {el.style[normalizedName] = val[i];}}else {el.style[normalizedName] = val;}}};var vendorNames=['Webkit','Moz','ms'];var emptyStyle;var normalize=cached(function(prop){emptyStyle = emptyStyle || document.createElement('div').style;prop = camelize(prop);if(prop !== 'filter' && prop in emptyStyle){return prop;}var capName=prop.charAt(0).toUpperCase() + prop.slice(1);for(var i=0;i < vendorNames.length;i++) {var name=vendorNames[i] + capName;if(name in emptyStyle){return name;}}});function updateStyle(oldVnode,vnode){var data=vnode.data;var oldData=oldVnode.data;if(isUndef(data.staticStyle) && isUndef(data.style) && isUndef(oldData.staticStyle) && isUndef(oldData.style)){return;}var cur,name;var el=vnode.elm;var oldStaticStyle=oldData.staticStyle;var oldStyleBinding=oldData.normalizedStyle || oldData.style || {}; // if static style exists, stylebinding already merged into it when doing normalizeStyleData
	var oldStyle=oldStaticStyle || oldStyleBinding;var style=normalizeStyleBinding(vnode.data.style) || {}; // store normalized style under a different key for next diff
	// make sure to clone it if it's reactive, since the user likely wants
	// to mutate it.
	vnode.data.normalizedStyle = isDef(style.__ob__)?extend({},style):style;var newStyle=getStyle(vnode,true);for(name in oldStyle) {if(isUndef(newStyle[name])){setProp(el,name,'');}}for(name in newStyle) {cur = newStyle[name];if(cur !== oldStyle[name]){ // ie9 setting to null has no effect, must use empty string
	setProp(el,name,cur == null?'':cur);}}}var style={create:updateStyle,update:updateStyle}; /*  */ /**
	 * Add class with compatibility for SVG since classList is not supported on
	 * SVG elements in IE
	 */function addClass(el,cls){ /* istanbul ignore if */if(!cls || !(cls = cls.trim())){return;} /* istanbul ignore else */if(el.classList){if(cls.indexOf(' ') > -1){cls.split(/\s+/).forEach(function(c){return el.classList.add(c);});}else {el.classList.add(cls);}}else {var cur=" " + (el.getAttribute('class') || '') + " ";if(cur.indexOf(' ' + cls + ' ') < 0){el.setAttribute('class',(cur + cls).trim());}}} /**
	 * Remove class with compatibility for SVG since classList is not supported on
	 * SVG elements in IE
	 */function removeClass(el,cls){ /* istanbul ignore if */if(!cls || !(cls = cls.trim())){return;} /* istanbul ignore else */if(el.classList){if(cls.indexOf(' ') > -1){cls.split(/\s+/).forEach(function(c){return el.classList.remove(c);});}else {el.classList.remove(cls);}if(!el.classList.length){el.removeAttribute('class');}}else {var cur=" " + (el.getAttribute('class') || '') + " ";var tar=' ' + cls + ' ';while(cur.indexOf(tar) >= 0) {cur = cur.replace(tar,' ');}cur = cur.trim();if(cur){el.setAttribute('class',cur);}else {el.removeAttribute('class');}}} /*  */function resolveTransition(def){if(!def){return;} /* istanbul ignore else */if(typeof def === 'object'){var res={};if(def.css !== false){extend(res,autoCssTransition(def.name || 'v'));}extend(res,def);return res;}else if(typeof def === 'string'){return autoCssTransition(def);}}var autoCssTransition=cached(function(name){return {enterClass:name + "-enter",enterToClass:name + "-enter-to",enterActiveClass:name + "-enter-active",leaveClass:name + "-leave",leaveToClass:name + "-leave-to",leaveActiveClass:name + "-leave-active"};});var hasTransition=inBrowser && !isIE9;var TRANSITION='transition';var ANIMATION='animation'; // Transition property/event sniffing
	var transitionProp='transition';var transitionEndEvent='transitionend';var animationProp='animation';var animationEndEvent='animationend';if(hasTransition){ /* istanbul ignore if */if(window.ontransitionend === undefined && window.onwebkittransitionend !== undefined){transitionProp = 'WebkitTransition';transitionEndEvent = 'webkitTransitionEnd';}if(window.onanimationend === undefined && window.onwebkitanimationend !== undefined){animationProp = 'WebkitAnimation';animationEndEvent = 'webkitAnimationEnd';}} // binding to window is necessary to make hot reload work in IE in strict mode
	var raf=inBrowser?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout: /* istanbul ignore next */function(fn){return fn();};function nextFrame(fn){raf(function(){raf(fn);});}function addTransitionClass(el,cls){var transitionClasses=el._transitionClasses || (el._transitionClasses = []);if(transitionClasses.indexOf(cls) < 0){transitionClasses.push(cls);addClass(el,cls);}}function removeTransitionClass(el,cls){if(el._transitionClasses){remove(el._transitionClasses,cls);}removeClass(el,cls);}function whenTransitionEnds(el,expectedType,cb){var ref=getTransitionInfo(el,expectedType);var type=ref.type;var timeout=ref.timeout;var propCount=ref.propCount;if(!type){return cb();}var event=type === TRANSITION?transitionEndEvent:animationEndEvent;var ended=0;var end=function end(){el.removeEventListener(event,onEnd);cb();};var onEnd=function onEnd(e){if(e.target === el){if(++ended >= propCount){end();}}};setTimeout(function(){if(ended < propCount){end();}},timeout + 1);el.addEventListener(event,onEnd);}var transformRE=/\b(transform|all)(,|$)/;function getTransitionInfo(el,expectedType){var styles=window.getComputedStyle(el);var transitionDelays=styles[transitionProp + 'Delay'].split(', ');var transitionDurations=styles[transitionProp + 'Duration'].split(', ');var transitionTimeout=getTimeout(transitionDelays,transitionDurations);var animationDelays=styles[animationProp + 'Delay'].split(', ');var animationDurations=styles[animationProp + 'Duration'].split(', ');var animationTimeout=getTimeout(animationDelays,animationDurations);var type;var timeout=0;var propCount=0; /* istanbul ignore if */if(expectedType === TRANSITION){if(transitionTimeout > 0){type = TRANSITION;timeout = transitionTimeout;propCount = transitionDurations.length;}}else if(expectedType === ANIMATION){if(animationTimeout > 0){type = ANIMATION;timeout = animationTimeout;propCount = animationDurations.length;}}else {timeout = Math.max(transitionTimeout,animationTimeout);type = timeout > 0?transitionTimeout > animationTimeout?TRANSITION:ANIMATION:null;propCount = type?type === TRANSITION?transitionDurations.length:animationDurations.length:0;}var hasTransform=type === TRANSITION && transformRE.test(styles[transitionProp + 'Property']);return {type:type,timeout:timeout,propCount:propCount,hasTransform:hasTransform};}function getTimeout(delays,durations){ /* istanbul ignore next */while(delays.length < durations.length) {delays = delays.concat(delays);}return Math.max.apply(null,durations.map(function(d,i){return toMs(d) + toMs(delays[i]);}));}function toMs(s){return Number(s.slice(0,-1)) * 1000;} /*  */function enter(vnode,toggleDisplay){var el=vnode.elm; // call leave callback now
	if(isDef(el._leaveCb)){el._leaveCb.cancelled = true;el._leaveCb();}var data=resolveTransition(vnode.data.transition);if(isUndef(data)){return;} /* istanbul ignore if */if(isDef(el._enterCb) || el.nodeType !== 1){return;}var css=data.css;var type=data.type;var enterClass=data.enterClass;var enterToClass=data.enterToClass;var enterActiveClass=data.enterActiveClass;var appearClass=data.appearClass;var appearToClass=data.appearToClass;var appearActiveClass=data.appearActiveClass;var beforeEnter=data.beforeEnter;var enter=data.enter;var afterEnter=data.afterEnter;var enterCancelled=data.enterCancelled;var beforeAppear=data.beforeAppear;var appear=data.appear;var afterAppear=data.afterAppear;var appearCancelled=data.appearCancelled;var duration=data.duration; // activeInstance will always be the <transition> component managing this
	// transition. One edge case to check is when the <transition> is placed
	// as the root node of a child component. In that case we need to check
	// <transition>'s parent for appear check.
	var context=activeInstance;var transitionNode=activeInstance.$vnode;while(transitionNode && transitionNode.parent) {transitionNode = transitionNode.parent;context = transitionNode.context;}var isAppear=!context._isMounted || !vnode.isRootInsert;if(isAppear && !appear && appear !== ''){return;}var startClass=isAppear && appearClass?appearClass:enterClass;var activeClass=isAppear && appearActiveClass?appearActiveClass:enterActiveClass;var toClass=isAppear && appearToClass?appearToClass:enterToClass;var beforeEnterHook=isAppear?beforeAppear || beforeEnter:beforeEnter;var enterHook=isAppear?typeof appear === 'function'?appear:enter:enter;var afterEnterHook=isAppear?afterAppear || afterEnter:afterEnter;var enterCancelledHook=isAppear?appearCancelled || enterCancelled:enterCancelled;var explicitEnterDuration=toNumber(isObject(duration)?duration.enter:duration);if(("develop") !== 'production' && explicitEnterDuration != null){checkDuration(explicitEnterDuration,'enter',vnode);}var expectsCSS=css !== false && !isIE9;var userWantsControl=getHookArgumentsLength(enterHook);var cb=el._enterCb = once(function(){if(expectsCSS){removeTransitionClass(el,toClass);removeTransitionClass(el,activeClass);}if(cb.cancelled){if(expectsCSS){removeTransitionClass(el,startClass);}enterCancelledHook && enterCancelledHook(el);}else {afterEnterHook && afterEnterHook(el);}el._enterCb = null;});if(!vnode.data.show){ // remove pending leave element on enter by injecting an insert hook
	mergeVNodeHook(vnode,'insert',function(){var parent=el.parentNode;var pendingNode=parent && parent._pending && parent._pending[vnode.key];if(pendingNode && pendingNode.tag === vnode.tag && pendingNode.elm._leaveCb){pendingNode.elm._leaveCb();}enterHook && enterHook(el,cb);});} // start enter transition
	beforeEnterHook && beforeEnterHook(el);if(expectsCSS){addTransitionClass(el,startClass);addTransitionClass(el,activeClass);nextFrame(function(){addTransitionClass(el,toClass);removeTransitionClass(el,startClass);if(!cb.cancelled && !userWantsControl){if(isValidDuration(explicitEnterDuration)){setTimeout(cb,explicitEnterDuration);}else {whenTransitionEnds(el,type,cb);}}});}if(vnode.data.show){toggleDisplay && toggleDisplay();enterHook && enterHook(el,cb);}if(!expectsCSS && !userWantsControl){cb();}}function leave(vnode,rm){var el=vnode.elm; // call enter callback now
	if(isDef(el._enterCb)){el._enterCb.cancelled = true;el._enterCb();}var data=resolveTransition(vnode.data.transition);if(isUndef(data) || el.nodeType !== 1){return rm();} /* istanbul ignore if */if(isDef(el._leaveCb)){return;}var css=data.css;var type=data.type;var leaveClass=data.leaveClass;var leaveToClass=data.leaveToClass;var leaveActiveClass=data.leaveActiveClass;var beforeLeave=data.beforeLeave;var leave=data.leave;var afterLeave=data.afterLeave;var leaveCancelled=data.leaveCancelled;var delayLeave=data.delayLeave;var duration=data.duration;var expectsCSS=css !== false && !isIE9;var userWantsControl=getHookArgumentsLength(leave);var explicitLeaveDuration=toNumber(isObject(duration)?duration.leave:duration);if(("develop") !== 'production' && isDef(explicitLeaveDuration)){checkDuration(explicitLeaveDuration,'leave',vnode);}var cb=el._leaveCb = once(function(){if(el.parentNode && el.parentNode._pending){el.parentNode._pending[vnode.key] = null;}if(expectsCSS){removeTransitionClass(el,leaveToClass);removeTransitionClass(el,leaveActiveClass);}if(cb.cancelled){if(expectsCSS){removeTransitionClass(el,leaveClass);}leaveCancelled && leaveCancelled(el);}else {rm();afterLeave && afterLeave(el);}el._leaveCb = null;});if(delayLeave){delayLeave(performLeave);}else {performLeave();}function performLeave(){ // the delayed leave may have already been cancelled
	if(cb.cancelled){return;} // record leaving element
	if(!vnode.data.show){(el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] = vnode;}beforeLeave && beforeLeave(el);if(expectsCSS){addTransitionClass(el,leaveClass);addTransitionClass(el,leaveActiveClass);nextFrame(function(){addTransitionClass(el,leaveToClass);removeTransitionClass(el,leaveClass);if(!cb.cancelled && !userWantsControl){if(isValidDuration(explicitLeaveDuration)){setTimeout(cb,explicitLeaveDuration);}else {whenTransitionEnds(el,type,cb);}}});}leave && leave(el,cb);if(!expectsCSS && !userWantsControl){cb();}}} // only used in dev mode
	function checkDuration(val,name,vnode){if(typeof val !== 'number'){warn("<transition> explicit " + name + " duration is not a valid number - " + "got " + JSON.stringify(val) + ".",vnode.context);}else if(isNaN(val)){warn("<transition> explicit " + name + " duration is NaN - " + 'the duration expression might be incorrect.',vnode.context);}}function isValidDuration(val){return typeof val === 'number' && !isNaN(val);} /**
	 * Normalize a transition hook's argument length. The hook may be:
	 * - a merged hook (invoker) with the original in .fns
	 * - a wrapped component method (check ._length)
	 * - a plain function (.length)
	 */function getHookArgumentsLength(_x){var _again=true;_function: while(_again) {var fn=_x;_again = false;if(isUndef(fn)){return false;}var invokerFns=fn.fns;if(isDef(invokerFns)){ // invoker
	_x = Array.isArray(invokerFns)?invokerFns[0]:invokerFns;_again = true;invokerFns = undefined;continue _function;}else {return (fn._length || fn.length) > 1;}}}function _enter(_,vnode){if(vnode.data.show !== true){enter(vnode);}}var transition=inBrowser?{create:_enter,activate:_enter,remove:function remove$$1(vnode,rm){ /* istanbul ignore else */if(vnode.data.show !== true){leave(vnode,rm);}else {rm();}}}:{};var platformModules=[attrs,klass,events,domProps,style,transition]; /*  */ // the directive module should be applied last, after all
	// built-in modules have been applied.
	var modules=platformModules.concat(baseModules);var patch=createPatchFunction({nodeOps:nodeOps,modules:modules}); /**
	 * Not type checking this file because flow doesn't like attaching
	 * properties to Elements.
	 */ /* istanbul ignore if */if(isIE9){ // http://www.matts411.com/post/internet-explorer-9-oninput/
	document.addEventListener('selectionchange',function(){var el=document.activeElement;if(el && el.vmodel){trigger(el,'input');}});}var directive={inserted:function inserted(el,binding,vnode,oldVnode){if(vnode.tag === 'select'){ // #6903
	if(oldVnode.elm && !oldVnode.elm._vOptions){mergeVNodeHook(vnode,'postpatch',function(){directive.componentUpdated(el,binding,vnode);});}else {setSelected(el,binding,vnode.context);}el._vOptions = [].map.call(el.options,getValue);}else if(vnode.tag === 'textarea' || isTextInputType(el.type)){el._vModifiers = binding.modifiers;if(!binding.modifiers.lazy){ // Safari < 10.2 & UIWebView doesn't fire compositionend when
	// switching focus before confirming composition choice
	// this also fixes the issue where some browsers e.g. iOS Chrome
	// fires "change" instead of "input" on autocomplete.
	el.addEventListener('change',onCompositionEnd);if(!isAndroid){el.addEventListener('compositionstart',onCompositionStart);el.addEventListener('compositionend',onCompositionEnd);} /* istanbul ignore if */if(isIE9){el.vmodel = true;}}}},componentUpdated:function componentUpdated(el,binding,vnode){if(vnode.tag === 'select'){setSelected(el,binding,vnode.context); // in case the options rendered by v-for have changed,
	// it's possible that the value is out-of-sync with the rendered options.
	// detect such cases and filter out values that no longer has a matching
	// option in the DOM.
	var prevOptions=el._vOptions;var curOptions=el._vOptions = [].map.call(el.options,getValue);if(curOptions.some(function(o,i){return !looseEqual(o,prevOptions[i]);})){ // trigger change event if
	// no matching option found for at least one value
	var needReset=el.multiple?binding.value.some(function(v){return hasNoMatchingOption(v,curOptions);}):binding.value !== binding.oldValue && hasNoMatchingOption(binding.value,curOptions);if(needReset){trigger(el,'change');}}}}};function setSelected(el,binding,vm){actuallySetSelected(el,binding,vm); /* istanbul ignore if */if(isIE || isEdge){setTimeout(function(){actuallySetSelected(el,binding,vm);},0);}}function actuallySetSelected(el,binding,vm){var value=binding.value;var isMultiple=el.multiple;if(isMultiple && !Array.isArray(value)){("develop") !== 'production' && warn("<select multiple v-model=\"" + binding.expression + "\"> " + "expects an Array value for its binding, but got " + Object.prototype.toString.call(value).slice(8,-1),vm);return;}var selected,option;for(var i=0,l=el.options.length;i < l;i++) {option = el.options[i];if(isMultiple){selected = looseIndexOf(value,getValue(option)) > -1;if(option.selected !== selected){option.selected = selected;}}else {if(looseEqual(getValue(option),value)){if(el.selectedIndex !== i){el.selectedIndex = i;}return;}}}if(!isMultiple){el.selectedIndex = -1;}}function hasNoMatchingOption(value,options){return options.every(function(o){return !looseEqual(o,value);});}function getValue(option){return '_value' in option?option._value:option.value;}function onCompositionStart(e){e.target.composing = true;}function onCompositionEnd(e){ // prevent triggering an input event for no reason
	if(!e.target.composing){return;}e.target.composing = false;trigger(e.target,'input');}function trigger(el,type){var e=document.createEvent('HTMLEvents');e.initEvent(type,true,true);el.dispatchEvent(e);} /*  */ // recursively search for possible transition defined inside the component root
	function locateNode(_x2){var _again2=true;_function2: while(_again2) {var vnode=_x2;_again2 = false;if(vnode.componentInstance && (!vnode.data || !vnode.data.transition)){_x2 = vnode.componentInstance._vnode;_again2 = true;continue _function2;}else {return vnode;}}}var show={bind:function bind(el,ref,vnode){var value=ref.value;vnode = locateNode(vnode);var transition$$1=vnode.data && vnode.data.transition;var originalDisplay=el.__vOriginalDisplay = el.style.display === 'none'?'':el.style.display;if(value && transition$$1){vnode.data.show = true;enter(vnode,function(){el.style.display = originalDisplay;});}else {el.style.display = value?originalDisplay:'none';}},update:function update(el,ref,vnode){var value=ref.value;var oldValue=ref.oldValue; /* istanbul ignore if */if(value === oldValue){return;}vnode = locateNode(vnode);var transition$$1=vnode.data && vnode.data.transition;if(transition$$1){vnode.data.show = true;if(value){enter(vnode,function(){el.style.display = el.__vOriginalDisplay;});}else {leave(vnode,function(){el.style.display = 'none';});}}else {el.style.display = value?el.__vOriginalDisplay:'none';}},unbind:function unbind(el,binding,vnode,oldVnode,isDestroy){if(!isDestroy){el.style.display = el.__vOriginalDisplay;}}};var platformDirectives={model:directive,show:show}; /*  */ // Provides transition support for a single element/component.
	// supports transition mode (out-in / in-out)
	var transitionProps={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]}; // in case the child is also an abstract component, e.g. <keep-alive>
	// we want to recursively retrieve the real component to be rendered
	function getRealChild(_x3){var _again3=true;_function3: while(_again3) {var vnode=_x3;_again3 = false;var compOptions=vnode && vnode.componentOptions;if(compOptions && compOptions.Ctor.options.abstract){_x3 = getFirstComponentChild(compOptions.children);_again3 = true;compOptions = undefined;continue _function3;}else {return vnode;}}}function extractTransitionData(comp){var data={};var options=comp.$options; // props
	for(var key in options.propsData) {data[key] = comp[key];} // events.
	// extract listeners and pass them directly to the transition methods
	var listeners=options._parentListeners;for(var key$1 in listeners) {data[camelize(key$1)] = listeners[key$1];}return data;}function placeholder(h,rawChild){if(/\d-keep-alive$/.test(rawChild.tag)){return h('keep-alive',{props:rawChild.componentOptions.propsData});}}function hasParentTransition(vnode){while(vnode = vnode.parent) {if(vnode.data.transition){return true;}}}function isSameChild(child,oldChild){return oldChild.key === child.key && oldChild.tag === child.tag;}var Transition={name:'transition',props:transitionProps,abstract:true,render:function render(h){var this$1=this;var children=this.$slots['default'];if(!children){return;} // filter out text nodes (possible whitespaces)
	children = children.filter(function(c){return c.tag || isAsyncPlaceholder(c);}); /* istanbul ignore if */if(!children.length){return;} // warn multiple elements
	if(("develop") !== 'production' && children.length > 1){warn('<transition> can only be used on a single element. Use ' + '<transition-group> for lists.',this.$parent);}var mode=this.mode; // warn invalid mode
	if(("develop") !== 'production' && mode && mode !== 'in-out' && mode !== 'out-in'){warn('invalid <transition> mode: ' + mode,this.$parent);}var rawChild=children[0]; // if this is a component root node and the component's
	// parent container node also has transition, skip.
	if(hasParentTransition(this.$vnode)){return rawChild;} // apply transition data to child
	// use getRealChild() to ignore abstract components e.g. keep-alive
	var child=getRealChild(rawChild); /* istanbul ignore if */if(!child){return rawChild;}if(this._leaving){return placeholder(h,rawChild);} // ensure a key that is unique to the vnode type and to this transition
	// component instance. This key will be used to remove pending leaving nodes
	// during entering.
	var id="__transition-" + this._uid + "-";child.key = child.key == null?child.isComment?id + 'comment':id + child.tag:isPrimitive(child.key)?String(child.key).indexOf(id) === 0?child.key:id + child.key:child.key;var data=(child.data || (child.data = {})).transition = extractTransitionData(this);var oldRawChild=this._vnode;var oldChild=getRealChild(oldRawChild); // mark v-show
	// so that the transition module can hand over the control to the directive
	if(child.data.directives && child.data.directives.some(function(d){return d.name === 'show';})){child.data.show = true;}if(oldChild && oldChild.data && !isSameChild(child,oldChild) && !isAsyncPlaceholder(oldChild) &&  // #6687 component root is a comment node
	!(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)){ // replace old child transition data with fresh one
	// important for dynamic transitions!
	var oldData=oldChild.data.transition = extend({},data); // handle transition mode
	if(mode === 'out-in'){ // return placeholder node and queue update when leave finishes
	this._leaving = true;mergeVNodeHook(oldData,'afterLeave',function(){this$1._leaving = false;this$1.$forceUpdate();});return placeholder(h,rawChild);}else if(mode === 'in-out'){if(isAsyncPlaceholder(child)){return oldRawChild;}var delayedLeave;var performLeave=function performLeave(){delayedLeave();};mergeVNodeHook(data,'afterEnter',performLeave);mergeVNodeHook(data,'enterCancelled',performLeave);mergeVNodeHook(oldData,'delayLeave',function(leave){delayedLeave = leave;});}}return rawChild;}}; /*  */ // Provides transition support for list items.
	// supports move transitions using the FLIP technique.
	// Because the vdom's children update algorithm is "unstable" - i.e.
	// it doesn't guarantee the relative positioning of removed elements,
	// we force transition-group to update its children into two passes:
	// in the first pass, we remove all nodes that need to be removed,
	// triggering their leaving transition; in the second pass, we insert/move
	// into the final desired state. This way in the second pass removed
	// nodes will remain where they should be.
	var props=extend({tag:String,moveClass:String},transitionProps);delete props.mode;var TransitionGroup={props:props,render:function render(h){var tag=this.tag || this.$vnode.data.tag || 'span';var map=Object.create(null);var prevChildren=this.prevChildren = this.children;var rawChildren=this.$slots['default'] || [];var children=this.children = [];var transitionData=extractTransitionData(this);for(var i=0;i < rawChildren.length;i++) {var c=rawChildren[i];if(c.tag){if(c.key != null && String(c.key).indexOf('__vlist') !== 0){children.push(c);map[c.key] = c;(c.data || (c.data = {})).transition = transitionData;}else if(true){var opts=c.componentOptions;var name=opts?opts.Ctor.options.name || opts.tag || '':c.tag;warn("<transition-group> children must be keyed: <" + name + ">");}}}if(prevChildren){var kept=[];var removed=[];for(var i$1=0;i$1 < prevChildren.length;i$1++) {var c$1=prevChildren[i$1];c$1.data.transition = transitionData;c$1.data.pos = c$1.elm.getBoundingClientRect();if(map[c$1.key]){kept.push(c$1);}else {removed.push(c$1);}}this.kept = h(tag,null,kept);this.removed = removed;}return h(tag,null,children);},beforeUpdate:function beforeUpdate(){ // force removing pass
	this.__patch__(this._vnode,this.kept,false, // hydrating
	true // removeOnly (!important avoids unnecessary moves)
	);this._vnode = this.kept;},updated:function updated(){var children=this.prevChildren;var moveClass=this.moveClass || (this.name || 'v') + '-move';if(!children.length || !this.hasMove(children[0].elm,moveClass)){return;} // we divide the work into three loops to avoid mixing DOM reads and writes
	// in each iteration - which helps prevent layout thrashing.
	children.forEach(callPendingCbs);children.forEach(recordPosition);children.forEach(applyTranslation); // force reflow to put everything in position
	// assign to this to avoid being removed in tree-shaking
	// $flow-disable-line
	this._reflow = document.body.offsetHeight;children.forEach(function(c){if(c.data.moved){var el=c.elm;var s=el.style;addTransitionClass(el,moveClass);s.transform = s.WebkitTransform = s.transitionDuration = '';el.addEventListener(transitionEndEvent,el._moveCb = function cb(e){if(!e || /transform$/.test(e.propertyName)){el.removeEventListener(transitionEndEvent,cb);el._moveCb = null;removeTransitionClass(el,moveClass);}});}});},methods:{hasMove:function hasMove(el,moveClass){ /* istanbul ignore if */if(!hasTransition){return false;} /* istanbul ignore if */if(this._hasMove){return this._hasMove;} // Detect whether an element with the move class applied has
	// CSS transitions. Since the element may be inside an entering
	// transition at this very moment, we make a clone of it and remove
	// all other transition classes applied to ensure only the move class
	// is applied.
	var clone=el.cloneNode();if(el._transitionClasses){el._transitionClasses.forEach(function(cls){removeClass(clone,cls);});}addClass(clone,moveClass);clone.style.display = 'none';this.$el.appendChild(clone);var info=getTransitionInfo(clone);this.$el.removeChild(clone);return this._hasMove = info.hasTransform;}}};function callPendingCbs(c){ /* istanbul ignore if */if(c.elm._moveCb){c.elm._moveCb();} /* istanbul ignore if */if(c.elm._enterCb){c.elm._enterCb();}}function recordPosition(c){c.data.newPos = c.elm.getBoundingClientRect();}function applyTranslation(c){var oldPos=c.data.pos;var newPos=c.data.newPos;var dx=oldPos.left - newPos.left;var dy=oldPos.top - newPos.top;if(dx || dy){c.data.moved = true;var s=c.elm.style;s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";s.transitionDuration = '0s';}}var platformComponents={Transition:Transition,TransitionGroup:TransitionGroup}; /*  */ // install platform specific utils
	Vue$3.config.mustUseProp = mustUseProp;Vue$3.config.isReservedTag = isReservedTag;Vue$3.config.isReservedAttr = isReservedAttr;Vue$3.config.getTagNamespace = getTagNamespace;Vue$3.config.isUnknownElement = isUnknownElement; // install platform runtime directives & components
	extend(Vue$3.options.directives,platformDirectives);extend(Vue$3.options.components,platformComponents); // install platform patch function
	Vue$3.prototype.__patch__ = inBrowser?patch:noop; // public mount method
	Vue$3.prototype.$mount = function(el,hydrating){el = el && inBrowser?query(el):undefined;return mountComponent(this,el,hydrating);}; // devtools global hook
	/* istanbul ignore next */Vue$3.nextTick(function(){if(config.devtools){if(devtools){devtools.emit('init',Vue$3);}else if(("develop") !== 'production' && isChrome){console[console.info?'info':'log']('Download the Vue Devtools extension for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');}}if(("develop") !== 'production' && config.productionTip !== false && inBrowser && typeof console !== 'undefined'){console[console.info?'info':'log']("You are running Vue in development mode.\n" + "Make sure to turn on production mode when deploying for production.\n" + "See more tips at https://vuejs.org/guide/deployment.html");}},0); /*  */var defaultTagRE=/\{\{((?:.|\n)+?)\}\}/g;var regexEscapeRE=/[-.*+?^${}()|[\]\/\\]/g;var buildRegex=cached(function(delimiters){var open=delimiters[0].replace(regexEscapeRE,'\\$&');var close=delimiters[1].replace(regexEscapeRE,'\\$&');return new RegExp(open + '((?:.|\\n)+?)' + close,'g');});function parseText(text,delimiters){var tagRE=delimiters?buildRegex(delimiters):defaultTagRE;if(!tagRE.test(text)){return;}var tokens=[];var rawTokens=[];var lastIndex=tagRE.lastIndex = 0;var match,index,tokenValue;while(match = tagRE.exec(text)) {index = match.index; // push text token
	if(index > lastIndex){rawTokens.push(tokenValue = text.slice(lastIndex,index));tokens.push(JSON.stringify(tokenValue));} // tag token
	var exp=parseFilters(match[1].trim());tokens.push("_s(" + exp + ")");rawTokens.push({'@binding':exp});lastIndex = index + match[0].length;}if(lastIndex < text.length){rawTokens.push(tokenValue = text.slice(lastIndex));tokens.push(JSON.stringify(tokenValue));}return {expression:tokens.join('+'),tokens:rawTokens};} /*  */function transformNode(el,options){var warn=options.warn || baseWarn;var staticClass=getAndRemoveAttr(el,'class');if(("develop") !== 'production' && staticClass){var res=parseText(staticClass,options.delimiters);if(res){warn("class=\"" + staticClass + "\": " + 'Interpolation inside attributes has been removed. ' + 'Use v-bind or the colon shorthand instead. For example, ' + 'instead of <div class="{{ val }}">, use <div :class="val">.');}}if(staticClass){el.staticClass = JSON.stringify(staticClass);}var classBinding=getBindingAttr(el,'class',false /* getStatic */);if(classBinding){el.classBinding = classBinding;}}function genData(el){var data='';if(el.staticClass){data += "staticClass:" + el.staticClass + ",";}if(el.classBinding){data += "class:" + el.classBinding + ",";}return data;}var klass$1={staticKeys:['staticClass'],transformNode:transformNode,genData:genData}; /*  */function transformNode$1(el,options){var warn=options.warn || baseWarn;var staticStyle=getAndRemoveAttr(el,'style');if(staticStyle){ /* istanbul ignore if */if(true){var res=parseText(staticStyle,options.delimiters);if(res){warn("style=\"" + staticStyle + "\": " + 'Interpolation inside attributes has been removed. ' + 'Use v-bind or the colon shorthand instead. For example, ' + 'instead of <div style="{{ val }}">, use <div :style="val">.');}}el.staticStyle = JSON.stringify(parseStyleText(staticStyle));}var styleBinding=getBindingAttr(el,'style',false /* getStatic */);if(styleBinding){el.styleBinding = styleBinding;}}function genData$1(el){var data='';if(el.staticStyle){data += "staticStyle:" + el.staticStyle + ",";}if(el.styleBinding){data += "style:(" + el.styleBinding + "),";}return data;}var style$1={staticKeys:['staticStyle'],transformNode:transformNode$1,genData:genData$1}; /*  */var decoder;var he={decode:function decode(html){decoder = decoder || document.createElement('div');decoder.innerHTML = html;return decoder.textContent;}}; /*  */var isUnaryTag=makeMap('area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' + 'link,meta,param,source,track,wbr'); // Elements that you can, intentionally, leave open
	// (and which close themselves)
	var canBeLeftOpenTag=makeMap('colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'); // HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
	// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
	var isNonPhrasingTag=makeMap('address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' + 'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' + 'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' + 'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' + 'title,tr,track'); /**
	 * Not type-checking this file because it's mostly vendor code.
	 */ /*!
	 * HTML Parser By John Resig (ejohn.org)
	 * Modified by Juriy "kangax" Zaytsev
	 * Original code by Erik Arvidsson, Mozilla Public License
	 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
	 */ // Regular Expressions for parsing tags and attributes
	var attribute=/^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/; // could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
	// but for Vue templates we can enforce a simple charset
	var ncname='[a-zA-Z_][\\w\\-\\.]*';var qnameCapture="((?:" + ncname + "\\:)?" + ncname + ")";var startTagOpen=new RegExp("^<" + qnameCapture);var startTagClose=/^\s*(\/?)>/;var endTag=new RegExp("^<\\/" + qnameCapture + "[^>]*>");var doctype=/^<!DOCTYPE [^>]+>/i;var comment=/^<!--/;var conditionalComment=/^<!\[/;var IS_REGEX_CAPTURING_BROKEN=false;'x'.replace(/x(.)?/g,function(m,g){IS_REGEX_CAPTURING_BROKEN = g === '';}); // Special Elements (can contain anything)
	var isPlainTextElement=makeMap('script,style,textarea',true);var reCache={};var decodingMap={'&lt;':'<','&gt;':'>','&quot;':'"','&amp;':'&','&#10;':'\n','&#9;':'\t'};var encodedAttr=/&(?:lt|gt|quot|amp);/g;var encodedAttrWithNewLines=/&(?:lt|gt|quot|amp|#10|#9);/g; // #5992
	var isIgnoreNewlineTag=makeMap('pre,textarea',true);var shouldIgnoreFirstNewline=function shouldIgnoreFirstNewline(tag,html){return tag && isIgnoreNewlineTag(tag) && html[0] === '\n';};function decodeAttr(value,shouldDecodeNewlines){var re=shouldDecodeNewlines?encodedAttrWithNewLines:encodedAttr;return value.replace(re,function(match){return decodingMap[match];});}function parseHTML(html,options){var stack=[];var expectHTML=options.expectHTML;var isUnaryTag$$1=options.isUnaryTag || no;var canBeLeftOpenTag$$1=options.canBeLeftOpenTag || no;var index=0;var last,lastTag;while(html) {last = html; // Make sure we're not in a plaintext content element like script/style
	if(!lastTag || !isPlainTextElement(lastTag)){var textEnd=html.indexOf('<');if(textEnd === 0){ // Comment:
	if(comment.test(html)){var commentEnd=html.indexOf('-->');if(commentEnd >= 0){if(options.shouldKeepComment){options.comment(html.substring(4,commentEnd));}advance(commentEnd + 3);continue;}} // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
	if(conditionalComment.test(html)){var conditionalEnd=html.indexOf(']>');if(conditionalEnd >= 0){advance(conditionalEnd + 2);continue;}} // Doctype:
	var doctypeMatch=html.match(doctype);if(doctypeMatch){advance(doctypeMatch[0].length);continue;} // End tag:
	var endTagMatch=html.match(endTag);if(endTagMatch){var curIndex=index;advance(endTagMatch[0].length);parseEndTag(endTagMatch[1],curIndex,index);continue;} // Start tag:
	var startTagMatch=parseStartTag();if(startTagMatch){handleStartTag(startTagMatch);if(shouldIgnoreFirstNewline(lastTag,html)){advance(1);}continue;}}var text=void 0,rest=void 0,next=void 0;if(textEnd >= 0){rest = html.slice(textEnd);while(!endTag.test(rest) && !startTagOpen.test(rest) && !comment.test(rest) && !conditionalComment.test(rest)) { // < in plain text, be forgiving and treat it as text
	next = rest.indexOf('<',1);if(next < 0){break;}textEnd += next;rest = html.slice(textEnd);}text = html.substring(0,textEnd);advance(textEnd);}if(textEnd < 0){text = html;html = '';}if(options.chars && text){options.chars(text);}}else {var endTagLength=0;var stackedTag=lastTag.toLowerCase();var reStackedTag=reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)','i'));var rest$1=html.replace(reStackedTag,function(all,text,endTag){endTagLength = endTag.length;if(!isPlainTextElement(stackedTag) && stackedTag !== 'noscript'){text = text.replace(/<!--([\s\S]*?)-->/g,'$1').replace(/<!\[CDATA\[([\s\S]*?)]]>/g,'$1');}if(shouldIgnoreFirstNewline(stackedTag,text)){text = text.slice(1);}if(options.chars){options.chars(text);}return '';});index += html.length - rest$1.length;html = rest$1;parseEndTag(stackedTag,index - endTagLength,index);}if(html === last){options.chars && options.chars(html);if(("develop") !== 'production' && !stack.length && options.warn){options.warn("Mal-formatted tag at end of template: \"" + html + "\"");}break;}} // Clean up any remaining tags
	parseEndTag();function advance(n){index += n;html = html.substring(n);}function parseStartTag(){var start=html.match(startTagOpen);if(start){var match={tagName:start[1],attrs:[],start:index};advance(start[0].length);var end,attr;while(!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {advance(attr[0].length);match.attrs.push(attr);}if(end){match.unarySlash = end[1];advance(end[0].length);match.end = index;return match;}}}function handleStartTag(match){var tagName=match.tagName;var unarySlash=match.unarySlash;if(expectHTML){if(lastTag === 'p' && isNonPhrasingTag(tagName)){parseEndTag(lastTag);}if(canBeLeftOpenTag$$1(tagName) && lastTag === tagName){parseEndTag(tagName);}}var unary=isUnaryTag$$1(tagName) || !!unarySlash;var l=match.attrs.length;var attrs=new Array(l);for(var i=0;i < l;i++) {var args=match.attrs[i]; // hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
	if(IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1){if(args[3] === ''){delete args[3];}if(args[4] === ''){delete args[4];}if(args[5] === ''){delete args[5];}}var value=args[3] || args[4] || args[5] || '';var shouldDecodeNewlines=tagName === 'a' && args[1] === 'href'?options.shouldDecodeNewlinesForHref:options.shouldDecodeNewlines;attrs[i] = {name:args[1],value:decodeAttr(value,shouldDecodeNewlines)};}if(!unary){stack.push({tag:tagName,lowerCasedTag:tagName.toLowerCase(),attrs:attrs});lastTag = tagName;}if(options.start){options.start(tagName,attrs,unary,match.start,match.end);}}function parseEndTag(tagName,start,end){var pos,lowerCasedTagName;if(start == null){start = index;}if(end == null){end = index;}if(tagName){lowerCasedTagName = tagName.toLowerCase();} // Find the closest opened tag of the same type
	if(tagName){for(pos = stack.length - 1;pos >= 0;pos--) {if(stack[pos].lowerCasedTag === lowerCasedTagName){break;}}}else { // If no tag name is provided, clean shop
	pos = 0;}if(pos >= 0){ // Close all the open elements, up the stack
	for(var i=stack.length - 1;i >= pos;i--) {if(("develop") !== 'production' && (i > pos || !tagName) && options.warn){options.warn("tag <" + stack[i].tag + "> has no matching end tag.");}if(options.end){options.end(stack[i].tag,start,end);}} // Remove the open elements from the stack
	stack.length = pos;lastTag = pos && stack[pos - 1].tag;}else if(lowerCasedTagName === 'br'){if(options.start){options.start(tagName,[],true,start,end);}}else if(lowerCasedTagName === 'p'){if(options.start){options.start(tagName,[],false,start,end);}if(options.end){options.end(tagName,start,end);}}}} /*  */var onRE=/^@|^v-on:/;var dirRE=/^v-|^@|^:/;var forAliasRE=/(.*?)\s+(?:in|of)\s+(.*)/;var forIteratorRE=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/;var stripParensRE=/^\(|\)$/g;var argRE=/:(.*)$/;var bindRE=/^:|^v-bind:/;var modifierRE=/\.[^.]+/g;var decodeHTMLCached=cached(he.decode); // configurable state
	var warn$2;var delimiters;var transforms;var preTransforms;var postTransforms;var platformIsPreTag;var platformMustUseProp;var platformGetTagNamespace;function createASTElement(tag,attrs,parent){return {type:1,tag:tag,attrsList:attrs,attrsMap:makeAttrsMap(attrs),parent:parent,children:[]};} /**
	 * Convert HTML string to AST.
	 */function parse(template,options){warn$2 = options.warn || baseWarn;platformIsPreTag = options.isPreTag || no;platformMustUseProp = options.mustUseProp || no;platformGetTagNamespace = options.getTagNamespace || no;transforms = pluckModuleFunction(options.modules,'transformNode');preTransforms = pluckModuleFunction(options.modules,'preTransformNode');postTransforms = pluckModuleFunction(options.modules,'postTransformNode');delimiters = options.delimiters;var stack=[];var preserveWhitespace=options.preserveWhitespace !== false;var root;var currentParent;var inVPre=false;var inPre=false;var warned=false;function warnOnce(msg){if(!warned){warned = true;warn$2(msg);}}function closeElement(element){ // check pre state
	if(element.pre){inVPre = false;}if(platformIsPreTag(element.tag)){inPre = false;} // apply post-transforms
	for(var i=0;i < postTransforms.length;i++) {postTransforms[i](element,options);}}parseHTML(template,{warn:warn$2,expectHTML:options.expectHTML,isUnaryTag:options.isUnaryTag,canBeLeftOpenTag:options.canBeLeftOpenTag,shouldDecodeNewlines:options.shouldDecodeNewlines,shouldDecodeNewlinesForHref:options.shouldDecodeNewlinesForHref,shouldKeepComment:options.comments,start:function start(tag,attrs,unary){ // check namespace.
	// inherit parent ns if there is one
	var ns=currentParent && currentParent.ns || platformGetTagNamespace(tag); // handle IE svg bug
	/* istanbul ignore if */if(isIE && ns === 'svg'){attrs = guardIESVGBug(attrs);}var element=createASTElement(tag,attrs,currentParent);if(ns){element.ns = ns;}if(isForbiddenTag(element) && !isServerRendering()){element.forbidden = true;("develop") !== 'production' && warn$2('Templates should only be responsible for mapping the state to the ' + 'UI. Avoid placing tags with side-effects in your templates, such as ' + "<" + tag + ">" + ', as they will not be parsed.');} // apply pre-transforms
	for(var i=0;i < preTransforms.length;i++) {element = preTransforms[i](element,options) || element;}if(!inVPre){processPre(element);if(element.pre){inVPre = true;}}if(platformIsPreTag(element.tag)){inPre = true;}if(inVPre){processRawAttrs(element);}else if(!element.processed){ // structural directives
	processFor(element);processIf(element);processOnce(element); // element-scope stuff
	processElement(element,options);}function checkRootConstraints(el){if(true){if(el.tag === 'slot' || el.tag === 'template'){warnOnce("Cannot use <" + el.tag + "> as component root element because it may " + 'contain multiple nodes.');}if(el.attrsMap.hasOwnProperty('v-for')){warnOnce('Cannot use v-for on stateful component root element because ' + 'it renders multiple elements.');}}} // tree management
	if(!root){root = element;checkRootConstraints(root);}else if(!stack.length){ // allow root elements with v-if, v-else-if and v-else
	if(root['if'] && (element.elseif || element['else'])){checkRootConstraints(element);addIfCondition(root,{exp:element.elseif,block:element});}else if(true){warnOnce("Component template should contain exactly one root element. " + "If you are using v-if on multiple elements, " + "use v-else-if to chain them instead.");}}if(currentParent && !element.forbidden){if(element.elseif || element['else']){processIfConditions(element,currentParent);}else if(element.slotScope){ // scoped slot
	currentParent.plain = false;var name=element.slotTarget || '"default"';(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;}else {currentParent.children.push(element);element.parent = currentParent;}}if(!unary){currentParent = element;stack.push(element);}else {closeElement(element);}},end:function end(){ // remove trailing whitespace
	var element=stack[stack.length - 1];var lastNode=element.children[element.children.length - 1];if(lastNode && lastNode.type === 3 && lastNode.text === ' ' && !inPre){element.children.pop();} // pop stack
	stack.length -= 1;currentParent = stack[stack.length - 1];closeElement(element);},chars:function chars(text){if(!currentParent){if(true){if(text === template){warnOnce('Component template requires a root element, rather than just text.');}else if(text = text.trim()){warnOnce("text \"" + text + "\" outside root element will be ignored.");}}return;} // IE textarea placeholder bug
	/* istanbul ignore if */if(isIE && currentParent.tag === 'textarea' && currentParent.attrsMap.placeholder === text){return;}var children=currentParent.children;text = inPre || text.trim()?isTextTag(currentParent)?text:decodeHTMLCached(text) // only preserve whitespace if its not right after a starting tag
	:preserveWhitespace && children.length?' ':'';if(text){var res;if(!inVPre && text !== ' ' && (res = parseText(text,delimiters))){children.push({type:2,expression:res.expression,tokens:res.tokens,text:text});}else if(text !== ' ' || !children.length || children[children.length - 1].text !== ' '){children.push({type:3,text:text});}}},comment:function comment(text){currentParent.children.push({type:3,text:text,isComment:true});}});return root;}function processPre(el){if(getAndRemoveAttr(el,'v-pre') != null){el.pre = true;}}function processRawAttrs(el){var l=el.attrsList.length;if(l){var attrs=el.attrs = new Array(l);for(var i=0;i < l;i++) {attrs[i] = {name:el.attrsList[i].name,value:JSON.stringify(el.attrsList[i].value)};}}else if(!el.pre){ // non root node in pre blocks with no attributes
	el.plain = true;}}function processElement(element,options){processKey(element); // determine whether this is a plain element after
	// removing structural attributes
	element.plain = !element.key && !element.attrsList.length;processRef(element);processSlot(element);processComponent(element);for(var i=0;i < transforms.length;i++) {element = transforms[i](element,options) || element;}processAttrs(element);}function processKey(el){var exp=getBindingAttr(el,'key');if(exp){if(("develop") !== 'production' && el.tag === 'template'){warn$2("<template> cannot be keyed. Place the key on real elements instead.");}el.key = exp;}}function processRef(el){var ref=getBindingAttr(el,'ref');if(ref){el.ref = ref;el.refInFor = checkInFor(el);}}function processFor(el){var exp;if(exp = getAndRemoveAttr(el,'v-for')){var res=parseFor(exp);if(res){extend(el,res);}else if(true){warn$2("Invalid v-for expression: " + exp);}}}function parseFor(exp){var inMatch=exp.match(forAliasRE);if(!inMatch){return;}var res={};res['for'] = inMatch[2].trim();var alias=inMatch[1].trim().replace(stripParensRE,'');var iteratorMatch=alias.match(forIteratorRE);if(iteratorMatch){res.alias = alias.replace(forIteratorRE,'');res.iterator1 = iteratorMatch[1].trim();if(iteratorMatch[2]){res.iterator2 = iteratorMatch[2].trim();}}else {res.alias = alias;}return res;}function processIf(el){var exp=getAndRemoveAttr(el,'v-if');if(exp){el['if'] = exp;addIfCondition(el,{exp:exp,block:el});}else {if(getAndRemoveAttr(el,'v-else') != null){el['else'] = true;}var elseif=getAndRemoveAttr(el,'v-else-if');if(elseif){el.elseif = elseif;}}}function processIfConditions(el,parent){var prev=findPrevElement(parent.children);if(prev && prev['if']){addIfCondition(prev,{exp:el.elseif,block:el});}else if(true){warn$2("v-" + (el.elseif?'else-if="' + el.elseif + '"':'else') + " " + "used on element <" + el.tag + "> without corresponding v-if.");}}function findPrevElement(children){var i=children.length;while(i--) {if(children[i].type === 1){return children[i];}else {if(("develop") !== 'production' && children[i].text !== ' '){warn$2("text \"" + children[i].text.trim() + "\" between v-if and v-else(-if) " + "will be ignored.");}children.pop();}}}function addIfCondition(el,condition){if(!el.ifConditions){el.ifConditions = [];}el.ifConditions.push(condition);}function processOnce(el){var once$$1=getAndRemoveAttr(el,'v-once');if(once$$1 != null){el.once = true;}}function processSlot(el){if(el.tag === 'slot'){el.slotName = getBindingAttr(el,'name');if(("develop") !== 'production' && el.key){warn$2("`key` does not work on <slot> because slots are abstract outlets " + "and can possibly expand into multiple elements. " + "Use the key on a wrapping element instead.");}}else {var slotScope;if(el.tag === 'template'){slotScope = getAndRemoveAttr(el,'scope'); /* istanbul ignore if */if(("develop") !== 'production' && slotScope){warn$2("the \"scope\" attribute for scoped slots have been deprecated and " + "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " + "can also be used on plain elements in addition to <template> to " + "denote scoped slots.",true);}el.slotScope = slotScope || getAndRemoveAttr(el,'slot-scope');}else if(slotScope = getAndRemoveAttr(el,'slot-scope')){ /* istanbul ignore if */if(("develop") !== 'production' && el.attrsMap['v-for']){warn$2("Ambiguous combined usage of slot-scope and v-for on <" + el.tag + "> " + "(v-for takes higher priority). Use a wrapper <template> for the " + "scoped slot to make it clearer.",true);}el.slotScope = slotScope;}var slotTarget=getBindingAttr(el,'slot');if(slotTarget){el.slotTarget = slotTarget === '""'?'"default"':slotTarget; // preserve slot as an attribute for native shadow DOM compat
	// only for non-scoped slots.
	if(el.tag !== 'template' && !el.slotScope){addAttr(el,'slot',slotTarget);}}}}function processComponent(el){var binding;if(binding = getBindingAttr(el,'is')){el.component = binding;}if(getAndRemoveAttr(el,'inline-template') != null){el.inlineTemplate = true;}}function processAttrs(el){var list=el.attrsList;var i,l,name,rawName,value,modifiers,isProp;for(i = 0,l = list.length;i < l;i++) {name = rawName = list[i].name;value = list[i].value;if(dirRE.test(name)){ // mark element as dynamic
	el.hasBindings = true; // modifiers
	modifiers = parseModifiers(name);if(modifiers){name = name.replace(modifierRE,'');}if(bindRE.test(name)){ // v-bind
	name = name.replace(bindRE,'');value = parseFilters(value);isProp = false;if(modifiers){if(modifiers.prop){isProp = true;name = camelize(name);if(name === 'innerHtml'){name = 'innerHTML';}}if(modifiers.camel){name = camelize(name);}if(modifiers.sync){addHandler(el,"update:" + camelize(name),genAssignmentCode(value,"$event"));}}if(isProp || !el.component && platformMustUseProp(el.tag,el.attrsMap.type,name)){addProp(el,name,value);}else {addAttr(el,name,value);}}else if(onRE.test(name)){ // v-on
	name = name.replace(onRE,'');addHandler(el,name,value,modifiers,false,warn$2);}else { // normal directives
	name = name.replace(dirRE,''); // parse arg
	var argMatch=name.match(argRE);var arg=argMatch && argMatch[1];if(arg){name = name.slice(0,-(arg.length + 1));}addDirective(el,name,rawName,value,arg,modifiers);if(("develop") !== 'production' && name === 'model'){checkForAliasModel(el,value);}}}else { // literal attribute
	if(true){var res=parseText(value,delimiters);if(res){warn$2(name + "=\"" + value + "\": " + 'Interpolation inside attributes has been removed. ' + 'Use v-bind or the colon shorthand instead. For example, ' + 'instead of <div id="{{ val }}">, use <div :id="val">.');}}addAttr(el,name,JSON.stringify(value)); // #6887 firefox doesn't update muted state if set via attribute
	// even immediately after element creation
	if(!el.component && name === 'muted' && platformMustUseProp(el.tag,el.attrsMap.type,name)){addProp(el,name,'true');}}}}function checkInFor(el){var parent=el;while(parent) {if(parent['for'] !== undefined){return true;}parent = parent.parent;}return false;}function parseModifiers(name){var match=name.match(modifierRE);if(match){var ret={};match.forEach(function(m){ret[m.slice(1)] = true;});return ret;}}function makeAttrsMap(attrs){var map={};for(var i=0,l=attrs.length;i < l;i++) {if(("develop") !== 'production' && map[attrs[i].name] && !isIE && !isEdge){warn$2('duplicate attribute: ' + attrs[i].name);}map[attrs[i].name] = attrs[i].value;}return map;} // for script (e.g. type="x/template") or style, do not decode content
	function isTextTag(el){return el.tag === 'script' || el.tag === 'style';}function isForbiddenTag(el){return el.tag === 'style' || el.tag === 'script' && (!el.attrsMap.type || el.attrsMap.type === 'text/javascript');}var ieNSBug=/^xmlns:NS\d+/;var ieNSPrefix=/^NS\d+:/; /* istanbul ignore next */function guardIESVGBug(attrs){var res=[];for(var i=0;i < attrs.length;i++) {var attr=attrs[i];if(!ieNSBug.test(attr.name)){attr.name = attr.name.replace(ieNSPrefix,'');res.push(attr);}}return res;}function checkForAliasModel(el,value){var _el=el;while(_el) {if(_el['for'] && _el.alias === value){warn$2("<" + el.tag + " v-model=\"" + value + "\">: " + "You are binding v-model directly to a v-for iteration alias. " + "This will not be able to modify the v-for source array because " + "writing to the alias is like modifying a function local variable. " + "Consider using an array of objects and use v-model on an object property instead.");}_el = _el.parent;}} /*  */ /**
	 * Expand input[v-model] with dyanmic type bindings into v-if-else chains
	 * Turn this:
	 *   <input v-model="data[type]" :type="type">
	 * into this:
	 *   <input v-if="type === 'checkbox'" type="checkbox" v-model="data[type]">
	 *   <input v-else-if="type === 'radio'" type="radio" v-model="data[type]">
	 *   <input v-else :type="type" v-model="data[type]">
	 */function preTransformNode(el,options){if(el.tag === 'input'){var map=el.attrsMap;if(map['v-model'] && (map['v-bind:type'] || map[':type'])){var typeBinding=getBindingAttr(el,'type');var ifCondition=getAndRemoveAttr(el,'v-if',true);var ifConditionExtra=ifCondition?"&&(" + ifCondition + ")":"";var hasElse=getAndRemoveAttr(el,'v-else',true) != null;var elseIfCondition=getAndRemoveAttr(el,'v-else-if',true); // 1. checkbox
	var branch0=cloneASTElement(el); // process for on the main node
	processFor(branch0);addRawAttr(branch0,'type','checkbox');processElement(branch0,options);branch0.processed = true; // prevent it from double-processed
	branch0['if'] = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;addIfCondition(branch0,{exp:branch0['if'],block:branch0}); // 2. add radio else-if condition
	var branch1=cloneASTElement(el);getAndRemoveAttr(branch1,'v-for',true);addRawAttr(branch1,'type','radio');processElement(branch1,options);addIfCondition(branch0,{exp:"(" + typeBinding + ")==='radio'" + ifConditionExtra,block:branch1}); // 3. other
	var branch2=cloneASTElement(el);getAndRemoveAttr(branch2,'v-for',true);addRawAttr(branch2,':type',typeBinding);processElement(branch2,options);addIfCondition(branch0,{exp:ifCondition,block:branch2});if(hasElse){branch0['else'] = true;}else if(elseIfCondition){branch0.elseif = elseIfCondition;}return branch0;}}}function cloneASTElement(el){return createASTElement(el.tag,el.attrsList.slice(),el.parent);}var model$2={preTransformNode:preTransformNode};var modules$1=[klass$1,style$1,model$2]; /*  */function text(el,dir){if(dir.value){addProp(el,'textContent',"_s(" + dir.value + ")");}} /*  */function html(el,dir){if(dir.value){addProp(el,'innerHTML',"_s(" + dir.value + ")");}}var directives$1={model:model,text:text,html:html}; /*  */var baseOptions={expectHTML:true,modules:modules$1,directives:directives$1,isPreTag:isPreTag,isUnaryTag:isUnaryTag,mustUseProp:mustUseProp,canBeLeftOpenTag:canBeLeftOpenTag,isReservedTag:isReservedTag,getTagNamespace:getTagNamespace,staticKeys:genStaticKeys(modules$1)}; /*  */var isStaticKey;var isPlatformReservedTag;var genStaticKeysCached=cached(genStaticKeys$1); /**
	 * Goal of the optimizer: walk the generated template AST tree
	 * and detect sub-trees that are purely static, i.e. parts of
	 * the DOM that never needs to change.
	 *
	 * Once we detect these sub-trees, we can:
	 *
	 * 1. Hoist them into constants, so that we no longer need to
	 *    create fresh nodes for them on each re-render;
	 * 2. Completely skip them in the patching process.
	 */function optimize(root,options){if(!root){return;}isStaticKey = genStaticKeysCached(options.staticKeys || '');isPlatformReservedTag = options.isReservedTag || no; // first pass: mark all non-static nodes.
	markStatic$1(root); // second pass: mark static roots.
	markStaticRoots(root,false);}function genStaticKeys$1(keys){return makeMap('type,tag,attrsList,attrsMap,plain,parent,children,attrs' + (keys?',' + keys:''));}function markStatic$1(node){node['static'] = isStatic(node);if(node.type === 1){ // do not make component slot content static. this avoids
	// 1. components not able to mutate slot nodes
	// 2. static slot content fails for hot-reloading
	if(!isPlatformReservedTag(node.tag) && node.tag !== 'slot' && node.attrsMap['inline-template'] == null){return;}for(var i=0,l=node.children.length;i < l;i++) {var child=node.children[i];markStatic$1(child);if(!child['static']){node['static'] = false;}}if(node.ifConditions){for(var i$1=1,l$1=node.ifConditions.length;i$1 < l$1;i$1++) {var block=node.ifConditions[i$1].block;markStatic$1(block);if(!block['static']){node['static'] = false;}}}}}function markStaticRoots(node,isInFor){if(node.type === 1){if(node['static'] || node.once){node.staticInFor = isInFor;} // For a node to qualify as a static root, it should have children that
	// are not just static text. Otherwise the cost of hoisting out will
	// outweigh the benefits and it's better off to just always render it fresh.
	if(node['static'] && node.children.length && !(node.children.length === 1 && node.children[0].type === 3)){node.staticRoot = true;return;}else {node.staticRoot = false;}if(node.children){for(var i=0,l=node.children.length;i < l;i++) {markStaticRoots(node.children[i],isInFor || !!node['for']);}}if(node.ifConditions){for(var i$1=1,l$1=node.ifConditions.length;i$1 < l$1;i$1++) {markStaticRoots(node.ifConditions[i$1].block,isInFor);}}}}function isStatic(node){if(node.type === 2){ // expression
	return false;}if(node.type === 3){ // text
	return true;}return !!(node.pre || !node.hasBindings &&  // no dynamic bindings
	!node['if'] && !node['for'] &&  // not v-if or v-for or v-else
	!isBuiltInTag(node.tag) &&  // not a built-in
	isPlatformReservedTag(node.tag) &&  // not a component
	!isDirectChildOfTemplateFor(node) && Object.keys(node).every(isStaticKey));}function isDirectChildOfTemplateFor(node){while(node.parent) {node = node.parent;if(node.tag !== 'template'){return false;}if(node['for']){return true;}}return false;} /*  */var fnExpRE=/^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;var simplePathRE=/^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/; // keyCode aliases
	var keyCodes={esc:27,tab:9,enter:13,space:32,up:38,left:37,right:39,down:40,'delete':[8,46]}; // #4868: modifiers that prevent the execution of the listener
	// need to explicitly return null so that we can determine whether to remove
	// the listener for .once
	var genGuard=function genGuard(condition){return "if(" + condition + ")return null;";};var modifierCode={stop:'$event.stopPropagation();',prevent:'$event.preventDefault();',self:genGuard("$event.target !== $event.currentTarget"),ctrl:genGuard("!$event.ctrlKey"),shift:genGuard("!$event.shiftKey"),alt:genGuard("!$event.altKey"),meta:genGuard("!$event.metaKey"),left:genGuard("'button' in $event && $event.button !== 0"),middle:genGuard("'button' in $event && $event.button !== 1"),right:genGuard("'button' in $event && $event.button !== 2")};function genHandlers(events,isNative,warn){var res=isNative?'nativeOn:{':'on:{';for(var name in events) {res += "\"" + name + "\":" + genHandler(name,events[name]) + ",";}return res.slice(0,-1) + '}';}function genHandler(name,handler){if(!handler){return 'function(){}';}if(Array.isArray(handler)){return "[" + handler.map(function(handler){return genHandler(name,handler);}).join(',') + "]";}var isMethodPath=simplePathRE.test(handler.value);var isFunctionExpression=fnExpRE.test(handler.value);if(!handler.modifiers){if(isMethodPath || isFunctionExpression){return handler.value;} /* istanbul ignore if */return "function($event){" + handler.value + "}"; // inline statement
	}else {var code='';var genModifierCode='';var keys=[];for(var key in handler.modifiers) {if(modifierCode[key]){genModifierCode += modifierCode[key]; // left/right
	if(keyCodes[key]){keys.push(key);}}else if(key === 'exact'){var modifiers=handler.modifiers;genModifierCode += genGuard(['ctrl','shift','alt','meta'].filter(function(keyModifier){return !modifiers[keyModifier];}).map(function(keyModifier){return "$event." + keyModifier + "Key";}).join('||'));}else {keys.push(key);}}if(keys.length){code += genKeyFilter(keys);} // Make sure modifiers like prevent and stop get executed after key filtering
	if(genModifierCode){code += genModifierCode;}var handlerCode=isMethodPath?handler.value + '($event)':isFunctionExpression?"(" + handler.value + ")($event)":handler.value; /* istanbul ignore if */return "function($event){" + code + handlerCode + "}";}}function genKeyFilter(keys){return "if(!('button' in $event)&&" + keys.map(genFilterCode).join('&&') + ")return null;";}function genFilterCode(key){var keyVal=parseInt(key,10);if(keyVal){return "$event.keyCode!==" + keyVal;}var code=keyCodes[key];return "_k($event.keyCode," + JSON.stringify(key) + "," + JSON.stringify(code) + "," + "$event.key)";} /*  */function on(el,dir){if(("develop") !== 'production' && dir.modifiers){warn("v-on without argument does not support modifiers.");}el.wrapListeners = function(code){return "_g(" + code + "," + dir.value + ")";};} /*  */function bind$1(el,dir){el.wrapData = function(code){return "_b(" + code + ",'" + el.tag + "'," + dir.value + "," + (dir.modifiers && dir.modifiers.prop?'true':'false') + (dir.modifiers && dir.modifiers.sync?',true':'') + ")";};} /*  */var baseDirectives={on:on,bind:bind$1,cloak:noop}; /*  */var CodegenState=function CodegenState(options){this.options = options;this.warn = options.warn || baseWarn;this.transforms = pluckModuleFunction(options.modules,'transformCode');this.dataGenFns = pluckModuleFunction(options.modules,'genData');this.directives = extend(extend({},baseDirectives),options.directives);var isReservedTag=options.isReservedTag || no;this.maybeComponent = function(el){return !isReservedTag(el.tag);};this.onceId = 0;this.staticRenderFns = [];};function generate(ast,options){var state=new CodegenState(options);var code=ast?genElement(ast,state):'_c("div")';return {render:"with(this){return " + code + "}",staticRenderFns:state.staticRenderFns};}function genElement(el,state){if(el.staticRoot && !el.staticProcessed){return genStatic(el,state);}else if(el.once && !el.onceProcessed){return genOnce(el,state);}else if(el['for'] && !el.forProcessed){return genFor(el,state);}else if(el['if'] && !el.ifProcessed){return genIf(el,state);}else if(el.tag === 'template' && !el.slotTarget){return genChildren(el,state) || 'void 0';}else if(el.tag === 'slot'){return genSlot(el,state);}else { // component or element
	var code;if(el.component){code = genComponent(el.component,el,state);}else {var data=el.plain?undefined:genData$2(el,state);var children=el.inlineTemplate?null:genChildren(el,state,true);code = "_c('" + el.tag + "'" + (data?"," + data:'') + (children?"," + children:'') + ")";} // module transforms
	for(var i=0;i < state.transforms.length;i++) {code = state.transforms[i](el,code);}return code;}} // hoist static sub-trees out
	function genStatic(el,state){el.staticProcessed = true;state.staticRenderFns.push("with(this){return " + genElement(el,state) + "}");return "_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor?',true':'') + ")";} // v-once
	function genOnce(el,state){el.onceProcessed = true;if(el['if'] && !el.ifProcessed){return genIf(el,state);}else if(el.staticInFor){var key='';var parent=el.parent;while(parent) {if(parent['for']){key = parent.key;break;}parent = parent.parent;}if(!key){("develop") !== 'production' && state.warn("v-once can only be used inside v-for that is keyed. ");return genElement(el,state);}return "_o(" + genElement(el,state) + "," + state.onceId++ + "," + key + ")";}else {return genStatic(el,state);}}function genIf(el,state,altGen,altEmpty){el.ifProcessed = true; // avoid recursion
	return genIfConditions(el.ifConditions.slice(),state,altGen,altEmpty);}function genIfConditions(conditions,state,altGen,altEmpty){if(!conditions.length){return altEmpty || '_e()';}var condition=conditions.shift();if(condition.exp){return "(" + condition.exp + ")?" + genTernaryExp(condition.block) + ":" + genIfConditions(conditions,state,altGen,altEmpty);}else {return "" + genTernaryExp(condition.block);} // v-if with v-once should generate code like (a)?_m(0):_m(1)
	function genTernaryExp(el){return altGen?altGen(el,state):el.once?genOnce(el,state):genElement(el,state);}}function genFor(el,state,altGen,altHelper){var exp=el['for'];var alias=el.alias;var iterator1=el.iterator1?"," + el.iterator1:'';var iterator2=el.iterator2?"," + el.iterator2:'';if(("develop") !== 'production' && state.maybeComponent(el) && el.tag !== 'slot' && el.tag !== 'template' && !el.key){state.warn("<" + el.tag + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " + "v-for should have explicit keys. " + "See https://vuejs.org/guide/list.html#key for more info.",true /* tip */);}el.forProcessed = true; // avoid recursion
	return (altHelper || '_l') + "((" + exp + ")," + "function(" + alias + iterator1 + iterator2 + "){" + "return " + (altGen || genElement)(el,state) + '})';}function genData$2(el,state){var data='{'; // directives first.
	// directives may mutate the el's other properties before they are generated.
	var dirs=genDirectives(el,state);if(dirs){data += dirs + ',';} // key
	if(el.key){data += "key:" + el.key + ",";} // ref
	if(el.ref){data += "ref:" + el.ref + ",";}if(el.refInFor){data += "refInFor:true,";} // pre
	if(el.pre){data += "pre:true,";} // record original tag name for components using "is" attribute
	if(el.component){data += "tag:\"" + el.tag + "\",";} // module data generation functions
	for(var i=0;i < state.dataGenFns.length;i++) {data += state.dataGenFns[i](el);} // attributes
	if(el.attrs){data += "attrs:{" + genProps(el.attrs) + "},";} // DOM props
	if(el.props){data += "domProps:{" + genProps(el.props) + "},";} // event handlers
	if(el.events){data += genHandlers(el.events,false,state.warn) + ",";}if(el.nativeEvents){data += genHandlers(el.nativeEvents,true,state.warn) + ",";} // slot target
	// only for non-scoped slots
	if(el.slotTarget && !el.slotScope){data += "slot:" + el.slotTarget + ",";} // scoped slots
	if(el.scopedSlots){data += genScopedSlots(el.scopedSlots,state) + ",";} // component v-model
	if(el.model){data += "model:{value:" + el.model.value + ",callback:" + el.model.callback + ",expression:" + el.model.expression + "},";} // inline-template
	if(el.inlineTemplate){var inlineTemplate=genInlineTemplate(el,state);if(inlineTemplate){data += inlineTemplate + ",";}}data = data.replace(/,$/,'') + '}'; // v-bind data wrap
	if(el.wrapData){data = el.wrapData(data);} // v-on data wrap
	if(el.wrapListeners){data = el.wrapListeners(data);}return data;}function genDirectives(el,state){var dirs=el.directives;if(!dirs){return;}var res='directives:[';var hasRuntime=false;var i,l,dir,needRuntime;for(i = 0,l = dirs.length;i < l;i++) {dir = dirs[i];needRuntime = true;var gen=state.directives[dir.name];if(gen){ // compile-time directive that manipulates AST.
	// returns true if it also needs a runtime counterpart.
	needRuntime = !!gen(el,dir,state.warn);}if(needRuntime){hasRuntime = true;res += "{name:\"" + dir.name + "\",rawName:\"" + dir.rawName + "\"" + (dir.value?",value:(" + dir.value + "),expression:" + JSON.stringify(dir.value):'') + (dir.arg?",arg:\"" + dir.arg + "\"":'') + (dir.modifiers?",modifiers:" + JSON.stringify(dir.modifiers):'') + "},";}}if(hasRuntime){return res.slice(0,-1) + ']';}}function genInlineTemplate(el,state){var ast=el.children[0];if(("develop") !== 'production' && (el.children.length !== 1 || ast.type !== 1)){state.warn('Inline-template components must have exactly one child element.');}if(ast.type === 1){var inlineRenderFns=generate(ast,state.options);return "inlineTemplate:{render:function(){" + inlineRenderFns.render + "},staticRenderFns:[" + inlineRenderFns.staticRenderFns.map(function(code){return "function(){" + code + "}";}).join(',') + "]}";}}function genScopedSlots(slots,state){return "scopedSlots:_u([" + Object.keys(slots).map(function(key){return genScopedSlot(key,slots[key],state);}).join(',') + "])";}function genScopedSlot(key,el,state){if(el['for'] && !el.forProcessed){return genForScopedSlot(key,el,state);}var fn="function(" + String(el.slotScope) + "){" + "return " + (el.tag === 'template'?el['if']?el['if'] + "?" + (genChildren(el,state) || 'undefined') + ":undefined":genChildren(el,state) || 'undefined':genElement(el,state)) + "}";return "{key:" + key + ",fn:" + fn + "}";}function genForScopedSlot(key,el,state){var exp=el['for'];var alias=el.alias;var iterator1=el.iterator1?"," + el.iterator1:'';var iterator2=el.iterator2?"," + el.iterator2:'';el.forProcessed = true; // avoid recursion
	return "_l((" + exp + ")," + "function(" + alias + iterator1 + iterator2 + "){" + "return " + genScopedSlot(key,el,state) + '})';}function genChildren(el,state,checkSkip,altGenElement,altGenNode){var children=el.children;if(children.length){var el$1=children[0]; // optimize single v-for
	if(children.length === 1 && el$1['for'] && el$1.tag !== 'template' && el$1.tag !== 'slot'){return (altGenElement || genElement)(el$1,state);}var normalizationType=checkSkip?getNormalizationType(children,state.maybeComponent):0;var gen=altGenNode || genNode;return "[" + children.map(function(c){return gen(c,state);}).join(',') + "]" + (normalizationType?"," + normalizationType:'');}} // determine the normalization needed for the children array.
	// 0: no normalization needed
	// 1: simple normalization needed (possible 1-level deep nested array)
	// 2: full normalization needed
	function getNormalizationType(children,maybeComponent){var res=0;for(var i=0;i < children.length;i++) {var el=children[i];if(el.type !== 1){continue;}if(needsNormalization(el) || el.ifConditions && el.ifConditions.some(function(c){return needsNormalization(c.block);})){res = 2;break;}if(maybeComponent(el) || el.ifConditions && el.ifConditions.some(function(c){return maybeComponent(c.block);})){res = 1;}}return res;}function needsNormalization(el){return el['for'] !== undefined || el.tag === 'template' || el.tag === 'slot';}function genNode(node,state){if(node.type === 1){return genElement(node,state);}if(node.type === 3 && node.isComment){return genComment(node);}else {return genText(node);}}function genText(text){return "_v(" + (text.type === 2?text.expression // no need for () because already wrapped in _s()
	:transformSpecialNewlines(JSON.stringify(text.text))) + ")";}function genComment(comment){return "_e(" + JSON.stringify(comment.text) + ")";}function genSlot(el,state){var slotName=el.slotName || '"default"';var children=genChildren(el,state);var res="_t(" + slotName + (children?"," + children:'');var attrs=el.attrs && "{" + el.attrs.map(function(a){return camelize(a.name) + ":" + a.value;}).join(',') + "}";var bind$$1=el.attrsMap['v-bind'];if((attrs || bind$$1) && !children){res += ",null";}if(attrs){res += "," + attrs;}if(bind$$1){res += (attrs?'':',null') + "," + bind$$1;}return res + ')';} // componentName is el.component, take it as argument to shun flow's pessimistic refinement
	function genComponent(componentName,el,state){var children=el.inlineTemplate?null:genChildren(el,state,true);return "_c(" + componentName + "," + genData$2(el,state) + (children?"," + children:'') + ")";}function genProps(props){var res='';for(var i=0;i < props.length;i++) {var prop=props[i]; /* istanbul ignore if */{res += "\"" + prop.name + "\":" + transformSpecialNewlines(prop.value) + ",";}}return res.slice(0,-1);} // #3895, #4268
	function transformSpecialNewlines(text){return text.replace(/\u2028/g,'\\u2028').replace(/\u2029/g,'\\u2029');} /*  */ // these keywords should not appear inside expressions, but operators like
	// typeof, instanceof and in are allowed
	var prohibitedKeywordRE=new RegExp('\\b' + ('do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' + 'super,throw,while,yield,delete,export,import,return,switch,default,' + 'extends,finally,continue,debugger,function,arguments').split(',').join('\\b|\\b') + '\\b'); // these unary operators should not be used as property/method names
	var unaryOperatorsRE=new RegExp('\\b' + 'delete,typeof,void'.split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)'); // strip strings in expressions
	var stripStringRE=/'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g; // detect problematic expressions in a template
	function detectErrors(ast){var errors=[];if(ast){checkNode(ast,errors);}return errors;}function checkNode(node,errors){if(node.type === 1){for(var name in node.attrsMap) {if(dirRE.test(name)){var value=node.attrsMap[name];if(value){if(name === 'v-for'){checkFor(node,"v-for=\"" + value + "\"",errors);}else if(onRE.test(name)){checkEvent(value,name + "=\"" + value + "\"",errors);}else {checkExpression(value,name + "=\"" + value + "\"",errors);}}}}if(node.children){for(var i=0;i < node.children.length;i++) {checkNode(node.children[i],errors);}}}else if(node.type === 2){checkExpression(node.expression,node.text,errors);}}function checkEvent(exp,text,errors){var stipped=exp.replace(stripStringRE,'');var keywordMatch=stipped.match(unaryOperatorsRE);if(keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$'){errors.push("avoid using JavaScript unary operator as property name: " + "\"" + keywordMatch[0] + "\" in expression " + text.trim());}checkExpression(exp,text,errors);}function checkFor(node,text,errors){checkExpression(node['for'] || '',text,errors);checkIdentifier(node.alias,'v-for alias',text,errors);checkIdentifier(node.iterator1,'v-for iterator',text,errors);checkIdentifier(node.iterator2,'v-for iterator',text,errors);}function checkIdentifier(ident,type,text,errors){if(typeof ident === 'string'){try{new Function("var " + ident + "=_");}catch(e) {errors.push("invalid " + type + " \"" + ident + "\" in expression: " + text.trim());}}}function checkExpression(exp,text,errors){try{new Function("return " + exp);}catch(e) {var keywordMatch=exp.replace(stripStringRE,'').match(prohibitedKeywordRE);if(keywordMatch){errors.push("avoid using JavaScript keyword as property name: " + "\"" + keywordMatch[0] + "\"\n  Raw expression: " + text.trim());}else {errors.push("invalid expression: " + e.message + " in\n\n" + "    " + exp + "\n\n" + "  Raw expression: " + text.trim() + "\n");}}} /*  */function createFunction(code,errors){try{return new Function(code);}catch(err) {errors.push({err:err,code:code});return noop;}}function createCompileToFunctionFn(compile){var cache=Object.create(null);return function compileToFunctions(template,options,vm){options = extend({},options);var warn$$1=options.warn || warn;delete options.warn; /* istanbul ignore if */if(true){ // detect possible CSP restriction
	try{new Function('return 1');}catch(e) {if(e.toString().match(/unsafe-eval|CSP/)){warn$$1('It seems you are using the standalone build of Vue.js in an ' + 'environment with Content Security Policy that prohibits unsafe-eval. ' + 'The template compiler cannot work in this environment. Consider ' + 'relaxing the policy to allow unsafe-eval or pre-compiling your ' + 'templates into render functions.');}}} // check cache
	var key=options.delimiters?String(options.delimiters) + template:template;if(cache[key]){return cache[key];} // compile
	var compiled=compile(template,options); // check compilation errors/tips
	if(true){if(compiled.errors && compiled.errors.length){warn$$1("Error compiling template:\n\n" + template + "\n\n" + compiled.errors.map(function(e){return "- " + e;}).join('\n') + '\n',vm);}if(compiled.tips && compiled.tips.length){compiled.tips.forEach(function(msg){return tip(msg,vm);});}} // turn code into functions
	var res={};var fnGenErrors=[];res.render = createFunction(compiled.render,fnGenErrors);res.staticRenderFns = compiled.staticRenderFns.map(function(code){return createFunction(code,fnGenErrors);}); // check function generation errors.
	// this should only happen if there is a bug in the compiler itself.
	// mostly for codegen development use
	/* istanbul ignore if */if(true){if((!compiled.errors || !compiled.errors.length) && fnGenErrors.length){warn$$1("Failed to generate render function:\n\n" + fnGenErrors.map(function(ref){var err=ref.err;var code=ref.code;return err.toString() + " in\n\n" + code + "\n";}).join('\n'),vm);}}return cache[key] = res;};} /*  */function createCompilerCreator(baseCompile){return function createCompiler(baseOptions){function compile(template,options){var finalOptions=Object.create(baseOptions);var errors=[];var tips=[];finalOptions.warn = function(msg,tip){(tip?tips:errors).push(msg);};if(options){ // merge custom modules
	if(options.modules){finalOptions.modules = (baseOptions.modules || []).concat(options.modules);} // merge custom directives
	if(options.directives){finalOptions.directives = extend(Object.create(baseOptions.directives || null),options.directives);} // copy other options
	for(var key in options) {if(key !== 'modules' && key !== 'directives'){finalOptions[key] = options[key];}}}var compiled=baseCompile(template,finalOptions);if(true){errors.push.apply(errors,detectErrors(compiled.ast));}compiled.errors = errors;compiled.tips = tips;return compiled;}return {compile:compile,compileToFunctions:createCompileToFunctionFn(compile)};};} /*  */ // `createCompilerCreator` allows creating compilers that use alternative
	// parser/optimizer/codegen, e.g the SSR optimizing compiler.
	// Here we just export a default compiler using the default parts.
	var createCompiler=createCompilerCreator(function baseCompile(template,options){var ast=parse(template.trim(),options);if(options.optimize !== false){optimize(ast,options);}var code=generate(ast,options);return {ast:ast,render:code.render,staticRenderFns:code.staticRenderFns};}); /*  */var ref$1=createCompiler(baseOptions);var compileToFunctions=ref$1.compileToFunctions; /*  */ // check whether current browser encodes a char inside attribute values
	var div;function getShouldDecode(href){div = div || document.createElement('div');div.innerHTML = href?"<a href=\"\n\"/>":"<div a=\"\n\"/>";return div.innerHTML.indexOf('&#10;') > 0;} // #3663: IE encodes newlines inside attribute values while other browsers don't
	var shouldDecodeNewlines=inBrowser?getShouldDecode(false):false; // #6828: chrome encodes content in a[href]
	var shouldDecodeNewlinesForHref=inBrowser?getShouldDecode(true):false; /*  */var idToTemplate=cached(function(id){var el=query(id);return el && el.innerHTML;});var mount=Vue$3.prototype.$mount;Vue$3.prototype.$mount = function(el,hydrating){el = el && query(el); /* istanbul ignore if */if(el === document.body || el === document.documentElement){("develop") !== 'production' && warn("Do not mount Vue to <html> or <body> - mount to normal elements instead.");return this;}var options=this.$options; // resolve template/el and convert to render function
	if(!options.render){var template=options.template;if(template){if(typeof template === 'string'){if(template.charAt(0) === '#'){template = idToTemplate(template); /* istanbul ignore if */if(("develop") !== 'production' && !template){warn("Template element not found or is empty: " + options.template,this);}}}else if(template.nodeType){template = template.innerHTML;}else {if(true){warn('invalid template option:' + template,this);}return this;}}else if(el){template = getOuterHTML(el);}if(template){ /* istanbul ignore if */if(("develop") !== 'production' && config.performance && mark){mark('compile');}var ref=compileToFunctions(template,{shouldDecodeNewlines:shouldDecodeNewlines,shouldDecodeNewlinesForHref:shouldDecodeNewlinesForHref,delimiters:options.delimiters,comments:options.comments},this);var render=ref.render;var staticRenderFns=ref.staticRenderFns;options.render = render;options.staticRenderFns = staticRenderFns; /* istanbul ignore if */if(("develop") !== 'production' && config.performance && mark){mark('compile end');measure("vue " + this._name + " compile",'compile','compile end');}}}return mount.call(this,el,hydrating);}; /**
	 * Get outerHTML of elements, taking care
	 * of SVG elements in IE as well.
	 */function getOuterHTML(el){if(el.outerHTML){return el.outerHTML;}else {var container=document.createElement('div');container.appendChild(el.cloneNode(true));return container.innerHTML;}}Vue$3.compile = compileToFunctions;exports['default'] = Vue$3;module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(15).setImmediate))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var apply = Function.prototype.apply;

	// DOM APIs, for completeness

	exports.setTimeout = function () {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function () {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout = exports.clearInterval = function (timeout) {
	  if (timeout) {
	    timeout.close();
	  }
	};

	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function () {};
	Timeout.prototype.close = function () {
	  this._clearFn.call(window, this._id);
	};

	// Does not start the time, just sets up the members needed.
	exports.enroll = function (item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};

	exports.unenroll = function (item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};

	exports._unrefActive = exports.active = function (item) {
	  clearTimeout(item._idleTimeoutId);

	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout) item._onTimeout();
	    }, msecs);
	  }
	};

	// setimmediate attaches itself to the global object
	__webpack_require__(16);
	exports.setImmediate = setImmediate;
	exports.clearImmediate = clearImmediate;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {"use strict";

	(function (global, undefined) {
	    "use strict";

	    if (global.setImmediate) {
	        return;
	    }

	    var nextHandle = 1; // Spec says greater than zero
	    var tasksByHandle = {};
	    var currentlyRunningATask = false;
	    var doc = global.document;
	    var registerImmediate;

	    function setImmediate(callback) {
	        // Callback can either be a function or a string
	        if (typeof callback !== "function") {
	            callback = new Function("" + callback);
	        }
	        // Copy function arguments
	        var args = new Array(arguments.length - 1);
	        for (var i = 0; i < args.length; i++) {
	            args[i] = arguments[i + 1];
	        }
	        // Store and register the task
	        var task = { callback: callback, args: args };
	        tasksByHandle[nextHandle] = task;
	        registerImmediate(nextHandle);
	        return nextHandle++;
	    }

	    function clearImmediate(handle) {
	        delete tasksByHandle[handle];
	    }

	    function run(task) {
	        var callback = task.callback;
	        var args = task.args;
	        switch (args.length) {
	            case 0:
	                callback();
	                break;
	            case 1:
	                callback(args[0]);
	                break;
	            case 2:
	                callback(args[0], args[1]);
	                break;
	            case 3:
	                callback(args[0], args[1], args[2]);
	                break;
	            default:
	                callback.apply(undefined, args);
	                break;
	        }
	    }

	    function runIfPresent(handle) {
	        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
	        // So if we're currently running a task, we'll need to delay this invocation.
	        if (currentlyRunningATask) {
	            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
	            // "too much recursion" error.
	            setTimeout(runIfPresent, 0, handle);
	        } else {
	            var task = tasksByHandle[handle];
	            if (task) {
	                currentlyRunningATask = true;
	                try {
	                    run(task);
	                } finally {
	                    clearImmediate(handle);
	                    currentlyRunningATask = false;
	                }
	            }
	        }
	    }

	    function installNextTickImplementation() {
	        registerImmediate = function (handle) {
	            process.nextTick(function () {
	                runIfPresent(handle);
	            });
	        };
	    }

	    function canUsePostMessage() {
	        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
	        // where `global.postMessage` means something completely different and can't be used for this purpose.
	        if (global.postMessage && !global.importScripts) {
	            var postMessageIsAsynchronous = true;
	            var oldOnMessage = global.onmessage;
	            global.onmessage = function () {
	                postMessageIsAsynchronous = false;
	            };
	            global.postMessage("", "*");
	            global.onmessage = oldOnMessage;
	            return postMessageIsAsynchronous;
	        }
	    }

	    function installPostMessageImplementation() {
	        // Installs an event handler on `global` for the `message` event: see
	        // * https://developer.mozilla.org/en/DOM/window.postMessage
	        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

	        var messagePrefix = "setImmediate$" + Math.random() + "$";
	        var onGlobalMessage = function onGlobalMessage(event) {
	            if (event.source === global && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
	                runIfPresent(+event.data.slice(messagePrefix.length));
	            }
	        };

	        if (global.addEventListener) {
	            global.addEventListener("message", onGlobalMessage, false);
	        } else {
	            global.attachEvent("onmessage", onGlobalMessage);
	        }

	        registerImmediate = function (handle) {
	            global.postMessage(messagePrefix + handle, "*");
	        };
	    }

	    function installMessageChannelImplementation() {
	        var channel = new MessageChannel();
	        channel.port1.onmessage = function (event) {
	            var handle = event.data;
	            runIfPresent(handle);
	        };

	        registerImmediate = function (handle) {
	            channel.port2.postMessage(handle);
	        };
	    }

	    function installReadyStateChangeImplementation() {
	        var html = doc.documentElement;
	        registerImmediate = function (handle) {
	            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
	            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
	            var script = doc.createElement("script");
	            script.onreadystatechange = function () {
	                runIfPresent(handle);
	                script.onreadystatechange = null;
	                html.removeChild(script);
	                script = null;
	            };
	            html.appendChild(script);
	        };
	    }

	    function installSetTimeoutImplementation() {
	        registerImmediate = function (handle) {
	            setTimeout(runIfPresent, 0, handle);
	        };
	    }

	    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
	    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
	    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

	    // Don't get fooled by e.g. browserify environments.
	    if (({}).toString.call(global.process) === "[object process]") {
	        // For Node.js before 0.9
	        installNextTickImplementation();
	    } else if (canUsePostMessage()) {
	        // For non-IE10 modern browsers
	        installPostMessageImplementation();
	    } else if (global.MessageChannel) {
	        // For web workers, where supported
	        installMessageChannelImplementation();
	    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
	        // For IE 6–8
	        installReadyStateChangeImplementation();
	    } else {
	        // For older browsers
	        installSetTimeoutImplementation();
	    }

	    attachTo.setImmediate = setImmediate;
	    attachTo.clearImmediate = clearImmediate;
	})(typeof self === "undefined" ? typeof global === "undefined" ? undefined : global : self);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(17)))

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	// shim for using process in browser
	'use strict';

	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout() {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	})();
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while (len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;

	process.listeners = function (name) {
	    return [];
	};

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () {
	    return '/';
	};
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function () {
	    return 0;
	};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';(function(global,factory){ true?module.exports = factory():typeof define === 'function' && define.amd?define(factory):global['bootstrap-vue'] = factory();})(undefined,function(){'use strict'; /**
	 * Register and event to listen on specified element once.
	 * @param {Element} element to listen on
	 * @param {String} event to listen for
	 * @param {Function} callback when event fires
	 */ // Production steps of ECMA-262, Edition 6, 22.1.2.1
	// es6-ified by @alexsasharegan
	if(!Array.from){Array.from = (function(){var toStr=Object.prototype.toString;var isCallable=function isCallable(fn){return typeof fn === 'function' || toStr.call(fn) === '[object Function]';};var toInteger=function toInteger(value){var number=Number(value);if(isNaN(number)){return 0;}if(number === 0 || !isFinite(number)){return number;}return (number > 0?1:-1) * Math.floor(Math.abs(number));};var maxSafeInteger=Math.pow(2,53) - 1;var toLength=function toLength(value){return Math.min(Math.max(toInteger(value),0),maxSafeInteger);}; // The length property of the from method is 1.
	return function from(arrayLike /*, mapFn, thisArg */){ // 1. Let C be the this value.
	var C=this; // 2. Let items be ToObject(arrayLike).
	var items=Object(arrayLike); // 3. ReturnIfAbrupt(items).
	if(arrayLike == null){throw new TypeError('Array.from requires an array-like object - not null or undefined');} // 4. If mapfn is undefined, then let mapping be false.
	var mapFn=arguments.length > 1?arguments[1]:void undefined;var T=void 0;if(typeof mapFn !== 'undefined'){ // 5. else
	// 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
	if(!isCallable(mapFn)){throw new TypeError('Array.from: when provided, the second argument must be a function');} // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
	if(arguments.length > 2){T = arguments[2];}} // 10. Let lenValue be Get(items, "length").
	// 11. Let len be ToLength(lenValue).
	var len=toLength(items.length); // 13. If IsConstructor(C) is true, then
	// 13. a. Let A be the result of calling the [[Construct]] internal method
	// of C with an argument list containing the single item len.
	// 14. a. Else, Let A be ArrayCreate(len).
	var A=isCallable(C)?Object(new C(len)):new Array(len); // 16. Let k be 0.
	var k=0; // 17. Repeat, while k < len… (also steps a - h)
	var kValue=void 0;while(k < len) {kValue = items[k];if(mapFn){A[k] = typeof T === 'undefined'?mapFn(kValue,k):mapFn.call(T,kValue,k);}else {A[k] = kValue;}k += 1;} // 18. Let putStatus be Put(A, "length", len, true).
	A.length = len; // 20. Return A.
	return A;};})();} // https://tc39.github.io/ecma262/#sec-array.prototype.find
	// Needed for IE support
	if(!Array.prototype.find){ // eslint-disable-next-line no-extend-native
	Object.defineProperty(Array.prototype,'find',{value:function value(predicate){ // 1. Let O be ? ToObject(this value).
	if(this == null){throw new TypeError('"this" is null or not defined');}var o=Object(this); // 2. Let len be ? ToLength(? Get(O, "length")).
	var len=o.length >>> 0; // 3. If IsCallable(predicate) is false, throw a TypeError exception.
	if(typeof predicate !== 'function'){throw new TypeError('predicate must be a function');} // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
	var thisArg=arguments[1]; // 5. Let k be 0.
	var k=0; // 6. Repeat, while k < len
	while(k < len) { // a. Let Pk be ! ToString(k).
	// b. Let kValue be ? Get(O, Pk).
	// c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
	// d. If testResult is true, return kValue.
	var kValue=o[k];if(predicate.call(thisArg,kValue,k,o)){return kValue;} // e. Increase k by 1.
	k++;} // 7. Return undefined.
	return undefined;}});}if(!Array.isArray){Array.isArray = function(arg){return Object.prototype.toString.call(arg) === '[object Array]';};} // Static
	var from=Array.from;var isArray=Array.isArray; // Instance
	var arrayIncludes=function arrayIncludes(array,value){return array.indexOf(value) !== -1;};function concat(){return Array.prototype.concat.apply([],arguments);} /**
	 * Aliasing Object[method] allows the minifier to shorten methods to a single character variable,
	 * as well as giving BV a chance to inject polyfills.
	 * As long as we avoid
	 * - import * as Object from "utils/object"
	 * all unused exports should be removed by tree-shaking.
	 */ // @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
	if(typeof Object.assign !== 'function'){Object.assign = function(target,varArgs){ // .length of function is 2
	if(target == null){ // TypeError if undefined or null
	throw new TypeError('Cannot convert undefined or null to object');}var to=Object(target);for(var index=1;index < arguments.length;index++) {var nextSource=arguments[index];if(nextSource != null){ // Skip over if undefined or null
	for(var nextKey in nextSource) { // Avoid bugs when hasOwnProperty is shadowed
	if(Object.prototype.hasOwnProperty.call(nextSource,nextKey)){to[nextKey] = nextSource[nextKey];}}}}return to;};} // @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is#Polyfill
	if(!Object.is){Object.is = function(x,y){ // SameValue algorithm
	if(x === y){ // Steps 1-5, 7-10
	// Steps 6.b-6.e: +0 != -0
	return x !== 0 || 1 / x === 1 / y;}else { // Step 6.a: NaN == NaN
	// eslint-disable-next-line no-self-compare
	return x !== x && y !== y;}};}var assign=Object.assign;var keys=Object.keys;var defineProperties=Object.defineProperties;var defineProperty=Object.defineProperty;var create=Object.create;function readonlyDescriptor(){return {enumerable:true,configurable:false,writable:false};} // Determine if an element is an HTML Element
	var isElement=function isElement(el){return el && el.nodeType === Node.ELEMENT_NODE;}; // Determine if an HTML element is visible - Faster than CSS check
	var isVisible=function isVisible(el){return isElement(el) && document.body.contains(el) && el.getBoundingClientRect().height > 0 && el.getBoundingClientRect().width > 0;}; // Determine if an element is disabled
	var isDisabled=function isDisabled(el){return !isElement(el) || el.disabled || el.classList.contains('disabled') || Boolean(el.getAttribute('disabled'));}; // Cause/wait-for an element to reflow it's content (adjusting it's height/width)
	var reflow=function reflow(el){ // requsting an elements offsetHight will trigger a reflow of the element content
	return isElement(el) && el.offsetHeight;}; // Select all elements matching selector. Returns [] if none found
	var selectAll=function selectAll(selector,root){if(!isElement(root)){root = document;}return from(root.querySelectorAll(selector));}; // Select a single element, returns null if not found
	var select=function select(selector,root){if(!isElement(root)){root = document;}return root.querySelector(selector) || null;}; // Determine if an element matches a selector
	var matches=function matches(el,selector){if(!isElement(el)){return false;} // https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill
	// Prefer native implementations over polyfill function
	var proto=Element.prototype;var Matches=proto.matches || proto.matchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector || proto.oMatchesSelector || proto.webkitMatchesSelector ||  /* istanbul ignore next */function(sel){var element=this;var m=selectAll(sel,element.document || element.ownerDocument);var i=m.length; // eslint-disable-next-line no-empty
	while(--i >= 0 && m.item(i) !== element) {}return i > -1;};return Matches.call(el,selector);}; // Finds closest element matching selector. Returns null if not found
	var closest=function closest(selector,root){if(!isElement(root)){return null;} // https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
	// Since we dont support IE < 10, we can use the "Matches" version of the polyfill for speed
	// Prefer native implementation over polyfill function
	var Closest=Element.prototype.closest ||  /* istanbul ignore next */function(sel){var element=this;if(!document.documentElement.contains(element)){return null;}do { // Use our "patched" matches function
	if(matches(element,sel)){return element;}element = element.parentElement;}while(element !== null);return null;};var el=Closest.call(root,selector); // Emulate jQuery closest and return null if match is the passed in element (root)
	return el === root?null:el;}; // Get an element given an ID
	var getById=function getById(id){return document.getElementById(/^#/.test(id)?id.slice(1):id) || null;}; // Add a class to an element
	var addClass=function addClass(el,className){if(className && isElement(el)){el.classList.add(className);}}; // Remove a class from an element
	var removeClass=function removeClass(el,className){if(className && isElement(el)){el.classList.remove(className);}}; // Test if an element has a class
	var hasClass=function hasClass(el,className){if(className && isElement(el)){return el.classList.contains(className);}return false;}; // Set an attribute on an element
	var setAttr=function setAttr(el,attr,value){if(attr && isElement(el)){el.setAttribute(attr,value);}}; // Remove an attribute from an element
	var removeAttr=function removeAttr(el,attr){if(attr && isElement(el)){el.removeAttribute(attr);}}; // Get an attribute value from an element (returns null if not found)
	var getAttr=function getAttr(el,attr){if(attr && isElement(el)){return el.getAttribute(attr);}return null;}; // Determine if an attribute exists on an element (returns true or false, or null if element not found)
	var hasAttr=function hasAttr(el,attr){if(attr && isElement(el)){return el.hasAttribute(attr);}return null;}; // Return the Bounding Client Rec of an element. Retruns null if not an element
	var getBCR=function getBCR(el){return isElement(el)?el.getBoundingClientRect():null;}; // Get computed style object for an element
	var getCS=function getCS(el){return isElement(el)?window.getComputedStyle(el):{};}; // Return an element's offset wrt document element
	// https://j11y.io/jquery/#v=git&fn=jQuery.fn.offset
	var offset=function offset(el){if(isElement(el)){if(!el.getClientRects().length){return {top:0,left:0};}var bcr=getBCR(el);var win=el.ownerDocument.defaultView;return {top:bcr.top + win.pageYOffset,left:bcr.left + win.pageXOffset};}}; // Return an element's offset wrt to it's offsetParent
	// https://j11y.io/jquery/#v=git&fn=jQuery.fn.position
	var position=function position(el){if(!isElement(el)){return;}var parentOffset={top:0,left:0};var offsetSelf=void 0;var offsetParent=void 0;if(getCS(el).position === 'fixed'){offsetSelf = getBCR(el);}else {offsetSelf = offset(el);var doc=el.ownerDocument;offsetParent = el.offsetParent || doc.documentElement;while(offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && getCS(offsetParent).position === 'static') {offsetParent = offsetParent.parentNode;}if(offsetParent && offsetParent !== el && offsetParent.nodeType === Node.ELEMENT_NODE){parentOffset = offset(offsetParent);parentOffset.top += parseFloat(getCS(offsetParent).borderTopWidth);parentOffset.left += parseFloat(getCS(offsetParent).borderLeftWidth);}}return {top:offsetSelf.top - parentOffset.top - parseFloat(getCS(el).marginTop),left:offsetSelf.left - parentOffset.left - parseFloat(getCS(el).marginLeft)};}; // Attach an event listener to an element
	var eventOn=function eventOn(el,evtName,handler){if(el && el.addEventListener){el.addEventListener(evtName,handler);}}; // Remove an event listener from an element
	var eventOff=function eventOff(el,evtName,handler){if(el && el.removeEventListener){el.removeEventListener(evtName,handler);}};function identity(x){return x;}var _typeof=typeof Symbol === "function" && typeof Symbol.iterator === "symbol"?function(obj){return typeof obj;}:function(obj){return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype?"symbol":typeof obj;};var classCallCheck=function classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}};var createClass=(function(){function defineProperties(target,props){for(var i=0;i < props.length;i++) {var descriptor=props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if("value" in descriptor)descriptor.writable = true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};})();var defineProperty$1=function defineProperty$1(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else {obj[key] = value;}return obj;};var inherits=function inherits(subClass,superClass){if(typeof superClass !== "function" && superClass !== null){throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__ = superClass;};var possibleConstructorReturn=function possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function")?call:self;};var toConsumableArray=function toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i < arr.length;i++) arr2[i] = arr[i];return arr2;}else {return Array.from(arr);}}; /**
	 * @param {[]|{}} props
	 * @param {Function} transformFn
	 */function copyProps(props){var transformFn=arguments.length > 1 && arguments[1] !== undefined?arguments[1]:identity;if(isArray(props)){return props.map(transformFn);} // Props as an object.
	var copied={};for(var prop in props) {if(props.hasOwnProperty(prop)){if((typeof prop === 'undefined'?'undefined':_typeof(prop)) === 'object'){copied[transformFn(prop)] = assign({},props[prop]);}else {copied[transformFn(prop)] = props[prop];}}}return copied;} /*
	 * Key Codes (events)
	 */var KeyCodes={SPACE:32,ENTER:13,ESC:27,LEFT:37,UP:38,RIGHT:39,DOWN:40,PAGEUP:33,PAGEDOWN:34,HOME:36,END:35}; /**
	 * @param {string} str
	 */function lowerFirst(str){if(typeof str !== 'string'){str = String(str);}return str.charAt(0).toLowerCase() + str.slice(1);} /**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 */function isObject(obj){return obj !== null && (typeof obj === 'undefined'?'undefined':_typeof(obj)) === 'object';} /**
	 * Check if two values are loosely equal - that is,
	 * if they are plain objects, do they have the same shape?
	 * Returns boolean true or false
	 */function looseEqual(a,b){if(a === b)return true;var isObjectA=isObject(a);var isObjectB=isObject(b);if(isObjectA && isObjectB){try{var isArrayA=isArray(a);var isArrayB=isArray(b);if(isArrayA && isArrayB){return a.length === b.length && a.every(function(e,i){return looseEqual(e,b[i]);});}else if(!isArrayA && !isArrayB){var keysA=keys(a);var keysB=keys(b);return keysA.length === keysB.length && keysA.every(function(key){return looseEqual(a[key],b[key]);});}else {return false;}}catch(e) {return false;}}else if(!isObjectA && !isObjectB){return String(a) === String(b);}else {return false;}}function mergeData(){for(var e,a,s={},t=arguments.length;t--;) {for(var r=0,c=Object.keys(arguments[t]);r < c.length;r++) {switch(e = c[r]){case "class":case "style":case "directives":Array.isArray(s[e]) || (s[e] = []),s[e] = s[e].concat(arguments[t][e]);break;case "staticClass":if(!arguments[t][e])break;void 0 === s[e] && (s[e] = ""),s[e] && (s[e] += " "),s[e] += arguments[t][e].trim();break;case "on":case "nativeOn":s[e] || (s[e] = {});for(var o=0,n=Object.keys(arguments[t][e]);o < n.length;o++) {a = n[o],s[e][a]?s[e][a] = [].concat(s[e][a],arguments[t][e][a]):s[e][a] = arguments[t][e][a];}break;case "attrs":case "props":case "domProps":case "scopedSlots":case "staticStyle":case "hook":case "transition":s[e] || (s[e] = {}),s[e] = __assign({},arguments[t][e],s[e]);break;case "slot":case "key":case "ref":case "tag":case "show":case "keepAlive":default:s[e] || (s[e] = arguments[t][e]);}}}return s;}var __assign=Object.assign || function(e){for(var a,s=1,t=arguments.length;s < t;s++) {a = arguments[s];for(var r in a) {Object.prototype.hasOwnProperty.call(a,r) && (e[r] = a[r]);}}return e;};function memoize(fn){var cache=create(null);return function memoizedFn(){var args=JSON.stringify(arguments);return cache[args] = cache[args] || fn.apply(null,arguments);};} /**
	 * Observe a DOM element changes, falls back to eventListener mode
	 * @param {Element} el The DOM element to observe
	 * @param {Function} callback callback to be called on change
	 * @param {object} [opts={childList: true, subtree: true}] observe options
	 * @see http://stackoverflow.com/questions/3219758
	 */function observeDOM(el,callback,opts){var MutationObserver=window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;var eventListenerSupported=window.addEventListener; // Handle case where we might be passed a vue instance
	el = el?el.$el || el:null; /* istanbul ignore next: dificult to test in JSDOM */if(!isElement(el)){ // We can't observe somthing that isn't an element
	return null;}var obs=null; /* istanbul ignore next: dificult to test in JSDOM */if(MutationObserver){ // Define a new observer
	obs = new MutationObserver(function(mutations){var changed=false; // A Mutation can contain several change records, so we loop through them to see what has changed.
	// We break out of the loop early if any "significant" change has been detected
	for(var i=0;i < mutations.length && !changed;i++) { // The muttion record
	var mutation=mutations[i]; // Mutation Type
	var type=mutation.type; // DOM Node (could be any DOM Node type - HTMLElement, Text, comment, etc)
	var target=mutation.target;if(type === 'characterData' && target.nodeType === Node.TEXT_NODE){ // We ignore nodes that are not TEXt (i.e. comments, etc) as they don't change layout
	changed = true;}else if(type === 'attributes'){changed = true;}else if(type === 'childList' && (mutation.addedNodes.length > 0 || mutation.removedNodes.length > 0)){ // This includes HTMLElement and Text Nodes being added/removed/re-arranged
	changed = true;}}if(changed){ // We only call the callback if a change that could affect layout/size truely happened.
	callback();}}); // Have the observer observe foo for changes in children, etc
	obs.observe(el,assign({childList:true,subtree:true},opts));}else if(eventListenerSupported){ // Legacy interface. most likely not used in modern browsers
	el.addEventListener('DOMNodeInserted',callback,false);el.addEventListener('DOMNodeRemoved',callback,false);} // We return a reference to the observer so that obs.disconnect() can be called if necessary
	// To reduce overhead when the root element is hiiden
	return obs;} /**
	 * Given an array of properties or an object of property keys,
	 * plucks all the values off the target object.
	 * @param {{}|string[]} keysToPluck
	 * @param {{}} objToPluck
	 * @param {Function} transformFn
	 * @return {{}}
	 */function pluckProps(keysToPluck,objToPluck){var transformFn=arguments.length > 2 && arguments[2] !== undefined?arguments[2]:identity;return (isArray(keysToPluck)?keysToPluck.slice():keys(keysToPluck)).reduce(function(memo,prop){ // eslint-disable-next-line no-sequences
	return memo[transformFn(prop)] = objToPluck[prop],memo;},{});} /**
	 * @param {string} str
	 */function upperFirst(str){if(typeof str !== 'string'){str = String(str);}return str.charAt(0).toUpperCase() + str.slice(1);} /**
	 * @param {string} prefix
	 * @param {string} value
	 */function prefixPropName(prefix,value){return prefix + upperFirst(value);} /**
	 * Register a component plugin as being loaded. returns true if compoent plugin already registered
	 * @param {object} Vue
	 * @param {string} Component name
	 * @param {object} Component definition
	 */function registerComponent(Vue,name,def){Vue._bootstrap_vue_components_ = Vue._bootstrap_vue_components_ || {};var loaded=Vue._bootstrap_vue_components_[name];if(!loaded && def && name){Vue._bootstrap_vue_components_[name] = true;Vue.component(name,def);}return loaded;} /**
	 * Register a group of components as being loaded.
	 * @param {object} Vue
	 * @param {object} Object of component definitions
	 */function registerComponents(Vue,components){for(var component in components) {registerComponent(Vue,component,components[component]);}} /**
	 * Register a directive as being loaded. returns true if directive plugin already registered
	 * @param {object} Vue
	 * @param {string} Directive name
	 * @param {object} Directive definition
	 */function registerDirective(Vue,name,def){Vue._bootstrap_vue_directives_ = Vue._bootstrap_vue_directives_ || {};var loaded=Vue._bootstrap_vue_directives_[name];if(!loaded && def && name){Vue._bootstrap_vue_directives_[name] = true;Vue.directive(name,def);}return loaded;} /**
	 * Register a group of directives as being loaded.
	 * @param {object} Vue
	 * @param {object} Object of directive definitions
	 */function registerDirectives(Vue,directives){for(var directive in directives) {registerDirective(Vue,directive,directives[directive]);}} /**
	 * Install plugin if window.Vue available
	 * @param {object} Plugin definition
	 */function vueUse(VuePlugin){if(typeof window !== 'undefined' && window.Vue){window.Vue.use(VuePlugin);}} /*
	 * Consitant and stable sort function across JavsaScript platforms
	 *
	 * Inconsistant sorts can cause SSR problems between client and server
	 * such as in <b-table> if sortBy is applied to the data on server side render.
	 * Chrome and V8 native sorts are inconsistant/unstable
	 *
	 * This function uses native sort with fallback to index compare when the a and b
	 * compare returns 0
	 *
	 * Algorithm bsaed on:
	 * https://stackoverflow.com/questions/1427608/fast-stable-sorting-algorithm-implementation-in-javascript/45422645#45422645
	 *
	 * @param {array} array to sort
	 * @param {function} sortcompare function
	 * @return {array}
	 */function stableSort(array,compareFn){ // Using `.bind(compareFn)` on the wrapped anonymous function improves
	// performance by avoiding the function call setup. We don't use an arrow
	// function here as it binds `this` to the `stableSort` context rather than
	// the `compareFn` context, which wouldn't give us the performance increase.
	return array.map(function(a,index){return [index,a];}).sort((function(a,b){return this(a[1],b[1]) || a[0] - b[0];}).bind(compareFn)).map(function(e){return e[1];});} /**
	 * Suffix can be a falsey value so nothing is appended to string.
	 * (helps when looping over props & some shouldn't change)
	 * Use data last parameters to allow for currying.
	 * @param {string} suffix
	 * @param {string} str
	 */function suffixPropName(suffix,str){return str + (suffix?upperFirst(suffix):'');} /**
	 * @param {string} prefix
	 * @param {string} value
	 */function unPrefixPropName(prefix,value){return lowerFirst(value.replace(prefix,''));} /**
	 * Log a warning message to the console with bootstrap-vue formatting sugar.
	 * @param {string} message
	 */ /* istanbul ignore next */function warn(message){console.warn("[Bootstrap-Vue warn]: " + message);}var props={disabled:{type:Boolean,'default':false},ariaLabel:{type:String,'default':'Close'},textVariant:{type:String,'default':null}};var bBtnClose={functional:true,props:props,render:function render(h,_ref){var props=_ref.props,data=_ref.data,listeners=_ref.listeners,slots=_ref.slots;var componentData={staticClass:'close','class':defineProperty$1({},'text-' + props.textVariant,props.textVariant),attrs:{type:'button',disabled:props.disabled,'aria-label':props.ariaLabel?String(props.ariaLabel):null},on:{click:function click(e){ // Ensure click on button HTML content is also disabled
	if(props.disabled && e instanceof Event){e.stopPropagation();e.preventDefault();}}} // Careful not to override the slot with innerHTML
	};if(!slots()['default']){componentData.domProps = {innerHTML:'&times;'};}return h('button',mergeData(data,componentData),slots()['default']);}};var bAlert={components:{bBtnClose:bBtnClose},render:function render(h){if(!this.localShow){ // If not showing, render placeholder
	return h(false);}var dismissBtn=h(false);if(this.dismissible){ // Add dismiss button
	dismissBtn = h('b-button-close',{attrs:{'aria-label':this.dismissLabel},on:{click:this.dismiss}},[this.$slots.dismiss]);}return h('div',{'class':this.classObject,attrs:{role:'alert','aria-live':'polite','aria-atomic':true}},[dismissBtn,this.$slots['default']]);},model:{prop:'show',event:'input'},data:function data(){return {countDownTimerId:null,dismissed:false};},computed:{classObject:function classObject(){return ['alert',this.alertVariant,this.dismissible?'alert-dismissible':''];},alertVariant:function alertVariant(){var variant=this.variant;return 'alert-' + variant;},localShow:function localShow(){return !this.dismissed && (this.countDownTimerId || this.show);}},props:{variant:{type:String,'default':'info'},dismissible:{type:Boolean,'default':false},dismissLabel:{type:String,'default':'Close'},show:{type:[Boolean,Number],'default':false}},watch:{show:function show(){this.showChanged();}},mounted:function mounted(){this.showChanged();},destroyed /* istanbul ignore next */:function destroyed(){this.clearCounter();},methods:{dismiss:function dismiss(){this.clearCounter();this.dismissed = true;this.$emit('dismissed');this.$emit('input',false);if(typeof this.show === 'number'){this.$emit('dismiss-count-down',0);this.$emit('input',0);}else {this.$emit('input',false);}},clearCounter:function clearCounter(){if(this.countDownTimerId){clearInterval(this.countDownTimerId);this.countDownTimerId = null;}},showChanged:function showChanged(){var _this=this; // Reset counter status
	this.clearCounter(); // Reset dismiss status
	this.dismissed = false; // No timer for boolean values
	if(this.show === true || this.show === false || this.show === null || this.show === 0){return;} // Start counter
	var dismissCountDown=this.show;this.countDownTimerId = setInterval(function(){if(dismissCountDown < 1){_this.dismiss();return;}dismissCountDown--;_this.$emit('dismiss-count-down',dismissCountDown);_this.$emit('input',dismissCountDown);},1000);}}}; /* eslint-disable no-var, no-undef, guard-for-in, object-shorthand */var components$1={bAlert:bAlert};var VuePlugin$2={install:function install(Vue){registerComponents(Vue,components$1);}};vueUse(VuePlugin$2); /**
	 * The Link component is used in many other BV components.
	 * As such, sharing its props makes supporting all its features easier.
	 * However, some components need to modify the defaults for their own purpose.
	 * Prefer sharing a fresh copy of the props to ensure mutations
	 * do not affect other component references to the props.
	 *
	 * https://github.com/vuejs/vue-router/blob/dev/src/components/link.js
	 * @return {{}}
	 */function propsFactory(){return {href:{type:String,'default':null},rel:{type:String,'default':null},target:{type:String,'default':'_self'},active:{type:Boolean,'default':false},activeClass:{type:String,'default':'active'},append:{type:Boolean,'default':false},disabled:{type:Boolean,'default':false},event:{type:[String,Array],'default':'click'},exact:{type:Boolean,'default':false},exactActiveClass:{type:String,'default':'active'},replace:{type:Boolean,'default':false},routerTag:{type:String,'default':'a'},to:{type:[String,Object],'default':null}};}function pickLinkProps(propsToPick){var freshLinkProps=propsFactory(); // Normalize everything to array.
	propsToPick = concat(propsToPick);return keys(freshLinkProps).reduce(function(memo,prop){if(arrayIncludes(propsToPick,prop)){memo[prop] = freshLinkProps[prop];}return memo;},{});}function computeTag(props,parent){return Boolean(parent.$router) && props.to && !props.disabled?'router-link':'a';}function computeHref(_ref,tag){var disabled=_ref.disabled,href=_ref.href,to=_ref.to; // We've already checked the parent.$router in computeTag,
	// so router-link means live router.
	// When deferring to Vue Router's router-link,
	// don't use the href attr at all.
	// Must return undefined for router-link to populate href.
	if(tag === 'router-link')return void 0; // If href explicitly provided
	if(href)return href; // Reconstruct href when `to` used, but no router
	if(to){ // Fallback to `to` prop (if `to` is a string)
	if(typeof to === 'string')return to; // Fallback to `to.path` prop (if `to` is an object)
	if((typeof to === 'undefined'?'undefined':_typeof(to)) === 'object' && typeof to.path === 'string')return to.path;} // If nothing is provided use '#'
	return '#';}function computeRel(_ref2){var target=_ref2.target,rel=_ref2.rel;if(target === '_blank' && rel === null){return 'noopener';}return rel || null;}function clickHandlerFactory(_ref3){var disabled=_ref3.disabled,tag=_ref3.tag,href=_ref3.href,suppliedHandler=_ref3.suppliedHandler,parent=_ref3.parent;var isRouterLink=tag === 'router-link';return function onClick(e){if(disabled && e instanceof Event){ // Stop event from bubbling up.
	e.stopPropagation(); // Kill the event loop attached to this specific EventTarget.
	e.stopImmediatePropagation();}else {parent.$root.$emit('clicked::link',e);if(isRouterLink && e.target.__vue__){e.target.__vue__.$emit('click',e);}if(typeof suppliedHandler === 'function'){suppliedHandler.apply(undefined,arguments);}}if(!isRouterLink && href === '#' || disabled){ // Stop scroll-to-top behavior or navigation.
	e.preventDefault();}};}var Link={functional:true,props:propsFactory(),render:function render(h,_ref4){var props=_ref4.props,data=_ref4.data,parent=_ref4.parent,children=_ref4.children;var tag=computeTag(props,parent);var rel=computeRel(props);var href=computeHref(props,tag);var eventType=tag === 'router-link'?'nativeOn':'on';var suppliedHandler=(data[eventType] || {}).click;var handlers={click:clickHandlerFactory({tag:tag,href:href,disabled:props.disabled,suppliedHandler:suppliedHandler,parent:parent})};var componentData=mergeData(data,{'class':[props.active?props.exact?props.exactActiveClass:props.activeClass:null,{disabled:props.disabled}],attrs:{rel:rel,href:href,target:props.target,tabindex:props.disabled?'-1':data.attrs?data.attrs.tabindex:null,'aria-disabled':tag === 'a' && props.disabled?'true':null},props:assign(props,{tag:props.routerTag})}); // If href prop exists on router-link (even undefined or null) it fails working on SSR
	if(!componentData.attrs.href){delete componentData.attrs.href;} // We want to overwrite any click handler since our callback
	// will invoke the supplied handler if !props.disabled
	componentData[eventType] = assign(componentData[eventType] || {},handlers);return h(tag,componentData,children);}};var linkProps=propsFactory();delete linkProps.href['default'];delete linkProps.to['default'];var props$1=assign(linkProps,{tag:{type:String,'default':'span'},variant:{type:String,'default':'secondary'},pill:{type:Boolean,'default':false}});var bBadge={functional:true,props:props$1,render:function render(h,_ref){var props=_ref.props,data=_ref.data,children=_ref.children;var tag=!props.href && !props.to?props.tag:Link;var componentData={staticClass:'badge','class':[!props.variant?'badge-secondary':'badge-' + props.variant,{'badge-pill':Boolean(props.pill),active:props.active,disabled:props.disabled}],props:pluckProps(linkProps,props)};return h(tag,mergeData(data,componentData),children);}}; /* eslint-disable no-var, no-undef, guard-for-in, object-shorthand */var components$2={bBadge:bBadge};var VuePlugin$4={install:function install(Vue){registerComponents(Vue,components$2);}};vueUse(VuePlugin$4);var props$5=assign(propsFactory(),{text:{type:String,'default':null},active:{type:Boolean,'default':false},href:{type:String,'default':'#'},ariaCurrent:{type:String,'default':'location'}});var BreadcrumbLink={functional:true,props:props$5,render:function render(h,_ref){var suppliedProps=_ref.props,data=_ref.data,children=_ref.children;var tag=suppliedProps.active?'span':Link;var componentData={props:pluckProps(props$5,suppliedProps),domProps:{innerHTML:suppliedProps.text}};if(suppliedProps.active){componentData.attrs = {'aria-current':suppliedProps.ariaCurrent};}else {componentData.attrs = {href:suppliedProps.href};}return h(tag,mergeData(data,componentData),children);}};var props$4=assign({},props$5,{text:{type:String,'default':null},href:{type:String,'default':null}});var BreadcrumbItem={functional:true,props:props$4,render:function render(h,_ref){var props$$1=_ref.props,data=_ref.data,children=_ref.children;return h('li',mergeData(data,{staticClass:'breadcrumb-item','class':{active:props$$1.active},attrs:{role:'presentation'}}),[h(BreadcrumbLink,{props:props$$1},children)]);}};var props$3={items:{type:Array,'default':null}};var bBreadcrumb={functional:true,props:props$3,render:function render(h,_ref){var props=_ref.props,data=_ref.data,children=_ref.children;var childNodes=children; // Build child nodes from items if given.
	if(isArray(props.items)){var activeDefined=false;childNodes = props.items.map(function(item,idx){if((typeof item === 'undefined'?'undefined':_typeof(item)) !== 'object'){item = {text:item};} // Copy the value here so we can normalize it.
	var active=item.active;if(active){activeDefined = true;}if(!active && !activeDefined){ // Auto-detect active by position in list.
	active = idx + 1 === props.items.length;}return h(BreadcrumbItem,{props:assign({},item,{active:active})});});}return h('ol',mergeData(data,{staticClass:'breadcrumb'}),childNodes);}}; /* eslint-disable no-var, no-undef, guard-for-in, object-shorthand */var components$3={bBreadcrumb:bBreadcrumb,bBreadcrumbItem:BreadcrumbItem,bBreadcrumbLink:BreadcrumbLink};var VuePlugin$6={install:function install(Vue){registerComponents(Vue,components$3);}};vueUse(VuePlugin$6);var btnProps={block:{type:Boolean,'default':false},disabled:{type:Boolean,'default':false},size:{type:String,'default':null},variant:{type:String,'default':null},type:{type:String,'default':'button'},pressed:{ // tri-state prop: true, false or null
	// => on, off, not a toggle
	type:Boolean,'default':null}};var linkProps$1=propsFactory();delete linkProps$1.href['default'];delete linkProps$1.to['default'];var linkPropKeys=keys(linkProps$1);var props$6=assign(linkProps$1,btnProps);function handleFocus(evt){if(evt.type === 'focusin'){addClass(evt.target,'focus');}else if(evt.type === 'focusout'){removeClass(evt.target,'focus');}}var bBtn={functional:true,props:props$6,render:function render(h,_ref){var _ref2;var props=_ref.props,data=_ref.data,listeners=_ref.listeners,children=_ref.children;var isLink=Boolean(props.href || props.to);var isToggle=typeof props.pressed === 'boolean';var on={click:function click(e){if(props.disabled && e instanceof Event){e.stopPropagation();e.preventDefault();}else if(isToggle){ // Concat will normalize the value to an array
	// without double wrapping an array value in an array.
	concat(listeners['update:pressed']).forEach(function(fn){if(typeof fn === 'function'){fn(!props.pressed);}});}}};if(isToggle){on.focusin = handleFocus;on.focusout = handleFocus;}var componentData={staticClass:'btn','class':[props.variant?'btn-' + props.variant:'btn-secondary',(_ref2 = {},defineProperty$1(_ref2,'btn-' + props.size,Boolean(props.size)),defineProperty$1(_ref2,'btn-block',props.block),defineProperty$1(_ref2,'disabled',props.disabled),defineProperty$1(_ref2,'active',props.pressed),_ref2)],props:isLink?pluckProps(linkPropKeys,props):null,attrs:{type:isLink?null:props.type,disabled:isLink?null:props.disabled, // Data attribute not used for js logic,
	// but only for BS4 style selectors.
	'data-toggle':isToggle?'button':null,'aria-pressed':isToggle?String(props.pressed):null, // Tab index is used when the component becomes a link.
	// Links are tabable, but don't allow disabled,
	// so we mimic that functionality by disabling tabbing.
	tabindex:props.disabled && isLink?'-1':data.attrs?data.attrs['tabindex']:null},on:on};return h(isLink?Link:'button',mergeData(data,componentData),children);}}; /* eslint-disable no-var, no-undef, guard-for-in, object-shorthand */var components$4={bButton:bBtn,bBtn:bBtn,bButtonClose:bBtnClose,bBtnClose:bBtnClose};var VuePlugin$8={install:function install(Vue){registerComponents(Vue,components$4);}};vueUse(VuePlugin$8);var props$7={vertical:{type:Boolean,'default':false},size:{type:String,'default':null,validator:function validator(size){return arrayIncludes(['sm','','lg'],size);}},tag:{type:String,'default':'div'},ariaRole:{type:String,'default':'group'}};var bButtonGroup={functional:true,props:props$7,render:function render(h,_ref){var props=_ref.props,data=_ref.data,children=_ref.children;return h(props.tag,mergeData(data,{'class':defineProperty$1({'btn-group':!props.vertical,'btn-group-vertical':props.vertical},'btn-group-' + props.size,Boolean(props.size)),attrs:{'role':props.ariaRole}}),children);}}; /* eslint-disable no-var, no-undef, guard-for-in, object-shorthand */var components$5={bButtonGroup:bButtonGroup,bBtnGroup:bButtonGroup};var VuePlugin$10={install:function install(Vue){registerComponents(Vue,components$5);}};vueUse(VuePlugin$10);var ITEM_SELECTOR=['.btn:not(.disabled):not([disabled]):not(.dropdown-item)','.form-control:not(.disabled):not([disabled])','select:not(.disabled):not([disabled])','input[type="checkbox"]:not(.disabled)','input[type="radio"]:not(.disabled)'].join(',');var bButtonToolbar={render:function render(h){var t=this;return h('div',{'class':t.classObject,attrs:{role:'toolbar',tabindex:t.keyNav?'0':null},on:{focusin:t.onFocusin,keydown:t.onKeydown}},[t.$slots['default']]);},computed:{classObject:function classObject(){return ['btn-toolbar',this.justify && !this.vertical?'justify-content-between':''];}},props:{justify:{type:Boolean,'default':false},keyNav:{type:Boolean,'default':false}},methods:{onFocusin:function onFocusin(evt){if(evt.target === this.$el){evt.preventDefault();evt.stopPropagation();this.focusFirst(evt);}},onKeydown:function onKeydown(evt){if(!this.keyNav){return;}var key=evt.keyCode;var shift=evt.shiftKey;if(key === KeyCodes.UP || key === KeyCodes.LEFT){evt.preventDefault();evt.stopPropagation();if(shift){this.focusFirst(evt);}else {this.focusNext(evt,true);}}else if(key === KeyCodes.DOWN || key === KeyCodes.RIGHT){evt.preventDefault();evt.stopPropagation();if(shift){this.focusLast(evt);}else {this.focusNext(evt,false);}}},setItemFocus:function setItemFocus(item){this.$nextTick(function(){item.focus();});},focusNext:function focusNext(evt,prev){var items=this.getItems();if(items.length < 1){return;}var index=items.indexOf(evt.target);if(prev && index > 0){index--;}else if(!prev && index < items.length - 1){index++;}if(index < 0){index = 0;}this.setItemFocus(items[index]);},focusFirst:function focusFirst(evt){var items=this.getItems();if(items.length > 0){this.setItemFocus(items[0]);}},focusLast:function focusLast(evt){var items=this.getItems();if(items.length > 0){this.setItemFocus([items.length - 1]);}},getItems:function getItems(){var items=selectAll(ITEM_SELECTOR,this.$el);items.forEach(function(item){ // Ensure tabfocus is -1 on any new elements
	item.tabIndex = -1;});return items.filter(function(el){return isVisible(el);});}},mounted:function mounted(){if(this.keyNav){ // Pre-set the tabindexes if the markup does not include tabindex="-1" on the toolbar items
	this.getItems();}}}; /* eslint-disable no-var, no-undef, guard-for-in, object-shorthand */var components$6={bButtonToolbar:bButtonToolbar,bBtnToolbar:bButtonToolbar};var VuePlugin$12={install:function install(Vue){registerComponents(Vue,components$6);}};vueUse(VuePlugin$12);var props$9={id:{type:String,'default':null},tag:{type:String,'default':'div'}};var InputGroupAddon={functional:true,props:props$9,render:function render(h,_ref){var props=_ref.props,data=_ref.data,children=_ref.children;return h(props.tag,mergeData(data,{staticClass:'input-group-addon',attrs:{id:props.id}}),children);}};var props$8={id:{type:String,'default':null},size:{type:String,'default':null},left:{type:String,'default':null},right:{type:String,'default':null},tag:{type:String,'default':'div'}};var bInputGroup={functional:true,props:props$8,render:function render(h,_ref){var props=_ref.props,data=_ref.data,slots=_ref.slots;var childNodes=[];var $slots=slots(); // Left Slot / Prop
	if($slots.left){childNodes.push(slots().left);}else if(props.left){childNodes.push(h(InputGroupAddon,{domProps:{innerHTML:props.left}}));} // Default slot
	childNodes.push($slots['default']); // Right slot / prop
	if($slots.right){childNodes.push($slots.right);}else if(props.right){childNodes.push(h(InputGroupAddon,{domProps:{innerHTML:props.right}}));}return h(props.tag,mergeData(data,{staticClass:'input-group','class':defineProperty$1({},'input-group-' + props.size,Boolean(props.size)),attrs:{id:props.id || null,role:'group'}}),childNodes);}};var props$10={id:{type:String,'default':null},tag:{type:String,'default':'div'}};var bInputGroupButton={functional:true,props:props$10,render:function render(h,_ref){var props=_ref.props,data=_ref.data,children=_ref.children;return h(props.tag,mergeData(data,{staticClass:'input-group-btn',attrs:{id:props.id}}),children);}}; /* eslint-disable no-var, no-undef, guard-for-in, object-shorthand */var components$7={bInputGroup:bInputGroup,bInputGroupAddon:InputGroupAddon,bInputGroupButton:bInputGroupButton,bInputGroupBtn:bInputGroupButton};var VuePlugin$14={install:function install(Vue){registerComponents(Vue,components$7);}};vueUse(VuePlugin$14);var cardMixin={props:{tag:{type:String,'default':'div'},bgVariant:{type:String,'default':null},borderVariant:{type:String,'default':null},textVariant:{type:String,'default':null}}};var clickoutMixin={mounted:function mounted(){if(typeof document !== 'undefined'){document.documentElement.addEventListener('click',this._clickOutListener);}},beforeDestroy:function beforeDestroy(){if(typeof document !== 'undefined'){document.removeEventListener('click',this._clickOutListener);}},methods:{_clickOutListener:function _clickOutListener(e){if(!this.$el.contains(e.target)){if(this.clickOutListener){this.clickOutListener();}}}}}; /**!
	 * @fileOverview Kickass library to create and place poppers near their reference elements.
	 * @version 1.12.9
	 * @license
	 * Copyright (c) 2016 Federico Zivolo and contributors
	 *
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be included in all
	 * copies or substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	 * SOFTWARE.
	 */var isBrowser=typeof window !== 'undefined' && typeof document !== 'undefined';var longerTimeoutBrowsers=['Edge','Trident','Firefox'];var timeoutDuration=0;for(var i=0;i < longerTimeoutBrowsers.length;i += 1) {if(isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0){timeoutDuration = 1;break;}}function microtaskDebounce(fn){var called=false;return function(){if(called){return;}called = true;window.Promise.resolve().then(function(){called = false;fn();});};}function taskDebounce(fn){var scheduled=false;return function(){if(!scheduled){scheduled = true;setTimeout(function(){scheduled = false;fn();},timeoutDuration);}};}var supportsMicroTasks=isBrowser && window.Promise; /**
	* Create a debounced version of a method, that's asynchronously deferred
	* but called in the minimum time possible.
	*
	* @method
	* @memberof Popper.Utils
	* @argument {Function} fn
	* @returns {Function}
	*/var debounce=supportsMicroTasks?microtaskDebounce:taskDebounce; /**
	 * Check if the given variable is a function
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Any} functionToCheck - variable to check
	 * @returns {Boolean} answer to: is a function?
	 */function isFunction(functionToCheck){var getType={};return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';} /**
	 * Get CSS computed property of the given element
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Eement} element
	 * @argument {String} property
	 */function getStyleComputedProperty(element,property){if(element.nodeType !== 1){return [];} // NOTE: 1 DOM access here
	var css=getComputedStyle(element,null);return property?css[property]:css;} /**
	 * Returns the parentNode or the host of the element
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} element
	 * @returns {Element} parent
	 */function getParentNode(element){if(element.nodeName === 'HTML'){return element;}return element.parentNode || element.host;} /**
	 * Returns the scrolling parent of the given element
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} element
	 * @returns {Element} scroll parent
	 */function getScrollParent(_x){var _again=true;_function: while(_again) {var element=_x;_again = false; // Return body, `getScroll` will take care to get the correct `scrollTop` from it
	if(!element){return document.body;}switch(element.nodeName){case 'HTML':case 'BODY':return element.ownerDocument.body;case '#document':return element.body;} // Firefox want us to check `-x` and `-y` variations as well
	var _getStyleComputedProp=getStyleComputedProperty(element),overflow=_getStyleComputedProp.overflow,overflowX=_getStyleComputedProp.overflowX,overflowY=_getStyleComputedProp.overflowY;if(/(auto|scroll)/.test(overflow + overflowY + overflowX)){return element;}_x = getParentNode(element);_again = true;_getStyleComputedProp = overflow = overflowX = overflowY = undefined;continue _function;}} /**
	 * Returns the offset parent of the given element
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} element
	 * @returns {Element} offset parent
	 */function getOffsetParent(_x2){var _again2=true;_function2: while(_again2) {var element=_x2;_again2 = false; // NOTE: 1 DOM access here
	var offsetParent=element && element.offsetParent;var nodeName=offsetParent && offsetParent.nodeName;if(!nodeName || nodeName === 'BODY' || nodeName === 'HTML'){if(element){return element.ownerDocument.documentElement;}return document.documentElement;} // .offsetParent will return the closest TD or TABLE in case
	// no offsetParent is present, I hate this job...
	if(['TD','TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent,'position') === 'static'){_x2 = offsetParent;_again2 = true;offsetParent = nodeName = undefined;continue _function2;}return offsetParent;}}function isOffsetContainer(element){var nodeName=element.nodeName;if(nodeName === 'BODY'){return false;}return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;} /**
	 * Finds the root node (document, shadowDOM root) of the given element
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} node
	 * @returns {Element} root node
	 */function getRoot(_x3){var _again3=true;_function3: while(_again3) {var node=_x3;_again3 = false;if(node.parentNode !== null){_x3 = node.parentNode;_again3 = true;continue _function3;}return node;}} /**
	 * Finds the offset parent common to the two provided nodes
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} element1
	 * @argument {Element} element2
	 * @returns {Element} common offset parent
	 */function findCommonOffsetParent(_x4,_x5){var _again4=true;_function4: while(_again4) {var element1=_x4,element2=_x5;_again4 = false; // This check is needed to avoid errors in case one of the elements isn't defined for any reason
	if(!element1 || !element1.nodeType || !element2 || !element2.nodeType){return document.documentElement;} // Here we make sure to give as "start" the element that comes first in the DOM
	var order=element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;var start=order?element1:element2;var end=order?element2:element1; // Get common ancestor container
	var range=document.createRange();range.setStart(start,0);range.setEnd(end,0);var commonAncestorContainer=range.commonAncestorContainer; // Both nodes are inside #document
	if(element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)){if(isOffsetContainer(commonAncestorContainer)){return commonAncestorContainer;}return getOffsetParent(commonAncestorContainer);} // one of the nodes is inside shadowDOM, find which one
	var element1root=getRoot(element1);if(element1root.host){_x4 = element1root.host;_x5 = element2;_again4 = true;order = start = end = range = commonAncestorContainer = element1root = undefined;continue _function4;}else {_x4 = element1;_x5 = getRoot(element2).host;_again4 = true;order = start = end = range = commonAncestorContainer = element1root = undefined;continue _function4;}}} /**
	 * Gets the scroll value of the given element in the given side (top and left)
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} element
	 * @argument {String} side `top` or `left`
	 * @returns {number} amount of scrolled pixels
	 */function getScroll(element){var side=arguments.length > 1 && arguments[1] !== undefined?arguments[1]:'top';var upperSide=side === 'top'?'scrollTop':'scrollLeft';var nodeName=element.nodeName;if(nodeName === 'BODY' || nodeName === 'HTML'){var html=element.ownerDocument.documentElement;var scrollingElement=element.ownerDocument.scrollingElement || html;return scrollingElement[upperSide];}return element[upperSide];} /*
	 * Sum or subtract the element scroll values (left and top) from a given rect object
	 * @method
	 * @memberof Popper.Utils
	 * @param {Object} rect - Rect object you want to change
	 * @param {HTMLElement} element - The element from the function reads the scroll values
	 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
	 * @return {Object} rect - The modifier rect object
	 */function includeScroll(rect,element){var subtract=arguments.length > 2 && arguments[2] !== undefined?arguments[2]:false;var scrollTop=getScroll(element,'top');var scrollLeft=getScroll(element,'left');var modifier=subtract?-1:1;rect.top += scrollTop * modifier;rect.bottom += scrollTop * modifier;rect.left += scrollLeft * modifier;rect.right += scrollLeft * modifier;return rect;} /*
	 * Helper to detect borders of a given element
	 * @method
	 * @memberof Popper.Utils
	 * @param {CSSStyleDeclaration} styles
	 * Result of `getStyleComputedProperty` on the given element
	 * @param {String} axis - `x` or `y`
	 * @return {number} borders - The borders size of the given axis
	 */function getBordersSize(styles,axis){var sideA=axis === 'x'?'Left':'Top';var sideB=sideA === 'Left'?'Right':'Bottom';return parseFloat(styles['border' + sideA + 'Width'],10) + parseFloat(styles['border' + sideB + 'Width'],10);} /**
	 * Tells if you are running Internet Explorer 10
	 * @method
	 * @memberof Popper.Utils
	 * @returns {Boolean} isIE10
	 */var isIE10=undefined;var isIE10$1=function isIE10$1(){if(isIE10 === undefined){isIE10 = navigator.appVersion.indexOf('MSIE 10') !== -1;}return isIE10;};function getSize(axis,body,html,computedStyle){return Math.max(body['offset' + axis],body['scroll' + axis],html['client' + axis],html['offset' + axis],html['scroll' + axis],isIE10$1()?html['offset' + axis] + computedStyle['margin' + (axis === 'Height'?'Top':'Left')] + computedStyle['margin' + (axis === 'Height'?'Bottom':'Right')]:0);}function getWindowSizes(){var body=document.body;var html=document.documentElement;var computedStyle=isIE10$1() && getComputedStyle(html);return {height:getSize('Height',body,html,computedStyle),width:getSize('Width',body,html,computedStyle)};}var classCallCheck$1=function classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}};var createClass$1=(function(){function defineProperties(target,props){for(var i=0;i < props.length;i++) {var descriptor=props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if("value" in descriptor)descriptor.writable = true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};})();var defineProperty$2=function defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else {obj[key] = value;}return obj;};var _extends$1=Object.assign || function(target){for(var i=1;i < arguments.length;i++) {var source=arguments[i];for(var key in source) {if(Object.prototype.hasOwnProperty.call(source,key)){target[key] = source[key];}}}return target;}; /**
	 * Given element offsets, generate an output similar to getBoundingClientRect
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Object} offsets
	 * @returns {Object} ClientRect like output
	 */function getClientRect(offsets){return _extends$1({},offsets,{right:offsets.left + offsets.width,bottom:offsets.top + offsets.height});} /**
	 * Get bounding client rect of given element
	 * @method
	 * @memberof Popper.Utils
	 * @param {HTMLElement} element
	 * @return {Object} client rect
	 */function getBoundingClientRect(element){var rect={}; // IE10 10 FIX: Please, don't ask, the element isn't
	// considered in DOM in some circumstances...
	// This isn't reproducible in IE10 compatibility mode of IE11
	if(isIE10$1()){try{rect = element.getBoundingClientRect();var scrollTop=getScroll(element,'top');var scrollLeft=getScroll(element,'left');rect.top += scrollTop;rect.left += scrollLeft;rect.bottom += scrollTop;rect.right += scrollLeft;}catch(err) {}}else {rect = element.getBoundingClientRect();}var result={left:rect.left,top:rect.top,width:rect.right - rect.left,height:rect.bottom - rect.top}; // subtract scrollbar size from sizes
	var sizes=element.nodeName === 'HTML'?getWindowSizes():{};var width=sizes.width || element.clientWidth || result.right - result.left;var height=sizes.height || element.clientHeight || result.bottom - result.top;var horizScrollbar=element.offsetWidth - width;var vertScrollbar=element.offsetHeight - height; // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
	// we make this check conditional for performance reasons
	if(horizScrollbar || vertScrollbar){var styles=getStyleComputedProperty(element);horizScrollbar -= getBordersSize(styles,'x');vertScrollbar -= getBordersSize(styles,'y');result.width -= horizScrollbar;result.height -= vertScrollbar;}return getClientRect(result);}function getOffsetRectRelativeToArbitraryNode(children,parent){var isIE10=isIE10$1();var isHTML=parent.nodeName === 'HTML';var childrenRect=getBoundingClientRect(children);var parentRect=getBoundingClientRect(parent);var scrollParent=getScrollParent(children);var styles=getStyleComputedProperty(parent);var borderTopWidth=parseFloat(styles.borderTopWidth,10);var borderLeftWidth=parseFloat(styles.borderLeftWidth,10);var offsets=getClientRect({top:childrenRect.top - parentRect.top - borderTopWidth,left:childrenRect.left - parentRect.left - borderLeftWidth,width:childrenRect.width,height:childrenRect.height});offsets.marginTop = 0;offsets.marginLeft = 0; // Subtract margins of documentElement in case it's being used as parent
	// we do this only on HTML because it's the only element that behaves
	// differently when margins are applied to it. The margins are included in
	// the box of the documentElement, in the other cases not.
	if(!isIE10 && isHTML){var marginTop=parseFloat(styles.marginTop,10);var marginLeft=parseFloat(styles.marginLeft,10);offsets.top -= borderTopWidth - marginTop;offsets.bottom -= borderTopWidth - marginTop;offsets.left -= borderLeftWidth - marginLeft;offsets.right -= borderLeftWidth - marginLeft; // Attach marginTop and marginLeft because in some circumstances we may need them
	offsets.marginTop = marginTop;offsets.marginLeft = marginLeft;}if(isIE10?parent.contains(scrollParent):parent === scrollParent && scrollParent.nodeName !== 'BODY'){offsets = includeScroll(offsets,parent);}return offsets;}function getViewportOffsetRectRelativeToArtbitraryNode(element){var html=element.ownerDocument.documentElement;var relativeOffset=getOffsetRectRelativeToArbitraryNode(element,html);var width=Math.max(html.clientWidth,window.innerWidth || 0);var height=Math.max(html.clientHeight,window.innerHeight || 0);var scrollTop=getScroll(html);var scrollLeft=getScroll(html,'left');var offset={top:scrollTop - relativeOffset.top + relativeOffset.marginTop,left:scrollLeft - relativeOffset.left + relativeOffset.marginLeft,width:width,height:height};return getClientRect(offset);} /**
	 * Check if the given element is fixed or is inside a fixed parent
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} element
	 * @argument {Element} customContainer
	 * @returns {Boolean} answer to "isFixed?"
	 */function isFixed(_x6){var _again5=true;_function5: while(_again5) {var element=_x6;_again5 = false;var nodeName=element.nodeName;if(nodeName === 'BODY' || nodeName === 'HTML'){return false;}if(getStyleComputedProperty(element,'position') === 'fixed'){return true;}_x6 = getParentNode(element);_again5 = true;nodeName = undefined;continue _function5;}} /**
	 * Computed the boundaries limits and return them
	 * @method
	 * @memberof Popper.Utils
	 * @param {HTMLElement} popper
	 * @param {HTMLElement} reference
	 * @param {number} padding
	 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
	 * @returns {Object} Coordinates of the boundaries
	 */function getBoundaries(popper,reference,padding,boundariesElement){ // NOTE: 1 DOM access here
	var boundaries={top:0,left:0};var offsetParent=findCommonOffsetParent(popper,reference); // Handle viewport case
	if(boundariesElement === 'viewport'){boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent);}else { // Handle other cases based on DOM element used as boundaries
	var boundariesNode=void 0;if(boundariesElement === 'scrollParent'){boundariesNode = getScrollParent(getParentNode(reference));if(boundariesNode.nodeName === 'BODY'){boundariesNode = popper.ownerDocument.documentElement;}}else if(boundariesElement === 'window'){boundariesNode = popper.ownerDocument.documentElement;}else {boundariesNode = boundariesElement;}var offsets=getOffsetRectRelativeToArbitraryNode(boundariesNode,offsetParent); // In case of HTML, we need a different computation
	if(boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)){var _getWindowSizes=getWindowSizes(),height=_getWindowSizes.height,width=_getWindowSizes.width;boundaries.top += offsets.top - offsets.marginTop;boundaries.bottom = height + offsets.top;boundaries.left += offsets.left - offsets.marginLeft;boundaries.right = width + offsets.left;}else { // for all the other DOM elements, this one is good
	boundaries = offsets;}} // Add paddings
	boundaries.left += padding;boundaries.top += padding;boundaries.right -= padding;boundaries.bottom -= padding;return boundaries;}function getArea(_ref){var width=_ref.width,height=_ref.height;return width * height;} /**
	 * Utility used to transform the `auto` placement to the placement with more
	 * available space.
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Object} data - The data object generated by update method
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {Object} The data object, properly modified
	 */function computeAutoPlacement(placement,refRect,popper,reference,boundariesElement){var padding=arguments.length > 5 && arguments[5] !== undefined?arguments[5]:0;if(placement.indexOf('auto') === -1){return placement;}var boundaries=getBoundaries(popper,reference,padding,boundariesElement);var rects={top:{width:boundaries.width,height:refRect.top - boundaries.top},right:{width:boundaries.right - refRect.right,height:boundaries.height},bottom:{width:boundaries.width,height:boundaries.bottom - refRect.bottom},left:{width:refRect.left - boundaries.left,height:boundaries.height}};var sortedAreas=Object.keys(rects).map(function(key){return _extends$1({key:key},rects[key],{area:getArea(rects[key])});}).sort(function(a,b){return b.area - a.area;});var filteredAreas=sortedAreas.filter(function(_ref2){var width=_ref2.width,height=_ref2.height;return width >= popper.clientWidth && height >= popper.clientHeight;});var computedPlacement=filteredAreas.length > 0?filteredAreas[0].key:sortedAreas[0].key;var variation=placement.split('-')[1];return computedPlacement + (variation?'-' + variation:'');} /**
	 * Get offsets to the reference element
	 * @method
	 * @memberof Popper.Utils
	 * @param {Object} state
	 * @param {Element} popper - the popper element
	 * @param {Element} reference - the reference element (the popper will be relative to this)
	 * @returns {Object} An object containing the offsets which will be applied to the popper
	 */function getReferenceOffsets(state,popper,reference){var commonOffsetParent=findCommonOffsetParent(popper,reference);return getOffsetRectRelativeToArbitraryNode(reference,commonOffsetParent);} /**
	 * Get the outer sizes of the given element (offset size + margins)
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} element
	 * @returns {Object} object containing width and height properties
	 */function getOuterSizes(element){var styles=getComputedStyle(element);var x=parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);var y=parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);var result={width:element.offsetWidth + y,height:element.offsetHeight + x};return result;} /**
	 * Get the opposite placement of the given one
	 * @method
	 * @memberof Popper.Utils
	 * @argument {String} placement
	 * @returns {String} flipped placement
	 */function getOppositePlacement(placement){var hash={left:'right',right:'left',bottom:'top',top:'bottom'};return placement.replace(/left|right|bottom|top/g,function(matched){return hash[matched];});} /**
	 * Get offsets to the popper
	 * @method
	 * @memberof Popper.Utils
	 * @param {Object} position - CSS position the Popper will get applied
	 * @param {HTMLElement} popper - the popper element
	 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
	 * @param {String} placement - one of the valid placement options
	 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
	 */function getPopperOffsets(popper,referenceOffsets,placement){placement = placement.split('-')[0]; // Get popper node sizes
	var popperRect=getOuterSizes(popper); // Add position, width and height to our offsets object
	var popperOffsets={width:popperRect.width,height:popperRect.height}; // depending by the popper placement we have to compute its offsets slightly differently
	var isHoriz=['right','left'].indexOf(placement) !== -1;var mainSide=isHoriz?'top':'left';var secondarySide=isHoriz?'left':'top';var measurement=isHoriz?'height':'width';var secondaryMeasurement=!isHoriz?'height':'width';popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;if(placement === secondarySide){popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];}else {popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];}return popperOffsets;} /**
	 * Mimics the `find` method of Array
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Array} arr
	 * @argument prop
	 * @argument value
	 * @returns index or -1
	 */function find(arr,check){ // use native find if supported
	if(Array.prototype.find){return arr.find(check);} // use `filter` to obtain the same behavior of `find`
	return arr.filter(check)[0];} /**
	 * Return the index of the matching object
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Array} arr
	 * @argument prop
	 * @argument value
	 * @returns index or -1
	 */function findIndex(arr,prop,value){ // use native findIndex if supported
	if(Array.prototype.findIndex){return arr.findIndex(function(cur){return cur[prop] === value;});} // use `find` + `indexOf` if `findIndex` isn't supported
	var match=find(arr,function(obj){return obj[prop] === value;});return arr.indexOf(match);} /**
	 * Loop trough the list of modifiers and run them in order,
	 * each of them will then edit the data object.
	 * @method
	 * @memberof Popper.Utils
	 * @param {dataObject} data
	 * @param {Array} modifiers
	 * @param {String} ends - Optional modifier name used as stopper
	 * @returns {dataObject}
	 */function runModifiers(modifiers,data,ends){var modifiersToRun=ends === undefined?modifiers:modifiers.slice(0,findIndex(modifiers,'name',ends));modifiersToRun.forEach(function(modifier){if(modifier['function']){ // eslint-disable-line dot-notation
	console.warn('`modifier.function` is deprecated, use `modifier.fn`!');}var fn=modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
	if(modifier.enabled && isFunction(fn)){ // Add properties to offsets to make them a complete clientRect object
	// we do this before each modifier to make sure the previous one doesn't
	// mess with these values
	data.offsets.popper = getClientRect(data.offsets.popper);data.offsets.reference = getClientRect(data.offsets.reference);data = fn(data,modifier);}});return data;} /**
	 * Updates the position of the popper, computing the new offsets and applying
	 * the new style.<br />
	 * Prefer `scheduleUpdate` over `update` because of performance reasons.
	 * @method
	 * @memberof Popper
	 */function update(){ // if popper is destroyed, don't perform any further update
	if(this.state.isDestroyed){return;}var data={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:false,offsets:{}}; // compute reference element offsets
	data.offsets.reference = getReferenceOffsets(this.state,this.popper,this.reference); // compute auto placement, store placement inside the data object,
	// modifiers will be able to edit `placement` if needed
	// and refer to originalPlacement to know the original value
	data.placement = computeAutoPlacement(this.options.placement,data.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding); // store the computed placement inside `originalPlacement`
	data.originalPlacement = data.placement; // compute the popper offsets
	data.offsets.popper = getPopperOffsets(this.popper,data.offsets.reference,data.placement);data.offsets.popper.position = 'absolute'; // run the modifiers
	data = runModifiers(this.modifiers,data); // the first `update` will call `onCreate` callback
	// the other ones will call `onUpdate` callback
	if(!this.state.isCreated){this.state.isCreated = true;this.options.onCreate(data);}else {this.options.onUpdate(data);}} /**
	 * Helper used to know if the given modifier is enabled.
	 * @method
	 * @memberof Popper.Utils
	 * @returns {Boolean}
	 */function isModifierEnabled(modifiers,modifierName){return modifiers.some(function(_ref){var name=_ref.name,enabled=_ref.enabled;return enabled && name === modifierName;});} /**
	 * Get the prefixed supported property name
	 * @method
	 * @memberof Popper.Utils
	 * @argument {String} property (camelCase)
	 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
	 */function getSupportedPropertyName(property){var prefixes=[false,'ms','Webkit','Moz','O'];var upperProp=property.charAt(0).toUpperCase() + property.slice(1);for(var i=0;i < prefixes.length - 1;i++) {var prefix=prefixes[i];var toCheck=prefix?'' + prefix + upperProp:property;if(typeof document.body.style[toCheck] !== 'undefined'){return toCheck;}}return null;} /**
	 * Destroy the popper
	 * @method
	 * @memberof Popper
	 */function destroy(){this.state.isDestroyed = true; // touch DOM only if `applyStyle` modifier is enabled
	if(isModifierEnabled(this.modifiers,'applyStyle')){this.popper.removeAttribute('x-placement');this.popper.style.left = '';this.popper.style.position = '';this.popper.style.top = '';this.popper.style[getSupportedPropertyName('transform')] = '';}this.disableEventListeners(); // remove the popper if user explicity asked for the deletion on destroy
	// do not use `remove` because IE11 doesn't support it
	if(this.options.removeOnDestroy){this.popper.parentNode.removeChild(this.popper);}return this;} /**
	 * Get the window associated with the element
	 * @argument {Element} element
	 * @returns {Window}
	 */function getWindow(element){var ownerDocument=element.ownerDocument;return ownerDocument?ownerDocument.defaultView:window;}function attachToScrollParents(scrollParent,event,callback,scrollParents){var isBody=scrollParent.nodeName === 'BODY';var target=isBody?scrollParent.ownerDocument.defaultView:scrollParent;target.addEventListener(event,callback,{passive:true});if(!isBody){attachToScrollParents(getScrollParent(target.parentNode),event,callback,scrollParents);}scrollParents.push(target);} /**
	 * Setup needed event listeners used to update the popper position
	 * @method
	 * @memberof Popper.Utils
	 * @private
	 */function setupEventListeners(reference,options,state,updateBound){ // Resize event listener on window
	state.updateBound = updateBound;getWindow(reference).addEventListener('resize',state.updateBound,{passive:true}); // Scroll event listener on scroll parents
	var scrollElement=getScrollParent(reference);attachToScrollParents(scrollElement,'scroll',state.updateBound,state.scrollParents);state.scrollElement = scrollElement;state.eventsEnabled = true;return state;} /**
	 * It will add resize/scroll events and start recalculating
	 * position of the popper element when they are triggered.
	 * @method
	 * @memberof Popper
	 */function enableEventListeners(){if(!this.state.eventsEnabled){this.state = setupEventListeners(this.reference,this.options,this.state,this.scheduleUpdate);}} /**
	 * Remove event listeners used to update the popper position
	 * @method
	 * @memberof Popper.Utils
	 * @private
	 */function removeEventListeners(reference,state){ // Remove resize event listener on window
	getWindow(reference).removeEventListener('resize',state.updateBound); // Remove scroll event listener on scroll parents
	state.scrollParents.forEach(function(target){target.removeEventListener('scroll',state.updateBound);}); // Reset state
	state.updateBound = null;state.scrollParents = [];state.scrollElement = null;state.eventsEnabled = false;return state;} /**
	 * It will remove resize/scroll events and won't recalculate popper position
	 * when they are triggered. It also won't trigger onUpdate callback anymore,
	 * unless you call `update` method manually.
	 * @method
	 * @memberof Popper
	 */function disableEventListeners(){if(this.state.eventsEnabled){cancelAnimationFrame(this.scheduleUpdate);this.state = removeEventListeners(this.reference,this.state);}} /**
	 * Tells if a given input is a number
	 * @method
	 * @memberof Popper.Utils
	 * @param {*} input to check
	 * @return {Boolean}
	 */function isNumeric(n){return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);} /**
	 * Set the style to the given popper
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} element - Element to apply the style to
	 * @argument {Object} styles
	 * Object with a list of properties and values which will be applied to the element
	 */function setStyles(element,styles){Object.keys(styles).forEach(function(prop){var unit=''; // add unit if the value is numeric and is one of the following
	if(['width','height','top','right','bottom','left'].indexOf(prop) !== -1 && isNumeric(styles[prop])){unit = 'px';}element.style[prop] = styles[prop] + unit;});} /**
	 * Set the attributes to the given popper
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} element - Element to apply the attributes to
	 * @argument {Object} styles
	 * Object with a list of properties and values which will be applied to the element
	 */function setAttributes(element,attributes){Object.keys(attributes).forEach(function(prop){var value=attributes[prop];if(value !== false){element.setAttribute(prop,attributes[prop]);}else {element.removeAttribute(prop);}});} /**
	 * @function
	 * @memberof Modifiers
	 * @argument {Object} data - The data object generated by `update` method
	 * @argument {Object} data.styles - List of style properties - values to apply to popper element
	 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {Object} The same data object
	 */function applyStyle(data){ // any property present in `data.styles` will be applied to the popper,
	// in this way we can make the 3rd party modifiers add custom styles to it
	// Be aware, modifiers could override the properties defined in the previous
	// lines of this modifier!
	setStyles(data.instance.popper,data.styles); // any property present in `data.attributes` will be applied to the popper,
	// they will be set as HTML attributes of the element
	setAttributes(data.instance.popper,data.attributes); // if arrowElement is defined and arrowStyles has some properties
	if(data.arrowElement && Object.keys(data.arrowStyles).length){setStyles(data.arrowElement,data.arrowStyles);}return data;} /**
	 * Set the x-placement attribute before everything else because it could be used
	 * to add margins to the popper margins needs to be calculated to get the
	 * correct popper offsets.
	 * @method
	 * @memberof Popper.modifiers
	 * @param {HTMLElement} reference - The reference element used to position the popper
	 * @param {HTMLElement} popper - The HTML element used as popper.
	 * @param {Object} options - Popper.js options
	 */function applyStyleOnLoad(reference,popper,options,modifierOptions,state){ // compute reference element offsets
	var referenceOffsets=getReferenceOffsets(state,popper,reference); // compute auto placement, store placement inside the data object,
	// modifiers will be able to edit `placement` if needed
	// and refer to originalPlacement to know the original value
	var placement=computeAutoPlacement(options.placement,referenceOffsets,popper,reference,options.modifiers.flip.boundariesElement,options.modifiers.flip.padding);popper.setAttribute('x-placement',placement); // Apply `position` to popper before anything else because
	// without the position applied we can't guarantee correct computations
	setStyles(popper,{position:'absolute'});return options;} /**
	 * @function
	 * @memberof Modifiers
	 * @argument {Object} data - The data object generated by `update` method
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {Object} The data object, properly modified
	 */function computeStyle(data,options){var x=options.x,y=options.y;var popper=data.offsets.popper; // Remove this legacy support in Popper.js v2
	var legacyGpuAccelerationOption=find(data.instance.modifiers,function(modifier){return modifier.name === 'applyStyle';}).gpuAcceleration;if(legacyGpuAccelerationOption !== undefined){console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');}var gpuAcceleration=legacyGpuAccelerationOption !== undefined?legacyGpuAccelerationOption:options.gpuAcceleration;var offsetParent=getOffsetParent(data.instance.popper);var offsetParentRect=getBoundingClientRect(offsetParent); // Styles
	var styles={position:popper.position}; // floor sides to avoid blurry text
	var offsets={left:Math.floor(popper.left),top:Math.floor(popper.top),bottom:Math.floor(popper.bottom),right:Math.floor(popper.right)};var sideA=x === 'bottom'?'top':'bottom';var sideB=y === 'right'?'left':'right'; // if gpuAcceleration is set to `true` and transform is supported,
	//  we use `translate3d` to apply the position to the popper we
	// automatically use the supported prefixed version if needed
	var prefixedProperty=getSupportedPropertyName('transform'); // now, let's make a step back and look at this code closely (wtf?)
	// If the content of the popper grows once it's been positioned, it
	// may happen that the popper gets misplaced because of the new content
	// overflowing its reference element
	// To avoid this problem, we provide two options (x and y), which allow
	// the consumer to define the offset origin.
	// If we position a popper on top of a reference element, we can set
	// `x` to `top` to make the popper grow towards its top instead of
	// its bottom.
	var left=void 0,top=void 0;if(sideA === 'bottom'){top = -offsetParentRect.height + offsets.bottom;}else {top = offsets.top;}if(sideB === 'right'){left = -offsetParentRect.width + offsets.right;}else {left = offsets.left;}if(gpuAcceleration && prefixedProperty){styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';styles[sideA] = 0;styles[sideB] = 0;styles.willChange = 'transform';}else { // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
	var invertTop=sideA === 'bottom'?-1:1;var invertLeft=sideB === 'right'?-1:1;styles[sideA] = top * invertTop;styles[sideB] = left * invertLeft;styles.willChange = sideA + ', ' + sideB;} // Attributes
	var attributes={'x-placement':data.placement}; // Update `data` attributes, styles and arrowStyles
	data.attributes = _extends$1({},attributes,data.attributes);data.styles = _extends$1({},styles,data.styles);data.arrowStyles = _extends$1({},data.offsets.arrow,data.arrowStyles);return data;} /**
	 * Helper used to know if the given modifier depends from another one.<br />
	 * It checks if the needed modifier is listed and enabled.
	 * @method
	 * @memberof Popper.Utils
	 * @param {Array} modifiers - list of modifiers
	 * @param {String} requestingName - name of requesting modifier
	 * @param {String} requestedName - name of requested modifier
	 * @returns {Boolean}
	 */function isModifierRequired(modifiers,requestingName,requestedName){var requesting=find(modifiers,function(_ref){var name=_ref.name;return name === requestingName;});var isRequired=!!requesting && modifiers.some(function(modifier){return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;});if(!isRequired){var _requesting='`' + requestingName + '`';var requested='`' + requestedName + '`';console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');}return isRequired;} /**
	 * @function
	 * @memberof Modifiers
	 * @argument {Object} data - The data object generated by update method
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {Object} The data object, properly modified
	 */function arrow(data,options){var _data$offsets$arrow; // arrow depends on keepTogether in order to work
	if(!isModifierRequired(data.instance.modifiers,'arrow','keepTogether')){return data;}var arrowElement=options.element; // if arrowElement is a string, suppose it's a CSS selector
	if(typeof arrowElement === 'string'){arrowElement = data.instance.popper.querySelector(arrowElement); // if arrowElement is not found, don't run the modifier
	if(!arrowElement){return data;}}else { // if the arrowElement isn't a query selector we must check that the
	// provided DOM node is child of its popper node
	if(!data.instance.popper.contains(arrowElement)){console.warn('WARNING: `arrow.element` must be child of its popper element!');return data;}}var placement=data.placement.split('-')[0];var _data$offsets=data.offsets,popper=_data$offsets.popper,reference=_data$offsets.reference;var isVertical=['left','right'].indexOf(placement) !== -1;var len=isVertical?'height':'width';var sideCapitalized=isVertical?'Top':'Left';var side=sideCapitalized.toLowerCase();var altSide=isVertical?'left':'top';var opSide=isVertical?'bottom':'right';var arrowElementSize=getOuterSizes(arrowElement)[len]; //
	// extends keepTogether behavior making sure the popper and its
	// reference have enough pixels in conjuction
	//
	// top/left side
	if(reference[opSide] - arrowElementSize < popper[side]){data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);} // bottom/right side
	if(reference[side] + arrowElementSize > popper[opSide]){data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];}data.offsets.popper = getClientRect(data.offsets.popper); // compute center of the popper
	var center=reference[side] + reference[len] / 2 - arrowElementSize / 2; // Compute the sideValue using the updated popper offsets
	// take popper margin in account because we don't have this info available
	var css=getStyleComputedProperty(data.instance.popper);var popperMarginSide=parseFloat(css['margin' + sideCapitalized],10);var popperBorderSide=parseFloat(css['border' + sideCapitalized + 'Width'],10);var sideValue=center - data.offsets.popper[side] - popperMarginSide - popperBorderSide; // prevent arrowElement from being placed not contiguously to its popper
	sideValue = Math.max(Math.min(popper[len] - arrowElementSize,sideValue),0);data.arrowElement = arrowElement;data.offsets.arrow = (_data$offsets$arrow = {},defineProperty$2(_data$offsets$arrow,side,Math.round(sideValue)),defineProperty$2(_data$offsets$arrow,altSide,''),_data$offsets$arrow);return data;} /**
	 * Get the opposite placement variation of the given one
	 * @method
	 * @memberof Popper.Utils
	 * @argument {String} placement variation
	 * @returns {String} flipped placement variation
	 */function getOppositeVariation(variation){if(variation === 'end'){return 'start';}else if(variation === 'start'){return 'end';}return variation;} /**
	 * List of accepted placements to use as values of the `placement` option.<br />
	 * Valid placements are:
	 * - `auto`
	 * - `top`
	 * - `right`
	 * - `bottom`
	 * - `left`
	 *
	 * Each placement can have a variation from this list:
	 * - `-start`
	 * - `-end`
	 *
	 * Variations are interpreted easily if you think of them as the left to right
	 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
	 * is right.<br />
	 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
	 *
	 * Some valid examples are:
	 * - `top-end` (on top of reference, right aligned)
	 * - `right-start` (on right of reference, top aligned)
	 * - `bottom` (on bottom, centered)
	 * - `auto-right` (on the side with more space available, alignment depends by placement)
	 *
	 * @static
	 * @type {Array}
	 * @enum {String}
	 * @readonly
	 * @method placements
	 * @memberof Popper
	 */var placements=['auto-start','auto','auto-end','top-start','top','top-end','right-start','right','right-end','bottom-end','bottom','bottom-start','left-end','left','left-start']; // Get rid of `auto` `auto-start` and `auto-end`
	var validPlacements=placements.slice(3); /**
	 * Given an initial placement, returns all the subsequent placements
	 * clockwise (or counter-clockwise).
	 *
	 * @method
	 * @memberof Popper.Utils
	 * @argument {String} placement - A valid placement (it accepts variations)
	 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
	 * @returns {Array} placements including their variations
	 */function clockwise(placement){var counter=arguments.length > 1 && arguments[1] !== undefined?arguments[1]:false;var index=validPlacements.indexOf(placement);var arr=validPlacements.slice(index + 1).concat(validPlacements.slice(0,index));return counter?arr.reverse():arr;}var BEHAVIORS={FLIP:'flip',CLOCKWISE:'clockwise',COUNTERCLOCKWISE:'counterclockwise'}; /**
	 * @function
	 * @memberof Modifiers
	 * @argument {Object} data - The data object generated by update method
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {Object} The data object, properly modified
	 */function flip(data,options){ // if `inner` modifier is enabled, we can't use the `flip` modifier
	if(isModifierEnabled(data.instance.modifiers,'inner')){return data;}if(data.flipped && data.placement === data.originalPlacement){ // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
	return data;}var boundaries=getBoundaries(data.instance.popper,data.instance.reference,options.padding,options.boundariesElement);var placement=data.placement.split('-')[0];var placementOpposite=getOppositePlacement(placement);var variation=data.placement.split('-')[1] || '';var flipOrder=[];switch(options.behavior){case BEHAVIORS.FLIP:flipOrder = [placement,placementOpposite];break;case BEHAVIORS.CLOCKWISE:flipOrder = clockwise(placement);break;case BEHAVIORS.COUNTERCLOCKWISE:flipOrder = clockwise(placement,true);break;default:flipOrder = options.behavior;}flipOrder.forEach(function(step,index){if(placement !== step || flipOrder.length === index + 1){return data;}placement = data.placement.split('-')[0];placementOpposite = getOppositePlacement(placement);var popperOffsets=data.offsets.popper;var refOffsets=data.offsets.reference; // using floor because the reference offsets may contain decimals we are not going to consider here
	var floor=Math.floor;var overlapsRef=placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);var overflowsLeft=floor(popperOffsets.left) < floor(boundaries.left);var overflowsRight=floor(popperOffsets.right) > floor(boundaries.right);var overflowsTop=floor(popperOffsets.top) < floor(boundaries.top);var overflowsBottom=floor(popperOffsets.bottom) > floor(boundaries.bottom);var overflowsBoundaries=placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom; // flip the variation if required
	var isVertical=['top','bottom'].indexOf(placement) !== -1;var flippedVariation=!!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);if(overlapsRef || overflowsBoundaries || flippedVariation){ // this boolean to detect any flip loop
	data.flipped = true;if(overlapsRef || overflowsBoundaries){placement = flipOrder[index + 1];}if(flippedVariation){variation = getOppositeVariation(variation);}data.placement = placement + (variation?'-' + variation:''); // this object contains `position`, we want to preserve it along with
	// any additional property we may add in the future
	data.offsets.popper = _extends$1({},data.offsets.popper,getPopperOffsets(data.instance.popper,data.offsets.reference,data.placement));data = runModifiers(data.instance.modifiers,data,'flip');}});return data;} /**
	 * @function
	 * @memberof Modifiers
	 * @argument {Object} data - The data object generated by update method
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {Object} The data object, properly modified
	 */function keepTogether(data){var _data$offsets=data.offsets,popper=_data$offsets.popper,reference=_data$offsets.reference;var placement=data.placement.split('-')[0];var floor=Math.floor;var isVertical=['top','bottom'].indexOf(placement) !== -1;var side=isVertical?'right':'bottom';var opSide=isVertical?'left':'top';var measurement=isVertical?'width':'height';if(popper[side] < floor(reference[opSide])){data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];}if(popper[opSide] > floor(reference[side])){data.offsets.popper[opSide] = floor(reference[side]);}return data;} /**
	 * Converts a string containing value + unit into a px value number
	 * @function
	 * @memberof {modifiers~offset}
	 * @private
	 * @argument {String} str - Value + unit string
	 * @argument {String} measurement - `height` or `width`
	 * @argument {Object} popperOffsets
	 * @argument {Object} referenceOffsets
	 * @returns {Number|String}
	 * Value in pixels, or original string if no values were extracted
	 */function toValue(str,measurement,popperOffsets,referenceOffsets){ // separate value from unit
	var split=str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);var value=+split[1];var unit=split[2]; // If it's not a number it's an operator, I guess
	if(!value){return str;}if(unit.indexOf('%') === 0){var element=void 0;switch(unit){case '%p':element = popperOffsets;break;case '%':case '%r':default:element = referenceOffsets;}var rect=getClientRect(element);return rect[measurement] / 100 * value;}else if(unit === 'vh' || unit === 'vw'){ // if is a vh or vw, we calculate the size based on the viewport
	var size=void 0;if(unit === 'vh'){size = Math.max(document.documentElement.clientHeight,window.innerHeight || 0);}else {size = Math.max(document.documentElement.clientWidth,window.innerWidth || 0);}return size / 100 * value;}else { // if is an explicit pixel unit, we get rid of the unit and keep the value
	// if is an implicit unit, it's px, and we return just the value
	return value;}} /**
	 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
	 * @function
	 * @memberof {modifiers~offset}
	 * @private
	 * @argument {String} offset
	 * @argument {Object} popperOffsets
	 * @argument {Object} referenceOffsets
	 * @argument {String} basePlacement
	 * @returns {Array} a two cells array with x and y offsets in numbers
	 */function parseOffset(offset,popperOffsets,referenceOffsets,basePlacement){var offsets=[0,0]; // Use height if placement is left or right and index is 0 otherwise use width
	// in this way the first offset will use an axis and the second one
	// will use the other one
	var useHeight=['right','left'].indexOf(basePlacement) !== -1; // Split the offset string to obtain a list of values and operands
	// The regex addresses values with the plus or minus sign in front (+10, -20, etc)
	var fragments=offset.split(/(\+|\-)/).map(function(frag){return frag.trim();}); // Detect if the offset string contains a pair of values or a single one
	// they could be separated by comma or space
	var divider=fragments.indexOf(find(fragments,function(frag){return frag.search(/,|\s/) !== -1;}));if(fragments[divider] && fragments[divider].indexOf(',') === -1){console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');} // If divider is found, we divide the list of values and operands to divide
	// them by ofset X and Y.
	var splitRegex=/\s*,\s*|\s+/;var ops=divider !== -1?[fragments.slice(0,divider).concat([fragments[divider].split(splitRegex)[0]]),[fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))]:[fragments]; // Convert the values with units to absolute pixels to allow our computations
	ops = ops.map(function(op,index){ // Most of the units rely on the orientation of the popper
	var measurement=(index === 1?!useHeight:useHeight)?'height':'width';var mergeWithPrevious=false;return op // This aggregates any `+` or `-` sign that aren't considered operators
	// e.g.: 10 + +5 => [10, +, +5]
	.reduce(function(a,b){if(a[a.length - 1] === '' && ['+','-'].indexOf(b) !== -1){a[a.length - 1] = b;mergeWithPrevious = true;return a;}else if(mergeWithPrevious){a[a.length - 1] += b;mergeWithPrevious = false;return a;}else {return a.concat(b);}},[]) // Here we convert the string values into number values (in px)
	.map(function(str){return toValue(str,measurement,popperOffsets,referenceOffsets);});}); // Loop trough the offsets arrays and execute the operations
	ops.forEach(function(op,index){op.forEach(function(frag,index2){if(isNumeric(frag)){offsets[index] += frag * (op[index2 - 1] === '-'?-1:1);}});});return offsets;} /**
	 * @function
	 * @memberof Modifiers
	 * @argument {Object} data - The data object generated by update method
	 * @argument {Object} options - Modifiers configuration and options
	 * @argument {Number|String} options.offset=0
	 * The offset value as described in the modifier description
	 * @returns {Object} The data object, properly modified
	 */function offset$1(data,_ref){var offset=_ref.offset;var placement=data.placement,_data$offsets=data.offsets,popper=_data$offsets.popper,reference=_data$offsets.reference;var basePlacement=placement.split('-')[0];var offsets=void 0;if(isNumeric(+offset)){offsets = [+offset,0];}else {offsets = parseOffset(offset,popper,reference,basePlacement);}if(basePlacement === 'left'){popper.top += offsets[0];popper.left -= offsets[1];}else if(basePlacement === 'right'){popper.top += offsets[0];popper.left += offsets[1];}else if(basePlacement === 'top'){popper.left += offsets[0];popper.top -= offsets[1];}else if(basePlacement === 'bottom'){popper.left += offsets[0];popper.top += offsets[1];}data.popper = popper;return data;} /**
	 * @function
	 * @memberof Modifiers
	 * @argument {Object} data - The data object generated by `update` method
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {Object} The data object, properly modified
	 */function preventOverflow(data,options){var boundariesElement=options.boundariesElement || getOffsetParent(data.instance.popper); // If offsetParent is the reference element, we really want to
	// go one step up and use the next offsetParent as reference to
	// avoid to make this modifier completely useless and look like broken
	if(data.instance.reference === boundariesElement){boundariesElement = getOffsetParent(boundariesElement);}var boundaries=getBoundaries(data.instance.popper,data.instance.reference,options.padding,boundariesElement);options.boundaries = boundaries;var order=options.priority;var popper=data.offsets.popper;var check={primary:function primary(placement){var value=popper[placement];if(popper[placement] < boundaries[placement] && !options.escapeWithReference){value = Math.max(popper[placement],boundaries[placement]);}return defineProperty$2({},placement,value);},secondary:function secondary(placement){var mainSide=placement === 'right'?'left':'top';var value=popper[mainSide];if(popper[placement] > boundaries[placement] && !options.escapeWithReference){value = Math.min(popper[mainSide],boundaries[placement] - (placement === 'right'?popper.width:popper.height));}return defineProperty$2({},mainSide,value);}};order.forEach(function(placement){var side=['left','top'].indexOf(placement) !== -1?'primary':'secondary';popper = _extends$1({},popper,check[side](placement));});data.offsets.popper = popper;return data;} /**
	 * @function
	 * @memberof Modifiers
	 * @argument {Object} data - The data object generated by `update` method
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {Object} The data object, properly modified
	 */function shift(data){var placement=data.placement;var basePlacement=placement.split('-')[0];var shiftvariation=placement.split('-')[1]; // if shift shiftvariation is specified, run the modifier
	if(shiftvariation){var _data$offsets=data.offsets,reference=_data$offsets.reference,popper=_data$offsets.popper;var isVertical=['bottom','top'].indexOf(basePlacement) !== -1;var side=isVertical?'left':'top';var measurement=isVertical?'width':'height';var shiftOffsets={start:defineProperty$2({},side,reference[side]),end:defineProperty$2({},side,reference[side] + reference[measurement] - popper[measurement])};data.offsets.popper = _extends$1({},popper,shiftOffsets[shiftvariation]);}return data;} /**
	 * @function
	 * @memberof Modifiers
	 * @argument {Object} data - The data object generated by update method
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {Object} The data object, properly modified
	 */function hide(data){if(!isModifierRequired(data.instance.modifiers,'hide','preventOverflow')){return data;}var refRect=data.offsets.reference;var bound=find(data.instance.modifiers,function(modifier){return modifier.name === 'preventOverflow';}).boundaries;if(refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left){ // Avoid unnecessary DOM access if visibility hasn't changed
	if(data.hide === true){return data;}data.hide = true;data.attributes['x-out-of-boundaries'] = '';}else { // Avoid unnecessary DOM access if visibility hasn't changed
	if(data.hide === false){return data;}data.hide = false;data.attributes['x-out-of-boundaries'] = false;}return data;} /**
	 * @function
	 * @memberof Modifiers
	 * @argument {Object} data - The data object generated by `update` method
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {Object} The data object, properly modified
	 */function inner(data){var placement=data.placement;var basePlacement=placement.split('-')[0];var _data$offsets=data.offsets,popper=_data$offsets.popper,reference=_data$offsets.reference;var isHoriz=['left','right'].indexOf(basePlacement) !== -1;var subtractLength=['top','left'].indexOf(basePlacement) === -1;popper[isHoriz?'left':'top'] = reference[basePlacement] - (subtractLength?popper[isHoriz?'width':'height']:0);data.placement = getOppositePlacement(placement);data.offsets.popper = getClientRect(popper);return data;} /**
	 * Modifier function, each modifier can have a function of this type assigned
	 * to its `fn` property.<br />
	 * These functions will be called on each update, this means that you must
	 * make sure they are performant enough to avoid performance bottlenecks.
	 *
	 * @function ModifierFn
	 * @argument {dataObject} data - The data object generated by `update` method
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {dataObject} The data object, properly modified
	 */ /**
	 * Modifiers are plugins used to alter the behavior of your poppers.<br />
	 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
	 * needed by the library.
	 *
	 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
	 * All the other properties are configurations that could be tweaked.
	 * @namespace modifiers
	 */var modifiers={ /**
	   * Modifier used to shift the popper on the start or end of its reference
	   * element.<br />
	   * It will read the variation of the `placement` property.<br />
	   * It can be one either `-end` or `-start`.
	   * @memberof modifiers
	   * @inner
	   */shift:{ /** @prop {number} order=100 - Index used to define the order of execution */order:100, /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */enabled:true, /** @prop {ModifierFn} */fn:shift}, /**
	   * The `offset` modifier can shift your popper on both its axis.
	   *
	   * It accepts the following units:
	   * - `px` or unitless, interpreted as pixels
	   * - `%` or `%r`, percentage relative to the length of the reference element
	   * - `%p`, percentage relative to the length of the popper element
	   * - `vw`, CSS viewport width unit
	   * - `vh`, CSS viewport height unit
	   *
	   * For length is intended the main axis relative to the placement of the popper.<br />
	   * This means that if the placement is `top` or `bottom`, the length will be the
	   * `width`. In case of `left` or `right`, it will be the height.
	   *
	   * You can provide a single value (as `Number` or `String`), or a pair of values
	   * as `String` divided by a comma or one (or more) white spaces.<br />
	   * The latter is a deprecated method because it leads to confusion and will be
	   * removed in v2.<br />
	   * Additionally, it accepts additions and subtractions between different units.
	   * Note that multiplications and divisions aren't supported.
	   *
	   * Valid examples are:
	   * ```
	   * 10
	   * '10%'
	   * '10, 10'
	   * '10%, 10'
	   * '10 + 10%'
	   * '10 - 5vh + 3%'
	   * '-10px + 5vh, 5px - 6%'
	   * ```
	   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
	   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
	   * > More on this [reading this issue](https://github.com/FezVrasta/popper.js/issues/373)
	   *
	   * @memberof modifiers
	   * @inner
	   */offset:{ /** @prop {number} order=200 - Index used to define the order of execution */order:200, /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */enabled:true, /** @prop {ModifierFn} */fn:offset$1, /** @prop {Number|String} offset=0
	     * The offset value as described in the modifier description
	     */offset:0}, /**
	   * Modifier used to prevent the popper from being positioned outside the boundary.
	   *
	   * An scenario exists where the reference itself is not within the boundaries.<br />
	   * We can say it has "escaped the boundaries" — or just "escaped".<br />
	   * In this case we need to decide whether the popper should either:
	   *
	   * - detach from the reference and remain "trapped" in the boundaries, or
	   * - if it should ignore the boundary and "escape with its reference"
	   *
	   * When `escapeWithReference` is set to`true` and reference is completely
	   * outside its boundaries, the popper will overflow (or completely leave)
	   * the boundaries in order to remain attached to the edge of the reference.
	   *
	   * @memberof modifiers
	   * @inner
	   */preventOverflow:{ /** @prop {number} order=300 - Index used to define the order of execution */order:300, /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */enabled:true, /** @prop {ModifierFn} */fn:preventOverflow, /**
	     * @prop {Array} [priority=['left','right','top','bottom']]
	     * Popper will try to prevent overflow following these priorities by default,
	     * then, it could overflow on the left and on top of the `boundariesElement`
	     */priority:['left','right','top','bottom'], /**
	     * @prop {number} padding=5
	     * Amount of pixel used to define a minimum distance between the boundaries
	     * and the popper this makes sure the popper has always a little padding
	     * between the edges of its container
	     */padding:5, /**
	     * @prop {String|HTMLElement} boundariesElement='scrollParent'
	     * Boundaries used by the modifier, can be `scrollParent`, `window`,
	     * `viewport` or any DOM element.
	     */boundariesElement:'scrollParent'}, /**
	   * Modifier used to make sure the reference and its popper stay near eachothers
	   * without leaving any gap between the two. Expecially useful when the arrow is
	   * enabled and you want to assure it to point to its reference element.
	   * It cares only about the first axis, you can still have poppers with margin
	   * between the popper and its reference element.
	   * @memberof modifiers
	   * @inner
	   */keepTogether:{ /** @prop {number} order=400 - Index used to define the order of execution */order:400, /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */enabled:true, /** @prop {ModifierFn} */fn:keepTogether}, /**
	   * This modifier is used to move the `arrowElement` of the popper to make
	   * sure it is positioned between the reference element and its popper element.
	   * It will read the outer size of the `arrowElement` node to detect how many
	   * pixels of conjuction are needed.
	   *
	   * It has no effect if no `arrowElement` is provided.
	   * @memberof modifiers
	   * @inner
	   */arrow:{ /** @prop {number} order=500 - Index used to define the order of execution */order:500, /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */enabled:true, /** @prop {ModifierFn} */fn:arrow, /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */element:'[x-arrow]'}, /**
	   * Modifier used to flip the popper's placement when it starts to overlap its
	   * reference element.
	   *
	   * Requires the `preventOverflow` modifier before it in order to work.
	   *
	   * **NOTE:** this modifier will interrupt the current update cycle and will
	   * restart it if it detects the need to flip the placement.
	   * @memberof modifiers
	   * @inner
	   */flip:{ /** @prop {number} order=600 - Index used to define the order of execution */order:600, /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */enabled:true, /** @prop {ModifierFn} */fn:flip, /**
	     * @prop {String|Array} behavior='flip'
	     * The behavior used to change the popper's placement. It can be one of
	     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
	     * placements (with optional variations).
	     */behavior:'flip', /**
	     * @prop {number} padding=5
	     * The popper will flip if it hits the edges of the `boundariesElement`
	     */padding:5, /**
	     * @prop {String|HTMLElement} boundariesElement='viewport'
	     * The element which will define the boundaries of the popper position,
	     * the popper will never be placed outside of the defined boundaries
	     * (except if keepTogether is enabled)
	     */boundariesElement:'viewport'}, /**
	   * Modifier used to make the popper flow toward the inner of the reference element.
	   * By default, when this modifier is disabled, the popper will be placed outside
	   * the reference element.
	   * @memberof modifiers
	   * @inner
	   */inner:{ /** @prop {number} order=700 - Index used to define the order of execution */order:700, /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */enabled:false, /** @prop {ModifierFn} */fn:inner}, /**
	   * Modifier used to hide the popper when its reference element is outside of the
	   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
	   * be used to hide with a CSS selector the popper when its reference is
	   * out of boundaries.
	   *
	   * Requires the `preventOverflow` modifier before it in order to work.
	   * @memberof modifiers
	   * @inner
	   */hide:{ /** @prop {number} order=800 - Index used to define the order of execution */order:800, /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */enabled:true, /** @prop {ModifierFn} */fn:hide}, /**
	   * Computes the style that will be applied to the popper element to gets
	   * properly positioned.
	   *
	   * Note that this modifier will not touch the DOM, it just prepares the styles
	   * so that `applyStyle` modifier can apply it. This separation is useful
	   * in case you need to replace `applyStyle` with a custom implementation.
	   *
	   * This modifier has `850` as `order` value to maintain backward compatibility
	   * with previous versions of Popper.js. Expect the modifiers ordering method
	   * to change in future major versions of the library.
	   *
	   * @memberof modifiers
	   * @inner
	   */computeStyle:{ /** @prop {number} order=850 - Index used to define the order of execution */order:850, /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */enabled:true, /** @prop {ModifierFn} */fn:computeStyle, /**
	     * @prop {Boolean} gpuAcceleration=true
	     * If true, it uses the CSS 3d transformation to position the popper.
	     * Otherwise, it will use the `top` and `left` properties.
	     */gpuAcceleration:true, /**
	     * @prop {string} [x='bottom']
	     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
	     * Change this if your popper should grow in a direction different from `bottom`
	     */x:'bottom', /**
	     * @prop {string} [x='left']
	     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
	     * Change this if your popper should grow in a direction different from `right`
	     */y:'right'}, /**
	   * Applies the computed styles to the popper element.
	   *
	   * All the DOM manipulations are limited to this modifier. This is useful in case
	   * you want to integrate Popper.js inside a framework or view library and you
	   * want to delegate all the DOM manipulations to it.
	   *
	   * Note that if you disable this modifier, you must make sure the popper element
	   * has its position set to `absolute` before Popper.js can do its work!
	   *
	   * Just disable this modifier and define you own to achieve the desired effect.
	   *
	   * @memberof modifiers
	   * @inner
	   */applyStyle:{ /** @prop {number} order=900 - Index used to define the order of execution */order:900, /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */enabled:true, /** @prop {ModifierFn} */fn:applyStyle, /** @prop {Function} */onLoad:applyStyleOnLoad, /**
	     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
	     * @prop {Boolean} gpuAcceleration=true
	     * If true, it uses the CSS 3d transformation to position the popper.
	     * Otherwise, it will use the `top` and `left` properties.
	     */gpuAcceleration:undefined}}; /**
	 * The `dataObject` is an object containing all the informations used by Popper.js
	 * this object get passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
	 * @name dataObject
	 * @property {Object} data.instance The Popper.js instance
	 * @property {String} data.placement Placement applied to popper
	 * @property {String} data.originalPlacement Placement originally defined on init
	 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
	 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper.
	 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
	 * @property {Object} data.styles Any CSS property defined here will be applied to the popper, it expects the JavaScript nomenclature (eg. `marginBottom`)
	 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow, it expects the JavaScript nomenclature (eg. `marginBottom`)
	 * @property {Object} data.boundaries Offsets of the popper boundaries
	 * @property {Object} data.offsets The measurements of popper, reference and arrow elements.
	 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
	 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
	 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
	 */ /**
	 * Default options provided to Popper.js constructor.<br />
	 * These can be overriden using the `options` argument of Popper.js.<br />
	 * To override an option, simply pass as 3rd argument an object with the same
	 * structure of this object, example:
	 * ```
	 * new Popper(ref, pop, {
	 *   modifiers: {
	 *     preventOverflow: { enabled: false }
	 *   }
	 * })
	 * ```
	 * @type {Object}
	 * @static
	 * @memberof Popper
	 */var Defaults={ /**
	   * Popper's placement
	   * @prop {Popper.placements} placement='bottom'
	   */placement:'bottom', /**
	   * Whether events (resize, scroll) are initially enabled
	   * @prop {Boolean} eventsEnabled=true
	   */eventsEnabled:true, /**
	   * Set to true if you want to automatically remove the popper when
	   * you call the `destroy` method.
	   * @prop {Boolean} removeOnDestroy=false
	   */removeOnDestroy:false, /**
	   * Callback called when the popper is created.<br />
	   * By default, is set to no-op.<br />
	   * Access Popper.js instance with `data.instance`.
	   * @prop {onCreate}
	   */onCreate:function onCreate(){}, /**
	   * Callback called when the popper is updated, this callback is not called
	   * on the initialization/creation of the popper, but only on subsequent
	   * updates.<br />
	   * By default, is set to no-op.<br />
	   * Access Popper.js instance with `data.instance`.
	   * @prop {onUpdate}
	   */onUpdate:function onUpdate(){}, /**
	   * List of modifiers used to modify the offsets before they are applied to the popper.
	   * They provide most of the functionalities of Popper.js
	   * @prop {modifiers}
	   */modifiers:modifiers}; /**
	 * @callback onCreate
	 * @param {dataObject} data
	 */ /**
	 * @callback onUpdate
	 * @param {dataObject} data
	 */ // Utils
	// Methods
	var Popper=(function(){ /**
	   * Create a new Popper.js instance
	   * @class Popper
	   * @param {HTMLElement|referenceObject} reference - The reference element used to position the popper
	   * @param {HTMLElement} popper - The HTML element used as popper.
	   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
	   * @return {Object} instance - The generated Popper.js instance
	   */function Popper(reference,popper){var _this=this;var options=arguments.length > 2 && arguments[2] !== undefined?arguments[2]:{};classCallCheck$1(this,Popper);this.scheduleUpdate = function(){return requestAnimationFrame(_this.update);}; // make update() debounced, so that it only runs at most once-per-tick
	this.update = debounce(this.update.bind(this)); // with {} we create a new object with the options inside it
	this.options = _extends$1({},Popper.Defaults,options); // init state
	this.state = {isDestroyed:false,isCreated:false,scrollParents:[]}; // get reference and popper elements (allow jQuery wrappers)
	this.reference = reference && reference.jquery?reference[0]:reference;this.popper = popper && popper.jquery?popper[0]:popper; // Deep merge modifiers options
	this.options.modifiers = {};Object.keys(_extends$1({},Popper.Defaults.modifiers,options.modifiers)).forEach(function(name){_this.options.modifiers[name] = _extends$1({},Popper.Defaults.modifiers[name] || {},options.modifiers?options.modifiers[name]:{});}); // Refactoring modifiers' list (Object => Array)
	this.modifiers = Object.keys(this.options.modifiers).map(function(name){return _extends$1({name:name},_this.options.modifiers[name]);}) // sort the modifiers by order
	.sort(function(a,b){return a.order - b.order;}); // modifiers have the ability to execute arbitrary code when Popper.js get inited
	// such code is executed in the same order of its modifier
	// they could add new properties to their options configuration
	// BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
	this.modifiers.forEach(function(modifierOptions){if(modifierOptions.enabled && isFunction(modifierOptions.onLoad)){modifierOptions.onLoad(_this.reference,_this.popper,_this.options,modifierOptions,_this.state);}}); // fire the first update to position the popper in the right place
	this.update();var eventsEnabled=this.options.eventsEnabled;if(eventsEnabled){ // setup event listeners, they will take care of update the position in specific situations
	this.enableEventListeners();}this.state.eventsEnabled = eventsEnabled;} // We can't use class properties because they don't get listed in the
	// class prototype and break stuff like Sinon stubs
	createClass$1(Popper,[{key:'update',value:function update$$1(){return update.call(this);}},{key:'destroy',value:function destroy$$1(){return destroy.call(this);}},{key:'enableEventListeners',value:function enableEventListeners$$1(){return enableEventListeners.call(this);}},{key:'disableEventListeners',value:function disableEventListeners$$1(){return disableEventListeners.call(this);} /**
	     * Schedule an update, it will run on the next UI update available
	     * @method scheduleUpdate
	     * @memberof Popper
	     */ /**
	     * Collection of utilities useful when writing custom modifiers.
	     * Starting from version 1.7, this method is available only if you
	     * include `popper-utils.js` before `popper.js`.
	     *
	     * **DEPRECATION**: This way to access PopperUtils is deprecated
	     * and will be removed in v2! Use the PopperUtils module directly instead.
	     * Due to the high instability of the methods contained in Utils, we can't
	     * guarantee them to follow semver. Use them at your own risk!
	     * @static
	     * @private
	     * @type {Object}
	     * @deprecated since version 1.8
	     * @member Utils
	     * @memberof Popper
	     */}]);return Popper;})(); /**
	 * The `referenceObject` is an object that provides an interface compatible with Popper.js
	 * and lets you use it as replacement of a real DOM node.<br />
	 * You can use this method to position a popper relatively to a set of coordinates
	 * in case you don't have a DOM node to use as reference.
	 *
	 * ```
	 * new Popper(referenceObject, popperNode);
	 * ```
	 *
	 * NB: This feature isn't supported in Internet Explorer 10
	 * @name referenceObject
	 * @property {Function} data.getBoundingClientRect
	 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
	 * @property {number} data.clientWidth
	 * An ES6 getter that will return the width of the virtual reference element.
	 * @property {number} data.clientHeight
	 * An ES6 getter that will return the height of the virtual reference element.
	 */Popper.Utils = (typeof window !== 'undefined'?window:global).PopperUtils;Popper.placements = placements;Popper.Defaults = Defaults; /**
	 * Issue #569: collapse::toggle::state triggered too many times
	 * @link https://github.com/bootstrap-vue/bootstrap-vue/issues/569
	 */var BVRL='__BV_root_listeners__';var listenOnRootMixin={methods:{ /**
	         * Safely register event listeners on the root Vue node.
	         * While Vue automatically removes listeners for individual components,
	         * when a component registers a listener on root and is destroyed,
	         * this orphans a callback because the node is gone,
	         * but the root does not clear the callback.
	         *
	         * This adds a non-reactive prop to a vm on the fly
	         * in order to avoid object observation and its performance costs
	         * to something that needs no reactivity.
	         * It should be highly unlikely there are any naming collisions.
	         * @param {string} event
	         * @param {function} callback
	         * @chainable
	         */listenOnRoot:function listenOnRoot(event,callback){if(!this[BVRL] || !isArray(this[BVRL])){this[BVRL] = [];}this[BVRL].push({event:event,callback:callback});this.$root.$on(event,callback);return this;}, /**
	         * Convenience method for calling vm.$emit on vm.$root.
	         * @param {string} event
	         * @param {*} args
	         * @chainable
	         */emitOnRoot:function emitOnRoot(event){var _$root;for(var _len=arguments.length,args=Array(_len > 1?_len - 1:0),_key=1;_key < _len;_key++) {args[_key - 1] = arguments[_key];}(_$root = this.$root).$emit.apply(_$root,[event].concat(toConsumableArray(args)));return this;}},beforeDestroy:function beforeDestroy(){if(this[BVRL] && isArray(this[BVRL])){while(this[BVRL].length > 0) { // shift to process in order
	var _BVRL$shift=this[BVRL].shift(),event=_BVRL$shift.event,callback=_BVRL$shift.callback;this.$root.$off(event,callback);}}}}; // Return an Array of visible items
	function filterVisible(els){return (els || []).filter(isVisible);} // Dropdown item CSS selectors
	// TODO: .dropdown-form handling
	var ITEM_SELECTOR$1='.dropdown-item:not(.disabled):not([disabled])'; // Popper attachment positions
	var AttachmentMap={ // DropUp Left Align
	TOP:'top-start', // DropUp Right Align
	TOPEND:'top-end', // Dropdown left Align
	BOTTOM:'bottom-start', // Dropdown Right Align
	BOTTOMEND:'bottom-end'};var dropdownMixin={mixins:[clickoutMixin,listenOnRootMixin],props:{disabled:{type:Boolean,'default':false},text:{ // Button label
	type:String,'default':''},dropup:{ // place on top if possible
	type:Boolean,'default':false},right:{ // Right align menu (default is left align)
	type:Boolean,'default':false},offset:{ // Number of pixels to offset menu, or a CSS unit value (i.e. 1px, 1rem, etc)
	type:[Number,String],'default':0},noFlip:{ // Disable auto-flipping of menu from bottom<=>top
	type:Boolean,'default':false},popperOpts:{type:Object,'default':function _default(){}}},data:function data(){return {visible:false,inNavbar:null};},created:function created(){ // Create non-reactive property
	this._popper = null;},mounted:function mounted(){ // To keep one dropdown opened on page
	this.listenOnRoot('bv::dropdown::shown',this.rootCloseListener); // Hide when clicked on links
	this.listenOnRoot('clicked::link',this.rootCloseListener); // Use new namespaced events
	this.listenOnRoot('bv::link::clicked',this.rootCloseListener);}, /* istanbul ignore next: not easy to test */deactivated:function deactivated(){ // In case we are inside a `<keep-alive>`
	this.visible = false;this.setTouchStart(false);this.removePopper();}, /* istanbul ignore next: not easy to test */beforeDestroy:function beforeDestroy(){this.visible = false;this.setTouchStart(false);this.removePopper();},watch:{visible:function visible(state,old){if(state === old){ // Avoid duplicated emits
	return;}if(state){this.showMenu();}else {this.hideMenu();}},disabled:function disabled(state,old){if(state !== old && state && this.visible){ // Hide dropdown if disabled changes to true
	this.visible = false;}}},computed:{toggler:function toggler(){return this.$refs.toggle.$el || this.$refs.toggle;}},methods:{showMenu:function showMenu(){if(this.disabled){return;} // TODO: move emit show to visible watcher, to allow cancelling of show
	this.$emit('show'); // Ensure other menus are closed
	this.emitOnRoot('bv::dropdown::shown',this); // Are we in a navbar ?
	if(this.inNavbar === null && this.isNav){this.inNavbar = Boolean(closest('.navbar',this.$el));} // Disable totally Popper.js for Dropdown in Navbar
	if(!this.inNavbar){if(typeof Popper === 'undefined'){warn('b-dropdown: Popper.js not found. Falling back to CSS positioning.');}else { // for dropup with alignment we use the parent element as popper container
	var element=this.dropup && this.right || this.split?this.$el:this.$refs.toggle; // Make sure we have a reference to an element, not a component!
	element = element.$el || element; // Instantiate popper.js
	this.createPopper(element);}}this.setTouchStart(true);this.$emit('shown'); // Focus on the first item on show
	this.$nextTick(this.focusFirstItem);},hideMenu:function hideMenu(){ // TODO: move emit hide to visible watcher, to allow cancelling of hide
	this.$emit('hide');this.setTouchStart(false);this.emitOnRoot('bv::dropdown::hidden',this);this.$emit('hidden');this.removePopper();},createPopper:function createPopper(element){this.removePopper();this._popper = new Popper(element,this.$refs.menu,this.getPopperConfig());},removePopper:function removePopper(){if(this._popper){ // Ensure popper event listeners are removed cleanly
	this._popper.destroy();}this._popper = null;},getPopperConfig:function getPopperConfig(){var placement=AttachmentMap.BOTTOM;if(this.dropup && this.right){ // dropup + right
	placement = AttachmentMap.TOPEND;}else if(this.dropup){ // dropup + left
	placement = AttachmentMap.TOP;}else if(this.right){ // dropdown + right
	placement = AttachmentMap.BOTTOMEND;}var popperConfig={placement:placement,modifiers:{offset:{offset:this.offset || 0},flip:{enabled:!this.noFlip}}};if(this.boundary){popperConfig.modifiers.preventOverflow = {boundariesElement:this.boundary};}return assign(popperConfig,this.popperOpts || {});},setTouchStart:function setTouchStart(on){var _this=this; /*
	       * If this is a touch-enabled device we add extra
	       * empty mouseover listeners to the body's immediate children;
	       * only needed because of broken event delegation on iOS
	       * https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
	       */if('ontouchstart' in document.documentElement){var children=from(document.body.children);children.forEach(function(el){if(on){eventOn('mouseover',_this._noop);}else {eventOff('mouseover',_this._noop);}});}}, /* istanbul ignore next: not easy to test */_noop:function _noop(){ // Do nothing event handler (used in touchstart event handler)
	},rootCloseListener:function rootCloseListener(vm){if(vm !== this){this.visible = false;}},clickOutListener:function clickOutListener(){this.visible = false;},show:function show(){ // Public method to show dropdown
	if(this.disabled){return;}this.visible = true;},hide:function hide(){ // Public method to hide dropdown
	if(this.disabled){return;}this.visible = false;},toggle:function toggle(evt){ // Called only by a button that toggles the menu
	evt = evt || {};var type=evt.type;var key=evt.keyCode;if(type !== 'click' && !(type === 'keydown' && (key === KeyCodes.ENTER || key === KeyCodes.SPACE || key === KeyCodes.DOWN))){ // We only toggle on Click, Enter, Space, and Arrow Down
	return;}evt.preventDefault();if(this.disabled){this.visible = false;return;} // Toggle visibility
	this.visible = !this.visible;},click:function click(evt){ // Calle only in split button mode, for the split button
	if(this.disabled){this.visible = false;return;}this.$emit('click',evt);}, /* istanbul ignore next: not easy to test */onKeydown:function onKeydown(evt){ // Called from dropdown menu context
	var key=evt.keyCode;if(key === KeyCodes.ESC){ // Close on ESC
	this.onEsc(evt);}else if(key === KeyCodes.TAB){ // Close on tab out
	this.onTab(evt);}else if(key === KeyCodes.DOWN){ // Down Arrow
	this.focusNext(evt,false);}else if(key === KeyCodes.UP){ // Up Arrow
	this.focusNext(evt,true);}}, /* istanbul ignore next: not easy to test */onEsc:function onEsc(evt){if(this.visible){this.visible = false;evt.preventDefault();evt.stopPropagation(); // Return focus to original trigger button
	this.$nextTick(this.focusToggler);}}, /* istanbul ignore next: not easy to test */onTab:function onTab(evt){if(this.visible){ // TODO: Need special handler for dealing with form inputs
	// Tab, if in a text-like input, we should just focus next item in the dropdown
	// Note: Inputs are in a special .dropdown-form container
	this.visible = false;}},onFocusOut:function onFocusOut(evt){if(this.$refs.menu.contains(evt.relatedTarget)){return;}this.visible = false;}, /* istanbul ignore next: not easy to test */onMouseOver:function onMouseOver(evt){ // Focus the item on hover
	// TODO: Special handling for inputs? Inputs are in a special .dropdown-form container
	var item=evt.target;if(item.classList.contains('dropdown-item') && !item.disabled && !item.classList.contains('disabled') && item.focus){item.focus();}},focusNext:function focusNext(evt,up){var _this2=this;if(!this.visible){return;}evt.preventDefault();evt.stopPropagation();this.$nextTick(function(){var items=_this2.getItems();if(items.length < 1){return;}var index=items.indexOf(evt.target);if(up && index > 0){index--;}else if(!up && index < items.length - 1){index++;}if(index < 0){index = 0;}_this2.focusItem(index,items);});},focusItem:function focusItem(idx,items){var el=items.find(function(el,i){return i === idx;});if(el && getAttr(el,'tabindex') !== '-1'){el.focus();}},getItems:function getItems(){ // Get all items
	return filterVisible(selectAll(ITEM_SELECTOR$1,this.$refs.menu));},getFirstItem:function getFirstItem(){ // Get the first non-disabled item
	var item=this.getItems()[0];return item || null;},focusFirstItem:function focusFirstItem(){var item=this.getFirstItem();if(item){this.focusItem(0,[item]);}},focusToggler:function focusToggler(){var toggler=this.toggler;if(toggler && toggler.focus){toggler.focus();}}}};var formMixin={props:{name:{type:String},id:{type:String},disabled:{type:Boolean},required:{type:Boolean,'default':false}}};var formCustomMixin={computed:{custom:function custom(){return !this.plain;}},props:{plain:{type:Boolean,'default':false}}};function isObject$1(obj){return obj && ({}).toString.call(obj) === '[object Object]';}var formOptionsMixin={props:{options:{type:[Array,Object],'default':function _default(){return [];}},valueField:{type:String,'default':'value'},textField:{type:String,'default':'text'},disabledField:{type:String,'default':'disabled'}},computed:{formOptions:function formOptions(){var options=this.options || [];var valueField=this.valueField || 'value';var textField=this.textField || 'text';var disabledField=this.disabledField || 'disabled';if(isArray(options)){ // Normalize flat-ish arrays to Array of Objects
	return options.map(function(option){if(isObject$1(option)){return {value:option[valueField],text:String(option[textField]),disabled:option[disabledField] || false};}return {text:String(option),value:option,disabled:false};});}else if(isObject$1(options)){ // Normalize Objects to Array of Objects
	return keys(options).map(function(key){var option=options[key] || {};if(isObject$1(option)){var value=option[valueField];var text=option[textField];return {text:typeof text === 'undefined'?key:String(text),value:typeof value === 'undefined'?key:value,disabled:option[disabledField] || false};}return {text:String(option),value:key,disabled:false};});} // Option unsupported type
	return [];}}}; /*
	 * form-radio & form-check mixin
	 *
	 */var formRadioCheckMixin={data:function data(){return {localChecked:this.checked,hasFocus:false};},model:{prop:'checked',event:'input'},props:{value:{},checked:{ // This is the model, except when in group mode
	},buttonVariant:{ // Only applicable when rendered with button style
	type:String,'default':null}},computed:{computedLocalChecked:{get:function get(){if(this.is_Child){return this.$parent.localChecked;}else {return this.localChecked;}},set:function set(val){if(this.is_Child){this.$parent.localChecked = val;}else {this.localChecked = val;}}},is_Child:function is_Child(){return Boolean(this.$parent && this.$parent.is_RadioCheckGroup);},is_Disabled:function is_Disabled(){ // Child can be disabled while parent isn't
	return Boolean(this.is_Child?this.$parent.disabled || this.disabled:this.disabled);},is_Required:function is_Required(){return Boolean(this.is_Child?this.$parent.required:this.required);},is_Plain:function is_Plain(){return Boolean(this.is_Child?this.$parent.plain:this.plain);},is_Custom:function is_Custom(){return !this.is_Plain;},get_Size:function get_Size(){return this.is_Child?this.$parent.size:this.size;},get_State:function get_State(){ // This is a tri-state prop (true, false, null)
	if(this.is_Child && typeof this.$parent.get_State === 'boolean'){return this.$parent.get_State;}return this.computedState;},get_StateClass:function get_StateClass(){ // This is a tri-state prop (true, false, null)
	return typeof this.get_State === 'boolean'?this.get_State?'is-valid':'is-invalid':'';},is_Stacked:function is_Stacked(){return Boolean(this.is_Child && this.$parent.stacked);},is_Inline:function is_Inline(){return !this.is_Stacked;},is_ButtonMode:function is_ButtonMode(){return Boolean(this.is_Child && this.$parent.buttons);},get_ButtonVariant:function get_ButtonVariant(){ // Local variant trumps parent variant
	return this.buttonVariant || (this.is_Child?this.$parent.buttonVariant:null) || 'secondary';},get_Name:function get_Name(){return (this.is_Child?this.$parent.name || this.$parent.safeId():this.name) || null;},buttonClasses:function buttonClasses(){ // Same for radio & check
	return ['btn','btn-' + this.get_ButtonVariant,this.get_Size?'btn-' + this.get_Size:'', // 'disabled' class makes "button" look disabled
	this.is_Disabled?'disabled':'', // 'active' class makes "button" look pressed
	this.is_Checked?'active':'', // Focus class makes button look focused
	this.hasFocus?'focus':'', // Fix for issue in BS V4.beta.2 CSS (remove spacing between stacked buttons)
	this.is_Stacked?'mb-0':''];}},methods:{handleFocus:function handleFocus(evt){ // When in buttons mode, we need to add 'focus' class to label when radio focused
	if(this.is_ButtonMode && evt.target){if(evt.type === 'focus'){this.hasFocus = true;}else if(evt.type === 'blur'){this.hasFocus = false;}}}}};var formSizeMixin={props:{size:{type:String,'default':null}},computed:{sizeFormClass:function sizeFormClass(){return [this.size?"form-control-" + this.size:null];},sizeBtnClass:function sizeBtnClass(){return [this.size?"btn-" + this.size:null];}}}; /* Form control contextual state class computation
	 *
	 * Returned class is either 'is-valid' or 'is-invalid' based on the 'state' prop
	 * state can be one of five values:
	 *  - true or 'valid' for is-valid
	 *  - false or 'invalid' for is-invalid
	 *  - null (or empty string) for no contextual state
	 */var formStateMixin={props:{state:{ // true/'valid', false/'invalid', '',null
	type:[Boolean,String],'default':null}},computed:{computedState:function computedState(){var state=this.state;if(state === true || state === 'valid'){return true;}else if(state === false || state === 'invalid'){return false;}return null;},stateClass:function stateClass(){var state=this.computedState;if(state === true){return 'is-valid';}else if(state === false){return 'is-invalid';}return null;}}}; /*
	 * SSR Safe Client Side ID attribute generation
	 *
	 */var idMixin={props:{id:{type:String,'default':null}},data:function data(){return {localId_:null};},mounted:function mounted(){if(!this.$isServer && !this.id && this._uid){this.localId_ = '__BVID__' + this._uid + '_';}},methods:{safeId:function safeId(){var suffix=arguments.length > 0 && arguments[0] !== undefined?arguments[0]:'';var id=this.id || this.localId_ || null;if(!id){return null;}suffix = String(suffix).replace(/\s+/g,'_');return suffix?id + '_' + suffix:id;}}}; /**
	 * @param {number} length
	 * @return {Array}
	 */var range=function range(length){return Array.apply(null,{length:length});}; /*
	 * Comon props, computed, data, render function, and methods for b-pagination and b-pagination-nav
	 */ // Make an array of N to N+X
	function makePageArray(startNum,numPages){return range(numPages).map(function(value,index){return {number:index + startNum,className:null};});} // Threshold of limit size when we start/stop showing ellipsis
	var ELLIPSIS_THRESHOLD=3; // Props object
	var props$12={disabled:{type:Boolean,'default':false},value:{type:Number,'default':1},limit:{type:Number,'default':5},size:{type:String,'default':'md'},align:{type:String,'default':'left'},hideGotoEndButtons:{type:Boolean,'default':false},ariaLabel:{type:String,'default':'Pagination'},labelFirstPage:{type:String,'default':'Goto first page'},firstText:{type:String,'default':'&laquo;'},labelPrevPage:{type:String,'default':'Goto previous page'},prevText:{type:String,'default':'&lsaquo;'},labelNextPage:{type:String,'default':'Goto next page'},nextText:{type:String,'default':'&rsaquo;'},labelLastPage:{type:String,'default':'Goto last page'},lastText:{type:String,'default':'&raquo;'},labelPage:{type:String,'default':'Goto page'},hideEllipsis:{type:Boolean,'default':false},ellipsisText:{type:String,'default':'&hellip;'}};var paginationMixin={components:{bLink:Link},data:function data(){return {showFirstDots:false,showLastDots:false,currentPage:this.value};},props:props$12,render:function render(h){var t=this;var buttons=[]; // Factory function for prev/next/first/last buttons
	var makeEndBtns=function makeEndBtns(linkTo,ariaLabel,btnText,pageTest){var button=void 0;pageTest = pageTest || linkTo; // Page # to test against to disable
	if(t.disabled || t.isActive(pageTest)){button = h('li',{'class':['page-item','disabled'],attrs:{role:'none presentation','aria-hidden':'true'}},[h('span',{'class':['page-link'],domProps:{innerHTML:btnText}})]);}else {button = h('li',{'class':['page-item'],attrs:{role:'none presentation'}},[h('b-link',{'class':['page-link'],props:t.linkProps(linkTo),attrs:{role:'menuitem',tabindex:'-1','aria-label':ariaLabel,'aria-controls':t.ariaControls || null},on:{click:function click(evt){t.onClick(linkTo,evt);},keydown:function keydown(evt){ // Links don't normally respond to SPACE, so we add that functionality
	if(evt.keyCode === KeyCodes.SPACE){evt.preventDefault();t.onClick(linkTo,evt);}}}},[h('span',{attrs:{'aria-hidden':'true'},domProps:{innerHTML:btnText}})])]);}return button;}; // Ellipsis factory
	var makeEllipsis=function makeEllipsis(){return h('li',{'class':['page-item','disabled','d-none','d-sm-flex'],attrs:{role:'separator'}},[h('span',{'class':['page-link'],domProps:{innerHTML:t.ellipsisText}})]);}; // Goto First Page button
	buttons.push(t.hideGotoEndButtons?h(false):makeEndBtns(1,t.labelFirstPage,t.firstText)); // Goto Previous page button
	buttons.push(makeEndBtns(t.currentPage - 1,t.labelPrevPage,t.prevText,1)); // First Ellipsis Bookend
	buttons.push(t.showFirstDots?makeEllipsis():h(false)); // Individual Page links
	t.pageList.forEach(function(page){var inner=void 0;var pageNum=t.makePage(page.number);if(t.disabled){inner = h('span',{'class':['page-link'],domProps:{innerHTML:pageNum}});}else {var active=t.isActive(page.number);inner = h('b-link',{'class':t.pageLinkClasses(page),props:t.linkProps(page.number),attrs:{role:'menuitemradio',tabindex:active?'0':'-1','aria-controls':t.ariaControls || null,'aria-label':t.labelPage + ' ' + page.number,'aria-checked':active?'true':'false','aria-posinset':page.number,'aria-setsize':t.numberOfPages},domProps:{innerHTML:pageNum},on:{click:function click(evt){t.onClick(page.number,evt);},keydown:function keydown(evt){if(evt.keyCode === KeyCodes.SPACE){evt.preventDefault();t.onClick(page.number,evt);}}}});}buttons.push(h('li',{key:page.number,'class':t.pageItemClasses(page),attrs:{role:'none presentation'}},[inner]));}); // Last Ellipsis Bookend
	buttons.push(t.showLastDots?makeEllipsis():h(false)); // Goto Next page button
	buttons.push(makeEndBtns(t.currentPage + 1,t.labelNextPage,t.nextText,t.numberOfPages)); // Goto Last Page button
	buttons.push(t.hideGotoEndButtons?h(false):makeEndBtns(t.numberOfPages,t.labelLastPage,t.lastText)); // Assemble the paginatiom buttons
	var pagination=h('ul',{ref:'ul','class':['pagination','b-pagination',t.btnSize,t.alignment],attrs:{role:'menubar','aria-disabled':t.disabled?'true':'false','aria-label':t.ariaLabel || null},on:{keydown:function keydown(evt){var keyCode=evt.keyCode;var shift=evt.shiftKey;if(keyCode === KeyCodes.LEFT){evt.preventDefault();shift?t.focusFirst():t.focusPrev();}else if(keyCode === KeyCodes.RIGHT){evt.preventDefault();shift?t.focusLast():t.focusNext();}}}},buttons); // if we are pagination-nav, wrap in '<nav>' wrapper
	return t.isNav?h('nav',{},[pagination]):pagination;},watch:{currentPage:function currentPage(newPage,oldPage){if(newPage !== oldPage){this.$emit('input',newPage);}},value:function value(newValue,oldValue){if(newValue !== oldValue){this.currentPage = newValue;}}},computed:{btnSize:function btnSize(){return this.size?'pagination-' + this.size:'';},alignment:function alignment(){if(this.align === 'center'){return 'justify-content-center';}else if(this.align === 'end' || this.align === 'right'){return 'justify-content-end';}return '';},pageList:function pageList(){ // Sanity checks
	if(this.currentPage > this.numberOfPages){this.currentPage = this.numberOfPages;}else if(this.currentPage < 1){this.currentPage = 1;} // - Hide first ellipsis marker
	this.showFirstDots = false; // - Hide last ellipsis marker
	this.showLastDots = false;var numLinks=this.limit;var startNum=1;if(this.numberOfPages <= this.limit){ // Special Case: Less pages available than the limit of displayed pages
	numLinks = this.numberOfPages;}else if(this.currentPage < this.limit - 1 && this.limit > ELLIPSIS_THRESHOLD){ // We are near the beginning of the page list
	if(!this.hideEllipsis){numLinks = this.limit - 1;this.showLastDots = true;}}else if(this.numberOfPages - this.currentPage + 2 < this.limit && this.limit > ELLIPSIS_THRESHOLD){ // We are near the end of the list
	if(!this.hideEllipsis){this.showFirstDots = true;numLinks = this.limit - 1;}startNum = this.numberOfPages - numLinks + 1;}else { // We are somewhere in the middle of the page list
	if(this.limit > ELLIPSIS_THRESHOLD && !this.hideEllipsis){this.showFirstDots = true;this.showLastDots = true;numLinks = this.limit - 2;}startNum = this.currentPage - Math.floor(numLinks / 2);} // Sanity checks
	if(startNum < 1){startNum = 1;}else if(startNum > this.numberOfPages - numLinks){startNum = this.numberOfPages - numLinks + 1;} // Generate list of page numbers
	var pages=makePageArray(startNum,numLinks); // We limit to a total of 3 page buttons on small screens
	// Ellipsis will also be hidden on small screens
	if(pages.length > 3){var idx=this.currentPage - startNum;if(idx === 0){ // Keep leftmost 3 buttons visible
	for(var i=3;i < pages.length;i++) {pages[i].className = 'd-none d-sm-flex';}}else if(idx === pages.length - 1){ // Keep rightmost 3 buttons visible
	for(var _i=0;_i < pages.length - 3;_i++) {pages[_i].className = 'd-none d-sm-flex';}}else { // hide left button(s)
	for(var _i2=0;_i2 < idx - 1;_i2++) {pages[_i2].className = 'd-none d-sm-flex';} // hide right button(s)
	for(var _i3=pages.length - 1;_i3 > idx + 1;_i3--) {pages[_i3].className = 'd-none d-sm-flex';}}}return pages;}},methods:{isActive:function isActive(pagenum){return pagenum === this.currentPage;},pageItemClasses:function pageItemClasses(page){return ['page-item',this.disabled?'disabled':'',this.isActive(page.number)?'active':'',page.className];},pageLinkClasses:function pageLinkClasses(page){return ['page-link',this.disabled?'disabled':'', // Interim workaround to get better focus styling of active button
	// See https://github.com/twbs/bootstrap/issues/24838
	this.isActive(page.number)?'btn-primary':''];},getButtons:function getButtons(){ // Return only buttons that are visible
	return selectAll('a.page-link',this.$el).filter(function(btn){return isVisible(btn);});},setBtnFocus:function setBtnFocus(btn){this.$nextTick(function(){btn.focus();});},focusCurrent:function focusCurrent(){var _this=this;var btn=this.getButtons().find(function(el){return parseInt(getAttr(el,'aria-posinset'),10) === _this.currentPage;});if(btn && btn.focus){this.setBtnFocus(btn);}else { // Fallback if current page is not in button list
	this.focusFirst();}},focusFirst:function focusFirst(){var btn=this.getButtons().find(function(el){return !isDisabled(el);});if(btn && btn.focus && btn !== document.activeElement){this.setBtnFocus(btn);}},focusLast:function focusLast(){var btn=this.getButtons().reverse().find(function(el){return !isDisabled(el);});if(btn && btn.focus && btn !== document.activeElement){this.setBtnFocus(btn);}},focusPrev:function focusPrev(){var buttons=this.getButtons();var idx=buttons.indexOf(document.activeElement);if(idx > 0 && !isDisabled(buttons[idx - 1]) && buttons[idx - 1].focus){this.setBtnFocus(buttons[idx - 1]);}},focusNext:function focusNext(){var buttons=this.getButtons();var idx=buttons.indexOf(document.activeElement);var cnt=buttons.length - 1;if(idx < cnt && !isDisabled(buttons[idx + 1]) && buttons[idx + 1].focus){this.setBtnFocus(buttons[idx + 1]);}}}}; /*
	 * Tooltip/Popover component mixin
	 * Common props
	 */var PLACEMENTS={top:'top',topleft:'topleft',topright:'topright',right:'right',righttop:'righttop',rightbottom:'rightbottom',bottom:'bottom',bottomleft:'bottomleft',bottomright:'bottomright',left:'left',lefttop:'lefttop',leftbottom:'leftbottom',auto:'auto'};var OBSERVER_CONFIG={subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['class','style']};var toolpopMixin={props:{target:{ // String ID of element, or element/component reference
	type:[String,Object]},delay:{type:[Number,Object,String],'default':0},offset:{type:[Number,String],'default':0},noFade:{type:Boolean,'default':false},container:{ // String ID of container, if null body is used (default)
	type:String,'default':null},boundary:{ // String: scrollParent, window, or viewport
	// Element: element reference
	type:[String,Object],'default':'scrollParent'},show:{type:Boolean,'default':false},disabled:{type:Boolean,'default':false}},watch:{show:function show(_show,old){if(_show === old){return;}_show?this.onOpen():this.onClose();},disabled:function disabled(_disabled,old){if(_disabled === old){return;}_disabled?this.onDisable():this.onEnable();}},created:function created(){ // Create non-reactive property
	this._toolpop = null;this._obs_title = null;this._obs_content = null;},mounted:function mounted(){var _this=this; // We do this in a next tick to ensure DOM has rendered first
	this.$nextTick(function(){ // Instantiate ToolTip/PopOver on target
	// The createToolpop method must exist in main component
	if(_this.createToolpop()){if(_this.disabled){ // Initially disabled
	_this.onDisable();} // Listen to open signals from others
	_this.$on('open',_this.onOpen); // Listen to close signals from others
	_this.$on('close',_this.onClose); // Listen to disable signals from others
	_this.$on('disable',_this.onDisable); // Listen to disable signals from others
	_this.$on('enable',_this.onEnable); // Observe content Child changes so we can notify popper of possible size change
	_this.setObservers(true); // Set intially open state
	if(_this.show){_this.onOpen();}}});},updated:function updated(){ // If content/props changes, etc
	if(this._toolpop){this._toolpop.updateConfig(this.getConfig());}}, /* istanbul ignore next: not easy to test */activated:function activated(){ // Called when component is inside a <keep-alive> and component brought offline
	this.setObservers(true);}, /* istanbul ignore next: not easy to test */deactivated:function deactivated(){ // Called when component is inside a <keep-alive> and component taken offline
	if(this._toolpop){this.setObservers(false);this._toolpop.hide();}}, /* istanbul ignore next: not easy to test */beforeDestroy:function beforeDestroy(){ // Shutdown our local event listeners
	this.$off('open',this.onOpen);this.$off('close',this.onClose);this.$off('disable',this.onDisable);this.$off('enable',this.onEnable);this.setObservers(false); // bring our content back if needed
	this.bringItBack();if(this._toolpop){this._toolpop.destroy();this._toolpop = null;}},computed:{baseConfig:function baseConfig(){var cont=this.container;var delay=_typeof(this.delay) === 'object'?this.delay:parseInt(this.delay,10) || 0;return { // Title prop
	title:(this.title || '').trim() || '', // Contnt prop (if popover)
	content:(this.content || '').trim() || '', // Tooltip/Popover placement
	placement:PLACEMENTS[this.placement] || 'auto', // Container curently needs to be an ID with '#' prepended, if null then body is used
	container:cont?/^#/.test(cont)?cont:'#' + cont:false, // boundariesElement passed to popper
	boundary:this.boundary, // Show/Hide delay
	delay:delay || 0, // Offset can be css distance. if no units, pixels are assumed
	offset:this.offset || 0, // Disable fade Animation?
	animation:!this.noFade, // Open/Close Trigger(s)
	trigger:isArray(this.triggers)?this.triggers.join(' '):this.triggers, // Callbacks so we can trigger events on component
	callbacks:{show:this.onShow,shown:this.onShown,hide:this.onHide,hidden:this.onHidden,enabled:this.onEnabled,disabled:this.onDisabled}};}},methods:{getConfig:function getConfig(){var cfg=assign({},this.baseConfig);if(this.$refs.title && this.$refs.title.innerHTML.trim()){ // If slot has content, it overrides 'title' prop
	// We use the DOM node as content to allow components!
	cfg.title = this.$refs.title;cfg.html = true;}if(this.$refs.content && this.$refs.content.innerHTML.trim()){ // If slot has content, it overrides 'content' prop
	// We use the DOM node as content to allow components!
	cfg.content = this.$refs.content;cfg.html = true;}return cfg;},onOpen:function onOpen(){if(this._toolpop){this._toolpop.show();}},onClose:function onClose(callback){if(this._toolpop){this._toolpop.hide(callback);}else if(typeof callback === 'function'){callback();}},onDisable:function onDisable(){if(this._toolpop){this._toolpop.disable();}},onEnable:function onEnable(){if(this._toolpop){this._toolpop.enable();}},updatePosition:function updatePosition(){if(this._toolpop){ // Instruct popper to reposition popover if necessary
	this._toolpop.update();}},getTarget:function getTarget(){var target=this.target;if(typeof target === 'string'){ // Assume ID of element
	return getById(target);}else if((typeof target === 'undefined'?'undefined':_typeof(target)) === 'object' && isElement(target.$el)){ // Component reference
	return target.$el;}else if((typeof target === 'undefined'?'undefined':_typeof(target)) === 'object' && isElement(target)){ // Element reference
	return target;}return null;},onShow:function onShow(evt){this.$emit('show',evt);},onShown:function onShown(evt){this.setObservers(true);this.$emit('update:show',true);this.$emit('shown',evt);},onHide:function onHide(evt){this.$emit('hide',evt);},onHidden:function onHidden(evt){this.setObservers(false); // bring our content back if needed to keep Vue happy
	// Tooltip class will move it back to tip when shown again
	this.bringItBack();this.$emit('update:show',false);this.$emit('hidden',evt);},onEnabled:function onEnabled(evt){if(!evt || evt.type !== 'enabled'){ // Prevent possible endless loop if user mistakienly fires enabled instead of enable
	return;}this.$emit('update:disabled',false);this.$emit('disabled');},onDisabled:function onDisabled(evt){if(!evt || evt.type !== 'disabled'){ // Prevent possible endless loop if user mistakienly fires disabled instead of disable
	return;}this.$emit('update:disabled',true);this.$emit('enabled');},bringItBack:function bringItBack(){ // bring our content back if needed to keep Vue happy
	if(this.$el && this.$refs.title){this.$el.appendChild(this.$refs.title);}if(this.$el && this.$refs.content){this.$el.appendChild(this.$refs.content);}}, /* istanbul ignore next: not easy to test */setObservers:function setObservers(on){if(on){if(this.$refs.title){this._obs_title = observeDOM(this.$refs.title,this.updatePosition.bind(this),OBSERVER_CONFIG);}if(this.$refs.content){this._obs_content = observeDOM(this.$refs.content,this.updatePosition.bind(this),OBSERVER_CONFIG);}}else {if(this._obs_title){this._obs_title.disconnect();this._obs_title = null;}if(this._obs_content){this._obs_content.disconnect();this._obs_content = null;}}}}};var props$13=assign({},copyProps(cardMixin.props,prefixPropName.bind(null,'body')),{bodyClass:{type:[String,Object,Array],'default':null},title:{type:String,'default':null},titleTag:{type:String,'default':'h4'},subTitle:{type:String,'default':null},subTitleTag:{type:String,'default':'h6'},overlay:{type:Boolean,'default':false}});var CardBody={functional:true,props:props$13,render:function render(h,_ref){var _ref2;var props=_ref.props,data=_ref.data,slots=_ref.slots;var cardBodyChildren=[];if(props.title){cardBodyChildren.push(h(props.titleTag,{staticClass:'card-title',domProps:{innerHTML:props.title}}));}if(props.subTitle){cardBodyChildren.push(h(props.subTitleTag,{staticClass:'card-subtitle mb-2 text-muted',domProps:{innerHTML:props.subTitle}}));}cardBodyChildren.push(slots()['default']);return h(props.bodyTag,mergeData(data,{staticClass:'card-body','class':[(_ref2 = {'card-img-overlay':props.overlay},defineProperty$1(_ref2,'bg-' + props.bodyBgVariant,Boolean(props.bodyBgVariant)),defineProperty$1(_ref2,'border-' + props.bodyBorderVariant,Boolean(props.bodyBorderVariant)),defineProperty$1(_ref2,'text-' + props.bodyTextVariant,Boolean(props.bodyTextVariant)),_ref2),props.bodyClass || {}]}),cardBodyChildren);}};var props$14=assign({},copyProps(cardMixin.props,prefixPropName.bind(null,'header')),{header:{type:String,'default':null},headerClass:{type:[String,Object,Array],'default':null}});var CardHeader={functional:true,props:props$14,render:function render(h,_ref){var _ref2;var props=_ref.props,data=_ref.data,slots=_ref.slots;return h(props.headerTag,mergeData(data,{staticClass:'card-header','class':[props.headerClass,(_ref2 = {},defineProperty$1(_ref2,'bg-' + props.headerBgVariant,Boolean(props.headerBgVariant)),defineProperty$1(_ref2,'border-' + props.headerBorderVariant,Boolean(props.headerBorderVariant)),defineProperty$1(_ref2,'text-' + props.headerTextVariant,Boolean(props.headerTextVariant)),_ref2)]}),slots()['default'] || [h('div',{domProps:{innerHTML:props.header}})]);}};var props$15=assign({},copyProps(cardMixin.props,prefixPropName.bind(null,'footer')),{footer:{type:String,'default':null},footerClass:{type:[String,Object,Array],'default':null}});var CardFooter={functional:true,props:props$15,render:function render(h,_ref){var _ref2;var props=_ref.props,data=_ref.data,slots=_ref.slots;return h(props.footerTag,mergeData(data,{staticClass:'card-footer','class':[props.footerClass,(_ref2 = {},defineProperty$1(_ref2,'bg-' + props.footerBgVariant,Boolean(props.footerBgVariant)),defineProperty$1(_ref2,'border-' + props.footerBorderVariant,Boolean(props.footerBorderVariant)),defineProperty$1(_ref2,'text-' + props.footerTextVariant,Boolean(props.footerTextVariant)),_ref2)]}),slots()['default'] || [h('div',{domProps:{innerHTML:props.footer}})]);}};var props$16={src:{type:String,'default':null,required:true},alt:{type:String,'default':null},top:{type:Boolean,'default':false},bottom:{type:Boolean,'default':false},fluid:{type:Boolean,'default':false}};var CardImg={functional:true,props:props$16,render:function render(h,_ref){var props=_ref.props,data=_ref.data,slots=_ref.slots;var staticClass='card-img';if(props.top){staticClass += '-top';}else if(props.bottom){staticClass += '-bottom';}return h('img',mergeData(data,{staticClass:staticClass,'class':{'img-fluid':props.fluid},attrs:{src:props.src,alt:props.alt}}));}};var cardImgProps=copyProps(props$16,prefixPropName.bind(null,'img'));cardImgProps.imgSrc.required = false;var props$11=assign({},props$13,props$14,props$15,cardImgProps,copyProps(cardMixin.props),{align:{type:String,'default':null},noBody:{type:Boolean,'default':false}});var bCard={functional:true,props:props$11,render:function render(h,_ref){var _class;var props$$1=_ref.props,data=_ref.data,slots=_ref.slots; // The order of the conditionals matter.
	// We are building the component markup in order.
	var childNodes=[];var $slots=slots();var img=props$$1.imgSrc?h(CardImg,{props:pluckProps(cardImgProps,props$$1,unPrefixPropName.bind(null,'img'))}):null;if(img){ // Above the header placement.
	if(props$$1.imgTop || !props$$1.imgBottom){childNodes.push(img);}}if(props$$1.header || $slots.header){childNodes.push(h(CardHeader,{props:pluckProps(props$14,props$$1)},$slots.header));}if(props$$1.noBody){childNodes.push($slots['default']);}else {childNodes.push(h(CardBody,{props:pluckProps(props$13,props$$1)},$slots['default']));}if(props$$1.footer || $slots.footer){childNodes.push(h(CardFooter,{props:pluckProps(props$15,props$$1)},$slots.footer));}if(img && props$$1.imgBottom){ // Below the footer placement.
	childNodes.push(img);}return h(props$$1.tag,mergeData(data,{staticClass:'card','class':(_class = {},defineProperty$1(_class,'text-' + props$$1.align,Boolean(props$$1.align)),defineProperty$1(_class,'bg-' + props$$1.bgVariant,Boolean(props$$1.bgVariant)),defineProperty$1(_class,'border-' + props$$1.borderVariant,Boolean(props$$1.borderVariant)),defineProperty$1(_class,'text-' + props$$1.textVariant,Boolean(props$$1.textVariant)),_class)}),childNodes);}};var props$17={tag:{type:String,'default':'div'},deck:{type:Boolean,'default':false},columns:{type:Boolean,'default':false}};var bCardGroup={functional:true,props:props$17,render:function render(h,_ref){var props=_ref.props,data=_ref.data,children=_ref.children;var staticClass='card-group';if(props.columns){staticClass = 'card-columns';}if(props.deck){staticClass = 'card-deck';}return h(props.tag,mergeData(data,{staticClass:staticClass}),children);}}; /* eslint-disable no-var, no-undef, guard-for-in, object-shorthand */var components$8={bCard:bCard,bCardHeader:CardHeader,bCardBody:CardBody,bCardFooter:CardFooter,bCardImg:CardImg,bCardGroup:bCardGroup};var VuePlugin$16={install:function install(Vue){registerComponents(Vue,components$8);}};vueUse(VuePlugin$16); // Slide directional classes
	var DIRECTION={next:{dirClass:'carousel-item-left',overlayClass:'carousel-item-next'},prev:{dirClass:'carousel-item-right',overlayClass:'carousel-item-prev'} // Fallback Transition duration (with a little buffer) in ms
	};var TRANS_DURATION=600 + 50; // Transition Event names
	var TransitionEndEvents={WebkitTransition:'webkitTransitionEnd',MozTransition:'transitionend',OTransition:'otransitionend oTransitionEnd',transition:'transitionend' // Return the browser specific transitionend event name
	};function getTransisionEndEvent(el){for(var name in TransitionEndEvents) {if(el.style[name] !== undefined){return TransitionEndEvents[name];}} // fallback
	return null;}var bCarousel={mixins:[idMixin],render:function render(h){var t=this; // Wrapper for slides
	var inner=h('div',{ref:'inner','class':['carousel-inner'],attrs:{id:t.safeId('__BV_inner_'),role:'list'}},[t.$slots['default']]); // Prev and Next Controls
	var controls=h(false);if(t.controls){controls = [h('a',{'class':['carousel-control-prev'],attrs:{href:'#',role:'button','aria-controls':t.safeId('__BV_inner_')},on:{click:function click(evt){evt.preventDefault();evt.stopPropagation();t.prev();},keydown:function keydown(evt){var keyCode=evt.keyCode;if(keyCode === KeyCodes.SPACE || keyCode === KeyCodes.ENTER){evt.preventDefault();evt.stopPropagation();t.prev();}}}},[h('span',{'class':['carousel-control-prev-icon'],attrs:{'aria-hidden':'true'}}),h('span',{'class':['sr-only']},[t.labelPrev])]),h('a',{'class':['carousel-control-next'],attrs:{href:'#',role:'button','aria-controls':t.safeId('__BV_inner_')},on:{click:function click(evt){evt.preventDefault();evt.stopPropagation();t.next();},keydown:function keydown(evt){var keyCode=evt.keyCode;if(keyCode === KeyCodes.SPACE || keyCode === KeyCodes.ENTER){evt.preventDefault();evt.stopPropagation();t.next();}}}},[h('span',{'class':['carousel-control-next-icon'],attrs:{'aria-hidden':'true'}}),h('span',{'class':['sr-only']},[t.labelNext])])];} // Indicators
	var indicators=h('ol',{'class':['carousel-indicators'],directives:[{name:'show',rawName:'v-show',value:t.indicators,expression:'indicators'}],attrs:{id:t.safeId('__BV_indicators_'),'aria-hidden':t.indicators?'false':'true','aria-label':t.labelIndicators,'aria-owns':t.safeId('__BV_inner_')}},t.slides.map(function(slide,n){return h('li',{key:'slide_' + n,'class':{active:n === t.index},attrs:{role:'button',id:t.safeId('__BV_indicator_' + (n + 1) + '_'),tabindex:t.indicators?'0':'-1','aria-current':n === t.index?'true':'false','aria-label':t.labelGotoSlide + ' ' + (n + 1),'aria-describedby':t.slides[n].id || null,'aria-controls':t.safeId('__BV_inner_')},on:{click:function click(evt){t.setSlide(n);},keydown:function keydown(evt){var keyCode=evt.keyCode;if(keyCode === KeyCodes.SPACE || keyCode === KeyCodes.ENTER){evt.preventDefault();evt.stopPropagation();t.setSlide(n);}}}});})); // Return the carousel
	return h('div',{'class':['carousel','slide'],style:{background:t.background},attrs:{role:'region',id:t.safeId(),'aria-busy':t.isSliding?'true':'false'},on:{mouseenter:t.pause,mouseleave:t.restart,focusin:t.pause,focusout:t.restart,keydown:function keydown(evt){var keyCode=evt.keyCode;if(keyCode === KeyCodes.LEFT || keyCode === KeyCodes.RIGHT){evt.preventDefault();evt.stopPropagation();t[keyCode === KeyCodes.LEFT?'prev':'next']();}}}},[inner,controls,indicators]);},data:function data(){return {index:this.value || 0,isSliding:false,intervalId:null,transitionEndEvent:null,slides:[]};},props:{labelPrev:{type:String,'default':'Previous Slide'},labelNext:{type:String,'default':'Next Slide'},labelGotoSlide:{type:String,'default':'Goto Slide'},labelIndicators:{type:String,'default':'Select a slide to display'},interval:{type:Number,'default':5000},indicators:{type:Boolean,'default':false},controls:{type:Boolean,'default':false},imgWidth:{ // Sniffed by carousel-slide
	type:[Number,String]},imgHeight:{ // Sniffed by carousel-slide
	type:[Number,String]},background:{type:String},value:{type:Number,'default':0}},computed:{isCycling:function isCycling(){return Boolean(this.intervalId);}},methods:{ // Set slide
	setSlide:function setSlide(slide){var _this=this; // Don't animate when page is not visible
	if(typeof document !== 'undefined' && document.visibilityState && document.hidden){return;}var len=this.slides.length; // Don't do anything if nothing to slide to
	if(len === 0){return;} // Don't change slide while transitioning, wait until transition is done
	if(this.isSliding){ // Schedule slide after sliding complete
	this.$once('sliding-end',function(){return _this.setSlide(slide);});return;} // Make sure we have an integer (you never know!)
	slide = Math.floor(slide); // Set new slide index. Wrap around if necessary
	this.index = slide >= len?0:slide >= 0?slide:len - 1;}, // Previous slide
	prev:function prev(){this.setSlide(this.index - 1);}, // Next slide
	next:function next(){this.setSlide(this.index + 1);}, // Pause auto rotation
	pause:function pause(){if(this.isCycling){clearInterval(this.intervalId);this.intervalId = null;if(this.slides[this.index]){ // Make current slide focusable for screen readers
	this.slides[this.index].tabIndex = 0;}}}, // Start auto rotate slides
	start:function start(){var _this2=this; // Don't start if no intetrval, or if we are already running
	if(!this.interval || this.isCycling){return;}this.slides.forEach(function(slide){slide.tabIndex = -1;});this.intervalId = setInterval(function(){_this2.next();},Math.max(1000,this.interval));}, // Re-Start auto rotate slides when focus/hover leaves the carousel
	restart:function restart(evt){if(!this.$el.contains(document.activeElement)){this.start();}}, // Update slide list
	updateSlides:function updateSlides(){this.pause(); // Get all slides as DOM elements
	this.slides = selectAll('.carousel-item',this.$refs.inner);var numSlides=this.slides.length; // Keep slide number in range
	var index=Math.max(0,Math.min(Math.floor(this.index),numSlides - 1));this.slides.forEach(function(slide,idx){var n=idx + 1;if(idx === index){addClass(slide,'active');}else {removeClass(slide,'active');}setAttr(slide,'aria-current',idx === index?'true':'false');setAttr(slide,'aria-posinset',String(n));setAttr(slide,'aria-setsize',String(numSlides));slide.tabIndex = -1;}); // Set slide as active
	this.setSlide(index);this.start();}},watch:{value:function value(newVal,oldVal){if(newVal !== oldVal){this.setSlide(newVal);}},interval:function interval(newVal,oldVal){if(newVal === oldVal){return;}if(!newVal){ // Pausing slide show
	this.pause();}else { // Restarting or Changing interval
	this.pause();this.start();}},index:function index(val,oldVal){var _this3=this;if(val === oldVal || this.isSliding){return;} // Determine sliding direction
	var direction=val > oldVal?DIRECTION.next:DIRECTION.prev; // Rotates
	if(oldVal === 0 && val === this.slides.length - 1){direction = DIRECTION.prev;}else if(oldVal === this.slides.length - 1 && val === 0){direction = DIRECTION.next;} // Determine current and next slides
	var currentSlide=this.slides[oldVal];var nextSlide=this.slides[val]; // Don't do anything if there aren't any slides to slide to
	if(!currentSlide || !nextSlide){return;} // Start animating
	this.isSliding = true;this.$emit('sliding-start',val); // Update v-model
	this.$emit('input',this.index);nextSlide.classList.add(direction.overlayClass); // Trigger a reflow of next slide
	reflow(nextSlide);addClass(currentSlide,direction.dirClass);addClass(nextSlide,direction.dirClass); // Transition End handler
	var called=false; /* istanbul ignore next: dificult to test */var onceTransEnd=function onceTransEnd(evt){if(called){return;}called = true;if(_this3.transitionEndEvent){var events=_this3.transitionEndEvent.split(/\s+/);events.forEach(function(event){eventOff(currentSlide,event,onceTransEnd);});}_this3._animationTimeout = null;removeClass(nextSlide,direction.dirClass);removeClass(nextSlide,direction.overlayClass);addClass(nextSlide,'active');removeClass(currentSlide,'active');removeClass(currentSlide,direction.dirClass);removeClass(currentSlide,direction.overlayClass);setAttr(currentSlide,'aria-current','false');setAttr(nextSlide,'aria-current','true');setAttr(currentSlide,'aria-hidden','true');setAttr(nextSlide,'aria-hidden','false');currentSlide.tabIndex = -1;nextSlide.tabIndex = -1;if(!_this3.isCycling){ // Focus the next slide for screen readers if not in play mode
	nextSlide.tabIndex = 0;_this3.$nextTick(function(){nextSlide.focus();});}_this3.isSliding = false; // Notify ourselves that we're done sliding (slid)
	_this3.$nextTick(function(){return _this3.$emit('sliding-end',val);});}; // Clear transition classes after transition ends
	if(this.transitionEndEvent){var events=this.transitionEndEvent.split(/\s+/);events.forEach(function(event){eventOn(currentSlide,event,onceTransEnd);});} // Fallback to setTimeout
	this._animationTimeout = setTimeout(onceTransEnd,TRANS_DURATION);}},created:function created(){ // Create private non-reactive props
	this._animationTimeout = null;},mounted:function mounted(){ // Cache current browser transitionend event name
	this.transitionEndEvent = getTransisionEndEvent(this.$el) || null; // Get all slides
	this.updateSlides(); // Observe child changes so we can update slide list
	observeDOM(this.$refs.inner,this.updateSlides.bind(this),{subtree:false,childList:true,attributes:true,attributeFilter:['id']});}, /* istanbul ignore next: dificult to test */beforeDestroy:function beforeDestroy(){clearInterval(this.intervalId);clearTimeout(this._animationTimeout);this.intervalId = null;this._animationTimeout = null;}}; // Blank image with fill template
	var BLANK_TEMPLATE='<svg width="%{w}" height="%{h}" ' + 'xmlns="http://www.w3.org/2000/svg" ' + 'viewBox="0 0 %{w} %{h}" preserveAspectRatio="none">' + '<rect width="100%" height="100%" style="fill:%{f};"></rect>' + '</svg>';function makeBlankImgSrc(width,height,color){var src=encodeURIComponent(BLANK_TEMPLATE.replace('%{w}',String(width)).replace('%{h}',String(height)).replace('%{f}',color));return 'data:image/svg+xml;charset=UTF-8,' + src;}var props$18={src:{type:String,'default':null},alt:{type:String,'default':null},width:{type:[Number,String],'default':null},height:{type:[Number,String],'default':null},block:{type:Boolean,'default':false},fluid:{type:Boolean,'default':false},fluidGrow:{ // Gives fluid images class `w-100` to make them grow to fit container
	type:Boolean,'default':false},rounded:{ // rounded can be:
	//   false: no rounding of corners
	//   true: slightly rounded corners
	//   'top': top corners rounded
	//   'right': right corners rounded
	//   'bottom': bottom corners rounded
	//   'left': left corners rounded
	//   'circle': circle/oval
	//   '0': force rounding off
	type:[Boolean,String],'default':false},thumbnail:{type:Boolean,'default':false},left:{type:Boolean,'default':false},right:{type:Boolean,'default':false},center:{type:Boolean,'default':false},blank:{type:Boolean,'default':false},blankColor:{type:String,'default':'transparent'}};var bImg={functional:true,props:props$18,render:function render(h,_ref){var _class;var props=_ref.props,data=_ref.data;var src=props.src;var width=parseInt(props.width,10)?parseInt(props.width,10):null;var height=parseInt(props.height,10)?parseInt(props.height,10):null;var align=null;var block=props.block;if(props.blank){if(!height && Boolean(width)){height = width;}else if(!width && Boolean(height)){width = height;}if(!width && !height){width = 1;height = 1;} // Make a blank SVG image
	src = makeBlankImgSrc(width,height,props.blankColor || 'transparent');}if(props.left){align = 'float-left';}else if(props.right){align = 'float-right';}else if(props.center){align = 'mx-auto';block = true;}return h('img',mergeData(data,{attrs:{'src':src,'alt':props.alt,'width':width?String(width):null,'height':height?String(height):null},'class':(_class = {'img-thumbnail':props.thumbnail,'img-fluid':props.fluid || props.fluidGrow,'w-100':props.fluidGrow,'rounded':props.rounded === '' || props.rounded === true},defineProperty$1(_class,'rounded-' + props.rounded,typeof props.rounded === 'string' && props.rounded !== ''),defineProperty$1(_class,align,Boolean(align)),defineProperty$1(_class,'d-block',block),_class)}));}};var bCarouselSlide={components:{bImg:bImg},mixins:[idMixin],render:function render(h){var t=this;var $slots=t.$slots;var img=$slots.img;if(!img && (t.imgSrc || t.imgBlank)){img = h('b-img',{props:{fluidGrow:true,block:true,src:t.imgSrc,blank:t.imgBlank,blankColor:t.imgBlankColor,width:t.computedWidth,height:t.computedHeight,alt:t.imgAlt}});}var content=h(t.contentTag,{'class':t.contentClasses},[t.caption?h(t.captionTag,{domProps:{innerHTML:t.caption}}):h(false),t.text?h(t.textTag,{domProps:{innerHTML:t.text}}):h(false),$slots['default']]);return h('div',{'class':['carousel-item'],style:{background:t.background},attrs:{id:t.safeId(),role:'listitem'}},[img,content]);},props:{imgSrc:{type:String,'default':function _default(){if(this && this.src){ // Deprecate src
	warn("b-carousel-slide: prop 'src' has been deprecated. Use 'img-src' instead");return this.src;}return null;}},src:{ // Deprecated: use img-src instead
	type:String},imgAlt:{type:String},imgWidth:{type:[Number,String]},imgHeight:{type:[Number,String]},imgBlank:{type:Boolean,'default':false},imgBlankColor:{type:String,'default':'transparent'},contentVisibleUp:{type:String},contentTag:{type:String,'default':'div'},caption:{type:String},captionTag:{type:String,'default':'h3'},text:{type:String},textTag:{type:String,'default':'p'},background:{type:String}},computed:{contentClasses:function contentClasses(){return ['carousel-caption',this.contentVisibleUp?'d-none':'',this.contentVisibleUp?'d-' + this.contentVisibleUp + '-block':''];},computedWidth:function computedWidth(){ // Use local width, or try parent width
	return this.imgWidth || this.$parent.imgWidth;},computedHeight:function computedHeight(){ // Use local height, or try parent height
	return this.imgHeight || this.$parent.imgHeight;}}}; /* eslint-disable no-var, no-undef, guard-for-in, object-shorthand */var components$9={bCarousel:bCarousel,bCarouselSlide:bCarouselSlide};var VuePlugin$18={install:function install(Vue){registerComponents(Vue,components$9);}};vueUse(VuePlugin$18);var props$19={tag:{type:String,'default':'div'},fluid:{type:Boolean,'default':false}};var Container={functional:true,props:props$19,render:function render(h,_ref){var props=_ref.props,data=_ref.data,children=_ref.children;return h(props.tag,mergeData(data,{'class':{'container':!props.fluid,'container-fluid':props.fluid}}),children);}};var COMMON_ALIGNMENT=['start','end','center'];var props$20={tag:{type:String,'default':'div'},noGutters:{type:Boolean,'default':false},alignV:{type:String,'default':null,validator:function validator(str){return arrayIncludes(COMMON_ALIGNMENT.concat(['baseline','stretch']),str);}},alignH:{type:String,'default':null,validator:function validator(str){return arrayIncludes(COMMON_ALIGNMENT.concat(['between','around']),str);}},alignContent:{type:String,'default':null,validator:function validator(str){return arrayIncludes(COMMON_ALIGNMENT.concat(['between','around','stretch']),str);}}};var bRow={functional:true,props:props$20,render:function render(h,_ref){var _class;var props=_ref.props,data=_ref.data,children=_ref.children;return h(props.tag,mergeData(data,{staticClass:'row','class':(_class = {'no-gutters':props.noGutters},defineProperty$1(_class,'align-items-' + props.alignV,props.alignV),defineProperty$1(_class,'justify-content-' + props.alignH,props.alignH),defineProperty$1(_class,'align-content-' + props.alignContent,props.alignContent),_class)}),children);}}; /**
	 * Generates a prop object with a type of
	 * [Boolean, String, Number]
	 */function boolStrNum(){return {type:[Boolean,String,Number],'default':false};} /**
	 * Generates a prop object with a type of
	 * [String, Number]
	 */function strNum(){return {type:[String,Number],'default':null};}var computeBkPtClass=memoize(function computeBkPt(type,breakpoint,val){var className=type;if(val === false || val === null || val === undefined){return undefined;}if(breakpoint){className += '-' + breakpoint;} // Handling the boolean style prop when accepting [Boolean, String, Number]
	// means Vue will not convert <b-col sm /> to sm: true for us.
	// Since the default is false, an empty string indicates the prop's presence.
	if(type === 'col' && (val === '' || val === true)){ // .col-md
	return className.toLowerCase();} // .order-md-6
	className += '-' + val;return className.toLowerCase();});var BREAKPOINTS=['sm','md','lg','xl']; // Supports classes like: .col-sm, .col-md-6, .col-lg-auto
	var breakpointCol=BREAKPOINTS.reduce( // eslint-disable-next-line no-sequences
	function(propMap,breakpoint){return propMap[breakpoint] = boolStrNum(),propMap;},create(null)); // Supports classes like: .offset-md-1, .offset-lg-12
	var breakpointOffset=BREAKPOINTS.reduce( // eslint-disable-next-line no-sequences
	function(propMap,breakpoint){return propMap[suffixPropName(breakpoint,'offset')] = strNum(),propMap;},create(null)); // Supports classes like: .order-md-1, .order-lg-12
	var breakpointOrder=BREAKPOINTS.reduce( // eslint-disable-next-line no-sequences
	function(propMap,breakpoint){return propMap[suffixPropName(breakpoint,'order')] = strNum(),propMap;},create(null)); // For loop doesn't need to check hasOwnProperty
	// when using an object created from null
	var breakpointPropMap=assign(create(null),{col:keys(breakpointCol),offset:keys(breakpointOffset),order:keys(breakpointOrder)});var props$21=assign({},breakpointCol,breakpointOffset,breakpointOrder,{tag:{type:String,'default':'div'}, // Generic flexbox .col
	col:{type:Boolean,'default':false}, // .col-[1-12]|auto
	cols:strNum(), // .offset-[1-12]
	offset:strNum(), // Flex ordering utility .order-[1-12]
	order:strNum(),alignSelf:{type:String,'default':null,validator:function validator(str){return arrayIncludes(['auto','start','end','center','baseline','stretch'],str);}}}); /**
	 * We need ".col" to default in when no other props are passed,
	 * but always render when col=true.
	 */var bCol={functional:true,props:props$21,render:function render(h,_ref){var _classList$push;var props=_ref.props,data=_ref.data,children=_ref.children;var classList=[]; // Loop through `col`, `offset`, `order` breakpoint props
	for(var type in breakpointPropMap) { // Returns colSm, offset, offsetSm, orderMd, etc.
	var _keys=breakpointPropMap[type];for(var i=0;i < _keys.length;i++) { // computeBkPt(col, colSm => Sm, value=[String, Number, Boolean])
	var c=computeBkPtClass(type,_keys[i].replace(type,''),props[_keys[i]]); // If a class is returned, push it onto the array.
	if(c){classList.push(c);}}}classList.push((_classList$push = { // Default to .col if no other classes generated nor `cols` specified.
	col:props.col || classList.length === 0 && !props.cols},defineProperty$1(_classList$push,'col-' + props.cols,props.cols),defineProperty$1(_classList$push,'offset-' + props.offset,props.offset),defineProperty$1(_classList$push,'order-' + props.order,props.order),defineProperty$1(_classList$push,'align-self-' + props.alignSelf,props.alignSelf),_classList$push));return h(props.tag,mergeData(data,{'class':classList}),children);}};var props$22={tag:{type:String,'default':'div'}};var bFormRow={functional:true,props:props$22,render:function render(h,_ref){var props=_ref.props,data=_ref.data,children=_ref.children;return h(props.tag,mergeData(data,{staticClass:'form-row'}),children);}}; /* eslint-disable no-var, no-undef, guard-for-in, object-shorthand */var components$10={bContainer:Container,bRow:bRow,bCol:bCol,bFormRow:bFormRow};var VuePlugin$20={install:function install(Vue){registerComponents(Vue,components$10);}};vueUse(VuePlugin$20); // Events we emit on $root
	var EVENT_STATE='bv::collapse::state';var EVENT_ACCORDION='bv::collapse::accordion'; // Events we listen to on $root
	var EVENT_TOGGLE='bv::toggle::collapse';var bCollapse={mixins:[listenOnRootMixin],render:function render(h){var t=this;var content=h(t.tag,{'class':t.classObject,directives:[{name:'show',value:t.show}],attrs:{id:t.id || null},on:{click:t.clickHandler}},[t.$slots['default']]);return h('transition',{props:{enterClass:'',enterActiveClass:'collapsing',enterToClass:'',leaveClass:'',leaveActiveClass:'collapsing',leaveToClass:''},on:{enter:t.onEnter,afterEnter:t.onAfterEnter,leave:t.onLeave,afterLeave:t.onAfterLeave}},[content]);},data:function data(){return {show:this.visible,transitioning:false};},model:{prop:'visible',event:'input'},props:{id:{type:String,required:true},isNav:{type:Boolean,'default':false},accordion:{type:String,'default':null},visible:{type:Boolean,'default':false},tag:{type:String,'default':'div'}},watch:{visible:function visible(newVal){if(newVal !== this.show){this.show = newVal;}},show:function show(newVal,oldVal){if(newVal !== oldVal){this.emitState();}}},computed:{classObject:function classObject(){return {'navbar-collapse':this.isNav,'collapse':!this.transitioning,'show':this.show && !this.transitioning};}},methods:{toggle:function toggle(){this.show = !this.show;},onEnter:function onEnter(el){el.style.height = 0;reflow(el);el.style.height = el.scrollHeight + 'px';this.transitioning = true; // This should be moved out so we can add cancellable events
	this.$emit('show');},onAfterEnter:function onAfterEnter(el){el.style.height = null;this.transitioning = false;this.$emit('shown');},onLeave:function onLeave(el){el.style.height = 'auto';el.style.display = 'block';el.style.height = el.getBoundingClientRect().height + 'px';reflow(el);this.transitioning = true;el.style.height = 0; // This should be moved out so we can add cancellable events
	this.$emit('hide');},onAfterLeave:function onAfterLeave(el){el.style.height = null;this.transitioning = false;this.$emit('hidden');},emitState:function emitState(){this.$emit('input',this.show); // Let v-b-toggle know the state of this collapse
	this.$root.$emit(EVENT_STATE,this.id,this.show);if(this.accordion && this.show){ // Tell the other collapses in this accordion to close
	this.$root.$emit(EVENT_ACCORDION,this.id,this.accordion);}},clickHandler:function clickHandler(evt){ // If we are in a nav/navbar, close the collapse when non-disabled link clicked
	var el=evt.target;if(!this.isNav || !el || getComputedStyle(this.$el).display !== 'block'){return;}if(hasClass(el,'nav-link') || hasClass(el,'dropdown-item')){this.show = false;}},handleToggleEvt:function handleToggleEvt(target){if(target !== this.id){return;}this.toggle();},handleAccordionEvt:function handleAccordionEvt(openedId,accordion){if(!this.accordion || accordion !== this.accordion){return;}if(openedId === this.id){ // Open this collapse if not shown
	if(!this.show){this.toggle();}}else { // Close this collapse if shown
	if(this.show){this.toggle();}}},handleResize:function handleResize(){ // Handler for orientation/resize to set collapsed state in nav/navbar
	this.show = getComputedStyle(this.$el).display === 'block';}},created:function created(){ // Listen for toggle events to open/close us
	this.listenOnRoot(EVENT_TOGGLE,this.handleToggleEvt); // Listen to otehr collapses for accordion events
	this.listenOnRoot(EVENT_ACCORDION,this.handleAccordionEvt);},mounted:function mounted(){if(this.isNav && typeof document !== 'undefined'){ // Set up handlers
	window.addEventListener('resize',this.handleResize,false);window.addEventListener('orientationchange',this.handleResize,false);this.handleResize();}this.emitState();},beforeDestroy:function beforeDestroy(){if(this.isNav && typeof document !== 'undefined'){window.removeEventListener('resize',this.handleResize,false);window.removeEventListener('orientationchange',this.handleResize,false);}}};var allListenTypes={hover:true,click:true,focus:true};function targets(vnode,binding,listenTypes,fn){var targets=keys(binding.modifiers || {}).filter(function(t){return !allListenTypes[t];});if(binding.value){targets.push(binding.value);}var listener=function listener(){fn({targets:targets,vnode:vnode});};keys(allListenTypes).forEach(function(type){if(listenTypes[type] || binding.modifiers[type]){vnode.elm.addEventListener(type,listener);}}); // Return the list of targets
	return targets;} // Are we client side?
	var inBrowser=typeof window !== 'undefined'; // target listen types
	var listenTypes={click:true // Property key for handler storage
	};var BVT='__BV_toggle__'; // Emitted Control Event for collapse (emitted to collapse)
	var EVENT_TOGGLE$1='bv::toggle::collapse'; // Listen to Event for toggle state update (Emited by collapse)
	var EVENT_STATE$1='bv::collapse::state';var bToggle={bind:function bind(el,binding,vnode){var targets$$1=targets(vnode,binding,listenTypes,function(_ref){var targets$$1=_ref.targets,vnode=_ref.vnode;targets$$1.forEach(function(target$$1){vnode.context.$root.$emit(EVENT_TOGGLE$1,target$$1);});});if(inBrowser && vnode.context && targets$$1.length > 0){ // Add aria attributes to element
	setAttr(el,'aria-controls',targets$$1.join(' '));setAttr(el,'aria-expanded','false');if(el.tagName !== 'BUTTON'){ // If element is not a button, we add `role="button"` for accessibility
	setAttr(el,'role','button');} // Toggle state hadnler, stored on element
	el[BVT] = function toggleDirectiveHandler(id,state){if(targets$$1.indexOf(id) !== -1){ // Set aria-expanded state
	setAttr(el,'aria-expanded',state?'true':'false'); // Set/Clear 'collapsed' class state
	if(state){removeClass(el,'collapsed');}else {addClass(el,'collapsed');}}}; // Listen for toggle state changes
	vnode.context.$root.$on(EVENT_STATE$1,el[BVT]);}},unbind:function unbind(el,binding,vnode){if(el[BVT]){ // Remove our $root listener
	vnode.context.$root.$off(EVENT_STATE$1,el[BVT]);el[BVT] = null;}}}; /* eslint-disable no-var, no-undef, guard-for-in, object-shorthand */var directives={bToggle:bToggle};var VuePlugin$23={install:function install(Vue){registerDirectives(Vue,directives);}};vueUse(VuePlugin$23); /* eslint-disable no-var, no-undef, guard-for-in, object-shorthand */var components$11={bCollapse:bCollapse};var VuePlugin$22={install:function install(Vue){registerComponents(Vue,components$11);Vue.use(VuePlugin$23);}};vueUse(VuePlugin$22);var bDropdown={mixins:[idMixin,dropdownMixin],components:{bButton:bBtn},render:function render(h){var t=this;var split=h(false);if(t.split){split = h('b-button',{ref:'button',props:{disabled:t.disabled,variant:t.variant,size:t.size},attrs:{id:t.safeId('_BV_button_')},on:{click:t.click}},[t.$slots['button-content'] || t.$slots.text || t.text]);}var toggle=h('b-button',{ref:'toggle','class':{'dropdown-toggle':!t.noCaret || t.split,'dropdown-toggle-split':t.split},props:{variant:t.variant,size:t.size,disabled:t.disabled},attrs:{id:t.safeId('_BV_toggle_'),'aria-haspopup':'true','aria-expanded':t.visible?'true':'false'},on:{click:t.toggle, // click
	keydown:t.toggle // enter, space, down
	}},[t.split?h('span',{'class':['sr-only']},[t.toggleText]):t.$slots['button-content'] || t.$slots.text || t.text]);var menu=h('div',{ref:'menu','class':t.menuClasses,attrs:{role:t.role,'aria-labelledby':t.safeId(split?'_BV_toggle_':'_BV_button_')},on:{mouseover:t.onMouseOver,keydown:t.onKeydown // tab, up, down, esc
	}},[this.$slots['default']]);return h('div',{attrs:{id:t.safeId()},'class':t.dropdownClasses},[split,toggle,menu]);},props:{split:{type:Boolean,'default':false},toggleText:{type:String,'default':'Toggle Dropdown'},size:{type:String,'default':null},variant:{type:String,'default':null},noCaret:{type:Boolean,'default':false},role:{type:String,'default':'menu'},boundary:{ // String: `scrollParent`, `window` or `viewport`
	// Object: HTML Element reference
	type:[String,Object],'default':'scrollParent'}},computed:{dropdownClasses:function dropdownClasses(){var position=''; // Position `static` is needed to allow menu to "breakout" of the scrollParent boundaries
	// See https://github.com/twbs/bootstrap/issues/24251#issuecomment-341413786
	if(this.boundary === 'scrollParent' || !this.boundary){position = 'position-static';}return ['btn-group','b-dropdown','dropdown',this.dropup?'dropup':'',this.visible?'show':'',position];},menuClasses:function menuClasses(){return ['dropdown-menu',this.right?'dropdown-menu-right':'',this.visible?'show':''];}}};var props$23=propsFactory();var bDropdownItem={functional:true,props:props$23,render:function render(h,_ref){var props=_ref.props,data=_ref.data,children=_ref.children;return h(Link,mergeData(data,{props:props,staticClass:'dropdown-item',attrs:{role:'menuitem'}}),children);}};var props$24={disabled:{type:Boolean,'default':false}};var bDropdownItemButton={functional:true,props:props$24,render:function render(h,_ref){var props=_ref.props,data=_ref.data,parent=_ref.parent,children=_ref.children;return h('button',mergeData(data,{props:props,staticClass:'dropdown-item',attrs:{role:'menuitem',type:'button',disabled:props.disabled},on:{click:function click(e){parent.$root.$emit('clicked::link',e);}}}),children);}};var props$25={id:{type:String,'default':null},tag:{type:String,'default':'h6'}};var bDropdownHeader={functional:true,props:props$25,render:function render(h,_ref){var props=_ref.props,data=_ref.data,children=_ref.children;return h(props.tag,mergeData(data,{staticClass:'dropdown-header',attrs:{id:props.id || null}}),children);}};var props$26={tag:{type:String,'default':'div'}};var bDropdownDivider={functional:true,props:props$26,render:function render(h,_ref){var props=_ref.props,data=_ref.data;return h(props.tag,mergeData(data,{staticClass:'dropdown-divider',attrs:{role:'separator'}}));}}; /* eslint-disable no-var, no-undef, guard-for-in, object-shorthand */var components$12={bDropdown:bDropdown,bDd:bDropdown,bDropdownItem:bDropdownItem,bDdItem:bDropdownItem,bDropdownItemButton:bDropdownItemButton,bDropdownItemBtn:bDropdownItemButton,bDdItemButton:bDropdownItemButton,bDdItemBtn:bDropdownItemButton,bDropdownHeader:bDropdownHeader,bDdHeader:bDropdownHeader,bDropdownDivider:bDropdownDivider,bDdDivider:bDropdownDivider};var VuePlugin$24={install:function install(Vue){registerComponents(Vue,components$12);}};vueUse(VuePlugin$24);var props$27={type:{type:String,'default':'iframe',validator:function validator(str){return arrayIncludes(['iframe','embed','video','object','img','b-img','b-img-lazy'],str);}},tag:{type:String,'default':'div'},aspect:{type:String,'default':'16by9'}};var bEmbed={functional:true,props:props$27,render:function render(h,_ref){var props=_ref.props,data=_ref.data,children=_ref.children;return h(props.tag,{ref:data.ref,staticClass:'embed-responsive','class':defineProperty$1({},'embed-responsive-' + props.aspect,Boolean(props.aspect))},[h(props.type,mergeData(data,{ref:'',staticClass:'embed-responsive-item'}),children)]);}}; /* eslint-disable no-var, no-undef, guard-for-in, object-shorthand */var components$13={bEmbed:bEmbed};var VuePlugin$25={install:function install(Vue){registerComponents(Vue,components$13);}};vueUse(VuePlugin$25);var props$28={id:{type:String,'default':null},inline:{type:Boolean,'default':false},novalidate:{type:Boolean,'default':false},validated:{type:Boolean,'default':false}};var Form={functional:true,props:props$28,render:function render(h,_ref){var props=_ref.props,data=_ref.data,children=_ref.children;return h('form',mergeData(data,{'class':{'form-inline':props.inline,'was-validated':props.validated},attrs:{id:props.id,novalidate:props.novalidate}}),children);}};var props$29={id:{type:String,'default':null},tag:{type:String,'default':'small'},textVariant:{type:String,'default':'muted'},inline:{type:Boolean,'default':false}};var bFormText={functional:true,props:props$29,render:function render(h,_ref){var props=_ref.props,data=_ref.data,children=_ref.children;return h(props.tag,mergeData(data,{'class':defineProperty$1({'form-text':!props.inline},'text-' + props.textVariant,Boolean(props.textVariant)),attrs:{id:props.id}}),children);}};var props$30={id:{type:String,'default':null},tag:{type:String,'default':'div'},forceShow:{type:Boolean,'default':false}};var bFormInvalidFeedback={functional:true,props:props$30,render:function render(h,_ref){var props=_ref.props,data=_ref.data,children=_ref.children;return h(props.tag,mergeData(data,{staticClass:'invalid-feedback','class':{'d-block':props.forceShow},attrs:{id:props.id}}),children);}};var props$31={id:{type:String,'default':null},tag:{type:String,'default':'div'},forceShow:{type:Boolean,'default':false}};var bFormValidFeedback={functional:true,props:props$31,render:function render(h,_ref){var props=_ref.props,data=_ref.data,children=_ref.children;return h(props.tag,mergeData(data,{staticClass:'valid-feedback','class':{'d-block':props.forceShow},attrs:{id:props.id}}),children);}}; /* eslint-disable no-var, no-undef, guard-for-in, object-shorthand */var components$14={bForm:Form,bFormRow:bFormRow,bFormText:bFormText,bFormInvalidFeedback:bFormInvalidFeedback,bFormFeedback:bFormInvalidFeedback,bFormValidFeedback:bFormValidFeedback};var VuePlugin$27={install:function install(Vue){registerComponents(Vue,components$14);}};vueUse(VuePlugin$27); // Selector for finding firt input in the form-group
	var SELECTOR='input:not(:disabled),textarea:not(:disabled),select:not(:disabled)';var bFormGroup={mixins:[idMixin,formStateMixin],components:{bFormRow:bFormRow,bFormText:bFormText,bFormInvalidFeedback:bFormInvalidFeedback,bFormValidFeedback:bFormValidFeedback},render:function render(h){var t=this;var $slots=t.$slots; // Label / Legend
	var legend=h(false);if(t.hasLabel){var children=$slots['label'];var legendTag=t.labelFor?'label':'legend';var legendDomProps=children?{}:{innerHTML:t.label};var legendAttrs={id:t.labelId,'for':t.labelFor || null};var legendClick=t.labelFor || t.labelSrOnly?{}:{click:t.legendClick};if(t.horizontal){ // Horizontal layout with label
	if(t.labelSrOnly){ // SR Only we wrap label/legend in a div to preserve layout
	children = h(legendTag,{'class':['sr-only'],attrs:legendAttrs,domProps:legendDomProps},children);legend = h('div',{'class':t.labelLayoutClasses},[children]);}else {legend = h(legendTag,{'class':[t.labelLayoutClasses,t.labelClasses],attrs:legendAttrs,domProps:legendDomProps,on:legendClick},children);}}else { // Vertical layout with label
	legend = h(legendTag,{'class':t.labelSrOnly?['sr-only']:t.labelClasses,attrs:legendAttrs,domProps:legendDomProps,on:legendClick},children);}}else if(t.horizontal){ // No label but has horizontal layout, so we need a spacer element for layout
	legend = h('div',{'class':t.labelLayoutClasses});} // Invalid feeback text (explicitly hidden if state is valid)
	var invalidFeedback=h(false);if(t.hasInvalidFeedback){var domProps={};if(!$slots['invalid-feedback'] && !$slots['feedback']){domProps = {innerHTML:t.invalidFeedback || t.feedback || ''};}invalidFeedback = h('b-form-invalid-feedback',{props:{id:t.invalidFeedbackId,forceShow:t.computedState === false},attrs:{role:'alert','aria-live':'assertive','aria-atomic':'true'},domProps:domProps},$slots['invalid-feedback'] || $slots['feedback']);} // Valid feeback text (explicitly hidden if state is invalid)
	var validFeedback=h(false);if(t.hasValidFeedback){var _domProps=$slots['valid-feedback']?{}:{innerHTML:t.validFeedback || ''};validFeedback = h('b-form-valid-feedback',{props:{id:t.validFeedbackId,forceShow:t.computedState === true},attrs:{role:'alert','aria-live':'assertive','aria-atomic':'true'},domProps:_domProps},$slots['valid-feedback']);} // Form help text (description)
	var description=h(false);if(t.hasDescription){var _domProps2=$slots['description']?{}:{innerHTML:t.description || ''};description = h('b-form-text',{attrs:{id:t.descriptionId},domProps:_domProps2},$slots['description']);} // Build content layout
	var content=h('div',{ref:'content','class':t.inputLayoutClasses,attrs:t.labelFor?{}:{role:'group','aria-labelledby':t.labelId}},[$slots['default'],invalidFeedback,validFeedback,description]); // Generate main form-group wrapper
	return h(t.labelFor?'div':'fieldset',{'class':t.groupClasses,attrs:{id:t.safeId(),disabled:t.disabled,role:'group','aria-invalid':t.computedState === false?'true':null,'aria-labelledby':t.labelId,'aria-describedby':t.labelFor?null:t.describedByIds}},t.horizontal?[h('b-form-row',{},[legend,content])]:[legend,content]);},props:{horizontal:{type:Boolean,'default':false},labelCols:{type:[Number,String],'default':3,validator:function validator(value){if(Number(value) >= 1 && Number(value) <= 11){return true;}warn('b-form-group: label-cols must be a value between 1 and 11');return false;}},breakpoint:{type:String,'default':'sm'},labelTextAlign:{type:String,'default':null},label:{type:String,'default':null},labelFor:{type:String,'default':null},labelSize:{type:String,'default':null},labelSrOnly:{type:Boolean,'default':false},labelClass:{type:[String,Array],'default':null},description:{type:String,'default':null},invalidFeedback:{type:String,'default':null},feedback:{ // Deprecated in favor of invalid-feedback
	type:String,'default':null},validFeedback:{type:String,'default':null},validated:{type:Boolean,'default':false}},computed:{groupClasses:function groupClasses(){return ['b-form-group','form-group',this.validated?'was-validated':null,this.stateClass];},labelClasses:function labelClasses(){return [ // BS V4.beta.3 will replace .col-form-legend with .col-form-label
	// so this next line will change to just: 'col-form-label',
	this.labelSize || this.labelFor?'col-form-label':'col-form-legend',this.labelSize?'col-form-label-' + this.labelSize:null,this.labelTextAlign?'text-' + this.labelTextAlign:null,this.horizontal?null:'pt-0',this.labelClass];},labelLayoutClasses:function labelLayoutClasses(){return [this.horizontal?'col-' + this.breakpoint + '-' + this.labelCols:null];},inputLayoutClasses:function inputLayoutClasses(){return [this.horizontal?'col-' + this.breakpoint + '-' + (12 - Number(this.labelCols)):null];},hasLabel:function hasLabel(){return this.label || this.$slots['label'];},hasDescription:function hasDescription(){return this.description || this.$slots['description'];},hasInvalidFeedback:function hasInvalidFeedback(){if(this.computedState === true){ // If the form-group state is explicityly valid, we return false
	return false;}return this.invalidFeedback || this.feedback || this.$slots['invalid-feedback'] || this.$slots['feedback'];},hasValidFeedback:function hasValidFeedback(){if(this.computedState === false){ // If the form-group state is explicityly invalid, we return false
	return false;}return this.validFeedback || this.$slots['valid-feedback'];},labelId:function labelId(){return this.hasLabel?this.safeId('_BV_label_'):null;},descriptionId:function descriptionId(){return this.hasDescription?this.safeId('_BV_description_'):null;},invalidFeedbackId:function invalidFeedbackId(){return this.hasInvalidFeedback?this.safeId('_BV_feedback_invalid_'):null;},validFeedbackId:function validFeedbackId(){return this.hasValidFeedback?this.safeId('_BV_feedback_valid_'):null;},describedByIds:function describedByIds(){return [this.descriptionId,this.invalidFeedbackId,this.validFeedbackId].filter(function(i){return i;}).join(' ') || null;}},watch:{describedByIds:function describedByIds(add,remove){if(add !== remove){this.setInputDescribedBy(add,remove);}}},methods:{legendClick:function legendClick(evt){var tagName=evt.target?evt.target.tagName:'';if(/^(input|select|textarea|label)$/i.test(tagName)){ // If clicked an input inside legend, we just let the default happen
	return;} // Focus the first non-disabled visible input when the legend element is clicked
	var inputs=selectAll(SELECTOR,this.$refs.content).filter(isVisible);if(inputs[0] && inputs[0].focus){inputs[0].focus();}},setInputDescribedBy:function setInputDescribedBy(add,remove){ // Sets the `aria-describedby` attribute on the input if label-for is set.
	// Optionally accepts a string of IDs to remove as the second parameter
	if(this.labelFor && typeof document !== 'undefined'){var input=select('#' + this.labelFor,this.$refs.content);if(input){var adb='aria-describedby';var ids=(getAttr(input,adb) || '').split(/\s+/);remove = (remove || '').split(/\s+/); // Update ID list, preserving any original IDs
	ids = ids.filter(function(id){return remove.indexOf(id) === -1;}).concat(add || '').join(' ').trim();if(ids){setAttr(input,adb,ids);}else {removeAttr(input,adb);}}}}},mounted:function mounted(){var _this=this;this.$nextTick(function(){ // Set the adia-describedby IDs on the input specified by label-for
	// We do this in a nextTick to ensure the children have finished rendering
	_this.setInputDescribedBy(_this.describedByIds);});}}; /* eslint-disable no-var, no-undef, guard-for-in, object-shorthand */var components$15={bFormGroup:bFormGroup,bFormFieldset:bFormGroup};var VuePlugin$29={install:function install(Vue){registerComponents(Vue,components$15);}};vueUse(VuePlugin$29);var bFormCheckbox={mixins:[idMixin,formRadioCheckMixin,formMixin,formSizeMixin,formStateMixin,formCustomMixin],render:function render(h){var t=this;var input=h('input',{ref:'check','class':[t.is_ButtonMode?'':t.is_Plain?'form-check-input':'custom-control-input',t.get_StateClass],directives:[{name:'model',rawName:'v-model',value:t.computedLocalChecked,expression:'computedLocalChecked'}],attrs:{id:t.safeId(),type:'checkbox',name:t.get_Name,disabled:t.is_Disabled,required:t.is_Required,autocomplete:'off','true-value':t.value,'false-value':t.uncheckedValue,'aria-required':t.is_Required?'true':null},domProps:{value:t.value,checked:t.is_Checked},on:{focus:t.handleFocus,blur:t.handleFocus,change:t.emitChange,__c:function __c(evt){var $$a=t.computedLocalChecked;var $$el=evt.target;if(isArray($$a)){ // Multiple checkbox
	var $$v=t.value;var $$i=t._i($$a,$$v); // Vue's 'loose' Array.indexOf
	if($$el.checked){ // Append value to array
	$$i < 0 && (t.computedLocalChecked = $$a.concat([$$v]));}else { // Remove value from array
	$$i > -1 && (t.computedLocalChecked = $$a.slice(0,$$i).concat($$a.slice($$i + 1)));}}else { // Single checkbox
	t.computedLocalChecked = $$el.checked?t.value:t.uncheckedValue;}}}});var indicator=h(false);if(!t.is_ButtonMode && !t.is_Plain){indicator = h('span',{'class':'custom-control-indicator',attrs:{'aria-hidden':'true'}});}var description=h('span',{'class':t.is_ButtonMode?null:t.is_Plain?'form-check-description':'custom-control-description'},[t.$slots['default']]);var label=h('label',{'class':[t.is_ButtonMode?t.buttonClasses:t.is_Plain?'form-check-label':t.labelClasses]},[input,indicator,description]);if(t.is_Plain && !t.is_ButtonMode){return h('div',{'class':['form-check',{'form-check-inline':!t.is_Stacked}]},[label]);}else {return label;}},props:{value:{'default':true},uncheckedValue:{ // Not applicable in multi-check mode
	'default':false},indeterminate:{ // Not applicable in multi-check mode
	type:Boolean,'default':false}},computed:{labelClasses:function labelClasses(){return ['custom-control','custom-checkbox',this.get_Size?'form-control-' + this.get_Size:'',this.get_StateClass];},is_Checked:function is_Checked(){var checked=this.computedLocalChecked;if(isArray(checked)){for(var i=0;i < checked.length;i++) {if(looseEqual(checked[i],this.value)){return true;}}return false;}else {return looseEqual(checked,this.value);}}},watch:{computedLocalChecked:function computedLocalChecked(newVal,oldVal){if(looseEqual(newVal,oldVal)){return;}this.$emit('input',newVal);this.$emit('update:indeterminate',this.$refs.check.indeterminate);},checked:function checked(newVal,oldVal){if(this.is_Child || looseEqual(newVal,oldVal)){return;}this.computedLocalChecked = newVal;},indeterminate:function indeterminate(newVal,oldVal){this.setIndeterminate(newVal);}},methods:{emitChange:function emitChange(_ref){var checked=_ref.target.checked; // Change event is only fired via user interaction
	// And we only emit the value of this checkbox
	if(this.is_Child || isArray(this.computedLocalChecked)){this.$emit('change',checked?this.value:null);if(this.is_Child){ // If we are a child of form-checkbbox-group, emit change on parent
	this.$parent.$emit('change',this.computedLocalChecked);}}else { // Single radio mode supports unchecked value
	this.$emit('change',checked?this.value:this.uncheckedValue);}this.$emit('update:indeterminate',this.$refs.check.indeterminate);},setIndeterminate:function setIndeterminate(state){ // Indeterminate only supported in single checkbox mode
	if(this.is_Child || isArray(this.computedLocalChecked)){return;}this.$refs.check.indeterminate = state; // Emit update event to prop
	this.$emit('update:indeterminate',this.$refs.check.indeterminate);}},mounted:function mounted(){ // Set initial indeterminate state
	this.setIndeterminate(this.indeterminate);}};var bFormCheckboxGroup={mixins:[idMixin,formMixin,formSizeMixin,formStateMixin,formCustomMixin,formOptionsMixin],components:{bFormCheckbox:bFormCheckbox},render:function render(h){var t=this;var $slots=t.$slots;var checks=t.formOptions.map(function(option,idx){return h('b-form-checkbox',{key:'check_' + idx + '_opt',props:{id:t.safeId('_BV_check_' + idx + '_opt_'),name:t.name,value:option.value,required:t.name && t.required,disabled:option.disabled}},[h('span',{domProps:{innerHTML:option.text}})]);});return h('div',{'class':t.groupClasses,attrs:{id:t.safeId(),role:'group',tabindex:'-1', // `data-toggle="buttons" will not be needed in BS V4.beta.3
	'data-toggle':t.buttons?'buttons':null, // Needed for styling only!
	'aria-required':t.required?'true':null,'aria-invalid':t.computedAriaInvalid}},[$slots.first,checks,$slots['default']]);},data:function data(){return {localChecked:this.checked || [], // Flag for children
	is_RadioCheckGroup:true};},model:{prop:'checked',event:'input'},props:{checked:{type:[String,Number,Object,Array,Boolean],'default':null},validated:{type:Boolean,'default':false},ariaInvalid:{type:[Boolean,String],'default':false},stacked:{type:Boolean,'default':false},buttons:{ // Render as button style
	type:Boolean,'default':false},buttonVariant:{ // Only applicable when rendered with button style
	type:String,'default':'secondary'}},watch:{checked:function checked(newVal,oldVal){this.localChecked = this.checked;},localChecked:function localChecked(newVal,oldVal){this.$emit('input',newVal);}},computed:{groupClasses:function groupClasses(){var t=this;if(t.buttons){return ['btn-group-toggle',t.stacked?'btn-group-vertical':'btn-group',t.size?'btn-group-' + this.size:'',t.validated?'was-validated':''];}return [t.sizeFormClass,t.stacked && t.custom?'custom-controls-stacked':'',t.validated?'was-validated':''];},computedAriaInvalid:function computedAriaInvalid(){var t=this;if(t.ariaInvalid === true || t.ariaInvalid === 'true' || t.ariaInvalid === ''){return 'true';}return t.get_State === false?'true':null;},get_State:function get_State(){ // Child radios sniff this value
	return this.computedState;}}}; /* eslint-disable no-var, no-undef, guard-for-in, object-shorthand */var components$16={bFormCheckbox:bFormCheckbox,bCheckbox:bFormCheckbox,bCheck:bFormCheckbox,bFormCheckboxGroup:bFormCheckboxGroup,bCheckboxGroup:bFormCheckboxGroup,bCheckGroup:bFormCheckboxGroup};var VuePlugin$31={install:function install(Vue){registerComponents(Vue,components$16);}};vueUse(VuePlugin$31);var bFormRadio={mixins:[idMixin,formRadioCheckMixin,formMixin,formStateMixin],render:function render(h){var t=this;var input=h('input',{ref:'radio','class':[t.is_ButtonMode?'':t.is_Plain?'form-check-input':'custom-control-input',t.get_StateClass],directives:[{name:'model',rawName:'v-model',value:t.computedLocalChecked,expression:'computedLocalChecked'}],attrs:{id:t.safeId(),type:'radio',name:t.get_Name,required:t.get_Name && t.is_Required,disabled:t.is_Disabled,autocomplete:'off'},domProps:{value:t.value,checked:looseEqual(t.computedLocalChecked,t.value)},on:{focus:t.handleFocus,blur:t.handleFocus,change:t.emitChange,__c:function __c(evt){t.computedLocalChecked = t.value;}}});var indicator=h(false);if(!t.is_ButtonMode && !t.is_Plain){indicator = h('span',{'class':'custom-control-indicator',attrs:{'aria-hidden':'true'}});}var description=h('span',{'class':t.is_ButtonMode?null:t.is_Plain?'form-check-description':'custom-control-description'},[t.$slots['default']]);var label=h('label',{'class':[t.is_ButtonMode?t.buttonClasses:t.is_Plain?'form-check-label':t.labelClasses]},[input,indicator,description]);if(t.is_Plain && !t.is_ButtonMode){return h('div',{'class':['form-check',{'form-check-inline':!t.is_Stacked}]},[label]);}else {return label;}},watch:{ // Radio Groups can only have a single value, so our watchers are simple
	checked:function checked(newVal,oldVal){this.computedLocalChecked = newVal;},computedLocalChceked:function computedLocalChceked(newVal,oldVal){this.$emit('input',this.computedLocalChceked);}},computed:{is_Checked:function is_Checked(){return looseEqual(this.value,this.computedLocalChecked);},labelClasses:function labelClasses(){ // Specific to radio
	return [this.get_Size?'form-control-' + this.get_Size:'','custom-control','custom-radio',this.get_StateClass];}},methods:{emitChange:function emitChange(_ref){var checked=_ref.target.checked; // Change is only emitted on user interaction
	this.$emit('change',checked?this.value:null); // If this is a child of form-radio-group, we emit a change event on it as well
	if(this.is_Child){this.$parent.$emit('change',this.computedLocalChecked);}}}};var bFormRadioGroup={mixins:[idMixin,formMixin,formSizeMixin,formStateMixin,formCustomMixin,formOptionsMixin],components:{bFormRadio:bFormRadio},render:function render(h){var t=this;var $slots=t.$slots;var radios=t.formOptions.map(function(option,idx){return h('b-form-radio',{key:'radio_' + idx + '_opt',props:{id:t.safeId('_BV_radio_' + idx + '_opt_'),name:t.name,value:option.value,required:Boolean(t.name && t.required),disabled:option.disabled}},[h('span',{domProps:{innerHTML:option.text}})]);});return h('div',{'class':t.groupClasses,attrs:{id:t.safeId(),role:'radiogroup',tabindex:'-1', // `data-toggle="buttons"` can be removed when BSV4.beta.3 is released
	'data-toggle':t.buttons?'buttons':null, // Needed for styling only!
	'aria-required':t.required?'true':null,'aria-invalid':t.computedAriaInvalid}},[$slots.first,radios,$slots['default']]);},data:function data(){return {localChecked:this.checked, // Flag for children
	is_RadioCheckGroup:true};},model:{prop:'checked',event:'input'},props:{checked:{type:[String,Object,Number,Boolean],'default':null},validated:{ // Used for applying hte `was-validated` class to the group
	type:Boolean,'default':false},ariaInvalid:{type:[Boolean,String],'default':false},stacked:{type:Boolean,'default':false},buttons:{ // Render as button style
	type:Boolean,'default':false},buttonVariant:{ // Only applicable when rendered with button style
	type:String,'default':'secondary'}},watch:{checked:function checked(newVal,oldVal){this.localChecked = this.checked;},localChecked:function localChecked(newVal,oldVal){this.$emit('input',newVal);}},computed:{groupClasses:function groupClasses(){if(this.buttons){return ['btn-group-toggle',this.stacked?'btn-group-vertical':'btn-group',this.size?'btn-group-' + this.size:'',this.validated?'was-validated':''];}return [this.sizeFormClass,this.stacked && this.custom?'custom-controls-stacked':'',this.validated?'was-validated':''];},computedAriaInvalid:function computedAriaInvalid(){if(this.ariaInvalid === true || this.ariaInvalid === 'true' || this.ariaInvalid === ''){return 'true';}return this.get_State === false?'true':null;},get_State:function get_State(){ // Required by child radios
	return this.computedState;}}}; /* eslint-disable no-var, no-undef, guard-for-in, object-shorthand */var components$17={bFormRadio:bFormRadio,bRadio:bFormRadio,bFormRadioGroup:bFormRadioGroup,bRadioGroup:bFormRadioGroup};var VuePlugin$33={install:function install(Vue){registerComponents(Vue,components$17);}};vueUse(VuePlugin$33); // Valid supported input types
	var TYPES=['text','password','email','number','url','tel','search','range','color','date','time','datetime','datetime-local','month','week'];var bFormInput$2={mixins:[idMixin,formMixin,formSizeMixin,formStateMixin],render:function render(h){var t=this;return h('input',{ref:'input','class':t.inputClass,domProps:{value:t.localValue},attrs:{id:t.safeId(),name:t.name,type:t.localType,disabled:t.disabled,required:t.required,readonly:t.readonly || t.plaintext,placeholder:t.placeholder,autocomplete:t.autocomplete || null,'aria-required':t.required?'true':null,'aria-invalid':t.computedAriaInvalid},on:{input:t.onInput,change:t.onChange}});},data:function data(){return {localValue:this.value};},props:{value:{'default':null},type:{type:String,'default':'text',validator:function validator(type){return arrayIncludes(TYPES,type);}},ariaInvalid:{type:[Boolean,String],'default':false},readonly:{type:Boolean,'default':false},plaintext:{type:Boolean,'default':false},autocomplete:{type:String,'default':null},placeholder:{type:String,'default':null},formatter:{type:Function},lazyFormatter:{type:Boolean,'default':false}},computed:{localType:function localType(){ // We only allow certain types
	return arrayIncludes(TYPES,this.type)?this.type:'text';},inputClass:function inputClass(){return [this.plaintext?'form-control-plaintext':'form-control', // Fix missing width:100% in Bootstrap V4.beta.2
	this.plaintext?'w-100':'',this.sizeFormClass,this.stateClass];},computedAriaInvalid:function computedAriaInvalid(){if(!this.ariaInvalid || this.ariaInvalid === 'false'){ // this.ariaInvalid is null or false or 'false'
	return this.computedState === false?'true':null;}if(this.ariaInvalid === true){ // User wants explicit aria-invalid=true
	return 'true';} // Most likely a string value (which could be 'true')
	return this.ariaInvalid;}},watch:{value:function value(newVal,oldVal){if(newVal !== oldVal){this.localValue = newVal;}},localValue:function localValue(newVal,oldVal){if(newVal !== oldVal){this.$emit('input',newVal);}}},methods:{format:function format(value,e){if(this.formatter){var formattedValue=this.formatter(value,e);if(formattedValue !== value){return formattedValue;}}return value;},onInput:function onInput(evt){var value=evt.target.value;if(this.lazyFormatter){ // Update the model with the current unformated value
	this.localValue = value;}else {this.localValue = this.format(value,evt);}},onChange:function onChange(evt){this.localValue = this.format(evt.target.value,evt);this.$emit('change',this.localValue);},focus:function focus(){if(!this.disabled){this.$el.focus();}}}}; /* eslint-disable no-var, no-undef, guard-for-in, object-shorthand */var components$18={bFormInput:bFormInput$2,bInput:bFormInput$2};var VuePlugin$35={install:function install(Vue){registerComponents(Vue,components$18);}};vueUse(VuePlugin$35);var bFormTextarea={mixins:[idMixin,formMixin,formSizeMixin,formStateMixin],render:function render(h){var t=this;return h('textarea',{ref:'input','class':t.inputClass,style:t.inputStyle,directives:[{name:'model',rawName:'v-model',value:t.localValue,expression:'localValue'}],domProps:{value:t.value},attrs:{id:t.safeId(),name:t.name,disabled:t.disabled,placeholder:t.placeholder,required:t.required,autocomplete:t.autocomplete || null,readonly:t.readonly || t.plaintext,rows:t.rowsCount,wrap:t.wrap || null,'aria-required':t.required?'true':null,'aria-invalid':t.computedAriaInvalid},on:{input:function input(evt){t.localValue = evt.target.value;}}});},data:function data(){return {localValue:this.value};},props:{value:{type:String,'default':''},ariaInvalid:{type:[Boolean,String],'default':false},readonly:{type:Boolean,'default':false},plaintext:{type:Boolean,'default':false},autocomplete:{type:String,'default':null},placeholder:{type:String,'default':null},rows:{type:[Number,String],'default':null},maxRows:{type:[Number,String],'default':null},wrap:{ // 'soft', 'hard' or 'off'. Browser default is 'soft'
	type:String,'default':'soft'},noResize:{type:Boolean,'default':false}},computed:{rowsCount:function rowsCount(){ // A better option could be based on https://codepen.io/vsync/pen/frudD
	// As linebreaks aren't added until the input is submitted
	var rows=parseInt(this.rows,10) || 1;var maxRows=parseInt(this.maxRows,10) || 0;var lines=(this.localValue || '').toString().split('\n').length;return maxRows?Math.min(maxRows,Math.max(rows,lines)):Math.max(rows,lines);},inputClass:function inputClass(){return [this.plaintext?'form-control-plaintext':'form-control', // Interim fix until BS V4.beta.3 is released
	this.plaintext?'w-100':'',this.sizeFormClass,this.stateClass];},inputStyle:function inputStyle(){ // We set width 100% in plaintext mode to get around a shortcoming in bootstrap CSS
	// setting noResize to true will disable the ability for the user to resize the textarea
	return {width:this.plaintext?'100%':null,resize:this.noResize?'none':null};},computedAriaInvalid:function computedAriaInvalid(){if(!this.ariaInvalid || this.ariaInvalid === 'false'){ // this.ariaInvalid is null or false or 'false'
	return this.computedState === false?'true':null;}if(this.ariaInvalid === true){ // User wants explicit aria-invalid=true
	return 'true';} // Most likely a string value (which could be the string 'true')
	return this.ariaInvalid;}},watch:{value:function value(newVal,oldVal){ // Update our localValue
	if(newVal !== oldVal){this.localValue = newVal;}},localValue:function localValue(newVal,oldVal){ // update Parent value
	if(newVal !== oldVal){this.$emit('input',newVal);}}},methods:{focus:function focus(){ // For external handler that may want a focus method
	if(!this.disabled){this.$el.focus();}}}}; /* eslint-disable no-var, no-undef, guard-for-in, object-shorthand */var components$19={bFormTextarea:bFormTextarea,bTextarea:bFormTextarea};var VuePlugin$37={install:function install(Vue){registerComponents(Vue,components$19);}};vueUse(VuePlugin$37);var bFormFile$2={mixins:[idMixin,formMixin,formStateMixin,formCustomMixin],render:function render(h){var t=this; // Form Input
	var input=h('input',{ref:'input','class':t.inputClasses,attrs:{type:'file',id:t.safeId(),name:t.name,disabled:t.disabled,required:t.required,capture:t.capture || null,'aria-required':t.required?'true':null,accept:t.accept || null,multiple:t.multiple,webkitdirectory:t.directory,'aria-describedby':t.plain?null:t.safeId('_BV_file_control_')},on:{change:t.onFileChange,focusin:t.focusHandler,focusout:t.focusHandler}});if(t.plain){return input;} // 'Drop Here' target
	var droptarget=h(false);if(t.dragging){droptarget = h('span',{'class':['drop-here'],attrs:{'data-drop':t.dropLabel},on:{dragover:t.dragover,drop:t.drop,dragleave:t.dragleave}});} // Overlay Labels
	var labels=h('span',{'class':['custom-file-control',t.dragging?'dragging':null],attrs:{id:t.safeId('_BV_file_control_'),'data-choose':t.computedChooseLabel,'data-selected':t.selectedLabel}}); // Return rendered custom file input
	return h('label',{'class':['custom-file','b-form-file',t.stateClass,'w-100','d-block'],attrs:{id:t.safeId('_BV_file_outer_')},on:{dragover:t.dragover}},[droptarget,input,labels]);},data:function data(){return {selectedFile:null,dragging:false,hasFocus:false};},props:{accept:{type:String,'default':''},capture:{ // Instruct input to capture from camera
	type:Boolean,'default':false},placeholder:{type:String,'default':null},chooseLabel:{type:String,'default':null},multiple:{type:Boolean,'default':false},directory:{type:Boolean,'default':false},noTraverse:{type:Boolean,'default':false},selectedFormat:{type:String,'default':':count Files'},noDrop:{type:Boolean,'default':false},dropLabel:{type:String,'default':'Drop files here'}},computed:{inputClasses:function inputClasses(){return [{'form-control-file':this.plain,'custom-file-input':this.custom,'w-100':true, // BS4 beta missing this
	'focus':this.custom && this.hasFocus},this.stateClass];},selectedLabel:function selectedLabel(){if(!this.selectedFile || this.selectedFile.length === 0){return this.placeholder || 'No file chosen';}if(this.multiple){if(this.selectedFile.length === 1){return this.selectedFile[0].name;}return this.selectedFormat.replace(':names',this.selectedFile.map(function(file){return file.name;}).join(',')).replace(':count',this.selectedFile.length);}return this.selectedFile.name;},computedChooseLabel:function computedChooseLabel(){return this.chooseLabel || (this.multiple?'Choose Files':'Choose File');}},watch:{selectedFile:function selectedFile(newVal,oldVal){if(newVal === oldVal){return;}if(!newVal && this.multiple){this.$emit('input',[]);}else {this.$emit('input',newVal);}}},methods:{focusHandler:function focusHandler(evt){ // Boostrap v4.beta doesn't have focus styling for custom file input
	// Firefox has a borked '[type=file]:focus ~ sibling' selector issue,
	// So we add a 'focus' class to get around these "bugs"
	if(this.plain || evt.type === 'focusout'){this.hasFocus = false;}else { // Add focus styling for custom file input
	this.hasFocus = true;}},reset:function reset(){try{ // Wrapped in try in case IE < 11 craps out
	this.$refs.input.value = '';}catch(e) {} // IE < 11 doesn't support setting input.value to '' or null
	// So we use this little extra hack to reset the value, just in case
	// This also appears to work on modern browsers as well.
	this.$refs.input.type = '';this.$refs.input.type = 'file';this.selectedFile = this.multiple?[]:null;},onFileChange:function onFileChange(evt){var _this=this; // Always emit original event
	this.$emit('change',evt); // Check if special `items` prop is available on event (drop mode)
	// Can be disabled by setting no-traverse
	var items=evt.dataTransfer && evt.dataTransfer.items;if(items && !this.noTraverse){var queue=[];for(var i=0;i < items.length;i++) {var item=items[i].webkitGetAsEntry();if(item){queue.push(this.traverseFileTree(item));}}Promise.all(queue).then(function(filesArr){_this.setFiles(from(filesArr));});return;} // Normal handling
	this.setFiles(evt.target.files || evt.dataTransfer.files);},setFiles:function setFiles(files){if(!files){this.selectedFile = null;return;}if(!this.multiple){this.selectedFile = files[0];return;} // Convert files to array
	var filesArray=[];for(var i=0;i < files.length;i++) {if(files[i].type.match(this.accept)){filesArray.push(files[i]);}}this.selectedFile = filesArray;},dragover:function dragover(evt){evt.preventDefault();evt.stopPropagation();if(this.noDrop || !this.custom){return;}this.dragging = true;evt.dataTransfer.dropEffect = 'copy';},dragleave:function dragleave(evt){evt.preventDefault();evt.stopPropagation();this.dragging = false;},drop:function drop(evt){evt.preventDefault();evt.stopPropagation();if(this.noDrop){return;}this.dragging = false;if(evt.dataTransfer.files && evt.dataTransfer.files.length > 0){this.onFileChange(evt);}},traverseFileTree:function traverseFileTree(item,path){var _this2=this; // Based on http://stackoverflow.com/questions/3590058
	return new Promise(function(resolve){path = path || '';if(item.isFile){ // Get file
	item.file(function(file){file.$path = path; // Inject $path to file obj
	resolve(file);});}else if(item.isDirectory){ // Get folder contents
	item.createReader().readEntries(function(entries){var queue=[];for(var i=0;i < entries.length;i++) {queue.push(_this2.traverseFileTree(entries[i],path + item.name + '/'));}Promise.all(queue).then(function(filesArr){resolve(from(filesArr));});});}});}}}; /* eslint-disable no-var, no-undef, guard-for-in, object-shorthand */var components$20={bFormFile:bFormFile$2,bFile:bFormFile$2};var VuePlugin$39={install:function install(Vue){registerComponents(Vue,components$20);}};vueUse(VuePlugin$39);var bFormSelect={mixins:[idMixin,formMixin,formSizeMixin,formStateMixin,formCustomMixin,formOptionsMixin],render:function render(h){var t=this;var $slots=t.$slots;var options=t.formOptions.map(function(option,index){return h('option',{key:'option_' + index + '_opt',attrs:{disabled:Boolean(option.disabled)},domProps:{innerHTML:option.text,value:option.value}});});return h('select',{ref:'input','class':t.inputClass,directives:[{name:'model',rawName:'v-model',value:t.localValue,expression:'localValue'}],attrs:{id:t.safeId(),name:t.name,multiple:t.multiple || null,size:t.multiple || t.selectSize > 1?t.selectSize:null,disabled:t.disabled,required:t.required,'aria-required':t.required?'true':null,'aria-invalid':t.computedAriaInvalid},on:{change:function change(evt){var target=evt.target;var selectedVal=from(target.options).filter(function(o){return o.selected;}).map(function(o){return '_value' in o?o._value:o.value;});t.localValue = target.multiple?selectedVal:selectedVal[0];t.$emit('change',t.localValue);}}},[$slots.first,options,$slots['default']]);},data:function data(){return {localValue:this.value};},watch:{value:function value(newVal,oldVal){this.localValue = newVal;},localValue:function localValue(newVal,oldVal){this.$emit('input',this.localValue);}},props:{value:{},multiple:{type:Boolean,'default':false},selectSize:{ // Browsers default size to 0, which shows 4 rows in most browsers in multiple mode
	// Size of 1 can bork out firefox
	type:Number,'default':0},ariaInvalid:{type:[Boolean,String],'default':false}},computed:{inputClass:function inputClass(){return ['form-control',this.stateClass,this.sizeFormClass,this.plain || !this.multiple && this.selectSize > 1?null:'custom-select'];},computedAriaInvalid:function computedAriaInvalid(){if(this.ariaInvalid === true || this.ariaInvalid === 'true'){return 'true';}return this.stateClass === 'is-invalid'?'true':null;}}}; /* eslint-disable no-var, no-undef, guard-for-in, object-shorthand */var components$21={bFormSelect:bFormSelect,bSelect:bFormSelect};var VuePlugin$41={install:function install(Vue){registerComponents(Vue,components$21);}};vueUse(VuePlugin$41);var THROTTLE=100;var bImgLazy={components:{bImg:bImg},render:function render(h){var t=this;return h('b-img',{props:{src:t.computedSrc,alt:t.alt,blank:t.computedBlank,blankColor:t.blankColor,width:t.computedWidth,height:t.computedHeight,fluid:t.fluid,fluidGrow:t.fluidGrow,block:t.block,thumbnail:t.thumbnail,rounded:t.rounded,left:t.left,right:t.right,center:t.center}});},data:function data(){return {isShown:false,scrollTimeout:null};},props:{src:{type:String,'default':null,required:true},alt:{type:String,'default':null},width:{type:[Number,String],'default':null},height:{type:[Number,String],'default':null},blankSrc:{ // If null, a blank image is generated
	type:String,'default':null},blankColor:{type:String,'default':'transparent'},blankWidth:{type:[Number,String],'default':null},blankHeight:{type:[Number,String],'default':null},fluid:{type:Boolean,'default':false},fluidGrow:{type:Boolean,'default':false},block:{type:Boolean,'default':false},thumbnail:{type:Boolean,'default':false},rounded:{type:[Boolean,String],'default':false},left:{type:Boolean,'default':false},right:{type:Boolean,'default':false},center:{type:Boolean,'default':false},offset:{type:[Number,String],'default':360},throttle:{type:[Number,String],'default':THROTTLE}},computed:{computedSrc:function computedSrc(){return !this.blankSrc || this.isShown?this.src:this.blankSrc;},computedBlank:function computedBlank(){return !(this.isShown || this.blankSrc);},computedWidth:function computedWidth(){return this.isShown?this.width:this.blankWidth || this.width;},computedHeight:function computedHeight(){return this.isShown?this.height:this.blankHeight || this.height;}},mounted:function mounted(){this.setListeners(true);this.checkView();},activated:function activated(){this.setListeners(true);this.checkView();},deactivated:function deactivated(){this.setListeners(false);},beforeDdestroy:function beforeDdestroy(){this.setListeners(false);},methods:{setListeners:function setListeners(on){clearTimeout(this.scrollTimer);this.scrollTimout = null;var root=window;if(on){eventOn(root,'scroll',this.onScroll);eventOn(root,'resize',this.onScroll);eventOn(root,'orientationchange',this.onScroll);}else {eventOff(root,'scroll',this.onScroll);eventOff(root,'resize',this.onScroll);eventOff(root,'orientationchange',this.onScroll);}},checkView:function checkView(){ // check bounding box + offset to see if we should show
	if(!isVisible(this.$el)){ // Element is hidden, so skip for now
	return;}var offset$$1=parseInt(this.offset,10) || 0;var docElement=document.documentElement;var view={l:0 - offset$$1,t:0 - offset$$1,b:docElement.clientHeight + offset$$1,r:docElement.clientWidth + offset$$1};var box=getBCR(this.$el);if(box.right >= view.l && box.bottom >= view.t && box.left <= view.r && box.top <= view.b){ // image is in view (or about to be in view)
	this.isShown = true;this.setListeners(false);}},onScroll:function onScroll(){if(this.isShown){this.setListeners(false);}else {clearTimeout(this.scrollTimeout);this.scrollTimeout = setTimeout(this.checkView,parseInt(this.throttle,10) || THROTTLE);}}}}; /* eslint-disable no-var, no-undef, guard-for-in, object-shorthand */var components$22={bImg:bImg,bImgLazy:bImgLazy};var VuePlugin$43={install:function install(Vue){registerComponents(Vue,components$22);}};vueUse(VuePlugin$43);var props$32={fluid:{type:Boolean,'default':false},containerFluid:{type:Boolean,'default':false},header:{type:String,'default':null},headerTag:{type:String,'default':'h1'},headerLevel:{type:[Number,String],'default':'3'},lead:{type:String,'default':null},leadTag:{type:String,'default':'p'},tag:{type:String,'default':'div'},bgVariant:{type:String,'default':null},borderVariant:{type:String,'default':null},textVariant:{type:String,'default':null}};var bJumbotron={functional:true,props:props$32,render:function render(h,_ref){var _class2;var props=_ref.props,data=_ref.data,slots=_ref.slots; // The order of the conditionals matter.
	// We are building the component markup in order.
	var childNodes=[];var $slots=slots(); // Header
	if(props.header || $slots.header){childNodes.push(h(props.headerTag,{'class':defineProperty$1({},'display-' + props.headerLevel,Boolean(props.headerLevel))},$slots.header || props.header));} // Lead
	if(props.lead || $slots.lead){childNodes.push(h(props.leadTag,{staticClass:'lead'},$slots.lead || props.lead));} // Default slot
	if($slots['default']){childNodes.push($slots['default']);} // If fluid, wrap content in a container/container-fluid
	if(props.fluid){ // Children become a child of a container
	childNodes = [h(Container,{props:{'fluid':props.containerFluid}},childNodes)];} // Return the jumbotron
	return h(props.tag,mergeData(data,{staticClass:'jumbotron','class':(_class2 = {'jumbotron-fluid':props.fluid},defineProperty$1(_class2,'text-' + props.textVariant,Boolean(props.textVariant)),defineProperty$1(_class2,'bg-' + props.bgVariant,Boolean(props.bgVariant)),defineProperty$1(_class2,'border-' + props.borderVariant,Boolean(props.borderVariant)),defineProperty$1(_class2,'border',Boolean(props.borderVariant)),_class2)}),childNodes);}}; /* eslint-disable no-var, no-undef, guard-for-in, object-shorthand */var components$23={bJumbotron:bJumbotron};var VuePlugin$45={install:function install(Vue){registerComponents(Vue,components$23);}};vueUse(VuePlugin$45); /* eslint-disable no-var, no-undef, guard-for-in, object-shorthand */var components$24={bLink:Link};var VuePlugin$47={install:function install(Vue){registerComponents(Vue,components$24);}};vueUse(VuePlugin$47);var props$33={tag:{type:String,'default':'div'},flush:{type:Boolean,'default':false}};var bListGroup={functional:true,props:props$33,render:function render(h,_ref){var props=_ref.props,data=_ref.data,children=_ref.children;var componentData={staticClass:'list-group','class':{'list-group-flush':props.flush}};return h(props.tag,mergeData(data,componentData),children);}};var actionTags=['a','router-link','button','b-link'];var linkProps$2=propsFactory();delete linkProps$2.href['default'];delete linkProps$2.to['default'];var props$34=assign({tag:{type:String,'default':'div'},action:{type:Boolean,'default':null},button:{type:Boolean,'default':null},variant:{type:String,'default':null}},linkProps$2);var bListGroupItem={functional:true,props:props$34,render:function render(h,_ref){var _class;var props=_ref.props,data=_ref.data,children=_ref.children;var tag=props.button?'button':!props.href && !props.to?props.tag:Link;var isAction=Boolean(props.href || props.to || props.action || props.button || arrayIncludes(actionTags,props.tag));var componentData={staticClass:'list-group-item','class':(_class = {},defineProperty$1(_class,'list-group-item-' + props.variant,Boolean(props.variant)),defineProperty$1(_class,'list-group-item-action',isAction),defineProperty$1(_class,'active',props.active),defineProperty$1(_class,'disabled',props.disabled),_class),attrs:tag === 'button' && props.disabled?{disabled:true}:{},props:props.button?{}:pluckProps(linkProps$2,props)};return h(tag,mergeData(data,componentData),children);}}; /* eslint-disable no-var, no-undef, guard-for-in, object-shorthand */var components$25={bListGroup:bListGroup,bListGroupItem:bListGroupItem};var VuePlugin$49={install:function install(Vue){registerComponents(Vue,components$25);}};vueUse(VuePlugin$49);var props$36={tag:{type:String,'default':'div'}};var MediaBody={functional:true,props:props$36,render:function render(h,_ref){var props=_ref.props,data=_ref.data,children=_ref.children;return h(props.tag,mergeData(data,{staticClass:'media-body'}),children);}};var props$37={tag:{type:String,'default':'div'},verticalAlign:{type:String,'default':'top'}};var MediaAside={functional:true,props:props$37,render:function render(h,_ref){var props=_ref.props,data=_ref.data,children=_ref.children;return h(props.tag,mergeData(data,{staticClass:'d-flex','class':defineProperty$1({},'align-self-' + props.verticalAlign,props.verticalAlign)}),children);}};var props$35={tag:{type:String,'default':'div'},rightAlign:{type:Boolean,'default':false},verticalAlign:{type:String,'default':'top'},noBody:{type:Boolean,'default':false}};var bMedia={functional:true,props:props$35,render:function render(h,_ref){var props=_ref.props,data=_ref.data,slots=_ref.slots,children=_ref.children;var childNodes=props.noBody?children:[];var $slots=slots();if(!props.noBody){if($slots.aside && !props.rightAlign){childNodes.push(h(MediaAside,{staticClass:'mr-3',props:{verticalAlign:props.verticalAlign}},$slots.aside));}childNodes.push(h(MediaBody,$slots['default']));if($slots.aside && props.rightAlign){childNodes.push(h(MediaAside,{staticClass:'ml-3',props:{verticalAlign:props.verticalAlign}},$slots.aside));}}return h(props.tag,mergeData(data,{staticClass:'media'}),childNodes);}}; /* eslint-disable no-var, no-undef, guard-for-in, object-shorthand */var components$26={bMedia:bMedia,bMediaAside:MediaAside,bMediaBody:MediaBody};var VuePlugin$51={install:function install(Vue){registerComponents(Vue,components$26);}};vueUse(VuePlugin$51);var BvEvent=(function(){function BvEvent(type){var eventInit=arguments.length > 1 && arguments[1] !== undefined?arguments[1]:{};classCallCheck(this,BvEvent); // Start by emulating native Event constructor.
	if(!type){throw new TypeError('Failed to construct \'' + this.constructor.name + '\'. 1 argument required, ' + arguments.length + ' given.');} // Assign defaults first, the eventInit,
	// and the type last so it can't be overwritten.
	assign(this,BvEvent.defaults(),eventInit,{type:type}); // Freeze some props as readonly, but leave them enumerable.
	defineProperties(this,{type:readonlyDescriptor(),cancelable:readonlyDescriptor(),nativeEvent:readonlyDescriptor(),target:readonlyDescriptor(),relatedTarget:readonlyDescriptor(),vueTarget:readonlyDescriptor()}); // Create a private variable using closure scoping.
	var defaultPrevented=false; // Recreate preventDefault method. One way setter.
	this.preventDefault = function preventDefault(){if(this.cancelable){defaultPrevented = true;}}; // Create 'defaultPrevented' publicly accessible prop
	// that can only be altered by the preventDefault method.
	defineProperty(this,'defaultPrevented',{enumerable:true,get:function get$$1(){return defaultPrevented;}});}createClass(BvEvent,null,[{key:'defaults',value:function defaults$$1(){return {type:'',cancelable:true,nativeEvent:null,target:null,relatedTarget:null,vueTarget:null};}}]);return BvEvent;})(); // Selectors for padding/margin adjustments
	var Selector={FIXED_CONTENT:'.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',STICKY_CONTENT:'.sticky-top',NAVBAR_TOGGLER:'.navbar-toggler' // ObserveDom config
	};var OBSERVER_CONFIG$1={subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['style','class']};var bModal$2={mixins:[idMixin,listenOnRootMixin],components:{bBtn:bBtn,bBtnClose:bBtnClose},render:function render(h){var t=this;var $slots=t.$slots; // Modal Header
	var header=h(false);if(!t.hideHeader){var modalHeader=$slots['modal-header'];if(!modalHeader){var closeButton=h(false);if(!t.hideHeaderClose){closeButton = h('b-btn-close',{props:{disabled:t.is_transitioning,ariaLabel:t.headerCloseLabel,textVariant:t.headerTextVariant},on:{click:function click(evt){t.hide('header-close');}}},[$slots['modal-header-close']]);}modalHeader = [h(t.titleTag,{'class':['modal-title']},[$slots['modal-title'] || t.title]),closeButton];}header = h('header',{ref:'header','class':t.headerClasses,attrs:{id:t.safeId('__BV_modal_header_')}},[modalHeader]);} // Modal Body
	var body=h('div',{ref:'body','class':t.bodyClasses,attrs:{id:t.safeId('__BV_modal_body_')}},[$slots['default']]); // Modal Footer
	var footer=h(false);if(!t.hideFooter){var modalFooter=$slots['modal-footer'];if(!modalFooter){var okButton=h(false);if(!t.okOnly){okButton = h('b-btn',{props:{variant:t.cancelVariant,size:t.buttonSize,disabled:t.cancelDisabled || t.busy || t.is_transitioning},on:{click:function click(evt){t.hide('cancel');}}},[$slots['modal-cancel'] || t.cancelTitle]);}var cancelButton=h('b-btn',{props:{variant:t.okVariant,size:t.buttonSize,disabled:t.okDisabled || t.busy || t.is_transitioning},on:{click:function click(evt){t.hide('ok');}}},[$slots['modal-ok'] || t.okTitle]);modalFooter = [cancelButton,okButton];}footer = h('footer',{ref:'footer','class':t.footerClasses,attrs:{id:t.safeId('__BV_modal_footer_')}},[modalFooter]);} // Assemble Modal Content
	var modalContent=h('div',{ref:'content','class':['modal-content'],attrs:{tabindex:'-1',role:'document','aria-labelledby':t.hideHeader?null:t.safeId('__BV_modal_header_'),'aria-describedby':t.safeId('__BV_modal_body_')},on:{focusout:t.onFocusout,click:function click(evt){evt.stopPropagation();}}},[header,body,footer]); // Modal Dialog wrapper
	var modalDialog=h('div',{'class':t.dialogClasses},[modalContent]); // Modal
	var modal=h('div',{ref:'modal','class':t.modalClasses,directives:[{name:'show',rawName:'v-show',value:t.is_visible,expression:'is_visible'}],attrs:{id:t.safeId(),role:'dialog','aria-hidden':t.is_visible?null:'true'},on:{click:t.onClickOut,keydown:t.onEsc}},[modalDialog]); // Wrap modal in transition
	modal = h('transition',{props:{enterClass:'',enterToClass:'',enterActiveClass:'',leaveClass:'',leaveActiveClass:'',leaveToClass:''},on:{'before-enter':t.onBeforeEnter,'enter':t.onEnter,'after-enter':t.onAfterEnter,'before-leave':t.onBeforeLeave,'leave':t.onLeave,'after-leave':t.onAfterLeave}},[modal]); // Modal Backdrop
	var backdrop=h(false);if(!t.hideBackdrop && (t.is_visible || t.is_transitioning)){backdrop = h('div',{'class':t.backdropClasses,attrs:{id:t.safeId('__BV_modal_backdrop_')}});} // Assemble modal and backdrop
	var outer=h(false);if(!t.is_hidden){outer = h('div',{attrs:{id:t.safeId('__BV_modal_outer_')}},[modal,backdrop]);} // Wrap in DIV to maintain thi.$el reference for hide/show method aceess
	return h('div',{},[outer]);},data:function data(){return {is_hidden:this.lazy || false,is_visible:false,is_transitioning:false,is_show:false,is_block:false,scrollbarWidth:0,isBodyOverflowing:false,return_focus:this.returnFocus || null};},model:{prop:'visible',event:'change'},props:{title:{type:String,'default':''},titleTag:{type:String,'default':'h5'},size:{type:String,'default':'md'},centered:{type:Boolean,'default':false},buttonSize:{type:String,'default':''},noFade:{type:Boolean,'default':false},noCloseOnBackdrop:{type:Boolean,'default':false},noCloseOnEsc:{type:Boolean,'default':false},noEnforceFocus:{type:Boolean,'default':false},headerBgVariant:{type:String,'default':null},headerBorderVariant:{type:String,'default':null},headerTextVariant:{type:String,'default':null},headerClass:{type:[String,Array],'default':null},bodyBgVariant:{type:String,'default':null},bodyTextVariant:{type:String,'default':null},bodyClass:{type:[String,Array],'default':null},footerBgVariant:{type:String,'default':null},footerBorderVariant:{type:String,'default':null},footerTextVariant:{type:String,'default':null},footerClass:{type:[String,Array],'default':null},hideHeader:{type:Boolean,'default':false},hideFooter:{type:Boolean,'default':false},hideHeaderClose:{type:Boolean,'default':false},hideBackdrop:{type:Boolean,'default':false},okOnly:{type:Boolean,'default':false},okDisabled:{type:Boolean,'default':false},cancelDisabled:{type:Boolean,'default':false},visible:{type:Boolean,'default':false},returnFocus:{'default':null},headerCloseLabel:{type:String,'default':'Close'},cancelTitle:{type:String,'default':'Cancel'},okTitle:{type:String,'default':'OK'},cancelVariant:{type:String,'default':'secondary'},okVariant:{type:String,'default':'primary'},lazy:{type:Boolean,'default':false},busy:{type:Boolean,'default':false}},computed:{modalClasses:function modalClasses(){return ['modal',{fade:!this.noFade,show:this.is_show,'d-block':this.is_block}];},dialogClasses:function dialogClasses(){var _ref;return ['modal-dialog',(_ref = {},defineProperty$1(_ref,'modal-' + this.size,Boolean(this.size)),defineProperty$1(_ref,'modal-dialog-centered',this.centered),_ref)];},backdropClasses:function backdropClasses(){return ['modal-backdrop',{fade:!this.noFade,show:this.is_show || this.noFade}];},headerClasses:function headerClasses(){var _ref2;return ['modal-header',(_ref2 = {},defineProperty$1(_ref2,'bg-' + this.headerBgVariant,Boolean(this.headerBgVariant)),defineProperty$1(_ref2,'text-' + this.headerTextVariant,Boolean(this.headerTextVariant)),defineProperty$1(_ref2,'border-' + this.headerBorderVariant,Boolean(this.headerBorderVariant)),_ref2),this.headerClass];},bodyClasses:function bodyClasses(){var _ref3;return ['modal-body',(_ref3 = {},defineProperty$1(_ref3,'bg-' + this.bodyBgVariant,Boolean(this.bodyBgVariant)),defineProperty$1(_ref3,'text-' + this.bodyTextVariant,Boolean(this.bodyTextVariant)),_ref3),this.bodyClass];},footerClasses:function footerClasses(){var _ref4;return ['modal-footer',(_ref4 = {},defineProperty$1(_ref4,'bg-' + this.footerBgVariant,Boolean(this.footerBgVariant)),defineProperty$1(_ref4,'text-' + this.footerTextVariant,Boolean(this.footerTextVariant)),defineProperty$1(_ref4,'border-' + this.footerBorderVariant,Boolean(this.footerBorderVariant)),_ref4),this.footerClass];}},watch:{visible:function visible(newVal,oldVal){if(newVal === oldVal){return;}this[newVal?'show':'hide']();}},methods:{ // Public Methods
	show:function show(){if(this.is_visible){return;}var showEvt=new BvEvent('show',{cancelable:true,vueTarget:this,target:this.$refs.modal,relatedTarget:null});this.emitEvent(showEvt);if(showEvt.defaultPrevented || this.is_visible){ // Don't show if canceled
	return;}if(hasClass(document.body,'modal-open')){ // If another modal is already open, wait for it to close
	this.$root.$once('bv::modal::hidden',this.doShow);}else { // Show the modal
	this.doShow();}},hide:function hide(trigger){if(!this.is_visible){return;}var hideEvt=new BvEvent('hide',{cancelable:true,vueTarget:this,target:this.$refs.modal, // this could be the trigger element/component reference
	relatedTarget:null,isOK:trigger || null,trigger:trigger || null,cancel:function cancel(){ // Backwards compatibility
	warn('b-modal: evt.cancel() is deprecated. Please use evt.preventDefault().');this.preventDefault();}});if(trigger === 'ok'){this.$emit('ok',hideEvt);}else if(trigger === 'cancel'){this.$emit('cancel',hideEvt);}this.emitEvent(hideEvt); // Hide if not canceled
	if(hideEvt.defaultPrevented || !this.is_visible){return;} // stop observing for content changes
	if(this._observer){this._observer.disconnect();this._observer = null;}this.is_visible = false;this.$emit('change',false);}, // Private method to finish showing modal
	doShow:function doShow(){var _this=this; // Plce modal in DOM if lazy
	this.is_hidden = false;this.$nextTick(function(){ // We do this in nextTick to ensure the modal is in DOM first before we show it
	_this.is_visible = true;_this.$emit('change',true); // Observe changes in modal content and adjust if necessary
	_this._observer = observeDOM(_this.$refs.content,_this.adjustDialog.bind(_this),OBSERVER_CONFIG$1);});}, // Transition Handlers
	onBeforeEnter:function onBeforeEnter(){this.is_transitioning = true;this.checkScrollbar();this.setScrollbar();this.adjustDialog();addClass(document.body,'modal-open');this.setResizeEvent(true);},onEnter:function onEnter(){this.is_block = true;this.$refs.modal.scrollTop = 0;},onAfterEnter:function onAfterEnter(){var _this2=this;this.is_show = true;this.is_transitioning = false;this.$nextTick(function(){_this2.focusFirst();var shownEvt=new BvEvent('shown',{cancelable:false,vueTarget:_this2,target:_this2.$refs.modal,relatedTarget:null});_this2.emitEvent(shownEvt);});},onBeforeLeave:function onBeforeLeave(){this.is_transitioning = true;this.setResizeEvent(false);},onLeave:function onLeave(){ // Remove the 'show' class
	this.is_show = false;},onAfterLeave:function onAfterLeave(){var _this3=this;this.is_block = false;this.resetAdjustments();this.resetScrollbar();this.is_transitioning = false;removeClass(document.body,'modal-open');this.$nextTick(function(){_this3.is_hidden = _this3.lazy || false;_this3.returnFocusTo();var hiddenEvt=new BvEvent('hidden',{cancelable:false,vueTarget:_this3,target:_this3.lazy?null:_this3.$refs.modal,relatedTarget:null});_this3.emitEvent(hiddenEvt);});}, // Event emitter
	emitEvent:function emitEvent(bvEvt){var type=bvEvt.type;this.$emit(type,bvEvt);this.$root.$emit('bv::modal::' + type,bvEvt);}, // UI Event Handlers
	onClickOut:function onClickOut(evt){ // If backdrop clicked, hide modal
	if(this.is_visible && !this.noCloseOnBackdrop){this.hide('backdrop');}},onEsc:function onEsc(evt){ // If ESC pressed, hide modal
	if(evt.keyCode === KeyCodes.ESC && this.is_visible && !this.noCloseOnEsc){this.hide('esc');}},onFocusout:function onFocusout(evt){ // If focus leaves modal, bring it back
	// 'focusout' Event Listener bound on content
	var content=this.$refs.content;if(!this.noEnforceFocus && this.is_visible && content && !content.contains(evt.relatedTarget)){content.focus();}}, // Resize Listener
	setResizeEvent:function setResizeEvent(on){var _this4=this;['resize','orientationchange'].forEach(function(evtName){if(on){eventOn(window,evtName,_this4.adjustDialog);}else {eventOff(window,evtName,_this4.adjustDialog);}});}, // Root Listener handlers
	showHandler:function showHandler(id,triggerEl){if(id === this.id){this.return_focus = triggerEl || null;this.show();}},hideHandler:function hideHandler(id){if(id === this.id){this.hide();}},modalListener:function modalListener(bvEvt){ // If another modal opens, close this one
	if(bvEvt.vueTarget !== this){this.hide();}}, // Focus control handlers
	focusFirst:function focusFirst(){ // Don't try and focus if we are SSR
	if(typeof document === 'undefined'){return;}var content=this.$refs.content;var modal=this.$refs.modal;var activeElement=document.activeElement;if(activeElement && content && content.contains(activeElement)){ // If activeElement is child of content, no need to change focus
	}else if(content){if(modal){modal.scrollTop = 0;} // Focus the modal content wrapper
	content.focus();}},returnFocusTo:function returnFocusTo(){ // Prefer returnFocus prop over event specified return_focus value
	var el=this.returnFocus || this.return_focus || null;if(typeof el === 'string'){ // CSS Selector
	el = select(el);}if(el){el = el.$el || el;if(isVisible(el)){el.focus();}}}, // Utility methods
	getScrollbarWidth:function getScrollbarWidth(){var scrollDiv=document.createElement('div');scrollDiv.className = 'modal-scrollbar-measure';document.body.appendChild(scrollDiv);this.scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;document.body.removeChild(scrollDiv);},adjustDialog:function adjustDialog(){if(!this.is_visible){return;}var modal=this.$refs.modal;var isModalOverflowing=modal.scrollHeight > document.documentElement.clientHeight;if(!this.isBodyOverflowing && isModalOverflowing){modal.style.paddingLeft = this.scrollbarWidth + 'px';}if(this.isBodyOverflowing && !isModalOverflowing){modal.style.paddingRight = this.scrollbarWidth + 'px';}},resetAdjustments:function resetAdjustments(){var modal=this.$refs.modal;if(modal){modal.style.paddingLeft = '';modal.style.paddingRight = '';}},checkScrollbar:function checkScrollbar(){var rect=getBCR(document.body);this.isBodyOverflowing = rect.left + rect.right < window.innerWidth;},setScrollbar:function setScrollbar(){if(this.isBodyOverflowing){ // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
	//   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
	var computedStyle=window.getComputedStyle;var body=document.body;var scrollbarWidth=this.scrollbarWidth; // Adjust fixed content padding
	selectAll(Selector.FIXED_CONTENT).forEach(function(el){var actualPadding=el.style.paddingRight;var calculatedPadding=computedStyle(el).paddingRight || 0;setAttr(el,'data-padding-right',actualPadding);el.style.paddingRight = parseFloat(calculatedPadding) + scrollbarWidth + 'px';}); // Adjust sticky content margin
	selectAll(Selector.STICKY_CONTENT).forEach(function(el){var actualMargin=el.style.marginRight;var calculatedMargin=computedStyle(el).marginRight || 0;setAttr(el,'data-margin-right',actualMargin);el.style.marginRight = parseFloat(calculatedMargin) - scrollbarWidth + 'px';}); // Adjust navbar-toggler margin
	selectAll(Selector.NAVBAR_TOGGLER).forEach(function(el){var actualMargin=el.style.marginRight;var calculatedMargin=computedStyle(el).marginRight || 0;setAttr(el,'data-margin-right',actualMargin);el.style.marginRight = parseFloat(calculatedMargin) + scrollbarWidth + 'px';}); // Adjust body padding
	var actualPadding=body.style.paddingRight;var calculatedPadding=computedStyle(body).paddingRight;setAttr(body,'data-padding-right',actualPadding);body.style.paddingRight = parseFloat(calculatedPadding) + scrollbarWidth + 'px';}},resetScrollbar:function resetScrollbar(){ // Restore fixed content padding
	selectAll(Selector.FIXED_CONTENT).forEach(function(el){if(hasAttr(el,'data-padding-right')){el.style.paddingRight = getAttr(el,'data-padding-right') || '';removeAttr(el,'data-padding-right');}}); // Restore sticky content and navbar-toggler margin
	selectAll(Selector.STICKY_CONTENT + ', ' + Selector.NAVBAR_TOGGLER).forEach(function(el){if(hasAttr(el,'data-margin-right')){el.style.marginRight = getAttr(el,'data-margin-right') || '';removeAttr(el,'data-margin-right');}}); // Restore body padding
	var body=document.body;if(hasAttr(body,'data-padding-right')){body.style.paddingRight = getAttr(body,'data-padding-right') || '';removeAttr(body,'data-padding-right');}}},created:function created(){ // create non-reactive property
	this._observer = null;},mounted:function mounted(){ // Measure scrollbar
	this.getScrollbarWidth(); // Listen for events from others to either open or close ourselves
	this.listenOnRoot('bv::show::modal',this.showHandler);this.listenOnRoot('bv::hide::modal',this.hideHandler); // Listen for bv:modal::show events, and close ourselves if the opening modal not us
	this.listenOnRoot('bv::modal::show',this.modalListener); // Initially show modal?
	if(this.visible === true){this.show();}},beforeDestroy:function beforeDestroy(){ // Ensure everything is back to normal
	if(this._observer){this._observer.disconnect();this._observer = null;}this.setResizeEvent(false); // Re-adjust body/navbar/fixed padding/margins (if needed)
	removeClass(document.body,'modal-open');this.resetAdjustments();this.resetScrollbar();}};var listenTypes$1={click:true};var bModal$3={ // eslint-disable-next-line no-shadow-restricted-names
	bind:function bind(el,binding,vnode){targets(vnode,binding,listenTypes$1,function(_ref){var targets$$1=_ref.targets,vnode=_ref.vnode;targets$$1.forEach(function(target){vnode.context.$root.$emit('bv::show::modal',target,vnode.elm);});});if(el.tagName !== 'BUTTON'){ // If element is not a button, we add `role="button"` for accessibility
	setAttr(el,'role','button');}}}; /* eslint-disable no-var, no-undef, guard-for-in, object-shorthand */var directives$1={bModal:bModal$3};var VuePlugin$55={install:function install(Vue){registerDirectives(Vue,directives$1);}};vueUse(VuePlugin$55); /* eslint-disable no-var, no-undef, guard-for-in, object-shorthand */var components$27={bModal:bModal$2};var VuePlugin$53={install:function install(Vue){registerComponents(Vue,components$27);Vue.use(VuePlugin$55);}};vueUse(VuePlugin$53);var props$38={tag:{type:String,'default':'ul'},fill:{type:Boolean,'default':false},justified:{type:Boolean,'default':false},tabs:{type:Boolean,'default':false},pills:{type:Boolean,'default':false},vertical:{type:Boolean,'default':false},isNavBar:{type:Boolean,'default':false}};var bNav={functional:true,props:props$38,render:function render(h,_ref){var props=_ref.props,data=_ref.data,children=_ref.children;if(props.isNavBar){warn("b-nav: Prop 'is-nav-bar' is deprecated. Please use component '<b-navbar-nav>' instead.");}return h(props.tag,mergeData(data,{'class':{'nav':!props.isNavBar,'navbar-nav':props.isNavBar,'nav-tabs':props.tabs && !props.isNavBar,'nav-pills':props.pills && !props.isNavBar,'flex-column':props.vertical && !props.isNavBar,'nav-fill':props.fill,'nav-justified':props.justified}}),children);}};var props$39=propsFactory();var bNavItem={functional:true,props:props$39,render:function render(h,_ref){var props=_ref.props,data=_ref.data,children=_ref.children;return h('li',mergeData(data,{staticClass:'nav-item'}),[h(Link,{staticClass:'nav-link',props:props},children)]);}};var props$40={tag:{type:String,'default':'span'}};var bNavText={functional:true,props:props$40,render:function render(h,_ref){var props=_ref.props,data=_ref.data,children=_ref.children;return h(props.tag,mergeData(data,{staticClass:'navbar-text'}),children);}};var bNavForm={functional:true,props:{id:{type:String,'default':null}},render:function render(h,_ref){var props=_ref.props,data=_ref.data,children=_ref.children;return h(Form,mergeData(data,{attrs:{id:props.id},props:{inline:true}}),children);}};var bNavItemDropdown={mixins:[idMixin,dropdownMixin],render:function render(h){var t=this;var button=h('a',{'class':t.toggleClasses,ref:'toggle',attrs:{href:'#',id:t.safeId('_BV_button_'),disabled:t.disabled,'aria-haspopup':'true','aria-expanded':t.visible?'true':'false'},on:{click:t.toggle,keydown:t.toggle // space, enter, down
	}},[t.$slots['button-content'] || t.$slots.text || h('span',{domProps:{innerHTML:t.text}})]);var menu=h('div',{'class':t.menuClasses,ref:'menu',attrs:{'aria-labelledby':t.safeId('_BV_button_')},on:{mouseover:t.onMouseOver,keydown:t.onKeydown // tab, up, down, esc
	}},[this.$slots['default']]);return h('li',{attrs:{id:t.safeId()},'class':t.dropdownClasses},[button,menu]);},computed:{isNav:function isNav(){ // Signal to dropdown mixin that we are in a navbar
	return true;},dropdownClasses:function dropdownClasses(){return ['nav-item','b-nav-dropdown','dropdown',this.dropup?'dropup':'',this.visible?'show':''];},toggleClasses:function toggleClasses(){return ['nav-link',this.noCaret?'':'dropdown-toggle',this.disabled?'disabled':''];},menuClasses:function menuClasses(){return ['dropdown-menu',this.right?'dropdown-menu-right':'dropdown-menu-left',this.visible?'show':''];}},props:{noCaret:{type:Boolean,'default':false},role:{type:String,'default':'menu'}}}; /* eslint-disable no-var, no-undef, guard-for-in, object-shorthand */var components$28={bNav:bNav,bNavItem:bNavItem,bNavText:bNavText,bNavForm:bNavForm,bNavItemDropdown:bNavItemDropdown,bNavItemDd:bNavItemDropdown,bNavDropdown:bNavItemDropdown,bNavDd:bNavItemDropdown};var VuePlugin$56={install:function install(Vue){registerComponents(Vue,components$28);Vue.use(VuePlugin$24);}};vueUse(VuePlugin$56);var props$41={tag:{type:String,'default':'nav'},type:{type:String,'default':'light'},variant:{type:String},toggleable:{type:[Boolean,String],'default':false},toggleBreakpoint:{ // Deprecated.  Set toggleable to a string breakpoint
	type:String,'default':null},fixed:{type:String},sticky:{type:Boolean,'default':false}};var bNavbar={functional:true,props:props$41,render:function render(h,_ref){var _class;var props=_ref.props,data=_ref.data,children=_ref.children;var breakpoint=props.toggleBreakpoint || (props.toggleable === true?'sm':props.toggleable) || 'sm';return h(props.tag,mergeData(data,{staticClass:'navbar','class':(_class = {},defineProperty$1(_class,'navbar-' + props.type,Boolean(props.type)),defineProperty$1(_class,'bg-' + props.variant,Boolean(props.variant)),defineProperty$1(_class,'fixed-' + props.fixed,Boolean(props.fixed)),defineProperty$1(_class,'sticky-top',props.sticky),defineProperty$1(_class,'navbar-expand-' + breakpoint,props.toggleable !== false),_class)}),children);}};var props$42={tag:{type:String,'default':'ul'},fill:{type:Boolean,'default':false},justified:{type:Boolean,'default':false}};var bNavbarNav={functional:true,props:props$42,render:function render(h,_ref){var props=_ref.props,data=_ref.data,children=_ref.children;return h(props.tag,mergeData(data,{staticClass:'navbar-nav','class':{'nav-fill':props.fill,'nav-justified':props.justified}}),children);}};var linkProps$3=propsFactory();linkProps$3.href['default'] = undefined;linkProps$3.to['default'] = undefined;var props$43=assign(linkProps$3,{tag:{type:String,'default':'div'}});var bNavbarBrand={functional:true,props:props$43,render:function render(h,_ref){var props=_ref.props,data=_ref.data,children=_ref.children;var isLink=Boolean(props.to || props.href);var tag=isLink?Link:props.tag;return h(tag,mergeData(data,{staticClass:'navbar-brand',props:isLink?pluckProps(linkProps$3,props):{}}),children);}};var bNavbarToggle={mixins:[listenOnRootMixin],render:function render(h){var t=this;return h('button',{'class':['navbar-toggler'],attrs:{type:'button','aria-label':t.label,'aria-controls':t.target,'aria-expanded':t.toggleState?'true':'false'},on:{click:t.onClick}},[t.$slots['default'] || h('span',{'class':['navbar-toggler-icon']})]);},data:function data(){return {toggleState:false};},props:{label:{type:String,'default':'Toggle navigation'},target:{type:String,required:true}},methods:{onClick:function onClick(){this.$root.$emit('bv::toggle::collapse',this.target);},handleStateEvt:function handleStateEvt(id,state){if(id === this.target){this.toggleState = state;}}},created:function created(){this.listenOnRoot('bv::collapse::state',this.handleStateEvt);}}; /* eslint-disable no-var, no-undef, guard-for-in, object-shorthand */var components$29={bNavbar:bNavbar,bNavbarNav:bNavbarNav,bNavbarBrand:bNavbarBrand,bNavbarToggle:bNavbarToggle,bNavToggle:bNavbarToggle};var VuePlugin$57={install:function install(Vue){registerComponents(Vue,components$29);Vue.use(VuePlugin$56);Vue.use(VuePlugin$22);Vue.use(VuePlugin$24);}};vueUse(VuePlugin$57);var props$44={perPage:{type:Number,'default':20},totalRows:{type:Number,'default':20},ariaControls:{type:String,'default':null} // Our render function is brought in from the pagination mixin
	};var bPagination={mixins:[paginationMixin],props:props$44,computed:{numberOfPages:function numberOfPages(){var result=Math.ceil(this.totalRows / this.perPage);return result < 1?1:result;}},methods:{ // These methods are used by the render function
	onClick:function onClick(num,evt){var _this=this; // Handle edge cases where number of pages has changed (i.e. if perPage changes)
	if(num > this.numberOfPages){num = this.numberOfPages;}else if(num < 1){num = 1;}this.currentPage = num;this.$nextTick(function(){ // Keep the current button focused if possible
	var target=evt.target;if(isVisible(target) && _this.$el.contains(target) && target.focus){target.focus();}else {_this.focusCurrent();}});this.$emit('change',this.currentPage);},makePage:function makePage(pagenum){return pagenum;},linkProps:function linkProps(pagenum){return {href:'#'};}}}; /* eslint-disable no-var, no-undef, guard-for-in, object-shorthand */var components$30={bPagination:bPagination};var VuePlugin$59={install:function install(Vue){registerComponents(Vue,components$30);}};vueUse(VuePlugin$59); // Props needed for router links
	var routerProps=pickLinkProps('activeClass','exactActiveClass','append','exact','replace','target','rel'); // Props object
	var props$45=assign( // pagination-nav specific props
	{numberOfPages:{type:Number,'default':1},baseUrl:{type:String,'default':'/'},useRouter:{type:Boolean,'default':false},linkGen:{type:Function,'default':null},pageGen:{type:Function,'default':null}}, // Router specific props
	routerProps); // Our render function is brought in via the pagination mixin
	var bPaginationNav={mixins:[paginationMixin],props:props$45,computed:{ // Used by render function to trigger wraping in '<nav>' element
	isNav:function isNav(){return true;}},methods:{onClick:function onClick(pageNum,evt){this.currentPage = pageNum;},makePage:function makePage(pagenum){if(this.pageGen && typeof this.pageGen === 'function'){return this.pageGen(pagenum);}return pagenum;},makeLink:function makeLink(pagenum){if(this.linkGen && typeof this.linkGen === 'function'){return this.linkGen(pagenum);}var link='' + this.baseUrl + pagenum;return this.useRouter?{path:link}:link;},linkProps:function linkProps(pagenum){var link=this.makeLink(pagenum);var props={href:typeof link === 'string'?link:void 0,target:this.target || null,rel:this.rel || null,disabled:this.disabled};if(this.useRouter || (typeof link === 'undefined'?'undefined':_typeof(link)) === 'object'){props = assign(props,{to:link,exact:this.exact,activeClass:this.activeClass,exactActiveClass:this.exactActiveClass,append:this.append,replace:this.replace});}return props;}}}; /* eslint-disable no-var, no-undef, guard-for-in, object-shorthand */var components$31={bPaginationNav:bPaginationNav};var VuePlugin$61={install:function install(Vue){registerComponents(Vue,components$31);}};vueUse(VuePlugin$61);var NAME$1='tooltip';var CLASS_PREFIX$1='bs-tooltip';var BSCLS_PREFIX_REGEX$1=new RegExp('\\b' + CLASS_PREFIX$1 + '\\S+','g');var TRANSITION_DURATION=150; // Modal $root hidden event
	var MODAL_CLOSE_EVENT='bv::modal::hidden'; // Modal container for appending tip/popover
	var MODAL_CLASS='.modal-content';var AttachmentMap$1={AUTO:'auto',TOP:'top',RIGHT:'right',BOTTOM:'bottom',LEFT:'left',TOPLEFT:'top',TOPRIGHT:'top',RIGHTTOP:'right',RIGHTBOTTOM:'right',BOTTOMLEFT:'bottom',BOTTOMRIGHT:'bottom',LEFTTOP:'left',LEFTBOTTOM:'left'};var OffsetMap={AUTO:0,TOPLEFT:-1,TOP:0,TOPRIGHT:+1,RIGHTTOP:-1,RIGHT:0,RIGHTBOTTOM:+1,BOTTOMLEFT:-1,BOTTOM:0,BOTTOMRIGHT:+1,LEFTTOP:-1,LEFT:0,LEFTBOTTOM:+1};var HoverState={SHOW:'show',OUT:'out'};var ClassName$1={FADE:'fade',SHOW:'show'};var Selector$2={TOOLTIP:'.tooltip',TOOLTIP_INNER:'.tooltip-inner',ARROW:'.arrow' // ESLINT: Not used
	// const Trigger = {
	//   HOVER: 'hover',
	//   FOCUS: 'focus',
	//   CLICK: 'click',
	//   BLUR: 'blur',
	//   MANUAL: 'manual'
	// }
	};var Defaults$2={animation:true,template:'<div class="tooltip" role="tooltip">' + '<div class="arrow"></div>' + '<div class="tooltip-inner"></div>' + '</div>',trigger:'hover focus',title:'',delay:0,html:false,placement:'top',offset:0,arrowPadding:6,container:false,fallbackPlacement:'flip',callbacks:{},boundary:'scrollParent' // Transition Event names
	};var TransitionEndEvents$1={WebkitTransition:['webkitTransitionEnd'],MozTransition:['transitionend'],OTransition:['otransitionend','oTransitionEnd'],transition:['transitionend'] // Client Side Tip ID counter for aria-describedby attribute
	// Could use Alex's uid generator util
	// Each tooltip requires a unique client side ID
	};var NEXTID=1; /* istanbul ignore next */function generateId(name){return '__BV_' + name + '_' + NEXTID++ + '__';} /*
	 * ToolTip Class definition
	 */ /* istanbul ignore next: difficult to test in Jest/JSDOM environment */var ToolTip=(function(){ // Main constructor
	function ToolTip(element,config,$root){classCallCheck(this,ToolTip); // New tooltip object
	this.$isEnabled = true;this.$fadeTimeout = null;this.$hoverTimeout = null;this.$visibleInterval = null;this.$hoverState = '';this.$activeTrigger = {};this.$popper = null;this.$element = element;this.$tip = null;this.$id = generateId(this.constructor.NAME);this.$root = $root || null;this.$routeWatcher = null; // We use a bound version of the following handlers for root/modal listeners to maintain the 'this' context
	this.$forceHide = this.forceHide.bind(this);this.$doHide = this.doHide.bind(this);this.$doShow = this.doShow.bind(this);this.$doDisable = this.doDisable.bind(this);this.$doEnable = this.doEnable.bind(this); // Set the configuration
	this.updateConfig(config);} // NOTE: Overridden by PopOver class
	createClass(ToolTip,[{key:'updateConfig', // Update config
	value:function updateConfig(config){ // Merge config into defaults. We use "this" here because PopOver overrides Default
	var updatedConfig=assign({},this.constructor.Default,config); // Sanitize delay
	if(config.delay && typeof config.delay === 'number'){updatedConfig.delay = {show:config.delay,hide:config.delay};} // Title for tooltip and popover
	if(config.title && typeof config.title === 'number'){updatedConfig.title = config.title.toString();} // Content only for popover
	if(config.content && typeof config.content === 'number'){updatedConfig.content = config.content.toString();} // Hide element original title if needed
	this.fixTitle(); // Update the config
	this.$config = updatedConfig; // Stop/Restart listening
	this.unListen();this.listen();} // Destroy this instance
	},{key:'destroy',value:function destroy(){ // Stop listening to trigger events
	this.unListen(); // Disable while open listeners/watchers
	this.setWhileOpenListeners(false); // Clear any timouts
	clearTimeout(this.$hoverTimeout);this.$hoverTimeout = null;clearTimeout(this.$fadeTimeout);this.$fadeTimeout = null; // Remove popper
	if(this.$popper){this.$popper.destroy();}this.$popper = null; // Remove tip from document
	if(this.$tip && this.$tip.parentElement){this.$tip.parentElement.removeChild(this.$tip);}this.$tip = null; // Null out other properties
	this.$id = null;this.$isEnabled = null;this.$root = null;this.$element = null;this.$config = null;this.$hoverState = null;this.$activeTrigger = null;this.$forceHide = null;this.$doHide = null;this.$doShow = null;this.$doDisable = null;this.$doEnable = null;}},{key:'enable',value:function enable(){ // Create a non-cancelable BvEvent
	var enabledEvt=new BvEvent('enabled',{cancelable:false,target:this.$element,relatedTarget:null});this.$isEnabled = true;this.emitEvent(enabledEvt);}},{key:'disable',value:function disable(){ // Create a non-cancelable BvEvent
	var disabledEvt=new BvEvent('disabled',{cancelable:false,target:this.$element,relatedTarget:null});this.$isEnabled = false;this.emitEvent(disabledEvt);} // Click toggler
	},{key:'toggle',value:function toggle(event){if(!this.$isEnabled){return;}if(event){this.$activeTrigger.click = !this.$activeTrigger.click;if(this.isWithActiveTrigger()){this.enter(null);}else {this.leave(null);}}else {if(hasClass(this.getTipElement(),ClassName$1.SHOW)){this.leave(null);}else {this.enter(null);}}} // Show tooltip
	},{key:'show',value:function show(){var _this=this;if(!document.body.contains(this.$element) || !isVisible(this.$element)){ // If trigger element isn't in the DOM or is not visible
	return;} // Build tooltip element (also sets this.$tip)
	var tip=this.getTipElement();this.fixTitle();this.setContent(tip);if(!this.isWithContent(tip)){ // if No content, don't bother showing
	this.$tip = null;return;} // Set ID on tip and aria-describedby on element
	setAttr(tip,'id',this.$id);this.addAriaDescribedby(); // Set animation on or off
	if(this.$config.animation){addClass(tip,ClassName$1.FADE);}else {removeClass(tip,ClassName$1.FADE);}var placement=this.getPlacement();var attachment=this.constructor.getAttachment(placement);this.addAttachmentClass(attachment); // Create a cancelable BvEvent
	var showEvt=new BvEvent('show',{cancelable:true,target:this.$element,relatedTarget:tip});this.emitEvent(showEvt);if(showEvt.defaultPrevented){ // Don't show if event cancelled
	this.$tip = null;return;} // Insert tooltip if needed
	var container=this.getContainer();if(!document.body.contains(tip)){container.appendChild(tip);} // Refresh popper
	this.removePopper();this.$popper = new Popper(this.$element,tip,this.getPopperConfig(placement,tip)); // Transitionend Callback
	var complete=function complete(){if(_this.$config.animation){_this.fixTransition(tip);}var prevHoverState=_this.$hoverState;_this.$hoverState = null;if(prevHoverState === HoverState.OUT){_this.leave(null);} // Create a non-cancelable BvEvent
	var shownEvt=new BvEvent('shown',{cancelable:false,target:_this.$element,relatedTarget:tip});_this.emitEvent(shownEvt);}; // Enable while open listeners/watchers
	this.setWhileOpenListeners(true); // Show tip
	addClass(tip,ClassName$1.SHOW); // Start the transition/animation
	this.transitionOnce(tip,complete);} // handler for periodic visibility check
	},{key:'visibleCheck',value:function visibleCheck(on){var _this2=this;clearInterval(this.$visibleInterval);this.$visibleInterval = null;if(on){this.$visibleInterval = setInterval(function(){var tip=_this2.getTipElement();if(tip && !isVisible(_this2.$element) && hasClass(tip,ClassName$1.SHOW)){ // Element is no longer visible, so force-hide the tooltip
	_this2.forceHide();}},100);}}},{key:'setWhileOpenListeners',value:function setWhileOpenListeners(on){ // Modal close events
	this.setModalListener(on); // Periodic $element visibility check
	// For handling when tip is in <keepalive>, tabs, carousel, etc
	this.visibleCheck(on); // Route change events
	this.setRouteWatcher(on); // Ontouch start listeners
	this.setOnTouchStartListener(on);if(on && /(focus|blur)/.test(this.$config.trigger)){ // If focus moves between trigger element and tip container, dont close
	eventOn(this.$tip,'focusout',this);}else {eventOff(this.$tip,'focusout',this);}} // force hide of tip (internal method)
	},{key:'forceHide',value:function forceHide(){if(!this.$tip || !hasClass(this.$tip,ClassName$1.SHOW)){return;} // Disable while open listeners/watchers
	this.setWhileOpenListeners(false); // Clear any hover enter/leave event
	clearTimeout(this.$hoverTimeout);this.$hoverTimeout = null;this.$hoverState = ''; // Hide the tip
	this.hide(null,true);} // Hide tooltip
	},{key:'hide',value:function hide(callback,force){var _this3=this;var tip=this.$tip;if(!tip){return;} // Create a canelable BvEvent
	var hideEvt=new BvEvent('hide',{ // We disable cancelling if force is true
	cancelable:!force,target:this.$element,relatedTarget:tip});this.emitEvent(hideEvt);if(hideEvt.defaultPrevented){ // Don't hide if event cancelled
	return;} // Transitionend Callback
	/* istanbul ignore next */var complete=function complete(){if(_this3.$hoverState !== HoverState.SHOW && tip.parentNode){ // Remove tip from dom, and force recompile on next show
	tip.parentNode.removeChild(tip);_this3.removeAriaDescribedby();_this3.removePopper();_this3.$tip = null;}if(callback){callback();} // Create a non-cancelable BvEvent
	var hiddenEvt=new BvEvent('hidden',{cancelable:false,target:_this3.$element,relatedTarget:null});_this3.emitEvent(hiddenEvt);}; // Disable while open listeners/watchers
	this.setWhileOpenListeners(false); // If forced close, disable animation
	if(force){removeClass(tip,ClassName$1.FADE);} // Hide tip
	removeClass(tip,ClassName$1.SHOW);this.$activeTrigger.click = false;this.$activeTrigger.focus = false;this.$activeTrigger.hover = false; // Start the hide transition
	this.transitionOnce(tip,complete);this.$hoverState = '';}},{key:'emitEvent',value:function emitEvent(evt){var evtName=evt.type;if(this.$root && this.$root.$emit){ // Emit an event on $root
	this.$root.$emit('bv::' + this.constructor.NAME + '::' + evtName,evt);}var callbacks=this.$config.callbacks || {};if(typeof callbacks[evtName] === 'function'){callbacks[evtName](evt);}}},{key:'getContainer',value:function getContainer(){var container=this.$config.container;var body=document.body; // If we are in a modal, we append to the modal instead of body, unless a container is specified
	return container === false?closest(MODAL_CLASS,this.$element) || body:select(container,body) || body;} // Will be overritten by popover if needed
	},{key:'addAriaDescribedby',value:function addAriaDescribedby(){ // Add aria-describedby on trigger element, without removing any other IDs
	var desc=getAttr(this.$element,'aria-describedby') || '';desc = desc.split(/\s+/).concat(this.$id).join(' ').trim();setAttr(this.$element,'aria-describedby',desc);} // Will be overritten by popover if needed
	},{key:'removeAriaDescribedby',value:function removeAriaDescribedby(){var _this4=this;var desc=getAttr(this.$element,'aria-describedby') || '';desc = desc.split(/\s+/).filter(function(d){return d !== _this4.$id;}).join(' ').trim();if(desc){setAttr(this.$element,'aria-describedby',desc);}else {removeAttr(this.$element,'aria-describedby');}}},{key:'removePopper',value:function removePopper(){if(this.$popper){this.$popper.destroy();}this.$popper = null;} /* istanbul ignore next */},{key:'transitionOnce',value:function transitionOnce(tip,complete){var _this5=this;var transEvents=this.getTransitionEndEvents();var called=false;clearTimeout(this.$fadeTimeout);this.$fadeTimeout = null;var fnOnce=function fnOnce(){if(called){return;}called = true;clearTimeout(_this5.$fadeTimeout);_this5.$fadeTimeout = null;transEvents.forEach(function(evtName){eventOff(tip,evtName,fnOnce);}); // Call complete callback
	complete();};if(hasClass(tip,ClassName$1.FADE)){transEvents.forEach(function(evtName){eventOn(tip,evtName,fnOnce);}); // Fallback to setTimeout
	this.$fadeTimeout = setTimeout(fnOnce,TRANSITION_DURATION);}else {fnOnce();}} // What transitionend event(s) to use? (returns array of event names)
	},{key:'getTransitionEndEvents',value:function getTransitionEndEvents(){for(var name in TransitionEndEvents$1) {if(this.$element.style[name] !== undefined){return TransitionEndEvents$1[name];}} // fallback
	return [];}},{key:'update',value:function update(){if(this.$popper !== null){this.$popper.scheduleUpdate();}} // NOTE: Overridden by PopOver class
	},{key:'isWithContent',value:function isWithContent(tip){tip = tip || this.$tip;if(!tip){return false;}return Boolean((select(Selector$2.TOOLTIP_INNER,tip) || {}).innerHTML);} // NOTE: Overridden by PopOver class
	},{key:'addAttachmentClass',value:function addAttachmentClass(attachment){addClass(this.getTipElement(),CLASS_PREFIX$1 + '-' + attachment);}},{key:'getTipElement',value:function getTipElement(){if(!this.$tip){ // Try and compile user supplied template, or fallback to default template
	this.$tip = this.compileTemplate(this.$config.template) || this.compileTemplate(this.constructor.Default.template);} // Add tab index so tip can be focused, and to allow it to be set as relatedTargt in focusin/out events
	this.$tip.tabIndex = -1;return this.$tip;}},{key:'compileTemplate',value:function compileTemplate(html){if(!html || typeof html !== 'string'){return null;}var div=document.createElement('div');div.innerHTML = html.trim();var node=div.firstElementChild?div.removeChild(div.firstElementChild):null;div = null;return node;} // NOTE: Overridden by PopOver class
	},{key:'setContent',value:function setContent(tip){this.setElementContent(select(Selector$2.TOOLTIP_INNER,tip),this.getTitle());removeClass(tip,ClassName$1.FADE);removeClass(tip,ClassName$1.SHOW);}},{key:'setElementContent',value:function setElementContent(container,content){if(!container){ // If container element doesn't exist, just return
	return;}var allowHtml=this.$config.html;if((typeof content === 'undefined'?'undefined':_typeof(content)) === 'object' && content.nodeType){ // content is a DOM node
	if(allowHtml){if(content.parentElement !== container){container.innerHtml = '';container.appendChild(content);}}else {container.innerText = content.innerText;}}else { // We have a plain HTML string or Text
	container[allowHtml?'innerHTML':'innerText'] = content;}} // NOTE: Overridden by PopOver class
	},{key:'getTitle',value:function getTitle(){var title=this.$config.title || '';if(typeof title === 'function'){ // Call the function to get the title value
	title = title(this.$element);}if((typeof title === 'undefined'?'undefined':_typeof(title)) === 'object' && title.nodeType && !title.innerHTML.trim()){ // We have a DOM node, but without inner content, so just return empty string
	title = '';}if(typeof title === 'string'){title = title.trim();}if(!title){ // If an explicit title is not given, try element's title atributes
	title = getAttr(this.$element,'title') || getAttr(this.$element,'data-original-title') || '';title = title.trim();}return title;}},{key:'listen',value:function listen(){var _this6=this;var triggers=this.$config.trigger.trim().split(/\s+/);var el=this.$element; // Listen for global show/hide events
	this.setRootListener(true); // Using 'this' as the handler will get automagically directed to this.handleEvent
	// And maintain our binding to 'this'
	triggers.forEach(function(trigger){if(trigger === 'click'){eventOn(el,'click',_this6);}else if(trigger === 'focus'){eventOn(el,'focusin',_this6);eventOn(el,'focusout',_this6);}else if(trigger === 'blur'){ // Used to close $tip when element looses focus
	eventOn(el,'focusout',_this6);}else if(trigger === 'hover'){eventOn(el,'mouseenter',_this6);eventOn(el,'mouseleave',_this6);}},this);}},{key:'unListen',value:function unListen(){var _this7=this;var events=['click','focusin','focusout','mouseenter','mouseleave']; // Using "this" as the handler will get automagically directed to this.handleEvent
	events.forEach(function(evt){eventOff(_this7.$element,evt,_this7);},this); // Stop listening for global show/hide/enable/disable events
	this.setRootListener(false);}},{key:'handleEvent',value:function handleEvent(e){ // This special method allows us to use "this" as the event handlers
	if(isDisabled(this.$element)){ // If disabled, don't do anything. Note: if tip is shown before element gets
	// disabled, then tip not close until no longer disabled or forcefully closed.
	return;}if(!this.$isEnabled){ // If not enable
	return;}var type=e.type;var target=e.target;var relatedTarget=e.relatedTarget;var $element=this.$element;var $tip=this.$tip;if(type === 'click'){this.toggle(e);}else if(type === 'focusin' || type === 'mouseenter'){this.enter(e);}else if(type === 'focusout'){ // target is the element which is loosing focus
	// And relatedTarget is the element gaining focus
	if($tip && $element && $element.contains(target) && $tip.contains(relatedTarget)){ // If focus moves from $element to $tip, don't trigger a leave
	return;}if($tip && $element && $tip.contains(target) && $element.contains(relatedTarget)){ // If focus moves from $tip to $element, don't trigger a leave
	return;}if($tip && $tip.contains(target) && $tip.contains(relatedTarget)){ // If focus moves within $tip, don't trigger a leave
	return;}if($element && $element.contains(target) && $element.contains(relatedTarget)){ // If focus moves within $element, don't trigger a leave
	return;} // Otherwise trigger a leave
	this.leave(e);}else if(type === 'mouseleave'){this.leave(e);}} /* istanbul ignore next */},{key:'setRouteWatcher',value:function setRouteWatcher(on){var _this8=this;if(on){this.setRouteWatcher(false);if(this.$root && Boolean(this.$root.$route)){this.$routeWatcher = this.$root.$watch('$route',function(newVal,oldVal){if(newVal === oldVal){return;} // If route has changed, we force hide the tooltip/popover
	_this8.forceHide();});}}else {if(this.$routeWatcher){ // cancel the route watcher by calling hte stored reference
	this.$routeWatcher();this.$routeWatcher = null;}}} /* istanbul ignore next */},{key:'setModalListener',value:function setModalListener(on){var modal=closest(MODAL_CLASS,this.$element);if(!modal){ // If we are not in a modal, don't worry. be happy
	return;} // We can listen for modal hidden events on $root
	if(this.$root){this.$root[on?'$on':'$off'](MODAL_CLOSE_EVENT,this.$forceHide);}} /* istanbul ignore next */},{key:'setRootListener',value:function setRootListener(on){ // Listen for global 'bv::{hide|show}::{tooltip|popover}' hide request event
	if(this.$root){this.$root[on?'$on':'$off']('bv::hide::' + this.constructor.NAME,this.$doHide);this.$root[on?'$on':'$off']('bv::show::' + this.constructor.NAME,this.$doShow);this.$root[on?'$on':'$off']('bv::disable::' + this.constructor.NAME,this.$doDisable);this.$root[on?'$on':'$off']('bv::enable::' + this.constructor.NAME,this.$doEnable);}}},{key:'doHide',value:function doHide(id){ // Programmatically hide tooltip or popover
	if(!id){ // Close all tooltips or popovers
	this.forceHide();}else if(this.$element && this.$element.id && this.$element.id === id){ // Close this specific tooltip or popover
	this.hide();}}},{key:'doShow',value:function doShow(id){ // Programmatically show tooltip or popover
	if(!id){ // Open all tooltips or popovers
	this.show();}else if(id && this.$element && this.$element.id && this.$element.id === id){ // Show this specific tooltip or popover
	this.show();}}},{key:'doDisable',value:function doDisable(id){ // Programmatically disable tooltip or popover
	if(!id){ // Disable all tooltips or popovers
	this.disable();}else if(this.$element && this.$element.id && this.$element.id === id){ // Disable this specific tooltip or popover
	this.disable();}}},{key:'doEnable',value:function doEnable(id){ // Programmatically enable tooltip or popover
	if(!id){ // Enable all tooltips or popovers
	this.enable();}else if(this.$element && this.$element.id && this.$element.id === id){ // Enable this specific tooltip or popover
	this.enable();}} /* istanbul ignore next */},{key:'setOnTouchStartListener',value:function setOnTouchStartListener(on){var _this9=this; // if this is a touch-enabled device we add extra
	// empty mouseover listeners to the body's immediate children;
	// only needed because of broken event delegation on iOS
	// https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
	if('ontouchstart' in document.documentElement){from(document.body.children).forEach(function(el){if(on){eventOn(el,'mouseover',_this9._noop);}else {eventOff(el,'mouseover',_this9._noop);}});}} /* istanbul ignore next */},{key:'_noop',value:function _noop(){ // Empty noop handler for ontouchstart devices
	}},{key:'fixTitle',value:function fixTitle(){var el=this.$element;var titleType=_typeof(getAttr(el,'data-original-title'));if(getAttr(el,'title') || titleType !== 'string'){setAttr(el,'data-original-title',getAttr(el,'title') || '');setAttr(el,'title','');}} // Enter handler
	/* istanbul ignore next */},{key:'enter',value:function enter(e){var _this10=this;if(e){this.$activeTrigger[e.type === 'focusin'?'focus':'hover'] = true;}if(hasClass(this.getTipElement(),ClassName$1.SHOW) || this.$hoverState === HoverState.SHOW){this.$hoverState = HoverState.SHOW;return;}clearTimeout(this.$hoverTimeout);this.$hoverState = HoverState.SHOW;if(!this.$config.delay || !this.$config.delay.show){this.show();return;}this.$hoverTimeout = setTimeout(function(){if(_this10.$hoverState === HoverState.SHOW){_this10.show();}},this.$config.delay.show);} // Leave handler
	/* istanbul ignore next */},{key:'leave',value:function leave(e){var _this11=this;if(e){this.$activeTrigger[e.type === 'focusout'?'focus':'hover'] = false;if(e.type === 'focusout' && /blur/.test(this.$config.trigger)){ // Special case for `blur`: we clear out the other triggers
	this.$activeTrigger.click = false;this.$activeTrigger.hover = false;}}if(this.isWithActiveTrigger()){return;}clearTimeout(this.$hoverTimeout);this.$hoverState = HoverState.OUT;if(!this.$config.delay || !this.$config.delay.hide){this.hide();return;}this.$hoverTimeout = setTimeout(function(){if(_this11.$hoverState === HoverState.OUT){_this11.hide();}},this.$config.delay.hide);}},{key:'getPopperConfig',value:function getPopperConfig(placement,tip){var _this12=this;return {placement:this.constructor.getAttachment(placement),modifiers:{offset:{offset:this.getOffset(placement,tip)},flip:{behavior:this.$config.fallbackPlacement},arrow:{element:'.arrow'},preventOverflow:{boundariesElement:this.$config.boundary}},onCreate:function onCreate(data){ // Handle flipping arrow classes
	if(data.originalPlacement !== data.placement){_this12.handlePopperPlacementChange(data);}},onUpdate:function onUpdate(data){ // Handle flipping arrow classes
	_this12.handlePopperPlacementChange(data);}};}},{key:'getOffset',value:function getOffset(placement,tip){if(!this.$config.offset){var arrow=select(Selector$2.ARROW,tip);var arrowOffset=parseFloat(getCS(arrow).width) + parseFloat(this.$config.arrowPadding);switch(OffsetMap[placement.toUpperCase()]){case +1:return '+50%p - ' + arrowOffset + 'px';case -1:return '-50%p + ' + arrowOffset + 'px';default:return 0;}}return parseFloat(this.$config.offset);}},{key:'getPlacement',value:function getPlacement(){var placement=this.$config.placement;if(typeof placement === 'function'){return placement.call(this,this.$tip,this.$element);}return placement;}},{key:'isWithActiveTrigger',value:function isWithActiveTrigger(){for(var trigger in this.$activeTrigger) {if(this.$activeTrigger[trigger]){return true;}}return false;} // NOTE: Overridden by PopOver class
	},{key:'cleanTipClass',value:function cleanTipClass(){var tip=this.getTipElement();var tabClass=tip.className.match(BSCLS_PREFIX_REGEX$1);if(tabClass !== null && tabClass.length > 0){tabClass.forEach(function(cls){removeClass(tip,cls);});}}},{key:'handlePopperPlacementChange',value:function handlePopperPlacementChange(data){this.cleanTipClass();this.addAttachmentClass(this.constructor.getAttachment(data.placement));}},{key:'fixTransition',value:function fixTransition(tip){var initConfigAnimation=this.$config.animation || false;if(getAttr(tip,'x-placement') !== null){return;}removeClass(tip,ClassName$1.FADE);this.$config.animation = false;this.hide();this.show();this.$config.animation = initConfigAnimation;}}],[{key:'getAttachment',value:function getAttachment(placement){return AttachmentMap$1[placement.toUpperCase()];}},{key:'Default',get:function get$$1(){return Defaults$2;} // NOTE: Overridden by PopOver class
	},{key:'NAME',get:function get$$1(){return NAME$1;}}]);return ToolTip;})();var NAME='popover';var CLASS_PREFIX='bs-popover';var BSCLS_PREFIX_REGEX=new RegExp('\\b' + CLASS_PREFIX + '\\S+','g');var Defaults$1=assign({},ToolTip.Default,{placement:'right',trigger:'click',content:'',template:'<div class="popover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'});var ClassName={FADE:'fade',SHOW:'show'};var Selector$1={TITLE:'.popover-header',CONTENT:'.popover-body' /* istanbul ignore next: dificult to test in Jest/JSDOM environment */};var PopOver=(function(_ToolTip){inherits(PopOver,_ToolTip);function PopOver(){classCallCheck(this,PopOver);return possibleConstructorReturn(this,(PopOver.__proto__ || Object.getPrototypeOf(PopOver)).apply(this,arguments));}createClass(PopOver,[{key:'isWithContent', // Method overrides
	value:function isWithContent(tip){tip = tip || this.$tip;if(!tip){return false;}var hasTitle=Boolean((select(Selector$1.TITLE,tip) || {}).innerHTML);var hasContent=Boolean((select(Selector$1.CONTENT,tip) || {}).innerHTML);return hasTitle || hasContent;}},{key:'addAttachmentClass',value:function addAttachmentClass(attachment){addClass(this.getTipElement(),CLASS_PREFIX + '-' + attachment);}},{key:'setContent',value:function setContent(tip){ // we use append for html objects to maintain js events/components
	this.setElementContent(select(Selector$1.TITLE,tip),this.getTitle());this.setElementContent(select(Selector$1.CONTENT,tip),this.getContent());removeClass(tip,ClassName.FADE);removeClass(tip,ClassName.SHOW);} // This method may look identical to ToolTip version, but it uses a different RegEx defined above
	},{key:'cleanTipClass',value:function cleanTipClass(){var tip=this.getTipElement();var tabClass=tip.className.match(BSCLS_PREFIX_REGEX);if(tabClass !== null && tabClass.length > 0){tabClass.forEach(function(cls){removeClass(tip,cls);});}}},{key:'getTitle',value:function getTitle(){var title=this.$config.title || '';if(typeof title === 'function'){title = title(this.$element);}if((typeof title === 'undefined'?'undefined':_typeof(title)) === 'object' && title.nodeType && !title.innerHTML.trim()){ // We have a dom node, but without inner content, so just return an empty string
	title = '';}if(typeof title === 'string'){title = title.trim();}if(!title){ // Try and grab element's title attribute
	title = getAttr(this.$element,'title') || getAttr(this.$element,'data-original-title') || '';title = title.trim();}return title;} // New methods
	},{key:'getContent',value:function getContent(){var content=this.$config.content || '';if(typeof content === 'function'){content = content(this.$element);}if((typeof content === 'undefined'?'undefined':_typeof(content)) === 'object' && content.nodeType && !content.innerHTML.trim()){ // We have a dom node, but without inner content, so just return an empty string
	content = '';}if(typeof content === 'string'){content = content.trim();}return content;}}],[{key:'Default', // Getter overrides
	get:function get$$1(){return Defaults$1;}},{key:'NAME',get:function get$$1(){return NAME;}}]);return PopOver;})(ToolTip);var bPopover={mixins:[toolpopMixin],render:function render(h){return h('div',{'class':['d-none'],style:{display:'none'},attrs:{'aria-hidden':true}},[h('div',{ref:'title'},this.$slots.title),h('div',{ref:'content'},this.$slots['default'])]);},data:function data(){return {};},props:{title:{type:String,'default':''},content:{type:String,'default':''},triggers:{type:[String,Array],'default':'click'},placement:{type:String,'default':'right'}},methods:{createToolpop:function createToolpop(){ // getTarget is in toolpop mixin
	var target=this.getTarget();if(target){this._toolpop = new PopOver(target,this.getConfig(),this.$root);}else {this._toolpop = null;warn("b-popover: 'target' element not found!");}return this._toolpop;}}}; /* eslint-disable no-var, no-undef, guard-for-in, object-shorthand */var components$32={bPopover:bPopover};var VuePlugin$63={install:function install(Vue){registerComponents(Vue,components$32);}};vueUse(VuePlugin$63);var bProgressBar={render:function render(h){var t=this;var childNodes=h(false);if(t.$slots['default']){childNodes = t.$slots['default'];}else if(t.label){childNodes = h('span',{domProps:{innerHTML:t.label}});}else if(t.computedShowProgress){childNodes = t.progress.toFixed(t.computedPrecision);}else if(t.computedShowValue){childNodes = t.value.toFixed(t.computedPrecision);}return h('div',{'class':t.progressBarClasses,style:t.progressBarStyles,attrs:{role:'progressbar','aria-valuemin':'0','aria-valuemax':t.computedMax.toString(),'aria-valuenow':t.value.toFixed(t.computedPrecision)}},[childNodes]);},computed:{progressBarClasses:function progressBarClasses(){return ['progress-bar',this.computedVariant?'bg-' + this.computedVariant:'',this.computedStriped || this.computedAnimated?'progress-bar-striped':'',this.computedAnimated?'progress-bar-animated':''];},progressBarStyles:function progressBarStyles(){return {width:100 * (this.value / this.computedMax) + '%'};},progress:function progress(){var p=Math.pow(10,this.computedPrecision);return Math.round(100 * p * this.value / this.computedMax) / p;},computedMax:function computedMax(){ // Prefer our max over parent setting
	return typeof this.max === 'number'?this.max:this.$parent.max || 100;},computedVariant:function computedVariant(){ // Prefer our variant over parent setting
	return this.variant || this.$parent.variant;},computedPrecision:function computedPrecision(){ // Prefer our precision over parent setting
	return typeof this.precision === 'number'?this.precision:this.$parent.precision || 0;},computedStriped:function computedStriped(){ // Prefer our striped over parent setting
	return typeof this.striped === 'boolean'?this.striped:this.$parent.striped || false;},computedAnimated:function computedAnimated(){ // Prefer our animated over parent setting
	return typeof this.animated === 'boolean'?this.animated:this.$parent.animated || false;},computedShowProgress:function computedShowProgress(){ // Prefer our showProgress over parent setting
	return typeof this.showProgress === 'boolean'?this.showProgress:this.$parent.showProgress || false;},computedShowValue:function computedShowValue(){ // Prefer our showValue over parent setting
	return typeof this.showValue === 'boolean'?this.showValue:this.$parent.showValue || false;}},props:{value:{type:Number,'default':0},label:{type:String,'default':null}, // $parent prop values take precedence over the following props
	// Which is why they are defaulted to null
	max:{type:Number,'default':null},precision:{type:Number,'default':null},variant:{type:String,'default':null},striped:{type:Boolean,'default':null},animated:{type:Boolean,'default':null},showProgress:{type:Boolean,'default':null},showValue:{type:Boolean,'default':null}}};var bProgress$2={components:{bProgressBar:bProgressBar},render:function render(h){var t=this;var childNodes=t.$slots['default'];if(!childNodes){childNodes = h('b-progress-bar',{props:{value:t.value,max:t.max,precision:t.precision,variant:t.variant,animated:t.animated,striped:t.striped,showProgress:t.showProgress,showValue:t.showValue}});}return h('div',{'class':['progress'],style:t.progressHeight},[childNodes]);},props:{ // These props can be inherited via the child b-progress-bar(s)
	variant:{type:String,'default':null},striped:{type:Boolean,'default':false},animated:{type:Boolean,'default':false},height:{type:String,'default':null},precision:{type:Number,'default':0},showProgress:{type:Boolean,'default':false},showValue:{type:Boolean,'default':false},max:{type:Number,'default':100}, // This prop is not inherited by child b-progress-bar(s)
	value:{type:Number,'default':0}},computed:{progressHeight:function progressHeight(){return {height:this.height || null};}}}; /* eslint-disable no-var, no-undef, guard-for-in, object-shorthand */var components$33={bProgress:bProgress$2,bProgressBar:bProgressBar};var VuePlugin$65={install:function install(Vue){registerComponents(Vue,components$33);}};vueUse(VuePlugin$65);var commonjsGlobal=typeof window !== 'undefined'?window:typeof global !== 'undefined'?global:typeof self !== 'undefined'?self:{}; /**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */ /** Used as references for various `Number` constants. */var INFINITY=1 / 0; /** `Object#toString` result references. */var symbolTag='[object Symbol]'; /** Used to match words composed of alphanumeric characters. */var reAsciiWord=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g; /** Used to match Latin Unicode letters (excluding mathematical operators). */var reLatin=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g; /** Used to compose unicode character classes. */var rsAstralRange='\\ud800-\\udfff';var rsComboMarksRange='\\u0300-\\u036f\\ufe20-\\ufe23';var rsComboSymbolsRange='\\u20d0-\\u20f0';var rsDingbatRange='\\u2700-\\u27bf';var rsLowerRange='a-z\\xdf-\\xf6\\xf8-\\xff';var rsMathOpRange='\\xac\\xb1\\xd7\\xf7';var rsNonCharRange='\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf';var rsPunctuationRange='\\u2000-\\u206f';var rsSpaceRange=' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000';var rsUpperRange='A-Z\\xc0-\\xd6\\xd8-\\xde';var rsVarRange='\\ufe0e\\ufe0f';var rsBreakRange=rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange; /** Used to compose unicode capture groups. */var rsApos='[\'’]';var rsAstral='[' + rsAstralRange + ']';var rsBreak='[' + rsBreakRange + ']';var rsCombo='[' + rsComboMarksRange + rsComboSymbolsRange + ']';var rsDigits='\\d+';var rsDingbat='[' + rsDingbatRange + ']';var rsLower='[' + rsLowerRange + ']';var rsMisc='[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']';var rsFitz='\\ud83c[\\udffb-\\udfff]';var rsModifier='(?:' + rsCombo + '|' + rsFitz + ')';var rsNonAstral='[^' + rsAstralRange + ']';var rsRegional='(?:\\ud83c[\\udde6-\\uddff]){2}';var rsSurrPair='[\\ud800-\\udbff][\\udc00-\\udfff]';var rsUpper='[' + rsUpperRange + ']';var rsZWJ='\\u200d'; /** Used to compose unicode regexes. */var rsLowerMisc='(?:' + rsLower + '|' + rsMisc + ')';var rsUpperMisc='(?:' + rsUpper + '|' + rsMisc + ')';var rsOptLowerContr='(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?';var rsOptUpperContr='(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?';var reOptMod=rsModifier + '?';var rsOptVar='[' + rsVarRange + ']?';var rsOptJoin='(?:' + rsZWJ + '(?:' + [rsNonAstral,rsRegional,rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*';var rsSeq=rsOptVar + reOptMod + rsOptJoin;var rsEmoji='(?:' + [rsDingbat,rsRegional,rsSurrPair].join('|') + ')' + rsSeq;var rsSymbol='(?:' + [rsNonAstral + rsCombo + '?',rsCombo,rsRegional,rsSurrPair,rsAstral].join('|') + ')'; /** Used to match apostrophes. */var reApos=RegExp(rsApos,'g'); /**
	 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
	 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
	 */var reComboMark=RegExp(rsCombo,'g'); /** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */var reUnicode=RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq,'g'); /** Used to match complex or compound words. */var reUnicodeWord=RegExp([rsUpper + '?' + rsLower + '+' + rsOptLowerContr + '(?=' + [rsBreak,rsUpper,'$'].join('|') + ')',rsUpperMisc + '+' + rsOptUpperContr + '(?=' + [rsBreak,rsUpper + rsLowerMisc,'$'].join('|') + ')',rsUpper + '?' + rsLowerMisc + '+' + rsOptLowerContr,rsUpper + '+' + rsOptUpperContr,rsDigits,rsEmoji].join('|'),'g'); /** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */var reHasUnicode=RegExp('[' + rsZWJ + rsAstralRange + rsComboMarksRange + rsComboSymbolsRange + rsVarRange + ']'); /** Used to detect strings that need a more robust regexp to match words. */var reHasUnicodeWord=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/; /** Used to map Latin Unicode letters to basic Latin letters. */var deburredLetters={ // Latin-1 Supplement block.
	'\xc0':'A','\xc1':'A','\xc2':'A','\xc3':'A','\xc4':'A','\xc5':'A','\xe0':'a','\xe1':'a','\xe2':'a','\xe3':'a','\xe4':'a','\xe5':'a','\xc7':'C','\xe7':'c','\xd0':'D','\xf0':'d','\xc8':'E','\xc9':'E','\xca':'E','\xcb':'E','\xe8':'e','\xe9':'e','\xea':'e','\xeb':'e','\xcc':'I','\xcd':'I','\xce':'I','\xcf':'I','\xec':'i','\xed':'i','\xee':'i','\xef':'i','\xd1':'N','\xf1':'n','\xd2':'O','\xd3':'O','\xd4':'O','\xd5':'O','\xd6':'O','\xd8':'O','\xf2':'o','\xf3':'o','\xf4':'o','\xf5':'o','\xf6':'o','\xf8':'o','\xd9':'U','\xda':'U','\xdb':'U','\xdc':'U','\xf9':'u','\xfa':'u','\xfb':'u','\xfc':'u','\xdd':'Y','\xfd':'y','\xff':'y','\xc6':'Ae','\xe6':'ae','\xde':'Th','\xfe':'th','\xdf':'ss', // Latin Extended-A block.
	'Ā':'A','Ă':'A','Ą':'A','ā':'a','ă':'a','ą':'a','Ć':'C','Ĉ':'C','Ċ':'C','Č':'C','ć':'c','ĉ':'c','ċ':'c','č':'c','Ď':'D','Đ':'D','ď':'d','đ':'d','Ē':'E','Ĕ':'E','Ė':'E','Ę':'E','Ě':'E','ē':'e','ĕ':'e','ė':'e','ę':'e','ě':'e','Ĝ':'G','Ğ':'G','Ġ':'G','Ģ':'G','ĝ':'g','ğ':'g','ġ':'g','ģ':'g','Ĥ':'H','Ħ':'H','ĥ':'h','ħ':'h','Ĩ':'I','Ī':'I','Ĭ':'I','Į':'I','İ':'I','ĩ':'i','ī':'i','ĭ':'i','į':'i','ı':'i','Ĵ':'J','ĵ':'j','Ķ':'K','ķ':'k','ĸ':'k','Ĺ':'L','Ļ':'L','Ľ':'L','Ŀ':'L','Ł':'L','ĺ':'l','ļ':'l','ľ':'l','ŀ':'l','ł':'l','Ń':'N','Ņ':'N','Ň':'N','Ŋ':'N','ń':'n','ņ':'n','ň':'n','ŋ':'n','Ō':'O','Ŏ':'O','Ő':'O','ō':'o','ŏ':'o','ő':'o','Ŕ':'R','Ŗ':'R','Ř':'R','ŕ':'r','ŗ':'r','ř':'r','Ś':'S','Ŝ':'S','Ş':'S','Š':'S','ś':'s','ŝ':'s','ş':'s','š':'s','Ţ':'T','Ť':'T','Ŧ':'T','ţ':'t','ť':'t','ŧ':'t','Ũ':'U','Ū':'U','Ŭ':'U','Ů':'U','Ű':'U','Ų':'U','ũ':'u','ū':'u','ŭ':'u','ů':'u','ű':'u','ų':'u','Ŵ':'W','ŵ':'w','Ŷ':'Y','ŷ':'y','Ÿ':'Y','Ź':'Z','Ż':'Z','Ž':'Z','ź':'z','ż':'z','ž':'z','Ĳ':'IJ','ĳ':'ij','Œ':'Oe','œ':'oe','ŉ':"'n",'ſ':'ss'}; /** Detect free variable `global` from Node.js. */var freeGlobal=_typeof(commonjsGlobal) == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal; /** Detect free variable `self`. */var freeSelf=(typeof self === 'undefined'?'undefined':_typeof(self)) == 'object' && self && self.Object === Object && self; /** Used as a reference to the global object. */var root=freeGlobal || freeSelf || Function('return this')(); /**
	 * A specialized version of `_.reduce` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {*} [accumulator] The initial value.
	 * @param {boolean} [initAccum] Specify using the first element of `array` as
	 *  the initial value.
	 * @returns {*} Returns the accumulated value.
	 */function arrayReduce(array,iteratee,accumulator,initAccum){var index=-1,length=array?array.length:0;if(initAccum && length){accumulator = array[++index];}while(++index < length) {accumulator = iteratee(accumulator,array[index],index,array);}return accumulator;} /**
	 * Converts an ASCII `string` to an array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the converted array.
	 */function asciiToArray(string){return string.split('');} /**
	 * Splits an ASCII `string` into an array of its words.
	 *
	 * @private
	 * @param {string} The string to inspect.
	 * @returns {Array} Returns the words of `string`.
	 */function asciiWords(string){return string.match(reAsciiWord) || [];} /**
	 * The base implementation of `_.propertyOf` without support for deep paths.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Function} Returns the new accessor function.
	 */function basePropertyOf(object){return function(key){return object == null?undefined:object[key];};} /**
	 * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
	 * letters to basic Latin letters.
	 *
	 * @private
	 * @param {string} letter The matched letter to deburr.
	 * @returns {string} Returns the deburred letter.
	 */var deburrLetter=basePropertyOf(deburredLetters); /**
	 * Checks if `string` contains Unicode symbols.
	 *
	 * @private
	 * @param {string} string The string to inspect.
	 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
	 */function hasUnicode(string){return reHasUnicode.test(string);} /**
	 * Checks if `string` contains a word composed of Unicode symbols.
	 *
	 * @private
	 * @param {string} string The string to inspect.
	 * @returns {boolean} Returns `true` if a word is found, else `false`.
	 */function hasUnicodeWord(string){return reHasUnicodeWord.test(string);} /**
	 * Converts `string` to an array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the converted array.
	 */function stringToArray(string){return hasUnicode(string)?unicodeToArray(string):asciiToArray(string);} /**
	 * Converts a Unicode `string` to an array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the converted array.
	 */function unicodeToArray(string){return string.match(reUnicode) || [];} /**
	 * Splits a Unicode `string` into an array of its words.
	 *
	 * @private
	 * @param {string} The string to inspect.
	 * @returns {Array} Returns the words of `string`.
	 */function unicodeWords(string){return string.match(reUnicodeWord) || [];} /** Used for built-in method references. */var objectProto=Object.prototype; /**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */var objectToString=objectProto.toString; /** Built-in value references. */var _Symbol=root.Symbol; /** Used to convert symbols to primitives and strings. */var symbolProto=_Symbol?_Symbol.prototype:undefined;var symbolToString=symbolProto?symbolProto.toString:undefined; /**
	 * The base implementation of `_.slice` without an iteratee call guard.
	 *
	 * @private
	 * @param {Array} array The array to slice.
	 * @param {number} [start=0] The start position.
	 * @param {number} [end=array.length] The end position.
	 * @returns {Array} Returns the slice of `array`.
	 */function baseSlice(array,start,end){var index=-1,length=array.length;if(start < 0){start = -start > length?0:length + start;}end = end > length?length:end;if(end < 0){end += length;}length = start > end?0:end - start >>> 0;start >>>= 0;var result=Array(length);while(++index < length) {result[index] = array[index + start];}return result;} /**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */function baseToString(value){ // Exit early for strings to avoid a performance hit in some environments.
	if(typeof value == 'string'){return value;}if(isSymbol(value)){return symbolToString?symbolToString.call(value):'';}var result=value + '';return result == '0' && 1 / value == -INFINITY?'-0':result;} /**
	 * Casts `array` to a slice if it's needed.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {number} start The start position.
	 * @param {number} [end=array.length] The end position.
	 * @returns {Array} Returns the cast slice.
	 */function castSlice(array,start,end){var length=array.length;end = end === undefined?length:end;return !start && end >= length?array:baseSlice(array,start,end);} /**
	 * Creates a function like `_.lowerFirst`.
	 *
	 * @private
	 * @param {string} methodName The name of the `String` case method to use.
	 * @returns {Function} Returns the new case function.
	 */function createCaseFirst(methodName){return function(string){string = toString$1(string);var strSymbols=hasUnicode(string)?stringToArray(string):undefined;var chr=strSymbols?strSymbols[0]:string.charAt(0);var trailing=strSymbols?castSlice(strSymbols,1).join(''):string.slice(1);return chr[methodName]() + trailing;};} /**
	 * Creates a function like `_.camelCase`.
	 *
	 * @private
	 * @param {Function} callback The function to combine each word.
	 * @returns {Function} Returns the new compounder function.
	 */function createCompounder(callback){return function(string){return arrayReduce(words(deburr(string).replace(reApos,'')),callback,'');};} /**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */function isObjectLike(value){return !!value && (typeof value === 'undefined'?'undefined':_typeof(value)) == 'object';} /**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */function isSymbol(value){return (typeof value === 'undefined'?'undefined':_typeof(value)) == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;} /**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */function toString$1(value){return value == null?'':baseToString(value);} /**
	 * Deburrs `string` by converting
	 * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
	 * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
	 * letters to basic Latin letters and removing
	 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category String
	 * @param {string} [string=''] The string to deburr.
	 * @returns {string} Returns the deburred string.
	 * @example
	 *
	 * _.deburr('déjà vu');
	 * // => 'deja vu'
	 */function deburr(string){string = toString$1(string);return string && string.replace(reLatin,deburrLetter).replace(reComboMark,'');} /**
	 * Converts `string` to
	 * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
	 *
	 * @static
	 * @memberOf _
	 * @since 3.1.0
	 * @category String
	 * @param {string} [string=''] The string to convert.
	 * @returns {string} Returns the start cased string.
	 * @example
	 *
	 * _.startCase('--foo-bar--');
	 * // => 'Foo Bar'
	 *
	 * _.startCase('fooBar');
	 * // => 'Foo Bar'
	 *
	 * _.startCase('__FOO_BAR__');
	 * // => 'FOO BAR'
	 */var startCase=createCompounder(function(result,word,index){return result + (index?' ':'') + upperFirst$1(word);}); /**
	 * Converts the first character of `string` to upper case.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category String
	 * @param {string} [string=''] The string to convert.
	 * @returns {string} Returns the converted string.
	 * @example
	 *
	 * _.upperFirst('fred');
	 * // => 'Fred'
	 *
	 * _.upperFirst('FRED');
	 * // => 'FRED'
	 */var upperFirst$1=createCaseFirst('toUpperCase'); /**
	 * Splits `string` into an array of its words.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category String
	 * @param {string} [string=''] The string to inspect.
	 * @param {RegExp|string} [pattern] The pattern to match words.
	 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	 * @returns {Array} Returns the words of `string`.
	 * @example
	 *
	 * _.words('fred, barney, & pebbles');
	 * // => ['fred', 'barney', 'pebbles']
	 *
	 * _.words('fred, barney, & pebbles', /[^, ]+/g);
	 * // => ['fred', 'barney', '&', 'pebbles']
	 */function words(string,pattern,guard){string = toString$1(string);pattern = guard?undefined:pattern;if(pattern === undefined){return hasUnicodeWord(string)?unicodeWords(string):asciiWords(string);}return string.match(pattern) || [];}var lodash_startcase=startCase;function toString(v){if(!v){return '';}if(v instanceof Object){return keys(v).map(function(k){return toString(v[k]);}).join(' ');}return String(v);}function recToString(obj){if(!(obj instanceof Object)){return '';}return toString(keys(obj).reduce(function(o,k){ // Ignore fields that start with _
	if(!/^_/.test(k)){o[k] = obj[k];}return o;},{}));}function defaultSortCompare(a,b,sortBy){if(typeof a[sortBy] === 'number' && typeof b[sortBy] === 'number'){return a[sortBy] < b[sortBy] && -1 || a[sortBy] > b[sortBy] && 1 || 0;}return toString(a[sortBy]).localeCompare(toString(b[sortBy]),undefined,{numeric:true});}function processField(key,value){var field=null;if(typeof value === 'string'){ // Label shortcut
	field = {key:key,label:value};}else if(typeof value === 'function'){ // Formatter shortcut
	field = {key:key,formatter:value};}else if((typeof value === 'undefined'?'undefined':_typeof(value)) === 'object'){field = assign({},value);field.key = field.key || key;}else if(value !== false){ // Fallback to just key
	field = {key:key};}return field;}var bTable$2={mixins:[idMixin,listenOnRootMixin],render:function render(h){var t=this;var $slots=t.$slots;var $scoped=t.$scopedSlots;var fields=t.computedFields;var items=t.computedItems; // Build the caption
	var caption=h(false);if(t.caption || $slots['table-caption']){var data={style:t.captionStyles};if(!$slots['table-caption']){data.domProps = {innerHTML:t.caption};}caption = h('caption',data,$slots['table-caption']);} // Build the colgroup
	var colgroup=$slots['table-colgroup']?h('colgroup',{},$slots['table-colgroup']):h(false); // factory function for thead and tfoot cells (th's)
	var makeHeadCells=function makeHeadCells(){var isFoot=arguments.length > 0 && arguments[0] !== undefined?arguments[0]:false;return fields.map(function(field,colIndex){var data={key:field.key,'class':t.fieldClasses(field),style:field.thStyle || {},attrs:{'tabindex':field.sortable?'0':null,'abbr':field.headerAbbr || null,'title':field.headerTitle || null,'aria-colindex':String(colIndex + 1),'aria-label':field.sortable?t.localSortDesc && t.localSortBy === field.key?t.labelSortAsc:t.labelSortDesc:null,'aria-sort':field.sortable && t.localSortBy === field.key?t.localSortDesc?'descending':'ascending':null},on:{click:function click(evt){evt.stopPropagation();evt.preventDefault();t.headClicked(evt,field);},keydown:function keydown(evt){var keyCode=evt.keyCode;if(keyCode === KeyCodes.ENTER || keyCode === KeyCodes.SPACE){evt.stopPropagation();evt.preventDefault();t.headClicked(evt,field);}}}};var slot=isFoot && $scoped['FOOT_' + field.key]?$scoped['FOOT_' + field.key]:$scoped['HEAD_' + field.key];if(slot){slot = [slot({label:field.label,column:field.key,field:field})];}else {data.domProps = {innerHTML:field.label};}return h('th',data,slot);});}; // Build the thead
	var thead=h(false);if(t.isStacked !== true){ // If in always stacked mode (t.isStacked === true), then we don't bother rendering the thead
	thead = h('thead',{'class':t.headClasses},[h('tr',{'class':t.theadTrClass},makeHeadCells(false))]);} // Build the tfoot
	var tfoot=h(false);if(t.footClone && t.isStacked !== true){ // If in always stacked mode (t.isStacked === true), then we don't bother rendering the tfoot
	tfoot = h('tfoot',{'class':t.footClasses},[h('tr',{'class':t.tfootTrClass},makeHeadCells(true))]);} // Prepare the tbody rows
	var rows=[]; // Add static Top Row slot (hidden in visibly stacked mode as we can't control the data-label)
	// If in always stacked mode, we don't bother rendering the row
	if($scoped['top-row'] && t.isStacked !== true){rows.push(h('tr',{key:'top-row','class':['b-table-top-row',t.tbodyTrClass]},[$scoped['top-row']({columns:fields.length,fields:fields})]));}else {rows.push(h(false));} // Add the item data rows
	items.forEach(function(item,rowIndex){var detailsSlot=$scoped['row-details'];var rowShowDetails=Boolean(item._showDetails && detailsSlot);var detailsId=rowShowDetails?t.safeId('_details_' + rowIndex + '_'):null;var toggleDetailsFn=function toggleDetailsFn(){if(detailsSlot){t.$set(item,'_showDetails',!item._showDetails);}}; // For each item data field in row
	var tds=fields.map(function(field,colIndex){var data={key:'row-' + rowIndex + '-cell-' + colIndex,'class':t.tdClasses(field,item),attrs:field.tdAttr || {},domProps:{}};data.attrs['aria-colindex'] = String(colIndex + 1);var childNodes=void 0;if($scoped[field.key]){childNodes = [$scoped[field.key]({item:item,index:rowIndex,unformatted:item[field.key],value:t.getFormattedValue(item,field),toggleDetails:toggleDetailsFn,detailsShowing:Boolean(item._showDetails)})];if(t.isStacked){ // We wrap in a DIV to ensure rendered as a single cell when visually stacked!
	childNodes = [h('div',{},[childNodes])];}}else {var formatted=t.getFormattedValue(item,field);if(t.isStacked){ // We innerHTML a DIV to ensure rendered as a single cell when visually stacked!
	childNodes = [h('div',{domProps:{innerHTML:formatted}})];}else { // Non stcaked, so we just innerHTML the td
	data.domProps['innerHTML'] = formatted;}}if(t.isStacked){ // Generate the "header cell" label content in stacked mode
	data.attrs['data-label'] = field.label;if(field.isRowHeader){data.attrs['role'] = 'rowheader';}else {data.attrs['role'] = 'cell';}} // Render either a td or th cell
	return h(field.isRowHeader?'th':'td',data,childNodes);}); // Calculate the row number in the dataset (indexed from 1)
	var ariaRowIndex=null;if(t.currentPage && t.perPage && t.perPage > 0){ariaRowIndex = (t.currentPage - 1) * t.perPage + rowIndex + 1;} // Assemble and add the row
	rows.push(h('tr',{key:'row-' + rowIndex,'class':[t.rowClasses(item),{'b-table-has-details':rowShowDetails}],attrs:{'aria-describedby':detailsId,'aria-rowindex':ariaRowIndex,role:t.isStacked?'row':null},on:{click:function click(evt){t.rowClicked(evt,item,rowIndex);},dblclick:function dblclick(evt){t.rowDblClicked(evt,item,rowIndex);},mouseenter:function mouseenter(evt){t.rowHovered(evt,item,rowIndex);}}},tds)); // Row Details slot
	if(rowShowDetails){var tdAttrs={colspan:String(fields.length)};var trAttrs={id:detailsId};if(t.isStacked){tdAttrs['role'] = 'cell';trAttrs['role'] = 'row';}var details=h('td',{attrs:tdAttrs},[detailsSlot({item:item,index:rowIndex,fields:fields,toggleDetails:toggleDetailsFn})]);rows.push(h('tr',{key:'details-' + rowIndex,'class':['b-table-details',t.tbodyTrClass],attrs:trAttrs},[details]));}else if(detailsSlot){ // Only add the placeholder if a the table has a row-details slot defined (but not shown)
	rows.push(h(false));}}); // Empty Items / Empty Filtered Row slot
	if(t.showEmpty && (!items || items.length === 0)){var empty=t.filter?$slots['emptyfiltered']:$slots['empty'];if(!empty){empty = h('div',{'class':['text-center','my-2'],domProps:{innerHTML:t.filter?t.emptyFilteredText:t.emptyText}});}empty = h('td',{attrs:{colspan:String(fields.length),role:t.isStacked?'cell':null}},[h('div',{attrs:{role:'alert','aria-live':'polite'}},[empty])]);rows.push(h('tr',{key:'empty-row','class':['b-table-empty-row',t.tbodyTrClass],attrs:t.isStacked?{role:'row'}:{}},[empty]));}else {rows.push(h(false));} // Static bottom row slot (hidden in visibly stacked mode as we can't control the data-label)
	// If in always stacked mode, we don't bother rendering the row
	if($scoped['bottom-row'] && t.isStacked !== true){rows.push(h('tr',{key:'bottom-row','class':['b-table-bottom-row',t.tbodyTrClass]},[$scoped['bottom-row']({columns:fields.length,fields:fields})]));}else {rows.push(h(false));} // Assemble the rows into the tbody
	var tbody=h('tbody',{'class':t.bodyClasses,attrs:t.isStacked?{role:'rowgroup'}:{}},rows); // Return the assembled table
	return h('table',{'class':t.tableClasses,attrs:{id:t.safeId(),role:t.isStacked?'table':null,'aria-busy':t.computedBusy?'true':'false','aria-colcount':String(fields.length),'aria-rowcount':t.$attrs['aria-rowcount'] || t.perPage && t.perPage > 0?'-1':null}},[caption,colgroup,thead,tfoot,tbody]);},data:function data(){return {localSortBy:this.sortBy || '',localSortDesc:this.sortDesc || false,localItems:[], // Note: filteredItems only used to determine if # of items changed
	filteredItems:[],localBusy:false};},props:{items:{type:[Array,Function],'default':function _default(){return [];}},fields:{type:[Object,Array],'default':null},sortBy:{type:String,'default':null},sortDesc:{type:Boolean,'default':false},caption:{type:String,'default':null},captionTop:{type:Boolean,'default':false},striped:{type:Boolean,'default':false},bordered:{type:Boolean,'default':false},outlined:{type:Boolean,'default':false},dark:{type:Boolean,'default':function _default(){if(this && typeof this.inverse === 'boolean'){ // Deprecate inverse
	warn("b-table: prop 'inverse' has been deprecated. Use 'dark' instead");return this.dark;}return false;}},inverse:{ // Deprecated in v1.0.0 in favor of `dark`
	type:Boolean,'default':null},hover:{type:Boolean,'default':false},small:{type:Boolean,'default':false},fixed:{type:Boolean,'default':false},footClone:{type:Boolean,'default':false},responsive:{type:[Boolean,String],'default':false},stacked:{type:[Boolean,String],'default':false},headVariant:{type:String,'default':''},footVariant:{type:String,'default':''},theadClass:{type:[String,Array],'default':null},theadTrClass:{type:[String,Array],'default':null},tbodyClass:{type:[String,Array],'default':null},tbodyTrClass:{type:[String,Array],'default':null},tfootClass:{type:[String,Array],'default':null},tfootTrClass:{type:[String,Array],'default':null},perPage:{type:Number,'default':0},currentPage:{type:Number,'default':1},filter:{type:[String,RegExp,Function],'default':null},sortCompare:{type:Function,'default':null},noLocalSorting:{type:Boolean,'default':false},noProviderPaging:{type:Boolean,'default':false},noProviderSorting:{type:Boolean,'default':false},noProviderFiltering:{type:Boolean,'default':false},busy:{type:Boolean,'default':false},value:{type:Array,'default':function _default(){return [];}},labelSortAsc:{type:String,'default':'Click to sort Ascending'},labelSortDesc:{type:String,'default':'Click to sort Descending'},showEmpty:{type:Boolean,'default':false},emptyText:{type:String,'default':'There are no records to show'},emptyFilteredText:{type:String,'default':'There are no records matching your request'},apiUrl:{ // Passthrough prop. Passed to the context object. Not used by b-table directly
	type:String,'default':''}},watch:{items:function items(newVal,oldVal){if(oldVal !== newVal){this._providerUpdate();}},context:function context(newVal,oldVal){if(!looseEqual(newVal,oldVal)){this.$emit('context-changed',newVal);}},filteredItems:function filteredItems(newVal,oldVal){if(this.localFiltering && newVal.length !== oldVal.length){ // Emit a filtered notification event, as number of filtered items has changed
	this.$emit('filtered',newVal);}},sortDesc:function sortDesc(newVal,oldVal){if(newVal === this.localSortDesc){return;}this.localSortDesc = newVal || false;},localSortDesc:function localSortDesc(newVal,oldVal){ // Emit update to sort-desc.sync
	if(newVal !== oldVal){this.$emit('update:sortDesc',newVal);if(!this.noProviderSorting){this._providerUpdate();}}},sortBy:function sortBy(newVal,oldVal){if(newVal === this.localSortBy){return;}this.localSortBy = newVal || null;},localSortBy:function localSortBy(newVal,oldVal){if(newVal !== oldVal){this.$emit('update:sortBy',newVal);if(!this.noProviderSorting){this._providerUpdate();}}},perPage:function perPage(newVal,oldVal){if(oldVal !== newVal && !this.noProviderPaging){this._providerUpdate();}},currentPage:function currentPage(newVal,oldVal){if(oldVal !== newVal && !this.noProviderPaging){this._providerUpdate();}},filter:function filter(newVal,oldVal){if(oldVal !== newVal && !this.noProviderFiltering){this._providerUpdate();}},localBusy:function localBusy(newVal,oldVal){if(newVal !== oldVal){this.$emit('update:busy',newVal);}}},mounted:function mounted(){var _this=this;this.localSortBy = this.sortBy;this.localSortDesc = this.sortDesc;if(this.hasProvider){this._providerUpdate();}this.listenOnRoot('bv::refresh::table',function(id){if(id === _this.id || id === _this){_this._providerUpdate();}});},computed:{isStacked:function isStacked(){return this.stacked === ''?true:this.stacked;},isResponsive:function isResponsive(){var responsive=this.responsive === ''?true:this.responsive;return this.isStacked?false:responsive;},tableClasses:function tableClasses(){return ['table','b-table',this.striped?'table-striped':'',this.hover?'table-hover':'',this.dark?'table-dark':'',this.bordered?'table-bordered':'',this.small?'table-sm':'',this.outlined?'border':'',this.fixed?'b-table-fixed':'',this.isResponsive === true?'table-responsive':this.isResponsive?'table-responsive-' + this.responsive:'',this.isStacked === true?'b-table-stacked':this.isStacked?'b-table-stacked-' + this.stacked:''];},headClasses:function headClasses(){return [this.headVariant?'thead-' + this.headVariant:'',this.theadClass];},bodyClasses:function bodyClasses(){return [this.tbodyClass];},footClasses:function footClasses(){var variant=this.footVariant || this.headVariant || null;return [variant?'thead-' + variant:'',this.tfootClass];},captionStyles:function captionStyles(){ // Move caption to top
	return this.captionTop?{captionSide:'top'}:{};},hasProvider:function hasProvider(){return this.items instanceof Function;},localFiltering:function localFiltering(){return this.hasProvider?this.noProviderFiltering:true;},localSorting:function localSorting(){return this.hasProvider?this.noProviderSorting:!this.noLocalSorting;},localPaging:function localPaging(){return this.hasProvider?this.noProviderPaging:true;},context:function context(){return {perPage:this.perPage,currentPage:this.currentPage,filter:this.filter,sortBy:this.localSortBy,sortDesc:this.localSortDesc,apiUrl:this.apiUrl};},computedFields:function computedFields(){var _this2=this; // We normalize fields into an array of objects
	// [ { key:..., label:..., ...}, {...}, ..., {..}]
	var fields=[];if(isArray(this.fields)){ // Normalize array Form
	this.fields.filter(function(f){return f;}).forEach(function(f){if(typeof f === 'string'){fields.push({key:f,label:lodash_startcase(f)});}else if((typeof f === 'undefined'?'undefined':_typeof(f)) === 'object' && f.key && typeof f.key === 'string'){ // Full object definition. We use assign so that we don't mutate the original
	fields.push(assign({},f));}else if((typeof f === 'undefined'?'undefined':_typeof(f)) === 'object' && keys(f).length === 1){ // Shortcut object (i.e. { 'foo_bar': 'This is Foo Bar' }
	var key=keys(f)[0];var field=processField(key,f[key]);if(field){fields.push(field);}}});}else if(this.fields && _typeof(this.fields) === 'object' && keys(this.fields).length > 0){ // Normalize object Form
	keys(this.fields).forEach(function(key){var field=processField(key,_this2.fields[key]);if(field){fields.push(field);}});} // If no field provided, take a sample from first record (if exits)
	if(fields.length === 0 && this.computedItems.length > 0){var sample=this.computedItems[0];keys(sample).forEach(function(k){fields.push({key:k,label:lodash_startcase(k)});});} // Ensure we have a unique array of fields and that they have labels
	var memo={};return fields.filter(function(f){if(!memo[f.key]){memo[f.key] = true;f.label = f.label || lodash_startcase(f.key);return true;}return false;});},computedItems:function computedItems(){ // Grab some props/data to ensure reactivity
	var perPage=this.perPage;var currentPage=this.currentPage;var filter=this.filter;var sortBy=this.localSortBy;var sortDesc=this.localSortDesc;var sortCompare=this.sortCompare;var localFiltering=this.localFiltering;var localSorting=this.localSorting;var localPaging=this.localPaging;var items=this.hasProvider?this.localItems:this.items;if(!items){this.$nextTick(this._providerUpdate);return [];} // Array copy for sorting, filtering, etc.
	items = items.slice(); // Apply local filter
	if(filter && localFiltering){if(filter instanceof Function){items = items.filter(filter);}else {var regex=void 0;if(filter instanceof RegExp){regex = filter;}else {regex = new RegExp('.*' + filter + '.*','ig');}items = items.filter(function(item){var test=regex.test(recToString(item));regex.lastIndex = 0;return test;});}}if(localFiltering){ // Make a local copy of filtered items to trigger filtered event
	this.filteredItems = items.slice();} // Apply local Sort
	if(sortBy && localSorting){items = stableSort(items,function sortItemsFn(a,b){var ret=null;if(typeof sortCompare === 'function'){ // Call user provided sortCompare routine
	ret = sortCompare(a,b,sortBy);}if(ret === null || ret === undefined){ // Fallback to defaultSortCompare if sortCompare not defined or returns null
	ret = defaultSortCompare(a,b,sortBy);} // Handle sorting direction
	return (ret || 0) * (sortDesc?-1:1);});} // Apply local pagination
	if(Boolean(perPage) && localPaging){ // Grab the current page of data (which may be past filtered items)
	items = items.slice((currentPage - 1) * perPage,currentPage * perPage);} // Update the value model with the filtered/sorted/paginated data set
	this.$emit('input',items);return items;},computedBusy:function computedBusy(){return this.busy || this.localBusy;}},methods:{keys:keys,fieldClasses:function fieldClasses(field){return [field.sortable?'sorting':'',field.sortable && this.localSortBy === field.key?'sorting_' + (this.localSortDesc?'desc':'asc'):'',field.variant?'table-' + field.variant:'',field['class']?field['class']:'',field.thClass?field.thClass:''];},tdClasses:function tdClasses(field,item){var cellVariant='';if(item._cellVariants && item._cellVariants[field.key]){cellVariant = (this.dark?'bg':'table') + '-' + item._cellVariants[field.key];}return [field.variant && !cellVariant?(this.dark?'bg':'table') + '-' + field.variant:'',cellVariant,field['class']?field['class']:'',field.tdClass?field.tdClass:''];},rowClasses:function rowClasses(item){return [item._rowVariant?(this.dark?'bg':'table') + '-' + item._rowVariant:'',this.tbodyTrClass];},rowClicked:function rowClicked(e,item,index){if(this.stopIfBusy(e)){ // If table is busy (via provider) then don't propagate
	return;}this.$emit('row-clicked',item,index,e);},rowDblClicked:function rowDblClicked(e,item,index){if(this.stopIfBusy(e)){ // If table is busy (via provider) then don't propagate
	return;}this.$emit('row-dblclicked',item,index,e);},rowHovered:function rowHovered(e,item,index){if(this.stopIfBusy(e)){ // If table is busy (via provider) then don't propagate
	return;}this.$emit('row-hovered',item,index,e);},headClicked:function headClicked(e,field){if(this.stopIfBusy(e)){ // If table is busy (via provider) then don't propagate
	return;}var sortChanged=false;if(field.sortable){if(field.key === this.localSortBy){ // Change sorting direction on current column
	this.localSortDesc = !this.localSortDesc;}else { // Start sorting this column ascending
	this.localSortBy = field.key;this.localSortDesc = false;}sortChanged = true;}else if(this.localSortBy){this.localSortBy = null;this.localSortDesc = false;sortChanged = true;}this.$emit('head-clicked',field.key,field,e);if(sortChanged){ // Sorting parameters changed
	this.$emit('sort-changed',this.context);}},stopIfBusy:function stopIfBusy(evt){if(this.computedBusy){ // If table is busy (via provider) then don't propagate
	evt.preventDefault();evt.stopPropagation();return true;}return false;},refresh:function refresh(){ // Expose refresh method
	if(this.hasProvider){this._providerUpdate();}},_providerSetLocal:function _providerSetLocal(items){this.localItems = items && items.length > 0?items.slice():[];this.localBusy = false;this.$emit('refreshed'); // Deprecated root emit
	this.emitOnRoot('table::refreshed',this.id); // New root emit
	if(this.id){this.emitOnRoot('bv::table::refreshed',this.id);}},_providerUpdate:function _providerUpdate(){var _this3=this; // Refresh the provider items
	if(this.computedBusy || !this.hasProvider){ // Don't refresh remote data if we are 'busy' or if no provider
	return;} // Set internal busy state
	this.localBusy = true; // Call provider function with context and optional callback
	var data=this.items(this.context,this._providerSetLocal);if(data && data.then && typeof data.then === 'function'){ // Provider returned Promise
	data.then(function(items){_this3._providerSetLocal(items);});}else { // Provider returned Array data
	this._providerSetLocal(data);}},getFormattedValue:function getFormattedValue(item,field){var key=field.key;var formatter=field.formatter;var parent=this.$parent;var value=item[key];if(formatter){if(typeof formatter === 'function'){value = formatter(value,key,item);}else if(typeof formatter === 'string' && typeof parent[formatter] === 'function'){value = parent[formatter](value,key,item);}}return value;}}}; /* eslint-disable no-var, no-undef, guard-for-in, object-shorthand */var components$34={bTable:bTable$2};var VuePlugin$67={install:function install(Vue){registerComponents(Vue,components$34);}};vueUse(VuePlugin$67); // Helper component
	var bTabButtonHelper={name:'bTabButtonHelper',props:{content:{type:String,'default':''},href:{type:String,'default':'#'},posInSet:{type:Number,'default':null},setSize:{type:Number,'default':null},controls:{type:String,'default':null},id:{type:String,'default':null},active:{type:Boolean,'default':false},disabled:{type:Boolean,'default':false},linkClass:{'default':null},itemClass:{'default':null}},render:function render(h){var t=this;var link=h('a',{'class':['nav-link',{active:t.active,disabled:t.disabled},t.linkClass],attrs:{role:'tab',tabindex:'-1',href:t.href,id:t.id,disabled:t.disabled,'aria-selected':t.active?'true':'false','aria-setsize':t.setSize,'aria-posinset':t.posInSet,'aria-controls':t.controls},domProps:{innerHTML:t.content},on:{click:t.handleClick,keydown:t.handleClick}});return h('li',{'class':['nav-item',t.itemClass],attrs:{role:'presentation'}},[link]);},methods:{handleClick:function handleClick(evt){function stop(){evt.preventDefault();evt.stopPropagation();}if(this.disabled){stop();return;}if(evt.type === 'click' || evt.keyCode === KeyCodes.ENTER || evt.keyCode === KeyCodes.SPACE){stop();this.$emit('click',evt);}}}};var bTabs={mixins:[idMixin],render:function render(h){var _ref;var t=this;var tabs=this.tabs; // Navigation 'buttons'
	var buttons=tabs.map(function(tab,index){return h(bTabButtonHelper,{key:index,props:{content:tab.headHtml || tab.title,href:tab.href,id:tab.controlledBy || t.safeId('_BV_tab_' + (index + 1) + '_'),active:tab.localActive,disabled:tab.disabled,setSize:tabs.length,posInSet:index + 1,controls:t.safeId('_BV_tab_container_'),linkClass:tab.titleLinkClass,itemClass:tab.titleItemClass},on:{click:function click(evt){t.setTab(index);}}});}); // Nav 'button' wrapper
	var navs=h('ul',{'class':['nav','nav-' + t.navStyle,(_ref = {},defineProperty$1(_ref,'card-header-' + t.navStyle,t.card && !t.vertical),defineProperty$1(_ref,'card-header',t.card && t.vertical),defineProperty$1(_ref,'h-100',t.card && t.vertical),defineProperty$1(_ref,'flex-column',t.vertical),defineProperty$1(_ref,'border-bottom-0',t.vertical),defineProperty$1(_ref,'rounded-0',t.vertical),defineProperty$1(_ref,'small',t.small),_ref),t.navClass],attrs:{role:'tablist',tabindex:'0',id:t.safeId('_BV_tab_controls_')},on:{keydown:t.onKeynav}},[buttons,t.$slots.tabs]);navs = h('div',{'class':[{'card-header':t.card && !t.vertical && !(t.end || t.bottom),'card-footer':t.card && !t.vertical && (t.end || t.bottom),'col-auto':t.vertical},t.navWrapperClass]},[navs]);var empty=void 0;if(tabs && tabs.length){empty = h(false);}else {empty = h('div',{'class':['tab-pane','active',{'card-body':t.card}]},t.$slots.empty);} // Main content section
	var content=h('div',{ref:'tabsContainer','class':['tab-content',{'col':t.vertical},t.contentClass],attrs:{id:t.safeId('_BV_tab_container_')}},[t.$slots['default'],empty]); // Render final output
	return h(t.tag,{'class':['tabs',{'row':t.vertical,'no-gutters':t.vertical && t.card}],attrs:{id:t.safeId()}},[t.end || t.bottom?content:h(false),[navs],t.end || t.bottom?h(false):content]);},data:function data(){return {currentTab:this.value,tabs:[]};},props:{tag:{type:String,'default':'div'},card:{type:Boolean,'default':false},small:{type:Boolean,'default':false},value:{type:Number,'default':null},pills:{type:Boolean,'default':false},vertical:{type:Boolean,'default':false},bottom:{type:Boolean,'default':false},end:{ // Synonym for 'bottom'
	type:Boolean,'default':false},noFade:{type:Boolean,'default':false},lazy:{ // This prop is sniffed by the tab child
	type:Boolean,'default':false},contentClass:{type:[String,Array,Object],'default':null},navClass:{type:[String,Array,Object],'default':null},navWrapperClass:{type:[String,Array,Object],'default':null}},watch:{currentTab:function currentTab(val,old){if(val === old){return;}this.$root.$emit('changed::tab',this,val,this.tabs[val]);this.$emit('input',val);this.tabs[val].$emit('click');},value:function value(val,old){if(val === old){return;}if(typeof old !== 'number'){old = 0;} // Moving left or right?
	var direction=val < old?-1:1;this.setTab(val,false,direction);}},computed:{fade:function fade(){ // This computed prop is sniffed by the tab child
	return !this.noFade;},navStyle:function navStyle(){return this.pills?'pills':'tabs';}},methods:{ /**
	         * Util: Return the sign of a number (as -1, 0, or 1)
	         */sign:function sign(x){return x === 0?0:x > 0?1:-1;}, /*
	         * handle keyboard navigation
	         */onKeynav:function onKeynav(evt){var key=evt.keyCode;var shift=evt.shiftKey;function stop(){evt.preventDefault();evt.stopPropagation();}if(key === KeyCodes.UP || key === KeyCodes.LEFT){stop();if(shift){this.setTab(0,false,1);}else {this.previousTab();}}else if(key === KeyCodes.DWON || key === KeyCodes.RIGHT){stop();if(shift){this.setTab(this.tabs.length - 1,false,-1);}else {this.nextTab();}}}, /**
	         * Move to next tab
	         */nextTab:function nextTab(){this.setTab(this.currentTab + 1,false,1);}, /**
	         * Move to previous tab
	         */previousTab:function previousTab(){this.setTab(this.currentTab - 1,false,-1);}, /**
	         * Set active tab on the tabs collection and the child 'tab' component
	         * Index is the tab we want to activate. Direction is the direction we are moving
	         * so if the tab we requested is disabled, we can skip over it.
	         * Force is used by updateTabs to ensure we have cleared any previous active tabs.
	         */setTab:function setTab(index,force,direction){var _this=this;direction = this.sign(direction || 0);index = index || 0; // Prevent setting same tab and infinite loops!
	if(!force && index === this.currentTab){return;}var tab=this.tabs[index]; // Don't go beyond indexes!
	if(!tab){ // Reset the v-model to the current Tab
	this.$emit('input',this.currentTab);return;} // Ignore or Skip disabled
	if(tab.disabled){if(direction){ // Skip to next non disabled tab in specified direction (recursive)
	this.setTab(index + direction,force,direction);}return;} // Activate requested current tab, and deactivte any old tabs
	this.tabs.forEach(function(t){if(t === tab){ // Set new tab as active
	_this.$set(t,'localActive',true);}else { // Ensure non current tabs are not active
	_this.$set(t,'localActive',false);}}); // Update currentTab
	this.currentTab = index;}, /**
	         * Dynamically update tabs list
	         */updateTabs:function updateTabs(){ // Probe tabs
	this.tabs = this.$children.filter(function(child){return child._isTab;}); // Set initial active tab
	var tabIndex=null; // Find *last* active non-dsabled tab in current tabs
	// We trust tab state over currentTab
	this.tabs.forEach(function(tab,index){if(tab.localActive && !tab.disabled){tabIndex = index;}}); // Else try setting to currentTab
	if(tabIndex === null){if(this.currentTab >= this.tabs.length){ // Handle last tab being removed
	this.setTab(this.tabs.length - 1,true,-1);return;}else if(this.tabs[this.currentTab] && !this.tabs[this.currentTab].disabled){tabIndex = this.currentTab;}} // Else find *first* non-disabled tab in current tabs
	if(tabIndex === null){this.tabs.forEach(function(tab,index){if(!tab.disabled && tabIndex === null){tabIndex = index;}});}this.setTab(tabIndex || 0,true,0);}},mounted:function mounted(){this.updateTabs(); // Observe Child changes so we can notify tabs change
	observeDOM(this.$refs.tabsContainer,this.updateTabs.bind(this),{subtree:false});}};var bTab={mixins:[idMixin],render:function render(h){var t=this;var content=h(false);if(t.localActive || !this.computedLazy){content = h(t.tag,{ref:'panel','class':t.tabClasses,directives:[{name:'show',value:t.localActive}],attrs:{role:'tabpanel',id:t.safeId(),'aria-hidden':t.localActive?'false':'true','aria-expanded':t.localActive?'true':'false','aria-lablelledby':t.controlledBy || null}},[t.$slots['default']]);}return h('transition',{props:{mode:'out-in'},on:{beforeEnter:t.beforeEnter,afterEnter:t.afterEnter,afterLeave:t.afterLeave}},[content]);},methods:{beforeEnter:function beforeEnter(){this.show = false;},afterEnter:function afterEnter(){this.show = true;},afterLeave:function afterLeave(){this.show = false;}},data:function data(){return {localActive:this.active && !this.disabled,show:false};},mounted:function mounted(){this.show = this.localActive;},computed:{tabClasses:function tabClasses(){return ['tab-pane',this.$parent && this.$parent.card && !this.noBody?'card-body':'',this.show?'show':'',this.computedFade?'fade':'',this.disabled?'disabled':'',this.localActive?'active':''];},controlledBy:function controlledBy(){return this.buttonId || this.safeId('__BV_tab_button__');},computedFade:function computedFade(){return this.$parent.fade;},computedLazy:function computedLazy(){return this.$parent.lazy;},_isTab:function _isTab(){ // For parent sniffing of child
	return true;}},props:{active:{type:Boolean,'default':false},tag:{type:String,'default':'div'},buttonId:{type:String,'default':''},title:{type:String,'default':''},titleItemClass:{ // Sniffed by tabs.vue and added to nav 'li.nav-item'
	type:[String,Array,Object],'default':null},titleLinkClass:{ // Sniffed by tabs.vue and added to nav 'a.nav-link'
	type:[String,Array,Object],'default':null},headHtml:{ // Is this actually ever used?
	type:String,'default':null},disabled:{type:Boolean,'default':false},noBody:{type:Boolean,'default':false},href:{type:String,'default':'#'}}}; /* eslint-disable no-var, no-undef, guard-for-in, object-shorthand */var components$35={bTabs:bTabs,bTab:bTab};var VuePlugin$69={install:function install(Vue){registerComponents(Vue,components$35);}};vueUse(VuePlugin$69);var bTooltip={mixins:[toolpopMixin],render:function render(h){return h('div',{'class':['d-none'],style:{display:'none'},attrs:{'aria-hidden':true}},[h('div',{ref:'title'},this.$slots['default'])]);},data:function data(){return {};},props:{title:{type:String,'default':''},triggers:{type:[String,Array],'default':'hover focus'},placement:{type:String,'default':'top'}},methods:{createToolpop:function createToolpop(){ // getTarget is in toolpop mixin
	var target=this.getTarget();if(target){this._toolpop = new ToolTip(target,this.getConfig(),this.$root);}else {this._toolpop = null;warn("b-tooltip: 'target' element not found!");}return this._toolpop;}}}; /* eslint-disable no-var, no-undef, guard-for-in, object-shorthand */var components$36={bTooltip:bTooltip};var VuePlugin$71={install:function install(Vue){registerComponents(Vue,components$36);}};vueUse(VuePlugin$71);var components=Object.freeze({Alert:VuePlugin$2,Badge:VuePlugin$4,Breadcrumb:VuePlugin$6,Button:VuePlugin$8,ButtonToolbar:VuePlugin$12,ButtonGroup:VuePlugin$10,Card:VuePlugin$16,Carousel:VuePlugin$18,Collapse:VuePlugin$22,Dropdown:VuePlugin$24,Embed:VuePlugin$25,Form:VuePlugin$27,FormGroup:VuePlugin$29,FormInput:VuePlugin$35,FormTextarea:VuePlugin$37,FormFile:VuePlugin$39,FormCheckbox:VuePlugin$31,FormRadio:VuePlugin$33,FormSelect:VuePlugin$41,Image:VuePlugin$43,InputGroup:VuePlugin$14,Jumbotron:VuePlugin$45,Layout:VuePlugin$20,Link:VuePlugin$47,ListGroup:VuePlugin$49,Media:VuePlugin$51,Modal:VuePlugin$53,Nav:VuePlugin$56,Navbar:VuePlugin$57,Pagination:VuePlugin$59,PaginationNav:VuePlugin$61,Popover:VuePlugin$63,Progress:VuePlugin$65,Table:VuePlugin$67,Tabs:VuePlugin$69,Tooltip:VuePlugin$71}); /*
	 * ScrollSpy class definition
	 */ /*
	 * Constants / Defaults
	 */var NAME$2='v-b-scrollspy';var ACTIVATE_EVENT='bv::scrollspy::activate';var Default={element:'body',offset:10,method:'auto',throttle:75};var DefaultType={element:'(string|element|component)',offset:'number',method:'string',throttle:'number'};var ClassName$2={DROPDOWN_ITEM:'dropdown-item',ACTIVE:'active'};var Selector$3={ACTIVE:'.active',NAV_LIST_GROUP:'.nav, .list-group',NAV_LINKS:'.nav-link',NAV_ITEMS:'.nav-item',LIST_ITEMS:'.list-group-item',DROPDOWN:'.dropdown, .dropup',DROPDOWN_ITEMS:'.dropdown-item',DROPDOWN_TOGGLE:'.dropdown-toggle'};var OffsetMethod={OFFSET:'offset',POSITION:'position' // HREFs must start with # but can be === '#', or start with '#/' or '#!' (which can be router links)
	};var HREF_REGEX=/^#[^/!]+/; // Transition Events
	var TransitionEndEvents$2=['webkitTransitionEnd','transitionend','otransitionend','oTransitionEnd']; /*
	 * Utility Methods
	 */ // Better var type detection
	/* istanbul ignore next: not easy to test */function toType(obj){return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();} // Check config properties for expected types
	/* istanbul ignore next: not easy to test */function typeCheckConfig(componentName,config,configTypes){for(var property in configTypes) {if(Object.prototype.hasOwnProperty.call(configTypes,property)){var expectedTypes=configTypes[property];var value=config[property];var valueType=value && isElement(value)?'element':toType(value); // handle Vue instances
	valueType = value && value._isVue?'component':valueType;if(!new RegExp(expectedTypes).test(valueType)){warn(componentName + ': Option "' + property + '" provided type "' + valueType + '", but expected type "' + expectedTypes + '"');}}}} /*
	 * ------------------------------------------------------------------------
	 * Class Definition
	 * ------------------------------------------------------------------------
	 */ /* istanbul ignore next: not easy to test */var ScrollSpy=(function(){function ScrollSpy(element,config,$root){classCallCheck(this,ScrollSpy); // The element we activate links in
	this.$el = element;this.$scroller = null;this.$selector = [Selector$3.NAV_LINKS,Selector$3.LIST_ITEMS,Selector$3.DROPDOWN_ITEMS].join(',');this.$offsets = [];this.$targets = [];this.$activeTarget = null;this.$scrollHeight = 0;this.$resizeTimeout = null;this.$obs_scroller = null;this.$obs_targets = null;this.$root = $root || null;this.$config = null;this.updateConfig(config);}createClass(ScrollSpy,[{key:'updateConfig',value:function updateConfig(config,$root){if(this.$scroller){ // Just in case out scroll element has changed
	this.unlisten();this.$scroller = null;}var cfg=assign({},this.constructor.Default,config);if($root){this.$root = $root;}typeCheckConfig(this.constructor.Name,cfg,this.constructor.DefaultType);this.$config = cfg;if(this.$root){var self=this;this.$root.$nextTick(function(){self.listen();});}else {this.listen();}}},{key:'dispose',value:function dispose(){this.unlisten();clearTimeout(this.$resizeTimeout);this.$resizeTimeout = null;this.$el = null;this.$config = null;this.$scroller = null;this.$selector = null;this.$offsets = null;this.$targets = null;this.$activeTarget = null;this.$scrollHeight = null;}},{key:'listen',value:function listen(){var _this=this;var scroller=this.getScroller();if(scroller && scroller.tagName !== 'BODY'){eventOn(scroller,'scroll',this);}eventOn(window,'scroll',this);eventOn(window,'resize',this);eventOn(window,'orientationchange',this);TransitionEndEvents$2.forEach(function(evtName){eventOn(window,evtName,_this);});this.setObservers(true); // Scedule a refresh
	this.handleEvent('refresh');}},{key:'unlisten',value:function unlisten(){var _this2=this;var scroller=this.getScroller();this.setObservers(false);if(scroller && scroller.tagName !== 'BODY'){eventOff(scroller,'scroll',this);}eventOff(window,'scroll',this);eventOff(window,'resize',this);eventOff(window,'orientationchange',this);TransitionEndEvents$2.forEach(function(evtName){eventOff(window,evtName,_this2);});}},{key:'setObservers',value:function setObservers(on){var _this3=this; // We observe both the scroller for content changes, and the target links
	if(this.$obs_scroller){this.$obs_scroller.disconnect();this.$obs_scroller = null;}if(this.$obs_targets){this.$obs_targets.disconnect();this.$obs_targets = null;}if(on){this.$obs_targets = observeDOM(this.$el,function(){_this3.handleEvent('mutation');},{subtree:true,childList:true,attributes:true,attributeFilter:['href']});this.$obs_scroller = observeDOM(this.getScroller(),function(){_this3.handleEvent('mutation');},{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['id','style','class']});}} // general event handler
	},{key:'handleEvent',value:function handleEvent(evt){var type=typeof evt === 'string'?evt:evt.type;var self=this;function resizeThrottle(){if(!self.$resizeTimeout){self.$resizeTimeout = setTimeout(function(){self.refresh();self.process();self.$resizeTimeout = null;},self.$config.throttle);}}if(type === 'scroll'){if(!this.$obs_scroller){ // Just in case we are added to the DOM before the scroll target is
	// We re-instantiate our listeners, just in case
	this.listen();}this.process();}else if(/(resize|orientationchange|mutation|refresh)/.test(type)){ // Postpone these events by throttle time
	resizeThrottle();}} // Refresh the list of target links on the element we are applied to
	},{key:'refresh',value:function refresh(){var _this4=this;var scroller=this.getScroller();if(!scroller){return;}var autoMethod=scroller !== scroller.window?OffsetMethod.POSITION:OffsetMethod.OFFSET;var method=this.$config.method === 'auto'?autoMethod:this.$config.method;var methodFn=method === OffsetMethod.POSITION?position:offset;var offsetBase=method === OffsetMethod.POSITION?this.getScrollTop():0;this.$offsets = [];this.$targets = [];this.$scrollHeight = this.getScrollHeight(); // Find all the unique link href's
	selectAll(this.$selector,this.$el).map(function(link){return getAttr(link,'href');}).filter(function(href){return HREF_REGEX.test(href || '');}).map(function(href){var el=select(href,scroller);if(isVisible(el)){return {offset:parseInt(methodFn(el).top,10) + offsetBase,target:href};}return null;}).filter(function(item){return item;}).sort(function(a,b){return a.offset - b.offset;}).reduce(function(memo,item){ // record only unique targets/offfsets
	if(!memo[item.target]){_this4.$offsets.push(item.offset);_this4.$targets.push(item.target);memo[item.target] = true;}return memo;},{});return this;} // Handle activating/clearing
	},{key:'process',value:function process(){var scrollTop=this.getScrollTop() + this.$config.offset;var scrollHeight=this.getScrollHeight();var maxScroll=this.$config.offset + scrollHeight - this.getOffsetHeight();if(this.$scrollHeight !== scrollHeight){this.refresh();}if(scrollTop >= maxScroll){var target=this.$targets[this.$targets.length - 1];if(this.$activeTarget !== target){this.activate(target);}return;}if(this.$activeTarget && scrollTop < this.$offsets[0] && this.$offsets[0] > 0){this.$activeTarget = null;this.clear();return;}for(var i=this.$offsets.length;i--;) {var isActiveTarget=this.$activeTarget !== this.$targets[i] && scrollTop >= this.$offsets[i] && (typeof this.$offsets[i + 1] === 'undefined' || scrollTop < this.$offsets[i + 1]);if(isActiveTarget){this.activate(this.$targets[i]);}}}},{key:'getScroller',value:function getScroller(){if(this.$scroller){return this.$scroller;}var scroller=this.$config.element;if(!scroller){return null;}else if(isElement(scroller.$el)){scroller = scroller.$el;}else if(typeof scroller === 'string'){scroller = select(scroller);}if(!scroller){return null;}this.$scroller = scroller.tagName === 'BODY'?window:scroller;return this.$scroller;}},{key:'getScrollTop',value:function getScrollTop(){var scroller=this.getScroller();return scroller === window?scroller.pageYOffset:scroller.scrollTop;}},{key:'getScrollHeight',value:function getScrollHeight(){return this.getScroller().scrollHeight || Math.max(document.body.scrollHeight,document.documentElement.scrollHeight);}},{key:'getOffsetHeight',value:function getOffsetHeight(){var scroller=this.getScroller();return scroller === window?window.innerHeight:getBCR(scroller).height;}},{key:'activate',value:function activate(target){var _this5=this;this.$activeTarget = target;this.clear(); // Grab the list of target links (<a href="{$target}">)
	var links=selectAll(this.$selector.split(',').map(function(selector){return selector + '[href="' + target + '"]';}).join(','),this.$el);links.forEach(function(link){if(hasClass(link,ClassName$2.DROPDOWN_ITEM)){ // This is a dropdown item, so find the .dropdown-toggle and set it's state
	var dropdown=closest(Selector$3.DROPDOWN,link);if(dropdown){_this5.setActiveState(select(Selector$3.DROPDOWN_TOGGLE,dropdown),true);} // Also set this link's state
	_this5.setActiveState(link,true);}else { // Set triggered link as active
	_this5.setActiveState(link,true);if(matches(link.parentElement,Selector$3.NAV_ITEMS)){ // Handle nav-link inside nav-item, and set nav-item active
	_this5.setActiveState(link.parentElement,true);} // Set triggered links parents as active
	// With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
	var el=link;while(el) {el = closest(Selector$3.NAV_LIST_GROUP,el);var sibling=el?el.previousElementSibling:null;if(matches(sibling,Selector$3.NAV_LINKS + ', ' + Selector$3.LIST_ITEMS)){_this5.setActiveState(sibling,true);} // Handle special case where nav-link is inside a nav-item
	if(matches(sibling,Selector$3.NAV_ITEMS)){_this5.setActiveState(select(Selector$3.NAV_LINKS,sibling),true); // Add active state to nav-item as well
	_this5.setActiveState(sibling,true);}}}}); // Signal event to via $root, passing ID of activaed target and reference to array of links
	if(links && links.length > 0 && this.$root){this.$root.$emit(ACTIVATE_EVENT,target,links);}}},{key:'clear',value:function clear(){var _this6=this;selectAll(this.$selector + ', ' + Selector$3.NAV_ITEMS,this.$el).filter(function(el){return hasClass(el,ClassName$2.ACTIVE);}).forEach(function(el){return _this6.setActiveState(el,false);});}},{key:'setActiveState',value:function setActiveState(el,active){if(!el){return;}if(active){addClass(el,ClassName$2.ACTIVE);}else {removeClass(el,ClassName$2.ACTIVE);}}}],[{key:'Name',get:function get$$1(){return NAME$2;}},{key:'Default',get:function get$$1(){return Default;}},{key:'DefaultType',get:function get$$1(){return DefaultType;}}]);return ScrollSpy;})(); /*
	 * ScrollSpy directive v-b-scrollspy
	 */var inBrowser$1=typeof window !== 'undefined';var isServer=!inBrowser$1; // Key we use to store our Instance
	var BVSS='__BV_ScrollSpy__'; // Generate config from bindings
	/* istanbul ignore next: not easy to test */function makeConfig(binding){var config={}; // If Argument, assume element ID
	if(binding.arg){ // Element ID specified as arg. We must pre-pend #
	config.element = '#' + binding.arg;} // Process modifiers
	keys(binding.modifiers).forEach(function(mod){if(/^\d+$/.test(mod)){ // Offest value
	config.offset = parseInt(mod,10);}else if(/^(auto|position|offset)$/.test(mod)){ // Offset method
	config.method = mod;}}); // Process value
	if(typeof binding.value === 'string'){ // Value is a CSS ID or selector
	config.element = binding.value;}else if(typeof binding.value === 'number'){ // Value is offset
	config.offset = Math.round(binding.value);}else if(_typeof(binding.value) === 'object'){ // Value is config object
	// Filter the object based on our supported config options
	keys(binding.value).filter(function(k){return Boolean(ScrollSpy.DefaultType[k]);}).forEach(function(k){config[k] = binding.value[k];});}return config;} /* istanbul ignore next: not easy to test */function addBVSS(el,binding,vnode){if(isServer){return;}var cfg=makeConfig(binding);if(!el[BVSS]){el[BVSS] = new ScrollSpy(el,cfg,vnode.context.$root);}else {el[BVSS].updateConfig(cfg,vnode.context.$root);}return el[BVSS];} /* istanbul ignore next: not easy to test */function removeBVSS(el){if(el[BVSS]){el[BVSS].dispose();el[BVSS] = null;}} /*
	 * Export our directive
	 */ /* istanbul ignore next: not easy to test */var bScrollspy={bind:function bind(el,binding,vnode){addBVSS(el,binding,vnode);},inserted:function inserted(el,binding,vnode){addBVSS(el,binding,vnode);},update:function update(el,binding,vnode){addBVSS(el,binding,vnode);},componentUpdated:function componentUpdated(el,binding,vnode){addBVSS(el,binding,vnode);},unbind:function unbind(el){if(isServer){return;} // Remove scroll event listener on scrollElId
	removeBVSS(el);}}; /* eslint-disable no-var, no-undef, guard-for-in, object-shorthand */var directives$3={bScrollspy:bScrollspy};var VuePlugin$73={install:function install(Vue){registerDirectives(Vue,directives$3);}};vueUse(VuePlugin$73);var inBrowser$2=typeof window !== 'undefined' && typeof document !== 'undefined'; // Key which we use to store tooltip object on element
	var BVTT='__BV_ToolTip__'; // Valid event triggers
	var validTriggers={'focus':true,'hover':true,'click':true,'blur':true // Build a ToolTip config based on bindings (if any)
	// Arguments and modifiers take precedence over passed value config object
	/* istanbul ignore next: not easy to test */};function parseBindings(bindings){ // We start out with a blank config
	var config={}; // Process bindings.value
	if(typeof bindings.value === 'string'){ // Value is tooltip content (html optionally supported)
	config.title = bindings.value;}else if(typeof bindings.value === 'function'){ // Title generator function
	config.title = bindings.value;}else if(_typeof(bindings.value) === 'object'){ // Value is config object, so merge
	config = assign(bindings.value);} // If Argument, assume element ID of container element
	if(bindings.arg){ // Element ID specified as arg. We must prepend '#' to become a CSS selector
	config.container = '#' + bindings.arg;} // Process modifiers
	keys(bindings.modifiers).forEach(function(mod){if(/^html$/.test(mod)){ // Title allows HTML
	config.html = true;}else if(/^nofade$/.test(mod)){ // no animation
	config.animation = false;}else if(/^(auto|top(left|right)?|bottom(left|right)?|left(top|bottom)?|right(top|bottom)?)$/.test(mod)){ // placement of tooltip
	config.placement = mod;}else if(/^(window|viewport)$/.test(mod)){ // bounday of tooltip
	config.boundary = mod;}else if(/^d\d+$/.test(mod)){ // delay value
	var delay=parseInt(mod.slice(1),10) || 0;if(delay){config.delay = delay;}}else if(/^o-?\d+$/.test(mod)){ // offset value. Negative allowed
	var offset=parseInt(mod.slice(1),10) || 0;if(offset){config.offset = offset;}}}); // Special handling of event trigger modifiers Trigger is a space separated list
	var selectedTriggers={}; // parse current config object trigger
	var triggers=typeof config.trigger === 'string'?config.trigger.trim().split(/\s+/):[];triggers.forEach(function(trigger){if(validTriggers[trigger]){selectedTriggers[trigger] = true;}}); // Parse Modifiers for triggers
	keys(validTriggers).forEach(function(trigger){if(bindings.modifiers[trigger]){selectedTriggers[trigger] = true;}}); // Sanitize triggers
	config.trigger = keys(selectedTriggers).join(' ');if(config.trigger === 'blur'){ // Blur by itself is useless, so convert it to 'focus'
	config.trigger = 'focus';}if(!config.trigger){ // remove trigger config
	delete config.trigger;}return config;} //
	// Add or Update tooltip on our element
	//
	/* istanbul ignore next: not easy to test */function applyBVTT(el,bindings,vnode){if(!inBrowser$2){return;}if(!Popper){ // Popper is required for tooltips to work
	warn('v-b-tooltip: Popper.js is required for tooltips to work');return;}if(el[BVTT]){el[BVTT].updateConfig(parseBindings(bindings));}else {el[BVTT] = new ToolTip(el,parseBindings(bindings),vnode.context.$root);}} //
	// Remove tooltip on our element
	//
	/* istanbul ignore next: not easy to test */function removeBVTT(el){if(!inBrowser$2){return;}if(el[BVTT]){el[BVTT].destroy();el[BVTT] = null;delete el[BVTT];}} /*
	 * Export our directive
	 */ /* istanbul ignore next: not easy to test */var bTooltip$1={bind:function bind(el,bindings,vnode){applyBVTT(el,bindings,vnode);},inserted:function inserted(el,bindings,vnode){applyBVTT(el,bindings,vnode);},update:function update(el,bindings,vnode){if(bindings.value !== bindings.oldValue){applyBVTT(el,bindings,vnode);}},componentUpdated:function componentUpdated(el,bindings,vnode){if(bindings.value !== bindings.oldValue){applyBVTT(el,bindings,vnode);}},unbind:function unbind(el){removeBVTT(el);}}; /* eslint-disable no-var, no-undef, guard-for-in, object-shorthand */var directives$4={bTooltip:bTooltip$1};var VuePlugin$75={install:function install(Vue){registerDirectives(Vue,directives$4);}};vueUse(VuePlugin$75);var inBrowser$3=typeof window !== 'undefined' && typeof document !== 'undefined'; // Key which we use to store tooltip object on element
	var BVPO='__BV_PopOver__'; // Valid event triggers
	var validTriggers$1={'focus':true,'hover':true,'click':true,'blur':true // Build a PopOver config based on bindings (if any)
	// Arguments and modifiers take precedence over pased value config object
	/* istanbul ignore next: not easy to test */};function parseBindings$1(bindings){ // We start out with a blank config
	var config={}; // Process bindings.value
	if(typeof bindings.value === 'string'){ // Value is popover content (html optionally supported)
	config.content = bindings.value;}else if(typeof bindings.value === 'function'){ // Content generator function
	config.content = bindings.value;}else if(_typeof(bindings.value) === 'object'){ // Value is config object, so merge
	config = assign(bindings.value);} // If Argument, assume element ID of container element
	if(bindings.arg){ // Element ID specified as arg. We must prepend '#' to become a CSS selector
	config.container = '#' + bindings.arg;} // Process modifiers
	keys(bindings.modifiers).forEach(function(mod){if(/^html$/.test(mod)){ // Title allows HTML
	config.html = true;}else if(/^nofade$/.test(mod)){ // no animation
	config.animation = false;}else if(/^(auto|top(left|right)?|bottom(left|right)?|left(top|bottom)?|right(top|bottom)?)$/.test(mod)){ // placement of popover
	config.placement = mod;}else if(/^(window|viewport)$/.test(mod)){ // bounday of popover
	config.boundary = mod;}else if(/^d\d+$/.test(mod)){ // delay value
	var delay=parseInt(mod.slice(1),10) || 0;if(delay){config.delay = delay;}}else if(/^o-?\d+$/.test(mod)){ // offset value (negative allowed)
	var offset=parseInt(mod.slice(1),10) || 0;if(offset){config.offset = offset;}}}); // Special handling of event trigger modifiers Trigger is a space separated list
	var selectedTriggers={}; // parse current config object trigger
	var triggers=typeof config.trigger === 'string'?config.trigger.trim().split(/\s+/):[];triggers.forEach(function(trigger){if(validTriggers$1[trigger]){selectedTriggers[trigger] = true;}}); // Parse Modifiers for triggers
	keys(validTriggers$1).forEach(function(trigger){if(bindings.modifiers[trigger]){selectedTriggers[trigger] = true;}}); // Sanitize triggers
	config.trigger = keys(selectedTriggers).join(' ');if(config.trigger === 'blur'){ // Blur by itself is useless, so convert it to focus
	config.trigger = 'focus';}if(!config.trigger){ // remove trigger config
	delete config.trigger;}return config;} //
	// Add or Update popover on our element
	//
	/* istanbul ignore next: not easy to test */function applyBVPO(el,bindings,vnode){if(!inBrowser$3){return;}if(!Popper){ // Popper is required for tooltips to work
	warn('v-b-popover: Popper.js is required for popovers to work');return;}if(el[BVPO]){el[BVPO].updateConfig(parseBindings$1(bindings));}else {el[BVPO] = new PopOver(el,parseBindings$1(bindings),vnode.context.$root);}} //
	// Remove popover on our element
	//
	/* istanbul ignore next */function removeBVPO(el){if(!inBrowser$3){return;}if(el[BVPO]){el[BVPO].destroy();el[BVPO] = null;delete el[BVPO];}} /*
	 * Export our directive
	 */ /* istanbul ignore next: not easy to test */var bPopover$1={bind:function bind(el,bindings,vnode){applyBVPO(el,bindings,vnode);},inserted:function inserted(el,bindings,vnode){applyBVPO(el,bindings,vnode);},update:function update(el,bindings,vnode){if(bindings.value !== bindings.oldValue){applyBVPO(el,bindings,vnode);}},componentUpdated:function componentUpdated(el,bindings,vnode){if(bindings.value !== bindings.oldValue){applyBVPO(el,bindings,vnode);}},unbind:function unbind(el){removeBVPO(el);}}; /* eslint-disable no-var, no-undef, guard-for-in, object-shorthand */var directives$5={bPopover:bPopover$1};var VuePlugin$77={install:function install(Vue){registerDirectives(Vue,directives$5);}};vueUse(VuePlugin$77);var directives$2=Object.freeze({Toggle:VuePlugin$23,Modal:VuePlugin$55,Scrollspy:VuePlugin$73,Tooltip:VuePlugin$75,Popover:VuePlugin$77}); /* eslint-disable no-var, no-undef, guard-for-in, object-shorthand */var VuePlugin={install:function install(Vue){if(Vue._bootstrap_vue_installed){return;}Vue._bootstrap_vue_installed = true; // Register component plugins
	for(var plugin in components) {Vue.use(components[plugin]);} // Register directive plugins
	for(var _plugin in directives$2) {Vue.use(directives$2[_plugin]);}}};vueUse(VuePlugin);return VuePlugin;}); //# sourceMappingURL=bootstrap-vue.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	/*!
	 * vue-social-sharing v2.3.3 
	 * (c) 2017 nicolasbeauvais
	 * Released under the MIT License.
	 */
	'use strict';

	function _interopDefault(ex) {
	  return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
	}

	var Vue = _interopDefault(__webpack_require__(14));

	var SocialSharingNetwork = {
	  functional: true,

	  props: {
	    network: {
	      type: String,
	      'default': ''
	    }
	  },

	  render: function render(createElement, context) {
	    var network = context.parent._data.baseNetworks[context.props.network];

	    if (!network) {
	      return console.warn("Network " + context.props.network + " does not exist");
	    }

	    return createElement(context.parent.networkTag, {
	      staticClass: context.data.staticClass || null,
	      staticStyle: context.data.staticStyle || null,
	      'class': context.data['class'] || null,
	      style: context.data.style || null,
	      attrs: {
	        id: context.data.attrs.id || null,
	        'data-link': network.type === 'popup' ? '#share-' + context.props.network : context.parent.createSharingUrl(context.props.network),
	        'data-action': network.type === 'popup' ? null : network.action
	      },
	      on: {
	        click: network.type === 'popup' ? function () {
	          context.parent.share(context.props.network);
	        } : function () {
	          context.parent.touch(context.props.network);
	        }
	      }
	    }, context.children);
	  }
	};

	var email = { "sharer": "mailto:?subject=@title&body=@url%0D%0A%0D%0A@description", "type": "direct" };
	var facebook = { "sharer": "https://www.facebook.com/sharer/sharer.php?u=@url&title=@title&description=@description&quote=@quote", "type": "popup" };
	var googleplus = { "sharer": "https://plus.google.com/share?url=@url", "type": "popup" };
	var line = { "sharer": "http://line.me/R/msg/text/?@description%0D%0A@url", "type": "popup" };
	var linkedin = { "sharer": "https://www.linkedin.com/shareArticle?mini=true&url=@url&title=@title&summary=@description", "type": "popup" };
	var odnoklassniki = { "sharer": "https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&st.shareUrl=@url&st.comments=@description", "type": "popup" };
	var pinterest = { "sharer": "https://pinterest.com/pin/create/button/?url=@url&media=@media&description=@title", "type": "popup" };
	var reddit = { "sharer": "https://www.reddit.com/submit?url=@url&title=@title", "type": "popup" };
	var skype = { "sharer": "https://web.skype.com/share?url=@description%0D%0A@url", "type": "popup" };
	var telegram = { "sharer": "https://t.me/share/url?url=@url&text=@description", "type": "popup" };
	var twitter = { "sharer": "https://twitter.com/intent/tweet?text=@title&url=@url&hashtags=@hashtags@twitteruser", "type": "popup" };
	var viber = { "sharer": "viber://forward?text=@url @description", "type": "direct" };
	var vk = { "sharer": "https://vk.com/share.php?url=@url&title=@title&description=@description&image=@media&noparse=true", "type": "popup" };
	var weibo = { "sharer": "http://service.weibo.com/share/share.php?url=@url&title=@title", "type": "popup" };
	var whatsapp = { "sharer": "whatsapp://send?text=@description%0D%0A@url", "type": "direct", "action": "share/whatsapp/share" };
	var sms = { "sharer": "sms:?body=@url%20@description", "type": "direct" };
	var BaseNetworks = {
	  email: email,
	  facebook: facebook,
	  googleplus: googleplus,
	  line: line,
	  linkedin: linkedin,
	  odnoklassniki: odnoklassniki,
	  pinterest: pinterest,
	  reddit: reddit,
	  skype: skype,
	  telegram: telegram,
	  twitter: twitter,
	  viber: viber,
	  vk: vk,
	  weibo: weibo,
	  whatsapp: whatsapp,
	  sms: sms
	};

	var inBrowser = typeof window !== 'undefined';
	var $window = inBrowser ? window : null;

	var SocialSharing = {
	  props: {
	    /**
	     * URL to share.
	     * @var string
	     */
	    url: {
	      type: String,
	      'default': inBrowser ? window.location.href : ''
	    },

	    /**
	     * Sharing title, if available by network.
	     * @var string
	     */
	    title: {
	      type: String,
	      'default': ''
	    },

	    /**
	     * Sharing description, if available by network.
	     * @var string
	     */
	    description: {
	      type: String,
	      'default': ''
	    },

	    /**
	     * Facebook quote
	     * @var string
	     */
	    quote: {
	      type: String,
	      'default': ''
	    },

	    /**
	     * Twitter hashtags
	     * @var string
	     */
	    hashtags: {
	      type: String,
	      'default': ''
	    },

	    /**
	     * Twitter user.
	     * @var string
	     */
	    twitterUser: {
	      type: String,
	      'default': ''
	    },

	    /**
	     * Flag that indicates if counts should be retrieved.
	     * - NOT WORKING IN CURRENT VERSION
	     * @var mixed
	     */
	    withCounts: {
	      type: [String, Boolean],
	      'default': false
	    },

	    /**
	     * Google plus key.
	     * @var string
	     */
	    googleKey: {
	      type: String,
	      'default': undefined
	    },

	    /**
	     * Pinterest Media URL.
	     * Specifies the image/media to be used.
	     */
	    media: {
	      type: String,
	      'default': ''
	    },

	    /**
	     * Network sub component tag.
	     * Default to span tag
	     */
	    networkTag: {
	      type: String,
	      'default': 'span'
	    },

	    /**
	     * Additional or overridden networks.
	     * Default to BaseNetworks
	     */
	    networks: {
	      type: Object,
	      'default': function _default() {
	        return {};
	      }
	    }
	  },

	  data: function data() {
	    return {
	      /**
	       * Available sharing networks.
	       * @param object
	       */
	      baseNetworks: BaseNetworks,

	      /**
	       * Popup settings.
	       * @param object
	       */
	      popup: {
	        status: false,
	        resizable: true,
	        toolbar: false,
	        menubar: false,
	        scrollbars: false,
	        location: false,
	        directories: false,
	        width: 626,
	        height: 436,
	        top: 0,
	        left: 0,
	        window: undefined,
	        interval: null
	      }
	    };
	  },

	  methods: {
	    /**
	     * Returns generated sharer url.
	     *
	     * @param network Social network key.
	     */
	    createSharingUrl: function createSharingUrl(network) {
	      return this.baseNetworks[network].sharer.replace(/@url/g, encodeURIComponent(this.url)).replace(/@title/g, encodeURIComponent(this.title)).replace(/@description/g, encodeURIComponent(this.description)).replace(/@quote/g, encodeURIComponent(this.quote)).replace(/@hashtags/g, this.hashtags).replace(/@media/g, this.media).replace(/@twitteruser/g, this.twitterUser ? '&via=' + this.twitterUser : '');
	    },

	    /**
	     * Shares URL in specified network.
	     *
	     * @param string network Social network key.
	     */
	    share: function share(network) {
	      this.openSharer(network, this.createSharingUrl(network));

	      this.$root.$emit('social_shares_open', network, this.url);
	      this.$emit('open', network, this.url);
	    },

	    /**
	     * Touches network and emits click event.
	     *
	     * @param string network Social network key.
	     */
	    touch: function touch(network) {
	      window.open(this.createSharingUrl(network), '_self');

	      this.$root.$emit('social_shares_open', network, this.url);
	      this.$emit('open', network, this.url);
	    },

	    /**
	     * Opens sharer popup.
	     *
	     * @param string url Url to share.
	     */
	    openSharer: function openSharer(network, url) {
	      var this$1 = this;

	      // If a popup window already exist it will be replaced, trigger a close event.
	      if (this.popup.window && this.popup.interval) {
	        clearInterval(this.popup.interval);

	        this.popup.window.close(); // Force close (for Facebook)

	        this.$root.$emit('social_shares_change', network, this.url);
	        this.$emit('change', network, this.url);
	      }

	      this.popup.window = window.open(url, 'sharer', 'status=' + (this.popup.status ? 'yes' : 'no') + ',height=' + this.popup.height + ',width=' + this.popup.width + ',resizable=' + (this.popup.resizable ? 'yes' : 'no') + ',left=' + this.popup.left + ',top=' + this.popup.top + ',screenX=' + this.popup.left + ',screenY=' + this.popup.top + ',toolbar=' + (this.popup.toolbar ? 'yes' : 'no') + ',menubar=' + (this.popup.menubar ? 'yes' : 'no') + ',scrollbars=' + (this.popup.scrollbars ? 'yes' : 'no') + ',location=' + (this.popup.location ? 'yes' : 'no') + ',directories=' + (this.popup.directories ? 'yes' : 'no'));

	      this.popup.window.focus();

	      // Create an interval to detect popup closing event
	      this.popup.interval = setInterval(function () {
	        if (this$1.popup.window.closed) {
	          clearInterval(this$1.popup.interval);

	          this$1.popup.window = undefined;

	          this$1.$root.$emit('social_shares_close', network, this$1.url);
	          this$1.$emit('close', network, this$1.url);
	        }
	      }, 500);
	    }
	  },

	  /**
	   * Merge base networks list with user's list
	   */
	  beforeMount: function beforeMount() {
	    this.baseNetworks = Vue.util.extend(this.baseNetworks, this.networks);
	  },

	  /**
	   * Sets popup default dimensions.
	   */
	  mounted: function mounted() {
	    if (!inBrowser) {
	      return;
	    }

	    /**
	     * Center the popup on dual screens
	     * http://stackoverflow.com/questions/4068373/center-a-popup-window-on-screen/32261263
	     */
	    var dualScreenLeft = $window.screenLeft !== undefined ? $window.screenLeft : screen.left;
	    var dualScreenTop = $window.screenTop !== undefined ? $window.screenTop : screen.top;

	    var width = $window.innerWidth ? $window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
	    var height = $window.innerHeight ? $window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

	    this.popup.left = width / 2 - this.popup.width / 2 + dualScreenLeft;
	    this.popup.top = height / 2 - this.popup.height / 2 + dualScreenTop;
	  },

	  /**
	   * Set component aliases for buttons and links.
	   */
	  components: {
	    'network': SocialSharingNetwork
	  }
	};

	SocialSharing.version = '2.3.3';

	SocialSharing.install = function (Vue) {
	  Vue.component('social-sharing', SocialSharing);
	};

	if (typeof window !== 'undefined') {
	  window.SocialSharing = SocialSharing;
	}

	module.exports = SocialSharing;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	!(function (t, n) {
	   true ? module.exports = n() : "function" == typeof define && define.amd ? define([], n) : "object" == typeof exports ? exports.VueAvatar = n() : t.VueAvatar = n();
	})(undefined, function () {
	  return (function (t) {
	    function n(r) {
	      if (e[r]) return e[r].exports;var o = e[r] = { i: r, l: !1, exports: {} };return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
	    }var e = {};return n.m = t, n.c = e, n.d = function (t, e, r) {
	      n.o(t, e) || Object.defineProperty(t, e, { configurable: !1, enumerable: !0, get: r });
	    }, n.n = function (t) {
	      var e = t && t.__esModule ? function () {
	        return t["default"];
	      } : function () {
	        return t;
	      };return n.d(e, "a", e), e;
	    }, n.o = function (t, n) {
	      return Object.prototype.hasOwnProperty.call(t, n);
	    }, n.p = "/", n(n.s = 9);
	  })([function (t, n) {
	    var e = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();"number" == typeof __g && (__g = e);
	  }, function (t, n) {
	    t.exports = function (t) {
	      return "object" == typeof t ? null !== t : "function" == typeof t;
	    };
	  }, function (t, n, e) {
	    t.exports = !e(3)(function () {
	      return 7 != Object.defineProperty({}, "a", { get: function get() {
	          return 7;
	        } }).a;
	    });
	  }, function (t, n) {
	    t.exports = function (t) {
	      try {
	        return !!t();
	      } catch (t) {
	        return !0;
	      }
	    };
	  }, function (t, n) {
	    var e = t.exports = { version: "2.5.1" };"number" == typeof __e && (__e = e);
	  }, function (t, n, e) {
	    var r = e(6),
	        o = e(7);t.exports = function (t) {
	      return r(o(t));
	    };
	  }, function (t, n, e) {
	    var r = e(30);t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
	      return "String" == r(t) ? t.split("") : Object(t);
	    };
	  }, function (t, n) {
	    t.exports = function (t) {
	      if (void 0 == t) throw TypeError("Can't call method on  " + t);return t;
	    };
	  }, function (t, n) {
	    var e = Math.ceil,
	        r = Math.floor;t.exports = function (t) {
	      return isNaN(t = +t) ? 0 : (t > 0 ? r : e)(t);
	    };
	  }, function (t, n, e) {
	    "use strict";Object.defineProperty(n, "__esModule", { value: !0 }), n.Avatar = void 0;var r = e(10),
	        o = (function (t) {
	      return t && t.__esModule ? t : { "default": t };
	    })(r);n.Avatar = o["default"], n["default"] = o["default"];
	  }, function (t, n, e) {
	    "use strict";Object.defineProperty(n, "__esModule", { value: !0 });var r = e(12),
	        o = e.n(r),
	        i = e(41),
	        u = e(11),
	        c = u(o.a, i.a, !1, null, null, null);n["default"] = c.exports;
	  }, function (t, n) {
	    t.exports = function (t, n, e, r, o, i) {
	      var u,
	          c = t = t || {},
	          a = typeof t["default"];"object" !== a && "function" !== a || (u = t, c = t["default"]);var s = "function" == typeof c ? c.options : c;n && (s.render = n.render, s.staticRenderFns = n.staticRenderFns, s._compiled = !0), e && (s.functional = !0), o && (s._scopeId = o);var f;if ((i ? (f = function (t) {
	        t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, t || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__), r && r.call(this, t), t && t._registeredComponents && t._registeredComponents.add(i);
	      }, s._ssrRegister = f) : r && (f = r), f)) {
	        var l = s.functional,
	            p = l ? s.render : s.beforeCreate;l ? (s._injectStyles = f, s.render = function (t, n) {
	          return f.call(n), p(t, n);
	        }) : s.beforeCreate = p ? [].concat(p, f) : [f];
	      }return { esModule: u, exports: c, options: s };
	    };
	  }, function (t, n, e) {
	    "use strict";Object.defineProperty(n, "__esModule", { value: !0 });var r = e(13),
	        o = (function (t) {
	      return t && t.__esModule ? t : { "default": t };
	    })(r);n["default"] = { name: "avatar", props: { username: { type: String, required: !0 }, initials: { type: String }, backgroundColor: { type: String }, color: { type: String }, customStyle: { type: Object }, size: { type: Number, "default": 50 }, src: { type: String }, rounded: { type: Boolean, "default": !0 }, lighten: { type: Number, "default": 80 } }, data: function data() {
	        return { backgroundColors: ["#F44336", "#FF4081", "#9C27B0", "#673AB7", "#3F51B5", "#2196F3", "#03A9F4", "#00BCD4", "#009688", "#4CAF50", "#8BC34A", "#CDDC39", "#FFC107", "#FF9800", "#FF5722", "#795548", "#9E9E9E", "#607D8B"] };
	      }, mounted: function mounted() {
	        this.$emit("avatar-initials", this.username, this.userInitial);
	      }, computed: { background: function background() {
	          return this.backgroundColor || this.randomBackgroundColor(this.username.length, this.backgroundColors);
	        }, fontColor: function fontColor() {
	          return this.color || this.lightenColor(this.background, this.lighten);
	        }, isImage: function isImage() {
	          return Boolean(this.src);
	        }, style: function style() {
	          var t = { width: this.size + "px", height: this.size + "px", borderRadius: this.rounded ? "50%" : 0, textAlign: "center", verticalAlign: "middle" },
	              n = { background: "transparent url(" + this.src + ") no-repeat scroll 0% 0% / " + this.size + "px " + this.size + "px content-box border-box" },
	              e = { backgroundColor: this.background, font: Math.floor(this.size / 2.5) + "px/100px Helvetica, Arial, sans-serif", fontWeight: "bold", color: this.fontColor, lineHeight: this.size + Math.floor(this.size / 20) + "px" },
	              r = this.isImage ? n : e;return (0, o["default"])(t, r), t;
	        }, userInitial: function userInitial() {
	          return this.initials || this.initial(this.username);
	        } }, methods: { initial: function initial(t) {
	          for (var n = t.split(/[ -]/), e = "", r = 0; r < n.length; r++) e += n[r].charAt(0);return e.length > 3 && -1 !== e.search(/[A-Z]/) && (e = e.replace(/[a-z]+/g, "")), e = e.substr(0, 3).toUpperCase();
	        }, randomBackgroundColor: function randomBackgroundColor(t, n) {
	          return n[t % n.length];
	        }, lightenColor: function lightenColor(t, n) {
	          var e = !1;"#" === t[0] && (t = t.slice(1), e = !0);var r = parseInt(t, 16),
	              o = (r >> 16) + n;o > 255 ? o = 255 : o < 0 && (o = 0);var i = (r >> 8 & 255) + n;i > 255 ? i = 255 : i < 0 && (i = 0);var u = (255 & r) + n;return u > 255 ? u = 255 : u < 0 && (u = 0), (e ? "#" : "") + (u | i << 8 | o << 16).toString(16);
	        } } };
	  }, function (t, n, e) {
	    t.exports = { "default": e(14), __esModule: !0 };
	  }, function (t, n, e) {
	    e(15), t.exports = e(4).Object.assign;
	  }, function (t, n, e) {
	    var r = e(16);r(r.S + r.F, "Object", { assign: e(26) });
	  }, function (t, n, e) {
	    var r = e(0),
	        o = e(4),
	        i = e(17),
	        u = e(19),
	        c = function c(t, n, e) {
	      var a,
	          s,
	          f,
	          l = t & c.F,
	          p = t & c.G,
	          d = t & c.S,
	          h = t & c.P,
	          v = t & c.B,
	          y = t & c.W,
	          g = p ? o : o[n] || (o[n] = {}),
	          b = g.prototype,
	          x = p ? r : d ? r[n] : (r[n] || {}).prototype;p && (e = n);for (a in e) (s = !l && x && void 0 !== x[a]) && a in g || (f = s ? x[a] : e[a], g[a] = p && "function" != typeof x[a] ? e[a] : v && s ? i(f, r) : y && x[a] == f ? (function (t) {
	        var n = function n(_n, e, r) {
	          if (this instanceof t) {
	            switch (arguments.length) {case 0:
	                return new t();case 1:
	                return new t(_n);case 2:
	                return new t(_n, e);}return new t(_n, e, r);
	          }return t.apply(this, arguments);
	        };return n.prototype = t.prototype, n;
	      })(f) : h && "function" == typeof f ? i(Function.call, f) : f, h && ((g.virtual || (g.virtual = {}))[a] = f, t & c.R && b && !b[a] && u(b, a, f)));
	    };c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, t.exports = c;
	  }, function (t, n, e) {
	    var r = e(18);t.exports = function (t, n, e) {
	      if ((r(t), void 0 === n)) return t;switch (e) {case 1:
	          return function (e) {
	            return t.call(n, e);
	          };case 2:
	          return function (e, r) {
	            return t.call(n, e, r);
	          };case 3:
	          return function (e, r, o) {
	            return t.call(n, e, r, o);
	          };}return function () {
	        return t.apply(n, arguments);
	      };
	    };
	  }, function (t, n) {
	    t.exports = function (t) {
	      if ("function" != typeof t) throw TypeError(t + " is not a function!");return t;
	    };
	  }, function (t, n, e) {
	    var r = e(20),
	        o = e(25);t.exports = e(2) ? function (t, n, e) {
	      return r.f(t, n, o(1, e));
	    } : function (t, n, e) {
	      return t[n] = e, t;
	    };
	  }, function (t, n, e) {
	    var r = e(21),
	        o = e(22),
	        i = e(24),
	        u = Object.defineProperty;n.f = e(2) ? Object.defineProperty : function (t, n, e) {
	      if ((r(t), n = i(n, !0), r(e), o)) try {
	        return u(t, n, e);
	      } catch (t) {}if ("get" in e || "set" in e) throw TypeError("Accessors not supported!");return "value" in e && (t[n] = e.value), t;
	    };
	  }, function (t, n, e) {
	    var r = e(1);t.exports = function (t) {
	      if (!r(t)) throw TypeError(t + " is not an object!");return t;
	    };
	  }, function (t, n, e) {
	    t.exports = !e(2) && !e(3)(function () {
	      return 7 != Object.defineProperty(e(23)("div"), "a", { get: function get() {
	          return 7;
	        } }).a;
	    });
	  }, function (t, n, e) {
	    var r = e(1),
	        o = e(0).document,
	        i = r(o) && r(o.createElement);t.exports = function (t) {
	      return i ? o.createElement(t) : {};
	    };
	  }, function (t, n, e) {
	    var r = e(1);t.exports = function (t, n) {
	      if (!r(t)) return t;var e, o;if (n && "function" == typeof (e = t.toString) && !r(o = e.call(t))) return o;if ("function" == typeof (e = t.valueOf) && !r(o = e.call(t))) return o;if (!n && "function" == typeof (e = t.toString) && !r(o = e.call(t))) return o;throw TypeError("Can't convert object to primitive value");
	    };
	  }, function (t, n) {
	    t.exports = function (t, n) {
	      return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: n };
	    };
	  }, function (t, n, e) {
	    "use strict";var r = e(27),
	        o = e(38),
	        i = e(39),
	        u = e(40),
	        c = e(6),
	        a = Object.assign;t.exports = !a || e(3)(function () {
	      var t = {},
	          n = {},
	          e = Symbol(),
	          r = "abcdefghijklmnopqrst";return t[e] = 7, r.split("").forEach(function (t) {
	        n[t] = t;
	      }), 7 != a({}, t)[e] || Object.keys(a({}, n)).join("") != r;
	    }) ? function (t, n) {
	      for (var e = u(t), a = arguments.length, s = 1, f = o.f, l = i.f; a > s;) for (var p, d = c(arguments[s++]), h = f ? r(d).concat(f(d)) : r(d), v = h.length, y = 0; v > y;) l.call(d, p = h[y++]) && (e[p] = d[p]);return e;
	    } : a;
	  }, function (t, n, e) {
	    var r = e(28),
	        o = e(37);t.exports = Object.keys || function (t) {
	      return r(t, o);
	    };
	  }, function (t, n, e) {
	    var r = e(29),
	        o = e(5),
	        i = e(31)(!1),
	        u = e(34)("IE_PROTO");t.exports = function (t, n) {
	      var e,
	          c = o(t),
	          a = 0,
	          s = [];for (e in c) e != u && r(c, e) && s.push(e);for (; n.length > a;) r(c, e = n[a++]) && (~i(s, e) || s.push(e));return s;
	    };
	  }, function (t, n) {
	    var e = ({}).hasOwnProperty;t.exports = function (t, n) {
	      return e.call(t, n);
	    };
	  }, function (t, n) {
	    var e = ({}).toString;t.exports = function (t) {
	      return e.call(t).slice(8, -1);
	    };
	  }, function (t, n, e) {
	    var r = e(5),
	        o = e(32),
	        i = e(33);t.exports = function (t) {
	      return function (n, e, u) {
	        var c,
	            a = r(n),
	            s = o(a.length),
	            f = i(u, s);if (t && e != e) {
	          for (; s > f;) if ((c = a[f++]) != c) return !0;
	        } else for (; s > f; f++) if ((t || f in a) && a[f] === e) return t || f || 0;return !t && -1;
	      };
	    };
	  }, function (t, n, e) {
	    var r = e(8),
	        o = Math.min;t.exports = function (t) {
	      return t > 0 ? o(r(t), 9007199254740991) : 0;
	    };
	  }, function (t, n, e) {
	    var r = e(8),
	        o = Math.max,
	        i = Math.min;t.exports = function (t, n) {
	      return t = r(t), t < 0 ? o(t + n, 0) : i(t, n);
	    };
	  }, function (t, n, e) {
	    var r = e(35)("keys"),
	        o = e(36);t.exports = function (t) {
	      return r[t] || (r[t] = o(t));
	    };
	  }, function (t, n, e) {
	    var r = e(0),
	        o = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});t.exports = function (t) {
	      return o[t] || (o[t] = {});
	    };
	  }, function (t, n) {
	    var e = 0,
	        r = Math.random();t.exports = function (t) {
	      return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++e + r).toString(36));
	    };
	  }, function (t, n) {
	    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
	  }, function (t, n) {
	    n.f = Object.getOwnPropertySymbols;
	  }, function (t, n) {
	    n.f = ({}).propertyIsEnumerable;
	  }, function (t, n, e) {
	    var r = e(7);t.exports = function (t) {
	      return Object(r(t));
	    };
	  }, function (t, n, e) {
	    "use strict";var r = function r() {
	      var t = this,
	          n = t.$createElement,
	          e = t._self._c || n;return e("div", { staticClass: "vue-avatar--wrapper", style: [t.style, t.customStyle] }, [this.src ? t._e() : e("span", [t._v(t._s(t.userInitial))])]);
	    },
	        o = [],
	        i = { render: r, staticRenderFns: o };n.a = i;
	  }]);
	});

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	/*! VueStringFilter v.1.2.1 */
	"use strict";

	!(function (e, t) {
	   true ? module.exports = t() : "function" == typeof define && define.amd ? define("VueStringFilter", [], t) : "object" == typeof exports ? exports.VueStringFilter = t() : e.VueStringFilter = t();
	})(undefined, function () {
	  return (function (e) {
	    function t(n) {
	      if (r[n]) return r[n].exports;var o = r[n] = { i: n, l: !1, exports: {} };return e[n].call(o.exports, o, o.exports, t), o.l = !0, o.exports;
	    }var r = {};return t.m = e, t.c = r, t.d = function (e, r, n) {
	      t.o(e, r) || Object.defineProperty(e, r, { configurable: !1, enumerable: !0, get: n });
	    }, t.n = function (e) {
	      var r = e && e.__esModule ? function () {
	        return e["default"];
	      } : function () {
	        return e;
	      };return t.d(r, "a", r), r;
	    }, t.o = function (e, t) {
	      return Object.prototype.hasOwnProperty.call(e, t);
	    }, t.p = "/dist", t(t.s = 0);
	  })([function (e, t, r) {
	    "use strict";Object.defineProperty(t, "__esModule", { value: !0 });var n = { install: function install(e) {
	        e.filter("lowercase", function (e) {
	          return e.toString().toLowerCase();
	        }), e.filter("uppercase", function (e) {
	          return e.toString().toUpperCase();
	        }), e.filter("capitalize", function (e) {
	          return e.charAt(0).toUpperCase() + e.slice(1);
	        }), e.filter("titlecase", function (e) {
	          return e.replace(/\w\S*/g, function (e) {
	            return e.charAt(0).toUpperCase() + e.substr(1).toLowerCase();
	          });
	        }), e.filter("slug", function (e) {
	          return e.toString().toLowerCase().trim().replace(/&/g, "-and-").replace(/[\s\W-]+/g, "-").replace(/--+/g, "-").replace(/^-+|-+$/g, "");
	        }), e.filter("truncate", function (e, t) {
	          return e.length < t ? e : e.slice(0, t) + "...";
	        }), e.filter("cut", function (e, t) {
	          return e.length < t ? e : e.slice(0, t);
	        });
	      } };t["default"] = n;
	  }]);
	});
	//# sourceMappingURL=VueStringFilter.bundle.js.map

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	/*----------------------------------------*\
	    Vuebar
	\*----------------------------------------*/
	'use strict';

	;(function () {
	    'use strict';

	    /*------------------------------------*\
	        Vuebar
	    \*------------------------------------*/
	    var Vuebar = {};
	    Vuebar.install = function (Vue, options) {

	        /*------------------------------------*\
	            Create State
	            - contains default values
	        \*------------------------------------*/
	        function createState(el) {
	            el._vuebarState = {

	                // config with default values that may be overwritten on directive intialization
	                config: {
	                    scrollThrottle: 10,
	                    draggerThrottle: 10,
	                    resizeRefresh: true,
	                    observerThrottle: 100,
	                    resizeDebounce: 100,
	                    unselectableBody: true,
	                    overrideFloatingScrollbar: true,
	                    scrollingPhantomDelay: 1000,
	                    draggingPhantomDelay: 1000,
	                    preventParentScroll: false,
	                    useScrollbarPseudo: false, // experimental

	                    el1Class: 'vb',
	                    el1ScrollVisibleClass: 'vb-visible',
	                    el1ScrollInvisibleClass: 'vb-invisible',
	                    el1ScrollingClass: 'vb-scrolling',
	                    el1ScrollingPhantomClass: 'vb-scrolling-phantom',
	                    el1DraggingClass: 'vb-dragging',
	                    el1DraggingPhantomClass: 'vb-dragging-phantom',

	                    el2Class: 'vb-content',

	                    draggerClass: 'vb-dragger',
	                    draggerStylerClass: 'vb-dragger-styler'
	                },

	                // reference to binding
	                binding: null,

	                // references to directive DOM elements
	                el1: null,
	                el2: null,
	                dragger: null,

	                // show dragger
	                draggerEnabled: null,

	                // properties computed for internal directive logic & DOM manipulations
	                visibleArea: 0, // ratio between container height and scrollable content height
	                scrollTop: 0, // position of content scrollTop in px
	                barTop: 0, // position of dragger in px
	                barHeight: 0, // height of dragger in px
	                mouseBarOffsetY: 0, // relative position of mouse at the time of clicking on dragger
	                barDragging: false, // when the dragger is used

	                // reference to MutationObserver
	                mutationObserver: null,

	                // references to timeouts for DOM class manipulation
	                scrollingClassTimeout: null,
	                draggingClassTimeout: null,
	                scrollingPhantomClassTimeout: null,
	                draggingPhantomClassTimeout: null,

	                // references to a functions we'll need when removing events
	                barMousedown: null,
	                documentMousemove: null,
	                documentMouseup: null,
	                windowResize: null,
	                scrollHandler: null,
	                wheelHandler: null

	            };
	            return el._vuebarState;
	        }

	        /*------------------------------------*\
	            Get State
	        \*------------------------------------*/
	        function getState(el) {
	            return el._vuebarState;
	        }

	        /*------------------------------------*\
	            Mount Validation
	        \*------------------------------------*/
	        function markupValidation(el) {
	            if (!el.firstChild) {
	                Vue.util.warn('(Vuebar) Element 1 with v-bar directive doesn\'t have required child element 2.');
	                return false;
	            }
	            return true;
	        }

	        /*------------------------------------*\
	            Computing Properties
	        \*------------------------------------*/
	        function computeVisibleArea(el) {
	            var state = getState(el);
	            state.visibleArea = state.el2.clientHeight / state.el2.scrollHeight;
	        }

	        function computeScrollTop(el) {
	            var state = getState(el);
	            state.scrollTop = state.barTop * (state.el2.scrollHeight / state.el2.clientHeight);
	        }

	        function computeBarTop(el, event) {
	            var state = getState(el);

	            // if the function gets called on scroll event
	            if (!event) {
	                state.barTop = state.el2.scrollTop * state.visibleArea;
	                return false;
	            } // else the function gets called when moving dragger with mouse

	            var relativeMouseY = event.clientY - state.el1.getBoundingClientRect().top;
	            if (relativeMouseY <= state.mouseBarOffsetY) {
	                // if bar is trying to go over top
	                state.barTop = 0;
	            }

	            if (relativeMouseY > state.mouseBarOffsetY) {
	                // if bar is moving between top and bottom
	                state.barTop = relativeMouseY - state.mouseBarOffsetY;
	            }

	            if (state.barTop + state.barHeight >= state.el2.clientHeight) {
	                // if bar is trying to go over bottom
	                state.barTop = state.el2.clientHeight - state.barHeight;
	            }
	        }

	        function computeBarHeight(el) {
	            var state = getState(el);
	            if (state.visibleArea >= 1) {
	                state.barHeight = 0;
	            } else {
	                state.barHeight = state.el2.clientHeight * state.visibleArea;
	            }
	        }

	        /*------------------------------------*\
	            Styles & DOM
	        \*------------------------------------*/
	        function createDragger(el) {
	            var state = getState(el);

	            var dragger = document.createElement('div');
	            var draggerStyler = document.createElement('div');

	            dragger.className = state.config.draggerClass;

	            dragger.style.position = 'absolute';

	            if (!state.draggerEnabled) {
	                dragger.style.display = 'none';
	            }

	            draggerStyler.className = state.config.draggerStylerClass;

	            dragger.appendChild(draggerStyler);
	            state.el1.appendChild(dragger);

	            return dragger;
	        }

	        function updateDragger(el, options) {
	            var options = options ? options : {};
	            var state = getState(el);

	            // setting dragger styles
	            state.dragger.style.height = parseInt(Math.round(state.barHeight)) + 'px';
	            state.dragger.style.top = parseInt(Math.round(state.barTop)) + 'px';
	            //state.dragger.style.height = Math.ceil( state.barHeight ) + 'px';
	            //state.dragger.style.top = Math.ceil( state.barTop ) + 'px';

	            // scrollbar visible / invisible classes
	            if (state.draggerEnabled && state.visibleArea < 1) {
	                removeClass(state.el1, state.config.el1ScrollInvisibleClass);
	                addClass(state.el1, state.config.el1ScrollVisibleClass);
	            } else {
	                removeClass(state.el1, state.config.el1ScrollVisibleClass);
	                addClass(state.el1, state.config.el1ScrollInvisibleClass);
	            }

	            if (options.withScrollingClasses) {

	                // add scrolling class
	                addClass(state.el1, state.config.el1ScrollingClass);

	                // remove scrolling class
	                state.scrollingClassTimeout ? clearTimeout(state.scrollingClassTimeout) : null;
	                state.scrollingClassTimeout = setTimeout(function () {
	                    removeClass(state.el1, state.config.el1ScrollingClass);
	                }, state.config.scrollThrottle + 5);

	                // add phantom scrolling class
	                addClass(state.el1, state.config.el1ScrollingPhantomClass);

	                // remove phantom scrolling class
	                state.scrollingPhantomClassTimeout ? clearTimeout(state.scrollingPhantomClassTimeout) : null;
	                state.scrollingPhantomClassTimeout = setTimeout(function () {
	                    removeClass(state.el1, state.config.el1ScrollingPhantomClass);
	                }, state.config.scrollThrottle + state.config.scrollingPhantomDelay);
	            }
	        }

	        // this is an experimental feature
	        // - it works only on chrome and safari
	        // - instead of hiding scrollbar by overflowing it with its parent set to overflow:hidden
	        //   we hide scrollbar using pseudo-element selector ::-webkit-scrollbar
	        function hideScrollbarUsingPseudoElement(el) {
	            var state = getState(el);
	            var idName = 'vuebar-pseudo-element-styles';
	            var selector = '.' + state.config.el2Class + '::-webkit-scrollbar';
	            var styleElm = document.getElementById(idName);
	            var sheet = null;

	            if (styleElm) {
	                sheet = styleElm.sheet;
	            } else {
	                styleElm = document.createElement('style');
	                styleElm.id = idName;
	                document.head.appendChild(styleElm);
	                sheet = styleElm.sheet;
	            }

	            // detect if there is a rule already added to the selector
	            var ruleExists = false;
	            for (var i = 0, l = sheet.rules.length; i < l; i++) {
	                var rule = sheet.rules[i];
	                if (rule.selectorText == selector) {
	                    ruleExists = true;
	                }
	            }

	            // if there is rule added already then don't continue
	            if (ruleExists) {
	                return false;
	            }

	            // insert rule
	            // - we only need to use insertRule and don't need to use addRule at all
	            //   because we're only targeting chrome & safari browsers
	            if (sheet.insertRule) {
	                sheet.insertRule(selector + '{display:none}', 0);
	            }
	        }

	        function preventParentScroll(el, event) {
	            var state = getState(el);

	            if (state.visibleArea >= 1) {
	                return false;
	            }

	            var scrollDist = state.el2.scrollHeight - state.el2.clientHeight;
	            var scrollTop = state.el2.scrollTop;

	            var wheelingUp = event.deltaY < 0;
	            var wheelingDown = event.deltaY > 0;

	            if (scrollTop <= 0 && wheelingUp) {
	                event.preventDefault();
	                return false;
	            }

	            if (scrollTop >= scrollDist && wheelingDown) {
	                event.preventDefault();
	                return false;
	            }
	        }

	        function updateScroll(el) {
	            var state = getState(el);
	            state.el2.scrollTop = state.scrollTop;
	        }

	        /*------------------------------------*\
	            Refresh
	        \*------------------------------------*/

	        function refreshScrollbar(el, options) {
	            var options = options ? options : {};

	            if (options.immediate) {
	                computeVisibleArea(el);
	                computeBarTop(el);
	                computeBarHeight(el);
	                updateDragger(el);
	            }

	            Vue.nextTick((function () {
	                if (!getState(el)) {
	                    return false;
	                }
	                computeVisibleArea(el);
	                computeBarTop(el);
	                computeBarHeight(el);
	                updateDragger(el);
	            }).bind(this));
	        }

	        /*------------------------------------*\
	            Events & Handlers
	        \*------------------------------------*/

	        function scrollHandler(el) {
	            var state = getState(el);
	            return throttle((function (event) {
	                computeVisibleArea(el);
	                computeBarHeight(el); // fallback for an undetected content change
	                if (!state.barDragging) {
	                    computeBarTop(el);
	                    updateDragger(el, { withScrollingClasses: true });
	                }
	            }).bind(this), state.config.scrollThrottle);
	        }

	        function wheelHandler(el) {
	            return (function (event) {
	                preventParentScroll(el, event);
	            }).bind(this);
	        }

	        function documentMousemove(el) {
	            var state = getState(el);
	            return throttle((function (event) {
	                computeBarTop(el, event);
	                updateDragger(el);
	                computeScrollTop(el);
	                updateScroll(el);
	            }).bind(this), state.config.draggerThrottle);
	        }

	        function documentMouseup(el) {
	            var state = getState(el);
	            return (function (event) {

	                //
	                state.barDragging = false;

	                // enable user select
	                state.el1.style.userSelect = '';
	                state.config.unselectableBody ? compatStyle(document.body, 'UserSelect', '') : null;

	                // remove dragging class
	                removeClass(state.el1, state.config.el1DraggingClass);
	                state.draggingPhantomClassTimeout = setTimeout(function () {
	                    removeClass(state.el1, state.config.el1DraggingPhantomClass);
	                }, state.config.draggingPhantomDelay);

	                // remove events
	                document.removeEventListener('mousemove', state.documentMousemove, 0);
	                document.removeEventListener('mouseup', state.documentMouseup, 0);
	            }).bind(this);
	        }

	        function barMousedown(el) {
	            var state = getState(el);
	            return (function (event) {

	                // don't do nothing if it's not left mouse button
	                if (event.which !== 1) {
	                    return false;
	                }

	                state.barDragging = true;
	                state.mouseBarOffsetY = event.offsetY;

	                // disable user select
	                state.el1.style.userSelect = 'none';
	                state.config.unselectableBody ? compatStyle(document.body, 'UserSelect', 'none') : null;

	                // add dragging class
	                addClass(state.el1, state.config.el1DraggingClass);
	                state.draggingPhantomClassTimeout ? clearTimeout(state.draggingPhantomClassTimeout) : null;
	                addClass(state.el1, state.config.el1DraggingPhantomClass);

	                // add events
	                document.addEventListener('mousemove', state.documentMousemove, 0);
	                document.addEventListener('mouseup', state.documentMouseup, 0);
	            }).bind(this);
	        }

	        function windowResize(el) {
	            var state = getState(el);
	            return debounce((function (event) {
	                refreshScrollbar(el);
	            }).bind(this), state.config.resizeDebounce);
	        }

	        function initMutationObserver(el) {
	            if (typeof MutationObserver === typeof void 0) {
	                return null;
	            }

	            var state = getState(el);

	            var observer = new MutationObserver(throttle(function (mutations) {
	                refreshScrollbar(el);
	            }, state.config.observerThrottle));

	            observer.observe(state.el2, {
	                childList: true,
	                characterData: true,
	                subtree: true
	            });

	            return observer;
	        }

	        /*------------------------------------*\
	            Initialize Scrollbar
	        \*------------------------------------*/
	        function initScrollbar(el, kwargs) {

	            // validate on directive bind if the markup is OK
	            if (!markupValidation.call(this, el)) {
	                return false;
	            }

	            // safeguard to not initialize vuebar when it's already initialized
	            if (el._vuebarState) {
	                // and I'm actually curious if that can happen
	                Vue.util.warn('(Vuebar) Tried to initialize second time. If you see this please create an issue on https://github.com/DominikSerafin/vuebar with all relevent debug information. Thank you!');
	                return false;
	            }

	            // create state
	            var state = createState(el);

	            // get options object
	            // - it will come from directive binding (there is a 'value' property)
	            // - or it will come from public method direct options object
	            var options = kwargs.value ? kwargs.value : kwargs ? kwargs : {};

	            // overwrite defaults with provided options
	            for (var key in options) {
	                state.config[key] = options[key];
	            }

	            // detect browser
	            var browser = detectBrowser();

	            // dragger enabled?
	            var elNativeScrollbarWidth = getNativeScrollbarWidth(el.firstElementChild);
	            var overlayScrollbar = elNativeScrollbarWidth == 0;
	            state.draggerEnabled = !overlayScrollbar || state.config.overrideFloatingScrollbar ? 1 : 0;

	            // setup scrollbar "state"
	            state.binding = kwargs.value ? kwargs : null;
	            state.el1 = el;
	            state.el2 = el.firstElementChild;
	            state.dragger = createDragger(el);

	            // create and reference event listeners
	            state.barMousedown = barMousedown(el);
	            state.documentMousemove = documentMousemove(el);
	            state.documentMouseup = documentMouseup(el);
	            state.windowResize = windowResize(el);
	            state.scrollHandler = scrollHandler(el);
	            state.wheelHandler = wheelHandler(el);

	            // initialize and reference mutation observer
	            state.mutationObserver = initMutationObserver(el);

	            // el1 styles and class
	            addClass(state.el1, state.config.el1Class);
	            state.el1.style.position = 'relative';
	            state.el1.style.overflow = 'hidden';

	            // el2 styles and class
	            addClass(state.el2, state.config.el2Class);
	            state.el2.style.display = 'block';
	            state.el2.style.overflowX = 'hidden';
	            state.el2.style.overflowY = 'scroll';
	            state.el2.style.height = '100%';

	            // do the magic
	            if (state.draggerEnabled) {

	                // hide original browser scrollbar using pseudo css selectors (only chrome & safari)
	                if (state.config.useScrollbarPseudo && (browser.chrome || browser.safari)) {
	                    state.el2.style.width = '100%';
	                    hideScrollbarUsingPseudoElement(el);
	                }

	                // hide original browser overlay scrollbar and add padding to compensate for that
	                else if (overlayScrollbar) {
	                        /* state.el2.style.width = 'calc(100% + ' + 20 + 'px)';
	                        compatStyle(state.el2, 'BoxSizing', 'border-box'); */
	                        state.el2.style.width = '100%';
	                        compatStyle(state.el2, 'BoxSizing', 'content-box');
	                        state.el2.style.paddingRight = '20px';
	                    }

	                    // hide original browser scrollbar behind element edges and hidden overflow
	                    else {
	                            state.el2.style.width = 'calc(100% + ' + elNativeScrollbarWidth + 'px)';
	                        }
	            }

	            // add events
	            // - wheel event is only needed when preventParentScroll option is enabled
	            // - resize event is only needed when resizeRefresh option is enabled
	            state.el2.addEventListener('scroll', state.scrollHandler, 0);
	            state.dragger.addEventListener('mousedown', state.barMousedown, 0);
	            state.config.preventParentScroll ? state.el2.addEventListener('wheel', state.wheelHandler, 0) : null;
	            state.config.resizeRefresh ? window.addEventListener('resize', state.windowResize, 0) : null;

	            // initial calculations using refresh scrollbar
	            refreshScrollbar(el, { immediate: true });
	        }

	        /*------------------------------------*\
	            Destroy Scrollbar
	        \*------------------------------------*/
	        function destroyScrollbar(el, options) {
	            var options = options ? options : {};
	            var state = getState(el);

	            // clear events
	            state.dragger.removeEventListener('mousedown', state.barMousedown, 0);
	            state.el2.removeEventListener('scroll', state.scrollHandler, 0);
	            state.el2.removeEventListener('wheel', state.scrollHandler, 0);
	            window.removeEventListener('resize', state.windowResize, 0);

	            // disconnect mutation observer
	            state.mutationObserver ? state.mutationObserver.disconnect() : null;

	            // clear el1 classes
	            removeClass(state.el1, state.config.el1Class);
	            removeClass(state.el1, state.config.el1ScrollVisibleClass);
	            removeClass(state.el1, state.config.el1ScrollInvisibleClass);
	            removeClass(state.el1, state.config.el1ScrollingClass);
	            removeClass(state.el1, state.config.el1ScrollingPhantomClass);
	            removeClass(state.el1, state.config.el1DraggingClass);

	            // clear el1 styles
	            if (options.clearStyles) {
	                state.el1.style.position = '';
	                state.el1.style.overflow = '';
	            }

	            // clear el2 classes
	            removeClass(state.el2, state.config.el2Class);

	            // clear el2 styles
	            if (options.clearStyles) {
	                state.el2.style.display = '';
	                state.el2.style.overflowX = '';
	                state.el2.style.overflowY = '';
	                state.el2.style.msOverflowStyle = '';
	                state.el2.style.height = '';
	                state.el2.style.width = '';
	            }

	            // clear dragger
	            state.dragger.removeChild(state.dragger.firstChild);
	            state.el1.removeChild(state.dragger);

	            // clear timeouts that may be still running
	            state.scrollingPhantomClassTimeout ? clearTimeout(state.scrollingPhantomClassTimeout) : null;
	            state.draggingPhantomClassTimeout ? clearTimeout(state.draggingPhantomClassTimeout) : null;

	            // delete state object from element
	            delete el._vuebarState;
	        }

	        /*------------------------------------*\
	            Public Methods Install
	        \*------------------------------------*/
	        function publicMethods() {
	            return {
	                getState: getState,
	                initScrollbar: initScrollbar,
	                destroyScrollbar: destroyScrollbar,
	                refreshScrollbar: refreshScrollbar
	            };
	        }
	        Vue.vuebar = publicMethods();
	        Vue.prototype.$vuebar = publicMethods();

	        /*------------------------------------*\
	            Directive Install
	        \*------------------------------------*/
	        Vue.directive('bar', {

	            inserted: function inserted(el, binding, vnode) {
	                initScrollbar.call(this, el, binding);
	            },

	            componentUpdated: function componentUpdated(el, binding, vnode, oldVnode) {
	                refreshScrollbar.call(this, el);
	            },

	            unbind: function unbind(el, binding, vnode, oldVnode) {
	                // we shouldn't clearStyles because it actually doesn't matter that much
	                // the element will be always deleted on unbind and its styles also
	                // and if we do clear styles then it looks bad on transitions
	                destroyScrollbar.call(this, el, { clearStyles: false });
	            }

	        });

	        /*------------------------------------*\
	            Debounce Helper
	            https://remysharp.com/2010/07/21/throttling-function-calls
	        \*------------------------------------*/
	        function debounce(fn, delay) {
	            var timer = null;
	            return function () {
	                var context = this,
	                    args = arguments;
	                clearTimeout(timer);
	                timer = setTimeout(function () {
	                    fn.apply(context, args);
	                }, delay);
	            };
	        };

	        /*------------------------------------*\
	            Throttle Helper
	            https://remysharp.com/2010/07/21/throttling-function-calls
	        \*------------------------------------*/
	        function throttle(fn, threshhold, scope) {
	            threshhold || (threshhold = 250);
	            var last, deferTimer;
	            return function () {
	                var context = scope || this;

	                var now = +new Date(),
	                    args = arguments;
	                if (last && now < last + threshhold) {
	                    // hold on to it
	                    clearTimeout(deferTimer);
	                    deferTimer = setTimeout(function () {
	                        last = now;
	                        fn.apply(context, args);
	                    }, threshhold);
	                } else {
	                    last = now;
	                    fn.apply(context, args);
	                }
	            };
	        }

	        /*------------------------------------*\
	            Style Vendor Prefixes Helper
	        \*------------------------------------*/
	        function compatStyle(element, property, value) {
	            element.style['webkit' + property] = value;
	            element.style['moz' + property] = value;
	            element.style['ms' + property] = value;
	            element.style['o' + property] = value;
	            element.style[property.slice(0, 1).toLowerCase() + property.substring(1)] = value;
	        }

	        /*------------------------------------*\
	            Class Manipulation Helpers
	            https://plainjs.com/javascript/attributes/adding-removing-and-testing-for-classes-9/
	        \*------------------------------------*/
	        function hasClass(el, className) {
	            return el.classList ? el.classList.contains(className) : new RegExp('\\b' + className + '\\b').test(el.className);
	        }

	        function addClass(el, className) {
	            if (el.classList) el.classList.add(className);else if (!hasClass(el, className)) el.className += ' ' + className;
	        }

	        function removeClass(el, className) {
	            if (el.classList) el.classList.remove(className);else el.className = el.className.replace(new RegExp('\\b' + className + '\\b', 'g'), '');
	        }

	        /*------------------------------------*\
	            Browser Detection Helper
	        \*------------------------------------*/
	        function detectBrowser() {

	            // get ie version helper
	            function getIEVersion() {
	                var match = window.navigator.userAgent.match(/(?:MSIE |Trident\/.*; rv:)(\d+)/);
	                return match ? parseInt(match[1]) : void 0;
	            }

	            // user agent & vendor
	            var ua = window.navigator.userAgent;
	            var vendor = window.navigator.vendor;

	            // chrome
	            var chrome = ua.toLowerCase().indexOf('chrome') > -1 && vendor.toLowerCase().indexOf('google') > -1;

	            // edge
	            var edge = ua.indexOf('Edge') > -1;

	            // safari
	            var safari = !!window.safari || ua.toLowerCase().indexOf('safari') > -1 && vendor.toLowerCase().indexOf('apple') > -1;

	            // internet explorer
	            var ie8 = getIEVersion() == 8;
	            var ie9 = getIEVersion() == 9;
	            var ie10 = getIEVersion() == 10;
	            var ie11 = getIEVersion() == 11;
	            var ie = ie8 || ie9 || ie10 || ie11;

	            // is it mobile browser?
	            // regex below thanks to http://detectmobilebrowsers.com/
	            var uaOrVendor = ua || vendor || window.opera;
	            var mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(uaOrVendor) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(uaOrVendor.substr(0, 4));

	            // construct return object
	            return {
	                edge: edge,
	                chrome: chrome,
	                safari: safari,
	                mobile: mobile,
	                ie: ie,
	                ie8: ie8,
	                ie9: ie9,
	                ie10: ie10,
	                ie11: ie11
	            };
	        }

	        /*------------------------------------*\
	            Calculate scrollbar width in element
	            - if the width is 0 it means the scrollbar is floated/overlayed
	            - accepts "container" paremeter because ie & edge can have different
	              scrollbar behaviors for different elements using '-ms-overflow-style'
	        \*------------------------------------*/
	        function getNativeScrollbarWidth(container) {
	            var container = container ? container : document.body;

	            var fullWidth = 0;
	            var barWidth = 0;

	            var wrapper = document.createElement('div');
	            var child = document.createElement('div');

	            wrapper.style.position = 'absolute';
	            wrapper.style.pointerEvents = 'none';
	            wrapper.style.bottom = '0';
	            wrapper.style.right = '0';
	            wrapper.style.width = '100px';
	            wrapper.style.overflow = 'hidden';

	            wrapper.appendChild(child);
	            container.appendChild(wrapper);

	            fullWidth = child.offsetWidth;
	            wrapper.style.overflowY = 'scroll';
	            barWidth = fullWidth - child.offsetWidth;

	            container.removeChild(wrapper);

	            return barWidth;
	        }
	    };

	    /*------------------------------------*\
	        Expose / Autoinstall
	    \*------------------------------------*/
	    if (true) {
	        module.exports = Vuebar;
	    } else if (typeof define === 'function' && define.amd) {
	        define(function () {
	            return Vuebar;
	        });
	    } else if (typeof window !== typeof void 0) {
	        window.Vuebar = Vuebar;
	    }

	    if (typeof Vue !== typeof void 0) {
	        Vue.use(Vuebar);
	    }
	})();

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	!(function (e, t) {
	   true ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e["vue-img"] = t();
	})(undefined, function () {
	  "use strict";!(function () {
	    if ("undefined" != typeof document) {
	      var e = document.head || document.getElementsByTagName("head")[0],
	          t = document.createElement("style"),
	          n = ' *[data-v-5928e1c7] { -webkit-box-sizing: border-box; box-sizing: border-box; } .fullscreen-v-img[data-v-5928e1c7] { z-index: 9999; height: 100%; width: 100%; position: fixed; top: 0; left: 0; overflow: hidden; background-color: rgba(0, 0, 0, 0.7); -ms-touch-action: none; touch-action: none; } .content-v-img img[data-v-5928e1c7] { width: auto; height: auto; max-width: 100%; max-height: 100%; position: absolute; top: 0; left: 0; right: 0; bottom: 0; margin: auto; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; } .header-v-img[data-v-5928e1c7] { position: absolute; width: 100%; background-color: rgba(0, 0, 0, 0.3); height: 50px; z-index: 9999; display: flex; justify-content: space-between; align-items: center; } .title-v-img[data-v-5928e1c7] { font-family: "Avenir", Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; color: white; text-align: center; max-height: 100%; overflow: auto; } .count-v-img[data-v-5928e1c7], .buttons-v-img[data-v-5928e1c7] { width: 80px; font-family: "Avenir", Helvetica, Arial, sans-serif; } .count-v-img[data-v-5928e1c7] { font-size: 15px; color: white; margin-left: 10px; } .buttons-v-img[data-v-5928e1c7] { margin-right: 10px; text-align: right; } .buttons-v-img span path[data-v-5928e1c7] { fill: #e5e6eb; -webkit-transition: fill 0.4s ease-in-out; transition: fill 0.4s ease-in-out; } .buttons-v-img span[data-v-5928e1c7] { cursor: pointer; color: #e5e6eb; font-size: 30px; -webkit-transition: color 0.4s ease-in-out; transition: color 0.4s ease-in-out; text-decoration: none; text-align: center; } .buttons-v-img span[data-v-5928e1c7]:not(:last-child) { margin-right: 8px; } .buttons-v-img span svg[data-v-5928e1c7] { height: 20px; width: 15px; } .buttons-v-img span:hover svg path[data-v-5928e1c7] { fill: white; } .buttons-v-img span[data-v-5928e1c7]:hover { color: white; } .prev-v-img svg[data-v-5928e1c7], .next-v-img svg[data-v-5928e1c7] { margin: 5px auto; } .prev-v-img[data-v-5928e1c7], .next-v-img[data-v-5928e1c7] { color: white; width: 35px; height: 35px; position: absolute; top: 50%; margin-top: -12.5px; font-size: 15px; font-family: "Avenir", Helvetica, Arial, sans-serif; text-align: center; background-color: rgba(0, 0, 0, 0.3); z-index: 1000; opacity: 0.3; -webkit-transition: opacity 0.3s ease-in-out; transition: opacity 0.3s ease-in-out; cursor: pointer; } .prev-v-img[data-v-5928e1c7]:hover, .next-v-img[data-v-5928e1c7]:hover { opacity: 1; } .prev-v-img[data-v-5928e1c7] { left: 10px; } .next-v-img[data-v-5928e1c7] { right: 10px; } .v-img-fade-enter[data-v-5928e1c7], .v-img-fade-leave-to[data-v-5928e1c7] { opacity: 0; } .v-img-fade-enter-active[data-v-5928e1c7], .v-img-fade-leave-active[data-v-5928e1c7] { -webkit-transition: opacity 0.3s ease-in-out; transition: opacity 0.3s ease-in-out; } ';t.type = "text/css", t.styleSheet ? t.styleSheet.cssText = n : t.appendChild(document.createTextNode(n)), e.appendChild(t);
	    }
	  })();var e = { render: function render() {
	      var e = this,
	          t = e.$createElement,
	          n = e._self._c || t;return n("transition", { attrs: { appear: "", name: "v-img-fade" } }, [e.closed ? e._e() : n("div", { staticClass: "fullscreen-v-img", on: { click: function click(t) {
	            if (t.target !== t.currentTarget) return null;e.close(t);
	          } } }, [n("div", { staticClass: "header-v-img" }, [n("span", { staticClass: "count-v-img" }, [e.images.length > 1 ? n("span", [e._v(e._s(e.currentImageIndex + 1) + "/" + e._s(e.images.length) + " ")]) : e._e()]), n("span", { staticClass: "title-v-img" }, [e._v(e._s(e.titles[e.currentImageIndex]))]), n("div", { staticClass: "buttons-v-img" }, [e.sourceButtons[e.currentImageIndex] ? n("span", [n("a", { attrs: { href: e.images[e.currentImageIndex], target: "_blank" } }, [n("svg", { staticStyle: { "enable-background": "new 0 0 475.078 475.077" }, attrs: { xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", version: "1.1", id: "Capa_1", x: "0px", y: "0px", width: "512px", height: "512px", viewBox: "0 0 475.078 475.077", "xml:space": "preserve" } }, [n("path", { attrs: { d: "M467.083,318.627c-5.324-5.328-11.8-7.994-19.41-7.994H315.195l-38.828,38.827c-11.04,10.657-23.982,15.988-38.828,15.988    c-14.843,0-27.789-5.324-38.828-15.988l-38.543-38.827H27.408c-7.612,0-14.083,2.669-19.414,7.994    C2.664,323.955,0,330.427,0,338.044v91.358c0,7.614,2.664,14.085,7.994,19.414c5.33,5.328,11.801,7.99,19.414,7.99h420.266    c7.61,0,14.086-2.662,19.41-7.99c5.332-5.329,7.994-11.8,7.994-19.414v-91.358C475.078,330.427,472.416,323.955,467.083,318.627z     M360.025,414.841c-3.621,3.617-7.905,5.424-12.854,5.424s-9.227-1.807-12.847-5.424c-3.614-3.617-5.421-7.898-5.421-12.844    c0-4.948,1.807-9.236,5.421-12.847c3.62-3.62,7.898-5.431,12.847-5.431s9.232,1.811,12.854,5.431    c3.613,3.61,5.421,7.898,5.421,12.847C365.446,406.942,363.638,411.224,360.025,414.841z M433.109,414.841    c-3.614,3.617-7.898,5.424-12.848,5.424c-4.948,0-9.229-1.807-12.847-5.424c-3.613-3.617-5.42-7.898-5.42-12.844    c0-4.948,1.807-9.236,5.42-12.847c3.617-3.62,7.898-5.431,12.847-5.431c4.949,0,9.233,1.811,12.848,5.431    c3.617,3.61,5.427,7.898,5.427,12.847C438.536,406.942,436.729,411.224,433.109,414.841z", fill: "#FFFFFF" } }), n("path", { attrs: { d: "M224.692,323.479c3.428,3.613,7.71,5.421,12.847,5.421c5.141,0,9.418-1.808,12.847-5.421l127.907-127.908    c5.899-5.519,7.234-12.182,3.997-19.986c-3.23-7.421-8.847-11.132-16.844-11.136h-73.091V36.543c0-4.948-1.811-9.231-5.421-12.847    c-3.62-3.617-7.901-5.426-12.847-5.426h-73.096c-4.946,0-9.229,1.809-12.847,5.426c-3.615,3.616-5.424,7.898-5.424,12.847V164.45    h-73.089c-7.998,0-13.61,3.715-16.846,11.136c-3.234,7.801-1.903,14.467,3.999,19.986L224.692,323.479z", fill: "#FFFFFF" } })])])]) : e._e(), n("span", { on: { click: e.close } }, [e._v("×")])])]), n("transition", { attrs: { appear: "", name: "v-img-fade" } }, [e.visibleUI && 1 !== e.images.length ? n("span", { staticClass: "prev-v-img", on: { click: e.prev } }, [n("svg", { attrs: { width: "25", height: "25", viewBox: "0 0 1792 1915", xmlns: "http://www.w3.org/2000/svg" } }, [n("path", { attrs: { d: "M1664 896v128q0 53-32.5 90.5t-84.5 37.5h-704l293 294q38 36 38 90t-38 90l-75 76q-37 37-90 37-52 0-91-37l-651-652q-37-37-37-90 0-52 37-91l651-650q38-38 91-38 52 0 90 38l75 74q38 38 38 91t-38 91l-293 293h704q52 0 84.5 37.5t32.5 90.5z", fill: "#fff" } })])]) : e._e()]), n("transition", { attrs: { appear: "", name: "v-img-fade" } }, [e.visibleUI && 1 !== e.images.length ? n("span", { staticClass: "next-v-img", on: { click: e.next } }, [n("svg", { attrs: { width: "25", height: "25", viewBox: "0 0 1792 1915", xmlns: "http://www.w3.org/2000/svg" } }, [n("path", { attrs: { d: "M1600 960q0 54-37 91l-651 651q-39 37-91 37-51 0-90-37l-75-75q-38-38-38-91t38-91l293-293h-704q-52 0-84.5-37.5t-32.5-90.5v-128q0-53 32.5-90.5t84.5-37.5h704l-293-294q-38-36-38-90t38-90l75-75q38-38 90-38 53 0 91 38l651 651q37 35 37 90z", fill: "#fff" } })])]) : e._e()]), n("div", { staticClass: "content-v-img" }, [n("img", { attrs: { src: e.images[e.currentImageIndex] }, on: { click: e.next } })])], 1)]);
	    }, staticRenderFns: [], _scopeId: "data-v-5928e1c7", data: function data() {
	      return { images: [], titles: [], sourceButtons: [], visibleUI: !0, currentImageIndex: 0, closed: !0, uiTimeout: null, handlers: {} };
	    }, watch: { closed: function closed(e) {
	        e && this.handlers.closed && this.handlers.closed(), !e && this.handlers.opened && this.handlers.opened();
	      } }, methods: { fireChangeEvent: function fireChangeEvent() {
	        this.handlers.changed && this.handlers.changed(this.currentImageIndex);
	      }, close: function close() {
	        this.closed || (document.querySelector("body").classList.remove("body-fs-v-img"), this.images = [], this.currentImageIndex = 0, this.closed = !0);
	      }, next: function next() {
	        !this.closed && this.images.length > 1 && (this.currentImageIndex + 1 < this.images.length ? this.currentImageIndex++ : this.currentImageIndex = 0, this.fireChangeEvent());
	      }, prev: function prev() {
	        !this.closed && this.images.length > 1 && (this.currentImageIndex > 0 ? this.currentImageIndex-- : this.currentImageIndex = this.images.length - 1, this.fireChangeEvent());
	      }, showUI: function showUI() {
	        var e = this;this.closed || (clearTimeout(this.uiTimeout), this.visibleUI = !0, this.uiTimeout = setTimeout(function () {
	          e.visibleUI = !1;
	        }, 3500));
	      } }, created: function created() {
	      var e = this;window.addEventListener("keyup", function (t) {
	        27 !== t.keyCode && 81 !== t.keyCode || e.close(), 39 !== t.keyCode && 76 !== t.keyCode || e.next(), 37 !== t.keyCode && 72 !== t.keyCode || e.prev();
	      }), window.addEventListener("scroll", function () {
	        e.close();
	      }), window.addEventListener("mousemove", function () {
	        e.showUI();
	      });
	    } },
	      t = ((function () {
	    function e(e) {
	      this.value = e;
	    }function t(t) {
	      function n(a, o) {
	        try {
	          var r = t[a](o),
	              s = r.value;s instanceof e ? Promise.resolve(s.value).then(function (e) {
	            n("next", e);
	          }, function (e) {
	            n("throw", e);
	          }) : i(r.done ? "return" : "normal", r.value);
	        } catch (e) {
	          i("throw", e);
	        }
	      }function i(e, t) {
	        switch (e) {case "return":
	            a.resolve({ value: t, done: !0 });break;case "throw":
	            a.reject(t);break;default:
	            a.resolve({ value: t, done: !1 });}(a = a.next) ? n(a.key, a.arg) : o = null;
	      }var a, o;this._invoke = function (e, t) {
	        return new Promise(function (i, r) {
	          var s = { key: e, arg: t, resolve: i, reject: r, next: null };o ? o = o.next = s : (a = o = s, n(e, t));
	        });
	      }, "function" != typeof t["return"] && (this["return"] = void 0);
	    }"function" == typeof Symbol && Symbol.asyncIterator && (t.prototype[Symbol.asyncIterator] = function () {
	      return this;
	    }), t.prototype.next = function (e) {
	      return this._invoke("next", e);
	    }, t.prototype["throw"] = function (e) {
	      return this._invoke("throw", e);
	    }, t.prototype["return"] = function (e) {
	      return this._invoke("return", e);
	    };
	  })(), Object.assign || function (e) {
	    for (var t = 1; t < arguments.length; t++) {
	      var n = arguments[t];for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
	    }return e;
	  }),
	      n = function n(e) {
	    if (Array.isArray(e)) {
	      for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];return n;
	    }return Array.from(e);
	  },
	      i = function i(e, t, n) {
	    var i = "pointer",
	        a = t.arg || null,
	        o = void 0,
	        r = void 0,
	        s = e.src,
	        c = void 0,
	        u = {};return n.altAsTitle && (c = e.alt), o = n.openOn, r = n.sourceButton, void 0 !== t.value && (i = t.value.cursor || i, a = t.value.group || a, o = t.value.openOn || o, s = t.value.src || s, c = t.value.title || c, void 0 !== t.value.sourceButton && (r = t.value.sourceButton), u.opened = t.value.opened, u.closed = t.value.closed, u.changed = t.value.changed), e.setAttribute("data-vue-img-src", s), a && e.setAttribute("data-vue-img-group", a), c && e.setAttribute("data-vue-img-title", c), r && e.setAttribute("data-vue-img-source-button", r), s || console.error("v-img element missing src parameter."), e.style.cursor = i, { cursor: i, src: s, group: a, title: c, events: u, sourceButton: r, openOn: o };
	  },
	      a = function a(_a, o) {
	    var r = _a.extend(e);o = t({ altAsTitle: !1, sourceButton: !1, openOn: "click" }, o), _a.directive("img", { update: function update(e, t, n, a) {
	        var r = void 0,
	            s = void 0;a.data.attrs && n.data.attrs && (s = a.data.attrs.src !== n.data.attrs.src, o.altAsTitle && (r = a.data.attrs.alt !== n.data.attrs.alt));var c = t.oldValue !== t.value;(s || r || c) && i(e, t, o);
	      }, bind: function bind(e, t) {
	        var s = i(e, t, o),
	            c = window.vueImg;if (!c) {
	          var u = document.createElement("div");u.setAttribute("id", "imageScreen"), document.querySelector("body").appendChild(u), c = window.vueImg = new r().$mount("#imageScreen");
	        }e.addEventListener(s.openOn, function () {
	          var t = void 0;t = e.dataset.vueImgGroup ? [].concat(n(document.querySelectorAll('img[data-vue-img-group="' + e.dataset.vueImgGroup + '"]'))) : [e], _a.set(c, "images", t.map(function (e) {
	            return e.dataset.vueImgSrc;
	          })), _a.set(c, "titles", t.map(function (e) {
	            return e.dataset.vueImgTitle;
	          })), _a.set(c, "sourceButtons", t.map(function (e) {
	            return "true" === e.dataset.vueImgSourceButton;
	          })), _a.set(c, "currentImageIndex", t.indexOf(e)), _a.set(c, "handlers", s.events), _a.set(c, "closed", !1);
	        });
	      } });
	  };return "undefined" != typeof window && window.Vue && window.Vue.use(a), a;
	});
	//# sourceMappingURL=v-img.js.map

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _vue = __webpack_require__(14);

	var _vue2 = _interopRequireDefault(_vue);

	var _striphtml = __webpack_require__(25);

	var _striphtml2 = _interopRequireDefault(_striphtml);

	exports['default'] = function () {
	  _vue2['default'].filter('striphtml', _striphtml2['default']);
	  _vue2['default'].filter('json', function (value) {
	    return JSON.stringify(value, null, 2);
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = function (value) {
	  var div = document.createElement('div');
	  div.innerHTML = value;
	  var text = div.textContent || div.innerText || '';
	  return text;
	};

	module.exports = exports['default'];

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _vue = __webpack_require__(14);

	var _vue2 = _interopRequireDefault(_vue);

	var _productMiniature = __webpack_require__(27);

	var _productMiniature2 = _interopRequireDefault(_productMiniature);

	var _productSmallList = __webpack_require__(32);

	var _productSmallList2 = _interopRequireDefault(_productSmallList);

	// import cartDetailedProduct from './cart-detailed-product'

	exports['default'] = function () {
	  _vue2['default'].component('product-miniature', _productMiniature2['default']);
	  _vue2['default'].component('products-small-list', _productSmallList2['default']);
	  // Vue.component('cart-detailed-product', cartDetailedProduct)
	};

	module.exports = exports['default'];

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _vue = __webpack_require__(14);

	var _vue2 = _interopRequireDefault(_vue);

	var _data = __webpack_require__(28);

	var _data2 = _interopRequireDefault(_data);

	var _methodsZoomBg = __webpack_require__(29);

	var _methodsZoomBg2 = _interopRequireDefault(_methodsZoomBg);

	var _methodsChangeImg = __webpack_require__(30);

	var _methodsChangeImg2 = _interopRequireDefault(_methodsChangeImg);

	var _methodsZoomLeave = __webpack_require__(31);

	var _methodsZoomLeave2 = _interopRequireDefault(_methodsZoomLeave);

	var productMiniature = _vue2['default'].extend({
	  template: '#product-miniature-template',
	  props: ['product'],
	  data: _data2['default'],
	  methods: {
	    changeImg: _methodsChangeImg2['default'],
	    zoomBg: _methodsZoomBg2['default'],
	    zoomLeave: _methodsZoomLeave2['default']
	  },
	  updated: function updated() {
	    if (!this.isHover) {
	      this.imgBig = this.product.cover.bySize.medium_default.url;
	      this.imgLarge = this.product.cover.large.url;
	    }
	  }
	});

	exports['default'] = productMiniature;
	module.exports = exports['default'];

/***/ }),
/* 28 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports["default"] = function () {
	  return {
	    imgBig: this.product.cover.bySize.medium_default.url,
	    imgLarge: this.product.cover.large.url,
	    isHover: document.documentElement.clientWidth > 992 ? false : true,
	    static_token: prestashop.static_token,
	    urls: prestashop.urls,
	    document: document,
	    configuration: prestashop.configuration,
	    sharePopOverId: "share-popover-" + getRandomFloat(0, 1000) + "-" + this.product.id_product + "-" + this.product.id_category_default
	  };
	};

	function getRandomFloat(min, max) {
	  return Math.random() * (max - min) + min;
	}
	module.exports = exports["default"];

/***/ }),
/* 29 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = function (event) {
	  var container = event.target.parentNode;
	  var elementZoom = event.target;
	  var x = event.offsetX == undefined ? event.layerX : event.offsetX;
	  var y = event.offsetY == undefined ? event.layerY : event.offsetY;

	  var e = {
	    w: elementZoom.offsetWidth,
	    h: elementZoom.offsetHeight
	  };

	  var c = {
	    x: x / (e.w / 70),
	    y: y / (e.h / 100)
	  };

	  elementZoom.style.opacity = 0;
	  container.style.backgroundImage = 'url(' + elementZoom.dataset.largeImg + ')';
	  container.style.backgroundPosition = c.x + '% ' + c.y + '%';
	};

	module.exports = exports['default'];

/***/ }),
/* 30 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports["default"] = function (event) {
	  if (event) {
	    this.imgBig = event.target.dataset.bigImg;
	    this.imgLarge = event.target.dataset.largeImg;
	  }
	};

	module.exports = exports["default"];

/***/ }),
/* 31 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = function (event) {
	  var container = event.target.parentNode;
	  var elementZoom = event.target;

	  elementZoom.style.opacity = 1;
	  container.style.backgroundImage = '';
	  container.style.backgroundPosition = '';
	};

	module.exports = exports['default'];

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _vue = __webpack_require__(14);

	var _vue2 = _interopRequireDefault(_vue);

	var productSmallList = _vue2['default'].extend({
	  template: '#product-small-list',
	  props: ['product']
	});

	exports['default'] = productSmallList;
	module.exports = exports['default'];

/***/ }),
/* 33 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = function () {
	  var _this = this;

	  $('body').on('click', '[data-button-action="add-to-cart"]', function (event) {
	    _this.$nextTick(function () {
	      this.themeLoaderShow = true;
	    });
	  });

	  prestashop.on('updateCart', function (event) {
	    var refreshURL = $('.blockcart').data('refresh-url');
	    var requestData = {};

	    if (event && event.reason) {
	      requestData = {
	        id_product_attribute: event.reason.idProductAttribute,
	        id_product: event.reason.idProduct,
	        action: event.reason.linkAction
	      };
	    }

	    $.post(refreshURL, requestData).then(function (resp) {
	      _this.$nextTick(function () {
	        this.modules.blockcart = $(resp.preview).find('.blockcart').data('module-data');
	      });

	      if (resp.modal) {
	        _this.showCartModal();

	        _this.$nextTick(function () {
	          this.themeLoaderShow = false;
	          this.blockcart.modalData = resp.modal;
	        });
	      }
	    }).fail(function (resp) {
	      prestashop.emit('handleError', { eventType: 'updateShoppingCart', resp: resp });
	    });
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _prestashop = __webpack_require__(12);

	var _prestashop2 = _interopRequireDefault(_prestashop);

	exports['default'] = function () {
	  var _this = this;

	  $('body').on('change', '#search_filters input[data-search-url]', function (event) {
	    _prestashop2['default'].emit('updateFacets', parseSearchUrl(event));

	    _this.$nextTick(function () {
	      this.themeLoaderShow = true;
	    });
	  });

	  $('body').on('click', '.js-search-link, .js-search-filters-clear-all', function (event) {
	    event.preventDefault();

	    _prestashop2['default'].emit('updateFacets', $(event.target).closest('a').get(0).href);

	    _this.$nextTick(function () {
	      this.themeLoaderShow = true;
	    });
	  });

	  _prestashop2['default'].on('updateProductList', function (data) {
	    _this.$nextTick(function () {
	      this.modules.listingProduct = $(data.rendered_products).filter('#js-product-list').data('module-data');
	      updateProductListDOM(data);
	      this.themeLoaderShow = false;
	    });
	  });
	};

	function parseSearchUrl(event) {
	  if (event.target.dataset.searchUrl !== undefined) {
	    return event.target.dataset.searchUrl;
	  }

	  if ($(event.target).parent()[0].dataset.searchUrl === undefined) {
	    throw new Error('Can not parse search URL');
	  }

	  return $(event.target).parent()[0].dataset.searchUrl;
	}

	function updateProductListDOM(data) {
	  $('#search_filters').replaceWith(data.rendered_facets);
	  $('#js-active-search-filters').replaceWith(data.rendered_active_filters);
	  $('#js-product-list-top').replaceWith(data.rendered_products_top);
	  $('#js-product-list-bottom').replaceWith(data.rendered_products_bottom);
	}
	module.exports = exports['default'];

/***/ }),
/* 35 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports["default"] = function () {
	  this.$refs.blokcart.show();
	};

	module.exports = exports["default"];

/***/ }),
/* 36 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports["default"] = function () {
	  this.$refs.blokcart.hide();
	};

	module.exports = exports["default"];

/***/ }),
/* 37 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports["default"] = function (event) {
	  this.modules.productPageData.cover = JSON.parse(event.target.dataset.coverData);
	};

	module.exports = exports["default"];

/***/ }),
/* 38 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = function (event) {
	  var container = event.target.parentNode;
	  var elementZoom = event.target;
	  var x = event.offsetX == undefined ? event.layerX : event.offsetX;
	  var y = event.offsetY == undefined ? event.layerY : event.offsetY;

	  var e = {
	    w: elementZoom.offsetWidth,
	    h: elementZoom.offsetHeight
	  };

	  var c = {
	    x: x / (e.w / 70),
	    y: y / (e.h / 100)
	  };

	  elementZoom.style.opacity = 0;
	  container.style.backgroundImage = 'url(' + elementZoom.dataset.largeImg + ')';
	  container.style.backgroundPosition = c.x + '% ' + c.y + '%';
	};

	module.exports = exports['default'];

/***/ }),
/* 39 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = function (event) {
	  var container = event.target.parentNode;
	  var elementZoom = event.target;

	  elementZoom.style.opacity = 1;
	  container.style.backgroundImage = '';
	  container.style.backgroundPosition = '';
	};

	module.exports = exports['default'];

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _prestashop = __webpack_require__(12);

	var _prestashop2 = _interopRequireDefault(_prestashop);

	var _refreshClickEmit = __webpack_require__(41);

	var _refreshClickEmit2 = _interopRequireDefault(_refreshClickEmit);

	var _refreshClickListener = __webpack_require__(42);

	var _refreshClickListener2 = _interopRequireDefault(_refreshClickListener);

	var _replaceAddToCartSections = __webpack_require__(44);

	var _replaceAddToCartSections2 = _interopRequireDefault(_replaceAddToCartSections);

	exports['default'] = function () {
	  var _this = this;

	  var updateEventName = 'customUpdateProduct';
	  _refreshClickEmit2['default'].call(this);

	  $('body').on('click', '.custom-product-refresh', _refreshClickListener2['default']);

	  _prestashop2['default'].on(updateEventName, function (event) {
	    if (typeof event.refreshUrl == 'undefined') {
	      event.refreshUrl = true;
	    }

	    var eventType = event.eventType;

	    $.post(event.reason.productUrl, { ajax: '1', action: 'refresh' }, null, 'json').then(function (resp) {
	      // console.log(resp)

	      _this.$nextTick(function () {
	        this.modules.productPageData = $(resp.product_cover_thumbnails).filter('#ajax-product-images').data('ajax-products');
	        this.themeLoaderShow = false;
	      });

	      $('.product-prices').replaceWith(resp.product_prices);
	      $('.product-customization').replaceWith(resp.product_customization);
	      $('.product-variants').replaceWith(resp.product_variants);
	      $('.product-discounts').replaceWith(resp.product_discounts);
	      $('.product-additional-info').replaceWith(resp.product_additional_info);
	      $('#product-details').replaceWith(resp.product_details);

	      // Replace all "add to cart" sections but the quantity input in order to keep quantity field intact i.e.
	      // Prevent quantity input from blinking with classic theme.
	      var $productAddToCart = undefined;
	      $(resp.product_add_to_cart).each(function (index, value) {
	        if ($(value).hasClass('product-add-to-cart')) {
	          $productAddToCart = $(value);
	        }
	      });

	      (0, _replaceAddToCartSections2['default'])($productAddToCart);

	      var minimalProductQuantity = parseInt(resp.product_minimal_quantity, 10);
	      var quantityInputSelector = '#quantity_wanted';
	      var quantityInput = $(quantityInputSelector);
	      var quantity_wanted = quantityInput.val();

	      if (!isNaN(minimalProductQuantity) && quantity_wanted < minimalProductQuantity && eventType !== 'updatedProductQuantity') {
	        quantityInput.attr('min', minimalProductQuantity);
	        quantityInput.val(minimalProductQuantity);
	      }

	      if (event.refreshUrl) {
	        window.history.pushState({
	          id_product_attribute: resp.id_product_attribute
	        }, undefined, resp.product_url);
	      }

	      //   prestashop.emit(updateEventName, resp)
	    });
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 41 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = function () {
	  var _this = this;

	  var selector = '.product-variants [data-custom-product-attribute]';

	  $('body').on('change', selector, function () {
	    $("input[name$='refresh']").click();

	    _this.$nextTick(function () {
	      this.themeLoaderShow = true;
	    });
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _getRequestParameter = __webpack_require__(43);

	exports['default'] = function (event, extraParameters) {
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

	module.exports = exports['default'];

/***/ }),
/* 43 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
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

/***/ }),
/* 44 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
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

	exports['default'] = replaceAddToCartSections;
	module.exports = exports['default'];

/***/ }),
/* 45 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = function (event) {
	  var _this = this;

	  var minLetters = 2;
	  var searchURL = event.target.dataset.searchControllerUrl;

	  if (event.target.value.length > minLetters) {
	    delayCall($(this), 500, function () {
	      $.post(searchURL, {
	        s: event.target.value,
	        resultsPerPage: 30
	      }, null, 'json').then(function (resp) {
	        _this.blockcart.data = $(resp.rendered_products).filter('#js-product-list').data('module-data');

	        if ($(resp.rendered_products).filter('#js-product-list').data('module-data').length === 0) {
	          _this.blockcart.noResult = true;
	        }
	      }).fail(function (e) {
	        console.log(e);
	      });
	    });
	  } else {
	    this.blockcart.data = [];
	    this.blockcart.noResult = false;
	  }
	};

	function delayCall(obj, ms, fn) {
	  return $(obj).each(function () {
	    if (typeof this.timer == 'undefined') {
	      // Define an array to keep track of all fields needed delays
	      // This is in order to make this a multiple delay handling    
	      // function
	      this.timer = new Array();
	    }
	    var obj = this;
	    if (this.timer[obj.id]) {
	      clearTimeout(this.timer[obj.id]);
	      delete this.timer[obj.id];
	    }

	    this.timer[obj.id] = setTimeout(function () {
	      fn(obj);
	    }, ms);
	  });
	};
	module.exports = exports['default'];

/***/ }),
/* 46 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 47 */,
/* 48 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 49 */,
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _updateCart = __webpack_require__(53);

	var _updateCart2 = _interopRequireDefault(_updateCart);

	exports.updateCartCore = _updateCart2['default'];

/***/ }),
/* 51 */,
/* 52 */,
/* 53 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
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

	exports['default'] = function (event) {
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
	        });
	    });
	};

	module.exports = exports['default'];
	// cartAction: cartAction.type

/***/ })
/******/ ]);