webpackHotUpdate_N_E("pages/index",{

/***/ "./src/contexts/PlayerContext.tsx":
/*!****************************************!*\
  !*** ./src/contexts/PlayerContext.tsx ***!
  \****************************************/
/*! exports provided: PlayerContext, PlayerContextProvider, usePlayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PlayerContext\", function() { return PlayerContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PlayerContextProvider\", function() { return PlayerContextProvider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"usePlayer\", function() { return usePlayer; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/media/victor/HD1/Projetos/ReactJS/NLW_5/Projeto-Podcastr/src/contexts/PlayerContext.tsx\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\nvar PlayerContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])({});\nfunction PlayerContextProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      episodeList = _useState[0],\n      setEpisodeList = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      currentEpisodeIndex = _useState2[0],\n      setCurrentEpisodeIndex = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isPlaying = _useState3[0],\n      setIsPlaying = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isLooping = _useState4[0],\n      setIsLooping = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isShuffling = _useState5[0],\n      setIsShuffling = _useState5[1];\n\n  function play(episode) {\n    setEpisodeList([episode]);\n    setCurrentEpisodeIndex(0);\n    setIsPlaying(true);\n  }\n\n  function playList(list, index) {\n    setEpisodeList(list);\n    setCurrentEpisodeIndex(index);\n    setIsPlaying(true);\n  }\n\n  function toggleShuffle() {\n    setIsShuffling(!isShuffling);\n  }\n\n  function togglePlay() {\n    setIsPlaying(!isPlaying);\n  }\n\n  function toggleLoop() {\n    setIsLooping(!isLooping);\n  }\n\n  function setPlayingSate(state) {\n    setIsPlaying(state);\n  }\n\n  var hasPrevious = currentEpisodeIndex > 0;\n  var hasNext = currentEpisodeIndex + 1 < setEpisodeList.length;\n\n  function playNext() {\n    if (isShuffling) {\n      var nextRandomEpisodeIndex = Math.floor(Math.random() * episodeList.length);\n      setCurrentEpisodeIndex(nextRandomEpisodeIndex);\n    } else if (hasNext) {\n      setCurrentEpisodeIndex(currentEpisodeIndex + 1);\n    }\n  }\n\n  function playPrevius() {\n    if (hasPrevious) {\n      setCurrentEpisodeIndex(currentEpisodeIndex - 1);\n    }\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(PlayerContext.Provider, {\n    value: {\n      episodeList: episodeList,\n      currentEpisodeIndex: currentEpisodeIndex,\n      play: play,\n      playList: playList,\n      isPlaying: isPlaying,\n      playNext: playNext,\n      playPrevius: playPrevius,\n      togglePlay: togglePlay,\n      setPlayingSate: setPlayingSate,\n      hasNext: hasNext,\n      hasPrevious: hasPrevious,\n      toggleLoop: toggleLoop,\n      isLooping: isLooping,\n      isShuffling: isShuffling,\n      toggleShuffle: toggleShuffle\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 93,\n    columnNumber: 5\n  }, this);\n}\n\n_s(PlayerContextProvider, \"YSXWY8OfLfVxd5To+FHcHi+GAY0=\");\n\n_c = PlayerContextProvider;\nvar usePlayer = function usePlayer() {\n  _s2();\n\n  return Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(PlayerContext);\n};\n\n_s2(usePlayer, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\n\nvar _c;\n\n$RefreshReg$(_c, \"PlayerContextProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL1BsYXllckNvbnRleHQudHN4PzE3NzIiXSwibmFtZXMiOlsiUGxheWVyQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJQbGF5ZXJDb250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwiZXBpc29kZUxpc3QiLCJzZXRFcGlzb2RlTGlzdCIsImN1cnJlbnRFcGlzb2RlSW5kZXgiLCJzZXRDdXJyZW50RXBpc29kZUluZGV4IiwiaXNQbGF5aW5nIiwic2V0SXNQbGF5aW5nIiwiaXNMb29waW5nIiwic2V0SXNMb29waW5nIiwiaXNTaHVmZmxpbmciLCJzZXRJc1NodWZmbGluZyIsInBsYXkiLCJlcGlzb2RlIiwicGxheUxpc3QiLCJsaXN0IiwiaW5kZXgiLCJ0b2dnbGVTaHVmZmxlIiwidG9nZ2xlUGxheSIsInRvZ2dsZUxvb3AiLCJzZXRQbGF5aW5nU2F0ZSIsInN0YXRlIiwiaGFzUHJldmlvdXMiLCJoYXNOZXh0IiwibGVuZ3RoIiwicGxheU5leHQiLCJuZXh0UmFuZG9tRXBpc29kZUluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicGxheVByZXZpdXMiLCJ1c2VQbGF5ZXIiLCJ1c2VDb250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBOEJPLElBQU1BLGFBQWEsZ0JBQUdDLDJEQUFhLENBQUMsRUFBRCxDQUFuQztBQU9BLFNBQVNDLHFCQUFULE9BQXVFO0FBQUE7O0FBQUEsTUFBdENDLFFBQXNDLFFBQXRDQSxRQUFzQzs7QUFBQSxrQkFDcENDLHNEQUFRLENBQUMsRUFBRCxDQUQ0QjtBQUFBLE1BQ25FQyxXQURtRTtBQUFBLE1BQ3REQyxjQURzRDs7QUFBQSxtQkFFckJGLHNEQUFRLENBQUMsQ0FBRCxDQUZhO0FBQUEsTUFFbkVHLG1CQUZtRTtBQUFBLE1BRTlDQyxzQkFGOEM7O0FBQUEsbUJBR3hDSixzREFBUSxDQUFDLEtBQUQsQ0FIZ0M7QUFBQSxNQUdu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ImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCBSZWFjdE5vZGUsIHVzZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcblxudHlwZSBFcGlzb2RlPXtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIG1lbWJlcnM6IHN0cmluZztcbiAgICB0aHVtYm5haWw6IHN0cmluZztcbiAgICBkdXJhdGlvbjogbnVtYmVyO1xuICAgIHVybDogc3RyaW5nO1xufVxuXG5cbnR5cGUgUGxheWVyQ29udGV4dERhdGEgPSB7XG4gICAgZXBpc29kZUxpc3Q6IEVwaXNvZGVbXTtcbiAgICBjdXJyZW50RXBpc29kZUluZGV4OiBudW1iZXI7ICBcbiAgICBpc1BsYXlpbmcgOiBib29sZWFuO1xuICAgIGlzU2h1ZmZsaW5nIDogYm9vbGVhbjtcbiAgICBwbGF5OiAoZXBpc29kZTogRXBpc29kZSk9PiB2b2lkO1xuICAgIHBsYXlMaXN0OiAobGlzdDogRXBpc29kZVtdLCBpbmRleDpudW1iZXIpPT4gdm9pZDtcbiAgICB0b2dnbGVQbGF5OiAoKT0+IHZvaWQ7XG4gICAgcGxheU5leHQ6ICgpPT4gdm9pZDtcbiAgICB0b2dnbGVMb29wOiAoKT0+IHZvaWQ7XG4gICAgdG9nZ2xlU2h1ZmZsZTogKCk9PiB2b2lkO1xuICAgIGlzTG9vcGluZyA6IGJvb2xlYW47XG4gICAgcGxheVByZXZpdXM6ICgpPT4gdm9pZDtcbiAgICBoYXNOZXh0OiBCb29sZWFuO1xuICAgIGhhc1ByZXZpb3VzOiBCb29sZWFuO1xuICAgIHNldFBsYXlpbmdTYXRlOiAoc3RhdGU6Ym9vbGVhbik9PiB2b2lkO1xuXG59O1xuXG5leHBvcnQgY29uc3QgUGxheWVyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgUGxheWVyQ29udGV4dERhdGEpO1xuXG50eXBlIFBsYXllckNvbnRleHRQcm92aWRlclByb3BzID0ge1xuICAgIGNoaWxkcmVuIDogUmVhY3ROb2RlO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBQbGF5ZXJDb250ZXh0UHJvdmlkZXIoeyBjaGlsZHJlbn06IFBsYXllckNvbnRleHRQcm92aWRlclByb3BzKXtcbiAgICBjb25zdCBbZXBpc29kZUxpc3QsIHNldEVwaXNvZGVMaXN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbY3VycmVudEVwaXNvZGVJbmRleCwgc2V0Q3VycmVudEVwaXNvZGVJbmRleF09IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtpc1BsYXlpbmcsIHNldElzUGxheWluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2lzTG9vcGluZywgc2V0SXNMb29waW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbaXNTaHVmZmxpbmcsIHNldElzU2h1ZmZsaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBmdW5jdGlvbiBwbGF5KGVwaXNvZGU6IEVwaXNvZGUpe1xuICAgIHNldEVwaXNvZGVMaXN0KFtlcGlzb2RlXSlcbiAgICBzZXRDdXJyZW50RXBpc29kZUluZGV4KDApO1xuICAgIHNldElzUGxheWluZyh0cnVlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwbGF5TGlzdChsaXN0OiBFcGlzb2RlW10sIGluZGV4OiBudW1iZXIpe1xuICAgICAgICBzZXRFcGlzb2RlTGlzdChsaXN0KTtcbiAgICAgICAgc2V0Q3VycmVudEVwaXNvZGVJbmRleChpbmRleCk7XG4gICAgICAgIHNldElzUGxheWluZyh0cnVlKTtcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIHRvZ2dsZVNodWZmbGUoKXtcbiAgICAgICAgc2V0SXNTaHVmZmxpbmcoIWlzU2h1ZmZsaW5nKTtcbiAgICAgICAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZVBsYXkoKXtcbiAgICBzZXRJc1BsYXlpbmcoIWlzUGxheWluZyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRvZ2dsZUxvb3AoKXtcbiAgICAgICAgc2V0SXNMb29waW5nKCFpc0xvb3BpbmcpO1xuICAgICAgICB9XG4gIGZ1bmN0aW9uIHNldFBsYXlpbmdTYXRlKHN0YXRlOmJvb2xlYW4pe1xuICAgICAgICBzZXRJc1BsYXlpbmcoc3RhdGUpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhc1ByZXZpb3VzID0gY3VycmVudEVwaXNvZGVJbmRleCA+IDA7XG4gICAgY29uc3QgaGFzTmV4dCA9IChjdXJyZW50RXBpc29kZUluZGV4ICsgMSkgPCBzZXRFcGlzb2RlTGlzdC5sZW5ndGg7XG5cbiAgICBmdW5jdGlvbiBwbGF5TmV4dCgpe1xuICAgICAgICBpZihpc1NodWZmbGluZyl7XG4gICAgICAgICAgICBjb25zdCBuZXh0UmFuZG9tRXBpc29kZUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZXBpc29kZUxpc3QubGVuZ3RoKTtcbiAgICAgICAgICAgIHNldEN1cnJlbnRFcGlzb2RlSW5kZXgobmV4dFJhbmRvbUVwaXNvZGVJbmRleCk7XG4gICAgICAgIH1lbHNlIGlmKGhhc05leHQpe1xuICAgICAgICAgICAgc2V0Q3VycmVudEVwaXNvZGVJbmRleChjdXJyZW50RXBpc29kZUluZGV4KzEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGxheVByZXZpdXMoKXtcbiAgICAgICAgaWYoaGFzUHJldmlvdXMpe1xuICAgICAgICAgICAgc2V0Q3VycmVudEVwaXNvZGVJbmRleChjdXJyZW50RXBpc29kZUluZGV4LTEpO1xuICAgICAgICB9XG5cbiAgICB9XG5cblxuICByZXR1cm4gKFxuICAgIDxQbGF5ZXJDb250ZXh0LlByb3ZpZGVyIFxuICAgIHZhbHVlPXt7XG4gICAgICAgIGVwaXNvZGVMaXN0LFxuICAgICAgICBjdXJyZW50RXBpc29kZUluZGV4LFxuICAgICAgICBwbGF5LFxuICAgICAgICBwbGF5TGlzdCxcbiAgICAgICAgaXNQbGF5aW5nLFxuICAgICAgICBwbGF5TmV4dCxcbiAgICAgICAgcGxheVByZXZpdXMsXG4gICAgICAgIHRvZ2dsZVBsYXksXG4gICAgICAgIHNldFBsYXlpbmdTYXRlLFxuICAgICAgICBoYXNOZXh0LFxuICAgICAgICBoYXNQcmV2aW91cyxcbiAgICAgICAgdG9nZ2xlTG9vcCxcbiAgICAgICAgaXNMb29waW5nLFxuICAgICAgICBpc1NodWZmbGluZyxcbiAgICAgICAgdG9nZ2xlU2h1ZmZsZSxcbiAgICAgICAgfX1cbiAgICAgICAgPlxuXG4gICAgICAgIHtjaGlsZHJlbn1cblxuICAgIDwvUGxheWVyQ29udGV4dC5Qcm92aWRlcj5cblxuICAgIClcbn1cblxuZXhwb3J0IGNvbnN0IHVzZVBsYXllciA9ICgpID0+IHtcbiAgICByZXR1cm4gdXNlQ29udGV4dChQbGF5ZXJDb250ZXh0KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/contexts/PlayerContext.tsx\n");

/***/ })

})