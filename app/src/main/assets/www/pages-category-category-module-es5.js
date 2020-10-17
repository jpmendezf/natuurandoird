(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-category-category-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/category/category.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/category/category.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n    <ion-toolbar mode=\"md\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"home\" icon=\"ios-arrow-back\" text=\"\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>{{\"category_page.title\" | translate}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div no-data *ngIf=\"data?.length == 0\">\n        <img src=\"../../../assets/image/no-data-icon-10.jpg\" alt=\"no data\">\n    </div>\n    <ng-container *ngFor=\"let item of data\">\n        <div class=\"card_div\" (click)=\"resturantDetail(item?.id)\">\n            <div class=\"div_image\">\n                <img [src]=\"item?.imagePath + item?.image\" />\n            </div>\n            <div class=\"data_div\">\n                <ion-button class=\"btn_div ion-float-right ion-text-capitalize\" *ngIf=\"item?.exclusive\">\n                    {{btnType}}\n                </ion-button>\n                <h3 class=\"item\">{{item?.name}}</h3>\n                <p class=\"type\">{{item?.itemNames}}</p>\n\n                <div class=\"rate\">\n                    <span>\n            <ion-icon name=\"star\"></ion-icon>{{item?.rate}}\n          </span>\n                    <span class=\"point_span\">\n            <div class=\"point\"></div>\n            {{item?.min}} {{\"category_page.min\" | translate}}\n          </span>\n                    <span class=\"point_span\">\n            <div class=\"point\"></div>\n            {{currency}}{{item?.avarage_plate_price}} {{\"category_page.for_two\" | translate}}\n          </span>\n                </div>\n            </div>\n        </div>\n    </ng-container>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/category/category.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/category/category.module.ts ***!
  \***************************************************/
/*! exports provided: CategoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryPageModule", function() { return CategoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _category_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./category.page */ "./src/app/pages/category/category.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");








var routes = [
    {
        path: '',
        component: _category_page__WEBPACK_IMPORTED_MODULE_6__["CategoryPage"]
    }
];
var CategoryPageModule = /** @class */ (function () {
    function CategoryPageModule() {
    }
    CategoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_category_page__WEBPACK_IMPORTED_MODULE_6__["CategoryPage"]]
        })
    ], CategoryPageModule);
    return CategoryPageModule;
}());



/***/ }),

/***/ "./src/app/pages/category/category.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/category/category.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content .card_div {\n  display: -webkit-box;\n  display: flex;\n  margin: 13px 16px;\n}\nion-content .card_div .div_image {\n  padding-right: 10px;\n}\nion-content .card_div .div_image img {\n  border-radius: 5px;\n  width: 87px;\n  height: 78px;\n}\nion-content .card_div .data_div {\n  width: 70%;\n}\nion-content .card_div .data_div .btn_div {\n  font-size: 8.5px;\n  font-family: \"Poppins-Medium\";\n  --background: var(--ion-color-green);\n  --background-activated: var(--ion-color-green);\n  --color: var(--ion-color-white);\n  height: 20px;\n  margin-right: 0px;\n  --border-radius: 2px;\n  --box-shadow: none;\n}\nion-content .card_div .data_div .btn_div.trending {\n  --background: var(--ion-color-google-btn);\n  --background-activated: var(--ion-color-google-btn);\n}\nion-content .card_div .data_div .btn_color {\n  --background: var(--ion-color-btn-color);\n}\nion-content .card_div .data_div .item {\n  font-size: 14px;\n  color: var(--ion-color-darkBlue);\n  font-family: \"Poppins-SemiBold\";\n  margin-top: 4px;\n  margin-bottom: 5px;\n}\nion-content .card_div .data_div .type {\n  font-size: 10.5px;\n  font-family: \"Poppins-Regular\";\n  color: var(--ion-color-darkgray);\n  margin-top: 0px;\n  margin-bottom: 3px;\n}\nion-content .card_div .data_div .percent {\n  font-size: 10.5px;\n  font-family: \"Poppins-Medium\";\n  color: var(--ion-color-green);\n  margin-top: 0px;\n  margin-bottom: 3px;\n}\nion-content .card_div .data_div .percent ion-icon {\n  margin-right: 5px;\n}\nion-content .card_div .data_div .rate {\n  font-size: 10.5px;\n  display: -webkit-box;\n  display: flex;\n  font-family: \"Poppins-Regular\";\n  color: var(--ion-color-darkgray);\n}\nion-content .card_div .data_div .rate ion-icon {\n  color: var(--ion-color-yellow);\n  margin-right: 5px;\n}\nion-content .card_div .data_div .rate span {\n  margin-right: 8px;\n}\nion-content .card_div .data_div .rate span .point {\n  height: 6px;\n  width: 6px;\n  background-color: var(--ion-color-green);\n  border-radius: 50%;\n  margin-right: 3px;\n  align-self: center;\n}\nion-content .card_div .data_div .rate .point_span {\n  display: -webkit-box;\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2F0ZWdvcnkvQzpcXFVzZXJzXFxvc2lhblxcRGVza3RvcFxcTkFUVVVUMi4wL3NyY1xcYXBwXFxwYWdlc1xcY2F0ZWdvcnlcXGNhdGVnb3J5LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2F0ZWdvcnkvY2F0ZWdvcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsaUJBQUE7QUNBSjtBRENJO0VBQ0UsbUJBQUE7QUNDTjtBREFNO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0VSO0FEQ0k7RUFDRSxVQUFBO0FDQ047QURBTTtFQUNFLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsK0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FDRVI7QUREUTtFQUNFLHlDQUFBO0VBQ0EsbURBQUE7QUNHVjtBREFNO0VBQ0Usd0NBQUE7QUNFUjtBREFNO0VBQ0UsZUFBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNFUjtBREFNO0VBQ0UsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDRVI7QURBTTtFQUNFLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0VSO0FERFE7RUFDRSxpQkFBQTtBQ0dWO0FEQU07RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0NBQUE7QUNFUjtBREFRO0VBQ0UsOEJBQUE7RUFDQSxpQkFBQTtBQ0VWO0FEQVE7RUFDRSxpQkFBQTtBQ0VWO0FERFU7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDR1o7QURBUTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtBQ0VWIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2F0ZWdvcnkvY2F0ZWdvcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gIC5jYXJkX2RpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luOiAxM3B4IDE2cHg7XHJcbiAgICAuZGl2X2ltYWdlIHtcclxuICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgICAgaW1nIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgd2lkdGg6IDg3cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA3OHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuZGF0YV9kaXYge1xyXG4gICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAuYnRuX2RpdiB7XHJcbiAgICAgICAgZm9udC1zaXplOiA4LjVweDtcclxuICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zLU1lZGl1bVwiO1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWdyZWVuKTtcclxuICAgICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB2YXIoLS1pb24tY29sb3ItZ3JlZW4pO1xyXG4gICAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XHJcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAmLnRyZW5kaW5nIHtcclxuICAgICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWdvb2dsZS1idG4pO1xyXG4gICAgICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdmFyKC0taW9uLWNvbG9yLWdvb2dsZS1idG4pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuYnRuX2NvbG9yIHtcclxuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1idG4tY29sb3IpO1xyXG4gICAgICB9XHJcbiAgICAgIC5pdGVtIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrQmx1ZSk7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1TZW1pQm9sZFwiO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgIH1cclxuICAgICAgLnR5cGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTAuNXB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtUmVndWxhclwiO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2dyYXkpO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgICAgIH1cclxuICAgICAgLnBlcmNlbnQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTAuNXB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtTWVkaXVtXCI7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1ncmVlbik7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLnJhdGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTAuNXB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1SZWd1bGFyXCI7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrZ3JheSk7XHJcblxyXG4gICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3IteWVsbG93KTtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgICAgICAgLnBvaW50IHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA2cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA2cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1ncmVlbik7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzcHg7XHJcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnBvaW50X3NwYW4ge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW9uLWNvbnRlbnQgLmNhcmRfZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAxM3B4IDE2cHg7XG59XG5pb24tY29udGVudCAuY2FyZF9kaXYgLmRpdl9pbWFnZSB7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5pb24tY29udGVudCAuY2FyZF9kaXYgLmRpdl9pbWFnZSBpbWcge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiA4N3B4O1xuICBoZWlnaHQ6IDc4cHg7XG59XG5pb24tY29udGVudCAuY2FyZF9kaXYgLmRhdGFfZGl2IHtcbiAgd2lkdGg6IDcwJTtcbn1cbmlvbi1jb250ZW50IC5jYXJkX2RpdiAuZGF0YV9kaXYgLmJ0bl9kaXYge1xuICBmb250LXNpemU6IDguNXB4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zLU1lZGl1bVwiO1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1ncmVlbik7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHZhcigtLWlvbi1jb2xvci1ncmVlbik7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIC0tYm9yZGVyLXJhZGl1czogMnB4O1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG59XG5pb24tY29udGVudCAuY2FyZF9kaXYgLmRhdGFfZGl2IC5idG5fZGl2LnRyZW5kaW5nIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZ29vZ2xlLWJ0bik7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHZhcigtLWlvbi1jb2xvci1nb29nbGUtYnRuKTtcbn1cbmlvbi1jb250ZW50IC5jYXJkX2RpdiAuZGF0YV9kaXYgLmJ0bl9jb2xvciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWJ0bi1jb2xvcik7XG59XG5pb24tY29udGVudCAuY2FyZF9kaXYgLmRhdGFfZGl2IC5pdGVtIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtCbHVlKTtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1TZW1pQm9sZFwiO1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbmlvbi1jb250ZW50IC5jYXJkX2RpdiAuZGF0YV9kaXYgLnR5cGUge1xuICBmb250LXNpemU6IDEwLjVweDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1SZWd1bGFyXCI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2dyYXkpO1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDNweDtcbn1cbmlvbi1jb250ZW50IC5jYXJkX2RpdiAuZGF0YV9kaXYgLnBlcmNlbnQge1xuICBmb250LXNpemU6IDEwLjVweDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1ncmVlbik7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xufVxuaW9uLWNvbnRlbnQgLmNhcmRfZGl2IC5kYXRhX2RpdiAucGVyY2VudCBpb24taWNvbiB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuaW9uLWNvbnRlbnQgLmNhcmRfZGl2IC5kYXRhX2RpdiAucmF0ZSB7XG4gIGZvbnQtc2l6ZTogMTAuNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zLVJlZ3VsYXJcIjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrZ3JheSk7XG59XG5pb24tY29udGVudCAuY2FyZF9kaXYgLmRhdGFfZGl2IC5yYXRlIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci15ZWxsb3cpO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbmlvbi1jb250ZW50IC5jYXJkX2RpdiAuZGF0YV9kaXYgLnJhdGUgc3BhbiB7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuaW9uLWNvbnRlbnQgLmNhcmRfZGl2IC5kYXRhX2RpdiAucmF0ZSBzcGFuIC5wb2ludCB7XG4gIGhlaWdodDogNnB4O1xuICB3aWR0aDogNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZ3JlZW4pO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi1yaWdodDogM3B4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5pb24tY29udGVudCAuY2FyZF9kaXYgLmRhdGFfZGl2IC5yYXRlIC5wb2ludF9zcGFuIHtcbiAgZGlzcGxheTogZmxleDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/category/category.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/category/category.page.ts ***!
  \*************************************************/
/*! exports provided: CategoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryPage", function() { return CategoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _service_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../service/util.service */ "./src/app/service/util.service.ts");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var CategoryPage = /** @class */ (function () {
    function CategoryPage(api, util, geolocation, ntrl, route) {
        var _this = this;
        this.api = api;
        this.util = util;
        this.geolocation = geolocation;
        this.ntrl = ntrl;
        this.route = route;
        this.data = [];
        this.err = {};
        this.btnType = "Exclusive";
        this.geocoder = new google.maps.Geocoder();
        this.currency = this.api.currency;
        this.route.params.subscribe(function (params) {
            _this.isfrom = params["id"];
            if (_this.isfrom) {
                _this.util.startLoad();
                _this.api
                    .getDataWithToken("categoryShop/" + _this.isfrom)
                    .subscribe(function (res) {
                    if (res.success) {
                        _this.util.dismissLoader();
                        _this.data = res.data;
                    }
                });
            }
            else {
                _this.util.startLoad();
                _this.api.getDataWithToken("shops").subscribe(function (res) {
                    if (res.success) {
                        _this.data = res.data;
                        if (_this.api.filterType == "popular") {
                            _this.util.dismissLoader();
                            _this.data.sort(function (a, b) {
                                if (a.rate > b.rate) {
                                    return -1;
                                }
                                if (a.rate < b.rate) {
                                    return 1;
                                }
                                return 0;
                            });
                        }
                        else if (_this.api.filterType == "pureveg") {
                            _this.util.dismissLoader();
                            _this.data = _this.data.filter(function (a) {
                                if (a.veg > 0) {
                                    return a;
                                }
                            });
                        }
                        else if (_this.api.filterType == "lowcost") {
                            _this.util.dismissLoader();
                            _this.data.sort(function (a, b) {
                                if (a.avarage_plate_price < b.avarage_plate_price) {
                                    return -1;
                                }
                                if (a.avarage_plate_price > b.avarage_plate_price) {
                                    return 1;
                                }
                                return 0;
                            });
                        }
                        else {
                            _this.util.dismissLoader();
                            if (localStorage.getItem("isaddress") != "false") {
                                _this.api
                                    .getDataWithToken("getAddress/" + localStorage.getItem("isaddress"))
                                    .subscribe(function (res) {
                                    if (res.success) {
                                        _this.data.forEach(function (element) {
                                            element.distance = _this.distance(res.data.lat, res.data.lang, element.latitude, element.longitude, "K");
                                        });
                                        _this.data.sort(function (a, b) {
                                            if (a.distance < b.distance) {
                                                return -1;
                                            }
                                            if (a.distance > b.distance) {
                                                return 1;
                                            }
                                        });
                                    }
                                });
                            }
                            else {
                                _this.geolocation
                                    .getCurrentPosition()
                                    .then(function (resp) {
                                    resp.coords.latitude;
                                    resp.coords.longitude;
                                    _this.data.forEach(function (element) {
                                        element.distance = _this.distance(resp.coords.latitude, resp.coords.longitude, element.latitude, element.longitude, "K");
                                    });
                                    _this.data.sort(function (a, b) {
                                        if (a.distance < b.distance) {
                                            return -1;
                                        }
                                        if (a.distance > b.distance) {
                                            return 1;
                                        }
                                    });
                                })
                                    .catch(function (error) {
                                });
                            }
                        }
                    }
                }, function (err) {
                    _this.err = err.error;
                });
            }
        });
    }
    CategoryPage.prototype.ngOnInit = function () { };
    CategoryPage.prototype.distance = function (lat1, lon1, lat2, lon2, unit) {
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
    CategoryPage.prototype.resturantDetail = function (id) {
        this.api.detailId = id;
        this.ntrl.navigateForward("/restaurant-detail");
    };
    CategoryPage.ctorParameters = function () { return [
        { type: _service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
        { type: _service_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] },
        { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
    ]; };
    CategoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: "app-category",
            template: __webpack_require__(/*! raw-loader!./category.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/category/category.page.html"),
            styles: [__webpack_require__(/*! ./category.page.scss */ "./src/app/pages/category/category.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _service_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"],
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], CategoryPage);
    return CategoryPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-category-category-module-es5.js.map