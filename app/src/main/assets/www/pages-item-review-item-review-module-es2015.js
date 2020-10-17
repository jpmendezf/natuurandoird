(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-item-review-item-review-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/item-review/item-review.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/item-review/item-review.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n    <ion-toolbar mode=\"md\">\n        <ion-title class=\"ion-text-center\">\n            {{\"item_review_page.title\" | translate}}\n        </ion-title>\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"home\" icon=\"ios-arrow-back\" mode=\"md\"></ion-back-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div no-data *ngIf=\"data?.length == 0\">\n        <img src=\"../../../assets/image/no-data-icon-10.jpg\" alt=\"no data\">\n    </div>\n    <div class=\"list\" *ngFor=\"let i of data\">\n        <img src=\"{{i?.customer?.imagePath + i?.customer?.image}}\">\n        <div style=\"flex: 1; margin-left: 16px;\">\n            <div class=\"flexBox\">\n                <h2 class=\"username\">\n                    {{i?.customer?.name}}\n                </h2>\n                <p class=\"date\">\n                    {{i?.created_at| date:' yy/MM/dd'}}\n                </p>\n            </div>\n            <h2 class=\"stars\">\n                <ion-icon [name]=\"i?.rate >= 1 ? 'md-star' : 'ios-star-outline'\"></ion-icon>\n                <ion-icon [name]=\"i?.rate >= 2 ? 'md-star' : 'ios-star-outline'\"></ion-icon>\n                <ion-icon [name]=\"i?.rate >= 3 ? 'md-star' : 'ios-star-outline'\"></ion-icon>\n                <ion-icon [name]=\"i?.rate >= 4 ? 'md-star' : 'ios-star-outline'\"></ion-icon>\n                <ion-icon [name]=\"i?.rate >= 5 ? 'md-star' : 'ios-star-outline'\"></ion-icon>\n            </h2>\n            <h2 class=\"desc\"> {{i?.message}}</h2>\n        </div>\n    </div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/item-review/item-review.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/item-review/item-review.module.ts ***!
  \*********************************************************/
/*! exports provided: ItemReviewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemReviewPageModule", function() { return ItemReviewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _item_review_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./item-review.page */ "./src/app/pages/item-review/item-review.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








const routes = [
    {
        path: '',
        component: _item_review_page__WEBPACK_IMPORTED_MODULE_6__["ItemReviewPage"]
    }
];
let ItemReviewPageModule = class ItemReviewPageModule {
};
ItemReviewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_item_review_page__WEBPACK_IMPORTED_MODULE_6__["ItemReviewPage"]]
    })
], ItemReviewPageModule);



/***/ }),

/***/ "./src/app/pages/item-review/item-review.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/item-review/item-review.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin: 0px 16px;\n  border-bottom: 1px dashed var(--ion-border-color);\n  padding: 10px 0px;\n}\n.list img {\n  border-radius: 50%;\n  border: 3px solid var(--ion-color-white);\n  box-shadow: 0px 0px 4px 0px #000000a3;\n  height: 55px;\n  width: 55px;\n}\n.list .flexBox {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-bottom: 4px;\n}\n.list .flexBox .username {\n  font-size: 16px;\n  font-family: \"Poppins-Medium\";\n  color: var(--ion-color-darkBlue);\n  margin: 0;\n}\n.list .flexBox .date {\n  font-size: 12px;\n  font-family: \"Poppins-Regular\";\n  color: var(--ion-color-placeholder);\n  margin: 0;\n}\n.list .desc {\n  font-size: 14px;\n  font-family: \"Poppins-Medium\";\n  color: var(--ion-color-placeholder);\n  margin: 0;\n}\n.list .stars {\n  margin: 0;\n  font-size: 15px;\n  margin-top: 1px;\n  margin-bottom: 1px;\n}\n.list .stars ion-icon {\n  color: var(--star);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaXRlbS1yZXZpZXcvQzpcXFVzZXJzXFxvc2lhblxcRGVza3RvcFxcTkFUVVVUMi4wL3NyY1xcYXBwXFxwYWdlc1xcaXRlbS1yZXZpZXdcXGl0ZW0tcmV2aWV3LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvaXRlbS1yZXZpZXcvaXRlbS1yZXZpZXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaURBQUE7RUFDQSxpQkFBQTtBQ0NGO0FEQUU7RUFDRSxrQkFBQTtFQUNBLHdDQUFBO0VBQ0EscUNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0VKO0FEQUU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGtCQUFBO0FDRUo7QURESTtFQUNFLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0VBQ0EsU0FBQTtBQ0dOO0FEREk7RUFDRSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQ0FBQTtFQUNBLFNBQUE7QUNHTjtBREFFO0VBQ0UsZUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUNBQUE7RUFDQSxTQUFBO0FDRUo7QURBRTtFQUNFLFNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDRUo7QURESTtFQUNFLGtCQUFBO0FDR04iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9pdGVtLXJldmlldy9pdGVtLXJldmlldy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbjogMHB4IDE2cHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCB2YXIoLS1pb24tYm9yZGVyLWNvbG9yKTtcclxuICBwYWRkaW5nOiAxMHB4IDBweDtcclxuICBpbWcge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNHB4IDBweCAjMDAwMDAwYTM7XHJcbiAgICBoZWlnaHQ6IDU1cHg7XHJcbiAgICB3aWR0aDogNTVweDtcclxuICB9XHJcbiAgLmZsZXhCb3gge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICAudXNlcm5hbWUge1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtTWVkaXVtXCI7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya0JsdWUpO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgICAuZGF0ZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1SZWd1bGFyXCI7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcGxhY2Vob2xkZXIpO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5kZXNjIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtTWVkaXVtXCI7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXBsYWNlaG9sZGVyKTtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgLnN0YXJzIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIG1hcmdpbi10b3A6IDFweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDFweDtcclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgY29sb3I6IHZhcigtLXN0YXIpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIubGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMHB4IDE2cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgdmFyKC0taW9uLWJvcmRlci1jb2xvcik7XG4gIHBhZGRpbmc6IDEwcHggMHB4O1xufVxuLmxpc3QgaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDRweCAwcHggIzAwMDAwMGEzO1xuICBoZWlnaHQ6IDU1cHg7XG4gIHdpZHRoOiA1NXB4O1xufVxuLmxpc3QgLmZsZXhCb3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbn1cbi5saXN0IC5mbGV4Qm94IC51c2VybmFtZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrQmx1ZSk7XG4gIG1hcmdpbjogMDtcbn1cbi5saXN0IC5mbGV4Qm94IC5kYXRlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zLVJlZ3VsYXJcIjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wbGFjZWhvbGRlcik7XG4gIG1hcmdpbjogMDtcbn1cbi5saXN0IC5kZXNjIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zLU1lZGl1bVwiO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXBsYWNlaG9sZGVyKTtcbiAgbWFyZ2luOiAwO1xufVxuLmxpc3QgLnN0YXJzIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDFweDtcbiAgbWFyZ2luLWJvdHRvbTogMXB4O1xufVxuLmxpc3QgLnN0YXJzIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLXN0YXIpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/item-review/item-review.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/item-review/item-review.page.ts ***!
  \*******************************************************/
/*! exports provided: ItemReviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemReviewPage", function() { return ItemReviewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_util_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../service/util.service */ "./src/app/service/util.service.ts");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




let ItemReviewPage = class ItemReviewPage {
    constructor(api, util) {
        this.api = api;
        this.util = util;
        this.data = [];
        this.util.startLoad();
        this.api
            .getDataWithToken("itemReview/" + this.api.reviewId)
            .subscribe((res) => {
            if (res.success) {
                this.data = res.data;
                this.util.dismissLoader();
            }
        });
    }
    ngOnInit() { }
};
ItemReviewPage.ctorParameters = () => [
    { type: _service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _service_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"] }
];
ItemReviewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-item-review",
        template: __webpack_require__(/*! raw-loader!./item-review.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/item-review/item-review.page.html"),
        styles: [__webpack_require__(/*! ./item-review.page.scss */ "./src/app/pages/item-review/item-review.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _service_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"]])
], ItemReviewPage);



/***/ })

}]);
//# sourceMappingURL=pages-item-review-item-review-module-es2015.js.map