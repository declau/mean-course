(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<main>\n  <router-outlet></router-outlet>\n</main>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n\n    <span>\n        <a routerLink=\"/\">MyMessages</a>\n    </span>\n    <span class=\"spacer\"></span>\n    <ul>\n        <li>\n            <a mat-button routerLink=\"/create\" routerLinkActive=\"mat-accent\">New Post</a>\n        </li>\n    </ul>\n\n</mat-toolbar>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/posts/post-create/post-create.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/posts/post-create/post-create.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\n  <form [formGroup]=\"form\" (submit)=\"onSavePost()\" *ngIf=\"!isLoading\">\n    <mat-form-field>\n      <input matInput type=\"text\" formControlName=\"title\" placeholder=\"Post Title\">\n      <mat-error *ngIf=\"form.get('title').invalid\">Please enter a post title!</mat-error>\n    </mat-form-field>\n\n    <div>\n      <button mat-stroked-button type=\"button\" (click)=\"filePicker.click()\">Pick Image</button>\n      <input type=\"file\" #filePicker (change)=\"onImagePicked($event)\">\n    </div>\n\n    <div class=\"image-preview\" *ngIf=\"imagePreview !== '' && imagePreview && form.get('image').valid\">\n      <img [src]=\"imagePreview\" [alt]=\"form.value.title\">\n    </div>\n\n    <mat-form-field>\n      <textarea matInput rows=\"4\" formControlName=\"content\" placeholder=\"Post Content\"></textarea>\n      <mat-error *ngIf=\"form.get('content').invalid\">Please enter a post content!</mat-error>\n\n    </mat-form-field>\n    <button mat-raised-button color=\"primary\" type=\"submit\">Save Post</button>\n  </form>\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/posts/post-list/post-list.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/posts/post-list/post-list.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-spinner *ngIf=\"isLoading\"></mat-spinner>\n<mat-accordion multi=\"true\" *ngIf=\"posts.length > 0 && !isLoading\">\n  <mat-expansion-panel *ngFor=\"let post of posts\">\n    <mat-expansion-panel-header>\n      {{post.title}}\n    </mat-expansion-panel-header>\n    <p>{{ post.content}}</p>\n    <mat-action-row>\n      <a mat-button color=\"primary\" [routerLink]=\"['/edit', post.id]\">EDIT</a>\n      <button mat-button color=\"warn\" (click)=\"onDelete(post.id)\">DELETE</button>\n    </mat-action-row>\n  </mat-expansion-panel>\n</mat-accordion>\n\n<p class=\"info-text mat-body-1\" *ngIf=\"posts.length <= 0 && !isLoading\"> No posts added yet!</p>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _posts_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./posts/post-list/post-list.component */ "./src/app/posts/post-list/post-list.component.ts");
/* harmony import */ var _posts_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./posts/post-create/post-create.component */ "./src/app/posts/post-create/post-create.component.ts");





var routes = [
    { path: '', component: _posts_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_3__["PostListComponent"] },
    { path: 'create', component: _posts_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_4__["PostCreateComponent"] },
    { path: 'edit/:postId', component: _posts_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_4__["PostCreateComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "main {\n  width: 80%;\n  margin: 1rem auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RlbmlzL0Rlc2t0b3AvcHJvamV0b3MvbWVhbi1jb3Vyc2Uvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWFpbiB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW46IDFyZW0gYXV0bztcbn0iLCJtYWluIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAxcmVtIGF1dG87XG59Il19 */"

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
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _posts_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./posts/post-create/post-create.component */ "./src/app/posts/post-create/post-create.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _posts_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./posts/post-list/post-list.component */ "./src/app/posts/post-list/post-list.component.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _posts_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_9__["PostCreateComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
                _posts_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_11__["PostListComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.spacer {\n  flex: 1 1 auto;\n}\n\na {\n  text-decoration: none;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RlbmlzL0Rlc2t0b3AvcHJvamV0b3MvbWVhbi1jb3Vyc2Uvc3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQ0NKOztBREdBO0VBQ0ksY0FBQTtBQ0FKOztBREdBO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWwge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG5cbn1cblxuLnNwYWNlciB7XG4gICAgZmxleDogMSAxIGF1dG87XG59XG5cbmEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG59IiwidWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbi5zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/posts/post-create/mime-type.validator.ts":
/*!**********************************************************!*\
  !*** ./src/app/posts/post-create/mime-type.validator.ts ***!
  \**********************************************************/
/*! exports provided: mimeType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mimeType", function() { return mimeType; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

var mimeType = function (control) {
    if (typeof (control.value) === 'string') {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(null);
    }
    var file = control.value;
    var fileReader = new FileReader();
    var frObs = rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].create(function (observer) {
        fileReader.addEventListener("loadend", function () {
            var arr = new Uint8Array(fileReader.result).subarray(0, 4);
            var header = "";
            var isValid = false;
            for (var i = 0; i < arr.length; i++) {
                header += arr[i].toString(16);
            }
            switch (header) {
                case "89504e47":
                    isValid = true;
                    break;
                case "ffd8ffe0":
                case "ffd8ffe1":
                case "ffd8ffe2":
                case "ffd8ffe3":
                case "ffd8ffe8":
                    isValid = true;
                    break;
                default:
                    isValid = false; // Or you can use the blob.type as fallback
                    break;
            }
            if (isValid) {
                observer.next(null);
            }
            else {
                observer.next({ invalidMimeType: true });
            }
            observer.complete();
        });
        fileReader.readAsArrayBuffer(file);
    });
    return frObs;
};


/***/ }),

/***/ "./src/app/posts/post-create/post-create.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/posts/post-create/post-create.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field,\ntextarea {\n  width: 100%;\n}\n\nmat-spinner {\n  margin: auto;\n}\n\ninput[type=file] {\n  visibility: hidden;\n}\n\n.image-preview {\n  height: 5rem;\n  margin: 1rem 0;\n}\n\n.image-preview img {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RlbmlzL0Rlc2t0b3AvcHJvamV0b3MvbWVhbi1jb3Vyc2Uvc3JjL2FwcC9wb3N0cy9wb3N0LWNyZWF0ZS9wb3N0LWNyZWF0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcG9zdHMvcG9zdC1jcmVhdGUvcG9zdC1jcmVhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7O0VBRUksV0FBQTtBQ0FKOztBRElBO0VBQ0ksWUFBQTtBQ0RKOztBRElBO0VBQ0ksa0JBQUE7QUNESjs7QURJQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0FDREo7O0FESUE7RUFDSSxZQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9wb3N0cy9wb3N0LWNyZWF0ZS9wb3N0LWNyZWF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxubWF0LWZvcm0tZmllbGQsXG50ZXh0YXJlYSB7XG4gICAgd2lkdGg6IDEwMCU7XG5cbn1cblxubWF0LXNwaW5uZXIge1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLmltYWdlLXByZXZpZXcge1xuICAgIGhlaWdodDogNXJlbTtcbiAgICBtYXJnaW46IDFyZW0gMDtcbn1cblxuLmltYWdlLXByZXZpZXcgaW1nIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG59IiwibWF0LWZvcm0tZmllbGQsXG50ZXh0YXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5tYXQtc3Bpbm5lciB7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuaW5wdXRbdHlwZT1maWxlXSB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLmltYWdlLXByZXZpZXcge1xuICBoZWlnaHQ6IDVyZW07XG4gIG1hcmdpbjogMXJlbSAwO1xufVxuXG4uaW1hZ2UtcHJldmlldyBpbWcge1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/posts/post-create/post-create.component.ts":
/*!************************************************************!*\
  !*** ./src/app/posts/post-create/post-create.component.ts ***!
  \************************************************************/
/*! exports provided: PostCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostCreateComponent", function() { return PostCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _posts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../posts.service */ "./src/app/posts/posts.service.ts");
/* harmony import */ var _mime_type_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mime-type.validator */ "./src/app/posts/post-create/mime-type.validator.ts");






var PostCreateComponent = /** @class */ (function () {
    function PostCreateComponent(postsService, router) {
        this.postsService = postsService;
        this.router = router;
        this.enteredTitle = '';
        this.enteredContent = '';
        this.isLoading = false;
        this.mode = 'create';
    }
    PostCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]
            }),
            content: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                asyncValidators: [_mime_type_validator__WEBPACK_IMPORTED_MODULE_5__["mimeType"]]
            })
        });
        this.router.paramMap.subscribe(function (paramMap) {
            if (paramMap.has('postId')) {
                _this.mode = 'edit';
                _this.postId = paramMap.get('postId');
                _this.isLoading = true;
                _this.postsService.getPost(_this.postId).subscribe(function (postData) {
                    _this.isLoading = false;
                    _this.post = { id: postData._id, title: postData.title, content: postData.content };
                    _this.form.setValue({
                        title: _this.post.title,
                        content: _this.post.content
                    });
                });
            }
            else {
                _this.mode = 'create';
                _this.postId = null;
            }
        });
    };
    PostCreateComponent.prototype.onSavePost = function () {
        if (this.form.invalid) {
            return;
        }
        this.isLoading = true;
        if (this.mode === 'create') {
            this.postsService.addPost(this.form.value.title, this.form.value.content);
        }
        else {
            this.postsService.updatePost(this.postId, this.form.value.title, this.form.value.content);
        }
        this.form.reset();
    };
    PostCreateComponent.prototype.onImagePicked = function (event) {
        var _this = this;
        var file = event.target.files[0];
        this.form.patchValue({ image: file });
        this.form.get('image').updateValueAndValidity();
        var reader = new FileReader();
        reader.onload = function () {
            _this.imagePreview = reader.result;
        };
        reader.readAsDataURL(file);
    };
    PostCreateComponent.ctorParameters = function () { return [
        { type: _posts_service__WEBPACK_IMPORTED_MODULE_4__["PostsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    PostCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post-create',
            template: __webpack_require__(/*! raw-loader!./post-create.component.html */ "./node_modules/raw-loader/index.js!./src/app/posts/post-create/post-create.component.html"),
            styles: [__webpack_require__(/*! ./post-create.component.scss */ "./src/app/posts/post-create/post-create.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_posts_service__WEBPACK_IMPORTED_MODULE_4__["PostsService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], PostCreateComponent);
    return PostCreateComponent;
}());



/***/ }),

/***/ "./src/app/posts/post-list/post-list.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/posts/post-list/post-list.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  margin-top: 1rem;\n}\n\n.info-text {\n  text-align: center;\n}\n\nmat-spinner {\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RlbmlzL0Rlc2t0b3AvcHJvamV0b3MvbWVhbi1jb3Vyc2Uvc3JjL2FwcC9wb3N0cy9wb3N0LWxpc3QvcG9zdC1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wb3N0cy9wb3N0LWxpc3QvcG9zdC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtBQ0VKOztBREFBO0VBQ0ksWUFBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvcG9zdHMvcG9zdC1saXN0L3Bvc3QtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuLmluZm8tdGV4dCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxubWF0LXNwaW5uZXIge1xuICAgIG1hcmdpbjogYXV0bztcbn0iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG4uaW5mby10ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5tYXQtc3Bpbm5lciB7XG4gIG1hcmdpbjogYXV0bztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/posts/post-list/post-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/posts/post-list/post-list.component.ts ***!
  \********************************************************/
/*! exports provided: PostListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostListComponent", function() { return PostListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../posts.service */ "./src/app/posts/posts.service.ts");



var PostListComponent = /** @class */ (function () {
    function PostListComponent(postsService) {
        this.postsService = postsService;
        /* posts = [
            { title: 'First Post', content: 'This is the first post\'s content' },
            { title: 'Second Post', content: 'This is the second post\'s content' },
            { title: 'Third Post', content: 'This is the third post\'s content' }
        ]; */
        this.posts = [];
        this.isLoading = false;
    }
    PostListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.postsService.getPosts();
        this.postsSub = this.postsService.getPostUpdateListener().subscribe(function (posts) {
            _this.isLoading = false;
            _this.posts = posts;
        });
    };
    PostListComponent.prototype.onDelete = function (PostId) {
        this.postsService.deletePost(PostId);
    };
    PostListComponent.prototype.ngOnDestroy = function () {
        this.postsSub.unsubscribe();
    };
    PostListComponent.ctorParameters = function () { return [
        { type: _posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"] }
    ]; };
    PostListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post-list',
            template: __webpack_require__(/*! raw-loader!./post-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/posts/post-list/post-list.component.html"),
            styles: [__webpack_require__(/*! ./post-list.component.scss */ "./src/app/posts/post-list/post-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"]])
    ], PostListComponent);
    return PostListComponent;
}());



/***/ }),

/***/ "./src/app/posts/posts.service.ts":
/*!****************************************!*\
  !*** ./src/app/posts/posts.service.ts ***!
  \****************************************/
/*! exports provided: PostsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsService", function() { return PostsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var PostsService = /** @class */ (function () {
    function PostsService(http, router) {
        this.http = http;
        this.router = router;
        this.posts = [];
        this.postUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    PostsService.prototype.getPosts = function () {
        var _this = this;
        this.http.get('http://localhost:3000/api/posts')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (postData) {
            return postData.posts.map(function (post) {
                return {
                    title: post.title,
                    content: post.content,
                    id: post._id
                };
            });
        })).subscribe(function (transformedPosts) {
            _this.posts = transformedPosts;
            _this.postUpdated.next(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](_this.posts));
        });
    };
    PostsService.prototype.getPostUpdateListener = function () {
        return this.postUpdated.asObservable();
    };
    PostsService.prototype.getPost = function (id) {
        return this.http.get("http://localhost:3000/api/posts/" + id);
    };
    PostsService.prototype.addPost = function (title, content) {
        var _this = this;
        var post = { id: null, title: title, content: content };
        this.http.post('http://localhost:3000/api/posts', post).subscribe(function (responseData) {
            var id = responseData.postId;
            post.id = id;
            _this.posts.push(post);
            _this.postUpdated.next(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](_this.posts));
            _this.router.navigate(["/"]);
        });
    };
    PostsService.prototype.updatePost = function (id, title, content) {
        var _this = this;
        var post = { id: id, title: title, content: content };
        this.http.put("http://localhost:3000/api/posts/" + id, post)
            .subscribe(function (response) {
            console.log(response);
            var updatedPosts = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](_this.posts);
            var oldPostIndex = updatedPosts.findIndex(function (p) { return p.id === post.id; });
            updatedPosts[oldPostIndex] = post;
            _this.posts = updatedPosts;
            _this.postUpdated.next(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](_this.posts));
            _this.router.navigate(["/"]);
        });
    };
    PostsService.prototype.deletePost = function (postId) {
        var _this = this;
        this.http.delete("http://localhost:3000/api/posts/" + postId)
            .subscribe(function () {
            var updatedPosts = _this.posts.filter(function (post) { return post.id !== postId; });
            _this.posts = updatedPosts;
            _this.postUpdated.next(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](_this.posts));
            console.log("deleted!!!!!");
        });
    };
    PostsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    PostsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], PostsService);
    return PostsService;
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

module.exports = __webpack_require__(/*! /home/denis/Desktop/projetos/mean-course/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map