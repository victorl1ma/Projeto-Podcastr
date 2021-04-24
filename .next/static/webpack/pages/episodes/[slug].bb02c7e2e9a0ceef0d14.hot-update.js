webpackHotUpdate_N_E("pages/episodes/[slug]",{

/***/ "./src/contexts/PlayerContext.tsx":
/*!****************************************!*\
  !*** ./src/contexts/PlayerContext.tsx ***!
  \****************************************/
/*! exports provided: PlayerContext, PlayerContextProvider, usePlayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PlayerContext\", function() { return PlayerContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PlayerContextProvider\", function() { return PlayerContextProvider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"usePlayer\", function() { return usePlayer; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/media/victor/HD1/Projetos/ReactJS/NLW_5/Projeto-Podcastr/src/contexts/PlayerContext.tsx\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\nvar PlayerContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])({});\nfunction PlayerContextProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      episodeList = _useState[0],\n      setEpisodeList = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      currentEpisodeIndex = _useState2[0],\n      setCurrentEpisodeIndex = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isPlaying = _useState3[0],\n      setIsPlaying = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isLooping = _useState4[0],\n      setIsLooping = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isShuffling = _useState5[0],\n      setIsShuffling = _useState5[1];\n\n  function play(episode) {\n    setEpisodeList([episode]);\n    setCurrentEpisodeIndex(0);\n    setIsPlaying(true);\n  }\n\n  function playList(list, index) {\n    setEpisodeList(list);\n    setCurrentEpisodeIndex(index);\n    setIsPlaying(true);\n  }\n\n  function toggleShuffle() {\n    setIsShuffling(!isShuffling);\n  }\n\n  function togglePlay() {\n    setIsPlaying(!isPlaying);\n  }\n\n  function toggleLoop() {\n    setIsLooping(!isLooping);\n  }\n\n  function setPlayingSate(state) {\n    setIsPlaying(state);\n  }\n\n  var hasPrevious = currentEpisodeIndex > 0;\n  var hasNext = currentEpisodeIndex + 1 < setEpisodeList.length;\n\n  function playNext() {\n    if (hasNext) {\n      setCurrentEpisodeIndex(currentEpisodeIndex + 1);\n    }\n  }\n\n  function playPrevius() {\n    if (hasPrevious) {\n      setCurrentEpisodeIndex(currentEpisodeIndex - 1);\n    }\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(PlayerContext.Provider, {\n    value: {\n      episodeList: episodeList,\n      currentEpisodeIndex: currentEpisodeIndex,\n      play: play,\n      playList: playList,\n      isPlaying: isPlaying,\n      playNext: playNext,\n      playPrevius: playPrevius,\n      togglePlay: togglePlay,\n      setPlayingSate: setPlayingSate,\n      hasNext: hasNext,\n      hasPrevious: hasPrevious,\n      toggleLoop: toggleLoop,\n      isLooping: isLooping,\n      isShuffling: isShuffling,\n      toggleShuffle: toggleShuffle\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 90,\n    columnNumber: 5\n  }, this);\n}\n\n_s(PlayerContextProvider, \"YSXWY8OfLfVxd5To+FHcHi+GAY0=\");\n\n_c = PlayerContextProvider;\nvar usePlayer = function usePlayer() {\n  _s2();\n\n  return Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(PlayerContext);\n};\n\n_s2(usePlayer, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\n\nvar _c;\n\n$RefreshReg$(_c, \"PlayerContextProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL1BsYXllckNvbnRleHQudHN4PzE3NzIiXSwibmFtZXMiOlsiUGxheWVyQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJQbGF5ZXJDb250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwiZXBpc29kZUxpc3QiLCJzZXRFcGlzb2RlTGlzdCIsImN1cnJlbnRFcGlzb2RlSW5kZXgiLCJzZXRDdXJyZW50RXBpc29kZUluZGV4IiwiaXNQbGF5aW5nIiwic2V0SXNQbGF5aW5nIiwiaXNMb29waW5nIiwic2V0SXNMb29waW5nIiwiaXNTaHVmZmxpbmciLCJzZXRJc1NodWZmbGluZyIsInBsYXkiLCJlcGlzb2RlIiwicGxheUxpc3QiLCJsaXN0IiwiaW5kZXgiLCJ0b2dnbGVTaHVmZmxlIiwidG9nZ2xlUGxheSIsInRvZ2dsZUxvb3AiLCJzZXRQbGF5aW5nU2F0ZSIsInN0YXRlIiwiaGFzUHJldmlvdXMiLCJoYXNOZXh0IiwibGVuZ3RoIiwicGxheU5leHQiLCJwbGF5UHJldml1cyIsInVzZVBsYXllciIsInVzZUNvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUE4Qk8sSUFBTUEsYUFBYSxnQkFBR0MsMkRBQWEsQ0FBQyxFQUFELENBQW5DO0FBT0EsU0FBU0MscUJBQVQsT0FBdUU7QUFBQTs7QUFBQSxNQUF0Q0MsUUFBc0MsUUFBdENBLFFBQXNDOztBQUFBLGtCQUNwQ0Msc0RBQVEsQ0FBQyxFQUFELENBRDRCO0FBQUEsTUFDbkVDLFdBRG1FO0FBQUEsTUFDdERDLGNBRHNEOztBQUFBLG1CQUVyQkYsc0RBQVEsQ0FBQyxDQUFELENBRmE7QUFBQSxNQUVuRUcsbUJBRm1FO0FBQUEsTUFFOUNDLHNCQUY4Qzs7QUFBQSxtQkFHeENKLHNEQUFRLENBQUMsS0FBRCxDQUhnQztBQUFBLE1BR25FSyxTQUhtRTtBQUFBLE1BR3hEQyxZQUh3RDs7QUFBQSxtQkFJeENOLHNEQUFRLENBQUMsS0FBRCxDQUpnQztBQUFBLE1BSW5FTyxTQUptRTtBQUFBLE1BSXhEQyxZQUp3RDs7QUFBQSxtQkFLcENSLHNEQUFRLENBQUMsS0FBRCxDQUw0QjtBQUFBLE1BS25FUyxXQUxtRTtBQUFBLE1BS3REQyxjQUxzRDs7QUFPNUUsV0FBU0MsSUFBVCxDQUFjQyxPQUFkLEVBQStCO0FBQzdCVixrQkFBYyxDQUFDLENBQUNVLE9BQUQsQ0FBRCxDQUFkO0FBQ0FSLDBCQUFzQixDQUFDLENBQUQsQ0FBdEI7QUFDQUUsZ0JBQVksQ0FBQyxJQUFELENBQVo7QUFDQzs7QUFFRCxXQUFTTyxRQUFULENBQWtCQyxJQUFsQixFQUFtQ0MsS0FBbkMsRUFBaUQ7QUFDN0NiLGtCQUFjLENBQUNZLElBQUQsQ0FBZDtBQUNBViwwQkFBc0IsQ0FBQ1csS0FBRCxDQUF0QjtBQUNBVCxnQkFBWSxDQUFDLElBQUQsQ0FBWjtBQUNIOztBQUdELFdBQVNVLGFBQVQsR0FBd0I7QUFDcEJOLGtCQUFjLENBQUMsQ0FBQ0QsV0FBRixDQUFkO0FBQ0M7O0FBRVAsV0FBU1EsVUFBVCxHQUFxQjtBQUNuQlgsZ0JBQVksQ0FBQyxDQUFDRCxTQUFGLENBQVo7QUFDQzs7QUFDRCxXQUFTYSxVQUFULEdBQXFCO0FBQ2pCVixnQkFBWSxDQUFDLENBQUNELFNBQUYsQ0FBWjtBQUNDOztBQUNQLFdBQVNZLGNBQVQsQ0FBd0JDLEtBQXhCLEVBQXNDO0FBQ2hDZCxnQkFBWSxDQUFDYyxLQUFELENBQVo7QUFDSDs7QUFFRCxNQUFNQyxXQUFXLEdBQUdsQixtQkFBbUIsR0FBRyxDQUExQztBQUNBLE1BQU1tQixPQUFPLEdBQUluQixtQkFBbUIsR0FBRyxDQUF2QixHQUE0QkQsY0FBYyxDQUFDcUIsTUFBM0Q7O0FBRUEsV0FBU0MsUUFBVCxHQUFtQjtBQUNmLFFBQUdGLE9BQUgsRUFBVztBQUNQbEIsNEJBQXNCLENBQUNELG1CQUFtQixHQUFDLENBQXJCLENBQXRCO0FBQ0g7QUFDSjs7QUFFRCxXQUFTc0IsV0FBVCxHQUFzQjtBQUNsQixRQUFHSixXQUFILEVBQWU7QUFDWGpCLDRCQUFzQixDQUFDRCxtQkFBbUIsR0FBQyxDQUFyQixDQUF0QjtBQUNIO0FBRUo7O0FBR0gsc0JBQ0UscUVBQUMsYUFBRCxDQUFlLFFBQWY7QUFDQSxTQUFLLEVBQUU7QUFDSEYsaUJBQVcsRUFBWEEsV0FERztBQUVIRSx5QkFBbUIsRUFBbkJBLG1CQUZHO0FBR0hRLFVBQUksRUFBSkEsSUFIRztBQUlIRSxjQUFRLEVBQVJBLFFBSkc7QUFLSFIsZUFBUyxFQUFUQSxTQUxHO0FBTUhtQixjQUFRLEVBQVJBLFFBTkc7QUFPSEMsaUJBQVcsRUFBWEEsV0FQRztBQVFIUixnQkFBVSxFQUFWQSxVQVJHO0FBU0hFLG9CQUFjLEVBQWRBLGNBVEc7QUFVSEcsYUFBTyxFQUFQQSxPQVZHO0FBV0hELGlCQUFXLEVBQVhBLFdBWEc7QUFZSEgsZ0JBQVUsRUFBVkEsVUFaRztBQWFIWCxlQUFTLEVBQVRBLFNBYkc7QUFjSEUsaUJBQVcsRUFBWEEsV0FkRztBQWVITyxtQkFBYSxFQUFiQTtBQWZHLEtBRFA7QUFBQSxjQW9CS2pCO0FBcEJMO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTBCRDs7R0E3RWVELHFCOztLQUFBQSxxQjtBQStFVCxJQUFNNEIsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUMzQixTQUFPQyx3REFBVSxDQUFDL0IsYUFBRCxDQUFqQjtBQUNILENBRk07O0lBQU04QixTIiwiZmlsZSI6Ii4vc3JjL2NvbnRleHRzL1BsYXllckNvbnRleHQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIFJlYWN0Tm9kZSwgdXNlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xuXG50eXBlIEVwaXNvZGU9e1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgbWVtYmVyczogc3RyaW5nO1xuICAgIHRodW1ibmFpbDogc3RyaW5nO1xuICAgIGR1cmF0aW9uOiBudW1iZXI7XG4gICAgdXJsOiBzdHJpbmc7XG59XG5cblxudHlwZSBQbGF5ZXJDb250ZXh0RGF0YSA9IHtcbiAgICBlcGlzb2RlTGlzdDogRXBpc29kZVtdO1xuICAgIGN1cnJlbnRFcGlzb2RlSW5kZXg6IG51bWJlcjsgIFxuICAgIGlzUGxheWluZyA6IGJvb2xlYW47XG4gICAgaXNTaHVmZmxpbmcgOiBib29sZWFuO1xuICAgIHBsYXk6IChlcGlzb2RlOiBFcGlzb2RlKT0+IHZvaWQ7XG4gICAgcGxheUxpc3Q6IChsaXN0OiBFcGlzb2RlW10sIGluZGV4Om51bWJlcik9PiB2b2lkO1xuICAgIHRvZ2dsZVBsYXk6ICgpPT4gdm9pZDtcbiAgICBwbGF5TmV4dDogKCk9PiB2b2lkO1xuICAgIHRvZ2dsZUxvb3A6ICgpPT4gdm9pZDtcbiAgICB0b2dnbGVTaHVmZmxpbmc6ICgpPT4gdm9pZDtcbiAgICBpc0xvb3BpbmcgOiBib29sZWFuO1xuICAgIHBsYXlQcmV2aXVzOiAoKT0+IHZvaWQ7XG4gICAgaGFzTmV4dDogQm9vbGVhbjtcbiAgICBoYXNQcmV2aW91czogQm9vbGVhbjtcbiAgICBzZXRQbGF5aW5nU2F0ZTogKHN0YXRlOmJvb2xlYW4pPT4gdm9pZDtcblxufTtcblxuZXhwb3J0IGNvbnN0IFBsYXllckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIFBsYXllckNvbnRleHREYXRhKTtcblxudHlwZSBQbGF5ZXJDb250ZXh0UHJvdmlkZXJQcm9wcyA9IHtcbiAgICBjaGlsZHJlbiA6IFJlYWN0Tm9kZTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gUGxheWVyQ29udGV4dFByb3ZpZGVyKHsgY2hpbGRyZW59OiBQbGF5ZXJDb250ZXh0UHJvdmlkZXJQcm9wcyl7XG4gICAgY29uc3QgW2VwaXNvZGVMaXN0LCBzZXRFcGlzb2RlTGlzdF0gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW2N1cnJlbnRFcGlzb2RlSW5kZXgsIHNldEN1cnJlbnRFcGlzb2RlSW5kZXhdPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbaXNQbGF5aW5nLCBzZXRJc1BsYXlpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtpc0xvb3BpbmcsIHNldElzTG9vcGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2lzU2h1ZmZsaW5nLCBzZXRJc1NodWZmbGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgZnVuY3Rpb24gcGxheShlcGlzb2RlOiBFcGlzb2RlKXtcbiAgICBzZXRFcGlzb2RlTGlzdChbZXBpc29kZV0pXG4gICAgc2V0Q3VycmVudEVwaXNvZGVJbmRleCgwKTtcbiAgICBzZXRJc1BsYXlpbmcodHJ1ZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGxheUxpc3QobGlzdDogRXBpc29kZVtdLCBpbmRleDogbnVtYmVyKXtcbiAgICAgICAgc2V0RXBpc29kZUxpc3QobGlzdCk7XG4gICAgICAgIHNldEN1cnJlbnRFcGlzb2RlSW5kZXgoaW5kZXgpO1xuICAgICAgICBzZXRJc1BsYXlpbmcodHJ1ZSk7XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiB0b2dnbGVTaHVmZmxlKCl7XG4gICAgICAgIHNldElzU2h1ZmZsaW5nKCFpc1NodWZmbGluZyk7XG4gICAgICAgIH1cblxuICBmdW5jdGlvbiB0b2dnbGVQbGF5KCl7XG4gICAgc2V0SXNQbGF5aW5nKCFpc1BsYXlpbmcpO1xuICAgIH1cbiAgICBmdW5jdGlvbiB0b2dnbGVMb29wKCl7XG4gICAgICAgIHNldElzTG9vcGluZyghaXNMb29waW5nKTtcbiAgICAgICAgfVxuICBmdW5jdGlvbiBzZXRQbGF5aW5nU2F0ZShzdGF0ZTpib29sZWFuKXtcbiAgICAgICAgc2V0SXNQbGF5aW5nKHN0YXRlKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYXNQcmV2aW91cyA9IGN1cnJlbnRFcGlzb2RlSW5kZXggPiAwO1xuICAgIGNvbnN0IGhhc05leHQgPSAoY3VycmVudEVwaXNvZGVJbmRleCArIDEpIDwgc2V0RXBpc29kZUxpc3QubGVuZ3RoO1xuXG4gICAgZnVuY3Rpb24gcGxheU5leHQoKXtcbiAgICAgICAgaWYoaGFzTmV4dCl7XG4gICAgICAgICAgICBzZXRDdXJyZW50RXBpc29kZUluZGV4KGN1cnJlbnRFcGlzb2RlSW5kZXgrMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwbGF5UHJldml1cygpe1xuICAgICAgICBpZihoYXNQcmV2aW91cyl7XG4gICAgICAgICAgICBzZXRDdXJyZW50RXBpc29kZUluZGV4KGN1cnJlbnRFcGlzb2RlSW5kZXgtMSk7XG4gICAgICAgIH1cblxuICAgIH1cblxuXG4gIHJldHVybiAoXG4gICAgPFBsYXllckNvbnRleHQuUHJvdmlkZXIgXG4gICAgdmFsdWU9e3tcbiAgICAgICAgZXBpc29kZUxpc3QsXG4gICAgICAgIGN1cnJlbnRFcGlzb2RlSW5kZXgsXG4gICAgICAgIHBsYXksXG4gICAgICAgIHBsYXlMaXN0LFxuICAgICAgICBpc1BsYXlpbmcsXG4gICAgICAgIHBsYXlOZXh0LFxuICAgICAgICBwbGF5UHJldml1cyxcbiAgICAgICAgdG9nZ2xlUGxheSxcbiAgICAgICAgc2V0UGxheWluZ1NhdGUsXG4gICAgICAgIGhhc05leHQsXG4gICAgICAgIGhhc1ByZXZpb3VzLFxuICAgICAgICB0b2dnbGVMb29wLFxuICAgICAgICBpc0xvb3BpbmcsXG4gICAgICAgIGlzU2h1ZmZsaW5nLFxuICAgICAgICB0b2dnbGVTaHVmZmxlLFxuICAgICAgICB9fVxuICAgICAgICA+XG5cbiAgICAgICAge2NoaWxkcmVufVxuXG4gICAgPC9QbGF5ZXJDb250ZXh0LlByb3ZpZGVyPlxuXG4gICAgKVxufVxuXG5leHBvcnQgY29uc3QgdXNlUGxheWVyID0gKCkgPT4ge1xuICAgIHJldHVybiB1c2VDb250ZXh0KFBsYXllckNvbnRleHQpO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/contexts/PlayerContext.tsx\n");

/***/ })

})