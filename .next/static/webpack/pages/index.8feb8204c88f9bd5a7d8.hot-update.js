webpackHotUpdate_N_E("pages/index",{

/***/ "./src/contexts/PlayerContext.tsx":
/*!****************************************!*\
  !*** ./src/contexts/PlayerContext.tsx ***!
  \****************************************/
/*! exports provided: PlayerContext, PlayerContextProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PlayerContext\", function() { return PlayerContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PlayerContextProvider\", function() { return PlayerContextProvider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/media/victor/HD1/Projetos/ReactJS/NLW_5/Projeto-Podcastr/src/contexts/PlayerContext.tsx\",\n    _s = $RefreshSig$();\n\n\nvar PlayerContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])({});\nfunction PlayerContextProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      episodeList = _useState[0],\n      setEpisodeList = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      currentEpisodeIndex = _useState2[0],\n      setCurrentEpisodeIndex = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isPlaying = _useState3[0],\n      setIsPlaying = _useState3[1];\n\n  function play(episode) {\n    setEpisodeList([episode]);\n    setCurrentEpisodeIndex(0);\n    setIsPlaying(true);\n  }\n\n  function playList(list, index) {\n    setEpisodeList(list);\n    setCurrentEpisodeIndex(index);\n    setIsPlaying(true);\n  }\n\n  function togglePlay() {\n    setIsPlaying(!isPlaying);\n  }\n\n  function setPlayingSate(state) {\n    setIsPlaying(state);\n  }\n\n  function playNext() {\n    var nextEpisodeindex = currentEpisodeIndex + 1;\n\n    if (nextEpisodeindex >= episodeList.length) {\n      return;\n    }\n\n    setCurrentEpisodeIndex(currentEpisodeIndex + 1);\n  }\n\n  function playPrevius() {\n    if (currentEpisodeIndex > 0) {\n      setCurrentEpisodeIndex(currentEpisodeIndex - 1);\n    }\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(PlayerContext.Provider, {\n    value: {\n      episodeList: episodeList,\n      currentEpisodeIndex: currentEpisodeIndex,\n      play: play,\n      playList: playList,\n      isPlaying: isPlaying,\n      togglePlay: togglePlay,\n      setPlayingSate: setPlayingSate\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 75,\n    columnNumber: 5\n  }, this);\n}\n\n_s(PlayerContextProvider, \"LrQXJ4YCuKXOoMsmvRtpeyylJ9U=\");\n\n_c = PlayerContextProvider;\n\nvar _c;\n\n$RefreshReg$(_c, \"PlayerContextProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL1BsYXllckNvbnRleHQudHN4PzE3NzIiXSwibmFtZXMiOlsiUGxheWVyQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJQbGF5ZXJDb250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwiZXBpc29kZUxpc3QiLCJzZXRFcGlzb2RlTGlzdCIsImN1cnJlbnRFcGlzb2RlSW5kZXgiLCJzZXRDdXJyZW50RXBpc29kZUluZGV4IiwiaXNQbGF5aW5nIiwic2V0SXNQbGF5aW5nIiwicGxheSIsImVwaXNvZGUiLCJwbGF5TGlzdCIsImxpc3QiLCJpbmRleCIsInRvZ2dsZVBsYXkiLCJzZXRQbGF5aW5nU2F0ZSIsInN0YXRlIiwicGxheU5leHQiLCJuZXh0RXBpc29kZWluZGV4IiwibGVuZ3RoIiwicGxheVByZXZpdXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBc0JPLElBQU1BLGFBQWEsZ0JBQUdDLDJEQUFhLENBQUMsRUFBRCxDQUFuQztBQU9BLFNBQVNDLHFCQUFULE9BQXVFO0FBQUE7O0FBQUEsTUFBdENDLFFBQXNDLFFBQXRDQSxRQUFzQzs7QUFBQSxrQkFDcENDLHNEQUFRLENBQUMsRUFBRCxDQUQ0QjtBQUFBLE1BQ25FQyxXQURtRTtBQUFBLE1BQ3REQyxjQURzRDs7QUFBQSxtQkFFckJGLHNEQUFRLENBQUMsQ0FBRCxDQUZhO0FBQUEsTUFFbkVHLG1CQUZtRTtBQUFBLE1BRTlDQyxzQkFGOEM7O0FBQUEsbUJBR3hDSixzREFBUSxDQUFDLEtBQUQsQ0FIZ0M7QUFBQSxNQUduRUssU0FIbUU7QUFBQSxNQUd4REMsWUFId0Q7O0FBSzVFLFdBQVNDLElBQVQsQ0FBY0MsT0FBZCxFQUErQjtBQUM3Qk4sa0JBQWMsQ0FBQyxDQUFDTSxPQUFELENBQUQsQ0FBZDtBQUNBSiwwQkFBc0IsQ0FBQyxDQUFELENBQXRCO0FBQ0FFLGdCQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0M7O0FBRUQsV0FBU0csUUFBVCxDQUFrQkMsSUFBbEIsRUFBbUNDLEtBQW5DLEVBQWlEO0FBQzdDVCxrQkFBYyxDQUFDUSxJQUFELENBQWQ7QUFDQU4sMEJBQXNCLENBQUNPLEtBQUQsQ0FBdEI7QUFDQUwsZ0JBQVksQ0FBQyxJQUFELENBQVo7QUFDSDs7QUFLSCxXQUFTTSxVQUFULEdBQXFCO0FBQ25CTixnQkFBWSxDQUFDLENBQUNELFNBQUYsQ0FBWjtBQUNDOztBQUNILFdBQVNRLGNBQVQsQ0FBd0JDLEtBQXhCLEVBQXNDO0FBQ2hDUixnQkFBWSxDQUFDUSxLQUFELENBQVo7QUFDSDs7QUFHRCxXQUFTQyxRQUFULEdBQW1CO0FBQ2YsUUFBTUMsZ0JBQWdCLEdBQUdiLG1CQUFtQixHQUFDLENBQTdDOztBQUNBLFFBQUdhLGdCQUFnQixJQUFJZixXQUFXLENBQUNnQixNQUFuQyxFQUEwQztBQUN0QztBQUNIOztBQUNEYiwwQkFBc0IsQ0FBQ0QsbUJBQW1CLEdBQUMsQ0FBckIsQ0FBdEI7QUFDSDs7QUFFRCxXQUFTZSxXQUFULEdBQXNCO0FBQ2xCLFFBQUdmLG1CQUFtQixHQUFDLENBQXZCLEVBQXlCO0FBQ3JCQyw0QkFBc0IsQ0FBQ0QsbUJBQW1CLEdBQUMsQ0FBckIsQ0FBdEI7QUFDSDtBQUVKOztBQUdILHNCQUNFLHFFQUFDLGFBQUQsQ0FBZSxRQUFmO0FBQ0EsU0FBSyxFQUFFO0FBQ0hGLGlCQUFXLEVBQVhBLFdBREc7QUFFSEUseUJBQW1CLEVBQW5CQSxtQkFGRztBQUdISSxVQUFJLEVBQUpBLElBSEc7QUFJSEUsY0FBUSxFQUFSQSxRQUpHO0FBS0hKLGVBQVMsRUFBVEEsU0FMRztBQU1ITyxnQkFBVSxFQUFWQSxVQU5HO0FBT0hDLG9CQUFjLEVBQWRBO0FBUEcsS0FEUDtBQUFBLGNBWUtkO0FBWkw7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBa0JEOztHQTlEZUQscUI7O0tBQUFBLHFCIiwiZmlsZSI6Ii4vc3JjL2NvbnRleHRzL1BsYXllckNvbnRleHQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIFJlYWN0Tm9kZX0gZnJvbSAncmVhY3QnO1xuXG50eXBlIEVwaXNvZGU9e1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgbWVtYmVyczogc3RyaW5nO1xuICAgIHRodW1ibmFpbDogc3RyaW5nO1xuICAgIGR1cmF0aW9uOiBudW1iZXI7XG4gICAgdXJsOiBzdHJpbmc7XG59XG5cblxudHlwZSBQbGF5ZXJDb250ZXh0RGF0YSA9IHtcbiAgICBlcGlzb2RlTGlzdDogRXBpc29kZVtdO1xuICAgIGN1cnJlbnRFcGlzb2RlSW5kZXg6IG51bWJlcjsgIFxuICAgIGlzUGxheWluZyA6IGJvb2xlYW47XG4gICAgcGxheTogKGVwaXNvZGU6IEVwaXNvZGUpPT4gdm9pZDtcbiAgICBwbGF5TGlzdDogKGxpc3Q6IEVwaXNvZGVbXSwgaW5kZXg6bnVtYmVyKT0+IHZvaWQ7XG4gICAgdG9nZ2xlUGxheTogKCk9PiB2b2lkO1xuICAgIHNldFBsYXlpbmdTYXRlOiAoc3RhdGU6Ym9vbGVhbik9PiB2b2lkO1xuXG59O1xuXG5leHBvcnQgY29uc3QgUGxheWVyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgUGxheWVyQ29udGV4dERhdGEpO1xuXG50eXBlIFBsYXllckNvbnRleHRQcm92aWRlclByb3BzID0ge1xuICAgIGNoaWxkcmVuIDogUmVhY3ROb2RlO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBQbGF5ZXJDb250ZXh0UHJvdmlkZXIoeyBjaGlsZHJlbn06IFBsYXllckNvbnRleHRQcm92aWRlclByb3BzKXtcbiAgICBjb25zdCBbZXBpc29kZUxpc3QsIHNldEVwaXNvZGVMaXN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbY3VycmVudEVwaXNvZGVJbmRleCwgc2V0Q3VycmVudEVwaXNvZGVJbmRleF09IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtpc1BsYXlpbmcsIHNldElzUGxheWluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgZnVuY3Rpb24gcGxheShlcGlzb2RlOiBFcGlzb2RlKXtcbiAgICBzZXRFcGlzb2RlTGlzdChbZXBpc29kZV0pXG4gICAgc2V0Q3VycmVudEVwaXNvZGVJbmRleCgwKTtcbiAgICBzZXRJc1BsYXlpbmcodHJ1ZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGxheUxpc3QobGlzdDogRXBpc29kZVtdLCBpbmRleDogbnVtYmVyKXtcbiAgICAgICAgc2V0RXBpc29kZUxpc3QobGlzdCk7XG4gICAgICAgIHNldEN1cnJlbnRFcGlzb2RlSW5kZXgoaW5kZXgpO1xuICAgICAgICBzZXRJc1BsYXlpbmcodHJ1ZSk7XG4gICAgfVxuXG5cblxuXG4gIGZ1bmN0aW9uIHRvZ2dsZVBsYXkoKXtcbiAgICBzZXRJc1BsYXlpbmcoIWlzUGxheWluZyk7XG4gICAgfVxuICBmdW5jdGlvbiBzZXRQbGF5aW5nU2F0ZShzdGF0ZTpib29sZWFuKXtcbiAgICAgICAgc2V0SXNQbGF5aW5nKHN0YXRlKTtcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIHBsYXlOZXh0KCl7XG4gICAgICAgIGNvbnN0IG5leHRFcGlzb2RlaW5kZXggPSBjdXJyZW50RXBpc29kZUluZGV4KzE7XG4gICAgICAgIGlmKG5leHRFcGlzb2RlaW5kZXggPj0gZXBpc29kZUxpc3QubGVuZ3RoKXtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzZXRDdXJyZW50RXBpc29kZUluZGV4KGN1cnJlbnRFcGlzb2RlSW5kZXgrMSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGxheVByZXZpdXMoKXtcbiAgICAgICAgaWYoY3VycmVudEVwaXNvZGVJbmRleD4wKXtcbiAgICAgICAgICAgIHNldEN1cnJlbnRFcGlzb2RlSW5kZXgoY3VycmVudEVwaXNvZGVJbmRleC0xKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG5cbiAgcmV0dXJuIChcbiAgICA8UGxheWVyQ29udGV4dC5Qcm92aWRlciBcbiAgICB2YWx1ZT17e1xuICAgICAgICBlcGlzb2RlTGlzdCxcbiAgICAgICAgY3VycmVudEVwaXNvZGVJbmRleCxcbiAgICAgICAgcGxheSxcbiAgICAgICAgcGxheUxpc3QsXG4gICAgICAgIGlzUGxheWluZyxcbiAgICAgICAgdG9nZ2xlUGxheSxcbiAgICAgICAgc2V0UGxheWluZ1NhdGVcbiAgICAgICAgfX1cbiAgICAgICAgPlxuXG4gICAgICAgIHtjaGlsZHJlbn1cblxuICAgIDwvUGxheWVyQ29udGV4dC5Qcm92aWRlcj5cblxuICAgIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/contexts/PlayerContext.tsx\n");

/***/ })

})