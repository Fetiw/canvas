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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar canvas = document.getElementById('canvas');\nvar w = canvas.width = window.innerWidth;\nvar h = canvas.height = window.innerHeight;\nwindow.onresize = function () {\n  w = canvas.width = window.innerWidth;\n  h = canvas.height = window.innerHeight;\n};\n\nvar ctx = canvas.getContext('2d');\nctx.fillStyle = 'white';\nvar arr = [];\nvar n = 500;\n\n/* створення сніжинок */\nfor (var i = 0; i < n; i++) {\n  var x = Math.random() * w;\n  var y = Math.random() * h;\n  var r = Math.random() * 3;\n  ctx.beginPath();\n  ctx.arc(x, y, r, 0, 6 * Math.PI, false);\n  ctx.closePath();\n  ctx.fill();\n  arr.push({ 'x': x, 'y': y, 'r': r });\n}\n/* Робить анімацію сніжинок */\nsetInterval(function () {\n  ctx.clearRect(0, 0, w, h);\n  for (var i = 0; i < arr.length; i++) {\n    arr[i].y += Math.random() * 5;\n    if (arr[i].y > h) {\n      arr[i].y = 0;\n    }\n    ctx.beginPath();\n    ctx.arc(arr[i].x, arr[i].y, arr[i].r, 0, 2 * Math.PI, false);\n    ctx.closePath();\n    ctx.fill();\n  }\n}, 50);\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvYXBwLmpzPzcxNmYiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGNhbnZhcz1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XG52YXIgdz1jYW52YXMud2lkdGg9d2luZG93LmlubmVyV2lkdGg7XG52YXIgaD1jYW52YXMuaGVpZ2h0PXdpbmRvdy5pbm5lckhlaWdodDtcbndpbmRvdy5vbnJlc2l6ZT1mdW5jdGlvbigpIHtcbiAgdz1jYW52YXMud2lkdGg9IHdpbmRvdy5pbm5lcldpZHRoO1xuICBoPWNhbnZhcy5oZWlnaHQ9IHdpbmRvdy5pbm5lckhlaWdodDtcbn07XG5cbnZhciBjdHg9Y2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5jdHguZmlsbFN0eWxlPSd3aGl0ZSc7XG52YXIgYXJyPVtdO1xudmFyIG49NTAwO1xuXG4vKiDRgdGC0LLQvtGA0LXQvdC90Y8g0YHQvdGW0LbQuNC90L7QuiAqL1xuZm9yKHZhciBpPTA7IGk8bjsgaSsrKSB7XG4gIHZhciB4PU1hdGgucmFuZG9tKCkqdztcbiAgdmFyIHk9TWF0aC5yYW5kb20oKSpoO1xuICB2YXIgcj1NYXRoLnJhbmRvbSgpKjM7XG4gIGN0eC5iZWdpblBhdGgoKTtcbiAgY3R4LmFyYyh4LHksciwwLDYqTWF0aC5QSSxmYWxzZSk7XG4gIGN0eC5jbG9zZVBhdGgoKTtcbiAgY3R4LmZpbGwoKTtcbiAgYXJyLnB1c2goeyd4Jzp4LCd5Jzp5LCdyJzpyfSk7XG59XG4vKiDQoNC+0LHQuNGC0Ywg0LDQvdGW0LzQsNGG0ZbRjiDRgdC90ZbQttC40L3QvtC6ICovXG5zZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgY3R4LmNsZWFyUmVjdCgwLDAsdyxoKTtcbiAgZm9yKHZhciBpPTA7IGk8YXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgYXJyW2ldLnkrPU1hdGgucmFuZG9tKCkqNTtcbiAgICBpZihhcnJbaV0ueT5oKSB7XG4gICAgICBhcnJbaV0ueT0wO1xuICAgIH1cbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmFyYyhhcnJbaV0ueCxhcnJbaV0ueSxhcnJbaV0uciwwLDIqTWF0aC5QSSxmYWxzZSk7XG4gICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIGN0eC5maWxsKCk7XG4gIH1cbn0sNTApO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL2FwcC5qcyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);