webpackHotUpdate("static/development/pages/demo.js",{

/***/ "./pages/demo.js":
/*!***********************!*\
  !*** ./pages/demo.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var rebass_styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rebass/styled-components */ "./node_modules/rebass/styled-components/index.js");
/* harmony import */ var rebass_styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rebass_styled_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _rebass_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @rebass/forms */ "./node_modules/@rebass/forms/dist/index.esm.js");





var _jsxFileName = "/Users/Chris/sweetmenu/www-mvp/pages/demo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;




var Page = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "demo__Page",
  componentId: "sc-6p8bmk-0"
})(["background:black;height:100%;min-height:100vh;"]);

var Demo =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Demo, _Component);

  function Demo() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Demo);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Demo).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Demo, [{
    key: "render",
    value: function render() {
      return __jsx(Page, {
        className: "sweetmenu__page",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, __jsx(rebass_styled_components__WEBPACK_IMPORTED_MODULE_7__["Flex"], {
        flexDirection: ['column', 'column', 'column', 'row'],
        alignItems: "center",
        justifyContent: "flex-start",
        p: [3, 3, 4],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, __jsx(rebass_styled_components__WEBPACK_IMPORTED_MODULE_7__["Box"], {
        width: [1, 1, 1 / 2],
        p: [1, 2, 3],
        className: "sweetmenu__aside",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, __jsx(rebass_styled_components__WEBPACK_IMPORTED_MODULE_7__["Heading"], {
        fontSize: [5, 5, 6],
        color: "primary",
        fontFamily: "inherit",
        mb: 3,
        className: "sweetmenu__form--title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "Seeing is believing")), __jsx(rebass_styled_components__WEBPACK_IMPORTED_MODULE_7__["Box"], {
        p: 1,
        bg: "primary",
        sx: {
          borderRadius: "4px"
        },
        className: "sweetmenu__form--card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, __jsx(rebass_styled_components__WEBPACK_IMPORTED_MODULE_7__["Text"], {
        fontSize: 2,
        mb: 1,
        className: "sweetmenu__form--cardCaption",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "Fill in your details below and we will get back to you ASAP with a free custom demo."), __jsx(rebass_styled_components__WEBPACK_IMPORTED_MODULE_7__["Box"], {
        mb: 1,
        className: "sweetmenu__form--inputGroup",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, __jsx(_rebass_forms__WEBPACK_IMPORTED_MODULE_8__["Label"], {
        fontWeight: "bold",
        htmlFor: "fullName",
        className: "sweetmenu__form--inputLabel",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, "Full name"), __jsx(_rebass_forms__WEBPACK_IMPORTED_MODULE_8__["Input"], {
        fontSize: 1,
        sx: {
          borderRadius: "4px"
        },
        p: 3,
        placeholder: "Thomas Keller",
        type: "text",
        name: "fullName",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      })), __jsx(rebass_styled_components__WEBPACK_IMPORTED_MODULE_7__["Box"], {
        mb: 1,
        className: "sweetmenu__form--inputGroup",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, __jsx(_rebass_forms__WEBPACK_IMPORTED_MODULE_8__["Label"], {
        fontWeight: "bold",
        htmlFor: "email",
        className: "sweetmenu__form--inputLabel",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, "Email"), __jsx(_rebass_forms__WEBPACK_IMPORTED_MODULE_8__["Input"], {
        fontSize: 1,
        sx: {
          borderRadius: "4px"
        },
        p: 3,
        placeholder: "tkeller@thefrenchlaundry.com",
        type: "email",
        name: "email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      })), __jsx(rebass_styled_components__WEBPACK_IMPORTED_MODULE_7__["Box"], {
        mb: 1,
        className: "sweetmenu__form--inputGroup",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, __jsx(_rebass_forms__WEBPACK_IMPORTED_MODULE_8__["Label"], {
        fontWeight: "bold",
        htmlFor: "restaurant",
        className: "sweetmenu__form--inputLabel",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, "Restaurant"), __jsx(_rebass_forms__WEBPACK_IMPORTED_MODULE_8__["Input"], {
        fontSize: 1,
        sx: {
          borderRadius: "4px"
        },
        p: 3,
        placeholder: "The French Laundry",
        type: "text",
        name: "restaurant",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      })), __jsx(rebass_styled_components__WEBPACK_IMPORTED_MODULE_7__["Box"], {
        mb: 1,
        className: "sweetmenu__form--inputGroup",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, __jsx(_rebass_forms__WEBPACK_IMPORTED_MODULE_8__["Label"], {
        fontWeight: "bold",
        htmlFor: "website",
        className: "sweetmenu__form--inputLabel",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, "Website"), __jsx(_rebass_forms__WEBPACK_IMPORTED_MODULE_8__["Input"], {
        fontSize: 1,
        sx: {
          borderRadius: "4px"
        },
        p: 3,
        placeholder: "tkeller@thefrenchlaundry.com",
        type: "url",
        name: "website",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      })))));
    }
  }]);

  return Demo;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Demo);

/***/ })

})
//# sourceMappingURL=demo.js.06b09755555023c7acbf.hot-update.js.map