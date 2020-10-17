(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-slide-slide-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/slide/slide.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/slide/slide.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n    <ion-slides pager>\n\n        <ion-slide>\n            <div class=\"img_div\">\n                <img src=\"assets/image/slide-first.png\">\n                <h3 class=\"slide_name\"> {{'slider.slide1.slide_name.txt1' | translate}} <br> {{'slider.slide1.slide_name.txt2' | translate}}</h3>\n                <p class=\"slide_info\"> {{'slider.slide1.slide_info' | translate}}\n                </p>\n            </div>\n        </ion-slide>\n\n        <ion-slide>\n            <div class=\"img_div\">\n                <img src=\"assets/image/slide-second.png\">\n                <h3 class=\"slide_name\"> {{'slider.slide2.slide_name.txt1' | translate}} <br> {{'slider.slide2.slide_name.txt2' | translate}} </h3>\n                <p class=\"slide_info\"> {{'slider.slide2.slide_info' | translate}}\n                </p>\n            </div>\n        </ion-slide>\n\n        <ion-slide>\n            <div class=\"img_div\">\n                <img src=\"assets/image/slide-last.png\">\n                <h3 class=\"slide_name\"> {{'slider.slide3.slide_name.txt1' | translate}} <br> {{'slider.slide3.slide_name.txt2' | translate}} </h3>\n                <p class=\"slide_info\">\n                    {{'slider.slide3.slide_info' | translate}}\n                </p>\n            </div>\n        </ion-slide>\n\n    </ion-slides>\n    <ion-button class=\"skip ion-float-right\" (click)=\"home()\">\n        {{'slider.skip' | translate}}\n    </ion-button>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/slide/slide.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/slide/slide.module.ts ***!
  \*********************************************/
/*! exports provided: SlidePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidePageModule", function() { return SlidePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _slide_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slide.page */ "./src/app/pages/slide/slide.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");








var routes = [
    {
        path: '',
        component: _slide_page__WEBPACK_IMPORTED_MODULE_6__["SlidePage"]
    }
];
var SlidePageModule = /** @class */ (function () {
    function SlidePageModule() {
    }
    SlidePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_slide_page__WEBPACK_IMPORTED_MODULE_6__["SlidePage"]]
        })
    ], SlidePageModule);
    return SlidePageModule;
}());



/***/ }),

/***/ "./src/app/pages/slide/slide.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/slide/slide.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content ion-slides {\n  height: 550px;\n}\nion-content ion-slides ion-slide {\n  display: block;\n  height: 375px;\n}\nion-content ion-slides ion-slide .img_div {\n  margin-top: 60px;\n  margin-left: 16px;\n  margin-right: 16px;\n}\nion-content ion-slides ion-slide .img_div .slide_name {\n  font-size: 22px;\n  font-family: \"Poppins-SemiBold\";\n  color: var(--ion-color-darkBlue);\n  margin-top: 70px;\n}\nion-content ion-slides ion-slide .img_div .slide_info {\n  font-size: 16px;\n  font-family: \"Poppins-Regular\";\n  color: var(--ion-color-darkgray);\n}\nion-content .skip {\n  margin: 0px;\n  height: 46px;\n  width: 100px;\n  font-size: 16px;\n  font-family: \"Poppins-Medium\";\n  --background:var(--ion-color-green);\n  --border-radius: 24px 0px 0px 24px;\n}\n.slides-md {\n  --bullet-background: var(--ion-color-green)!important;\n  --bullet-background-active: var(--ion-color-green)!important;\n}\n.slides-ios {\n  --bullet-background: var(--ion-color-green)!important;\n  --bullet-background-active: var(--ion-color-green)!important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2xpZGUvQzpcXFVzZXJzXFxvc2lhblxcRGVza3RvcFxcTkFUVVVUMi4wL3NyY1xcYXBwXFxwYWdlc1xcc2xpZGVcXHNsaWRlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2xpZGUvc2xpZGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksYUFBQTtBQ0FSO0FEQ1k7RUFDSSxjQUFBO0VBQ0EsYUFBQTtBQ0NoQjtBREFnQjtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0VwQjtBRERnQjtFQUNJLGVBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7QUNHcEI7QUREZ0I7RUFDSSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQ0FBQTtBQ0dwQjtBRElJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtBQ0ZSO0FEWUE7RUFDSSxxREFBQTtFQUNBLDREQUFBO0FDVEo7QURZQTtFQUNJLHFEQUFBO0VBQ0EsNERBQUE7QUNUSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NsaWRlL3NsaWRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgaW9uLXNsaWRlcyB7XHJcbiAgICAgICAgaGVpZ2h0OiA1NTBweDtcclxuICAgICAgICAgICAgaW9uLXNsaWRlIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNzVweDtcclxuICAgICAgICAgICAgICAgIC5pbWdfZGl2e1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgLnNsaWRlX25hbWV7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucy1TZW1pQm9sZCc7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrQmx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNzBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5zbGlkZV9pbmZve1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1BvcHBpbnMtUmVndWxhcic7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrZ3JheSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgIH1cclxuICAgIC5za2lwe1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIGhlaWdodDogNDZweDtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucy1NZWRpdW0nO1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItZ3JlZW4pO1xyXG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogMjRweCAwcHggMHB4IDI0cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi5zbGlkZXMtbWQge1xyXG4gICAgLS1idWxsZXQtYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWdyZWVuKSFpbXBvcnRhbnQ7XHJcbiAgICAtLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTogdmFyKC0taW9uLWNvbG9yLWdyZWVuKSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zbGlkZXMtaW9zIHtcclxuICAgIC0tYnVsbGV0LWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1ncmVlbikhaW1wb3J0YW50O1xyXG4gICAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6IHZhcigtLWlvbi1jb2xvci1ncmVlbikhaW1wb3J0YW50O1xyXG59IiwiaW9uLWNvbnRlbnQgaW9uLXNsaWRlcyB7XG4gIGhlaWdodDogNTUwcHg7XG59XG5pb24tY29udGVudCBpb24tc2xpZGVzIGlvbi1zbGlkZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDM3NXB4O1xufVxuaW9uLWNvbnRlbnQgaW9uLXNsaWRlcyBpb24tc2xpZGUgLmltZ19kaXYge1xuICBtYXJnaW4tdG9wOiA2MHB4O1xuICBtYXJnaW4tbGVmdDogMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xufVxuaW9uLWNvbnRlbnQgaW9uLXNsaWRlcyBpb24tc2xpZGUgLmltZ19kaXYgLnNsaWRlX25hbWUge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtU2VtaUJvbGRcIjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrQmx1ZSk7XG4gIG1hcmdpbi10b3A6IDcwcHg7XG59XG5pb24tY29udGVudCBpb24tc2xpZGVzIGlvbi1zbGlkZSAuaW1nX2RpdiAuc2xpZGVfaW5mbyB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1SZWd1bGFyXCI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2dyYXkpO1xufVxuaW9uLWNvbnRlbnQgLnNraXAge1xuICBtYXJnaW46IDBweDtcbiAgaGVpZ2h0OiA0NnB4O1xuICB3aWR0aDogMTAwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIjtcbiAgLS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1ncmVlbik7XG4gIC0tYm9yZGVyLXJhZGl1czogMjRweCAwcHggMHB4IDI0cHg7XG59XG5cbi5zbGlkZXMtbWQge1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZ3JlZW4pIWltcG9ydGFudDtcbiAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6IHZhcigtLWlvbi1jb2xvci1ncmVlbikhaW1wb3J0YW50O1xufVxuXG4uc2xpZGVzLWlvcyB7XG4gIC0tYnVsbGV0LWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1ncmVlbikhaW1wb3J0YW50O1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTogdmFyKC0taW9uLWNvbG9yLWdyZWVuKSFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/slide/slide.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/slide/slide.page.ts ***!
  \*******************************************/
/*! exports provided: SlidePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidePage", function() { return SlidePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var SlidePage = /** @class */ (function () {
    function SlidePage(ntrl, menu) {
        this.ntrl = ntrl;
        this.menu = menu;
        this.menu.enable(false);
    }
    SlidePage.prototype.ngOnInit = function () {
    };
    SlidePage.prototype.home = function () {
        this.ntrl.navigateRoot('home');
    };
    SlidePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] }
    ]; };
    SlidePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-slide',
            template: __webpack_require__(/*! raw-loader!./slide.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/slide/slide.page.html"),
            styles: [__webpack_require__(/*! ./slide.page.scss */ "./src/app/pages/slide/slide.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
    ], SlidePage);
    return SlidePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-slide-slide-module-es5.js.map