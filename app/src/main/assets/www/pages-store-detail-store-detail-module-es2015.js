(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-store-detail-store-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/store-detail/store-detail.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/store-detail/store-detail.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"ion-padding-bottom\" [scrollEvents]=\"true\" (ionScroll)=\"logScrolling($event)\">\n    <div class=\"heade_div\"\n        [style.backgroundImage]=\"'url('+(data?.cover_image ?  data?.imagePath + data?.cover_image : 'http://placehold.it/200x200' )+')'\">\n        <div class=\"back_layer\">\n            <ion-header no-border>\n                <ion-toolbar mode=\"md\" [style.backgroundColor]=\"state == 1 ? '' : 'rgba(0,0,0,0.7)'\" mode=\"md\">\n\n                    <ion-buttons slot=\"end\">\n                        <ion-button (click)=\"cart()\">\n                            <ion-icon src=\"../../../assets/icon-image/white_cart.svg\"></ion-icon>\n                        </ion-button>\n                        <ion-back-button defaultHref=\"home\" icon=\"ios-arrow-back\" text=\"\"></ion-back-button>\n                    </ion-buttons>\n                    <ion-title>{{data?.name}}</ion-title>\n                </ion-toolbar>\n\n            </ion-header>\n            <div class=\"profile_div\">\n\n                <img [src]=\"data?.imagePath + data?.image\">\n                <h3 class=\"time\">{{\"store_detail.today\" | translate}}, {{data?.open_time}} -\n                    {{data?.close_time}}</h3>\n\n\n            </div>\n            <div class=\"ion-margin-horizontal\">\n                <ion-searchbar placeholder=\"{{'store_detail.searchPlace' | translate}}\" clearIcon=\"string\"\n                    [(ngModel)]=\"term\">\n                </ion-searchbar>\n            </div>\n        </div>\n    </div>\n\n    <h3 class=\"main_lbl\">{{\"store_detail.product\" | translate}}\n        <ion-button class=\"trans-btn more_btn\" (click)=\"viewMore()\">{{\"store_detail.view_more\" | translate}}\n        </ion-button>\n    </h3>\n    <div class=\"trending_div\">\n        <div class=\"product_div\" *ngFor=\"let item of data?.product | filter:term\">\n            <div class=\"img_div\" (click)=\"storeDetail(item?.id)\">\n                <img [src]=\"item?.imagePath + item?.image\">\n\n\n            </div>\n            <h3 class=\"name\">{{item?.name |slice:0:20}} <span *ngIf=\"item?.name?.length >20\">..</span></h3>\n            <p class=\"qunty vote\">{{item?.weight}}\n                <!--     {{item?.categoryName}} -->\n                <span>\n                    <ion-icon name=\"star\"></ion-icon>{{item?.rate}} {{\"store_detail.votes\" | translate}}\n                    <!-- {{'restaurant_detail_page.votes' | translate}} -->\n                </span>\n            </p>\n            <div class=\"btn_div\">\n                <div class=\"qty_div\">\n                    <ion-button class=\"add_btn trans-btn\" (click)=\"remove(item)\">\n                        <ion-icon src=\"../../../assets/icon-image/minus-sign.svg\">\n\n                        </ion-icon>\n                    </ion-button>\n                    <p class=\"qty_p\">\n                        {{item?.qty}}\n\n                    </p>\n                    <ion-button class=\"add_btn trans-btn\" (click)=\"AddCart(item)\">\n                        <ion-icon src=\"../../../assets/icon-image/plus-signs.svg\">\n\n                        </ion-icon>\n                    </ion-button>\n                </div>\n                <p class=\"price\">{{currency}}{{item?.sell_price}}</p>\n            </div>\n\n        </div>\n    </div>\n    <h3 class=\"main_lbl\">{{\"store_detail.category\" | translate}} {{data.currency}}\n    </h3>\n    <div class=\"categories_div\">\n        <div class=\"product_div\" *ngFor=\"let item of data.category | filter:term\" (click)=\"subcategory(item?.id)\">\n            <img [src]=\"item?.imagePath + item?.image\">\n            <h3 class=\"name\">{{item?.name}}</h3>\n        </div>\n    </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/store-detail/store-detail.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/store-detail/store-detail.module.ts ***!
  \***********************************************************/
/*! exports provided: StoreDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreDetailPageModule", function() { return StoreDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _store_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store-detail.page */ "./src/app/pages/store-detail/store-detail.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.js");









const routes = [
    {
        path: '',
        component: _store_detail_page__WEBPACK_IMPORTED_MODULE_6__["StoreDetailPage"]
    }
];
let StoreDetailPageModule = class StoreDetailPageModule {
};
StoreDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__["Ng2SearchPipeModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_store_detail_page__WEBPACK_IMPORTED_MODULE_6__["StoreDetailPage"]]
    })
], StoreDetailPageModule);



/***/ }),

/***/ "./src/app/pages/store-detail/store-detail.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/store-detail/store-detail.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar {\n  --background: transparent;\n  position: fixed;\n  top: 0;\n}\nion-header ion-toolbar .pro_btn {\n  height: 33px;\n}\nion-header ion-toolbar .pro_btn ion-icon {\n  height: 33px;\n  width: 33px;\n}\nion-header ion-toolbar ion-back-button {\n  color: var(--ion-color-white);\n}\nion-header ion-toolbar ion-title {\n  color: var(--ion-color-white);\n  font-family: \"fivo-regular\";\n}\nion-content .star {\n  position: relative;\n  right: 15px;\n  top: 23px;\n}\nion-content .vote {\n  font-size: 10.5px;\n  font-family: \"Poppins-Regular\";\n  color: var(--ion-color-darkgray);\n  margin: 0px;\n}\nion-content .vote span {\n  margin-left: 5px;\n}\nion-content .vote ion-icon {\n  color: var(--ion-color-yellow);\n  margin-right: 3px;\n}\nion-content .heade_div {\n  height: 300px;\n  border-radius: 0px 0px 25px 25px;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\nion-content .heade_div .back_layer {\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  border-radius: 0px 0px 20px 20px;\n  padding-top: 70px;\n}\nion-content .heade_div .profile_div {\n  text-align: center;\n}\nion-content .heade_div .profile_div .since_lbl {\n  font-size: 14px;\n  font-family: \"fivo-regular\";\n  margin-top: 0;\n  margin-bottom: 10px;\n  color: var(--ion-color-white);\n}\nion-content .heade_div .profile_div img {\n  height: 90px;\n  width: 90px;\n}\nion-content .heade_div .profile_div .time {\n  font-size: 14px;\n  font-family: \"fivo-regular\";\n  margin-top: 10px;\n  margin-bottom: 3px;\n  color: var(--ion-color-white);\n}\nion-content .heade_div .profile_div .policy_lbl {\n  font-size: 12px;\n  font-family: \"fivo-regular\";\n  margin-top: 5px;\n  margin-bottom: 20px;\n  color: var(--ion-color-white);\n}\nion-content .main_lbl {\n  margin-top: 10px;\n  font-size: 18px;\n  color: var(--light-black-color);\n  font-family: \"fivo-regular\";\n  padding: 0px 16px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n}\nion-content .main_lbl .more_btn {\n  font-size: 14px;\n  text-transform: capitalize;\n  --color: var(--green-color);\n  height: 20px;\n}\nion-content .coupon_div {\n  margin: 20px 16px 0px 16px;\n  height: 103px;\n  background-color: var(--light-green-color);\n  border-radius: 5px;\n  padding: 15px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\nion-content .coupon_div .sticker_div {\n  height: 62px;\n  width: 62px;\n  min-width: 62px;\n  border-radius: 50%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: var(--ion-color-white);\n}\nion-content .coupon_div .sticker_div img {\n  height: 34px;\n  width: 34px;\n}\nion-content .coupon_div .info_div {\n  padding-left: 25px;\n  width: 73%;\n}\nion-content .coupon_div .info_div .info_lbl {\n  font-size: 18px;\n  font-family: \"fivo-medium\";\n  color: var(--light-black-color);\n  margin: 0;\n}\nion-content .coupon_div .info_div .discount {\n  font-size: 14px;\n  font-family: \"fivo-regular\";\n  color: var(--light-black-color);\n  margin: 5px 0px;\n}\nion-content .trending_div {\n  display: -webkit-box;\n  overflow-x: auto;\n  padding: 10px 0px 10px 16px;\n}\nion-content .trending_div .product_div {\n  width: 145px;\n  border-radius: 5px;\n  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);\n  padding: 10px 7px;\n  margin-right: 16px;\n}\nion-content .trending_div .product_div .img_div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  padding: 5px 0px 10px 0px;\n}\nion-content .trending_div .product_div .img_div img {\n  height: 100px;\n  width: 80px;\n}\nion-content .trending_div .product_div .name {\n  font-size: 15px;\n  font-family: \"fivo-regular\";\n  color: var(--ion-color-darkBlue);\n  margin: 0;\n}\nion-content .trending_div .product_div .qunty {\n  font-size: 12px;\n  color: var(--border-color);\n  font-family: \"fivo-regular\";\n  margin: 4px 0px;\n}\nion-content .trending_div .product_div .price {\n  font-size: 14px;\n  color: var(--green-color);\n  font-family: \"fivo-regular\";\n  margin: 0;\n}\nion-content .trending_div .btn_div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\nion-content .trending_div .btn_div .add_btn {\n  height: 15px;\n  width: 15px;\n  --background: var(--ion-color-darkBlue);\n  --background-activated: var(--ion-color-darkBlue);\n}\nion-content .trending_div .btn_div .add_btn ion-icon {\n  height: 9px;\n  width: 9px;\n}\nion-content .trending_div .btn_div .qty_p {\n  font-size: 14px;\n  color: var(--border-color);\n  font-family: \"fivo-regular\";\n  margin: 0 5px;\n  padding-top: 2px;\n}\nion-content .trending_div .btn_div .qty_div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\nion-content .trending_div::-webkit-scrollbar,\nion-content .categories_div::-webkit-scrollbar {\n  display: none;\n}\nion-content .categories_div {\n  display: -webkit-box;\n  overflow-x: auto;\n  padding: 10px 0px 10px 16px;\n}\nion-content .categories_div .product_div {\n  width: 145px;\n  border-radius: 5px;\n  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);\n  padding: 0px 0px 10px 0px;\n  text-align: center;\n  margin-right: 16px;\n}\nion-content .categories_div .product_div .name {\n  margin-top: 5px;\n  font-size: 18px;\n  color: var(--light-black-color);\n  font-family: \"fivo-regular\";\n  margin-bottom: 2px;\n}\nion-content .categories_div .product_div img {\n  height: 123px;\n  width: 100%;\n  -o-object-fit: scale-down;\n     object-fit: scale-down;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3RvcmUtZGV0YWlsL0M6XFxVc2Vyc1xcb3NpYW5cXERlc2t0b3BcXE5BVFVVVDIuMC9zcmNcXGFwcFxccGFnZXNcXHN0b3JlLWRldGFpbFxcc3RvcmUtZGV0YWlsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc3RvcmUtZGV0YWlsL3N0b3JlLWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0FDQVI7QURDUTtFQUNJLFlBQUE7QUNDWjtBREFZO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUNFaEI7QURDUTtFQUNJLDZCQUFBO0FDQ1o7QURDUTtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7QUNDWjtBREtJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQ0ZSO0FESUk7RUFDSSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0FDRlI7QURHUTtFQUNJLGdCQUFBO0FDRFo7QURHUTtFQUNJLDhCQUFBO0VBQ0EsaUJBQUE7QUNEWjtBRElJO0VBRUksYUFBQTtFQUNBLGdDQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQ0hSO0FESVE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtBQ0ZaO0FESVE7RUFDSSxrQkFBQTtBQ0ZaO0FER1k7RUFDSSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQ0RoQjtBREdZO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUNEaEI7QURHWTtFQUNJLGVBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtBQ0RoQjtBREdZO0VBQ0ksZUFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUNEaEI7QURLSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDSFI7QURJUTtFQUNJLGVBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtBQ0ZaO0FES0k7RUFDSSwwQkFBQTtFQUNBLGFBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDSFI7QURJUTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3Q0FBQTtBQ0ZaO0FER1k7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ0RoQjtBRElRO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FDRlo7QURHWTtFQUNJLGVBQUE7RUFDQSwwQkFBQTtFQUNBLCtCQUFBO0VBQ0EsU0FBQTtBQ0RoQjtBREdZO0VBQ0ksZUFBQTtFQUNBLDJCQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0FDRGhCO0FES0k7RUFDSSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7QUNIUjtBRElRO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsK0NBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDRlo7QURHWTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtBQ0RoQjtBREVnQjtFQUNJLGFBQUE7RUFDQSxXQUFBO0FDQXBCO0FER1k7RUFDSSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQ0FBQTtFQUNBLFNBQUE7QUNEaEI7QURHWTtFQUNJLGVBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtBQ0RoQjtBREdZO0VBQ0ksZUFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxTQUFBO0FDRGhCO0FESVE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtBQ0ZaO0FER1k7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHVDQUFBO0VBQ0EsaURBQUE7QUNEaEI7QURHZ0I7RUFDSSxXQUFBO0VBQ0EsVUFBQTtBQ0RwQjtBRElZO0VBQ0ksZUFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNGaEI7QURJWTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNGaEI7QURNSTs7RUFFSSxhQUFBO0FDSlI7QURNSTtFQUNJLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtBQ0pSO0FES1E7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQ0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0haO0FESVk7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtBQ0ZoQjtBRElZO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO0FDRmhCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc3RvcmUtZGV0YWlsL3N0b3JlLWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcclxuICAgIGlvbi10b29sYmFyIHtcclxuICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgLnByb19idG4ge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMzcHg7XHJcbiAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzNweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzM3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1iYWNrLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tdGl0bGUge1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiZml2by1yZWd1bGFyXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgICAuc3RhciB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgICAgIHRvcDogMjNweDtcclxuICAgIH1cclxuICAgIC52b3RlIHtcclxuICAgICAgICBmb250LXNpemU6IDEwLjVweDtcclxuICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zLVJlZ3VsYXJcIjtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtncmF5KTtcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXllbGxvdyk7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogM3B4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5oZWFkZV9kaXYge1xyXG4gICAgICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZS9iYWNrX2ltZy5wbmdcIik7XHJcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDI1cHggMjVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgLmJhY2tfbGF5ZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMjBweCAyMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNzBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnByb2ZpbGVfZGl2IHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAuc2luY2VfbGJsIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcImZpdm8tcmVndWxhclwiO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDkwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRpbWUge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiZml2by1yZWd1bGFyXCI7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnBvbGljeV9sYmwge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiZml2by1yZWd1bGFyXCI7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubWFpbl9sYmwge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1saWdodC1ibGFjay1jb2xvcik7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiZml2by1yZWd1bGFyXCI7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDE2cHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAubW9yZV9idG4ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgICAtLWNvbG9yOiB2YXIoLS1ncmVlbi1jb2xvcik7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY291cG9uX2RpdiB7XHJcbiAgICAgICAgbWFyZ2luOiAyMHB4IDE2cHggMHB4IDE2cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDNweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmVlbi1jb2xvcik7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIC5zdGlja2VyX2RpdiB7XHJcbiAgICAgICAgICAgIGhlaWdodDogNjJweDtcclxuICAgICAgICAgICAgd2lkdGg6IDYycHg7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogNjJweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzRweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzNHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbmZvX2RpdiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjVweDtcclxuICAgICAgICAgICAgd2lkdGg6IDczJTtcclxuICAgICAgICAgICAgLmluZm9fbGJsIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcImZpdm8tbWVkaXVtXCI7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tbGlnaHQtYmxhY2stY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5kaXNjb3VudCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJmaXZvLXJlZ3VsYXJcIjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1saWdodC1ibGFjay1jb2xvcik7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDVweCAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudHJlbmRpbmdfZGl2IHtcclxuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMHB4IDEwcHggMTZweDtcclxuICAgICAgICAucHJvZHVjdF9kaXYge1xyXG4gICAgICAgICAgICB3aWR0aDogMTQ1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggN3B4O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICAgIC5pbWdfZGl2IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAwcHggMTBweCAwcHg7XHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiZml2by1yZWd1bGFyXCI7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtCbHVlKTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucXVudHkge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWJvcmRlci1jb2xvcik7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJmaXZvLXJlZ3VsYXJcIjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogNHB4IDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJpY2Uge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWdyZWVuLWNvbG9yKTtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcImZpdm8tcmVndWxhclwiO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idG5fZGl2IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAuYWRkX2J0biB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTVweDtcclxuICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhcmtCbHVlKTtcclxuICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHZhcigtLWlvbi1jb2xvci1kYXJrQmx1ZSk7XHJcbiAgICAgICAgICAgICAgICAvLyAtLWJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDlweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5xdHlfcCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tYm9yZGVyLWNvbG9yKTtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcImZpdm8tcmVndWxhclwiO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDVweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnF0eV9kaXYge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudHJlbmRpbmdfZGl2Ojotd2Via2l0LXNjcm9sbGJhcixcclxuICAgIC5jYXRlZ29yaWVzX2Rpdjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuY2F0ZWdvcmllc19kaXYge1xyXG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAwcHggMTBweCAxNnB4O1xyXG4gICAgICAgIC5wcm9kdWN0X2RpdiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNDVweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4IDBweCAxMHB4IDBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICAgIC5uYW1lIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1saWdodC1ibGFjay1jb2xvcik7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJmaXZvLXJlZ3VsYXJcIjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMjNweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogc2NhbGUtZG93bjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImlvbi1oZWFkZXIgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgLnByb19idG4ge1xuICBoZWlnaHQ6IDMzcHg7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIC5wcm9fYnRuIGlvbi1pY29uIHtcbiAgaGVpZ2h0OiAzM3B4O1xuICB3aWR0aDogMzNweDtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLWJhY2stYnV0dG9uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuICBmb250LWZhbWlseTogXCJmaXZvLXJlZ3VsYXJcIjtcbn1cblxuaW9uLWNvbnRlbnQgLnN0YXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHJpZ2h0OiAxNXB4O1xuICB0b3A6IDIzcHg7XG59XG5pb24tY29udGVudCAudm90ZSB7XG4gIGZvbnQtc2l6ZTogMTAuNXB4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zLVJlZ3VsYXJcIjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrZ3JheSk7XG4gIG1hcmdpbjogMHB4O1xufVxuaW9uLWNvbnRlbnQgLnZvdGUgc3BhbiB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5pb24tY29udGVudCAudm90ZSBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3IteWVsbG93KTtcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XG59XG5pb24tY29udGVudCAuaGVhZGVfZGl2IHtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAyNXB4IDI1cHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5pb24tY29udGVudCAuaGVhZGVfZGl2IC5iYWNrX2xheWVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDIwcHggMjBweDtcbiAgcGFkZGluZy10b3A6IDcwcHg7XG59XG5pb24tY29udGVudCAuaGVhZGVfZGl2IC5wcm9maWxlX2RpdiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmlvbi1jb250ZW50IC5oZWFkZV9kaXYgLnByb2ZpbGVfZGl2IC5zaW5jZV9sYmwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBcImZpdm8tcmVndWxhclwiO1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbn1cbmlvbi1jb250ZW50IC5oZWFkZV9kaXYgLnByb2ZpbGVfZGl2IGltZyB7XG4gIGhlaWdodDogOTBweDtcbiAgd2lkdGg6IDkwcHg7XG59XG5pb24tY29udGVudCAuaGVhZGVfZGl2IC5wcm9maWxlX2RpdiAudGltZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwiZml2by1yZWd1bGFyXCI7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDNweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG59XG5pb24tY29udGVudCAuaGVhZGVfZGl2IC5wcm9maWxlX2RpdiAucG9saWN5X2xibCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IFwiZml2by1yZWd1bGFyXCI7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG59XG5pb24tY29udGVudCAubWFpbl9sYmwge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiB2YXIoLS1saWdodC1ibGFjay1jb2xvcik7XG4gIGZvbnQtZmFtaWx5OiBcImZpdm8tcmVndWxhclwiO1xuICBwYWRkaW5nOiAwcHggMTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgLm1haW5fbGJsIC5tb3JlX2J0biB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIC0tY29sb3I6IHZhcigtLWdyZWVuLWNvbG9yKTtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuaW9uLWNvbnRlbnQgLmNvdXBvbl9kaXYge1xuICBtYXJnaW46IDIwcHggMTZweCAwcHggMTZweDtcbiAgaGVpZ2h0OiAxMDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JlZW4tY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgLmNvdXBvbl9kaXYgLnN0aWNrZXJfZGl2IHtcbiAgaGVpZ2h0OiA2MnB4O1xuICB3aWR0aDogNjJweDtcbiAgbWluLXdpZHRoOiA2MnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xufVxuaW9uLWNvbnRlbnQgLmNvdXBvbl9kaXYgLnN0aWNrZXJfZGl2IGltZyB7XG4gIGhlaWdodDogMzRweDtcbiAgd2lkdGg6IDM0cHg7XG59XG5pb24tY29udGVudCAuY291cG9uX2RpdiAuaW5mb19kaXYge1xuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gIHdpZHRoOiA3MyU7XG59XG5pb24tY29udGVudCAuY291cG9uX2RpdiAuaW5mb19kaXYgLmluZm9fbGJsIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LWZhbWlseTogXCJmaXZvLW1lZGl1bVwiO1xuICBjb2xvcjogdmFyKC0tbGlnaHQtYmxhY2stY29sb3IpO1xuICBtYXJnaW46IDA7XG59XG5pb24tY29udGVudCAuY291cG9uX2RpdiAuaW5mb19kaXYgLmRpc2NvdW50IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogXCJmaXZvLXJlZ3VsYXJcIjtcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWJsYWNrLWNvbG9yKTtcbiAgbWFyZ2luOiA1cHggMHB4O1xufVxuaW9uLWNvbnRlbnQgLnRyZW5kaW5nX2RpdiB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBwYWRkaW5nOiAxMHB4IDBweCAxMHB4IDE2cHg7XG59XG5pb24tY29udGVudCAudHJlbmRpbmdfZGl2IC5wcm9kdWN0X2RpdiB7XG4gIHdpZHRoOiAxNDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgcGFkZGluZzogMTBweCA3cHg7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbn1cbmlvbi1jb250ZW50IC50cmVuZGluZ19kaXYgLnByb2R1Y3RfZGl2IC5pbWdfZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDVweCAwcHggMTBweCAwcHg7XG59XG5pb24tY29udGVudCAudHJlbmRpbmdfZGl2IC5wcm9kdWN0X2RpdiAuaW1nX2RpdiBpbWcge1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogODBweDtcbn1cbmlvbi1jb250ZW50IC50cmVuZGluZ19kaXYgLnByb2R1Y3RfZGl2IC5uYW1lIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LWZhbWlseTogXCJmaXZvLXJlZ3VsYXJcIjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrQmx1ZSk7XG4gIG1hcmdpbjogMDtcbn1cbmlvbi1jb250ZW50IC50cmVuZGluZ19kaXYgLnByb2R1Y3RfZGl2IC5xdW50eSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHZhcigtLWJvcmRlci1jb2xvcik7XG4gIGZvbnQtZmFtaWx5OiBcImZpdm8tcmVndWxhclwiO1xuICBtYXJnaW46IDRweCAwcHg7XG59XG5pb24tY29udGVudCAudHJlbmRpbmdfZGl2IC5wcm9kdWN0X2RpdiAucHJpY2Uge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS1ncmVlbi1jb2xvcik7XG4gIGZvbnQtZmFtaWx5OiBcImZpdm8tcmVndWxhclwiO1xuICBtYXJnaW46IDA7XG59XG5pb24tY29udGVudCAudHJlbmRpbmdfZGl2IC5idG5fZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuaW9uLWNvbnRlbnQgLnRyZW5kaW5nX2RpdiAuYnRuX2RpdiAuYWRkX2J0biB7XG4gIGhlaWdodDogMTVweDtcbiAgd2lkdGg6IDE1cHg7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhcmtCbHVlKTtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdmFyKC0taW9uLWNvbG9yLWRhcmtCbHVlKTtcbn1cbmlvbi1jb250ZW50IC50cmVuZGluZ19kaXYgLmJ0bl9kaXYgLmFkZF9idG4gaW9uLWljb24ge1xuICBoZWlnaHQ6IDlweDtcbiAgd2lkdGg6IDlweDtcbn1cbmlvbi1jb250ZW50IC50cmVuZGluZ19kaXYgLmJ0bl9kaXYgLnF0eV9wIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgZm9udC1mYW1pbHk6IFwiZml2by1yZWd1bGFyXCI7XG4gIG1hcmdpbjogMCA1cHg7XG4gIHBhZGRpbmctdG9wOiAycHg7XG59XG5pb24tY29udGVudCAudHJlbmRpbmdfZGl2IC5idG5fZGl2IC5xdHlfZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbmlvbi1jb250ZW50IC50cmVuZGluZ19kaXY6Oi13ZWJraXQtc2Nyb2xsYmFyLFxuaW9uLWNvbnRlbnQgLmNhdGVnb3JpZXNfZGl2Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5pb24tY29udGVudCAuY2F0ZWdvcmllc19kaXYge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgcGFkZGluZzogMTBweCAwcHggMTBweCAxNnB4O1xufVxuaW9uLWNvbnRlbnQgLmNhdGVnb3JpZXNfZGl2IC5wcm9kdWN0X2RpdiB7XG4gIHdpZHRoOiAxNDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgcGFkZGluZzogMHB4IDBweCAxMHB4IDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG59XG5pb24tY29udGVudCAuY2F0ZWdvcmllc19kaXYgLnByb2R1Y3RfZGl2IC5uYW1lIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiB2YXIoLS1saWdodC1ibGFjay1jb2xvcik7XG4gIGZvbnQtZmFtaWx5OiBcImZpdm8tcmVndWxhclwiO1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG59XG5pb24tY29udGVudCAuY2F0ZWdvcmllc19kaXYgLnByb2R1Y3RfZGl2IGltZyB7XG4gIGhlaWdodDogMTIzcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBzY2FsZS1kb3duO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/store-detail/store-detail.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/store-detail/store-detail.page.ts ***!
  \*********************************************************/
/*! exports provided: StoreDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreDetailPage", function() { return StoreDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_grocery_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../service/grocery.service */ "./src/app/service/grocery.service.ts");
/* harmony import */ var _service_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../service/util.service */ "./src/app/service/util.service.ts");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");






let StoreDetailPage = class StoreDetailPage {
    constructor(nav, api, util, gpi) {
        this.nav = nav;
        this.api = api;
        this.util = util;
        this.gpi = gpi;
        this.cartData = [];
        this.data = { product: [] };
        this.term = "";
        this.dataa = [];
        this.state = 1;
        this.Store = [];
        this.currency = this.api.currency;
        this.dataa = JSON.parse(localStorage.getItem("store-detail"));
        this.util.startLoad();
        this.api
            .getDataWithToken("groceryShopDetail/" + this.gpi.storeID)
            .subscribe((res) => {
            if (res.success) {
                this.data = res.data;
                this.api
                    .getDataWithToken("groceryShopCategory/" + this.gpi.storeID)
                    .subscribe((res) => {
                    if (res.success) {
                        this.data.category = res.data;
                        this.api
                            .getDataWithToken("groceryItem/" + this.gpi.storeID)
                            .subscribe((res) => {
                            if (res.success) {
                                this.util.dismissLoader();
                                this.data.product = res.data;
                                this.id = res.data.id;
                                this.data.product.forEach((element) => {
                                    element.qty = 0;
                                    if (this.cartData.length > 0) {
                                        const fCart = this.cartData.find((x) => x.id == element.id);
                                        if (fCart) {
                                            element.qty = fCart.qty;
                                        }
                                    }
                                });
                            }
                        }, (err) => {
                            this.util.dismissLoader();
                        });
                    }
                }, (err) => {
                    this.util.dismissLoader();
                });
            }
        }, (err) => {
            this.util.dismissLoader();
        });
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
    ngOnInit() { }
    viewMore() {
        this.nav.navigateForward("product");
    }
    subcategory(id) {
        this.gpi.catId = id;
        this.nav.navigateForward("/category-detail");
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
    ionViewWillLeave() {
        this.gpi.cartData = this.cartData;
    }
    storeDetail(id) {
        this.gpi.itemId = id;
        this.nav.navigateForward("/product-detail");
    }
    ionViewWillEnter() {
        this.cartData = JSON.parse(localStorage.getItem("store-detail")) || [];
        if (this.cartData.length > 0) {
            if (this.data.product.length > 0) {
                this.data.product.forEach((el1) => {
                    const fCart = this.cartData.find((x) => x.id == el1.id);
                    if (fCart) {
                        el1.qty = fCart.qty;
                    }
                    else {
                        el1.qty = 0;
                    }
                });
            }
        }
        else {
            this.data.product.forEach((el1) => {
                el1.qty = 0;
            });
        }
    }
    logScrolling(ev) {
        if (ev.detail.scrollTop >= 100) {
            this.state = 2;
        }
        else {
            this.state = 1;
        }
    }
};
StoreDetailPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _service_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] },
    { type: _service_grocery_service__WEBPACK_IMPORTED_MODULE_1__["GroceryService"] }
];
StoreDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: "app-store-detail",
        template: __webpack_require__(/*! raw-loader!./store-detail.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/store-detail/store-detail.page.html"),
        styles: [__webpack_require__(/*! ./store-detail.page.scss */ "./src/app/pages/store-detail/store-detail.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
        _service_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"],
        _service_grocery_service__WEBPACK_IMPORTED_MODULE_1__["GroceryService"]])
], StoreDetailPage);



/***/ })

}]);
//# sourceMappingURL=pages-store-detail-store-detail-module-es2015.js.map