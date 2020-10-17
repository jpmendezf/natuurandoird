(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-invite-friends-invite-friends-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/invite-friends/invite-friends.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/invite-friends/invite-friends.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n    <ion-toolbar mode=\"md\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"home\" icon=\"ios-arrow-back\" text=\"\"></ion-back-button>\n        </ion-buttons>\n        <ion-title class=\"ion-text-uppercase\">{{\"invite_Friends_page.title\" | translate}}</ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <div class=\"main_div ion-margin-horizontal\">\n        <img src=\"assets/image/invite.png\">\n        <h3 class=\"name\">{{\"invite_Friends_page.title\" | translate}}</h3>\n        <p class=\"detail\">{{\"invite_Friends_page.text\" | translate}}</p>\n        <h3 class=\"code\">{{\"invite_Friends_page.referral_code\" | translate}}</h3>\n        <div class=\"coopan_div\">\n            <h3 class=\"coopan\">{{data}}</h3>\n        </div>\n    </div>\n</ion-content>\n<ion-footer>\n    <ion-button class=\"otp_btn\" (click)=\"shareIt()\">\n        {{\"invite_Friends_page.invite_btn\" | translate}}\n    </ion-button>\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/invite-friends/invite-friends.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/invite-friends/invite-friends.module.ts ***!
  \***************************************************************/
/*! exports provided: InviteFriendsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InviteFriendsPageModule", function() { return InviteFriendsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _invite_friends_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./invite-friends.page */ "./src/app/pages/invite-friends/invite-friends.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








const routes = [
    {
        path: '',
        component: _invite_friends_page__WEBPACK_IMPORTED_MODULE_6__["InviteFriendsPage"]
    }
];
let InviteFriendsPageModule = class InviteFriendsPageModule {
};
InviteFriendsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_invite_friends_page__WEBPACK_IMPORTED_MODULE_6__["InviteFriendsPage"]]
    })
], InviteFriendsPageModule);



/***/ }),

/***/ "./src/app/pages/invite-friends/invite-friends.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/invite-friends/invite-friends.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content .main_div {\n  padding-top: 30px;\n  text-align: center;\n}\nion-content .main_div .name {\n  font-size: 22px;\n  font-family: \"Poppins-SemiBold\";\n  color: var(--ion-color-darkBlue);\n  margin-top: 50px;\n  margin-bottom: 20px;\n}\nion-content .main_div .detail {\n  font-size: 12px;\n  font-family: \"Poppins-Regular\";\n  color: var(--ion-color-darkgray);\n}\nion-content .main_div .code {\n  font-size: 16px;\n  font-family: \"Poppins-SemiBold\";\n  color: var(--ion-color-darkBlue);\n  margin-bottom: 20px;\n  margin-top: 40px;\n}\nion-content .main_div .coopan_div {\n  height: 28px;\n  border: dashed 1px var(--ion-color-border-red);\n  background-color: var(--ion-color-lbl-color);\n  padding: 5px 12px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: auto;\n  margin-bottom: 30px;\n}\nion-content .main_div .coopan_div .coopan {\n  font-size: 13px;\n  font-family: \"WorkSans_Regular\";\n  color: var(--ion-color-black);\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW52aXRlLWZyaWVuZHMvQzpcXFVzZXJzXFxvc2lhblxcRGVza3RvcFxcTkFUVVVUMi4wL3NyY1xcYXBwXFxwYWdlc1xcaW52aXRlLWZyaWVuZHNcXGludml0ZS1mcmllbmRzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvaW52aXRlLWZyaWVuZHMvaW52aXRlLWZyaWVuZHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ssaUJBQUE7RUFDQSxrQkFBQTtBQ0FUO0FEQ1k7RUFDSSxlQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDaEI7QURDWTtFQUNLLGVBQUE7RUFDQSw4QkFBQTtFQUNBLGdDQUFBO0FDQ2pCO0FEQ1k7RUFDSyxlQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNDakI7QURDWTtFQUNLLFlBQUE7RUFDQSw4Q0FBQTtFQUNBLDRDQUFBO0VBQ0QsaUJBQUE7RUFDQywwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDRCxZQUFBO0VBQ0EsbUJBQUE7QUNDaEI7QURBWTtFQUNRLGVBQUE7RUFDQSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtBQ0VwQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ludml0ZS1mcmllbmRzL2ludml0ZS1mcmllbmRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgLm1haW5fZGl2e1xyXG4gICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAubmFtZXtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucy1TZW1pQm9sZCc7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtCbHVlKTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZGV0YWlse1xyXG4gICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1BvcHBpbnMtUmVndWxhcic7XHJcbiAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrZ3JheSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNvZGV7XHJcbiAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucy1TZW1pQm9sZCc7XHJcbiAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrQmx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jb29wYW5fZGl2e1xyXG4gICAgICAgICAgICAgICAgIGhlaWdodDogMjhweDtcclxuICAgICAgICAgICAgICAgICBib3JkZXI6ZGFzaGVkIDFweCB2YXIoLS1pb24tY29sb3ItYm9yZGVyLXJlZCk7XHJcbiAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKCAtLWlvbi1jb2xvci1sYmwtY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgICAgICAgLmNvb3BhbntcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdXb3JrU2Fuc19SZWd1bGFyJztcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWJsYWNrKTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgfVxyXG59IiwiaW9uLWNvbnRlbnQgLm1haW5fZGl2IHtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmlvbi1jb250ZW50IC5tYWluX2RpdiAubmFtZSB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1TZW1pQm9sZFwiO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtCbHVlKTtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbmlvbi1jb250ZW50IC5tYWluX2RpdiAuZGV0YWlsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zLVJlZ3VsYXJcIjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrZ3JheSk7XG59XG5pb24tY29udGVudCAubWFpbl9kaXYgLmNvZGUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtU2VtaUJvbGRcIjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrQmx1ZSk7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG5pb24tY29udGVudCAubWFpbl9kaXYgLmNvb3Bhbl9kaXYge1xuICBoZWlnaHQ6IDI4cHg7XG4gIGJvcmRlcjogZGFzaGVkIDFweCB2YXIoLS1pb24tY29sb3ItYm9yZGVyLXJlZCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1sYmwtY29sb3IpO1xuICBwYWRkaW5nOiA1cHggMTJweDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5pb24tY29udGVudCAubWFpbl9kaXYgLmNvb3Bhbl9kaXYgLmNvb3BhbiB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC1mYW1pbHk6IFwiV29ya1NhbnNfUmVndWxhclwiO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWJsYWNrKTtcbiAgbWFyZ2luOiAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/invite-friends/invite-friends.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/invite-friends/invite-friends.page.ts ***!
  \*************************************************************/
/*! exports provided: InviteFriendsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InviteFriendsPage", function() { return InviteFriendsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_util_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../service/util.service */ "./src/app/service/util.service.ts");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");






let InviteFriendsPage = class InviteFriendsPage {
    constructor(ntrl, api, socialSharing, util) {
        this.ntrl = ntrl;
        this.api = api;
        this.socialSharing = socialSharing;
        this.util = util;
        this.util.startLoad();
        this.api.getDataWithToken("friendsCode").subscribe((res) => {
            if (res.success) {
                this.data = res.data;
                this.util.dismissLoader();
            }
        });
    }
    ngOnInit() { }
    back() {
        this.ntrl.back();
    }
    shareIt() {
        this.socialSharing
            .share("please login my referral code " +
            this.data +
            " with irest app and get first order free")
            .then((res) => {
            console.log("res: ", res);
        })
            .catch((err) => {
            console.log("err: ", err);
        });
    }
};
InviteFriendsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__["SocialSharing"] },
    { type: _service_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"] }
];
InviteFriendsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-invite-friends",
        template: __webpack_require__(/*! raw-loader!./invite-friends.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/invite-friends/invite-friends.page.html"),
        styles: [__webpack_require__(/*! ./invite-friends.page.scss */ "./src/app/pages/invite-friends/invite-friends.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
        _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__["SocialSharing"],
        _service_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"]])
], InviteFriendsPage);



/***/ })

}]);
//# sourceMappingURL=pages-invite-friends-invite-friends-module-es2015.js.map