(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cart-cart-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cart/cart.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cart/cart.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n    <ion-toolbar mode=\"md\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"home\" icon=\"ios-arrow-back\" text=\"\"></ion-back-button>\n        </ion-buttons>\n        <ion-title class=\"ion-text-uppercase\">{{\"cart_page.title\" | translate}}</ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-item class=\"item_div\" lines=\"none\">\n        <img [src]=\"data?.imagePath + data?.image\" />\n        <ion-label>\n            <h3 class=\"name\">{{data?.name}}</h3>\n            <p class=\"adress\">{{data?.address}}</p>\n        </ion-label>\n    </ion-item>\n    <ion-item lines=\"none\" class=\"combo_item\" *ngFor=\"let item of data?.cartData\">\n        <h3 class=\"combo\">\n            <span class=\"item_span\">{{item?.name}}</span>\n        </h3>\n        <span class=\"price ion-float-right\" slot=\"end\">{{currency}}{{item?.price}}</span>\n        <div class=\"btn_div\" slot=\"end\">\n            <ion-button class=\"add-btn\" (click)=\"minusQty(item)\">\n                <ion-icon name=\"remove\"></ion-icon>\n            </ion-button>\n            <ion-label class=\"one\">\n                {{item?.qty}}\n            </ion-label>\n            <ion-button class=\"add-btn\" (click)=\"addtocart(item)\">\n                <ion-icon name=\"add\" class=\"add\"></ion-icon>\n            </ion-button>\n        </div>\n    </ion-item>\n    <ion-item lines=\"none\" (click)=\"applyCoupon()\">\n        <h3 slot=\"start\" class=\"combo\">\n            <ion-icon src=\"assets/icon-image/persentage.svg\"></ion-icon> {{\"cart_page.apply_coupon\" | translate}}\n        </h3>\n        <ion-icon class=\"direction\" name=\"ios-arrow-forward\" slot=\"end\"></ion-icon>\n    </ion-item>\n    <div class=\"devider\"></div>\n    <div class=\"bill_detail ion-margin-horizontal\">\n        <h3 class=\"combo\">\n            {{\"cart_page.bill_details\" | translate}}\n        </h3>\n        <p class=\"bill_item\">\n            {{\"cart_page.item_total\" | translate}}\n            <span class=\"ion-float-right\">{{currency}}{{totalItem}}</span>\n        </p>\n\n        <p class=\"total\">\n            {{\"cart_page.total_discount\" | translate}}<span class=\"ion-float-right\">-{{currency}}{{data?.discount}}</span>\n        </p>\n        <p class=\"bill_item\">\n            {{\"cart_page.restaurant_charges\" | translate}}<span class=\"ion-float-right\">{{currency}}{{data?.rastaurant_charge}}</span>\n        </p>\n        <p class=\"bill_item\">\n            {{\"cart_page.delivery_fee\" | translate}}<span class=\"ion-float-right\">{{currency}}{{data?.delivery_charge}}</span>\n        </p>\n        <p class=\"bill_item cancel_fee\">\n            {{\"cart_page.cancellation_fee\" | translate}}<span class=\"ion-float-right\">{{currency}}{{data?.cancle_charge}}</span>\n        </p>\n        <p class=\"bill_item\">\n            {{\"cart_page.to_pay\" | translate}}<span class=\"ion-float-right\">{{currency}}{{data?.toPay}}</span>\n        </p>\n        <div class=\"saved\">\n            <span>{{\"cart_page.saved_text.txt1\" | translate}} {{currency}}{{data?.discount}} {{\"cart_page.saved_text.txt2\" | translate}}</span>\n        </div>\n    </div>\n    <div class=\"devider\"></div>\n    <div class=\"last_div ion-margin-horizontal\">\n        <h3 class=\"combo\">{{\"cart_page.select_address\" | translate}}</h3>\n\n        <div class=\"address_div\">\n            <div class=\"pin_div\">\n                <ion-icon name=\"pin\"></ion-icon>\n            </div>\n            <div class=\"adress\">\n                <p class=\"adress_p\">\n                    {{data?.Deafult_address?.soc_name}} {{data?.Deafult_address?.street}} {{data?.Deafult_address?.city}} {{data?.Deafult_address?.zipcode}}\n                </p>\n            </div>\n            <div class=\"change\">\n                <ion-button class=\"trans-btn change_ad\" (click)=\"change_Address()\">{{\"cart_page.change_address_btn\" | translate}}</ion-button>\n            </div>\n        </div>\n        <div #map id=\"map\"></div>\n    </div>\n</ion-content>\n<ion-footer>\n    <ion-button class=\"otp_btn\" (click)=\"payment_method()\">\n        {{\"cart_page.select_pay_method\" | translate}}\n    </ion-button>\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/cart/cart.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/cart/cart.module.ts ***!
  \*******************************************/
/*! exports provided: CartPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageModule", function() { return CartPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart.page */ "./src/app/pages/cart/cart.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");








var routes = [
    {
        path: '',
        component: _cart_page__WEBPACK_IMPORTED_MODULE_6__["CartPage"]
    }
];
var CartPageModule = /** @class */ (function () {
    function CartPageModule() {
    }
    CartPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_cart_page__WEBPACK_IMPORTED_MODULE_6__["CartPage"]]
        })
    ], CartPageModule);
    return CartPageModule;
}());



/***/ }),

/***/ "./src/app/pages/cart/cart.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/cart/cart.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content .item_div img {\n  border-radius: 3px;\n  margin-right: 10px;\n  height: 56px;\n  width: 56px;\n}\nion-content .item_div .name {\n  font-size: 14px;\n  font-family: \"Poppins-Medium\";\n  color: var(--ion-color-darkBlue);\n}\nion-content .item_div .adress {\n  font-size: 10px;\n  font-family: \"Poppins-Regular\";\n  color: var(--ion-color-darkgray);\n  line-height: 15px;\n}\nion-content .combo_item {\n  border-bottom: dashed 1px var(--ion-border-color);\n}\nion-content .combo_item .item_span {\n  margin-right: 5px;\n}\nion-content .combo {\n  font-family: \"Poppins-Medium\";\n  font-size: 12px;\n  color: var(--ion-color-darkBlue);\n}\nion-content .direction {\n  height: 13px;\n  width: 13px;\n}\nion-content .price {\n  font-size: 12px;\n  font-family: \"Poppins-Medium\";\n  color: var(--ion-color-green);\n}\nion-content .btn_div {\n  display: -webkit-box;\n  display: flex;\n  border: solid 1px;\n  border-radius: 3px;\n  border-color: var(--ion-color-light-gray);\n  height: 25px;\n  width: 77px;\n  margin-left: 10px;\n}\nion-content .btn_div .add-btn {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  margin: 0px;\n  width: 25px;\n  height: 24px;\n  --background: transparent;\n  --color: var(--ion-color-dark-gray);\n  --box-shadow: none;\n  --border: none;\n  --ripple-color: var(--ion-color-white);\n  --background-activated: none;\n}\nion-content .btn_div .add-btn ion-icon {\n  color: var(--ion-color-darkgray);\n  width: 15px;\n}\nion-content .btn_div .add-btn .add {\n  color: var(--ion-color-green);\n}\nion-content .btn_div .one {\n  width: 25px;\n  padding-top: 1px;\n  text-align: center;\n  font-size: 12px;\n  color: var(--ion-color-green);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\nion-content .devider {\n  background-color: var(--ion-color-sky);\n  height: 15px;\n}\nion-content .bill_detail .bill_item {\n  font-size: 10px;\n  font-family: \"Poppins-Medium\";\n  color: var(--ion-color-darkBlue);\n}\nion-content .bill_detail .total {\n  color: var(--ion-color-green);\n  font-size: 10px;\n  font-family: \"Poppins-Medium\";\n  border-bottom: dashed 1px var(--ion-border-color);\n  margin-bottom: 0px;\n  padding-bottom: 10px;\n}\nion-content .bill_detail .cancel_fee {\n  margin-bottom: 0px;\n  padding-bottom: 10px;\n  border-bottom: dashed 1px var(--ion-border-color);\n}\nion-content .bill_detail .saved {\n  background-color: var(--ion-color-light-green);\n  border: dashed 1px var(--ion-color-green);\n  height: 26px;\n  color: var(--ion-color-green);\n  font-size: 10px;\n  font-family: \"Poppins-Medium\";\n  padding: 5px;\n  margin-bottom: 15px;\n}\nion-content .last_div .address_div {\n  display: -webkit-box;\n  display: flex;\n}\nion-content .last_div .address_div .pin_div {\n  padding-top: 3px;\n  width: 8%;\n}\nion-content .last_div .address_div .pin_div ion-icon {\n  color: var(--ion-color-green);\n}\nion-content .last_div .address_div .adress {\n  width: 66%;\n}\nion-content .last_div .address_div .adress .adress_p {\n  font-size: 12px;\n  font-family: \"Poppins-Regular\";\n  color: var(--ion-color-darkgray);\n  margin-top: 0;\n  margin-bottom: 7px;\n}\nion-content .last_div .address_div .change {\n  display: -webkit-box;\n  display: flex;\n  width: 24%;\n}\nion-content .last_div .address_div .change .change_ad {\n  font-size: 9px;\n  font-family: \"Poppins-Regular\";\n  --color: var(--ion-color-green);\n  text-transform: capitalize;\n  height: 15px;\n  margin: 0;\n  --ripple-color: var(--ion-color-white);\n  --color-activated: none;\n}\nion-content .last_div #map {\n  height: 140px;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2FydC9DOlxcVXNlcnNcXG9zaWFuXFxEZXNrdG9wXFxOQVRVVVQyLjAvc3JjXFxhcHBcXHBhZ2VzXFxjYXJ0XFxjYXJ0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2FydC9jYXJ0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0ROO0FER0k7RUFDRSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtBQ0ROO0FER0k7RUFDRSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0FDRE47QURJRTtFQUNFLGlEQUFBO0FDRko7QURHSTtFQUNFLGlCQUFBO0FDRE47QURJRTtFQUNFLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0FDRko7QURJRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDRko7QURJRTtFQUNFLGVBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0FDRko7QURJRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5Q0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNGSjtBREdJO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxzQ0FBQTtFQUNBLDRCQUFBO0FDRE47QURFTTtFQUNFLGdDQUFBO0VBQ0EsV0FBQTtBQ0FSO0FERU07RUFDRSw2QkFBQTtBQ0FSO0FER0k7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDRE47QURJRTtFQUNFLHNDQUFBO0VBQ0EsWUFBQTtBQ0ZKO0FES0k7RUFDRSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtBQ0hOO0FES0k7RUFDRSw2QkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGlEQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQ0hOO0FES0k7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaURBQUE7QUNITjtBREtJO0VBQ0UsOENBQUE7RUFDQSx5Q0FBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0hOO0FET0k7RUFDRSxvQkFBQTtFQUFBLGFBQUE7QUNMTjtBRE1NO0VBQ0UsZ0JBQUE7RUFDQSxTQUFBO0FDSlI7QURLUTtFQUNFLDZCQUFBO0FDSFY7QURNTTtFQUNFLFVBQUE7QUNKUjtBREtRO0VBQ0UsZUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNIVjtBRE1NO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsVUFBQTtBQ0pSO0FES1E7RUFDRSxjQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxzQ0FBQTtFQUNBLHVCQUFBO0FDSFY7QURPSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ0xOIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2FydC9jYXJ0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAuaXRlbV9kaXYge1xyXG4gICAgaW1nIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgIGhlaWdodDogNTZweDtcclxuICAgICAgd2lkdGg6IDU2cHg7XHJcbiAgICB9XHJcbiAgICAubmFtZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIjtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrQmx1ZSk7XHJcbiAgICB9XHJcbiAgICAuYWRyZXNzIHtcclxuICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zLVJlZ3VsYXJcIjtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrZ3JheSk7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuY29tYm9faXRlbSB7XHJcbiAgICBib3JkZXItYm90dG9tOiBkYXNoZWQgMXB4IHZhcigtLWlvbi1ib3JkZXItY29sb3IpO1xyXG4gICAgLml0ZW1fc3BhbiB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuY29tYm8ge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya0JsdWUpO1xyXG4gIH1cclxuICAuZGlyZWN0aW9uIHtcclxuICAgIGhlaWdodDogMTNweDtcclxuICAgIHdpZHRoOiAxM3B4O1xyXG4gIH1cclxuICAucHJpY2Uge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIjtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZ3JlZW4pO1xyXG4gIH1cclxuICAuYnRuX2RpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodC1ncmF5KTtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIHdpZHRoOiA3N3B4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAuYWRkLWJ0biB7XHJcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG4gICAgICAtLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICB3aWR0aDogMjVweDtcclxuICAgICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay1ncmF5KTtcclxuICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAtLWJvcmRlcjogbm9uZTtcclxuICAgICAgLS1yaXBwbGUtY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XHJcbiAgICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IG5vbmU7XHJcbiAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtncmF5KTtcclxuICAgICAgICB3aWR0aDogMTVweDtcclxuICAgICAgfVxyXG4gICAgICAuYWRkIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyZWVuKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm9uZSB7XHJcbiAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICBwYWRkaW5nLXRvcDogMXB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1ncmVlbik7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxuICAuZGV2aWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2t5KTtcclxuICAgIGhlaWdodDogMTVweDtcclxuICB9XHJcbiAgLmJpbGxfZGV0YWlsIHtcclxuICAgIC5iaWxsX2l0ZW0ge1xyXG4gICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtTWVkaXVtXCI7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya0JsdWUpO1xyXG4gICAgfVxyXG4gICAgLnRvdGFsIHtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1ncmVlbik7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIjtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogZGFzaGVkIDFweCB2YXIoLS1pb24tYm9yZGVyLWNvbG9yKTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuICAgIC5jYW5jZWxfZmVlIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogZGFzaGVkIDFweCB2YXIoLS1pb24tYm9yZGVyLWNvbG9yKTtcclxuICAgIH1cclxuICAgIC5zYXZlZCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodC1ncmVlbik7XHJcbiAgICAgIGJvcmRlcjogZGFzaGVkIDFweCB2YXIoLS1pb24tY29sb3ItZ3JlZW4pO1xyXG4gICAgICBoZWlnaHQ6IDI2cHg7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZ3JlZW4pO1xyXG4gICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtTWVkaXVtXCI7XHJcbiAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIH1cclxuICB9XHJcbiAgLmxhc3RfZGl2IHtcclxuICAgIC5hZGRyZXNzX2RpdiB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIC5waW5fZGl2IHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgICAgIHdpZHRoOiA4JTtcclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyZWVuKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmFkcmVzcyB7XHJcbiAgICAgICAgd2lkdGg6IDY2JTtcclxuICAgICAgICAuYWRyZXNzX3Age1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1SZWd1bGFyXCI7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtncmF5KTtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA3cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5jaGFuZ2Uge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgd2lkdGg6IDI0JTtcclxuICAgICAgICAuY2hhbmdlX2FkIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1SZWd1bGFyXCI7XHJcbiAgICAgICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZ3JlZW4pO1xyXG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAtLXJpcHBsZS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuICAgICAgICAgIC0tY29sb3ItYWN0aXZhdGVkOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgI21hcCB7XHJcbiAgICAgIGhlaWdodDogMTQwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImlvbi1jb250ZW50IC5pdGVtX2RpdiBpbWcge1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgaGVpZ2h0OiA1NnB4O1xuICB3aWR0aDogNTZweDtcbn1cbmlvbi1jb250ZW50IC5pdGVtX2RpdiAubmFtZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrQmx1ZSk7XG59XG5pb24tY29udGVudCAuaXRlbV9kaXYgLmFkcmVzcyB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1SZWd1bGFyXCI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2dyYXkpO1xuICBsaW5lLWhlaWdodDogMTVweDtcbn1cbmlvbi1jb250ZW50IC5jb21ib19pdGVtIHtcbiAgYm9yZGVyLWJvdHRvbTogZGFzaGVkIDFweCB2YXIoLS1pb24tYm9yZGVyLWNvbG9yKTtcbn1cbmlvbi1jb250ZW50IC5jb21ib19pdGVtIC5pdGVtX3NwYW4ge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbmlvbi1jb250ZW50IC5jb21ibyB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtTWVkaXVtXCI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrQmx1ZSk7XG59XG5pb24tY29udGVudCAuZGlyZWN0aW9uIHtcbiAgaGVpZ2h0OiAxM3B4O1xuICB3aWR0aDogMTNweDtcbn1cbmlvbi1jb250ZW50IC5wcmljZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1ncmVlbik7XG59XG5pb24tY29udGVudCAuYnRuX2RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlcjogc29saWQgMXB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LWdyYXkpO1xuICBoZWlnaHQ6IDI1cHg7XG4gIHdpZHRoOiA3N3B4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbmlvbi1jb250ZW50IC5idG5fZGl2IC5hZGQtYnRuIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLWdyYXkpO1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIC0tYm9yZGVyOiBub25lO1xuICAtLXJpcHBsZS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogbm9uZTtcbn1cbmlvbi1jb250ZW50IC5idG5fZGl2IC5hZGQtYnRuIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrZ3JheSk7XG4gIHdpZHRoOiAxNXB4O1xufVxuaW9uLWNvbnRlbnQgLmJ0bl9kaXYgLmFkZC1idG4gLmFkZCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZ3JlZW4pO1xufVxuaW9uLWNvbnRlbnQgLmJ0bl9kaXYgLm9uZSB7XG4gIHdpZHRoOiAyNXB4O1xuICBwYWRkaW5nLXRvcDogMXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1ncmVlbik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgLmRldmlkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2t5KTtcbiAgaGVpZ2h0OiAxNXB4O1xufVxuaW9uLWNvbnRlbnQgLmJpbGxfZGV0YWlsIC5iaWxsX2l0ZW0ge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtTWVkaXVtXCI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya0JsdWUpO1xufVxuaW9uLWNvbnRlbnQgLmJpbGxfZGV0YWlsIC50b3RhbCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZ3JlZW4pO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtTWVkaXVtXCI7XG4gIGJvcmRlci1ib3R0b206IGRhc2hlZCAxcHggdmFyKC0taW9uLWJvcmRlci1jb2xvcik7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5pb24tY29udGVudCAuYmlsbF9kZXRhaWwgLmNhbmNlbF9mZWUge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBib3JkZXItYm90dG9tOiBkYXNoZWQgMXB4IHZhcigtLWlvbi1ib3JkZXItY29sb3IpO1xufVxuaW9uLWNvbnRlbnQgLmJpbGxfZGV0YWlsIC5zYXZlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodC1ncmVlbik7XG4gIGJvcmRlcjogZGFzaGVkIDFweCB2YXIoLS1pb24tY29sb3ItZ3JlZW4pO1xuICBoZWlnaHQ6IDI2cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZ3JlZW4pO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtTWVkaXVtXCI7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbmlvbi1jb250ZW50IC5sYXN0X2RpdiAuYWRkcmVzc19kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuaW9uLWNvbnRlbnQgLmxhc3RfZGl2IC5hZGRyZXNzX2RpdiAucGluX2RpdiB7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG4gIHdpZHRoOiA4JTtcbn1cbmlvbi1jb250ZW50IC5sYXN0X2RpdiAuYWRkcmVzc19kaXYgLnBpbl9kaXYgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyZWVuKTtcbn1cbmlvbi1jb250ZW50IC5sYXN0X2RpdiAuYWRkcmVzc19kaXYgLmFkcmVzcyB7XG4gIHdpZHRoOiA2NiU7XG59XG5pb24tY29udGVudCAubGFzdF9kaXYgLmFkZHJlc3NfZGl2IC5hZHJlc3MgLmFkcmVzc19wIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zLVJlZ3VsYXJcIjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrZ3JheSk7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDdweDtcbn1cbmlvbi1jb250ZW50IC5sYXN0X2RpdiAuYWRkcmVzc19kaXYgLmNoYW5nZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAyNCU7XG59XG5pb24tY29udGVudCAubGFzdF9kaXYgLmFkZHJlc3NfZGl2IC5jaGFuZ2UgLmNoYW5nZV9hZCB7XG4gIGZvbnQtc2l6ZTogOXB4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zLVJlZ3VsYXJcIjtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyZWVuKTtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGhlaWdodDogMTVweDtcbiAgbWFyZ2luOiAwO1xuICAtLXJpcHBsZS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6IG5vbmU7XG59XG5pb24tY29udGVudCAubGFzdF9kaXYgI21hcCB7XG4gIGhlaWdodDogMTQwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/cart/cart.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/cart/cart.page.ts ***!
  \*****************************************/
/*! exports provided: CartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPage", function() { return CartPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_util_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../service/util.service */ "./src/app/service/util.service.ts");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");






var CartPage = /** @class */ (function () {
    function CartPage(ntrl, api, util, translate) {
        var _this = this;
        this.ntrl = ntrl;
        this.api = api;
        this.util = util;
        this.translate = translate;
        this.avtiveSegment = "About";
        this.icons = {};
        this.data = {};
        this.cartData = [];
        this.totalPrice = 0;
        this.totalItem = 0;
        this.chaneAddress = false;
        this.dirService = new google.maps.DirectionsService();
        this.dirRenderer = new google.maps.DirectionsRenderer({ suppressMarkers: true });
        this.geocoder = new google.maps.Geocoder();
        this.currency = this.api.currency;
        this.data = this.api.cartData;
        this.data.cartData = this.api.cartData.cartDetail;
        this.data.discount = 0;
        this.data.saving = this.data.discount;
        this.data.cartData.forEach(function (element) {
            _this.totalItem += element.price * element.qty;
        });
        this.data.toPay =
            this.totalItem +
                this.data.rastaurant_charge +
                this.data.delivery_charge -
                this.data.discount;
        this.api
            .getDataWithToken("getAddress/" + localStorage.getItem("isaddress"))
            .subscribe(function (res) {
            if (res.success) {
                _this.data.Deafult_address = res.data;
                _this.userlat = res.data.lat;
                _this.userlang = res.data.lang;
            }
        });
    }
    CartPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        if (this.api.promocode.id) {
            this.countDiscount();
        }
        if (this.chaneAddress) {
            this.util.startLoad();
            this.api
                .getDataWithToken("getAddress/" + localStorage.getItem("isaddress"))
                .subscribe(function (res) {
                if (res.success) {
                    _this.data.Deafult_address = res.data;
                }
            });
        }
    };
    CartPage.prototype.initMap = function () {
        var _this = this;
        this.FindAddress =
            this.data.Deafult_address.soc_name +
                " " +
                this.data.Deafult_address.street +
                " " +
                this.data.Deafult_address.city +
                " " +
                this.data.Deafult_address.zipcode;
        this.geocoder.geocode({ address: this.FindAddress }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                var styledMapType = new google.maps.StyledMapType([
                    {
                        elementType: "geometry",
                        stylers: [
                            {
                                color: "#f5f5f5",
                            },
                        ],
                    },
                    {
                        elementType: "labels.icon",
                        stylers: [
                            {
                                visibility: "off",
                            },
                        ],
                    },
                    {
                        elementType: "labels.text.fill",
                        stylers: [
                            {
                                color: "#616161",
                            },
                        ],
                    },
                    {
                        elementType: "labels.text.stroke",
                        stylers: [
                            {
                                color: "#f5f5f5",
                            },
                        ],
                    },
                    {
                        featureType: "administrative.land_parcel",
                        elementType: "labels.text.fill",
                        stylers: [
                            {
                                color: "#bdbdbd",
                            },
                        ],
                    },
                    {
                        featureType: "poi",
                        elementType: "geometry",
                        stylers: [
                            {
                                color: "#eeeeee",
                            },
                        ],
                    },
                    {
                        featureType: "poi",
                        elementType: "labels.text.fill",
                        stylers: [
                            {
                                color: "#757575",
                            },
                        ],
                    },
                    {
                        featureType: "poi.park",
                        elementType: "geometry",
                        stylers: [
                            {
                                color: "#e5e5e5",
                            },
                        ],
                    },
                    {
                        featureType: "poi.park",
                        elementType: "labels.text.fill",
                        stylers: [
                            {
                                color: "#9e9e9e",
                            },
                        ],
                    },
                    {
                        featureType: "road",
                        elementType: "geometry",
                        stylers: [
                            {
                                color: "#ffffff",
                            },
                        ],
                    },
                    {
                        featureType: "road.arterial",
                        elementType: "labels.text.fill",
                        stylers: [
                            {
                                color: "#757575",
                            },
                        ],
                    },
                    {
                        featureType: "road.highway",
                        elementType: "geometry",
                        stylers: [
                            {
                                color: "#dadada",
                            },
                        ],
                    },
                    {
                        featureType: "road.highway",
                        elementType: "labels.text.fill",
                        stylers: [
                            {
                                color: "#616161",
                            },
                        ],
                    },
                    {
                        featureType: "road.local",
                        elementType: "labels.text.fill",
                        stylers: [
                            {
                                color: "#9e9e9e",
                            },
                        ],
                    },
                    {
                        featureType: "transit.line",
                        elementType: "geometry",
                        stylers: [
                            {
                                color: "#e5e5e5",
                            },
                        ],
                    },
                    {
                        featureType: "transit.station",
                        elementType: "geometry",
                        stylers: [
                            {
                                color: "#eeeeee",
                            },
                        ],
                    },
                    {
                        featureType: "water",
                        elementType: "geometry",
                        stylers: [
                            {
                                color: "#c9c9c9",
                            },
                        ],
                    },
                    {
                        featureType: "water",
                        elementType: "labels.text.fill",
                        stylers: [
                            {
                                color: "#9e9e9e",
                            },
                        ],
                    },
                ], { name: "Styled Map" });
                var mapoption = {
                    center: new google.maps.LatLng(results[0].geometry.location.lat(), results[0].geometry.location.lng()),
                    zoom: 15,
                    streetViewControl: false,
                    disableDefaultUI: true,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                };
                _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapoption);
                _this.map.mapTypes.set("styled_map", styledMapType);
                _this.map.setMapTypeId("styled_map");
                var icons = {
                    start: new google.maps.MarkerImage("../../../assets/image/map_start.png", new google.maps.Size(40, 33), new google.maps.Point(0, 0), new google.maps.Point(0, 10)),
                    end: new google.maps.MarkerImage("../../../assets/image/map.png", new google.maps.Size(40, 33), new google.maps.Point(0, 0), new google.maps.Point(0, 10)),
                };
                var a = results[0].geometry.location.lat() +
                    "," +
                    results[0].geometry.location.lng();
                var b = _this.data.latitude + "," + _this.data.longitude;
                _this.dirRenderer.setMap(_this.map);
                var request = {
                    origin: a,
                    destination: b,
                    travelMode: google.maps.TravelMode.DRIVING,
                };
                _this.dirService.route(request, function (result, status) {
                    if (status == google.maps.DirectionsStatus.OK) {
                        var leg = result.routes[0].legs[0];
                        _this.icons.start = new google.maps.Marker({
                            position: leg.start_location,
                            map: _this.map,
                            icon: icons.start,
                            title: "title",
                        });
                        _this.icons.end = new google.maps.Marker({
                            position: leg.end_location,
                            map: _this.map,
                            icon: icons.end,
                            title: "title",
                        });
                        _this.dirRenderer.setDirections(result);
                    }
                });
            }
        });
    };
    CartPage.prototype.ngOnInit = function () {
        var _this = this;
        if (this.avtiveSegment == "About")
            setTimeout(function () { return _this.initMap(); }, 1000);
    };
    CartPage.prototype.payment_method = function () {
        var _this = this;
        if (this.data.cartData.length) {
            this.radius = this.distance(this.userlat, this.userlang, this.data.latitude, this.data.longitude, "k");
            if (this.radius <= this.data.radius) {
                this.ntrl.navigateForward(["payment-method"]);
            }
            else {
                this.translate.get("toasts").subscribe(function (val) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        this.util.presentToast(val.order_is_out_range);
                        return [2 /*return*/];
                    });
                }); });
            }
        }
        else {
            this.api.promocode = {};
            this.ntrl.back();
        }
    };
    CartPage.prototype.back = function () {
        this.ntrl.back();
    };
    CartPage.prototype.addtocart = function (item) {
        item.qty++;
        this.totalItem += item.price;
        item.total = item.price * item.qty;
        if (this.api.promocode.discount) {
            this.countDiscount();
        }
        this.data.toPay =
            this.totalItem +
                this.data.rastaurant_charge +
                this.data.delivery_charge -
                this.data.discount;
    };
    CartPage.prototype.minusQty = function (item) {
        if (item.qty != 1) {
            item.qty--;
            this.totalItem -= item.price;
            this.data.toPay =
                this.totalItem +
                    this.data.rastaurant_charge +
                    this.data.delivery_charge -
                    this.data.discount;
        }
        else {
            var equalIndex_1;
            var equalType_1;
            this.data.cartData.forEach(function (element, ind) {
                if (element.id == item.id && element.type == item.type) {
                    equalIndex_1 = ind;
                    equalType_1 = item.type;
                }
            });
            if (equalIndex_1 >= 0 && equalType_1) {
                if (item.qty == 1) {
                    item.qty = 0;
                    this.data.cartData.splice(equalIndex_1, 1);
                    this.totalItem -= item.price;
                    item.total = item.qty * item.price;
                    this.data.toPay =
                        this.totalItem +
                            this.data.rastaurant_charge +
                            this.data.delivery_charge -
                            this.data.discount;
                }
                else {
                    this.data.cartData[equalIndex_1] = item;
                    item.total = item.qty * item.price;
                    this.data.toPay =
                        this.totalItem +
                            this.data.rastaurant_charge +
                            this.data.delivery_charge -
                            this.data.discount;
                }
            }
        }
        if (this.api.promocode.discount) {
            this.countDiscount();
        }
    };
    CartPage.prototype.getCartdata = function () { };
    CartPage.prototype.ionViewWillLeave = function () {
        this.api.cartData.cartDetail = this.data.cartData;
        if (this.data.cartData.length) {
        }
        else {
            this.api.promocode = {};
        }
    };
    CartPage.prototype.applyCoupon = function () {
        if (this.data.cartData.length) {
            this.ntrl.navigateForward("/promocode/" + this.api.detailId);
        }
        else {
            this.ntrl.back();
        }
    };
    CartPage.prototype.countDiscount = function () {
        console.log("promocde", this.api.promocode);
        if (this.api.promocode.type == "amount") {
            this.data.discount = this.api.promocode.discount;
            this.data.saving = this.data.discount;
            this.data.toPay =
                this.totalItem +
                    this.data.rastaurant_charge +
                    this.data.delivery_charge -
                    this.data.discount;
        }
        else {
            this.data.discount = this.totalItem * this.api.promocode.discount;
            this.data.discount = this.data.discount / 100;
            this.data.saving = this.data.discount;
            this.data.toPay =
                this.totalItem +
                    this.data.rastaurant_charge +
                    this.data.delivery_charge -
                    this.data.discount;
        }
    };
    CartPage.prototype.change_Address = function () {
        this.chaneAddress = true;
        this.ntrl.navigateForward("/select-address");
    };
    CartPage.prototype.distance = function (lat1, lon1, lat2, lon2, unit) {
        if (lat1 == lat2 && lon1 == lon2) {
            return 0;
        }
        else {
            var radlat1 = (Math.PI * lat1) / 180;
            var radlat2 = (Math.PI * lat2) / 180;
            var theta = lon1 - lon2;
            var radtheta = (Math.PI * theta) / 180;
            var dist = Math.sin(radlat1) * Math.sin(radlat2) +
                Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
            if (dist > 1) {
                dist = 1;
            }
            dist = Math.acos(dist);
            dist = (dist * 180) / Math.PI;
            dist = dist * 60 * 1.1515;
            if (unit == "K") {
                dist = dist * 1.609344;
            }
            if (unit == "N") {
                dist = dist * 0.8684;
            }
            return dist;
        }
    };
    CartPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: _service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
        { type: _service_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])("map", { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])
    ], CartPage.prototype, "mapElement", void 0);
    CartPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-cart",
            template: __webpack_require__(/*! raw-loader!./cart.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/cart/cart.page.html"),
            styles: [__webpack_require__(/*! ./cart.page.scss */ "./src/app/pages/cart/cart.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            _service_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])
    ], CartPage);
    return CartPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-cart-cart-module-es5.js.map