(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-add-card-add-card-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/add-card/add-card.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/add-card/add-card.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n    <ion-toolbar mode=\"md\">\n        <ion-buttons slot=\"start\">\n            <ion-button fill=\"clear\" mode=\"md\" (click)=\"paymentCard()\">\n                <ion-icon name=\"ios-arrow-back\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-buttons slot=\"end\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title class=\"ion-text-center\">{{\"add_card_page.title\" | translate}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"visa_div\">\n        <ion-row>\n            <ion-col>\n                <div>\n                    <ion-icon name=\"ios-checkmark-circle\" class=\"check_div\"></ion-icon>\n                    <img src=\"assets/image/visa-img.png\">\n                </div>\n            </ion-col>\n            <ion-col>\n                <img src=\"assets/image/Master-card.png\">\n            </ion-col>\n            <ion-col>\n                <img src=\"assets/image/paypal.png\">\n            </ion-col>\n        </ion-row>\n    </div>\n\n    <div class=\"col_div\">\n        <ion-label class=\"card_label\">\n            {{\"add_card_page.card_number\" | translate}}\n        </ion-label>\n        <ion-input value=\"4319  5312  0215  1289\">\n            <ion-icon name=\"ios-checkmark-circle\" class=\"check_div\"></ion-icon>\n        </ion-input>\n        <ion-row>\n\n            <ion-col class=\"ion-no-padding\" size=\"6\">\n                <ion-label class=\"card_label\">\n                    {{\"add_card_page.expiration_date\" | translate}}\n                </ion-label>\n\n                <ion-input value=\"09/15\">\n                    <ion-icon name=\"ios-checkmark-circle\" class=\"check_div\"></ion-icon>\n                </ion-input>\n            </ion-col>\n\n            <ion-col class=\"ion-no-padding\" size=\"5\" offset=\"1\">\n                <ion-label class=\"card_label\">\n                    {{\"add_card_page.cvv\" | translate}}\n                </ion-label>\n                <ion-input value=\"****\">\n                    <ion-icon name=\"ios-checkmark-circle\" class=\"check_div\"></ion-icon>\n                </ion-input>\n            </ion-col>\n        </ion-row>\n        <ion-label class=\"card_label\">\n            {{\"add_card_page.card_holders_name\" | translate}}\n        </ion-label>\n        <ion-input value=\"Randy Betancourt\">\n            <ion-icon name=\"ios-checkmark-circle\" class=\"check_div\"></ion-icon>\n        </ion-input>\n    </div>\n</ion-content>\n<ion-footer>\n    <ion-button class=\"otp_btn\" (click)=\"paymentCard()\">\n        {{\"add_card_page.add_card\" | translate}}\n    </ion-button>\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/add-card/add-card.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/add-card/add-card.module.ts ***!
  \***************************************************/
/*! exports provided: AddCardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCardPageModule", function() { return AddCardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_card_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-card.page */ "./src/app/pages/add-card/add-card.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








const routes = [
    {
        path: '',
        component: _add_card_page__WEBPACK_IMPORTED_MODULE_6__["AddCardPage"]
    }
];
let AddCardPageModule = class AddCardPageModule {
};
AddCardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_add_card_page__WEBPACK_IMPORTED_MODULE_6__["AddCardPage"]]
    })
], AddCardPageModule);



/***/ }),

/***/ "./src/app/pages/add-card/add-card.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/add-card/add-card.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content .visa_div {\n  background-color: var(--ion-color-sky);\n  height: 90px;\n  text-align: center;\n}\nion-content .visa_div ion-row {\n  padding: 12px;\n}\nion-content .visa_div ion-row ion-col {\n  align-self: center;\n}\nion-content .visa_div ion-row ion-col .check_div {\n  color: var(--ion-color-solid-green);\n  height: 13px;\n  width: 13px;\n  border-radius: 50%;\n  position: absolute;\n  top: 2px;\n  right: 12px;\n}\nion-content .col_div {\n  margin: 16px 16px 60px 16px;\n}\nion-content .col_div .card_label {\n  font-family: \"Helvetica-Neue\";\n  font-size: 11px;\n  color: var(--ion-color-order-gray);\n}\nion-content .col_div ion-input {\n  border: solid 1px;\n  font-size: 14px;\n  font-family: \"Helvetica-Neue\";\n  border-color: #D4D4D4;\n  --color: var(--ion-color-order-gray);\n  margin-top: 5px;\n  margin-bottom: 15px;\n  height: 50px;\n  --padding-start: 15px;\n}\nion-content .col_div .check_div {\n  color: var(--ion-color-solid-green);\n  height: 13px;\n  width: 13px;\n  border-radius: 50%;\n  position: absolute;\n  right: -7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRkLWNhcmQvQzpcXFVzZXJzXFxvc2lhblxcRGVza3RvcFxcTkFUVVVUMi4wL3NyY1xcYXBwXFxwYWdlc1xcYWRkLWNhcmRcXGFkZC1jYXJkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYWRkLWNhcmQvYWRkLWNhcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksc0NBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNBUjtBRENRO0VBQ0ksYUFBQTtBQ0NaO0FEQVk7RUFDSSxrQkFBQTtBQ0VoQjtBRERnQjtFQUNJLG1DQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUNHcEI7QURFSTtFQUNJLDJCQUFBO0FDQVI7QURDUTtFQUNJLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGtDQUFBO0FDQ1o7QURDUTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQ0NaO0FEQ1E7RUFDSSxtQ0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNDWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkZC1jYXJkL2FkZC1jYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIC52aXNhX2RpdiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNreSk7XHJcbiAgICAgICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBpb24tcm93IHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTJweDtcclxuICAgICAgICAgICAgaW9uLWNvbCB7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAuY2hlY2tfZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNvbGlkLWdyZWVuKTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDJweDtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogMTJweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jb2xfZGl2IHtcclxuICAgICAgICBtYXJnaW46IDE2cHggMTZweCA2MHB4IDE2cHg7XHJcbiAgICAgICAgLmNhcmRfbGFiZWwge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0hlbHZldGljYS1OZXVlJztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW9yZGVyLWdyYXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24taW5wdXQge1xyXG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0hlbHZldGljYS1OZXVlJztcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjRDRENEQ0O1xyXG4gICAgICAgICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itb3JkZXItZ3JheSk7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jaGVja19kaXYge1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNvbGlkLWdyZWVuKTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxM3B4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTNweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAtN3B4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImlvbi1jb250ZW50IC52aXNhX2RpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1za3kpO1xuICBoZWlnaHQ6IDkwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmlvbi1jb250ZW50IC52aXNhX2RpdiBpb24tcm93IHtcbiAgcGFkZGluZzogMTJweDtcbn1cbmlvbi1jb250ZW50IC52aXNhX2RpdiBpb24tcm93IGlvbi1jb2wge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5pb24tY29udGVudCAudmlzYV9kaXYgaW9uLXJvdyBpb24tY29sIC5jaGVja19kaXYge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNvbGlkLWdyZWVuKTtcbiAgaGVpZ2h0OiAxM3B4O1xuICB3aWR0aDogMTNweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMnB4O1xuICByaWdodDogMTJweDtcbn1cbmlvbi1jb250ZW50IC5jb2xfZGl2IHtcbiAgbWFyZ2luOiAxNnB4IDE2cHggNjBweCAxNnB4O1xufVxuaW9uLWNvbnRlbnQgLmNvbF9kaXYgLmNhcmRfbGFiZWwge1xuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EtTmV1ZVwiO1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itb3JkZXItZ3JheSk7XG59XG5pb24tY29udGVudCAuY29sX2RpdiBpb24taW5wdXQge1xuICBib3JkZXI6IHNvbGlkIDFweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EtTmV1ZVwiO1xuICBib3JkZXItY29sb3I6ICNENEQ0RDQ7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1vcmRlci1ncmF5KTtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTVweDtcbn1cbmlvbi1jb250ZW50IC5jb2xfZGl2IC5jaGVja19kaXYge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNvbGlkLWdyZWVuKTtcbiAgaGVpZ2h0OiAxM3B4O1xuICB3aWR0aDogMTNweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtN3B4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/add-card/add-card.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/add-card/add-card.page.ts ***!
  \*************************************************/
/*! exports provided: AddCardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCardPage", function() { return AddCardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let AddCardPage = class AddCardPage {
    constructor(ntrl) {
        this.ntrl = ntrl;
    }
    ngOnInit() {
    }
    paymentCard() {
        this.ntrl.navigateForward(['payment']);
    }
};
AddCardPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
AddCardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-card',
        template: __webpack_require__(/*! raw-loader!./add-card.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/add-card/add-card.page.html"),
        styles: [__webpack_require__(/*! ./add-card.page.scss */ "./src/app/pages/add-card/add-card.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], AddCardPage);



/***/ })

}]);
//# sourceMappingURL=pages-add-card-add-card-module-es2015.js.map