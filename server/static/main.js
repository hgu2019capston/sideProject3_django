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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9hcHAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-roomlist></app-roomlist>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _roomlist_roomlist_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./roomlist/roomlist.component */ "./src/app/roomlist/roomlist.component.ts");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _roomlist_roomlist_component__WEBPACK_IMPORTED_MODULE_5__["RoomlistComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/roomlist/roomlist.component.css":
/*!*************************************************!*\
  !*** ./src/app/roomlist/roomlist.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb29tbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/roomlist/roomlist.component.html":
/*!**************************************************!*\
  !*** ./src/app/roomlist/roomlist.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- chat/templates/chat/room.html -->\n<!DOCTYPE html>\n<html>\n<head>\n    <meta charset=\"utf-8\"/>\n    <title>Chat Room</title>\n    <p> my id is <strong> {{ id }} </strong>  </p>\n</head>\n<body>\n    <div id=\"main\">\n        <canvas id=\"board\" width=\"541\" height=\"541\"></canvas>\n    </div>\n    <br/>\n    <input id=\"chat-message-input\" type=\"text\" size=\"100\"/>\n    <br/>\n    <input id=\"chat-message-submit\" type=\"button\" value=\"send\"/>\n</body>\n         \n<style>\n    html, body {\n        margin: 20px;\n    }\n    #main {\n        height: 600px;\n        position: relative;\n        width: 600px;\n        background: gold;\n    }\n    #board{\n        margin:30px;\n        background-image: repeating-linear-gradient(0deg,transparent,transparent 29px,black 29px,black 30px),repeating-linear-gradient(-90deg,transparent,transparent 29px,black 29px,black 30px);\n        background-size: 30px 30px;\n        height: 541;\n        position: absolute;\n        width: 541;       \n    }\n</style>\n\n<script>\n    var coor_X = {{ x }};\n    var coor_Y = {{ y }};\n    var roomName = {{ room_name_json }};\n    var chatSocket = new WebSocket(\n        'ws://' + window.location.host +\n        '/ws/chat/' + roomName + '/');\n   // chatSocket.onmessage = function(e) {\n     //   var data = JSON.parse(e.data);\n     //   var message = data['message'];\n        var canvas = document.getElementById(\"board\");\n        var context = canvas.getContext(\"2d\");\n\n     //   var coordinate = message.split(\" \");\n        var y ;\n        switch (coor_X) {\n            case 'A': y = 0*30 ; break ; \n            case 'B': y = 1*30 ; break ;\n            case 'C': y = 2*30 ; break ;\n            case 'D': y = 3*30 ; break ;\n            case 'E': y = 4*30 ; break ;\n            case 'F': y = 5*30 ; break ;\n            case 'G': y = 6*30 ; break ;\n            case 'H': y = 7*30 ; break ;\n            case 'I': y = 8*30 ; break ;\n            case 'J': y = 9*30 ; break ;\n            case 'K': y = 10*30 ; break ;\n            case 'L': y = 11*30 ; break ;\n            case 'M': y = 12*30 ; break ;\n            case 'N': y = 13*30 ; break ;\n            case 'O': y = 14*30 ; break ;\n            case 'P': y = 15*30 ; break ;\n            case 'Q': y = 16*30 ; break ;\n            case 'R': y = 17*30 ; break ;\n            case 'S': y = 18*30 ; break ;\n        }\n        var x = (coor_Y-1)*30 ;\n        context.beginPath();\n\t\n        context.arc(x , y, 14, 0, 2 * Math.PI, false);\n        context.fillStyle = \"white\";\n        context.fill();\n        context.lineWidth = 1;\n        context.strokeStyle = \"black\";\n        context.stroke();\n    //};\n   // chatSocket.onclose = function(e) {\n    //    console.error('Chat socket closed unexpectedly');\n    //};\n    document.querySelector('#chat-message-input').focus();\n    document.querySelector('#chat-message-input').onkeyup = function(e) {\n       if (e.keyCode === 13) {  // enter, return\n           document.querySelector('#chat-message-submit').click();\n       }\n    };\n    document.querySelector('#chat-message-submit').onclick = function(e) {\n        var messageInputDom = document.querySelector('#chat-message-input');\n        var message = messageInputDom.value;\n        chatSocket.send(JSON.stringify({\n            'message': message\n        }));\n        messageInputDom.value = '';\n    };\n</script>\n\n</html>\n"

/***/ }),

/***/ "./src/app/roomlist/roomlist.component.ts":
/*!************************************************!*\
  !*** ./src/app/roomlist/roomlist.component.ts ***!
  \************************************************/
/*! exports provided: RoomlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomlistComponent", function() { return RoomlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RoomlistComponent = /** @class */ (function () {
    function RoomlistComponent() {
    }
    RoomlistComponent.prototype.ngOnInit = function () {
    };
    RoomlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-roomlist',
            template: __webpack_require__(/*! ./roomlist.component.html */ "./src/app/roomlist/roomlist.component.html"),
            styles: [__webpack_require__(/*! ./roomlist.component.css */ "./src/app/roomlist/roomlist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RoomlistComponent);
    return RoomlistComponent;
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/cykim/django_angular/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map