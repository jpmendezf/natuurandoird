(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-payment-payment-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/payment/payment.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/payment/payment.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n    <ion-toolbar mode=\"md\">\n        <ion-buttons>\n            <ion-back-button defaultHref=\"home\" icon=\"ios-arrow-back\" text=\"\"></ion-back-button>\n        </ion-buttons>\n        <ion-title class=\"ion-text-uppercase\">Payment</ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"card_div\">\n        <ion-label class=\"save_label\">Your save card</ion-label>\n        <ion-button class=\"add_btn trans-btn ion-float-right ion-text-capitalize\" (click)=\"addCard()\">\n            Add new card</ion-button>\n    </div>\n    <ion-slides pager=\"true\">\n        <ion-slide>\n            <div class=\"credit_card\">\n                <div class=\"top-img\">\n                    <img src=\"https://tutorez.com/assets/img/visa.png\">\n                </div>\n                <h2 class=\"number\">\n                    1234 4567 7896 1545\n                </h2>\n                <div class=\"personal-detail\">\n                    <div class=\"card-holder\">\n                        <p>CARD HOLDER</p>\n                        <h2>RANDY ORTON</h2>\n                    </div>\n                    <div class=\"cvv\">\n                        <p>EXPIRES HOLDER</p>\n                        <h2>09 / 15</h2>\n                    </div>\n                </div>\n            </div>\n        </ion-slide>\n        <ion-slide>\n            <div class=\"credit_card\">\n                <div class=\"top-img\">\n                    <img src=\"https://tutorez.com/assets/img/visa.png\">\n                </div>\n                <h2 class=\"number\">\n                    1234 4567 7896 1545\n                </h2>\n                <div class=\"personal-detail\">\n                    <div class=\"card-holder\">\n                        <p>CARD HOLDER</p>\n                        <h2>RANDY ORTON</h2>\n                    </div>\n                    <div class=\"cvv\">\n                        <p>EXPIRES HOLDER</p>\n                        <h2>09 / 15</h2>\n                    </div>\n                </div>\n            </div>\n        </ion-slide>\n    </ion-slides>\n    <div class=\"bill_detail ion-margin-horizontal\">\n        <h3 class=\"combo\">\n            Bill Details\n        </h3>\n        <p class=\"bill_item\">Item Total <span class=\"ion-float-right\">$99.00</span></p>\n        <p class=\"bill_item\">Restaurant Charges<span class=\"ion-float-right\">$01.00</span></p>\n        <p class=\"total\">Total Discount<span class=\"ion-float-right\">-$10.00</span></p>\n        <p class=\"bill_item\">Delivery Fee<span class=\"ion-float-right\">$02.00</span></p>\n        <p class=\"bill_item cancel_fee\">Cancellation Fee<span class=\"ion-float-right\">$05.00</span></p>\n        <p class=\"bill_item\">To Pay<span class=\"ion-float-right\">$92.00</span></p>\n        <div class=\"saved\">\n            <span>You have saved $8 on the bill</span>\n        </div>\n    </div>\n</ion-content>\n<ion-footer>\n    <ion-button class=\"otp_btn\" (click)=\"presentModal()\">\n        Pay $92\n    </ion-button>\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/payment/payment.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/payment/payment.module.ts ***!
  \*************************************************/
/*! exports provided: PaymentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPageModule", function() { return PaymentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _payment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./payment.page */ "./src/app/pages/payment/payment.page.ts");







var routes = [
    {
        path: '',
        component: _payment_page__WEBPACK_IMPORTED_MODULE_6__["PaymentPage"]
    }
];
var PaymentPageModule = /** @class */ (function () {
    function PaymentPageModule() {
    }
    PaymentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_payment_page__WEBPACK_IMPORTED_MODULE_6__["PaymentPage"]]
        })
    ], PaymentPageModule);
    return PaymentPageModule;
}());



/***/ }),

/***/ "./src/app/pages/payment/payment.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/payment/payment.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content .card_div {\n  margin-top: 14px;\n  margin-bottom: 14px;\n  padding-left: 16px;\n  padding-right: 16px;\n}\nion-content .card_div .save_label {\n  font-size: 16px;\n  font-family: \"Poppins-Medium\";\n  color: var(--ion-color-darkBlue);\n}\nion-content .card_div .add_btn {\n  font-size: 16px;\n  font-family: \"Poppins-Medium\";\n  color: var(--ion-color-red);\n  --ripple-color: transparent;\n  height: 19px;\n  --background:transparent;\n  box-shadow: none;\n  margin: 0px;\n}\nion-content ion-slide {\n  text-align: initial;\n}\nion-content ion-slide .credit_card {\n  width: 100%;\n  box-shadow: 0px 0px 5px 5px #00000026;\n  margin: 18px 20px;\n  padding: 12px;\n  border-radius: 19px;\n  background: var(--ion-color-darkBlue);\n}\nion-content ion-slide .credit_card .top-img {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n}\nion-content ion-slide .credit_card .top-img img {\n  height: 66px;\n}\nion-content ion-slide .credit_card .number {\n  margin: 0;\n  font-size: 16px;\n  font-family: Poppins-SemiBold;\n  color: #fff;\n  text-align: center;\n  margin-top: 8px;\n  letter-spacing: 2.5px;\n}\nion-content ion-slide .credit_card .personal-detail {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\nion-content ion-slide .credit_card .personal-detail div {\n  width: 100%;\n}\nion-content ion-slide .credit_card .personal-detail div.cvv {\n  text-align: end;\n}\nion-content ion-slide .credit_card .personal-detail p {\n  margin: 0;\n  font-size: 11px;\n  letter-spacing: 1.5px;\n  font-family: Poppins-SemiBold;\n  margin-top: 23px;\n  color: var(--ion-color-placeholder);\n}\nion-content ion-slide .credit_card .personal-detail h2 {\n  margin: 0;\n  font-size: 15px;\n  font-family: Poppins-SemiBold;\n  color: #fff;\n  letter-spacing: 1.5px;\n}\nion-content .bill_detail .bill_item {\n  font-size: 10px;\n  font-family: \"Poppins-Medium\";\n  color: var(--ion-color-darkBlue);\n}\nion-content .bill_detail .total {\n  color: var(--ion-color-green);\n  font-size: 10px;\n  font-family: \"Poppins-Medium\";\n  border-bottom: dashed 1px var(--ion-border-color);\n  margin-bottom: 0px;\n  padding-bottom: 10px;\n}\nion-content .bill_detail .cancel_fee {\n  margin-bottom: 0px;\n  padding-bottom: 10px;\n  border-bottom: dashed 1px var(--ion-border-color);\n}\nion-content .bill_detail .saved {\n  background-color: var(--ion-color-light-green);\n  border: dashed 1px var(--ion-color-green);\n  height: 26px;\n  color: var(--ion-color-green);\n  font-size: 10px;\n  font-family: \"Poppins-Medium\";\n  padding: 5px;\n  margin-bottom: 15px;\n}\nion-content .bill_detail .combo {\n  font-family: \"Poppins-Medium\";\n  font-size: 16px;\n  color: var(--ion-color-darkBlue);\n}\nion-content .tittle {\n  font-size: 14px;\n  font-family: \"Poppins-Medium\";\n  color: var(--ion-color-darkBlue);\n  padding-left: 16px;\n  padding-right: 16px;\n}\nion-content .tittle span {\n  color: var(--ion-color-red);\n}\n.slides-md {\n  --bullet-background: var(--ion-color-green)!important;\n  --bullet-background-active: var(--ion-color-green)!important;\n}\n.slides-ios {\n  --bullet-background: var(--ion-color-green)!important;\n  --bullet-background-active: var(--ion-color-green)!important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGF5bWVudC9DOlxcVXNlcnNcXG9zaWFuXFxEZXNrdG9wXFxOQVRVVVQyLjAvc3JjXFxhcHBcXHBhZ2VzXFxwYXltZW50XFxwYXltZW50LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcGF5bWVudC9wYXltZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDRFI7QURFUTtFQUNJLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0FDQVo7QURFUTtFQUNJLGVBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNBWjtBREdJO0VBQ0ksbUJBQUE7QUNEUjtBREVRO0VBQ0ksV0FBQTtFQUNBLHFDQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQ0FBQTtBQ0FaO0FEQ1k7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0NoQjtBREFnQjtFQUNJLFlBQUE7QUNFcEI7QURDWTtFQUNJLFNBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUNDaEI7QURDWTtFQUNJLFdBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0FDQ2hCO0FEQWdCO0VBQ0ksV0FBQTtBQ0VwQjtBRERvQjtFQUNJLGVBQUE7QUNHeEI7QURBZ0I7RUFDSSxTQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLG1DQUFBO0FDRXBCO0FEQWdCO0VBQ0ksU0FBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQ0VwQjtBREtRO0VBQ0ksZUFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7QUNIWjtBREtRO0VBQ0ksNkJBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxpREFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNIWjtBREtRO0VBQ0ksa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGlEQUFBO0FDSFo7QURLUTtFQUNJLDhDQUFBO0VBQ0EseUNBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNIWjtBREtRO0VBQ0ksNkJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7QUNIWjtBRE1JO0VBQ0ksZUFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDSlI7QURLUTtFQUNJLDJCQUFBO0FDSFo7QURRQTtFQUNJLHFEQUFBO0VBQ0EsNERBQUE7QUNMSjtBRFFBO0VBQ0kscURBQUE7RUFDQSw0REFBQTtBQ0xKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGF5bWVudC9wYXltZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pb24tY29udGVudHtcclxuICAgIC5jYXJkX2RpdiB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTRweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNHB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG4gICAgICAgIC5zYXZlX2xhYmVsIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1BvcHBpbnMtTWVkaXVtJztcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrQmx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hZGRfYnRuIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1BvcHBpbnMtTWVkaXVtJztcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1yZWQpO1xyXG4gICAgICAgICAgICAtLXJpcHBsZS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTlweDtcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpb24tc2xpZGUge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGluaXRpYWw7XHJcbiAgICAgICAgLmNyZWRpdF9jYXJkIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDVweCAjMDAwMDAwMjY7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMThweCAyMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxOXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFya0JsdWUpO1xyXG4gICAgICAgICAgICAudG9wLWltZyB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2NnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5udW1iZXIge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnMtU2VtaUJvbGQ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAyLjVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucGVyc29uYWwtZGV0YWlsIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgJi5jdnYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnMtU2VtaUJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjNweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXBsYWNlaG9sZGVyKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnMtU2VtaUJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5iaWxsX2RldGFpbHtcclxuICAgICAgICAuYmlsbF9pdGVte1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucy1NZWRpdW0nO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtCbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRvdGFse1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKCAtLWlvbi1jb2xvci1ncmVlbik7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zLU1lZGl1bSc7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IGRhc2hlZCAxcHggdmFyKC0taW9uLWJvcmRlci1jb2xvcik7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYW5jZWxfZmVle1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiBkYXNoZWQgMXB4IHZhcigtLWlvbi1ib3JkZXItY29sb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2F2ZWR7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodC1ncmVlbik7XHJcbiAgICAgICAgICAgIGJvcmRlcjogZGFzaGVkIDFweCB2YXIoIC0taW9uLWNvbG9yLWdyZWVuKTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyZWVuKTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1BvcHBpbnMtTWVkaXVtJztcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29tYm97XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucy1NZWRpdW0nO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya0JsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC50aXR0bGV7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucy1NZWRpdW0nO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya0JsdWUpO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG4gICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcmVkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zbGlkZXMtbWQge1xyXG4gICAgLS1idWxsZXQtYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWdyZWVuKSFpbXBvcnRhbnQ7XHJcbiAgICAtLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTogdmFyKC0taW9uLWNvbG9yLWdyZWVuKSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zbGlkZXMtaW9zIHtcclxuICAgIC0tYnVsbGV0LWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1ncmVlbikhaW1wb3J0YW50O1xyXG4gICAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6IHZhcigtLWlvbi1jb2xvci1ncmVlbikhaW1wb3J0YW50O1xyXG59IiwiaW9uLWNvbnRlbnQgLmNhcmRfZGl2IHtcbiAgbWFyZ2luLXRvcDogMTRweDtcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xufVxuaW9uLWNvbnRlbnQgLmNhcmRfZGl2IC5zYXZlX2xhYmVsIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zLU1lZGl1bVwiO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtCbHVlKTtcbn1cbmlvbi1jb250ZW50IC5jYXJkX2RpdiAuYWRkX2J0biB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1yZWQpO1xuICAtLXJpcHBsZS1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGhlaWdodDogMTlweDtcbiAgLS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xuICBib3gtc2hhZG93OiBub25lO1xuICBtYXJnaW46IDBweDtcbn1cbmlvbi1jb250ZW50IGlvbi1zbGlkZSB7XG4gIHRleHQtYWxpZ246IGluaXRpYWw7XG59XG5pb24tY29udGVudCBpb24tc2xpZGUgLmNyZWRpdF9jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDVweCAjMDAwMDAwMjY7XG4gIG1hcmdpbjogMThweCAyMHB4O1xuICBwYWRkaW5nOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAxOXB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFya0JsdWUpO1xufVxuaW9uLWNvbnRlbnQgaW9uLXNsaWRlIC5jcmVkaXRfY2FyZCAudG9wLWltZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbmlvbi1jb250ZW50IGlvbi1zbGlkZSAuY3JlZGl0X2NhcmQgLnRvcC1pbWcgaW1nIHtcbiAgaGVpZ2h0OiA2NnB4O1xufVxuaW9uLWNvbnRlbnQgaW9uLXNsaWRlIC5jcmVkaXRfY2FyZCAubnVtYmVyIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zLVNlbWlCb2xkO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIGxldHRlci1zcGFjaW5nOiAyLjVweDtcbn1cbmlvbi1jb250ZW50IGlvbi1zbGlkZSAuY3JlZGl0X2NhcmQgLnBlcnNvbmFsLWRldGFpbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5pb24tY29udGVudCBpb24tc2xpZGUgLmNyZWRpdF9jYXJkIC5wZXJzb25hbC1kZXRhaWwgZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5pb24tY29udGVudCBpb24tc2xpZGUgLmNyZWRpdF9jYXJkIC5wZXJzb25hbC1kZXRhaWwgZGl2LmN2diB7XG4gIHRleHQtYWxpZ246IGVuZDtcbn1cbmlvbi1jb250ZW50IGlvbi1zbGlkZSAuY3JlZGl0X2NhcmQgLnBlcnNvbmFsLWRldGFpbCBwIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDExcHg7XG4gIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnMtU2VtaUJvbGQ7XG4gIG1hcmdpbi10b3A6IDIzcHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcGxhY2Vob2xkZXIpO1xufVxuaW9uLWNvbnRlbnQgaW9uLXNsaWRlIC5jcmVkaXRfY2FyZCAucGVyc29uYWwtZGV0YWlsIGgyIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zLVNlbWlCb2xkO1xuICBjb2xvcjogI2ZmZjtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xufVxuaW9uLWNvbnRlbnQgLmJpbGxfZGV0YWlsIC5iaWxsX2l0ZW0ge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtTWVkaXVtXCI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya0JsdWUpO1xufVxuaW9uLWNvbnRlbnQgLmJpbGxfZGV0YWlsIC50b3RhbCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZ3JlZW4pO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtTWVkaXVtXCI7XG4gIGJvcmRlci1ib3R0b206IGRhc2hlZCAxcHggdmFyKC0taW9uLWJvcmRlci1jb2xvcik7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5pb24tY29udGVudCAuYmlsbF9kZXRhaWwgLmNhbmNlbF9mZWUge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBib3JkZXItYm90dG9tOiBkYXNoZWQgMXB4IHZhcigtLWlvbi1ib3JkZXItY29sb3IpO1xufVxuaW9uLWNvbnRlbnQgLmJpbGxfZGV0YWlsIC5zYXZlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodC1ncmVlbik7XG4gIGJvcmRlcjogZGFzaGVkIDFweCB2YXIoLS1pb24tY29sb3ItZ3JlZW4pO1xuICBoZWlnaHQ6IDI2cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZ3JlZW4pO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtTWVkaXVtXCI7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbmlvbi1jb250ZW50IC5iaWxsX2RldGFpbCAuY29tYm8ge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zLU1lZGl1bVwiO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya0JsdWUpO1xufVxuaW9uLWNvbnRlbnQgLnRpdHRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrQmx1ZSk7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbn1cbmlvbi1jb250ZW50IC50aXR0bGUgc3BhbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcmVkKTtcbn1cblxuLnNsaWRlcy1tZCB7XG4gIC0tYnVsbGV0LWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1ncmVlbikhaW1wb3J0YW50O1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTogdmFyKC0taW9uLWNvbG9yLWdyZWVuKSFpbXBvcnRhbnQ7XG59XG5cbi5zbGlkZXMtaW9zIHtcbiAgLS1idWxsZXQtYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWdyZWVuKSFpbXBvcnRhbnQ7XG4gIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiB2YXIoLS1pb24tY29sb3ItZ3JlZW4pIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/payment/payment.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/payment/payment.page.ts ***!
  \***********************************************/
/*! exports provided: PaymentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPage", function() { return PaymentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _success_modal_success_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../success-modal/success-modal.page */ "./src/app/pages/success-modal/success-modal.page.ts");




var PaymentPage = /** @class */ (function () {
    function PaymentPage(modalController, ntrl) {
        this.modalController = modalController;
        this.ntrl = ntrl;
    }
    PaymentPage.prototype.ngOnInit = function () {
    };
    PaymentPage.prototype.presentModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _success_modal_success_modal_page__WEBPACK_IMPORTED_MODULE_3__["SuccessModalPage"],
                            cssClass: 'SuccessModal'
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PaymentPage.prototype.back = function () {
        this.ntrl.back();
    };
    PaymentPage.prototype.addCard = function () {
        this.ntrl.navigateForward(['add-card']);
    };
    PaymentPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
    ]; };
    PaymentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-payment',
            template: __webpack_require__(/*! raw-loader!./payment.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/payment/payment.page.html"),
            styles: [__webpack_require__(/*! ./payment.page.scss */ "./src/app/pages/payment/payment.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], PaymentPage);
    return PaymentPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-payment-payment-module-es5.js.map