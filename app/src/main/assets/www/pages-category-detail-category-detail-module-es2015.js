(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-category-detail-category-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/category-detail/category-detail.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/category-detail/category-detail.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n\n  <ion-toolbar mode=\"md\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\" icon=\"ios-arrow-back\" text=\"\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{data[0]?.categoryName}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"cart()\">\n        <ion-icon src=\"../../../assets/icon-image/cart_ic.svg\">\n        </ion-icon>\n      </ion-button>\n\n    </ion-buttons>\n  </ion-toolbar>\n\n  <div class=\"search_div\">\n    <ion-searchbar placeholder='{{\"store_detail.searchPlace\" | translate}}' clearIcon=\"string\" [(ngModel)]=\"term\">\n    </ion-searchbar>\n  </div>\n</ion-header>\n<ion-content class=\"ion-padding-bottom\">\n  <ng-container *ngFor=\"let item of data  | filter:term\">\n    <h3 class=\"main_lbl\">{{item?.name}}\n      <!-- <ion-button class=\"trans-btn more_btn\" (click)=\"viewMore()\">View more\n      </ion-button> -->\n    </h3>\n    <div class=\"trending_div\">\n      <div class=\"product_div\" *ngFor=\"let it of item?.items\">\n        <div class=\"img_div\">\n          <img [src]=\"it?.imagePath + it?.image\">\n\n\n        </div>\n        <h3 class=\"name\">{{it?.name}}</h3>\n        <p class=\"qunty\">{{it.weight}}</p>\n        <div class=\"btn_div\">\n          <div class=\"qty_div\">\n            <ion-button class=\"add_btn trans-btn\" (click)=\"remove(it)\">\n              <ion-icon src=\"../../../assets/icon-image/minus-sign.svg\">\n\n              </ion-icon>\n            </ion-button>\n            <p class=\"qty_p\">\n              {{it?.qty}}\n            </p>\n            <ion-button class=\"add_btn trans-btn\" (click)=\"AddCart(it)\">\n              <ion-icon src=\"../../../assets/icon-image/plus-signs.svg\">\n\n              </ion-icon>\n            </ion-button>\n          </div>\n          <p class=\"price\">{{currency}}{{it?.sell_price}}</p>\n\n        </div>\n      </div>\n    </div>\n  </ng-container>\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/category-detail/category-detail.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/category-detail/category-detail.module.ts ***!
  \*****************************************************************/
/*! exports provided: CategoryDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryDetailPageModule", function() { return CategoryDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _category_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./category-detail.page */ "./src/app/pages/category-detail/category-detail.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.js");









const routes = [
    {
        path: '',
        component: _category_detail_page__WEBPACK_IMPORTED_MODULE_6__["CategoryDetailPage"]
    }
];
let CategoryDetailPageModule = class CategoryDetailPageModule {
};
CategoryDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__["Ng2SearchPipeModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_category_detail_page__WEBPACK_IMPORTED_MODULE_6__["CategoryDetailPage"]]
    })
], CategoryDetailPageModule);



/***/ }),

/***/ "./src/app/pages/category-detail/category-detail.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/category-detail/category-detail.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar ion-title {\n  font-family: \"fivo-regular\";\n  text-transform: uppercase;\n  padding: 0 80px 1px;\n}\nion-header ion-toolbar ion-back-button {\n  color: var(--ion-color-green);\n}\nion-header .search_div {\n  margin: 0px 8px;\n}\nion-content .main_lbl {\n  margin-top: 10px;\n  font-size: 18px;\n  color: var(--light-black-color);\n  font-family: \"fivo-regular\";\n  padding: 0px 16px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n}\nion-content .main_lbl .more_btn {\n  font-size: 14px;\n  text-transform: capitalize;\n  --color: var(--green-color);\n  height: 20px;\n}\nion-content .trending_div {\n  display: -webkit-box;\n  overflow-x: auto;\n  padding: 10px 0px 10px 16px;\n}\nion-content .trending_div .product_div {\n  width: 145px;\n  border-radius: 5px;\n  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);\n  padding: 10px 7px;\n  margin-right: 16px;\n}\nion-content .trending_div .product_div .img_div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  padding: 10px 0px 20px 0px;\n}\nion-content .trending_div .product_div .img_div img {\n  height: 80px;\n  width: 80px;\n}\nion-content .trending_div .product_div .name {\n  font-size: 15px;\n  font-family: \"fivo-regular\";\n  color: var(--ion-color-darkBlue);\n  margin: 0;\n}\nion-content .trending_div .product_div .qunty {\n  font-size: 12px;\n  color: var(--border-color);\n  font-family: \"fivo-regular\";\n  margin: 4px 0px;\n}\nion-content .trending_div .product_div .price {\n  font-size: 14px;\n  color: var(--green-color);\n  font-family: \"fivo-regular\";\n  margin: 0;\n}\nion-content .trending_div .btn_div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\nion-content .trending_div .btn_div .add_btn {\n  height: 15px;\n  width: 15px;\n  --background: var(--ion-color-darkBlue);\n  --background-activated: var(--ion-color-darkBlue);\n}\nion-content .trending_div .btn_div .add_btn ion-icon {\n  height: 9px;\n  width: 9px;\n}\nion-content .trending_div .btn_div .qty_p {\n  font-size: 14px;\n  color: var(--border-color);\n  font-family: \"fivo-regular\";\n  margin: 0 5px;\n  padding-top: 2px;\n}\nion-content .trending_div .btn_div .qty_div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\nion-content .trending_div::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2F0ZWdvcnktZGV0YWlsL0M6XFxVc2Vyc1xcb3NpYW5cXERlc2t0b3BcXE5BVFVVVDIuMC9zcmNcXGFwcFxccGFnZXNcXGNhdGVnb3J5LWRldGFpbFxcY2F0ZWdvcnktZGV0YWlsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2F0ZWdvcnktZGV0YWlsL2NhdGVnb3J5LWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDRSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUNETjtBREdJO0VBQ0UsNkJBQUE7QUNETjtBRElFO0VBQ0UsZUFBQTtBQ0ZKO0FETUU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0hKO0FESUk7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7QUNGTjtBREtFO0VBQ0Usb0JBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0FDSEo7QURJSTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLCtDQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0ZOO0FER007RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsMEJBQUE7QUNEUjtBREVRO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUNBVjtBREdNO0VBQ0UsZUFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxTQUFBO0FDRFI7QURHTTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtBQ0RSO0FER007RUFDRSxlQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUNBLFNBQUE7QUNEUjtBRElJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7QUNGTjtBREdNO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSx1Q0FBQTtFQUNBLGlEQUFBO0FDRFI7QURHUTtFQUNFLFdBQUE7RUFDQSxVQUFBO0FDRFY7QURJTTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDRlI7QURJTTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNGUjtBRE1FO0VBQ0UsYUFBQTtBQ0pKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2F0ZWdvcnktZGV0YWlsL2NhdGVnb3J5LWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcclxuICBpb24tdG9vbGJhciB7XHJcbiAgICBpb24tdGl0bGUge1xyXG4gICAgICBmb250LWZhbWlseTogXCJmaXZvLXJlZ3VsYXJcIjtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgcGFkZGluZzogMCA4MHB4IDFweDtcclxuICAgIH1cclxuICAgIGlvbi1iYWNrLWJ1dHRvbiB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZ3JlZW4pO1xyXG4gICAgfVxyXG4gIH1cclxuICAuc2VhcmNoX2RpdiB7XHJcbiAgICBtYXJnaW46IDBweCA4cHg7XHJcbiAgfVxyXG59XHJcbmlvbi1jb250ZW50IHtcclxuICAubWFpbl9sYmwge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1ibGFjay1jb2xvcik7XHJcbiAgICBmb250LWZhbWlseTogXCJmaXZvLXJlZ3VsYXJcIjtcclxuICAgIHBhZGRpbmc6IDBweCAxNnB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAubW9yZV9idG4ge1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAtLWNvbG9yOiB2YXIoLS1ncmVlbi1jb2xvcik7XHJcbiAgICAgIGhlaWdodDogMjBweDtcclxuICAgIH1cclxuICB9XHJcbiAgLnRyZW5kaW5nX2RpdiB7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxMHB4IDBweCAxMHB4IDE2cHg7XHJcbiAgICAucHJvZHVjdF9kaXYge1xyXG4gICAgICB3aWR0aDogMTQ1cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggN3B4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbiAgICAgIC5pbWdfZGl2IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMHB4IDIwcHggMHB4O1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLm5hbWUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBmb250LWZhbWlseTogXCJmaXZvLXJlZ3VsYXJcIjtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtCbHVlKTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgIH1cclxuICAgICAgLnF1bnR5IHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWJvcmRlci1jb2xvcik7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiZml2by1yZWd1bGFyXCI7XHJcbiAgICAgICAgbWFyZ2luOiA0cHggMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5wcmljZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1ncmVlbi1jb2xvcik7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiZml2by1yZWd1bGFyXCI7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuYnRuX2RpdiB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgLmFkZF9idG4ge1xyXG4gICAgICAgIGhlaWdodDogMTVweDtcclxuICAgICAgICB3aWR0aDogMTVweDtcclxuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYXJrQmx1ZSk7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdmFyKC0taW9uLWNvbG9yLWRhcmtCbHVlKTtcclxuICAgICAgICAvLyAtLWJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDlweDtcclxuICAgICAgICAgIHdpZHRoOiA5cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5xdHlfcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1ib3JkZXItY29sb3IpO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcImZpdm8tcmVndWxhclwiO1xyXG4gICAgICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDJweDtcclxuICAgICAgfVxyXG4gICAgICAucXR5X2RpdiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC50cmVuZGluZ19kaXY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcbiIsImlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiZml2by1yZWd1bGFyXCI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBhZGRpbmc6IDAgODBweCAxcHg7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi1iYWNrLWJ1dHRvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZ3JlZW4pO1xufVxuaW9uLWhlYWRlciAuc2VhcmNoX2RpdiB7XG4gIG1hcmdpbjogMHB4IDhweDtcbn1cblxuaW9uLWNvbnRlbnQgLm1haW5fbGJsIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogdmFyKC0tbGlnaHQtYmxhY2stY29sb3IpO1xuICBmb250LWZhbWlseTogXCJmaXZvLXJlZ3VsYXJcIjtcbiAgcGFkZGluZzogMHB4IDE2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbmlvbi1jb250ZW50IC5tYWluX2xibCAubW9yZV9idG4ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAtLWNvbG9yOiB2YXIoLS1ncmVlbi1jb2xvcik7XG4gIGhlaWdodDogMjBweDtcbn1cbmlvbi1jb250ZW50IC50cmVuZGluZ19kaXYge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgcGFkZGluZzogMTBweCAwcHggMTBweCAxNnB4O1xufVxuaW9uLWNvbnRlbnQgLnRyZW5kaW5nX2RpdiAucHJvZHVjdF9kaXYge1xuICB3aWR0aDogMTQ1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIHBhZGRpbmc6IDEwcHggN3B4O1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG59XG5pb24tY29udGVudCAudHJlbmRpbmdfZGl2IC5wcm9kdWN0X2RpdiAuaW1nX2RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4IDBweCAyMHB4IDBweDtcbn1cbmlvbi1jb250ZW50IC50cmVuZGluZ19kaXYgLnByb2R1Y3RfZGl2IC5pbWdfZGl2IGltZyB7XG4gIGhlaWdodDogODBweDtcbiAgd2lkdGg6IDgwcHg7XG59XG5pb24tY29udGVudCAudHJlbmRpbmdfZGl2IC5wcm9kdWN0X2RpdiAubmFtZSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC1mYW1pbHk6IFwiZml2by1yZWd1bGFyXCI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya0JsdWUpO1xuICBtYXJnaW46IDA7XG59XG5pb24tY29udGVudCAudHJlbmRpbmdfZGl2IC5wcm9kdWN0X2RpdiAucXVudHkge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiB2YXIoLS1ib3JkZXItY29sb3IpO1xuICBmb250LWZhbWlseTogXCJmaXZvLXJlZ3VsYXJcIjtcbiAgbWFyZ2luOiA0cHggMHB4O1xufVxuaW9uLWNvbnRlbnQgLnRyZW5kaW5nX2RpdiAucHJvZHVjdF9kaXYgLnByaWNlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0tZ3JlZW4tY29sb3IpO1xuICBmb250LWZhbWlseTogXCJmaXZvLXJlZ3VsYXJcIjtcbiAgbWFyZ2luOiAwO1xufVxuaW9uLWNvbnRlbnQgLnRyZW5kaW5nX2RpdiAuYnRuX2RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbmlvbi1jb250ZW50IC50cmVuZGluZ19kaXYgLmJ0bl9kaXYgLmFkZF9idG4ge1xuICBoZWlnaHQ6IDE1cHg7XG4gIHdpZHRoOiAxNXB4O1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYXJrQmx1ZSk7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHZhcigtLWlvbi1jb2xvci1kYXJrQmx1ZSk7XG59XG5pb24tY29udGVudCAudHJlbmRpbmdfZGl2IC5idG5fZGl2IC5hZGRfYnRuIGlvbi1pY29uIHtcbiAgaGVpZ2h0OiA5cHg7XG4gIHdpZHRoOiA5cHg7XG59XG5pb24tY29udGVudCAudHJlbmRpbmdfZGl2IC5idG5fZGl2IC5xdHlfcCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHZhcigtLWJvcmRlci1jb2xvcik7XG4gIGZvbnQtZmFtaWx5OiBcImZpdm8tcmVndWxhclwiO1xuICBtYXJnaW46IDAgNXB4O1xuICBwYWRkaW5nLXRvcDogMnB4O1xufVxuaW9uLWNvbnRlbnQgLnRyZW5kaW5nX2RpdiAuYnRuX2RpdiAucXR5X2RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5pb24tY29udGVudCAudHJlbmRpbmdfZGl2Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/category-detail/category-detail.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/category-detail/category-detail.page.ts ***!
  \***************************************************************/
/*! exports provided: CategoryDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryDetailPage", function() { return CategoryDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_grocery_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../service/grocery.service */ "./src/app/service/grocery.service.ts");
/* harmony import */ var _service_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../service/util.service */ "./src/app/service/util.service.ts");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






let CategoryDetailPage = class CategoryDetailPage {
    constructor(api, util, gpi, nav) {
        this.api = api;
        this.util = util;
        this.gpi = gpi;
        this.nav = nav;
        this.trending = [
            {
                name: "Real Fruit Juice ,Litchi, (Pack of 2)",
                img: "../../../assets/image/real_juice.png",
                qty: "1Ltr",
                price: "$15.50",
            },
            {
                name: "Real Fruit Juice ,Litchi, (Pack of 2)",
                img: "../../../assets/image/real_juice.png",
                qty: "1Ltr",
                price: "$15.50",
            },
            {
                name: "Real Fruit Juice ,Litchi, (Pack of 2)",
                img: "../../../assets/image/real_juice.png",
                qty: "1Ltr",
                price: "$15.50",
            },
        ];
        this.data = [];
        this.err = {};
        this.cartData = [];
        this.term = "";
        this.currency = this.api.currency;
    }
    ionViewWillEnter() {
        this.util.startLoad();
        this.api.getDataWithToken("grocerySubCategory/" + this.gpi.catId).subscribe((res) => {
            this.util.dismissLoader();
            this.data = res.data;
            this.cartData = this.cartData =
                JSON.parse(localStorage.getItem("store-detail")) || [];
            this.getdata();
        }, (err) => {
            this.util.dismissLoader();
        });
    }
    ngOnInit() { }
    getdata() {
        if (this.cartData.length > 0) {
            this.data.forEach((el1) => {
                const fCart = this.cartData.find((x) => x.id == el1.id);
                if (fCart) {
                    el1.qty = fCart.qty;
                }
                else {
                    el1.qty = 0;
                }
            });
        }
        else {
            this.data.product.forEach((el1) => {
                el1.qty = 0;
            });
        }
        if (this.cartData.length > 0) {
            if (this.data) {
                this.data.forEach((el1) => {
                    el1.items.forEach((item) => {
                        item.qty = 0;
                        const fCart = this.cartData.find((x) => x.id == item.id);
                        if (fCart) {
                            item.qty = fCart.qty;
                        }
                    });
                });
            }
        }
        else {
            this.data.forEach((el1) => {
                el1.items.forEach((item) => {
                    item.qty = 0;
                });
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
CategoryDetailPage.ctorParameters = () => [
    { type: _service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _service_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] },
    { type: _service_grocery_service__WEBPACK_IMPORTED_MODULE_1__["GroceryService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] }
];
CategoryDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: "app-category-detail",
        template: __webpack_require__(/*! raw-loader!./category-detail.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/category-detail/category-detail.page.html"),
        styles: [__webpack_require__(/*! ./category-detail.page.scss */ "./src/app/pages/category-detail/category-detail.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
        _service_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"],
        _service_grocery_service__WEBPACK_IMPORTED_MODULE_1__["GroceryService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]])
], CategoryDetailPage);



/***/ })

}]);
//# sourceMappingURL=pages-category-detail-category-detail-module-es2015.js.map