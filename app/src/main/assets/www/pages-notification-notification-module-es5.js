(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-notification-notification-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/notification/notification.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/notification/notification.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n    <ion-toolbar mode=\"md\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"home\" icon=\"ios-arrow-back\" text=\"\"></ion-back-button>\n        </ion-buttons>\n        <ion-title class=\"ion-text-uppercase\">{{\"notification_page.title\" | translate}}</ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div no-data *ngIf=\"data?.length == 0\">\n        <img src=\"../../../assets/image/no-data-icon-10.jpg\" alt=\"no data\">\n    </div>\n    <div class=\"ion-margin-horizontal main_div\">\n\n        <div class=\"card_div\" *ngFor=\"let item of data\">\n            <div class=\"first_col\">\n                <img [src]=\"item.imagePath + item.image\" />\n            </div>\n            <div class=\"second_col\">\n                <h3 class=\"tittle\">{{item?.title}}</h3>\n                <p class=\"discount\">\n                    {{item?.message}}\n                </p>\n            </div>\n        </div>\n    </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/notification/notification.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/notification/notification.module.ts ***!
  \***********************************************************/
/*! exports provided: NotificationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPageModule", function() { return NotificationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _notification_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notification.page */ "./src/app/pages/notification/notification.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");








var routes = [
    {
        path: '',
        component: _notification_page__WEBPACK_IMPORTED_MODULE_6__["NotificationPage"]
    }
];
var NotificationPageModule = /** @class */ (function () {
    function NotificationPageModule() {
    }
    NotificationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_notification_page__WEBPACK_IMPORTED_MODULE_6__["NotificationPage"]]
        })
    ], NotificationPageModule);
    return NotificationPageModule;
}());



/***/ }),

/***/ "./src/app/pages/notification/notification.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/notification/notification.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content .main_div {\n  padding-bottom: 10px;\n}\nion-content .main_div .card_div {\n  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.16);\n  margin-top: 20px;\n  display: -webkit-box;\n  display: flex;\n  border-radius: 5px;\n  height: 95px;\n}\nion-content .main_div .card_div .first_col {\n  width: 24%;\n}\nion-content .main_div .card_div .first_col img {\n  height: 100%;\n  border-radius: 5px;\n}\nion-content .main_div .card_div .second_col {\n  padding-left: 10px;\n  width: 73%;\n  position: relative;\n}\nion-content .main_div .card_div .second_col .tittle {\n  font-size: 16px;\n  font-family: \"Poppins-SemiBold\";\n  color: var(--ion-color-darkBlue);\n  margin-top: 10px;\n  margin-bottom: 0px;\n}\nion-content .main_div .card_div .second_col .discount {\n  font-size: 12px;\n  font-family: \"Poppins-Regular\";\n  color: var(--ion-color-gray);\n  margin-top: 3px;\n  margin-bottom: 3px;\n}\nion-content .main_div .card_div .second_col .last_div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\nion-content .main_div .card_div .second_col .last_div .coopan_div {\n  height: 20px;\n  border: dashed 1px var(--ion-color-border-red);\n  background-color: var(--ion-color-lbl-color);\n  padding: 3px 8px;\n}\nion-content .main_div .card_div .second_col .last_div .coopan_div .coopan {\n  font-size: 10px;\n  font-family: \"WorkSans_Regular\";\n  color: var(--ion-color-black);\n  margin: 0px;\n}\nion-content .main_div .card_div .second_col .last_div .trans-btn {\n  font-size: 10px;\n  font-family: \"Poppins-Medium\";\n  --color: var(--ion-color-green);\n  margin: 0px;\n  height: 30px;\n}\nion-content .main_div .card_div .second_col .trans-btn {\n  font-size: 10px;\n  font-family: \"Poppins-Medium\";\n  --color: var(--ion-color-green);\n  margin: 0px;\n  height: 25px;\n}\n.hide_div {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbm90aWZpY2F0aW9uL0M6XFxVc2Vyc1xcb3NpYW5cXERlc2t0b3BcXE5BVFVVVDIuMC9zcmNcXGFwcFxccGFnZXNcXG5vdGlmaWNhdGlvblxcbm90aWZpY2F0aW9uLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxvQkFBQTtBQ0FKO0FEQ0k7RUFDRSwrQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDQ047QURBTTtFQUNFLFVBQUE7QUNFUjtBREFRO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FDRVY7QURDTTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FDQ1I7QURDUTtFQUNFLGVBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0NWO0FEQ1E7RUFDRSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0NWO0FEQ1E7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0FDQ1Y7QURBVTtFQUNFLFlBQUE7RUFDQSw4Q0FBQTtFQUNBLDRDQUFBO0VBQ0EsZ0JBQUE7QUNFWjtBRERZO0VBQ0UsZUFBQTtFQUNBLCtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0FDR2Q7QURBVTtFQUNFLGVBQUE7RUFDQSw2QkFBQTtFQUNBLCtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNFWjtBRENRO0VBQ0UsZUFBQTtFQUNBLDZCQUFBO0VBQ0EsK0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NWO0FETUE7RUFDRSxhQUFBO0FDSEYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAubWFpbl9kaXYge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAuY2FyZF9kaXYge1xyXG4gICAgICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICBoZWlnaHQ6IDk1cHg7XHJcbiAgICAgIC5maXJzdF9jb2wge1xyXG4gICAgICAgIHdpZHRoOiAyNCU7XHJcblxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5zZWNvbmRfY29sIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgd2lkdGg6IDczJTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgIC50aXR0bGUge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1TZW1pQm9sZFwiO1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrQmx1ZSk7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZGlzY291bnQge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1SZWd1bGFyXCI7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyYXkpO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubGFzdF9kaXYge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgIC5jb29wYW5fZGl2IHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IGRhc2hlZCAxcHggdmFyKC0taW9uLWNvbG9yLWJvcmRlci1yZWQpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGJsLWNvbG9yKTtcclxuICAgICAgICAgICAgcGFkZGluZzogM3B4IDhweDtcclxuICAgICAgICAgICAgLmNvb3BhbiB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIldvcmtTYW5zX1JlZ3VsYXJcIjtcclxuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWJsYWNrKTtcclxuICAgICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnRyYW5zLWJ0biB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIjtcclxuICAgICAgICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyZWVuKTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnRyYW5zLWJ0biB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zLU1lZGl1bVwiO1xyXG4gICAgICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyZWVuKTtcclxuICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmhpZGVfZGl2IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbiIsImlvbi1jb250ZW50IC5tYWluX2RpdiB7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuaW9uLWNvbnRlbnQgLm1haW5fZGl2IC5jYXJkX2RpdiB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGhlaWdodDogOTVweDtcbn1cbmlvbi1jb250ZW50IC5tYWluX2RpdiAuY2FyZF9kaXYgLmZpcnN0X2NvbCB7XG4gIHdpZHRoOiAyNCU7XG59XG5pb24tY29udGVudCAubWFpbl9kaXYgLmNhcmRfZGl2IC5maXJzdF9jb2wgaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5pb24tY29udGVudCAubWFpbl9kaXYgLmNhcmRfZGl2IC5zZWNvbmRfY29sIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB3aWR0aDogNzMlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5pb24tY29udGVudCAubWFpbl9kaXYgLmNhcmRfZGl2IC5zZWNvbmRfY29sIC50aXR0bGUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtU2VtaUJvbGRcIjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrQmx1ZSk7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbmlvbi1jb250ZW50IC5tYWluX2RpdiAuY2FyZF9kaXYgLnNlY29uZF9jb2wgLmRpc2NvdW50IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zLVJlZ3VsYXJcIjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1ncmF5KTtcbiAgbWFyZ2luLXRvcDogM3B4O1xuICBtYXJnaW4tYm90dG9tOiAzcHg7XG59XG5pb24tY29udGVudCAubWFpbl9kaXYgLmNhcmRfZGl2IC5zZWNvbmRfY29sIC5sYXN0X2RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbmlvbi1jb250ZW50IC5tYWluX2RpdiAuY2FyZF9kaXYgLnNlY29uZF9jb2wgLmxhc3RfZGl2IC5jb29wYW5fZGl2IHtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXI6IGRhc2hlZCAxcHggdmFyKC0taW9uLWNvbG9yLWJvcmRlci1yZWQpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGJsLWNvbG9yKTtcbiAgcGFkZGluZzogM3B4IDhweDtcbn1cbmlvbi1jb250ZW50IC5tYWluX2RpdiAuY2FyZF9kaXYgLnNlY29uZF9jb2wgLmxhc3RfZGl2IC5jb29wYW5fZGl2IC5jb29wYW4ge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIldvcmtTYW5zX1JlZ3VsYXJcIjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1ibGFjayk7XG4gIG1hcmdpbjogMHB4O1xufVxuaW9uLWNvbnRlbnQgLm1haW5fZGl2IC5jYXJkX2RpdiAuc2Vjb25kX2NvbCAubGFzdF9kaXYgLnRyYW5zLWJ0biB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIjtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyZWVuKTtcbiAgbWFyZ2luOiAwcHg7XG4gIGhlaWdodDogMzBweDtcbn1cbmlvbi1jb250ZW50IC5tYWluX2RpdiAuY2FyZF9kaXYgLnNlY29uZF9jb2wgLnRyYW5zLWJ0biB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIjtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyZWVuKTtcbiAgbWFyZ2luOiAwcHg7XG4gIGhlaWdodDogMjVweDtcbn1cblxuLmhpZGVfZGl2IHtcbiAgZGlzcGxheTogbm9uZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/notification/notification.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/notification/notification.page.ts ***!
  \*********************************************************/
/*! exports provided: NotificationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPage", function() { return NotificationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_util_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../service/util.service */ "./src/app/service/util.service.ts");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var NotificationPage = /** @class */ (function () {
    function NotificationPage(ntrl, api, util) {
        var _this = this;
        this.ntrl = ntrl;
        this.api = api;
        this.util = util;
        this.data = [];
        this.util.startLoad();
        this.api.getDataWithToken("viewNotification").subscribe(function (res) {
            if (res.success) {
                _this.data = res.data;
            }
            _this.util.dismissLoader();
        }, function () {
            _this.util.dismissLoader();
        });
    }
    NotificationPage.prototype.ngOnInit = function () { };
    NotificationPage.prototype.back = function () {
        this.ntrl.back();
    };
    NotificationPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: _service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
        { type: _service_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"] }
    ]; };
    NotificationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-notification",
            template: __webpack_require__(/*! raw-loader!./notification.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/notification/notification.page.html"),
            styles: [__webpack_require__(/*! ./notification.page.scss */ "./src/app/pages/notification/notification.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            _service_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"]])
    ], NotificationPage);
    return NotificationPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-notification-notification-module-es5.js.map