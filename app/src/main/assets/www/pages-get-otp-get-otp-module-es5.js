(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-get-otp-get-otp-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/get-otp/get-otp.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/get-otp/get-otp.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n    <div class=\"ion-text-center  logo_div ion-margin-horizontal\">\n        <div>\n            <ion-button class=\"ion-float-left backBtn\" fill=\"clear\" (click)=\"back()\">\n                <ion-icon name=\"ios-arrow-back\"></ion-icon>\n            </ion-button>\n        </div>\n\n        <img src=\"assets/image/logo.png\" />\n\n        <h3 class=\"logo_text\">{{\"app_name\" | translate}}</h3>\n        <p class=\"ion-padding-horizontal msg\">{{\"otp_page.enter_otp_text\" | translate}}</p>\n        <div class=\"otp-input-div\">\n            <ion-input clearOnEdit=\"true\" autofocus=\"true\" type=\"tel\" name=\"a\" [(ngModel)]=\"opt.a\" #a\n                [ngClass]=\"{'otp-fill': opt.a?.length > 0 }\" (keyup)=\"moveFocus($event,b,'',1)\" maxlength=\"1\">\n            </ion-input>\n            <ion-input clearOnEdit=\"true\" type=\"tel\" name=\"b\" [(ngModel)]=\"opt.b\" #b\n                [ngClass]=\"{'otp-fill': opt.b?.length > 0 }\" (keyup)=\"moveFocus($event,c,a,2)\" maxlength=\"1\">\n            </ion-input>\n            <ion-input clearOnEdit=\"true\" type=\"tel\" name=\"c\" [(ngModel)]=\"opt.c\" #c\n                [ngClass]=\"{'otp-fill': opt.c?.length > 0 }\" (keyup)=\"moveFocus($event,d,b,3)\" maxlength=\"1\">\n            </ion-input>\n            <ion-input clearOnEdit=\"true\" type=\"tel\" name=\"d\" [(ngModel)]=\"opt.d\" #d\n                [ngClass]=\"{'otp-fill': opt.d?.length > 0 }\" (keyup)=\"moveFocus($event,e,c,4)\" maxlength=\"1\">\n            </ion-input>\n            <ion-input clearOnEdit=\"true\" type=\"tel\" name=\"d\" [(ngModel)]=\"opt.e\" #e\n                [ngClass]=\"{'otp-fill': opt.e?.length > 0 }\" (keyup)=\"moveFocus($event,f,d,5)\" maxlength=\"1\">\n            </ion-input>\n            <ion-input clearOnEdit=\"true\" type=\"tel\" name=\"e\" [(ngModel)]=\"opt.f\" #f\n                [ngClass]=\"{'otp-fill': opt.f?.length > 0 }\" (keyup)=\"moveFocus($event,'',e,6)\" maxlength=\"1\">\n            </ion-input>\n        </div>\n        <p class=\"err\" *ngIf=\"err?.otp\">{{err?.otp}}*</p>\n        <ion-button class=\"resend-btn ion-text-capitalize trans-btn\" (click)=\"resendOtp()\">\n            {{\"otp_page.resend_btn\" | translate}}</ion-button>\n\n        <ion-button (click)=\"goHome()\" class=\"mainBtn\" Expand=\"block\" shape=\"round\">\n            {{\"otp_page.confirm_btn\" | translate}}\n        </ion-button>\n    </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/get-otp/get-otp.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/get-otp/get-otp.module.ts ***!
  \*************************************************/
/*! exports provided: GetOtpPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetOtpPageModule", function() { return GetOtpPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _get_otp_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./get-otp.page */ "./src/app/pages/get-otp/get-otp.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");








var routes = [
    {
        path: '',
        component: _get_otp_page__WEBPACK_IMPORTED_MODULE_6__["GetOtpPage"]
    }
];
var GetOtpPageModule = /** @class */ (function () {
    function GetOtpPageModule() {
    }
    GetOtpPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_get_otp_page__WEBPACK_IMPORTED_MODULE_6__["GetOtpPage"]]
        })
    ], GetOtpPageModule);
    return GetOtpPageModule;
}());



/***/ }),

/***/ "./src/app/pages/get-otp/get-otp.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/get-otp/get-otp.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content .logo_div {\n  margin-top: 25px;\n  position: relative;\n  height: 290px;\n}\nion-content .logo_div .logo_text {\n  font-size: 40px;\n  font-family: \"PlayfairDisplay_Bold\";\n  color: var(--ion-color-green);\n  margin-top: 10px;\n}\nion-content .logo_div .msg {\n  font-family: \"Poppins-Regular\";\n  font-size: 14px;\n  color: var(--ion-color-darkgray);\n}\nion-content .logo_div .backBtn {\n  --padding-start: 0;\n  --padding-end: 0;\n  width: auto;\n}\nion-content .logo_div .backBtn ion-icon {\n  color: var(--ion-color-black) !important;\n  font-size: 24px;\n}\nion-content .logo_div .otp-input-div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  margin: 56px 16px 0px;\n  box-shadow: 0px 0px 2px 2px #70707024;\n  border-radius: 5px;\n  padding: 19px;\n}\nion-content .logo_div .otp-input-div ion-input {\n  width: 44px;\n  height: 44px;\n  margin-right: 24px;\n  text-align: center;\n  --padding-start: 0px;\n  font-size: 19px;\n  color: var(--ion-color-darkBlue);\n  border-bottom: 1px solid;\n  font-family: \"Poppins-Medium\";\n  border-bottom: 2px solid #CFCFCF;\n}\nion-content .logo_div .otp-input-div ion-input:last-child {\n  margin-right: 0px;\n}\nion-content .logo_div .otp-input-div .otp-fill {\n  border-bottom: 2px solid var(--ion-color-green);\n}\nion-content .logo_div .resend-btn {\n  font-size: 16px;\n  font-family: \"Poppins-Regular\";\n  --color: var(--ion-color-darkBlue);\n  width: auto;\n  margin: 0;\n  margin-top: 5px;\n  float: right;\n  margin-right: 16px;\n}\nion-content .mainBtn {\n  margin: 11px 5px 0px;\n  height: 50px;\n  --box-shadow: none;\n  margin-top: 7vh;\n  --background: var(--ion-color-green);\n  font-family: \"Poppins-Medium\";\n  font-size: 18px;\n  float: unset;\n  margin-top: 58px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ2V0LW90cC9DOlxcVXNlcnNcXG9zaWFuXFxEZXNrdG9wXFxOQVRVVVQyLjAvc3JjXFxhcHBcXHBhZ2VzXFxnZXQtb3RwXFxnZXQtb3RwLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZ2V0LW90cC9nZXQtb3RwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDQUo7QURFSTtFQUNFLGVBQUE7RUFDQSxtQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUNBTjtBREdJO0VBQ0UsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7QUNETjtBRElJO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNGTjtBRElNO0VBQ0Usd0NBQUE7RUFDQSxlQUFBO0FDRlI7QURNSTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxxQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ0pOO0FETU07RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtBQ0pSO0FETVE7RUFDRSxpQkFBQTtBQ0pWO0FEUU07RUFDRSwrQ0FBQTtBQ05SO0FEVUk7RUFDRSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQ0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ1JOO0FEWUU7RUFDRSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ1ZKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZ2V0LW90cC9nZXQtb3RwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAubG9nb19kaXYge1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMjkwcHg7XHJcblxyXG4gICAgLmxvZ29fdGV4dCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgZm9udC1mYW1pbHk6ICdQbGF5ZmFpckRpc3BsYXlfQm9sZCc7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZ3JlZW4pO1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5tc2cge1xyXG4gICAgICBmb250LWZhbWlseTogJ1BvcHBpbnMtUmVndWxhcic7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrZ3JheSk7XHJcbiAgICB9XHJcblxyXG4gICAgLmJhY2tCdG4ge1xyXG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDA7XHJcbiAgICAgIHdpZHRoOiBhdXRvO1xyXG5cclxuICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItYmxhY2spICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm90cC1pbnB1dC1kaXYge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgbWFyZ2luOiA1NnB4IDE2cHggMHB4O1xyXG4gICAgICBib3gtc2hhZG93OiAwcHggMHB4IDJweCAycHggIzcwNzA3MDI0O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIHBhZGRpbmc6IDE5cHg7XHJcblxyXG4gICAgICBpb24taW5wdXQge1xyXG4gICAgICAgIHdpZHRoOiA0NHB4O1xyXG4gICAgICAgIGhlaWdodDogNDRweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDI0cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtCbHVlKTtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zLU1lZGl1bSc7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNDRkNGQ0Y7XHJcblxyXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5vdHAtZmlsbCB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1ncmVlbik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucmVzZW5kLWJ0biB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zLVJlZ3VsYXInO1xyXG4gICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya0JsdWUpO1xyXG4gICAgICB3aWR0aDogYXV0bztcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm1haW5CdG4ge1xyXG4gICAgbWFyZ2luOiAxMXB4IDVweCAwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBtYXJnaW4tdG9wOiA3dmg7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1ncmVlbik7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMtTWVkaXVtJztcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZsb2F0OiB1bnNldDtcclxuICAgIG1hcmdpbi10b3A6IDU4cHg7XHJcbiAgfVxyXG59IiwiaW9uLWNvbnRlbnQgLmxvZ29fZGl2IHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDI5MHB4O1xufVxuaW9uLWNvbnRlbnQgLmxvZ29fZGl2IC5sb2dvX3RleHQge1xuICBmb250LXNpemU6IDQwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlBsYXlmYWlyRGlzcGxheV9Cb2xkXCI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZ3JlZW4pO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuaW9uLWNvbnRlbnQgLmxvZ29fZGl2IC5tc2cge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zLVJlZ3VsYXJcIjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtncmF5KTtcbn1cbmlvbi1jb250ZW50IC5sb2dvX2RpdiAuYmFja0J0biB7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1wYWRkaW5nLWVuZDogMDtcbiAgd2lkdGg6IGF1dG87XG59XG5pb24tY29udGVudCAubG9nb19kaXYgLmJhY2tCdG4gaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWJsYWNrKSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDI0cHg7XG59XG5pb24tY29udGVudCAubG9nb19kaXYgLm90cC1pbnB1dC1kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiA1NnB4IDE2cHggMHB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDJweCAycHggIzcwNzA3MDI0O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDE5cHg7XG59XG5pb24tY29udGVudCAubG9nb19kaXYgLm90cC1pbnB1dC1kaXYgaW9uLWlucHV0IHtcbiAgd2lkdGg6IDQ0cHg7XG4gIGhlaWdodDogNDRweDtcbiAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICBmb250LXNpemU6IDE5cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya0JsdWUpO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtTWVkaXVtXCI7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjQ0ZDRkNGO1xufVxuaW9uLWNvbnRlbnQgLmxvZ29fZGl2IC5vdHAtaW5wdXQtZGl2IGlvbi1pbnB1dDpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG59XG5pb24tY29udGVudCAubG9nb19kaXYgLm90cC1pbnB1dC1kaXYgLm90cC1maWxsIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1ncmVlbik7XG59XG5pb24tY29udGVudCAubG9nb19kaXYgLnJlc2VuZC1idG4ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtUmVndWxhclwiO1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya0JsdWUpO1xuICB3aWR0aDogYXV0bztcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xufVxuaW9uLWNvbnRlbnQgLm1haW5CdG4ge1xuICBtYXJnaW46IDExcHggNXB4IDBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIG1hcmdpbi10b3A6IDd2aDtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZ3JlZW4pO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zLU1lZGl1bVwiO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZsb2F0OiB1bnNldDtcbiAgbWFyZ2luLXRvcDogNThweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/get-otp/get-otp.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/get-otp/get-otp.page.ts ***!
  \***********************************************/
/*! exports provided: GetOtpPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetOtpPage", function() { return GetOtpPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_util_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../service/util.service */ "./src/app/service/util.service.ts");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var GetOtpPage = /** @class */ (function () {
    function GetOtpPage(menu, nav, api, util) {
        var _this = this;
        this.menu = menu;
        this.nav = nav;
        this.api = api;
        this.util = util;
        this.opt = {};
        this.err = {};
        this.data = {
            phone: this.api.verifynumber,
            id: this.api.verifyId
        };
        this.clearData = function (clear) {
            if (clear == "1")
                _this.opt.a = "";
            else if (clear == "2")
                _this.opt.b = "";
            else if (clear == "3")
                _this.opt.c = "";
            else if (clear == "4")
                _this.opt.d = "";
            else if (clear == "5")
                _this.opt.e = "";
            else
                _this.opt.f = "";
        };
        this.menu.enable(false);
    }
    GetOtpPage.prototype.ngOnInit = function () { };
    GetOtpPage.prototype.moveFocus = function (event, nextElement, previousElement, clear) {
        if (event.keyCode == 8 && previousElement) {
            previousElement.setFocus();
            this.clearData(clear - 1);
        }
        else if (event.keyCode >= 48 && event.keyCode <= 57) {
            if (nextElement) {
                nextElement.setFocus();
            }
        }
        else {
            event.path[0].value = "";
        }
    };
    GetOtpPage.prototype.back = function () {
        this.nav.navigateBack("verify");
    };
    GetOtpPage.prototype.goHome = function () {
        var _this = this;
        this.data.otp =
            this.opt.a +
                this.opt.b +
                this.opt.c +
                this.opt.d +
                this.opt.e +
                this.opt.f;
        this.util.startLoad();
        this.api.postData("checkOtp", this.data).subscribe(function (res) {
            if (res.success) {
                _this.util.dismissLoader();
                localStorage.setItem("token", res.data.token);
                _this.api.userToken = res.data.token;
                if (res.data.address_id) {
                    localStorage.setItem("isaddress", res.data.address_id);
                }
                else {
                    localStorage.setItem("isaddress", "false");
                }
                _this.util.isUpdateProfile.next(true);
                _this.nav.navigateRoot("slide");
            }
        }, function (err) {
            if (err.error.msg) {
                _this.util.presentToast(err.error.msg);
            }
            _this.err = err.error.errors;
            _this.util.dismissLoader();
        });
    };
    GetOtpPage.prototype.resendOtp = function () {
        var _this = this;
        this.data.code = this.api.verifynuberCode;
        this.util.startLoad();
        this.api.postData("resendOTP", this.data).subscribe(function (res) {
            if (res.success) {
                _this.util.dismissLoader();
                _this.util.presentToast(res.data);
            }
        }, function (err) {
            _this.err = err.error.errors;
            _this.util.dismissLoader();
        });
    };
    GetOtpPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: _service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
        { type: _service_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"] }
    ]; };
    GetOtpPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-get-otp",
            template: __webpack_require__(/*! raw-loader!./get-otp.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/get-otp/get-otp.page.html"),
            styles: [__webpack_require__(/*! ./get-otp.page.scss */ "./src/app/pages/get-otp/get-otp.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            _service_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"]])
    ], GetOtpPage);
    return GetOtpPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-get-otp-get-otp-module-es5.js.map