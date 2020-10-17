(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-product-product-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/product/product.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/product/product.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar mode=\"md\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\" icon=\"ios-arrow-back\" text=\"\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{\"store_detail.product\" | translate }}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"cart()\">\n        <ion-icon src=\"../../../assets/icon-image/cart_ic.svg\"> </ion-icon>\n      </ion-button>\n      <ion-button (click)=\"presentPopover($event)\">\n        <ion-icon src=\"../../../assets/icon-image/equalizer.svg\"> </ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"store_div\">\n    <div class=\"product_div\" *ngFor=\"let item of Store\">\n      <div class=\"img_div\" (click)=\"storeDetail(item?.id)\">\n        <img [src]=\"item?.imagePath + item?.image\" />\n      </div>\n      <h3 class=\"name\">\n        {{item?.name |slice:0:20}}\n        <span *ngIf=\"item?.name?.length >20\">..</span>\n      </h3>\n      <p class=\"qunty\">{{item?.weight}}</p>\n      <div class=\"btn_div\">\n        <div class=\"qty_div\">\n          <ion-button class=\"add_btn trans-btn\" (click)=\"remove(item)\">\n            <ion-icon src=\"../../../assets/icon-image/minus-sign.svg\">\n            </ion-icon>\n          </ion-button>\n          <p class=\"qty_p\">\n            {{item?.qty}}\n          </p>\n          <ion-button class=\"add_btn trans-btn\" (click)=\"AddCart(item)\">\n            <ion-icon src=\"../../../assets/icon-image/plus-signs.svg\">\n            </ion-icon>\n          </ion-button>\n        </div>\n        <p class=\"price\">{{currency}}{{item?.sell_price}}</p>\n      </div>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/product/product.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/product/product.module.ts ***!
  \*************************************************/
/*! exports provided: ProductPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPageModule", function() { return ProductPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _product_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product.page */ "./src/app/pages/product/product.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








const routes = [
    {
        path: '',
        component: _product_page__WEBPACK_IMPORTED_MODULE_6__["ProductPage"]
    }
];
let ProductPageModule = class ProductPageModule {
};
ProductPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_product_page__WEBPACK_IMPORTED_MODULE_6__["ProductPage"]]
    })
], ProductPageModule);



/***/ }),

/***/ "./src/app/pages/product/product.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/product/product.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar ion-title {\n  font-family: \"fivo-regular\";\n  text-transform: uppercase;\n}\nion-header ion-toolbar ion-back-button {\n  color: var(--ion-color-green);\n}\nion-content .store_div {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  padding: 10px 16px 10px 16px;\n  -webkit-box-flex: 1;\n          flex: 1 1;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\nion-content .store_div .product_div {\n  width: 48%;\n  border-radius: 5px;\n  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);\n  padding: 10px 7px;\n  margin-bottom: 20px;\n  position: relative;\n}\nion-content .store_div .product_div .img_div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  padding: 5px 0px 10px 0px;\n}\nion-content .store_div .product_div .img_div img {\n  height: 100px;\n  width: 80px;\n}\nion-content .store_div .product_div .name {\n  font-size: 15px;\n  font-family: \"fivo-regular\";\n  color: var(--ion-color-darkBlue);\n  margin: 0;\n}\nion-content .store_div .product_div .qunty {\n  font-size: 12px;\n  color: var(--border-color);\n  font-family: \"fivo-regular\";\n  margin: 4px 0px;\n}\nion-content .store_div .product_div .price {\n  font-size: 14px;\n  color: var(--green-color);\n  font-family: \"fivo-regular\";\n  margin: 0;\n}\nion-content .store_div .product_div .btn_div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\nion-content .store_div .product_div .btn_div .add_btn {\n  height: 15px;\n  width: 15px;\n  --background: var(--ion-color-darkBlue);\n  --background-activated: var(--ion-color-darkBlue);\n}\nion-content .store_div .product_div .btn_div .add_btn ion-icon {\n  height: 9px;\n  width: 9px;\n}\nion-content .store_div .product_div .btn_div .qty_p {\n  font-size: 14px;\n  color: var(--border-color);\n  font-family: \"fivo-regular\";\n  margin: 0 5px;\n  padding-top: 2px;\n}\nion-content .store_div .product_div .btn_div .qty_p span {\n  margin-left: 5px;\n}\nion-content .store_div .product_div .btn_div .qty_p ion-icon {\n  color: var(--ion-color-yellow);\n  margin-right: 3px;\n}\nion-content .store_div .product_div .btn_div .qty_div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdC9DOlxcVXNlcnNcXG9zaWFuXFxEZXNrdG9wXFxOQVRVVVQyLjAvc3JjXFxhcHBcXHBhZ2VzXFxwcm9kdWN0XFxwcm9kdWN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcHJvZHVjdC9wcm9kdWN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFUTtFQUNJLDJCQUFBO0VBQ0EseUJBQUE7QUNEWjtBREdRO0VBQ0ksNkJBQUE7QUNEWjtBRE9JO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7VUFBQSxTQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtBQ0pSO0FES1E7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0haO0FESVk7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7QUNGaEI7QURHZ0I7RUFDSSxhQUFBO0VBQ0EsV0FBQTtBQ0RwQjtBRElZO0VBQ0ksZUFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxTQUFBO0FDRmhCO0FESVk7RUFDSSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7QUNGaEI7QURJWTtFQUNJLGVBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsU0FBQTtBQ0ZoQjtBRElZO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7QUNGaEI7QURHZ0I7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHVDQUFBO0VBQ0EsaURBQUE7QUNEcEI7QURHb0I7RUFDSSxXQUFBO0VBQ0EsVUFBQTtBQ0R4QjtBRElnQjtFQUNJLGVBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDRnBCO0FER29CO0VBQ0ksZ0JBQUE7QUNEeEI7QURHb0I7RUFDSSw4QkFBQTtFQUNBLGlCQUFBO0FDRHhCO0FESWdCO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0ZwQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3QvcHJvZHVjdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcclxuICAgIGlvbi10b29sYmFyIHtcclxuICAgICAgICBpb24tdGl0bGUge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJmaXZvLXJlZ3VsYXJcIjtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWJhY2stYnV0dG9uIHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1ncmVlbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgICAuc3RvcmVfZGl2IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDE2cHggMTBweCAxNnB4O1xyXG4gICAgICAgIGZsZXg6IDEgMTtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgLnByb2R1Y3RfZGl2IHtcclxuICAgICAgICAgICAgd2lkdGg6IDQ4JTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCA3cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgLmltZ19kaXYge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDBweCAxMHB4IDBweDtcclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubmFtZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJmaXZvLXJlZ3VsYXJcIjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya0JsdWUpO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5xdW50eSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tYm9yZGVyLWNvbG9yKTtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcImZpdm8tcmVndWxhclwiO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiA0cHggMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcmljZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tZ3JlZW4tY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiZml2by1yZWd1bGFyXCI7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJ0bl9kaXYge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICAuYWRkX2J0biB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhcmtCbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB2YXIoLS1pb24tY29sb3ItZGFya0JsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIC0tYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnF0eV9wIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWJvcmRlci1jb2xvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiZml2by1yZWd1bGFyXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDVweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3IteWVsbG93KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnF0eV9kaXYge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiZml2by1yZWd1bGFyXCI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi1iYWNrLWJ1dHRvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZ3JlZW4pO1xufVxuXG5pb24tY29udGVudCAuc3RvcmVfZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBwYWRkaW5nOiAxMHB4IDE2cHggMTBweCAxNnB4O1xuICBmbGV4OiAxIDE7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbmlvbi1jb250ZW50IC5zdG9yZV9kaXYgLnByb2R1Y3RfZGl2IHtcbiAgd2lkdGg6IDQ4JTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgcGFkZGluZzogMTBweCA3cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbmlvbi1jb250ZW50IC5zdG9yZV9kaXYgLnByb2R1Y3RfZGl2IC5pbWdfZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDVweCAwcHggMTBweCAwcHg7XG59XG5pb24tY29udGVudCAuc3RvcmVfZGl2IC5wcm9kdWN0X2RpdiAuaW1nX2RpdiBpbWcge1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogODBweDtcbn1cbmlvbi1jb250ZW50IC5zdG9yZV9kaXYgLnByb2R1Y3RfZGl2IC5uYW1lIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LWZhbWlseTogXCJmaXZvLXJlZ3VsYXJcIjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrQmx1ZSk7XG4gIG1hcmdpbjogMDtcbn1cbmlvbi1jb250ZW50IC5zdG9yZV9kaXYgLnByb2R1Y3RfZGl2IC5xdW50eSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHZhcigtLWJvcmRlci1jb2xvcik7XG4gIGZvbnQtZmFtaWx5OiBcImZpdm8tcmVndWxhclwiO1xuICBtYXJnaW46IDRweCAwcHg7XG59XG5pb24tY29udGVudCAuc3RvcmVfZGl2IC5wcm9kdWN0X2RpdiAucHJpY2Uge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS1ncmVlbi1jb2xvcik7XG4gIGZvbnQtZmFtaWx5OiBcImZpdm8tcmVndWxhclwiO1xuICBtYXJnaW46IDA7XG59XG5pb24tY29udGVudCAuc3RvcmVfZGl2IC5wcm9kdWN0X2RpdiAuYnRuX2RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbmlvbi1jb250ZW50IC5zdG9yZV9kaXYgLnByb2R1Y3RfZGl2IC5idG5fZGl2IC5hZGRfYnRuIHtcbiAgaGVpZ2h0OiAxNXB4O1xuICB3aWR0aDogMTVweDtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFya0JsdWUpO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB2YXIoLS1pb24tY29sb3ItZGFya0JsdWUpO1xufVxuaW9uLWNvbnRlbnQgLnN0b3JlX2RpdiAucHJvZHVjdF9kaXYgLmJ0bl9kaXYgLmFkZF9idG4gaW9uLWljb24ge1xuICBoZWlnaHQ6IDlweDtcbiAgd2lkdGg6IDlweDtcbn1cbmlvbi1jb250ZW50IC5zdG9yZV9kaXYgLnByb2R1Y3RfZGl2IC5idG5fZGl2IC5xdHlfcCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHZhcigtLWJvcmRlci1jb2xvcik7XG4gIGZvbnQtZmFtaWx5OiBcImZpdm8tcmVndWxhclwiO1xuICBtYXJnaW46IDAgNXB4O1xuICBwYWRkaW5nLXRvcDogMnB4O1xufVxuaW9uLWNvbnRlbnQgLnN0b3JlX2RpdiAucHJvZHVjdF9kaXYgLmJ0bl9kaXYgLnF0eV9wIHNwYW4ge1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuaW9uLWNvbnRlbnQgLnN0b3JlX2RpdiAucHJvZHVjdF9kaXYgLmJ0bl9kaXYgLnF0eV9wIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci15ZWxsb3cpO1xuICBtYXJnaW4tcmlnaHQ6IDNweDtcbn1cbmlvbi1jb250ZW50IC5zdG9yZV9kaXYgLnByb2R1Y3RfZGl2IC5idG5fZGl2IC5xdHlfZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/product/product.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/product/product.page.ts ***!
  \***********************************************/
/*! exports provided: ProductPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPage", function() { return ProductPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_grocery_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../service/grocery.service */ "./src/app/service/grocery.service.ts");
/* harmony import */ var _service_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../service/util.service */ "./src/app/service/util.service.ts");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _product_filter_product_filter_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../product-filter/product-filter.page */ "./src/app/pages/product-filter/product-filter.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");







let ProductPage = class ProductPage {
    constructor(nav, popoverController, api, util, gpi) {
        this.nav = nav;
        this.popoverController = popoverController;
        this.api = api;
        this.util = util;
        this.gpi = gpi;
        this.Store = [];
        this.data = [];
        this.cartData = [];
        this.sortType = "lowtohigh";
        this.currency = this.api.currency;
        this.data = JSON.parse(localStorage.getItem("store-detail"));
    }
    ngOnInit() { }
    ionViewWillEnter() {
        this.util.startLoad();
        this.api.getDataWithToken("groceryItem/" + this.gpi.storeID).subscribe((res) => {
            if (res.success) {
                this.util.dismissLoader();
                this.Store = res.data;
                console.log(this.Store);
                this.cartData = this.gpi.cartData;
                this.getdata();
            }
        }, (err) => {
            this.util.dismissLoader();
        });
    }
    storeDetail(id) {
        this.gpi.itemId = id;
        this.nav.navigateForward("/product-detail");
    }
    presentPopover(ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _product_filter_product_filter_page__WEBPACK_IMPORTED_MODULE_4__["ProductFilterPage"],
                componentProps: {
                    sortType: this.sortType,
                },
                cssClass: "product_filter",
                event: ev,
                backdropDismiss: false,
                translucent: true,
            });
            popover.onWillDismiss().then((res) => {
                if (res.data) {
                    if (res.data == "hightolow") {
                        this.Store.sort((a, b) => (a.sell_price < b.sell_price ? 1 : -1));
                        this.sortType = "hightolow";
                    }
                    else {
                        this.Store.sort((a, b) => (a.sell_price > b.sell_price ? 1 : -1));
                        this.sortType = "lowtohigh";
                    }
                }
            });
            return yield popover.present();
        });
    }
    getdata() {
        if (this.gpi.cartData) {
            if (this.gpi.cartData.length >= 0) {
                if (this.Store) {
                    this.cartData =
                        JSON.parse(localStorage.getItem("store-detail")) || [];
                    this.Store.forEach((el1) => {
                        el1.qty = 0;
                        const fCart = this.cartData.find((x) => x.id == el1.id);
                        if (fCart) {
                            el1.qty = fCart.qty;
                        }
                    });
                }
            }
            else {
                this.Store.forEach((el1) => {
                    el1.qty = 0;
                });
            }
        }
        else {
            this.Store.forEach((element) => {
                element.qty = 0;
            });
        }
    }
    AddCart(item) {
        item.qty = item.qty + 1;
        item.total = item.qty * item.sell_price;
        this.cartData = JSON.parse(localStorage.getItem("store-detail")) || [];
        const fCart = this.cartData.find((x) => x.id == item.id);
        if (fCart) {
            fCart.qty = item.qty;
        }
        else {
            this.cartData.push(item);
        }
        localStorage.setItem("store-detail", JSON.stringify(this.cartData));
    }
    remove(item) {
        let equalIndex;
        if (item.qty == 0)
            return;
        item.qty = item.qty - 1;
        if (item.qty == 0) {
            const i = this.cartData.findIndex((x) => x.id == item.id);
            this.cartData.splice(i, 1);
        }
        else {
            item.total = item.qty * item.sell_price;
            this.cartData = JSON.parse(localStorage.getItem("store-detail")) || [];
            const fCart = this.cartData.find((x) => x.id == item.id);
            if (fCart) {
                fCart.qty = item.qty;
            }
        }
        localStorage.setItem("store-detail", JSON.stringify(this.cartData));
    }
    cart() {
        if (this.cartData.length == 0) {
            this.util.presentToast("cart is empty");
        }
        else {
            this.gpi.cartData = this.cartData;
            this.nav.navigateForward("/grocery-cart");
        }
    }
};
ProductPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"] },
    { type: _service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _service_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] },
    { type: _service_grocery_service__WEBPACK_IMPORTED_MODULE_1__["GroceryService"] }
];
ProductPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: "app-product",
        template: __webpack_require__(/*! raw-loader!./product.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/product/product.page.html"),
        styles: [__webpack_require__(/*! ./product.page.scss */ "./src/app/pages/product/product.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"],
        _service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
        _service_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"],
        _service_grocery_service__WEBPACK_IMPORTED_MODULE_1__["GroceryService"]])
], ProductPage);



/***/ })

}]);
//# sourceMappingURL=pages-product-product-module-es2015.js.map