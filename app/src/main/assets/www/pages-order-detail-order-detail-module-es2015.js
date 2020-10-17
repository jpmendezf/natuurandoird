(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-order-detail-order-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/order-detail/order-detail.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/order-detail/order-detail.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n    <ion-toolbar mode=\"md\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"home\" icon=\"ios-arrow-back\" text=\"\"></ion-back-button>\n        </ion-buttons>\n        <ion-title class=\"ion-text-uppercase\">{{\"order_detail_page.title\" | translate}}</ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-menu-button> </ion-menu-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"ion-margin-horizontal\">\n        <p class=\"main_heading\">{{\"order_detail_page.order_summary\" | translate}}</p>\n        <div class=\"card_div\">\n            <ion-item lines=\"none\">\n                <img [src]=\"data?.shop?.imagePath + data?.shop?.image\" />\n                <ion-label class=\"first_label\">\n                    <h3 class=\"name\">{{data?.shop?.name}}<span class=\"status\" *ngIf=\"data?.order_status=='DriverApproved' || data?.order_status=='Approved' || data?.order_status=='Prepare'\">{{\"order_detail_page.restaurant_accepted\" | translate}}</span>\n                        <span class=\"status\" *ngIf=\"data?.order_status=='DriverAtShop' || data?.order_status=='PickUpFood' || data?.order_status=='OnTheWay' || data?.order_status=='DriverReach'\">{{\"order_detail_page.on_the_way\" | translate}}</span>\n                        <span class=\"status\" *ngIf=\" data?.order_status=='Pending'\">{{data?.order_status}}</span>\n                        <span class=\"status\" *ngIf=\" data?.order_status=='Delivered'\">{{data?.order_status}}</span>\n                        <span class=\"status\" *ngIf=\" data?.order_status=='Cancel'\">{{data?.order_status}}</span>\n                    </h3>\n                    <p class=\"address\">{{data?.shop?.address}}</p>\n                </ion-label>\n                <ion-button class=\"trans-btn\" (click)=\"orderStatus(data?.id)\" *ngIf=\"data?.order_status != 'Cancel' && data?.order_status !='Delivered'\">{{\"order_detail_page.order_status\" | translate}}\n                </ion-button>\n            </ion-item>\n            <ion-item lines=\"none\">\n                <ion-label>\n                    <h3 class=\"menu\">{{\"order_detail_page.bill_detail\" | translate}}<span class=\"ion-float-right\">{{data?.order_no}}</span></h3>\n                    <p class=\"order\" *ngFor=\"let item of data?.orderItems\">\n                        {{item?.quantity}} X {{item?.itemName}} {{item?.packageName}}\n                        <span class=\"ion-float-right\"> {{currency}}{{item?.price}}</span>\n                    </p>\n                </ion-label>\n            </ion-item>\n            <ion-item lines=\"none\">\n                <ion-label>\n                    <p class=\"order\">\n                        {{\"order_detail_page.item_total\" | translate}}\n                        <span class=\"ion-float-right\">{{currency}}{{this.itemtotal}}</span>\n                    </p>\n                    <p class=\"promocode order\">\n                        {{\"order_detail_page.promo_code\" | translate}} ({{\"app_name\" | translate}})<span class=\"ion-float-right\">\n              -{{currency}}{{data?.coupon_price}}</span>\n                    </p>\n                    <p class=\"order\">\n                        {{\"order_detail_page.del_charge\" | translate}}<span class=\"ion-float-right\">\n              {{currency}}{{data?.delivery_charge}}\n            </span>\n                    </p>\n                    <p class=\"order\">\n                        {{\"order_detail_page.rest_charge\" | translate}}<span class=\"ion-float-right\">\n              {{currency}}{{data?.shop_charge}}\n            </span>\n                    </p>\n                </ion-label>\n            </ion-item>\n            <ion-item lines=\"none\">\n                <ion-label>\n                    <p class=\"promocode order\">\n                        {{\"order_detail_page.total\" | translate}} <span class=\"ion-float-right\">{{currency}}{{data?.payment}}</span>\n                    </p>\n                </ion-label>\n            </ion-item>\n            <ion-item lines=\"none\" class=\"last_item\">\n                <ion-label>\n                    <p class=\"saving order\">\n                        {{\"order_detail_page.your_total_saving\" | translate}}<span class=\"ion-float-right\">{{currency}}{{data?.coupon_price}}</span>\n                    </p>\n                </ion-label>\n            </ion-item>\n        </div>\n    </div>\n    <div class=\"review_div\" *ngIf=\"data?.order_status=='Delivered'\">\n        <div class=\"btn_div ion-margin-horizontal\">\n            <ion-button fill=\"outline\" [class]=\"item_review == 1 ? 'delivery_btn hydrated' : 'rate_meal hydrated button-outline'\" (click)=\"item_review=1; delivery_rate=0\"> {{\"order_detail_page.rate_meal\" | translate}}</ion-button>\n            <ion-button fill=\"outline\" [class]=\"delivery_rate ==1 ? 'delivery_btn hydrated' : 'rate_meal hydrated button-outline'\" (click)=\"delivery_rate =1;item_review=0\"> {{\"order_detail_page.rate_delivery_boy\" | translate}}</ion-button>\n        </div>\n        <div class=\"rate_meal_div rate_delivery_div\" *ngIf=\"item_review \">\n            <p class=\"text_p\">{{\"order_detail_page.restaurant_review\" | translate}}</p>\n            <div class=\"first_div ion-margin-horizontal\">\n                <div class=\"img_div\">\n                    <img [src]=\"data?.shop?.imagePath + data?.shop?.image\" />\n                </div>\n                <div class=\"text_div\">\n                    <h3 class=\"name\">{{data?.shop?.name}}</h3>\n                    <div class=\"rate_star\">\n                        <ion-icon [name]=\"shopReview.rate >=1 ? 'star':'star-outline'\" (click)=\"shopReview.rate=1\"></ion-icon>\n                        <ion-icon [name]=\"shopReview.rate >=2 ? 'star':'star-outline'\" (click)=\"shopReview.rate=2\"></ion-icon>\n                        <ion-icon [name]=\"shopReview.rate >=3 ? 'star':'star-outline'\" (click)=\"shopReview.rate=3\"></ion-icon>\n                        <ion-icon [name]=\"shopReview.rate >=4 ? 'star':'star-outline'\" (click)=\"shopReview.rate=4\"></ion-icon>\n                        <ion-icon [name]=\"shopReview.rate >=5 ? 'star':'star-outline'\" (click)=\"shopReview.rate=5\"></ion-icon>\n                    </div>\n                    <ion-textarea placeholder=\"Type your review\" rows=\"2\" [(ngModel)]=\"shopReview.message\"></ion-textarea>\n                </div>\n            </div>\n            <div class=\"submit_div\">\n                <ion-button class=\"submit_btn\" (click)=\"shopReiviewData(shopReview)\" [disabled]=\"data?.shopReview_status == 1 ? 'true' :'false' \">{{\"order_detail_page.submit\" | translate}} </ion-button>\n            </div>\n            <ng-container>\n\n\n                <p class=\"text_p\">{{\"order_detail_page.restaurant_review\" | translate}}</p>\n\n                <div class=\"first_div ion-margin-horizontal\" *ngFor=\"let item of data?.orderItems\">\n                    <div class=\"img_div\">\n                        <img [src]=\"data?.shop?.imagePath + data?.shop?.image\" />\n                    </div>\n                    <div class=\"text_div\">\n                        <h3 class=\"name\">{{item?.itemName}} {{item?.packageName}}</h3>\n                        <div class=\"rate_star\">\n                            <ion-icon [name]=\"item.rate >= 1 ? 'star':'star-outline'\" (click)=\"item.rate=1\"></ion-icon>\n                            <ion-icon [name]=\"item.rate >= 2 ? 'star':'star-outline'\" (click)=\"item.rate=2\"></ion-icon>\n                            <ion-icon [name]=\"item.rate >= 3 ? 'star':'star-outline'\" (click)=\"item.rate=3\"></ion-icon>\n                            <ion-icon [name]=\"item.rate >= 4 ? 'star':'star-outline'\" (click)=\"item.rate=4\"></ion-icon>\n                            <ion-icon [name]=\"item.rate >= 5 ? 'star':'star-outline'\" (click)=\"item.rate=5\"></ion-icon>\n                        </div>\n                        <ion-textarea placeholder=\"Type your review\" rows=\"2\" [(ngModel)]=\"item.message\"></ion-textarea>\n                    </div>\n                </div>\n                <div class=\"submit_div\">\n                    <ion-button (click)=\"onSubmit(data.orderItems)\" class=\"submit_btn\" [disabled]=\"data?.review_status == 1 ? 'true' :'false' \">{{\"order_detail_page.submit\" | translate}}\n                    </ion-button>\n                </div>\n            </ng-container>\n        </div>\n        <div class=\"rate_delivery_div \" *ngIf=\"delivery_rate\">\n            <div class=\"first_div ion-margin-horizontal\">\n                <div class=\"img_div\">\n                    <img [src]=\"data?.driver?.imagePath + data?.driver?.image\" />\n                </div>\n                <div class=\"text_div\">\n                    <h3 class=\"name\">{{data?.driver?.name}}</h3>\n                    <div class=\"rate_star\">\n                        <ion-icon [name]=\"driverReview.rate >=1 ? 'star':'star-outline'\" (click)=\"driverReview.rate=1\"></ion-icon>\n                        <ion-icon [name]=\"driverReview.rate >=2 ? 'star':'star-outline'\" (click)=\"driverReview.rate=2\"></ion-icon>\n                        <ion-icon [name]=\"driverReview.rate >=3 ? 'star':'star-outline'\" (click)=\"driverReview.rate=3\"></ion-icon>\n                        <ion-icon [name]=\"driverReview.rate >=4 ? 'star':'star-outline'\" (click)=\"driverReview.rate=4\"></ion-icon>\n                        <ion-icon [name]=\"driverReview.rate >=5 ? 'star':'star-outline'\" (click)=\"driverReview.rate=5\"></ion-icon>\n                    </div>\n                    <p class=\"err\" *ngIf=\"err?.rate\">{{err?.rate}}</p>\n                </div>\n            </div>\n\n            <div class=\"ion-margin-horizontal\">\n                <ion-textarea placeholder=\"Type your review\" rows=\"2\" [(ngModel)]=\"driverReview.message\"></ion-textarea>\n                <p class=\"err\" *ngIf=\"err?.message\">{{err?.message}}</p>\n            </div>\n            <div class=\"submit_div\">\n                <ion-button class=\"submit_btn\" (click)=\"driverReviewData(driverReview)\" [disabled]=\"data?.driverReview_status == 1 ? 'true' :'false' \">{{\"order_detail_page.submit\" | translate}} </ion-button>\n            </div>\n        </div>\n    </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/order-detail/order-detail.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/order-detail/order-detail.module.ts ***!
  \***********************************************************/
/*! exports provided: OrderDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailPageModule", function() { return OrderDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _order_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order-detail.page */ "./src/app/pages/order-detail/order-detail.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








const routes = [
    {
        path: '',
        component: _order_detail_page__WEBPACK_IMPORTED_MODULE_6__["OrderDetailPage"]
    }
];
let OrderDetailPageModule = class OrderDetailPageModule {
};
OrderDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_order_detail_page__WEBPACK_IMPORTED_MODULE_6__["OrderDetailPage"]]
    })
], OrderDetailPageModule);



/***/ }),

/***/ "./src/app/pages/order-detail/order-detail.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/order-detail/order-detail.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content .main_heading {\n  font-size: 16px;\n  font-family: \"Poppins-Medium\";\n  color: var(--ion-color-darkBlue);\n}\nion-content .card_div {\n  border-radius: 5px;\n  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.16);\n  padding: 5px 10px 5px 10px;\n  margin-bottom: 20px;\n}\nion-content .card_div ion-item {\n  --padding-start: 0px;\n  --inner-padding-end: 0;\n  border-bottom: dashed 1px var(--ion-border-color);\n  padding-bottom: 10px;\n}\nion-content .card_div ion-item img {\n  height: 56px;\n  width: 56px;\n  border-radius: 3px;\n}\nion-content .card_div ion-item .status {\n  font-size: 12px;\n  font-family: \"Poppins-Medium\";\n  color: var(--ion-color-green);\n  align-self: center;\n}\nion-content .card_div ion-item .first_label {\n  margin-left: 10px;\n}\nion-content .card_div ion-item .trans-btn {\n  color: var(--ion-color-green);\n  position: absolute;\n  right: 0;\n  text-transform: capitalize;\n  font-size: 11px;\n  height: 14px;\n  bottom: 5px;\n  font-family: \"Poppins-Medium\";\n}\nion-content .card_div ion-item ion-label {\n  width: 160px;\n}\nion-content .card_div ion-item ion-label .name {\n  font-size: 14px;\n  font-family: \"Poppins-Medium\";\n  color: var(--ion-color-darkBlue);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\nion-content .card_div ion-item ion-label .address {\n  font-size: 10px;\n  font-family: \"Poppins-Regular\";\n  color: var(--ion-color-darkgray);\n  line-height: 15px;\n  width: 160px;\n}\nion-content .card_div .menu {\n  font-size: 12px;\n  font-family: \"WorkSans-Medium\";\n  color: var(--ion-color-darkgray);\n}\nion-content .card_div .order {\n  color: var(--ion-color-darkBlue);\n  font-size: 12px;\n  font-family: \"Poppins-Medium\";\n}\nion-content .card_div .order_btn {\n  --color: var(--ion-color-red);\n  font-size: 12px;\n}\nion-content .card_div .promocode {\n  color: var(--ion-color-green);\n}\nion-content .card_div .saving {\n  font-size: 14px;\n}\nion-content .card_div .last_item {\n  border: none;\n}\nion-content .review_div .btn_div {\n  display: -webkit-box;\n  display: flex;\n  margin-bottom: 15px;\n}\nion-content .review_div .btn_div ion-button {\n  height: 50px;\n  width: 50%;\n  --border-radius: 5px;\n  text-transform: capitalize;\n  font-size: 14px;\n  --color-activated: var(--ion-color-green);\n  font-family: \"Poppins-Medium\";\n}\nion-content .review_div .btn_div .rate_meal {\n  --border-color: var(--ion-color-green);\n  --color: var(--ion-color-green);\n}\nion-content .review_div .btn_div .delivery_btn {\n  --background: var(--ion-color-green);\n  --color: var(--ion-color-white);\n  --border-color: var(--ion-color-green);\n}\nion-content .review_div .rate_delivery_div .first_div {\n  display: -webkit-box;\n  display: flex;\n  margin-bottom: 10px;\n}\nion-content .review_div .rate_delivery_div .first_div .img_div {\n  width: 18%;\n}\nion-content .review_div .rate_delivery_div .first_div .img_div img {\n  height: 59px;\n  width: 59px;\n  border-radius: 50%;\n}\nion-content .review_div .rate_delivery_div .first_div .text_div {\n  padding-left: 15px;\n  width: 82%;\n}\nion-content .review_div .rate_delivery_div .first_div .text_div .name {\n  font-size: 14px;\n  color: var(--ion-color-darkBlue);\n  font-family: \"Poppins-Medium\";\n  margin-top: 7px;\n  margin-bottom: 0px;\n}\nion-content .review_div .rate_delivery_div .first_div .text_div .text {\n  font-size: 10px;\n  color: var(--ion-color-darkBlue);\n  font-family: \"Poppins-Regular\";\n  margin-top: 5px;\n}\nion-content .review_div .rate_delivery_div .first_div .text_div .rate_star {\n  margin-top: 8px;\n  margin-bottom: 8px;\n}\nion-content .review_div .rate_delivery_div .first_div .text_div .rate_star ion-icon {\n  color: var(--ion-color-green);\n  height: 17px;\n  width: 19px;\n}\nion-content .review_div .rate_delivery_div .star_div {\n  text-align: center;\n}\nion-content .review_div .rate_delivery_div .star_div ion-icon {\n  width: 24px;\n  height: 22px;\n  color: var(--ion-color-green);\n}\nion-content .review_div .rate_delivery_div ion-textarea {\n  border: solid 1px var(--ion-color-darkBlue);\n  border-radius: 5px;\n  --placeholder-color: var(--ion-color-darkgray);\n  --placeholder-font-style: \"Poppins-Italic\";\n  font-family: \"Poppins-Italic\";\n  font-size: 13px;\n  height: 50px;\n}\nion-content .review_div .rate_delivery_div .submit_btn {\n  height: 50px;\n  --border-radius: 25px 0px 0px 25px;\n  --background: var(--ion-color-btn-color);\n  --color: var(--ion-color-white);\n  text-transform: uppercase;\n  margin-top: 30px;\n  margin-right: 0;\n  width: 100px;\n  --box-shadow: none;\n}\nion-content .review_div .rate_meal_div .text_p {\n  font-size: 14px;\n  color: var(--ion-color-darkBlue);\n  font-family: \"Poppins-Medium\";\n  padding-left: 16px;\n}\nion-content .review_div .rate_meal_div .text_div .rate_star {\n  margin-top: 8px;\n  margin-bottom: 8px;\n}\nion-content .review_div .rate_meal_div .text_div .rate_star ion-icon {\n  color: var(--ion-color-green);\n  height: 17px;\n  width: 19px;\n}\nion-content .review_div .submit_div {\n  margin-bottom: 5px;\n  text-align: end;\n}\n.item.sc-ion-label-md-h,\n.item .sc-ion-label-md-h {\n  white-space: normal;\n}\n.item.sc-ion-label-ios-h,\n.item .sc-ion-label-ios-h {\n  white-space: normal !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3JkZXItZGV0YWlsL0M6XFxVc2Vyc1xcb3NpYW5cXERlc2t0b3BcXE5BVFVVVDIuMC9zcmNcXGFwcFxccGFnZXNcXG9yZGVyLWRldGFpbFxcb3JkZXItZGV0YWlsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvb3JkZXItZGV0YWlsL29yZGVyLWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtBQ0FKO0FERUU7RUFDRSxrQkFBQTtFQUNBLCtDQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtBQ0FKO0FEQ0k7RUFDRSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaURBQUE7RUFDQSxvQkFBQTtBQ0NOO0FEQU07RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDRVI7QURBTTtFQUNFLGVBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7QUNFUjtBREFNO0VBQ0UsaUJBQUE7QUNFUjtBREFNO0VBQ0UsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0FDRVI7QURBTTtFQUNFLFlBQUE7QUNFUjtBRERRO0VBQ0UsZUFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0FDR1Y7QUREUTtFQUNFLGVBQUE7RUFDQSw4QkFBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDR1Y7QURDSTtFQUNFLGVBQUE7RUFDQSw4QkFBQTtFQUNBLGdDQUFBO0FDQ047QURDSTtFQUNFLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0FDQ047QURDSTtFQUNFLDZCQUFBO0VBQ0EsZUFBQTtBQ0NOO0FEQ0k7RUFDRSw2QkFBQTtBQ0NOO0FEQ0k7RUFDRSxlQUFBO0FDQ047QURDSTtFQUNFLFlBQUE7QUNDTjtBREdJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsbUJBQUE7QUNETjtBREdNO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLHlDQUFBO0VBQ0EsNkJBQUE7QUNEUjtBREdNO0VBQ0Usc0NBQUE7RUFDQSwrQkFBQTtBQ0RSO0FER007RUFDRSxvQ0FBQTtFQUNBLCtCQUFBO0VBQ0Esc0NBQUE7QUNEUjtBREtNO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsbUJBQUE7QUNIUjtBREtRO0VBQ0UsVUFBQTtBQ0hWO0FESVU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDRlo7QURLUTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQ0hWO0FESVU7RUFDRSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0ZaO0FESVU7RUFDRSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUNGWjtBRElVO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FDRlo7QURHWTtFQUNFLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNEZDtBRE1NO0VBQ0Usa0JBQUE7QUNKUjtBREtRO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtBQ0hWO0FETU07RUFDRSwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsOENBQUE7RUFDQSwwQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNKUjtBRE1NO0VBQ0UsWUFBQTtFQUNBLGtDQUFBO0VBQ0Esd0NBQUE7RUFDQSwrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDSlI7QURRTTtFQUNFLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7QUNOUjtBRFVRO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FDUlY7QURTVTtFQUNFLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNQWjtBRFlJO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FDVk47QURlQTs7RUFFRSxtQkFBQTtBQ1pGO0FEY0E7O0VBRUUsOEJBQUE7QUNYRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29yZGVyLWRldGFpbC9vcmRlci1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gIC5tYWluX2hlYWRpbmcge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIjtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya0JsdWUpO1xyXG4gIH1cclxuICAuY2FyZF9kaXYge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG4gICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xyXG4gICAgICBib3JkZXItYm90dG9tOiBkYXNoZWQgMXB4IHZhcigtLWlvbi1ib3JkZXItY29sb3IpO1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAgaW1nIHtcclxuICAgICAgICBoZWlnaHQ6IDU2cHg7XHJcbiAgICAgICAgd2lkdGg6IDU2cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICB9XHJcbiAgICAgIC5zdGF0dXMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zLU1lZGl1bVwiO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZ3JlZW4pO1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICAuZmlyc3RfbGFiZWwge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC50cmFucy1idG4ge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZ3JlZW4pO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgIGJvdHRvbTogNXB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtTWVkaXVtXCI7XHJcbiAgICAgIH1cclxuICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICB3aWR0aDogMTYwcHg7XHJcbiAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIjtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya0JsdWUpO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFkZHJlc3Mge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1SZWd1bGFyXCI7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtncmF5KTtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm1lbnUge1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIldvcmtTYW5zLU1lZGl1bVwiO1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtncmF5KTtcclxuICAgIH1cclxuICAgIC5vcmRlciB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya0JsdWUpO1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtTWVkaXVtXCI7XHJcbiAgICB9XHJcbiAgICAub3JkZXJfYnRuIHtcclxuICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXJlZCk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuICAgIC5wcm9tb2NvZGUge1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyZWVuKTtcclxuICAgIH1cclxuICAgIC5zYXZpbmcge1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgICAubGFzdF9pdGVtIHtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuICAucmV2aWV3X2RpdiB7XHJcbiAgICAuYnRuX2RpdiB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcblxyXG4gICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgLS1jb2xvci1hY3RpdmF0ZWQ6IHZhcigtLWlvbi1jb2xvci1ncmVlbik7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIjtcclxuICAgICAgfVxyXG4gICAgICAucmF0ZV9tZWFsIHtcclxuICAgICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyZWVuKTtcclxuICAgICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZ3JlZW4pO1xyXG4gICAgICB9XHJcbiAgICAgIC5kZWxpdmVyeV9idG4ge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWdyZWVuKTtcclxuICAgICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG4gICAgICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZ3JlZW4pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAucmF0ZV9kZWxpdmVyeV9kaXYge1xyXG4gICAgICAuZmlyc3RfZGl2IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblxyXG4gICAgICAgIC5pbWdfZGl2IHtcclxuICAgICAgICAgIHdpZHRoOiAxOCU7XHJcbiAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDU5cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1OXB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50ZXh0X2RpdiB7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgICB3aWR0aDogODIlO1xyXG4gICAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya0JsdWUpO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zLU1lZGl1bVwiO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA3cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC50ZXh0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtCbHVlKTtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1SZWd1bGFyXCI7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5yYXRlX3N0YXIge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZ3JlZW4pO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTdweDtcclxuICAgICAgICAgICAgICB3aWR0aDogMTlweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuc3Rhcl9kaXYge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICB3aWR0aDogMjRweDtcclxuICAgICAgICAgIGhlaWdodDogMjJweDtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZ3JlZW4pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpb24tdGV4dGFyZWEge1xyXG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4IHZhcigtLWlvbi1jb2xvci1kYXJrQmx1ZSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIC0tcGxhY2Vob2xkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrZ3JheSk7XHJcbiAgICAgICAgLS1wbGFjZWhvbGRlci1mb250LXN0eWxlOiBcIlBvcHBpbnMtSXRhbGljXCI7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1JdGFsaWNcIjtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5zdWJtaXRfYnRuIHtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAyNXB4IDBweCAwcHggMjVweDtcclxuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1idG4tY29sb3IpO1xyXG4gICAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAucmF0ZV9tZWFsX2RpdiB7XHJcbiAgICAgIC50ZXh0X3Age1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtCbHVlKTtcclxuICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zLU1lZGl1bVwiO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnRleHRfZGl2IHtcclxuICAgICAgICAucmF0ZV9zdGFyIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1ncmVlbik7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTdweDtcclxuICAgICAgICAgICAgd2lkdGg6IDE5cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuc3VibWl0X2RpdiB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLml0ZW0uc2MtaW9uLWxhYmVsLW1kLWgsXHJcbi5pdGVtIC5zYy1pb24tbGFiZWwtbWQtaCB7XHJcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxufVxyXG4uaXRlbS5zYy1pb24tbGFiZWwtaW9zLWgsXHJcbi5pdGVtIC5zYy1pb24tbGFiZWwtaW9zLWgge1xyXG4gIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcclxufVxyXG4iLCJpb24tY29udGVudCAubWFpbl9oZWFkaW5nIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zLU1lZGl1bVwiO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtCbHVlKTtcbn1cbmlvbi1jb250ZW50IC5jYXJkX2RpdiB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuaW9uLWNvbnRlbnQgLmNhcmRfZGl2IGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG4gIGJvcmRlci1ib3R0b206IGRhc2hlZCAxcHggdmFyKC0taW9uLWJvcmRlci1jb2xvcik7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuaW9uLWNvbnRlbnQgLmNhcmRfZGl2IGlvbi1pdGVtIGltZyB7XG4gIGhlaWdodDogNTZweDtcbiAgd2lkdGg6IDU2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cbmlvbi1jb250ZW50IC5jYXJkX2RpdiBpb24taXRlbSAuc3RhdHVzIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zLU1lZGl1bVwiO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyZWVuKTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgLmNhcmRfZGl2IGlvbi1pdGVtIC5maXJzdF9sYWJlbCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuaW9uLWNvbnRlbnQgLmNhcmRfZGl2IGlvbi1pdGVtIC50cmFucy1idG4ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyZWVuKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgaGVpZ2h0OiAxNHB4O1xuICBib3R0b206IDVweDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIjtcbn1cbmlvbi1jb250ZW50IC5jYXJkX2RpdiBpb24taXRlbSBpb24tbGFiZWwge1xuICB3aWR0aDogMTYwcHg7XG59XG5pb24tY29udGVudCAuY2FyZF9kaXYgaW9uLWl0ZW0gaW9uLWxhYmVsIC5uYW1lIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zLU1lZGl1bVwiO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtCbHVlKTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuaW9uLWNvbnRlbnQgLmNhcmRfZGl2IGlvbi1pdGVtIGlvbi1sYWJlbCAuYWRkcmVzcyB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1SZWd1bGFyXCI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2dyYXkpO1xuICBsaW5lLWhlaWdodDogMTVweDtcbiAgd2lkdGg6IDE2MHB4O1xufVxuaW9uLWNvbnRlbnQgLmNhcmRfZGl2IC5tZW51IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogXCJXb3JrU2Fucy1NZWRpdW1cIjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrZ3JheSk7XG59XG5pb24tY29udGVudCAuY2FyZF9kaXYgLm9yZGVyIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrQmx1ZSk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIjtcbn1cbmlvbi1jb250ZW50IC5jYXJkX2RpdiAub3JkZXJfYnRuIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXJlZCk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbmlvbi1jb250ZW50IC5jYXJkX2RpdiAucHJvbW9jb2RlIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1ncmVlbik7XG59XG5pb24tY29udGVudCAuY2FyZF9kaXYgLnNhdmluZyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbmlvbi1jb250ZW50IC5jYXJkX2RpdiAubGFzdF9pdGVtIHtcbiAgYm9yZGVyOiBub25lO1xufVxuaW9uLWNvbnRlbnQgLnJldmlld19kaXYgLmJ0bl9kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuaW9uLWNvbnRlbnQgLnJldmlld19kaXYgLmJ0bl9kaXYgaW9uLWJ1dHRvbiB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwJTtcbiAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LXNpemU6IDE0cHg7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiB2YXIoLS1pb24tY29sb3ItZ3JlZW4pO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zLU1lZGl1bVwiO1xufVxuaW9uLWNvbnRlbnQgLnJldmlld19kaXYgLmJ0bl9kaXYgLnJhdGVfbWVhbCB7XG4gIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZ3JlZW4pO1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZ3JlZW4pO1xufVxuaW9uLWNvbnRlbnQgLnJldmlld19kaXYgLmJ0bl9kaXYgLmRlbGl2ZXJ5X2J0biB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWdyZWVuKTtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbiAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1ncmVlbik7XG59XG5pb24tY29udGVudCAucmV2aWV3X2RpdiAucmF0ZV9kZWxpdmVyeV9kaXYgLmZpcnN0X2RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5pb24tY29udGVudCAucmV2aWV3X2RpdiAucmF0ZV9kZWxpdmVyeV9kaXYgLmZpcnN0X2RpdiAuaW1nX2RpdiB7XG4gIHdpZHRoOiAxOCU7XG59XG5pb24tY29udGVudCAucmV2aWV3X2RpdiAucmF0ZV9kZWxpdmVyeV9kaXYgLmZpcnN0X2RpdiAuaW1nX2RpdiBpbWcge1xuICBoZWlnaHQ6IDU5cHg7XG4gIHdpZHRoOiA1OXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5pb24tY29udGVudCAucmV2aWV3X2RpdiAucmF0ZV9kZWxpdmVyeV9kaXYgLmZpcnN0X2RpdiAudGV4dF9kaXYge1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIHdpZHRoOiA4MiU7XG59XG5pb24tY29udGVudCAucmV2aWV3X2RpdiAucmF0ZV9kZWxpdmVyeV9kaXYgLmZpcnN0X2RpdiAudGV4dF9kaXYgLm5hbWUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya0JsdWUpO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zLU1lZGl1bVwiO1xuICBtYXJnaW4tdG9wOiA3cHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbmlvbi1jb250ZW50IC5yZXZpZXdfZGl2IC5yYXRlX2RlbGl2ZXJ5X2RpdiAuZmlyc3RfZGl2IC50ZXh0X2RpdiAudGV4dCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrQmx1ZSk7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtUmVndWxhclwiO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5pb24tY29udGVudCAucmV2aWV3X2RpdiAucmF0ZV9kZWxpdmVyeV9kaXYgLmZpcnN0X2RpdiAudGV4dF9kaXYgLnJhdGVfc3RhciB7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuaW9uLWNvbnRlbnQgLnJldmlld19kaXYgLnJhdGVfZGVsaXZlcnlfZGl2IC5maXJzdF9kaXYgLnRleHRfZGl2IC5yYXRlX3N0YXIgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyZWVuKTtcbiAgaGVpZ2h0OiAxN3B4O1xuICB3aWR0aDogMTlweDtcbn1cbmlvbi1jb250ZW50IC5yZXZpZXdfZGl2IC5yYXRlX2RlbGl2ZXJ5X2RpdiAuc3Rhcl9kaXYge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24tY29udGVudCAucmV2aWV3X2RpdiAucmF0ZV9kZWxpdmVyeV9kaXYgLnN0YXJfZGl2IGlvbi1pY29uIHtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjJweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1ncmVlbik7XG59XG5pb24tY29udGVudCAucmV2aWV3X2RpdiAucmF0ZV9kZWxpdmVyeV9kaXYgaW9uLXRleHRhcmVhIHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0taW9uLWNvbG9yLWRhcmtCbHVlKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2dyYXkpO1xuICAtLXBsYWNlaG9sZGVyLWZvbnQtc3R5bGU6IFwiUG9wcGlucy1JdGFsaWNcIjtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1JdGFsaWNcIjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG5pb24tY29udGVudCAucmV2aWV3X2RpdiAucmF0ZV9kZWxpdmVyeV9kaXYgLnN1Ym1pdF9idG4ge1xuICBoZWlnaHQ6IDUwcHg7XG4gIC0tYm9yZGVyLXJhZGl1czogMjVweCAwcHggMHB4IDI1cHg7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWJ0bi1jb2xvcik7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgd2lkdGg6IDEwMHB4O1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG59XG5pb24tY29udGVudCAucmV2aWV3X2RpdiAucmF0ZV9tZWFsX2RpdiAudGV4dF9wIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtCbHVlKTtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIjtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xufVxuaW9uLWNvbnRlbnQgLnJldmlld19kaXYgLnJhdGVfbWVhbF9kaXYgLnRleHRfZGl2IC5yYXRlX3N0YXIge1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cbmlvbi1jb250ZW50IC5yZXZpZXdfZGl2IC5yYXRlX21lYWxfZGl2IC50ZXh0X2RpdiAucmF0ZV9zdGFyIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1ncmVlbik7XG4gIGhlaWdodDogMTdweDtcbiAgd2lkdGg6IDE5cHg7XG59XG5pb24tY29udGVudCAucmV2aWV3X2RpdiAuc3VibWl0X2RpdiB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgdGV4dC1hbGlnbjogZW5kO1xufVxuXG4uaXRlbS5zYy1pb24tbGFiZWwtbWQtaCxcbi5pdGVtIC5zYy1pb24tbGFiZWwtbWQtaCB7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG5cbi5pdGVtLnNjLWlvbi1sYWJlbC1pb3MtaCxcbi5pdGVtIC5zYy1pb24tbGFiZWwtaW9zLWgge1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/order-detail/order-detail.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/order-detail/order-detail.page.ts ***!
  \*********************************************************/
/*! exports provided: OrderDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailPage", function() { return OrderDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_util_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../service/util.service */ "./src/app/service/util.service.ts");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");






let OrderDetailPage = class OrderDetailPage {
    constructor(ntrl, api, util, translate) {
        this.ntrl = ntrl;
        this.api = api;
        this.util = util;
        this.translate = translate;
        this.data = {};
        this.shopReview = {};
        this.itemReview = {};
        this.driverReview = {};
        this.item_review = 1;
        this.rate = 0;
        this.err = {};
        this.currency = this.api.currency;
        this.util.startLoad();
        this.api.getDataWithToken("singleOrder/" + this.api.orderID).subscribe((res) => {
            if (res.success) {
                this.util.dismissLoader();
                this.data = res.data;
                this.itemtotal = 0;
                this.data.orderItems.forEach(element => {
                    this.itemtotal = this.itemtotal + element.price;
                    this.data.item_review.forEach(elreview => {
                        if (element.item == elreview.item_id) {
                            element.message = elreview.message;
                            element.rate = elreview.rate;
                        }
                    });
                });
                if (res.data.shopReview_status) {
                    this.shopReview = res.data.shop_review;
                }
                if (res.data.driverReview_status) {
                    this.driverReview = res.data.driver_review;
                }
            }
        }, err => {
            this.util.dismissLoader();
            this.err = err;
        });
    }
    ngOnInit() { }
    back() {
        this.ntrl.back();
    }
    onSubmit(item) {
        this.itemReview.itemData = [];
        item.forEach(element => {
            if (element.package_id) {
                let pusher = {
                    item_id: "",
                    rate: element.rate,
                    message: element.message,
                    package_id: element.package_id
                };
                this.itemReview.itemData.push(pusher);
            }
            else {
                let pusher = {
                    item_id: element.item,
                    rate: element.rate,
                    message: element.message,
                    package_id: ""
                };
                this.itemReview.itemData.push(pusher);
            }
        });
        this.itemReview.order_id = this.data.id;
        this.itemReview.customer_id = this.data.customer_id;
        this.api
            .postDataWithToken("addItemReview", this.itemReview)
            .subscribe((res) => {
            if (res.success) {
                this.translate.get('toasts').subscribe((val) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    this.util.presentToast(val.review_add_success);
                }));
                this.data.review_status = 1;
            }
        });
    }
    shopReiviewData(item) {
        this.shopReview.order_id = this.data.id;
        this.shopReview.customer_id = this.data.customer_id;
        this.shopReview.shop_id = this.data.shop_id;
        this.api
            .postDataWithToken("addShopReview", this.shopReview)
            .subscribe((res) => {
            if (res.success) {
                this.translate.get('toasts').subscribe((val) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    this.util.presentToast(val.shop_review_add_success);
                }));
                this.data.shopReview_status = 1;
            }
        });
    }
    orderStatus(id) {
        this.api.checkOrderStatus = id;
        this.ntrl.navigateForward("/timeline");
    }
    driverReviewData(item) {
        this.driverReview.order_id = this.data.id;
        this.driverReview.customer_id = this.data.customer_id;
        this.driverReview.deliveryBoy_id = this.data.deliveryBoy_id;
        this.api.postDataWithToken("addDriverReview", this.driverReview).subscribe((res) => {
            if (res.success) {
                this.err = {};
                this.translate.get('toasts').subscribe((val) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    this.util.presentToast(val.driver_review_add_success);
                }));
                this.data.driverReview_status = 1;
            }
        }, err => {
            this.err = err.error.errors;
        });
    }
};
OrderDetailPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _service_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }
];
OrderDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-order-detail",
        template: __webpack_require__(/*! raw-loader!./order-detail.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/order-detail/order-detail.page.html"),
        styles: [__webpack_require__(/*! ./order-detail.page.scss */ "./src/app/pages/order-detail/order-detail.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
        _service_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])
], OrderDetailPage);



/***/ })

}]);
//# sourceMappingURL=pages-order-detail-order-detail-module-es2015.js.map