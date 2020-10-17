(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-order-history-order-history-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/order-history/order-history.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/order-history/order-history.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n    <ion-toolbar mode=\"md\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"home\" icon=\"ios-arrow-back\" text=\"\"></ion-back-button>\n        </ion-buttons>\n        <ion-title class=\"ion-text-uppercase\">{{\"order_history_page.title\" | translate}}</ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-menu-button> </ion-menu-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div no-data *ngIf=\"data?.current_order?.length ==0 && data?.past_order?.length==0\">\n        <img src=\"../../../assets/image/no-data-icon-10.jpg\" alt=\"no data\">\n    </div>\n    <div class=\"ion-margin-horizontal\">\n\n        <p class=\"main_heading\" *ngIf=\"data?.current_order?.length > 0\">{{\"order_history_page.current_order\" | translate}}</p>\n        <div class=\"card_div\" *ngFor=\"let item of data?.current_order\">\n            <ion-item lines=\"none\" (click)=\"orderDetail(item.id)\">\n\n                <img [src]=\"item.shop.imagePath +item.shop.image\" />\n                <ion-label>\n                    <h3 class=\"name\">{{item?.shop?.name}} <span class=\"status\" *ngIf=\"item?.order_status=='DriverApproved' || item?.order_status=='Approved' || item?.order_status=='Prepare'\">\n              {{\"order_history_page.restaurant_accepted\" | translate}}</span>\n                        <span class=\"status\" *ngIf=\"item?.order_status=='DriverAtShop' || item?.order_status=='PickUpFood' || item?.order_status=='OnTheWay' || item?.order_status=='DriverReach'\">{{\"order_history_page.on_the_way\" | translate}}</span>\n                        <span class=\"status\" *ngIf=\" item?.order_status=='Pending'\">{{item?.order_status}}</span>\n                        <span class=\"status\" *ngIf=\" item?.order_status=='Delivered'\">{{item?.order_status}}</span>\n                        <span class=\"status\" *ngIf=\" item?.order_status=='Cancel'\">{{item?.order_status}}</span>\n\n                    </h3>\n                    <p class=\"address\">{{item?.shop?.address}}</p>\n                </ion-label>\n\n            </ion-item>\n\n            <ion-label>\n                <h3 class=\"menu\">{{\"order_history_page.items\" | translate}} <span class=\"ion-float-right\">{{item?.order_no}}</span></h3>\n                <p class=\"order\" *ngFor=\"let item of item.orderItems\">\n                    {{item?.quantity}} x {{item?.itemName}} {{item?.packageName}}\n                </p>\n            </ion-label>\n            <ion-label>\n                <h3 class=\"menu\">{{\"order_history_page.ordered_on\" | translate}}</h3>\n                <p class=\"order\">{{item?.date |date:' d MMM y'}} {{item?.time}}</p>\n            </ion-label>\n            <ion-label>\n                <h3 class=\"menu\">{{\"order_history_page.total_amount\" | translate}}</h3>\n                <ion-button class=\"trans-btn ion-float-right order_btn ion-text-capitalize\" (click)=\"presentAlert(item.id)\">\n                    {{\"order_history_page.cancel_order\" | translate}}\n                </ion-button>\n                <p class=\"order\">{{currency}}{{item?.payment}}</p>\n            </ion-label>\n        </div>\n        <p class=\"main_heading\"> {{\"order_history_page.past_order\" | translate}}</p>\n        <p *ngIf=\"data?.past_order?.length == 0 && data?.current_order?.length > 0\" class=\"no_data_p\"> {{\"order_history_page.no_data\" | translate}} </p>\n        <div class=\"card_div\" *ngFor=\"let item of data?.past_order\">\n            <ion-item lines=\"none\" (click)=\"orderDetail(item.id)\">\n\n                <img [src]=\"item.shop.imagePath +item.shop.image\" />\n                <ion-label>\n                    <h3 class=\"name\">{{item?.shop?.name}} <span class=\"status\" slot=\"end\">{{item?.order_status}}</span></h3>\n                    <p class=\"address\">{{item?.shop?.address}}</p>\n                </ion-label>\n            </ion-item>\n\n            <ion-label>\n                <h3 class=\"menu\">{{\"order_history_page.items\" | translate}} <span class=\"ion-float-right\">{{item?.order_no}}</span></h3>\n                <p class=\"order\" *ngFor=\"let item of item.orderItems\">\n                    {{item?.quantity}} x {{item?.itemName}} {{item?.packageName}}\n                </p>\n            </ion-label>\n            <ion-label>\n                <h3 class=\"menu\">{{\"order_history_page.ordered_on\" | translate}}</h3>\n                <p class=\"order\">{{item?.date |date:' d MMM y'}} {{item?.time}}</p>\n            </ion-label>\n            <ion-label>\n                <h3 class=\"menu\">{{\"order_history_page.total_amount\" | translate}}</h3>\n                <p class=\"order\">{{currency}}{{item?.payment}}</p>\n            </ion-label>\n        </div>\n    </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/order-history/order-history.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/order-history/order-history.module.ts ***!
  \*************************************************************/
/*! exports provided: OrderHistoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderHistoryPageModule", function() { return OrderHistoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _order_history_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order-history.page */ "./src/app/pages/order-history/order-history.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");








var routes = [
    {
        path: '',
        component: _order_history_page__WEBPACK_IMPORTED_MODULE_6__["OrderHistoryPage"]
    }
];
var OrderHistoryPageModule = /** @class */ (function () {
    function OrderHistoryPageModule() {
    }
    OrderHistoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_order_history_page__WEBPACK_IMPORTED_MODULE_6__["OrderHistoryPage"]]
        })
    ], OrderHistoryPageModule);
    return OrderHistoryPageModule;
}());



/***/ }),

/***/ "./src/app/pages/order-history/order-history.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/order-history/order-history.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content .status {\n  font-size: 12px;\n  font-family: \"Poppins-Medium\";\n  color: var(--ion-color-green);\n  align-self: center;\n}\nion-content .main_heading {\n  font-size: 16px;\n  font-family: \"WorkSans-Medium\";\n  color: var(--ion-color-darkBlue);\n}\nion-content .card_div {\n  border-radius: 5px;\n  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.16);\n  padding: 5px 10px 20px 10px;\n  margin-bottom: 20px;\n}\nion-content .card_div ion-item {\n  padding-top: 10px;\n  --padding-start: 0px;\n  --inner-padding-end: 0;\n  margin-bottom: 10px;\n  border-bottom: dashed 1px var(--ion-border-color);\n  padding-bottom: 10px;\n}\nion-content .card_div ion-item img {\n  border-radius: 3px;\n  height: 56px;\n  width: 56px;\n}\nion-content .card_div ion-item .status {\n  font-size: 12px;\n  font-family: \"Poppins-Medium\";\n  color: var(--ion-color-green);\n  align-self: center;\n}\nion-content .card_div ion-item ion-label {\n  margin-left: 10px;\n  margin-bottom: 0px;\n  margin-top: 2px;\n}\nion-content .card_div ion-item ion-label .name {\n  font-size: 14px;\n  font-family: \"Poppins-Medium\";\n  color: var(--ion-color-darkBlue);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\nion-content .card_div ion-item ion-label .address {\n  font-size: 10px;\n  font-family: \"Poppins-Regular\";\n  color: var(--ion-color-darkgray);\n  line-height: 13px;\n  width: 160px;\n}\nion-content .card_div .menu {\n  font-size: 12px;\n  font-family: \"Poppins-Medium\";\n  color: var(--ion-color-darkgray);\n}\nion-content .card_div .order {\n  color: var(--ion-color-darkBlue);\n  font-size: 12px;\n  font-family: \"Poppins-Medium\";\n}\nion-content .card_div .order_btn {\n  --color: var(--ion-color-red);\n  font-size: 12px;\n  --color-activated: none;\n  --background-activated: none;\n  --ripple-color: var(--ion-color-white);\n  --background-focused: none;\n}\n.item.sc-ion-label-md-h,\n.item .sc-ion-label-md-h {\n  white-space: normal !important;\n}\n.item.sc-ion-label-ios-h,\n.item .sc-ion-label-ios-h {\n  white-space: normal !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3JkZXItaGlzdG9yeS9DOlxcVXNlcnNcXG9zaWFuXFxEZXNrdG9wXFxOQVRVVVQyLjAvc3JjXFxhcHBcXHBhZ2VzXFxvcmRlci1oaXN0b3J5XFxvcmRlci1oaXN0b3J5LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvb3JkZXItaGlzdG9yeS9vcmRlci1oaXN0b3J5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGVBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7QUNBUjtBREVJO0VBQ0ksZUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0NBQUE7QUNBUjtBREVJO0VBQ0ksa0JBQUE7RUFDQSwrQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUNBUjtBRENRO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpREFBQTtFQUNBLG9CQUFBO0FDQ1o7QURBWTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNFaEI7QURBWTtFQUNJLGVBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7QUNFaEI7QURBWTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDRWhCO0FERGdCO0VBQ0ksZUFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0FDR3BCO0FERGdCO0VBQ0ksZUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNHcEI7QURDUTtFQUNJLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0FDQ1o7QURDUTtFQUNJLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0FDQ1o7QURDUTtFQUNJLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQ0FBQTtFQUNBLDBCQUFBO0FDQ1o7QURJQTs7RUFFSSw4QkFBQTtBQ0RKO0FESUE7O0VBRUksOEJBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29yZGVyLWhpc3Rvcnkvb3JkZXItaGlzdG9yeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAuc3RhdHVzIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIjtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyZWVuKTtcclxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAubWFpbl9oZWFkaW5nIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiV29ya1NhbnMtTWVkaXVtXCI7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrQmx1ZSk7XHJcbiAgICB9XHJcbiAgICAuY2FyZF9kaXYge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMTBweCAyMHB4IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICBpb24taXRlbSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxuICAgICAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogZGFzaGVkIDFweCB2YXIoLS1pb24tYm9yZGVyLWNvbG9yKTtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDU2cHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc3RhdHVzIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtTWVkaXVtXCI7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyZWVuKTtcclxuICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICAgICAgICAgICAgICAubmFtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtTWVkaXVtXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrQmx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYWRkcmVzcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtUmVndWxhclwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2dyYXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNjBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAubWVudSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIjtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrZ3JheSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5vcmRlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya0JsdWUpO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtTWVkaXVtXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5vcmRlcl9idG4ge1xyXG4gICAgICAgICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcmVkKTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAtLWNvbG9yLWFjdGl2YXRlZDogbm9uZTtcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogbm9uZTtcclxuICAgICAgICAgICAgLS1yaXBwbGUtY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLml0ZW0uc2MtaW9uLWxhYmVsLW1kLWgsXHJcbi5pdGVtIC5zYy1pb24tbGFiZWwtbWQtaCB7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pdGVtLnNjLWlvbi1sYWJlbC1pb3MtaCxcclxuLml0ZW0gLnNjLWlvbi1sYWJlbC1pb3MtaCB7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XHJcbn0iLCJpb24tY29udGVudCAuc3RhdHVzIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zLU1lZGl1bVwiO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyZWVuKTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgLm1haW5faGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwiV29ya1NhbnMtTWVkaXVtXCI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya0JsdWUpO1xufVxuaW9uLWNvbnRlbnQgLmNhcmRfZGl2IHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAwcHggMnB4IDZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgcGFkZGluZzogNXB4IDEwcHggMjBweCAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuaW9uLWNvbnRlbnQgLmNhcmRfZGl2IGlvbi1pdGVtIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBib3JkZXItYm90dG9tOiBkYXNoZWQgMXB4IHZhcigtLWlvbi1ib3JkZXItY29sb3IpO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbmlvbi1jb250ZW50IC5jYXJkX2RpdiBpb24taXRlbSBpbWcge1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGhlaWdodDogNTZweDtcbiAgd2lkdGg6IDU2cHg7XG59XG5pb24tY29udGVudCAuY2FyZF9kaXYgaW9uLWl0ZW0gLnN0YXR1cyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1ncmVlbik7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbmlvbi1jb250ZW50IC5jYXJkX2RpdiBpb24taXRlbSBpb24tbGFiZWwge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBtYXJnaW4tdG9wOiAycHg7XG59XG5pb24tY29udGVudCAuY2FyZF9kaXYgaW9uLWl0ZW0gaW9uLWxhYmVsIC5uYW1lIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zLU1lZGl1bVwiO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtCbHVlKTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuaW9uLWNvbnRlbnQgLmNhcmRfZGl2IGlvbi1pdGVtIGlvbi1sYWJlbCAuYWRkcmVzcyB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1SZWd1bGFyXCI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2dyYXkpO1xuICBsaW5lLWhlaWdodDogMTNweDtcbiAgd2lkdGg6IDE2MHB4O1xufVxuaW9uLWNvbnRlbnQgLmNhcmRfZGl2IC5tZW51IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zLU1lZGl1bVwiO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtncmF5KTtcbn1cbmlvbi1jb250ZW50IC5jYXJkX2RpdiAub3JkZXIge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtCbHVlKTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zLU1lZGl1bVwiO1xufVxuaW9uLWNvbnRlbnQgLmNhcmRfZGl2IC5vcmRlcl9idG4ge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcmVkKTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICAtLWNvbG9yLWFjdGl2YXRlZDogbm9uZTtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogbm9uZTtcbiAgLS1yaXBwbGUtY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiBub25lO1xufVxuXG4uaXRlbS5zYy1pb24tbGFiZWwtbWQtaCxcbi5pdGVtIC5zYy1pb24tbGFiZWwtbWQtaCB7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcbn1cblxuLml0ZW0uc2MtaW9uLWxhYmVsLWlvcy1oLFxuLml0ZW0gLnNjLWlvbi1sYWJlbC1pb3MtaCB7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/order-history/order-history.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/order-history/order-history.page.ts ***!
  \***********************************************************/
/*! exports provided: OrderHistoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderHistoryPage", function() { return OrderHistoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_util_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../service/util.service */ "./src/app/service/util.service.ts");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");






var OrderHistoryPage = /** @class */ (function () {
    function OrderHistoryPage(ntrl, api, alertController, util, translate) {
        this.ntrl = ntrl;
        this.api = api;
        this.alertController = alertController;
        this.util = util;
        this.translate = translate;
        this.data = {};
    }
    OrderHistoryPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.currency = this.api.currency;
        this.util.startLoad();
        this.api.getDataWithToken("userOrder").subscribe(function (res) {
            if (res.success) {
                _this.data = res.data;
                _this.util.dismissLoader();
            }
        });
    };
    OrderHistoryPage.prototype.ngOnInit = function () { };
    OrderHistoryPage.prototype.back = function () {
        this.ntrl.back();
    };
    OrderHistoryPage.prototype.orderDetail = function (id) {
        this.api.orderID = id;
        this.ntrl.navigateForward(["order-detail"]);
    };
    OrderHistoryPage.prototype.presentAlert = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.translate.get("cancel_order_alert").subscribe(function (val) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var alert;
                    var _this = this;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.alertController.create({
                                    header: val.title,
                                    message: val.text,
                                    buttons: [
                                        {
                                            text: val.yes,
                                            role: "yes",
                                            cssClass: "secondary",
                                            handler: function () {
                                                _this.util.startLoad();
                                                _this.api.getDataWithToken("cancelOrder/" + id).subscribe(function (res) {
                                                    if (res.success) {
                                                        _this.util.presentToast(res.msg);
                                                        _this.api.getDataWithToken("userOrder").subscribe(function (res) {
                                                            if (res.success) {
                                                                _this.data = res.data;
                                                                _this.util.dismissLoader();
                                                            }
                                                        }, function (err) {
                                                            _this.util.dismissLoader();
                                                        });
                                                    }
                                                }, function (err) {
                                                    _this.util.dismissLoader();
                                                });
                                            }
                                        },
                                        {
                                            text: val.no,
                                            role: "no",
                                            cssClass: "secondary",
                                            handler: function () { }
                                        }
                                    ]
                                })];
                            case 1:
                                alert = _a.sent();
                                return [4 /*yield*/, alert.present()];
                            case 2:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    OrderHistoryPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: _service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: _service_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }
    ]; };
    OrderHistoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-order-history",
            template: __webpack_require__(/*! raw-loader!./order-history.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/order-history/order-history.page.html"),
            styles: [__webpack_require__(/*! ./order-history.page.scss */ "./src/app/pages/order-history/order-history.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _service_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])
    ], OrderHistoryPage);
    return OrderHistoryPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-order-history-order-history-module-es5.js.map