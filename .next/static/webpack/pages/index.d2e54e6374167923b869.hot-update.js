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

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState({}),
      _React$useState4 = Object(C_Users_TORNIKE_Desktop_Omedia_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      coordinates = _React$useState4[0],
      setCoordinates = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState6 = Object(C_Users_TORNIKE_Desktop_Omedia_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState5, 2),
      tooltip = _React$useState6[0],
      showTooltip = _React$useState6[1];

  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    setWidth(window.innerWidth);
  });

  var hoverFunction = function hoverFunction(e) {
    var currentTargetRect = e.currentTarget.getBoundingClientRect();
    var coordinates = {
      top: currentTargetRect.top + 40,
      right: currentTargetRect.right + 25,
      left: currentTargetRect.left
    };
    setCoordinates(coordinates);
    showTooltip(function (value) {
      return !value;
    });
  };

  var leaveMouse = function leaveMouse(e) {
    showTooltip(function (value) {
      return !value;
    });
  };

  console.log(coordinates);

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
            lineNumber: 36,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("select", {
          className: _components_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.padScreenSelect,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("option", {
            children: "\u10E5\u10D0\u10E0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("option", {
            children: "ENG"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
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
          lineNumber: 50,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
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
                  lineNumber: 63,
                  columnNumber: 19
                }, _this), " LIVE"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: _components_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.buttonDiv,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
            children: "\u10D1\u10D8\u10DA\u10D4\u10D7\u10D4\u10D1\u10D8"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
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
          lineNumber: 80,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 78,
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
          lineNumber: 89,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 87,
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
                  lineNumber: 102,
                  columnNumber: 19
                }, _this), " LIVE"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 76,
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
        lineNumber: 115,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: _components_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.navbarWrapper,
      children: [tooltip && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: _components_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.navTooltip,
        style: coordinates,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          children: "asdasdasdasdasd"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 15
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("ul", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
          onMouseOver: hoverFunction,
          onMouseLeave: leaveMouse,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
            href: "/",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
              children: "\u10D9\u10D0\u10EA\u10D7\u10D0 \u10D4\u10E0\u10DD\u10D5\u10DC\u10E3\u10DA\u10D8"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
          onMouseOver: hoverFunction,
          onMouseLeave: leaveMouse,
          children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
            href: "/about",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
              children: "\u10E5\u10D0\u10DA\u10D7\u10D0 \u10D4\u10E0\u10DD\u10D5\u10DC\u10E3\u10DA\u10D8"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
          onMouseOver: hoverFunction,
          onMouseLeave: leaveMouse,
          children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
            href: "/about",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
              children: " 21-\u10EC\u10DA\u10D0\u10DB\u10D3\u10D4\u10DA\u10D4\u10D1\u10D8"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 143,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
          onMouseOver: hoverFunction,
          onMouseLeave: leaveMouse,
          children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
            href: "/about",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
              children: "\u10D0\u10E1\u10D0\u10D9\u10DD\u10D1\u10E0\u10D8\u10D5\u10D4\u10D1\u10D8"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 149,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
          onMouseOver: hoverFunction,
          onMouseLeave: leaveMouse,
          children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
            href: "/about",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
              children: "\u10E4\u10E3\u10E2\u10E1\u10D0\u10DA\u10D8"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 155,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
          onMouseOver: hoverFunction,
          onMouseLeave: leaveMouse,
          children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
            href: "/about",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
              children: " \u10E4\u10D0\u10DC\u10E8\u10DD\u10DE\u10D8"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 161,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 158,
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
                lineNumber: 168,
                columnNumber: 19
              }, _this), " LIVE"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 166,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 165,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: _components_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.buttonDiv,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
          children: "\u10D1\u10D8\u10DA\u10D4\u10D7\u10D4\u10D1\u10D8"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("select", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("option", {
            children: "\u10E5\u10D0\u10E0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 176,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("option", {
            children: "ENG"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 177,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 112,
    columnNumber: 7
  }, _this);
};

_s(NavBar, "ObVgKkIenQU3LgYm6oImeLjfsO8=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIuanMiXSwibmFtZXMiOlsiTmF2QmFyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIndpZHRoIiwic2V0V2lkdGgiLCJjb29yZGluYXRlcyIsInNldENvb3JkaW5hdGVzIiwidG9vbHRpcCIsInNob3dUb29sdGlwIiwidXNlRWZmZWN0Iiwid2luZG93IiwiaW5uZXJXaWR0aCIsImhvdmVyRnVuY3Rpb24iLCJlIiwiY3VycmVudFRhcmdldFJlY3QiLCJjdXJyZW50VGFyZ2V0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwicmlnaHQiLCJsZWZ0IiwidmFsdWUiLCJsZWF2ZU1vdXNlIiwiY29uc29sZSIsImxvZyIsInN0eWxlcyIsIm5hdmJhciIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwibmF2YmFyTG9nbyIsInBhZFNjcmVlblNlbGVjdCIsIm5hdmJhcldyYXBwZXIiLCJsaXZlVGV4dCIsImxpdmVCdXR0b24iLCJidXR0b25EaXYiLCJuYXZUb29sdGlwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFBQSx3QkFDT0MsNENBQUssQ0FBQ0MsUUFBTixDQUFlLENBQWYsQ0FEUDtBQUFBO0FBQUEsTUFDWkMsS0FEWTtBQUFBLE1BQ0xDLFFBREs7O0FBQUEseUJBRW1CSCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQUZuQjtBQUFBO0FBQUEsTUFFWkcsV0FGWTtBQUFBLE1BRUNDLGNBRkQ7O0FBQUEseUJBR1lMLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBSFo7QUFBQTtBQUFBLE1BR1pLLE9BSFk7QUFBQSxNQUdIQyxXQUhHOztBQUluQlAsOENBQUssQ0FBQ1EsU0FBTixDQUFnQixZQUFNO0FBQ3BCTCxZQUFRLENBQUNNLE1BQU0sQ0FB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QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBOUJGLGVBb0NFO0FBQUEsaUNBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxnQkFBSSxFQUFDLFFBQVg7QUFBQSxtQ0FDRTtBQUFHLHVCQUFTLEVBQUVHLDJFQUFNLENBQUNPLFFBQXJCO0FBQUEseUJBQ0csR0FESCxlQUVFO0FBQU0seUJBQVMsRUFBRVAsMkVBQU0sQ0FBQ1EsVUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBcENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU5GLGVBbURFO0FBQUssaUJBQVMsRUFBRVIsMkVBQU0sQ0FBQ1MsU0FBdkI7QUFBQSxnQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUEsa0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBbkRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBd0VILENBakxEOztHQUFNakMsTTs7S0FBQUEsTTtBQW1MU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDJlNTRlNjM3NDE2NzkyM2I4NjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vY29tcG9uZW50cy9zdHlsZXMvbmF2YmFyLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcblxyXG5jb25zdCBOYXZCYXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3dpZHRoLCBzZXRXaWR0aF0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbY29vcmRpbmF0ZXMsIHNldENvb3JkaW5hdGVzXSA9IFJlYWN0LnVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBbdG9vbHRpcCwgc2hvd1Rvb2x0aXBdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aCk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGhvdmVyRnVuY3Rpb24gPSAoZSkgPT4ge1xyXG4gICAgbGV0IGN1cnJlbnRUYXJnZXRSZWN0ID0gZS5jdXJyZW50VGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgY29uc3QgY29vcmRpbmF0ZXMgPSB7XHJcbiAgICAgIHRvcDogY3VycmVudFRhcmdldFJlY3QudG9wICsgNDAsXHJcbiAgICAgIHJpZ2h0OiBjdXJyZW50VGFyZ2V0UmVjdC5yaWdodCArIDI1LFxyXG4gICAgICBsZWZ0OiBjdXJyZW50VGFyZ2V0UmVjdC5sZWZ0LFxyXG4gICAgfTtcclxuICAgIHNldENvb3JkaW5hdGVzKGNvb3JkaW5hdGVzKTtcclxuICAgIHNob3dUb29sdGlwKCh2YWx1ZSkgPT4gIXZhbHVlKTtcclxuICB9O1xyXG4gIGNvbnN0IGxlYXZlTW91c2UgPSAoZSkgPT4ge1xyXG4gICAgc2hvd1Rvb2x0aXAoKHZhbHVlKSA9PiAhdmFsdWUpO1xyXG4gIH07XHJcbiAgY29uc29sZS5sb2coY29vcmRpbmF0ZXMpO1xyXG4gIGlmICh3aWR0aCA8IDEwMjQpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2YmFyfT5cclxuICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2YmFyTG9nb30+XHJcbiAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9oYW1idXJnZXIucG5nXCJcclxuICAgICAgICAgICAgICBhbHQ9XCJsb2dvXCJcclxuICAgICAgICAgICAgICBoZWlnaHQ9XCIyMHB4XCJcclxuICAgICAgICAgICAgICB3aWR0aD1cIjIwcHhcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+e1wiIFwifVxyXG4gICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9e3N0eWxlcy5wYWRTY3JlZW5TZWxlY3R9PlxyXG4gICAgICAgICAgICA8b3B0aW9uPuGDpeGDkOGDoDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uPkVORzwvb3B0aW9uPlxyXG4gICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZiYXJMb2dvfT5cclxuICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICBzcmM9XCIvYXNzZXRzL0xvZ29AM3gucG5nXCJcclxuICAgICAgICAgICAgYWx0PVwibG9nb1wiXHJcbiAgICAgICAgICAgIGhlaWdodD1cIjU5cHhcIlxyXG4gICAgICAgICAgICB3aWR0aD1cIjU5cHhcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdmJhcldyYXBwZXJ9PlxyXG4gICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMubGl2ZVRleHR9PlxyXG4gICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxpdmVCdXR0b259PiYjODIyNjs8L3NwYW4+IExJVkVcclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25EaXZ9PlxyXG4gICAgICAgICAgICA8YnV0dG9uPuGDkeGDmOGDmuGDlOGDl+GDlOGDkeGDmDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9IGVsc2UgaWYgKHdpZHRoIDwgNjAwKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdmJhcn0+XHJcbiAgICAgICAge1wiIFwifVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2YmFyTG9nb30+XHJcbiAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9oYW1idXJnZXIucG5nXCJcclxuICAgICAgICAgICAgYWx0PVwibG9nb1wiXHJcbiAgICAgICAgICAgIGhlaWdodD1cIjIwcHhcIlxyXG4gICAgICAgICAgICB3aWR0aD1cIjIwcHhcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdmJhckxvZ299PlxyXG4gICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvTG9nb0AzeC5wbmdcIlxyXG4gICAgICAgICAgICBhbHQ9XCJsb2dvXCJcclxuICAgICAgICAgICAgaGVpZ2h0PVwiNTlweFwiXHJcbiAgICAgICAgICAgIHdpZHRoPVwiNTlweFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2YmFyV3JhcHBlcn0+XHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5saXZlVGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubGl2ZUJ1dHRvbn0+JiM4MjI2Ozwvc3Bhbj4gTElWRVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9IGVsc2VcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2YmFyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdmJhckxvZ299PlxyXG4gICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvTG9nb0AzeC5wbmdcIlxyXG4gICAgICAgICAgICBhbHQ9XCJsb2dvXCJcclxuICAgICAgICAgICAgaGVpZ2h0PVwiNTlweFwiXHJcbiAgICAgICAgICAgIHdpZHRoPVwiNTlweFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2YmFyV3JhcHBlcn0+XHJcbiAgICAgICAgICB7dG9vbHRpcCAmJiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2VG9vbHRpcH0gc3R5bGU9e2Nvb3JkaW5hdGVzfT5cclxuICAgICAgICAgICAgICA8cD5hc2Rhc2Rhc2Rhc2Rhc2Q8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgPGxpIG9uTW91c2VPdmVyPXtob3ZlckZ1bmN0aW9ufSBvbk1vdXNlTGVhdmU9e2xlYXZlTW91c2V9PlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICA8YT7hg5nhg5Dhg6rhg5fhg5Ag4YOU4YOg4YOd4YOV4YOc4YOj4YOa4YOYPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIG9uTW91c2VPdmVyPXtob3ZlckZ1bmN0aW9ufSBvbk1vdXNlTGVhdmU9e2xlYXZlTW91c2V9PlxyXG4gICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XHJcbiAgICAgICAgICAgICAgICA8YT7hg6Xhg5Dhg5rhg5fhg5Ag4YOU4YOg4YOd4YOV4YOc4YOj4YOa4YOYPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIG9uTW91c2VPdmVyPXtob3ZlckZ1bmN0aW9ufSBvbk1vdXNlTGVhdmU9e2xlYXZlTW91c2V9PlxyXG4gICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XHJcbiAgICAgICAgICAgICAgICA8YT4gMjEt4YOs4YOa4YOQ4YOb4YOT4YOU4YOa4YOU4YOR4YOYPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIG9uTW91c2VPdmVyPXtob3ZlckZ1bmN0aW9ufSBvbk1vdXNlTGVhdmU9e2xlYXZlTW91c2V9PlxyXG4gICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XHJcbiAgICAgICAgICAgICAgICA8YT7hg5Dhg6Hhg5Dhg5nhg53hg5Hhg6Dhg5jhg5Xhg5Thg5Hhg5g8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgb25Nb3VzZU92ZXI9e2hvdmVyRnVuY3Rpb259IG9uTW91c2VMZWF2ZT17bGVhdmVNb3VzZX0+XHJcbiAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cclxuICAgICAgICAgICAgICAgIDxhPuGDpOGDo+GDouGDoeGDkOGDmuGDmDwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBvbk1vdXNlT3Zlcj17aG92ZXJGdW5jdGlvbn0gb25Nb3VzZUxlYXZlPXtsZWF2ZU1vdXNlfT5cclxuICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxyXG4gICAgICAgICAgICAgICAgPGE+IOGDpOGDkOGDnOGDqOGDneGDnuGDmDwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5saXZlVGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubGl2ZUJ1dHRvbn0+JiM4MjI2Ozwvc3Bhbj4gTElWRVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbkRpdn0+XHJcbiAgICAgICAgICAgIDxidXR0b24+4YOR4YOY4YOa4YOU4YOX4YOU4YOR4YOYPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxzZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbj7hg6Xhg5Dhg6A8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uPkVORzwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=