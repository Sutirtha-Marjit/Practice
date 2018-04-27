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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**************************************!*\
  !*** multi ./src/app/common.test.js ***!
  \**************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/app/common.test.js */1);


/***/ }),
/* 1 */
/*!********************************!*\
  !*** ./src/app/common.test.js ***!
  \********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__accurate_test__ = __webpack_require__(/*! ./accurate.test */ 2);\n\r\n\r\nclass CommonTest{\r\n\r\n    constructor(){\r\n        console.log('CommonTest');\r\n        if(__WEBPACK_IMPORTED_MODULE_0__accurate_test__[\"a\" /* default */]){\r\n            console.dir(typeof __WEBPACK_IMPORTED_MODULE_0__accurate_test__[\"a\" /* default */]);\r\n            console.dir(typeof __WEBPACK_IMPORTED_MODULE_0__accurate_test__[\"a\" /* default */]);\r\n            this.acc = new __WEBPACK_IMPORTED_MODULE_0__accurate_test__[\"a\" /* default */]();\r\n        }\r\n        \r\n    }\r\n\r\n    pool(){\r\n        console.log('Pool');\r\n    }\r\n\r\n}\r\n\r\nlet d = new CommonTest();\r\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAvY29tbW9uLnRlc3QuanM/MTNlYyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IEFjY3VyYXRlVGVzdCBmcm9tICcuL2FjY3VyYXRlLnRlc3QnO1xyXG5jbGFzcyBDb21tb25UZXN0e1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0NvbW1vblRlc3QnKTtcclxuICAgICAgICBpZihBY2N1cmF0ZVRlc3Qpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmRpcih0eXBlb2YgQWNjdXJhdGVUZXN0KTtcclxuICAgICAgICAgICAgY29uc29sZS5kaXIodHlwZW9mIEFjY3VyYXRlVGVzdCk7XHJcbiAgICAgICAgICAgIHRoaXMuYWNjID0gbmV3IEFjY3VyYXRlVGVzdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBwb29sKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1Bvb2wnKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmxldCBkID0gbmV3IENvbW1vblRlc3QoKTtcclxuXHJcblxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvY29tbW9uLnRlc3QuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!**********************************!*\
  !*** ./src/app/accurate.test.js ***!
  \**********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("class AccurateTest{\r\n\r\n    constructor(){\r\n        console.log('AccurateTest');\r\n    }\r\n\r\n    test(){\r\n        alert('ok');\r\n    }\r\n\r\n\r\n}\n/* harmony export (immutable) */ __webpack_exports__[\"a\"] = AccurateTest;\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAvYWNjdXJhdGUudGVzdC5qcz9jNGU4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjY3VyYXRlVGVzdHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdBY2N1cmF0ZVRlc3QnKTtcclxuICAgIH1cclxuXHJcbiAgICB0ZXN0KCl7XHJcbiAgICAgICAgYWxlcnQoJ29rJyk7XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2FjY3VyYXRlLnRlc3QuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ })
/******/ ]);