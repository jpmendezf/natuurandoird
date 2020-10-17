(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-product-detail-product-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/product-detail/product-detail.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/product-detail/product-detail.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n\n    <ion-toolbar mode=\"md\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"home\" icon=\"ios-arrow-back\" text=\"\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>{{data?.name}}</ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-button (click)=\"cart()\">\n                <ion-icon src=\"../../../assets/icon-image/cart_ic.svg\">\n                </ion-icon>\n            </ion-button>\n\n        </ion-buttons>\n    </ion-toolbar>\n\n\n</ion-header>\n<ion-content>\n    <div class=\"ion-padding\">\n        <div class=\"detail_div\">\n            <div class=\"img_div\">\n                <img [src]=\"data?.imagePath + data?.image\">\n            </div>\n            <h3 class=\"name\">{{data?.name}}</h3>\n            <p class=\"qty\">{{data?.weight}}<span class=\"price ion-float-end\">{{currency}}{{data?.sell_price}}</span></p>\n            <p class=\"product_detail\">\n                {{data?.description}}\n            </p>\n        </div>\n    </div>\n\n    <!-- <p *ngIf=\"data?.photos?.length==0\" class=\"no_data_p\">\n          {{\"profile_page.no_data\" | translate}}</p> -->\n    <ion-row class=\"hr\">\n        <ion-col size=\"12\">\n\n        </ion-col>\n    </ion-row>\n    <div class=\"review_divison\">\n        <h3 class=\"h3\">{{\"store_detail.review\" | translate }}</h3>\n        <ion-item class=\"review_item\" *ngFor=\"let item of review\" lines=\"none\">\n            <ion-avatar slot=\"start\">\n                <img [src]=\"item?.customer?.imagePath + item?.customer?.image\" />\n            </ion-avatar>\n            <ion-label>\n                <ion-icon [class]=\"item.rate >= 5 ? 'first_icon hydrated ion-float-right' :\n                                                 'last_icon hydrated ion-float-right'\" name=\"star\"></ion-icon>\n                <ion-icon [class]=\"item.rate >= 4 ? 'first_icon hydrated ion-float-right' :\n                                                 'last_icon hydrated ion-float-right'\" name=\"star\"></ion-icon>\n                <ion-icon [class]=\"item.rate >= 3 ? 'first_icon hydrated ion-float-right' :\n                                                 'last_icon hydrated ion-float-right'\" name=\"star\"></ion-icon>\n                <ion-icon [class]=\"item.rate >= 2 ? 'first_icon hydrated ion-float-right' :\n                                                 'last_icon hydrated ion-float-right'\" name=\"star\"></ion-icon>\n                <ion-icon [class]=\"item.rate >= 1 ? 'first_icon hydrated ion-float-right' :\n                                                 'last_icon hydrated ion-float-right'\" name=\"star\"></ion-icon>\n                <h3 class=\"name\">{{data?.shopName}}</h3>\n\n                <h3 class=\"ago\">{{item?.created_at}}</h3>\n                <p class=\"detail\">{{item?.message}}</p>\n            </ion-label>\n        </ion-item>\n    </div>\n</ion-content>\n<ion-footer>\n    <div class=\"cart_div ion-margin\">\n        <h3 class=\"cart_lbl\"> {{\"store_detail.add_in_cart\" | translate }}</h3>\n        <div class=\"qty_div\">\n            <ion-button class=\"add_btn trans-btn\" (click)=\"remove(data)\">\n                <ion-icon src=\"../../../assets/icon-image/minus-sign.svg\"></ion-icon>\n            </ion-button>\n            <p class=\"qty_p\">\n                {{data.qty}}\n            </p>\n            <ion-button class=\"add_btn trans-btn\" (click)=\"AddCart(data)\">\n                <ion-icon src=\"../../../assets/icon-image/plus-signs.svg\"></ion-icon>\n            </ion-button>\n        </div>\n    </div>\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/product-detail/product-detail.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/product-detail/product-detail.module.ts ***!
  \***************************************************************/
/*! exports provided: ProductDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailPageModule", function() { return ProductDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _product_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-detail.page */ "./src/app/pages/product-detail/product-detail.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");








var routes = [
    {
        path: '',
        component: _product_detail_page__WEBPACK_IMPORTED_MODULE_6__["ProductDetailPage"]
    }
];
var ProductDetailPageModule = /** @class */ (function () {
    function ProductDetailPageModule() {
    }
    ProductDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_product_detail_page__WEBPACK_IMPORTED_MODULE_6__["ProductDetailPage"]]
        })
    ], ProductDetailPageModule);
    return ProductDetailPageModule;
}());



/***/ }),

/***/ "./src/app/pages/product-detail/product-detail.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/product-detail/product-detail.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar ion-title {\n  font-family: \"fivo-regular\";\n  text-transform: uppercase;\n}\nion-header ion-toolbar ion-back-button {\n  color: var(--ion-color-green);\n}\nion-content .hr {\n  background-color: #F1F4F6;\n  height: 20px;\n  margin-top: 30px;\n}\nion-content .review_divison {\n  margin-top: 20px;\n}\nion-content .review_divison .h3 {\n  font-size: 17px;\n  color: #29335C;\n  font-family: fivo-regular;\n  margin-left: 18px;\n  font-weight: bold;\n  margin-bottom: 13px;\n}\nion-content .review_div {\n  margin-bottom: 15px;\n}\nion-content .profile_div {\n  margin-bottom: 15px;\n}\nion-content .review_item ion-avatar {\n  align-self: baseline;\n}\nion-content .review_item ion-avatar img {\n  border: solid 3px var(--ion-color-white);\n  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.6);\n}\nion-content .review_item ion-label {\n  white-space: normal;\n}\nion-content .review_item ion-label .name {\n  font-size: 12px;\n  font-family: \"Poppins-Medium\";\n  color: var(--ion-color-darkBlue);\n  margin: 0;\n}\nion-content .review_item ion-label .ago {\n  font-size: 10px;\n  font-family: \"Poppins-Medium\";\n  color: var(--ion-color-darkgray);\n  margin-top: 3px;\n  margin-bottom: 3px;\n}\nion-content .review_item ion-label .detail {\n  font-size: 10px;\n  font-family: \"Poppins-Regular\";\n  color: var(--ion-color-darkgray);\n  margin: 0;\n  line-height: 15px;\n}\nion-content .review_item ion-label .first_icon {\n  color: var(--ion-color-green);\n}\nion-content .review_item ion-label .last_icon {\n  color: var(--ion-star-color);\n}\nion-content .photo_div {\n  margin: 0px 15px;\n}\nion-content .photo_div img {\n  border-radius: 5px;\n  margin-bottom: 6px;\n}\nion-content .profile_div .profile_item {\n  margin: 0 20px;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  border-bottom: dashed 1px var(--ion-border-color);\n}\nion-content .profile_div .profile_item .tittle {\n  font-size: 16px;\n  font-family: \"Poppins-Medium\";\n  color: var(--ion-color-green);\n}\nion-content .profile_div .profile_item .data {\n  font-size: 14px;\n  font-family: \"Poppins-Medium\";\n  color: var(--ion-color-darkBlue);\n}\nion-content .profile_div .save_btn {\n  --background: var(--ion-color-green);\n  margin-left: 16px;\n  margin-top: 16px;\n}\nion-content .detail_div .img_div {\n  text-align: center;\n}\nion-content .detail_div .img_div img {\n  width: 200px;\n  height: 170px;\n}\nion-content .detail_div .name {\n  font-size: 22px;\n  color: var(--ion-color-darkBlue);\n  font-family: \"fivo-medium\";\n  margin: 0;\n}\nion-content .detail_div .qty {\n  color: var(--border-color);\n  font-family: \"fivo-regular\";\n  font-size: 16px;\n  margin-top: 10px;\n  margin-bottom: 20px;\n}\nion-content .detail_div .qty .price {\n  color: var(--green-color);\n  font-size: 20px;\n}\nion-content .detail_div .product_detail {\n  font-size: 16px;\n  font-family: \"fivo-regular\";\n  margin: 0;\n  color: var(--border-color);\n}\nion-footer .cart_div {\n  height: 50px;\n  background-color: var(--green-color);\n  border-radius: 5px;\n  display: -webkit-box;\n  display: flex;\n  padding: 0px 16px;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\nion-footer .cart_div .add_btn {\n  height: 17px;\n  width: 18px;\n  --background: var(--cart_btn);\n  --background-activated: var(--cart_btn);\n}\nion-footer .cart_div .add_btn ion-icon {\n  height: 9px;\n  width: 9px;\n}\nion-footer .cart_div .qty_p {\n  font-size: 17px;\n  color: var(--ion-color-white);\n  font-family: \"fivo-regular\";\n  margin: 0 5px;\n  padding-top: 2px;\n}\nion-footer .cart_div .qty_div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\nion-footer .cart_div .cart_lbl {\n  font-size: 18px;\n  color: var(--ion-color-white);\n  font-family: \"fivo-regular\";\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdC1kZXRhaWwvQzpcXFVzZXJzXFxvc2lhblxcRGVza3RvcFxcTkFUVVVUMi4wL3NyY1xcYXBwXFxwYWdlc1xccHJvZHVjdC1kZXRhaWxcXHByb2R1Y3QtZGV0YWlsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcHJvZHVjdC1kZXRhaWwvcHJvZHVjdC1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVRO0VBQ0ksMkJBQUE7RUFDQSx5QkFBQTtBQ0RaO0FER1E7RUFDSSw2QkFBQTtBQ0RaO0FET0k7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0pSO0FETUk7RUFDSSxnQkFBQTtBQ0pSO0FES1E7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDSFo7QURNSTtFQUNJLG1CQUFBO0FDSlI7QURNSTtFQUNJLG1CQUFBO0FDSlI7QURPUTtFQUNJLG9CQUFBO0FDTFo7QURNWTtFQUNJLHdDQUFBO0VBQ0EsOENBQUE7QUNKaEI7QURPUTtFQUNJLG1CQUFBO0FDTFo7QURNWTtFQUNJLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0VBQ0EsU0FBQTtBQ0poQjtBRE1ZO0VBQ0ksZUFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNKaEI7QURNWTtFQUNJLGVBQUE7RUFDQSw4QkFBQTtFQUNBLGdDQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0FDSmhCO0FETVk7RUFDSSw2QkFBQTtBQ0poQjtBRE1ZO0VBQ0ksNEJBQUE7QUNKaEI7QURRSTtFQUNJLGdCQUFBO0FDTlI7QURPUTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUNMWjtBRFNRO0VBQ0ksY0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpREFBQTtBQ1BaO0FEUVk7RUFDSSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtBQ05oQjtBRFFZO0VBQ0ksZUFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7QUNOaEI7QURTUTtFQUNJLG9DQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ1BaO0FEV1E7RUFDSSxrQkFBQTtBQ1RaO0FEVVk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQ1JoQjtBRFdRO0VBQ0ksZUFBQTtFQUNBLGdDQUFBO0VBQ0EsMEJBQUE7RUFDQSxTQUFBO0FDVFo7QURXUTtFQUNJLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ1RaO0FEVVk7RUFDSSx5QkFBQTtFQUNBLGVBQUE7QUNSaEI7QURXUTtFQUNJLGVBQUE7RUFDQSwyQkFBQTtFQUNBLFNBQUE7RUFDQSwwQkFBQTtBQ1RaO0FEZUk7RUFDSSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7QUNaUjtBRGFRO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLHVDQUFBO0FDWFo7QURhWTtFQUNJLFdBQUE7RUFDQSxVQUFBO0FDWGhCO0FEY1E7RUFDSSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ1paO0FEY1E7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDWlo7QURjUTtFQUNJLGVBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsU0FBQTtBQ1paIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZHVjdC1kZXRhaWwvcHJvZHVjdC1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XHJcbiAgICBpb24tdG9vbGJhciB7XHJcbiAgICAgICAgaW9uLXRpdGxlIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiZml2by1yZWd1bGFyXCI7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1iYWNrLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZ3JlZW4pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLmhyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjFGNEY2O1xyXG4gICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgfVxyXG4gICAgLnJldmlld19kaXZpc29uIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIC5oMyB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICAgICAgY29sb3I6ICMyOTMzNUM7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBmaXZvLXJlZ3VsYXI7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxOHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTNweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAucmV2aWV3X2RpdiB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIH1cclxuICAgIC5wcm9maWxlX2RpdiB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIH1cclxuICAgIC5yZXZpZXdfaXRlbSB7XHJcbiAgICAgICAgaW9uLWF2YXRhciB7XHJcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGJhc2VsaW5lO1xyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAzcHggdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICAgICAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya0JsdWUpO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5hZ28ge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2dyYXkpO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5kZXRhaWwge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1SZWd1bGFyXCI7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtncmF5KTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5maXJzdF9pY29uIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZ3JlZW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5sYXN0X2ljb24ge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1zdGFyLWNvbG9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5waG90b19kaXYge1xyXG4gICAgICAgIG1hcmdpbjogMHB4IDE1cHg7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnByb2ZpbGVfZGl2IHtcclxuICAgICAgICAucHJvZmlsZV9pdGVtIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDIwcHg7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IGRhc2hlZCAxcHggdmFyKC0taW9uLWJvcmRlci1jb2xvcik7XHJcbiAgICAgICAgICAgIC50aXR0bGUge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZ3JlZW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5kYXRhIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtTWVkaXVtXCI7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtCbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuc2F2ZV9idG4ge1xyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1ncmVlbik7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5kZXRhaWxfZGl2IHtcclxuICAgICAgICAuaW1nX2RpdiB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTcwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya0JsdWUpO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJmaXZvLW1lZGl1bVwiO1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5xdHkge1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tYm9yZGVyLWNvbG9yKTtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiZml2by1yZWd1bGFyXCI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgLnByaWNlIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1ncmVlbi1jb2xvcik7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnByb2R1Y3RfZGV0YWlsIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJmaXZvLXJlZ3VsYXJcIjtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tYm9yZGVyLWNvbG9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1mb290ZXIge1xyXG4gICAgLmNhcnRfZGl2IHtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4tY29sb3IpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAxNnB4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIC5hZGRfYnRuIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxN3B4O1xyXG4gICAgICAgICAgICB3aWR0aDogMThweDtcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1jYXJ0X2J0bik7XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHZhcigtLWNhcnRfYnRuKTtcclxuICAgICAgICAgICAgLy8gLS1ib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogOXB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDlweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAucXR5X3Age1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJmaXZvLXJlZ3VsYXJcIjtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDVweDtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnF0eV9kaXYge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FydF9sYmwge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJmaXZvLXJlZ3VsYXJcIjtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiZml2by1yZWd1bGFyXCI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi1iYWNrLWJ1dHRvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZ3JlZW4pO1xufVxuXG5pb24tY29udGVudCAuaHIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjFGNEY2O1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5pb24tY29udGVudCAucmV2aWV3X2Rpdmlzb24ge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuaW9uLWNvbnRlbnQgLnJldmlld19kaXZpc29uIC5oMyB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6ICMyOTMzNUM7XG4gIGZvbnQtZmFtaWx5OiBmaXZvLXJlZ3VsYXI7XG4gIG1hcmdpbi1sZWZ0OiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogMTNweDtcbn1cbmlvbi1jb250ZW50IC5yZXZpZXdfZGl2IHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbmlvbi1jb250ZW50IC5wcm9maWxlX2RpdiB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5pb24tY29udGVudCAucmV2aWV3X2l0ZW0gaW9uLWF2YXRhciB7XG4gIGFsaWduLXNlbGY6IGJhc2VsaW5lO1xufVxuaW9uLWNvbnRlbnQgLnJldmlld19pdGVtIGlvbi1hdmF0YXIgaW1nIHtcbiAgYm9yZGVyOiBzb2xpZCAzcHggdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC42KTtcbn1cbmlvbi1jb250ZW50IC5yZXZpZXdfaXRlbSBpb24tbGFiZWwge1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuaW9uLWNvbnRlbnQgLnJldmlld19pdGVtIGlvbi1sYWJlbCAubmFtZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrQmx1ZSk7XG4gIG1hcmdpbjogMDtcbn1cbmlvbi1jb250ZW50IC5yZXZpZXdfaXRlbSBpb24tbGFiZWwgLmFnbyB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrZ3JheSk7XG4gIG1hcmdpbi10b3A6IDNweDtcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xufVxuaW9uLWNvbnRlbnQgLnJldmlld19pdGVtIGlvbi1sYWJlbCAuZGV0YWlsIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zLVJlZ3VsYXJcIjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrZ3JheSk7XG4gIG1hcmdpbjogMDtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG59XG5pb24tY29udGVudCAucmV2aWV3X2l0ZW0gaW9uLWxhYmVsIC5maXJzdF9pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1ncmVlbik7XG59XG5pb24tY29udGVudCAucmV2aWV3X2l0ZW0gaW9uLWxhYmVsIC5sYXN0X2ljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLXN0YXItY29sb3IpO1xufVxuaW9uLWNvbnRlbnQgLnBob3RvX2RpdiB7XG4gIG1hcmdpbjogMHB4IDE1cHg7XG59XG5pb24tY29udGVudCAucGhvdG9fZGl2IGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xufVxuaW9uLWNvbnRlbnQgLnByb2ZpbGVfZGl2IC5wcm9maWxlX2l0ZW0ge1xuICBtYXJnaW46IDAgMjBweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgYm9yZGVyLWJvdHRvbTogZGFzaGVkIDFweCB2YXIoLS1pb24tYm9yZGVyLWNvbG9yKTtcbn1cbmlvbi1jb250ZW50IC5wcm9maWxlX2RpdiAucHJvZmlsZV9pdGVtIC50aXR0bGUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtTWVkaXVtXCI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZ3JlZW4pO1xufVxuaW9uLWNvbnRlbnQgLnByb2ZpbGVfZGl2IC5wcm9maWxlX2l0ZW0gLmRhdGEge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtTWVkaXVtXCI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya0JsdWUpO1xufVxuaW9uLWNvbnRlbnQgLnByb2ZpbGVfZGl2IC5zYXZlX2J0biB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWdyZWVuKTtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG5pb24tY29udGVudCAuZGV0YWlsX2RpdiAuaW1nX2RpdiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmlvbi1jb250ZW50IC5kZXRhaWxfZGl2IC5pbWdfZGl2IGltZyB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAxNzBweDtcbn1cbmlvbi1jb250ZW50IC5kZXRhaWxfZGl2IC5uYW1lIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtCbHVlKTtcbiAgZm9udC1mYW1pbHk6IFwiZml2by1tZWRpdW1cIjtcbiAgbWFyZ2luOiAwO1xufVxuaW9uLWNvbnRlbnQgLmRldGFpbF9kaXYgLnF0eSB7XG4gIGNvbG9yOiB2YXIoLS1ib3JkZXItY29sb3IpO1xuICBmb250LWZhbWlseTogXCJmaXZvLXJlZ3VsYXJcIjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuaW9uLWNvbnRlbnQgLmRldGFpbF9kaXYgLnF0eSAucHJpY2Uge1xuICBjb2xvcjogdmFyKC0tZ3JlZW4tY29sb3IpO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5pb24tY29udGVudCAuZGV0YWlsX2RpdiAucHJvZHVjdF9kZXRhaWwge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcImZpdm8tcmVndWxhclwiO1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS1ib3JkZXItY29sb3IpO1xufVxuXG5pb24tZm9vdGVyIC5jYXJ0X2RpdiB7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4tY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDBweCAxNnB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5pb24tZm9vdGVyIC5jYXJ0X2RpdiAuYWRkX2J0biB7XG4gIGhlaWdodDogMTdweDtcbiAgd2lkdGg6IDE4cHg7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tY2FydF9idG4pO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB2YXIoLS1jYXJ0X2J0bik7XG59XG5pb24tZm9vdGVyIC5jYXJ0X2RpdiAuYWRkX2J0biBpb24taWNvbiB7XG4gIGhlaWdodDogOXB4O1xuICB3aWR0aDogOXB4O1xufVxuaW9uLWZvb3RlciAuY2FydF9kaXYgLnF0eV9wIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbiAgZm9udC1mYW1pbHk6IFwiZml2by1yZWd1bGFyXCI7XG4gIG1hcmdpbjogMCA1cHg7XG4gIHBhZGRpbmctdG9wOiAycHg7XG59XG5pb24tZm9vdGVyIC5jYXJ0X2RpdiAucXR5X2RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5pb24tZm9vdGVyIC5jYXJ0X2RpdiAuY2FydF9sYmwge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuICBmb250LWZhbWlseTogXCJmaXZvLXJlZ3VsYXJcIjtcbiAgbWFyZ2luOiAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/product-detail/product-detail.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/product-detail/product-detail.page.ts ***!
  \*************************************************************/
/*! exports provided: ProductDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailPage", function() { return ProductDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_grocery_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../service/grocery.service */ "./src/app/service/grocery.service.ts");
/* harmony import */ var _service_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../service/util.service */ "./src/app/service/util.service.ts");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var ProductDetailPage = /** @class */ (function () {
    function ProductDetailPage(api, util, gpi, nav) {
        this.api = api;
        this.util = util;
        this.gpi = gpi;
        this.nav = nav;
        this.data = {};
        this.review = [];
        this.cartData = [];
        this.dataa = {};
        this.currency = this.api.currency;
    }
    ProductDetailPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.util.startLoad();
        this.cartData = JSON.parse(localStorage.getItem("store-detail"));
        this.api.getDataWithToken("groceryItemDetail/" + this.gpi.itemId).subscribe(function (res) {
            if (res.success) {
                _this.util.dismissLoader();
                _this.data = res.data;
                _this.review = res.data.review;
                var fCart = _this.cartData.find(function (x) { return x.id == _this.data.id; });
                if (fCart && fCart.qty > 0) {
                    _this.data.qty = fCart.qty;
                    console.log("from if", fCart);
                }
                else {
                    console.log("from else");
                    _this.data.qty = 0;
                }
            }
        }, function (err) {
            _this.util.dismissLoader();
        });
    };
    ProductDetailPage.prototype.AddCart = function (item) {
        item.qty = item.qty + 1;
        item.total = item.qty * item.sell_price;
        this.cartData = JSON.parse(localStorage.getItem("store-detail")) || [];
        var fCart = this.cartData.find(function (x) { return x.id == item.id; });
        if (fCart) {
            fCart.qty = item.qty;
        }
        else {
            this.cartData.push(item);
        }
        localStorage.setItem("store-detail", JSON.stringify(this.cartData));
    };
    ProductDetailPage.prototype.remove = function (item) {
        var equalIndex;
        if (item.qty == 0)
            return;
        item.qty = item.qty - 1;
        if (item.qty == 0) {
            var i = this.cartData.findIndex(function (x) { return x.id == item.id; });
            this.cartData.splice(i, 1);
        }
        else {
            item.total = item.qty * item.sell_price;
            this.cartData = JSON.parse(localStorage.getItem("store-detail")) || [];
            var fCart = this.cartData.find(function (x) { return x.id == item.id; });
            if (fCart) {
                fCart.qty = item.qty;
            }
        }
        localStorage.setItem("store-detail", JSON.stringify(this.cartData));
    };
    ProductDetailPage.prototype.ngOnInit = function () { };
    ProductDetailPage.prototype.cart = function () {
        if (this.cartData.length == 0) {
            this.util.presentToast("cart is empty");
        }
        else {
            this.gpi.cartData = this.cartData;
            this.nav.navigateForward("/grocery-cart");
        }
    };
    ProductDetailPage.ctorParameters = function () { return [
        { type: _service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
        { type: _service_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] },
        { type: _service_grocery_service__WEBPACK_IMPORTED_MODULE_1__["GroceryService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] }
    ]; };
    ProductDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: "app-product-detail",
            template: __webpack_require__(/*! raw-loader!./product-detail.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/product-detail/product-detail.page.html"),
            styles: [__webpack_require__(/*! ./product-detail.page.scss */ "./src/app/pages/product-detail/product-detail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _service_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"],
            _service_grocery_service__WEBPACK_IMPORTED_MODULE_1__["GroceryService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]])
    ], ProductDetailPage);
    return ProductDetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-product-detail-product-detail-module-es5.js.map