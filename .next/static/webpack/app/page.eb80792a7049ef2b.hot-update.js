"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/Highlights.js":
/*!**********************************!*\
  !*** ./components/Highlights.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/projects */ \"(app-pages-browser)/./data/projects.js\");\n\n\n\nconst Highlights = ()=>{\n    const lastProjects = _data_projects__WEBPACK_IMPORTED_MODULE_2__[\"default\"].slice(-5);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"projects-section\",\n        className: \"container mx-auto py-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-3xl font-bold mb-6\",\n                children: \"Selected Works\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\justi\\\\Desktop\\\\my-portfolio\\\\components\\\\Highlights.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-lg text-gray-600 mb-8\",\n                children: \"Throughout my career, I've worked on a variety of projects. Here are some that have shaped my path in software development and data science.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\justi\\\\Desktop\\\\my-portfolio\\\\components\\\\Highlights.js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, undefined),\n            lastProjects.map((project, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col md:flex-row \".concat(index % 2 === 0 ? \"\" : \"md:flex-row-reverse\", \" mb-8\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"md:w-1/2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: project.image,\n                                alt: project.title,\n                                className: \"w-full h-64 object-cover rounded-lg shadow-md\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\justi\\\\Desktop\\\\my-portfolio\\\\components\\\\Highlights.js\",\n                                lineNumber: 16,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\justi\\\\Desktop\\\\my-portfolio\\\\components\\\\Highlights.js\",\n                            lineNumber: 15,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"md:w-1/2 flex flex-col justify-center p-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"text-2xl font-bold mb-2\",\n                                    children: project.title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\justi\\\\Desktop\\\\my-portfolio\\\\components\\\\Highlights.js\",\n                                    lineNumber: 19,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-gray-700 mb-4\",\n                                    children: project.description\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\justi\\\\Desktop\\\\my-portfolio\\\\components\\\\Highlights.js\",\n                                    lineNumber: 20,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: project.link,\n                                    className: \"text-blue-500 hover:underline\",\n                                    children: \"View Project\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\justi\\\\Desktop\\\\my-portfolio\\\\components\\\\Highlights.js\",\n                                    lineNumber: 23,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\justi\\\\Desktop\\\\my-portfolio\\\\components\\\\Highlights.js\",\n                            lineNumber: 18,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, project.id, true, {\n                    fileName: \"C:\\\\Users\\\\justi\\\\Desktop\\\\my-portfolio\\\\components\\\\Highlights.js\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, undefined))\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\justi\\\\Desktop\\\\my-portfolio\\\\components\\\\Highlights.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Highlights;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Highlights);\nvar _c;\n$RefreshReg$(_c, \"Highlights\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvSGlnaGxpZ2h0cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEI7QUFDYztBQUV4QyxNQUFNRSxhQUFhO0lBQ2pCLE1BQU1DLGVBQWVGLHNEQUFRQSxDQUFDRyxLQUFLLENBQUMsQ0FBQztJQUVyQyxxQkFDRSw4REFBQ0M7UUFBSUMsSUFBRztRQUFtQkMsV0FBVTs7MEJBQ25DLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBMEI7Ozs7OzswQkFDeEMsOERBQUNFO2dCQUFFRixXQUFVOzBCQUE2Qjs7Ozs7O1lBR3pDSixhQUFhTyxHQUFHLENBQUMsQ0FBQ0MsU0FBU0Msc0JBQzFCLDhEQUFDUDtvQkFBcUJFLFdBQVcsNkJBQTBFLE9BQTdDSyxRQUFRLE1BQU0sSUFBSSxLQUFLLHVCQUFzQjs7c0NBQ3pHLDhEQUFDUDs0QkFBSUUsV0FBVTtzQ0FDYiw0RUFBQ007Z0NBQUlDLEtBQUtILFFBQVFJLEtBQUs7Z0NBQUVDLEtBQUtMLFFBQVFNLEtBQUs7Z0NBQUVWLFdBQVU7Ozs7Ozs7Ozs7O3NDQUV6RCw4REFBQ0Y7NEJBQUlFLFdBQVU7OzhDQUNiLDhEQUFDVztvQ0FBR1gsV0FBVTs4Q0FBMkJJLFFBQVFNLEtBQUs7Ozs7Ozs4Q0FDdEQsOERBQUNSO29DQUFFRixXQUFVOzhDQUNWSSxRQUFRUSxXQUFXOzs7Ozs7OENBRXRCLDhEQUFDQztvQ0FBRUMsTUFBTVYsUUFBUVcsSUFBSTtvQ0FBRWYsV0FBVTs4Q0FBZ0M7Ozs7Ozs7Ozs7Ozs7bUJBVDNESSxRQUFRTCxFQUFFOzs7Ozs7Ozs7OztBQWlCNUI7S0EzQk1KO0FBNkJOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSGlnaGxpZ2h0cy5qcz81NGFmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBwcm9qZWN0cyBmcm9tICcuLi9kYXRhL3Byb2plY3RzJztcclxuXHJcbmNvbnN0IEhpZ2hsaWdodHMgPSAoKSA9PiB7XHJcbiAgY29uc3QgbGFzdFByb2plY3RzID0gcHJvamVjdHMuc2xpY2UoLTUpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBpZD1cInByb2plY3RzLXNlY3Rpb25cIiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweS04XCI+XHJcbiAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgbWItNlwiPlNlbGVjdGVkIFdvcmtzPC9oMj5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyB0ZXh0LWdyYXktNjAwIG1iLThcIj5cclxuICAgICAgICBUaHJvdWdob3V0IG15IGNhcmVlciwgSSd2ZSB3b3JrZWQgb24gYSB2YXJpZXR5IG9mIHByb2plY3RzLiBIZXJlIGFyZSBzb21lIHRoYXQgaGF2ZSBzaGFwZWQgbXkgcGF0aCBpbiBzb2Z0d2FyZSBkZXZlbG9wbWVudCBhbmQgZGF0YSBzY2llbmNlLlxyXG4gICAgICA8L3A+XHJcbiAgICAgIHtsYXN0UHJvamVjdHMubWFwKChwcm9qZWN0LCBpbmRleCkgPT4gKFxyXG4gICAgICAgIDxkaXYga2V5PXtwcm9qZWN0LmlkfSBjbGFzc05hbWU9e2BmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93ICR7aW5kZXggJSAyID09PSAwID8gJycgOiAnbWQ6ZmxleC1yb3ctcmV2ZXJzZSd9IG1iLThgfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6dy0xLzJcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9e3Byb2plY3QuaW1hZ2V9IGFsdD17cHJvamVjdC50aXRsZX0gY2xhc3NOYW1lPVwidy1mdWxsIGgtNjQgb2JqZWN0LWNvdmVyIHJvdW5kZWQtbGcgc2hhZG93LW1kXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDp3LTEvMiBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIHAtNFwiPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIG1iLTJcIj57cHJvamVjdC50aXRsZX08L2gzPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNzAwIG1iLTRcIj5cclxuICAgICAgICAgICAgICB7cHJvamVjdC5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8YSBocmVmPXtwcm9qZWN0Lmxpbmt9IGNsYXNzTmFtZT1cInRleHQtYmx1ZS01MDAgaG92ZXI6dW5kZXJsaW5lXCI+XHJcbiAgICAgICAgICAgICAgVmlldyBQcm9qZWN0XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIaWdobGlnaHRzO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJwcm9qZWN0cyIsIkhpZ2hsaWdodHMiLCJsYXN0UHJvamVjdHMiLCJzbGljZSIsImRpdiIsImlkIiwiY2xhc3NOYW1lIiwiaDIiLCJwIiwibWFwIiwicHJvamVjdCIsImluZGV4IiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJhbHQiLCJ0aXRsZSIsImgzIiwiZGVzY3JpcHRpb24iLCJhIiwiaHJlZiIsImxpbmsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Highlights.js\n"));

/***/ })

});