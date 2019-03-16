(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Layla"] = factory();
	else
		root["Layla"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/eases/back-in-out.js":
/*!*******************************************!*\
  !*** ./node_modules/eases/back-in-out.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function backInOut(t) {\n  var s = 1.70158 * 1.525\n  if ((t *= 2) < 1)\n    return 0.5 * (t * t * ((s + 1) * t - s))\n  return 0.5 * ((t -= 2) * t * ((s + 1) * t + s) + 2)\n}\n\nmodule.exports = backInOut\n\n//# sourceURL=webpack://Layla/./node_modules/eases/back-in-out.js?");

/***/ }),

/***/ "./node_modules/eases/back-in.js":
/*!***************************************!*\
  !*** ./node_modules/eases/back-in.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function backIn(t) {\n  var s = 1.70158\n  return t * t * ((s + 1) * t - s)\n}\n\nmodule.exports = backIn\n\n//# sourceURL=webpack://Layla/./node_modules/eases/back-in.js?");

/***/ }),

/***/ "./node_modules/eases/back-out.js":
/*!****************************************!*\
  !*** ./node_modules/eases/back-out.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function backOut(t) {\n  var s = 1.70158\n  return --t * t * ((s + 1) * t + s) + 1\n}\n\nmodule.exports = backOut\n\n//# sourceURL=webpack://Layla/./node_modules/eases/back-out.js?");

/***/ }),

/***/ "./node_modules/eases/bounce-in-out.js":
/*!*********************************************!*\
  !*** ./node_modules/eases/bounce-in-out.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var bounceOut = __webpack_require__(/*! ./bounce-out */ \"./node_modules/eases/bounce-out.js\")\n\nfunction bounceInOut(t) {\n  return t < 0.5\n    ? 0.5 * (1.0 - bounceOut(1.0 - t * 2.0))\n    : 0.5 * bounceOut(t * 2.0 - 1.0) + 0.5\n}\n\nmodule.exports = bounceInOut\n\n//# sourceURL=webpack://Layla/./node_modules/eases/bounce-in-out.js?");

/***/ }),

/***/ "./node_modules/eases/bounce-in.js":
/*!*****************************************!*\
  !*** ./node_modules/eases/bounce-in.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var bounceOut = __webpack_require__(/*! ./bounce-out */ \"./node_modules/eases/bounce-out.js\")\n\nfunction bounceIn(t) {\n  return 1.0 - bounceOut(1.0 - t)\n}\n\nmodule.exports = bounceIn\n\n//# sourceURL=webpack://Layla/./node_modules/eases/bounce-in.js?");

/***/ }),

/***/ "./node_modules/eases/bounce-out.js":
/*!******************************************!*\
  !*** ./node_modules/eases/bounce-out.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function bounceOut(t) {\n  var a = 4.0 / 11.0\n  var b = 8.0 / 11.0\n  var c = 9.0 / 10.0\n\n  var ca = 4356.0 / 361.0\n  var cb = 35442.0 / 1805.0\n  var cc = 16061.0 / 1805.0\n\n  var t2 = t * t\n\n  return t < a\n    ? 7.5625 * t2\n    : t < b\n      ? 9.075 * t2 - 9.9 * t + 3.4\n      : t < c\n        ? ca * t2 - cb * t + cc\n        : 10.8 * t * t - 20.52 * t + 10.72\n}\n\nmodule.exports = bounceOut\n\n//# sourceURL=webpack://Layla/./node_modules/eases/bounce-out.js?");

/***/ }),

/***/ "./node_modules/eases/circ-in-out.js":
/*!*******************************************!*\
  !*** ./node_modules/eases/circ-in-out.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function circInOut(t) {\n  if ((t *= 2) < 1) return -0.5 * (Math.sqrt(1 - t * t) - 1)\n  return 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1)\n}\n\nmodule.exports = circInOut\n\n//# sourceURL=webpack://Layla/./node_modules/eases/circ-in-out.js?");

/***/ }),

/***/ "./node_modules/eases/circ-in.js":
/*!***************************************!*\
  !*** ./node_modules/eases/circ-in.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function circIn(t) {\n  return 1.0 - Math.sqrt(1.0 - t * t)\n}\n\nmodule.exports = circIn\n\n//# sourceURL=webpack://Layla/./node_modules/eases/circ-in.js?");

/***/ }),

/***/ "./node_modules/eases/circ-out.js":
/*!****************************************!*\
  !*** ./node_modules/eases/circ-out.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function circOut(t) {\n  return Math.sqrt(1 - ( --t * t ))\n}\n\nmodule.exports = circOut\n\n//# sourceURL=webpack://Layla/./node_modules/eases/circ-out.js?");

/***/ }),

/***/ "./node_modules/eases/cubic-in-out.js":
/*!********************************************!*\
  !*** ./node_modules/eases/cubic-in-out.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function cubicInOut(t) {\n  return t < 0.5\n    ? 4.0 * t * t * t\n    : 0.5 * Math.pow(2.0 * t - 2.0, 3.0) + 1.0\n}\n\nmodule.exports = cubicInOut\n\n//# sourceURL=webpack://Layla/./node_modules/eases/cubic-in-out.js?");

/***/ }),

/***/ "./node_modules/eases/cubic-in.js":
/*!****************************************!*\
  !*** ./node_modules/eases/cubic-in.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function cubicIn(t) {\n  return t * t * t\n}\n\nmodule.exports = cubicIn\n\n//# sourceURL=webpack://Layla/./node_modules/eases/cubic-in.js?");

/***/ }),

/***/ "./node_modules/eases/cubic-out.js":
/*!*****************************************!*\
  !*** ./node_modules/eases/cubic-out.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function cubicOut(t) {\n  var f = t - 1.0\n  return f * f * f + 1.0\n}\n\nmodule.exports = cubicOut\n\n//# sourceURL=webpack://Layla/./node_modules/eases/cubic-out.js?");

/***/ }),

/***/ "./node_modules/eases/elastic-in-out.js":
/*!**********************************************!*\
  !*** ./node_modules/eases/elastic-in-out.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function elasticInOut(t) {\n  return t < 0.5\n    ? 0.5 * Math.sin(+13.0 * Math.PI/2 * 2.0 * t) * Math.pow(2.0, 10.0 * (2.0 * t - 1.0))\n    : 0.5 * Math.sin(-13.0 * Math.PI/2 * ((2.0 * t - 1.0) + 1.0)) * Math.pow(2.0, -10.0 * (2.0 * t - 1.0)) + 1.0\n}\n\nmodule.exports = elasticInOut\n\n//# sourceURL=webpack://Layla/./node_modules/eases/elastic-in-out.js?");

/***/ }),

/***/ "./node_modules/eases/elastic-in.js":
/*!******************************************!*\
  !*** ./node_modules/eases/elastic-in.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function elasticIn(t) {\n  return Math.sin(13.0 * t * Math.PI/2) * Math.pow(2.0, 10.0 * (t - 1.0))\n}\n\nmodule.exports = elasticIn\n\n//# sourceURL=webpack://Layla/./node_modules/eases/elastic-in.js?");

/***/ }),

/***/ "./node_modules/eases/elastic-out.js":
/*!*******************************************!*\
  !*** ./node_modules/eases/elastic-out.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function elasticOut(t) {\n  return Math.sin(-13.0 * (t + 1.0) * Math.PI/2) * Math.pow(2.0, -10.0 * t) + 1.0\n}\n\nmodule.exports = elasticOut\n\n//# sourceURL=webpack://Layla/./node_modules/eases/elastic-out.js?");

/***/ }),

/***/ "./node_modules/eases/expo-in-out.js":
/*!*******************************************!*\
  !*** ./node_modules/eases/expo-in-out.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function expoInOut(t) {\n  return (t === 0.0 || t === 1.0)\n    ? t\n    : t < 0.5\n      ? +0.5 * Math.pow(2.0, (20.0 * t) - 10.0)\n      : -0.5 * Math.pow(2.0, 10.0 - (t * 20.0)) + 1.0\n}\n\nmodule.exports = expoInOut\n\n//# sourceURL=webpack://Layla/./node_modules/eases/expo-in-out.js?");

/***/ }),

/***/ "./node_modules/eases/expo-in.js":
/*!***************************************!*\
  !*** ./node_modules/eases/expo-in.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function expoIn(t) {\n  return t === 0.0 ? t : Math.pow(2.0, 10.0 * (t - 1.0))\n}\n\nmodule.exports = expoIn\n\n//# sourceURL=webpack://Layla/./node_modules/eases/expo-in.js?");

/***/ }),

/***/ "./node_modules/eases/expo-out.js":
/*!****************************************!*\
  !*** ./node_modules/eases/expo-out.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function expoOut(t) {\n  return t === 1.0 ? t : 1.0 - Math.pow(2.0, -10.0 * t)\n}\n\nmodule.exports = expoOut\n\n//# sourceURL=webpack://Layla/./node_modules/eases/expo-out.js?");

/***/ }),

/***/ "./node_modules/eases/index.js":
/*!*************************************!*\
  !*** ./node_modules/eases/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = {\n\t'backInOut': __webpack_require__(/*! ./back-in-out */ \"./node_modules/eases/back-in-out.js\"),\n\t'backIn': __webpack_require__(/*! ./back-in */ \"./node_modules/eases/back-in.js\"),\n\t'backOut': __webpack_require__(/*! ./back-out */ \"./node_modules/eases/back-out.js\"),\n\t'bounceInOut': __webpack_require__(/*! ./bounce-in-out */ \"./node_modules/eases/bounce-in-out.js\"),\n\t'bounceIn': __webpack_require__(/*! ./bounce-in */ \"./node_modules/eases/bounce-in.js\"),\n\t'bounceOut': __webpack_require__(/*! ./bounce-out */ \"./node_modules/eases/bounce-out.js\"),\n\t'circInOut': __webpack_require__(/*! ./circ-in-out */ \"./node_modules/eases/circ-in-out.js\"),\n\t'circIn': __webpack_require__(/*! ./circ-in */ \"./node_modules/eases/circ-in.js\"),\n\t'circOut': __webpack_require__(/*! ./circ-out */ \"./node_modules/eases/circ-out.js\"),\n\t'cubicInOut': __webpack_require__(/*! ./cubic-in-out */ \"./node_modules/eases/cubic-in-out.js\"),\n\t'cubicIn': __webpack_require__(/*! ./cubic-in */ \"./node_modules/eases/cubic-in.js\"),\n\t'cubicOut': __webpack_require__(/*! ./cubic-out */ \"./node_modules/eases/cubic-out.js\"),\n\t'elasticInOut': __webpack_require__(/*! ./elastic-in-out */ \"./node_modules/eases/elastic-in-out.js\"),\n\t'elasticIn': __webpack_require__(/*! ./elastic-in */ \"./node_modules/eases/elastic-in.js\"),\n\t'elasticOut': __webpack_require__(/*! ./elastic-out */ \"./node_modules/eases/elastic-out.js\"),\n\t'expoInOut': __webpack_require__(/*! ./expo-in-out */ \"./node_modules/eases/expo-in-out.js\"),\n\t'expoIn': __webpack_require__(/*! ./expo-in */ \"./node_modules/eases/expo-in.js\"),\n\t'expoOut': __webpack_require__(/*! ./expo-out */ \"./node_modules/eases/expo-out.js\"),\n\t'linear': __webpack_require__(/*! ./linear */ \"./node_modules/eases/linear.js\"),\n\t'quadInOut': __webpack_require__(/*! ./quad-in-out */ \"./node_modules/eases/quad-in-out.js\"),\n\t'quadIn': __webpack_require__(/*! ./quad-in */ \"./node_modules/eases/quad-in.js\"),\n\t'quadOut': __webpack_require__(/*! ./quad-out */ \"./node_modules/eases/quad-out.js\"),\n\t'quartInOut': __webpack_require__(/*! ./quart-in-out */ \"./node_modules/eases/quart-in-out.js\"),\n\t'quartIn': __webpack_require__(/*! ./quart-in */ \"./node_modules/eases/quart-in.js\"),\n\t'quartOut': __webpack_require__(/*! ./quart-out */ \"./node_modules/eases/quart-out.js\"),\n\t'quintInOut': __webpack_require__(/*! ./quint-in-out */ \"./node_modules/eases/quint-in-out.js\"),\n\t'quintIn': __webpack_require__(/*! ./quint-in */ \"./node_modules/eases/quint-in.js\"),\n\t'quintOut': __webpack_require__(/*! ./quint-out */ \"./node_modules/eases/quint-out.js\"),\n\t'sineInOut': __webpack_require__(/*! ./sine-in-out */ \"./node_modules/eases/sine-in-out.js\"),\n\t'sineIn': __webpack_require__(/*! ./sine-in */ \"./node_modules/eases/sine-in.js\"),\n\t'sineOut': __webpack_require__(/*! ./sine-out */ \"./node_modules/eases/sine-out.js\")\n}\n\n//# sourceURL=webpack://Layla/./node_modules/eases/index.js?");

/***/ }),

/***/ "./node_modules/eases/linear.js":
/*!**************************************!*\
  !*** ./node_modules/eases/linear.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function linear(t) {\n  return t\n}\n\nmodule.exports = linear\n\n//# sourceURL=webpack://Layla/./node_modules/eases/linear.js?");

/***/ }),

/***/ "./node_modules/eases/quad-in-out.js":
/*!*******************************************!*\
  !*** ./node_modules/eases/quad-in-out.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function quadInOut(t) {\n    t /= 0.5\n    if (t < 1) return 0.5*t*t\n    t--\n    return -0.5 * (t*(t-2) - 1)\n}\n\nmodule.exports = quadInOut\n\n//# sourceURL=webpack://Layla/./node_modules/eases/quad-in-out.js?");

/***/ }),

/***/ "./node_modules/eases/quad-in.js":
/*!***************************************!*\
  !*** ./node_modules/eases/quad-in.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function quadIn(t) {\n  return t * t\n}\n\nmodule.exports = quadIn\n\n//# sourceURL=webpack://Layla/./node_modules/eases/quad-in.js?");

/***/ }),

/***/ "./node_modules/eases/quad-out.js":
/*!****************************************!*\
  !*** ./node_modules/eases/quad-out.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function quadOut(t) {\n  return -t * (t - 2.0)\n}\n\nmodule.exports = quadOut\n\n//# sourceURL=webpack://Layla/./node_modules/eases/quad-out.js?");

/***/ }),

/***/ "./node_modules/eases/quart-in-out.js":
/*!********************************************!*\
  !*** ./node_modules/eases/quart-in-out.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function quarticInOut(t) {\n  return t < 0.5\n    ? +8.0 * Math.pow(t, 4.0)\n    : -8.0 * Math.pow(t - 1.0, 4.0) + 1.0\n}\n\nmodule.exports = quarticInOut\n\n//# sourceURL=webpack://Layla/./node_modules/eases/quart-in-out.js?");

/***/ }),

/***/ "./node_modules/eases/quart-in.js":
/*!****************************************!*\
  !*** ./node_modules/eases/quart-in.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function quarticIn(t) {\n  return Math.pow(t, 4.0)\n}\n\nmodule.exports = quarticIn\n\n//# sourceURL=webpack://Layla/./node_modules/eases/quart-in.js?");

/***/ }),

/***/ "./node_modules/eases/quart-out.js":
/*!*****************************************!*\
  !*** ./node_modules/eases/quart-out.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function quarticOut(t) {\n  return Math.pow(t - 1.0, 3.0) * (1.0 - t) + 1.0\n}\n\nmodule.exports = quarticOut\n\n//# sourceURL=webpack://Layla/./node_modules/eases/quart-out.js?");

/***/ }),

/***/ "./node_modules/eases/quint-in-out.js":
/*!********************************************!*\
  !*** ./node_modules/eases/quint-in-out.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function qinticInOut(t) {\n    if ( ( t *= 2 ) < 1 ) return 0.5 * t * t * t * t * t\n    return 0.5 * ( ( t -= 2 ) * t * t * t * t + 2 )\n}\n\nmodule.exports = qinticInOut\n\n//# sourceURL=webpack://Layla/./node_modules/eases/quint-in-out.js?");

/***/ }),

/***/ "./node_modules/eases/quint-in.js":
/*!****************************************!*\
  !*** ./node_modules/eases/quint-in.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function qinticIn(t) {\n  return t * t * t * t * t\n}\n\nmodule.exports = qinticIn\n\n//# sourceURL=webpack://Layla/./node_modules/eases/quint-in.js?");

/***/ }),

/***/ "./node_modules/eases/quint-out.js":
/*!*****************************************!*\
  !*** ./node_modules/eases/quint-out.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function qinticOut(t) {\n  return --t * t * t * t * t + 1\n}\n\nmodule.exports = qinticOut\n\n//# sourceURL=webpack://Layla/./node_modules/eases/quint-out.js?");

/***/ }),

/***/ "./node_modules/eases/sine-in-out.js":
/*!*******************************************!*\
  !*** ./node_modules/eases/sine-in-out.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function sineInOut(t) {\n  return -0.5 * (Math.cos(Math.PI*t) - 1)\n}\n\nmodule.exports = sineInOut\n\n//# sourceURL=webpack://Layla/./node_modules/eases/sine-in-out.js?");

/***/ }),

/***/ "./node_modules/eases/sine-in.js":
/*!***************************************!*\
  !*** ./node_modules/eases/sine-in.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function sineIn (t) {\n  var v = Math.cos(t * Math.PI * 0.5)\n  if (Math.abs(v) < 1e-14) return 1\n  else return 1 - v\n}\n\nmodule.exports = sineIn\n\n\n//# sourceURL=webpack://Layla/./node_modules/eases/sine-in.js?");

/***/ }),

/***/ "./node_modules/eases/sine-out.js":
/*!****************************************!*\
  !*** ./node_modules/eases/sine-out.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function sineOut(t) {\n  return Math.sin(t * Math.PI/2)\n}\n\nmodule.exports = sineOut\n\n//# sourceURL=webpack://Layla/./node_modules/eases/sine-out.js?");

/***/ }),

/***/ "./src/js/Core/Base.js":
/*!*****************************!*\
  !*** ./src/js/Core/Base.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Base; });\n/* harmony import */ var _EventDispatcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventDispatcher */ \"./src/js/Core/EventDispatcher.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\n\n\nvar Base =\n/*#__PURE__*/\nfunction (_EventDispatcher) {\n  _inherits(Base, _EventDispatcher);\n\n  function Base(options) {\n    var _this;\n\n    _classCallCheck(this, Base);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Base).call(this));\n    _this.children = [];\n    _this.isLayla = true;\n    _this.options = options;\n    _this.parent = null;\n\n    _this.setId(_assertThisInitialized(_assertThisInitialized(_this))); // event binding\n\n\n    _this.onAfterAdd = _this.onAfterAdd.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    _this.onProgress = _this.onProgress.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    _this.onComplete = _this.onComplete.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    if (\"onComplete\" in _this.options) _this.addEventListener(\"onComplete\", _this.options.onComplete);\n    if (\"onProgress\" in _this.options) _this.addEventListener(\"onProgress\", _this.options.onProgress);\n\n    _this.addEventListener(\"onAfterAdd\", _this.onAfterAdd);\n\n    return _this;\n  }\n\n  _createClass(Base, [{\n    key: \"onComplete\",\n    value: function onComplete() {\n      this.dispatchEvent({\n        type: \"onComplete\"\n      });\n    }\n  }, {\n    key: \"onProgress\",\n    value: function onProgress() {\n      this.dispatchEvent({\n        type: \"onProgress\"\n      });\n    }\n  }, {\n    key: \"onAfterAdd\",\n    value: function onAfterAdd(e) {}\n  }, {\n    key: \"clone\",\n    value: function clone() {\n      var clone = Object.assign(Object.create(Object.getPrototypeOf(this)), this);\n      this.setId(clone);\n      return clone;\n    }\n  }, {\n    key: \"add\",\n    value: function add(object, options) {\n      if (object.length >= 1) {\n        if (this.isTimeline) {\n          var tweens = [];\n\n          for (var i = 0; i < object.length; i++) {\n            if (object[i].isTween) tweens.push(object[i]);\n            if (object[i].isTrack) this.add(object[i], {});\n          }\n\n          var track = this.getTrackFromTweens(tweens, options);\n          this.add(track, {});\n          return this;\n        }\n\n        for (var _i = 0; _i < object.length; _i++) {\n          this.add(object[_i]);\n        }\n\n        return this;\n      }\n\n      if (object === this) {\n        console.error(\"Layla.Base.add: Object can't be a child of itself.\", object);\n        return this;\n      }\n\n      if (object && object.isLayla) {\n        if (object.parent !== null) {\n          object.parent.remove(object);\n        }\n\n        if (this.isTimeline) {\n          if (!object.isTween && !object.isTrack) {\n            console.error(\"Layla.Base.add: Object is not an instance of Layla.Tween or Layla.Track.\", object);\n            return this;\n          }\n        }\n\n        if (this.isTrack) {\n          if (!object.isTween) {\n            console.error(\"Layla.Base.add: Object is not an instance of Layla.Tween.\", object);\n            return this;\n          }\n        }\n\n        object.parent = this;\n        this.children.push(object);\n        object.dispatchEvent({\n          type: \"added\"\n        });\n        this.onChildChange();\n      } else {\n        console.error(\"Layla.Base.add: Object is not an instance of Layla.Base.\", object);\n      }\n\n      return this;\n    }\n  }, {\n    key: \"remove\",\n    value: function remove(object) {\n      if (arguments.length > 1) {\n        for (var i = 0; i < arguments.length; i++) {\n          this.remove(arguments[i]);\n        }\n\n        return this;\n      }\n\n      var index = this.children.indexOf(object);\n\n      if (index !== -1) {\n        object.parent = null;\n        object.dispatchEvent({\n          type: \"removed\"\n        });\n        this.children.splice(index, 1);\n        this.onChildChange();\n      }\n\n      return this;\n    }\n  }, {\n    key: \"onChildChange\",\n    value: function onChildChange() {\n      if (this.isTimeline) {\n        this.updateDuration();\n      }\n\n      if (this.isTrack) {\n        this.updateTimeRange();\n      }\n    }\n  }, {\n    key: \"updateChildren\",\n    value: function updateChildren(time) {\n      this.children.forEach(function (child) {\n        child.update(time);\n      });\n    }\n  }, {\n    key: \"setId\",\n    value: function setId(object) {\n      object.id = Base.ID;\n      Base.ID++;\n      Base.Instances.push(object);\n    }\n  }]);\n\n  return Base;\n}(_EventDispatcher__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\nBase.Instances = [];\nBase.ID = 0;\n\n\n//# sourceURL=webpack://Layla/./src/js/Core/Base.js?");

/***/ }),

/***/ "./src/js/Core/Clock.js":
/*!******************************!*\
  !*** ./src/js/Core/Clock.js ***!
  \******************************/
/*! exports provided: default, Clock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Clock; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Clock\", function() { return Clock; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Clock =\n/*#__PURE__*/\nfunction () {\n  function Clock(autoStart) {\n    _classCallCheck(this, Clock);\n\n    this.autoStart = autoStart !== undefined ? autoStart : true;\n    this.startTime = 0;\n    this.oldTime = 0;\n    this.elapsedTime = 0;\n    this.running = false;\n  }\n\n  _createClass(Clock, [{\n    key: \"start\",\n    value: function start() {\n      this.startTime = (typeof performance === \"undefined\" ? Date : performance).now(); // see #10732\n\n      this.oldTime = this.startTime;\n      this.elapsedTime = 0;\n      this.running = true;\n    }\n  }, {\n    key: \"stop\",\n    value: function stop() {\n      this.getElapsedTime();\n      this.running = false;\n      this.autoStart = false;\n    }\n  }, {\n    key: \"getElapsedTime\",\n    value: function getElapsedTime() {\n      this.getDelta();\n      return this.elapsedTime;\n    }\n  }, {\n    key: \"getDelta\",\n    value: function getDelta() {\n      var diff = 0;\n\n      if (this.autoStart && !this.running) {\n        this.start();\n        return 0;\n      }\n\n      if (this.running) {\n        var newTime = (typeof performance === \"undefined\" ? Date : performance).now();\n        diff = (newTime - this.oldTime) / 1000;\n        this.oldTime = newTime;\n        this.elapsedTime += diff;\n      }\n\n      return diff;\n    }\n  }]);\n\n  return Clock;\n}();\n\n\n\n\n//# sourceURL=webpack://Layla/./src/js/Core/Clock.js?");

/***/ }),

/***/ "./src/js/Core/EventDispatcher.js":
/*!****************************************!*\
  !*** ./src/js/Core/EventDispatcher.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return EventDispatcher; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar EventDispatcher =\n/*#__PURE__*/\nfunction () {\n  function EventDispatcher() {\n    _classCallCheck(this, EventDispatcher);\n  }\n\n  _createClass(EventDispatcher, [{\n    key: \"addEventListener\",\n    value: function addEventListener(type, listener) {\n      if (this._listeners === undefined) this._listeners = {};\n      var listeners = this._listeners;\n\n      if (listeners[type] === undefined) {\n        listeners[type] = [];\n      }\n\n      if (listeners[type].indexOf(listener) === -1) {\n        listeners[type].push(listener);\n      }\n    }\n  }, {\n    key: \"hasEventListener\",\n    value: function hasEventListener(type, listener) {\n      if (this._listeners === undefined) return false;\n      var listeners = this._listeners;\n      return listeners[type] !== undefined && listeners[type].indexOf(listener) !== -1;\n    }\n  }, {\n    key: \"removeEventListener\",\n    value: function removeEventListener(type, listener) {\n      if (this._listeners === undefined) return;\n      var listeners = this._listeners;\n      var listenerArray = listeners[type];\n\n      if (listenerArray !== undefined) {\n        var index = listenerArray.indexOf(listener);\n\n        if (index !== -1) {\n          listenerArray.splice(index, 1);\n        }\n      }\n    }\n  }, {\n    key: \"dispatchEvent\",\n    value: function dispatchEvent(event) {\n      if (this._listeners === undefined) return;\n      var listeners = this._listeners;\n      var listenerArray = listeners[event.type];\n\n      if (listenerArray !== undefined) {\n        event.target = this;\n        var array = listenerArray.slice(0);\n\n        for (var i = 0, l = array.length; i < l; i++) {\n          array[i].call(this, event);\n        }\n      }\n    }\n  }]);\n\n  return EventDispatcher;\n}();\n\n\n\n//# sourceURL=webpack://Layla/./src/js/Core/EventDispatcher.js?");

/***/ }),

/***/ "./src/js/Core/Ticker.js":
/*!*******************************!*\
  !*** ./src/js/Core/Ticker.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Ticker; });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../index */ \"./src/js/index.js\");\n/* harmony import */ var _Clock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Clock */ \"./src/js/Core/Clock.js\");\n/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Base */ \"./src/js/Core/Base.js\");\n/* harmony import */ var eases__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! eases */ \"./node_modules/eases/index.js\");\n/* harmony import */ var eases__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(eases__WEBPACK_IMPORTED_MODULE_3__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\n\n\n\n\n\nvar Ticker =\n/*#__PURE__*/\nfunction (_Base) {\n  _inherits(Ticker, _Base);\n\n  function Ticker(options) {\n    var _this;\n\n    _classCallCheck(this, Ticker);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Ticker).call(this, options));\n    _this.autoStart = options.autoStart !== undefined ? options.autoStart : _index__WEBPACK_IMPORTED_MODULE_0__[\"AutoStart\"];\n    _this.clock = new _Clock__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    _this.currentTime = 0;\n    _this.duration = options.duration !== undefined ? options.duration : _index__WEBPACK_IMPORTED_MODULE_0__[\"Duration\"];\n    _this.easing = options.easing !== undefined ? eases__WEBPACK_IMPORTED_MODULE_3__[options.easing] : eases__WEBPACK_IMPORTED_MODULE_3__[_index__WEBPACK_IMPORTED_MODULE_0__[\"Easing\"]];\n    _this.isActive = false;\n    _this.loop = options.loop !== undefined ? options.loop : _index__WEBPACK_IMPORTED_MODULE_0__[\"Loop\"];\n    _this.timeScale = options.timeScale !== undefined ? options.timeScale : _index__WEBPACK_IMPORTED_MODULE_0__[\"TimeScale\"]; // event binding\n\n    _this.tick = _this.tick.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    if (_this.autoStart) _this.start();\n    return _this;\n  }\n\n  _createClass(Ticker, [{\n    key: \"reset\",\n    value: function reset() {\n      // reset currentTime\n      this.currentTime = 0; // trigger reset of children\n\n      this.children.forEach(function (child) {\n        child.reset();\n      }); // update with currentTime = 0\n\n      this.update(this.currentTime);\n    }\n  }, {\n    key: \"start\",\n    value: function start() {\n      this.reset();\n      this.play();\n    }\n  }, {\n    key: \"stop\",\n    value: function stop() {\n      this.reset();\n      this.pause();\n    }\n  }, {\n    key: \"pause\",\n    value: function pause() {\n      this.isActive = false;\n      this.clock.stop();\n    }\n  }, {\n    key: \"play\",\n    value: function play() {\n      this.isActive = true;\n      this.clock.start();\n      this.tick();\n    }\n  }, {\n    key: \"execute\",\n    value: function execute() {}\n  }, {\n    key: \"update\",\n    value: function update(t) {\n      if (!this.isActive) return;\n      var updateTime = 0; // update progress\n\n      this.progress = t / (this.duration * this.timeScale);\n      this.easedProgress = this.easing(this.progress); // validate progress\n\n      if (this.progress >= 1.0) {\n        this.progress = 1.0;\n        this.easedProgress = 1.0;\n        updateTime = this.duration * this.timeScale;\n      } else {\n        updateTime = this.duration * this.timeScale * this.easedProgress;\n      }\n\n      this.execute(updateTime); // onProgress\n\n      this.onProgress();\n\n      if (this.progress >= 1.0) {\n        if (this.loop) {\n          this.start();\n        } else {\n          this.onComplete();\n          this.pause();\n        }\n      }\n    }\n  }, {\n    key: \"tick\",\n    value: function tick() {\n      if (!this.isActive) return; // update time\n\n      this.currentTime += this.clock.getDelta(); // update call\n\n      this.update(this.currentTime);\n      requestAnimationFrame(this.tick);\n    }\n  }]);\n\n  return Ticker;\n}(_Base__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\n\n\n//# sourceURL=webpack://Layla/./src/js/Core/Ticker.js?");

/***/ }),

/***/ "./src/js/Core/Utils.js":
/*!******************************!*\
  !*** ./src/js/Core/Utils.js ***!
  \******************************/
/*! exports provided: test, getInstanceById */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"test\", function() { return test; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getInstanceById\", function() { return getInstanceById; });\n/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base */ \"./src/js/Core/Base.js\");\n\n\nvar getInstanceById = function getInstanceById(id) {\n  var instance;\n  _Base__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Instances.forEach(function (baseObject) {\n    if (baseObject.id === id) instance = baseObject;\n  });\n  return instance;\n};\n\nvar test = 3; // Utils\n\n\n\n\n//# sourceURL=webpack://Layla/./src/js/Core/Utils.js?");

/***/ }),

/***/ "./src/js/Timeline/Timeline.js":
/*!*************************************!*\
  !*** ./src/js/Timeline/Timeline.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Timeline; });\n/* harmony import */ var _Track_Track__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../Track/Track */ \"./src/js/Track/Track.js\");\n/* harmony import */ var _Core_Ticker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../Core/Ticker */ \"./src/js/Core/Ticker.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar Timeline =\n/*#__PURE__*/\nfunction (_Ticker) {\n  _inherits(Timeline, _Ticker);\n\n  function Timeline() {\n    var _this;\n\n    var objects = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n    _classCallCheck(this, Timeline);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Timeline).call(this, options));\n\n    _this.updateDuration();\n\n    _this.isTimeline = true;\n    _this.type = \"Timeline\";\n\n    _this.add(_this.getTrackFromTweens(objects, options), options);\n\n    return _this;\n  }\n\n  _createClass(Timeline, [{\n    key: \"execute\",\n    value: function execute(time) {\n      this.updateChildren(time);\n    }\n  }, {\n    key: \"getTrackFromTweens\",\n    value: function getTrackFromTweens(tweens, options) {\n      return new _Track_Track__WEBPACK_IMPORTED_MODULE_0__[\"default\"](tweens, {\n        start: options.start !== undefined ? options.start : this.duration\n      });\n    }\n  }, {\n    key: \"updateDuration\",\n    value: function updateDuration() {\n      var duration = 0;\n      this.children.forEach(function (child) {\n        if (child.end > duration) duration = child.end;\n      });\n      this.duration = duration;\n    }\n  }]);\n\n  return Timeline;\n}(_Core_Ticker__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n\n\n//# sourceURL=webpack://Layla/./src/js/Timeline/Timeline.js?");

/***/ }),

/***/ "./src/js/Track/Track.js":
/*!*******************************!*\
  !*** ./src/js/Track/Track.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Track; });\n/* harmony import */ var _Core_Base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../Core/Base */ \"./src/js/Core/Base.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar Track =\n/*#__PURE__*/\nfunction (_Base) {\n  _inherits(Track, _Base);\n\n  function Track() {\n    var _this;\n\n    var objects = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n    _classCallCheck(this, Track);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Track).call(this, options));\n    _this.isTrack = true;\n    _this.type = \"Track\";\n    _this.start = 0;\n\n    _this.add(objects, options);\n\n    return _this;\n  }\n\n  _createClass(Track, [{\n    key: \"updateTimeRange\",\n    value: function updateTimeRange(start) {\n      var _this2 = this;\n\n      this.start = start !== undefined ? start : this.start;\n      this.end = 0;\n\n      if (this.children.length <= 0) {\n        console.warn(\"Layla.Track.updateTimeRange: No instances of Layla.Tween in this Track.\");\n        return this;\n      }\n\n      this.children.forEach(function (child) {\n        if (child.duration * child.timeScale + _this2.start > _this2.end) _this2.end = child.duration * child.timeScale + _this2.start;\n      });\n      return this;\n    }\n  }, {\n    key: \"reset\",\n    value: function reset() {\n      this.finished = false;\n      this.initialized = false;\n      this.children.forEach(function (child) {\n        child.reset();\n      });\n    }\n  }, {\n    key: \"update\",\n    value: function update(t) {\n      t /= this.parent.timeScale;\n\n      if (t >= this.end) {\n        if (this.finished) return;\n        this.updateChildren(this.end - this.start);\n        this.onComplete();\n        this.finished = true;\n      } else if (t >= this.start) {\n        if (!this.initialized) {\n          this.children.forEach(function (child) {\n            child.isActive = true;\n          });\n          this.updateChildren(0);\n          this.initialized = true;\n        } else {\n          this.updateChildren(t - this.start);\n          this.onProgress();\n        }\n      }\n    }\n  }]);\n\n  return Track;\n}(_Core_Base__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n\n//# sourceURL=webpack://Layla/./src/js/Track/Track.js?");

/***/ }),

/***/ "./src/js/Tween/Tween.js":
/*!*******************************!*\
  !*** ./src/js/Tween/Tween.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Tween; });\n/* harmony import */ var _Core_Ticker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../Core/Ticker */ \"./src/js/Core/Ticker.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar Tween =\n/*#__PURE__*/\nfunction (_Ticker) {\n  _inherits(Tween, _Ticker);\n\n  function Tween(origin, target) {\n    var _this;\n\n    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n\n    _classCallCheck(this, Tween);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Tween).call(this, options));\n    _this.isTween = true;\n    _this.type = \"Tween\";\n    _this.target = target;\n    _this.origin = origin;\n    _this.value = _objectSpread({}, {}, _this.origin);\n    return _this;\n  }\n\n  _createClass(Tween, [{\n    key: \"execute\",\n    value: function execute() {\n      // update values\n      for (var key in this.origin) {\n        this.value[key] = this.origin[key] + (this.target[key] - this.origin[key]) * this.easedProgress;\n      }\n    }\n  }]);\n\n  return Tween;\n}(_Core_Ticker__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n\n//# sourceURL=webpack://Layla/./src/js/Tween/Tween.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! exports provided: AutoStart, Duration, Easing, Loop, TimeScale, Utils, Track, Timeline, Tween */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AutoStart\", function() { return AutoStart; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Duration\", function() { return Duration; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Easing\", function() { return Easing; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Loop\", function() { return Loop; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TimeScale\", function() { return TimeScale; });\n/* harmony import */ var _Core_Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Core/Utils */ \"./src/js/Core/Utils.js\");\n/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, \"Utils\", function() { return _Core_Utils__WEBPACK_IMPORTED_MODULE_0__; });\n/* harmony import */ var _Track_Track__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Track/Track */ \"./src/js/Track/Track.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Track\", function() { return _Track_Track__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _Tween_Tween__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tween/Tween */ \"./src/js/Tween/Tween.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Tween\", function() { return _Tween_Tween__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _Timeline_Timeline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Timeline/Timeline */ \"./src/js/Timeline/Timeline.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Timeline\", function() { return _Timeline_Timeline__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n\n\n\n // Defaults\n\nvar AutoStart = false;\nvar Duration = 1.0;\nvar Easing = \"linear\";\nvar Loop = false;\nvar TimeScale = 1;\n\n\n\n\n // Utils\n\n // Classes\n\n\n\n\n\n//# sourceURL=webpack://Layla/./src/js/index.js?");

/***/ }),

/***/ 0:
/*!*******************************!*\
  !*** multi ./src/js/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/js/index.js */\"./src/js/index.js\");\n\n\n//# sourceURL=webpack://Layla/multi_./src/js/index.js?");

/***/ })

/******/ });
});