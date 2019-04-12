webpackHotUpdate("static/development/pages/post.js",{

/***/ "./components/MyLayout.js":
/*!********************************!*\
  !*** ./components/MyLayout.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _terminal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./terminal */ "./components/terminal.js");



var layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

var Layout = function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: layoutStyle
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], null), props.children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_terminal__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/terminal.js":
/*!********************************!*\
  !*** ./components/terminal.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var terminal_in_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! terminal-in-react */ "./node_modules/terminal-in-react/lib/js/index.js");
/* harmony import */ var terminal_in_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(terminal_in_react__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined;



/* harmony default export */ __webpack_exports__["default"] = (terminal_in_react__WEBPACK_IMPORTED_MODULE_1___default()(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(terminal_in_react__WEBPACK_IMPORTED_MODULE_1___default.a, {
    color: "green",
    backgroundColor: "black",
    barColor: "black",
    style: {
      fontWeight: "bold",
      fontSize: "1em"
    },
    commands: {
      'open-google': function openGoogle() {
        return window.open('https://www.google.com/', '_blank');
      },
      showmsg: _this.showMsg,
      popup: function popup() {
        return alert('Terminal in React');
      }
    },
    descriptions: {
      'open-google': 'opens google.com',
      showmsg: 'shows a message',
      alert: 'alert',
      popup: 'alert'
    },
    msg: "You can write anything here. Example - Hello! My name is Foo and I like Bar."
  });
}));

/***/ }),

/***/ "./pages/terminal.js":
false

})
//# sourceMappingURL=post.js.5d51c8c01dd80a85cc3a.hot-update.js.map