(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <header></header>\n\n\n    <router-outlet>  </router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _splash_splash_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./splash/splash.component */ "./src/app/splash/splash.component.ts");
/* harmony import */ var _sandbox_sandbox_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sandbox/sandbox.component */ "./src/app/sandbox/sandbox.component.ts");
/* harmony import */ var _sandbox_hole_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sandbox/hole.component */ "./src/app/sandbox/hole.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _splash_splash_component__WEBPACK_IMPORTED_MODULE_3__["SplashComponent"],
                _sandbox_sandbox_component__WEBPACK_IMPORTED_MODULE_4__["SandboxComponent"],
                _sandbox_hole_component__WEBPACK_IMPORTED_MODULE_5__["HoleComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_6__["routing"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _splash_splash_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./splash/splash.component */ "./src/app/splash/splash.component.ts");
/* harmony import */ var _sandbox_sandbox_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sandbox/sandbox.component */ "./src/app/sandbox/sandbox.component.ts");
/* harmony import */ var _sandbox_hole_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sandbox/hole.component */ "./src/app/sandbox/hole.component.ts");




var APP_ROUTES = [
    { path: '', component: _splash_splash_component__WEBPACK_IMPORTED_MODULE_1__["SplashComponent"], pathMatch: 'full' },
    { path: 'sandbox', component: _sandbox_sandbox_component__WEBPACK_IMPORTED_MODULE_2__["SandboxComponent"] },
    { path: 'hole', component: _sandbox_hole_component__WEBPACK_IMPORTED_MODULE_3__["HoleComponent"] }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(APP_ROUTES);


/***/ }),

/***/ "./src/app/sandbox/hole.component.css":
/*!********************************************!*\
  !*** ./src/app/sandbox/hole.component.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  height: 100%;\n  width: 100%;\n}\n\n\n.soft-bounce {\n\n /* Safari 4.0 - 8.0 */\n    -webkit-animation-name: example;\n    -webkit-animation-duration: 3s;\n    -webkit-animation-iteration-count: infinite;\n    -webkit-animation-direction: alternate;\n\n    -webkit-animation-name: bob;\n\n            animation-name: bob;\n    animation-duration: 3s;\n    animation-iteration-count: infinite;\n    animation-direction: alternate;\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in;\n}\n\n\n.world {\n  cx: 60%;\n  cy: 60%;\n  r: 20%;\n  fill: #004665;\n}\n\n\n/* Safari 4.0 - 8.0 */\n\n\n@-webkit-keyframes bob {\n  0%   {  top:0px;}\n  100% {  top:30px;}\n}\n\n\n/* Standard syntax */\n\n\n@keyframes bob {\n  0%   {  -webkit-transform:translateY(0px);}\n  100% {  -webkit-transform:translateY(30px);}\n}\n"

/***/ }),

/***/ "./src/app/sandbox/hole.component.html":
/*!*********************************************!*\
  !*** ./src/app/sandbox/hole.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/sandbox/hole.component.ts":
/*!*******************************************!*\
  !*** ./src/app/sandbox/hole.component.ts ***!
  \*******************************************/
/*! exports provided: HoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoleComponent", function() { return HoleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HoleComponent = /** @class */ (function () {
    function HoleComponent() {
    }
    HoleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'hole',
            template: __webpack_require__(/*! ./hole.component.html */ "./src/app/sandbox/hole.component.html"),
            styles: [__webpack_require__(/*! ./hole.component.css */ "./src/app/sandbox/hole.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HoleComponent);
    return HoleComponent;
}());



/***/ }),

/***/ "./src/app/sandbox/sandbox.component.css":
/*!***********************************************!*\
  !*** ./src/app/sandbox/sandbox.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jquery-div {\n  background-color: red;\n  position: relative;\n  height: 105px;\n  width: 260px;\n}\n\n\n\n\nbody, html {\n  height: 100%;\n  margin: 0;\n}\n\n\n\n\n.sky {\n  background: #91bbfc;\n  color: white;\n  height: 100%;\n  padding-top: 10%;\n  font-size: 500%;\n  text-align: center;\n}\n\n\n\n\n.random {\n\n}\n"

/***/ }),

/***/ "./src/app/sandbox/sandbox.component.html":
/*!************************************************!*\
  !*** ./src/app/sandbox/sandbox.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" name=\"button\">zoopboop</button>\n<div class=\"jquery-div\">\n  XXX\n</div>\n\n\n<div class=\"sky\"> BLUE\n  <div class=\"blue\">\n    <span class=\"wordSize\">SKY</span>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/sandbox/sandbox.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sandbox/sandbox.component.ts ***!
  \**********************************************/
/*! exports provided: SandboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SandboxComponent", function() { return SandboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SandboxComponent = /** @class */ (function () {
    function SandboxComponent() {
    }
    SandboxComponent.prototype.ngOnInit = function () {
        jquery__WEBPACK_IMPORTED_MODULE_1__(document).ready(function () {
            jquery__WEBPACK_IMPORTED_MODULE_1__("button").click(function () {
                var div = jquery__WEBPACK_IMPORTED_MODULE_1__("div");
                div.animate({ left: '100px' }, "slow");
            });
        });
        var callCount = 0;
        var setI = setInterval(function () {
            if (callCount < 5) {
                callCount = callCount + 1;
                console.log("callCount:");
                console.log(callCount);
                //can't call functions from this scope???
                // let x = this.randNumStr(($(window).width() - $(".wordSize").width()));
                // let y = this.randNumStr(($(window).height() - $(".wordSize").height()));
                var x = Math.floor((Math.random() * (jquery__WEBPACK_IMPORTED_MODULE_1__(window).width() - jquery__WEBPACK_IMPORTED_MODULE_1__(".wordSize").width())) + 1).toString();
                var y = Math.floor((Math.random() * (jquery__WEBPACK_IMPORTED_MODULE_1__(window).height() - jquery__WEBPACK_IMPORTED_MODULE_1__(".wordSize").height())) + 1).toString();
                var sky = document.getElementsByClassName("sky")[0];
                var sprout = document.createElement("div");
                sprout.innerHTML = "SKY";
                sprout.classList.add("random");
                sky.appendChild(sprout);
                sprout.style.position = "absolute";
                sprout.style.left = x + "px";
                sprout.style.top = y + "px";
            }
            else {
                clearInterval(setI);
            }
        }, 400);
    };
    SandboxComponent.prototype.randNumStr = function (dem) {
        var x = Math.floor((Math.random() * dem) + 1);
        return x.toString();
    };
    SandboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sandbox',
            template: __webpack_require__(/*! ./sandbox.component.html */ "./src/app/sandbox/sandbox.component.html"),
            styles: [__webpack_require__(/*! ./sandbox.component.css */ "./src/app/sandbox/sandbox.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SandboxComponent);
    return SandboxComponent;
}());



/***/ }),

/***/ "./src/app/splash/splash.component.css":
/*!*********************************************!*\
  !*** ./src/app/splash/splash.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  height: 100%;\n  width: 100%;\n}\n\n\n.soft-bounce {\n\n-webkit-animation-name: bob;\n\n        animation-name: bob;\n-webkit-animation-duration: 3s;\n        animation-duration: 3s;\n-webkit-animation-iteration-count: infinite;\n        animation-iteration-count: infinite;\n-webkit-animation-direction: alternate;\n        animation-direction: alternate;\n-webkit-animation-timing-function: ease-in;\n        animation-timing-function: ease-in;\n}\n\n\n.slow-drift {\n  -webkit-animation-name: drift;\n          animation-name: drift;\n  -webkit-animation-duration: 5s;\n          animation-duration: 5s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-direction: alternate;\n          animation-direction: alternate;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n}\n\n\n.orbit-front {\n  -webkit-animation-name: orbit-disappear;\n          animation-name: orbit-disappear;\n  -webkit-animation-duration: 5s;\n          animation-duration: 5s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n}\n\n\n.orbit-back {\n  -webkit-animation-name: orbit;\n          animation-name: orbit;\n  -webkit-animation-duration: 5s;\n          animation-duration: 5s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-direction: alternate;\n          animation-direction: alternate;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n}\n\n\n#word1 {\n  font-family: Roboto;\n  font-size: 1000%;\n  color: #fff;\n  position: absolute;\n  bottom: 75%;\n  left: 5%;\n  z-index: 0;\n  margin: 0;\n}\n\n\n#word2 {\n  font-family: Roboto;\n  -webkit-animation-delay: .3s;\n          animation-delay: .3s;\n  font-size: 450%;\n  color: #fff;\n  text-shadow: 3px 3px 3px #000000;\n  position: absolute;\n  bottom: 10%;\n  left: 70%;\n  z-index: 0;\n  margin: 0;\n}\n\n\n#word3 {\n  width: 50%;\n  font-family: Roboto;\n  -webkit-animation-delay: .3s;\n          animation-delay: .3s;\n  font-size: 500%;\n  color: #fff;\n  text-shadow: 3px 3px 3px #000000;\n  position: absolute;\n  top: 30%;\n  left: 5%;\n  z-index: 0;\n  margin: 0;\n}\n\n\n.floaty-link {\n  -webkit-animation-name: bob;\n          animation-name: bob;\n  text-decoration: none;\n  color: inherit;\n}\n\n\n#star1 {\n  -webkit-animation-delay: .5s;\n          animation-delay: .5s;\n  position: absolute;\n  bottom: 15%;\n  left: 20%;\n  width: 10%;\n  height: 20%;\n  z-index: 1;\n}\n\n\n#star2 {\n  -webkit-animation-delay: .2s;\n          animation-delay: .2s;\n  position: absolute;\n  bottom: 14%;\n  left: 15%;\n  width: 6%;\n  height: 12%;\n  z-index: 1;\n}\n\n\n#star3 {\n  -webkit-animation-delay: .4s;\n          animation-delay: .4s;\n  position: absolute;\n  bottom: 10%;\n  left: 20%;\n  width: 4%;\n  height: 8%;\n  z-index: 1;\n}\n\n\n#star4 {\n  -webkit-animation-delay: .5s;\n          animation-delay: .5s;\n  position: absolute;\n  top: 15%;\n  right: 20%;\n  width: 10%;\n  height: 20%;\n  z-index: 1;\n}\n\n\n#star5 {\n  -webkit-animation-delay: .2s;\n          animation-delay: .2s;\n  position: absolute;\n  top: 14%;\n  right: 15%;\n  width: 6%;\n  height: 12%;\n  z-index: 1;\n}\n\n\n#star6 {\n  -webkit-animation-delay: .4s;\n          animation-delay: .4s;\n  position: absolute;\n  top: 10%;\n  right: 20%;\n  width: 4%;\n  height: 8%;\n  z-index: 1;\n}\n\n\n.world {\n  cx: 50%;\n  cy: 185%;\n  r: 87%;\n  fill: #004665;\n}\n\n\n.moon {\n  cx: 85%;\n  cy: 15%;\n  r: 7%;\n  fill: #007569;\n}\n\n\n#sub-moon-front {\n  cx: 78%;\n  cy: 25%;\n  r: 2%;\n  fill: #28434e;\n}\n\n\n#sub-moon-back {\n  cx: 78%;\n  cy: 25%;\n  r: 2%;\n  fill: #28434e;\n}\n\n\n#cloud1 {\n  x: 12%;\n  y: 70%;\n  height: 50px;\n  width: 160px;\n  rx: 25px;\n  ry: 50px;\n  fill: white;\n}\n\n\n#shadow1 {\n  x: 12%;\n  y: 80%;\n  height: 50px;\n  width: 160px;\n  rx: 25px;\n  ry: 50px;\n  fill: #01344a;\n}\n\n\n#cloud2 {\n  -webkit-animation-delay: .3s;\n          animation-delay: .3s;\n  x: 20%;\n  y: 80%;\n  height: 50px;\n  width: 160px;\n  rx: 25px;\n  ry: 50px;\n  fill: white;\n}\n\n\n#shadow2 {\n  -webkit-animation-delay: .3s;\n          animation-delay: .3s;\n  x: 20%;\n  y: 90%;\n  height: 50px;\n  width: 160px;\n  rx: 25px;\n  ry: 50px;\n  fill: #01344a;\n}\n\n\n#cloud3 {\n  -webkit-animation-delay: 1.7s;\n          animation-delay: 1.7s;\n  x: 60%;\n  y: 65%;\n  height: 50px;\n  width: 160px;\n  rx: 25px;\n  ry: 50px;\n  fill: white;\n}\n\n\n#shadow3 {\n  -webkit-animation-delay: 1.7s;\n          animation-delay: 1.7s;\n  x: 60%;\n  y: 75%;\n  height: 50px;\n  width: 160px;\n  rx: 25px;\n  ry: 50px;\n  fill: #01344a;\n}\n\n\n#cloud4 {\n  -webkit-animation-delay: 1.5s;\n          animation-delay: 1.5s;\n  x: 80%;\n  y: 85%;\n  height: 50px;\n  width: 160px;\n  rx: 25px;\n  ry: 50px;\n  fill: white;\n}\n\n\n#shadow4 {\n  -webkit-animation-delay: 1.5s;\n          animation-delay: 1.5s;\n  x: 80%;\n  y: 95%;\n  height: 50px;\n  width: 160px;\n  rx: 25px;\n  ry: 50px;\n  fill: #01344a;\n}\n\n\n/* Safari 4.0 - 8.0 */\n\n\n@-webkit-keyframes bob {\n  0%   {  top:0px;}\n  100% {  top:30px;}\n}\n\n\n/* Standard syntax */\n\n\n@keyframes bob {\n  0%   {  -webkit-transform:translateY(0px);}\n  100% {  -webkit-transform:translateY(30px);}\n}\n\n\n@-webkit-keyframes drift {\n  0%   {  -webkit-transform:translateX(0px);}\n  100% {  -webkit-transform:translateX(50px);}\n}\n\n\n@keyframes drift {\n  0%   {  -webkit-transform:translateX(0px);}\n  100% {  -webkit-transform:translateX(50px);}\n}\n\n\n@-webkit-keyframes orbit-disappear {\n  from {\n    -webkit-transform:translate(0px, 0px);\n    visibility:visible;\n  }\n 50% {\n    -webkit-transform:translate(15%, -20%);\n    visibility:hidden;\n  }\n to {\n\n    visibility:hidden;\n  }\n}\n\n\n@keyframes orbit-disappear {\n  from {\n    -webkit-transform:translate(0px, 0px);\n    visibility:visible;\n  }\n 50% {\n    -webkit-transform:translate(15%, -20%);\n    visibility:hidden;\n  }\n to {\n\n    visibility:hidden;\n  }\n}\n\n\n@-webkit-keyframes orbit {\n  from {\n    -webkit-transform:translate(0px, 0px);\n    visibility:visible;\n  }\n 50% {\n   -webkit-transform:translate(15%, -20%);\n    visibility:visible;\n  }\n to {\n    visibility:visible;\n  }\n}\n\n\n@keyframes orbit {\n  from {\n    -webkit-transform:translate(0px, 0px);\n    visibility:visible;\n  }\n 50% {\n   -webkit-transform:translate(15%, -20%);\n    visibility:visible;\n  }\n to {\n    visibility:visible;\n  }\n}\n"

/***/ }),

/***/ "./src/app/splash/splash.component.html":
/*!**********************************************!*\
  !*** ./src/app/splash/splash.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1  id=\"word1\">Kevin Suarez</h1>\n  <h2  id=\"word2\">\n    Here's a <a class=\"floaty-link\" href=\"https://docs.google.com/document/d/1aCtvUHg1tiXJcKtDVoSlsUGqZJdhTvBqpNlznNOvJSM/edit?usp=sharing\" target=\"_blank\">resume</a>, <br> and some contact info\n  </h2>\n  <h3 id=\"word3\">\n    is an artist, traveler, and developer\n  </h3>\n  <img src=\"../assets/sparkle-big.png\" alt=\"star\"  class=\"soft-bounce\" id=\"star1\">\n  <img src=\"../assets/sparkle-med.png\" alt=\"star\"  class=\"soft-bounce\" id=\"star2\">\n  <img src=\"../assets/sparkle-small.png\" alt=\"star\"  class=\"soft-bounce\" id=\"star3\">\n  <img src=\"../assets/sparkle-big.png\" alt=\"star\"  class=\"soft-bounce\" id=\"star4\">\n  <img src=\"../assets/sparkle-med.png\" alt=\"star\"  class=\"soft-bounce\" id=\"star5\">\n  <img src=\"../assets/sparkle-small.png\" alt=\"star\"  class=\"soft-bounce\" id=\"star6\">\n\n  <svg width=\"100%\" height=\"100%\">\n    <circle class=\"orbit-back\" id=\"sub-moon-back\"/>\n    <circle class=\"moon\"/>\n    <circle class=\"orbit-front\" id=\"sub-moon-front\"/>\n    <circle class=\"world\"/>\n\n    <rect class=\"slow-drift\" id=\"shadow1\"/>\n    <rect class=\"slow-drift\" id=\"cloud1\"/>\n\n    <rect class=\"slow-drift\" id=\"shadow2\"/>\n    <rect class=\"slow-drift\" id=\"cloud2\"/>\n\n    <rect class=\"slow-drift\" id=\"shadow3\"/>\n    <rect class=\"slow-drift\" id=\"cloud3\"/>\n\n    <rect class=\"slow-drift\" id=\"shadow4\"/>\n    <rect class=\"slow-drift\" id=\"cloud4\"/>\n  </svg>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/splash/splash.component.ts":
/*!********************************************!*\
  !*** ./src/app/splash/splash.component.ts ***!
  \********************************************/
/*! exports provided: SplashComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashComponent", function() { return SplashComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SplashComponent = /** @class */ (function () {
    function SplashComponent() {
    }
    SplashComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'splash',
            template: __webpack_require__(/*! ./splash.component.html */ "./src/app/splash/splash.component.html"),
            styles: [__webpack_require__(/*! ./splash.component.css */ "./src/app/splash/splash.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SplashComponent);
    return SplashComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/kevinSuarez/Code/node-angular/style-guide/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map