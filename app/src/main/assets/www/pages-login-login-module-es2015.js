(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login/login.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n    <div class=\"ion-text-center  logo_div\">\n        <img src=\"assets/image/logo.png\" />\n\n\n    </div>\n    <form>\n        <ion-item lines=\"none\" class=\"item_div\">\n            <ion-label position=\"stacked\" class=\"lbl_name\">{{\"login_page.placeholder.email\" | translate}}</ion-label>\n            <ion-input name=\"email\" required type=\"email\" [(ngModel)]=\"user.email\">\n            </ion-input>\n        </ion-item>\n        <p class=\"err\" *ngIf=\"err?.email\">{{err?.email}}*</p>\n        <ion-item lines=\"none\" class=\"item_div\">\n            <ion-label position=\"stacked\" class=\"lbl_name\">{{\"login_page.placeholder.password\" | translate}}</ion-label>\n            <ion-input name=\"pass\" [type]=\"!showPassword ? 'password' : 'text'\" required type=\"Password\" [(ngModel)]=\"user.password\">\n            </ion-input>\n            <ion-button (click)=\"showPassword = !showPassword\" slot=\"end\" class=\"trans-btn\">\n                <ion-icon [name]=\"!showPassword ? 'eye' : 'eye-off'\"></ion-icon>\n            </ion-button>\n        </ion-item>\n        <p class=\"err\" *ngIf=\"err?.password\">{{err?.password}}*</p>\n        <ion-row>\n            <ion-col (click)=\"rememberToggle($event)\" class=\"first_col\">\n                <ion-checkbox [(ngModel)]=\"remember\" name=\"remember\"></ion-checkbox>\n                <ion-label>\n                    <h3 class=\"remember\">{{\"login_page.remember_me\" | translate}}</h3>\n                </ion-label>\n            </ion-col>\n            <ion-col class=\"ion-text-right\">\n                <ion-button class=\"forgot-btn ion-text-capitalize trans-btn\" (click)=\"forgotPassword()\">{{\"login_page.forgot_password_btn\" | translate}}\n                </ion-button>\n            </ion-col>\n        </ion-row>\n        <ion-button class=\"otp_btn signin_btn\" mode=\"md\" expand=\"full\" shape=\"round\" fill=\"solid\" (click)=\"gotoSlide()\">\n            {{\"login_page.sign_in_btn\" | translate}}\n        </ion-button>\n    </form>\n\n    <div class=\"last-div ion-text-center\">\n        <div class=\"account_div\">\n            <span class=\"text\">{{\"login_page.new_user_txt\" | translate}}</span>\n            <ion-button class=\"trans-btn last_button\" (click)=\"signup()\">{{\"login_page.sign_up_btn\" | translate}}</ion-button>\n        </div>\n    </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content .logo_div {\n  margin-top: 25px;\n  position: relative;\n  height: 100px;\n}\nion-content .logo_div .logo_text {\n  font-size: 40px;\n  font-family: \"PlayfairDisplay_Bold\";\n  color: var(--ion-color-green);\n  margin-top: 10px;\n}\nion-content .logo_div .boy_img {\n  bottom: 0;\n  left: 4px;\n  position: absolute;\n}\nion-content .logo_div span {\n  font-size: 22px;\n  font-family: \"Poppins-SemiBold\";\n  color: var(--ion-color-darkBlue);\n  position: absolute;\n  bottom: 10px;\n  right: 30px;\n}\nion-content form {\n  padding-left: 16px;\n  padding-right: 16px;\n  padding-top: 10px;\n  box-shadow: 0px -1px 3px 0px rgba(0, 0, 0, 0.16);\n  border-radius: 0px;\n}\nion-content form .item_div {\n  --padding-start: 0px;\n  border-bottom: 1px solid var(--ion-color-borderline);\n  --inner-padding-end: 0;\n}\nion-content form .item_div .lbl_name {\n  font-size: 20px;\n  color: var(--ion-color-darkBlue);\n  font-family: \"Poppins-Medium\";\n  margin-bottom: 5px;\n  margin-top: 5px;\n  font-weight: 600;\n}\nion-content form .item_div ion-input {\n  --placeholder-color: var(--ion-color-placeholder);\n  --placeholder-font-style: \"Poppins-Regular\";\n  --placeholder-opacity: 1;\n  font-size: 16px;\n  font-family: \"Poppins-Regular\";\n  color: #535353;\n}\nion-content form .item_div .trans-btn {\n  color: var(--ion-color-gray);\n  margin-top: 53px;\n}\nion-content form ion-row ion-col {\n  padding: 0px;\n  margin-top: 5px;\n}\nion-content form ion-row ion-col ion-checkbox {\n  pointer-events: none;\n  margin-right: 10px;\n  --border-radius: 2px;\n  height: 15px;\n  width: 15px;\n  --border-color: var(--ion-color-placeholder);\n  --background-checked: var(--ion-color-green);\n  --border-color-checked: var(--ion-color-green);\n}\nion-content form ion-row .first_col {\n  padding-top: 8px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\nion-content form ion-row .first_col .remember {\n  font-size: 14px;\n  font-family: \"poppins_r\";\n  color: var(--ion-color-gray);\n}\nion-content form ion-row .forgot-btn {\n  font-size: 14px;\n  font-family: \"Poppins-Regular\";\n  --color: var(--ion-color-darkBlue);\n  width: auto;\n  margin: 0;\n  margin-top: 5px;\n}\nion-content form .signin_btn {\n  --border-radius: 25px;\n  margin-top: 20px;\n  height: 46px;\n  --box-shadow: none;\n}\nion-content .or h2 {\n  font-size: 18px;\n  font-family: \"ComicSansMS\";\n  color: var(--ion-color-darkBlue);\n  margin-top: 30px;\n  text-align: center;\n  text-transform: uppercase;\n}\nion-content .or h2.background {\n  position: relative;\n  z-index: 1;\n}\nion-content .or h2.background:before {\n  border-top: 2px solid #dfdfdf;\n  content: \"\";\n  margin: 0 auto;\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 95%;\n  z-index: -1;\n}\nion-content .or h2.background span {\n  background: #fff;\n  padding: 0 15px;\n}\nion-content .or h2.double:before {\n  border-top: none;\n}\nion-content .or h2.double:after {\n  border-bottom: 1px solid blue;\n  box-shadow: 0 1px 0 0 red;\n  content: \"\";\n  margin: 0 auto;\n  position: absolute;\n  top: 45%;\n  left: 0;\n  right: 0;\n  width: 95%;\n  z-index: -1;\n}\nion-content .or h2.no-background {\n  position: relative;\n  overflow: hidden;\n}\nion-content .or h2.no-background span {\n  display: inline-block;\n  vertical-align: baseline;\n  zoom: 1;\n  *display: inline;\n  *vertical-align: auto;\n  position: relative;\n  padding: 0 20px;\n}\nion-content .or h2.no-background span:before, ion-content .or h2.no-background span:after {\n  content: \"\";\n  display: block;\n  width: 1000px;\n  position: absolute;\n  top: 0.73em;\n  border-top: 1px solid red;\n}\nion-content .or h2.no-background span:before {\n  right: 100%;\n}\nion-content .or h2.no-background span:after {\n  left: 100%;\n}\nion-content .or h2.no-span {\n  display: table;\n  white-space: nowrap;\n}\nion-content .or h2.no-span:before, ion-content .or h2.no-span:after {\n  border-top: 1px solid green;\n  content: \"\";\n  display: table-cell;\n  position: relative;\n  top: 0.5em;\n  width: 45%;\n}\nion-content .or h2.no-span:before {\n  right: 1.5%;\n}\nion-content .or h2.no-span:after {\n  left: 1.5%;\n}\nion-content .last-div {\n  margin-top: 20px;\n}\nion-content .last-div .twitter {\n  --background: var(--ion-color-twiter-btn);\n  --box-shadow: 0px 0px 6px 0px rgba(11, 170, 252, 1);\n}\nion-content .last-div .twitter ion-icon {\n  font-size: 13px;\n}\nion-content .last-div .facbook {\n  --background: var(--ion-color-facebook-btn);\n  --box-shadow: 0px 0px 6px 0px rgba(70, 90, 149, 1);\n}\nion-content .last-div .facbook ion-icon {\n  font-size: 13px;\n}\nion-content .last-div .google {\n  --background: var(--ion-color-google-btn);\n  margin: 0px 20px;\n  --box-shadow: 0px 0px 6px 0px rgba(246, 90, 91, 1);\n}\nion-content .last-div .google ion-icon {\n  font-size: 13px;\n}\nion-content .last-div .social {\n  height: 35px;\n  width: 35px;\n  --border-radius: 50%;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --border-width: 2px;\n  --border-style: solid;\n  --border-color: var(--white);\n}\nion-content .last-div .account_div {\n  margin-top: 15px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\nion-content .last-div .account_div .last_button {\n  --color: var(--ion-color-green);\n  font-size: 12px;\n  font-family: \"Poppins-SemiBold\";\n  text-transform: capitalize;\n  margin-left: 4px;\n}\nion-content .last-div .account_div .text {\n  font-size: 12px;\n  font-family: \"Poppins-Medium\";\n  color: var(--ion-color-darkBlue);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vQzpcXFVzZXJzXFxvc2lhblxcRGVza3RvcFxcTkFUVVVUMi4wL3NyY1xcYXBwXFxwYWdlc1xcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNBUjtBRENRO0VBQ0ksZUFBQTtFQUNBLG1DQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBQ0NaO0FEQ1E7RUFDSSxTQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FDQ1o7QURDUTtFQUNJLGVBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0NaO0FERUk7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnREFBQTtFQUNBLGtCQUFBO0FDQVI7QURDUTtFQUNJLG9CQUFBO0VBQ0Esb0RBQUE7RUFDQSxzQkFBQTtBQ0NaO0FEQVk7RUFDSSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDRWhCO0FEQVk7RUFDSSxpREFBQTtFQUNBLDJDQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0FDRWhCO0FEQVk7RUFDSSw0QkFBQTtFQUNBLGdCQUFBO0FDRWhCO0FERVk7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBQ0FoQjtBRENnQjtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsNENBQUE7RUFDQSw0Q0FBQTtFQUNBLDhDQUFBO0FDQ3BCO0FERVk7RUFDSSxnQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNBaEI7QURDZ0I7RUFDSSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtBQ0NwQjtBREVZO0VBQ0ksZUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0NBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUNBaEI7QURHUTtFQUNJLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNEWjtBREtRO0VBQ0ksZUFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUNIWjtBREtRO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FDSFo7QURJWTtFQUNJLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ0ZoQjtBRElZO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FDRmhCO0FES1E7RUFDSSxnQkFBQTtBQ0haO0FES1E7RUFDSSw2QkFBQTtFQUdBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDSFo7QURLUTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUNIWjtBRElZO0VBQ0kscUJBQUE7RUFDQSx3QkFBQTtFQUNBLE9BQUE7R0FDQSxlQUFBO0dBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNGaEI7QURHZ0I7RUFFSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQ0ZwQjtBRElnQjtFQUNJLFdBQUE7QUNGcEI7QURJZ0I7RUFDSSxVQUFBO0FDRnBCO0FETVE7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7QUNKWjtBREtZO0VBRUksMkJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FDSmhCO0FETVk7RUFDSSxXQUFBO0FDSmhCO0FETVk7RUFDSSxVQUFBO0FDSmhCO0FEUUk7RUFDSSxnQkFBQTtBQ05SO0FET1E7RUFDSSx5Q0FBQTtFQUNBLG1EQUFBO0FDTFo7QURNWTtFQUNJLGVBQUE7QUNKaEI7QURPUTtFQUNJLDJDQUFBO0VBQ0Esa0RBQUE7QUNMWjtBRE1ZO0VBQ0ksZUFBQTtBQ0poQjtBRE9RO0VBQ0kseUNBQUE7RUFDQSxnQkFBQTtFQUNBLGtEQUFBO0FDTFo7QURNWTtFQUNJLGVBQUE7QUNKaEI7QURPUTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0FDTFo7QURPUTtFQUNJLGdCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNMWjtBRE1ZO0VBQ0ksK0JBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0FDSmhCO0FETVk7RUFDSSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtBQ0poQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIC5sb2dvX2RpdiB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAubG9nb190ZXh0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJQbGF5ZmFpckRpc3BsYXlfQm9sZFwiO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyZWVuKTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJveV9pbWcge1xyXG4gICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgIGxlZnQ6IDRweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zLVNlbWlCb2xkXCI7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya0JsdWUpO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgcmlnaHQ6IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9ybSB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IC0xcHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgICAgICAuaXRlbV9kaXYge1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1ib3JkZXJsaW5lKTtcclxuICAgICAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcclxuICAgICAgICAgICAgLmxibF9uYW1lIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya0JsdWUpO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW9uLWlucHV0IHtcclxuICAgICAgICAgICAgICAgIC0tcGxhY2Vob2xkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1wbGFjZWhvbGRlcik7XHJcbiAgICAgICAgICAgICAgICAtLXBsYWNlaG9sZGVyLWZvbnQtc3R5bGU6IFwiUG9wcGlucy1SZWd1bGFyXCI7XHJcbiAgICAgICAgICAgICAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zLVJlZ3VsYXJcIjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNTM1MzUzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50cmFucy1idG4ge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1ncmF5KTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDUzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLXJvdyB7XHJcbiAgICAgICAgICAgIGlvbi1jb2wge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgICAgICAgaW9uLWNoZWNrYm94IHtcclxuICAgICAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcGxhY2Vob2xkZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiB2YXIoLS1pb24tY29sb3ItZ3JlZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIC0tYm9yZGVyLWNvbG9yLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1ncmVlbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmZpcnN0X2NvbCB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAucmVtZW1iZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3BvcHBpbnNfcic7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1ncmF5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZm9yZ290LWJ0biB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zLVJlZ3VsYXJcIjtcclxuICAgICAgICAgICAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrQmx1ZSk7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuc2lnbmluX2J0biB7XHJcbiAgICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0NnB4O1xyXG4gICAgICAgICAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm9yIHtcclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiQ29taWNTYW5zTVNcIjtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrQmx1ZSk7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDIuYmFja2dyb3VuZCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNkZmRmZGY7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaDIuZG91YmxlOmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGgyLmRvdWJsZTphZnRlciB7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibHVlO1xyXG4gICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDAgMCByZWQ7XHJcbiAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMCAxcHggMCAwIHJlZDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxcHggMCAwIHJlZDtcclxuICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiA0NSU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDIubm8tYmFja2dyb3VuZCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbiAgICAgICAgICAgICAgICB6b29tOiAxO1xyXG4gICAgICAgICAgICAgICAgKmRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICAgICAgICAgICp2ZXJ0aWNhbC1hbGlnbjogYXV0bztcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgICAgICAgICAgICAgICY6YmVmb3JlLFxyXG4gICAgICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDAuNzNlbTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmVkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMTAwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBoMi5uby1zcGFuIHtcclxuICAgICAgICAgICAgZGlzcGxheTogdGFibGU7XHJcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICY6YmVmb3JlLFxyXG4gICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBncmVlbjtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwLjVlbTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0NSU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDEuNSU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAxLjUlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmxhc3QtZGl2IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIC50d2l0dGVyIHtcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItdHdpdGVyLWJ0bik7XHJcbiAgICAgICAgICAgIC0tYm94LXNoYWRvdzogMHB4IDBweCA2cHggMHB4IHJnYmEoMTEsIDE3MCwgMjUyLCAxKTtcclxuICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mYWNib29rIHtcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZmFjZWJvb2stYnRuKTtcclxuICAgICAgICAgICAgLS1ib3gtc2hhZG93OiAwcHggMHB4IDZweCAwcHggcmdiYSg3MCwgOTAsIDE0OSwgMSk7XHJcbiAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuZ29vZ2xlIHtcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZ29vZ2xlLWJ0bik7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDIwcHg7XHJcbiAgICAgICAgICAgIC0tYm94LXNoYWRvdzogMHB4IDBweCA2cHggMHB4IHJnYmEoMjQ2LCA5MCwgOTEsIDEpO1xyXG4gICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnNvY2lhbCB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLWVuZDogMHB4O1xyXG4gICAgICAgICAgICAtLWJvcmRlci13aWR0aDogMnB4O1xyXG4gICAgICAgICAgICAtLWJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hY2NvdW50X2RpdiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAubGFzdF9idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyZWVuKTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtU2VtaUJvbGRcIjtcclxuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudGV4dCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zLU1lZGl1bVwiO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrQmx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpb24tY29udGVudCAubG9nb19kaXYge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwcHg7XG59XG5pb24tY29udGVudCAubG9nb19kaXYgLmxvZ29fdGV4dCB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgZm9udC1mYW1pbHk6IFwiUGxheWZhaXJEaXNwbGF5X0JvbGRcIjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1ncmVlbik7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5pb24tY29udGVudCAubG9nb19kaXYgLmJveV9pbWcge1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDRweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuaW9uLWNvbnRlbnQgLmxvZ29fZGl2IHNwYW4ge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtU2VtaUJvbGRcIjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrQmx1ZSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMHB4O1xuICByaWdodDogMzBweDtcbn1cbmlvbi1jb250ZW50IGZvcm0ge1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBib3gtc2hhZG93OiAwcHggLTFweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbn1cbmlvbi1jb250ZW50IGZvcm0gLml0ZW1fZGl2IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItYm9yZGVybGluZSk7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG59XG5pb24tY29udGVudCBmb3JtIC5pdGVtX2RpdiAubGJsX25hbWUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya0JsdWUpO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zLU1lZGl1bVwiO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbmlvbi1jb250ZW50IGZvcm0gLml0ZW1fZGl2IGlvbi1pbnB1dCB7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1wbGFjZWhvbGRlcik7XG4gIC0tcGxhY2Vob2xkZXItZm9udC1zdHlsZTogXCJQb3BwaW5zLVJlZ3VsYXJcIjtcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtUmVndWxhclwiO1xuICBjb2xvcjogIzUzNTM1Mztcbn1cbmlvbi1jb250ZW50IGZvcm0gLml0ZW1fZGl2IC50cmFucy1idG4ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyYXkpO1xuICBtYXJnaW4tdG9wOiA1M3B4O1xufVxuaW9uLWNvbnRlbnQgZm9ybSBpb24tcm93IGlvbi1jb2wge1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbmlvbi1jb250ZW50IGZvcm0gaW9uLXJvdyBpb24tY29sIGlvbi1jaGVja2JveCB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIC0tYm9yZGVyLXJhZGl1czogMnB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIHdpZHRoOiAxNXB4O1xuICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXBsYWNlaG9sZGVyKTtcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1ncmVlbik7XG4gIC0tYm9yZGVyLWNvbG9yLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1ncmVlbik7XG59XG5pb24tY29udGVudCBmb3JtIGlvbi1yb3cgLmZpcnN0X2NvbCB7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5pb24tY29udGVudCBmb3JtIGlvbi1yb3cgLmZpcnN0X2NvbCAucmVtZW1iZXIge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBcInBvcHBpbnNfclwiO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyYXkpO1xufVxuaW9uLWNvbnRlbnQgZm9ybSBpb24tcm93IC5mb3Jnb3QtYnRuIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zLVJlZ3VsYXJcIjtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtCbHVlKTtcbiAgd2lkdGg6IGF1dG87XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuaW9uLWNvbnRlbnQgZm9ybSAuc2lnbmluX2J0biB7XG4gIC0tYm9yZGVyLXJhZGl1czogMjVweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgaGVpZ2h0OiA0NnB4O1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG59XG5pb24tY29udGVudCAub3IgaDIge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkNvbWljU2Fuc01TXCI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya0JsdWUpO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5pb24tY29udGVudCAub3IgaDIuYmFja2dyb3VuZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbn1cbmlvbi1jb250ZW50IC5vciBoMi5iYWNrZ3JvdW5kOmJlZm9yZSB7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZGZkZmRmO1xuICBjb250ZW50OiBcIlwiO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDk1JTtcbiAgei1pbmRleDogLTE7XG59XG5pb24tY29udGVudCAub3IgaDIuYmFja2dyb3VuZCBzcGFuIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogMCAxNXB4O1xufVxuaW9uLWNvbnRlbnQgLm9yIGgyLmRvdWJsZTpiZWZvcmUge1xuICBib3JkZXItdG9wOiBub25lO1xufVxuaW9uLWNvbnRlbnQgLm9yIGgyLmRvdWJsZTphZnRlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibHVlO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDAgMCByZWQ7XG4gIC1tb3otYm94LXNoYWRvdzogMCAxcHggMCAwIHJlZDtcbiAgYm94LXNoYWRvdzogMCAxcHggMCAwIHJlZDtcbiAgY29udGVudDogXCJcIjtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0NSU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogOTUlO1xuICB6LWluZGV4OiAtMTtcbn1cbmlvbi1jb250ZW50IC5vciBoMi5uby1iYWNrZ3JvdW5kIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuaW9uLWNvbnRlbnQgLm9yIGgyLm5vLWJhY2tncm91bmQgc3BhbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICB6b29tOiAxO1xuICAqZGlzcGxheTogaW5saW5lO1xuICAqdmVydGljYWwtYWxpZ246IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMCAyMHB4O1xufVxuaW9uLWNvbnRlbnQgLm9yIGgyLm5vLWJhY2tncm91bmQgc3BhbjpiZWZvcmUsIGlvbi1jb250ZW50IC5vciBoMi5uby1iYWNrZ3JvdW5kIHNwYW46YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDAuNzNlbTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJlZDtcbn1cbmlvbi1jb250ZW50IC5vciBoMi5uby1iYWNrZ3JvdW5kIHNwYW46YmVmb3JlIHtcbiAgcmlnaHQ6IDEwMCU7XG59XG5pb24tY29udGVudCAub3IgaDIubm8tYmFja2dyb3VuZCBzcGFuOmFmdGVyIHtcbiAgbGVmdDogMTAwJTtcbn1cbmlvbi1jb250ZW50IC5vciBoMi5uby1zcGFuIHtcbiAgZGlzcGxheTogdGFibGU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5pb24tY29udGVudCAub3IgaDIubm8tc3BhbjpiZWZvcmUsIGlvbi1jb250ZW50IC5vciBoMi5uby1zcGFuOmFmdGVyIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGdyZWVuO1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMC41ZW07XG4gIHdpZHRoOiA0NSU7XG59XG5pb24tY29udGVudCAub3IgaDIubm8tc3BhbjpiZWZvcmUge1xuICByaWdodDogMS41JTtcbn1cbmlvbi1jb250ZW50IC5vciBoMi5uby1zcGFuOmFmdGVyIHtcbiAgbGVmdDogMS41JTtcbn1cbmlvbi1jb250ZW50IC5sYXN0LWRpdiB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5pb24tY29udGVudCAubGFzdC1kaXYgLnR3aXR0ZXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci10d2l0ZXItYnRuKTtcbiAgLS1ib3gtc2hhZG93OiAwcHggMHB4IDZweCAwcHggcmdiYSgxMSwgMTcwLCAyNTIsIDEpO1xufVxuaW9uLWNvbnRlbnQgLmxhc3QtZGl2IC50d2l0dGVyIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuaW9uLWNvbnRlbnQgLmxhc3QtZGl2IC5mYWNib29rIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZmFjZWJvb2stYnRuKTtcbiAgLS1ib3gtc2hhZG93OiAwcHggMHB4IDZweCAwcHggcmdiYSg3MCwgOTAsIDE0OSwgMSk7XG59XG5pb24tY29udGVudCAubGFzdC1kaXYgLmZhY2Jvb2sgaW9uLWljb24ge1xuICBmb250LXNpemU6IDEzcHg7XG59XG5pb24tY29udGVudCAubGFzdC1kaXYgLmdvb2dsZSB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWdvb2dsZS1idG4pO1xuICBtYXJnaW46IDBweCAyMHB4O1xuICAtLWJveC1zaGFkb3c6IDBweCAwcHggNnB4IDBweCByZ2JhKDI0NiwgOTAsIDkxLCAxKTtcbn1cbmlvbi1jb250ZW50IC5sYXN0LWRpdiAuZ29vZ2xlIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuaW9uLWNvbnRlbnQgLmxhc3QtZGl2IC5zb2NpYWwge1xuICBoZWlnaHQ6IDM1cHg7XG4gIHdpZHRoOiAzNXB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgLS1ib3JkZXItd2lkdGg6IDJweDtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAtLWJvcmRlci1jb2xvcjogdmFyKC0td2hpdGUpO1xufVxuaW9uLWNvbnRlbnQgLmxhc3QtZGl2IC5hY2NvdW50X2RpdiB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgLmxhc3QtZGl2IC5hY2NvdW50X2RpdiAubGFzdF9idXR0b24ge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZ3JlZW4pO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtU2VtaUJvbGRcIjtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG59XG5pb24tY29udGVudCAubGFzdC1kaXYgLmFjY291bnRfZGl2IC50ZXh0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zLU1lZGl1bVwiO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtCbHVlKTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_util_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../service/util.service */ "./src/app/service/util.service.ts");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");






let LoginPage = class LoginPage {
    constructor(menu, ntrl, api, util, translate) {
        this.menu = menu;
        this.ntrl = ntrl;
        this.api = api;
        this.util = util;
        this.translate = translate;
        this.user = {
            provider: "LOCAL",
            email: "user@natuur.ga",
            password: "123456",
        };
        this.err = {};
        this.remember = false;
        this.showPassword = false;
        this.menu.enable(false);
        if (localStorage.getItem("remember")) {
            this.user = JSON.parse(localStorage.getItem("remember"));
            this.user.provider = "LOCAL";
            this.remember = true;
        }
    }
    ngOnInit() { }
    signup() {
        this.ntrl.navigateForward(["signup"]);
    }
    gotoSlide() {
        this.user.device_token = this.api.deviceToken ? this.api.deviceToken : null;
        this.util.startLoad();
        this.api.postData("login", this.user).subscribe((res) => {
            if (res.success) {
                // for remember me
                if (this.remember) {
                    let temp = {
                        email: this.user.email,
                        password: this.user.password,
                    };
                    localStorage.setItem("remember", JSON.stringify(temp));
                }
                else {
                    localStorage.removeItem("remember");
                }
                this.err = {};
                localStorage.setItem("token", res.data.token);
                this.api.userToken = res.data.token;
                this.util.isUpdateProfile.next(true);
                this.translate.get("toasts").subscribe((val) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    this.util.presentToast(val.logged_in_success);
                }));
                if (res.data.address_id) {
                    localStorage.setItem("isaddress", res.data.address_id);
                }
                else {
                    localStorage.setItem("isaddress", "false");
                }
                this.ntrl.navigateRoot("/home");
            }
            else {
                this.api.verifyId = res.data.id;
                this.ntrl.navigateForward("verify");
            }
            this.util.dismissLoader();
        }, (err) => {
            if (err.error.msg) {
                this.util.presentToast(err.error.msg);
            }
            this.err = err.error.errors;
            this.util.dismissLoader();
        });
    }
    forgotPassword() {
        this.ntrl.navigateForward(["forgot"]);
    }
    rememberToggle(ev) {
        ev.stopPropagation();
        this.remember = !this.remember;
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _service_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-login",
        template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html"),
        styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
        _service_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es2015.js.map