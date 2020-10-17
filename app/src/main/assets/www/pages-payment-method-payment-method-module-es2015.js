(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-payment-method-payment-method-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/payment-method/payment-method.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/payment-method/payment-method.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n    <ion-toolbar mode=\"md\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"home\" icon=\"ios-arrow-back\" text=\"\"></ion-back-button>\n        </ion-buttons>\n        <ion-title class=\"ion-text-uppercase\">{{\"pay_method_page.title\" | translate}}</ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n    <div class=\"card_div ion-margin-horizontal\">\n        <div class=\"online\" [ngStyle]=\"{'background-color':online===1? 'var(--ion-color-green)'\n    : 'var(--ion-color-white)' }\" (click)=\"online=1 ;cash=0\">\n            <div class=\"img_div\">\n                <img [src]=\"online==1 ? ' assets/image/online-pay.png' : 'assets/image/credit-cards.png'\" />\n                <h3 [ngClass]=\"online==1 ? 'tittle' : 'cash_heading' \">{{\"pay_method_page.online_pay\" | translate}}</h3>\n            </div>\n        </div>\n        <div class=\"cash\" [ngStyle]=\"{'background-color':cash===1? 'var(--ion-color-green)': 'var(--ion-color-white)' }\" (click)=\"online=0;cash=1\">\n            <div class=\"img_div\">\n                <img [src]=\"cash==1 ? 'assets/image/cash.png' : 'assets/image/cash-payment.png'\" />\n                <h3 [ngClass]=\"cash==1 ? 'tittle' : 'cash_heading' \">{{\"pay_method_page.cash\" | translate}}</h3>\n            </div>\n        </div>\n    </div>\n    <div class=\"card_div ion-margin-horizontal\" *ngIf=\"online==1\">\n        <div class=\"online\" (click)=\"razorPayment=1 ; paypalPayment=0;\" [ngStyle]=\"{'background-color':razorPayment===1? 'var(--ion-color-green)': 'var(--ion-color-white)' }\">\n            <div class=\"img_div\">\n                <img src=\"../../../assets/image/Razorpay_logo.svg\" class=\"pay_img\" />\n                <h3 [ngClass]=\"razorPayment==1 ? 'tittle' : 'cash_heading' \">{{\"pay_method_page.razor_pay\" | translate}}</h3>\n            </div>\n        </div>\n        <div class=\"cash\" (click)=\"razorPayment=0; paypalPayment=1\" [ngStyle]=\"{'background-color':paypalPayment===1? 'var(--ion-color-green)': 'var(--ion-color-white)' }\">\n            <div class=\"img_div\">\n                <img src=\"../../../assets/image/paypal_image.png\" class=\"pay_img paypal_img\" />\n                <h3 [ngClass]=\"paypalPayment==1 ? 'tittle' : 'cash_heading' \">{{\"pay_method_page.pay_pal\" | translate}}</h3>\n            </div>\n        </div>\n    </div>\n    <div>\n\n    </div>\n</ion-content>\n\n<ion-footer>\n    <ion-button class=\"otp_btn\" (click)=\"paymentMethod()\">\n        {{\"pay_method_page.continue_btn\" | translate}}\n    </ion-button>\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/payment-method/payment-method.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/payment-method/payment-method.module.ts ***!
  \***************************************************************/
/*! exports provided: PaymentMethodPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentMethodPageModule", function() { return PaymentMethodPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _payment_method_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./payment-method.page */ "./src/app/pages/payment-method/payment-method.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








const routes = [
    {
        path: '',
        component: _payment_method_page__WEBPACK_IMPORTED_MODULE_6__["PaymentMethodPage"]
    }
];
let PaymentMethodPageModule = class PaymentMethodPageModule {
};
PaymentMethodPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_payment_method_page__WEBPACK_IMPORTED_MODULE_6__["PaymentMethodPage"]]
    })
], PaymentMethodPageModule);



/***/ }),

/***/ "./src/app/pages/payment-method/payment-method.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/payment-method/payment-method.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content .card_div {\n  display: -webkit-box;\n  display: flex;\n  margin-top: 40px;\n}\nion-content .card_div .online {\n  height: 100px;\n  width: 47%;\n  border-radius: 5px;\n  box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.16);\n  margin-right: 20px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\nion-content .card_div .cash {\n  height: 100px;\n  width: 47%;\n  border-radius: 5px;\n  box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.16);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\nion-content .card_div .img_div .tittle {\n  font-size: 12px;\n  font-family: \"Poppins-Medium\";\n  color: var(--ion-color-white);\n  margin: 0px;\n  text-align: center;\n}\nion-content .card_div .img_div img {\n  height: 50px;\n  width: 50px;\n  margin-bottom: 10px;\n}\nion-content .card_div .img_div .cash_heading {\n  color: var(--ion-color-green);\n  font-size: 12px;\n  font-family: \"Poppins-Medium\";\n  margin: 0px;\n  text-align: center;\n}\nion-content .card_div .img_div .pay_img {\n  width: 80px;\n}\nion-content ion-item {\n  margin-top: 40px;\n  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.16);\n}\nion-content ion-item .lbl_visa {\n  font-size: 22px;\n  font-family: \"Poppins-Medium\";\n  color: var(--ion-color-green);\n}\nion-content ion-item ion-input {\n  font-size: 18px;\n  font-family: \"Poppins-Medium\";\n  color: var(--ion-color-green);\n}\nion-content ion-item ion-icon {\n  color: var(--ion-color-green);\n  align-self: flex-end;\n}\nion-content .paypal_img {\n  margin-top: 14px !important;\n  height: 17px !important;\n  margin-bottom: 28px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGF5bWVudC1tZXRob2QvQzpcXFVzZXJzXFxvc2lhblxcRGVza3RvcFxcTkFUVVVUMi4wL3NyY1xcYXBwXFxwYWdlc1xccGF5bWVudC1tZXRob2RcXHBheW1lbnQtbWV0aG9kLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcGF5bWVudC1tZXRob2QvcGF5bWVudC1tZXRob2QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZ0JBQUE7QUNBSjtBRENJO0VBQ0UsYUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLCtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0NOO0FEQ0k7RUFDRSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsK0NBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0NOO0FERU07RUFDRSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0FSO0FER007RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDRFI7QURHTTtFQUNFLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDRFI7QURHTTtFQUNFLFdBQUE7QUNEUjtBRE1FO0VBQ0UsZ0JBQUE7RUFDQSwrQ0FBQTtBQ0pKO0FES0k7RUFDRSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtBQ0hOO0FES0k7RUFDRSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtBQ0hOO0FES0k7RUFDRSw2QkFBQTtFQUNBLG9CQUFBO0FDSE47QURNRTtFQUNFLDJCQUFBO0VBQ0EsdUJBQUE7RUFDQSw4QkFBQTtBQ0pKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGF5bWVudC1tZXRob2QvcGF5bWVudC1tZXRob2QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gIC5jYXJkX2RpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIC5vbmxpbmUge1xyXG4gICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICB3aWR0aDogNDclO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIGJveC1zaGFkb3c6IDBweCAxcHggNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmNhc2gge1xyXG4gICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICB3aWR0aDogNDclO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIGJveC1zaGFkb3c6IDBweCAxcHggNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5pbWdfZGl2IHtcclxuICAgICAgLnRpdHRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtTWVkaXVtXCI7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpbWcge1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5jYXNoX2hlYWRpbmcge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZ3JlZW4pO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zLU1lZGl1bVwiO1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICAucGF5X2ltZyB7XHJcbiAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlvbi1pdGVtIHtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuICAgIC5sYmxfdmlzYSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIjtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1ncmVlbik7XHJcbiAgICB9XHJcbiAgICBpb24taW5wdXQge1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtTWVkaXVtXCI7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZ3JlZW4pO1xyXG4gICAgfVxyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyZWVuKTtcclxuICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5wYXlwYWxfaW1nIHtcclxuICAgIG1hcmdpbi10b3A6IDE0cHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMTdweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjhweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iLCJpb24tY29udGVudCAuY2FyZF9kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuaW9uLWNvbnRlbnQgLmNhcmRfZGl2IC5vbmxpbmUge1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogNDclO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDBweCAxcHggNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgLmNhcmRfZGl2IC5jYXNoIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDQ3JTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAwcHggMXB4IDZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5pb24tY29udGVudCAuY2FyZF9kaXYgLmltZ19kaXYgLnRpdHRsZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG4gIG1hcmdpbjogMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24tY29udGVudCAuY2FyZF9kaXYgLmltZ19kaXYgaW1nIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbmlvbi1jb250ZW50IC5jYXJkX2RpdiAuaW1nX2RpdiAuY2FzaF9oZWFkaW5nIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1ncmVlbik7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIjtcbiAgbWFyZ2luOiAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmlvbi1jb250ZW50IC5jYXJkX2RpdiAuaW1nX2RpdiAucGF5X2ltZyB7XG4gIHdpZHRoOiA4MHB4O1xufVxuaW9uLWNvbnRlbnQgaW9uLWl0ZW0ge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBib3gtc2hhZG93OiAwcHggMnB4IDZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbn1cbmlvbi1jb250ZW50IGlvbi1pdGVtIC5sYmxfdmlzYSB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1ncmVlbik7XG59XG5pb24tY29udGVudCBpb24taXRlbSBpb24taW5wdXQge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtTWVkaXVtXCI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZ3JlZW4pO1xufVxuaW9uLWNvbnRlbnQgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyZWVuKTtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG59XG5pb24tY29udGVudCAucGF5cGFsX2ltZyB7XG4gIG1hcmdpbi10b3A6IDE0cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxN3B4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDI4cHggIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/payment-method/payment-method.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/payment-method/payment-method.page.ts ***!
  \*************************************************************/
/*! exports provided: PaymentMethodPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentMethodPage", function() { return PaymentMethodPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_util_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../service/util.service */ "./src/app/service/util.service.ts");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _success_modal_success_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../success-modal/success-modal.page */ "./src/app/pages/success-modal/success-modal.page.ts");
/* harmony import */ var _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/paypal/ngx */ "./node_modules/@ionic-native/paypal/ngx/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








let PaymentMethodPage = class PaymentMethodPage {
    constructor(ntrl, modalController, api, util, payPal, translate) {
        this.ntrl = ntrl;
        this.modalController = modalController;
        this.api = api;
        this.util = util;
        this.payPal = payPal;
        this.translate = translate;
        this.data = {
            itemData: [],
            items: [],
            package_id: []
        };
        this.online = 1;
        this.cash = 0;
        this.paypalPayment = 0;
        this.razorPayment = 1;
        this.currencyType = this.api.currencyType;
        this.util.startLoad();
        this.api.getDataWithToken("keySetting").subscribe((res) => {
            if (res.success) {
                this.razor_key = res.data.razorPublishKey;
                this.paypalProductionkey = res.data.paypalProduction;
                this.paypalSanboxkey = res.data.paypalSendbox;
                this.util.dismissLoader();
            }
        });
    }
    ngOnInit() { }
    paymentMethod() {
        this.data.items = [];
        this.data.package_id = [];
        this.data.itemData = [];
        this.data.shopName = this.api.cartData.name;
        this.data.shop_id = this.api.cartData.id;
        this.data.payment = this.api.cartData.toPay;
        this.data.discount = this.api.cartData.discount;
        this.data.shop_charge = this.api.cartData.rastaurant_charge;
        this.data.delivery_charge = this.api.cartData.delivery_charge;
        this.data.coupon_price = this.api.cartData.discount;
        this.data.coupon_id = this.api.promocode.id;
        if (typeof this.data.items == "string") {
            this.data.items = [];
            this.data.package_id = [];
        }
        this.api.cartData.cartData.forEach(element => {
            if (element.type == "combo") {
                this.data.package_id.push(element.id);
                let pusher = {
                    item: "",
                    price: element.total,
                    quantity: element.qty,
                    package_id: element.id
                };
                this.data.itemData.push(pusher);
            }
            else {
                this.data.items.push(element.id);
                let pusher = {
                    item: element.id,
                    price: element.total,
                    quantity: element.qty,
                    package_id: ""
                };
                this.data.itemData.push(pusher);
            }
        });
        this.data.items = this.data.items.join();
        this.data.package_id = this.data.package_id.join();
        if (this.online) {
            localStorage.setItem("payment_type", "online");
            if (this.razorPayment) {
                this.payWithRazor();
            }
            else {
                if (this.currencyType == "INR") {
                    this.translate.get('toasts').subscribe((val) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                        this.util.presentToast(val.payment_not_possible);
                    }));
                }
                else {
                    this.paypalPay();
                }
            }
        }
        else {
            localStorage.setItem("payment_type", "cash");
            this.data.payment_status = 0;
            this.data.payment_type = "LOCAL";
            this.util.startLoad();
            this.api.postDataWithToken("createOrder", this.data).subscribe((res) => {
                if (res.success) {
                    this.api.promocode = {};
                    this.util.dismissLoader();
                    this.api.checkOrderStatus = res.data.id;
                    this.presentModal();
                }
            }, err => {
                this.err = err.error.errors;
                this.util.dismissLoader();
            });
        }
    }
    back() {
        this.ntrl.back();
    }
    presentModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _success_modal_success_modal_page__WEBPACK_IMPORTED_MODULE_5__["SuccessModalPage"],
                backdropDismiss: false,
                cssClass: "SuccessModal"
            });
            return yield modal.present();
        });
    }
    payWithRazor() {
        var options = {
            description: "Credits towards consultation",
            image: "http://placehold.it/96x96.png",
            currency: this.currencyType,
            key: this.razor_key,
            amount: this.data.payment * 100,
            name: "irest",
            prefill: {
                email: "admin@enappd.com",
                contact: "9621323231",
                name: "Enappd"
            },
            theme: {
                color: "#94b92d"
            },
            modal: {
                ondismiss: function () {
                    alert("dismissed");
                }
            }
        };
        var successCallback = payment_id => {
            this.data.payment_token = payment_id;
            this.data.payment_status = 1;
            this.data.payment_type = "RAZOR";
            this.util.startLoad();
            this.api.postDataWithToken("createOrder", this.data).subscribe((res) => {
                if (res.success) {
                    this.api.promocode = {};
                    this.util.dismissLoader();
                    this.api.checkOrderStatus = res.data.id;
                    this.presentModal();
                }
            }, err => {
                this.err = err.error.errors;
                this.util.dismissLoader();
            });
        };
        var cancelCallback = function (error) {
            alert(error.description + " (Error " + error.code + ")");
        };
        RazorpayCheckout.open(options, successCallback, cancelCallback);
    }
    paypalPay() {
        this.payPal
            .init({
            PayPalEnvironmentProduction: this.paypalProductionkey,
            PayPalEnvironmentSandbox: this.paypalSanboxkey
        })
            .then(() => {
            this.payPal
                .prepareToRender("PayPalEnvironmentSandbox", new _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_6__["PayPalConfiguration"]({}))
                .then(() => {
                let payment = new _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_6__["PayPalPayment"](this.data.payment, this.currencyType, "Description", "sale");
                this.payPal.renderSinglePaymentUI(payment).then(result => {
                    this.data.payment_token = result.response.id;
                    this.data.payment_status = 1;
                    this.data.payment_type = "PAYPAL";
                    this.util.startLoad();
                    this.api
                        .postDataWithToken("createOrder", this.data)
                        .subscribe((res) => {
                        if (res.success) {
                            this.api.promocode = {};
                            this.util.dismissLoader();
                            this.api.checkOrderStatus = res.data.id;
                            this.presentModal();
                        }
                    }, err => {
                        this.err = err.error.errors;
                        this.util.dismissLoader();
                    });
                }, e => {
                    console.log(e);
                });
            }, e => {
                console.log(e);
            });
        }, e => {
            console.log(e);
        });
    }
};
PaymentMethodPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _service_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"] },
    { type: _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_6__["PayPal"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] }
];
PaymentMethodPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-payment-method",
        template: __webpack_require__(/*! raw-loader!./payment-method.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/payment-method/payment-method.page.html"),
        styles: [__webpack_require__(/*! ./payment-method.page.scss */ "./src/app/pages/payment-method/payment-method.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
        _service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
        _service_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"],
        _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_6__["PayPal"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]])
], PaymentMethodPage);



/***/ })

}]);
//# sourceMappingURL=pages-payment-method-payment-method-module-es2015.js.map