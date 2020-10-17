(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-select-address-select-address-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/select-address/select-address.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/select-address/select-address.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n    <ion-toolbar mode=\"md\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"home\" icon=\"ios-arrow-back\" mode=\"md\"></ion-back-button>\n        </ion-buttons>\n        <ion-title> {{'select_address_page.title' | translate}} </ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-button (click)=\"addAddress()\">\n                <ion-icon name=\"add\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <div no-data *ngIf=\"addressList?.length == 0\">\n        <img src=\"../../../assets/image/no-data-icon-10.jpg\" alt=\"no data\">\n    </div>\n    <ng-container *ngIf=\"addressList && addressList.length > 0\">\n\n        <ion-item-sliding *ngFor=\"let address of addressList\">\n            <ion-item-options side=\"end\">\n                <ion-item-option (click)=\"editAddress(address)\" class=\"editBtn\">{{'select_address_page.edit' | translate}}</ion-item-option>\n                <ion-item-option color=\"danger\" (click)=\"deleteAddress(address)\">{{'select_address_page.delete' | translate}}</ion-item-option>\n            </ion-item-options>\n\n            <ion-item (click)=\"setAddress(address)\">\n                <ion-label>\n                    <h2 class=\"title\">{{ address.address_type }}</h2>\n                    <p class=\"address-text\">\n                        {{ address.soc_name }}, {{address.street}}, {{address.city}}, {{address.zipcode}}\n                    </p>\n                </ion-label>\n                <ion-checkbox custom-chckbox slot=\"end\" mode=\"ios\" [checked]=\"address.checked\">\n                </ion-checkbox>\n            </ion-item>\n        </ion-item-sliding>\n\n        <ion-button class=\" otp_btn setaddress_btn\" mode=\"md\" expand=\"block\" fill=\"solid\" (click)=\"setDefaultAddress()\">\n            {{'select_address_page.set_address' | translate}}\n        </ion-button>\n    </ng-container>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/select-address/select-address.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/select-address/select-address.module.ts ***!
  \***************************************************************/
/*! exports provided: SelectAddressPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectAddressPageModule", function() { return SelectAddressPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _select_address_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./select-address.page */ "./src/app/pages/select-address/select-address.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");








var routes = [
    {
        path: '',
        component: _select_address_page__WEBPACK_IMPORTED_MODULE_6__["SelectAddressPage"]
    }
];
var SelectAddressPageModule = /** @class */ (function () {
    function SelectAddressPageModule() {
    }
    SelectAddressPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_select_address_page__WEBPACK_IMPORTED_MODULE_6__["SelectAddressPage"]]
        })
    ], SelectAddressPageModule);
    return SelectAddressPageModule;
}());



/***/ }),

/***/ "./src/app/pages/select-address/select-address.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/select-address/select-address.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-buttons ion-button ion-icon {\n  color: var(--ion-color-darkBlue);\n}\n\nion-content [custom-chckbox] {\n  height: 20px;\n  width: 20px;\n  --background-checked: var(--ion-color-darkBlue) !important;\n  --border-color-checked: var(--ion-color-darkBlue) !important;\n}\n\nion-content ion-item ion-label {\n  white-space: normal;\n}\n\nion-content ion-item ion-label .title {\n  font-size: 14px;\n  font-family: \"Poppins-Medium\";\n}\n\nion-content ion-item ion-label .address-text {\n  font-size: 13px;\n  font-family: \"Poppins-Regular\";\n}\n\nion-content ion-item-option {\n  width: 68px;\n  text-transform: capitalize;\n  font-family: \"Poppins-Medium\";\n}\n\nion-content .editBtn {\n  background-color: var(--ion-color-green);\n}\n\nion-content .setaddress_btn {\n  width: 91.7%;\n  margin: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VsZWN0LWFkZHJlc3MvQzpcXFVzZXJzXFxvc2lhblxcRGVza3RvcFxcTkFUVVVUMi4wL3NyY1xcYXBwXFxwYWdlc1xcc2VsZWN0LWFkZHJlc3NcXHNlbGVjdC1hZGRyZXNzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2VsZWN0LWFkZHJlc3Mvc2VsZWN0LWFkZHJlc3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdNO0VBQ0UsZ0NBQUE7QUNGUjs7QURTRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsMERBQUE7RUFDQSw0REFBQTtBQ05KOztBRFNJO0VBQ0UsbUJBQUE7QUNQTjs7QURRTTtFQUNFLGVBQUE7RUFDQSw2QkFBQTtBQ05SOztBRFFNO0VBQ0UsZUFBQTtFQUNBLDhCQUFBO0FDTlI7O0FEVUU7RUFDRSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtBQ1JKOztBRFVFO0VBQ0Usd0NBQUE7QUNSSjs7QURVRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FDUkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zZWxlY3QtYWRkcmVzcy9zZWxlY3QtYWRkcmVzcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcclxuICBpb24tYnV0dG9ucyB7XHJcbiAgICBpb24tYnV0dG9uIHtcclxuICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya0JsdWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgW2N1c3RvbS1jaGNrYm94XSB7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiB2YXIoLS1pb24tY29sb3ItZGFya0JsdWUpICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiB2YXIoLS1pb24tY29sb3ItZGFya0JsdWUpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIGlvbi1pdGVtIHtcclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtTWVkaXVtXCI7XHJcbiAgICAgIH1cclxuICAgICAgLmFkZHJlc3MtdGV4dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtUmVndWxhclwiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlvbi1pdGVtLW9wdGlvbiB7XHJcbiAgICB3aWR0aDogNjhweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIjtcclxuICB9XHJcbiAgLmVkaXRCdG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyZWVuKTtcclxuICB9XHJcbiAgLnNldGFkZHJlc3NfYnRuIHtcclxuICAgIHdpZHRoOiA5MS43JTtcclxuICAgIG1hcmdpbjogMTZweDtcclxuICB9XHJcbn1cclxuIiwiaW9uLWhlYWRlciBpb24tYnV0dG9ucyBpb24tYnV0dG9uIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrQmx1ZSk7XG59XG5cbmlvbi1jb250ZW50IFtjdXN0b20tY2hja2JveF0ge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLWRhcmtCbHVlKSAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiB2YXIoLS1pb24tY29sb3ItZGFya0JsdWUpICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudCBpb24taXRlbSBpb24tbGFiZWwge1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuaW9uLWNvbnRlbnQgaW9uLWl0ZW0gaW9uLWxhYmVsIC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIjtcbn1cbmlvbi1jb250ZW50IGlvbi1pdGVtIGlvbi1sYWJlbCAuYWRkcmVzcy10ZXh0IHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zLVJlZ3VsYXJcIjtcbn1cbmlvbi1jb250ZW50IGlvbi1pdGVtLW9wdGlvbiB7XG4gIHdpZHRoOiA2OHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIjtcbn1cbmlvbi1jb250ZW50IC5lZGl0QnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyZWVuKTtcbn1cbmlvbi1jb250ZW50IC5zZXRhZGRyZXNzX2J0biB7XG4gIHdpZHRoOiA5MS43JTtcbiAgbWFyZ2luOiAxNnB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/select-address/select-address.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/select-address/select-address.page.ts ***!
  \*************************************************************/
/*! exports provided: SelectAddressPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectAddressPage", function() { return SelectAddressPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_util_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../service/util.service */ "./src/app/service/util.service.ts");
/* harmony import */ var _add_address_add_address_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../add-address/add-address.page */ "./src/app/pages/add-address/add-address.page.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");







var SelectAddressPage = /** @class */ (function () {
    function SelectAddressPage(modalController, api, util, ntrl, translate) {
        var _this = this;
        this.modalController = modalController;
        this.api = api;
        this.util = util;
        this.ntrl = ntrl;
        this.translate = translate;
        this.isAddadress = false;
        this.util.startLoad();
        this.api.getDataWithToken("userAddress").subscribe(function (res) {
            if (res.success) {
                _this.addressList = res.data;
                _this.util.dismissLoader();
                if (localStorage.getItem("isaddress")) {
                    _this.addressList.forEach(function (element) {
                        if (element.id == localStorage.getItem("isaddress")) {
                            element.checked = true;
                        }
                    });
                }
            }
        });
    }
    SelectAddressPage.prototype.ngOnInit = function () { };
    SelectAddressPage.prototype.addAddress = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isAddadress = true;
                        return [4 /*yield*/, this.modalController.create({
                                component: _add_address_add_address_page__WEBPACK_IMPORTED_MODULE_2__["AddAddressPage"]
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            if (data["data"] != undefined) {
                                if (data) {
                                    _this.util.startLoad();
                                    _this.api.getDataWithToken("userAddress").subscribe(function (res) {
                                        if (res.success) {
                                            _this.addressList = res.data;
                                            _this.util.dismissLoader();
                                            if (localStorage.getItem("isaddress")) {
                                                _this.addressList.forEach(function (element) {
                                                    if (element.id == localStorage.getItem("isaddress")) {
                                                        element.checked = true;
                                                    }
                                                });
                                            }
                                        }
                                    });
                                }
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SelectAddressPage.prototype.setAddress = function (name) {
        this.addressList.forEach(function (element) {
            element.checked = false;
        });
        name.checked = true;
    };
    SelectAddressPage.prototype.editAddress = function (address) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        address.action = "edit";
                        this.api.parseData = address;
                        return [4 /*yield*/, this.modalController.create({
                                component: _add_address_add_address_page__WEBPACK_IMPORTED_MODULE_2__["AddAddressPage"]
                            })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SelectAddressPage.prototype.deleteAddress = function (address) {
        var _this = this;
        this.util.startLoad();
        this.api
            .getDataWithToken("deleteAddress/" + address.id)
            .subscribe(function (res) {
            if (res.success) {
                _this.api.getDataWithToken("userAddress").subscribe(function (res) {
                    if (res.success) {
                        _this.addressList = res.data;
                        _this.util.dismissLoader();
                        if (localStorage.getItem("isaddress")) {
                            _this.addressList.forEach(function (element) {
                                if (element.id == localStorage.getItem("isaddress")) {
                                    element.checked = true;
                                }
                            });
                        }
                    }
                });
            }
        });
    };
    SelectAddressPage.prototype.setDefaultAddress = function () {
        var _this = this;
        var selectedAddress;
        this.addressList.forEach(function (element) {
            if (element.checked) {
                selectedAddress = element.id;
            }
        });
        if (selectedAddress) {
            localStorage.setItem("isaddress", selectedAddress);
            this.ntrl.back();
        }
        else {
            this.translate.get('toasts').subscribe(function (val) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    this.util.presentToast(val.select_default_address);
                    return [2 /*return*/];
                });
            }); });
        }
    };
    SelectAddressPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
        { type: _service_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
        { type: _service_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] }
    ]; };
    SelectAddressPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-select-address",
            template: __webpack_require__(/*! raw-loader!./select-address.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/select-address/select-address.page.html"),
            styles: [__webpack_require__(/*! ./select-address.page.scss */ "./src/app/pages/select-address/select-address.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            _service_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"],
            _service_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]])
    ], SelectAddressPage);
    return SelectAddressPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-select-address-select-address-module-es5.js.map