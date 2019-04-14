webpackHotUpdate("static/development/pages/post.js",{

/***/ "./components/MyLayout.js":
/*!********************************!*\
  !*** ./components/MyLayout.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _terminal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./terminal */ "./components/terminal.js");
/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-burger-menu */ "./node_modules/react-burger-menu/lib/BurgerMenu.js");
/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_burger_menu__WEBPACK_IMPORTED_MODULE_4__);





var layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

var Layout = function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "container",
    className: "jsx-2950960623"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "left",
    className: "jsx-2950960623"
  }, props.children), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_burger_menu__WEBPACK_IMPORTED_MODULE_4__["push"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    id: "home",
    href: "/",
    className: "jsx-2950960623" + " " + "menu-item"
  }, "Home"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    id: "about",
    href: "/about",
    className: "jsx-2950960623" + " " + "menu-item"
  }, "About"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    id: "contact",
    href: "/contact",
    className: "jsx-2950960623" + " " + "menu-item"
  }, "Contact")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "right",
    className: "jsx-2950960623"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_terminal__WEBPACK_IMPORTED_MODULE_3__["default"], null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2950960623"
  }, "#container.jsx-2950960623{height:100%;width:100%;}#left.jsx-2950960623,#right.jsx-2950960623{display:inline-block;*display:inline;zoom:1;vertical-align:top;width:50%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZWxjaG9pL0Rlc2t0b3AvSGFjazRJbXBhY3QvaDRpLWNzLWdpdC1ib290Y2FtcC9jb21wb25lbnRzL015TGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdCaUIsQUFHcUIsQUFJUyxZQUhWLFNBSUssRUFIbEIsY0FJUyxPQUNZLG1CQUNULFVBQ1oiLCJmaWxlIjoiL1VzZXJzL2RhbmllbGNob2kvRGVza3RvcC9IYWNrNEltcGFjdC9oNGktY3MtZ2l0LWJvb3RjYW1wL2NvbXBvbmVudHMvTXlMYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJ1xuaW1wb3J0IFRlcm1pbmFsIGZyb20gJy4vdGVybWluYWwnXG5pbXBvcnQgeyBwdXNoIGFzIE1lbnUgfSBmcm9tICdyZWFjdC1idXJnZXItbWVudSdcblxuY29uc3QgbGF5b3V0U3R5bGUgPSB7XG4gIG1hcmdpbjogMjAsXG4gIHBhZGRpbmc6IDIwLFxuICBib3JkZXI6ICcxcHggc29saWQgI0RERCdcbn1cblxuY29uc3QgTGF5b3V0ID0gcHJvcHMgPT4gKFxuICA8ZGl2IGlkPVwiY29udGFpbmVyXCI+XG4gICAgPEhlYWRlciAvPlxuICAgIDxkaXYgaWQ9XCJsZWZ0XCI+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9kaXY+XG4gICAgPE1lbnU+XG4gICAgICAgIDxhIGlkPVwiaG9tZVwiIGNsYXNzTmFtZT1cIm1lbnUtaXRlbVwiIGhyZWY9XCIvXCI+SG9tZTwvYT5cbiAgICAgICAgPGEgaWQ9XCJhYm91dFwiIGNsYXNzTmFtZT1cIm1lbnUtaXRlbVwiIGhyZWY9XCIvYWJvdXRcIj5BYm91dDwvYT5cbiAgICAgICAgPGEgaWQ9XCJjb250YWN0XCIgY2xhc3NOYW1lPVwibWVudS1pdGVtXCIgaHJlZj1cIi9jb250YWN0XCI+Q29udGFjdDwvYT5cbiAgICA8L01lbnU+XG4gICAgPGRpdiBpZD1cInJpZ2h0XCI+XG4gICAgICA8VGVybWluYWwgLz5cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PiB7YFxuICAgICAgI2NvbnRhaW5lciB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgICAjbGVmdCwgI3JpZ2h0IHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyBcbiAgICAgICAgKmRpc3BsYXk6IGlubGluZTsgXG4gICAgICAgIHpvb206IDE7IFxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgfVxuICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IExheW91dFxuIl19 */\n/*@ sourceURL=/Users/danielchoi/Desktop/Hack4Impact/h4i-cs-git-bootcamp/components/MyLayout.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=post.js.ca032baddf656b254ce9.hot-update.js.map