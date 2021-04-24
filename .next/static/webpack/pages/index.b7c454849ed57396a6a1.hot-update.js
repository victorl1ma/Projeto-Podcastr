webpackHotUpdate_N_E("pages/index",{

/***/ "./src/contexts/PlayerContext.tsx":
/*!****************************************!*\
  !*** ./src/contexts/PlayerContext.tsx ***!
  \****************************************/
/*! exports provided: PlayerContext, PlayerContextProvider, usePlayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PlayerContext\", function() { return PlayerContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PlayerContextProvider\", function() { return PlayerContextProvider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"usePlayer\", function() { return usePlayer; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/media/victor/HD1/Projetos/ReactJS/NLW_5/Projeto-Podcastr/src/contexts/PlayerContext.tsx\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\nvar PlayerContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])({});\nfunction PlayerContextProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      episodeList = _useState[0],\n      setEpisodeList = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      currentEpisodeIndex = _useState2[0],\n      setCurrentEpisodeIndex = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isPlaying = _useState3[0],\n      setIsPlaying = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isLooping = _useState4[0],\n      setIsLooping = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isShuffling = _useState5[0],\n      setIsShuffling = _useState5[1];\n\n  function play(episode) {\n    setEpisodeList([episode]);\n    setCurrentEpisodeIndex(0);\n    setIsPlaying(true);\n  }\n\n  function playList(list, index) {\n    setEpisodeList(list);\n    setCurrentEpisodeIndex(index);\n    setIsPlaying(true);\n  }\n\n  function toggleShuffle() {\n    setIsShuffling(!isShuffling);\n  }\n\n  function togglePlay() {\n    setIsPlaying(!isPlaying);\n  }\n\n  function toggleLoop() {\n    setIsLooping(!isLooping);\n  }\n\n  function setPlayingSate(state) {\n    setIsPlaying(state);\n  }\n\n  var hasPrevious = currentEpisodeIndex > 0;\n  var hasNext = isShuffling || currentEpisodeIndex + 1 < setEpisodeList.length;\n\n  function clearPlayerState() {\n    setEpisodeList([]);\n    setCurrentEpisodeIndex(0);\n  }\n\n  function playNext() {\n    if (isShuffling) {\n      var nextRandomEpisodeIndex = Math.floor(Math.random() * episodeList.length);\n      setCurrentEpisodeIndex(nextRandomEpisodeIndex);\n    } else if (hasNext) {\n      setCurrentEpisodeIndex(currentEpisodeIndex + 1);\n    }\n  }\n\n  function playPrevius() {\n    if (hasPrevious) {\n      setCurrentEpisodeIndex(currentEpisodeIndex - 1);\n    }\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(PlayerContext.Provider, {\n    value: {\n      episodeList: episodeList,\n      currentEpisodeIndex: currentEpisodeIndex,\n      play: play,\n      playList: playList,\n      isPlaying: isPlaying,\n      playNext: playNext,\n      playPrevius: playPrevius,\n      togglePlay: togglePlay,\n      setPlayingSate: setPlayingSate,\n      hasNext: hasNext,\n      hasPrevious: hasPrevious,\n      toggleLoop: toggleLoop,\n      isLooping: isLooping,\n      isShuffling: isShuffling,\n      toggleShuffle: toggleShuffle\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 100,\n    columnNumber: 5\n  }, this);\n}\n\n_s(PlayerContextProvider, \"YSXWY8OfLfVxd5To+FHcHi+GAY0=\");\n\n_c = PlayerContextProvider;\nvar usePlayer = function usePlayer() {\n  _s2();\n\n  return Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(PlayerContext);\n};\n\n_s2(usePlayer, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\n\nvar _c;\n\n$RefreshReg$(_c, \"PlayerContextProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL1BsYXllckNvbnRleHQudHN4PzE3NzIiXSwibmFtZXMiOlsiUGxheWVyQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJQbGF5ZXJDb250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwiZXBpc29kZUxpc3QiLCJzZXRFcGlzb2RlTGlzdCIsImN1cnJlbnRFcGlzb2RlSW5kZXgiLCJzZXRDdXJyZW50RXBpc29kZUluZGV4IiwiaXNQbGF5aW5nIiwic2V0SXNQbGF5aW5nIiwiaXNMb29waW5nIiwic2V0SXNMb29waW5nIiwiaXNTaHVmZmxpbmciLCJzZXRJc1NodWZmbGluZyIsInBsYXkiLCJlcGlzb2RlIiwicGxheUxpc3QiLCJsaXN0IiwiaW5kZXgiLCJ0b2dnbGVTaHVmZmxlIiwidG9nZ2xlUGxheSIsInRvZ2dsZUxvb3AiLCJzZXRQbGF5aW5nU2F0ZSIsInN0YXRlIiwiaGFzUHJldmlvdXMiLCJoYXNOZXh0IiwibGVuZ3RoIiwiY2xlYXJQbGF5ZXJTdGF0ZSIsInBsYXlOZXh0IiwibmV4dFJhbmRvbUVwaXNvZGVJbmRleCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInBsYXlQcmV2aXVzIiwidXNlUGxheWVyIiwidXNlQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQThCTyxJQUFNQSxhQUFhLGdCQUFHQywyREFBYSxDQUFDLEVBQUQsQ0FBbkM7QUFPQSxTQUFTQyxxQkFBVCxPQUF1RTtBQUFBOztBQUFBLE1BQXRDQyxRQUFzQyxRQUF0Q0EsUUFBc0M7O0FBQUEsa0JBQ3BDQyxzREFBUSxDQUFDLEVBQUQsQ0FENEI7QUFBQSxNQUNuRUMsV0FEbUU7QUFBQSxNQUN0REMsY0FEc0Q7O0FBQUEsbUJBRXJCRixzREFBUSxDQUFDLENBQUQsQ0FGYTtBQUFBLE1BRW5FRyxtQkFGbUU7QUFBQSxNQUU5Q0Msc0JBRjhDOztBQUFBLG1CQUd4Q0osc0RBQVEsQ0FBQyxL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QzNCLFNBQU9DLHdEQUFVLENBQUNwQyxhQUFELENBQWpCO0FBQ0gsQ0FGTTs7SUFBTW1DLFMiLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvUGxheWVyQ29udGV4dC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgUmVhY3ROb2RlLCB1c2VDb250ZXh0fSBmcm9tICdyZWFjdCc7XG5cbnR5cGUgRXBpc29kZT17XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBtZW1iZXJzOiBzdHJpbmc7XG4gICAgdGh1bWJuYWlsOiBzdHJpbmc7XG4gICAgZHVyYXRpb246IG51bWJlcjtcbiAgICB1cmw6IHN0cmluZztcbn1cblxuXG50eXBlIFBsYXllckNvbnRleHREYXRhID0ge1xuICAgIGVwaXNvZGVMaXN0OiBFcGlzb2RlW107XG4gICAgY3VycmVudEVwaXNvZGVJbmRleDogbnVtYmVyOyAgXG4gICAgaXNQbGF5aW5nIDogYm9vbGVhbjtcbiAgICBpc1NodWZmbGluZyA6IGJvb2xlYW47XG4gICAgcGxheTogKGVwaXNvZGU6IEVwaXNvZGUpPT4gdm9pZDtcbiAgICBwbGF5TGlzdDogKGxpc3Q6IEVwaXNvZGVbXSwgaW5kZXg6bnVtYmVyKT0+IHZvaWQ7XG4gICAgdG9nZ2xlUGxheTogKCk9PiB2b2lkO1xuICAgIHBsYXlOZXh0OiAoKT0+IHZvaWQ7XG4gICAgdG9nZ2xlTG9vcDogKCk9PiB2b2lkO1xuICAgIHRvZ2dsZVNodWZmbGU6ICgpPT4gdm9pZDtcbiAgICBpc0xvb3BpbmcgOiBib29sZWFuO1xuICAgIHBsYXlQcmV2aXVzOiAoKT0+IHZvaWQ7XG4gICAgaGFzTmV4dDogQm9vbGVhbjtcbiAgICBoYXNQcmV2aW91czogQm9vbGVhbjtcbiAgICBzZXRQbGF5aW5nU2F0ZTogKHN0YXRlOmJvb2xlYW4pPT4gdm9pZDtcblxufTtcblxuZXhwb3J0IGNvbnN0IFBsYXllckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIFBsYXllckNvbnRleHREYXRhKTtcblxudHlwZSBQbGF5ZXJDb250ZXh0UHJvdmlkZXJQcm9wcyA9IHtcbiAgICBjaGlsZHJlbiA6IFJlYWN0Tm9kZTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gUGxheWVyQ29udGV4dFByb3ZpZGVyKHsgY2hpbGRyZW59OiBQbGF5ZXJDb250ZXh0UHJvdmlkZXJQcm9wcyl7XG4gICAgY29uc3QgW2VwaXNvZGVMaXN0LCBzZXRFcGlzb2RlTGlzdF0gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW2N1cnJlbnRFcGlzb2RlSW5kZXgsIHNldEN1cnJlbnRFcGlzb2RlSW5kZXhdPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbaXNQbGF5aW5nLCBzZXRJc1BsYXlpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtpc0xvb3BpbmcsIHNldElzTG9vcGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2lzU2h1ZmZsaW5nLCBzZXRJc1NodWZmbGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgZnVuY3Rpb24gcGxheShlcGlzb2RlOiBFcGlzb2RlKXtcbiAgICBzZXRFcGlzb2RlTGlzdChbZXBpc29kZV0pXG4gICAgc2V0Q3VycmVudEVwaXNvZGVJbmRleCgwKTtcbiAgICBzZXRJc1BsYXlpbmcodHJ1ZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGxheUxpc3QobGlzdDogRXBpc29kZVtdLCBpbmRleDogbnVtYmVyKXtcbiAgICAgICAgc2V0RXBpc29kZUxpc3QobGlzdCk7XG4gICAgICAgIHNldEN1cnJlbnRFcGlzb2RlSW5kZXgoaW5kZXgpO1xuICAgICAgICBzZXRJc1BsYXlpbmcodHJ1ZSk7XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiB0b2dnbGVTaHVmZmxlKCl7XG4gICAgICAgIHNldElzU2h1ZmZsaW5nKCFpc1NodWZmbGluZyk7XG4gICAgICAgIH1cblxuICBmdW5jdGlvbiB0b2dnbGVQbGF5KCl7XG4gICAgc2V0SXNQbGF5aW5nKCFpc1BsYXlpbmcpO1xuICAgIH1cbiAgICBmdW5jdGlvbiB0b2dnbGVMb29wKCl7XG4gICAgICAgIHNldElzTG9vcGluZyghaXNMb29waW5nKTtcbiAgICAgICAgfVxuICBmdW5jdGlvbiBzZXRQbGF5aW5nU2F0ZShzdGF0ZTpib29sZWFuKXtcbiAgICAgICAgc2V0SXNQbGF5aW5nKHN0YXRlKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYXNQcmV2aW91cyA9IGN1cnJlbnRFcGlzb2RlSW5kZXggPiAwO1xuICAgIGNvbnN0IGhhc05leHQgPSBpc1NodWZmbGluZyB8fChjdXJyZW50RXBpc29kZUluZGV4ICsgMSkgPCBzZXRFcGlzb2RlTGlzdC5sZW5ndGg7XG5cblxuXG4gICAgZnVuY3Rpb24gY2xlYXJQbGF5ZXJTdGF0ZSgpe1xuICAgICAgICBzZXRFcGlzb2RlTGlzdChbXSk7XG4gICAgICAgIHNldEN1cnJlbnRFcGlzb2RlSW5kZXgoMCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGxheU5leHQoKXtcbiAgICAgICAgaWYoaXNTaHVmZmxpbmcpe1xuICAgICAgICAgICAgY29uc3QgbmV4dFJhbmRvbUVwaXNvZGVJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGVwaXNvZGVMaXN0Lmxlbmd0aCk7XG4gICAgICAgICAgICBzZXRDdXJyZW50RXBpc29kZUluZGV4KG5leHRSYW5kb21FcGlzb2RlSW5kZXgpO1xuICAgICAgICB9ZWxzZSBpZihoYXNOZXh0KXtcbiAgICAgICAgICAgIHNldEN1cnJlbnRFcGlzb2RlSW5kZXgoY3VycmVudEVwaXNvZGVJbmRleCsxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBsYXlQcmV2aXVzKCl7XG4gICAgICAgIGlmKGhhc1ByZXZpb3VzKXtcbiAgICAgICAgICAgIHNldEN1cnJlbnRFcGlzb2RlSW5kZXgoY3VycmVudEVwaXNvZGVJbmRleC0xKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG5cbiAgcmV0dXJuIChcbiAgICA8UGxheWVyQ29udGV4dC5Qcm92aWRlciBcbiAgICB2YWx1ZT17e1xuICAgICAgICBlcGlzb2RlTGlzdCxcbiAgICAgICAgY3VycmVudEVwaXNvZGVJbmRleCxcbiAgICAgICAgcGxheSxcbiAgICAgICAgcGxheUxpc3QsXG4gICAgICAgIGlzUGxheWluZyxcbiAgICAgICAgcGxheU5leHQsXG4gICAgICAgIHBsYXlQcmV2aXVzLFxuICAgICAgICB0b2dnbGVQbGF5LFxuICAgICAgICBzZXRQbGF5aW5nU2F0ZSxcbiAgICAgICAgaGFzTmV4dCxcbiAgICAgICAgaGFzUHJldmlvdXMsXG4gICAgICAgIHRvZ2dsZUxvb3AsXG4gICAgICAgIGlzTG9vcGluZyxcbiAgICAgICAgaXNTaHVmZmxpbmcsXG4gICAgICAgIHRvZ2dsZVNodWZmbGUsXG4gICAgICAgIH19XG4gICAgICAgID5cblxuICAgICAgICB7Y2hpbGRyZW59XG5cbiAgICA8L1BsYXllckNvbnRleHQuUHJvdmlkZXI+XG5cbiAgICApXG59XG5cbmV4cG9ydCBjb25zdCB1c2VQbGF5ZXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHVzZUNvbnRleHQoUGxheWVyQ29udGV4dCk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/contexts/PlayerContext.tsx\n");

/***/ })

})