(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-grocery-status-grocery-status-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/grocery-status/grocery-status.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/grocery-status/grocery-status.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n\n  <ion-toolbar mode=\"md\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\" icon=\"ios-arrow-back\" text=\"\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{\"grocery_status.order_status\" | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding-vertical\">\n  <div class=\"store_detail\">\n    <div class=\"img_div\">\n      <img [src]=\"data?.shop?.imagePath + data?.shop?.image\">\n    </div>\n    <div class=\"detail_div\">\n      <h3 class=\"name\">{{data?.shop?.name}}</h3>\n      <p class=\"address\">{{data?.shop?.address}}</p>\n    </div>\n  </div>\n\n  <div class=\"status_div\">\n    <ion-button class=\"order_btn\" (click)=\"orderStatus()\">\n      {{\"grocery_status.view_order\" | translate }}\n    </ion-button>\n    <div class=\"timeline\">\n      <div [class]=\"status >= 1 ? 'dot' : 'dot disbale'\" [ngClass]=\"{'pulsating-circle': status+1 == 1}\"></div>\n      <div [class]=\"status >= 2 ? 'lines' : 'lines disbale'\"></div>\n      <h2 class=\"text\">\n        {{\"grocery_status.order_confirm\" | translate }}\n      </h2>\n    </div>\n    <div class=\"timeline\">\n      <div [class]=\"status >= 2 ? 'dot' : 'dot disbale'\" [ngClass]=\"{'pulsating-circle': status == 2}\"></div>\n      <div [class]=\"status >= 3 ? 'lines' : 'lines disbale'\"></div>\n      <h2 class=\"text\">\n        {{\"grocery_status.ready\" | translate }}\n\n      </h2>\n    </div>\n    <div class=\"timeline\">\n      <div [class]=\"status >= 3 ? 'dot' : 'dot disbale'\" [ngClass]=\"{'pulsating-circle': status == 3}\"></div>\n      <div [class]=\"status >= 4 ? 'lines' : 'lines disbale'\"></div>\n      <h2 class=\"text\">\n        {{\"grocery_status.delivery\" | translate }}\n\n      </h2>\n    </div>\n    <div class=\"timeline\">\n      <div [class]=\"status >= 4 ? 'dot' : 'dot disbale'\" [ngClass]=\"{'pulsating-circle': status == 4}\"></div>\n      <div [class]=\"status >= 5 ? 'lines' : 'lines disbale'\"></div>\n      <h2 class=\"text\">\n        {{\"grocery_status.place\" | translate }}\n      </h2>\n    </div>\n    <div class=\"timeline\">\n      <div [class]=\"status >= 5 ? 'dot' : 'dot disbale'\" [ngClass]=\"{'pulsating-circle': status == 5}\"></div>\n      <div [class]=\"status >= 6 ? 'lines' : 'lines last disbale'\"></div>\n      <h2 class=\"text\">\n        {{\"grocery_status.delivered\" | translate }}\n\n      </h2>\n    </div>\n\n  </div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/grocery-status/grocery-status.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/grocery-status/grocery-status.module.ts ***!
  \***************************************************************/
/*! exports provided: GroceryStatusPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroceryStatusPageModule", function() { return GroceryStatusPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _grocery_status_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./grocery-status.page */ "./src/app/pages/grocery-status/grocery-status.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








const routes = [
    {
        path: '',
        component: _grocery_status_page__WEBPACK_IMPORTED_MODULE_6__["GroceryStatusPage"]
    }
];
let GroceryStatusPageModule = class GroceryStatusPageModule {
};
GroceryStatusPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_grocery_status_page__WEBPACK_IMPORTED_MODULE_6__["GroceryStatusPage"]]
    })
], GroceryStatusPageModule);



/***/ }),

/***/ "./src/app/pages/grocery-status/grocery-status.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/grocery-status/grocery-status.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar ion-title {\n  font-family: \"fivo-regular\";\n  text-transform: uppercase;\n}\nion-header ion-toolbar ion-back-button {\n  color: var(--ion-color-green);\n}\nion-content .store_detail {\n  border-radius: 5px;\n  box-shadow: 0px 2px 4px 0px rgba(0, 2, 4, 0.16);\n  height: 100px;\n  display: -webkit-box;\n  display: flex;\n  margin: 0px 16px 20px 16px;\n}\nion-content .store_detail .img_div {\n  width: 100px;\n  height: 100%;\n  min-width: 99px;\n  background-color: var(--light-green-color);\n  border-radius: 5px 0px 0px 5px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\nion-content .store_detail .img_div img {\n  height: 70px;\n  width: 70px;\n  -o-object-fit: scale-down;\n     object-fit: scale-down;\n}\nion-content .store_detail .detail_div {\n  padding: 20px 10px 10px 15px;\n}\nion-content .store_detail .detail_div .name {\n  font-size: 16px;\n  font-family: \"fivo-medium\";\n  color: var(--light-black-color);\n  margin-top: 0;\n  margin-bottom: 5px;\n}\nion-content .store_detail .detail_div .address {\n  font-size: 12px;\n  color: var(--border-color);\n  font-family: \"fivo-regular\";\n  margin: 0;\n  line-height: 17px;\n}\nion-content .status_div {\n  padding: 29px 32px 0px;\n  position: relative;\n}\nion-content .status_div .order_btn {\n  position: absolute;\n  right: 0;\n  top: 5px;\n  margin: 0;\n  height: 29px;\n  --border-radius: 14px 0px 0px 14px;\n  --box-shadow: none;\n  font-size: 10px;\n  font-family: \"fivo-regular\";\n}\nion-content .status_div .timeline {\n  display: -webkit-box;\n  display: flex;\n  position: relative;\n}\nion-content .status_div .timeline .lines {\n  -webkit-transition: all 1s ease;\n  transition: all 1s ease;\n  background: var(--ion-color-green);\n  width: 5px;\n}\nion-content .status_div .timeline .lines.disbale {\n  background: var(--light-gray);\n}\nion-content .status_div .timeline .lines.last {\n  opacity: 0;\n}\nion-content .status_div .timeline .dot {\n  height: 11px;\n  background: var(--ion-color-green);\n  width: 11px;\n  border-radius: 50%;\n  position: absolute;\n  top: 0px;\n  left: -3px;\n}\nion-content .status_div .timeline .dot.disbale {\n  background: var(--light-gray);\n}\nion-content .status_div .timeline .text {\n  font-size: 16px;\n  font-family: \"fivo-regular\";\n  color: var(--ion-color-darkBlue);\n  margin: 0;\n  padding-bottom: 28px;\n  margin-left: 22px;\n}\nion-content .status_div .timeline .pulsating-circle {\n  left: 2px;\n  top: 5px;\n  -webkit-transform: translateX(-50%) translateY(-50%);\n          transform: translateX(-50%) translateY(-50%);\n}\nion-content .status_div .timeline .pulsating-circle:before {\n  content: \"\";\n  position: relative;\n  display: block;\n  width: 300%;\n  height: 300%;\n  box-sizing: border-box;\n  margin-left: -100%;\n  margin-top: -100%;\n  border-radius: 45px;\n  background-color: var(--ion-color-green);\n  -webkit-animation: pulse-ring 1.25s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;\n          animation: pulse-ring 1.25s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;\n}\nion-content .status_div .timeline .pulsating-circle:after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  display: block;\n  width: 100%;\n  height: 100%;\n  background-color: var(--white);\n  border-radius: 15px;\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);\n  -webkit-animation: pulse-dot 1.25s cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite;\n          animation: pulse-dot 1.25s cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite;\n}\n@-webkit-keyframes pulse-ring {\n  0% {\n    -webkit-transform: scale(0.33);\n            transform: scale(0.33);\n  }\n  80%, 100% {\n    opacity: 0;\n  }\n}\n@keyframes pulse-ring {\n  0% {\n    -webkit-transform: scale(0.33);\n            transform: scale(0.33);\n  }\n  80%, 100% {\n    opacity: 0;\n  }\n}\n@-webkit-keyframes pulse-dot {\n  0% {\n    -webkit-transform: scale(0.8);\n            transform: scale(0.8);\n  }\n  50% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  100% {\n    -webkit-transform: scale(0.8);\n            transform: scale(0.8);\n  }\n}\n@keyframes pulse-dot {\n  0% {\n    -webkit-transform: scale(0.8);\n            transform: scale(0.8);\n  }\n  50% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  100% {\n    -webkit-transform: scale(0.8);\n            transform: scale(0.8);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ3JvY2VyeS1zdGF0dXMvQzpcXFVzZXJzXFxvc2lhblxcRGVza3RvcFxcTkFUVVVUMi4wL3NyY1xcYXBwXFxwYWdlc1xcZ3JvY2VyeS1zdGF0dXNcXGdyb2Nlcnktc3RhdHVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZ3JvY2VyeS1zdGF0dXMvZ3JvY2VyeS1zdGF0dXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0UsMkJBQUE7RUFDQSx5QkFBQTtBQ0ROO0FER0k7RUFDRSw2QkFBQTtBQ0ROO0FETUU7RUFDRSxrQkFBQTtFQUNBLCtDQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDBCQUFBO0FDSEo7QURJSTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLDBDQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0ZOO0FER007RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7QUNEUjtBRElJO0VBQ0UsNEJBQUE7QUNGTjtBRElNO0VBQ0UsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsK0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNGUjtBRElNO0VBQ0UsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7QUNGUjtBRE1FO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtBQ0pKO0FES0k7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0FDSE47QURLSTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGtCQUFBO0FDSE47QURJTTtFQUNFLCtCQUFBO0VBQUEsdUJBQUE7RUFDQSxrQ0FBQTtFQUNBLFVBQUE7QUNGUjtBREdRO0VBQ0UsNkJBQUE7QUNEVjtBREdRO0VBQ0UsVUFBQTtBQ0RWO0FESU07RUFDRSxZQUFBO0VBQ0Esa0NBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FDRlI7QURHUTtFQUNFLDZCQUFBO0FDRFY7QURJTTtFQUNFLGVBQUE7RUFDQSwyQkFBQTtFQUNBLGdDQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUNGUjtBRElNO0VBQ0UsU0FBQTtFQUNBLFFBQUE7RUFDQSxvREFBQTtVQUFBLDRDQUFBO0FDRlI7QURHUTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0NBQUE7RUFDQSxnRkFBQTtVQUFBLHdFQUFBO0FDRFY7QURJUTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLHNDQUFBO0VBQ0EseUZBQUE7VUFBQSxpRkFBQTtBQ0ZWO0FETU07RUFDRTtJQUNFLDhCQUFBO1lBQUEsc0JBQUE7RUNKUjtFRE1NO0lBRUUsVUFBQTtFQ0xSO0FBQ0Y7QURGTTtFQUNFO0lBQ0UsOEJBQUE7WUFBQSxzQkFBQTtFQ0pSO0VETU07SUFFRSxVQUFBO0VDTFI7QUFDRjtBRE9NO0VBQ0U7SUFDRSw2QkFBQTtZQUFBLHFCQUFBO0VDTFI7RURPTTtJQUNFLDJCQUFBO1lBQUEsbUJBQUE7RUNMUjtFRE9NO0lBQ0UsNkJBQUE7WUFBQSxxQkFBQTtFQ0xSO0FBQ0Y7QURKTTtFQUNFO0lBQ0UsNkJBQUE7WUFBQSxxQkFBQTtFQ0xSO0VET007SUFDRSwyQkFBQTtZQUFBLG1CQUFBO0VDTFI7RURPTTtJQUNFLDZCQUFBO1lBQUEscUJBQUE7RUNMUjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZ3JvY2VyeS1zdGF0dXMvZ3JvY2VyeS1zdGF0dXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XHJcbiAgaW9uLXRvb2xiYXIge1xyXG4gICAgaW9uLXRpdGxlIHtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiZml2by1yZWd1bGFyXCI7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB9XHJcbiAgICBpb24tYmFjay1idXR0b24ge1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyZWVuKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuaW9uLWNvbnRlbnQge1xyXG4gIC5zdG9yZV9kZXRhaWwge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggMHB4IHJnYmEoMCwgMiwgNCwgMC4xNik7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbjogMHB4IDE2cHggMjBweCAxNnB4O1xyXG4gICAgLmltZ19kaXYge1xyXG4gICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgbWluLXdpZHRoOiA5OXB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmVlbi1jb2xvcik7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweCAwcHggMHB4IDVweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgICAgIG9iamVjdC1maXQ6IHNjYWxlLWRvd247XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5kZXRhaWxfZGl2IHtcclxuICAgICAgcGFkZGluZzogMjBweCAxMHB4IDEwcHggMTVweDtcclxuXHJcbiAgICAgIC5uYW1lIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiZml2by1tZWRpdW1cIjtcclxuICAgICAgICBjb2xvcjogdmFyKC0tbGlnaHQtYmxhY2stY29sb3IpO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5hZGRyZXNzIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWJvcmRlci1jb2xvcik7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiZml2by1yZWd1bGFyXCI7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5zdGF0dXNfZGl2IHtcclxuICAgIHBhZGRpbmc6IDI5cHggMzJweCAwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAub3JkZXJfYnRuIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgdG9wOiA1cHg7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgaGVpZ2h0OiAyOXB4O1xyXG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDE0cHggMHB4IDBweCAxNHB4O1xyXG4gICAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiZml2by1yZWd1bGFyXCI7XHJcbiAgICB9XHJcbiAgICAudGltZWxpbmUge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIC5saW5lcyB7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWdyZWVuKTtcclxuICAgICAgICB3aWR0aDogNXB4O1xyXG4gICAgICAgICYuZGlzYmFsZSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1saWdodC1ncmF5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5sYXN0IHtcclxuICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5kb3Qge1xyXG4gICAgICAgIGhlaWdodDogMTFweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZ3JlZW4pO1xyXG4gICAgICAgIHdpZHRoOiAxMXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgbGVmdDogLTNweDtcclxuICAgICAgICAmLmRpc2JhbGUge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHQtZ3JheSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC50ZXh0IHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiZml2by1yZWd1bGFyXCI7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrQmx1ZSk7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyOHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMnB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5wdWxzYXRpbmctY2lyY2xlIHtcclxuICAgICAgICBsZWZ0OiAycHg7XHJcbiAgICAgICAgdG9wOiA1cHg7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgd2lkdGg6IDMwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDMwMCU7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IC0xMDAlO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogLTEwMCU7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0NXB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyZWVuKTtcclxuICAgICAgICAgIGFuaW1hdGlvbjogcHVsc2UtcmluZyAxLjI1cyBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKVxyXG4gICAgICAgICAgICBpbmZpbml0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDhweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICAgICAgICBhbmltYXRpb246IHB1bHNlLWRvdCAxLjI1cyBjdWJpYy1iZXppZXIoMC40NTUsIDAuMDMsIDAuNTE1LCAwLjk1NSkgLTAuNHNcclxuICAgICAgICAgICAgaW5maW5pdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIEBrZXlmcmFtZXMgcHVsc2UtcmluZyB7XHJcbiAgICAgICAgMCUge1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjMzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgODAlLFxyXG4gICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgQGtleWZyYW1lcyBwdWxzZS1kb3Qge1xyXG4gICAgICAgIDAlIHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgNTAlIHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcImZpdm8tcmVndWxhclwiO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tYmFjay1idXR0b24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyZWVuKTtcbn1cblxuaW9uLWNvbnRlbnQgLnN0b3JlX2RldGFpbCB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggMHB4IHJnYmEoMCwgMiwgNCwgMC4xNik7XG4gIGhlaWdodDogMTAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMHB4IDE2cHggMjBweCAxNnB4O1xufVxuaW9uLWNvbnRlbnQgLnN0b3JlX2RldGFpbCAuaW1nX2RpdiB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtaW4td2lkdGg6IDk5cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyZWVuLWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4IDBweCAwcHggNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbmlvbi1jb250ZW50IC5zdG9yZV9kZXRhaWwgLmltZ19kaXYgaW1nIHtcbiAgaGVpZ2h0OiA3MHB4O1xuICB3aWR0aDogNzBweDtcbiAgb2JqZWN0LWZpdDogc2NhbGUtZG93bjtcbn1cbmlvbi1jb250ZW50IC5zdG9yZV9kZXRhaWwgLmRldGFpbF9kaXYge1xuICBwYWRkaW5nOiAyMHB4IDEwcHggMTBweCAxNXB4O1xufVxuaW9uLWNvbnRlbnQgLnN0b3JlX2RldGFpbCAuZGV0YWlsX2RpdiAubmFtZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwiZml2by1tZWRpdW1cIjtcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWJsYWNrLWNvbG9yKTtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuaW9uLWNvbnRlbnQgLnN0b3JlX2RldGFpbCAuZGV0YWlsX2RpdiAuYWRkcmVzcyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHZhcigtLWJvcmRlci1jb2xvcik7XG4gIGZvbnQtZmFtaWx5OiBcImZpdm8tcmVndWxhclwiO1xuICBtYXJnaW46IDA7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xufVxuaW9uLWNvbnRlbnQgLnN0YXR1c19kaXYge1xuICBwYWRkaW5nOiAyOXB4IDMycHggMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5pb24tY29udGVudCAuc3RhdHVzX2RpdiAub3JkZXJfYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiA1cHg7XG4gIG1hcmdpbjogMDtcbiAgaGVpZ2h0OiAyOXB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDE0cHggMHB4IDBweCAxNHB4O1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC1mYW1pbHk6IFwiZml2by1yZWd1bGFyXCI7XG59XG5pb24tY29udGVudCAuc3RhdHVzX2RpdiAudGltZWxpbmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5pb24tY29udGVudCAuc3RhdHVzX2RpdiAudGltZWxpbmUgLmxpbmVzIHtcbiAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1ncmVlbik7XG4gIHdpZHRoOiA1cHg7XG59XG5pb24tY29udGVudCAuc3RhdHVzX2RpdiAudGltZWxpbmUgLmxpbmVzLmRpc2JhbGUge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1saWdodC1ncmF5KTtcbn1cbmlvbi1jb250ZW50IC5zdGF0dXNfZGl2IC50aW1lbGluZSAubGluZXMubGFzdCB7XG4gIG9wYWNpdHk6IDA7XG59XG5pb24tY29udGVudCAuc3RhdHVzX2RpdiAudGltZWxpbmUgLmRvdCB7XG4gIGhlaWdodDogMTFweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWdyZWVuKTtcbiAgd2lkdGg6IDExcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgbGVmdDogLTNweDtcbn1cbmlvbi1jb250ZW50IC5zdGF0dXNfZGl2IC50aW1lbGluZSAuZG90LmRpc2JhbGUge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1saWdodC1ncmF5KTtcbn1cbmlvbi1jb250ZW50IC5zdGF0dXNfZGl2IC50aW1lbGluZSAudGV4dCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwiZml2by1yZWd1bGFyXCI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya0JsdWUpO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmctYm90dG9tOiAyOHB4O1xuICBtYXJnaW4tbGVmdDogMjJweDtcbn1cbmlvbi1jb250ZW50IC5zdGF0dXNfZGl2IC50aW1lbGluZSAucHVsc2F0aW5nLWNpcmNsZSB7XG4gIGxlZnQ6IDJweDtcbiAgdG9wOiA1cHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xufVxuaW9uLWNvbnRlbnQgLnN0YXR1c19kaXYgLnRpbWVsaW5lIC5wdWxzYXRpbmctY2lyY2xlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAzMDAlO1xuICBoZWlnaHQ6IDMwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbi1sZWZ0OiAtMTAwJTtcbiAgbWFyZ2luLXRvcDogLTEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDQ1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1ncmVlbik7XG4gIGFuaW1hdGlvbjogcHVsc2UtcmluZyAxLjI1cyBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKSBpbmZpbml0ZTtcbn1cbmlvbi1jb250ZW50IC5zdGF0dXNfZGl2IC50aW1lbGluZSAucHVsc2F0aW5nLWNpcmNsZTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBib3gtc2hhZG93OiAwIDAgOHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYW5pbWF0aW9uOiBwdWxzZS1kb3QgMS4yNXMgY3ViaWMtYmV6aWVyKDAuNDU1LCAwLjAzLCAwLjUxNSwgMC45NTUpIC0wLjRzIGluZmluaXRlO1xufVxuQGtleWZyYW1lcyBwdWxzZS1yaW5nIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC4zMyk7XG4gIH1cbiAgODAlLCAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHB1bHNlLWRvdCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/grocery-status/grocery-status.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/grocery-status/grocery-status.page.ts ***!
  \*************************************************************/
/*! exports provided: GroceryStatusPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroceryStatusPage", function() { return GroceryStatusPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_grocery_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../service/grocery.service */ "./src/app/service/grocery.service.ts");
/* harmony import */ var _service_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../service/util.service */ "./src/app/service/util.service.ts");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");






let GroceryStatusPage = class GroceryStatusPage {
    constructor(nav, api, util, gpi) {
        this.nav = nav;
        this.api = api;
        this.util = util;
        this.gpi = gpi;
        this.data = {};
        this.util.startLoad();
        this.api
            .getDataWithToken("trackGroceryOrder/" + this.gpi.orderId)
            .subscribe((res) => {
            if (res.success) {
                this.data = res.data;
                this.util.dismissLoader();
                if (this.data.order_status == "Pending" ||
                    this.data.order_status == "Approved") {
                    this.status = 0;
                }
                else if (this.data.order_status == "DriverApproved") {
                    this.status = 1;
                }
                else if (this.data.order_status == "OrderReady" ||
                    this.data.order_status == "PickUpGrocery") {
                    this.status = 2;
                }
                else if (this.data.order_status == "OutOfDelivery") {
                    this.status = 3;
                }
                else if (this.data.order_status == "DriverReach") {
                    this.status = 4;
                }
                else {
                    if (this.data.order_status != "Cancel") {
                        this.status = 5;
                    }
                }
            }
        }, (err) => {
            this.util.dismissLoader();
            this.util.presentToast("something went wrong");
        });
        this.get_duration_interval = setInterval((interval) => {
            if (this.data.order_status == "Delivered") {
                clearInterval(this.get_duration_interval);
            }
            else {
                this.getlocation();
            }
        }, this.api.request_duration);
    }
    ngOnInit() { }
    orderStatus() {
        this.nav.navigateForward("grocery-order-detail");
    }
    getlocation() {
        this.api
            .getDataWithToken("trackGroceryOrder/" + this.gpi.orderId)
            .subscribe((res) => {
            if (res.success) {
                this.data = res.data;
                if (this.data.order_status == "Pending" ||
                    this.data.order_status == "Approved") {
                    this.status = 0;
                }
                else if (this.data.order_status == "DriverApproved") {
                    this.status = 1;
                }
                else if (this.data.order_status == "OrderReady" ||
                    this.data.order_status == "PickUpGrocery") {
                    this.status = 2;
                }
                else if (this.data.order_status == "OutOfDelivery") {
                    this.status = 3;
                }
                else if (this.data.order_status == "DriverReach") {
                    this.status = 4;
                }
                else {
                    if (this.data.order_status == "Delivered") {
                        this.status = 5;
                    }
                }
            }
        }, (err) => {
            this.util.dismissLoader();
            this.util.presentToast("something went wrong");
        });
    }
};
GroceryStatusPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _service_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] },
    { type: _service_grocery_service__WEBPACK_IMPORTED_MODULE_1__["GroceryService"] }
];
GroceryStatusPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: "app-grocery-status",
        template: __webpack_require__(/*! raw-loader!./grocery-status.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/grocery-status/grocery-status.page.html"),
        styles: [__webpack_require__(/*! ./grocery-status.page.scss */ "./src/app/pages/grocery-status/grocery-status.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
        _service_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"],
        _service_grocery_service__WEBPACK_IMPORTED_MODULE_1__["GroceryService"]])
], GroceryStatusPage);



/***/ })

}]);
//# sourceMappingURL=pages-grocery-status-grocery-status-module-es2015.js.map