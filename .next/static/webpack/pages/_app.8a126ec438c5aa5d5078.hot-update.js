webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/contexts/PlayerContext.tsx":
/*!****************************************!*\
  !*** ./src/contexts/PlayerContext.tsx ***!
  \****************************************/
/*! exports provided: PlayerContext, PlayerContextProvider, usePlayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PlayerContext\", function() { return PlayerContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PlayerContextProvider\", function() { return PlayerContextProvider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"usePlayer\", function() { return usePlayer; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/media/victor/HD1/Projetos/ReactJS/NLW_5/Projeto-Podcastr/src/contexts/PlayerContext.tsx\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\nvar PlayerContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])({});\nfunction PlayerContextProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      episodeList = _useState[0],\n      setEpisodeList = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      currentEpisodeIndex = _useState2[0],\n      setCurrentEpisodeIndex = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isPlaying = _useState3[0],\n      setIsPlaying = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isLooping = _useState4[0],\n      setIsLooping = _useState4[1];\n\n  function play(episode) {\n    setEpisodeList([episode]);\n    setCurrentEpisodeIndex(0);\n    setIsPlaying(true);\n  }\n\n  function playList(list, index) {\n    setEpisodeList(list);\n    setCurrentEpisodeIndex(index);\n    setIsPlaying(true);\n  }\n\n  function togglePlay() {\n    setIsPlaying(!isPlaying);\n  }\n\n  function toggleLoop() {\n    setIsLooping(!isLooping);\n  }\n\n  function setPlayingSate(state) {\n    setIsPlaying(state);\n  }\n\n  var hasPrevious = currentEpisodeIndex > 0;\n  var hasNext = currentEpisodeIndex + 1 < setEpisodeList.length;\n\n  function playNext() {\n    if (hasNext) {\n      setCurrentEpisodeIndex(currentEpisodeIndex + 1);\n    }\n  }\n\n  function playPrevius() {\n    if (hasPrevious) {\n      setCurrentEpisodeIndex(currentEpisodeIndex - 1);\n    }\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(PlayerContext.Provider, {\n    value: {\n      episodeList: episodeList,\n      currentEpisodeIndex: currentEpisodeIndex,\n      play: play,\n      playList: playList,\n      isPlaying: isPlaying,\n      playNext: playNext,\n      playPrevius: playPrevius,\n      togglePlay: togglePlay,\n      setPlayingSate: setPlayingSate,\n      hasNext: hasNext,\n      hasPrevious: hasPrevious,\n      toggleLoop: toggleLoop,\n      isLooping: isLooping\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 85,\n    columnNumber: 5\n  }, this);\n}\n\n_s(PlayerContextProvider, \"3HvmxYPD5LZxO4zIQndWV+iMQ6k=\");\n\n_c = PlayerContextProvider;\nvar usePlayer = function usePlayer() {\n  _s2();\n\n  return Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(PlayerContext);\n};\n\n_s2(usePlayer, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\n\nvar _c;\n\n$RefreshReg$(_c, \"PlayerContextProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL1BsYXllckNvbnRleHQudHN4PzE3NzIiXSwibmFtZXMiOlsiUGxheWVyQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJQbGF5ZXJDb250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwiZXBpc29kZUxpc3QiLCJzZXRFcGlzb2RlTGlzdCIsImN1cnJlbnRFcGlzb2RlSW5kZXgiLCJzZXRDdXJyZW50RXBpc29kZUluZGV4IiwiaXNQbGF5aW5nIiwic2V0SXNQbGF5aW5nIiwiaXNMb29waW5nIiwic2V0SXNMb29waW5nIiwicGxheSIsImVwaXNvZGUiLCJwbGF5TGlzdCIsImxpc3QiLCJpbmRleCIsInRvZ2dsZVBsYXkiLCJ0b2dnbGVMb29wIiwic2V0UGxheWluZ1NhdGUiLCJzdGF0ZSIsImhhc1ByZXZpb3VzIiwiaGFzTmV4dCIsImxlbmd0aCIsInBsYXlOZXh0IiwicGxheVByZXZpdXMiLCJ1c2VQbGF5ZXIiLCJ1c2VDb250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBNEJPLElBQU1BLGFBQWEsZ0JBQUdDLDJEQUFhLENBQUMsRUFBRCxDQUFuQztBQU9BLFNBQVNDLHFCQUFULE9BQXVFO0FBQUE7O0FBQUEsTUFBdENDLFFBQXNDLFFBQXRDQSxRQUFzQzs7QUFBQSxrQkFDcENDLHNEQUFRLENBQUMsRUFBRCxDQUQ0QjtBQUFBLE1BQ25FQyxXQURtRTtBQUFBLE1BQ3REQyxjQURzRDs7QUFBQSxtQkFFckJGLHNEQUFRLENBQUMsQ0FBRCxDQUZhO0FBQUEsTUFFbkVHLG1CQUZtRTtBQUFBLE1BRTlDQyxzQkFGOEM7O0FBQUEsbUJBR3hDSixzREFBUSxDQUFDLEtBQUQsQ0FIZ0M7QUFBQSxNQUduRUssU0FIbUU7QUFBQSxNQUd4REMsWUFId0Q7O0FBQUEsbUJBSXhDTixzREFBUSxDQUFDLEtBQUQsQ0FKZ0M7QUFBQSxNQUluRU8sU0FKbUU7QUFBQSxNQUl4REMsWUFKd0Q7O0FBTTVFLFdBQVNDLElBQVQsQ0FBY0MsT0FBZCxFQUErQjtBQUM3QlIsa0JBQWMsQ0FBQyxDQUFDUSxPQUFELENBQUQsQ0FBZDtBQUNBTiwwQkFBc0IsQ0FBQyxDQUFELENBQXRCO0FBQ0FFLGdCQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0M7O0FBRUQsV0FBU0ssUUFBVCxDQUFrQkMsSUFBbEIsRUFBbUNDLEtBQW5DLEVBQWlEO0FBQzdDWCxrQkFBYyxDQUFDVSxJQUFELENBQWQ7QUFDQVIsMEJBQXNCLENBQUNTLEtBQUQsQ0FBdEI7QUFDQVAsZ0JBQVksQ0FBQyxJQUFELENBQVo7QUFDSDs7QUFLSCxXQUFTUSxVQUFULEdBQXFCO0FBQ25CUixnQkFBWSxDQUFDLENBQUNELFNBQUYsQ0FBWjtBQUNDOztBQUNELFdBQVNVLFVBQVQsR0FBcUI7QUFDakJQLGdCQUFZLENBQUMsQ0FBQ0QsU0FBRixDQUFaO0FBQ0M7O0FBQ1AsV0FBU1MsY0FBVCxDQUF3QkMsS0FBeEIsRUFBc0M7QUFDaENYLGdCQUFZLENBQUNXLEtBQUQsQ0FBWjtBQUNIOztBQUVELE1BQU1DLFdBQVcsR0FBR2YsbUJBQW1CLEdBQUcsQ0FBMUM7QUFDQSxNQUFNZ0IsT0FBTyxHQUFJaEIsbUJBQW1CLEdBQUcsQ0FBdkIsR0FBNEJELGNBQWMsQ0FBQ2tCLE1BQTNEOztBQUVBLFdBQVNDLFFBQVQsR0FBbUI7QUFDZixRQUFHRixPQUFILEVBQVc7QUFDUGYsNEJBQXNCLENBQUNELG1CQUFtQixHQUFDLENBQXJCLENBQXRCO0FBQ0g7QUFDSjs7QUFFRCxXQUFTbUIsV0FBVCxHQUFzQjtBQUNsQixRQUFHSixXQUFILEVBQWU7QUFDWGQsNEJBQXNCLENBQUNELG1CQUFtQixHQUFDLENBQXJCLENBQXRCO0FBQ0g7QUFFSjs7QUFHSCxzQkFDRSxxRUFBQyxhQUFELENBQWUsUUFBZjtBQUNBLFNBQUssRUFBRTtBQUNIRixpQkFBVyxFQUFYQSxXQURHO0FBRUhFLHlCQUFtQixFQUFuQkEsbUJBRkc7QUFHSE0sVUFBSSxFQUFKQSxJQUhHO0FBSUhFLGNBQVEsRUFBUkEsUUFKRztBQUtITixlQUFTLEVBQVRBLFNBTEc7QUFNSGdCLGNBQVEsRUFBUkEsUUFORztBQU9IQyxpQkFBVyxFQUFYQSxXQVBHO0FBUUhSLGdCQUFVLEVBQVZBLFVBUkc7QUFTSEUsb0JBQWMsRUFBZEEsY0FURztBQVVIRyxhQUFPLEVBQVBBLE9BVkc7QUFXSEQsaUJBQVcsRUFBWEEsV0FYRztBQVlISCxnQkFBVSxFQUFWQSxVQVpHO0FBYUhSLGVBQVMsRUFBVEE7QUFiRyxLQURQO0FBQUEsY0FrQktSO0FBbEJMO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXdCRDs7R0F4RWVELHFCOztLQUFBQSxxQjtBQTBFVCxJQUFNeUIsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUMzQixTQUFPQyx3REFBVSxDQUFDNUIsYUFBRCxDQUFqQjtBQUNILENBRk07O0lBQU0yQixTIiwiZmlsZSI6Ii4vc3JjL2NvbnRleHRzL1BsYXllckNvbnRleHQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIFJlYWN0Tm9kZSwgdXNlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xuXG50eXBlIEVwaXNvZGU9e1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgbWVtYmVyczogc3RyaW5nO1xuICAgIHRodW1ibmFpbDogc3RyaW5nO1xuICAgIGR1cmF0aW9uOiBudW1iZXI7XG4gICAgdXJsOiBzdHJpbmc7XG59XG5cblxudHlwZSBQbGF5ZXJDb250ZXh0RGF0YSA9IHtcbiAgICBlcGlzb2RlTGlzdDogRXBpc29kZVtdO1xuICAgIGN1cnJlbnRFcGlzb2RlSW5kZXg6IG51bWJlcjsgIFxuICAgIGlzUGxheWluZyA6IGJvb2xlYW47XG4gICAgcGxheTogKGVwaXNvZGU6IEVwaXNvZGUpPT4gdm9pZDtcbiAgICBwbGF5TGlzdDogKGxpc3Q6IEVwaXNvZGVbXSwgaW5kZXg6bnVtYmVyKT0+IHZvaWQ7XG4gICAgdG9nZ2xlUGxheTogKCk9PiB2b2lkO1xuICAgIHBsYXlOZXh0OiAoKT0+IHZvaWQ7XG4gICAgdG9nZ2xlTG9vcDogKCk9PiB2b2lkO1xuICAgIGlzTG9vcGluZyA6IGJvb2xlYW47XG4gICAgcGxheVByZXZpdXM6ICgpPT4gdm9pZDtcbiAgICBoYXNOZXh0OiBCb29sZWFuO1xuICAgIGhhc1ByZXZpb3VzOiBCb29sZWFuO1xuICAgIHNldFBsYXlpbmdTYXRlOiAoc3RhdGU6Ym9vbGVhbik9PiB2b2lkO1xuXG59O1xuXG5leHBvcnQgY29uc3QgUGxheWVyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgUGxheWVyQ29udGV4dERhdGEpO1xuXG50eXBlIFBsYXllckNvbnRleHRQcm92aWRlclByb3BzID0ge1xuICAgIGNoaWxkcmVuIDogUmVhY3ROb2RlO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBQbGF5ZXJDb250ZXh0UHJvdmlkZXIoeyBjaGlsZHJlbn06IFBsYXllckNvbnRleHRQcm92aWRlclByb3BzKXtcbiAgICBjb25zdCBbZXBpc29kZUxpc3QsIHNldEVwaXNvZGVMaXN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbY3VycmVudEVwaXNvZGVJbmRleCwgc2V0Q3VycmVudEVwaXNvZGVJbmRleF09IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtpc1BsYXlpbmcsIHNldElzUGxheWluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2lzTG9vcGluZywgc2V0SXNMb29waW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBmdW5jdGlvbiBwbGF5KGVwaXNvZGU6IEVwaXNvZGUpe1xuICAgIHNldEVwaXNvZGVMaXN0KFtlcGlzb2RlXSlcbiAgICBzZXRDdXJyZW50RXBpc29kZUluZGV4KDApO1xuICAgIHNldElzUGxheWluZyh0cnVlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwbGF5TGlzdChsaXN0OiBFcGlzb2RlW10sIGluZGV4OiBudW1iZXIpe1xuICAgICAgICBzZXRFcGlzb2RlTGlzdChsaXN0KTtcbiAgICAgICAgc2V0Q3VycmVudEVwaXNvZGVJbmRleChpbmRleCk7XG4gICAgICAgIHNldElzUGxheWluZyh0cnVlKTtcbiAgICB9XG5cblxuXG5cbiAgZnVuY3Rpb24gdG9nZ2xlUGxheSgpe1xuICAgIHNldElzUGxheWluZyghaXNQbGF5aW5nKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdG9nZ2xlTG9vcCgpe1xuICAgICAgICBzZXRJc0xvb3BpbmcoIWlzTG9vcGluZyk7XG4gICAgICAgIH1cbiAgZnVuY3Rpb24gc2V0UGxheWluZ1NhdGUoc3RhdGU6Ym9vbGVhbil7XG4gICAgICAgIHNldElzUGxheWluZyhzdGF0ZSk7XG4gICAgfVxuXG4gICAgY29uc3QgaGFzUHJldmlvdXMgPSBjdXJyZW50RXBpc29kZUluZGV4ID4gMDtcbiAgICBjb25zdCBoYXNOZXh0ID0gKGN1cnJlbnRFcGlzb2RlSW5kZXggKyAxKSA8IHNldEVwaXNvZGVMaXN0Lmxlbmd0aDtcblxuICAgIGZ1bmN0aW9uIHBsYXlOZXh0KCl7XG4gICAgICAgIGlmKGhhc05leHQpe1xuICAgICAgICAgICAgc2V0Q3VycmVudEVwaXNvZGVJbmRleChjdXJyZW50RXBpc29kZUluZGV4KzEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGxheVByZXZpdXMoKXtcbiAgICAgICAgaWYoaGFzUHJldmlvdXMpe1xuICAgICAgICAgICAgc2V0Q3VycmVudEVwaXNvZGVJbmRleChjdXJyZW50RXBpc29kZUluZGV4LTEpO1xuICAgICAgICB9XG5cbiAgICB9XG5cblxuICByZXR1cm4gKFxuICAgIDxQbGF5ZXJDb250ZXh0LlByb3ZpZGVyIFxuICAgIHZhbHVlPXt7XG4gICAgICAgIGVwaXNvZGVMaXN0LFxuICAgICAgICBjdXJyZW50RXBpc29kZUluZGV4LFxuICAgICAgICBwbGF5LFxuICAgICAgICBwbGF5TGlzdCxcbiAgICAgICAgaXNQbGF5aW5nLFxuICAgICAgICBwbGF5TmV4dCxcbiAgICAgICAgcGxheVByZXZpdXMsXG4gICAgICAgIHRvZ2dsZVBsYXksXG4gICAgICAgIHNldFBsYXlpbmdTYXRlLFxuICAgICAgICBoYXNOZXh0LFxuICAgICAgICBoYXNQcmV2aW91cyxcbiAgICAgICAgdG9nZ2xlTG9vcCxcbiAgICAgICAgaXNMb29waW5nLFxuICAgICAgICB9fVxuICAgICAgICA+XG5cbiAgICAgICAge2NoaWxkcmVufVxuXG4gICAgPC9QbGF5ZXJDb250ZXh0LlByb3ZpZGVyPlxuXG4gICAgKVxufVxuXG5leHBvcnQgY29uc3QgdXNlUGxheWVyID0gKCkgPT4ge1xuICAgIHJldHVybiB1c2VDb250ZXh0KFBsYXllckNvbnRleHQpO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/contexts/PlayerContext.tsx\n");

/***/ })

})