webpackHotUpdate("static/development/pages/demo.js",{

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./pages/demo.js":
/*!***********************!*\
  !*** ./pages/demo.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var rebass_styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rebass/styled-components */ "./node_modules/rebass/styled-components/index.js");
/* harmony import */ var rebass_styled_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rebass_styled_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _rebass_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @rebass/forms */ "./node_modules/@rebass/forms/dist/index.esm.js");






var _jsxFileName = "/Users/Chris/sweetmenu/www-mvp/pages/demo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;




var Page = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "demo__Page",
  componentId: "sc-6p8bmk-0"
})(["height:100%;min-height:100vh;"]);

var Demo =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Demo, _Component);

  function Demo() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Demo);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Demo).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Demo, [{
    key: "render",
    value: function render() {
      var _jsx;

      return __jsx(Page, {
        className: "sweetmenu__page",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, __jsx(rebass_styled_components__WEBPACK_IMPORTED_MODULE_8__["Flex"], {
        flexDirection: ['column', 'column', 'column', 'row'],
        alignItems: "stretch",
        justifyContent: "flex-start",
        height: "100%",
        minHeight: "100vh",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, __jsx(rebass_styled_components__WEBPACK_IMPORTED_MODULE_8__["Box"], {
        display: "flex",
        flex: "1",
        flexDirection: "column",
        justifyContent: "center",
        p: [1, 2, 3],
        bg: "black",
        className: "sweetmenu__aside",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, __jsx(rebass_styled_components__WEBPACK_IMPORTED_MODULE_8__["Heading"], {
        fontSize: [5, 5, 6],
        color: "primary",
        fontFamily: "inherit",
        mb: 3,
        className: "sweetmenu__aside--title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "Seeing is believing")), __jsx(rebass_styled_components__WEBPACK_IMPORTED_MODULE_8__["Box"], {
        display: "flex",
        flex: "1",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "stretch",
        p: [1, 2, 3],
        className: "sweetmenu__form",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, __jsx(rebass_styled_components__WEBPACK_IMPORTED_MODULE_8__["Box"], {
        mb: 1,
        className: "sweetmenu__form--inputGroup",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, __jsx(_rebass_forms__WEBPACK_IMPORTED_MODULE_9__["Label"], (_jsx = {
        mb: 1
      }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "mb", 1), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "fontWeight", "bold"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "htmlFor", "fullName"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "className", "sweetmenu__form--inputLabel"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
        fileName: _jsxFileName,
        lineNumber: 61
      }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", this), _jsx), "Full name"), __jsx(_rebass_forms__WEBPACK_IMPORTED_MODULE_9__["Input"], {
        bg: "#efefef",
        sx: {
          borderRadius: "4px",
          border: 0
        },
        p: 3,
        placeholder: "Thomas Keller",
        type: "text",
        name: "fullName",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      })), __jsx(rebass_styled_components__WEBPACK_IMPORTED_MODULE_8__["Box"], {
        mb: 1,
        className: "sweetmenu__form--inputGroup",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, __jsx(_rebass_forms__WEBPACK_IMPORTED_MODULE_9__["Label"], {
        mb: 1,
        fontWeight: "bold",
        htmlFor: "email",
        className: "sweetmenu__form--inputLabel",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, "Email"), __jsx(_rebass_forms__WEBPACK_IMPORTED_MODULE_9__["Input"], {
        bg: "#efefef",
        sx: {
          borderRadius: "4px",
          border: 0
        },
        p: 3,
        placeholder: "tkeller@thefrenchlaundry.com",
        type: "email",
        name: "email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      })), __jsx(rebass_styled_components__WEBPACK_IMPORTED_MODULE_8__["Box"], {
        mb: 1,
        className: "sweetmenu__form--inputGroup",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, __jsx(_rebass_forms__WEBPACK_IMPORTED_MODULE_9__["Label"], {
        mb: 1,
        fontWeight: "bold",
        htmlFor: "restaurant",
        className: "sweetmenu__form--inputLabel",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, "Restaurant"), __jsx(_rebass_forms__WEBPACK_IMPORTED_MODULE_9__["Input"], {
        bg: "#efefef",
        sx: {
          borderRadius: "4px",
          border: 0
        },
        p: 3,
        placeholder: "The French Laundry",
        type: "text",
        name: "restaurant",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      })), __jsx(rebass_styled_components__WEBPACK_IMPORTED_MODULE_8__["Box"], {
        mb: 1,
        className: "sweetmenu__form--inputGroup",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, __jsx(_rebass_forms__WEBPACK_IMPORTED_MODULE_9__["Label"], {
        mb: 1,
        fontWeight: "bold",
        htmlFor: "website",
        className: "sweetmenu__form--inputLabel",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, "Website"), __jsx(_rebass_forms__WEBPACK_IMPORTED_MODULE_9__["Input"], {
        bg: "#efefef",
        sx: {
          borderRadius: "4px",
          border: 0
        },
        p: 3,
        placeholder: "tkeller@thefrenchlaundry.com",
        type: "url",
        name: "website",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      })))));
    }
  }]);

  return Demo;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Demo);

/***/ })

})
//# sourceMappingURL=demo.js.cc018c9601c321d148e6.hot-update.js.map