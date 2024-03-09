"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/tsparticles-shape-square";
exports.ids = ["vendor-chunks/tsparticles-shape-square"];
exports.modules = {

/***/ "(rsc)/./node_modules/tsparticles-shape-square/cjs/SquareDrawer.js":
/*!*******************************************************************!*\
  !*** ./node_modules/tsparticles-shape-square/cjs/SquareDrawer.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports.SquareDrawer = void 0;\nconst fixFactor = Math.sqrt(2);\nclass SquareDrawer {\n    draw(context, particle, radius) {\n        const fixedRadius = radius / fixFactor, fixedDiameter = fixedRadius * 2;\n        context.rect(-fixedRadius, -fixedRadius, fixedDiameter, fixedDiameter);\n    }\n    getSidesCount() {\n        return 4;\n    }\n}\nexports.SquareDrawer = SquareDrawer;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtc2hhcGUtc3F1YXJlL2Nqcy9TcXVhcmVEcmF3ZXIuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYkEsOENBQTZDO0lBQUVHLE9BQU87QUFBSyxDQUFDLEVBQUM7QUFDN0RELG9CQUFvQixHQUFHLEtBQUs7QUFDNUIsTUFBTUcsWUFBWUMsS0FBS0MsSUFBSSxDQUFDO0FBQzVCLE1BQU1IO0lBQ0ZJLEtBQUtDLE9BQU8sRUFBRUMsUUFBUSxFQUFFQyxNQUFNLEVBQUU7UUFDNUIsTUFBTUMsY0FBY0QsU0FBU04sV0FBV1EsZ0JBQWdCRCxjQUFjO1FBQ3RFSCxRQUFRSyxJQUFJLENBQUMsQ0FBQ0YsYUFBYSxDQUFDQSxhQUFhQyxlQUFlQTtJQUM1RDtJQUNBRSxnQkFBZ0I7UUFDWixPQUFPO0lBQ1g7QUFDSjtBQUNBYixvQkFBb0IsR0FBR0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8tdjIvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtc2hhcGUtc3F1YXJlL2Nqcy9TcXVhcmVEcmF3ZXIuanM/ZjI0NiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuU3F1YXJlRHJhd2VyID0gdm9pZCAwO1xuY29uc3QgZml4RmFjdG9yID0gTWF0aC5zcXJ0KDIpO1xuY2xhc3MgU3F1YXJlRHJhd2VyIHtcbiAgICBkcmF3KGNvbnRleHQsIHBhcnRpY2xlLCByYWRpdXMpIHtcbiAgICAgICAgY29uc3QgZml4ZWRSYWRpdXMgPSByYWRpdXMgLyBmaXhGYWN0b3IsIGZpeGVkRGlhbWV0ZXIgPSBmaXhlZFJhZGl1cyAqIDI7XG4gICAgICAgIGNvbnRleHQucmVjdCgtZml4ZWRSYWRpdXMsIC1maXhlZFJhZGl1cywgZml4ZWREaWFtZXRlciwgZml4ZWREaWFtZXRlcik7XG4gICAgfVxuICAgIGdldFNpZGVzQ291bnQoKSB7XG4gICAgICAgIHJldHVybiA0O1xuICAgIH1cbn1cbmV4cG9ydHMuU3F1YXJlRHJhd2VyID0gU3F1YXJlRHJhd2VyO1xuIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiU3F1YXJlRHJhd2VyIiwiZml4RmFjdG9yIiwiTWF0aCIsInNxcnQiLCJkcmF3IiwiY29udGV4dCIsInBhcnRpY2xlIiwicmFkaXVzIiwiZml4ZWRSYWRpdXMiLCJmaXhlZERpYW1ldGVyIiwicmVjdCIsImdldFNpZGVzQ291bnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/tsparticles-shape-square/cjs/SquareDrawer.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/tsparticles-shape-square/cjs/index.js":
/*!************************************************************!*\
  !*** ./node_modules/tsparticles-shape-square/cjs/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports.loadSquareShape = void 0;\nconst SquareDrawer_1 = __webpack_require__(/*! ./SquareDrawer */ \"(rsc)/./node_modules/tsparticles-shape-square/cjs/SquareDrawer.js\");\nasync function loadSquareShape(engine, refresh = true) {\n    await engine.addShape([\n        \"edge\",\n        \"square\"\n    ], new SquareDrawer_1.SquareDrawer(), refresh);\n}\nexports.loadSquareShape = loadSquareShape;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtc2hhcGUtc3F1YXJlL2Nqcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiQSw4Q0FBNkM7SUFBRUcsT0FBTztBQUFLLENBQUMsRUFBQztBQUM3REQsdUJBQXVCLEdBQUcsS0FBSztBQUMvQixNQUFNRyxpQkFBaUJDLG1CQUFPQSxDQUFDLHlGQUFnQjtBQUMvQyxlQUFlRixnQkFBZ0JHLE1BQU0sRUFBRUMsVUFBVSxJQUFJO0lBQ2pELE1BQU1ELE9BQU9FLFFBQVEsQ0FBQztRQUFDO1FBQVE7S0FBUyxFQUFFLElBQUlKLGVBQWVLLFlBQVksSUFBSUY7QUFDakY7QUFDQU4sdUJBQXVCLEdBQUdFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXYyLy4vbm9kZV9tb2R1bGVzL3RzcGFydGljbGVzLXNoYXBlLXNxdWFyZS9janMvaW5kZXguanM/ZWM5ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMubG9hZFNxdWFyZVNoYXBlID0gdm9pZCAwO1xuY29uc3QgU3F1YXJlRHJhd2VyXzEgPSByZXF1aXJlKFwiLi9TcXVhcmVEcmF3ZXJcIik7XG5hc3luYyBmdW5jdGlvbiBsb2FkU3F1YXJlU2hhcGUoZW5naW5lLCByZWZyZXNoID0gdHJ1ZSkge1xuICAgIGF3YWl0IGVuZ2luZS5hZGRTaGFwZShbXCJlZGdlXCIsIFwic3F1YXJlXCJdLCBuZXcgU3F1YXJlRHJhd2VyXzEuU3F1YXJlRHJhd2VyKCksIHJlZnJlc2gpO1xufVxuZXhwb3J0cy5sb2FkU3F1YXJlU2hhcGUgPSBsb2FkU3F1YXJlU2hhcGU7XG4iXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJsb2FkU3F1YXJlU2hhcGUiLCJTcXVhcmVEcmF3ZXJfMSIsInJlcXVpcmUiLCJlbmdpbmUiLCJyZWZyZXNoIiwiYWRkU2hhcGUiLCJTcXVhcmVEcmF3ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/tsparticles-shape-square/cjs/index.js\n");

/***/ })

};
;