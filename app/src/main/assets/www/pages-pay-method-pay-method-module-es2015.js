(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pay-method-pay-method-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/pay-method/pay-method.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/pay-method/pay-method.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar mode=\"md\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\" icon=\"ios-arrow-back\" text=\"\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-uppercase\">{{\"pay_method.payment_method\" | translate}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content>\n  <div class=\"card_div ion-margin-horizontal\">\n    <div class=\"cash\" [ngStyle]=\"{'background-color':cash===1? 'var(--ion-color-green)': 'var(--ion-color-white)' }\"\n      (click)=\"online=0;cash=1;payment_type='LOCAL'\">\n      <div class=\"img_div\">\n        <img [src]=\"cash==1 ? 'assets/image/cash.png' : 'assets/image/cash-payment.png'\" />\n        <h3 [ngClass]=\"cash==1 ? 'tittle' : 'cash_heading' \">{{\"pay_method.cash\" | translate}}</h3>\n      </div>\n    </div>\n    <div class=\"online\" [ngStyle]=\"{'background-color':online===1? 'var(--ion-color-green)'\n    : 'var(--ion-color-white)' }\" (click)=\"online=1 ;cash=0\">\n      <div class=\"img_div\">\n        <img [src]=\"online==1 ? ' assets/image/online-pay.png' : 'assets/image/credit-cards.png'\" />\n        <h3 [ngClass]=\"online==1 ? 'tittle' : 'cash_heading' \">{{\"pay_method.online_pay\" | translate}}</h3>\n      </div>\n    </div>\n\n  </div>\n  <div class=\"card_div ion-margin-horizontal\" *ngIf=\"online==1\">\n    <div class=\"online\" (click)=\"payment_type='RAZOR'\"\n      [ngStyle]=\"{'background-color':payment_type==='RAZOR'? 'var(--ion-color-green)': 'var(--ion-color-white)' }\">\n      <div class=\"img_div\">\n        <img src=\"../../../assets/image/Razorpay_logo.svg\" class=\"pay_img\" />\n        <h3 [ngClass]=\"payment_type==='RAZOR' ? 'tittle' : 'cash_heading' \">{{\"pay_method.razor_pay\" | translate}}</h3>\n      </div>\n    </div>\n    <div class=\"cash\" (click)=\"payment_type='PAYPAL'\"\n      [ngStyle]=\"{'background-color':payment_type==='PAYPAL'? 'var(--ion-color-green)': 'var(--ion-color-white)' }\">\n      <div class=\"img_div\">\n        <img src=\"../../../assets/image/paypal_image.png\" class=\"pay_img paypal_img\" />\n        <h3 [ngClass]=\"payment_type==='PAYPAL' ? 'tittle' : 'cash_heading' \">{{\"pay_method.PayPal\" | translate}}</h3>\n      </div>\n    </div>\n  </div>\n  <div>\n\n  </div>\n</ion-content>\n\n<ion-footer>\n  <ion-button class=\"otp_btn\" (click)=\"paymentMethod()\">\n    {{\"pay_method.pay\" | translate}} {{data?.currency_symbol}}{{apdata?.toPay}}\n  </ion-button>\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/pay-method/pay-method.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/pay-method/pay-method.module.ts ***!
  \*******************************************************/
/*! exports provided: PayMethodPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayMethodPageModule", function() { return PayMethodPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pay_method_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pay-method.page */ "./src/app/pages/pay-method/pay-method.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








const routes = [
    {
        path: '',
        component: _pay_method_page__WEBPACK_IMPORTED_MODULE_6__["PayMethodPage"]
    }
];
let PayMethodPageModule = class PayMethodPageModule {
};
PayMethodPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_pay_method_page__WEBPACK_IMPORTED_MODULE_6__["PayMethodPage"]]
    })
], PayMethodPageModule);



/***/ }),

/***/ "./src/app/pages/pay-method/pay-method.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/pay-method/pay-method.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content .card_div {\n  display: -webkit-box;\n  display: flex;\n  margin-top: 40px;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\nion-content .card_div .online {\n  height: 100px;\n  width: 47%;\n  border-radius: 5px;\n  box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.16);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\nion-content .card_div .cash {\n  height: 100px;\n  width: 47%;\n  border-radius: 5px;\n  box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.16);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\nion-content .card_div .img_div .tittle {\n  font-size: 12px;\n  font-family: \"Poppins-Medium\";\n  color: var(--ion-color-white);\n  margin: 0px;\n  text-align: center;\n}\nion-content .card_div .img_div img {\n  height: 50px;\n  width: 50px;\n  margin-bottom: 10px;\n}\nion-content .card_div .img_div .cash_heading {\n  color: var(--ion-color-green);\n  font-size: 12px;\n  font-family: \"Poppins-Medium\";\n  margin: 0px;\n  text-align: center;\n}\nion-content .card_div .img_div .pay_img {\n  width: 80px;\n}\nion-content ion-item {\n  margin-top: 40px;\n  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.16);\n}\nion-content ion-item .lbl_visa {\n  font-size: 22px;\n  font-family: \"Poppins-Medium\";\n  color: var(--ion-color-green);\n}\nion-content ion-item ion-input {\n  font-size: 18px;\n  font-family: \"Poppins-Medium\";\n  color: var(--ion-color-green);\n}\nion-content ion-item ion-icon {\n  color: var(--ion-color-green);\n  align-self: flex-end;\n}\nion-content .paypal_img {\n  margin-top: 14px !important;\n  height: 17px !important;\n  margin-bottom: 28px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGF5LW1ldGhvZC9DOlxcVXNlcnNcXG9zaWFuXFxEZXNrdG9wXFxOQVRVVVQyLjAvc3JjXFxhcHBcXHBhZ2VzXFxwYXktbWV0aG9kXFxwYXktbWV0aG9kLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcGF5LW1ldGhvZC9wYXktbWV0aG9kLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtBQ0FKO0FEQ0k7RUFDRSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsK0NBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0NOO0FEQ0k7RUFDRSxhQUFBO0VBRUEsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsK0NBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0FOO0FER007RUFDRSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0RSO0FESU07RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDRlI7QURJTTtFQUNFLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDRlI7QURJTTtFQUNFLFdBQUE7QUNGUjtBRE9FO0VBQ0UsZ0JBQUE7RUFDQSwrQ0FBQTtBQ0xKO0FETUk7RUFDRSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtBQ0pOO0FETUk7RUFDRSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtBQ0pOO0FETUk7RUFDRSw2QkFBQTtFQUNBLG9CQUFBO0FDSk47QURPRTtFQUNFLDJCQUFBO0VBQ0EsdUJBQUE7RUFDQSw4QkFBQTtBQ0xKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGF5LW1ldGhvZC9wYXktbWV0aG9kLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAuY2FyZF9kaXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAub25saW5lIHtcclxuICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgd2lkdGg6IDQ3JTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICBib3gtc2hhZG93OiAwcHggMXB4IDZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuY2FzaCB7XHJcbiAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgIC8vIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgd2lkdGg6IDQ3JTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICBib3gtc2hhZG93OiAwcHggMXB4IDZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuaW1nX2RpdiB7XHJcbiAgICAgIC50aXR0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zLU1lZGl1bVwiO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW1nIHtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgfVxyXG4gICAgICAuY2FzaF9oZWFkaW5nIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyZWVuKTtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIjtcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgICAgLnBheV9pbWcge1xyXG4gICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpb24taXRlbSB7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcbiAgICAubGJsX3Zpc2Ege1xyXG4gICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtTWVkaXVtXCI7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZ3JlZW4pO1xyXG4gICAgfVxyXG4gICAgaW9uLWlucHV0IHtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zLU1lZGl1bVwiO1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyZWVuKTtcclxuICAgIH1cclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1ncmVlbik7XHJcbiAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gICAgfVxyXG4gIH1cclxuICAucGF5cGFsX2ltZyB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDE3cHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI4cHggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIiwiaW9uLWNvbnRlbnQgLmNhcmRfZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuaW9uLWNvbnRlbnQgLmNhcmRfZGl2IC5vbmxpbmUge1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogNDclO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDBweCAxcHggNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbmlvbi1jb250ZW50IC5jYXJkX2RpdiAuY2FzaCB7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiA0NyU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMHB4IDFweCA2cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgLmNhcmRfZGl2IC5pbWdfZGl2IC50aXR0bGUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtTWVkaXVtXCI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuICBtYXJnaW46IDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgLmNhcmRfZGl2IC5pbWdfZGl2IGltZyB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5pb24tY29udGVudCAuY2FyZF9kaXYgLmltZ19kaXYgLmNhc2hfaGVhZGluZyB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZ3JlZW4pO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtTWVkaXVtXCI7XG4gIG1hcmdpbjogMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24tY29udGVudCAuY2FyZF9kaXYgLmltZ19kaXYgLnBheV9pbWcge1xuICB3aWR0aDogODBweDtcbn1cbmlvbi1jb250ZW50IGlvbi1pdGVtIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG59XG5pb24tY29udGVudCBpb24taXRlbSAubGJsX3Zpc2Ege1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtTWVkaXVtXCI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZ3JlZW4pO1xufVxuaW9uLWNvbnRlbnQgaW9uLWl0ZW0gaW9uLWlucHV0IHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zLU1lZGl1bVwiO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyZWVuKTtcbn1cbmlvbi1jb250ZW50IGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1ncmVlbik7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xufVxuaW9uLWNvbnRlbnQgLnBheXBhbF9pbWcge1xuICBtYXJnaW4tdG9wOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTdweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAyOHB4ICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/pay-method/pay-method.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/pay-method/pay-method.page.ts ***!
  \*****************************************************/
/*! exports provided: PayMethodPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayMethodPage", function() { return PayMethodPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _grocery_success_grocery_success_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../grocery-success/grocery-success.page */ "./src/app/pages/grocery-success/grocery-success.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _service_grocery_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../service/grocery.service */ "./src/app/service/grocery.service.ts");
/* harmony import */ var _service_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../service/util.service */ "./src/app/service/util.service.ts");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/paypal/ngx */ "./node_modules/@ionic-native/paypal/ngx/index.js");








let PayMethodPage = class PayMethodPage {
    constructor(api, util, gpi, payPal, modalController) {
        this.api = api;
        this.util = util;
        this.gpi = gpi;
        this.payPal = payPal;
        this.modalController = modalController;
        this.data = {};
        this.online = 1;
        this.cash = 0;
        this.payment_type = "LOCAL";
        this.apdata = {};
        this.apdata = this.gpi.info;
        this.currencyType = this.api.currencyType;
        this.util.startLoad();
        this.api.getDataWithToken("keySetting").subscribe((res) => {
            if (res.success) {
                this.data = res.data;
                this.util.dismissLoader();
            }
        });
    }
    ngOnInit() { }
    paymentMethod() {
        /*
        return */
        let rdata = {};
        rdata.items = [];
        rdata.itemData = [];
        rdata.shop_id = this.gpi.storeID;
        rdata.payment = this.gpi.info.toPay;
        rdata.discount = this.gpi.info.discount;
        rdata.delivery_charge = this.gpi.info.delivery_charge;
        rdata.delivery_type = this.gpi.info.delivery_type;
        if (this.gpi.promocode == undefined) {
        }
        else {
            rdata.coupon_id = this.gpi.promocode.id;
        }
        rdata.coupon_price = this.gpi.info.discount;
        if (typeof this.data.items == "string") {
            rdata.items = [];
        }
        this.gpi.cartData.forEach((element) => {
            rdata.items.push(element.id);
            let pusher = {
                item_id: element.id,
                price: element.total * element.qty,
                quantity: element.qty,
            };
            rdata.itemData.push(pusher);
        });
        rdata.items = rdata.items.join();
        if (this.online) {
            if (this.payment_type == "RAZOR") {
                this.payWithRazor(rdata);
            }
            else {
                if (this.currencyType == "INR") {
                    this.util.presentToast("payment not possible");
                }
                else {
                    this.paypalPay(rdata);
                }
            }
        }
        else {
            rdata.payment_status = 0;
            rdata.payment_type = this.payment_type;
            this.util.startLoad();
            this.api.postDataWithToken("createGroceryOrder", rdata).subscribe((res) => {
                if (res.success) {
                    this.util.dismissLoader();
                    this.gpi.promocode = {};
                    this.gpi.orderId = res.data.id;
                    this.presentModal();
                }
            }, (err) => {
                this.err = err.error.errors;
                this.util.dismissLoader();
            });
        }
    }
    payWithRazor(rdata) {
        var options = {
            description: "Credits towards consultation",
            image: "http://placehold.it/96x96.png",
            currency: this.currencyType,
            key: this.data.razorPublishKey,
            amount: this.gpi.info.toPay * 100,
            name: "Foodlands",
            theme: {
                color: "#94b92d",
            },
            modal: {
                ondismiss: function () {
                    alert("dismissed");
                },
            },
        };
        var successCallback = (payment_id) => {
            rdata.payment_token = payment_id;
            rdata.payment_status = 1;
            rdata.payment_type = "RAZOR";
            this.util.startLoad();
            this.api.postDataWithToken("createGroceryOrder", rdata).subscribe((res) => {
                if (res.success) {
                    this.util.dismissLoader();
                    this.gpi.promocode = {};
                    this.gpi.orderId = res.data.id;
                    this.presentModal();
                }
            }, (err) => {
                this.err = err.error.errors;
                this.util.dismissLoader();
            });
        };
        var cancelCallback = function (error) {
            alert(error.description + " (Error " + error.code + ")");
        };
        RazorpayCheckout.open(options, successCallback, cancelCallback);
    }
    paypalPay(rdata) {
        this.payPal
            .init({
            PayPalEnvironmentProduction: this.data.paypalProduction,
            PayPalEnvironmentSandbox: this.data.paypalSendbox,
        })
            .then(() => {
            this.payPal
                .prepareToRender("PayPalEnvironmentSandbox", new _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_7__["PayPalConfiguration"]({}))
                .then(() => {
                let payment = new _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_7__["PayPalPayment"](this.gpi.info.toPay, this.currencyType, "Description", "sale");
                this.payPal.renderSinglePaymentUI(payment).then((result) => {
                    rdata.payment_token = result.response.id;
                    rdata.payment_status = 1;
                    rdata.payment_type = "PAYPAL";
                    this.util.startLoad();
                    this.api
                        .postDataWithToken("createGroceryOrder", rdata)
                        .subscribe((res) => {
                        if (res.success) {
                            this.util.dismissLoader();
                            this.gpi.promocode = {};
                            this.gpi.orderId = res.data.id;
                            this.presentModal();
                        }
                    }, (err) => {
                        this.err = err.error.errors;
                        this.util.dismissLoader();
                    });
                }, (e) => { });
            }, (e) => { });
        }, (e) => { });
    }
    presentModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _grocery_success_grocery_success_page__WEBPACK_IMPORTED_MODULE_1__["GrocerySuccessPage"],
                backdropDismiss: false,
                cssClass: "SuccessModal",
            });
            return yield modal.present();
        });
    }
};
PayMethodPage.ctorParameters = () => [
    { type: _service_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: _service_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] },
    { type: _service_grocery_service__WEBPACK_IMPORTED_MODULE_3__["GroceryService"] },
    { type: _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_7__["PayPal"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
PayMethodPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: "app-pay-method",
        template: __webpack_require__(/*! raw-loader!./pay-method.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/pay-method/pay-method.page.html"),
        styles: [__webpack_require__(/*! ./pay-method.page.scss */ "./src/app/pages/pay-method/pay-method.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"],
        _service_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"],
        _service_grocery_service__WEBPACK_IMPORTED_MODULE_3__["GroceryService"],
        _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_7__["PayPal"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], PayMethodPage);



/***/ })

}]);
//# sourceMappingURL=pages-pay-method-pay-method-module-es2015.js.map