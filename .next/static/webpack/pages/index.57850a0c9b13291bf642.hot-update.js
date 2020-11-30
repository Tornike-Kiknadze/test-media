webpackHotUpdate_N_E("pages/index",{

/***/ "./components/navbar.js":
/*!******************************!*\
  !*** ./components/navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_TORNIKE_Desktop_Omedia_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/styles/navbar.module.css */ "./components/styles/navbar.module.css");
/* harmony import */ var _components_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);



var _jsxFileName = "C:\\Users\\TORNIKE\\Desktop\\Omedia\\components\\navbar.js",
    _this = undefined,
    _s = $RefreshSig$();






var NavBar = function NavBar() {
  _s();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(0),
      _React$useState2 = Object(C_Users_TORNIKE_Desktop_Omedia_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      width = _React$useState2[0],
      setWidth = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    setWidth(window.innerWidth);
  });

  var hoverFunction = function hoverFunction(e) {
    var currentTargetRect = event.currentTarget.getBoundingClientRect();
    var event_offsetX = event.pageX - currentTargetRect.left,
        event_offsetY = event.pageY - currentTargetRect.top;
    console.log(e.target);
  };

  if (width < 1024) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: _components_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.navbar,
      children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        style: {
          display: "flex",
          alignItems: "center"
        },
        children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: _components_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.navbarLogo,
          children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_5___default.a, {
            src: "/assets/hamburger.png",
            alt: "logo",
            height: "20px",
            width: "20px"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("select", {
          className: _components_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.padScreenSelect,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("option", {
            children: "\u10E5\u10D0\u10E0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("option", {
            children: "ENG"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: _components_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.navbarLogo,
        children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_5___default.a, {
          src: "/assets/Logo@3x.png",
          alt: "logo",
          height: "59px",
          width: "59px"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: _components_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.navbarWrapper,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("ul", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
              href: "/about",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
                className: _components_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.liveText,
                children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
                  className: _components_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.liveButton,
                  children: "\u2022"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 53,
                  columnNumber: 19
                }, _this), " LIVE"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: _components_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.buttonDiv,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
            children: "\u10D1\u10D8\u10DA\u10D4\u10D7\u10D4\u10D1\u10D8"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, _this);
  } else if (width < 600) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: _components_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.navbar,
      children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: _components_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.navbarLogo,
        children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_5___default.a, {
          src: "/assets/hamburger.png",
          alt: "logo",
          height: "20px",
          width: "20px"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: _components_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.navbarLogo,
        children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_5___default.a, {
          src: "/assets/Logo@3x.png",
          alt: "logo",
          height: "59px",
          width: "59px"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: _components_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.navbarWrapper,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("ul", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
              href: "/about",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
                className: _components_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.liveText,
                children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
                  className: _components_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.liveButton,
                  children: "\u2022"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 92,
                  columnNumber: 19
                }, _this), " LIVE"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, _this);
  } else return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: _components_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.navbar,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: _components_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.navbarLogo,
      children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_5___default.a, {
        src: "/assets/Logo@3x.png",
        alt: "logo",
        height: "59px",
        width: "59px"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: _components_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.navbarWrapper,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("ul", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
          onMouseOver: hoverFunction,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
            href: "/",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
              children: "\u10D9\u10D0\u10EA\u10D7\u10D0 \u10D4\u10E0\u10DD\u10D5\u10DC\u10E3\u10DA\u10D8"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
          onMouseOver: hoverFunction,
          children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
            href: "/about",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
              children: "\u10E5\u10D0\u10DA\u10D7\u10D0 \u10D4\u10E0\u10DD\u10D5\u10DC\u10E3\u10DA\u10D8"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
          children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
            href: "/about",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
              children: " 21-\u10EC\u10DA\u10D0\u10DB\u10D3\u10D4\u10DA\u10D4\u10D1\u10D8"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
          children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
            href: "/about",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
              children: "\u10D0\u10E1\u10D0\u10D9\u10DD\u10D1\u10E0\u10D8\u10D5\u10D4\u10D1\u10D8"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
          children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
            href: "/about",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
              children: "\u10E4\u10E3\u10E2\u10E1\u10D0\u10DA\u10D8"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
          children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
            href: "/about",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
              children: " \u10E4\u10D0\u10DC\u10E8\u10DD\u10DE\u10D8"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 146,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
            href: "/about",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
              className: _components_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.liveText,
              children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
                className: _components_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.liveButton,
                children: "\u2022"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 153,
                columnNumber: 19
              }, _this), " LIVE"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 151,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: _components_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.buttonDiv,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
          children: "\u10D1\u10D8\u10DA\u10D4\u10D7\u10D4\u10D1\u10D8"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("select", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("option", {
            children: "\u10E5\u10D0\u10E0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("option", {
            children: "ENG"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 102,
    columnNumber: 7
  }, _this);
};

_s(NavBar, "4/nr7/glcmtQpNPa3y1HsyGlpKw=");

_c = NavBar;
/* harmony default export */ __webpack_exports__["default"] = (NavBar);

var _c;

$RefreshReg$(_c, "NavBar");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIuanMiXSwibmFtZXMiOlsiTmF2QmFyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIndpZHRoIiwic2V0V2lkdGgiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaG92ZXJGdW5jdGlvbiIsImUiLCJjdXJyZW50VGFyZ2V0UmVjdCIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImV2ZW50X29mZnNldFgiLCJwYWdlWCIsImxlZnQiLCJldmVudF9vZmZzZXRZIiwicGFnZVkiLCJ0b3AiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0Iiwic3R5bGVzIiwibmF2YmFyIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJuYXZiYXJMb2dvIiwicGFkU2NyZWVuU2VsZWN0IiwibmF2YmFyV3JhcHBlciIsImxpdmVUZXh0IiwibGl2ZUJ1dHRvbiIsImJ1dHRvbkRpdiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQUEsd0JBQ09DLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxDQUFmLENBRFA7QUFBQTtBQUFBLE1BQ1pDLEtBRFk7QUFBQSxNQUNMQyxRQURLOztBQUVuQkgsOENBQUssQ0FBQ0ksU0FBTixDQUFnQixZQUFNO0FBQ3BCRCxZQUFRLENBQUNFLE1BQU0sQ0FBQ0MsVUFBUixDQUFSO0FBQ0QsR0FGRDs7QUFJQSxNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLENBQUQsRUFBTztBQUMzQixRQUFJQyxpQkFBaUIsR0FBR0MsS0FBSyxDQUFDQyxhQUFOLENBQW9CQyxxQkFBcEIsRUFBeEI7QUFDQSxRQUFNQyxhQUFhLEdBQUdILEtBQUssQ0FBQ0ksS0FBTixHQUFjTCxpQkFBaUIsQ0FBQ00sSUFBdEQ7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QUFNLGdCQUFJLEVBQUMsUUFBWDtBQUFBLG1DQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBOUJGLGVBb0NFO0FBQUEsaUNBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxnQkFBSSxFQUFDLFFBQVg7QUFBQSxtQ0FDRTtBQUFHLHVCQUFTLEVBQUVlLDJFQUFNLENBQUNPLFFBQXJCO0FBQUEseUJBQ0csR0FESCxlQUVFO0FBQU0seUJBQVMsRUFBRVAsMkVBQU0sQ0FBQ1EsVUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBcENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBOENFO0FBQUssaUJBQVMsRUFBRVIsMkVBQU0sQ0FBQ1MsU0FBdkI7QUFBQSxnQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUEsa0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBOUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBbUVILENBbEtEOztHQUFNaEMsTTs7S0FBQUEsTTtBQW9LU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTc4NTBhMGM5YjEzMjkxYmY2NDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vY29tcG9uZW50cy9zdHlsZXMvbmF2YmFyLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcblxyXG5jb25zdCBOYXZCYXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3dpZHRoLCBzZXRXaWR0aF0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0V2lkdGgod2luZG93LmlubmVyV2lkdGgpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBob3ZlckZ1bmN0aW9uID0gKGUpID0+IHtcclxuICAgIGxldCBjdXJyZW50VGFyZ2V0UmVjdCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBjb25zdCBldmVudF9vZmZzZXRYID0gZXZlbnQucGFnZVggLSBjdXJyZW50VGFyZ2V0UmVjdC5sZWZ0LFxyXG4gICAgICBldmVudF9vZmZzZXRZID0gZXZlbnQucGFnZVkgLSBjdXJyZW50VGFyZ2V0UmVjdC50b3A7XHJcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldCk7XHJcbiAgfTtcclxuICBpZiAod2lkdGggPCAxMDI0KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdmJhcn0+XHJcbiAgICAgICAge1wiIFwifVxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdmJhckxvZ299PlxyXG4gICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvaGFtYnVyZ2VyLnBuZ1wiXHJcbiAgICAgICAgICAgICAgYWx0PVwibG9nb1wiXHJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMjBweFwiXHJcbiAgICAgICAgICAgICAgd2lkdGg9XCIyMHB4XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PntcIiBcIn1cclxuICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPXtzdHlsZXMucGFkU2NyZWVuU2VsZWN0fT5cclxuICAgICAgICAgICAgPG9wdGlvbj7hg6Xhg5Dhg6A8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbj5FTkc8L29wdGlvbj5cclxuICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2YmFyTG9nb30+XHJcbiAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9Mb2dvQDN4LnBuZ1wiXHJcbiAgICAgICAgICAgIGFsdD1cImxvZ29cIlxyXG4gICAgICAgICAgICBoZWlnaHQ9XCI1OXB4XCJcclxuICAgICAgICAgICAgd2lkdGg9XCI1OXB4XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZiYXJXcmFwcGVyfT5cclxuICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmxpdmVUZXh0fT5cclxuICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5saXZlQnV0dG9ufT4mIzgyMjY7PC9zcGFuPiBMSVZFXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uRGl2fT5cclxuICAgICAgICAgICAgPGJ1dHRvbj7hg5Hhg5jhg5rhg5Thg5fhg5Thg5Hhg5g8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfSBlbHNlIGlmICh3aWR0aCA8IDYwMCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZiYXJ9PlxyXG4gICAgICAgIHtcIiBcIn1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdmJhckxvZ299PlxyXG4gICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvaGFtYnVyZ2VyLnBuZ1wiXHJcbiAgICAgICAgICAgIGFsdD1cImxvZ29cIlxyXG4gICAgICAgICAgICBoZWlnaHQ9XCIyMHB4XCJcclxuICAgICAgICAgICAgd2lkdGg9XCIyMHB4XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZiYXJMb2dvfT5cclxuICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICBzcmM9XCIvYXNzZXRzL0xvZ29AM3gucG5nXCJcclxuICAgICAgICAgICAgYWx0PVwibG9nb1wiXHJcbiAgICAgICAgICAgIGhlaWdodD1cIjU5cHhcIlxyXG4gICAgICAgICAgICB3aWR0aD1cIjU5cHhcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdmJhcldyYXBwZXJ9PlxyXG4gICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMubGl2ZVRleHR9PlxyXG4gICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxpdmVCdXR0b259PiYjODIyNjs8L3NwYW4+IExJVkVcclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfSBlbHNlXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdmJhcn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZiYXJMb2dvfT5cclxuICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICBzcmM9XCIvYXNzZXRzL0xvZ29AM3gucG5nXCJcclxuICAgICAgICAgICAgYWx0PVwibG9nb1wiXHJcbiAgICAgICAgICAgIGhlaWdodD1cIjU5cHhcIlxyXG4gICAgICAgICAgICB3aWR0aD1cIjU5cHhcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdmJhcldyYXBwZXJ9PlxyXG4gICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICA8bGkgb25Nb3VzZU92ZXI9e2hvdmVyRnVuY3Rpb259PlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICA8YT7hg5nhg5Dhg6rhg5fhg5Ag4YOU4YOg4YOd4YOV4YOc4YOj4YOa4YOYPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIG9uTW91c2VPdmVyPXtob3ZlckZ1bmN0aW9ufT5cclxuICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxyXG4gICAgICAgICAgICAgICAgPGE+4YOl4YOQ4YOa4YOX4YOQIOGDlOGDoOGDneGDleGDnOGDo+GDmuGDmDwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxyXG4gICAgICAgICAgICAgICAgPGE+IDIxLeGDrOGDmuGDkOGDm+GDk+GDlOGDmuGDlOGDkeGDmDwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxyXG4gICAgICAgICAgICAgICAgPGE+4YOQ4YOh4YOQ4YOZ4YOd4YOR4YOg4YOY4YOV4YOU4YOR4YOYPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XHJcbiAgICAgICAgICAgICAgICA8YT7hg6Thg6Phg6Lhg6Hhg5Dhg5rhg5g8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cclxuICAgICAgICAgICAgICAgIDxhPiDhg6Thg5Dhg5zhg6jhg53hg57hg5g8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMubGl2ZVRleHR9PlxyXG4gICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxpdmVCdXR0b259PiYjODIyNjs8L3NwYW4+IExJVkVcclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25EaXZ9PlxyXG4gICAgICAgICAgICA8YnV0dG9uPuGDkeGDmOGDmuGDlOGDl+GDlOGDkeGDmDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8c2VsZWN0PlxyXG4gICAgICAgICAgICAgIDxvcHRpb24+4YOl4YOQ4YOgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbj5FTkc8L29wdGlvbj5cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9