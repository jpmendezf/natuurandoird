(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-grocery-category-grocery-category-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/grocery-category/grocery-category.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/grocery-category/grocery-category.page.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n\n  <ion-toolbar mode=\"md\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\" icon=\"ios-arrow-back\" text=\"\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Category</ion-title>\n    <!-- <ion-buttons slot=\"end\">\n      <ion-button>\n        <ion-icon src=\"../../../assets/icon-image/cart_ic.svg\">\n        </ion-icon>\n      </ion-button>\n\n    </ion-buttons> -->\n  </ion-toolbar>\n\n  <div class=\"search_div\">\n    <ion-searchbar placeholder=\"Search for Restaurant and dishes\" clearIcon=\"string\" [(ngModel)]=\"term\"></ion-searchbar>\n  </div>\n</ion-header>\n\n<ion-content>\n  <div class=\"store_div\">\n    <div class=\"product_div\" *ngFor=\"let item of category\" (click)=\"categoryDetail(item?.id)\">\n      <img [src]=\"item?.imagePath + item?.image\">\n      <h3 class=\"name\">{{item?.name}}</h3>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/grocery-category/grocery-category.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/grocery-category/grocery-category.module.ts ***!
  \*******************************************************************/
/*! exports provided: GroceryCategoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroceryCategoryPageModule", function() { return GroceryCategoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _grocery_category_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./grocery-category.page */ "./src/app/pages/grocery-category/grocery-category.page.ts");







var routes = [
    {
        path: '',
        component: _grocery_category_page__WEBPACK_IMPORTED_MODULE_6__["GroceryCategoryPage"]
    }
];
var GroceryCategoryPageModule = /** @class */ (function () {
    function GroceryCategoryPageModule() {
    }
    GroceryCategoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_grocery_category_page__WEBPACK_IMPORTED_MODULE_6__["GroceryCategoryPage"]]
        })
    ], GroceryCategoryPageModule);
    return GroceryCategoryPageModule;
}());



/***/ }),

/***/ "./src/app/pages/grocery-category/grocery-category.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/grocery-category/grocery-category.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar ion-title {\n  font-family: \"fivo-regular\";\n  text-transform: uppercase;\n}\nion-header ion-toolbar ion-back-button {\n  color: var(--ion-color-green);\n}\nion-header .search_div {\n  margin: 0px 8px;\n}\nion-content .store_div {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  padding: 10px 16px 10px 16px;\n  -webkit-box-flex: 1;\n          flex: 1 1;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\nion-content .store_div .product_div {\n  width: 48%;\n  border-radius: 5px;\n  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);\n  padding: 10px 7px;\n  margin-bottom: 20px;\n  text-align: center;\n}\nion-content .store_div .product_div .name {\n  margin-top: 5px;\n  font-size: 18px;\n  color: var(--light-black-color);\n  font-family: \"fivo-regular\";\n  margin-bottom: 2px;\n}\nion-content .store_div .product_div img {\n  height: 123px;\n  width: 100%;\n  -o-object-fit: scale-down;\n     object-fit: scale-down;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ3JvY2VyeS1jYXRlZ29yeS9DOlxcVXNlcnNcXG9zaWFuXFxEZXNrdG9wXFxOQVRVVVQyLjAvc3JjXFxhcHBcXHBhZ2VzXFxncm9jZXJ5LWNhdGVnb3J5XFxncm9jZXJ5LWNhdGVnb3J5LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZ3JvY2VyeS1jYXRlZ29yeS9ncm9jZXJ5LWNhdGVnb3J5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNFLDJCQUFBO0VBQ0EseUJBQUE7QUNETjtBREdJO0VBQ0UsNkJBQUE7QUNETjtBRElFO0VBQ0UsZUFBQTtBQ0ZKO0FETUU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtVQUFBLFNBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0FDSEo7QURJSTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLCtDQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDRk47QURHTTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FDRFI7QURHTTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtBQ0RSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZ3JvY2VyeS1jYXRlZ29yeS9ncm9jZXJ5LWNhdGVnb3J5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xyXG4gIGlvbi10b29sYmFyIHtcclxuICAgIGlvbi10aXRsZSB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcImZpdm8tcmVndWxhclwiO1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgfVxyXG4gICAgaW9uLWJhY2stYnV0dG9uIHtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1ncmVlbik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5zZWFyY2hfZGl2IHtcclxuICAgIG1hcmdpbjogMHB4IDhweDtcclxuICB9XHJcbn1cclxuaW9uLWNvbnRlbnQge1xyXG4gIC5zdG9yZV9kaXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIHBhZGRpbmc6IDEwcHggMTZweCAxMHB4IDE2cHg7XHJcbiAgICBmbGV4OiAxIDE7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAucHJvZHVjdF9kaXYge1xyXG4gICAgICB3aWR0aDogNDglO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDdweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAubmFtZSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBjb2xvcjogdmFyKC0tbGlnaHQtYmxhY2stY29sb3IpO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcImZpdm8tcmVndWxhclwiO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxuICAgICAgfVxyXG4gICAgICBpbWcge1xyXG4gICAgICAgIGhlaWdodDogMTIzcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogc2NhbGUtZG93bjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcImZpdm8tcmVndWxhclwiO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tYmFjay1idXR0b24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyZWVuKTtcbn1cbmlvbi1oZWFkZXIgLnNlYXJjaF9kaXYge1xuICBtYXJnaW46IDBweCA4cHg7XG59XG5cbmlvbi1jb250ZW50IC5zdG9yZV9kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHBhZGRpbmc6IDEwcHggMTZweCAxMHB4IDE2cHg7XG4gIGZsZXg6IDEgMTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuaW9uLWNvbnRlbnQgLnN0b3JlX2RpdiAucHJvZHVjdF9kaXYge1xuICB3aWR0aDogNDglO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICBwYWRkaW5nOiAxMHB4IDdweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgLnN0b3JlX2RpdiAucHJvZHVjdF9kaXYgLm5hbWUge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWJsYWNrLWNvbG9yKTtcbiAgZm9udC1mYW1pbHk6IFwiZml2by1yZWd1bGFyXCI7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbn1cbmlvbi1jb250ZW50IC5zdG9yZV9kaXYgLnByb2R1Y3RfZGl2IGltZyB7XG4gIGhlaWdodDogMTIzcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBzY2FsZS1kb3duO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/grocery-category/grocery-category.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/grocery-category/grocery-category.page.ts ***!
  \*****************************************************************/
/*! exports provided: GroceryCategoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroceryCategoryPage", function() { return GroceryCategoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _service_grocery_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../service/grocery.service */ "./src/app/service/grocery.service.ts");
/* harmony import */ var _service_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../service/util.service */ "./src/app/service/util.service.ts");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");






var GroceryCategoryPage = /** @class */ (function () {
    function GroceryCategoryPage(api, util, gpi, nav) {
        var _this = this;
        this.api = api;
        this.util = util;
        this.gpi = gpi;
        this.nav = nav;
        this.category = [];
        this.err = {};
        this.term = "";
        this.util.startLoad();
        this.api.getDataWithToken("groceryCategory").subscribe(function (res) {
            if (res.success) {
                _this.util.dismissLoader();
                _this.category = res.data;
            }
        }, function (err) {
            _this.util.dismissLoader();
        });
    }
    GroceryCategoryPage.prototype.ngOnInit = function () { };
    GroceryCategoryPage.prototype.categoryDetail = function (id) {
        this.gpi.catId = id;
        this.nav.navigateForward("store");
    };
    GroceryCategoryPage.ctorParameters = function () { return [
        { type: _service_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
        { type: _service_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"] },
        { type: _service_grocery_service__WEBPACK_IMPORTED_MODULE_2__["GroceryService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"] }
    ]; };
    GroceryCategoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: "app-grocery-category",
            template: __webpack_require__(/*! raw-loader!./grocery-category.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/grocery-category/grocery-category.page.html"),
            styles: [__webpack_require__(/*! ./grocery-category.page.scss */ "./src/app/pages/grocery-category/grocery-category.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _service_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"],
            _service_grocery_service__WEBPACK_IMPORTED_MODULE_2__["GroceryService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]])
    ], GroceryCategoryPage);
    return GroceryCategoryPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-grocery-category-grocery-category-module-es5.js.map