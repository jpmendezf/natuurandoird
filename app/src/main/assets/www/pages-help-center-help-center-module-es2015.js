(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-help-center-help-center-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/help-center/help-center.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/help-center/help-center.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n    <ion-toolbar mode=\"md\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"home\" icon=\"ios-arrow-back\" text=\"\"></ion-back-button>\n        </ion-buttons>\n        <ion-title class=\"ion-text-uppercase\">Help Center</ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"main_div ion-margin-horizontal \">\n        <div class=\"chat_div\">\n            <div id=\"talkbubble\">\n                <p class=\"msg\">\n                    My order didn't delivered Please help me...\n                </p>\n            </div>\n            <img src=\"assets/image/help-user.png\">\n        </div>\n        <div class=\"chat_div\">\n            <img src=\"assets/image/chat-img.png\">\n            <div id=\"talk\">\n                <p class=\"msg\">\n                    Ok Sir, I will check your order detail please wait\n                </p>\n            </div>\n        </div>\n    </div>\n</ion-content>\n\n<ion-footer>\n    <ion-item lines=\"none\">\n        <ion-input placeholder=\"Type your Message...\"> </ion-input>\n        <ion-button class=\"send\" (click)=\"profile()\">\n            <ion-icon src=\"assets/icon-image/send.svg\"></ion-icon>\n        </ion-button>\n    </ion-item>\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/help-center/help-center.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/help-center/help-center.module.ts ***!
  \*********************************************************/
/*! exports provided: HelpCenterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpCenterPageModule", function() { return HelpCenterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _help_center_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./help-center.page */ "./src/app/pages/help-center/help-center.page.ts");







const routes = [
    {
        path: '',
        component: _help_center_page__WEBPACK_IMPORTED_MODULE_6__["HelpCenterPage"]
    }
];
let HelpCenterPageModule = class HelpCenterPageModule {
};
HelpCenterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_help_center_page__WEBPACK_IMPORTED_MODULE_6__["HelpCenterPage"]]
    })
], HelpCenterPageModule);



/***/ }),

/***/ "./src/app/pages/help-center/help-center.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/help-center/help-center.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content .main_div {\n  text-align: center;\n  padding-top: 30px;\n}\nion-content .main_div .chat_div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  margin-bottom: 30px;\n}\nion-content .main_div .chat_div #talkbubble {\n  width: 74%;\n  height: 80px;\n  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.16);\n  background: var(--ion-color-sky);\n  position: relative;\n  border-radius: 10px;\n  text-align: left;\n  padding: 0px 5px 0px 26px;\n}\nion-content .main_div .chat_div #talkbubble .msg {\n  font-size: 16px;\n  color: var(--ion-color-black);\n  font-family: \"Poppins-Regular\";\n}\nion-content .main_div .chat_div #talkbubble:before {\n  content: \"\";\n  position: absolute;\n  left: 100%;\n  top: 35px;\n  width: 0;\n  height: 0;\n  border-left: 22px solid var(--ion-color-sky);\n  border-bottom: 18px solid transparent;\n}\nion-content .main_div .chat_div #talk {\n  width: 74%;\n  height: 80px;\n  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.16);\n  background: var(--ion-color-sky);\n  position: relative;\n  border-radius: 10px;\n  text-align: left;\n  padding: 0px 26px 0px 15px;\n}\nion-content .main_div .chat_div #talk .msg {\n  font-size: 16px;\n  color: var(--ion-color-black);\n  font-family: \"Poppins-Regular\";\n}\nion-content .main_div .chat_div #talk:before {\n  content: \"\";\n  position: absolute;\n  right: 100%;\n  top: 35px;\n  width: 0;\n  height: 0;\n  border-right: 26px solid var(--ion-color-sky);\n  border-bottom: 13px solid transparent;\n}\nion-content .main_div .chat_div img {\n  align-self: center;\n  height: 45px;\n  width: 45px;\n  border-radius: 50%;\n}\nion-footer ion-item {\n  --inner-padding-end: 0px;\n}\nion-footer ion-item ion-input {\n  height: 50px;\n  font-size: 14px;\n  font-family: \"WorkSans_Regular\";\n  color: var(--ion-color-darkgray);\n  --placeholder-opacity:1;\n}\nion-footer ion-item .send {\n  --background: var(--ion-color-green);\n  height: 50px;\n  width: 70px;\n  margin: 0;\n  --border-radius: 0px;\n  --background-activated:var(--ion-color-green);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaGVscC1jZW50ZXIvQzpcXFVzZXJzXFxvc2lhblxcRGVza3RvcFxcTkFUVVVUMi4wL3NyY1xcYXBwXFxwYWdlc1xcaGVscC1jZW50ZXJcXGhlbHAtY2VudGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvaGVscC1jZW50ZXIvaGVscC1jZW50ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQ0FSO0FEQ1E7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EsbUJBQUE7QUNDWjtBREFZO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSwrQ0FBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFHQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0UseUJBQUE7QUNFbEI7QUREZ0I7RUFDUSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtBQ0d4QjtBREFjO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLDRDQUFBO0VBQ0EscUNBQUE7QUNFaEI7QURBYztFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsK0NBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBR0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FDRWhCO0FERGdCO0VBQ1EsZUFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7QUNHeEI7QURBYztFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSw2Q0FBQTtFQUNBLHFDQUFBO0FDRWhCO0FEQ2M7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNDaEI7QURRSTtFQUNJLHdCQUFBO0FDTFI7QURNUTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLHVCQUFBO0FDSlo7QURNUTtFQUNJLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQyxTQUFBO0VBQ0Msb0JBQUE7RUFDQSw2Q0FBQTtBQ0pkIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaGVscC1jZW50ZXIvaGVscC1jZW50ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICAubWFpbl9kaXZ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgICAgIC5jaGF0X2RpdntcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgICAgICAgICAjdGFsa2J1YmJsZSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNzQlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDFweCAycHggMHB4IHJnYmEoMCwwLDAsMC4xNik7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2t5KTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggNXB4IDBweCAyNnB4O1xyXG4gICAgICAgICAgICAgICAgLm1zZ3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWJsYWNrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zLVJlZ3VsYXInO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAjdGFsa2J1YmJsZTpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAyMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1za3kpO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMThweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgI3RhbGt7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNzQlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDFweCAycHggMHB4IHJnYmEoMCwwLDAsMC4xNik7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2t5KTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDI2cHggMHB4IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAubXNne1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItYmxhY2spO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1BvcHBpbnMtUmVndWxhcic7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICN0YWxrOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMjZweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc2t5KTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDEzcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiBcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQ1cHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICB9XHJcbiAgIFxyXG59XHJcblxyXG5pb24tZm9vdGVye1xyXG4gICAgaW9uLWl0ZW17XHJcbiAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xyXG4gICAgICAgIGlvbi1pbnB1dHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnV29ya1NhbnNfUmVndWxhcic7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2dyYXkpO1xyXG4gICAgICAgICAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6MTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNlbmR7XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWdyZWVuKTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogNzBweDtcclxuICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgICAgICAgICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOnZhcigtLWlvbi1jb2xvci1ncmVlbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbn0iLCJpb24tY29udGVudCAubWFpbl9kaXYge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xufVxuaW9uLWNvbnRlbnQgLm1haW5fZGl2IC5jaGF0X2RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbmlvbi1jb250ZW50IC5tYWluX2RpdiAuY2hhdF9kaXYgI3RhbGtidWJibGUge1xuICB3aWR0aDogNzQlO1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAxcHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2t5KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogMHB4IDVweCAwcHggMjZweDtcbn1cbmlvbi1jb250ZW50IC5tYWluX2RpdiAuY2hhdF9kaXYgI3RhbGtidWJibGUgLm1zZyB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1ibGFjayk7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtUmVndWxhclwiO1xufVxuaW9uLWNvbnRlbnQgLm1haW5fZGl2IC5jaGF0X2RpdiAjdGFsa2J1YmJsZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDEwMCU7XG4gIHRvcDogMzVweDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLWxlZnQ6IDIycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXNreSk7XG4gIGJvcmRlci1ib3R0b206IDE4cHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG5pb24tY29udGVudCAubWFpbl9kaXYgLmNoYXRfZGl2ICN0YWxrIHtcbiAgd2lkdGg6IDc0JTtcbiAgaGVpZ2h0OiA4MHB4O1xuICBib3gtc2hhZG93OiAwcHggMXB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNreSk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDBweCAyNnB4IDBweCAxNXB4O1xufVxuaW9uLWNvbnRlbnQgLm1haW5fZGl2IC5jaGF0X2RpdiAjdGFsayAubXNnIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWJsYWNrKTtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1SZWd1bGFyXCI7XG59XG5pb24tY29udGVudCAubWFpbl9kaXYgLmNoYXRfZGl2ICN0YWxrOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwMCU7XG4gIHRvcDogMzVweDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLXJpZ2h0OiAyNnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1za3kpO1xuICBib3JkZXItYm90dG9tOiAxM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuaW9uLWNvbnRlbnQgLm1haW5fZGl2IC5jaGF0X2RpdiBpbWcge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGhlaWdodDogNDVweDtcbiAgd2lkdGg6IDQ1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuaW9uLWZvb3RlciBpb24taXRlbSB7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbn1cbmlvbi1mb290ZXIgaW9uLWl0ZW0gaW9uLWlucHV0IHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIldvcmtTYW5zX1JlZ3VsYXJcIjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrZ3JheSk7XG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eToxO1xufVxuaW9uLWZvb3RlciBpb24taXRlbSAuc2VuZCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWdyZWVuKTtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNzBweDtcbiAgbWFyZ2luOiAwO1xuICAtLWJvcmRlci1yYWRpdXM6IDBweDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDp2YXIoLS1pb24tY29sb3ItZ3JlZW4pO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/help-center/help-center.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/help-center/help-center.page.ts ***!
  \*******************************************************/
/*! exports provided: HelpCenterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpCenterPage", function() { return HelpCenterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let HelpCenterPage = class HelpCenterPage {
    constructor(ntrl) {
        this.ntrl = ntrl;
    }
    ngOnInit() {
    }
    back() {
        this.ntrl.back();
    }
    profile() {
        this.ntrl.navigateForward(['profile']);
    }
};
HelpCenterPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
HelpCenterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-help-center',
        template: __webpack_require__(/*! raw-loader!./help-center.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/help-center/help-center.page.html"),
        styles: [__webpack_require__(/*! ./help-center.page.scss */ "./src/app/pages/help-center/help-center.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], HelpCenterPage);



/***/ })

}]);
//# sourceMappingURL=pages-help-center-help-center-module-es2015.js.map