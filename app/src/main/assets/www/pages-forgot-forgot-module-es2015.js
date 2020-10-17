(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-forgot-forgot-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/forgot/forgot.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/forgot/forgot.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n    <ion-toolbar mode=\"md\">\n        <ion-buttons>\n            <ion-back-button defaultHref=\"home\" icon=\"ios-arrow-back\" text=\"\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>{{\"forgot_password_page.title\" | translate}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"ion-margin-horizontal main_div\">\n        <p class=\"ion-text-center\" class=\"text_p\">\n            {{\"forgot_password_page.text\" | translate}}\n        </p>\n        <form>\n            <ion-item class=\"dataitem \" lines=\"none\">\n                <ion-icon src=\"assets/icon-image/email-icon.svg\" class=\"icon_img\">\n                </ion-icon>\n                <ion-input placeholder=\"{{'forgot_password_page.email_placeholder' | translate}}\" [(ngModel)]=\"data.email\" name=\"email\"></ion-input>\n            </ion-item>\n            <p class=\"err\" *ngIf=\"err?.email\">{{err?.email}}*</p>\n        </form>\n        <ion-button class=\"otp_btn\" (click)=\"Sendpassword()\">\n            {{\"forgot_password_page.send_btn\" | translate}}\n        </ion-button>\n    </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/forgot/forgot.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/forgot/forgot.module.ts ***!
  \***********************************************/
/*! exports provided: ForgotPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPageModule", function() { return ForgotPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _forgot_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgot.page */ "./src/app/pages/forgot/forgot.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








const routes = [
    {
        path: '',
        component: _forgot_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPage"]
    }
];
let ForgotPageModule = class ForgotPageModule {
};
ForgotPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_forgot_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPage"]]
    })
], ForgotPageModule);



/***/ }),

/***/ "./src/app/pages/forgot/forgot.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/forgot/forgot.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content .main_div {\n  margin-top: 30px;\n}\nion-content .main_div .text_p {\n  font-family: \"Poppins-Medium\";\n  color: var(--ion-color-darkBlue);\n  font-size: 16px;\n}\nion-content .main_div .dataitem {\n  --border-radius: 5px;\n  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.2);\n  margin-top: 20px;\n  margin-bottom: 25px;\n}\nion-content .main_div .dataitem .icon_img {\n  margin-right: 15px;\n  height: 18px;\n  width: 18px;\n}\nion-content .main_div .dataitem ion-input {\n  --placeholder-color: var(--ion-color-placeholder-gray);\n  font-size: 16px;\n  --placeholder-font-style: \"Poppins-Regular\";\n  --placeholder-opacity: 1;\n  font-family: \"Poppins-Regular\";\n}\nion-content .main_div ion-button {\n  margin: 0;\n  --border-radius: 25px;\n  margin-top: 20px;\n  height: 46px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZm9yZ290L0M6XFxVc2Vyc1xcb3NpYW5cXERlc2t0b3BcXE5BVFVVVDIuMC9zcmNcXGFwcFxccGFnZXNcXGZvcmdvdFxcZm9yZ290LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZm9yZ290L2ZvcmdvdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxnQkFBQTtBQ0FKO0FEQ0k7RUFDRSw2QkFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtBQ0NOO0FEQ0k7RUFDRSxvQkFBQTtFQUNBLDhDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NOO0FEQU07RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDRVI7QURBTTtFQUNFLHNEQUFBO0VBQ0EsZUFBQTtFQUNBLDJDQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtBQ0VSO0FEQ0k7RUFDRSxTQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNDTiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZvcmdvdC9mb3Jnb3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gIC5tYWluX2RpdiB7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgLnRleHRfcCB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtTWVkaXVtXCI7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya0JsdWUpO1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbiAgICAuZGF0YWl0ZW0ge1xyXG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgICAgLmljb25faW1nIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgICB9XHJcbiAgICAgIGlvbi1pbnB1dCB7XHJcbiAgICAgICAgLS1wbGFjZWhvbGRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXBsYWNlaG9sZGVyLWdyYXkpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAtLXBsYWNlaG9sZGVyLWZvbnQtc3R5bGU6IFwiUG9wcGlucy1SZWd1bGFyXCI7XHJcbiAgICAgICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtUmVndWxhclwiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpb24tYnV0dG9uIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgIGhlaWdodDogNDZweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW9uLWNvbnRlbnQgLm1haW5fZGl2IHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cbmlvbi1jb250ZW50IC5tYWluX2RpdiAudGV4dF9wIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrQmx1ZSk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbmlvbi1jb250ZW50IC5tYWluX2RpdiAuZGF0YWl0ZW0ge1xuICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cbmlvbi1jb250ZW50IC5tYWluX2RpdiAuZGF0YWl0ZW0gLmljb25faW1nIHtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIHdpZHRoOiAxOHB4O1xufVxuaW9uLWNvbnRlbnQgLm1haW5fZGl2IC5kYXRhaXRlbSBpb24taW5wdXQge1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcGxhY2Vob2xkZXItZ3JheSk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgLS1wbGFjZWhvbGRlci1mb250LXN0eWxlOiBcIlBvcHBpbnMtUmVndWxhclwiO1xuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtUmVndWxhclwiO1xufVxuaW9uLWNvbnRlbnQgLm1haW5fZGl2IGlvbi1idXR0b24ge1xuICBtYXJnaW46IDA7XG4gIC0tYm9yZGVyLXJhZGl1czogMjVweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgaGVpZ2h0OiA0NnB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/forgot/forgot.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/forgot/forgot.page.ts ***!
  \*********************************************/
/*! exports provided: ForgotPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPage", function() { return ForgotPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_util_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../service/util.service */ "./src/app/service/util.service.ts");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





let ForgotPage = class ForgotPage {
    constructor(ntrl, api, util) {
        this.ntrl = ntrl;
        this.api = api;
        this.util = util;
        this.data = {};
        this.err = {};
    }
    ngOnInit() { }
    Sendpassword() {
        this.util.startLoad();
        this.api.postData("forgetPassword", this.data).subscribe((res) => {
            if (res.success) {
                this.util.dismissLoader();
                this.util.presentToast(res.msg);
                this.ntrl.navigateForward(["login"]);
            }
        }, err => {
            if (err.error.msg) {
                this.util.presentToast(err.error.msg);
            }
            this.err = err.error.errors;
            this.util.dismissLoader();
        });
    }
    backPage() {
        this.ntrl.back();
    }
};
ForgotPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _service_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"] }
];
ForgotPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-forgot",
        template: __webpack_require__(/*! raw-loader!./forgot.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/forgot/forgot.page.html"),
        styles: [__webpack_require__(/*! ./forgot.page.scss */ "./src/app/pages/forgot/forgot.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
        _service_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"]])
], ForgotPage);



/***/ })

}]);
//# sourceMappingURL=pages-forgot-forgot-module-es2015.js.map