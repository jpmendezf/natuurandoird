(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile/profile.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile/profile.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n    <ion-toolbar [style.backgroundImage]=\"'url('+(coverImage ? coverImage : 'http://placehold.it/200x200' )+')'\">\n        <ion-buttons slot=\"start\" class=\"start_btn\">\n            <ion-back-button defaultHref=\"home\" icon=\"ios-arrow-back\" text=\"\"></ion-back-button>\n        </ion-buttons>\n        <ion-buttons slot=\"end\" class=\"end_btn\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n    </ion-toolbar>\n    <ion-button class=\"edit_btn ion-text-capitalize\" (click)=\"editCoverimg()\">\n        <ion-icon src=\"assets/icon-image/camera-icon.svg\"></ion-icon>\n        {{\"profile_page.edit\" | translate}}\n    </ion-button>\n    <div class=\"profile-image\">\n        <img [src]=\"imgProfile\">\n        <div class=\"active\" (click)=\"chageProfileOption()\">\n            <ion-icon src=\"assets/icon-image/cam-white.svg\"></ion-icon>\n        </div>\n    </div>\n    <div class=\"name_div ion-text-center\">\n        <h3 class=\"name\">{{userName}}</h3>\n        <p class=\"location\">\n            <ion-icon src=\"assets/icon-image/location.svg\"></ion-icon>\n            {{userLocation}}\n        </p>\n    </div>\n    <div class=\"btn_div\">\n        <ion-button class=\"ion-text-capitalize\" (click)=\"segment = 1\" [ngClass]=\"segment==1 ? 'active' :'segment_btn'\">\n            {{\"profile_page.segment.reviews\" | translate}}\n        </ion-button>\n        <ion-button class=\"ion-text-capitalize\" (click)=\"segment = 2\" [ngClass]=\"segment==2 ? 'active' :'segment_btn'\">\n            {{\"profile_page.segment.photos\" | translate}}\n        </ion-button>\n        <ion-button class=\"ion-text-capitalize\" (click)=\"segment = 3\" [ngClass]=\"segment==3 ? 'active' :'segment_btn'\">\n            {{\"profile_page.segment.edit_profile\" | translate}}\n        </ion-button>\n        <ion-button class=\"ion-text-capitalize\" (click)=\"segment = 4\" [ngClass]=\"segment==4 ? 'active' :'segment_btn'\">\n            {{\"profile_page.segment.setting\" | translate}}\n        </ion-button>\n        <ion-button class=\"ion-text-capitalize\" (click)=\"segment = 5\" [ngClass]=\"segment==5 ? 'active' :'segment_btn'\">\n            {{\"profile_page.segment.change_password\" | translate}}\n        </ion-button>\n    </div>\n</ion-header>\n\n<ion-content>\n    <div *ngIf=\"segment==1\" class=\"review_div\">\n        <!-- <p *ngIf=\"data?.photos?.length==0\" class=\"no_data_p\">\n            {{\"profile_page.no_data\" | translate}}</p> -->\n\n        <ion-row>\n            <ion-col size=\"12\" class=\"ion-no-padding\">\n                <div class=\"segment\">\n                    <ion-button class=\"ion-text-capitalize\" (click)=\"subsegment = 1\" [ngClass]=\"subsegment==1 ? 'active' :'segment_btn'\">\n                        Grocery\n                    </ion-button>\n                    <ion-button class=\"ion-text-capitalize\" (click)=\"subsegment = 2\" [ngClass]=\"subsegment==2 ? 'active' :'segment_btn'\">\n                        Food\n                    </ion-button>\n                </div>\n            </ion-col>\n        </ion-row>\n        <div *ngIf=\"subsegment==1\">\n            <ion-item class=\"review_item\" *ngFor=\"let item of data?.grocery_review\" lines=\"none\">\n                <ion-avatar slot=\"start\">\n                    <img [src]=\"item?.customer?.imagePath + item?.customer?.image\" />\n                </ion-avatar>\n                <ion-label>\n                    <ion-icon [class]=\"item.rate >= 5 ? 'first_icon hydrated ion-float-right' : 'last_icon hydrated ion-float-right'\" name=\"star\"></ion-icon>\n                    <ion-icon [class]=\"item.rate >= 4 ? 'first_icon hydrated ion-float-right' : 'last_icon hydrated ion-float-right'\" name=\"star\"></ion-icon>\n                    <ion-icon [class]=\"item.rate >= 3 ? 'first_icon hydrated ion-float-right' : 'last_icon hydrated ion-float-right'\" name=\"star\"></ion-icon>\n                    <ion-icon [class]=\"item.rate >= 2 ? 'first_icon hydrated ion-float-right' : 'last_icon hydrated ion-float-right'\" name=\"star\"></ion-icon>\n                    <ion-icon [class]=\"item.rate >= 1 ? 'first_icon hydrated ion-float-right' : 'last_icon hydrated ion-float-right'\" name=\"star\"></ion-icon>\n                    <h3 class=\"name\">{{item?.shopName}}</h3>\n\n                    <h3 class=\"ago\">{{item?.created_at}}</h3>\n                    <p class=\"detail\">{{item?.message}}</p>\n                </ion-label>\n            </ion-item>\n        </div>\n        <div *ngIf=\"subsegment==2\">\n            <p *ngIf=\"data?.photos?.length==0\" class=\"no_data_p\">\n                {{\"profile_page.no_data\" | translate}}\n            </p>\n        </div>\n\n    </div>\n\n    <div *ngIf=\"segment==2\" class=\"photo_div ion-margin-start\">\n        <p *ngIf=\"data?.photos?.length==0\" class=\"no_data_p\">\n            {{\"profile_page.no_data\" | translate}}</p>\n        <div class=\"masonry-group\">\n            <img class=\"masonry-item\" [src]=\"item.imagePath + item.image\" *ngFor=\"let item of data?.photos\" />\n        </div>\n    </div>\n\n    <div *ngIf=\"segment==3\" class=\"profile_div\">\n        <ion-item class=\"profile_item\" lines=\"none\">\n            <ion-label class=\"tittle\" position=\"stacked\" mode=\"md\">\n                {{\"profile_page.placeholder.name\" | translate}}\n            </ion-label>\n            <ion-input [(ngModel)]=\"userDetail.name\" class=\"data\" type=\"text\"></ion-input>\n        </ion-item>\n        <p class=\"err\" *ngIf=\"err?.name\">{{err?.name}}*</p>\n        <ion-item class=\"profile_item\" lines=\"none\">\n            <ion-label class=\"tittle\" position=\"stacked\" mode=\"md\">\n                {{\"profile_page.placeholder.email\" | translate}}\n            </ion-label>\n            <ion-input [disabled]=\"true\" [(ngModel)]=\"userDetail.email\" class=\"data\" type=\"email\"></ion-input>\n        </ion-item>\n        <p class=\"err\" *ngIf=\"err?.email\">{{err?.email}}*</p>\n        <ion-item class=\"profile_item\" lines=\"none\">\n            <ion-label class=\"tittle\" position=\"stacked\" mode=\"md\">\n                {{\"profile_page.placeholder.phone_number\" | translate}}\n            </ion-label>\n            <ion-input [(ngModel)]=\"userDetail.phone\" class=\"data\" type=\"tel\"></ion-input>\n        </ion-item>\n        <p class=\"err\" *ngIf=\"err?.phone\">{{err?.phone}}*</p>\n        <ion-item class=\"profile_item\" lines=\"none\">\n            <ion-label class=\"tittle\" position=\"stacked\" mode=\"md\">\n                {{\"profile_page.placeholder.location\" | translate}}\n            </ion-label>\n            <ion-input [(ngModel)]=\"userDetail.location\" class=\"data\" type=\"text\"></ion-input>\n        </ion-item>\n        <p class=\"err\" *ngIf=\"err?.location\">{{err?.location}}*</p>\n    </div>\n\n    <div *ngIf=\"segment==4\" class=\"setting_div\">\n        <ion-item lines=\"none\" class=\"setting_item\">\n            <ion-label slot=\"start\">\n                <h3 class=\"tittle\">{{\"profile_page.notification\" | translate}}</h3>\n            </ion-label>\n            <ion-toggle slot=\"end\" checked [(ngModel)]=\"userSetting.enable_notification\" [checked]=\"userSetting.enable_notification\"></ion-toggle>\n        </ion-item>\n\n        <ion-item lines=\"none\" class=\"setting_item\">\n            <ion-label slot=\"start\">\n                <h3 class=\"tittle\">{{\"profile_page.location\" | translate}}</h3>\n            </ion-label>\n            <ion-toggle slot=\"end\" checked [(ngModel)]=\"userSetting.enable_location\" [checked]=\"userSetting?.enable_location\"></ion-toggle>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"setting_item\">\n            <ion-label slot=\"start\">\n                <h3 class=\"tittle\">{{\"profile_page.call\" | translate}}</h3>\n            </ion-label>\n            <ion-toggle slot=\"end\" checked [(ngModel)]=\"userSetting.enable_call\" [checked]=\"userSetting?.enable_call\"></ion-toggle>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"setting_item\">\n            <ion-label>\n                <h3 class=\"tittle\">{{\"profile_page.language\" | translate}}</h3>\n            </ion-label>\n            <ion-select okText=\"{{'profile_page.okay_text' | translate}}\" cancelText=\"{{'profile_page.cancel_text' | translate}}\" (ionChange)=\"onLanguageChange()\" [(ngModel)]=\"language\">\n                <ion-select-option value=\"en\">{{\"profile_page.english\" | translate}}</ion-select-option>\n                <ion-select-option value=\"ar\">{{\"profile_page.arabic\" | translate}}</ion-select-option>\n            </ion-select>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"setting_item\">\n            <ion-label>\n                <p class=\"address\">\n                    {{\"profile_page.default_address\" | translate}}\n                    <ion-button class=\"trans-btn ion-float-right\" (click)=\"changeAddress()\">{{\"profile_page.change\" | translate}}</ion-button>\n                </p>\n                <p class=\"change\">{{data?.userAddress?.soc_name}} {{data?.userAddress?.street}} {{data?.userAddress?.city}} {{data?.userAddress?.zipcode}}</p>\n            </ion-label>\n        </ion-item>\n    </div>\n\n    <div *ngIf=\"segment==5\" class=\"profile_div\">\n        <ion-item class=\"profile_item\" lines=\"none\">\n            <ion-label class=\"tittle\" position=\"stacked\" mode=\"md\">\n                {{\"profile_page.placeholder.new_password\" | translate}}\n            </ion-label>\n            <ion-input class=\"data\" type=\"password\" [(ngModel)]=\"passwordData.password\"></ion-input>\n        </ion-item>\n        <p class=\"err\" *ngIf=\"err?.password\">\n            {{err?.password}}</p>\n        <ion-item class=\"profile_item\" lines=\"none\">\n            <ion-label class=\"tittle\" position=\"stacked\" mode=\"md\">\n                {{\"profile_page.placeholder.confirm_password\" | translate}}\n            </ion-label>\n            <ion-input class=\"data\" type=\"password\" [(ngModel)]=\"passwordData.confirmPassword\"></ion-input>\n        </ion-item>\n        <p class=\"err\" *ngIf=\"err?.confirmPassword\">{{err?.confirmPassword}}</p>\n    </div>\n\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" *ngIf=\"segment==2\">\n        <ion-fab-button (click)=\"uploadGalleryimg()\">\n            <ion-icon name=\"add\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n</ion-content>\n\n<ion-footer *ngIf=\"segment==3 || segment==4 || segment==5\">\n    <ion-button class=\"otp_btn\" (click)=\"editProfile()\">\n        {{\"profile_page.save_btn\" | translate}}\n    </ion-button>\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/profile/profile.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/pages/profile/profile.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");








var routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]
    }
];
var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/profile.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header .edit_btn {\n  --background: var(--ion-color-white);\n  --background-activated: var(--ion-color-white);\n  --color: var(--ion-color-green);\n  font-size: 10px;\n  position: absolute;\n  right: 16px;\n  z-index: 1111;\n  top: 165px;\n  --padding-start: 0;\n  --padding-end: 0;\n  height: 20px;\n  width: 60px;\n  --border-radius: 3px;\n  display: -webkit-box;\n  display: flex;\n  --box-shadow: none;\n  --ripple-color: none;\n  --color-activated: none;\n}\nion-header .edit_btn ion-icon {\n  margin-right: 5px;\n}\nion-header ion-toolbar {\n  height: 200px;\n  --background: var(--ion-color-green);\n  --background: transparent;\n  --ion-color-base: transparent !important;\n  background-size: 100% 100%;\n}\nion-header ion-toolbar .start_btn {\n  position: absolute;\n  top: 18px;\n}\nion-header ion-toolbar .start_btn ion-back-button {\n  --color: var(--ion-color-white);\n}\nion-header ion-toolbar .end_btn {\n  position: absolute;\n  top: 20px;\n  right: 0px;\n}\nion-header ion-toolbar ion-buttons ion-menu-button {\n  color: var(--ion-color-white) !important;\n}\nion-header ion-toolbar ion-buttons ion-button {\n  color: var(--ion-color-white) !important;\n}\nion-header ion-toolbar .image_div {\n  padding-top: 35px;\n  position: relative;\n}\nion-header ion-toolbar .image_div .camera_div {\n  height: 24px;\n  width: 24px;\n  background-color: var(--ion-color-green);\n  position: absolute;\n}\nion-header .name_div .name {\n  font-size: 22px;\n  font-family: \"Poppins-SemiBold\";\n  color: var(--ion-color-green);\n  margin-bottom: 0px;\n}\nion-header .name_div .location {\n  font-size: 16px;\n  font-family: \"Poppins-Regular\";\n  color: var(--ion-color-darkgray);\n  margin-top: 2px;\n}\nion-header .name_div .location ion-icon {\n  margin-right: 10px;\n}\nion-header .btn_div {\n  height: 60px;\n  background-color: var(--ion-color-sky);\n  display: -webkit-box;\n  display: flex;\n  overflow-y: auto;\n  padding-left: 16px;\n  margin-bottom: 20px;\n}\nion-header .btn_div ion-button {\n  height: 33px !important;\n  --border-radius: 2px;\n  font-size: 14px;\n  font-family: \"Poppins-Medium\";\n  margin-right: 30px;\n  align-self: center;\n  --box-shadow: none;\n  --ripple-color: none;\n  --color-activated: none;\n}\nion-header .btn_div .active {\n  --background: var(--ion-color-green);\n  --background-activated: var(--ion-color-green);\n  --color: var(--ion-color-white);\n}\nion-header .btn_div .segment_btn {\n  --background: var(--ion-color-white);\n  --background-activated: var(--ion-color-white);\n  --color: var(--ion-color-darkBlue);\n}\nion-header .btn_div::-webkit-scrollbar {\n  display: none;\n}\nion-header .profile-image {\n  height: 100px;\n  width: 100px;\n  border-radius: 50%;\n  border: 2px solid var(--ion-color-orange);\n  margin: -3.1rem auto 0px;\n  position: relative;\n  z-index: 111119;\n}\nion-header .profile-image img {\n  height: 100%;\n  width: 100%;\n  border-radius: 50%;\n  border: 3px solid var(--ion-color-white);\n  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.5);\n}\nion-header .profile-image .active {\n  height: 24px;\n  width: 24px;\n  background-color: var(--ion-color-green);\n  position: absolute;\n  right: 4px;\n  bottom: 0px;\n  border-radius: 50%;\n  border: 2px solid var(--ion-color-white);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.16);\n}\nion-header .profile-image .active ion-icon {\n  height: 12px;\n  width: 12px;\n}\nion-header .profile-image .shadow {\n  -webkit-filter: drop-shadow(0px 0px 2px #000000d6);\n}\nion-content .img img {\n  height: 150px;\n  width: 150px;\n  border-radius: 10px;\n  position: absolute;\n  left: 0;\n  right: 0;\n  text-align: center;\n}\nion-content .segment {\n  height: 60px;\n  padding-left: 16px;\n}\nion-content .segment ion-button {\n  height: 33px !important;\n  --border-radius: 2px;\n  font-size: 14px;\n  font-family: \"Poppins-Medium\";\n  margin-right: 30px;\n  align-self: center;\n  --box-shadow: none;\n  --ripple-color: none;\n  --color-activated: none;\n}\nion-content .segment .active {\n  --background: var(--ion-color-green);\n  --background-activated: var(--ion-color-green);\n  --color: var(--ion-color-white);\n}\nion-content .segment .segment_btn {\n  --background: var(--ion-color-white);\n  --background-activated: var(--ion-color-white);\n  --color: var(--ion-color-darkBlue);\n}\nion-content .review_div {\n  margin-bottom: 15px;\n}\nion-content .profile_div {\n  margin-bottom: 15px;\n}\nion-content .review_item ion-avatar {\n  align-self: baseline;\n}\nion-content .review_item ion-avatar img {\n  border: solid 3px var(--ion-color-white);\n  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.6);\n}\nion-content .review_item ion-label {\n  white-space: normal;\n}\nion-content .review_item ion-label .name {\n  font-size: 12px;\n  font-family: \"Poppins-Medium\";\n  color: var(--ion-color-darkBlue);\n  margin: 0;\n}\nion-content .review_item ion-label .ago {\n  font-size: 10px;\n  font-family: \"Poppins-Medium\";\n  color: var(--ion-color-darkgray);\n  margin-top: 3px;\n  margin-bottom: 3px;\n}\nion-content .review_item ion-label .detail {\n  font-size: 10px;\n  font-family: \"Poppins-Regular\";\n  color: var(--ion-color-darkgray);\n  margin: 0;\n  line-height: 15px;\n}\nion-content .review_item ion-label .first_icon {\n  color: var(--ion-color-green);\n}\nion-content .review_item ion-label .last_icon {\n  color: var(--ion-star-color);\n}\nion-content .photo_div {\n  margin: 0px 15px;\n}\nion-content .photo_div img {\n  border-radius: 5px;\n  margin-bottom: 6px;\n}\nion-content .profile_div .profile_item {\n  margin: 0 20px;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  border-bottom: dashed 1px var(--ion-border-color);\n}\nion-content .profile_div .profile_item .tittle {\n  font-size: 16px;\n  font-family: \"Poppins-Medium\";\n  color: var(--ion-color-green);\n}\nion-content .profile_div .profile_item .data {\n  font-size: 14px;\n  font-family: \"Poppins-Medium\";\n  color: var(--ion-color-darkBlue);\n}\nion-content .profile_div .save_btn {\n  --background: var(--ion-color-green);\n  margin-left: 16px;\n  margin-top: 16px;\n}\nion-content .setting_div {\n  margin-bottom: 10px;\n}\nion-content .setting_div .setting_item {\n  margin: 0 20px;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-end: 0px;\n  border-bottom: dashed 1px var(--ion-border-color);\n}\nion-content .setting_div .setting_item .tittle {\n  font-size: 14px;\n  font-family: \"Poppins-Medium\";\n  color: var(--ion-color-darkBlue);\n}\nion-content .setting_div .setting_item ion-toggle {\n  --background-checked: var(--ion-color-green);\n  --handle-background-checked: var(--ion-color-white);\n}\nion-content .setting_div .setting_item .address {\n  font-size: 12px;\n  font-family: \"Poppins-Medium\";\n  color: var(--ion-color-green);\n  width: 100%;\n}\nion-content .setting_div .setting_item .address .trans-btn {\n  font-size: 8px;\n  --color: var(--ion-color-green);\n  text-transform: capitalize;\n}\nion-content .setting_div .setting_item .change {\n  font-size: 14px;\n  font-family: \"Poppins-Medium\";\n  color: var(--ion-color-darkBlue);\n}\n.masonry-group {\n  -webkit-column-count: 2;\n     -moz-column-count: 2;\n          column-count: 2;\n  -webkit-column-fill: balance;\n     -moz-column-fill: balance;\n          column-fill: balance;\n}\n.masonry-item {\n  width: 100%;\n}\nion-fab-button {\n  --background: var(--ion-color-green);\n  --box-shadow: none;\n}\n.err {\n  padding-left: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9DOlxcVXNlcnNcXG9zaWFuXFxEZXNrdG9wXFxOQVRVVVQyLjAvc3JjXFxhcHBcXHBhZ2VzXFxwcm9maWxlXFxwcm9maWxlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLG9DQUFBO0VBQ0EsOENBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0FDQVI7QURDUTtFQUNJLGlCQUFBO0FDQ1o7QURFSTtFQUNJLGFBQUE7RUFDQSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0Esd0NBQUE7RUFDQSwwQkFBQTtBQ0FSO0FEQ1E7RUFDSSxrQkFBQTtFQUNBLFNBQUE7QUNDWjtBREFZO0VBQ0ksK0JBQUE7QUNFaEI7QURDUTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNDWjtBREVZO0VBQ0ksd0NBQUE7QUNBaEI7QURFWTtFQUNJLHdDQUFBO0FDQWhCO0FER1E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FDRFo7QURFWTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esd0NBQUE7RUFDQSxrQkFBQTtBQ0FoQjtBREtRO0VBQ0ksZUFBQTtFQUNBLCtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtBQ0haO0FES1E7RUFDSSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7QUNIWjtBRElZO0VBQ0ksa0JBQUE7QUNGaEI7QURNSTtFQUNJLFlBQUE7RUFDQSxzQ0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0pSO0FES1E7RUFDSSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtBQ0haO0FES1E7RUFDSSxvQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsK0JBQUE7QUNIWjtBREtRO0VBQ0ksb0NBQUE7RUFDQSw4Q0FBQTtFQUNBLGtDQUFBO0FDSFo7QURNSTtFQUNJLGFBQUE7QUNKUjtBRE1JO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNKUjtBREtRO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0VBQ0EsOENBQUE7QUNIWjtBREtRO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSx3Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSwrQ0FBQTtBQ0haO0FESVk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ0ZoQjtBREtRO0VBQ0ksa0RBQUE7QUNIWjtBRFVRO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtBQ1BaO0FEVUk7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUNSUjtBRFNRO0VBQ0ksdUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7QUNQWjtBRFNRO0VBQ0ksb0NBQUE7RUFDQSw4Q0FBQTtFQUNBLCtCQUFBO0FDUFo7QURTUTtFQUNJLG9DQUFBO0VBQ0EsOENBQUE7RUFDQSxrQ0FBQTtBQ1BaO0FEVUk7RUFDSSxtQkFBQTtBQ1JSO0FEVUk7RUFDSSxtQkFBQTtBQ1JSO0FEV1E7RUFDSSxvQkFBQTtBQ1RaO0FEVVk7RUFDSSx3Q0FBQTtFQUNBLDhDQUFBO0FDUmhCO0FEV1E7RUFDSSxtQkFBQTtBQ1RaO0FEVVk7RUFDSSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtFQUNBLFNBQUE7QUNSaEI7QURVWTtFQUNJLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDUmhCO0FEVVk7RUFDSSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtBQ1JoQjtBRFVZO0VBQ0ksNkJBQUE7QUNSaEI7QURVWTtFQUNJLDRCQUFBO0FDUmhCO0FEWUk7RUFDSSxnQkFBQTtBQ1ZSO0FEV1E7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FDVFo7QURhUTtFQUNJLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaURBQUE7QUNYWjtBRFlZO0VBQ0ksZUFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7QUNWaEI7QURZWTtFQUNJLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0FDVmhCO0FEYVE7RUFDSSxvQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNYWjtBRGNJO0VBQ0ksbUJBQUE7QUNaUjtBRGFRO0VBQ0ksY0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLGlEQUFBO0FDWFo7QURZWTtFQUNJLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0FDVmhCO0FEWVk7RUFDSSw0Q0FBQTtFQUNBLG1EQUFBO0FDVmhCO0FEWVk7RUFDSSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7QUNWaEI7QURXZ0I7RUFDSSxjQUFBO0VBQ0EsK0JBQUE7RUFDQSwwQkFBQTtBQ1RwQjtBRFlZO0VBQ0ksZUFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7QUNWaEI7QURnQkE7RUFDSSx1QkFBQTtLQUFBLG9CQUFBO1VBQUEsZUFBQTtFQUNBLDRCQUFBO0tBQUEseUJBQUE7VUFBQSxvQkFBQTtBQ2JKO0FEZ0JBO0VBQ0ksV0FBQTtBQ2JKO0FEZ0JBO0VBQ0ksb0NBQUE7RUFDQSxrQkFBQTtBQ2JKO0FEZ0JBO0VBQ0ksa0JBQUE7QUNiSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcclxuICAgIC5lZGl0X2J0biB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG4gICAgICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XHJcbiAgICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyZWVuKTtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAxNnB4O1xyXG4gICAgICAgIHotaW5kZXg6IDExMTE7XHJcbiAgICAgICAgdG9wOiAxNjVweDtcclxuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogMDtcclxuICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgLS1yaXBwbGUtY29sb3I6IG5vbmU7XHJcbiAgICAgICAgLS1jb2xvci1hY3RpdmF0ZWQ6IG5vbmU7XHJcbiAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpb24tdG9vbGJhciB7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1ncmVlbik7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAtLWlvbi1jb2xvci1iYXNlOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gICAgICAgIC5zdGFydF9idG4ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMThweDtcclxuICAgICAgICAgICAgaW9uLWJhY2stYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmVuZF9idG4ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMjBweDtcclxuICAgICAgICAgICAgcmlnaHQ6IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWJ1dHRvbnMge1xyXG4gICAgICAgICAgICBpb24tbWVudS1idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmltYWdlX2RpdiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAzNXB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIC5jYW1lcmFfZGl2IHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjRweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyZWVuKTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5uYW1lX2RpdiB7XHJcbiAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtU2VtaUJvbGRcIjtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1ncmVlbik7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxvY2F0aW9uIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zLVJlZ3VsYXJcIjtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrZ3JheSk7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmJ0bl9kaXYge1xyXG4gICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2t5KTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzNweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zLU1lZGl1bVwiO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICAtLXJpcHBsZS1jb2xvcjogbm9uZTtcclxuICAgICAgICAgICAgLS1jb2xvci1hY3RpdmF0ZWQ6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hY3RpdmUge1xyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1ncmVlbik7XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHZhcigtLWlvbi1jb2xvci1ncmVlbik7XHJcbiAgICAgICAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zZWdtZW50X2J0biB7XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuICAgICAgICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtCbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYnRuX2Rpdjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAucHJvZmlsZS1pbWFnZSB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1vcmFuZ2UpO1xyXG4gICAgICAgIG1hcmdpbjogLTMuMXJlbSBhdXRvIDBweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgei1pbmRleDogMTExMTE5O1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA2cHggMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjRweDtcclxuICAgICAgICAgICAgd2lkdGg6IDI0cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1ncmVlbik7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgcmlnaHQ6IDRweDtcclxuICAgICAgICAgICAgYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xyXG4gICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuc2hhZG93IHtcclxuICAgICAgICAgICAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KDBweCAwcHggMnB4ICMwMDAwMDBkNik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgICAuaW1nIHtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuc2VnbWVudCB7XHJcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcclxuICAgICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtTWVkaXVtXCI7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgICAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgIC0tcmlwcGxlLWNvbG9yOiBub25lO1xyXG4gICAgICAgICAgICAtLWNvbG9yLWFjdGl2YXRlZDogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWdyZWVuKTtcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdmFyKC0taW9uLWNvbG9yLWdyZWVuKTtcclxuICAgICAgICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNlZ21lbnRfYnRuIHtcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG4gICAgICAgICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya0JsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5yZXZpZXdfZGl2IHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgLnByb2ZpbGVfZGl2IHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgLnJldmlld19pdGVtIHtcclxuICAgICAgICBpb24tYXZhdGFyIHtcclxuICAgICAgICAgICAgYWxpZ24tc2VsZjogYmFzZWxpbmU7XHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIDNweCB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAubmFtZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zLU1lZGl1bVwiO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrQmx1ZSk7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmFnbyB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zLU1lZGl1bVwiO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrZ3JheSk7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRldGFpbCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zLVJlZ3VsYXJcIjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2dyYXkpO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmZpcnN0X2ljb24ge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1ncmVlbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmxhc3RfaWNvbiB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLXN0YXItY29sb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnBob3RvX2RpdiB7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggMTVweDtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAucHJvZmlsZV9kaXYge1xyXG4gICAgICAgIC5wcm9maWxlX2l0ZW0ge1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMjBweDtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogZGFzaGVkIDFweCB2YXIoLS1pb24tYm9yZGVyLWNvbG9yKTtcclxuICAgICAgICAgICAgLnRpdHRsZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zLU1lZGl1bVwiO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1ncmVlbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRhdGEge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya0JsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zYXZlX2J0biB7XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWdyZWVuKTtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNldHRpbmdfZGl2IHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIC5zZXR0aW5nX2l0ZW0ge1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMjBweDtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcclxuICAgICAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiBkYXNoZWQgMXB4IHZhcigtLWlvbi1ib3JkZXItY29sb3IpO1xyXG4gICAgICAgICAgICAudGl0dGxlIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtTWVkaXVtXCI7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtCbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpb24tdG9nZ2xlIHtcclxuICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiB2YXIoLS1pb24tY29sb3ItZ3JlZW4pO1xyXG4gICAgICAgICAgICAgICAgLS1oYW5kbGUtYmFja2dyb3VuZC1jaGVja2VkOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5hZGRyZXNzIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtTWVkaXVtXCI7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyZWVuKTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgLnRyYW5zLWJ0biB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyZWVuKTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY2hhbmdlIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtTWVkaXVtXCI7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtCbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLm1hc29ucnktZ3JvdXAge1xyXG4gICAgY29sdW1uLWNvdW50OiAyO1xyXG4gICAgY29sdW1uLWZpbGw6IGJhbGFuY2U7XHJcbn1cclxuXHJcbi5tYXNvbnJ5LWl0ZW0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmlvbi1mYWItYnV0dG9uIHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWdyZWVuKTtcclxuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLmVyciB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbn0iLCJpb24taGVhZGVyIC5lZGl0X2J0biB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyZWVuKTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxNnB4O1xuICB6LWluZGV4OiAxMTExO1xuICB0b3A6IDE2NXB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0tcGFkZGluZy1lbmQ6IDA7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDYwcHg7XG4gIC0tYm9yZGVyLXJhZGl1czogM3B4O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIC0tcmlwcGxlLWNvbG9yOiBub25lO1xuICAtLWNvbG9yLWFjdGl2YXRlZDogbm9uZTtcbn1cbmlvbi1oZWFkZXIgLmVkaXRfYnRuIGlvbi1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZ3JlZW4pO1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWlvbi1jb2xvci1iYXNlOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgLnN0YXJ0X2J0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxOHB4O1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciAuc3RhcnRfYnRuIGlvbi1iYWNrLWJ1dHRvbiB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIC5lbmRfYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwcHg7XG4gIHJpZ2h0OiAwcHg7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi1idXR0b25zIGlvbi1tZW51LWJ1dHRvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpICFpbXBvcnRhbnQ7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi1idXR0b25zIGlvbi1idXR0b24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKSAhaW1wb3J0YW50O1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciAuaW1hZ2VfZGl2IHtcbiAgcGFkZGluZy10b3A6IDM1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgLmltYWdlX2RpdiAuY2FtZXJhX2RpdiB7XG4gIGhlaWdodDogMjRweDtcbiAgd2lkdGg6IDI0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1ncmVlbik7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbmlvbi1oZWFkZXIgLm5hbWVfZGl2IC5uYW1lIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zLVNlbWlCb2xkXCI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZ3JlZW4pO1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5pb24taGVhZGVyIC5uYW1lX2RpdiAubG9jYXRpb24ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtUmVndWxhclwiO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtncmF5KTtcbiAgbWFyZ2luLXRvcDogMnB4O1xufVxuaW9uLWhlYWRlciAubmFtZV9kaXYgLmxvY2F0aW9uIGlvbi1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuaW9uLWhlYWRlciAuYnRuX2RpdiB7XG4gIGhlaWdodDogNjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNreSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbmlvbi1oZWFkZXIgLmJ0bl9kaXYgaW9uLWJ1dHRvbiB7XG4gIGhlaWdodDogMzNweCAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1yYWRpdXM6IDJweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zLU1lZGl1bVwiO1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICAtLXJpcHBsZS1jb2xvcjogbm9uZTtcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6IG5vbmU7XG59XG5pb24taGVhZGVyIC5idG5fZGl2IC5hY3RpdmUge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1ncmVlbik7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHZhcigtLWlvbi1jb2xvci1ncmVlbik7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG59XG5pb24taGVhZGVyIC5idG5fZGl2IC5zZWdtZW50X2J0biB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtCbHVlKTtcbn1cbmlvbi1oZWFkZXIgLmJ0bl9kaXY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbmlvbi1oZWFkZXIgLnByb2ZpbGUtaW1hZ2Uge1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLW9yYW5nZSk7XG4gIG1hcmdpbjogLTMuMXJlbSBhdXRvIDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxMTExMTk7XG59XG5pb24taGVhZGVyIC5wcm9maWxlLWltYWdlIGltZyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA2cHggMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cbmlvbi1oZWFkZXIgLnByb2ZpbGUtaW1hZ2UgLmFjdGl2ZSB7XG4gIGhlaWdodDogMjRweDtcbiAgd2lkdGg6IDI0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1ncmVlbik7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDRweDtcbiAgYm90dG9tOiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xufVxuaW9uLWhlYWRlciAucHJvZmlsZS1pbWFnZSAuYWN0aXZlIGlvbi1pY29uIHtcbiAgaGVpZ2h0OiAxMnB4O1xuICB3aWR0aDogMTJweDtcbn1cbmlvbi1oZWFkZXIgLnByb2ZpbGUtaW1hZ2UgLnNoYWRvdyB7XG4gIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMHB4IDJweCAjMDAwMDAwZDYpO1xufVxuXG5pb24tY29udGVudCAuaW1nIGltZyB7XG4gIGhlaWdodDogMTUwcHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgLnNlZ21lbnQge1xuICBoZWlnaHQ6IDYwcHg7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbn1cbmlvbi1jb250ZW50IC5zZWdtZW50IGlvbi1idXR0b24ge1xuICBoZWlnaHQ6IDMzcHggIWltcG9ydGFudDtcbiAgLS1ib3JkZXItcmFkaXVzOiAycHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIjtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgLS1yaXBwbGUtY29sb3I6IG5vbmU7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiBub25lO1xufVxuaW9uLWNvbnRlbnQgLnNlZ21lbnQgLmFjdGl2ZSB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWdyZWVuKTtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdmFyKC0taW9uLWNvbG9yLWdyZWVuKTtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbn1cbmlvbi1jb250ZW50IC5zZWdtZW50IC5zZWdtZW50X2J0biB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtCbHVlKTtcbn1cbmlvbi1jb250ZW50IC5yZXZpZXdfZGl2IHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbmlvbi1jb250ZW50IC5wcm9maWxlX2RpdiB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5pb24tY29udGVudCAucmV2aWV3X2l0ZW0gaW9uLWF2YXRhciB7XG4gIGFsaWduLXNlbGY6IGJhc2VsaW5lO1xufVxuaW9uLWNvbnRlbnQgLnJldmlld19pdGVtIGlvbi1hdmF0YXIgaW1nIHtcbiAgYm9yZGVyOiBzb2xpZCAzcHggdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC42KTtcbn1cbmlvbi1jb250ZW50IC5yZXZpZXdfaXRlbSBpb24tbGFiZWwge1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuaW9uLWNvbnRlbnQgLnJldmlld19pdGVtIGlvbi1sYWJlbCAubmFtZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrQmx1ZSk7XG4gIG1hcmdpbjogMDtcbn1cbmlvbi1jb250ZW50IC5yZXZpZXdfaXRlbSBpb24tbGFiZWwgLmFnbyB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrZ3JheSk7XG4gIG1hcmdpbi10b3A6IDNweDtcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xufVxuaW9uLWNvbnRlbnQgLnJldmlld19pdGVtIGlvbi1sYWJlbCAuZGV0YWlsIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zLVJlZ3VsYXJcIjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrZ3JheSk7XG4gIG1hcmdpbjogMDtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG59XG5pb24tY29udGVudCAucmV2aWV3X2l0ZW0gaW9uLWxhYmVsIC5maXJzdF9pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1ncmVlbik7XG59XG5pb24tY29udGVudCAucmV2aWV3X2l0ZW0gaW9uLWxhYmVsIC5sYXN0X2ljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLXN0YXItY29sb3IpO1xufVxuaW9uLWNvbnRlbnQgLnBob3RvX2RpdiB7XG4gIG1hcmdpbjogMHB4IDE1cHg7XG59XG5pb24tY29udGVudCAucGhvdG9fZGl2IGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xufVxuaW9uLWNvbnRlbnQgLnByb2ZpbGVfZGl2IC5wcm9maWxlX2l0ZW0ge1xuICBtYXJnaW46IDAgMjBweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgYm9yZGVyLWJvdHRvbTogZGFzaGVkIDFweCB2YXIoLS1pb24tYm9yZGVyLWNvbG9yKTtcbn1cbmlvbi1jb250ZW50IC5wcm9maWxlX2RpdiAucHJvZmlsZV9pdGVtIC50aXR0bGUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtTWVkaXVtXCI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZ3JlZW4pO1xufVxuaW9uLWNvbnRlbnQgLnByb2ZpbGVfZGl2IC5wcm9maWxlX2l0ZW0gLmRhdGEge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtTWVkaXVtXCI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya0JsdWUpO1xufVxuaW9uLWNvbnRlbnQgLnByb2ZpbGVfZGl2IC5zYXZlX2J0biB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWdyZWVuKTtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG5pb24tY29udGVudCAuc2V0dGluZ19kaXYge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuaW9uLWNvbnRlbnQgLnNldHRpbmdfZGl2IC5zZXR0aW5nX2l0ZW0ge1xuICBtYXJnaW46IDAgMjBweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICBib3JkZXItYm90dG9tOiBkYXNoZWQgMXB4IHZhcigtLWlvbi1ib3JkZXItY29sb3IpO1xufVxuaW9uLWNvbnRlbnQgLnNldHRpbmdfZGl2IC5zZXR0aW5nX2l0ZW0gLnRpdHRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrQmx1ZSk7XG59XG5pb24tY29udGVudCAuc2V0dGluZ19kaXYgLnNldHRpbmdfaXRlbSBpb24tdG9nZ2xlIHtcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1ncmVlbik7XG4gIC0taGFuZGxlLWJhY2tncm91bmQtY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbn1cbmlvbi1jb250ZW50IC5zZXR0aW5nX2RpdiAuc2V0dGluZ19pdGVtIC5hZGRyZXNzIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zLU1lZGl1bVwiO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyZWVuKTtcbiAgd2lkdGg6IDEwMCU7XG59XG5pb24tY29udGVudCAuc2V0dGluZ19kaXYgLnNldHRpbmdfaXRlbSAuYWRkcmVzcyAudHJhbnMtYnRuIHtcbiAgZm9udC1zaXplOiA4cHg7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1ncmVlbik7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuaW9uLWNvbnRlbnQgLnNldHRpbmdfZGl2IC5zZXR0aW5nX2l0ZW0gLmNoYW5nZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrQmx1ZSk7XG59XG5cbi5tYXNvbnJ5LWdyb3VwIHtcbiAgY29sdW1uLWNvdW50OiAyO1xuICBjb2x1bW4tZmlsbDogYmFsYW5jZTtcbn1cblxuLm1hc29ucnktaXRlbSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pb24tZmFiLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWdyZWVuKTtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xufVxuXG4uZXJyIHtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/profile/profile.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/profile/profile.page.ts ***!
  \***********************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_util_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../service/util.service */ "./src/app/service/util.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");









var ProfilePage = /** @class */ (function () {
    function ProfilePage(ntrl, api, actionSheetCtrl, camera, util, route, translate) {
        var _this = this;
        this.ntrl = ntrl;
        this.api = api;
        this.actionSheetCtrl = actionSheetCtrl;
        this.camera = camera;
        this.util = util;
        this.route = route;
        this.translate = translate;
        this.segment = 1;
        this.subsegment = 1;
        this.userDetail = {};
        this.err = {};
        this.data = {};
        this.userSetting = {};
        this.imgProfile = "http://placehold.it/96x96";
        this.changeAddressBtn = false;
        this.isNewProfile = false;
        this.changeImage = {};
        this.passwordData = {};
        this.language = localStorage.getItem('app_language') ? localStorage.getItem('app_language') : 'en';
        this.util.startLoad();
        this.api.getDataWithToken("viewReview").subscribe(function (res) {
            if (res.success) {
                _this.data = res.data;
                _this.util.dismissLoader();
                _this.data.review.forEach(function (element) {
                    element.created_at = moment__WEBPACK_IMPORTED_MODULE_6__(element.created_at).fromNow();
                });
                _this.userName = res.data.userDetail.name;
                _this.userLocation = res.data.userDetail.location;
                _this.userDetail = _this.data.userDetail;
                if (res.data.userDetail.cover_image == null) {
                    _this.coverImage = false;
                }
                else {
                    _this.coverImage = _this.userDetail.imagePath + _this.data.userDetail.cover_image;
                }
                _this.imgProfile = _this.userDetail.imagePath + _this.userDetail.image;
                _this.data.address = localStorage.getItem("address");
                if (_this.userDetail.enable_notification == 1) {
                    _this.userSetting.enable_notification = true;
                }
                else {
                    _this.userSetting.enable_notification = false;
                }
                if (_this.userDetail.enable_location == 1) {
                    _this.userSetting.enable_location = true;
                }
                else {
                    _this.userSetting.enable_location = false;
                }
                if (_this.userDetail.enable_call == 1) {
                    _this.userSetting.enable_call = true;
                }
                else {
                    _this.userSetting.enable_call = false;
                }
            }
        });
        this.route.params.subscribe(function (params) {
            _this.isfrom = params["id"];
            if (_this.isfrom == "setting") {
                _this.segment = 4;
            }
        });
    }
    ProfilePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        if (this.changeAddressBtn) {
            this.api.getDataWithToken("getAddress/" + localStorage.getItem("isaddress"))
                .subscribe(function (res) {
                if (res.success) {
                    _this.data.userAddress.soc_name = res.data.soc_name;
                    _this.data.userAddress.street = res.data.street;
                    _this.data.userAddress.city = res.data.city;
                    _this.data.userAddress.zipcode = res.data.zipcode;
                }
            });
        }
    };
    ProfilePage.prototype.ngOnInit = function () { };
    ProfilePage.prototype.back = function () {
        this.ntrl.back();
    };
    ProfilePage.prototype.editProfile = function () {
        var _this = this;
        if (this.segment == 3) {
            this.util.startLoad();
            this.api.postDataWithToken("editProfile", this.userDetail).subscribe(function (res) {
                if (res.success) {
                    _this.err = {};
                    _this.util.dismissLoader();
                    _this.translate.get('toasts').subscribe(function (val) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            this.util.presentToast(val.profile_set_success);
                            return [2 /*return*/];
                        });
                    }); });
                    _this.util.isUpdateProfile.next(true);
                    _this.api.getDataWithToken("viewReview").subscribe(function (res) {
                        if (res.success) {
                            _this.data = res.data;
                            _this.util.dismissLoader();
                            _this.data.review.forEach(function (element) {
                                element.created_at = moment__WEBPACK_IMPORTED_MODULE_6__(element.created_at).fromNow();
                            });
                            _this.userName = res.data.userDetail.name;
                            _this.userLocation = res.data.userDetail.location;
                            _this.userDetail = _this.data.userDetail;
                            if (res.data.userDetail.cover_image == null) {
                                _this.coverImage = false;
                            }
                            else {
                                _this.coverImage =
                                    _this.userDetail.imagePath +
                                        _this.data.userDetail.cover_image;
                            }
                            _this.imgProfile =
                                _this.userDetail.imagePath + _this.userDetail.image;
                            _this.data.address = localStorage.getItem("address");
                            if (_this.userDetail.enable_notification == 1) {
                                _this.userSetting.enable_notification = true;
                            }
                            else {
                                _this.userSetting.enable_notification = false;
                            }
                            if (_this.userDetail.enable_location == 1) {
                                _this.userSetting.enable_location = true;
                            }
                            else {
                                _this.userSetting.enable_location = false;
                            }
                            if (_this.userDetail.enable_call == 1) {
                                _this.userSetting.enable_call = true;
                            }
                            else {
                                _this.userSetting.enable_call = false;
                            }
                        }
                    });
                }
            }, function (err) {
                if (err.error.msg) {
                    _this.util.dismissLoader();
                    _this.util.presentToast(err.error.msg);
                }
                _this.err = err.error.errors;
                _this.util.dismissLoader();
            });
        }
        else if (this.segment == 5) {
            this.util.startLoad();
            this.api.postDataWithToken("changePassword", this.passwordData).subscribe(function (res) {
                if (res.success) {
                    _this.util.dismissLoader();
                    _this.passwordData.password = "";
                    _this.passwordData.confirmPassword = "";
                    _this.err = {};
                    _this.util.presentToast(res.msg);
                }
            }, function (err) {
                _this.util.dismissLoader();
                _this.err = err.error.errors;
            });
        }
        else {
            if (this.userSetting.enable_notification) {
                this.userSetting.enable_notification = 1;
            }
            else {
                this.userSetting.enable_notification = 0;
            }
            if (this.userSetting.enable_location) {
                this.userSetting.enable_location = 1;
            }
            else {
                this.userSetting.enable_location = 0;
            }
            if (this.userSetting.enable_call) {
                this.userSetting.enable_call = 1;
            }
            else {
                this.userSetting.enable_call = 0;
            }
            this.userSetting.address_id = localStorage.getItem("isaddress");
            this.util.startLoad();
            this.api
                .postDataWithToken("saveSetting", this.userSetting)
                .subscribe(function (res) {
                if (res.success) {
                    _this.util.dismissLoader();
                    _this.translate.get('toasts').subscribe(function (val) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            this.util.presentToast(val.setting_set_success);
                            return [2 /*return*/];
                        });
                    }); });
                }
            });
        }
    };
    ProfilePage.prototype.changeAddress = function () {
        this.changeAddressBtn = true;
        this.ntrl.navigateForward("/select-address");
    };
    ProfilePage.prototype.chageProfileOption = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetCtrl.create({
                            header: "Select method",
                            buttons: [
                                {
                                    text: "Camera",
                                    role: "destructive",
                                    icon: "camera",
                                    handler: function () {
                                        _this.getCamera();
                                    },
                                },
                                {
                                    text: "Gallary",
                                    icon: "photos",
                                    handler: function () {
                                        _this.getGallery();
                                    },
                                },
                                {
                                    text: "Cancel",
                                    icon: "close",
                                    handler: function () { },
                                },
                            ],
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage.prototype.getGallery = function () {
        var _this = this;
        var cameraOptions = {
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            correctOrientation: true,
        };
        this.camera.getPicture(cameraOptions).then(function (fileUri) {
            _this.imgProfile = "data:image/jpg;base64," + fileUri;
            _this.imageUri = fileUri;
            _this.isNewProfile = true;
            _this.changeImage.image = _this.imageUri;
            _this.changeImage.image_type = "profile";
            _this.api
                .postDataWithToken("changeImage", _this.changeImage)
                .subscribe(function (res) {
                if (res.success) {
                }
            });
        }, function (err) { });
    };
    ProfilePage.prototype.getCamera = function () {
        var _this = this;
        var cameraOptions = {
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            correctOrientation: true,
        };
        this.camera.getPicture(cameraOptions).then(function (fileUri) {
            _this.imgProfile = "data:image/jpg;base64," + fileUri;
            _this.imageUri = fileUri;
            _this.isNewProfile = true;
        }, function (err) { });
    };
    ProfilePage.prototype.editCoverimg = function () {
        var _this = this;
        var cameraOptions = {
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            correctOrientation: true,
        };
        this.camera.getPicture(cameraOptions).then(function (fileUri) {
            _this.coverImage = "data:image/jpg;base64," + fileUri;
            _this.imageUri = fileUri;
            _this.changeImage.image = _this.imageUri;
            _this.changeImage.image_type = "cover";
            _this.api
                .postDataWithToken("changeImage", _this.changeImage)
                .subscribe(function (res) {
                if (res.success) {
                }
            });
        }, function (err) { });
    };
    ProfilePage.prototype.uploadGalleryimg = function () {
        var _this = this;
        var cameraOptions = {
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            correctOrientation: true,
        };
        this.camera.getPicture(cameraOptions).then(function (fileUri) {
            _this.imageUri = fileUri;
            _this.changeImage.image = _this.imageUri;
            _this.api
                .postDataWithToken("addPhoto", _this.changeImage)
                .subscribe(function (res) {
                if (res.success) {
                    _this.api.getDataWithToken("viewReview").subscribe(function (res) {
                        if (res.success) {
                            _this.data = res.data;
                            _this.data.review.forEach(function (element) {
                                element.created_at = moment__WEBPACK_IMPORTED_MODULE_6__(element.created_at).fromNow();
                            });
                            _this.userDetail = _this.data.userDetail;
                            _this.coverImage =
                                _this.userDetail.imagePath +
                                    _this.data.userDetail.cover_image;
                            _this.imgProfile =
                                _this.userDetail.imagePath + _this.userDetail.image;
                            _this.data.address = localStorage.getItem("address");
                            if (_this.userDetail.enable_notification == 1) {
                                _this.userSetting.enable_notification = true;
                            }
                            else {
                                _this.userSetting.enable_notification = false;
                            }
                            if (_this.userDetail.enable_location == 1) {
                                _this.userSetting.enable_location = true;
                            }
                            else {
                                _this.userSetting.enable_location = false;
                            }
                            if (_this.userDetail.enable_call == 1) {
                                _this.userSetting.enable_call = true;
                            }
                            else {
                                _this.userSetting.enable_call = false;
                            }
                        }
                    });
                }
            });
        }, function (err) { });
    };
    ProfilePage.prototype.onLanguageChange = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                localStorage.setItem('app_language', this.language);
                document.documentElement.dir = this.language == 'ar' ? 'rtl' : 'ltr';
                this.translate.setDefaultLang(this.language);
                return [2 /*return*/];
            });
        });
    };
    ProfilePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
        { type: _service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"] },
        { type: _service_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] }
    ]; };
    ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: "app-profile",
            template: __webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile/profile.page.html"),
            styles: [__webpack_require__(/*! ./profile.page.scss */ "./src/app/pages/profile/profile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
            _service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"],
            _service_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]])
    ], ProfilePage);
    return ProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-profile-profile-module-es5.js.map