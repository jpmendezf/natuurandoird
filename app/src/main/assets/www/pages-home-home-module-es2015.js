(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/home/home.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n    <ion-toolbar>\n        <ion-buttons slot=\"end\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <div class=\"locationContent\">\n            <img src=\"../../assets/image/location.png\" />\n            <div class=\"textContent\">\n                <h2 class=\"location\">\n                    {{userAddress?.address_type ? userAddress?.address_type: 'Loading...'}}\n                </h2>\n                <p class=\"address\">{{userAddress?.soc_name}} {{userAddress?.street}} {{userAddress?.city}}\n                    {{userAddress?.zipcode}}\n                </p>\n            </div>\n        </div>\n    </ion-toolbar>\n    <ion-searchbar placeholder=\"Search for Restaurant and dishes\" clearIcon=\"string\" [(ngModel)]=\"term\"></ion-searchbar>\n    <ion-button *ngIf=\"sellProduct != 2\" class=\"trans-btn mode_btn\" [class.active]=\"isfood==true\" (click)=\"isfood=true\">\n        {{\"home_page.food\" | translate}}</ion-button>\n    <ion-button *ngIf=\"sellProduct != 1\" class=\"trans-btn mode_btn\" [class.active]=\"isfood==false\"\n        (click)=\"isfood=false\">\n        {{\"home_page.grocery\" | translate}}</ion-button>\n</ion-header>\n\n<ion-content *ngIf=\"isfood\" class=\"food_content\">\n\n    <ion-slides class=\"margin-top-18\" pager=\"false\" [options]=\"slideOpts\">\n        <ion-slide *ngFor=\"let i of banners\" [ngStyle]=\"{'maxWidth': innerWidth - 80+'px'}\">\n            <img [src]=\"i?.imagePath+i?.image\">\n            <h2 *ngIf=\"i?.title?.length != 0\">{{i?.title}}</h2>\n        </ion-slide>\n    </ion-slides>\n\n    <div class=\"main_div\">\n        <p class=\"ion-margin-horizontal filter_p\">\n            {{data?.totalShop}} {{\"home_page.restaurant\" | translate}}\n            <span class=\"ion-float-right\" (click)=\"presentModal()\">\n                <img src=\"assets/image/controls.png\" />{{\"home_page.filter\" | translate}}</span>\n        </p>\n\n        <p class=\"no_data_p\" *ngIf=\"data?.shop?.length==0\">{{\"home_page.no_data\" | translate}}</p>\n\n        <div class=\"offer_div\">\n            <div class=\"img_div\" *ngFor=\"let item of data?.shop |filter:term\" (click)=\"resturantDetail(item?.id)\">\n                <img [src]=\"item.imagePath + item.image\" />\n                <div class=\"offer\">\n                    <span>{{\"home_page.offer\" | translate}}</span>\n                </div>\n                <p class=\"discount_p\">\n                    {{item?.name}}\n                </p>\n            </div>\n        </div>\n\n        <div class=\"feature_row\">\n            <div class=\"first_div\" *ngFor=\"let item of staticData.feature\" (click)=\"feature(item.type)\">\n                <div class=\"img_row\">\n                    <img [src]=\"item?.image\" />\n                </div>\n                <div class=\"detail_div\">\n                    <p class=\"tittle\">{{\"home_page.\"+item?.text | translate}}</p>\n                </div>\n            </div>\n        </div>\n\n        <ng-container *ngFor=\"let item of data?.shop |filter:term\">\n            <div class=\"card_div\" (click)=\"resturantDetail(item?.id)\">\n                <div class=\"div_image\">\n                    <img [src]=\"item?.imagePath + item?.image\" />\n                </div>\n                <div class=\"data_div\">\n                    <ion-button class=\"btn_div ion-float-right ion-text-capitalize\" *ngIf=\"item?.exclusive\">\n                        {{btnType}}\n                    </ion-button>\n                    <h3 class=\"item\">{{item?.name}}</h3>\n                    <p class=\"type\">{{item?.itemNames}}</p>\n\n                    <div class=\"rate\">\n                        <span>\n                            <ion-icon name=\"star\"></ion-icon>{{item?.rate}}\n                        </span>\n                        <span class=\"point_span\">\n                            <div class=\"point\"></div>\n                            {{item?.min}} {{\"home_page.min\" | translate}}\n                        </span>\n                        <span class=\"point_span\">\n                            <div class=\"point\"></div>\n                            {{currency}}{{item?.avarage_plate_price}} {{\"home_page.for_two\" | translate}}\n                        </span>\n                    </div>\n                </div>\n            </div>\n        </ng-container>\n\n        <div class=\"slider_div\">\n            <div class=\"menu_div\" *ngFor=\"let item of data?.category |filter:term\" (click)=\"categoryData(item?.id)\">\n                <img [src]=\"item.imagePath + item?.image\" />\n                <p class=\"img_type\">{{item?.name}}</p>\n            </div>\n        </div>\n        <p class=\"heading\">{{\"home_page.popular_this_week\" | translate}}</p>\n        <p *ngIf=\"data?.shop?.length==0\" class=\"no_data_p\">{{\"home_page.no_data\" | translate}}</p>\n        <ng-container *ngFor=\"let item of data?.shop |filter:term ; let i=index\">\n            <div class=\"card_div\" (click)=\"resturantDetail(item?.id)\">\n                <div class=\"div_image\">\n                    <img [src]=\"item?.imagePath + item?.image\" />\n                </div>\n                <div class=\"data_div\">\n                    <ion-button class=\"btn_div ion-float-right ion-text-capitalize\" *ngIf=\"item?.exclusive\">\n                        {{btnType}}\n                    </ion-button>\n                    <h3 class=\"item\">{{item?.name}}</h3>\n                    <p class=\"type\">{{item?.itemNames}}</p>\n                    <div class=\"rate\">\n                        <span>\n                            <ion-icon name=\"star\"></ion-icon>{{item?.rate}}\n                        </span>\n                        <span class=\"point_span\">\n                            <div class=\"point\"></div>\n                            {{item?.delivery_time}} {{\"home_page.min\" | translate}}\n                        </span>\n                        <span class=\"point_span\">\n                            <div class=\"point\"></div>\n                            {{currency}}{{item?.avarage_plate_price}} {{\"home_page.for_two\" | translate}}\n                        </span>\n                    </div>\n                </div>\n            </div>\n        </ng-container>\n        <p class=\"heading\">{{\"home_page.pocket_friendly\" | translate}}</p>\n        <p class=\"no_data_p\" *ngIf=\"data?.item?.length==0\">{{\"home_page.no_data\" | translate}}</p>\n        <div class=\"slider_div\">\n            <div class=\"menu_div pocket_div_img\" *ngFor=\"let item of data?.item |filter:term\"\n                (click)=\"resturantDetail(item.shop_id)\">\n                <img [src]=\"item.imagePath + item.image\" />\n                <p class=\"img_type\">{{item?.name | slice:0:18}} <span *ngIf=\"item.name.length >18 \">...</span></p>\n            </div>\n        </div>\n    </div>\n</ion-content>\n<ion-content class=\"ion-padding-bottom grocery_content\" *ngIf=\"!isfood\">\n\n    <div class=\"offer_div\" *ngIf=\"grocery?.coupon?.length > 0\">\n        <img [src]=\"grocery?.coupon[0].imagePath + grocery?.coupon[0].image\">\n        <div class=\"detail_div\">\n            <h3 class=\"discount\">{{grocery?.coupon[0].discount}} % discount</h3>\n            <p class=\"text_lbl\">{{grocery?.coupon[0].description}}</p>\n        </div>\n    </div>\n    <h3 class=\"main_lbl\">{{\"home_page.store\" | translate}}\n        <ion-button class=\"trans-btn more_btn\" (click)=\"storeList()\">{{\"home_page.view_more\" | translate}}</ion-button>\n    </h3>\n    <div class=\"store_div\">\n        <div class=\"product_div\" *ngFor=\"let item of grocery?.Store\" (click)=\"storeDetail(item?.id)\">\n\n            <div class=\"simg_div\">\n                <img [src]=\"item?.imagePath + item?.image\">\n            </div>\n            <h3 class=\"name\">{{item?.name}}</h3>\n\n            <p class=\"away_lbl\">\n                <ion-icon src=\"../../../assets/icon-image/gro_pin.svg\"></ion-icon>\n                {{item?.away}} km\n            </p>\n        </div>\n    </div>\n\n    <h3 class=\"main_lbl\">{{\"home_page.categories\" | translate}}\n        <ion-button class=\"trans-btn more_btn\" (click)=\"getCategory()\">{{\"home_page.view_more\" | translate}}\n        </ion-button>\n    </h3>\n    <div class=\"categories_div\">\n        <div class=\"product_div\" *ngFor=\"let item of grocery?.category\" (click)=\"subcategory(item?.id)\">\n            <img [src]=\"item?.imagePath + item?.image\">\n            <h3 class=\"name\">{{item?.name}}</h3>\n        </div>\n    </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");









let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_6__["Ng2SearchPipeModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: "",
                    component: _home_page__WEBPACK_IMPORTED_MODULE_7__["HomePage"]
                }
            ])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_7__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  padding: 10px 5px 3px 14px;\n}\nion-header ion-toolbar .locationContent {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\nion-header ion-toolbar .locationContent img {\n  margin-right: 8px;\n}\nion-header ion-toolbar .locationContent .textContent .location {\n  font-family: Poppins-Medium;\n  font-size: 14px;\n  margin: 0;\n  font-size: 16px;\n  margin: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  color: var(--ion-color-darkBlue);\n}\nion-header ion-toolbar .locationContent .textContent .location img {\n  margin-left: 6px;\n}\nion-header ion-toolbar .locationContent .textContent .address {\n  margin: 0;\n  color: var(--ion-color-darkBlue);\n  font-family: Poppins-Medium;\n  line-height: 1;\n  font-size: 13px;\n  margin-top: 4px;\n  line-height: 15px;\n}\nion-header .mode_btn {\n  color: var(--ion-color-darkBlue);\n  font-size: 14px;\n  font-family: \"Poppins-Medium\";\n  margin-right: 16px;\n  height: 18px;\n  text-transform: capitalize;\n}\nion-header .active {\n  color: var(--green-color);\n}\n.food_content .main_div ion-searchbar {\n  margin-top: 20px;\n}\n.food_content .main_div .filter_p {\n  font-size: 12px;\n  font-family: \"Poppins-Medium\";\n  color: var(--ion-color-darkBlue);\n}\n.food_content .main_div .filter_p span img {\n  margin-right: 3px;\n}\n.food_content .main_div .offer_div {\n  margin-top: 10px;\n  margin-left: 16px;\n  overflow-y: auto;\n  display: -webkit-box;\n}\n.food_content .main_div .offer_div .img_div {\n  margin-right: 10px;\n  position: relative;\n}\n.food_content .main_div .offer_div .img_div img {\n  border-radius: 5px;\n  width: 135px;\n  height: 150px;\n}\n.food_content .main_div .offer_div .img_div .offer {\n  background-color: rgba(255, 255, 255, 0.7);\n  position: absolute;\n  width: 45px;\n  height: 14px;\n  top: 10px;\n  left: 5px;\n  font-size: 9px;\n  color: var(--ion-color-darkBlue);\n  font-family: \"Poppins-Medium\";\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.food_content .main_div .offer_div .img_div .discount_p {\n  font-size: 10px;\n  font-family: \"Poppins-Medium\";\n  color: var(--ion-color-white);\n  position: absolute;\n  padding: 5px 7px 5px;\n  bottom: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  margin-bottom: 4px;\n  border-radius: 0px 0px 5px 5px;\n  width: 100%;\n}\n.food_content .main_div .offer_div::-webkit-scrollbar {\n  display: none;\n}\n.food_content .main_div .feature_row {\n  display: -webkit-box;\n  margin-top: 15px;\n  overflow-y: auto;\n  margin-left: 10px;\n  margin-bottom: 20px;\n}\n.food_content .main_div .feature_row .first_div {\n  display: grid;\n  margin-right: 5px;\n}\n.food_content .main_div .feature_row .first_div .img_row {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.food_content .main_div .feature_row .first_div .detail_div {\n  display: -webkit-box;\n  display: flex;\n}\n.food_content .main_div .feature_row .first_div .detail_div .tittle {\n  font-size: 9.5px;\n  font-family: \"Poppins-SemiBold\";\n  color: var(--ion-color-darkBlue);\n  width: 62%;\n  margin: auto;\n  text-align: center;\n}\n.food_content .main_div .feature_row::-webkit-scrollbar {\n  display: none;\n}\n.food_content .main_div .card_div {\n  display: -webkit-box;\n  display: flex;\n  margin: 13px 16px;\n}\n.food_content .main_div .card_div .div_image {\n  padding-right: 10px;\n}\n.food_content .main_div .card_div .div_image img {\n  border-radius: 5px;\n  width: 87px;\n  height: 78px;\n}\n.food_content .main_div .card_div .data_div {\n  width: 70%;\n}\n.food_content .main_div .card_div .data_div .btn_div {\n  font-size: 8.5px;\n  font-family: \"Poppins-Medium\";\n  --background: var(--ion-color-green);\n  --background-activated: var(--ion-color-green);\n  --color: var(--ion-color-white);\n  height: 20px;\n  margin-right: 0px;\n  --border-radius: 2px;\n  --box-shadow: none;\n}\n.food_content .main_div .card_div .data_div .btn_div.trending {\n  --background: var(--ion-color-google-btn);\n  --background-activated: var(--ion-color-google-btn);\n}\n.food_content .main_div .card_div .data_div .btn_color {\n  --background: var(--ion-color-btn-color);\n}\n.food_content .main_div .card_div .data_div .item {\n  font-size: 14px;\n  color: var(--ion-color-darkBlue);\n  font-family: \"Poppins-SemiBold\";\n  margin-top: 4px;\n  margin-bottom: 5px;\n}\n.food_content .main_div .card_div .data_div .type {\n  font-size: 10.5px;\n  font-family: \"Poppins-Regular\";\n  color: var(--ion-color-darkgray);\n  margin-top: 0px;\n  margin-bottom: 3px;\n}\n.food_content .main_div .card_div .data_div .percent {\n  font-size: 10.5px;\n  font-family: \"Poppins-Medium\";\n  color: var(--ion-color-green);\n  margin-top: 0px;\n  margin-bottom: 3px;\n}\n.food_content .main_div .card_div .data_div .percent ion-icon {\n  margin-right: 5px;\n}\n.food_content .main_div .card_div .data_div .rate {\n  font-size: 10.5px;\n  display: -webkit-box;\n  display: flex;\n  font-family: \"Poppins-Regular\";\n  color: var(--ion-color-darkgray);\n}\n.food_content .main_div .card_div .data_div .rate ion-icon {\n  color: var(--ion-color-yellow);\n  margin-right: 5px;\n}\n.food_content .main_div .card_div .data_div .rate span {\n  margin-right: 8px;\n}\n.food_content .main_div .card_div .data_div .rate span .point {\n  height: 6px;\n  width: 6px;\n  background-color: var(--ion-color-green);\n  border-radius: 50%;\n  margin-right: 3px;\n  align-self: center;\n}\n.food_content .main_div .card_div .data_div .rate .point_span {\n  display: -webkit-box;\n  display: flex;\n}\n.food_content .main_div .slider_div {\n  display: -webkit-box;\n  overflow-y: auto;\n  margin-left: 16px;\n}\n.food_content .main_div .slider_div .menu_div {\n  margin-right: 10px;\n  position: relative;\n}\n.food_content .main_div .slider_div .menu_div img {\n  border-radius: 5px;\n  width: 100px;\n  height: 78px;\n}\n.food_content .main_div .slider_div .menu_div .img_type {\n  font-size: 10px;\n  font-family: \"Poppins-Medium\";\n  color: var(--ion-color-white);\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  margin-bottom: 4px;\n  background-color: rgba(0, 0, 0, 0.4);\n  width: 100%;\n  border-radius: 0px 0px 5px 5px;\n  padding: 5px 7px;\n}\n.food_content .main_div .slider_div .pocket_div_img img {\n  width: 135px;\n  height: 150px;\n}\n.food_content .main_div .slider_div::-webkit-scrollbar {\n  display: none;\n}\n.food_content .main_div .heading {\n  font-size: 14px;\n  font-family: \"Poppins-Medium\";\n  color: var(--ion-color-darkBlue);\n  margin-left: 16px;\n}\n.swiper-slide-next,\n.swiper-slide-next {\n  height: 150px !important;\n  opacity: 0.3;\n}\n.swiper-slide-next img,\n.swiper-slide-next img {\n  width: 100% !important;\n  max-width: 100% !important;\n  height: 150px !important;\n  max-height: 150px !important;\n  -o-object-fit: fill !important;\n     object-fit: fill !important;\n}\n.swiper-slide-active {\n  height: 170px;\n}\n.swiper-slide-active img {\n  width: 100% !important;\n  max-width: 100% !important;\n  height: 170px !important;\n  max-height: 170px !important;\n  -o-object-fit: fill !important;\n     object-fit: fill !important;\n}\nion-slides {\n  height: 170px;\n  margin-top: 19px;\n  margin-bottom: 26px;\n}\nion-slides ion-slide {\n  border-radius: 5px;\n  justify-content: space-around;\n  text-align: inherit;\n}\nion-slides ion-slide .swiper-slide img {\n  width: 100% !important;\n  max-width: 100% !important;\n  height: 170px !important;\n  max-height: 170px !important;\n  -o-object-fit: fill !important;\n     object-fit: fill !important;\n  border-radius: 3px;\n}\nion-slides ion-slide h2 {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  background: #0000004d;\n  font-size: 20px;\n  color: var(--ion-color-white);\n  text-transform: capitalize;\n  margin: 0;\n  height: 40px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.swiper-slide:nth-child(8n+1) {\n  background: #019e8b;\n}\n.swiper-slide:nth-child(8n+2) {\n  background: #2faaf7;\n}\n.swiper-slide:nth-child(8n+3) {\n  background: #fd6c57;\n}\n.swiper-slide:nth-child(8n+4) {\n  background: #81d4f9;\n}\n.swiper-slide:nth-child(8n+5) {\n  background: #ac92ec;\n}\n.swiper-slide:nth-child(8n+6) {\n  background: #a0d468;\n}\n.swiper-slide:nth-child(8n+7) {\n  background: #e3bd36;\n}\n.swiper-slide:nth-child(8n+8) {\n  background: #5191fa;\n}\n.grocery_content .main_lbl {\n  margin-top: 10px;\n  font-size: 18px;\n  color: var(--light-black-color);\n  font-family: \"fivo-regular\";\n  padding: 0px 16px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.grocery_content .main_lbl .more_btn {\n  font-size: 14px;\n  text-transform: capitalize;\n  --color: var(--green-color);\n  height: 20px;\n}\n.grocery_content .trending_div {\n  display: -webkit-box;\n  overflow-x: auto;\n  padding: 10px 0px 10px 16px;\n}\n.grocery_content .trending_div .product_div {\n  width: 145px;\n  border-radius: 5px;\n  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);\n  padding: 10px 7px;\n  margin-right: 16px;\n}\n.grocery_content .trending_div .product_div .img_div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  padding: 10px 0px 20px 0px;\n}\n.grocery_content .trending_div .product_div .img_div img {\n  height: 100px;\n  width: 80px;\n}\n.grocery_content .trending_div .product_div .name {\n  font-size: 15px;\n  font-family: \"fivo-regular\";\n  color: var(--ion-color-darkBlue);\n  margin: 0;\n}\n.grocery_content .trending_div .product_div .qunty {\n  font-size: 12px;\n  color: var(--border-color);\n  font-family: \"fivo-regular\";\n  margin: 4px 0px;\n}\n.grocery_content .trending_div .product_div .price {\n  font-size: 14px;\n  color: var(--green-color);\n  font-family: \"fivo-regular\";\n  margin: 0;\n}\n.grocery_content .trending_div .btn_div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.grocery_content .trending_div .btn_div .add_btn {\n  height: 15px;\n  width: 15px;\n  --background: var(--ion-color-darkBlue);\n  --background-activated: var(--ion-color-darkBlue);\n}\n.grocery_content .trending_div .btn_div .add_btn ion-icon {\n  height: 9px;\n  width: 9px;\n}\n.grocery_content .trending_div .btn_div .qty_p {\n  font-size: 14px;\n  color: var(--border-color);\n  font-family: \"fivo-regular\";\n  margin: 0 5px;\n  padding-top: 2px;\n}\n.grocery_content .trending_div .btn_div .qty_div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.grocery_content .trending_div::-webkit-scrollbar {\n  display: none;\n}\n.grocery_content .offer_div {\n  height: 107px;\n  margin: 15px 0px;\n  background-color: var(--light-green-color);\n  padding: 16px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.grocery_content .offer_div img {\n  width: 152px;\n  height: 38px;\n}\n.grocery_content .offer_div .detail_div {\n  text-align: end;\n}\n.grocery_content .offer_div .detail_div .discount {\n  font-size: 20px;\n  color: var(--light-black-color);\n  font-family: \"fivo-medium\";\n  margin: 0;\n}\n.grocery_content .offer_div .detail_div .text_lbl {\n  font-size: 17px;\n  color: var(--light-black-color);\n  font-family: \"fivo-regular\";\n  margin: 0;\n}\n.grocery_content .store_div {\n  display: -webkit-box;\n  overflow-x: auto;\n  padding: 10px 0px 10px 16px;\n}\n.grocery_content .store_div .product_div {\n  width: 145px;\n  border-radius: 5px;\n  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);\n  padding: 10px 7px;\n  margin-right: 16px;\n  position: relative;\n}\n.grocery_content .store_div .product_div .new_div {\n  width: 51px;\n  height: 17px;\n  background-color: var(--green-color);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  border-radius: 2px;\n}\n.grocery_content .store_div .product_div .new_div .new_p {\n  font-size: 8px;\n  color: var(--ion-color-white);\n  font-family: \"Poppins-Medium\";\n  margin: 0;\n}\n.grocery_content .store_div .product_div .simg_div {\n  text-align: center;\n  padding: 45px 0px 20px 0px;\n}\n.grocery_content .store_div .product_div .simg_div img {\n  max-width: 115px;\n  height: 60px;\n  width: 100%;\n  -o-object-fit: scale-down;\n     object-fit: scale-down;\n}\n.grocery_content .store_div .product_div .name {\n  font-size: 18px;\n  color: var(--light-black-color);\n  font-family: \"fivo-regular\";\n  margin-top: 0;\n  margin-bottom: 5px;\n  text-align: center;\n}\n.grocery_content .store_div .product_div .organic_div {\n  padding: 5px 0px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.grocery_content .store_div .product_div .organic_div .dot_div {\n  height: 5px;\n  width: 5px;\n  border-radius: 50%;\n  background-color: var(--green-color);\n  margin: 0px 5px;\n}\n.grocery_content .store_div .product_div .organic_div .or_lbl {\n  font-size: 14px;\n  color: var(--border-color);\n  font-family: \"fivo-regular\";\n  margin: 0;\n}\n.grocery_content .store_div .product_div .away_lbl {\n  font-size: 12px;\n  font-family: \"fivo-regular\";\n  margin: 0;\n  color: var(--border-color);\n  text-align: center;\n}\n.grocery_content .store_div::-webkit-scrollbar,\n.grocery_content .categories_div::-webkit-scrollbar {\n  display: none;\n}\n.grocery_content .money_offer {\n  height: 107px;\n  margin: 15px 0px;\n  background-color: var(--light-green-color);\n  padding: 16px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.grocery_content .money_offer .detail_div {\n  width: 64%;\n  padding-left: 15px;\n}\n.grocery_content .money_offer .discount {\n  font-size: 18px;\n  font-family: \"fivo-medium\";\n  color: var(--coupon_green);\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n.grocery_content .money_offer .text_lbl {\n  font-size: 14px;\n  color: var(--coupon_green);\n  opacity: 0.6;\n  font-family: \"fivo-medium\";\n  margin: 0;\n}\n.grocery_content .categories_div {\n  display: -webkit-box;\n  overflow-x: auto;\n  padding: 10px 0px 10px 16px;\n}\n.grocery_content .categories_div .product_div {\n  width: 145px;\n  border-radius: 5px;\n  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);\n  padding: 25px 0px 10px 0px;\n  text-align: center;\n  margin-right: 16px;\n}\n.grocery_content .categories_div .product_div img {\n  height: 123px;\n  width: 100%;\n  -o-object-fit: scale-down;\n     object-fit: scale-down;\n}\n.grocery_content .categories_div .product_div .name {\n  margin-top: 5px;\n  font-size: 18px;\n  color: var(--light-black-color);\n  font-family: \"fivo-regular\";\n  margin-bottom: 2px;\n  padding: 0px 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9DOlxcVXNlcnNcXG9zaWFuXFxEZXNrdG9wXFxOQVRVVVQyLjAvc3JjXFxhcHBcXHBhZ2VzXFxob21lXFxob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUFBO0FDQ0Y7QURDSTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNDTjtBREFNO0VBQ0UsaUJBQUE7QUNFUjtBRENRO0VBQ0UsMkJBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGdDQUFBO0FDQ1Y7QURBVTtFQUNFLGdCQUFBO0FDRVo7QURDUTtFQUNFLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNDVjtBRElFO0VBQ0UsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtBQ0ZKO0FESUU7RUFDRSx5QkFBQTtBQ0ZKO0FEUUk7RUFDRSxnQkFBQTtBQ0xOO0FET0k7RUFDRSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtBQ0xOO0FET1E7RUFDRSxpQkFBQTtBQ0xWO0FEU0k7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQ1BOO0FEUU07RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FDTlI7QURPUTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNMVjtBRE9RO0VBQ0UsMENBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0NBQUE7RUFDQSw2QkFBQTtF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RUFDQSxrQkFBQTtBQ0VOO0FERE07RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7QUNHUjtBRERNO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0dSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICBwYWRkaW5nOiAxMHB4IDVweCAzcHggMTRweDtcbiAgaW9uLXRvb2xiYXIge1xuICAgIC5sb2NhdGlvbkNvbnRlbnQge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBpbWcge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgIH1cbiAgICAgIC50ZXh0Q29udGVudCB7XG4gICAgICAgIC5sb2NhdGlvbiB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnMtTWVkaXVtO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrQmx1ZSk7XG4gICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA2cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5hZGRyZXNzIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrQmx1ZSk7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnMtTWVkaXVtO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLm1vZGVfYnRuIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtCbHVlKTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIjtcbiAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgaGVpZ2h0OiAxOHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICB9XG4gIC5hY3RpdmUge1xuICAgIGNvbG9yOiB2YXIoLS1ncmVlbi1jb2xvcik7XG4gIH1cbn1cblxuLmZvb2RfY29udGVudCB7XG4gIC5tYWluX2RpdiB7XG4gICAgaW9uLXNlYXJjaGJhciB7XG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIH1cbiAgICAuZmlsdGVyX3Age1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIjtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya0JsdWUpO1xuICAgICAgc3BhbiB7XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLm9mZmVyX2RpdiB7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAuaW1nX2RpdiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBpbWcge1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICB3aWR0aDogMTM1cHg7XG4gICAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgfVxuICAgICAgICAub2ZmZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgICAgICAgaGVpZ2h0OiAxNHB4O1xuICAgICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgICBsZWZ0OiA1cHg7XG4gICAgICAgICAgZm9udC1zaXplOiA5cHg7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrQmx1ZSk7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIjtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmRpc2NvdW50X3Age1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zLU1lZGl1bVwiO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBwYWRkaW5nOiA1cHggN3B4IDVweDtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNXB4IDVweDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAub2ZmZXJfZGl2Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAuZmVhdHVyZV9yb3cge1xuICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgIC5maXJzdF9kaXYge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgLmltZ19yb3cge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmRldGFpbF9kaXYge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgLnRpdHRsZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDkuNXB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1TZW1pQm9sZFwiO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrQmx1ZSk7XG4gICAgICAgICAgICB3aWR0aDogNjIlO1xuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAuZmVhdHVyZV9yb3c6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC5jYXJkX2RpdiB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgbWFyZ2luOiAxM3B4IDE2cHg7XG4gICAgICAuZGl2X2ltYWdlIHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgd2lkdGg6IDg3cHg7XG4gICAgICAgICAgaGVpZ2h0OiA3OHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuZGF0YV9kaXYge1xuICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICAuYnRuX2RpdiB7XG4gICAgICAgICAgZm9udC1zaXplOiA4LjVweDtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zLU1lZGl1bVwiO1xuICAgICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWdyZWVuKTtcbiAgICAgICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB2YXIoLS1pb24tY29sb3ItZ3JlZW4pO1xuICAgICAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG4gICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAmLnRyZW5kaW5nIHtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWdvb2dsZS1idG4pO1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdmFyKC0taW9uLWNvbG9yLWdvb2dsZS1idG4pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuYnRuX2NvbG9yIHtcbiAgICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1idG4tY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIC5pdGVtIHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrQmx1ZSk7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1TZW1pQm9sZFwiO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLnR5cGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTAuNXB4O1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtUmVndWxhclwiO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2dyYXkpO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnBlcmNlbnQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTAuNXB4O1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtTWVkaXVtXCI7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1ncmVlbik7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcbiAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnJhdGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTAuNXB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1SZWd1bGFyXCI7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrZ3JheSk7XG4gICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci15ZWxsb3cpO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICAgICAgICAucG9pbnQge1xuICAgICAgICAgICAgICBoZWlnaHQ6IDZweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDZweDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyZWVuKTtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAucG9pbnRfc3BhbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAuc2xpZGVyX2RpdiB7XG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICAgIC5tZW51X2RpdiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBpbWcge1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA3OHB4O1xuICAgICAgICB9XG4gICAgICAgIC5pbWdfdHlwZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtTWVkaXVtXCI7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA1cHggNXB4O1xuICAgICAgICAgIHBhZGRpbmc6IDVweCA3cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5wb2NrZXRfZGl2X2ltZyB7XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDEzNXB4O1xuICAgICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLnNsaWRlcl9kaXY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC5oZWFkaW5nIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtTWVkaXVtXCI7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtCbHVlKTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgIH1cbiAgfVxufVxuXG4uc3dpcGVyLXNsaWRlLW5leHQsXG4uc3dpcGVyLXNsaWRlLW5leHQge1xuICBoZWlnaHQ6IDE1MHB4ICFpbXBvcnRhbnQ7XG4gIG9wYWNpdHk6IDAuMztcbiAgaW1nIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMTUwcHggIWltcG9ydGFudDtcbiAgICBtYXgtaGVpZ2h0OiAxNTBweCAhaW1wb3J0YW50O1xuICAgIG9iamVjdC1maXQ6IGZpbGwgIWltcG9ydGFudDtcbiAgfVxufVxuXG4uc3dpcGVyLXNsaWRlLWFjdGl2ZSB7XG4gIGhlaWdodDogMTcwcHg7XG4gIGltZyB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDE3MHB4ICFpbXBvcnRhbnQ7XG4gICAgbWF4LWhlaWdodDogMTcwcHggIWltcG9ydGFudDtcbiAgICBvYmplY3QtZml0OiBmaWxsICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuaW9uLXNsaWRlcyB7XG4gIGhlaWdodDogMTcwcHg7XG4gIG1hcmdpbi10b3A6IDE5cHg7XG4gIG1hcmdpbi1ib3R0b206IDI2cHg7XG4gIGlvbi1zbGlkZSB7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIHRleHQtYWxpZ246IGluaGVyaXQ7XG4gICAgLnN3aXBlci1zbGlkZSBpbWcge1xuICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgaGVpZ2h0OiAxNzBweCAhaW1wb3J0YW50O1xuICAgICAgbWF4LWhlaWdodDogMTcwcHggIWltcG9ydGFudDtcbiAgICAgIG9iamVjdC1maXQ6IGZpbGwgIWltcG9ydGFudDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICB9XG4gICAgaDIge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwNGQ7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gIH1cbn1cblxuJGNvbG9yczogKFxuICAjMDE5ZThiLFxuICAjMmZhYWY3LFxuICAjZmQ2YzU3LFxuICAjODFkNGY5LFxuICAjYWM5MmVjLFxuICAjYTBkNDY4LFxuICAjZTNiZDM2LFxuICAjNTE5MWZhXG4pO1xuQGZvciAkaSBmcm9tIDEgdGhyb3VnaCBsZW5ndGgoJGNvbG9ycykge1xuICAuc3dpcGVyLXNsaWRlOm50aC1jaGlsZCgje2xlbmd0aCgkY29sb3JzKX1uICsgI3skaX0pIHtcbiAgICBiYWNrZ3JvdW5kOiBudGgoJGNvbG9ycywgJGkpO1xuICB9XG59XG5cbi5ncm9jZXJ5X2NvbnRlbnQge1xuICAubWFpbl9sYmwge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiB2YXIoLS1saWdodC1ibGFjay1jb2xvcik7XG4gICAgZm9udC1mYW1pbHk6IFwiZml2by1yZWd1bGFyXCI7XG4gICAgcGFkZGluZzogMHB4IDE2cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAubW9yZV9idG4ge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAtLWNvbG9yOiB2YXIoLS1ncmVlbi1jb2xvcik7XG4gICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgfVxuICB9XG4gIC50cmVuZGluZ19kaXYge1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgcGFkZGluZzogMTBweCAwcHggMTBweCAxNnB4O1xuICAgIC5wcm9kdWN0X2RpdiB7XG4gICAgICB3aWR0aDogMTQ1cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgICAgIHBhZGRpbmc6IDEwcHggN3B4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgICAgLmltZ19kaXYge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMTBweCAwcHggMjBweCAwcHg7XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLm5hbWUge1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcImZpdm8tcmVndWxhclwiO1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtCbHVlKTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuICAgICAgLnF1bnR5IHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBjb2xvcjogdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiZml2by1yZWd1bGFyXCI7XG4gICAgICAgIG1hcmdpbjogNHB4IDBweDtcbiAgICAgIH1cbiAgICAgIC5wcmljZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWdyZWVuLWNvbG9yKTtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiZml2by1yZWd1bGFyXCI7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cbiAgICB9XG4gICAgLmJ0bl9kaXYge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAuYWRkX2J0biB7XG4gICAgICAgIGhlaWdodDogMTVweDtcbiAgICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhcmtCbHVlKTtcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdmFyKC0taW9uLWNvbG9yLWRhcmtCbHVlKTtcbiAgICAgICAgLy8gLS1ib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICBoZWlnaHQ6IDlweDtcbiAgICAgICAgICB3aWR0aDogOXB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAucXR5X3Age1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgICAgICBmb250LWZhbWlseTogXCJmaXZvLXJlZ3VsYXJcIjtcbiAgICAgICAgbWFyZ2luOiAwIDVweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDJweDtcbiAgICAgIH1cbiAgICAgIC5xdHlfZGl2IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLnRyZW5kaW5nX2Rpdjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLm9mZmVyX2RpdiB7XG4gICAgaGVpZ2h0OiAxMDdweDtcbiAgICBtYXJnaW46IDE1cHggMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyZWVuLWNvbG9yKTtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgaW1nIHtcbiAgICAgIHdpZHRoOiAxNTJweDtcbiAgICAgIGhlaWdodDogMzhweDtcbiAgICB9XG4gICAgLmRldGFpbF9kaXYge1xuICAgICAgdGV4dC1hbGlnbjogZW5kO1xuICAgICAgLmRpc2NvdW50IHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0tbGlnaHQtYmxhY2stY29sb3IpO1xuICAgICAgICBmb250LWZhbWlseTogXCJmaXZvLW1lZGl1bVwiO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG4gICAgICAudGV4dF9sYmwge1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1saWdodC1ibGFjay1jb2xvcik7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcImZpdm8tcmVndWxhclwiO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5zdG9yZV9kaXYge1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgcGFkZGluZzogMTBweCAwcHggMTBweCAxNnB4O1xuICAgIC5wcm9kdWN0X2RpdiB7XG4gICAgICB3aWR0aDogMTQ1cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgICAgIHBhZGRpbmc6IDEwcHggN3B4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgLm5ld19kaXYge1xuICAgICAgICB3aWR0aDogNTFweDtcbiAgICAgICAgaGVpZ2h0OiAxN3B4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbi1jb2xvcik7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgLm5ld19wIHtcbiAgICAgICAgICBmb250LXNpemU6IDhweDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zLU1lZGl1bVwiO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLnNpbWdfZGl2IHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiA0NXB4IDBweCAyMHB4IDBweDtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDExNXB4O1xuICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBvYmplY3QtZml0OiBzY2FsZS1kb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5uYW1lIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0tbGlnaHQtYmxhY2stY29sb3IpO1xuICAgICAgICBmb250LWZhbWlseTogXCJmaXZvLXJlZ3VsYXJcIjtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICAub3JnYW5pY19kaXYge1xuICAgICAgICBwYWRkaW5nOiA1cHggMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAuZG90X2RpdiB7XG4gICAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICAgICAgd2lkdGg6IDVweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4tY29sb3IpO1xuICAgICAgICAgIG1hcmdpbjogMHB4IDVweDtcbiAgICAgICAgfVxuICAgICAgICAub3JfbGJsIHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiZml2by1yZWd1bGFyXCI7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuYXdheV9sYmwge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcImZpdm8tcmVndWxhclwiO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5zdG9yZV9kaXY6Oi13ZWJraXQtc2Nyb2xsYmFyLFxuICAuY2F0ZWdvcmllc19kaXY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5tb25leV9vZmZlciB7XG4gICAgaGVpZ2h0OiAxMDdweDtcbiAgICBtYXJnaW46IDE1cHggMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyZWVuLWNvbG9yKTtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAuZGV0YWlsX2RpdiB7XG4gICAgICB3aWR0aDogNjQlO1xuICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIH1cblxuICAgIC5kaXNjb3VudCB7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBmb250LWZhbWlseTogXCJmaXZvLW1lZGl1bVwiO1xuICAgICAgY29sb3I6IHZhcigtLWNvdXBvbl9ncmVlbik7XG4gICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIH1cbiAgICAudGV4dF9sYmwge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgY29sb3I6IHZhcigtLWNvdXBvbl9ncmVlbik7XG4gICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICBmb250LWZhbWlseTogXCJmaXZvLW1lZGl1bVwiO1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgfVxuICAuY2F0ZWdvcmllc19kaXYge1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgcGFkZGluZzogMTBweCAwcHggMTBweCAxNnB4O1xuXG4gICAgLnByb2R1Y3RfZGl2IHtcbiAgICAgIHdpZHRoOiAxNDVweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgICAgcGFkZGluZzogMjVweCAwcHggMTBweCAwcHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgICBpbWcge1xuICAgICAgICBoZWlnaHQ6IDEyM3B4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgb2JqZWN0LWZpdDogc2NhbGUtZG93bjtcbiAgICAgIH1cbiAgICAgIC5uYW1lIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1saWdodC1ibGFjay1jb2xvcik7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcImZpdm8tcmVndWxhclwiO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gICAgICAgIHBhZGRpbmc6IDBweCA0cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJpb24taGVhZGVyIHtcbiAgcGFkZGluZzogMTBweCA1cHggM3B4IDE0cHg7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIC5sb2NhdGlvbkNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciAubG9jYXRpb25Db250ZW50IGltZyB7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciAubG9jYXRpb25Db250ZW50IC50ZXh0Q29udGVudCAubG9jYXRpb24ge1xuICBmb250LWZhbWlseTogUG9wcGlucy1NZWRpdW07XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbjogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrQmx1ZSk7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIC5sb2NhdGlvbkNvbnRlbnQgLnRleHRDb250ZW50IC5sb2NhdGlvbiBpbWcge1xuICBtYXJnaW4tbGVmdDogNnB4O1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciAubG9jYXRpb25Db250ZW50IC50ZXh0Q29udGVudCAuYWRkcmVzcyB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrQmx1ZSk7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zLU1lZGl1bTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luLXRvcDogNHB4O1xuICBsaW5lLWhlaWdodDogMTVweDtcbn1cbmlvbi1oZWFkZXIgLm1vZGVfYnRuIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrQmx1ZSk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIjtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuaW9uLWhlYWRlciAuYWN0aXZlIHtcbiAgY29sb3I6IHZhcigtLWdyZWVuLWNvbG9yKTtcbn1cblxuLmZvb2RfY29udGVudCAubWFpbl9kaXYgaW9uLXNlYXJjaGJhciB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4uZm9vZF9jb250ZW50IC5tYWluX2RpdiAuZmlsdGVyX3Age1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtTWVkaXVtXCI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya0JsdWUpO1xufVxuLmZvb2RfY29udGVudCAubWFpbl9kaXYgLmZpbHRlcl9wIHNwYW4gaW1nIHtcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XG59XG4uZm9vZF9jb250ZW50IC5tYWluX2RpdiAub2ZmZXJfZGl2IHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xufVxuLmZvb2RfY29udGVudCAubWFpbl9kaXYgLm9mZmVyX2RpdiAuaW1nX2RpdiB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmZvb2RfY29udGVudCAubWFpbl9kaXYgLm9mZmVyX2RpdiAuaW1nX2RpdiBpbWcge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiAxMzVweDtcbiAgaGVpZ2h0OiAxNTBweDtcbn1cbi5mb29kX2NvbnRlbnQgLm1haW5fZGl2IC5vZmZlcl9kaXYgLmltZ19kaXYgLm9mZmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA0NXB4O1xuICBoZWlnaHQ6IDE0cHg7XG4gIHRvcDogMTBweDtcbiAgbGVmdDogNXB4O1xuICBmb250LXNpemU6IDlweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrQmx1ZSk7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtTWVkaXVtXCI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmZvb2RfY29udGVudCAubWFpbl9kaXYgLm9mZmVyX2RpdiAuaW1nX2RpdiAuZGlzY291bnRfcCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZzogNXB4IDdweCA1cHg7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNXB4IDVweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZm9vZF9jb250ZW50IC5tYWluX2RpdiAub2ZmZXJfZGl2Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uZm9vZF9jb250ZW50IC5tYWluX2RpdiAuZmVhdHVyZV9yb3cge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uZm9vZF9jb250ZW50IC5tYWluX2RpdiAuZmVhdHVyZV9yb3cgLmZpcnN0X2RpdiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuLmZvb2RfY29udGVudCAubWFpbl9kaXYgLmZlYXR1cmVfcm93IC5maXJzdF9kaXYgLmltZ19yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5mb29kX2NvbnRlbnQgLm1haW5fZGl2IC5mZWF0dXJlX3JvdyAuZmlyc3RfZGl2IC5kZXRhaWxfZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5mb29kX2NvbnRlbnQgLm1haW5fZGl2IC5mZWF0dXJlX3JvdyAuZmlyc3RfZGl2IC5kZXRhaWxfZGl2IC50aXR0bGUge1xuICBmb250LXNpemU6IDkuNXB4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zLVNlbWlCb2xkXCI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya0JsdWUpO1xuICB3aWR0aDogNjIlO1xuICBtYXJnaW46IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5mb29kX2NvbnRlbnQgLm1haW5fZGl2IC5mZWF0dXJlX3Jvdzo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmZvb2RfY29udGVudCAubWFpbl9kaXYgLmNhcmRfZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAxM3B4IDE2cHg7XG59XG4uZm9vZF9jb250ZW50IC5tYWluX2RpdiAuY2FyZF9kaXYgLmRpdl9pbWFnZSB7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG4uZm9vZF9jb250ZW50IC5tYWluX2RpdiAuY2FyZF9kaXYgLmRpdl9pbWFnZSBpbWcge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiA4N3B4O1xuICBoZWlnaHQ6IDc4cHg7XG59XG4uZm9vZF9jb250ZW50IC5tYWluX2RpdiAuY2FyZF9kaXYgLmRhdGFfZGl2IHtcbiAgd2lkdGg6IDcwJTtcbn1cbi5mb29kX2NvbnRlbnQgLm1haW5fZGl2IC5jYXJkX2RpdiAuZGF0YV9kaXYgLmJ0bl9kaXYge1xuICBmb250LXNpemU6IDguNXB4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zLU1lZGl1bVwiO1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1ncmVlbik7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHZhcigtLWlvbi1jb2xvci1ncmVlbik7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIC0tYm9yZGVyLXJhZGl1czogMnB4O1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG59XG4uZm9vZF9jb250ZW50IC5tYWluX2RpdiAuY2FyZF9kaXYgLmRhdGFfZGl2IC5idG5fZGl2LnRyZW5kaW5nIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZ29vZ2xlLWJ0bik7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHZhcigtLWlvbi1jb2xvci1nb29nbGUtYnRuKTtcbn1cbi5mb29kX2NvbnRlbnQgLm1haW5fZGl2IC5jYXJkX2RpdiAuZGF0YV9kaXYgLmJ0bl9jb2xvciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWJ0bi1jb2xvcik7XG59XG4uZm9vZF9jb250ZW50IC5tYWluX2RpdiAuY2FyZF9kaXYgLmRhdGFfZGl2IC5pdGVtIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtCbHVlKTtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1TZW1pQm9sZFwiO1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5mb29kX2NvbnRlbnQgLm1haW5fZGl2IC5jYXJkX2RpdiAuZGF0YV9kaXYgLnR5cGUge1xuICBmb250LXNpemU6IDEwLjVweDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1SZWd1bGFyXCI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2dyYXkpO1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDNweDtcbn1cbi5mb29kX2NvbnRlbnQgLm1haW5fZGl2IC5jYXJkX2RpdiAuZGF0YV9kaXYgLnBlcmNlbnQge1xuICBmb250LXNpemU6IDEwLjVweDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1ncmVlbik7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xufVxuLmZvb2RfY29udGVudCAubWFpbl9kaXYgLmNhcmRfZGl2IC5kYXRhX2RpdiAucGVyY2VudCBpb24taWNvbiB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuLmZvb2RfY29udGVudCAubWFpbl9kaXYgLmNhcmRfZGl2IC5kYXRhX2RpdiAucmF0ZSB7XG4gIGZvbnQtc2l6ZTogMTAuNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zLVJlZ3VsYXJcIjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrZ3JheSk7XG59XG4uZm9vZF9jb250ZW50IC5tYWluX2RpdiAuY2FyZF9kaXYgLmRhdGFfZGl2IC5yYXRlIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci15ZWxsb3cpO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbi5mb29kX2NvbnRlbnQgLm1haW5fZGl2IC5jYXJkX2RpdiAuZGF0YV9kaXYgLnJhdGUgc3BhbiB7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuLmZvb2RfY29udGVudCAubWFpbl9kaXYgLmNhcmRfZGl2IC5kYXRhX2RpdiAucmF0ZSBzcGFuIC5wb2ludCB7XG4gIGhlaWdodDogNnB4O1xuICB3aWR0aDogNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZ3JlZW4pO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi1yaWdodDogM3B4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG4uZm9vZF9jb250ZW50IC5tYWluX2RpdiAuY2FyZF9kaXYgLmRhdGFfZGl2IC5yYXRlIC5wb2ludF9zcGFuIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5mb29kX2NvbnRlbnQgLm1haW5fZGl2IC5zbGlkZXJfZGl2IHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xufVxuLmZvb2RfY29udGVudCAubWFpbl9kaXYgLnNsaWRlcl9kaXYgLm1lbnVfZGl2IHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZm9vZF9jb250ZW50IC5tYWluX2RpdiAuc2xpZGVyX2RpdiAubWVudV9kaXYgaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogNzhweDtcbn1cbi5mb29kX2NvbnRlbnQgLm1haW5fZGl2IC5zbGlkZXJfZGl2IC5tZW51X2RpdiAuaW1nX3R5cGUge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtTWVkaXVtXCI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDVweCA1cHg7XG4gIHBhZGRpbmc6IDVweCA3cHg7XG59XG4uZm9vZF9jb250ZW50IC5tYWluX2RpdiAuc2xpZGVyX2RpdiAucG9ja2V0X2Rpdl9pbWcgaW1nIHtcbiAgd2lkdGg6IDEzNXB4O1xuICBoZWlnaHQ6IDE1MHB4O1xufVxuLmZvb2RfY29udGVudCAubWFpbl9kaXYgLnNsaWRlcl9kaXY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5mb29kX2NvbnRlbnQgLm1haW5fZGl2IC5oZWFkaW5nIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zLU1lZGl1bVwiO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtCbHVlKTtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG59XG5cbi5zd2lwZXItc2xpZGUtbmV4dCxcbi5zd2lwZXItc2xpZGUtbmV4dCB7XG4gIGhlaWdodDogMTUwcHggIWltcG9ydGFudDtcbiAgb3BhY2l0eTogMC4zO1xufVxuLnN3aXBlci1zbGlkZS1uZXh0IGltZyxcbi5zd2lwZXItc2xpZGUtbmV4dCBpbWcge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxNTBweCAhaW1wb3J0YW50O1xuICBtYXgtaGVpZ2h0OiAxNTBweCAhaW1wb3J0YW50O1xuICBvYmplY3QtZml0OiBmaWxsICFpbXBvcnRhbnQ7XG59XG5cbi5zd2lwZXItc2xpZGUtYWN0aXZlIHtcbiAgaGVpZ2h0OiAxNzBweDtcbn1cbi5zd2lwZXItc2xpZGUtYWN0aXZlIGltZyB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDE3MHB4ICFpbXBvcnRhbnQ7XG4gIG1heC1oZWlnaHQ6IDE3MHB4ICFpbXBvcnRhbnQ7XG4gIG9iamVjdC1maXQ6IGZpbGwgIWltcG9ydGFudDtcbn1cblxuaW9uLXNsaWRlcyB7XG4gIGhlaWdodDogMTcwcHg7XG4gIG1hcmdpbi10b3A6IDE5cHg7XG4gIG1hcmdpbi1ib3R0b206IDI2cHg7XG59XG5pb24tc2xpZGVzIGlvbi1zbGlkZSB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHRleHQtYWxpZ246IGluaGVyaXQ7XG59XG5pb24tc2xpZGVzIGlvbi1zbGlkZSAuc3dpcGVyLXNsaWRlIGltZyB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDE3MHB4ICFpbXBvcnRhbnQ7XG4gIG1heC1oZWlnaHQ6IDE3MHB4ICFpbXBvcnRhbnQ7XG4gIG9iamVjdC1maXQ6IGZpbGwgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuaW9uLXNsaWRlcyBpb24tc2xpZGUgaDIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDA0ZDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIG1hcmdpbjogMDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnN3aXBlci1zbGlkZTpudGgtY2hpbGQoOG4rMSkge1xuICBiYWNrZ3JvdW5kOiAjMDE5ZThiO1xufVxuXG4uc3dpcGVyLXNsaWRlOm50aC1jaGlsZCg4bisyKSB7XG4gIGJhY2tncm91bmQ6ICMyZmFhZjc7XG59XG5cbi5zd2lwZXItc2xpZGU6bnRoLWNoaWxkKDhuKzMpIHtcbiAgYmFja2dyb3VuZDogI2ZkNmM1Nztcbn1cblxuLnN3aXBlci1zbGlkZTpudGgtY2hpbGQoOG4rNCkge1xuICBiYWNrZ3JvdW5kOiAjODFkNGY5O1xufVxuXG4uc3dpcGVyLXNsaWRlOm50aC1jaGlsZCg4bis1KSB7XG4gIGJhY2tncm91bmQ6ICNhYzkyZWM7XG59XG5cbi5zd2lwZXItc2xpZGU6bnRoLWNoaWxkKDhuKzYpIHtcbiAgYmFja2dyb3VuZDogI2EwZDQ2ODtcbn1cblxuLnN3aXBlci1zbGlkZTpudGgtY2hpbGQoOG4rNykge1xuICBiYWNrZ3JvdW5kOiAjZTNiZDM2O1xufVxuXG4uc3dpcGVyLXNsaWRlOm50aC1jaGlsZCg4bis4KSB7XG4gIGJhY2tncm91bmQ6ICM1MTkxZmE7XG59XG5cbi5ncm9jZXJ5X2NvbnRlbnQgLm1haW5fbGJsIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogdmFyKC0tbGlnaHQtYmxhY2stY29sb3IpO1xuICBmb250LWZhbWlseTogXCJmaXZvLXJlZ3VsYXJcIjtcbiAgcGFkZGluZzogMHB4IDE2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5ncm9jZXJ5X2NvbnRlbnQgLm1haW5fbGJsIC5tb3JlX2J0biB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIC0tY29sb3I6IHZhcigtLWdyZWVuLWNvbG9yKTtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuLmdyb2NlcnlfY29udGVudCAudHJlbmRpbmdfZGl2IHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIHBhZGRpbmc6IDEwcHggMHB4IDEwcHggMTZweDtcbn1cbi5ncm9jZXJ5X2NvbnRlbnQgLnRyZW5kaW5nX2RpdiAucHJvZHVjdF9kaXYge1xuICB3aWR0aDogMTQ1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIHBhZGRpbmc6IDEwcHggN3B4O1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG59XG4uZ3JvY2VyeV9jb250ZW50IC50cmVuZGluZ19kaXYgLnByb2R1Y3RfZGl2IC5pbWdfZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHggMHB4IDIwcHggMHB4O1xufVxuLmdyb2NlcnlfY29udGVudCAudHJlbmRpbmdfZGl2IC5wcm9kdWN0X2RpdiAuaW1nX2RpdiBpbWcge1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogODBweDtcbn1cbi5ncm9jZXJ5X2NvbnRlbnQgLnRyZW5kaW5nX2RpdiAucHJvZHVjdF9kaXYgLm5hbWUge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBcImZpdm8tcmVndWxhclwiO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtCbHVlKTtcbiAgbWFyZ2luOiAwO1xufVxuLmdyb2NlcnlfY29udGVudCAudHJlbmRpbmdfZGl2IC5wcm9kdWN0X2RpdiAucXVudHkge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiB2YXIoLS1ib3JkZXItY29sb3IpO1xuICBmb250LWZhbWlseTogXCJmaXZvLXJlZ3VsYXJcIjtcbiAgbWFyZ2luOiA0cHggMHB4O1xufVxuLmdyb2NlcnlfY29udGVudCAudHJlbmRpbmdfZGl2IC5wcm9kdWN0X2RpdiAucHJpY2Uge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS1ncmVlbi1jb2xvcik7XG4gIGZvbnQtZmFtaWx5OiBcImZpdm8tcmVndWxhclwiO1xuICBtYXJnaW46IDA7XG59XG4uZ3JvY2VyeV9jb250ZW50IC50cmVuZGluZ19kaXYgLmJ0bl9kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uZ3JvY2VyeV9jb250ZW50IC50cmVuZGluZ19kaXYgLmJ0bl9kaXYgLmFkZF9idG4ge1xuICBoZWlnaHQ6IDE1cHg7XG4gIHdpZHRoOiAxNXB4O1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYXJrQmx1ZSk7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHZhcigtLWlvbi1jb2xvci1kYXJrQmx1ZSk7XG59XG4uZ3JvY2VyeV9jb250ZW50IC50cmVuZGluZ19kaXYgLmJ0bl9kaXYgLmFkZF9idG4gaW9uLWljb24ge1xuICBoZWlnaHQ6IDlweDtcbiAgd2lkdGg6IDlweDtcbn1cbi5ncm9jZXJ5X2NvbnRlbnQgLnRyZW5kaW5nX2RpdiAuYnRuX2RpdiAucXR5X3Age1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS1ib3JkZXItY29sb3IpO1xuICBmb250LWZhbWlseTogXCJmaXZvLXJlZ3VsYXJcIjtcbiAgbWFyZ2luOiAwIDVweDtcbiAgcGFkZGluZy10b3A6IDJweDtcbn1cbi5ncm9jZXJ5X2NvbnRlbnQgLnRyZW5kaW5nX2RpdiAuYnRuX2RpdiAucXR5X2RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uZ3JvY2VyeV9jb250ZW50IC50cmVuZGluZ19kaXY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5ncm9jZXJ5X2NvbnRlbnQgLm9mZmVyX2RpdiB7XG4gIGhlaWdodDogMTA3cHg7XG4gIG1hcmdpbjogMTVweCAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyZWVuLWNvbG9yKTtcbiAgcGFkZGluZzogMTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmdyb2NlcnlfY29udGVudCAub2ZmZXJfZGl2IGltZyB7XG4gIHdpZHRoOiAxNTJweDtcbiAgaGVpZ2h0OiAzOHB4O1xufVxuLmdyb2NlcnlfY29udGVudCAub2ZmZXJfZGl2IC5kZXRhaWxfZGl2IHtcbiAgdGV4dC1hbGlnbjogZW5kO1xufVxuLmdyb2NlcnlfY29udGVudCAub2ZmZXJfZGl2IC5kZXRhaWxfZGl2IC5kaXNjb3VudCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWJsYWNrLWNvbG9yKTtcbiAgZm9udC1mYW1pbHk6IFwiZml2by1tZWRpdW1cIjtcbiAgbWFyZ2luOiAwO1xufVxuLmdyb2NlcnlfY29udGVudCAub2ZmZXJfZGl2IC5kZXRhaWxfZGl2IC50ZXh0X2xibCB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWJsYWNrLWNvbG9yKTtcbiAgZm9udC1mYW1pbHk6IFwiZml2by1yZWd1bGFyXCI7XG4gIG1hcmdpbjogMDtcbn1cbi5ncm9jZXJ5X2NvbnRlbnQgLnN0b3JlX2RpdiB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBwYWRkaW5nOiAxMHB4IDBweCAxMHB4IDE2cHg7XG59XG4uZ3JvY2VyeV9jb250ZW50IC5zdG9yZV9kaXYgLnByb2R1Y3RfZGl2IHtcbiAgd2lkdGg6IDE0NXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICBwYWRkaW5nOiAxMHB4IDdweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZ3JvY2VyeV9jb250ZW50IC5zdG9yZV9kaXYgLnByb2R1Y3RfZGl2IC5uZXdfZGl2IHtcbiAgd2lkdGg6IDUxcHg7XG4gIGhlaWdodDogMTdweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4tY29sb3IpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgdG9wOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG4uZ3JvY2VyeV9jb250ZW50IC5zdG9yZV9kaXYgLnByb2R1Y3RfZGl2IC5uZXdfZGl2IC5uZXdfcCB7XG4gIGZvbnQtc2l6ZTogOHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIjtcbiAgbWFyZ2luOiAwO1xufVxuLmdyb2NlcnlfY29udGVudCAuc3RvcmVfZGl2IC5wcm9kdWN0X2RpdiAuc2ltZ19kaXYge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDQ1cHggMHB4IDIwcHggMHB4O1xufVxuLmdyb2NlcnlfY29udGVudCAuc3RvcmVfZGl2IC5wcm9kdWN0X2RpdiAuc2ltZ19kaXYgaW1nIHtcbiAgbWF4LXdpZHRoOiAxMTVweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgb2JqZWN0LWZpdDogc2NhbGUtZG93bjtcbn1cbi5ncm9jZXJ5X2NvbnRlbnQgLnN0b3JlX2RpdiAucHJvZHVjdF9kaXYgLm5hbWUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiB2YXIoLS1saWdodC1ibGFjay1jb2xvcik7XG4gIGZvbnQtZmFtaWx5OiBcImZpdm8tcmVndWxhclwiO1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5ncm9jZXJ5X2NvbnRlbnQgLnN0b3JlX2RpdiAucHJvZHVjdF9kaXYgLm9yZ2FuaWNfZGl2IHtcbiAgcGFkZGluZzogNXB4IDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5ncm9jZXJ5X2NvbnRlbnQgLnN0b3JlX2RpdiAucHJvZHVjdF9kaXYgLm9yZ2FuaWNfZGl2IC5kb3RfZGl2IHtcbiAgaGVpZ2h0OiA1cHg7XG4gIHdpZHRoOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4tY29sb3IpO1xuICBtYXJnaW46IDBweCA1cHg7XG59XG4uZ3JvY2VyeV9jb250ZW50IC5zdG9yZV9kaXYgLnByb2R1Y3RfZGl2IC5vcmdhbmljX2RpdiAub3JfbGJsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgZm9udC1mYW1pbHk6IFwiZml2by1yZWd1bGFyXCI7XG4gIG1hcmdpbjogMDtcbn1cbi5ncm9jZXJ5X2NvbnRlbnQgLnN0b3JlX2RpdiAucHJvZHVjdF9kaXYgLmF3YXlfbGJsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogXCJmaXZvLXJlZ3VsYXJcIjtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmdyb2NlcnlfY29udGVudCAuc3RvcmVfZGl2Ojotd2Via2l0LXNjcm9sbGJhcixcbi5ncm9jZXJ5X2NvbnRlbnQgLmNhdGVnb3JpZXNfZGl2Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uZ3JvY2VyeV9jb250ZW50IC5tb25leV9vZmZlciB7XG4gIGhlaWdodDogMTA3cHg7XG4gIG1hcmdpbjogMTVweCAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyZWVuLWNvbG9yKTtcbiAgcGFkZGluZzogMTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uZ3JvY2VyeV9jb250ZW50IC5tb25leV9vZmZlciAuZGV0YWlsX2RpdiB7XG4gIHdpZHRoOiA2NCU7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cbi5ncm9jZXJ5X2NvbnRlbnQgLm1vbmV5X29mZmVyIC5kaXNjb3VudCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1mYW1pbHk6IFwiZml2by1tZWRpdW1cIjtcbiAgY29sb3I6IHZhcigtLWNvdXBvbl9ncmVlbik7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5ncm9jZXJ5X2NvbnRlbnQgLm1vbmV5X29mZmVyIC50ZXh0X2xibCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHZhcigtLWNvdXBvbl9ncmVlbik7XG4gIG9wYWNpdHk6IDAuNjtcbiAgZm9udC1mYW1pbHk6IFwiZml2by1tZWRpdW1cIjtcbiAgbWFyZ2luOiAwO1xufVxuLmdyb2NlcnlfY29udGVudCAuY2F0ZWdvcmllc19kaXYge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgcGFkZGluZzogMTBweCAwcHggMTBweCAxNnB4O1xufVxuLmdyb2NlcnlfY29udGVudCAuY2F0ZWdvcmllc19kaXYgLnByb2R1Y3RfZGl2IHtcbiAgd2lkdGg6IDE0NXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICBwYWRkaW5nOiAyNXB4IDBweCAxMHB4IDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG59XG4uZ3JvY2VyeV9jb250ZW50IC5jYXRlZ29yaWVzX2RpdiAucHJvZHVjdF9kaXYgaW1nIHtcbiAgaGVpZ2h0OiAxMjNweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG9iamVjdC1maXQ6IHNjYWxlLWRvd247XG59XG4uZ3JvY2VyeV9jb250ZW50IC5jYXRlZ29yaWVzX2RpdiAucHJvZHVjdF9kaXYgLm5hbWUge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWJsYWNrLWNvbG9yKTtcbiAgZm9udC1mYW1pbHk6IFwiZml2by1yZWd1bGFyXCI7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbiAgcGFkZGluZzogMHB4IDRweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_grocery_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../service/grocery.service */ "./src/app/service/grocery.service.ts");
/* harmony import */ var _service_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/util.service */ "./src/app/service/util.service.ts");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _filter_filter_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../filter/filter.page */ "./src/app/pages/filter/filter.page.ts");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");










let HomePage = class HomePage {
    constructor(menu, modalController, navCtrl, nativeGeocoder, api, util, gpi, geolocation) {
        this.menu = menu;
        this.modalController = modalController;
        this.navCtrl = navCtrl;
        this.nativeGeocoder = nativeGeocoder;
        this.api = api;
        this.util = util;
        this.gpi = gpi;
        this.geolocation = geolocation;
        this.userAddress = {};
        this.err = {};
        this.isfood = true;
        this.sellProduct = 0;
        this.staticData = {
            feature: [
                {
                    image: "assets/image/diamond.svg",
                    text: "Most Popular",
                    type: "popular",
                },
                {
                    image: "assets/image/near.svg",
                    text: "Great Offers",
                },
                {
                    image: "assets/image/express.svg",
                    text: "Pure Veg Places",
                    type: "pureveg",
                },
                {
                    image: "assets/image/pocket.svg",
                    text: "Pocket Friendly",
                    type: "lowcost",
                },
                {
                    image: "assets/image/shop.svg",
                    text: "Nearest Me",
                    type: "nearest",
                },
            ],
        };
        this.slideOpts = {
            slidesPerView: "auto",
            centeredSlides: true,
            centeredSlidesBounds: true,
            spaceBetween: 20,
            initialSlide: 1,
            autoplay: {
                delay: 3000,
            },
            slideNextClass: "swiper-slide-next",
            slidePrevClass: "swiper-slide-next",
            slideActiveClass: "swiper-slide-active",
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        };
        this.data = {};
        this.grocery = {};
        this.btnType = "Exclusive";
        this.trending = [
            {
                name: "Real Fruit Juice ,Litchi, (Pack of 2)",
                img: "../../../assets/image/real_juice.png",
                qty: "1Ltr",
                price: "$15.50",
            },
            {
                name: "Real Fruit Juice ,Litchi, (Pack of 2)",
                img: "../../../assets/image/real_juice.png",
                qty: "1Ltr",
                price: "$15.50",
            },
            {
                name: "Real Fruit Juice ,Litchi, (Pack of 2)",
                img: "../../../assets/image/real_juice.png",
                qty: "1Ltr",
                price: "$15.50",
            },
        ];
        this.innerWidth = window.innerWidth;
        this.banners = Array();
        this.menu.enable(true);
        this.api.getData("keySetting").subscribe((res) => {
            this.sellProduct = res.data.sell_product;
            if (this.sellProduct == 2) {
                this.isfood = false;
            }
            this.initData();
        }, (err) => {
            console.log("err", err);
        });
    }
    initData() {
        this.getAdvertisingBanner();
        this.util.startLoad();
        this.api.getDataWithToken("home").subscribe((res) => {
            if (res.success) {
                this.data = res.data;
                this.currency = this.api.currency;
                this.getGrocery();
            }
        }, (err) => {
            this.util.dismissLoader();
            this.err = err;
        });
    }
    getAdvertisingBanner() {
        this.api.getData("banner").subscribe((res) => {
            if (res.success) {
                this.banners = res.data;
            }
        });
    }
    ionViewWillEnter() {
        if (localStorage.getItem("isaddress") != "false") {
            this.util.startLoad();
            this.api
                .getDataWithToken("getAddress/" + localStorage.getItem("isaddress"))
                .subscribe((res) => {
                if (res.success) {
                    this.userAddress = res.data;
                    this.util.dismissLoader();
                }
            }, (err) => {
                this.err = err;
                this.util.dismissLoader();
            });
        }
        else {
            this.util.startLoad();
            this.geolocation
                .getCurrentPosition()
                .then((resp) => {
                resp.coords.latitude;
                resp.coords.longitude;
                this.userAddress.lat = resp.coords.latitude;
                this.userAddress.lang = resp.coords.longitude;
                const options = {
                    useLocale: true,
                    maxResults: 5,
                };
                this.nativeGeocoder
                    .reverseGeocode(resp.coords.latitude, resp.coords.longitude, options)
                    .then((result) => {
                    this.util.dismissLoader();
                    this.userAddress.address_type = "Current Location";
                    this.userAddress.soc_name = result[0].subLocality;
                    this.userAddress.street = result[0].thoroughfare;
                    this.userAddress.city = result[0].locality;
                    this.userAddress.zipcode = result[0].postalCode;
                })
                    .catch((error) => console.log(error));
            })
                .catch((error) => {
                this.util.dismissLoader();
            });
        }
    }
    presentModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _filter_filter_page__WEBPACK_IMPORTED_MODULE_8__["FilterPage"],
                cssClass: "filterModal",
                backdropDismiss: true,
            });
            modal.onDidDismiss().then((res) => {
                if (res["data"] != undefined) {
                    let filetype;
                    res.data.forEach((element) => {
                        if (element.checked == true) {
                            filetype = element.name;
                        }
                    });
                    if (filetype == "Cost High to Low") {
                        this.data.shop.sort((a, b) => {
                            if (a.avarage_plate_price > b.avarage_plate_price) {
                                return -1;
                            }
                            if (a.avarage_plate_price < b.avarage_plate_price) {
                                return 1;
                            }
                            return 0;
                        });
                    }
                    else if (filetype == "Top Rated" || filetype == "Most Popular") {
                        this.data.shop.sort((a, b) => {
                            if (a.rate > b.rate) {
                                return -1;
                            }
                            if (a.rate < b.rate) {
                                return 1;
                            }
                            return 0;
                        });
                    }
                    else if (filetype == "Cost Low to High") {
                        this.data.shop.sort((a, b) => {
                            if (a.avarage_plate_price < b.avarage_plate_price) {
                                return -1;
                            }
                            if (a.avarage_plate_price > b.avarage_plate_price) {
                                return 1;
                            }
                            return 0;
                        });
                    }
                    else if (filetype == "Open Now") {
                        this.currentTime = moment__WEBPACK_IMPORTED_MODULE_5__().format("HH:mm");
                        this.data.shop = this.data.shop.filter((a) => {
                            a.open_time = moment__WEBPACK_IMPORTED_MODULE_5__("2019-07-19 " + a.open_time).format("HH:mm");
                            a.close_time = moment__WEBPACK_IMPORTED_MODULE_5__("2019-07-19 " + a.close_time).format("HH:mm");
                            if (this.currentTime >= a.open_time &&
                                this.currentTime <= a.close_time) {
                                return a;
                            }
                        });
                    }
                    else {
                        if (localStorage.getItem("isaddress") != "false") {
                            this.api
                                .getDataWithToken("getAddress/" + localStorage.getItem("isaddress"))
                                .subscribe((res) => {
                                if (res.success) {
                                    this.Address =
                                        res.data.soc_name +
                                            " " +
                                            res.data.street +
                                            " " +
                                            res.data.city +
                                            " " +
                                            res.data.zipcode;
                                    const options = {
                                        useLocale: true,
                                        maxResults: 5,
                                    };
                                    this.nativeGeocoder
                                        .forwardGeocode(this.Address, options)
                                        .then((result) => {
                                        this.data.shop.forEach((element) => {
                                            element.distance = this.distance(result[0].latitude, result[0].longitude, element.latitude, element.longitude, "K");
                                        });
                                        this.data.shop.sort((a, b) => {
                                            if (a.distance < b.distance) {
                                                return -1;
                                            }
                                            if (a.distance > b.distance) {
                                                return 1;
                                            }
                                        });
                                    })
                                        .catch((error) => console.log(error));
                                }
                            });
                        }
                        else {
                            const options = {
                                useLocale: true,
                                maxResults: 5,
                            };
                            this.nativeGeocoder
                                .forwardGeocode(this.userAddress, options)
                                .then((result) => {
                                this.data.shop.forEach((element) => {
                                    element.distance = this.distance(result[0].latitude, result[0].longitude, element.latitude, element.longitude, "K");
                                });
                                this.data.shop.sort((a, b) => {
                                    if (a.distance < b.distance) {
                                        return -1;
                                    }
                                    if (a.distance > b.distance) {
                                        return 1;
                                    }
                                });
                            })
                                .catch((error) => console.log(error));
                        }
                    }
                }
            });
            return yield modal.present();
        });
    }
    detail() {
        this.navCtrl.navigateForward(["restaurant-detail"]);
    }
    resturantDetail(id) {
        this.api.detailId = id;
        this.navCtrl.navigateForward(["restaurant-detail"]);
    }
    distance(lat1, lon1, lat2, lon2, unit) {
        if (lat1 == lat2 && lon1 == lon2) {
            return 0;
        }
        else {
            const radlat1 = (Math.PI * lat1) / 180;
            const radlat2 = (Math.PI * lat2) / 180;
            const theta = lon1 - lon2;
            const radtheta = (Math.PI * theta) / 180;
            let dist = Math.sin(radlat1) * Math.sin(radlat2) +
                Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
            if (dist > 1) {
                dist = 1;
            }
            dist = Math.acos(dist);
            dist = (dist * 180) / Math.PI;
            dist = dist * 60 * 1.1515;
            if (unit == "K") {
                dist = dist * 1.609344;
            }
            if (unit == "N") {
                dist = dist * 0.8684;
            }
            return dist;
        }
    }
    feature(type) {
        if (type) {
            this.api.filterType = type;
            this.navCtrl.navigateForward("/category");
        }
        else {
            this.navCtrl.navigateForward("/promocode/menu");
        }
    }
    categoryData(id) {
        this.navCtrl.navigateForward("/category/" + id);
    }
    getGrocery() {
        this.api.getDataWithToken("groceryShop").subscribe((res) => {
            if (res.success) {
                this.grocery.Store = res.data.shop;
                this.grocery.coupon = res.data.coupon;
                this.api.getDataWithToken("groceryCategory").subscribe((res) => {
                    if (res.success) {
                        this.util.dismissLoader();
                        this.grocery.category = res.data;
                        this.grocery.Store.forEach((element) => {
                            element.away = Number(this.distance(this.userAddress.lat, this.userAddress.lang, element.latitude, element.longitude, "K").toFixed(2));
                        });
                    }
                }, (err) => {
                    this.util.dismissLoader();
                    this.err = err;
                });
                this.util.dismissLoader();
            }
        }, (err) => {
            this.util.dismissLoader();
            this.err = err;
        });
    }
    storeList() {
        this.navCtrl.navigateForward("store");
    }
    storeDetail(id) {
        this.gpi.storeID = id;
        this.navCtrl.navigateForward("/store-detail");
    }
    subcategory(id) {
        this.gpi.catId = id;
        this.navCtrl.navigateForward("store");
    }
    getCategory() {
        this.navCtrl.navigateForward("/grocery-category");
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"] },
    { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_6__["NativeGeocoder"] },
    { type: _service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _service_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] },
    { type: _service_grocery_service__WEBPACK_IMPORTED_MODULE_1__["GroceryService"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__["Geolocation"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: "app-home",
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["MenuController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"],
        _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_6__["NativeGeocoder"],
        _service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
        _service_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"],
        _service_grocery_service__WEBPACK_IMPORTED_MODULE_1__["GroceryService"],
        _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__["Geolocation"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module-es2015.js.map