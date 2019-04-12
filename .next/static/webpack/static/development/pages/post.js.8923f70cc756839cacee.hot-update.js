webpackHotUpdate("static/development/pages/post.js",{

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




var TerminalWindow = function TerminalWindow(props) {
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
};

/* harmony default export */ __webpack_exports__["default"] = (TerminalWindow);

/***/ })

})
//# sourceMappingURL=post.js.8923f70cc756839cacee.hot-update.js.map