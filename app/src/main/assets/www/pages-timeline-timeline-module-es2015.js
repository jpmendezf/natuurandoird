(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-timeline-timeline-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/timeline/timeline.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/timeline/timeline.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n    <ion-toolbar mode=\"md\">\n        <ion-buttons slot=\"end\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title class=\"ion-text-center\">\n            {{'timeline_page.title' | translate}} {{driver?.imagePath + driver?.image}}\n        </ion-title>\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"home\" icon=\"ios-arrow-back\" text=\"\" mode=\"md\"></ion-back-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <agm-map [styles]=\"styles\" [latitude]=\"Centerlat\" [longitude]=\"Centerlng\" [disableDefaultUI]=\"true\">\n        <agm-direction [origin]=\"origin\" [destination]=\"destination\" [renderOptions]=\"renderOptions\" [markerOptions]=\"markerOptions\">\n        </agm-direction>\n\n        <agm-marker [latitude]=\"driver.lat\" [longitude]=\"driver.lng\" [iconUrl]=\"iconUrl\" *ngIf=\"isvisible\">\n        </agm-marker>\n    </agm-map>\n    <ion-slides #slides pager=\"true\">\n        <ion-slide>\n            <img [src]=\"data?.shop?.imagePath + data?.shop?.image\">\n            <div class=\"items\">\n                <h2 class=\"user\">\n                    {{data?.shop?.name}}\n                </h2>\n                <p>\n                    {{'timeline_page.text' | translate}}\n                </p>\n                <p class=\"order\">\n                    <span class=\"title\">{{'timeline_page.order_no' | translate}}</span>\n                    <span class=\"orderList\">\n                        {{data?.order_no}}\n                    </span>\n                </p>\n            </div>\n            <h2 class=\"price\">\n                {{currency}}{{data?.payment}}\n            </h2>\n        </ion-slide>\n        <ion-slide *ngIf=\"data?.order_status!='Pending' && data?.order_status!='Approved'\">\n            <img [src]=\"driver?.imagePath + driver?.image\">\n            <div class=\"items\">\n                <h2 class=\"user\" *ngIf=\"driver?.name\">\n                    {{driver?.name}}\n                </h2>\n                <p *ngIf=\"driver?.name\">\n                    {{'timeline_page.del_text.txt1' | translate}} {{driver?.name}} {{'timeline_page.del_text.txt2' | translate}}\n                </p>\n            </div>\n            <ion-button class=\"accepted\" shape=\"round\">\n                <ion-icon src=\"../../../assets/icon-image/call.svg\"></ion-icon>\n                <a href=\"tel: {{driver?.phone}}\">{{driver?.phone}} </a>\n            </ion-button>\n        </ion-slide>\n    </ion-slides>\n    <ion-button class=\"otherBtn\" shape=\"round\" (click)=\"orderHistory()\">{{'timeline_page.view_order' | translate}}</ion-button>\n</ion-content>\n\n<ion-footer>\n    <div class=\"timeline\">\n        <div [class]=\"status >= 1 ? 'dot' : 'dot disbale'\" [ngClass]=\"{'pulsating-circle': status+1 == 1}\"></div>\n        <div [class]=\"status >= 2 ? 'lines' : 'lines disbale'\"></div>\n        <h2 class=\"text\">\n            {{'timeline_page.status.order_confirm' | translate}}\n        </h2>\n    </div>\n    <div class=\"timeline\">\n        <div [class]=\"status >= 2 ? 'dot' : 'dot disbale'\" [ngClass]=\"{'pulsating-circle': status == 2}\"></div>\n        <div [class]=\"status >= 3 ? 'lines' : 'lines disbale'\"></div>\n        <h2 class=\"text\">\n            {{'timeline_page.status.food_prepared' | translate}}\n        </h2>\n    </div>\n    <div class=\"timeline\">\n        <div [class]=\"status >= 3 ? 'dot' : 'dot disbale'\" [ngClass]=\"{'pulsating-circle': status == 3}\"></div>\n        <div [class]=\"status >= 4 ? 'lines' : 'lines disbale'\"></div>\n        <h2 class=\"text\">\n            {{'timeline_page.status.rider_pickup_order' | translate}}\n        </h2>\n    </div>\n    <div class=\"timeline\">\n        <div [class]=\"status >= 4 ? 'dot' : 'dot disbale'\" [ngClass]=\"{'pulsating-circle': status == 4}\"></div>\n        <div [class]=\"status >= 5 ? 'lines' : 'lines disbale'\"></div>\n        <h2 class=\"text\">\n            {{'timeline_page.status.food_on_the_way' | translate}}\n        </h2>\n    </div>\n    <div class=\"timeline\">\n        <div [class]=\"status >= 5 ? 'dot' : 'dot disbale'\" [ngClass]=\"{'pulsating-circle': status == 5}\"></div>\n        <div [class]=\"status >= 6 ? 'lines' : 'lines disbale'\"></div>\n        <h2 class=\"text\">\n            {{'timeline_page.status.rider_near_your_place' | translate}}\n        </h2>\n    </div>\n    <div class=\"timeline\">\n        <div [class]=\"status >= 6 ? 'dot' : 'dot disbale'\" [ngClass]=\"{'pulsating-circle': status == 6}\"></div>\n        <div [class]=\"status >= 6 ? 'lines last' : 'lines last disbale'\"></div>\n        <h2 class=\"text\">\n            {{'timeline_page.status.delivered' | translate}}\n        </h2>\n    </div>\n    <ion-button class=\"footerBtn\" shape=\"round\" (click)=\"cancleOrder()\"> {{'timeline_page.cancel_order' | translate}} </ion-button>\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/timeline/timeline.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/timeline/timeline.module.ts ***!
  \***************************************************/
/*! exports provided: TimelinePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelinePageModule", function() { return TimelinePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");
/* harmony import */ var agm_direction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! agm-direction */ "./node_modules/agm-direction/fesm2015/agm-direction.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _timeline_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./timeline.page */ "./src/app/pages/timeline/timeline.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");










const routes = [
    {
        path: "",
        component: _timeline_page__WEBPACK_IMPORTED_MODULE_8__["TimelinePage"]
    }
];
let TimelinePageModule = class TimelinePageModule {
};
TimelinePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmCoreModule"].forRoot({
                apiKey: ""
            }),
            agm_direction__WEBPACK_IMPORTED_MODULE_6__["AgmDirectionModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_timeline_page__WEBPACK_IMPORTED_MODULE_8__["TimelinePage"]]
    })
], TimelinePageModule);



/***/ }),

/***/ "./src/app/pages/timeline/timeline.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/timeline/timeline.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-slides {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n}\nion-slides ion-slide {\n  min-height: 125px;\n  -webkit-box-align: inherit !important;\n          align-items: inherit !important;\n  -webkit-box-pack: inherit !important;\n          justify-content: inherit !important;\n  padding: 16px;\n  background-image: var(--timeline);\n}\nion-slides ion-slide img {\n  border-radius: 50%;\n  border: 3px solid var(--ion-color-white);\n  box-shadow: 0px 0px 4px 0px var(--dash-border);\n  height: 60px;\n  width: 60px;\n  -o-object-fit: fill;\n     object-fit: fill;\n}\nion-slides ion-slide .items {\n  margin: 0px 17px;\n}\nion-slides ion-slide .items h2 {\n  font-size: 14px;\n  font-family: \"Poppins-Medium\";\n  margin: 0;\n  color: var(--ion-color-white);\n  text-align: initial;\n}\nion-slides ion-slide .items p {\n  font-size: 12px;\n  font-family: \"Poppins-Medium\";\n  margin: 0;\n  color: var(--ion-color-white);\n  text-align: initial;\n  letter-spacing: 1;\n  display: -webkit-box;\n  display: flex;\n  margin-top: 4px;\n}\nion-slides ion-slide .items p .title {\n  -webkit-box-flex: 1;\n          flex: 1;\n  margin-right: 10px;\n  flex-grow: 1;\n  flex-shrink: 1;\n}\nion-slides ion-slide .items p .orderList {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  overflow: hidden;\n}\nion-slides ion-slide .price {\n  font-size: 14px;\n  font-family: \"Poppins-Medium\";\n  margin: 0;\n  color: var(--ion-color-white);\n  text-align: initial;\n  align-self: center;\n}\nion-slides ion-slide ion-button {\n  --box-shadow: none;\n  --border-radius: 50px 0px 0px 50px;\n  --background: var(--ion-color-green);\n  --background-activated: var(--ion-color-green);\n  position: absolute;\n  right: 0;\n  bottom: 15px;\n  margin: 0;\n  margin-top: 17px;\n  font-size: 10px;\n  font-family: \"Poppins-Medium\";\n  height: 26px;\n  width: 150px;\n}\nion-slides ion-slide ion-button ion-icon {\n  margin-right: 8px;\n}\nion-slides ion-slide ion-button a {\n  color: var(--ion-color-white);\n  text-decoration: none;\n}\n.otherBtn {\n  --box-shadow: none;\n  --border-radius: 50px 0px 0px 50px;\n  --background: var(--ion-color-green);\n  --background-activated: var(--ion-color-green);\n  bottom: 15px;\n  margin: 0;\n  margin-top: 17px;\n  font-size: 10px;\n  font-family: \"Poppins-Medium\";\n  height: 26px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 122px;\n}\n.otherBtn.next {\n  --background: var(--my-red-light);\n  top: 38px !important;\n  right: 0;\n}\n.footerBtn {\n  --box-shadow: none;\n  --border-radius: 50px 0px 0px 50px;\n  --background: var(--ion-color-btn-color);\n  --background-activated: var(--ion-color-btn-color);\n  bottom: 15px;\n  margin: 0;\n  margin-top: 17px;\n  font-size: 12px;\n  font-family: \"Poppins-Medium\";\n  height: 33px;\n  position: absolute;\n  bottom: 33px;\n  right: 0;\n  width: 135px;\n  text-transform: capitalize;\n}\nion-footer {\n  padding: 29px 32px 0px;\n}\nion-footer .timeline {\n  display: -webkit-box;\n  display: flex;\n  position: relative;\n}\nion-footer .timeline .lines {\n  -webkit-transition: all 1s ease;\n  transition: all 1s ease;\n  background: var(--ion-color-green);\n  width: 5px;\n}\nion-footer .timeline .lines.disbale {\n  background: var(--light-gray);\n}\nion-footer .timeline .lines.last {\n  opacity: 0;\n}\nion-footer .timeline .dot {\n  height: 11px;\n  background: var(--ion-color-green);\n  width: 11px;\n  border-radius: 50%;\n  position: absolute;\n  top: 0px;\n  left: -3px;\n}\nion-footer .timeline .dot.disbale {\n  background: var(--light-gray);\n}\nion-footer .timeline .text {\n  font-size: 14px;\n  font-family: \"Poppins-Medium\";\n  color: var(--ion-color-darkBlue);\n  margin: 0;\n  padding-bottom: 28px;\n  margin-left: 22px;\n}\nion-footer .timeline .pulsating-circle {\n  left: 2px;\n  top: 5px;\n  -webkit-transform: translateX(-50%) translateY(-50%);\n          transform: translateX(-50%) translateY(-50%);\n}\nion-footer .timeline .pulsating-circle:before {\n  content: \"\";\n  position: relative;\n  display: block;\n  width: 300%;\n  height: 300%;\n  box-sizing: border-box;\n  margin-left: -100%;\n  margin-top: -100%;\n  border-radius: 45px;\n  background-color: var(--ion-color-green);\n  -webkit-animation: pulse-ring 1.25s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;\n          animation: pulse-ring 1.25s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;\n}\nion-footer .timeline .pulsating-circle:after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  display: block;\n  width: 100%;\n  height: 100%;\n  background-color: var(--white);\n  border-radius: 15px;\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);\n  -webkit-animation: pulse-dot 1.25s cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite;\n          animation: pulse-dot 1.25s cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite;\n}\n@-webkit-keyframes pulse-ring {\n  0% {\n    -webkit-transform: scale(0.33);\n            transform: scale(0.33);\n  }\n  80%, 100% {\n    opacity: 0;\n  }\n}\n@keyframes pulse-ring {\n  0% {\n    -webkit-transform: scale(0.33);\n            transform: scale(0.33);\n  }\n  80%, 100% {\n    opacity: 0;\n  }\n}\n@-webkit-keyframes pulse-dot {\n  0% {\n    -webkit-transform: scale(0.8);\n            transform: scale(0.8);\n  }\n  50% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  100% {\n    -webkit-transform: scale(0.8);\n            transform: scale(0.8);\n  }\n}\n@keyframes pulse-dot {\n  0% {\n    -webkit-transform: scale(0.8);\n            transform: scale(0.8);\n  }\n  50% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  100% {\n    -webkit-transform: scale(0.8);\n            transform: scale(0.8);\n  }\n}\n.slides-md {\n  --bullet-background: var(--ion-color-green) !important;\n  --bullet-background-active: var(--ion-color-green) !important;\n}\n.slides-ios {\n  --bullet-background: var(--ion-color-green) !important;\n  --bullet-background-active: var(--ion-color-green) !important;\n}\nagm-map {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGltZWxpbmUvQzpcXFVzZXJzXFxvc2lhblxcRGVza3RvcFxcTkFUVVVUMi4wL3NyY1xcYXBwXFxwYWdlc1xcdGltZWxpbmVcXHRpbWVsaW5lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGltZWxpbmUvdGltZWxpbmUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQ0NGO0FEQUU7RUFDRSxpQkFBQTtFQUNBLHFDQUFBO1VBQUEsK0JBQUE7RUFDQSxvQ0FBQTtVQUFBLG1DQUFBO0VBQ0EsYUFBQTtFQUNBLGlDQUFBO0FDRUo7QURESTtFQUNFLGtCQUFBO0VBQ0Esd0NBQUE7RUFDQSw4Q0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7S0FBQSxnQkFBQTtBQ0dOO0FEREk7RUFDRSxnQkFBQTtBQ0dOO0FERk07RUFDRSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxTQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQ0lSO0FERk07RUFDRSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxTQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZUFBQTtBQ0lSO0FESFE7RUFDRSxtQkFBQTtVQUFBLE9BQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDS1Y7QURIUTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLGdCQUFBO0FDS1Y7QURESTtFQUNFLGVBQUE7RUFDQSw2QkFBQTtFQUNBLFNBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNHTjtBRERJO0VBQ0Usa0JBQUE7RUFDQSxrQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsOENBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNHTjtBREZNO0VBQ0UsaUJBQUE7QUNJUjtBREZNO0VBQ0UsNkJBQUE7RUFDQSxxQkFBQTtBQ0lSO0FERUE7RUFDRSxrQkFBQTtFQUNBLGtDQUFBO0VBQ0Esb0NBQUE7RUFDQSw4Q0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7QUNDRjtBREFFO0VBQ0UsaUNBQUE7RUFDQSxvQkFBQTtFQUNBLFFBQUE7QUNFSjtBREVBO0VBQ0Usa0JBQUE7RUFDQSxrQ0FBQTtFQUNBLHdDQUFBO0VBQ0Esa0RBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7QUNDRjtBREVBO0VBQ0Usc0JBQUE7QUNDRjtBREFFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0Esa0JBQUE7QUNFSjtBRERJO0VBQ0UsK0JBQUE7RUFBQSx1QkFBQTtFQUNBLGtDQUFBO0VBQ0EsVUFBQTtBQ0dOO0FERk07RUFDRSw2QkFBQTtBQ0lSO0FERk07RUFDRSxVQUFBO0FDSVI7QURESTtFQUNFLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUNHTjtBREZNO0VBQ0UsNkJBQUE7QUNJUjtBRERJO0VBQ0UsZUFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQ0dOO0FEREk7RUFDRSxTQUFBO0VBQ0EsUUFBQTtFQUNBLG9EQUFBO1VBQUEsNENBQUE7QUNHTjtBREZNO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3Q0FBQTtFQUNBLGdGQUFBO1VBQUEsd0VBQUE7QUNJUjtBREZNO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0NBQUE7RUFDQSx5RkFBQTtVQUFBLGlGQUFBO0FDSVI7QURBSTtFQUNFO0lBQ0UsOEJBQUE7WUFBQSxzQkFBQTtFQ0VOO0VEQUk7SUFFRSxVQUFBO0VDQ047QUFDRjtBRFJJO0VBQ0U7SUFDRSw4QkFBQTtZQUFBLHNCQUFBO0VDRU47RURBSTtJQUVFLFVBQUE7RUNDTjtBQUNGO0FEQ0k7RUFDRTtJQUNFLDZCQUFBO1lBQUEscUJBQUE7RUNDTjtFRENJO0lBQ0UsMkJBQUE7WUFBQSxtQkFBQTtFQ0NOO0VEQ0k7SUFDRSw2QkFBQTtZQUFBLHFCQUFBO0VDQ047QUFDRjtBRFZJO0VBQ0U7SUFDRSw2QkFBQTtZQUFBLHFCQUFBO0VDQ047RURDSTtJQUNFLDJCQUFBO1lBQUEsbUJBQUE7RUNDTjtFRENJO0lBQ0UsNkJBQUE7WUFBQSxxQkFBQTtFQ0NOO0FBQ0Y7QURJQTtFQUNFLHNEQUFBO0VBQ0EsNkRBQUE7QUNERjtBRElBO0VBQ0Usc0RBQUE7RUFDQSw2REFBQTtBQ0RGO0FER0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGltZWxpbmUvdGltZWxpbmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNsaWRlcyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBpb24tc2xpZGUge1xyXG4gICAgbWluLWhlaWdodDogMTI1cHg7XHJcbiAgICBhbGlnbi1pdGVtczogaW5oZXJpdCAhaW1wb3J0YW50O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBpbmhlcml0ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdmFyKC0tdGltZWxpbmUpO1xyXG4gICAgaW1nIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG4gICAgICBib3gtc2hhZG93OiAwcHggMHB4IDRweCAwcHggdmFyKC0tZGFzaC1ib3JkZXIpO1xyXG4gICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICBvYmplY3QtZml0OiBmaWxsO1xyXG4gICAgfVxyXG4gICAgLml0ZW1zIHtcclxuICAgICAgbWFyZ2luOiAwcHggMTdweDtcclxuICAgICAgaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zLU1lZGl1bVwiO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBpbml0aWFsO1xyXG4gICAgICB9XHJcbiAgICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zLU1lZGl1bVwiO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBpbml0aWFsO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgICAgZmxleC1zaHJpbms6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5vcmRlckxpc3Qge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnByaWNlIHtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zLU1lZGl1bVwiO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG4gICAgICB0ZXh0LWFsaWduOiBpbml0aWFsO1xyXG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBpb24tYnV0dG9uIHtcclxuICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDUwcHggMHB4IDBweCA1MHB4O1xyXG4gICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1ncmVlbik7XHJcbiAgICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHZhcigtLWlvbi1jb2xvci1ncmVlbik7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIGJvdHRvbTogMTVweDtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBtYXJnaW4tdG9wOiAxN3B4O1xyXG4gICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtTWVkaXVtXCI7XHJcbiAgICAgIGhlaWdodDogMjZweDtcclxuICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgIH1cclxuICAgICAgYSB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ub3RoZXJCdG4ge1xyXG4gIC0tYm94LXNoYWRvdzogbm9uZTtcclxuICAtLWJvcmRlci1yYWRpdXM6IDUwcHggMHB4IDBweCA1MHB4O1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWdyZWVuKTtcclxuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB2YXIoLS1pb24tY29sb3ItZ3JlZW4pO1xyXG4gIGJvdHRvbTogMTVweDtcclxuICBtYXJnaW46IDA7XHJcbiAgbWFyZ2luLXRvcDogMTdweDtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIjtcclxuICBoZWlnaHQ6IDI2cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICB3aWR0aDogMTIycHg7XHJcbiAgJi5uZXh0IHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0tbXktcmVkLWxpZ2h0KTtcclxuICAgIHRvcDogMzhweCAhaW1wb3J0YW50O1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4uZm9vdGVyQnRuIHtcclxuICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiA1MHB4IDBweCAwcHggNTBweDtcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1idG4tY29sb3IpO1xyXG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHZhcigtLWlvbi1jb2xvci1idG4tY29sb3IpO1xyXG4gIGJvdHRvbTogMTVweDtcclxuICBtYXJnaW46IDA7XHJcbiAgbWFyZ2luLXRvcDogMTdweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIjtcclxuICBoZWlnaHQ6IDMzcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMzNweDtcclxuICByaWdodDogMDtcclxuICB3aWR0aDogMTM1cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuXHJcbmlvbi1mb290ZXIge1xyXG4gIHBhZGRpbmc6IDI5cHggMzJweCAwcHg7XHJcbiAgLnRpbWVsaW5lIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAubGluZXMge1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWdyZWVuKTtcclxuICAgICAgd2lkdGg6IDVweDtcclxuICAgICAgJi5kaXNiYWxlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1saWdodC1ncmF5KTtcclxuICAgICAgfVxyXG4gICAgICAmLmxhc3Qge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5kb3Qge1xyXG4gICAgICBoZWlnaHQ6IDExcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1ncmVlbik7XHJcbiAgICAgIHdpZHRoOiAxMXB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAwcHg7XHJcbiAgICAgIGxlZnQ6IC0zcHg7XHJcbiAgICAgICYuZGlzYmFsZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHQtZ3JheSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC50ZXh0IHtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zLU1lZGl1bVwiO1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtCbHVlKTtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMjhweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDIycHg7XHJcbiAgICB9XHJcbiAgICAucHVsc2F0aW5nLWNpcmNsZSB7XHJcbiAgICAgIGxlZnQ6IDJweDtcclxuICAgICAgdG9wOiA1cHg7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDMwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAzMDAlO1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0xMDAlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0xMDAlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDQ1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyZWVuKTtcclxuICAgICAgICBhbmltYXRpb246IHB1bHNlLXJpbmcgMS4yNXMgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSkgaW5maW5pdGU7XHJcbiAgICAgIH1cclxuICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCA4cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgICAgIGFuaW1hdGlvbjogcHVsc2UtZG90IDEuMjVzIGN1YmljLWJlemllcigwLjQ1NSwgMC4wMywgMC41MTUsIDAuOTU1KSAtMC40c1xyXG4gICAgICAgICAgaW5maW5pdGU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIEBrZXlmcmFtZXMgcHVsc2UtcmluZyB7XHJcbiAgICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMzMpO1xyXG4gICAgICB9XHJcbiAgICAgIDgwJSxcclxuICAgICAgMTAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgQGtleWZyYW1lcyBwdWxzZS1kb3Qge1xyXG4gICAgICAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xyXG4gICAgICB9XHJcbiAgICAgIDUwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgfVxyXG4gICAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5zbGlkZXMtbWQge1xyXG4gIC0tYnVsbGV0LWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1ncmVlbikgIWltcG9ydGFudDtcclxuICAtLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTogdmFyKC0taW9uLWNvbG9yLWdyZWVuKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2xpZGVzLWlvcyB7XHJcbiAgLS1idWxsZXQtYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWdyZWVuKSAhaW1wb3J0YW50O1xyXG4gIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiB2YXIoLS1pb24tY29sb3ItZ3JlZW4pICFpbXBvcnRhbnQ7XHJcbn1cclxuYWdtLW1hcCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiIsImlvbi1zbGlkZXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5pb24tc2xpZGVzIGlvbi1zbGlkZSB7XG4gIG1pbi1oZWlnaHQ6IDEyNXB4O1xuICBhbGlnbi1pdGVtczogaW5oZXJpdCAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGluaGVyaXQgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMTZweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdmFyKC0tdGltZWxpbmUpO1xufVxuaW9uLXNsaWRlcyBpb24tc2xpZGUgaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDRweCAwcHggdmFyKC0tZGFzaC1ib3JkZXIpO1xuICBoZWlnaHQ6IDYwcHg7XG4gIHdpZHRoOiA2MHB4O1xuICBvYmplY3QtZml0OiBmaWxsO1xufVxuaW9uLXNsaWRlcyBpb24tc2xpZGUgLml0ZW1zIHtcbiAgbWFyZ2luOiAwcHggMTdweDtcbn1cbmlvbi1zbGlkZXMgaW9uLXNsaWRlIC5pdGVtcyBoMiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIjtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbiAgdGV4dC1hbGlnbjogaW5pdGlhbDtcbn1cbmlvbi1zbGlkZXMgaW9uLXNsaWRlIC5pdGVtcyBwIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zLU1lZGl1bVwiO1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuICB0ZXh0LWFsaWduOiBpbml0aWFsO1xuICBsZXR0ZXItc3BhY2luZzogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXRvcDogNHB4O1xufVxuaW9uLXNsaWRlcyBpb24tc2xpZGUgLml0ZW1zIHAgLnRpdGxlIHtcbiAgZmxleDogMTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBmbGV4LWdyb3c6IDE7XG4gIGZsZXgtc2hyaW5rOiAxO1xufVxuaW9uLXNsaWRlcyBpb24tc2xpZGUgLml0ZW1zIHAgLm9yZGVyTGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5pb24tc2xpZGVzIGlvbi1zbGlkZSAucHJpY2Uge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtTWVkaXVtXCI7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG4gIHRleHQtYWxpZ246IGluaXRpYWw7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbmlvbi1zbGlkZXMgaW9uLXNsaWRlIGlvbi1idXR0b24ge1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIC0tYm9yZGVyLXJhZGl1czogNTBweCAwcHggMHB4IDUwcHg7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWdyZWVuKTtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdmFyKC0taW9uLWNvbG9yLWdyZWVuKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAxNXB4O1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi10b3A6IDE3cHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIjtcbiAgaGVpZ2h0OiAyNnB4O1xuICB3aWR0aDogMTUwcHg7XG59XG5pb24tc2xpZGVzIGlvbi1zbGlkZSBpb24tYnV0dG9uIGlvbi1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG5pb24tc2xpZGVzIGlvbi1zbGlkZSBpb24tYnV0dG9uIGEge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ub3RoZXJCdG4ge1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIC0tYm9yZGVyLXJhZGl1czogNTBweCAwcHggMHB4IDUwcHg7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWdyZWVuKTtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdmFyKC0taW9uLWNvbG9yLWdyZWVuKTtcbiAgYm90dG9tOiAxNXB4O1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi10b3A6IDE3cHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIjtcbiAgaGVpZ2h0OiAyNnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiAxMjJweDtcbn1cbi5vdGhlckJ0bi5uZXh0IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1teS1yZWQtbGlnaHQpO1xuICB0b3A6IDM4cHggIWltcG9ydGFudDtcbiAgcmlnaHQ6IDA7XG59XG5cbi5mb290ZXJCdG4ge1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIC0tYm9yZGVyLXJhZGl1czogNTBweCAwcHggMHB4IDUwcHg7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWJ0bi1jb2xvcik7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHZhcigtLWlvbi1jb2xvci1idG4tY29sb3IpO1xuICBib3R0b206IDE1cHg7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLXRvcDogMTdweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zLU1lZGl1bVwiO1xuICBoZWlnaHQ6IDMzcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAzM3B4O1xuICByaWdodDogMDtcbiAgd2lkdGg6IDEzNXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuaW9uLWZvb3RlciB7XG4gIHBhZGRpbmc6IDI5cHggMzJweCAwcHg7XG59XG5pb24tZm9vdGVyIC50aW1lbGluZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbmlvbi1mb290ZXIgLnRpbWVsaW5lIC5saW5lcyB7XG4gIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZ3JlZW4pO1xuICB3aWR0aDogNXB4O1xufVxuaW9uLWZvb3RlciAudGltZWxpbmUgLmxpbmVzLmRpc2JhbGUge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1saWdodC1ncmF5KTtcbn1cbmlvbi1mb290ZXIgLnRpbWVsaW5lIC5saW5lcy5sYXN0IHtcbiAgb3BhY2l0eTogMDtcbn1cbmlvbi1mb290ZXIgLnRpbWVsaW5lIC5kb3Qge1xuICBoZWlnaHQ6IDExcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1ncmVlbik7XG4gIHdpZHRoOiAxMXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IC0zcHg7XG59XG5pb24tZm9vdGVyIC50aW1lbGluZSAuZG90LmRpc2JhbGUge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1saWdodC1ncmF5KTtcbn1cbmlvbi1mb290ZXIgLnRpbWVsaW5lIC50ZXh0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zLU1lZGl1bVwiO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtCbHVlKTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMjhweDtcbiAgbWFyZ2luLWxlZnQ6IDIycHg7XG59XG5pb24tZm9vdGVyIC50aW1lbGluZSAucHVsc2F0aW5nLWNpcmNsZSB7XG4gIGxlZnQ6IDJweDtcbiAgdG9wOiA1cHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xufVxuaW9uLWZvb3RlciAudGltZWxpbmUgLnB1bHNhdGluZy1jaXJjbGU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDMwMCU7XG4gIGhlaWdodDogMzAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luLWxlZnQ6IC0xMDAlO1xuICBtYXJnaW4tdG9wOiAtMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyZWVuKTtcbiAgYW5pbWF0aW9uOiBwdWxzZS1yaW5nIDEuMjVzIGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpIGluZmluaXRlO1xufVxuaW9uLWZvb3RlciAudGltZWxpbmUgLnB1bHNhdGluZy1jaXJjbGU6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYm94LXNoYWRvdzogMCAwIDhweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGFuaW1hdGlvbjogcHVsc2UtZG90IDEuMjVzIGN1YmljLWJlemllcigwLjQ1NSwgMC4wMywgMC41MTUsIDAuOTU1KSAtMC40cyBpbmZpbml0ZTtcbn1cbkBrZXlmcmFtZXMgcHVsc2UtcmluZyB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMzMpO1xuICB9XG4gIDgwJSwgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuQGtleWZyYW1lcyBwdWxzZS1kb3Qge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gIH1cbn1cblxuLnNsaWRlcy1tZCB7XG4gIC0tYnVsbGV0LWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1ncmVlbikgIWltcG9ydGFudDtcbiAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6IHZhcigtLWlvbi1jb2xvci1ncmVlbikgIWltcG9ydGFudDtcbn1cblxuLnNsaWRlcy1pb3Mge1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZ3JlZW4pICFpbXBvcnRhbnQ7XG4gIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiB2YXIoLS1pb24tY29sb3ItZ3JlZW4pICFpbXBvcnRhbnQ7XG59XG5cbmFnbS1tYXAge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/timeline/timeline.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/timeline/timeline.page.ts ***!
  \*************************************************/
/*! exports provided: TimelinePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelinePage", function() { return TimelinePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_util_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../service/util.service */ "./src/app/service/util.service.ts");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");






let TimelinePage = class TimelinePage {
    constructor(translate, ntrl, api, util, alertController) {
        this.translate = translate;
        this.ntrl = ntrl;
        this.api = api;
        this.util = util;
        this.alertController = alertController;
        this.dirService = new google.maps.DirectionsService();
        this.dirRenderer = new google.maps.DirectionsRenderer({ suppressMarkers: false });
        this.status = "";
        this.data = {};
        this.driver = {
            lat: "",
            lng: "",
            imagePath: "",
            image: "",
            name: "",
            phone: "",
        };
        this.destination = {};
        this.renderOptions = {
            suppressMarkers: true,
            draggable: false,
        };
        this.err = {};
        this.count = 1;
        this.geocoder = new google.maps.Geocoder();
        this.styles = [
            {
                elementType: "geometry",
                stylers: [
                    {
                        color: "#f5f5f5",
                    },
                ],
            },
            {
                elementType: "labels.icon",
                stylers: [
                    {
                        visibility: "off",
                    },
                ],
            },
            {
                elementType: "labels.text.fill",
                stylers: [
                    {
                        color: "#616161",
                    },
                ],
            },
            {
                elementType: "labels.text.stroke",
                stylers: [
                    {
                        color: "#f5f5f5",
                    },
                ],
            },
            {
                featureType: "administrative.land_parcel",
                elementType: "labels.text.fill",
                stylers: [
                    {
                        color: "#bdbdbd",
                    },
                ],
            },
            {
                featureType: "poi",
                elementType: "geometry",
                stylers: [
                    {
                        color: "#eeeeee",
                    },
                ],
            },
            {
                featureType: "poi",
                elementType: "labels.text.fill",
                stylers: [
                    {
                        color: "#757575",
                    },
                ],
            },
            {
                featureType: "poi.park",
                elementType: "geometry",
                stylers: [
                    {
                        color: "#e5e5e5",
                    },
                ],
            },
            {
                featureType: "poi.park",
                elementType: "labels.text.fill",
                stylers: [
                    {
                        color: "#9e9e9e",
                    },
                ],
            },
            {
                featureType: "road",
                elementType: "geometry",
                stylers: [
                    {
                        color: "#ffffff",
                    },
                ],
            },
            {
                featureType: "road.arterial",
                elementType: "labels.text.fill",
                stylers: [
                    {
                        color: "#757575",
                    },
                ],
            },
            {
                featureType: "road.highway",
                elementType: "geometry",
                stylers: [
                    {
                        color: "#dadada",
                    },
                ],
            },
            {
                featureType: "road.highway",
                elementType: "labels.text.fill",
                stylers: [
                    {
                        color: "#616161",
                    },
                ],
            },
            {
                featureType: "road.local",
                elementType: "labels.text.fill",
                stylers: [
                    {
                        color: "#9e9e9e",
                    },
                ],
            },
            {
                featureType: "transit.line",
                elementType: "geometry",
                stylers: [
                    {
                        color: "#e5e5e5",
                    },
                ],
            },
            {
                featureType: "transit.station",
                elementType: "geometry",
                stylers: [
                    {
                        color: "#eeeeee",
                    },
                ],
            },
            {
                featureType: "water",
                elementType: "geometry",
                stylers: [
                    {
                        color: "#c9c9c9",
                    },
                ],
            },
            {
                featureType: "water",
                elementType: "labels.text.fill",
                stylers: [
                    {
                        color: "#9e9e9e",
                    },
                ],
            },
        ];
        this.markerOptions = {
            origin: {
                icon: "../../../assets/image/red_marker.png",
            },
            destination: {
                icon: "../../../assets/image/green_marker.png",
            },
            draggable: true,
        };
        this.isvisible = false;
        this.iconUrl = "../../../assets/image/bike.png";
        this.currency = this.api.currency;
        this.data.driver = {};
        this.util.startLoad();
        this.api
            .getDataWithToken("trackOrder/" + this.api.checkOrderStatus)
            .subscribe((res) => {
            if (res.success) {
                this.data = res.data;
                this.getUserAddress();
                this.getShopAddress();
                this.util.dismissLoader();
                if (this.data.deliveryBoy_id != null) {
                    this.isvisible = true;
                    this.driver = {
                        lat: parseFloat(res.data.driver.lat),
                        lng: parseFloat(res.data.driver.lang),
                    };
                    this.driver.name = res.data.driver.name;
                    this.driver.imagePath = res.data.driver.imagePath;
                    this.driver.image = res.data.driver.image;
                    this.driver.phone = res.data.driver.phone;
                    this.isvisible = true;
                    this.Centerlat = parseFloat(this.driver.lat);
                    this.Centerlng = parseFloat(this.driver.lang);
                    if (this.data.order_status == "PickUpFood" ||
                        this.data.order_status == "OnTheWay" ||
                        this.data.order_status == "DriverReach" ||
                        this.data.order_status == "Delivered") {
                        this.markerOptions.origin.icon = "../../../assets/image/bike.png";
                        this.isvisible = false;
                    }
                }
                else {
                    this.Centerlat = parseFloat(this.origin.lat);
                    this.Centerlng = parseFloat(this.origin.lng);
                }
                if (this.data.order_status == "Pending" ||
                    this.data.order_status == "Approved" ||
                    this.data.order_status == "DriverApproved") {
                    this.status = "1";
                }
                else if (this.data.order_status == "Prepare") {
                    this.status = "2";
                }
                else if (this.data.order_status == "PickUpFood" ||
                    this.data.order_status == "DriverAtShop") {
                    this.status = "3";
                }
                else if (this.data.order_status == "OnTheWay") {
                    this.isvisible = false;
                    this.markerOptions.origin.icon = "../../../assets/image/bike.png";
                    this.status = "4";
                }
                else if (this.data.order_status == "DriverReach") {
                    this.status = "5";
                    this.markerOptions.origin.icon = "../../../assets/image/bike.png";
                    this.isvisible = false;
                }
                else {
                    this.status = "6";
                }
            }
        });
        this.get_duration_interval = setInterval((interval) => {
            if (this.data.order_status == "Delivered") {
                clearInterval(this.get_duration_interval);
            }
            else {
                this.DriverLocation();
            }
        }, this.api.request_duration);
    }
    cancleOrder() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.translate.get("cancel_order_alert").subscribe((val) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                console.log("val: ", val);
                const alert = yield this.alertController.create({
                    header: val.title,
                    message: val.text,
                    buttons: [
                        {
                            text: val.yes,
                            role: "yes",
                            cssClass: "secondary",
                            handler: () => {
                                this.util.startLoad();
                                this.api
                                    .getDataWithToken("cancelOrder/" + this.data.id)
                                    .subscribe((res) => {
                                    if (res.success) {
                                        this.util.dismissLoader();
                                        this.util.presentToast(res.msg);
                                        this.ntrl.navigateRoot("/order-history");
                                    }
                                    else {
                                        this.util.dismissLoader();
                                        this.util.presentToast(res.msg);
                                    }
                                }, (err) => {
                                    this.util.dismissLoader();
                                });
                            },
                        },
                        {
                            text: val.no,
                            role: "no",
                            cssClass: "secondary",
                            handler: () => { },
                        },
                    ],
                });
                yield alert.present();
            }));
        });
    }
    orderHistory() {
        this.ntrl.navigateForward(["order-history"]);
    }
    DriverLocation() {
        this.api.getDataWithToken("driverLocation/" + this.data.id).subscribe((res) => {
            if (res.success) {
                this.driver = {
                    lat: parseFloat(res.data.lat),
                    lng: parseFloat(res.data.lang),
                    name: res.data.name,
                    imagePath: res.data.imagePath,
                    image: res.data.image,
                    phone: res.data.phone,
                };
                if (res.data.order_status == "PickUpFood" ||
                    res.data.order_status == "OnTheWay" ||
                    res.data.order_status == "DriverReach") {
                    this.isvisible = false;
                    this.origin = {
                        lat: parseFloat(res.data.lat),
                        lng: parseFloat(res.data.lang),
                    };
                }
                this.Centerlat = parseFloat(res.data.lat);
                this.Centerlng = parseFloat(res.data.lang);
                if (this.data.deliveryBoy_id == null) {
                    this.isvisible = false;
                }
                if (res.data.order_status == "DriverApproved") {
                    this.status = "1";
                    this.data.order_status = res.data.order_status;
                    this.isvisible = true;
                }
                else if (res.data.order_status == "Prepare") {
                    this.status = "2";
                }
                else if (res.data.order_status == "PickUpFood" ||
                    res.data.order_status == "DriverAtShop") {
                    this.status = "3";
                    this.markerOptions.origin.icon = "../../../assets/image/bike.png";
                }
                else if (res.data.order_status == "OnTheWay") {
                    this.markerOptions.origin.icon = "../../../assets/image/bike.png";
                    this.status = "4";
                }
                else if (res.data.order_status == "DriverReach") {
                    this.status = "5";
                }
                else {
                    this.status = "6";
                }
            }
            else {
                if (res.data == "Delivered") {
                    this.status = "6";
                }
            }
        }, (err) => {
            this.err = err.error;
        });
    }
    getUserAddress() {
        if (localStorage.getItem("isaddress") != "false") {
            this.util.startLoad();
            this.api
                .getDataWithToken("getAddress/" + localStorage.getItem("isaddress"))
                .subscribe((res) => {
                if (res.success) {
                    this.userAddress =
                        res.data.soc_name +
                            " " +
                            res.data.street +
                            " " +
                            res.data.city +
                            " " +
                            res.data.zipcode;
                    this.geocoder.geocode({ address: this.userAddress }, (results, status) => {
                        if (status == google.maps.GeocoderStatus.OK) {
                            this.destination = {
                                lat: results[0].geometry.location.lat(),
                                lng: results[0].geometry.location.lng(),
                            };
                        }
                    });
                    this.util.dismissLoader();
                }
            }, (err) => {
                this.err = err;
                this.util.dismissLoader();
            });
        }
    }
    getShopAddress() {
        this.origin = {
            lat: parseFloat(this.data.shop.latitude),
            lng: parseFloat(this.data.shop.longitude),
        };
    }
    ionViewWillLeave() {
        clearInterval(this.get_duration_interval);
    }
};
TimelinePage.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _service_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])("slides", { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], TimelinePage.prototype, "slides", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])("map", { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])
], TimelinePage.prototype, "mapElement", void 0);
TimelinePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-timeline",
        template: __webpack_require__(/*! raw-loader!./timeline.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/timeline/timeline.page.html"),
        styles: [__webpack_require__(/*! ./timeline.page.scss */ "./src/app/pages/timeline/timeline.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
        _service_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
], TimelinePage);



/***/ })

}]);
//# sourceMappingURL=pages-timeline-timeline-module-es2015.js.map