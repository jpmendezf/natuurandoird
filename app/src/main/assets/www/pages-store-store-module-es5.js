(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-store-store-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/store/store.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/store/store.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar mode=\"md\">\n    <ion-buttons slot=\"start\">\n      <!-- <ion-button (click)=\"back()\">\n        <ion-icon src=\"../../../assets/icon-image/close_b.svg\">\n        </ion-icon>\n      </ion-button> -->\n      <ion-back-button defaultHref=\"home\" icon=\"../../../assets/icon-image/close_b.svg\" text=\"\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{\"store_detail.store\" | translate}} </ion-title>\n  </ion-toolbar>\n  <div class=\"search_div\">\n    <ion-searchbar placeholder=\"Search for Restaurant and dishes\" clearIcon=\"string\" [(ngModel)]=\"term\"></ion-searchbar>\n  </div>\n\n</ion-header>\n\n<ion-content class=\"ion-padding-vertical\">\n  <div class=\"store_div\">\n    <div class=\"product_div\" *ngFor=\"let item of Store |filter:term\" (click)=\"storeDetail(item?.id)\">\n      <!-- <div class=\"new_div\" *ngIf=\"item?.isnew\">\n        <p class=\"new_p\">New</p>\n      </div> -->\n      <div class=\"img_div\">\n        <img [src]=\"item?.imagePath + item?.image\">\n      </div>\n      <h3 class=\"name\">{{item?.name}}</h3>\n      <!-- <div class=\"organic_div\">\n        <p class=\"or_lbl\">Organic</p>\n        <div class=\"dot_div\">\n        </div>\n        <p class=\"or_lbl\">Groceries</p>\n      </div> -->\n      <p class=\"away_lbl\">\n        <ion-icon src=\"../../../assets/icon-image/gro_pin.svg\"></ion-icon>\n        {{item?.away}}\n      </p>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/store/store.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/store/store.module.ts ***!
  \*********************************************/
/*! exports provided: StorePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorePageModule", function() { return StorePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var _store_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store.page */ "./src/app/pages/store/store.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");









var routes = [
    {
        path: "",
        component: _store_page__WEBPACK_IMPORTED_MODULE_7__["StorePage"],
    },
];
var StorePageModule = /** @class */ (function () {
    function StorePageModule() {
    }
    StorePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_6__["Ng2SearchPipeModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            ],
            declarations: [_store_page__WEBPACK_IMPORTED_MODULE_7__["StorePage"]],
        })
    ], StorePageModule);
    return StorePageModule;
}());



/***/ }),

/***/ "./src/app/pages/store/store.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/store/store.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-title {\n  font-family: \"fivo-regular\";\n  text-transform: uppercase;\n}\nion-header ion-back-button {\n  --icon-font-size: 16px;\n}\nion-header .search_div {\n  padding: 0px 8px;\n}\nion-content .store_div {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  padding: 0px 16px 10px 16px;\n  -webkit-box-flex: 1;\n          flex: 1 1;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\nion-content .store_div .product_div {\n  width: 48%;\n  border-radius: 5px;\n  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);\n  padding: 10px 7px;\n  margin-bottom: 20px;\n  position: relative;\n}\nion-content .store_div .product_div .new_div {\n  width: 51px;\n  height: 17px;\n  background-color: var(--green-color);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  border-radius: 2px;\n}\nion-content .store_div .product_div .new_div .new_p {\n  font-size: 8px;\n  color: var(--ion-color-white);\n  font-family: \"Poppins-Medium\";\n  margin: 0;\n}\nion-content .store_div .product_div .img_div {\n  text-align: center;\n  padding: 45px 0px 20px 0px;\n}\nion-content .store_div .product_div .img_div img {\n  max-width: 115px;\n  height: 60px;\n  width: 100%;\n  -o-object-fit: scale-down;\n     object-fit: scale-down;\n}\nion-content .store_div .product_div .name {\n  font-size: 18px;\n  color: var(--light-black-color);\n  font-family: \"fivo-regular\";\n  margin-top: 0;\n  margin-bottom: 5px;\n  text-align: center;\n}\nion-content .store_div .product_div .organic_div {\n  padding: 5px 0px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\nion-content .store_div .product_div .organic_div .dot_div {\n  height: 5px;\n  width: 5px;\n  border-radius: 50%;\n  background-color: var(--green-color);\n  margin: 0px 5px;\n}\nion-content .store_div .product_div .organic_div .or_lbl {\n  font-size: 14px;\n  color: var(--border-color);\n  font-family: \"fivo-regular\";\n  margin: 0;\n}\nion-content .store_div .product_div .away_lbl {\n  font-size: 12px;\n  font-family: \"fivo-regular\";\n  margin: 0;\n  color: var(--border-color);\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3RvcmUvQzpcXFVzZXJzXFxvc2lhblxcRGVza3RvcFxcTkFUVVVUMi4wL3NyY1xcYXBwXFxwYWdlc1xcc3RvcmVcXHN0b3JlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc3RvcmUvc3RvcmUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsMkJBQUE7RUFDQSx5QkFBQTtBQ0FKO0FERUU7RUFDRSxzQkFBQTtBQ0FKO0FERUU7RUFDRSxnQkFBQTtBQ0FKO0FESUU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtVQUFBLFNBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0FDREo7QURFSTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLCtDQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQU47QURDTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQ0NSO0FEQVE7RUFDRSxjQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLFNBQUE7QUNFVjtBRENNO0VBQ0Usa0JBQUE7RUFDQSwwQkFBQTtBQ0NSO0FEQVE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtBQ0VWO0FERU07RUFDRSxlQUFBO0VBQ0EsK0JBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDQVI7QURFTTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0FSO0FEQ1E7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSxlQUFBO0FDQ1Y7QURDUTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsU0FBQTtBQ0NWO0FERU07RUFDRSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSxTQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtBQ0FSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc3RvcmUvc3RvcmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XHJcbiAgaW9uLXRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcImZpdm8tcmVndWxhclwiO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB9XHJcbiAgaW9uLWJhY2stYnV0dG9uIHtcclxuICAgIC0taWNvbi1mb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG4gIC5zZWFyY2hfZGl2IHtcclxuICAgIHBhZGRpbmc6IDBweCA4cHg7XHJcbiAgfVxyXG59XHJcbmlvbi1jb250ZW50IHtcclxuICAuc3RvcmVfZGl2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBwYWRkaW5nOiAwcHggMTZweCAxMHB4IDE2cHg7XHJcbiAgICBmbGV4OiAxIDE7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAucHJvZHVjdF9kaXYge1xyXG4gICAgICB3aWR0aDogNDglO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDdweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAubmV3X2RpdiB7XHJcbiAgICAgICAgd2lkdGg6IDUxcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxN3B4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuLWNvbG9yKTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgLm5ld19wIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogOHB4O1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zLU1lZGl1bVwiO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuaW1nX2RpdiB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDQ1cHggMHB4IDIwcHggMHB4O1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDExNXB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBvYmplY3QtZml0OiBzY2FsZS1kb3duO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLm5hbWUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBjb2xvcjogdmFyKC0tbGlnaHQtYmxhY2stY29sb3IpO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcImZpdm8tcmVndWxhclwiO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICAub3JnYW5pY19kaXYge1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIC5kb3RfZGl2IHtcclxuICAgICAgICAgIGhlaWdodDogNXB4O1xyXG4gICAgICAgICAgd2lkdGg6IDVweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuLWNvbG9yKTtcclxuICAgICAgICAgIG1hcmdpbjogMHB4IDVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm9yX2xibCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0tYm9yZGVyLWNvbG9yKTtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcImZpdm8tcmVndWxhclwiO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuYXdheV9sYmwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBmb250LWZhbWlseTogXCJmaXZvLXJlZ3VsYXJcIjtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWJvcmRlci1jb2xvcik7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImlvbi1oZWFkZXIgaW9uLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiZml2by1yZWd1bGFyXCI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5pb24taGVhZGVyIGlvbi1iYWNrLWJ1dHRvbiB7XG4gIC0taWNvbi1mb250LXNpemU6IDE2cHg7XG59XG5pb24taGVhZGVyIC5zZWFyY2hfZGl2IHtcbiAgcGFkZGluZzogMHB4IDhweDtcbn1cblxuaW9uLWNvbnRlbnQgLnN0b3JlX2RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgcGFkZGluZzogMHB4IDE2cHggMTBweCAxNnB4O1xuICBmbGV4OiAxIDE7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbmlvbi1jb250ZW50IC5zdG9yZV9kaXYgLnByb2R1Y3RfZGl2IHtcbiAgd2lkdGg6IDQ4JTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgcGFkZGluZzogMTBweCA3cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbmlvbi1jb250ZW50IC5zdG9yZV9kaXYgLnByb2R1Y3RfZGl2IC5uZXdfZGl2IHtcbiAgd2lkdGg6IDUxcHg7XG4gIGhlaWdodDogMTdweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4tY29sb3IpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgdG9wOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG5pb24tY29udGVudCAuc3RvcmVfZGl2IC5wcm9kdWN0X2RpdiAubmV3X2RpdiAubmV3X3Age1xuICBmb250LXNpemU6IDhweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtTWVkaXVtXCI7XG4gIG1hcmdpbjogMDtcbn1cbmlvbi1jb250ZW50IC5zdG9yZV9kaXYgLnByb2R1Y3RfZGl2IC5pbWdfZGl2IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA0NXB4IDBweCAyMHB4IDBweDtcbn1cbmlvbi1jb250ZW50IC5zdG9yZV9kaXYgLnByb2R1Y3RfZGl2IC5pbWdfZGl2IGltZyB7XG4gIG1heC13aWR0aDogMTE1cHg7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG9iamVjdC1maXQ6IHNjYWxlLWRvd247XG59XG5pb24tY29udGVudCAuc3RvcmVfZGl2IC5wcm9kdWN0X2RpdiAubmFtZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWJsYWNrLWNvbG9yKTtcbiAgZm9udC1mYW1pbHk6IFwiZml2by1yZWd1bGFyXCI7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgLnN0b3JlX2RpdiAucHJvZHVjdF9kaXYgLm9yZ2FuaWNfZGl2IHtcbiAgcGFkZGluZzogNXB4IDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbmlvbi1jb250ZW50IC5zdG9yZV9kaXYgLnByb2R1Y3RfZGl2IC5vcmdhbmljX2RpdiAuZG90X2RpdiB7XG4gIGhlaWdodDogNXB4O1xuICB3aWR0aDogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuLWNvbG9yKTtcbiAgbWFyZ2luOiAwcHggNXB4O1xufVxuaW9uLWNvbnRlbnQgLnN0b3JlX2RpdiAucHJvZHVjdF9kaXYgLm9yZ2FuaWNfZGl2IC5vcl9sYmwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS1ib3JkZXItY29sb3IpO1xuICBmb250LWZhbWlseTogXCJmaXZvLXJlZ3VsYXJcIjtcbiAgbWFyZ2luOiAwO1xufVxuaW9uLWNvbnRlbnQgLnN0b3JlX2RpdiAucHJvZHVjdF9kaXYgLmF3YXlfbGJsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogXCJmaXZvLXJlZ3VsYXJcIjtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/store/store.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/store/store.page.ts ***!
  \*******************************************/
/*! exports provided: StorePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorePage", function() { return StorePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_grocery_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../service/grocery.service */ "./src/app/service/grocery.service.ts");
/* harmony import */ var _service_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../service/util.service */ "./src/app/service/util.service.ts");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");






var StorePage = /** @class */ (function () {
    function StorePage(nav, api, util, gpi) {
        var _this = this;
        this.nav = nav;
        this.api = api;
        this.util = util;
        this.gpi = gpi;
        this.Store = [];
        this.err = {};
        this.term = "";
        this.userAddress = {};
        if (this.gpi.catId) {
            this.util.startLoad();
            this.api.getDataWithToken("groceryShop/" + this.gpi.catId).subscribe(function (res) {
                if (res.success) {
                    // this.util.dismissLoader();
                    _this.Store = res.data;
                    _this.gpi.catId = undefined;
                    _this.api
                        .getDataWithToken("getAddress/" + localStorage.getItem("isaddress"))
                        .subscribe(function (res) {
                        if (res.success) {
                            _this.userAddress = res.data;
                            _this.util.dismissLoader();
                            _this.Store.forEach(function (element) {
                                element.away = Number(_this.distance(_this.userAddress.lat, _this.userAddress.lang, element.latitude, element.longitude, "K").toFixed(2));
                            });
                        }
                    }, function (err) {
                        _this.err = err;
                        _this.util.dismissLoader();
                    });
                }
            }, function (err) {
                _this.err = err;
                _this.util.dismissLoader();
            });
        }
        else {
            this.util.startLoad();
            this.api.getDataWithToken("groceryShop").subscribe(function (res) {
                if (res.success) {
                    // this.util.dismissLoader();
                    _this.Store = res.data.shop;
                    _this.api
                        .getDataWithToken("getAddress/" + localStorage.getItem("isaddress"))
                        .subscribe(function (res) {
                        if (res.success) {
                            _this.userAddress = res.data;
                            _this.util.dismissLoader();
                            _this.Store.forEach(function (element) {
                                element.away = Number(_this.distance(_this.userAddress.lat, _this.userAddress.lang, element.latitude, element.longitude, "K").toFixed(2));
                            });
                        }
                    }, function (err) {
                        _this.err = err;
                        _this.util.dismissLoader();
                    });
                }
            }, function (err) {
                _this.err = err;
                _this.util.dismissLoader();
            });
        }
    }
    StorePage.prototype.ngOnInit = function () { };
    StorePage.prototype.storeDetail = function (id) {
        this.gpi.storeID = id;
        this.nav.navigateForward("store-detail");
    };
    StorePage.prototype.distance = function (lat1, lon1, lat2, lon2, unit) {
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
    StorePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: _service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
        { type: _service_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] },
        { type: _service_grocery_service__WEBPACK_IMPORTED_MODULE_1__["GroceryService"] }
    ]; };
    StorePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: "app-store",
            template: __webpack_require__(/*! raw-loader!./store.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/store/store.page.html"),
            styles: [__webpack_require__(/*! ./store.page.scss */ "./src/app/pages/store/store.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _service_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"],
            _service_grocery_service__WEBPACK_IMPORTED_MODULE_1__["GroceryService"]])
    ], StorePage);
    return StorePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-store-store-module-es5.js.map