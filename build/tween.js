(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Tween"] = factory();
	else
		root["Tween"] = factory();
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

eval("function backInOut(t) {\n  var s = 1.70158 * 1.525\n  if ((t *= 2) < 1)\n    return 0.5 * (t * t * ((s + 1) * t - s))\n  return 0.5 * ((t -= 2) * t * ((s + 1) * t + s) + 2)\n}\n\nmodule.exports = backInOut\n\n//# sourceURL=webpack://Tween/./node_modules/eases/back-in-out.js?");

/***/ }),

/***/ "./node_modules/eases/back-in.js":
/*!***************************************!*\
  !*** ./node_modules/eases/back-in.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function backIn(t) {\n  var s = 1.70158\n  return t * t * ((s + 1) * t - s)\n}\n\nmodule.exports = backIn\n\n//# sourceURL=webpack://Tween/./node_modules/eases/back-in.js?");

/***/ }),

/***/ "./node_modules/eases/back-out.js":
/*!****************************************!*\
  !*** ./node_modules/eases/back-out.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function backOut(t) {\n  var s = 1.70158\n  return --t * t * ((s + 1) * t + s) + 1\n}\n\nmodule.exports = backOut\n\n//# sourceURL=webpack://Tween/./node_modules/eases/back-out.js?");

/***/ }),

/***/ "./node_modules/eases/bounce-in-out.js":
/*!*********************************************!*\
  !*** ./node_modules/eases/bounce-in-out.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var bounceOut = __webpack_require__(/*! ./bounce-out */ \"./node_modules/eases/bounce-out.js\")\n\nfunction bounceInOut(t) {\n  return t < 0.5\n    ? 0.5 * (1.0 - bounceOut(1.0 - t * 2.0))\n    : 0.5 * bounceOut(t * 2.0 - 1.0) + 0.5\n}\n\nmodule.exports = bounceInOut\n\n//# sourceURL=webpack://Tween/./node_modules/eases/bounce-in-out.js?");

/***/ }),

/***/ "./node_modules/eases/bounce-in.js":
/*!*****************************************!*\
  !*** ./node_modules/eases/bounce-in.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var bounceOut = __webpack_require__(/*! ./bounce-out */ \"./node_modules/eases/bounce-out.js\")\n\nfunction bounceIn(t) {\n  return 1.0 - bounceOut(1.0 - t)\n}\n\nmodule.exports = bounceIn\n\n//# sourceURL=webpack://Tween/./node_modules/eases/bounce-in.js?");

/***/ }),

/***/ "./node_modules/eases/bounce-out.js":
/*!******************************************!*\
  !*** ./node_modules/eases/bounce-out.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function bounceOut(t) {\n  var a = 4.0 / 11.0\n  var b = 8.0 / 11.0\n  var c = 9.0 / 10.0\n\n  var ca = 4356.0 / 361.0\n  var cb = 35442.0 / 1805.0\n  var cc = 16061.0 / 1805.0\n\n  var t2 = t * t\n\n  return t < a\n    ? 7.5625 * t2\n    : t < b\n      ? 9.075 * t2 - 9.9 * t + 3.4\n      : t < c\n        ? ca * t2 - cb * t + cc\n        : 10.8 * t * t - 20.52 * t + 10.72\n}\n\nmodule.exports = bounceOut\n\n//# sourceURL=webpack://Tween/./node_modules/eases/bounce-out.js?");

/***/ }),

/***/ "./node_modules/eases/circ-in-out.js":
/*!*******************************************!*\
  !*** ./node_modules/eases/circ-in-out.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function circInOut(t) {\n  if ((t *= 2) < 1) return -0.5 * (Math.sqrt(1 - t * t) - 1)\n  return 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1)\n}\n\nmodule.exports = circInOut\n\n//# sourceURL=webpack://Tween/./node_modules/eases/circ-in-out.js?");

/***/ }),

/***/ "./node_modules/eases/circ-in.js":
/*!***************************************!*\
  !*** ./node_modules/eases/circ-in.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function circIn(t) {\n  return 1.0 - Math.sqrt(1.0 - t * t)\n}\n\nmodule.exports = circIn\n\n//# sourceURL=webpack://Tween/./node_modules/eases/circ-in.js?");

/***/ }),

/***/ "./node_modules/eases/circ-out.js":
/*!****************************************!*\
  !*** ./node_modules/eases/circ-out.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function circOut(t) {\n  return Math.sqrt(1 - ( --t * t ))\n}\n\nmodule.exports = circOut\n\n//# sourceURL=webpack://Tween/./node_modules/eases/circ-out.js?");

/***/ }),

/***/ "./node_modules/eases/cubic-in-out.js":
/*!********************************************!*\
  !*** ./node_modules/eases/cubic-in-out.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function cubicInOut(t) {\n  return t < 0.5\n    ? 4.0 * t * t * t\n    : 0.5 * Math.pow(2.0 * t - 2.0, 3.0) + 1.0\n}\n\nmodule.exports = cubicInOut\n\n//# sourceURL=webpack://Tween/./node_modules/eases/cubic-in-out.js?");

/***/ }),

/***/ "./node_modules/eases/cubic-in.js":
/*!****************************************!*\
  !*** ./node_modules/eases/cubic-in.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function cubicIn(t) {\n  return t * t * t\n}\n\nmodule.exports = cubicIn\n\n//# sourceURL=webpack://Tween/./node_modules/eases/cubic-in.js?");

/***/ }),

/***/ "./node_modules/eases/cubic-out.js":
/*!*****************************************!*\
  !*** ./node_modules/eases/cubic-out.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function cubicOut(t) {\n  var f = t - 1.0\n  return f * f * f + 1.0\n}\n\nmodule.exports = cubicOut\n\n//# sourceURL=webpack://Tween/./node_modules/eases/cubic-out.js?");

/***/ }),

/***/ "./node_modules/eases/elastic-in-out.js":
/*!**********************************************!*\
  !*** ./node_modules/eases/elastic-in-out.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function elasticInOut(t) {\n  return t < 0.5\n    ? 0.5 * Math.sin(+13.0 * Math.PI/2 * 2.0 * t) * Math.pow(2.0, 10.0 * (2.0 * t - 1.0))\n    : 0.5 * Math.sin(-13.0 * Math.PI/2 * ((2.0 * t - 1.0) + 1.0)) * Math.pow(2.0, -10.0 * (2.0 * t - 1.0)) + 1.0\n}\n\nmodule.exports = elasticInOut\n\n//# sourceURL=webpack://Tween/./node_modules/eases/elastic-in-out.js?");

/***/ }),

/***/ "./node_modules/eases/elastic-in.js":
/*!******************************************!*\
  !*** ./node_modules/eases/elastic-in.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function elasticIn(t) {\n  return Math.sin(13.0 * t * Math.PI/2) * Math.pow(2.0, 10.0 * (t - 1.0))\n}\n\nmodule.exports = elasticIn\n\n//# sourceURL=webpack://Tween/./node_modules/eases/elastic-in.js?");

/***/ }),

/***/ "./node_modules/eases/elastic-out.js":
/*!*******************************************!*\
  !*** ./node_modules/eases/elastic-out.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function elasticOut(t) {\n  return Math.sin(-13.0 * (t + 1.0) * Math.PI/2) * Math.pow(2.0, -10.0 * t) + 1.0\n}\n\nmodule.exports = elasticOut\n\n//# sourceURL=webpack://Tween/./node_modules/eases/elastic-out.js?");

/***/ }),

/***/ "./node_modules/eases/expo-in-out.js":
/*!*******************************************!*\
  !*** ./node_modules/eases/expo-in-out.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function expoInOut(t) {\n  return (t === 0.0 || t === 1.0)\n    ? t\n    : t < 0.5\n      ? +0.5 * Math.pow(2.0, (20.0 * t) - 10.0)\n      : -0.5 * Math.pow(2.0, 10.0 - (t * 20.0)) + 1.0\n}\n\nmodule.exports = expoInOut\n\n//# sourceURL=webpack://Tween/./node_modules/eases/expo-in-out.js?");

/***/ }),

/***/ "./node_modules/eases/expo-in.js":
/*!***************************************!*\
  !*** ./node_modules/eases/expo-in.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function expoIn(t) {\n  return t === 0.0 ? t : Math.pow(2.0, 10.0 * (t - 1.0))\n}\n\nmodule.exports = expoIn\n\n//# sourceURL=webpack://Tween/./node_modules/eases/expo-in.js?");

/***/ }),

/***/ "./node_modules/eases/expo-out.js":
/*!****************************************!*\
  !*** ./node_modules/eases/expo-out.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function expoOut(t) {\n  return t === 1.0 ? t : 1.0 - Math.pow(2.0, -10.0 * t)\n}\n\nmodule.exports = expoOut\n\n//# sourceURL=webpack://Tween/./node_modules/eases/expo-out.js?");

/***/ }),

/***/ "./node_modules/eases/index.js":
/*!*************************************!*\
  !*** ./node_modules/eases/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = {\n\t'backInOut': __webpack_require__(/*! ./back-in-out */ \"./node_modules/eases/back-in-out.js\"),\n\t'backIn': __webpack_require__(/*! ./back-in */ \"./node_modules/eases/back-in.js\"),\n\t'backOut': __webpack_require__(/*! ./back-out */ \"./node_modules/eases/back-out.js\"),\n\t'bounceInOut': __webpack_require__(/*! ./bounce-in-out */ \"./node_modules/eases/bounce-in-out.js\"),\n\t'bounceIn': __webpack_require__(/*! ./bounce-in */ \"./node_modules/eases/bounce-in.js\"),\n\t'bounceOut': __webpack_require__(/*! ./bounce-out */ \"./node_modules/eases/bounce-out.js\"),\n\t'circInOut': __webpack_require__(/*! ./circ-in-out */ \"./node_modules/eases/circ-in-out.js\"),\n\t'circIn': __webpack_require__(/*! ./circ-in */ \"./node_modules/eases/circ-in.js\"),\n\t'circOut': __webpack_require__(/*! ./circ-out */ \"./node_modules/eases/circ-out.js\"),\n\t'cubicInOut': __webpack_require__(/*! ./cubic-in-out */ \"./node_modules/eases/cubic-in-out.js\"),\n\t'cubicIn': __webpack_require__(/*! ./cubic-in */ \"./node_modules/eases/cubic-in.js\"),\n\t'cubicOut': __webpack_require__(/*! ./cubic-out */ \"./node_modules/eases/cubic-out.js\"),\n\t'elasticInOut': __webpack_require__(/*! ./elastic-in-out */ \"./node_modules/eases/elastic-in-out.js\"),\n\t'elasticIn': __webpack_require__(/*! ./elastic-in */ \"./node_modules/eases/elastic-in.js\"),\n\t'elasticOut': __webpack_require__(/*! ./elastic-out */ \"./node_modules/eases/elastic-out.js\"),\n\t'expoInOut': __webpack_require__(/*! ./expo-in-out */ \"./node_modules/eases/expo-in-out.js\"),\n\t'expoIn': __webpack_require__(/*! ./expo-in */ \"./node_modules/eases/expo-in.js\"),\n\t'expoOut': __webpack_require__(/*! ./expo-out */ \"./node_modules/eases/expo-out.js\"),\n\t'linear': __webpack_require__(/*! ./linear */ \"./node_modules/eases/linear.js\"),\n\t'quadInOut': __webpack_require__(/*! ./quad-in-out */ \"./node_modules/eases/quad-in-out.js\"),\n\t'quadIn': __webpack_require__(/*! ./quad-in */ \"./node_modules/eases/quad-in.js\"),\n\t'quadOut': __webpack_require__(/*! ./quad-out */ \"./node_modules/eases/quad-out.js\"),\n\t'quartInOut': __webpack_require__(/*! ./quart-in-out */ \"./node_modules/eases/quart-in-out.js\"),\n\t'quartIn': __webpack_require__(/*! ./quart-in */ \"./node_modules/eases/quart-in.js\"),\n\t'quartOut': __webpack_require__(/*! ./quart-out */ \"./node_modules/eases/quart-out.js\"),\n\t'quintInOut': __webpack_require__(/*! ./quint-in-out */ \"./node_modules/eases/quint-in-out.js\"),\n\t'quintIn': __webpack_require__(/*! ./quint-in */ \"./node_modules/eases/quint-in.js\"),\n\t'quintOut': __webpack_require__(/*! ./quint-out */ \"./node_modules/eases/quint-out.js\"),\n\t'sineInOut': __webpack_require__(/*! ./sine-in-out */ \"./node_modules/eases/sine-in-out.js\"),\n\t'sineIn': __webpack_require__(/*! ./sine-in */ \"./node_modules/eases/sine-in.js\"),\n\t'sineOut': __webpack_require__(/*! ./sine-out */ \"./node_modules/eases/sine-out.js\")\n}\n\n//# sourceURL=webpack://Tween/./node_modules/eases/index.js?");

/***/ }),

/***/ "./node_modules/eases/linear.js":
/*!**************************************!*\
  !*** ./node_modules/eases/linear.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function linear(t) {\n  return t\n}\n\nmodule.exports = linear\n\n//# sourceURL=webpack://Tween/./node_modules/eases/linear.js?");

/***/ }),

/***/ "./node_modules/eases/quad-in-out.js":
/*!*******************************************!*\
  !*** ./node_modules/eases/quad-in-out.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function quadInOut(t) {\n    t /= 0.5\n    if (t < 1) return 0.5*t*t\n    t--\n    return -0.5 * (t*(t-2) - 1)\n}\n\nmodule.exports = quadInOut\n\n//# sourceURL=webpack://Tween/./node_modules/eases/quad-in-out.js?");

/***/ }),

/***/ "./node_modules/eases/quad-in.js":
/*!***************************************!*\
  !*** ./node_modules/eases/quad-in.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function quadIn(t) {\n  return t * t\n}\n\nmodule.exports = quadIn\n\n//# sourceURL=webpack://Tween/./node_modules/eases/quad-in.js?");

/***/ }),

/***/ "./node_modules/eases/quad-out.js":
/*!****************************************!*\
  !*** ./node_modules/eases/quad-out.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function quadOut(t) {\n  return -t * (t - 2.0)\n}\n\nmodule.exports = quadOut\n\n//# sourceURL=webpack://Tween/./node_modules/eases/quad-out.js?");

/***/ }),

/***/ "./node_modules/eases/quart-in-out.js":
/*!********************************************!*\
  !*** ./node_modules/eases/quart-in-out.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function quarticInOut(t) {\n  return t < 0.5\n    ? +8.0 * Math.pow(t, 4.0)\n    : -8.0 * Math.pow(t - 1.0, 4.0) + 1.0\n}\n\nmodule.exports = quarticInOut\n\n//# sourceURL=webpack://Tween/./node_modules/eases/quart-in-out.js?");

/***/ }),

/***/ "./node_modules/eases/quart-in.js":
/*!****************************************!*\
  !*** ./node_modules/eases/quart-in.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function quarticIn(t) {\n  return Math.pow(t, 4.0)\n}\n\nmodule.exports = quarticIn\n\n//# sourceURL=webpack://Tween/./node_modules/eases/quart-in.js?");

/***/ }),

/***/ "./node_modules/eases/quart-out.js":
/*!*****************************************!*\
  !*** ./node_modules/eases/quart-out.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function quarticOut(t) {\n  return Math.pow(t - 1.0, 3.0) * (1.0 - t) + 1.0\n}\n\nmodule.exports = quarticOut\n\n//# sourceURL=webpack://Tween/./node_modules/eases/quart-out.js?");

/***/ }),

/***/ "./node_modules/eases/quint-in-out.js":
/*!********************************************!*\
  !*** ./node_modules/eases/quint-in-out.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function qinticInOut(t) {\n    if ( ( t *= 2 ) < 1 ) return 0.5 * t * t * t * t * t\n    return 0.5 * ( ( t -= 2 ) * t * t * t * t + 2 )\n}\n\nmodule.exports = qinticInOut\n\n//# sourceURL=webpack://Tween/./node_modules/eases/quint-in-out.js?");

/***/ }),

/***/ "./node_modules/eases/quint-in.js":
/*!****************************************!*\
  !*** ./node_modules/eases/quint-in.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function qinticIn(t) {\n  return t * t * t * t * t\n}\n\nmodule.exports = qinticIn\n\n//# sourceURL=webpack://Tween/./node_modules/eases/quint-in.js?");

/***/ }),

/***/ "./node_modules/eases/quint-out.js":
/*!*****************************************!*\
  !*** ./node_modules/eases/quint-out.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function qinticOut(t) {\n  return --t * t * t * t * t + 1\n}\n\nmodule.exports = qinticOut\n\n//# sourceURL=webpack://Tween/./node_modules/eases/quint-out.js?");

/***/ }),

/***/ "./node_modules/eases/sine-in-out.js":
/*!*******************************************!*\
  !*** ./node_modules/eases/sine-in-out.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function sineInOut(t) {\n  return -0.5 * (Math.cos(Math.PI*t) - 1)\n}\n\nmodule.exports = sineInOut\n\n//# sourceURL=webpack://Tween/./node_modules/eases/sine-in-out.js?");

/***/ }),

/***/ "./node_modules/eases/sine-in.js":
/*!***************************************!*\
  !*** ./node_modules/eases/sine-in.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function sineIn (t) {\n  var v = Math.cos(t * Math.PI * 0.5)\n  if (Math.abs(v) < 1e-14) return 1\n  else return 1 - v\n}\n\nmodule.exports = sineIn\n\n\n//# sourceURL=webpack://Tween/./node_modules/eases/sine-in.js?");

/***/ }),

/***/ "./node_modules/eases/sine-out.js":
/*!****************************************!*\
  !*** ./node_modules/eases/sine-out.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function sineOut(t) {\n  return Math.sin(t * Math.PI/2)\n}\n\nmodule.exports = sineOut\n\n//# sourceURL=webpack://Tween/./node_modules/eases/sine-out.js?");

/***/ }),

/***/ "./src/js/Core/Clock.js":
/*!******************************!*\
  !*** ./src/js/Core/Clock.js ***!
  \******************************/
/*! exports provided: default, Clock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Clock; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Clock\", function() { return Clock; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Clock =\n/*#__PURE__*/\nfunction () {\n  function Clock(autoStart) {\n    _classCallCheck(this, Clock);\n\n    this.autoStart = autoStart !== undefined ? autoStart : true;\n    this.startTime = 0;\n    this.oldTime = 0;\n    this.elapsedTime = 0;\n    this.running = false;\n  }\n\n  _createClass(Clock, [{\n    key: \"start\",\n    value: function start() {\n      this.startTime = (typeof performance === \"undefined\" ? Date : performance).now(); // see #10732\n\n      this.oldTime = this.startTime;\n      this.elapsedTime = 0;\n      this.running = true;\n    }\n  }, {\n    key: \"stop\",\n    value: function stop() {\n      this.getElapsedTime();\n      this.running = false;\n      this.autoStart = false;\n    }\n  }, {\n    key: \"getElapsedTime\",\n    value: function getElapsedTime() {\n      this.getDelta();\n      return this.elapsedTime;\n    }\n  }, {\n    key: \"getDelta\",\n    value: function getDelta() {\n      var diff = 0;\n\n      if (this.autoStart && !this.running) {\n        this.start();\n        return 0;\n      }\n\n      if (this.running) {\n        var newTime = (typeof performance === \"undefined\" ? Date : performance).now();\n        diff = (newTime - this.oldTime) / 1000;\n        this.oldTime = newTime;\n        this.elapsedTime += diff;\n      }\n\n      return diff;\n    }\n  }]);\n\n  return Clock;\n}();\n\n\n\n\n//# sourceURL=webpack://Tween/./src/js/Core/Clock.js?");

/***/ }),

/***/ "./src/js/Core/Tweener.js":
/*!********************************!*\
  !*** ./src/js/Core/Tweener.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Tweener; });\n/* harmony import */ var _Clock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Clock */ \"./src/js/Core/Clock.js\");\n/* harmony import */ var eases__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! eases */ \"./node_modules/eases/index.js\");\n/* harmony import */ var eases__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(eases__WEBPACK_IMPORTED_MODULE_1__);\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar Tweener =\n/*#__PURE__*/\nfunction () {\n  function Tweener(start, end) {\n    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n\n    _classCallCheck(this, Tweener);\n\n    this.autoStart = options.autoStart !== undefined ? options.autoStart : Tweener.AutoStart;\n    this.clock = new _Clock__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.current = _objectSpread({}, {}, this.startValues);\n    this.currentTime = 0;\n    this.duration = options.duration || Tweener.Duration;\n    this.easing = eases__WEBPACK_IMPORTED_MODULE_1__[options.easing] || eases__WEBPACK_IMPORTED_MODULE_1__[Tweener.Easing];\n    this.easedProgress = this.easing(this.progress);\n    this.endValues = end;\n    this.isRendering = false;\n    this.loop = options.loop !== undefined ? options.loop : Tweener.Loop;\n    this.options = options;\n    this.progress = 0;\n    this.startValues = start; // event binding\n\n    this.onComplete = this.onComplete.bind(this);\n    this.onUpdate = this.onUpdate.bind(this);\n    this.render = this.render.bind(this);\n    if (this.autoStart) this.start();\n  }\n\n  _createClass(Tweener, [{\n    key: \"onComplete\",\n    value: function onComplete() {\n      this.current = _objectSpread({}, {}, this.endValues);\n      this.currentTime = this.duration;\n      this.progress = 1.0;\n      this.easedProgress = 1.0;\n      this.onUpdate();\n      if (\"onComplete\" in this.options) this.options.onComplete(this);\n      this.pause();\n    }\n  }, {\n    key: \"onUpdate\",\n    value: function onUpdate() {\n      if (\"onUpdate\" in this.options) this.options.onUpdate(this);\n    }\n  }, {\n    key: \"reset\",\n    value: function reset() {\n      this.current = _objectSpread({}, {}, this.startValues);\n      this.currentTime = 0;\n      this.progress = 0;\n      this.easedProgress = 0;\n    }\n  }, {\n    key: \"start\",\n    value: function start() {\n      this.reset();\n      this.play();\n    }\n  }, {\n    key: \"stop\",\n    value: function stop() {\n      this.reset();\n      this.pause();\n    }\n  }, {\n    key: \"pause\",\n    value: function pause() {\n      this.isRendering = false;\n      this.clock.stop();\n    }\n  }, {\n    key: \"play\",\n    value: function play() {\n      this.isRendering = true;\n      this.clock.start();\n      this.render();\n    }\n  }, {\n    key: \"updateValues\",\n    value: function updateValues() {\n      // update values\n      for (var key in this.startValues) {\n        this.current[key] = this.startValues[key] + (this.endValues[key] - this.startValues[key]) * this.easedProgress;\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      // update timestamp\n      this.currentTime += this.clock.getDelta(); // update progress\n\n      this.progress = this.currentTime / this.duration;\n      this.easedProgress = this.easing(this.progress); // validate progress\n\n      if (this.progress >= 1.0) {\n        if (this.loop) {\n          this.start();\n        } else {\n          this.onComplete();\n        }\n      } else {\n        this.updateValues(); // onUpdate\n\n        this.onUpdate();\n      } // values debug\n      // console.log(this.currentTime, this.current);\n\n\n      if (!this.isRendering) return;\n      requestAnimationFrame(this.render);\n    }\n  }]);\n\n  return Tweener;\n}();\n\nTweener.AutoStart = true;\nTweener.Duration = 5.0;\nTweener.Easing = \"quadInOut\";\nTweener.Loop = false;\n\n\n//# sourceURL=webpack://Tween/./src/js/Core/Tweener.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! exports provided: Tweener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Core_Tweener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Core/Tweener */ \"./src/js/Core/Tweener.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Tweener\", function() { return _Core_Tweener__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n\n//# sourceURL=webpack://Tween/./src/js/index.js?");

/***/ }),

/***/ 0:
/*!*******************************!*\
  !*** multi ./src/js/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/js/index.js */\"./src/js/index.js\");\n\n\n//# sourceURL=webpack://Tween/multi_./src/js/index.js?");

/***/ })

/******/ });
});