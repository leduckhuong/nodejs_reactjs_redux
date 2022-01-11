/*! For license information please see actions.js.LICENSE.txt */
(()=>{"use strict";var __webpack_modules__={"./sources/nest/redux/actions.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "increase": () => (/* binding */ increase),\n/* harmony export */   "decrease": () => (/* binding */ decrease),\n/* harmony export */   "reset": () => (/* binding */ reset)\n/* harmony export */ });\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ "./sources/nest/redux/constants.js");\n\nvar increase = function increase(payload) {\n  return {\n    type: _constants_js__WEBPACK_IMPORTED_MODULE_0__.INCREASE,\n    payload: payload\n  };\n};\nvar decrease = function decrease(payload) {\n  return {\n    type: _constants_js__WEBPACK_IMPORTED_MODULE_0__.DECREASE,\n    payload: payload\n  };\n};\nvar reset = function reset() {\n  return {\n    type: _constants_js__WEBPACK_IMPORTED_MODULE_0__.RESET\n  };\n};\n\n//# sourceURL=webpack://tsc/./sources/nest/redux/actions.js?')},"./sources/nest/redux/constants.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"INCREASE\": () => (/* binding */ INCREASE),\n/* harmony export */   \"DECREASE\": () => (/* binding */ DECREASE),\n/* harmony export */   \"RESET\": () => (/* binding */ RESET)\n/* harmony export */ });\nvar INCREASE = 'INCREASE';\nvar DECREASE = 'DECREASE';\nvar RESET = 'RESET';\n\n\n//# sourceURL=webpack://tsc/./sources/nest/redux/constants.js?")}},__webpack_module_cache__={};function __webpack_require__(_){var e=__webpack_module_cache__[_];if(void 0!==e)return e.exports;var r=__webpack_module_cache__[_]={exports:{}};return __webpack_modules__[_](r,r.exports,__webpack_require__),r.exports}__webpack_require__.d=(_,e)=>{for(var r in e)__webpack_require__.o(e,r)&&!__webpack_require__.o(_,r)&&Object.defineProperty(_,r,{enumerable:!0,get:e[r]})},__webpack_require__.o=(_,e)=>Object.prototype.hasOwnProperty.call(_,e),__webpack_require__.r=_=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(_,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(_,"__esModule",{value:!0})};var __webpack_exports__=__webpack_require__("./sources/nest/redux/actions.js")})();