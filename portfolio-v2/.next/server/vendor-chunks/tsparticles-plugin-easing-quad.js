"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/tsparticles-plugin-easing-quad";
exports.ids = ["vendor-chunks/tsparticles-plugin-easing-quad"];
exports.modules = {

/***/ "(rsc)/./node_modules/tsparticles-plugin-easing-quad/cjs/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/tsparticles-plugin-easing-quad/cjs/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports.loadEasingQuadPlugin = void 0;\nconst tsparticles_engine_1 = __webpack_require__(/*! tsparticles-engine */ \"(rsc)/./node_modules/tsparticles-engine/cjs/index.js\");\nasync function loadEasingQuadPlugin() {\n    (0, tsparticles_engine_1.addEasing)(\"ease-in-quad\", (value)=>value ** 2);\n    (0, tsparticles_engine_1.addEasing)(\"ease-out-quad\", (value)=>1 - (1 - value) ** 2);\n    (0, tsparticles_engine_1.addEasing)(\"ease-in-out-quad\", (value)=>value < 0.5 ? 2 * value ** 2 : 1 - (-2 * value + 2) ** 2 / 2);\n}\nexports.loadEasingQuadPlugin = loadEasingQuadPlugin;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtcGx1Z2luLWVhc2luZy1xdWFkL2Nqcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiQSw4Q0FBNkM7SUFBRUcsT0FBTztBQUFLLENBQUMsRUFBQztBQUM3REQsNEJBQTRCLEdBQUcsS0FBSztBQUNwQyxNQUFNRyx1QkFBdUJDLG1CQUFPQSxDQUFDLGdGQUFvQjtBQUN6RCxlQUFlRjtJQUNWLElBQUdDLHFCQUFxQkUsU0FBUyxFQUFFLGdCQUFnQixDQUFDSixRQUFVQSxTQUFTO0lBQ3ZFLElBQUdFLHFCQUFxQkUsU0FBUyxFQUFFLGlCQUFpQixDQUFDSixRQUFVLElBQUksQ0FBQyxJQUFJQSxLQUFJLEtBQU07SUFDbEYsSUFBR0UscUJBQXFCRSxTQUFTLEVBQUUsb0JBQW9CLENBQUNKLFFBQVdBLFFBQVEsTUFBTSxJQUFJQSxTQUFTLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSUEsUUFBUSxNQUFNLElBQUk7QUFDbkk7QUFDQUQsNEJBQTRCLEdBQUdFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXYyLy4vbm9kZV9tb2R1bGVzL3RzcGFydGljbGVzLXBsdWdpbi1lYXNpbmctcXVhZC9janMvaW5kZXguanM/MWJlYyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMubG9hZEVhc2luZ1F1YWRQbHVnaW4gPSB2b2lkIDA7XG5jb25zdCB0c3BhcnRpY2xlc19lbmdpbmVfMSA9IHJlcXVpcmUoXCJ0c3BhcnRpY2xlcy1lbmdpbmVcIik7XG5hc3luYyBmdW5jdGlvbiBsb2FkRWFzaW5nUXVhZFBsdWdpbigpIHtcbiAgICAoMCwgdHNwYXJ0aWNsZXNfZW5naW5lXzEuYWRkRWFzaW5nKShcImVhc2UtaW4tcXVhZFwiLCAodmFsdWUpID0+IHZhbHVlICoqIDIpO1xuICAgICgwLCB0c3BhcnRpY2xlc19lbmdpbmVfMS5hZGRFYXNpbmcpKFwiZWFzZS1vdXQtcXVhZFwiLCAodmFsdWUpID0+IDEgLSAoMSAtIHZhbHVlKSAqKiAyKTtcbiAgICAoMCwgdHNwYXJ0aWNsZXNfZW5naW5lXzEuYWRkRWFzaW5nKShcImVhc2UtaW4tb3V0LXF1YWRcIiwgKHZhbHVlKSA9PiAodmFsdWUgPCAwLjUgPyAyICogdmFsdWUgKiogMiA6IDEgLSAoLTIgKiB2YWx1ZSArIDIpICoqIDIgLyAyKSk7XG59XG5leHBvcnRzLmxvYWRFYXNpbmdRdWFkUGx1Z2luID0gbG9hZEVhc2luZ1F1YWRQbHVnaW47XG4iXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJsb2FkRWFzaW5nUXVhZFBsdWdpbiIsInRzcGFydGljbGVzX2VuZ2luZV8xIiwicmVxdWlyZSIsImFkZEVhc2luZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/tsparticles-plugin-easing-quad/cjs/index.js\n");

/***/ })

};
;