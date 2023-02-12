(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-page/login-page.component */ "./src/app/login-page/login-page.component.ts");
/* harmony import */ var _shared_layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/layouts/auth-layout/auth-layout.component */ "./src/app/shared/layouts/auth-layout/auth-layout.component.ts");
/* harmony import */ var _register_page_register_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register-page/register-page.component */ "./src/app/register-page/register-page.component.ts");
/* harmony import */ var _shared_layouts_site_layout_site_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/layouts/site-layout/site-layout.component */ "./src/app/shared/layouts/site-layout/site-layout.component.ts");
/* harmony import */ var _shared_classes_authguard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/classes/authguard */ "./src/app/shared/classes/authguard.ts");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main-page/main-page.component */ "./src/app/main-page/main-page.component.ts");
/* harmony import */ var _shoping_page_shoping_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shoping-page/shoping-page.component */ "./src/app/shoping-page/shoping-page.component.ts");











const routes = [
    {
        path: '', component: _shared_layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_3__["AuthLayoutComponent"], children: [
            { path: '', redirectTo: '/login', pathMatch: 'full' },
            { path: 'login', component: _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_2__["LoginPageComponent"] },
            { path: 'register', component: _register_page_register_page_component__WEBPACK_IMPORTED_MODULE_4__["RegisterPageComponent"] },
        ]
    },
    {
        path: '', component: _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_7__["MainPageComponent"], canActivate: [_shared_classes_authguard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]], children: [
            { path: 'main', component: _shared_layouts_site_layout_site_layout_component__WEBPACK_IMPORTED_MODULE_5__["SiteLayoutComponent"] },
            { path: 'order', component: _shoping_page_shoping_page_component__WEBPACK_IMPORTED_MODULE_8__["ShopingPageComponent"] },
        ]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_layouts_servises_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/layouts/servises/services */ "./src/app/shared/layouts/servises/services.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor(auth) {
        this.auth = auth;
    }
    ngOnInit() {
        const correntToken = localStorage.getItem('auth-token');
        if (correntToken !== null) {
            this.auth.setToken(correntToken);
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_layouts_servises_services__WEBPACK_IMPORTED_MODULE_1__["AuthServices"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _shared_layouts_servises_services__WEBPACK_IMPORTED_MODULE_1__["AuthServices"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-page/login-page.component */ "./src/app/login-page/login-page.component.ts");
/* harmony import */ var _shared_layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/layouts/auth-layout/auth-layout.component */ "./src/app/shared/layouts/auth-layout/auth-layout.component.ts");
/* harmony import */ var _shared_layouts_site_layout_site_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/layouts/site-layout/site-layout.component */ "./src/app/shared/layouts/site-layout/site-layout.component.ts");
/* harmony import */ var _register_page_register_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register-page/register-page.component */ "./src/app/register-page/register-page.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./main-page/main-page.component */ "./src/app/main-page/main-page.component.ts");
/* harmony import */ var _editor_pic_editor_pic_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./editor-pic/editor-pic.module */ "./src/app/editor-pic/editor-pic.module.ts");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-color-picker */ "./node_modules/ngx-color-picker/__ivy_ngcc__/fesm2015/ngx-color-picker.js");
/* harmony import */ var _side_design_side_design_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./side-design/side-design.component */ "./src/app/side-design/side-design.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-owl-carousel-o */ "./node_modules/ngx-owl-carousel-o/__ivy_ngcc__/fesm2015/ngx-owl-carousel-o.js");
/* harmony import */ var _shared_pipes_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/pipes.pipe */ "./src/app/shared/pipes.pipe.ts");
/* harmony import */ var _shared_background_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/background.directive */ "./src/app/shared/background.directive.ts");
/* harmony import */ var _shared_layouts_site_layout_size_format_size_format_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/layouts/site-layout/size-format/size-format.component */ "./src/app/shared/layouts/site-layout/size-format/size-format.component.ts");
/* harmony import */ var _shoping_page_shoping_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shoping-page/shoping-page.component */ "./src/app/shoping-page/shoping-page.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _editor_pic_editor_pic_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./editor-pic/editor-pic.component */ "./src/app/editor-pic/editor-pic.component.ts");



// import {MatTooltipModule} from '@angular/material/tooltip';
// import { CarouselModule } from 'ngx-owl-carousel-o';
























// import { EditorPicComponent } from './editor-pic/editor-pic.component';
// import {MatSelectModule} from '@angular/material/select';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';  
// import { OverlayModule } from '@angular/cdk/overlay';
// import { SwiperModule } from 'swiper/angular';
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_editor_pic_editor_pic_module__WEBPACK_IMPORTED_MODULE_11__["EditorPicModule"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            ngx_color_picker__WEBPACK_IMPORTED_MODULE_12__["ColorPickerModule"],
            _editor_pic_editor_pic_module__WEBPACK_IMPORTED_MODULE_11__["EditorPicModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
            ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_15__["CarouselModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_5__["LoginPageComponent"],
        _shared_layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_6__["AuthLayoutComponent"],
        _shared_layouts_site_layout_site_layout_component__WEBPACK_IMPORTED_MODULE_7__["SiteLayoutComponent"],
        _register_page_register_page_component__WEBPACK_IMPORTED_MODULE_8__["RegisterPageComponent"],
        _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_10__["MainPageComponent"],
        _side_design_side_design_component__WEBPACK_IMPORTED_MODULE_13__["SideDesignComponent"],
        _shared_pipes_pipe__WEBPACK_IMPORTED_MODULE_16__["PipesPipe"],
        _shared_background_directive__WEBPACK_IMPORTED_MODULE_17__["BackgroundDirective"],
        _shared_layouts_site_layout_size_format_size_format_component__WEBPACK_IMPORTED_MODULE_18__["SizeFormatComponent"],
        _shoping_page_shoping_page_component__WEBPACK_IMPORTED_MODULE_19__["ShopingPageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
        ngx_color_picker__WEBPACK_IMPORTED_MODULE_12__["ColorPickerModule"],
        _editor_pic_editor_pic_module__WEBPACK_IMPORTED_MODULE_11__["EditorPicModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_15__["CarouselModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_5__["LoginPageComponent"],
                    _shared_layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_6__["AuthLayoutComponent"],
                    _shared_layouts_site_layout_site_layout_component__WEBPACK_IMPORTED_MODULE_7__["SiteLayoutComponent"],
                    _register_page_register_page_component__WEBPACK_IMPORTED_MODULE_8__["RegisterPageComponent"],
                    _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_10__["MainPageComponent"],
                    _side_design_side_design_component__WEBPACK_IMPORTED_MODULE_13__["SideDesignComponent"],
                    _shared_pipes_pipe__WEBPACK_IMPORTED_MODULE_16__["PipesPipe"],
                    _shared_background_directive__WEBPACK_IMPORTED_MODULE_17__["BackgroundDirective"],
                    _shared_layouts_site_layout_size_format_size_format_component__WEBPACK_IMPORTED_MODULE_18__["SizeFormatComponent"],
                    _shoping_page_shoping_page_component__WEBPACK_IMPORTED_MODULE_19__["ShopingPageComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                    ngx_color_picker__WEBPACK_IMPORTED_MODULE_12__["ColorPickerModule"],
                    _editor_pic_editor_pic_module__WEBPACK_IMPORTED_MODULE_11__["EditorPicModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
                    ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_15__["CarouselModule"],
                ],
                providers: [_editor_pic_editor_pic_module__WEBPACK_IMPORTED_MODULE_11__["EditorPicModule"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_shared_layouts_site_layout_site_layout_component__WEBPACK_IMPORTED_MODULE_7__["SiteLayoutComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_20__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgPluralCase"], _angular_router__WEBPACK_IMPORTED_MODULE_21__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_21__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_21__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_21__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_21__["ɵangular_packages_router_router_l"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectMultipleControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxRequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModelGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArrayName"], ngx_color_picker__WEBPACK_IMPORTED_MODULE_12__["ColorPickerDirective"], _editor_pic_editor_pic_component__WEBPACK_IMPORTED_MODULE_22__["EditorPicComponent"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_15__["CarouselComponent"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_15__["CarouselSlideDirective"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_15__["OwlRouterLinkDirective"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_15__["OwlRouterLinkWithHrefDirective"], _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
    _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_5__["LoginPageComponent"],
    _shared_layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_6__["AuthLayoutComponent"],
    _shared_layouts_site_layout_site_layout_component__WEBPACK_IMPORTED_MODULE_7__["SiteLayoutComponent"],
    _register_page_register_page_component__WEBPACK_IMPORTED_MODULE_8__["RegisterPageComponent"],
    _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_10__["MainPageComponent"],
    _side_design_side_design_component__WEBPACK_IMPORTED_MODULE_13__["SideDesignComponent"],
    _shared_background_directive__WEBPACK_IMPORTED_MODULE_17__["BackgroundDirective"],
    _shared_layouts_site_layout_size_format_size_format_component__WEBPACK_IMPORTED_MODULE_18__["SizeFormatComponent"],
    _shoping_page_shoping_page_component__WEBPACK_IMPORTED_MODULE_19__["ShopingPageComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_20__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["KeyValuePipe"], _shared_pipes_pipe__WEBPACK_IMPORTED_MODULE_16__["PipesPipe"]]);


/***/ }),

/***/ "./src/app/editor-pic/editor-pic.component.ts":
/*!****************************************************!*\
  !*** ./src/app/editor-pic/editor-pic.component.ts ***!
  \****************************************************/
/*! exports provided: EditorPicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorPicComponent", function() { return EditorPicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fabric */ "./node_modules/fabric/dist/fabric.js");
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fabric__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_layouts_site_layout_site_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/layouts/site-layout/site-layout.component */ "./src/app/shared/layouts/site-layout/site-layout.component.ts");
/* harmony import */ var _shared_layouts_servises_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/layouts/servises/data.service */ "./src/app/shared/layouts/servises/data.service.ts");
/* harmony import */ var _shared_layouts_servises_order_datas_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/layouts/servises/order-datas.service */ "./src/app/shared/layouts/servises/order-datas.service.ts");
/* harmony import */ var _shared_layouts_servises_products_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/layouts/servises/products.service */ "./src/app/shared/layouts/servises/products.service.ts");








const _c0 = ["htmlCanvas"];
// @HostListener('window:resize', ['$event'])
class EditorPicComponent {
    constructor(siteLayout, element, dataService, orderDatas, productsService) {
        this.siteLayout = siteLayout;
        this.element = element;
        this.dataService = dataService;
        this.orderDatas = orderDatas;
        this.productsService = productsService;
        // private canvas1: fabric.Canvas;
        this.props = {
            canvasFill: null,
            drawFill: 'green',
            canvasImage: 'assets/img/Trafaret3.1.png',
            id: null,
            opacity: null,
            fill: null,
            fontSize: null,
            charSpacing: null,
            fontWeight: null,
            fontStyle: null,
            textAlign: null,
            fontFamily: null,
            distance: null,
            TextDecoration: '',
            diametr: 300,
            curvedTextLeft: null,
            curvedTextTop: null,
            textCurved: 1,
            inputDisabled: null,
            textStraight: null,
            brandName: '',
        };
        // public canvasHtml1;
        this.textString = '';
        this.url = '';
        this.objectType = false;
        this.globalEditor = false;
        this.textEditor = false;
        this.imageEditor = false;
        this.figureEditor = false;
        this.disableBtn = false;
        this.canvasCount = 0;
        this.canvasCountPNJ = 0;
        //delate button on pictures
        this.left = 10;
        this.top = -11;
        this.widthHeight = 10;
        this.value = null;
        this.id = '';
        this.filterName = '';
        this.imageCoordy = null;
        this.imageCoordxx = null;
        this.imageCoordyy = null;
        this.reqImage = null;
        this.reqImage1 = null;
        this.linkk = false;
        this.drawObject = null;
        // public objWidthLimit = 170;
        // public objHeightLimit = 170;
        this.test = null;
        this.path = null;
        this.svg_text = null;
        this.intCountText = null;
        this.imageFilter = null;
        this.textPadding = 15;
        this.objectTypeImage = null;
        // public checked = false;
        this.shadow = {
            color: 'rgba(0, 0, 0, 1)',
            blur: 70,
            offsetX: 10,
            offsetY: 10,
            opacity: 0.7,
            fillShadow: true,
            strokeShadow: true
        };
        this.shadowPNJ = {
            color: 'rgba(0, 0, 0, 1)',
            blur: 70,
            offsetX: 10,
            offsetY: 10,
            opacity: 0.7,
            affectStroke: false
        };
        this.shadowFigur = {
            color: 'rgba(0, 0, 0, 1)',
            blur: 10,
            offsetX: 5,
            offsetY: 5,
            opacity: 0.7,
            affectStroke: false
        };
        this.shadowTEXT = {
            color: 'rgba(0, 0, 0, 1)',
            blur: 4,
            offsetX: 5,
            offsetY: 5,
            opacity: 0.7,
            affectStroke: false
        };
        this.productsService.fetch().subscribe((res) => {
            this.props.canvasImage = res[1].type;
        });
        // this.props.canvasImage = this.productsService.;
        this.scaleKey = this.dataService.scaleKey;
        this.a = dataService.formatTopKey;
        this.dataService.formatTop.subscribe(res => this.a = res);
        this.b = dataService.sizePrintKey;
        this.dataService.formatA4Horizontal.subscribe(res => this.b = res);
        this.c = dataService.formatWithHeight;
        this.dataService.formatA4Vertical.subscribe(res => this.c = res);
        this.d = dataService.scaleKey;
        this.dataService.scaleKeyy.subscribe(res => this.d = res);
        // this.dataService.canvasCount1.subscribe(
        //   res => this.canvasCount = res      
        // );
        console.log(this.canvasCount);
    }
    onResize(event) {
        // --!
        this.canvas.setWidth(this.siteLayout.canvasHtmlWidth);
        this.canvas.setHeight(this.siteLayout.canvasHtmlHeight);
        // this.canvas.backgroundImage = null;
        this.setCanvasImage();
        this.canvas.renderAll();
        // this.canvas1.setWidth(this.siteLayout.canvasHtmlWidth);
        // this.canvas1.setHeight(this.siteLayout.canvasHtmlHeight);
        // this.setCanvasImage1();
        // this.canvas1.renderAll();
    }
    defoultUpdate() {
        $('.owl-theme').on('changed.owl-carousel', (event) => {
            var current = event.item.index;
            this.id = $(event.target).find(".owl-item").eq(current).find("img").attr('id');
            console.log(this.id, current);
        });
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        // setup front side canvas
        // this.props.canvasImage = this.siteLayout.firstBackCanvasImage;
        // this.canvas1 = new fabric.Canvas(this.htmlCanvas.nativeElement);
        // this.canvas1.add(new fabric.Circle({ radius: 30, fill: '#f55', top: 100, left: 100 }));
        // this.canvas1.setBackgroundImage(this.htmlCanvas.nativeElement, this.canvas1.renderAll.bind(this.canvas1));
        this.canvas = new fabric.Canvas(this.htmlCanvas.nativeElement, {
            hoverCursor: 'pointer',
            selection: true,
            selectionBorderColor: 'blue',
            preserveObjectStacking: true,
            selectionDashArray: [7, 6],
        });
        this.canvas.setWidth(this.siteLayout.canvasHtmlWidth);
        this.canvas.setHeight(this.siteLayout.canvasHtmlHeight);
        this.canvas.renderAll();
        // this.canvas1 = new fabric.Canvas(this.htmlCanvas1.nativeElement, {
        //   hoverCursor: 'pointer',
        //   selection: true,
        //   selectionBorderColor: 'blue',
        //   preserveObjectStacking: true,
        // });
        let numLeft = this.left;
        let numTop = this.top;
        this.canvas.on({
            'after:render': (e) => {
                this.canvas.calcOffset();
            },
            'object:moving': (e) => {
                let obj = e.target;
                obj.setCoords();
                obj.saveState();
                let matrix = e.target.calcTransformMatrix();
                let imageCoordx = matrix[4];
                let imageCoordy = matrix[5];
                this.siteLayout.imageCoordy = Math.floor(imageCoordy);
                this.siteLayout.imageCoordx = Math.floor(imageCoordx);
                let moveSizeLimit = this.canvas.width / this.b;
                let cornerSize = this.canvas.width / 40;
                let sumLeft = obj.getBoundingRect().left;
                let sumTop = obj.getBoundingRect().top;
                let sumWidth = obj.getBoundingRect().width;
                let sumHeight = obj.getBoundingRect().height;
                let Delta = this.canvas.height - 2 * (moveSizeLimit + cornerSize) - (this.canvas.width - 2 * (moveSizeLimit + cornerSize)) * this.dataService.formatWithHeight;
                let formatWidth = (this.canvas.width) - 2 * (moveSizeLimit + cornerSize);
                let formatHeight = formatWidth * this.dataService.formatWithHeight;
                let angle = Math.abs(((this.canvas.getActiveObject().angle) * Math.PI) / 180);
                let cos = Math.abs(Math.cos(angle));
                // if (obj.height > obj.canvas.height || obj.width > obj.canvas.width) {
                //   obj.originY;
                //   obj.originX;
                // }
                // top-left  corner
                console.log('fromEditor', this.dataService.sizePrintKey, this.b, this.d);
                if (sumTop < cornerSize + moveSizeLimit - this.canvas.width * this.a || sumLeft < cornerSize + moveSizeLimit) {
                    obj.top = Math.max(obj.top, obj.top - sumTop + cornerSize + moveSizeLimit - this.canvas.width * this.a);
                    obj.left = Math.max(obj.left, obj.left - sumLeft + (cornerSize + moveSizeLimit));
                }
                // bot-right corner
                if (sumTop + sumHeight + Delta + cornerSize + moveSizeLimit + this.canvas.width * this.a > obj.canvas.height ||
                    sumLeft + sumWidth > obj.canvas.width - cornerSize - moveSizeLimit) {
                    obj.top = Math.min(obj.top, obj.canvas.height - sumHeight + obj.top - sumTop - cornerSize - moveSizeLimit - Delta - this.canvas.width * this.a);
                    obj.left = Math.min(obj.left, obj.canvas.width - sumWidth + obj.left - sumLeft - cornerSize - moveSizeLimit);
                }
                $(".deleteBtn").remove();
                $(".distance").remove();
                $(".distanceY").remove();
                // addDistancePoint(imageCoordy, imageCoordx);
                this.addArrowUp(imageCoordx, 2);
                // addDistancePoint(imageCoordy, imageCoordy);
                this.addArrow(imageCoordy, 2);
                // addDeleteBtn(obj.oCoords.mb.x, obj.oCoords.mb.y);
                obj.setCoords();
                obj.saveState();
                this.canvas.renderAll();
            },
            'object:scaling': (e) => {
                let obj = e.target;
                // this.dataService.scaleKey = obj.scaleX;
                // console.log(obj.scaleX, obj.scaleY);
                obj.setCoords();
                obj.saveState();
                let cornerSize = this.canvas.width / 40;
                let moveSiseLimit = this.canvas.width / this.dataService.sizePrintKey;
                let sumLeft = obj.getBoundingRect().left;
                let sumTop = obj.getBoundingRect().top;
                let sumWith = obj.getBoundingRect().width;
                let sumHeight = obj.getBoundingRect().height;
                let matrix = e.target.calcTransformMatrix();
                let imageCoordx = matrix[4];
                let imageCoordy = matrix[5];
                let angle = Math.abs(((this.canvas.getActiveObject().angle) * Math.PI) / 180);
                let activeObject = this.canvas.getActiveObject();
                let nerqnadzic = Math.sqrt(Math.pow(activeObject.width, 2) + Math.pow(activeObject.height, 2));
                let cos = Math.abs(Math.cos(angle));
                let sin = Math.abs(Math.sin(angle));
                let formatWidth = (this.canvas.width) - 2 * (moveSiseLimit + cornerSize);
                let formatHeight = formatWidth * this.dataService.formatWithHeight;
                let moveSizeLimit = this.canvas.width / this.dataService.sizePrintKey;
                let Delta = this.canvas.height - 2 * (moveSizeLimit + cornerSize) - (this.canvas.width - 2 * (moveSizeLimit + cornerSize)) * this.dataService.formatWithHeight;
                // top-left  corner
                if (sumLeft < cornerSize + moveSiseLimit) {
                    obj.left = Math.max(obj.left, obj.left - sumLeft + (cornerSize + moveSiseLimit));
                }
                if (sumTop < cornerSize + moveSiseLimit - this.canvas.width * this.a) {
                    obj.top = Math.max(obj.top, obj.top - sumTop + cornerSize + moveSiseLimit - this.canvas.width * this.a + 50);
                }
                //top right corner
                if (sumLeft + sumWith + cornerSize + moveSiseLimit > obj.canvas.width) {
                    obj.left = Math.min(obj.left, obj.canvas.width - sumWith + obj.left - sumLeft - cornerSize - moveSiseLimit);
                }
                // bot right corner
                if (sumTop + sumHeight + obj.cornerSize + moveSiseLimit + Delta + this.canvas.width * this.a > obj.canvas.width) {
                    obj.top = Math.min(obj.top, obj.canvas.height - sumHeight + obj.top - sumTop - obj.cornerSize - moveSiseLimit - Delta - this.canvas.width * this.a);
                }
                // With limit
                // this.canvas.getObjects().filter((o) => {
                //   if (o.get('type') === 'i-text') {
                //     this.imgPadding = 2800 / this.props.diametr
                //   }
                // })
                if (activeObject.angle === 0 || activeObject.angle === 180) {
                    this.canvas.getObjects().filter((o) => {
                        if (o.get('type') === 'i-text' && sumWith > formatWidth ||
                            o.get('type') === 'i-text' && sumHeight > formatHeight) {
                            activeObject.scaleX = formatWidth / (activeObject.width * 1.3);
                            activeObject.scaleY = formatWidth / (activeObject.width * 1.3);
                        }
                        if (o.get('type') !== 'i-text' && sumWith > formatWidth) {
                            activeObject.scaleX = formatWidth / (activeObject.width);
                            activeObject.scaleY = formatHeight / (activeObject.height);
                        }
                        if (o.get('type') !== 'i-text' && sumHeight > formatHeight) {
                            activeObject.scaleX = formatWidth / (activeObject.width);
                            activeObject.scaleY = formatHeight / (activeObject.height);
                        }
                    });
                }
                else {
                    this.canvas.getObjects().filter((o) => {
                        if (o.get('type') === 'i-text' && sumWith > formatWidth ||
                            o.get('type') === 'i-text' && sumWith > formatHeight) {
                            activeObject.scaleX = formatWidth / (activeObject.width / (cos * 0.75));
                            activeObject.scaleY = formatWidth / (activeObject.width / (cos * 0.75));
                        }
                        if (o.get('type') !== 'i-text' && sumWith > formatWidth) {
                            activeObject.scaleX = formatWidth / (activeObject.width / (cos * 0.75));
                            activeObject.scaleY = formatWidth / (activeObject.width / (cos * 0.75));
                        }
                        if (o.get('type') !== 'i-text' && sumHeight > formatHeight) {
                            activeObject.scaleX = formatHeight / (activeObject.height / (cos * 0.75));
                            activeObject.scaleY = formatHeight / (activeObject.height / (cos * 0.75));
                        }
                    });
                }
                // if (activeObject.angle === 0 || activeObject.angle === 180) {
                //   this.canvas.getObjects().filter((o) => {
                //     if (o.get('type') === 'i-text' && sumHeight > formatHeight * 0.6) {
                //       activeObject.scaleX = formatWidth / (activeObject.width * 1.67);
                //       activeObject.scaleY = formatWidth / (activeObject.width * 1.67);
                //     } else if (sumWith > formatWidth) {
                //       activeObject.scaleX = formatWidth / (activeObject.width);
                //       activeObject.scaleY = formatWidth / (activeObject.width);
                //     }
                //   })
                // } else {
                //   this.canvas.getObjects().filter((o) => {
                //     if (o.get('type') === 'i-text' && sumHeight > formatHeight) {
                //       activeObject.scaleX = formatWidth / (activeObject.width / (cos * 0.6));
                //       activeObject.scaleY = formatWidth / (activeObject.width / (cos * 0.6));
                //     } else if (sumHeight > formatHeight) {
                //       console.log('nnnnnnnn');
                //       activeObject.scaleX = formatWidth / (activeObject.width / (cos * 0.8));              
                //       activeObject.scaleY = formatWidth / (activeObject.width / (cos * 0.8));
                //     }
                //   })
                // }
                // } else if (sumHeight > formatHeight) {
                //   this.canvas.getObjects().filter((o) => {
                //     if (o.get('type') === 'i-text') {
                //       activeObject.scaleX = formatWidth / (activeObject.width * 2.2);
                //       activeObject.scaleY = formatWidth / (activeObject.width * 2.2);
                //     } else {
                //       activeObject.scaleX = formatHeight / (activeObject.height / (cos * 0.65));
                //       activeObject.scaleY = formatHeight / (activeObject.height / (cos * 0.65));
                //     }
                //   })
                // if (activeObject.angle === 0) {
                //   activeObject.scaleY = formatHeight / activeObject.height;
                // } else {
                //   activeObject.scaleX = formatWidth / nerqnadzic;
                //   activeObject.scaleY = formatWidth / nerqnadzic;
                // }
                // }
                if (activeObject.width * activeObject.scaleX > formatWidth && activeObject.angle !== 0) {
                    activeObject.scaleX = formatWidth / nerqnadzic;
                    activeObject.scaleY = formatWidth / nerqnadzic;
                }
                if (activeObject.height * activeObject.scaleY > formatHeight && activeObject.angle !== 0) {
                    activeObject.scaleX = formatHeight / nerqnadzic;
                    activeObject.scaleY = formatHeight / nerqnadzic;
                }
                obj.minScaleLimit = 0.02;
                $(".deleteBtn").remove();
                $(".distance").remove();
                $(".distanceY").remove();
                // addDistancePoint(imageCoordy, imageCoordx);
                this.addArrowUp(imageCoordx, 2);
                // addDistancePoint(imageCoordy, imageCoordy);
                this.addArrow(imageCoordy, 2);
                // addDeleteBtn(obj.oCoords.mb.x, obj.oCoords.mb.y);
                obj.setCoords();
                obj.saveState();
                this.canvas.renderAll();
            },
            'object:modified': (e) => {
                let obj = e.target;
                obj.setCoords();
                obj.saveState();
                let matrix = e.target.calcTransformMatrix();
                let boundingRect = obj.getBoundingRect(true);
                let imageCoordx = matrix[4];
                let imageCoordy = matrix[5];
                let moveSizeLimit = this.canvas.width / this.dataService.sizePrintKey;
                let cornerSize = this.canvas.width / 40;
                let sumLeft = obj.getBoundingRect().left;
                let sumTop = obj.getBoundingRect().top;
                let sumWidth = obj.getBoundingRect().width;
                let sumHeight = obj.getBoundingRect().height;
                let Delta = this.canvas.height - 2 * (moveSizeLimit + cornerSize) - (this.canvas.width - 2 * (moveSizeLimit + cornerSize)) * this.dataService.formatWithHeight;
                // top-left  corner
                if (sumLeft < (cornerSize + moveSizeLimit)) {
                    obj.left = Math.max(obj.left, obj.left - sumLeft + (cornerSize + moveSizeLimit));
                }
                if (sumTop < cornerSize + moveSizeLimit - this.canvas.width * this.a) {
                    obj.top = Math.max(obj.top, obj.top - sumTop + cornerSize + moveSizeLimit - this.canvas.width * this.a);
                }
                // bot-right corner
                if (sumLeft + sumWidth + cornerSize + moveSizeLimit > obj.canvas.width) {
                    obj.left = Math.min(obj.left, obj.canvas.width - sumWidth + obj.left - sumLeft - cornerSize - moveSizeLimit);
                }
                if (sumTop + sumHeight + cornerSize + moveSizeLimit + Delta + this.canvas.width * this.a > obj.canvas.height) {
                    obj.top = Math.min(obj.top, obj.canvas.height - sumHeight + obj.top - sumTop - cornerSize - moveSizeLimit - Delta - this.canvas.width * this.a);
                }
                this.siteLayout.imageCoordy = Math.floor(imageCoordy);
                this.siteLayout.imageCoordx = Math.floor(imageCoordx);
                $(".distance").remove();
                // addDistancePoint(imageCoordy, imageCoordx);
                this.addArrow(imageCoordy, 2);
                $(".distanceY").remove();
                // addDistancePoint(imageCoordy, imageCoordx);
                this.addArrowUp(imageCoordx, 2);
                this.addDeleteBtn(obj.oCoords.mb.x, obj.oCoords.mb.y);
                obj.setCoords();
                obj.saveState();
                this.canvas.renderAll();
            },
            'selection:created': (e) => {
                let obj = e.target;
                // let sumTop = obj.getBoundingRect().top;
                // let sumWith = obj.getBoundingRect().width;
                // let sumHeight = obj.getBoundingRect().height;
                // let formatWidth = (this.canvas.width) - 2 * (1);
                // let angle = Math.abs(((this.canvas.getActiveObject().angle) * Math.PI) / 180);
                // let activeObject = this.canvas.getActiveObject();
                // let cos = Math.abs(Math.cos(angle));
                // if (activeObject.angle === 0 || activeObject.angle === 180) {
                //   this.canvas.getObjects().filter((o) => {
                //     if (o.get('type') === 'i-text') {
                //       activeObject.scaleX = formatWidth / (activeObject.width / (cos * 0.2));
                //       activeObject.scaleY = formatWidth / (activeObject.width / (cos * 0.2));
                //     } else if (sumWith > formatWidth) {
                //       activeObject.scaleX = formatWidth / (activeObject.width);
                //       activeObject.scaleY = formatWidth / (activeObject.width);
                //     }
                //   }) }
                // this.dataService.canvasSelect = true;
                // var mouse = this.canvas.getPointer(e.memo);
                //  const x = mouse.x;
                //  const y = mouse.y;  
                //   e.target.set({
                //     lockScalingX: true,
                //     lockScalingY: true
                // });
                obj.setCoords();
                obj.saveState();
                $(".deleteBtn").remove();
                // console.log('selected');
                this.addDeleteBtn(obj.oCoords.mb.x, obj.oCoords.mb.y);
                $(".distance").remove();
                let matrixx = e.target.calcTransformMatrix();
                let imageCoordxx = matrixx[4];
                let imageCoordyy = matrixx[5];
                // addDistancePoint(imageCoordyy, imageCoordxx);
                this.addArrow(imageCoordyy, 2);
                $(".distanceY").remove();
                let matrixxx = e.target.calcTransformMatrix();
                let imageCoordxxx = matrixxx[4];
                let imageCoordyyy = matrixxx[5];
                // addDistancePoint(imageCoordyyy, imageCoordxxx);
                this.addArrowUp(imageCoordxxx, 2);
                let matrix = e.target.calcTransformMatrix();
                var imageCoordx = matrix[4];
                var imageCoordy = matrix[5];
                this.siteLayout.imageCoordy = Math.floor(imageCoordy);
                this.siteLayout.imageCoordx = Math.floor(imageCoordx);
                let imgWith = obj.width * obj.scaleX;
                let imgHeight = obj.height * obj.scaleY;
                this.siteLayout.imgWith = Math.floor(imgWith);
                this.siteLayout.imgHeigt = Math.floor(imgHeight);
                this.selected = obj.type;
                obj.hasRotatingPoint = true;
                obj.transparentCorners = false;
                obj.cornerColor = '#FF7F50';
                // e.target.bringToFront()
                // this.canvas.getActiveObject()
                this.canvas.renderAll();
                this.resetPanels();
                this.getOpacity();
                this.getDistance();
                obj.setCoords();
                obj.saveState();
                if (obj.type !== 'group' && obj) {
                    this.getId();
                    this.getOpacity();
                    this.getDistance();
                    switch (obj.type) {
                        case 'rect':
                        case 'circle':
                        case 'triangle':
                            this.figureEditor = true;
                            this.getFill();
                            break;
                        case 'i-text':
                            this.textEditor = true;
                            // this.getLineHeight();
                            // this.getCharSpacing();
                            this.getBold();
                            this.getFill();
                            this.getTextDecoration();
                            this.getTextAlign();
                            this.getFontFamily();
                            this.bringToFront();
                            // this.sendToBack()
                            // this.getLineHeight();
                            this.getCharSpacing();
                            this.getFontSize();
                            break;
                        case 'image':
                            this.getOpacity();
                            this.getDistance();
                            break;
                    }
                }
                // addDistancePoint(imageCoordy, imageCoordx);
                this.addArrowUp(imageCoordx, 2);
                // addDistancePoint(imageCoordy, imageCoordy);
                this.addArrow(imageCoordy, 2);
                // addDeleteBtn(obj.oCoords.mb.x, obj.oCoords.mb.y);
                obj.setCoords();
                obj.saveState();
                this.canvas.renderAll();
                if (this.canvasCount !== 0) {
                    this.dataService.canvasSelect = true;
                }
            },
            // 'selection:created': (e) => {
            //   if (this.canvasCount !== 0) {
            //     this.dataService.canvasSelect = true;
            //   }
            // },
            'before:selection:cleared': (e) => {
                if (this.canvasCount !== 0) {
                    this.dataService.canvasSelect = true;
                }
                $(".deleteBtn").remove();
                $(".distance").remove();
            },
            'selection:updated': (e) => {
                let obj = e.target;
                this.addDeleteBtn(e.target.oCoords.mb.x, e.target.oCoords.mb.y);
                $(".distance").remove();
                let matrixx = e.target.calcTransformMatrix();
                var imageCoordx = matrixx[4];
                var imageCoordy = matrixx[5];
                // addDistancePoint(imageCoordy, imageCoordx);
                this.addArrow(imageCoordy, 2);
                $(".distanceY").remove();
                let matrixxx = e.target.calcTransformMatrix();
                var imageCoordx = matrixxx[4];
                var imageCoordy = matrixxx[5];
                // addDistancePoint(imageCoordy, imageCoordx);
                this.addArrowUp(imageCoordx, 2);
                let matrix = e.target.calcTransformMatrix();
                var imageCoordx = matrix[4];
                var imageCoordy = matrix[5];
                this.siteLayout.imageCoordy = Math.floor(imageCoordy);
                this.siteLayout.imageCoordx = Math.floor(imageCoordx);
                let imgWith = obj.width * obj.scaleX;
                let imgHeight = obj.height * obj.scaleY;
                this.siteLayout.imgWith = Math.floor(imgWith);
                this.siteLayout.imgHeigt = Math.floor(imgHeight);
                this.selected = obj.type;
                obj.hasRotatingPoint = true;
                obj.transparentCorners = false;
                obj.cornerColor = '#FF7F50';
                // e.target.bringToFront()
                // this.canvas.getActiveObject()
                this.resetPanels();
                this.getOpacity();
                this.getDistance();
                if (obj.type !== 'group' && obj) {
                    this.getId();
                    this.getOpacity();
                    this.getDistance();
                    switch (obj.type) {
                        case 'rect':
                        case 'circle':
                        case 'triangle':
                            this.figureEditor = true;
                            this.getFill();
                            break;
                        case 'i-text':
                            this.textEditor = true;
                            // this.getLineHeight();
                            // this.getCharSpacing();
                            this.getBold();
                            this.getFill();
                            this.getTextDecoration();
                            this.getTextAlign();
                            this.getFontFamily();
                            this.bringToFront();
                            // this.sendToBack()
                            // this.getLineHeight();
                            this.getCharSpacing();
                            this.getFontSize();
                            break;
                        case 'image':
                            this.getOpacity();
                            this.getDistance();
                            break;
                    }
                }
                $(".distance").remove();
                // addDistancePoint(imageCoordy, imageCoordx);
                this.addArrow(imageCoordy, 2);
                $(".distanceY").remove();
                // addDistancePoint(imageCoordy, imageCoordx);
                this.addArrowUp(imageCoordx, 2);
                this.addDeleteBtn(obj.oCoords.mb.x, obj.oCoords.mb.y);
                obj.setCoords();
                obj.saveState();
                this.canvas.renderAll();
            },
            'mouse:up:before': (e) => {
                console.log('mouse:down');
            },
            'selection:cleared': (e) => {
                this.dataService.canvasSelect = false;
                $(".deleteBtn").remove();
                $(".distance").remove();
                let obj = e.target;
                // console.log('cleared');
                this.selected = null;
                this.resetPanels();
                // console.log('clear');
                this.siteLayout.imageCoordx = null;
                this.siteLayout.imageCoordy = null;
                this.siteLayout.imgWith = null;
                this.siteLayout.imgHeigt = null;
            },
            'object:rotating': (e) => {
                const obj = e.target;
                obj.setCoords();
                obj.saveState();
                let matrix = e.target.calcTransformMatrix();
                const angle = Math.abs(((this.canvas.getActiveObject().angle) * Math.PI) / 180);
                const sumWidth = obj.getBoundingRect().width;
                const sumHeight = obj.getBoundingRect().height;
                let imageCoordx = matrix[4];
                let imageCoordy = matrix[5];
                const activeObject = this.canvas.getActiveObject();
                // const nerqnadzicc = Math.sqrt(Math.pow(this.canvas.getActiveObject().width, 2) + Math.pow(this.canvas.getActiveObject().height, 2))
                const cos = Math.abs(Math.cos(angle));
                const sin = Math.abs(Math.sin(angle));
                const formatWidth = (window.innerWidth - this.dataService.widthKey * window.innerWidth) - 2 * ((window.innerWidth - this.dataService.widthKey * window.innerWidth) / this.b + (window.innerWidth - this.dataService.widthKey * window.innerWidth) / 40);
                const formatHeight = formatWidth * this.c;
                this.canvas.getObjects().filter((o) => {
                    if (o.get('type') === 'i-text' && sumWidth > formatWidth ||
                        o.get('type') === 'i-text' && sumHeight > formatHeight) {
                        console.log('ccccc');
                        activeObject.scaleX = formatWidth / (activeObject.width / (cos * 0.75));
                        activeObject.scaleY = formatWidth / (activeObject.width / (cos * 0.75));
                    }
                    if (o.get('type') !== 'i-text' && sumWidth > formatWidth) {
                        activeObject.scaleX = formatWidth / (activeObject.width / (cos * 0.75));
                        activeObject.scaleY = formatWidth / (activeObject.width / (cos * 0.75));
                    }
                    if (o.get('type') !== 'i-text' && sumHeight > formatHeight) {
                        console.log('kkkkkk');
                        activeObject.scaleX = formatHeight / (activeObject.height / (cos * 0.75));
                        activeObject.scaleY = formatHeight / (activeObject.height / (cos * 0.75));
                    }
                });
                $(".distance").remove();
                // addDistancePoint(imageCoordy, imageCoordx);
                this.addArrow(imageCoordy, 2);
                $(".distanceY").remove();
                // addDistancePoint(imageCoordy, imageCoordx);
                this.addArrowUp(imageCoordx, 2);
                this.addDeleteBtn(obj.oCoords.mb.x, obj.oCoords.mb.y);
                obj.setCoords();
                obj.saveState();
                this.canvas.renderAll();
            },
            'path:created': (e) => {
                const obj = e.target;
                this.canvasCount += 1;
                this.canvas.isDrawingMode = false;
                // this.canvas.on('mouse:up', () => this.canvas.setActiveObject());
                // console.log(this.canvas.item(this.canvasCount - 1));
                this.canvas.getObjects().indexOf(e.target);
                // this.canvas.setActiveObject(this.canvas.item(this.canvasCount- 1));
                this.selectItemAfterAdded(this.canvas.item(this.canvasCount - 1));
                obj.setCoords();
                obj.saveState();
                this.canvas.renderAll();
            },
            'object:added': (e) => {
                let obj = e.target;
                obj.setCoords();
                obj.saveState();
                var matrix = e.target.calcTransformMatrix();
                let imageCoordx = matrix[4];
                let imageCoordy = matrix[5];
                // this.canvas.getObjects().filter((o) => {
                //   if (o.get('type') === 'i-text') {
                //     this.imgPadding = 2800 / this.props.diametr
                //   }
                // })
                $(".deleteBtn").remove();
                // console.log('added');
                // addDistancePoint(imageCoordy, imageCoordx);
                this.addArrow(imageCoordy, 2);
                $(".distanceY").remove();
                // addDistancePoint(imageCoordy, imageCoordx);
                this.addArrowUp(imageCoordx, 2);
                this.addDeleteBtn(obj.oCoords.mb.x, obj.oCoords.mb.y);
                obj.setCoords();
                obj.saveState();
                this.canvas.renderAll();
            },
        });
        // --!
        // this.canvas1.setWidth(this.siteLayout.canvasHtmlWidth);
        // this.canvas1.setHeight(this.siteLayout.canvasHtmlHeight);
        // this.canvas1.renderAll();
        // get references to the html canvas element & its context
        this.canvas.on('mouse:down', (e) => {
            const canvasElement = document.getElementById('canvas');
        });
        // this.canvas1.on('mouse:down', (e) => {
        //   const canvasElement: any = document.getElementById('canvas');
        // });
        this.canvas.on('mouse:over', () => {
            const color = this.props.drawFill;
            this.canvas.freeDrawingBrush.color = color;
            // alert("mouse up!");
            // this.canvas.add(refRect);
            // isMouseDown = false;
            // freeDrawing=false; // **Disables line drawing
        });
    }
    /*------------------------Block elements------------------------*/
    // Block "Size"
    // changeSize() {
    //   this.canvas.setWidth(this.siteLayout.canvasHtml);
    //   this.canvas.setHeight(500);
    //   this.canvas.renderAll()
    // }
    // Block "Add text"
    addArrowUp(o, p) {
        var arrow = '<img src="../assets/img/output-onlinepngtools-up.png" class="distance" style="position:absolute; top:' + p + 'px; left:' + (o - 5) + 'px; cursor:crosshair; width:10px; height:40px;"/>';
        $(".canvas-container").append(arrow);
        this.canvas.renderAll();
    }
    addArrow(o, p) {
        var arrow = '<img src="../assets/img/green-arrow-clipart-2.png" class="distance" style="position:absolute; top:' + o + 'px; left:' + p + 'px; cursor:crosshair; width:40px; height:10px;"/>';
        $(".canvas-container").append(arrow);
        this.canvas.renderAll();
    }
    addDeleteBtn(x, y) {
        $(".deleteBtn").remove();
        var btnLeft = x - this.left;
        var btnTop = y + this.top;
        var deleteBtn = '<img src="../assets/img/remove-icon-png-15.png" class="deleteBtn" style="position:absolute;top:' + btnTop + 'px;left:' + btnLeft + 'px;cursor:pointer;width:25px;height:25px;"/>';
        $(".canvas-container").append(deleteBtn);
        this.canvas.renderAll();
    }
    resizeEbiten(iframe, parentId, aspectRatio) {
        let parent = document.getElementById(parentId);
        let w = parent.clientWidth;
        iframe.width = w;
        iframe.height = w * aspectRatio;
        iframe.contentWindow.addEventListener('resize', () => {
            let w = parent.clientWidth;
            iframe.width = w;
            iframe.height = w * aspectRatio;
        });
    }
    canvasDrawing(target) {
        $(document).on('click', ".deleteBtn", (event) => {
            event.stopImmediatePropagation();
            this.canvasCount -= 1;
            console.log(this.canvasCount);
            if (this.canvasCount === 0) {
                // this.siteLayout.isOpasity=true;
                $('.owl-nav').show();
                $(".canvas").css("z-index", 0);
                this.disableBtn = false;
                this.siteLayout.toggle = false;
                console.log('delete---');
            }
            const activeObject = this.canvas.getActiveObject();
            const activeGroup = this.canvas.getActiveObjects();
            if (activeObject) {
                this.canvas.remove(activeObject);
                $(".deleteBtn").remove();
                // this.textString = '';
            }
            else if (activeGroup) {
                this.canvas.discardActiveObject();
                const self = this;
                activeGroup.forEach((object) => {
                    self.canvas.remove(object);
                });
            }
        });
        switch (target) {
            case "select":
                this.canvas.isDrawingMode = false;
                break;
            case "erase":
                this.canvas.freeDrawingBrush = new fabric.EraserBrush(this.canvas);
                this.canvas.freeDrawingBrush.width = 10;
                this.canvas.isDrawingMode = true;
                break;
            case "undo":
                this.canvas.freeDrawingBrush = new fabric.EraserBrush(this.canvas);
                this.canvas.freeDrawingBrush.width = 10;
                this.canvas.isDrawingMode = true;
                break;
            case "draw":
                let color = this.props.drawFill;
                console.log(color);
                this.siteLayout.toggle = true;
                this.canvas.freeDrawingBrush = new fabric.PencilBrush(this.canvas);
                this.drawObject = this.canvas.freeDrawingBrush;
                this.canvas.freeDrawingBrush.color = color;
                this.canvas.freeDrawingBrush.width = 4;
                this.canvas.isDrawingMode = true;
                this.canvas.renderAll();
                this.selectItemAfterAdded(this.canvas.item(0));
                break;
            case "spray":
                let colorSpray = this.props.drawFill;
                this.siteLayout.toggle = true;
                this.canvas.freeDrawingBrush = new fabric.SprayBrush(this.canvas);
                this.canvas.freeDrawingBrush.color = colorSpray;
                this.canvas.freeDrawingBrush.width = 15;
                this.canvas.isDrawingMode = true;
                // this.canvas.setActiveObject(Object[0]);
                this.selectItemAfterAdded(this.canvas.item(0));
                break;
            default:
                break;
        }
    }
    addText() {
        // console.log(this.props.textCurved);
        this.objectType = true;
        let numLeft = this.left;
        let numTop = this.top;
        function addDeleteBtn(x, y) {
            $(".deleteBtn").remove();
            var btnLeft = x - numLeft;
            var btnTop = y + numTop;
            var deleteBtn = '<img src="../assets/img/remove-icon-png-15.png" class="deleteBtn" style="position:absolute;top:' + btnTop + 'px;left:' + btnLeft + 'px;cursor:pointer;width:25px;height:25px;"/>';
            $(".canvas-container").append(deleteBtn);
        }
        this.canvas.on('selection:created', function (e) {
            $(".deleteBtn").remove();
            // console.log('selected');
            addDeleteBtn(e.target.oCoords.mb.x, e.target.oCoords.mb.y);
        });
        console.log('texttt');
        if (this.props.diametr < 299) {
            console.log('<280');
            this.props.inputDisabled = 'inputDisabled';
            this.canvas.remove(this.canvas.getActiveObject());
            const path = new fabric.Path(`'M 90 425 A ${this.props.diametr} ${this.props.diametr} 0 0 1 271 420 '`, {
                strokeWidth: 1,
                absolutePositioned: true,
                fill: false,
            });
            // const path = new fabric.Path(`'M 90 425 A ${this.props.diametr} ${this.props.diametr} 0 0 1 271 420 '`, {
            //   strokeWidth: 1,
            //   absolutePositioned: true,
            //   fill: false,
            // })
            // const pathText = this.props.path
            var pathInfo = fabric.util.getPathSegmentsInfo(path.path);
            path.segmentsInfo = pathInfo;
            let textPathLength = pathInfo[pathInfo.length - 1].length;
            let k = this.textString.length;
            let fontSize = 1.9 * textPathLength / this.textString.length;
            this.props.fontSize = fontSize;
            const textWidth = (window.innerWidth - this.dataService.widthKey * window.innerWidth) - 2 * ((window.innerWidth - this.dataService.widthKey * window.innerWidth) / this.b + (window.innerWidth - this.dataService.widthKey * window.innerWidth) / 40);
            const textHeight = textWidth * this.c;
            if (this.textString) {
                // this.canvasCount += 1;
                const text = new fabric.IText(this.textString, {
                    fontFamily: this.props.fontFamily || 'helvetica',
                    fontSize: fontSize,
                    path: path,
                    // top: path.top,
                    // left: path.left,
                    // originX: 'center',
                    // originY: 'center',
                    // left: 170,
                    // top: 115,
                    // fontSize: 30,
                    // color: "rgba(34, 34, 1, 0.3)",
                    // angle: 0,
                    fill: this.props.fill || '#000000',
                    // scaleX: 0.8,
                    // scaleY: 0.8,
                    // fontSize: 80,
                    hasRotatingPoint: true,
                    // strokeWidth: 30,
                    // strokeMiterLimit: 15,
                    // width: 50,
                    cornerSize: this.canvas.width / 40,
                    padding: this.textPadding,
                    centeredRotation: true,
                }, this.path = path);
                $('#shadowText').on('click', () => {
                    if (!this.siteLayout.shadowText) {
                        text.shadow = null;
                    }
                    else if (this.siteLayout.shadowText) {
                        // text.setShadow(this.shadowTEXT) old version;
                        // text.set('shadow', new fabric.Shadow(this.shadowTEXT));
                        text.shadow = new fabric.Shadow(this.shadowTEXT);
                        // text.set('shadow', new fabric.Shadow(this.shadowTEXT));
                        // console.log('text');
                    }
                    this.canvas.renderAll();
                }),
                    text.scaleToHeight(textHeight / this.d / 1.5);
                text.scaleToWidth(textWidth / this.d / 1.5);
                console.log(this.a, this.b, this.d);
                this.extend(text, this.randomId());
                // text.charSpacing = pathLength;
                this.canvas.add(text);
                this.canvas.centerObjectH(text);
                text.top = this.canvas.width / 40 + this.canvas.width / this.b - this.canvas.width * this.a + 18;
                this.selectItemAfterAdded(text);
                this.canvas.renderAll();
                // this.canvas.add(path);
                // console.log(this.canvas.toSVG());
                // console.log(this.canvas.toSVG().toString().replace("<defs>", '').replace("</defs>", str));
                // text.left = this.props.curvedTextLeft;
                // this.textString = '';
            }
        }
        else {
            this.props.inputDisabled = 'inputDisabled';
            this.canvas.remove(this.canvas.getActiveObject());
            if (this.props.diametr === 300) {
                this.intCountText += 1;
                this.canvasCount += 1;
                console.log(this.canvasCount, 'this.props.diametr === 300');
            }
            console.log('>280', 'sff');
            // $(document).on('click', ".deleteBtn", (event) => {
            //   this.siteLayout.activatebutton = true;
            //   event.stopImmediatePropagation()
            //   this.canvasCount -= 1;
            //   // this.intCountText -= 1;
            //   console.log(this.canvasCount, ".deleteBtn");
            //   // console.log(this.canvasCount);
            //   if (this.canvasCount === 0) {
            //     this.siteLayout.firstImage = 0;
            //     $('.owl-nav').show();
            //     $(".canvas").css("z-index", 0);
            //     this.siteLayout.toggle = false;
            //     this.disableBtn = false;
            //   }
            //   const activeObject = this.canvas.getActiveObject();
            //   const activeGroup = this.canvas.getActiveObjects();
            //   if (activeObject) {
            //     this.canvas.remove(activeObject);
            //     $(".deleteBtn").remove();
            //     $(".distance").remove();
            //     // this.textString = '';
            //   } else if (activeGroup) {
            //     this.canvas.discardActiveObject();
            //     const self = this;
            //     activeGroup.forEach((object) => {
            //       self.canvas.remove(object);
            //     });
            //   }
            // });
            const path = new fabric.Path(`'M 69 435 A ${this.props.diametr} ${this.props.diametr} 0 0 1 271 420 '`, {
                strokeWidth: 1,
                absolutePositioned: true,
                fill: false,
            });
            // const pathText = this.props.path
            var pathInfo = fabric.util.getPathSegmentsInfo(path.path);
            path.segmentsInfo = pathInfo;
            let textPathLength = pathInfo[pathInfo.length - 1].length;
            // let k = this.textString.length;
            const textWidth = (window.innerWidth - this.dataService.widthKey * window.innerWidth) - 2 * ((window.innerWidth - this.dataService.widthKey * window.innerWidth) / this.b + (window.innerWidth - this.dataService.widthKey * window.innerWidth) / 40);
            const textHeight = textWidth * this.c;
            let fontSize = 1.9 * this.props.diametr / this.textString.length;
            this.props.fontSize = fontSize;
            if (this.textString) {
                // this.canvasCount += 1;
                const text = new fabric.IText(this.textString, {
                    fontFamily: 'helvetica',
                    fontSize: fontSize,
                    // path: path,
                    // top: path.top,
                    // left: path.left,
                    // originX: 'center',
                    // originY: 'center',
                    // left: 170,
                    // top: 115,
                    // fontSize: 30,
                    // color: "rgba(34, 34, 1, 0.3)",
                    // angle: 0,
                    fill: '#000000',
                    // scaleX: 0.5,
                    // scaleY: 0.5,
                    // fontSize: 80,
                    hasRotatingPoint: true,
                    // strokeWidth: 10,
                    // strokeMiterLimit: 15,
                    // width: 50,
                    cornerSize: this.canvas.width / 40,
                    padding: this.textPadding,
                    centeredRotation: true,
                });
                this.props.textStraight = text;
                // if (text.height > 1300) {
                //   this.dataService.formatVal = this.dataService.formatValue = 'A3';
                // } else if (text.height > 500 && text.height < 1300) {
                //   this.dataService.formatVal = this.dataService.formatValue = 'A4';
                // }
                let scale = 1;
                if (this.dataService.horizontalVertical === true) {
                    // this.dataService.horizontalVertical = false;
                    // this.dataService.horVert = false;
                    // this.dataService.sizePrintKey = 686 / ((686 - 210) / 2);
                    // this.dataService.formatWithHeight = 1.414;
                    // this.dataService.formatTopKey = 0.03;
                    // this.dataService.scaleKey = 1;
                    // this.dataService.formatSizeSwich();
                    scale = 2;
                    text.scaleToHeight(textHeight / 1.2);
                    text.scaleToWidth(textWidth / 1.2);
                }
                else {
                    // this.dataService.horizontalVertical = false;
                    // this.dataService.scaleKey = 1;
                    // this.dataService.horVert = true;
                    // this.dataService.formatWithHeight = 0.707;
                    // this.dataService.sizePrintKey = 686 / ((686 - 297) / 2);
                    // this.dataService.formatTopKey = -0.03;
                    // this.dataService.formatSizeSwich();
                    scale = 2;
                    text.scaleToHeight(textHeight / 1.5);
                    text.scaleToWidth(textWidth / 1.5);
                    // scale = this.dataService.scaleKey;
                }
                $('#shadowText').on('click', () => {
                    if (!this.siteLayout.shadowText) {
                        text.shadow = null;
                    }
                    else if (this.siteLayout.shadowText) {
                        // text.setShadow(this.shadowTEXT) old version;
                        // text.set('shadow', new fabric.Shadow(this.shadowTEXT));
                        text.shadow = new fabric.Shadow(this.shadowTEXT);
                        // text.set('shadow', new fabric.Shadow(this.shadowTEXT));
                        // console.log('text');
                    }
                    this.canvas.renderAll();
                }),
                    console.log(this.a, this.b, this.d);
                this.extend(text, this.randomId());
                // text.charSpacing = pathLength;
                this.canvas.add(text);
                this.canvas.centerObjectH(text);
                text.top = this.canvas.width / 40 + this.canvas.width / this.b - this.canvas.width * this.a + 18;
                this.selectItemAfterAdded(text);
                this.canvas.renderAll();
                // this.canvas.add(path);
                // console.log(this.canvas.toSVG().toString().replace("<defs>", '').replace("</defs>", str));
                // this.canvas.centerObjectH(text);
                // text.top = this.canvas.height / 3;
                // this.textString = '';
                // console.log(this.canvasCount);
            }
        }
    }
    discardActiveObj() {
        this.props.diametr = 300;
        this.canvas.discardActiveObject().renderAll();
    }
    reRender() {
        this.canvas.getObjects().filter((o) => {
            if (o.get('type') === 'i-text') {
                return this.canvas.setActiveObject(o);
            }
        });
        if (this.intCountText !== 0) {
            this.canvas.remove(this.canvas.getActiveObject());
            this.canvas.add(this.props.textStraight);
            this.selectItemAfterAdded(this.props.textStraight);
            // this.canvas.setActiveObject(this.props.textStraight);
            this.canvas.renderAll();
        }
    }
    reRender1() {
        this.canvas.getObjects().filter((o) => {
            if (o.get('type') === 'i-text') {
                return this.canvas.setActiveObject(o);
            }
        });
        // if (this.canvasCount !== 0) {
        //   // this.selectItemAfterAdded(this.props.textStraight);
        //   this.canvas.remove(this.canvas.getActiveObject());
        //   this.canvas.add(this.props.textStraight);
        //   this.canvas.renderAll();
        // }
    }
    // Block "Add images"
    getImgPolaroid(event) {
        $(document).on('click', '.deleteBtn', (event) => {
            this.removeSelected();
        });
        this.canvas.includeDefaultValues;
        this.objectTypeImage = 'image';
        this.canvasCount += 1;
        console.log(this.canvasCount, 'this.canvasCount');
        const el = event;
        let scale = 1;
        fabric.Image.fromURL(el, (image) => {
            this.image = image;
            if (image.height > 1300) {
                this.dataService.formatVal = this.dataService.formatValue = 'A3';
                if (image.height / image.width > 1.1) {
                    console.log('mage.height / image.width > 1.1');
                    this.dataService.horizontalVertical = true;
                    this.dataService.horVert = false;
                    // this.dataService.sizePrintKey = 686 / ((686 - 210) / 2);
                    this.dataService.formatWithHeight = 1.414;
                    this.dataService.formatTopKey = -0.00;
                    // this.dataService.scaleKey = 1;
                    this.dataService.formatSizeSwich();
                    scale = 1.05;
                }
                else {
                    console.log('mage.height / image.width > 1.1 else');
                    this.dataService.horizontalVertical = false;
                    // this.dataService.scaleKey = 1;
                    this.dataService.horVert = true;
                    this.dataService.formatWithHeight = 0.707;
                    // this.dataService.sizePrintKey = 686 / ((686 - 297) / 2);
                    this.dataService.formatTopKey = -0.00;
                    this.dataService.formatSizeSwich();
                    scale = 1;
                    // scale = this.dataService.scaleKey;
                }
            }
            else if (image.height > 100 && image.height < 1300) {
                this.dataService.formatVal = this.dataService.formatValue = 'A4';
                if (image.height / image.width > 1.1) {
                    this.dataService.horizontalVertical = true;
                    this.dataService.horVert = false;
                    // this.dataService.sizePrintKey = 686 / ((686 - 210) / 2);
                    this.dataService.formatWithHeight = 1.414;
                    this.dataService.formatTopKey = 0.08;
                    // this.dataService.scaleKey = 1;
                    this.dataService.formatSizeSwich();
                    scale = 1.05;
                }
                else {
                    this.dataService.horizontalVertical = false;
                    // this.dataService.scaleKey = 1;
                    this.dataService.horVert = true;
                    this.dataService.formatWithHeight = 0.707;
                    // this.dataService.sizePrintKey = 686 / ((686 - 297) / 2);
                    this.dataService.formatTopKey = -0.00;
                    this.dataService.formatSizeSwich();
                    scale = 1;
                    // scale = this.dataService.scaleKey;
                }
            }
            this.dataService.calcEndPrise();
            // function sizing() {
            //   if (image.height / image.width > 1.1) {
            //     this.dataService.horizontalVertical = true;
            //     this.dataService.horVert = false;
            //     // this.dataService.sizePrintKey = 686 / ((686 - 210) / 2);
            //     this.dataService.formatWithHeight = 1.414;
            //     this.dataService.formatTopKey = 0.03;
            //     // this.dataService.scaleKey = 1;
            //     this.dataService.formatSizeSwich();
            //     scale = 1.1;
            //   } else {
            //     this.dataService.horizontalVertical = false;
            //     // this.dataService.scaleKey = 1;
            //     this.dataService.horVert = true;
            //     this.dataService.formatWithHeight = 0.707;
            //     // this.dataService.sizePrintKey = 686 / ((686 - 297) / 2);
            //     // this.dataService.formatTopKey = -0.03;
            //     this.dataService.formatSizeSwich();
            //     scale = 1;
            //     // scale = this.dataService.scaleKey;
            //   }
            // }
            // const image = fabric.util.groupSVGElements(objects, options);
            const imageWidth = (window.innerWidth - this.dataService.widthKey * window.innerWidth) - 2 * ((window.innerWidth - this.dataService.widthKey * window.innerWidth) / this.b + (window.innerWidth - this.dataService.widthKey * window.innerWidth) / 40);
            const imageHeight = imageWidth * this.c;
            image.set({
                // multiplier: 0.5,
                // originX: 'center',
                // originY: 'center',
                // shadow: this.shadow,
                // strokeWidth: 3,
                // stroke: '#000',
                left: 130,
                // top: 50,
                angle: 0,
                padding: 0,
                cornerSize: this.canvas.width / 40,
                hasRotatingPoint: true,
            });
            // value.shadow.affectStroke = false;
            // image.panToActiveObject()
            image.scaleToWidth(imageWidth / scale);
            image.scaleToHeight(imageHeight / scale);
            this.extend(image, this.randomId());
            image.filters.push(new fabric.Image.filters.ColorMatrix({
                duration: 200,
                matrix: [1, 0, 0, 0, 0,
                    0, 1, 0, 0, 0,
                    0, 0, 1, 0, 0,
                    0, 0, 1, 1, 0]
            }));
            image.applyFilters();
            this.canvas.add(image);
            // this.canvas.centerObject(image);
            this.canvas.centerObjectH(image);
            image.top = this.canvas.width / 40 + this.canvas.width / this.b - this.canvas.width * this.a;
            this.canvas.renderAll();
            $('#hue-value').on('change', () => {
                // console.log(this.siteLayout.removeColorValue);
                image.filters = [];
                if (this.filterName == 'blackWhite') {
                    image.filters.push(new fabric.Image.filters.BlackWhite());
                }
                else if (this.filterName == 'vintage') {
                    image.filters.push(new fabric.Image.filters.Vintage());
                }
                else if (this.filterName == 'sepia') {
                    image.filters.push(new fabric.Image.filters.Sepia());
                }
                else if (this.filterName == 'invert') {
                    image.filters.push(new fabric.Image.filters.Invert());
                }
                else if (this.filterName == 'origin') {
                    image.filters = [];
                }
                image.filters.push(new fabric.Image.filters.RemoveColor({
                    distance: this.props.distance,
                }));
                image.applyFilters();
                this.canvas.renderAll();
            });
            $('#saturation').on('change', () => {
                image.filters = [];
                image.filters.push(new fabric.Image.filters.Saturation({
                    saturation: this.siteLayout.saturation
                }));
                image.applyFilters();
                this.canvas.renderAll();
            });
            $('#blur').on('change', () => {
                image.filters = [];
                image.filters.push(new fabric.Image.filters.Blur({
                    blur: this.siteLayout.blur
                }));
                image.applyFilters();
                this.canvas.renderAll();
            });
            $('#contrast1').on('change', () => {
                image.filters = [];
                image.filters.push(new fabric.Image.filters.Contrast({
                    contrast: this.siteLayout.contrast
                }));
                image.applyFilters();
                this.canvas.renderAll();
            });
            $('#noise').on('change', () => {
                image.filters = [];
                image.filters.push(new fabric.Image.filters.Noise({
                    noise: this.siteLayout.noise
                }));
                image.applyFilters();
                this.canvas.renderAll();
            });
            // console.log(image);
            $('#shadowSVG').on('change', () => {
                const obj = this.canvas.getActiveObject();
                if (this.siteLayout.shadowSVG === false) {
                    image.shadow = null;
                }
                else if (this.siteLayout.shadowSVG) {
                    image.shadow = new fabric.Shadow(this.shadow);
                    // image.setShadow(this.shadow);
                    // console.log(image);
                    // image.shadow = new fabric.Shadow(this.shadow);
                    // image.set('shadow', new fabric.Shadow(this.shadow));
                }
                this.canvas.renderAll();
            }),
                $('#grayscale').on('click', () => {
                    this.filterName = 'blackWhite';
                    this.props.distance = 0;
                    this.siteLayout.saturation = 0;
                    this.siteLayout.blur = 0;
                    this.siteLayout.noise = 0;
                    this.siteLayout.contrast = 0;
                    image.filters = [];
                    image.filters.push(new fabric.Image.filters.BlackWhite());
                    image.applyFilters();
                    this.canvas.renderAll();
                }),
                $('#vintage').on('click', () => {
                    this.filterName = 'vintage';
                    this.props.distance = 0;
                    this.siteLayout.saturation = 0;
                    this.siteLayout.blur = 0;
                    this.siteLayout.noise = 0;
                    this.siteLayout.contrast = 0;
                    image.filters = [];
                    image.filters.push(new fabric.Image.filters.Vintage());
                    image.applyFilters();
                    this.canvas.renderAll();
                }),
                $('#sepia').on('click', () => {
                    this.filterName = 'sepia';
                    this.props.distance = 0;
                    this.siteLayout.saturation = 0;
                    this.siteLayout.blur = 0;
                    this.siteLayout.noise = 0;
                    this.siteLayout.contrast = 0;
                    image.filters = [];
                    image.filters.push(new fabric.Image.filters.Sepia());
                    image.applyFilters();
                    // console.log(image);
                    //.filters[0].matrix[0]
                    this.canvas.renderAll();
                }),
                $('#invert').on('click', () => {
                    this.filterName = 'invert';
                    this.props.distance = 0;
                    this.siteLayout.saturation = 0;
                    this.siteLayout.blur = 0;
                    this.siteLayout.noise = 0;
                    this.siteLayout.contrast = 0;
                    image.filters = [];
                    image.filters.push(new fabric.Image.filters.Invert());
                    image.applyFilters();
                    // console.log(image);
                    //.filters[0].matrix[0]
                    this.canvas.renderAll();
                }),
                $('#origin').on('click', () => {
                    this.filterName = 'origin';
                    this.props.distance = 0;
                    this.siteLayout.saturation = 0;
                    this.siteLayout.blur = 0;
                    this.siteLayout.noise = 0;
                    this.siteLayout.contrast = 0;
                    image.filters = [];
                    // if (this.id == "svg") {
                    //   console.log("svg");
                    //   image.filters = [];
                    //   image.filters.push(new fabric.Image.filters.ColorMatrix({
                    //     matrix: [1, 0, 0, 0, 0,
                    //       0, 1, 0, 0, 0,
                    //       0, 0, 1, 0, 0,
                    //       0, 0, 1, 1, 0]
                    //   }));
                    //   image.applyFilters();
                    //   this.canvas.renderAll();
                    // }
                    // else if (this.id == "svgPhoto") {
                    //   console.log("svgPhoto");
                    //   image.filters = [];
                    //   image.filters.push(new fabric.Image.filters.ColorMatrix({
                    //     matrix: [1, 0, 0, 0, 0,
                    //       0, 1, 0, 0, 0,
                    //       0, 0, 1, 0, 0,
                    //       0, 0, 1, 1, 0]
                    //   }));
                    //   image.applyFilters();
                    //   this.canvas.renderAll();
                    // }
                    image.applyFilters();
                    this.canvas.renderAll();
                }),
                this.selectItemAfterAdded(image);
            setTimeout(() => {
                this.canvas.discardActiveObject().renderAll();
            }, 1500);
            // this.addDeleteBtn(image.oCoords.mb.x, image.oCoords.mb.y);
        });
        // event.target.left = 100;
        // event.target.top = 100;
        // event.target.setCoords({'left' : 50});
        // console.log(this.canvas.getActiveObject());
        // event.target.saveState();
        // this.canvas.renderAll();
        // event.target.setCoords()
    }
    // Block "Upload Image"
    addImageOnCanvas(url) {
        let numLeft = this.left;
        let numTop = this.top;
        function addDeleteBtn(x, y) {
            $(".deleteBtn").remove();
            var btnLeft = x - numLeft;
            var btnTop = y + numTop;
            var deleteBtn = '<img src="../assets/img/remove-icon-png-15.png" class="deleteBtn" style="position:absolute;top:' + btnTop + 'px;left:' + btnLeft + 'px; cursor:pointer; width:25px; height:25px;"/>';
            $(".canvas-container").append(deleteBtn);
        }
        this.canvas.on('selection:created', function (e) {
            $(".deleteBtn").remove();
            // console.log('selected');
            addDeleteBtn(e.target.oCoords.mb.x, e.target.oCoords.mb.y);
        });
        $(document).on('click', ".deleteBtn", (event) => {
            event.stopImmediatePropagation();
            const activeObject = this.canvas.getActiveObject();
            const activeGroup = this.canvas.getActiveObjects();
            this.canvasCount -= 1;
            // console.log(this.canvasCount);
            if (this.canvasCount === 0) {
                $('#shadow').prop('checked', false);
                this.siteLayout.shadow = false;
                $('.owl-nav').show();
                $(".canvas").css("z-index", 0);
                // this.siteLayout.isCarouselOpen = true;
                this.disableBtn = false;
                this.siteLayout.toggle = false;
            }
            if (activeObject) {
                this.canvas.remove(activeObject);
                $(".deleteBtn").remove();
                $(".distance").remove();
                // this.textString = '';
            }
            else if (activeGroup) {
                this.canvas.discardActiveObject();
                const self = this;
                activeGroup.forEach((object) => {
                    self.canvas.remove(object);
                });
            }
        });
        if (url) {
            this.canvasCount += 1;
            // console.log(url);
            let scale = 1.1;
            // console.log(this.canvasCount);
            fabric.Image.fromURL(url, (image1) => {
                if (this.canvasCount === 1) {
                    if (image1.height > 1300) {
                        this.dataService.formatVal = this.dataService.formatValue = 'A3';
                        if (image1.height / image1.width > 1.1) {
                            console.log('mage.height / image.width > 1.1');
                            this.dataService.horizontalVertical = true;
                            this.dataService.horVert = false;
                            // this.dataService.sizePrintKey = 686 / ((686 - 210) / 2);
                            this.dataService.formatWithHeight = 1.414;
                            this.dataService.formatTopKey = -0.03;
                            // this.dataService.scaleKey = 1;
                            this.dataService.formatSizeSwich();
                            scale = 1.05;
                        }
                        else {
                            console.log('mage.height / image.width > 1.1 else');
                            this.dataService.horizontalVertical = false;
                            // this.dataService.scaleKey = 1;
                            this.dataService.horVert = true;
                            this.dataService.formatWithHeight = 0.707;
                            // this.dataService.sizePrintKey = 686 / ((686 - 297) / 2);
                            this.dataService.formatTopKey = -0.03;
                            this.dataService.formatSizeSwich();
                            scale = 1;
                            // scale = this.dataService.scaleKey;
                        }
                    }
                    else if (image1.height > 100 && image1.height < 1300) {
                        this.dataService.formatVal = this.dataService.formatValue = 'A4';
                        if (image1.height / image1.width > 1.1) {
                            this.dataService.horizontalVertical = true;
                            this.dataService.horVert = false;
                            // this.dataService.sizePrintKey = 686 / ((686 - 210) / 2);
                            this.dataService.formatWithHeight = 1.414;
                            this.dataService.formatTopKey = 0.03;
                            // this.dataService.scaleKey = 1;
                            this.dataService.formatSizeSwich();
                            scale = 1.05;
                        }
                        else {
                            this.dataService.horizontalVertical = false;
                            // this.dataService.scaleKey = 1;
                            this.dataService.horVert = true;
                            this.dataService.formatWithHeight = 0.707;
                            // this.dataService.sizePrintKey = 686 / ((686 - 297) / 2);
                            this.dataService.formatTopKey = -0.03;
                            this.dataService.formatSizeSwich();
                            scale = 1;
                            // scale = this.dataService.scaleKey;
                        }
                    }
                }
                else {
                    if (image1.height > 1300) {
                        // this.dataService.formatVal = this.dataService.formatValue = 'A3';
                        if (image1.height / image1.width > 1.1) {
                            // this.dataService.horizontalVertical = true;
                            // this.dataService.horVert = false;
                            // this.dataService.sizePrintKey = 686 / ((686 - 210) / 2);
                            // this.dataService.formatWithHeight = 1.414;
                            // this.dataService.formatTopKey = -0.03;
                            // this.dataService.scaleKey = 1;
                            // this.dataService.formatSizeSwich();
                            scale = 1.3;
                        }
                        else {
                            this.dataService.horizontalVertical = false;
                            // this.dataService.scaleKey = 1;
                            // this.dataService.horVert = true;
                            // this.dataService.formatWithHeight = 0.707;
                            // this.dataService.sizePrintKey = 686 / ((686 - 297) / 2);
                            // this.dataService.formatTopKey = -0.03;
                            // this.dataService.formatSizeSwich();
                            scale = 2.3;
                            // scale = this.dataService.scaleKey;
                        }
                    }
                    else if (image1.height > 100 && image1.height < 1300) {
                        // this.dataService.formatVal = this.dataService.formatValue = 'A4';
                        if (image1.height / image1.width > 1.1) {
                            // this.dataService.horizontalVertical = true;
                            // this.dataService.horVert = false;
                            // this.dataService.sizePrintKey = 686 / ((686 - 210) / 2);
                            // this.dataService.formatWithHeight = 1.414;
                            // this.dataService.formatTopKey = 0.03;
                            // this.dataService.scaleKey = 1;
                            // this.dataService.formatSizeSwich();
                            scale = 1.3;
                        }
                        else {
                            // this.dataService.horizontalVertical = false;
                            // this.dataService.scaleKey = 1;
                            // this.dataService.horVert = true;
                            // this.dataService.formatWithHeight = 0.707;
                            // this.dataService.sizePrintKey = 686 / ((686 - 297) / 2);
                            // this.dataService.formatTopKey = -0.06;
                            // this.dataService.formatSizeSwich();
                            scale = 2.3;
                            // scale = this.dataService.scaleKey;
                        }
                    }
                }
                this.dataService.calcEndPrise();
                const imageWidth = (window.innerWidth - this.dataService.widthKey * window.innerWidth) - 2 * ((window.innerWidth - this.dataService.widthKey * window.innerWidth) / this.b + (window.innerWidth - this.dataService.widthKey * window.innerWidth) / 40);
                const imageHeight = imageWidth * this.c;
                image1.set({
                    // originX: 'center',
                    // originY: 'center',
                    // left: 110,
                    // top: 50,
                    quality: 1,
                    angle: 0,
                    padding: 0,
                    cornerSize: this.canvas.width / 40,
                    hasRotatingPoint: true
                });
                image1.scaleToWidth(imageWidth / scale);
                image1.scaleToHeight(imageHeight / scale);
                this.extend(image1, this.randomId());
                image1.filters.push(new fabric.Image.filters.ColorMatrix({
                    matrix: [1, 0, 0, 0, 0,
                        0, 1, 0, 0, 0,
                        0, 0, 1, 0, 0,
                        0, 0, 0, 1, 0]
                }));
                this.canvas.add(image1);
                this.canvas.centerObjectH(image1);
                image1.top = this.canvas.width / 40 + this.canvas.width / this.b - this.canvas.width * this.a;
                image1.applyFilters();
                this.canvas.renderAll();
                $('#hue-value').on('change', () => {
                    // console.log(this.siteLayout.removeColorValue);
                    image1.filters = [];
                    if (this.filterName == 'blackWhite') {
                        image1.filters.push(new fabric.Image.filters.BlackWhite());
                    }
                    else if (this.filterName == 'vintage') {
                        image1.filters.push(new fabric.Image.filters.Vintage());
                    }
                    else if (this.filterName == 'sepia') {
                        image1.filters.push(new fabric.Image.filters.Sepia());
                    }
                    else if (this.filterName == 'invert') {
                        image1.filters.push(new fabric.Image.filters.Invert());
                    }
                    else if (this.filterName == 'origin') {
                        image1.filters.push(new fabric.Image.filters.ColorMatrix({
                            matrix: [1, 0, 0, 0, 0,
                                0, 1, 0, 0, 0,
                                0, 0, 1, 0, 0,
                                0, 0, 0, 1, 0]
                        }));
                    }
                    image1.filters.push(new fabric.Image.filters.RemoveColor({
                        distance: this.props.distance
                    }));
                    image1.applyFilters();
                    this.canvas.renderAll();
                });
                $('#saturation').on('change', () => {
                    image1.filters = [];
                    image1.filters.push(new fabric.Image.filters.Saturation({
                        saturation: this.siteLayout.saturation
                    }));
                    image1.applyFilters();
                    this.canvas.renderAll();
                });
                $('#blur').on('change', () => {
                    image1.filters = [];
                    image1.filters.push(new fabric.Image.filters.Blur({
                        blur: this.siteLayout.blur
                    }));
                    image1.applyFilters();
                    this.canvas.renderAll();
                });
                $('#contrast1').on('change', () => {
                    image1.filters = [];
                    image1.filters.push(new fabric.Image.filters.Contrast({
                        contrast: this.siteLayout.contrast
                    }));
                    image1.applyFilters();
                    this.canvas.renderAll();
                });
                $('#noise').on('change', () => {
                    image1.filters = [];
                    image1.filters.push(new fabric.Image.filters.Noise({
                        noise: this.siteLayout.noise
                    }));
                    image1.applyFilters();
                    this.canvas.renderAll();
                });
                $('#shadow').on('change', () => {
                    const obj = this.canvas.getActiveObject();
                    if (this.siteLayout.shadow === false) {
                        image1.shadow = null;
                    }
                    else if (this.siteLayout.shadow) {
                        image1.setShadow(this.shadowPNJ);
                        // console.log('mmmm');
                    }
                    // this.canvas.toDataURL({
                    //   format: 'png',
                    //   quality: 1
                    // });
                    this.canvas.renderAll();
                }),
                    $('#grayscale').on('click', () => {
                        this.filterName = 'blackWhite';
                        this.siteLayout.removeColorValue = 0;
                        this.siteLayout.saturation = 0;
                        this.siteLayout.blur = 0;
                        this.siteLayout.noise = 0;
                        this.siteLayout.contrast = 0;
                        image1.filters = [];
                        image1.filters.push(new fabric.Image.filters.BlackWhite());
                        image1.applyFilters();
                        this.canvas.renderAll();
                    }),
                    $('#vintage').on('click', () => {
                        this.filterName = 'vintage';
                        this.siteLayout.removeColorValue = 0;
                        this.siteLayout.saturation = 0;
                        this.siteLayout.blur = 0;
                        this.siteLayout.noise = 0;
                        this.siteLayout.contrast = 0;
                        image1.filters = [];
                        image1.filters.push(new fabric.Image.filters.Vintage());
                        image1.applyFilters();
                        this.canvas.renderAll();
                    }),
                    $('#sepia').on('click', () => {
                        this.filterName = 'sepia';
                        this.siteLayout.removeColorValue = 0;
                        this.siteLayout.saturation = 0;
                        this.siteLayout.blur = 0;
                        this.siteLayout.noise = 0;
                        this.siteLayout.contrast = 0;
                        image1.filters = [];
                        image1.filters.push(new fabric.Image.filters.Sepia());
                        image1.applyFilters();
                        // console.log(image1);
                        //.filters[0].matrix[0]
                        this.canvas.renderAll();
                    }),
                    $('#invert').on('click', () => {
                        this.filterName = 'invert';
                        this.siteLayout.removeColorValue = 0;
                        this.siteLayout.saturation = 0;
                        this.siteLayout.blur = 0;
                        this.siteLayout.noise = 0;
                        this.siteLayout.contrast = 0;
                        image1.filters = [];
                        image1.filters.push(new fabric.Image.filters.Invert());
                        image1.applyFilters();
                        // console.log(image1);
                        //.filters[0].matrix[0]
                        this.canvas.renderAll();
                    }),
                    $('#origin').on('click', () => {
                        this.filterName = 'origin';
                        this.siteLayout.removeColorValue = 0;
                        this.siteLayout.saturation = 0;
                        this.siteLayout.blur = 0;
                        this.siteLayout.noise = 0;
                        this.siteLayout.contrast = 0;
                        image1.filters = [];
                        image1.filters.push(new fabric.Image.filters.ColorMatrix({
                            matrix: [1, 0, 0, 0, 0,
                                0, 1, 0, 0, 0,
                                0, 0, 1, 0, 0,
                                0, 0, 0, 1, 0]
                        }));
                        image1.applyFilters();
                        this.canvas.renderAll();
                    }),
                    this.selectItemAfterAdded(image1);
                this.canvas.discardActiveObject().renderAll();
                this.addDeleteBtn(image1.oCoords.mb.x, image1.oCoords.mb.y);
            });
        }
    }
    readUrl(event) {
        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (readerEvent) => {
                this.url = readerEvent.target.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    }
    removeWhite(url) {
        this.url = '';
    }
    // Block "Add figure"
    addFigure(figure) {
        this.canvasCount += 1;
        console.log(this.canvasCount, 'figure');
        $(document).on('click', ".deleteBtn", (event) => {
            event.stopImmediatePropagation();
            this.canvasCount -= 1;
            const activeObject = this.canvas.getActiveObject();
            const activeGroup = this.canvas.getActiveObjects();
            // console.log(this.canvasCount);
            if (this.canvasCount === 0) {
                this.siteLayout.firstImage = 0;
                // this.siteLayout.isOpasity=true;
                $('.owl-nav').show();
                $(".canvas").css("z-index", 0);
                this.disableBtn = false;
                this.siteLayout.toggle = false;
            }
            if (activeObject) {
                this.canvas.remove(activeObject);
                $(".deleteBtn").remove();
                // this.textString = '';
            }
            else if (activeGroup) {
                this.canvas.discardActiveObject();
                const self = this;
                activeGroup.forEach((object) => {
                    self.canvas.remove(object);
                });
            }
        });
        let add;
        switch (figure) {
            case 'rectangle':
                add = new fabric.Rect({
                    cornerSize: 11,
                    padding: 0,
                    width: 200,
                    height: 100,
                    left: 20,
                    top: 50,
                    angle: 0,
                    fill: '#3f51b5'
                });
                break;
            case 'square':
                add = new fabric.Rect({
                    cornerSize: 11,
                    padding: 0,
                    width: 100, height: 100, left: 20, top: 20, angle: 0,
                    fill: '#4caf50'
                });
                break;
            case 'triangle':
                add = new fabric.Triangle({
                    cornerSize: 11,
                    padding: 0,
                    width: 100, height: 100, left: 20, top: 20, fill: '#2196f3'
                });
                break;
            case 'circle':
                add = new fabric.Circle({
                    cornerSize: 11,
                    padding: 0,
                    radius: 50, left: 20, top: 20, fill: '#ff5722'
                });
                break;
        }
        $('#shadow').on('click', () => {
            // console.log('figure');
            const obj = this.canvas.getActiveObject();
            if (!this.siteLayout.shadow) {
                add.shadow = null;
            }
            else if (this.siteLayout.shadow) {
                add.setShadow(this.shadowFigur);
            }
            // this.canvas.toDataURL({
            //   format: 'png',
            //   quality: 1
            // });
            this.canvas.renderAll();
        }),
            this.extend(add, this.randomId());
        this.canvas.add(add);
        this.canvas.centerObjectH(add);
        add.top = this.canvas.width / 40 + this.canvas.width / this.b - this.canvas.width * this.a;
        this.selectItemAfterAdded(add);
    }
    /*Canvas*/
    moveWithFormat(scaleKey, scaleBlock) {
        console.log(this.a, this.b, this.c, 'scale', scaleBlock, this.d, scaleKey);
        this.scaleKey = 0;
        this.scaleKey = this.d;
        if (this.canvasCount !== 0) {
            this.canvas.discardActiveObject().renderAll();
            var sel = new fabric.Group(this.canvas.getObjects(), {
                canvas: this.canvas,
            });
            this.canvas.remove(...this.canvas.getObjects());
            // sel.setControlsVisibility({
            //   ml: false, //top left
            //   mr: false, //top right
            //   mb: false, //bottom left
            //   mt: false //bottom right
            // });
            sel.lockScalingFlip = true;
            // sel.uniformScaling = true;
            this.canvas.add(sel);
            const formatWidth = (window.innerWidth - this.dataService.widthKey * window.innerWidth) - 2 * ((window.innerWidth - this.dataService.widthKey * window.innerWidth) / this.b + (window.innerWidth - this.dataService.widthKey * window.innerWidth) / 40);
            const formatHeight = formatWidth * this.c;
            this.canvasCount = 1;
            this.intCountText = 0;
            if (scaleBlock) {
                if (this.dataService.horVert) {
                    if (this.dataService.horizontalVertical) {
                        if (this.objectType) {
                            sel.scaleToWidth(formatWidth * scaleKey / 1.3);
                            sel.scaleToWidth(formatHeight * scaleKey / 1.3);
                        }
                        else {
                            sel.scaleToWidth(formatWidth * scaleKey / 1);
                            sel.scaleToHeight(formatHeight * scaleKey / 1);
                        }
                    }
                    else {
                        if (this.objectType) {
                            sel.scaleToWidth(formatWidth * scaleKey / 0.8);
                            sel.scaleToWidth(formatHeight * scaleKey / 0.8);
                        }
                        else {
                            sel.scaleToWidth(formatWidth * scaleKey / 1);
                            sel.scaleToHeight(formatHeight * scaleKey / 1);
                        }
                    }
                }
                else {
                    if (this.dataService.horizontalVertical) {
                        if (this.objectType) {
                            sel.scaleToWidth(formatWidth * scaleKey / 6);
                            sel.scaleToWidth(formatHeight * scaleKey / 6);
                        }
                        else {
                            sel.scaleToWidth(formatWidth * scaleKey / 4.8);
                            sel.scaleToHeight(formatHeight * scaleKey / 4.8);
                        }
                    }
                    else {
                        if (this.objectType) {
                            sel.scaleToWidth(formatWidth * scaleKey / 3.5);
                            sel.scaleToWidth(formatHeight * scaleKey / 3.5);
                        }
                        else {
                            sel.scaleToWidth(formatWidth * scaleKey / 4.8);
                            sel.scaleToHeight(formatHeight * scaleKey / 4.8);
                        }
                    }
                }
                // sel.With = (window.innerWidth - this.dataService.widthKey * window.innerWidth) - 2 * ((window.innerWidth - this.dataService.widthKey * window.innerWidth) / this.b + (window.innerWidth - this.dataService.widthKey * window.innerWidth) / 40);
                // console.log('editor', this.d);
                // sel.Height = sel.width * this.c;
                // sel.setCoords();
                // sel.saveState();
                // this.canvas.renderAll();
            }
            sel.minScaleLimit = 0.02;
            // sel.lockScalingY = true;
            // this.canvas.centerObjectH(sel);
            // sel.top = this.canvas.height / 3.7;
            this.canvas.setActiveObject(sel);
            let matrix = sel.calcTransformMatrix();
            let imageCoordx = matrix[4];
            let imageCoordy = matrix[5];
            this.canvas.centerObjectH(sel);
            let top = this.canvas.width / 40 + this.canvas.width / this.b - this.canvas.width * this.a;
            sel.top = top;
            console.log('momos', scaleBlock);
            // this.canvas.centerObjectH(sel);
            sel.set({ cornerSize: this.canvas.width / 40 });
            // sel.minScaleLimit()
            // this.canvas.getActiveObject().left += 10;
            // this.canvas.getActiveObject().setCoords();
            // this.canvas.getActiveObject().saveState();
            // this.canvas.renderAll();
            $(".deleteBtn").remove();
            $(".distance").remove();
            $(".distanceY").remove();
            // console.log('added');
            // addDistancePoint(imageCoordy, imageCoordx);
            this.addArrow(imageCoordy, 2);
            $(".distanceY").remove();
            // addDistancePoint(imageCoordy, imageCoordx);
            this.addArrowUp(imageCoordx, 2);
            this.addDeleteBtn(sel.oCoords.mb.x, sel.oCoords.mb.y);
            sel.setCoords();
            sel.saveState();
            this.canvas.renderAll();
        }
    }
    cleanSelect() {
        // this.canvas.discardActiveObject().renderAll();
        // var Group = new fabric.Group([...this.canvas.getObjects()]);
        // this.canvas.add(Group);
        // this.selectItemAfterAdded(this.canvas.item(0));
        // this.canvas.renderAll();
        this.canvas.discardActiveObject().renderAll();
        var sel = new fabric.Group(this.canvas.getObjects(), {
            canvas: this.canvas
        });
        this.canvas.remove(...this.canvas.getObjects());
        this.canvas.add(sel);
        this.canvas.centerObjectH(sel);
        sel.top = this.canvas.height / 3.7;
        this.canvas.setActiveObject(sel);
        this.canvas.renderAll();
        // this.canvas.on({
        //   'object:scaling': onChange
        // })
        // function onChange(obj) {
        //   var 
        //     group = obj.target,
        //     scaleX = obj.target.item().width / group.getWidth(),
        //     scaleY = obj.target.item().height / group.getHeight();
        //     obj.target.item().setScaleX(scaleX);
        //     obj.target.item().setScaleY(scaleY);
        // }
    }
    selectItemAfterAdded(obj) {
        this.getOpacity();
        this.canvas.discardActiveObject().renderAll();
        this.canvas.setActiveObject(obj);
    }
    setCanvasFill() {
        // if (!this.props.canvasImage) {
        this.canvas.backgroundColor = this.props.canvasFill;
        this.canvas.renderAll();
        const inputProductColor = this.siteLayout.inputColor.nativeElement;
        inputProductColor.style.backgroundColor = this.props.canvasFill;
        inputProductColor.value = this.props.canvasFill;
        // this.siteLayout.IMG.nativeElement.innerHTML.backgroundColor = this.props.canvasFill;
        // this.canvas1.backgroundColor = this.props.canvasFill;
        // this.canvas1.renderAll();
        // }
    }
    drawFill() {
        // if (!this.props.canvasImage) {
        // this.canvas.backgroundColor = this.props.canvasFill;
        this.canvas.renderAll();
        // this.canvas1.renderAll();
        // }
    }
    extend(obj, id) {
        obj.toObject = ((toObject) => {
            return function () {
                return fabric.util.object.extend(toObject.call(this), {
                    id
                });
            };
        })(obj.toObject);
    }
    productsTypeColor() {
        if (this.siteLayout.allColors === true) {
            this.props.canvasFill = this.siteLayout.arrColor[0];
            this.canvas.backgroundColor = this.siteLayout.arrColor[0];
        }
        else if (this.siteLayout.allColors === false) {
            this.props.canvasFill = this.siteLayout.productBrandColors[0];
            this.canvas.backgroundColor = this.siteLayout.productBrandColors[0];
            // this.canvas.renderAll();
        }
    }
    // productsTypeSise() {
    //   if (this.siteLayout.allColors === true) {
    //     this.siteLayout.productBrandSizes = this.siteLayout.arrColor[0];
    //     this.canvas.backgroundColor = this.siteLayout.arrColor[0];
    //   } else if (this.siteLayout.allColors === false) {
    //     this.props.canvasFill = this.siteLayout.productBrandColors[0];
    //     this.canvas.backgroundColor = this.siteLayout.productBrandColors[0];
    //     // this.canvas.renderAll();
    //   }
    // }
    setCanvasImage() {
        const image = this.props.canvasImage;
        this.canvas.setBackgroundImage(image, this.canvas.renderAll.bind(this.canvas), {
            opacity: 1,
            angle: 0,
            left: 0,
            top: 0,
            originX: 'left',
            originY: 'top',
            crossOrigin: 'anonymous',
            scaleX: this.canvas.width / 360,
            scaleY: this.canvas.height / 460,
        });
        // const square = new fabric.Rect({
        //   width: this.canvas.width - 2 * (this.canvas.width / 4.37 + this.canvas.width / 40),
        //   height: this.canvas.height - 2 * (this.canvas.width / 4.37 + this.canvas.width / 40),
        //   left: this.canvas.width / 40 + this.canvas.width / 4.37,
        //   top: this.canvas.width / 40 + this.canvas.width / 4.37,
        //   // borderColor: '#000',
        //   // fill: '#000',
        //   // Color: '#000',
        //   hasControls: false,
        //   lockMovementX: true,
        //   lockMovementY: true,
        //   // strokeWidth: 5,
        //   strokeDashArray: [7],
        //   stroke: '#474747',
        //   strokeWidth: 2,
        //   fill: 'rgba(0,0,0,0)',
        //   selectable: false,
        //   evented: false,
        // });
        // this.canvas.add(square);
        // // this.canvasCount -=1;
        // // this.canvas.renderAll();
        // // this.canvas.setActiveObject(square);
    }
    // sizeFormat() {
    //   // const image = this.props.canvasImage;
    //   // this.canvas.setBackgroundImage(image,
    //   //   this.canvas.renderAll.bind(this.canvas), {)
    //   const square = new fabric.Rect({
    //     width: this.canvas.width - 2 * (this.canvas.width / 4.37 + this.canvas.width / 40),
    //     height: this.canvas.height - 2 * (this.canvas.width / 4.37 + this.canvas.width / 40),
    //     left: this.canvas.width / 40 + this.canvas.width / 4.37,
    //     top: this.canvas.width / 40 + this.canvas.width / 4.37,
    //     // borderColor: '#000',
    //     // fill: '#000',
    //     // Color: '#000',
    //     hasControls: false,
    //     lockMovementX: true,
    //     lockMovementY: true,
    //     // strokeWidth: 5,
    //     strokeDashArray: [7],
    //     stroke: '#474747',
    //     strokeWidth: 2,
    //     fill: 'rgba(0,0,0,0)',
    //     selectable: false,
    //     evented: false,
    //   });
    //   this.canvas.add(square);
    //    console.log(this.canvas.width / 40 + this.canvas.width / 4.37);
    // this.canvas.add(square);
    // if (checkWidth = 640) {
    //   this.canvas.add(square);
    //   return
    // }
    // if (checkWidth > 640 && checkWidth < 1007) {
    //   this.canvas.add(square);
    //   return
    // }
    // if (checkWidth > 1007) {
    //   this.canvas.add(square);
    //   return
    // }
    // this.canvasCount -=1;
    // this.canvas.renderAll();
    // this.canvas.setActiveObject(square); 
    // }
    // setCanvasImage1() {
    //   const image2 = this.props.canvasImage;
    //   this.canvas1.setBackgroundImage(image2,
    //     this.canvas1.renderAll.bind(this.canvas1), {
    //     opacity: 1,
    //     angle: 0,
    //     left: 0,
    //     top: 0,
    //     originX: 'left',
    //     originY: 'top',
    //     crossOrigin: 'anonymous',
    //     scaleX: this.canvas1.width / 360,
    //     scaleY: this.canvas1.height / 460,
    //     // width: this.siteLayout.canvasHtmlWidth,
    //     // height: this.siteLayout.canvasHtmlHeight + 93
    //     // crossOrigin: 'anonymous'
    //     // this.canvas.setBackgroundImage(img);
    //     // this.canvas.requestRenderAll();
    //   });
    //   console.log(this.canvas1.toSVG());
    // }
    randomId() {
        return Math.floor(Math.random() * 999999) + 1;
    }
    /*------------------------Global actions for element------------------------*/
    getActiveStyle(styleName, object) {
        object = object || this.canvas.getActiveObject();
        if (!object) {
            return '';
        }
        if (object.getSelectionStyles && object.isEditing) {
            return (object.getSelectionStyles()[styleName] || '');
        }
        else {
            return (object[styleName] || '');
        }
    }
    setActiveStyle(styleName, value, object) {
        object = object || this.canvas.getActiveObject();
        if (!object) {
            return;
        }
        if (object.setSelectionStyles && object.isEditing) {
            const style = {};
            style[styleName] = value;
            if (typeof value === 'string') {
                if (value.includes('underline')) {
                    object.setSelectionStyles({ underline: true });
                }
                else {
                    object.setSelectionStyles({ underline: false });
                }
                if (value.includes('overline')) {
                    object.setSelectionStyles({ overline: true });
                }
                else {
                    object.setSelectionStyles({ overline: false });
                }
                if (value.includes('line-through')) {
                    object.setSelectionStyles({ linethrough: true });
                }
                else {
                    object.setSelectionStyles({ linethrough: false });
                }
            }
            object.setSelectionStyles(style);
            object.setCoords();
        }
        else {
            if (typeof value === 'string') {
                if (value.includes('underline')) {
                    object.set('underline', true);
                }
                else {
                    object.set('underline', false);
                }
                if (value.includes('overline')) {
                    object.set('overline', true);
                }
                else {
                    object.set('overline', false);
                }
                if (value.includes('line-through')) {
                    object.set('linethrough', true);
                }
                else {
                    object.set('linethrough', false);
                }
            }
            object.set(styleName, value);
        }
        object.setCoords();
        this.canvas.renderAll();
    }
    getActiveProp(name) {
        const object = this.canvas.getActiveObject();
        if (!object) {
            return '';
        }
        return object[name] || '';
    }
    setActiveProp(name, value) {
        const object = this.canvas.getActiveObject();
        if (!object) {
            return;
        }
        object.set(name, value).setCoords();
        this.canvas.renderAll();
    }
    clone() {
        // this.defoultUpdate()
        const activeObject = this.canvas.getActiveObject();
        const activeGroup = this.canvas.getActiveObjects();
        if (activeObject) {
            let clone;
            switch (activeObject.type) {
                case 'rect':
                    clone = new fabric.Rect(activeObject.toObject());
                    // this.canvasCount += 1;
                    // console.log(this.canvasCount);
                    break;
                case 'circle':
                    clone = new fabric.Circle(activeObject.toObject());
                    // this.canvasCount += 1;
                    // console.log(this.canvasCount);
                    break;
                case 'triangle':
                    clone = new fabric.Triangle(activeObject.toObject());
                    // this.canvasCount += 1;
                    // console.log(this.canvasCount);
                    break;
                case 'i-text':
                    clone = new fabric.IText('', activeObject.toObject());
                    // this.canvasCount += 1;
                    // console.log(this.canvasCount);
                    this.canvas.getActiveObject();
                    break;
                case 'image':
                    clone = fabric.util.object.clone(activeObject);
                    // this.canvasCount += 1;
                    // console.log(this.canvasCount);
                    break;
            }
            if (clone) {
                this.canvas.add(clone);
                this.bringToFront();
                this.canvasCount += 1;
                console.log(this.canvasCount, 'figure');
                // this.selectItemAfterAdded(clone);
                // this.defoultUpdate();
                this.canvas.centerObjectH(clone);
                clone.top = this.canvas.width / 40 + this.canvas.width / this.b - this.canvas.width * this.a;
                this.canvas.getActiveObject();
            }
        }
    }
    getId() {
        this.props.id = this.canvas.getActiveObject().toObject().id;
        this.canvas.toSVG();
        console.log(this.canvas);
    }
    setId() {
        const val = this.props.id;
        const complete = this.canvas.getActiveObject().toObject();
        // console.log(complete);
        this.canvas.getActiveObject().toObject = () => {
            complete.id = val;
            return complete;
        };
    }
    getDistance() {
        this.props.distance = this.getActiveStyle('distance', null) * 10;
        console.log('getDistance');
    }
    setDistance() {
        this.setActiveStyle('distance', parseInt(this.props.distance, 10) / 100, null);
    }
    getOpacity() {
        this.props.opacity = this.getActiveStyle('opacity', null) * 100;
    }
    setOpacity() {
        this.setActiveStyle('opacity', parseInt(this.props.opacity, 10) / 100, null);
    }
    getFill() {
        this.props.fill = this.getActiveStyle('fill', null);
    }
    setFill() {
        this.setActiveStyle('fill', this.props.fill, null);
    }
    getCharSpacing() {
        this.props.charSpacing = this.getActiveStyle('charSpacing', null);
    }
    setCharSpacing() {
        this.setActiveStyle('charSpacing', this.props.charSpacing, null);
    }
    getFontSize() {
        this.props.fontSize = this.getActiveStyle('fontSize', null);
        console.log('getFontSize');
    }
    setFontSize() {
        this.setActiveStyle('fontSize', parseInt(this.props.fontSize, 10), null);
        console.log('setFontSize');
    }
    getBold() {
        this.props.fontWeight = this.getActiveStyle('fontWeight', null);
    }
    setBold() {
        this.props.fontWeight = !this.props.fontWeight;
        this.setActiveStyle('fontWeight', this.props.fontWeight ? 'bold' : '', null);
    }
    setFontStyle() {
        this.props.fontStyle = !this.props.fontStyle;
        if (this.props.fontStyle) {
            this.setActiveStyle('fontStyle', 'italic', null);
        }
        else {
            this.setActiveStyle('fontStyle', 'normal', null);
        }
    }
    getTextDecoration() {
        this.props.TextDecoration = this.getActiveStyle('textDecoration', null);
    }
    setTextDecoration(value) {
        let iclass = this.props.TextDecoration;
        if (iclass.includes(value)) {
            iclass = iclass.replace(RegExp(value, 'g'), '');
        }
        else {
            iclass += ` ${value}`;
        }
        this.props.TextDecoration = iclass;
        this.setActiveStyle('textDecoration', this.props.TextDecoration, null);
    }
    hasTextDecoration(value) {
        return this.props.TextDecoration.includes(value);
    }
    getTextAlign() {
        this.props.textAlign = this.getActiveProp('textAlign');
    }
    setTextAlign(value) {
        this.props.textAlign = value;
        this.setActiveProp('textAlign', this.props.textAlign);
    }
    getFontFamily() {
        this.props.fontFamily = this.getActiveProp('fontFamily');
    }
    setFontFamily() {
        this.setActiveProp('fontFamily', this.props.fontFamily);
    }
    /*System*/
    removeSelected() {
        // if (this.canvasCount === 1 && this.objectTypeImage === 'image') {
        //   this.canvas.remove(...this.canvas.getObjects());
        //   $(".deleteBtn").remove();
        //   $(".distance").remove();
        //   $('#shadowSVG').prop('checked', false);
        //   this.siteLayout.shadowSVG = false;
        //   $('.owl-nav').show();
        //   $(".canvas").css("z-index", 0);
        //   this.siteLayout.toggle = false;
        //   this.disableBtn = false;
        //   // console.log(this.canvasCount);
        //   this.canvasCount -= 1;
        // }
        // console.log(this.canvasCount);
        this.objectType = false;
        // this.dataService.scaleKey = 1;
        this.props.diametr = 300;
        if (this.canvas.getActiveObject().type === 'i-text') {
            this.intCountText -= 1;
            // console.log(this.intCountText);
        }
        const activeObject = this.canvas.getActiveObject();
        const activeGroup = this.canvas.getActiveObjects();
        this.canvasCount -= 1;
        this.siteLayout.isCarouselOpen = true;
        // this.siteLayout.firstImage = 2;
        if (this.canvasCount === 0) {
            $('#shadowSVG').prop('checked', false);
            this.siteLayout.shadowSVG = false;
            $('.owl-nav').show();
            $(".canvas").css("z-index", 0);
            this.siteLayout.toggle = false;
            this.disableBtn = false;
        }
        if (activeObject) {
            this.canvas.remove(activeObject);
            // this.textString = '';
        }
        else if (activeGroup) {
            // console.log('group');
            this.canvas.discardActiveObject();
            const self = this;
            activeGroup.forEach((object) => {
                self.canvas.remove(object);
            });
        }
        console.log(this.canvasCount, 'soso');
    }
    bringToFront() {
        const activeObject = this.canvas.getActiveObject();
        const activeGroup = this.canvas.getActiveObjects();
        if (activeObject) {
            activeObject.bringToFront();
            // this.canvas.renderAll()
            // this.cleanSelect();
            // activeObject.opacity = 1;
        }
        else if (activeGroup) {
            this.canvas.discardActiveObject();
            activeGroup.forEach((object) => {
                object.bringToFront();
                // this.canvas.renderAll()
            });
        }
    }
    sendToBack() {
        const activeObject = this.canvas.getActiveObject();
        const activeGroup = this.canvas.getActiveObjects();
        if (activeObject) {
            this.canvas.sendToBack(activeObject);
            // activeObject.sendToBack();
            this.canvas.renderAll();
            // this.cleanSelect();
            // activeObject.opacity = 1;
        }
        else if (activeGroup) {
            this.canvas.discardActiveObject();
            activeGroup.forEach((object) => {
                object.sendToBack();
                this.canvas.renderAll();
            });
        }
    }
    confirmClear() {
        if (confirm('Are you sure?')) {
            // location.reload(); 
            this.canvas.remove(...this.canvas.getObjects());
            this.canvasCount = 0;
            $('.owl-nav').show();
            // $(".canvas").css("z-index", 0);
            this.disableBtn = false;
            this.siteLayout.toggle = false;
            // this.canvas.clear();
            // $(".distance").remove();
        }
    }
    // grayScale(url) {
    //   console.log(url);
    //   const activeObject = this.canvas.getActiveObject();
    //   fabric.Image.fromURL(url, (image) => {
    //     var filter =  fabric.Image.filters.Grayscale();
    //     image.filters.push(filter);
    //     // image.applyFilters();
    //     // this.canvas.add(image);
    //     image.applyFilters( this.canvas.renderAll.bind( this.canvas ) );
    //     this.canvas.renderAll();
    //   })
    // }
    rasterize() {
        const image = new Image(360, 460);
        // const w = window.open('');
        // w.document.write(this.canvas.toSVG());
        image.src = this.canvas.toDataURL({ format: 'png', multiplier: 4 });
        // this.setCanvasImage();
        // const w = window.open();
        // w.document.write(
        //   `<div style='margin-top: 100px'>${image.outerHTML}</div>` 
        // // this.hello.nativeElement.innerHTML,
        // );
        this.reqImage = image.src;
        this.orderDatas.imageSrc = image.src;
        this.canvas.renderAll();
        const lastColor = this.props.canvasFill;
        // this.saveCanvasToJSON();
        this.canvas.backgroundImage = null;
        // this.canvas.backgroundColor = null;
        this.canvas.renderAll();
        this.canvas.backgroundImage = null;
        // this.canvas.remove(...this.canvas.getObjects())
        // console.log(this.canvas.toSVG());
        let svgUrll;
        switch (this.props.textCurved) {
            case 1:
                svgUrll = this.canvas.toSVG();
                // console.log(this.canvas.toSVG());
                break;
            case 2:
                svgUrll = this.canvas.toSVG().toString().replace(/<tspan/g, "<textPath xlink:href='#urve'><tspan").replace(/tspan>/g, "tspan></textPath>").replace(/tspan x="/g, 'tspan x="0*').replace("</defs>", `</defs> ${this.path.toSVG()}`).replace('style="stroke', 'id = "urve" style="stroke').replace("</defs>", `</defs> ${this.path.toSVG()}`).replace('style="stroke', 'id = "urve1" style="stroke');
                break;
        }
        // if (this.props.textCurved === 1) {
        //   svgUrll = this.canvas.toSVG();
        // } else if () {
        //   svgUrll = this.canvas.toSVG().toString().replace(/<tspan/i, "<textPath xlink:href='#urve'><tspan").replace(/tspan>/i, "tspan></textPath>").replace(/tspan x="/i, 'tspan x="0*').replace("</defs>", `</defs> ${this.path.toSVG()}`).replace('style="stroke', 'id = "urve" style="stroke').replace("</defs>", `</defs> ${this.path.toSVG()}`).replace('style="stroke', 'id = "urve1" style="stroke');
        // }
        // var svgUrl = this.canvas.toSVG().toString().replace(/<tspan/i, "<textPath xlink:href='#urve'><tspan").replace(/tspan>/i, "tspan></textPath>").replace(/tspan x="/i, 'tspan x="0*').replace("</defs>", `</defs> ${this.path.toSVG()}`).replace('style="stroke', 'id = "urve" style="stroke').replace("</defs>", `</defs> ${this.path.toSVG()}`).replace('style="stroke', 'id = "urve1" style="stroke');
        // var svgUrl = this.canvas.toSVG().replace("<defs>", '').replace("</defs>", this.test);
        // console.log(svgUrl);
        // console.log(svgUrl);
        var svg_image = "data:image/svg+xml," + encodeURIComponent(svgUrll);
        this.reqImage1 = svg_image;
        //  this.canvas.getActiveObject().width;
        //  this.canvas.getActiveObject().height;
        // console.log(link.outerHTML);
        this.loadCanvasFromJSON();
        this.setCanvasImage();
        // this.setCanvasImage1();
        // this.canvas.backgroundColor = lastColor;
        const CANVAS = localStorage.getItem('Canvas');
    }
    // cloneCanvas() {
    //   this.canvas1.loadFromJSON(JSON.stringify(this.canvas),
    //     () => this.canvas1.renderAll());
    // }
    rasterizeSVG() {
        const image = new Image(360, 460);
        // image.scaleToWidth(150);
        // image.scaleToHeight(150);
        const w = window.open('');
        // this.canvas.toSVG()
        w.document.write(this.canvas.toSVG());
        var svgBlob = new Blob([this.canvas.toSVG()], { type: "image/svg+xml;charset=utf-8" });
        this.canvas.renderAll();
        var svgUrl = URL.createObjectURL(svgBlob);
        var link = document.createElement('a');
        link.href = svgUrl;
        link.download = image.outerHTML;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        // return 'data:image/svg+xml;utf8,' + encodeURIComponent(this.canvas.toSVG());
        //stackowerflow
        // var svgData = $("#figureSvg")[0].outerHTML;
        // var svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
        // var svgUrl = URL.createObjectURL(svgBlob);
        // var downloadLink = document.createElement("a");
        // downloadLink.href = svgUrl;
        // downloadLink.download = "newesttree.svg";
        // document.body.appendChild(downloadLink);
        // downloadLink.click();
        // document.body.removeChild(downloadLink);
    }
    saveCanvasToJSON() {
        const json = JSON.stringify(this.canvas);
        // localStorage.setItem('Kanvas', json);
        // console.log('json');
        // console.log(json);
    }
    loadCanvasFromJSON() {
        // const CANVAS = localStorage.getItem('Kanvas');
        // console.log('CANVAS');
        // console.log(CANVAS);
        // // and load everything from the same json
        // this.canvas.loadFromJSON(CANVAS, () => {
        //   console.log('CANVAS untar');
        //   console.log(CANVAS);
        //   // making sure to render canvas at the end
        //   this.canvas.renderAll();
        //   // and checking if object's "name" is preserved
        //   console.log('this.canvas.item(0).name');
        //   console.log(this.canvas);
        // });
    }
    topp() {
        // console.log(this.canvas._activeObject.top);
    }
    rasterizeJSON() {
        this.json = JSON.stringify(this.canvas, null, 2);
    }
    resetPanels() {
        this.textEditor = false;
        this.imageEditor = false;
        this.figureEditor = false;
    }
}
EditorPicComponent.ɵfac = function EditorPicComponent_Factory(t) { return new (t || EditorPicComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_layouts_site_layout_site_layout_component__WEBPACK_IMPORTED_MODULE_2__["SiteLayoutComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_layouts_servises_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_layouts_servises_order_datas_service__WEBPACK_IMPORTED_MODULE_4__["OrderDatasService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_layouts_servises_products_service__WEBPACK_IMPORTED_MODULE_5__["ProdutsService"])); };
EditorPicComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditorPicComponent, selectors: [["app-editor-pic"]], viewQuery: function EditorPicComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.htmlCanvas = _t.first);
    } }, decls: 3, vars: 0, consts: [[3, "resize"], ["id", "canvas"], ["htmlCanvas", ""]], template: function EditorPicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function EditorPicComponent_Template_div_resize_0_listener($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "canvas", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#canvas[_ngcontent-%COMP%] {\r\n  margin-top: 0px;\r\n  border: 0px dashed #cccccc;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdG9yLXBpYy9lZGl0b3ItcGljLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsMEJBQTBCO0FBQzVCIiwiZmlsZSI6InNyYy9hcHAvZWRpdG9yLXBpYy9lZGl0b3ItcGljLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY2FudmFzIHtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgYm9yZGVyOiAwcHggZGFzaGVkICNjY2NjY2M7XHJcbn1cclxuIl19 */"] });
EditorPicComponent.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EditorPicComponent, factory: EditorPicComponent.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditorPicComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-editor-pic',
                templateUrl: './editor-pic.component.html',
                styleUrls: ['./editor-pic.component.css']
            }]
    }], function () { return [{ type: _shared_layouts_site_layout_site_layout_component__WEBPACK_IMPORTED_MODULE_2__["SiteLayoutComponent"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _shared_layouts_servises_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }, { type: _shared_layouts_servises_order_datas_service__WEBPACK_IMPORTED_MODULE_4__["OrderDatasService"] }, { type: _shared_layouts_servises_products_service__WEBPACK_IMPORTED_MODULE_5__["ProdutsService"] }]; }, { htmlCanvas: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['htmlCanvas']
        }] }); })();


/***/ }),

/***/ "./src/app/editor-pic/editor-pic.module.ts":
/*!*************************************************!*\
  !*** ./src/app/editor-pic/editor-pic.module.ts ***!
  \*************************************************/
/*! exports provided: EditorPicModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorPicModule", function() { return EditorPicModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-color-picker */ "./node_modules/ngx-color-picker/__ivy_ngcc__/fesm2015/ngx-color-picker.js");
/* harmony import */ var _editor_pic_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor-pic.component */ "./src/app/editor-pic/editor-pic.component.ts");






class EditorPicModule {
}
EditorPicModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EditorPicModule });
EditorPicModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EditorPicModule_Factory(t) { return new (t || EditorPicModule)(); }, imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            ngx_color_picker__WEBPACK_IMPORTED_MODULE_3__["ColorPickerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EditorPicModule, { declarations: [_editor_pic_component__WEBPACK_IMPORTED_MODULE_4__["EditorPicComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        ngx_color_picker__WEBPACK_IMPORTED_MODULE_3__["ColorPickerModule"]], exports: [_editor_pic_component__WEBPACK_IMPORTED_MODULE_4__["EditorPicComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditorPicModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_editor_pic_component__WEBPACK_IMPORTED_MODULE_4__["EditorPicComponent"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    ngx_color_picker__WEBPACK_IMPORTED_MODULE_3__["ColorPickerModule"]
                ],
                exports: [_editor_pic_component__WEBPACK_IMPORTED_MODULE_4__["EditorPicComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/login-page/login-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/login-page/login-page.component.ts ***!
  \****************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_classes_material_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/classes/material.service */ "./src/app/shared/classes/material.service.ts");
/* harmony import */ var _shared_layouts_servises_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/layouts/servises/services */ "./src/app/shared/layouts/servises/services.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function LoginPageComponent_span_8_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email must not be empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginPageComponent_span_8_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter a valid email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginPageComponent_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginPageComponent_span_8_span_1_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginPageComponent_span_8_span_2_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form.get("email").errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form.get("email").errors["email"]);
} }
function LoginPageComponent_span_13_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password must not be empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginPageComponent_span_13_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Password has been more than ", ctx_r5.form.get("password").errors["minlength"]["requiredLength"], " simbols");
} }
function LoginPageComponent_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginPageComponent_span_13_span_1_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginPageComponent_span_13_span_2_Template, 2, 1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.form.get("password").errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.form.get("password").errors["minlength"] && ctx_r1.form.get("password").errors["minlength"]["requiredLength"]);
} }
const _c0 = function (a0) { return { "invalid": a0 }; };
// import {MAT_TOOLTIP_DEFAULT_OPTIONS, MatTooltipDefaultOptions} from '@angular/mate'
class LoginPageComponent {
    constructor(auth, router, route) {
        this.auth = auth;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)])
        });
        this.route.queryParams.subscribe((params) => {
            //  this.router.navigate(['/login'], {
            //   queryParams: {
            //     registered: true
            //   }
            // }),
            console.log(params['registered']);
            if (params['registered']) {
                console.log(params);
                _shared_classes_material_service__WEBPACK_IMPORTED_MODULE_2__["Material"].mat('Created. Now you can login');
                alert('Created. Now you can login');
            }
            else if (params['accessDenied']) {
                _shared_classes_material_service__WEBPACK_IMPORTED_MODULE_2__["Material"].mat('first log in to the system ');
                alert('first log in to the system ');
                console.log('OOOO');
            }
        });
    }
    ngOnDestroy() {
        if (this.aSub) {
            this.aSub.unsubscribe();
        }
    }
    onSubmit() {
        this.form.disable();
        this.aSub = this.auth.login(this.form.value).subscribe(() => this.router.navigate(['/main'], {
            queryParams: {
                registered: true
            }
        }), error => {
            console.log(error);
            alert(error.error.message);
            _shared_classes_material_service__WEBPACK_IMPORTED_MODULE_2__["Material"].mat(error.error.message);
            this.form.enable();
        });
    }
}
LoginPageComponent.ɵfac = function LoginPageComponent_Factory(t) { return new (t || LoginPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_layouts_servises_services__WEBPACK_IMPORTED_MODULE_3__["AuthServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
LoginPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginPageComponent, selectors: [["app-login-page"]], decls: 17, vars: 10, consts: [[1, "card", 3, "formGroup", "ngSubmit"], [1, "card-content"], [1, "card-title"], [1, "input-field"], ["id", "email", "type", "email", "formControlName", "email", "required", "", 3, "ngClass"], ["for", "email"], ["class", "helper-text red-text", 4, "ngIf"], ["id", "password", "type", "password", "formControlName", "password", "required", "", 3, "ngClass"], ["for", "password"], [1, "card-action"], ["data-position", "bottom", "data-tooltip", "I am a tooltip", "type", "submit", 1, "modal-action", "btn", "waves-effect", "tooltip", 3, "disabled"], [1, "helper-text", "red-text"], [4, "ngIf"]], template: function LoginPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginPageComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Login to the sistem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LoginPageComponent_span_8_Template, 3, 2, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Password:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LoginPageComponent_span_13_Template, 3, 2, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.form.get("email").invalid && ctx.form.get("email").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("email").invalid && ctx.form.get("email").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.form.get("password").invalid && ctx.form.get("password").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("password").invalid && ctx.form.get("password").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.form.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luLXBhZ2UvbG9naW4tcGFnZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login-page',
                templateUrl: './login-page.component.html',
                styleUrls: ['./login-page.component.css']
            }]
    }], function () { return [{ type: _shared_layouts_servises_services__WEBPACK_IMPORTED_MODULE_3__["AuthServices"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/main-page/main-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/main-page/main-page.component.ts ***!
  \**************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_layouts_servises_order_datas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/layouts/servises/order-datas.service */ "./src/app/shared/layouts/servises/order-datas.service.ts");
/* harmony import */ var _shared_layouts_servises_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/layouts/servises/data.service */ "./src/app/shared/layouts/servises/data.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function MainPageComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageComponent_div_7_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.redirectPreview(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Preview ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class MainPageComponent {
    constructor(router, order, data) {
        this.router = router;
        this.order = order;
        this.data = data;
        this.preview = false;
    }
    ngOnInit() {
    }
    redirectPreview() {
        this.preview = false;
        this.router.navigate(['/main']);
        setTimeout(() => {
            location.reload();
        }, 10);
    }
}
MainPageComponent.ɵfac = function MainPageComponent_Factory(t) { return new (t || MainPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_layouts_servises_order_datas_service__WEBPACK_IMPORTED_MODULE_2__["OrderDatasService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_layouts_servises_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"])); };
MainPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainPageComponent, selectors: [["app-main-page"]], decls: 17, vars: 1, consts: [[1, "full-width"], [1, "row"], [1, "toolNav1", "col", "s12", "m9", "l8", "xl8", "offset-s0", "offset-m0", "offset-l0", "offset-xl0", 2, "width", "67%", "z-index", "0"], [2, "height", "28px"], [1, "nav-wrapper", "indigo", "lighten-4"], [1, "brand-logo", "right", 2, "margin-top", "-18px"], ["class", " brand-logo left", "style", "margin-top: -18px; cursor: pointer;", 3, "click", 4, "ngIf"], ["href", "#", "data-target", "mobile-links", 1, "sidenav-trigger", 2, "margin-top", "-18px"], [1, "material-icons"], [1, "toolNav1", "col", "s5", "m3", "l4", "xl4", "offset-s0", "offset-m9", "offset-l8", "offset-xl8", 2, "width", "34%", "margin-left", "66%"], [1, "nav-wrapper", "#e8eaf6", "indigo", "lighten-4"], [1, "brand-logo", "left", 2, "margin-top", "-18px"], [1, "brand-logo", "left", 2, "margin-top", "-18px", "cursor", "pointer", 3, "click"]], template: function MainPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Design ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MainPageComponent_div_7_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Your Style");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.preview);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".toolNav1[_ngcontent-%COMP%] {\n  top: 0px;\n  \n  \n  \n  \n  position: absolute;\n  z-index: 1;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1wYWdlL0Q6XFxBbmd1bGFyXFxMQVNUX1ZFUlNJT05fT0ZfVC1TSElSVFxcQ29weSBvZiBvcmlnaW4gcHJvamVjdCBULXNoaXJ0X2xhc3RcXHQtc2hpcnRcXHQtc2hpcnQtYmFja2VuZFxcY2xpZW50L3NyY1xcYXBwXFxtYWluLXBhZ2VcXG1haW4tcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi1wYWdlL21haW4tcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFFBQVE7RUFDUix3QkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1Ysa0JBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL21haW4tcGFnZS9tYWluLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnRvb2xOYXYxe1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICAvKiBtYXJnaW4tbGVmdDogMjUwcHg7ICovXHJcbiAgICAvKiBtYXJnaW4tcmlnaHQ6IDBweDsgKi9cclxuICAgIC8qIHdpZHRoOiA0MDBweDsgKi9cclxuICAgIC8qIGhlaWdodDogMjBweDsgKi9cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICAvKiB3aWR0aDogMzAwcHg7ICovXHJcbiAgfVxyXG5cclxuXHJcbiAgXHJcblxyXG5cclxuXHJcbiIsIi50b29sTmF2MSB7XG4gIHRvcDogMHB4O1xuICAvKiBtYXJnaW4tbGVmdDogMjUwcHg7ICovXG4gIC8qIG1hcmdpbi1yaWdodDogMHB4OyAqL1xuICAvKiB3aWR0aDogNDAwcHg7ICovXG4gIC8qIGhlaWdodDogMjBweDsgKi9cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICAvKiB3aWR0aDogMzAwcHg7ICovXG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-page',
                templateUrl: './main-page.component.html',
                styleUrls: ['./main-page.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _shared_layouts_servises_order_datas_service__WEBPACK_IMPORTED_MODULE_2__["OrderDatasService"] }, { type: _shared_layouts_servises_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/register-page/register-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/register-page/register-page.component.ts ***!
  \**********************************************************/
/*! exports provided: RegisterPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageComponent", function() { return RegisterPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_classes_material_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/classes/material.service */ "./src/app/shared/classes/material.service.ts");
/* harmony import */ var _shared_layouts_servises_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/layouts/servises/services */ "./src/app/shared/layouts/servises/services.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function RegisterPageComponent_span_8_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email must not be empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterPageComponent_span_8_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Imput correct email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterPageComponent_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterPageComponent_span_8_span_1_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterPageComponent_span_8_span_2_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form.get("email").errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form.get("email").errors["email"]);
} }
function RegisterPageComponent_span_13_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password must not be empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterPageComponent_span_13_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Password has been more than ", ctx_r5.form.get("password").errors["minlength"]["requiredLength"], " simbols");
} }
function RegisterPageComponent_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterPageComponent_span_13_span_1_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterPageComponent_span_13_span_2_Template, 2, 1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.form.get("password").errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.form.get("password").errors["minlength"] && ctx_r1.form.get("password").errors["minlength"]["requiredLength"]);
} }
const _c0 = function (a0) { return { "invalid": a0 }; };
class RegisterPageComponent {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    ngOnInit() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)])
        });
    }
    ngOnDestroy() {
        if (this.aSub) {
            this.aSub.unsubscribe();
        }
    }
    onSubmit() {
        this.form.disable();
        this.aSub = this.auth.register(this.form.value).subscribe(() => {
            this.router.navigate(['/login'], {
                queryParams: {
                    registered: true
                }
            });
        }, error => {
            console.log(error.error.Message),
                alert(error.error.Message);
            _shared_classes_material_service__WEBPACK_IMPORTED_MODULE_2__["Material"].mat(error.error.Message);
            this.form.enable();
        });
    }
}
RegisterPageComponent.ɵfac = function RegisterPageComponent_Factory(t) { return new (t || RegisterPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_layouts_servises_services__WEBPACK_IMPORTED_MODULE_3__["AuthServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
RegisterPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterPageComponent, selectors: [["app-register-page"]], decls: 17, vars: 10, consts: [[1, "card", 3, "formGroup", "ngSubmit"], [1, "card-content"], [1, "card-title"], [1, "input-field"], ["id", "email", "type", "email", "formControlName", "email", "required", "", 3, "ngClass"], ["for", "email"], ["class", "helper-text red-text", 4, "ngIf"], ["id", "password", "type", "password", "formControlName", "password", "required", "", 3, "ngClass"], ["for", "password"], [1, "card-action"], ["type", "submit", 1, "modal-action", "btn", "waves-effect", 3, "disabled"], [1, "helper-text", "red-text"], [4, "ngIf"]], template: function RegisterPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterPageComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Create account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RegisterPageComponent_span_8_Template, 3, 2, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Password:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, RegisterPageComponent_span_13_Template, 3, 2, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Register ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.form.get("email").invalid && ctx.form.get("email").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("email").invalid && ctx.form.get("email").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.form.get("password").invalid && ctx.form.get("password").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("password").invalid && ctx.form.get("password").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.form.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyLXBhZ2UvcmVnaXN0ZXItcGFnZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register-page',
                templateUrl: './register-page.component.html',
                styleUrls: ['./register-page.component.css']
            }]
    }], function () { return [{ type: _shared_layouts_servises_services__WEBPACK_IMPORTED_MODULE_3__["AuthServices"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/background.directive.ts":
/*!************************************************!*\
  !*** ./src/app/shared/background.directive.ts ***!
  \************************************************/
/*! exports provided: BackgroundDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackgroundDirective", function() { return BackgroundDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class BackgroundDirective {
    constructor() { }
    click() {
        this.background = 'black';
        this.color = 'white';
    }
}
BackgroundDirective.ɵfac = function BackgroundDirective_Factory(t) { return new (t || BackgroundDirective)(); };
BackgroundDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: BackgroundDirective, selectors: [["", "appBackground", ""]], hostVars: 4, hostBindings: function BackgroundDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BackgroundDirective_click_HostBindingHandler() { return ctx.click(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.background)("color", ctx.color);
    } } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BackgroundDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appBackground]'
            }]
    }], function () { return []; }, { background: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.background-color']
        }], color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.color']
        }], click: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
        }] }); })();


/***/ }),

/***/ "./src/app/shared/classes/authguard.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/classes/authguard.ts ***!
  \*********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _layouts_servises_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/servises/services */ "./src/app/shared/layouts/servises/services.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class AuthGuard {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate(route, state) {
        if (this.auth.isAuthenticaded()) {
            // console.log(this.auth.isAuthenticaded());
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(true);
        }
        else {
            this.router.navigate(['/login'], {
                queryParams: {
                    access: true
                }
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(false);
        }
    }
    canActivateChild(route, state) {
        return this.canActivate(route, state);
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_layouts_servises_services__WEBPACK_IMPORTED_MODULE_2__["AuthServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _layouts_servises_services__WEBPACK_IMPORTED_MODULE_2__["AuthServices"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/classes/material.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/classes/material.service.ts ***!
  \****************************************************/
/*! exports provided: Material */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Material", function() { return Material; });
// export class MaterialService {
//     static toast(message: string) {
//         M.toast({ html: message })
//         // M.toast({html: 'I am a toast!', classes: 'rounded'});
//     }
// }
class Material {
    static mat(sms) {
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.tooltip');
            var instances = M.Tooltip.init(elems);
            var instances = M.toast({ html: sms });
        });
        document.querySelector('.tooltip');
    }
    static nav() {
        document.addEventListener('DOMContentLoaded', () => {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems, { edge: 'right' });
        });
    }
    static zoomImg() {
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.materialboxed');
            var instances = M.Materialbox.init(elems, 275);
        });
    }
    static tab() {
        var elems = document.querySelectorAll('.tabs');
        var instance = M.Tabs.init(elems, {
            swipeable: false,
            duration: 300,
            responsiveThreshold: Infinity
        });
    }
    static carousel() {
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.carousel1');
            var instances = M.Carousel.init(elems, {
                duration: 70,
                dist: -10,
                shift: 60,
                padding: 150,
                numVisible: 5,
                fullWidth: false,
                indicators: false,
                noWrap: false,
                onCycleTo: function (ele) {
                    // console.log(ele);
                    console.log((ele).index()); // the slide's index
                },
                interval: 1000 // default - interval: 6000
            });
            return;
        });
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.carousel2');
            var instances = M.Carousel.init(elems, {
                duration: 70,
                dist: -30,
                shift: 30,
                padding: 55,
                numVisible: 5,
                fullWidth: false,
                indicators: false,
                noWrap: false,
                onCycleTo: null,
                interval: 1000 // default - interval: 6000
            });
        });
    }
    // static reload() {
    //   $(window).resize(function(){location.reload();});
    // }
    static selectOpt() {
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('select');
            var instances = M.FormSelect.init(elems, {
                dropdown: 10
            });
        });
    }
    // document.addEventListener('DOMContentLoaded', function() {
    //   var elems = document.querySelectorAll('select');
    //   var instances = M.FormSelect.init(elems, options);
    // });
    static scrolSpy() {
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.scrollspy');
            var instances = M.ScrollSpy.init(elems);
        });
    }
    static dropDown() {
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.dropdown-trigger');
            var instances = M.Dropdown.init(elems, {});
        });
    }
}


/***/ }),

/***/ "./src/app/shared/layouts/auth-layout/auth-layout.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/layouts/auth-layout/auth-layout.component.ts ***!
  \*********************************************************************/
/*! exports provided: AuthLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function() { return AuthLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AuthLayoutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AuthLayoutComponent.ɵfac = function AuthLayoutComponent_Factory(t) { return new (t || AuthLayoutComponent)(); };
AuthLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthLayoutComponent, selectors: [["app-auth-layout"]], decls: 13, vars: 0, consts: [[1, "nav-wrapper", "grey", "darken-1"], ["routerLink", "/", 1, "brand-logo"], ["id", "nav-mobile", 1, "right", "hide-on-med-and-down"], ["routerLinkActive", "color"], ["routerLink", "/login"], ["routerLink", "/register"], [1, "auth-block"]], template: function AuthLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Newborn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "LogOut");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Registration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".color[_ngcontent-%COMP%] {\r\nbackground: rebeccapurple;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xheW91dHMvYXV0aC1sYXlvdXQvYXV0aC1sYXlvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLHlCQUF5QjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9sYXlvdXRzL2F1dGgtbGF5b3V0L2F1dGgtbGF5b3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sb3Ige1xyXG5iYWNrZ3JvdW5kOiByZWJlY2NhcHVycGxlO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-auth-layout',
                templateUrl: './auth-layout.component.html',
                styleUrls: ['./auth-layout.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/layouts/servises/categories.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/layouts/servises/categories.service.ts ***!
  \***************************************************************/
/*! exports provided: CategoriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesService", function() { return CategoriesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class CategoriesService {
    constructor(http) {
        this.http = http;
    }
    Themes(a) {
        return this.http.get('https://t-shop.adaptable.app/api/category?name=' + a).pipe();
    }
    fetch() {
        setTimeout(() => {
            return this.http.get('https://t-shop.adaptable.app/api/category').pipe();
          }, 20000);
    }
    create(name, image) {
        const fd = new FormData();
        if (image) {
            fd.append('image', image, image.name);
        }
        fd.append('name', name);
        return this.http.post('/api/category', fd);
    }
}
CategoriesService.ɵfac = function CategoriesService_Factory(t) { return new (t || CategoriesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CategoriesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CategoriesService, factory: CategoriesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoriesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/layouts/servises/data.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/layouts/servises/data.service.ts ***!
  \*********************************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products.service */ "./src/app/shared/layouts/servises/products.service.ts");




class DataService {
    /*
  
    private jorik;
  
    public get gago(): string {
      return this.jorik;
    }
  
    public set gago(bobo: string) {
      if (bobo === 'kanach' || bobo === 'rozovi') {
        this.jorik = bobo;
      }
    }
  
    */
    // const myService = new DataService();
    // myService.gago = 'bobo';
    // myService.setMyGago('gago');
    constructor(produtsService) {
        // this.sizePrintKey = 686 / ((686 - 297) / 2);
        // this.formatWithHeight = 0.707;
        // this.formatTopKey = 0;
        this.produtsService = produtsService;
        this.formatA4Horizontal = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.formatA4Vertical = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.formatTop = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.canvasDivSelect = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.scaleKeyy = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.endPriseValue = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.horVertt = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.formatValue1 = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.widthKey = 0.67;
        this.heightKey = 1.26;
        this.positionKey = 5.9;
        this.scaleBlock = false;
        this.sizeValue = 'M';
        this.formatValue = 'A4';
        this.products = [];
        this.indexBrandType = 0;
        this.formats = [{ format: 'A3', formatSize: 297, formatPrise: 500 }, { format: 'A4', formatSize: 297, formatPrise: 400 }, { format: 'A5', formatSize: 210, formatPrise: 300 }, { format: 'A6', formatSize: 148, formatPrise: 400 }];
        this.initCalculations();
        this.initFromServer();
        this.produtsService.fetch().subscribe((res) => {
            this.products = res;
        });
    }
    set sizePrintKey(value) {
        this._sizePrintKey = value;
        this.formatA4Horizontal.next(value);
    }
    get sizePrintKey() {
        return this._sizePrintKey;
    }
    set formatWithHeight(value) {
        this._formatWithHeight = value;
        this.formatA4Vertical.next(value);
    }
    get formatWithHeight() {
        return this._formatWithHeight;
    }
    set formatTopKey(value) {
        this._formatTopKey = value;
        this.formatTop.next(value);
    }
    get formatTopKey() {
        return this._formatTopKey;
    }
    set canvasSelect(value) {
        this._canvasSelect = value;
        this.canvasDivSelect.next(value);
    }
    get canvasSelect() {
        return this._canvasSelect;
    }
    set scaleKey(value) {
        this._scaleKey = value;
        this.scaleKeyy.next(value);
    }
    get scaleKey() {
        return this._scaleKey;
    }
    set endPrise(value) {
        this._endPrise = value;
        this.endPriseValue.next(value);
    }
    get endPrise() {
        return this._endPrise;
    }
    set horVert(value) {
        this._horVert = value;
        this.horVertt.next(value);
    }
    get horVert() {
        return this._horVert;
    }
    set formatVal(value) {
        this._formatVal = value;
        this.formatValue1.next(value);
    }
    get formatVal() {
        return this._formatVal;
    }
    ngOnInit() {
        // this.formatSizeSwich();
    }
    formatSizeSwich() {
        const realSize = this.products[this.indexBrandType].realSize;
        const cafficient = 1.0229;
        // const realSizes = { XS: 609, S: 648, M: 686, L: 724, XL: 762, XXL: 800 };
        // const formats = ['A3', 'A4', 'A5'];
        for (let ind = 0; ind < this.formats.length; ind++) {
            for (let i = 0; i < Object.keys(realSize).length; i++) {
                if (this.sizeValue === Object.keys(realSize)[i] && this.formatValue === this.formats[ind].format) {
                    if (this.horVert) {
                        this.sizePrintKey = Object.values(realSize)[i] / ((Object.values(realSize)[i] - this.formats[ind].formatSize) / 2);
                        this.scaleKey = 1;
                    }
                    else {
                        if (this.horizontalVertical) {
                            if (this.formatValue === this.formats[0].format) {
                                this.sizePrintKey = Object.values(realSize)[i] * cafficient / ((Object.values(realSize)[i] - this.formats[ind].formatSize) / 2);
                                this.scaleKey = 4.5;
                            }
                            else {
                                this.sizePrintKey = Object.values(realSize)[i] * cafficient / ((Object.values(realSize)[i] - this.formats[ind + 1].formatSize) / 2);
                                this.scaleKey = 4.5;
                            }
                        }
                        else {
                            if (this.formatValue === this.formats[0].format) {
                                this.sizePrintKey = Object.values(realSize)[i] * cafficient / ((Object.values(realSize)[i] - this.formats[ind].formatSize) / 2);
                                this.scaleKey = 2.5;
                            }
                            else {
                                this.sizePrintKey = Object.values(realSize)[i] * cafficient / ((Object.values(realSize)[i] - this.formats[ind + 1].formatSize) / 2);
                                this.scaleKey = 2.5;
                            }
                        }
                    }
                }
            }
        }
        // if (this.sizeValue === 'XS' && this.formatValue === 'A4') {
        //   if (this.horVert) {
        //     console.log("A4 loook");
        //     this.sizePrintKey = 609 / ((609 - 297) / 2);
        //     this.scaleKey = 1.1;
        //   } else {
        //     this.sizePrintKey = 609 * cafficient / ((609 - 210) / 2);
        //     this.scaleKey = 2.3;
        //   }
        // }
        // if (this.sizeValue === 'S' && this.formatValue === 'A4') {
        //   if (this.horVert) {
        //     this.sizePrintKey = 648 / ((648 - 297) / 2);
        //   } else {
        //     this.sizePrintKey = 648 * cafficient / ((648 - 210) / 2);
        //   }
        // }
        // if (this.sizeValue === 'M' && this.formatValue === 'A4') {
        //   if (this.horVert) {
        //     this.sizePrintKey = 686 / ((686 - 297) / 2);
        //     this.scaleKey = 1.1;
        //   } else {
        //     this.sizePrintKey = 686 * cafficient / ((686 - 210) / 2);
        //     this.scaleKey = 2.3;
        //   }
        // }
        // if (this.sizeValue === 'M' && this.formatValue === 'A5') {
        //   if (this.horVert) {
        //     this.sizePrintKey = 686 / ((686 - 210) / 2);
        //     this.scaleKey = 1.1;
        //   } else {
        //     this.sizePrintKey = 686 * cafficient / ((686 - 148) / 2);
        //     this.scaleKey = 2.3;
        //   }
        // }
    }
    calcEndPrise() {
        for (let i = 0; i < this.formats.length; i++) {
            if (this.formatValue === this.formats[i].format) {
                this.endPrise = this.formats[i].formatPrise;
                console.log(this.endPrise);
            }
        }
    }
    // public allLenght = A3Width +  (canvasWidth - 2* sleeveLenght * cos(45)) + chestWidth - A3
    initCalculations() {
        this.sizePrintKey = 686 / ((686 - 297) / 2);
        this.formatWithHeight = 0.707; // 0.707
        this.formatTopKey = -0.03;
        this.horVert = true;
        // if (this.horVert) {
        //   this.scaleKey = 1
        // } else {
        //   console.log('ggggg');
        //   this.scaleKey = 4.3
        // }
        this.scaleKey = 1.1;
        this.canvasHtmlWidth = window.innerWidth - this.widthKey * window.innerWidth;
        this.canvasHtmlHeight = this.canvasHtmlWidth * this.heightKey;
        this.positionTopKey = this.canvasHtmlWidth * this.formatTopKey; // if wont to get up then it must be + in first, else get down -
        this.canvasSizeFormatWidth = this.canvasHtmlWidth - 2 * (this.canvasHtmlWidth / this.sizePrintKey + this.canvasHtmlWidth / 40);
        this.canvasSizeFormatTop = this.canvasHtmlWidth / 40 + this.canvasHtmlWidth / this.sizePrintKey - this.positionTopKey;
        this.canvasSizeFormatHeight = this.canvasSizeFormatWidth * this.formatWithHeight;
        this.canvasSizeFormatLeft = this.canvasHtmlWidth / 40 + this.canvasHtmlWidth / this.sizePrintKey;
        this.canvasCenteredPosition = window.innerWidth / this.positionKey;
    }
    initFromServer() {
        // call server function
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_products_service__WEBPACK_IMPORTED_MODULE_2__["ProdutsService"])); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _products_service__WEBPACK_IMPORTED_MODULE_2__["ProdutsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/layouts/servises/fonts.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/layouts/servises/fonts.service.ts ***!
  \**********************************************************/
/*! exports provided: FontService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontService", function() { return FontService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class FontService {
    constructor(http) {
        this.http = http;
    }
    fetch() {
        return this.http.get('https://t-shop.adaptable.app/api/font').pipe();
    }
}
FontService.ɵfac = function FontService_Factory(t) { return new (t || FontService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
FontService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FontService, factory: FontService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FontService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/layouts/servises/order-datas.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/layouts/servises/order-datas.service.ts ***!
  \****************************************************************/
/*! exports provided: OrderDatasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDatasService", function() { return OrderDatasService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class OrderDatasService {
    constructor() {
        this.orderDatas = {
            productTypeName: '',
            brendName: '',
            productColor: '',
            colorDefoult: '',
            productSize: ''
        };
        this.imageSrc = '';
    }
    defaultDatas() {
        this.orderDatas.productTypeName = '';
        this.orderDatas.brendName = '';
        this.orderDatas.productColor = '';
        this.orderDatas.colorDefoult = '';
        this.orderDatas.productSize = '';
    }
}
OrderDatasService.ɵfac = function OrderDatasService_Factory(t) { return new (t || OrderDatasService)(); };
OrderDatasService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OrderDatasService, factory: OrderDatasService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderDatasService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/layouts/servises/products.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/layouts/servises/products.service.ts ***!
  \*************************************************************/
/*! exports provided: ProdutsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutsService", function() { return ProdutsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class ProdutsService {
    constructor(http) {
        this.http = http;
        // this.fetch().subscribe(
        //   (res: Products[]) => {
        //     this.firstCanvasBackroundImage = res;          
        //   }
        // )   
    }
    fetch() {
        return this.http.get('https://t-shop.adaptable.app/api/product').pipe();
    }
}
ProdutsService.ɵfac = function ProdutsService_Factory(t) { return new (t || ProdutsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ProdutsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProdutsService, factory: ProdutsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProdutsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/layouts/servises/productscolor.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/layouts/servises/productscolor.service.ts ***!
  \******************************************************************/
/*! exports provided: ProdutsColorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutsColorService", function() { return ProdutsColorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class ProdutsColorService {
    constructor(http) {
        this.http = http;
    }
    fetch() {
        return this.http.get('https://t-shop.adaptable.app/api/productcolor').pipe();
    }
}
ProdutsColorService.ɵfac = function ProdutsColorService_Factory(t) { return new (t || ProdutsColorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ProdutsColorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProdutsColorService, factory: ProdutsColorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProdutsColorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/layouts/servises/services.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/layouts/servises/services.ts ***!
  \*****************************************************/
/*! exports provided: AuthServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthServices", function() { return AuthServices; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class AuthServices {
    constructor(http) {
        this.http = http;
        this.token = null;
    }
    sendEmail(url, data) {
        return this.http.post(url, data).subscribe(data => {
            let res = data;
            console.log('scssessfuli');
        });
    }
    ;
    data() {
        return this.http.get('api/category').pipe();
    }
    register(user) {
        return this.http.post('https://t-shop.adaptable.app/api/auth/register', user);
    }
    login(user) {
        return this.http.post('https://t-shop.adaptable.app/api/auth/login', user).
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(({ token }) => {
            localStorage.setItem('auth-token', token);
            this.setToken(token);
        }));
    }
    setToken(token) {
        this.token = token;
    }
    getToken() {
        return this.token;
    }
    isAuthenticaded() {
        return !!this.token;
    }
    logout() {
        this.setToken(null);
        localStorage.clear();
    }
}
AuthServices.ɵfac = function AuthServices_Factory(t) { return new (t || AuthServices)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
AuthServices.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthServices, factory: AuthServices.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthServices, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/layouts/site-layout/site-layout.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/layouts/site-layout/site-layout.component.ts ***!
  \*********************************************************************/
/*! exports provided: SiteLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteLayoutComponent", function() { return SiteLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _classes_material_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../classes/material.service */ "./src/app/shared/classes/material.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _servises_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../servises/services */ "./src/app/shared/layouts/servises/services.ts");
/* harmony import */ var _servises_categories_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../servises/categories.service */ "./src/app/shared/layouts/servises/categories.service.ts");
/* harmony import */ var _servises_products_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../servises/products.service */ "./src/app/shared/layouts/servises/products.service.ts");
/* harmony import */ var _servises_productscolor_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../servises/productscolor.service */ "./src/app/shared/layouts/servises/productscolor.service.ts");
/* harmony import */ var _servises_fonts_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../servises/fonts.service */ "./src/app/shared/layouts/servises/fonts.service.ts");
/* harmony import */ var _servises_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../servises/data.service */ "./src/app/shared/layouts/servises/data.service.ts");
/* harmony import */ var src_app_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/main-page/main-page.component */ "./src/app/main-page/main-page.component.ts");
/* harmony import */ var _servises_order_datas_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../servises/order-datas.service */ "./src/app/shared/layouts/servises/order-datas.service.ts");













const _c0 = ["canvas"];
const _c1 = ["imagePath"];
const _c2 = ["coord"];
const _c3 = ["owlElement"];
const _c4 = ["inputColor"];
const _c5 = ["divvv"];
const _c6 = function (a0, a1) { return { horizontal: a0, vertical: a1 }; };
function SiteLayoutComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SiteLayoutComponent_div_5_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r25.sendToBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "i", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "flip_to_back");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SiteLayoutComponent_div_5_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r27.bringToFront(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "i", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "flip_to_front");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SiteLayoutComponent_div_5_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r28.clone(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "i", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "content_copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "i", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "img", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !_r6.selected || _r6.selected.type == "group");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !_r6.selected || _r6.selected.type == "group");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !_r6.selected || _r6.selected.type == "group");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.formatValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c6, ctx_r0.horVert, !ctx_r0.horVert));
} }
function SiteLayoutComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SiteLayoutComponent_div_6_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r29.confirmClear(); return ctx_r29.isCarouselOpen = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Clean ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SiteLayoutComponent_div_6_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r31.productOrderDatas(); ctx_r31.sendMail(); return ctx_r31.redirectToShop(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Apply ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", _r6.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", _r6.selected);
} }
function SiteLayoutComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SiteLayoutComponent_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r32.isOpen = !ctx_r32.isOpen; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "cloud");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Themes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SiteLayoutComponent_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SiteLayoutComponent_div_11_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r37); const categoryy_r35 = ctx.$implicit; const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); ctx_r36.category = categoryy_r35.name; ctx_r36.Themes(); ctx_r36.funk(); return ctx_r36.isOpen = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "hr", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const categoryy_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](categoryy_r35.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", categoryy_r35.imageSrc, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function SiteLayoutComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SiteLayoutComponent_div_11_div_1_Template, 6, 2, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r4.categories);
} }
function SiteLayoutComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SiteLayoutComponent_div_12_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39); _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15); return _r6.props.opacity = $event; })("ngModelChange", function SiteLayoutComponent_div_12_Template_input_ngModelChange_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r40.setOpacity(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function SiteLayoutComponent_div_12_Template_input_change_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r41.shadowSVG = !ctx_r41.shadowSVG; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", _r6.props.opacity);
} }
function SiteLayoutComponent_ng_container_20_ng_template_1_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SiteLayoutComponent_ng_container_20_ng_template_1_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r46); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); ctx_r45.selectPicture(); return ctx_r45.isCarouselOpen = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "check");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SiteLayoutComponent_ng_container_20_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SiteLayoutComponent_ng_container_20_ng_template_1_button_2_Template, 3, 0, "button", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const image_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", image_r42.imageSrc, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r6.canvasCount === 0);
} }
function SiteLayoutComponent_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SiteLayoutComponent_ng_container_20_ng_template_1_Template, 3, 2, "ng-template", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const image_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", image_r42.id);
} }
function SiteLayoutComponent_ng_template_21_Template(rf, ctx) { }
function SiteLayoutComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SiteLayoutComponent_div_40_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r51); const imageProduct_r48 = ctx.$implicit; const i_r49 = ctx.index; const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15); _r6.props.canvasImage = imageProduct_r48.type; _r6.props.canvasFill = ctx_r50.productBrandColors[0]; ctx_r50.allColors = true; ctx_r50.orderDatas.productTypeName = imageProduct_r48.name; ctx_r50.orderDatas.productColor = ""; ctx_r50.indexBrandType = i_r49; ctx_r50.setCanvasImage(); return ctx_r50.productsTypeColor(); })("colorPickerChange", function SiteLayoutComponent_div_40_Template_div_colorPickerChange_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r51); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r52.setCanvasFill(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const imageProduct_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", imageProduct_r48.type1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](imageProduct_r48.name);
} }
function SiteLayoutComponent_li_49_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SiteLayoutComponent_li_49_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r56); const i_r54 = ctx.index; const productBrand_r53 = ctx.$implicit; const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15); ctx_r55.indexBrand = i_r54; ctx_r55.allColors = false; _r6.props.brandName = productBrand_r53.name; ctx_r55.orderDatas.brendName = productBrand_r53.name; ctx_r55.productBrandColor(); ctx_r55.productBrandSize(); ctx_r55.setCanvasImage(); return ctx_r55.productsTypeColor(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const productBrand_r53 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](productBrand_r53.name);
} }
function SiteLayoutComponent_div_52_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SiteLayoutComponent_div_52_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r60); const color_r58 = ctx.$implicit; const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15); _r6.props.canvasFill = color_r58; ctx_r59.orderDatas.productColor = color_r58; return ctx_r59.setCanvasFill(); })("colorPickerChange", function SiteLayoutComponent_div_52_div_1_Template_div_colorPickerChange_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r60); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r61.setCanvasFill(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const color_r58 = ctx.$implicit;
    const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background", color_r58, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefaultStyleSanitizer"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-selected", color_r58 == ctx_r57.selectColor);
} }
function SiteLayoutComponent_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SiteLayoutComponent_div_52_div_1_Template, 1, 3, "div", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r12.arrColor);
} }
function SiteLayoutComponent_div_53_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SiteLayoutComponent_div_53_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r65); const colorBrand_r63 = ctx.$implicit; const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15); _r6.props.canvasFill = colorBrand_r63; ctx_r64.orderDatas.productColor = colorBrand_r63; return ctx_r64.setCanvasFill(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const colorBrand_r63 = ctx.$implicit;
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background", colorBrand_r63, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefaultStyleSanitizer"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-selected", colorBrand_r63 == ctx_r62.selectColor);
} }
function SiteLayoutComponent_div_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SiteLayoutComponent_div_53_div_1_Template, 1, 3, "div", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r13.productBrandColors);
} }
function SiteLayoutComponent_label_55_Template(rf, ctx) { if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SiteLayoutComponent_label_55_Template_input_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r69); const size_r66 = ctx.$implicit; const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r68.orderDatas.productSize = size_r66.key; return ctx_r68.sizeValuePass(size_r66.key); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const size_r66 = ctx.$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", size_r66.value)("checked", ctx_r14.orderDatas.productSize === "" ? size_r66.key === "M" : size_r66.key === ctx_r14.orderDatas.productSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", size_r66.key, " ");
} }
function SiteLayoutComponent_div_57_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 177, 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("colorPickerChange", function SiteLayoutComponent_div_57_div_2_Template_input_colorPickerChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r73); _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15); return _r6.props.canvasFill = $event; })("colorPickerChange", function SiteLayoutComponent_div_57_div_2_Template_input_colorPickerChange_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r73); const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r74.setCanvasFill(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background", _r6.props.canvasFill, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefaultStyleSanitizer"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cpPosition", "bottom")("colorPicker", _r6.props.canvasFill)("value", _r6.props.canvasFill);
} }
function SiteLayoutComponent_div_57_Template(rf, ctx) { if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SiteLayoutComponent_div_57_div_2_Template, 4, 5, "div", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Background Image (url)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SiteLayoutComponent_div_57_Template_input_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r76); _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15); return _r6.props.canvasImage = $event; })("keyup", function SiteLayoutComponent_div_57_Template_input_keyup_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r76); const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r77.setCanvasImage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r6.props.canvasImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", _r6.props.canvasImage);
} }
const _c7 = function () { return { "padding-top": "4px" }; };
function SiteLayoutComponent_div_131_Template(rf, ctx) { if (rf & 1) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SiteLayoutComponent_div_131_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r79); const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15); return ctx_r78.addImageOnCanvas(_r6.url); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "move_to_inbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function SiteLayoutComponent_div_131_Template_input_change_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r79); const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r80.readUrl($event); ctx_r80.routerlink(); return ctx_r80.isOpasity1 = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c7));
} }
function SiteLayoutComponent_img_133_Template(rf, ctx) { if (rf & 1) {
    const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "img", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SiteLayoutComponent_img_133_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r82); const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15); ctx_r81.addImageOnCanvas(_r6.url); ctx_r81.isOpasity = true; return ctx_r81.toggle = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _r6.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function SiteLayoutComponent_button_134_Template(rf, ctx) { if (rf & 1) {
    const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SiteLayoutComponent_button_134_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r84); const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15); ctx_r83.removeWhite(_r6.url); ctx_r83.isOpasity1 = true; return ctx_r83.isOpasity = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Remove ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SiteLayoutComponent_div_135_Template(rf, ctx) { if (rf & 1) {
    const _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Opacity");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SiteLayoutComponent_div_135_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r86); _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15); return _r6.props.opacity = $event; })("ngModelChange", function SiteLayoutComponent_div_135_Template_input_ngModelChange_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r86); const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r87.setOpacity(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", _r6.props.opacity);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_r6.props.opacity);
} }
function SiteLayoutComponent_div_141_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Fill");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("colorPickerChange", function SiteLayoutComponent_div_141_div_7_Template_input_colorPickerChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r90); _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15); return _r6.props.fill = $event; })("colorPickerChange", function SiteLayoutComponent_div_141_div_7_Template_input_colorPickerChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r90); const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r91.setFill(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background", _r6.props.fill, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefaultStyleSanitizer"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cpPosition", "top")("colorPicker", _r6.props.fill)("value", _r6.props.fill);
} }
function SiteLayoutComponent_div_141_Template(rf, ctx) { if (rf & 1) {
    const _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Opacity");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SiteLayoutComponent_div_141_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r93); _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15); return _r6.props.opacity = $event; })("ngModelChange", function SiteLayoutComponent_div_141_Template_input_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r93); const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r94.setOpacity(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, SiteLayoutComponent_div_141_div_7_Template, 5, 5, "div", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", _r6.props.opacity);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_r6.props.opacity);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r6.selected && _r6.textEditor || _r6.selected && _r6.figureEditor);
} }
function SiteLayoutComponent_div_159_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Group Selected ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c8 = function () { return { "margin-top": "-20px" }; };
function SiteLayoutComponent_div_160_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " No items selected");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c8));
} }
const _c9 = function (a0) { return { "font-family": a0 }; };
function SiteLayoutComponent_option_175_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const font_r95 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", font_r95.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c9, font_r95.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](font_r95.name);
} }
function SiteLayoutComponent_div_229_Template(rf, ctx) { if (rf & 1) {
    const _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Line Height");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SiteLayoutComponent_div_229_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r97); _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15); return _r6.props.diametr = $event; })("ngModelChange", function SiteLayoutComponent_div_229_Template_input_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r97); _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15); return _r6.addText(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", _r6.props.diametr);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", !_r6.textEditor ? "" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_r6.props.diametr);
} }
const _c10 = function (a0) { return { "left.px": a0 }; };
const _c11 = function (a0) { return { "class1": a0 }; };
const _c12 = function () { return { "padding-top": "3px" }; };
const _c13 = function () { return { "margin-top": "20px" }; };
const _c14 = function (a0) { return { "active": a0 }; };
let SiteLayoutComponent = class SiteLayoutComponent {
    // public marvelHeroes =  this.productsColor.filter((hero) => {
    //   return hero.hex == this.productsColor[this.index].hex;
    // });
    // fontss = [
    //   {value: 'arial', name: 'Arial'},
    //   {value: 'Roboto', name: 'Roboto'},
    //   {value: 'Kaufmann BT', name: 'Kaufmann BT'},
    //   {value: 'Calisto Mt', name: 'Calisto Mt'},
    //   {value: 'Brush Script Mt', name: 'Brush Script Mt'},
    //   {value: 'TypoUpright BT', name: 'TypoUpright BT'},
    //   {value: 'Lucida Handwriting', name: 'Lucida Handwriting'},
    //   {value: 'grapalat', name: 'grapalat'},
    //   {value: 'Calisto Mt', name: 'Calisto Mt'},
    //   {value: 'fantasy', name:'fantasy'},
    //   {value: 'Comic Sans MS', name:'Comic Sans MS'},
    // ]
    // images = [
    //   { id: 'svg', path: '../assets/img/vintage_car_2.svg' },
    //   { id: 'svg', path: '../assets/img/300054197 (1).svg' },
    //   { id: 'svg', path: '../assets/img/643684912.svg' },
    //   { id: 'svg', path: '../assets/img/1238039455.svg' },
    //   { id: 'svg', path: '../assets/img/1653563747.svg' },
    //   { id: 'svg', path: '../assets/img/Penelope-Cruz-By-Heblo.svg' },
    //   { id: 'svg', path: '../assets/img/model.svg' },
    //   { id: 'svg', path: '../assets/img/Music.svg' },
    //   { id: 'svg', path: '../assets/img/PNG.svg' },
    //   { id: 'svg', path: '../assets/img/Grim_Reaper.eps' },
    //   { id: 9, path: '../assets/img/Origin.png' },
    //   { id: 'svgPhoto', path: '../assets/img/Art/91b91213cf99e2ac0c9a5a9141d8c4c0.svg' },
    //   { id: 'svgPhoto', path: '../assets/img/Art/-image_dali-persistence-of-memory-lg.svg' },
    //   { id: 'svgPhoto', path: '../assets/img/Art/15815906134355_8293849786237666996_n.svg' },
    //   { id: 'svgPhoto', path: '../assets/img/Art/26517021889248_8026067559252081096_n.svg' },
    //   { id: 'svgPhoto', path: '../assets/img/Art/44418993232044_7382442637724156660_n.svg' },
    //   { id: 'svgPhoto', path: '../assets/img/Art/45016015545963_3411506491084716110_n.svg' },
    //   { id: 'svgPhoto', path: '../assets/img/Art/1051040349.svg' }
    // ]
    // colors = [
    //   { hex: '#ffffff', name: 'pink' },
    //   { hex: '#b4a24b', name: 'pino' },
    //   { hex: '#353535', name: 'pink' },
    //   { hex: '#5a7cc6', name: 'pink' },
    //   { hex: '#cba6a6', name: 'pink' },
    //   { hex: '#e1a24b', name: 'pino' },
    //   { hex: '#11e139', name: 'pink' },
    //   { hex: '#4b2cc6', name: 'pink' }
    // ]
    constructor(router, httpService, catecoriesService, produtsService, productscolorService, fontService, dataService, main, order) {
        this.router = router;
        this.httpService = httpService;
        this.catecoriesService = catecoriesService;
        this.produtsService = produtsService;
        this.productscolorService = productscolorService;
        this.fontService = fontService;
        this.dataService = dataService;
        this.main = main;
        this.order = order;
        this.title = 'EditorPic';
        this.isOpen = false;
        this.isOpenDraw = false;
        this.selectColor = '';
        this.select = false;
        this.isClicked = false;
        this.isClickedBold = false;
        this.isClickedItalic = false;
        this.isClickedUnderline = false;
        this.isClickedOverline = false;
        this.isClickedCenterline = false;
        this.isOpasity = false;
        this.isOpasity1 = true;
        this.expression = false;
        this.toggleButton = true;
        this.category = '';
        this.formatValue = 'A4';
        this.horVert = true;
        this.origin = true;
        this.shadow = false;
        this.shadowText = true;
        this.shadowSVG = false;
        this.removeColorValue = 0;
        this.saturation = 0;
        this.blur = 0;
        this.contrast = 0;
        this.noise = 0;
        this.activatebutton = true;
        // public imageCoordyy = this.canvas.imageCoordy
        //owl-carousel
        this.bob = null;
        this.isCarouselOpen = true;
        this.toggle = false;
        this.indexBrand = null;
        this.indexBrandType = null;
        this.firstImageBrand = null;
        this.allColors = true;
        this.length = null;
        this.colorDefoult = '';
        this.orderDatas = {
            productTypeName: '',
            brendName: '',
            productColor: 'White',
            colorDefoult: '',
            productSize: 'M'
        };
        this.fonts = [];
        this.images = [];
        this.products = [];
        this.productBrands = [];
        this.categories = [];
        this.arrColor = [];
        this.productBrandColors = [];
        this.productBrandSizes = null; //new
        this.allSizesByProductType = null; //new
        // public productBrandss: ProductBrand[] = [
        //   { name: 'Melante', linkeBrand: 'https://www.facebook.com/melante.am', productColor: ['orange', 'blu', 'green', '#444444'], size: { XS: false, S: false, M: false, L: true, XL: true, XXL: true }, src: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUUFBcVFRUXGBcaGyEdHBobGxodGx0hHSQdIhsgHRsdICwkICApHiAbJTYlKS4wMzMzHSI5PjkyPSwyMzABCwsLEA4QHRISHjIpJCk0MjQyODM0NDIyMjI0MjIyNDMyMjIyMjIyMjIyMjIyMjIyMjIyMjQyMjIyMjIyMjIyMv/AABEIALYBFQMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAACBQEGB//EAEYQAAEDAgMDCAYIBQIGAwEAAAECAxEAIQQSMUFRYQUTInGBkaGxBiMycrLBM0JSYoLC0fAUc5Ki4VOzB0Njo9LxJIPDk//EABoBAQEBAQEBAQAAAAAAAAAAAAABAgMEBQb/xAAoEQACAgICAQMDBQEAAAAAAAAAAQIRITESQQMiYXETFFEEIzKRoQX/2gAMAwEAAhEDEQA/APd4ZSobP3E27BPy7q0MMk5Yn6yviVWchuEtECSEJt+ETaeAv/mtLBplCVEXuY3Ekz5moaF8NmKlnTpq8yKVSk8+8TsCB3JB+ZpzDIBK5H1ye0KJHjHdSa1//JeRqCgSLbmx3e1QDbaTzjnuo83KuhPrUfy1+bddZ9tzb0U6+85VQQ24iBZLawANgCmh4DyoC2PbJ5uNec/I5QncPAkmbp0sPaTspm3qwNM/5F1THpytqiPaRv2rTPVrQCXKAHNO/wAte77JrRV7Y6jWNyksBLqQiMzaiVQYnLlGlriO6tdTZ5wHfMid2bTv8KADghCGv5abDT2RRsMfVi/1yP71TVMBCm2lbQ2I7Qn9KEELIRlEjnVzsgZljt1NurdUBmPEl9Y/6gPclBPnT6BDiupPzoJbBeUDclzSBsbRPfem+blTs36AHfIqg6sdO2uVXmilOUlBAQpRsFeYUBw208sest9g+aaQ5WR0G0gWzxHAJVNAIhfOFs71jSdpMRPZRnU313W6iKjeFKCjdnkz1k2gkfvvYebAJNrqE9fQ+QHhQDDqJBE7DXnMM6lIJScvskgC0EQBa1zOt716wYMKSpafaUmNgNpgT1k95rzbfJ0TmT0oi+oIiQOO/wDwaA020jIk8NxphOI5tA6JIzLuAY9o2014VTDtgto1sOI3jyNM4RILJSqT01H/ALiiPGhTPaeKws+zDkcbJR86fw05lbOgjzcpM4aA5rdZUNk9FvbaRNuy9N4JOYrChHRSnXUdP9T3UIUfB5wJ+55n/FC5SQS4xewWo9cCI7iaaeHrU+78zSnK5CFYcJgQvKOro27hUAcjpNcFm/4Viu4gHKP5jfxoqIF0a+0THWHCT21bEIAEgauNk8TnbHkB3VQGxyPVufy1eRoKcMSQSduy2m8nW1FdWChw6dBU7xAINM5BmB/fdQGYwBlRwSNY3C/731MH9EY/1HR/3XKVS5DbasuZUAAgE2MZtL7EmOHCj4NGZqR/qOkXtdxwX76AOE3d/mDTX6NujM/SL9xB8XKGiCXUkfXT8DZqYlCip0JEktpEaTJc27OugMD0ycgMydQr8tSu+lbZKWLXhROm3L/mpQG3hvZb9xO7ckU3gvYHWrwUqlWD0G/cT8M0zgSMp4KX8aqABh1wtQ3uKHfeklj/AOW5f/li2/T9KWfS7/E9BaQjnJWCJJ6KYA3X+Xa2Uf8AyVKAJlCRO7U/KO2gGUL9Ysfcb8VOUUNhTqAf9Nz4mqXcQorcKdQhsjd7Tmv72U0yTziM0ZubXPXLcx20Apyri04ZsOqSpSQsSExN0rG0jfTQdQ62FoOZC8pH9SdRvm3ZRcW2k5QsApKiCDoQULkGaROFS02W2bIkZRJOUqULiZJEmY2VnNlxRzH4YpbdgmMipkzokgdsU1iFEK6IlUHKDoTBiTsE7eNY3IGEW3glhycykuKgycoIIiewntp7lQJU42jPDhOZISrKohNyD93XxqXiypK6O4BSilmMgGQBYMz7FsvCQNeO2tLBWR/9jnxqrLbZUptjm1ZT0VKURmJBTcTO3StDBLlBG0Lc+Nd+qiEumZiURilnYVGexLceZpxA9Y5O5vt9qguuJS8onf5oRTOFUnnHAZuEdX1/81U03SI0WWmXBlB9hWy2qaHiGCchkWVvvdKhbfrTbqYMhUCDKe6/mO2lVtphEq9k9EEkknKRqTOk323660QA7gnMo6MmbkETANjsvljSgOiAd5WN+vRHyrQ/jSgXGYTEzGpipiX21JBWk6iI1uRFxQHG8VkBta51ik3nOchcCSJjUaDhP7FFdQDmAkymAI4bqqhsJQlCgZSkA7wSNNfnQDPJABbSDrlFFDWS2wlR/qM/OlMC5CRBmOHE0+p5JSVkHozPCNaAXfezykCAlQGzckzw1quGWMy9nQRw2rqNQsry26esz9RF/lHCmsa1LZAExp++qaj0EJ4tMuIKFCch1NjBBpPly5YMx6zXdY691L4wOBEpKecFkJXMRKc8RcfV7SKLi2xkazSpQVmAAMFQBtfZtg1lPs1XQ04uC1xXHclf+aJiRKRxW38aKG4QpTaQfrxx9ldx4VZIWEALj20xG7OmO3WtIyHxTACVkTZCvEGm1JuOuqY0dBfuEeCq6twSIO39KAz28LAQUyDl32uINuwVTD2bP8x2f/6ObKdw90IP3E7DupYt+rVYEBxwxefpF6caoOtAZndLOJ7ubbppkesc/lo+Jyk8KogOzM5gInc22dnypxo+sXxQ35uUBg+mLc8zbYr8tdpn0iFm/wAX5alAFWghtsjYgTx6NL4GZVthaxr99Wtzu4U82sc2j3U/lqmHbAblASFFxd419Yr5T1UBzCoTnWYElyZ22CI8q6pMOOL2dEAdgP77aKwOmsx9f5JqKTdwffT5IqAUx3KKGVqUuYKQm2pIUs276vyZj0POJWgmyFgg2IMt60PF4FD/ADiVyISlQKdQZc4bqtyZyYlhxIbM5kLJzam7e0C1c1z5+x2/a+n3y/wf5QYK0JTtKtvuqNZbbqkEJUCBmSerKoEx3VrPvHMgZSTm2QR7C9s286XxuYgCw6TcwJAladZ16oH6yfjt8oumYjKlT0ZCcRiHlPkoS2yELA2rcsoDbGl5jcJ2065yXOMTiFXyt5Ugb5UMx2xCtBN6YxOGQlCztKSLm0kGLaa8KXXis6obQkTYSBPdoKjmoqnsqi5PGjvIriVttby2nokmYgAymmcE2lCUBCYTncRAiwClxPABMdtK4DByGlCUjJIAtYhMCRuFu/gaZwMZFQSSHHDGoHTULk/qK6+7MewgV5nMx0zD/A7qQ5Vx60uhKUSFhM6ySCsQItN/GmsQDzimwFJ6QhQ2SAdAZ2nQnQVq4LIpbh6JhKOyC5EjZBmuMfH6Wry9nZeRRkm1aRZtohcySAg9I6ajb2UN5YzINj0tYP2Faf5ouIxTbiSkObY6ImSNmlxQ0vc0UpiUk5T2IJnvHjXRPNLRyaxYpiZOUnek+KT3Xp1rBZ0iTAm0XJg28hSeMN7W6SbdRT5URx4hspSSACBrxSDfXfXQyN4jEoQChHtQbi8du+aVw+HcU0lcAkoSYJuTAJkx21ZQlJ6j5fvuq+ExQDDaUzIQnWN1AZeEdWpUaJk2CTJuoWMx2AU5h+Tnc6lKiJOW8ak3IHz/AFofJDakpCtylxI2Z1be2thnFZptoY1oDNdSW0qSqM6jII6gJPaD3UVzHhSMpBBtuIsRRHFhZOcAwoARuhJ16yaXwqYWcsEBIJn72YR/b49dc3dmlVHZSVIJTKghXSM6EpkQewzw41FsEqRlUSJkzsgW6t1WJ6bYVeRGm8jZ2JrRW4EwkDWY3W31dk0Yq0lCwY0Mif3104+rMgEfbR8aat/DlZSSLWJ2TZVgOsjuoKmylMfV5xHZ00zUS4srdovyso2Ts17bj99dXwSDAVJk7+v9/wCaYxyQUHT6xH9Jj5URQuBG2qlmxeKF8MfVte4nbwqjSJbI3uOeLiq5gHgW2xPSShMi4+qJ8aAhSisJE5c65tvWs38qrZKKpdTzryVWAcTckiSW24inUnpuWJhtBjtc0pBxgrW7BIHOJHV0Gu3S2vcadwwh5QJ/5aB/c5WiGX6SmA1s9r8tSrekhADdvtflqUBx53I2FGYCASbwABrWhgDLSTGqlG+yVrPzpdQzISNmQTGulMcnH1V59pfH66qAswCCv3vkmlncWkKVt6QNuAT+hqKx6G3A2oKBWo5VR0JAHRKtijsFLYzIFLOwH6oJGgOy23xrn5OVemjcePYZjFwpRCSZSkbPqlZJJ3dId1MB2XApXRSEOTBvGZvhbzpfkuM7ki2VEDddy53nyoeKWVqSkAhWhHvQYMEi0J36VhylCNt2ypKTpIdRiAEIWohKcyjwAyuV3AYlt9KikkwoE2IMyFJ1ExYdgrmNwAcbS0Zy3EjX2VQd2t+2g+j/ACaGAqbqJjNcSJECJjt4mqnJSS6rJqoOLd5vC9h7EYBBBOVR4BR3bBpUwuDSgmEq01Md1PVK3wjfKsnLm6oxXMzbCTkWrKhIyASsxlBCom2+Nk9VAQ+vLlTKMylKgghXSUSBpaAa9DUpODlp0WMklo8/h2gnNMSlSb33JNrcaGEnn3BISQ2ggze5cncNml/C/pBUqxgoqkRybds89hUJQ50kwDeRpKjEk7PGj49AS40CdVFXH2FCthSAbEAjiKo5h0qgkXBkHQgwR5Giilojk2Yr+HJICQTcTANulJ2U2MAopy2F+GwzTy30pgb9gBOvVV2lk6pI7r1oliowggnMYI2D9zSWHZTkSlKiSkAewRv2XitqpQGWwlYQErMwTrbaY14QK7g0J6Zn6xOojQfICtOqqQDYgd1AZTYzrIkwVap90DZ1Vfk9hQLhVImBfSxVp2nyrRQ0kaJA6gKtWa7LYopiFBUiwI43jTuoOISZTfffyp8tpmYE/v8AQUHEYQLi+WO3zq0LMhIclICjew6XAnfuBojjTgjMr6yeJnMIOmw37K0GMMlABJzHYTG7Z40hyjicysokAeJkR4xFYaUcmk2xzFIytrBUTYkmBu3CrvuGFRMgE+f6Uu4lRaUVTJQZnti3VTDiDm3/ALNprXRDOwCLk7h50QYoJJSAVHOon+omBQ8IlwAKTcTcWnv6qdY9j8SvFSqzFOqLLZXCjpvfzB/ttaVVLwS6ozEtojvcqYU+sdv9dI70NxelMS2lTlxMNoi5tdwH2eGytmRX0mM83+Ld92uVT0hMBse9+WpVBptaIt9RPlS2G5RQF8wkFThLqjA6KE51wVHZJEADhpM0xh12R7gHVYUTAIBSTt5xfxr17zUZRLBuLL2IStJKUqTksIMoBVA0sYvxiaNiAFKVe2aO3J8rd/ChHEBDjp1ObT8KYoWIbQ6C0XIUTJCFgLFhJgHedoisclddmq7GsAkZ3AkkylIk8C5vo2FZAdB3oWeogoEjsUrvrO5E5P8A4cupDinAQgjNsu4IHdW+20M4M3CSD+IpP5avFSq0ZutBMolKpj52P77KKUiqrbnboZq9bMkqVKlAYfpNy6MKgQApxUhKTpbVSuAkdZI6x44elGP+k+pvLXq+rNE/3Ub/AIjKPPpG5qe8q/QV7t7Dp5gt5RkyFOWLRliI3RXF8pSaTqj7EPo/p/D45SgpOV3fSX4PDYv00fcypZQEKIvAzqKvuiNOwmrcnemD7SwnFAlP1iU5VpnblAAI4RPka/8ADlALy1EXDYg7pInyrX9NuSVvqZLaAYCwpRUlIA6OWSTvmO2srm48kz0+X7WHm+3cElW7ysXs9aDNxpXaQ5FQUsNJUpKlJQlKikgjMlIBuONdwfKPOOON5YyTeZmDGkV6Efnmkm0nY6lMaV2qhQNgRVqAlSq5xMSJ3TfuoGOxgaTmUCRMWjjv6qAZqVRlzMlKhooA94mpzyJy5k5t0ie6gL1KlSgJXFCa7UoBR3AhS0rzK6JkDZoRYdRpfFspGWVXzo2X9tEbqfcdAgbSY6tTfupPEOpsMwutHfnTb2fGoC3KAJbVEcerb4TSDeOWDeFeB8K08ZGRc6ZTPcaWUwFRmHDj3xWZRbymbTXZXDughIm8AHrAA/fZSeIcJ6GwE23kqP60RjDK6J0sFb7kA6VwmFqWQbK7jv6v1rLt4KqWS2AbKFOmbpIEH3EKgcZojSAHVBNhkTIE7FOR33HZQ20BRdNpzSL6QhAE9cA9Royfplfy0fE5WkjLZj+lwA5r8e77lSrelijDX49PwVytkNfBoEI90fCmg4FcJV0gPWOC5H210xgldFHuJ8hXMCiEHite/atRNQGbzWdxUTddzs0A100iuYXkxGDS4pAW4QoEnolarWA0GqtOO2n8OYU5MRzn/jRisHnCCNQQepIv31zjBRbfbNubaSMjkblZvErcS2FhQQkwoAGylzoToVJ762eTigqUMpDiAAqQRZUHozqDlFxupbkZ5DuZ1sdFaUiYgykuSDxFu8VqNoSkwBcjWN0WJ7bDr3VuOjMthqlSpWjJKlSpQHzb/iL9On+UPNdfQXPoz7h8q8p6Y+jz+IdC2gkgN5ekqLyo/MV65xBKCnaUkdsVzincj6P6jyRfg8MU1au/bR4H/hv9K57g862uUXwt5QcUoIQSAAJNrW2STtNB9DeQXsM4tToSAUgCDNwZrV5S5KUpfONkZtSDvG0bOw1fCmo0zH/T8kfJ53KLtY18GfyehfOBbKHMkic0XG2TYU3ya6lD76lGACok/jp/kxp8FRdUCDoNSDwiwEbKTTyStSns0BLk5TM/WzCRXU8BjuuISrM2XAoGZOUd0HwvXosTjz/Dc6mxIHYSYPdekkclPlIbU4kNg7Lzedwm+81Zvkx0NLaOW6gUmTvvs4DxoBZPJILJdKznylfC1+ueNDxii4whxRJUlRR16mTx0reRhVBjmrZshTwkgjWk2uSVFgtKICs2YEXHCfGlgUeljDJyKMuEEndKQSBH71rPU02UhLfOLc2wBl4wIzGtxjktSmS24q4VKCDMWERw1txpZjAYpEJStKUgzIIjttJ6qA0+Ss/NgOAhQsJMkjZPHZ2U7XBXayUlDcciBGtXIoa2pIubeNABU8cyQQLmNlrK07vGkMdykGltoWlIzuJSkkWJKk2mIzbtNLVpfw5kGdDPgR86piGjYzopPdmTPePOhSY9UNrIMdBR7gaurXtrmPJ5pyNciojXQ0Ui9AeW5ZOIS0y6wVEtpBW2m+cZU6jbERGt52VqpRY7Cpatd2YjyFKYrlgMJa9W64laEkqSDAEee2CdutNYFxK20qSSUlSokEH216giQeusYs07oKhH0gGs3O32G486FhXApxyJzAJB7CuIO3/NdUtJU4ibkz/akG/CPCioQA4qNcqJO+7lVNPRGmtmN6UH6Mbiv8tSu+lGHBUhcSSCDciwgjT3jUrRDRww9W0R/ppn+lMUJvFlKQI0KieOYk6RxouG9hsT9VO77I/UUbDNJ5sEgbbkA6E7azJPoqrsWYdJKoHtKzG+mn6VHMPmUuIBSRb8IM95o+GQJX7yrdp3Ug1iJeWJiUBXggHyrPG9lv8AA61jFNhKA2AEgAAbha0WrUaVYfvTj21mojnFE3ISkjhJcGnZT2GXMju7ZnyqxtbI8jFSqF1MgSJP6EjwBqxUBqRWzJ2pUqUBQuATwAJ6jMeRrucbxu1objJJJBiQARssSezUiqIwwsZvbTgVHxm9AMZhvFTMN4pdGEAjpExG7Zk/8B41RGEtBItGnBJTt66AZSsHbtI7iQfEGuF9PSv7OvC0+VBGF2lV5OkbSsjUblnwq6MKACJNxGy1yfMmgCqWBEnUwOM13MN9DW3Ks07IiN+vadP2aEMJEQqYI1jZk3cEDxoBnMN4qZhv/f8A7pb+EERmMRGzcUjwqwwu3MZme3Nm001t1UAYrEgbxPC0fqK6FDeKWTgwBGY6Rs0gDyArv8IN59nKdNL+N6AOhYM8DFWqrbcTeZM1agJXDUJpPEcpIQUhUjMrKDAiQJ2nsoA6lqkDJqYJnTW/gO+rhM+1e8xa0RHiJpDCcstuEhEyFZTIi/S/8TTK8WkCTvA/qIA8TUUk1aLJNOmsl3hIUDMQdNdswausxsoDmLSJkEwCdNwk60YrE6VSCPJ8hpqP9NM9eUf5rCxzeJWSGlpbb5xwrX9YwpVgINoB3TI3XaxKVOIbSlRbUNCS4BoI+jWiddLjURV8Ao80oLVmVncCjoICyFG5MTprtFYlbVG40sluT2CqVzoY7TEz2Hxpu5cXewbQR15nNPCksRyillLq4zDOkADT6NvboK5yVyinEqXCVIJQlJgzEFZJzCPtC8a1zg4wqN5OkozlFzrAL0nMc3f7X5alA9LuiGRc2V+WpXc4mrh/Ybv9RPkP0o2GcgJEEytemzpKif3spZJ9W0NJQmDt9nZVsLiYCrEnMqNIPSNt83rLZULl0ArSLZVkdhH+aVZV61UJuEC/b/gd1NKbzLVlSZUq/AwBfwqyGSHLm6UjQWNjEn8VYWWa0jiHyFlR2hIjYMpUfHN4U9hnQpxMGRkXI7W4+dL80FrWCdEpNt+ZYM24CiYVjI4kTMpUd2mUX/q8KqtMOhoLBWlJmUyZtEQRfbtFcdbAzGfaUn4hs7a5jH0pKDMkKnjBSoeZFDDucBWnSRb8aK1izPQ1i8QUNrUm6kpUROkgEgGKYC7xB64t376z8dZt0jUIWdDuO2mlNyfaIvoDE1oyMVKVYxIVlglQIBCoiZEgmwF+oUyaA7VEqkkRYRffr++2gBDmcnMMuwdg4b576ot9aFHNBECP7p8hQDtSl04oFWWDMT3QPnVy+JAg3/SaALUoKsUkazcx3mBUViUgZjIFtm8wKANUofPp+0K6h1J0UDtsZoC9SuA1wEK8tooAS8W2k5SpOb7MieuNY40JD61KVaEwIMbSVA34ADvpRrkbDtKLkEHYSowLRAGmgA26Vd7lNKG1KShakpFoFjw4Vz51/I6OCb9Nv5wC5SxGVxKSYBQrUwBBTvttpflBTZUypS7FQICQFAqiwmYAjbw66Byk5/Ec3CVDO2uxsQCW/wDF6qrk4NttIBg5j0o6V0qNt11Utt40OKSzu9F14ppLjbaSAsqKlQDforuVRc088sEIG1SkGOpaSfI0MqQpxuIJC7mLxC9saXrK9I8G8paFNyU2EAwQrNbd92DsjZWJScYtxz8HWEIzkk3WOz0mNT0XPcMdyv0pRrFKceEHoA6cN/bV3SpGHAWqV5UpUeP1vnQcKpLYvEzc741A6jbrpJuUktJZZzSUU++kOc2MicxBASBa89W+aw8QpTbKlNozOl1YAUJSmXF7tw3Ge6mk40hKAEgkJAvoIF4G08aqlxwpICbEkzBF1Ek394m1H5ot0gvG0rZzGvthvELUkOJzJOUT0iUNJSARNySLidlTDP4fCglwJZzNoOUklQUSvMJ1MWBPAV3C4Xm1viSsFwQCmcsoQVGe0dWWtBDCOcUciZCUESkWu5cbq3xt32Z5NLjeDM9Kms3NH3vy1KPy+fY/F+WpXQyGU1mbR7ifIfrS+AZPSJTALixMi/rFbuOz9gyHuikbkp+X6UZhGZsAgEc4s/8AcWR5CoCjKsqlzEZ9SeCaG43mK1pO1IkHgB50VDAWpWbYv5JrhsHMugUMscAn5zWXnZUUwftLMkmPImT40yj6RG3oL4bW6V5PTJXfRPnp5GnBZxEfYXJ7WwPGkdFlsHisFKgc0ZjEbuiT22FExCICdPab/wBxNcxaFKKZXlBNoGnRVtm52bNaUxGCKROabpGn2lBPzpp4RN7Y3jh6t33FfCaZ+uOo1lpYKUOyfqKBEW9knXb2U867klZ0iIHXv7qqeLYozORX8rbSSQolsSZvICQbaRcaaG1amCxEpUJkpWrXcVKKY7I6qDybhQlDZsYbAJjaAkW7jUwLX0hJF1qEaWClQNN0Uz0Dox/TVnUEoTw13eF6steZxQAn2N29cyd3720k40px1Y1TmTaLHoJk8dBWmHEIJAgrgTAvtiY0GvjVSIyBghU2jKR2yD8q4sIkZvaCujrrlM/2zS+DxLilKCxAvA6o8K7iLrbA1zns6CqoOPKjLa+ZIv1pruI6abgXUmQTb2hr2U4W0iSYO2+yP/VZuKXKFHZmEdWYUA5jUQCoGIBER10Lkx2GUuKNsgPcB85qrqyQQTMA/OlkXYaRoObR3xesyusBLOS2Gx7i1EW23gSNw40xzbqrnKBukjfcxOyDFBwOIAbzBAEZtJJ6JIN+MUHkXlz+IzykJyxA1sZi++2lc4vikpPLOjg5JyisIYXhypWRZhI9gb7DdaNeNLJUskNpQciUheadqi5FtTpwruLxJLmUmQFA79gER3ntruBSSp3KoghCAN1i5sP7vSPFttbJK0lYd1QCkAJSBkNxqACjbupHEvFwgAWGgAvumouUlKFCEpBFhqCUneLWptAAUgJKQYJjKQdNfauNb8KzO/J6U6Xf5NR9OWgOGYylsnUqHZZX6UxiyCngHESZ2habT49kVmYzHJQ620XJWYhCRGoMSYMTJ200MSggApg50GSZgBaSbnSwNWMow9OiOMpeofxikqQrQRJlVhISdAbnXqowZAMxckSTqaviz6tfuq+E1g+lBeSEFnMEknNkmZtl00Gtx+lblJRi5UPFBzko3Xya+E+ia9xPwiqsDoH+Yv8A3FGs/wBHsStTSErSZAsqPqgdGeMR2RWg1p1OLnj01fOKsJKUbRJxcZOL6EFvFDrxJB9YiBpEobGzUk6b9K0GDmccAP8Ay0Qesu3G+hNshTjpOocTYi0ZGqKyYeXEXbbP9zk+YrZgzPSMGG9vta/hqUP0rc+iv9rQ+7UoAmKQoNgpIkIBTM3MWFjbup/k/wChTeYKr7+kqaA2iQjghMG26jYCzUblOfGqgIUEhwJ1KvkmaAn1eZM6KHkgmmmTdfBXyTSuKRJcI2f+KalZsthsEZW5F4Qj4najj4S4lR+yoW4lBHZ0TQOTV9N07MqN42ub+uuvsyUpTJVlJ2SQCmTaBMqm0VmV1gKryPOLzFsi4Kj8C6RxJKTlM5cySOASoHt08qcU0EFtImxPwqquMalJ3yI/EQPnSSbXuFRx4gtrI0KFXHUdlGWJMGYIiCLbd1I4bMlLgI0Se+DTjKTMqVmBEi0RRO0VqhfDup5lJKFKlImBYHr2XpRnEKRIERxpnk/Ep5ttMgHInZthJF6PyepOVRkE53NRcdNX61HG9Ml1tC+EWoqcJsSsW/CjZUdZKHyrMQlaECBlEFJXOyb5k7dmg2nwKJcdJ2LFuJQ3++2q4pWZw3slIjrOafId1bIRLSySUKm22CZnb2f+6Ml/JCT0lqMGDABidpnQUFpBQsGR7JsOsa91PKbSvKo7DI8v1qgzcc4pakpkRmB1ABuL60TEMqCD0STb2RO0ExS+JLaFpKwYSQBG0zaeFHHKhAzKRCZAgEGxMAg2oChXY2gweJmP1pXAOSgTtSnfax/XxrVxyUqQVAiQDF4ngaycAPVo91PkdaA0UcnFLeXNe5txJPzqmAYCUnKALnZrbbVsFilluSQTKhMblEDwirYZft++qs8Vd9lUnVGc3hlHMVWg364knXdVOTQ5mcAWAVFNykqEZlhIiR7SQd9yKcWJKtxXw+wnfVsGiHHAbyhvulysxgoqkWUm3ZTGtc5GW5CVG22Cn/NZmFaSHs52oykHSxBBvtEnvpxktsiAoIbSXL6wQtIgkzw/epRhciUJzqWZV0lXUdok7Y2Vz+nc1L+zo3UWurwIrDLLjbxSmVLSCowVyoKTZRMxcTwGyK0McylXSFjmA/qUEiRsN6x+UOTg+ppsqKcrl7G4gk6xuiRvp30gW4hsuNGVBaVFJAOZIIhIAv7cHfqAdldJxTTTWDEW01TyajjZQypEyUoVPaDTKva26/rSiMVzuHDhSQVtzl3GDI79vVTZHSBrUUkkkZe8iuDbhtuY+jR4DhRG09HXRaz/AHKrrB9Wj3R5V1vT8aviVVICwxHOOzrnT8CKWfeKXJCCqW0AxJj6Q91qZw30jsRZxPwNzFLrTLqkyLIRrNyFORpVBn+kSpDZ35vy12qeklg3+L8tSgNNkWR7ifACiYI9Ai91uDT766DhpIQb+yPhFE5OcGRV9FufGuaAoyolx1Mx0tbfZRXP4gFbje0BJ4QYHypdrMp12IjN+VNWZb9c7vlA7MqT50AXBKJW5OwJ4bXIprDph1P8tfxN0qlXSX7qficq+AczOj+WvxLdAN4kwWzr0vyrFVcXMDinwUN1TFySgDar8qzVXxHend9oUBTPnSoKEQCbcP8A1VnM2YJSoBO6J7KGspS24q8BKiTroDVMQJVrA2j5jyrLRUxfCYZXNtKSPqJN9JABp/AaK3lbn+4uh4dwc21IAkC27o6abpq2CPRPvuf7iqKNBuwSXYcdGYglY0P/AE24obaYzfhj++hqPrnBFsw78jenj+zRphShshJ7BmrRBhCwVq35bXG+ih8ImVDUwIudZApLB2ccm4y277+NTHKlTaYE5jff0DQCvKLhWYT7WdOotc8OFO8opQGkpEECPMd15pRbQSUCI6Sd17g6Cr4xfQjin4hQBcYwQiYGUg3AHEiaBgwA2k7kiexIo775DZRsIP786RadIARlJTkG0bh36igHeTl+rHWr4lUxhR0Ve8rzpHk5ct9qrT940zgFkNmZJzq67rImPGgLfa98fCiusWcXwbRs+85QlEkq2dL8qKu0uHljbzaPNygKPoSlxACRCg4SIFyS2ZI31fEv5FNg3zKIGmpBPhFA5SWS42BHsr+JFcxbcLaneqOsARUordlsx5xAtBM+C9aZfTobfSN/GihLHSQNyvyroS3boH/UR8aDVIa2OHQX7p8jVOe02XG35a13HqhtZ+6fI1TJEX21ACbdIypi2VPiKNngW+2fiVPnQMMkdE7co8t1BUuUkpMELWOHRWoEd4qgKwrpPQn62v8A9bdXSfXLP3EfE5QMOoQ6dhV/+bc7Joja5cX/AC2/icoDK9MD9Ff7f5KlU9LFWa/HuP2KlAaeEMJRxQk+AqYTCnLaDKibkiMylHYONSpQHcEzCl3+ufC1DCfXun3fhTUqUAZr21j7qPNyuJCUuJUlIBLbngW6lSgDqVmUjZ0/yOVXHGEE8U/EnbXKlAKY9R5p0CMuRQO+4OnZNOLErB3yO4muVKAXwqAWm9bpHwx2aUbCohJ4rc+NVSpQCTafWmSZ5zZH2Ea8L006JWs7kp81V2pQFUHp/gPmmqYr229+c3/AqpUoBZbklPvj5T50TGNkI1Gz4h8qlSgJiTCT1GlmWhlBH2UnXfUqUBVx8oSgDgT2kp8zNbGATKPxK+JVSpQAGz7Z3Lj+1uu5JcUr7qBGlpcPzqVKAimYcTNugbAyLkcBuruORK2Z2KV4CpUoDpsWz978q67im02UUiQtuDt9tFSpQgXGPShwR9RXgDTKk3rtShTLwbxKURqReeyuYUy3p/zXD/3F/MVKlAEQLvcFDxbb/SrtMQ4q/wBRE/1O/rXKlAZXpM2ZRf7Wz3alSpQH/9k=' },
        //   { name: 'Mosini', linkeBrand: 'https://www.facebook.com/Mosinifashion', productColor: ['red', 'blue', 'orange', 'yellow', '#444444'], size: { XS: false, S: true, M: false, L: true, XL: true, XXL: true }, src: 'data:image/jpeg;base64,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' },
        //   { name: 'Tosp', linkeBrand: 'https://www.facebook.com/tosp.armenia', productColor: ['white', 'pink', 'red',], size: { XS: {in: false, size: 609}, S: {in: false, size: 648}, M: {in: false, size: 686}, L: {in: false, size: 724}, XL: {in: false, size: 762}, XXL: {in: false, size: 800} }, src: 'data:image/png;base64,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' },
        // ]
        // imageProducts = [
        //   { type: 'assets/img/Vintage.png' },
        //   { type: 'assets/img/Trafaret3.png' },
        //   { type: 'assets/img/Trafaret.png' },
        //   { type: 'assets/img/Vintage.png' },
        // ]
        this.index = 0;
        this.firstImage = 0;
        this.firstImageCarousel = '';
        this.linkeBrand = '';
        this.customOptions = {
            // stagePadding: 200,
            // margin: 0,
            // loop: true,
            // navText: [ "<img src='myprevimage.png'>","<img src='mynextimage.png'>"],
            navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>',
                '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
            // navClass: ['owl-prev', 'owl-next'],
            // lazyLoad: true,
            // video:true,
            nav: true,
            dots: false,
            autoHeight: true,
            // autoplay:true,
            // autoWidth: true,s
            smartSpeed: 1000,
            center: true,
            responsive: {
                0: {
                    items: 1,
                    margin: 90,
                    stagePadding: 90,
                },
                400: {
                    items: 3,
                    margin: 10,
                    stagePadding: 50,
                },
                760: {
                    items: 3,
                    margin: 60,
                },
                1000: {
                    items: 3,
                    margin: 60,
                },
            },
        };
        this.productSelectWithoutScale = true;
        this.initFromServer();
    }
    // getUpdatedMessage() {
    //   this.dataService.message.subscribe(
    //     res => {
    //       console.log(res);
    //     }
    //   )
    // }
    owlDragging(e) {
        console.log(e);
        // console.log(this.src);
    }
    redirectToShop() {
        this.main.preview = true;
        this.router.navigate(['/order']);
    }
    modelChangeFn() {
        this.setCharSpacing();
    }
    getPassedData(data) {
        this.activeSlides = data;
        let index = this.activeSlides.startPosition;
        let src = $('.owlCarousel').find(".owl-item").eq(index).find("img").attr('src');
        $('.divv').text(src);
        console.log(index, src, 'QQQQQQQQ');
        this.firstImage = 1;
        index = 0;
        // $('.owlCarousel').on('changed.owlCarousel', (event) => {
        //   var current = event.item.index;
        //   var src = $(event.target).find(".owl-item").eq(current).find("img").attr('src');
        //   $('.divv').text(src)
        // });
    }
    onload() {
        console.log('onload');
    }
    onResize(event) {
        var checkWidth = window.innerWidth;
        if (checkWidth < 800) {
            console.log(800, 'ok');
        }
        $('#myCarousel').trigger('refresh.owl.carousel');
        this.canvasHtmlWidth = window.innerWidth - this.dataService.widthKey * window.innerWidth;
        this.canvasHtmlHeight = this.canvasHtmlWidth * this.dataService.heightKey;
        this.canvasCenteredPosition = window.innerWidth / this.dataService.positionKey;
    }
    Resize() {
        console.log('resize');
        return this.customOptions;
    }
    ret() {
        return 0;
    }
    funk() {
        //   if ( $(window).width() < 768 ) {
        //     var owlActive = owl.owlCarousel(owlOptions);
        // } else {
        //     owl.addClass('off');
        // }
        // $(window).resize(function() {
        //     if ( $(window).width() < 768 ) {
        //         if ( $('.owl-carousel').hasClass('off') ) {
        //             var owlActive = owl.owlCarousel(owlOptions);
        //             owl.removeClass('off');
        //         }
        //     } else {
        //         if ( !$('.owl-carousel').hasClass('off') ) {
        //             owl.addClass('off').trigger('destroy.owl.carousel');
        //             owl.find('.owl-stage-outer').children(':eq(0)').unwrap();
        //         }
        //     }
        // });
        //   this.firstImage = 2;
        //   console.log(this.firstImage);
    }
    Themes() {
        this.firstImage = 2;
        this.IMG.nativeElement.innerHTML = this.images[0].imageSrc;
        // this.firstImage = this.images[0].imageSrc;
        // this.categories = []
        this.catecoriesService.Themes(this.category).subscribe((res) => {
            this.images = res;
        });
        // $('.owl-nav').show();
        // this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        // this.router.onSameUrlNavigation = 'reload';
        // this.router.navigate(['main']);
        //   this.router.navigateByUrl('main', { skipLocationChange: true }).then(() => {
        //     this.router.navigate(['main']);
        // });
    }
    ngOnInit() {
        // Material.nav()
        // Material.tab()
        // Material.zoomImg()
        // Material.carousel()
        // Material.selectOpt()
        // Material.scrolSpy()
    }
    initFromServer() {
        this.catecoriesService.Themes(this.category).subscribe((res) => {
            this.images = res;
            console.log(this.images);
            this.firstImageCarousel = res[0].imageSrc;
            const addresses = res; // Some array I got from async call
            const uniqueAddresses = Array.from(new Set(addresses.map(a => a.name)))
                .map(name => {
                return addresses.find(a => a.name === name);
            });
            this.categories = uniqueAddresses;
            console.log(uniqueAddresses);
        });
        //   this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        //     this.router.navigate(['main']);
        // })
        this.produtsService.fetch().subscribe((res) => {
            this.products = res;
            this.firstBackCanvasImage = res[1].type;
            this.dataService.products = res;
            this.orderDatas.productTypeName = this.products[1].name;
        });
        this.productscolorService.fetch().subscribe((res) => {
            this.productBrands = res;
        });
        this.fontService.fetch().subscribe((res) => {
            this.fonts = res;
        });
        this.dataService.formatValue1.subscribe(res => {
            this.formatValue = res;
        });
        this.dataService.horVertt.subscribe(res => {
            this.horVert = res;
        });
        this.canvasHtmlWidth = this.dataService.canvasHtmlWidth;
        this.canvasHtmlHeight = this.dataService.canvasHtmlHeight;
        this.canvasCenteredPosition = this.dataService.canvasCenteredPosition;
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
    }
    sendMail() {
        let r = confirm("Are you shure!");
        if (r == true) {
            this.canvas.rasterize();
            let image = {
                image: this.canvas.reqImage,
                image1: this.canvas.reqImage1
            };
            // this.httpService.sendEmail("http://localhost:5000/sendmail", image)
            // data => {
            //   let res: any = data;
            //   console.log('all is ok');
            // }
        }
        else {
            return;
        }
    }
    valueChanged(e) {
        // console.log(e.target.value);
        // this.canvas.value = e.target.value
    }
    ngAfterViewInit() {
        _classes_material_service__WEBPACK_IMPORTED_MODULE_2__["Material"].nav();
        _classes_material_service__WEBPACK_IMPORTED_MODULE_2__["Material"].tab();
        _classes_material_service__WEBPACK_IMPORTED_MODULE_2__["Material"].zoomImg();
        _classes_material_service__WEBPACK_IMPORTED_MODULE_2__["Material"].carousel();
        _classes_material_service__WEBPACK_IMPORTED_MODULE_2__["Material"].selectOpt();
        _classes_material_service__WEBPACK_IMPORTED_MODULE_2__["Material"].scrolSpy();
        _classes_material_service__WEBPACK_IMPORTED_MODULE_2__["Material"].dropDown();
        // console.log(this.indexBrand, this.firstImageBrand );
        // this.catecoriesService.fetch(this.category).subscribe(
        //   (res: Category[]) => {
        //     this.categories = res;
        //     console.log(this.categories, 'AAA');
        //   }
        // )
        this.canvas.setCanvasImage();
        this.linkeBrand = this.productBrands[0].link;
    }
    selectPicture() {
        // console.log(this.products);
        // this.firstImage = 0;
        this.toggle = true;
        // $('.owlCarousel').hide()
        if (this.firstImage == 0 && this.IMG.nativeElement.innerHTML == '') {
            this.canvas.getImgPolaroid(this.images[0].imageSrc);
        }
        else if (this.firstImage == 1) {
            this.canvas.getImgPolaroid(this.IMG.nativeElement.innerHTML);
        }
        else if (this.firstImage == 2) {
            this.canvas.getImgPolaroid(this.images[0].imageSrc);
        }
    }
    filter(event) {
        // console.log('event', event.target.value);
        return event;
    }
    routerlink() {
        // this.roter.navigate(['/register'])
        // console.log('kkkkk');
    }
    rasterize() {
        this.canvas.rasterize();
    }
    rasterizeSVG() {
        this.canvas.rasterizeSVG();
    }
    saveCanvasToJSON() {
        this.canvas.saveCanvasToJSON();
    }
    loadCanvasFromJSON() {
        this.canvas.loadCanvasFromJSON();
    }
    confirmClear() {
        this.canvas.confirmClear();
    }
    // public changeSize() {
    //   // this.canvas.changeSize();
    // }
    addText() {
        this.canvas.addText();
    }
    getImgPolaroid(event) {
        this.canvas.getImgPolaroid(event);
    }
    removeImgPolaroid(event) {
        console.log(event);
    }
    addImageOnCanvas(url) {
        this.canvas.addImageOnCanvas(url);
    }
    readUrl(event) {
        this.canvas.readUrl(event);
    }
    removeWhite(url) {
        this.canvas.removeWhite(url);
    }
    addFigure(figure) {
        this.canvas.addFigure(figure);
    }
    removeSelected() {
        this.canvas.removeSelected();
    }
    sendToBack() {
        this.canvas.sendToBack();
    }
    bringToFront() {
        this.canvas.bringToFront();
    }
    clone() {
        this.canvas.clone();
    }
    moveWithFormat(a, b) {
        this.canvas.moveWithFormat(a, b);
    }
    cleanSelect() {
        this.canvas.cleanSelect();
    }
    setCanvasFill() {
        this.canvas.setCanvasFill();
    }
    drawFill() {
        this.canvas.drawFill();
    }
    setCanvasImage() {
        // this.arrColor.length = 0;
        this.dataService.indexBrandType = this.indexBrandType;
        this.dataService.products = this.products;
        const productType = this.products.filter(element => {
            return element.type === this.canvas.props.canvasImage;
        });
        this.dataService.formatSizeSwich();
        this.arrColor = productType[0].hex;
        this.productBrandSizes = productType[0].size; //allsize ... productType[0].size
        this.canvas.setCanvasImage();
        // console.log(this.indexBrandType);
        // this.dataService.indexBrandType = this.indexBrandType;
        // this.productBrandColor();
    }
    productOrderDatas() {
        this.order.orderDatas.productTypeName = this.orderDatas.productTypeName;
        this.order.orderDatas.brendName = this.orderDatas.brendName;
        this.order.orderDatas.productColor = this.orderDatas.productColor;
        this.order.orderDatas.productSize = this.orderDatas.productSize;
    }
    sizeValuePass(a) {
        this.dataService.sizeValue = a;
        this.dataService.formatSizeSwich();
        this.canvas.moveWithFormat(this.dataService.scaleKey, true);
        this.canvas.canvas.discardActiveObject().renderAll();
    }
    productBrandColor() {
        this.canvas.productsTypeColor();
        // this.productBrandColors.length = 0;
        const productBrandName = this.productBrands.filter(element => {
            return element.name === this.canvas.props.brandName;
        });
        const productBrandColors = productBrandName[0].productColor;
        this.productBrandColors = this.arrColor.filter(o1 => productBrandColors.some(o2 => o1 === o2));
    }
    productBrandSize() {
        const productBrandSize = this.productBrands.filter(element => {
            return element.name === this.canvas.props.brandName;
        });
        this.productBrandSizes = productBrandSize[0].size;
    }
    productsTypeColor() {
        if (this.allColors === true) {
            this.order.orderDatas.colorDefoult = this.arrColor[0];
            // console.log(this.arrColor[0]);
        }
        else if (this.allColors === false) {
            this.order.orderDatas.colorDefoult = this.productBrandColors[0];
            // console.log(this.arrColor[0]);
            // this.canvas.renderAll();
        }
        this.canvas.productsTypeColor();
    }
    setId() {
        this.canvas.setId();
    }
    setDistance() {
        this.canvas.setDistance();
        // console.log('distance');
    }
    setOpacity() {
        this.canvas.setOpacity();
    }
    setFill() {
        this.canvas.setFill();
    }
    setFontFamily() {
        this.canvas.setFontFamily();
    }
    setTextAlign(value) {
        this.canvas.setTextAlign(value);
    }
    setBold() {
        this.canvas.setBold();
    }
    setFontStyle() {
        this.canvas.setFontStyle();
    }
    // public hasTextDecoration(value) {
    //   this.canvas.hasTextDecoration(value);
    //   console.log(value);
    // }
    canvasDrawing(value) {
        this.canvas.canvasDrawing(value);
    }
    setTextDecoration(value) {
        this.canvas.setTextDecoration(value);
    }
    setFontSize() {
        this.canvas.setFontSize();
    }
    setLineHeight() {
        // this.canvas.setLineHeight();
    }
    setCharSpacing() {
        this.canvas.setCharSpacing();
    }
    rasterizeJSON() {
        this.canvas.rasterizeJSON();
    }
    link() {
        console.log(this.canvas.linkk);
        console.log(this.canvas.linkk);
    }
};
SiteLayoutComponent.ɵfac = function SiteLayoutComponent_Factory(t) { return new (t || SiteLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_servises_services__WEBPACK_IMPORTED_MODULE_4__["AuthServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_servises_categories_service__WEBPACK_IMPORTED_MODULE_5__["CategoriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_servises_products_service__WEBPACK_IMPORTED_MODULE_6__["ProdutsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_servises_productscolor_service__WEBPACK_IMPORTED_MODULE_7__["ProdutsColorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_servises_fonts_service__WEBPACK_IMPORTED_MODULE_8__["FontService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_servises_data_service__WEBPACK_IMPORTED_MODULE_9__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_10__["MainPageComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_servises_order_datas_service__WEBPACK_IMPORTED_MODULE_11__["OrderDatasService"])); };
SiteLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SiteLayoutComponent, selectors: [["app-site-layout"]], viewQuery: function SiteLayoutComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c3, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c4, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c5, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.IMG = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.coord = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.owlElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.inputColor = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.divvv = _t.first);
    } }, decls: 259, vars: 115, consts: [[1, "full-width"], [1, "row"], [1, "col", "s12", "m6", "l3", "xl2", "offset-s1", "offset-m3", "offset-l2", "offset-xl2"], [1, "imgBox"], ["class", "col s12 m12 l12 xl12 offset-s0 offset-m0 offset-l0 offset-xl0", "style", "top: -0.3%; position: absolute; z-index: 1;", 4, "ngIf"], ["class", "col s7 m3 l4 xl10 offset-s0 offset-m9 offset-l6 offset-xl6", "style", "padding-top: 530px; position: absolute; width: 180px;", 4, "ngIf"], [1, "divv", 2, "display", "none"], ["imagePath", ""], [1, "col", "offset-s1", "offset-m4", "offset-l3", "offset-xl6", 2, "margin-top", "2%", "position", "absolute", "z-index", "1"], ["class", "btn-small #00e676", "style", "margin-left: 5px;", 3, "click", 4, "ngIf"], ["style", "overflow-y: scroll; max-width: 100%;\n                overflow-x: hidden; width: 250px; max-height: 300px; z-index: 1; margin-top: 5px; position: relative; padding: 10px 10px 0px 0px; background-color: #3d365a73", 4, "ngIf"], ["style", "margin-left: 25%; position: absolute; margin-top: 40%; z-index: 3;", 4, "ngIf"], [1, "canvas", 3, "ngStyle"], ["canvas", ""], ["Load", "myFunction()", 1, "owlCarousel", "owl-theme", "selectPic", "col", "s12", "m12", "l8", "xl8", "offset-s0", "offset-m0", "offset-l0", "offset-xl0", 2, "margin-top", "-3%", "position", "absolute", "z-index", "0", 3, "ngClass", "resize"], ["id", "myCarousel", 3, "options", "translated"], ["owlElement", ""], [4, "ngFor", "ngForOf"], ["carouselSlide", "", "id", "image.id"], [1, "toolNav", "col", "s5", "m3", "l4", "xl4", "offset-s7", "offset-m9", "offset-l8", "offset-xl8"], ["id", "nav-mobile", 1, "center-align", "hide-on-med-and-down", 2, "background-color", "rgb(228, 232, 243)", "height", "580px", "overflow-y", "hidden", "overflow-x", "hidden"], [1, "tabs", "tabs-fixed-width", "tab-demo", "z-depth-1", 2, "height", "40px", "background-color", "rgb(255, 255, 255)"], [1, "tab"], ["id", "ilo", "href", "#test1"], [1, "small", "material-icons", 3, "ngStyle"], ["href", "#test2"], ["href", "#test3"], ["id", "test1", 1, "col", "s12", "offset-s0"], [1, "colorConteiner", "left-align"], [2, "overflow-y", "scroll", "max-width", "100%", "overflow-x", "hidden", "max-height", "400px", "margin-top", "2%"], ["class", "card-panel hoverable ", "style", "margin-top: 3%; margin-right: 0%;", "id", "show", 3, "click", "colorPickerChange", 4, "ngFor", "ngForOf"], [1, "card", 2, "margin-top", "5%"], [1, "card-content", 2, "height", "120px", "width", "100%"], [3, "href"], [1, "activator", 2, "width", "40%", "height", "auto", "display", "flex", "justify-content", "center", "margin-top", "0%", "align-items", "center", 3, "src"], [1, "card-tabs"], [1, "tabs", "tabs-fixed-width"], ["class", "tab", 3, "click", 4, "ngFor", "ngForOf"], [1, "card-content", "grey", "lighten-4"], ["role", "dialog", "aria-label", "Color picker", 1, "", 2, "margin-top", "0%"], [4, "ngIf"], [1, "row", 2, "margin-top", "5%"], ["class", "col s5 m3 l2 offset-s0 offset-m0 offset-l0", 4, "ngFor", "ngForOf"], ["class", "col s12", 4, "ngIf"], ["id", "test2", 1, "active", "row"], [1, "col", "offset-s0", 2, "margin-top", "10px"], [1, "col", "s2", 2, "margin", "5px"], ["id", "origin", "type", "radio", "name", "test", "value", "big", "checked", ""], ["width", "60px", "height", "60px", "src", "../assets/img/Origin.png", 1, "hoverable"], ["id", "grayscale", "type", "radio", "name", "test", "value", "big"], ["width", "60px", "height", "60px", "src", "../assets/img/BlackWhite.png", 1, "hoverable"], ["id", "vintage", "type", "radio", "name", "test", "value", "grayscale"], ["width", "60px", "height", "60px", "src", "../assets/img/Vintage.png", 1, "hoverable"], ["id", "sepia", "type", "radio", "name", "test", "value", "sepia"], ["width", "60px", "height", "60px", "src", "../assets/img/oldstyle.png", 1, "hoverable"], ["id", "invert", "type", "radio", "name", "test", "value", "invert"], ["width", "60px", "height", "60px", "src", "../assets/img/Negative.png", 1, "hoverable"], [1, "col", "s3", "offset-s0;", 2, "margin-top", "10px", "cursor", "pointer"], ["id", "shadow", "type", "checkbox", 1, "filled-in", 3, "disabled", "change"], [1, "fa", "fa-cloud", 2, "font-size", "40px", "color", "#009688", "text-shadow", "12px 8px 4px #4d4a4a"], [1, "col", "s12", "offset-s0", 2, "padding-top", "5px"], [1, "col", "s2"], [1, "col", "s8"], ["type", "range", "id", "hue-value", "value", "0", "min", "0", "max", "1", "step", "0.0001", 3, "ngModel", "ngModelChange"], [1, "col", "s12", "offset-s0", 2, "padding-top", "0px"], ["type", "range", "id", "saturation", "value", "0", "min", "-1", "max", "1", "step", "0.0001", 3, "ngModel", "ngModelChange"], ["type", "range", "id", "blur", "value", "0", "min", "0", "max", "1", "step", "0.0001", 3, "ngModel", "ngModelChange"], ["type", "range", "id", "contrast1", "value", "0", "min", "-1", "max", "1", "step", "0.0001", 3, "ngModel", "ngModelChange"], ["type", "range", "id", "noise", "value", "100", "min", "0", "max", "1000", "step", "0.0001", 3, "ngModel", "ngModelChange"], ["id", "nav-mobile", 1, "tabBox", "center-align", "hide-on-med-and-down", "col", "s12", 2, "background-color", "rgb(228, 232, 243)", "padding-top", "10px"], [1, "tabs", "tabs-fixed-width", "tab-demo", "z-depth-1", 2, "height", "40px"], ["href", "#tab1", 1, "active"], ["href", "#tab2"], ["href", "#tab3"], ["id", "tab1"], [1, ""], [1, "file-field", "input-field", "col", "s12"], ["style", "border-style: dashed; opacity: 0.4; margin-top: 0px;", 3, "click", 4, "ngIf"], ["id", "testImage", 1, "col", "s4", "offset-s3", 2, "margin-top", "-20px"], ["class", "images-item-upload", "style", "width: 130px; ", 3, "src", "click", 4, "ngIf"], ["type", "button", "class", "col s3 offset-s1 btn #ef5350 red lighten-1", 3, "click", 4, "ngIf"], ["class", "col s12 offset-s0", 4, "ngIf"], ["id", "tab2", 1, "row"], ["role", "group", "aria-label", "...", 2, "margin-left", "60px", "width", "280px", "margin-top", "350px"], ["id", "square", "width", "40px", "height", "55px", "src", "../assets/img/square.png", "alt", "", 1, "col", "s3", 3, "click"], ["id", "triangle", "width", "45px", "height", "55px", "src", "../assets/img/threeangle.png", "ciricle.png", "", "alt", "", 1, "col", "s3", 3, "click"], ["id", "circle", "width", "40px", "height", "55px", "src", "../assets/img/ciricle.png", "alt", "", 1, "col", "s3", 3, "click"], ["id", "tab3", 1, "col", "s12"], ["id", "test3", 1, "col", "s12"], [2, "margin-top", "20px", "float", "left"], [1, "input-field", "col", "s3", 2, "margin-top", "5px"], ["data-toggle", "tooltip", "data-placement", "bottom", "title", "Done", "type", "button", 1, "btn", "btn-outline-primary", 3, "disabled", "click"], ["aria-hidden", "true", 1, "large", "material-icons"], [1, "input-field", "col", "s8", 2, "margin-top", "0px"], ["id", "icon_prefix2", "type", "text", 1, "materialize-textarea", 3, "ngModel", "disabled", "ngModelChange", "click"], ["for", "icon_prefix2"], [1, "col", "s3", 2, "margin-top", "20px", "cursor", "pointer"], ["id", "shadowText", "type", "checkbox", 1, "filled-in", 3, "change"], [1, "col", "s5", "offset-s0"], [1, "col", "s2", 3, "ngStyle"], [1, "col", "s8", "offset-s1"], ["type", "text", 1, "form-control", 3, "ngStyle", "cpPosition", "colorPicker", "value", "colorPickerChange"], [1, "col", "s7", "offset-s0"], [1, "col", "s2", "offset-s0", 3, "ngStyle"], [1, "browser-default", 3, "ngStyle", "ngModel", "ngModelChange", "change"], ["value", "", "disabled", "", "selected", ""], ["value", "helvetica", "selected", ""], [3, "ngStyle", "value", 4, "ngFor", "ngForOf"], [1, "col", "s12", "offset-s0", 2, "padding-top", "20px"], [1, "col", "s12", "offset-s0", "z-depth-2"], [1, "btn-flat", 3, "ngClass", "click"], [1, "material-icons"], [1, "btn-flat", 3, "click"], [1, "btn-flat", "waves-teal", 3, "ngClass", "click"], [1, "col", "s12", "offset-s0", 2, "padding-top", "25px"], ["type", "range", 3, "ngModel", "ngModelChange"], ["type", "range", "step", "10", "min", "-200", "max", "300", 3, "ngModel", "ngModelChange"], ["action", "#"], [2, "float", "left"], ["name", "group1", "type", "radio", "checked", "", 3, "change", "click"], ["name", "group1", "type", "radio", 3, "disabled", "change", "click"], ["class", "col s12 offset-s0", "style", "padding-top: 20px;", 4, "ngIf"], ["type", "range", "step", "1", "min", "1", "max", "170", 3, "ngModel", "ngModelChange"], [1, "filters", 2, "display", "none"], ["type", "checkbox", "data-filter", "0"], ["id", "img", "src", "data:image/jpeg;base64,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", 2, "display", "none"], [1, "col", "s12", "m12", "l12", "xl12", "offset-s0", "offset-m0", "offset-l0", "offset-xl0", 2, "top", "-0.3%", "position", "absolute", "z-index", "1"], ["role", "group", "aria-label", "...", 1, "btn-group"], ["data-toggle", "tooltip", "data-placement", "bottom", "title", "Send to back", "type", "button", 1, "btn", "btn-small", "indigo", "lighten-3", 2, "height", "30px", 3, "disabled", "click"], ["data-toggle", "tooltip", "data-placement", "bottom", "title", "Send to front", "type", "button", 1, "btn", "btn-small", "indigo", "lighten-3", 2, "height", "30px", 3, "disabled", "click"], ["data-toggle", "tooltip", "data-placement", "bottom", "title", "Clone", "type", "button", 1, "btn", "btn-small", "indigo", "lighten-3", 2, "height", "30px", 3, "disabled", "click"], [1, "btn-small", "indigo", "lighten-3", 2, "cursor", "pointer", "width", "80px", "height", "28px"], ["for", "", 2, "top", "50%", "float", "left", "margin", "0", "margin-left", "-8px", "font-size", "large", "font-family", "Arial, Helvetica, sans-serif", "color", "#ffffff"], [2, "margin-left", "10px"], ["src", "../assets/img/oie_aHdWpUcmnmvA.png", 2, "margin-top", "3%", "display", "inline-block", "margin", "0px", "cursor", "pointer", "border-radius", "5%", 3, "ngClass"], [1, "col", "s7", "m3", "l4", "xl10", "offset-s0", "offset-m9", "offset-l6", "offset-xl6", 2, "padding-top", "530px", "position", "absolute", "width", "180px"], ["data-toggle", "tooltip", "data-placement", "bottom", "title", "Clean Canvas", "type", "button", 1, "btn", "btn-danger", 3, "disabled", "click"], ["aria-hidden", "true"], ["data-toggle", "tooltip", "data-placement", "bottom", "title", "Send", "type", "button", 1, "btn", "btn-danger", 3, "disabled", "click"], [1, "btn-small", "#00e676", 2, "margin-left", "5px", 3, "click"], [1, "material-icons", "right"], [2, "overflow-y", "scroll", "max-width", "100%", "overflow-x", "hidden", "width", "250px", "max-height", "300px", "z-index", "1", "margin-top", "5px", "position", "relative", "padding", "10px 10px 0px 0px", "background-color", "#3d365a73"], ["class", "colorBox;  offset-m4 offset-l3 offset-xl5", "style", "margin: 0;", 3, "click", 4, "ngFor", "ngForOf"], [1, "colorBox;", "offset-m4", "offset-l3", "offset-xl5", 2, "margin", "0", 3, "click"], [1, "imageDiv", 2, "margin", "-5px"], ["for", "", 2, "top", "50%", "transform", "translateY(-50%)", "margin", "0", "left", "13px", "position", "relative", "font-family", "Arial, Helvetica, sans-serif", "color", "#ffffff"], ["alt", "", 1, "imageBox", 2, "top", "-45%", "margin", "0", "position", "relative", "margin-left", "80%", 3, "src"], [2, "border", "1px solid rgba(255, 255, 255, 0.507)"], [2, "margin-left", "25%", "position", "absolute", "margin-top", "40%", "z-index", "3"], [2, "z-index", "10"], [2, "margin-top", "-40px", "margin-left", "160px", "position", "absolute", "cursor", "pointer", "z-index", "10"], ["id", "shadowSVG", "type", "checkbox", 1, "filled-in", 3, "change"], ["carouselSlide", "", 3, "id"], [2, "width", "60%", "height", "auto", "margin-left", "24%"], [3, "src"], ["data-toggle", "tooltip", "style", "margin-top: 0px;", "class", "but btn-small #00e676 green accent-4 black-text", 3, "click", 4, "ngIf"], ["data-toggle", "tooltip", 1, "but", "btn-small", "#00e676", "green", "accent-4", "black-text", 2, "margin-top", "0px", 3, "click"], [1, "check", "material-icons", 2, "margin-left", "-9px", "margin-top", "-0px"], ["id", "show", 1, "card-panel", "hoverable", 2, "margin-top", "3%", "margin-right", "0%", 3, "click", "colorPickerChange"], [1, "productType", 3, "src"], [2, "margin-top", "-40%", "margin-left", "-30%"], [1, "tab", 3, "click"], ["href", "#test[i]"], ["class", "card-panel hoverable", "role", "option", 3, "background", "click", "colorPickerChange", 4, "ngFor", "ngForOf"], ["role", "option", 1, "card-panel", "hoverable", 3, "click", "colorPickerChange"], ["class", "card-panel hoverable", "role", "option", 3, "background", "click", 4, "ngFor", "ngForOf"], ["role", "option", 1, "card-panel", "hoverable", 3, "click"], [1, "col", "s5", "m3", "l2", "offset-s0", "offset-m0", "offset-l0"], ["type", "radio", "name", "sizeKey", "value", "big", 3, "disabled", "checked", "click"], [2, "font-size", "120%", "text-align", "center", "width", "120%"], [1, "col", "s12"], [1, "card-body"], ["class", "custom-item", 4, "ngIf"], [1, "custom-item"], [1, "custom-item-title"], [1, "custom-item-body"], ["type", "text", "placeholder", "http://example.jpg", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], ["type", "text", 1, "form-control", 3, "cpPosition", "colorPicker", "value", "colorPickerChange"], ["inputColor", ""], [2, "border-style", "dashed", "opacity", "0.4", "margin-top", "0px", 3, "click"], [1, "large", "material-icons", 3, "ngStyle"], ["type", "file", "multiple", "", 1, "input", 3, "change"], [1, "images-item-upload", 2, "width", "130px", 3, "src", "click"], ["type", "button", 1, "col", "s3", "offset-s1", "btn", "#ef5350", "red", "lighten-1", 3, "click"], [1, "col", "s12", "offset-s0"], ["class", "col s10 offset-s0", 4, "ngIf"], [1, "col", "s10", "offset-s0"], [1, "col", "s2", 2, "padding-top", "0px"], ["type", "text", 1, "form-control", 2, "height", "20px", "top", "5px", 3, "cpPosition", "colorPicker", "value", "colorPickerChange"], [3, "ngStyle"], [3, "ngStyle", "value"], ["type", "range", "step", "3", "min", "80", "max", "300", 3, "ngModel", "ngModelChange"]], template: function SiteLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        const _r99 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SiteLayoutComponent_div_5_Template, 16, 8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, SiteLayoutComponent_div_6_Template, 7, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, SiteLayoutComponent_button_10_Template, 4, 0, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, SiteLayoutComponent_div_11_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, SiteLayoutComponent_div_12_Template, 6, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "app-editor-pic", null, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "app-size-format");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function SiteLayoutComponent_Template_div_resize_17_listener($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "owl-carousel-o", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("translated", function SiteLayoutComponent_Template_owl_carousel_o_translated_18_listener($event) { return ctx.getPassedData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, SiteLayoutComponent_ng_container_20_Template, 2, 1, "ng-container", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, SiteLayoutComponent_ng_template_21_Template, 0, 0, "ng-template", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "ul", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "color_lens");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "photo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "text_format");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, SiteLayoutComponent_div_40_Template, 4, 2, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "ul", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, SiteLayoutComponent_li_49_Template, 3, 1, "li", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, SiteLayoutComponent_div_52_Template, 2, 1, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](53, SiteLayoutComponent_div_53_Template, 2, 1, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](55, SiteLayoutComponent_label_55_Template, 5, 3, "label", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](56, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](57, SiteLayoutComponent_div_57_Template, 8, 2, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "label", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "input", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "label", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "img", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "label", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "input", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "img", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "label", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "input", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "img", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "label", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](73, "input", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "img", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "label", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "input", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function SiteLayoutComponent_Template_input_change_77_listener() { return ctx.shadow = !ctx.shadow; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](78, "i", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "Distance");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "input", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SiteLayoutComponent_Template_input_ngModelChange_83_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r99); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15); return _r6.props.distance = $event; })("ngModelChange", function SiteLayoutComponent_Template_input_ngModelChange_83_listener() { return ctx.setDistance(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "Saturation");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "input", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SiteLayoutComponent_Template_input_ngModelChange_90_listener($event) { return ctx.saturation = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "Blur");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "input", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SiteLayoutComponent_Template_input_ngModelChange_97_listener($event) { return ctx.blur = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "Contrast");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "input", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SiteLayoutComponent_Template_input_ngModelChange_104_listener($event) { return ctx.contrast = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "Noise");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "input", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SiteLayoutComponent_Template_input_ngModelChange_111_listener($event) { return ctx.noise = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "ul", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "a", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119, "monochrome_photos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "a", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, "extension");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "a", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](127, "text_format");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](131, SiteLayoutComponent_div_131_Template, 4, 2, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](133, SiteLayoutComponent_img_133_Template, 1, 1, "img", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](134, SiteLayoutComponent_button_134_Template, 3, 0, "button", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](135, SiteLayoutComponent_div_135_Template, 8, 2, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "img", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SiteLayoutComponent_Template_img_click_138_listener() { ctx.addFigure("square"); return ctx.toggle = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "img", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SiteLayoutComponent_Template_img_click_139_listener() { ctx.addFigure("triangle"); return ctx.toggle = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "img", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SiteLayoutComponent_Template_img_click_140_listener() { ctx.addFigure("circle"); return ctx.toggle = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](141, SiteLayoutComponent_div_141_Template, 8, 3, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "button", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SiteLayoutComponent_Template_button_click_148_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r99); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15); _r6.discardActiveObj(); ctx.addText(); ctx.expression = true; ctx.toggle = true; return ctx.activatebutton = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "i", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](150, "done_all");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "input", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SiteLayoutComponent_Template_input_ngModelChange_152_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r99); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15); return _r6.textString = $event; })("click", function SiteLayoutComponent_Template_input_click_152_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r99); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15); return _r6.discardActiveObj(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "label", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](154, "Input text");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "label", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "input", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function SiteLayoutComponent_Template_input_change_156_listener() { return ctx.shadowText = !ctx.shadowText; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](157, "i", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](159, SiteLayoutComponent_div_159_Template, 2, 0, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](160, SiteLayoutComponent_div_160_Template, 3, 2, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](163, "Fill");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "input", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("colorPickerChange", function SiteLayoutComponent_Template_input_colorPickerChange_165_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r99); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15); return _r6.props.fill = $event; })("colorPickerChange", function SiteLayoutComponent_Template_input_colorPickerChange_165_listener() { return ctx.setFill(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "div", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](168, "Font ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "select", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SiteLayoutComponent_Template_select_ngModelChange_170_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r99); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15); return _r6.props.fontFamily = $event; })("change", function SiteLayoutComponent_Template_select_change_170_listener() { return ctx.setFontFamily(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "option", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](172, "Choose your option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "option", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](174, "Helvetica");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](175, SiteLayoutComponent_option_175_Template, 2, 5, "option", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "div", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "div", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "a", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SiteLayoutComponent_Template_a_click_178_listener() { ctx.setBold(); return ctx.isClickedBold = !ctx.isClickedBold; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "i", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](180, "format_bold");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "a", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SiteLayoutComponent_Template_a_click_181_listener() { ctx.setFontStyle(); return ctx.isClickedItalic = !ctx.isClickedItalic; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "i", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](183, "format_italic");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "a", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SiteLayoutComponent_Template_a_click_184_listener() { ctx.setTextDecoration("overline"); return !(ctx.isClickedOverline = !ctx.isClickedOverline); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "i", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](186, "vertical_align_top");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "a", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SiteLayoutComponent_Template_a_click_187_listener() { ctx.setTextDecoration("underline"); return !(ctx.isClickedUnderline = !ctx.isClickedUnderline); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "i", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](189, "vertical_align_bottom");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "a", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SiteLayoutComponent_Template_a_click_190_listener() { ctx.setTextDecoration("line-through"); return !(ctx.isClickedCenterline = !ctx.isClickedCenterline); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "i", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](192, "vertical_align_center");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](193, "button", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SiteLayoutComponent_Template_button_click_193_listener() { return ctx.setTextAlign("left"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "i", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](195, "format_align_left");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "button", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SiteLayoutComponent_Template_button_click_196_listener() { return ctx.setTextAlign("center"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](197, "i", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](198, "format_align_right");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](199, "div", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](200, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](201, "Opasity");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](202, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](203, "input", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SiteLayoutComponent_Template_input_ngModelChange_203_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r99); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15); return _r6.props.opacity = $event; })("ngModelChange", function SiteLayoutComponent_Template_input_ngModelChange_203_listener() { return ctx.setOpacity(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](205);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "div", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](207, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](208, "Char Spacing");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](209, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](210, "input", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SiteLayoutComponent_Template_input_ngModelChange_210_listener() { return ctx.setCharSpacing(); })("ngModelChange", function SiteLayoutComponent_Template_input_ngModelChange_210_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r99); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15); return _r6.props.charSpacing = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](211, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](212);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](213, "div", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](214, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](215, "Arc");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](216, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](217, "form", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](218, "div", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](219, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](220, "input", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function SiteLayoutComponent_Template_input_change_220_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r99); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15); return _r6.props.textCurved = 1; })("click", function SiteLayoutComponent_Template_input_click_220_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r99); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15); return _r6.reRender(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](221, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](222, "Red");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](223, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](224, "input", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function SiteLayoutComponent_Template_input_change_224_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r99); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15); return _r6.props.textCurved = 2; })("click", function SiteLayoutComponent_Template_input_click_224_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r99); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15); return _r6.reRender1(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](225, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](226, "Yellow");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](227, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](228);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](229, SiteLayoutComponent_div_229_Template, 7, 3, "div", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](230, "div", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](231, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](232, "Font Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](233, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](234, "input", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SiteLayoutComponent_Template_input_ngModelChange_234_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r99); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15); return _r6.props.fontSize = $event; })("ngModelChange", function SiteLayoutComponent_Template_input_ngModelChange_234_listener() { return ctx.setFontSize(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](235, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](236);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](237, "div", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](238, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](239, "input", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](240, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](241, "Sepia");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](242, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](243, "input", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](244, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](245, "Blend Colr:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](246, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](247, "input", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](248, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](249, "Blend Clor:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](250, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](251, "input", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](252, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](253, "Blend olor:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](254, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](255, "input", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](256, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](257, "Ble Color:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](258, "img", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r6.canvasCount !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r6.canvasCount !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r6.canvasCount === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r6.canvasCount !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](93, _c10, ctx.canvasCenteredPosition));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](95, _c11, ctx.toggle === true));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.customOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.images);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](97, _c12));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](98, _c12));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](99, _c12));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.products);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx.indexBrand === null ? ctx.productBrands[0].linkeBrand : ctx.productBrands[ctx.indexBrand].linkeBrand, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.indexBrand === null ? ctx.productBrands[0].src : ctx.productBrands[ctx.indexBrand].src, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.productBrands);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.allColors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.allColors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](56, 90, ctx.productBrandSizes, ctx.ret));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !_r6.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", _r6.canvasCount == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", _r6.props.distance);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_r6.props.distance);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.saturation);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.saturation);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.blur);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.blur);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.contrast);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.contrast);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.noise);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.noise);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](100, _c7));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](101, _c7));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](102, _c7));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isOpasity1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r6.url);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isOpasity);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isOpasity && _r6.selected && _r6.selected.type != "group");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r6.selected && _r6.selected.type != "group");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", _r6.props.inputDisabled === "inputDisabled" && _r6.props.textCurved === 2 && _r6.intCountText !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", _r6.textString)("disabled", _r6.props.inputDisabled === "inputDisabled" && _r6.props.textCurved === 2 && _r6.intCountText !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r6.selected && _r6.selected.type == "group");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !_r6.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](103, _c13));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background", _r6.props.fill, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefaultStyleSanitizer"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](104, _c13))("cpPosition", "bottom")("colorPicker", _r6.props.fill)("value", _r6.props.fill);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", !_r6.textEditor ? "" : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](105, _c13));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](106, _c13))("ngModel", _r6.props.fontFamily);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", !_r6.textEditor ? "" : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.fonts);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("myClass", ctx.isClickedBold);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](107, _c14, _r6.props.fontWeight));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", !_r6.textEditor ? "" : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("myClass", ctx.isClickedItalic);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](109, _c14, _r6.props.fontStyle));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", !_r6.textEditor ? "" : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("myClass", ctx.isClickedOverline);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", !_r6.textEditor ? "" : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("myClass", ctx.isClickedUnderline);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", !_r6.textEditor ? "" : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("myClass", ctx.isClickedCenterline);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", !_r6.textEditor ? "" : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](111, _c14, _r6.props.textAlign == "left"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", !_r6.textEditor ? "" : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](113, _c14, _r6.props.textAlign == "center"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", !_r6.textEditor ? "" : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", _r6.props.opacity);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", !_r6.textEditor ? "" : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_r6.props.opacity);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", _r6.props.charSpacing);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", !_r6.textEditor ? "" : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_r6.props.charSpacing);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", _r6.intCountText > 1 && _r6.intCountText !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_r6.props.diametr);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r6.props.textCurved !== 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", _r6.props.fontSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", !_r6.textEditor ? "" : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_r6.props.fontSize);
    } }, styles: ["@charset \"UTF-8\";\n.responsive {\n  width: 10%;\n  height: auto;\n}\n.Content_Preview {\n  top: 10px;\n  left: 480px;\n  width: calc(100% - 488px);\n  height: 520px;\n  position: relative;\n  /* border: 2px solid seagreen;  */\n  display: flex;\n  justify-content: flex-start;\n  /* align-content: flex-start; */\n  align-items: center;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n[type=radio] {\n  position: absolute;\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n/* IMAGE STYLES */\n[type=radio] + img {\n  cursor: pointer;\n}\n/* CHECKED STYLES */\n[type=radio]:checked + img {\n  outline: 2px solid #00ff22;\n}\n[type=radio]:checked + div {\n  outline: 2px solid black;\n  background-color: #000;\n  color: #ffffff;\n}\n[type=radio]:disabled + div {\n  outline: 2px solid #ffdfe5;\n  background-color: #ffdfe5;\n  color: #ff7490;\n}\n.sizeColor {\n  background: #000000;\n  color: white;\n}\n.toolNav {\n  top: 30px;\n  /* margin-left: 250px; */\n  margin-right: 0px;\n  /* width: 400px; */\n  /* height: 20px; */\n  position: absolute;\n  z-index: 1;\n  /* width: 300px; */\n}\n.siseBorder [type=radio]:checked {\n  outline: 2px solid #00ff22;\n}\n.toolsBox {\n  /* margin-left: 0px; */\n  width: 480px;\n  height: 500px;\n  /* justify-content: flex-end; */\n}\n.divv {\n  /* min-width: 280px;  */\n  height: 80px;\n}\n.imgFront {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 0;\n}\n.imgBox {\n  /* left: 10%; */\n  /* margin-left: 20%; */\n  /* border: 1px solid black; */\n  /* flex: 1; */\n}\n.imgBack {\n  width: 100%;\n  height: 100%;\n  /* position: relative; */\n  background-color: #cc2053;\n  /* border: 1px solid seagr\r\n   een;  */\n}\n.colorButton {\n  height: 30px;\n  width: 80px;\n  margin-top: 10px;\n  margin-left: 10px;\n}\ndiv.colorBox div:hover {\n  /* background-color: rgb(233, 26, 233); */\n  background-color: #00968721;\n}\n.imageBox {\n  background-color: white;\n  width: 30px;\n  height: 30px;\n  display: inline-block;\n  margin: 0px;\n  cursor: pointer;\n  border-radius: 5%;\n}\n.imageBox:hover {\n  transform: scale(1.5);\n  /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */\n}\n.productType {\n  height: 230%;\n  margin: -80% 0% 10% -35%;\n}\n.productType:hover {\n  transform: scale(1);\n}\n.imageDiv {\n  height: 40px;\n}\n.imageDiv:hover {\n  background-color: #3d365abb;\n  margin-left: 5px;\n}\n[role=\"option\"] {\n  display: inline-block;\n  height: 25px;\n  width: 25px;\n  margin: 5px;\n  cursor: pointer;\n  padding: 5px;\n  border: 3px solid transparent;\n  border-radius: 50%;\n}\n.main-title {\n  margin-top: 10px;\n}\n.images-item {\n  width: 48%;\n  cursor: pointer;\n  -webkit-transition: .5s ease;\n  -webkit-transition: .5s ease;\n  padding: 3px;\n  max-width: 120px;\n}\n.images-item:hover {\n  opacity: 0.7;\n}\n.images-item-upload {\n  width: 80%;\n  cursor: pointer;\n  padding-bottom: 10px;\n  -webkit-transition: .5s ease;\n  -webkit-transition: .5s ease;\n}\n.images-item-upload:hover {\n  opacity: 0.7;\n}\n.custom-item .custom-item-title {\n  color: #666666;\n  font-weight: 600;\n}\n.custom-item .custom-item-body {\n  padding: 10px 0;\n}\n.max-height {\n  overflow: auto;\n  max-height: 300px;\n}\n.tabBoxNav {\n  padding-top: 20px;\n}\n[hidden] {\n  display: none !important;\n}\n.myClass {\n  background-color: teal;\n}\n[contentEditable=true]:empty:not(:focus):before {\n  content: attr(data-text);\n}\n.selectPic {\n  top: 220px;\n  height: 200px;\n  /* left: -50px; */\n  z-index: 1;\n  position: absolute;\n}\n.canvas {\n  margin-top: 20px;\n  z-index: 0;\n  position: absolute;\n  /* border: 2px dashed #e21010; */\n}\n.displayNone {\n  display: none;\n}\n/* .owl-item.center > div:after {\r\n  margin-top: 300px;\r\n  content: 'center';\r\n} */\n.medium {\n  filter: grayscale(50%);\n  transform: scale(0);\n  transition: .7s ease all;\n  /* margin:0 10px; */\n  opacity: 0.7;\n  /* padding-top: 20px; */\n}\n.big {\n  transform: scale(1);\n  transition: .7s ease all;\n  filter: grayscale(0);\n  opacity: 1;\n  /* padding-top: 90px;  */\n}\n.horizontal {\n  width: 45%;\n  height: auto;\n}\n.vertical {\n  padding-top: 13%;\n  width: 29%;\n  height: 90%;\n}\n@media (max-width: 1000px) {\n  div.owl-item\u2024active {\n    margin: 0;\n    transform: scale(0.7);\n  }\n}\nimg {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\ndiv.owl-item {\n  filter: grayscale(80%);\n  transition: 0.5s ease all;\n  opacity: 0.5;\n}\ndiv.owl-item.active {\n  filter: grayscale(80%);\n  transform: scale(0.6);\n  transition: 0.5s ease all;\n  /* margin:0 10px; */\n  opacity: 0.5;\n}\ndiv.owl-item.active.center {\n  transform: scale(1);\n  filter: grayscale(0%);\n  opacity: 1;\n}\nbody {\n  /* padding:0; */\n  /* margin:80px 0 0 0; */\n  font-family: Merriweather;\n  background: #ffffff;\n}\ndiv.owl-item {\n  -webkit-backface-visibility: hidden;\n  -webkit-transform: translateZ(0) scale(1, 1);\n}\n.inner {\n  position: absolute;\n  bottom: 30px;\n  left: 0;\n  right: 0;\n  text-align: center;\n}\n.inner a {\n  color: #fff;\n  text-decoration: none;\n  border-bottom: 2px solid rgba(255, 255, 255, 0.5);\n  transition: .3s ease border-color;\n}\n.inner a:hover {\n  border-color: white;\n}\n.black .inner a {\n  color: #000;\n  border-color: rgba(0, 0, 0, 0.4);\n}\n.black .inner a:hover {\n  border-color: #000;\n}\n.owl-carousel:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 8%;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n  margin-left: -4%;\n  pointer-events: none;\n  background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/43033/aett_logo_slider.png) no-repeat center 50%;\n  background-size: 100% auto;\n}\n.owl-controls {\n  position: absolute;\n  margin-top: 300px;\n}\n.fa-chevron-left {\n  position: absolute;\n  top: 50%;\n  background-color: #000;\n  color: white;\n  margin: 0;\n  transition: all 0.3s ease-in-out;\n}\n.but {\n  width: 10px;\n  height: 30px;\n  border-radius: 50%;\n}\n.owl-dots {\n  text-align: center;\n  padding-top: 15px;\n}\n.owl-dots button.owl-dot {\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  display: inline-block;\n  background: #ccc;\n  margin: 0 3px;\n}\n.owl-dots button.owl-dot.active {\n  background-color: #000;\n}\n.owl-dots button.owl-dot:focus {\n  outline: none;\n}\nspan {\n  font-size: 100px;\n  position: relative;\n  top: -5px;\n}\n[role=\"option\"] {\n  display: inline-block;\n  height: 25px;\n  width: 25px;\n  margin: 5px;\n  cursor: pointer;\n  padding: 5px;\n  border: 3px solid transparent;\n  border-radius: 50%;\n}\n#canvas {\n  border: 2px dashed #cccccc;\n}\n.z-index {\n  display: none;\n}\n.owl-theme .owl-prev, .owl-theme .owl-next {\n  top: 40px;\n  position: absolute;\n  height: 100px;\n  color: inherit;\n  background: none;\n  border: none;\n  z-index: 100;\n}\n.owl-theme .owl-prev i, .owl-theme .owl-next i {\n  margin-top: 25px;\n  font-size: 2.5rem;\n  color: #000000;\n}\n.owl-theme .owl-prev {\n  left: 0;\n}\n.owl-theme .owl-next {\n  right: 0;\n}\n.owl-nav {\n  display: block !important;\n}\n.class1 {\n  display: none;\n}\n.class2 {\n  display: none;\n}\n#show {\n  width: 70px;\n  height: 70px;\n  background: white;\n  border-radius: 10%;\n  float: left;\n  margin: 1%;\n}\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xheW91dHMvc2l0ZS1sYXlvdXQvc2l0ZS1sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9sYXlvdXRzL3NpdGUtbGF5b3V0L0Q6XFxBbmd1bGFyXFxMQVNUX1ZFUlNJT05fT0ZfVC1TSElSVFxcQ29weSBvZiBvcmlnaW4gcHJvamVjdCBULXNoaXJ0X2xhc3RcXHQtc2hpcnRcXHQtc2hpcnQtYmFja2VuZFxcY2xpZW50L3NyY1xcYXBwXFxzaGFyZWRcXGxheW91dHNcXHNpdGUtbGF5b3V0XFxzaXRlLWxheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNDaEI7RUFDRSxVQUFVO0VBQ1YsWUFBWTtBRENkO0FDRUE7RUFDRyxTQUFTO0VBQ1QsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGlDQUFBO0VBQ0EsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQiwrQkFBQTtFQUNBLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsZUFBZTtBRENsQjtBQUVBO0VDRU0sa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixRQUFRO0VBQ1IsU0FBUztBREFmO0FDR0ksaUJBQUE7QURBSjtFQ0VNLGVBQWU7QURBckI7QUNHSSxtQkFBQTtBREFKO0VDRU0sMEJBQWtDO0FEQXhDO0FBRUE7RUNFTSx3QkFBK0I7RUFDL0Isc0JBQXNCO0VBQ3RCLGNBQWM7QURBcEI7QUFFQTtFQ0VNLDBCQUFxQztFQUNyQyx5QkFBb0M7RUFDcEMsY0FBeUI7QURBL0I7QUNLQztFQUNDLG1CQUFtQjtFQUNuQixZQUFZO0FERmQ7QUNPQTtFQUNFLFNBQVM7RUFDVCx3QkFBQTtFQUNBLGlCQUFpQjtFQUNqQixrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixrQkFBQTtBREpGO0FDT0E7RUFFSSwwQkFBa0M7QURMdEM7QUNTQTtFQUNJLHNCQUFB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REE7RUFDRSxhQUFZO0FEaERkO0FDb0RBO0VBSVEsU0FBUztFQUNQLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osWUFBWTtBRHBEdEI7QUMwQ0E7RUFhYyxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGNBQWM7QURuRDVCO0FDb0NBO0VBb0JVLE9BQU87QURwRGpCO0FDZ0NBO0VBd0JVLFFBQVE7QURwRGxCO0FDeURBO0VBQ0UseUJBQXlCO0FEdEQzQjtBQzBEQTtFQUNFLGFBQWE7QUR2RGY7QUMyREE7RUFDRSxhQUFhO0FEeERmO0FDMkRBO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLFdBQVU7RUFDVixVQUFVO0FEeERkIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2xheW91dHMvc2l0ZS1sYXlvdXQvc2l0ZS1sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4ucmVzcG9uc2l2ZSB7XG4gIHdpZHRoOiAxMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLkNvbnRlbnRfUHJldmlldyB7XG4gIHRvcDogMTBweDtcbiAgbGVmdDogNDgwcHg7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA0ODhweCk7XG4gIGhlaWdodDogNTIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLyogYm9yZGVyOiAycHggc29saWQgc2VhZ3JlZW47ICAqL1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIC8qIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7ICovXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuW3R5cGU9cmFkaW9dIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAwO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xufVxuXG4vKiBJTUFHRSBTVFlMRVMgKi9cblt0eXBlPXJhZGlvXSArIGltZyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogQ0hFQ0tFRCBTVFlMRVMgKi9cblt0eXBlPXJhZGlvXTpjaGVja2VkICsgaW1nIHtcbiAgb3V0bGluZTogMnB4IHNvbGlkICMwMGZmMjI7XG59XG5cblt0eXBlPXJhZGlvXTpjaGVja2VkICsgZGl2IHtcbiAgb3V0bGluZTogMnB4IHNvbGlkIGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuW3R5cGU9cmFkaW9dOmRpc2FibGVkICsgZGl2IHtcbiAgb3V0bGluZTogMnB4IHNvbGlkICNmZmRmZTU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmRmZTU7XG4gIGNvbG9yOiAjZmY3NDkwO1xufVxuXG4uc2l6ZUNvbG9yIHtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udG9vbE5hdiB7XG4gIHRvcDogMzBweDtcbiAgLyogbWFyZ2luLWxlZnQ6IDI1MHB4OyAqL1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgLyogd2lkdGg6IDQwMHB4OyAqL1xuICAvKiBoZWlnaHQ6IDIwcHg7ICovXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgLyogd2lkdGg6IDMwMHB4OyAqL1xufVxuXG4uc2lzZUJvcmRlciBbdHlwZT1yYWRpb106Y2hlY2tlZCB7XG4gIG91dGxpbmU6IDJweCBzb2xpZCAjMDBmZjIyO1xufVxuXG4udG9vbHNCb3gge1xuICAvKiBtYXJnaW4tbGVmdDogMHB4OyAqL1xuICB3aWR0aDogNDgwcHg7XG4gIGhlaWdodDogNTAwcHg7XG4gIC8qIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7ICovXG59XG5cbi5kaXZ2IHtcbiAgLyogbWluLXdpZHRoOiAyODBweDsgICovXG4gIGhlaWdodDogODBweDtcbn1cblxuLmltZ0Zyb250IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAwO1xufVxuXG4uaW1nQm94IHtcbiAgLyogbGVmdDogMTAlOyAqL1xuICAvKiBtYXJnaW4tbGVmdDogMjAlOyAqL1xuICAvKiBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgKi9cbiAgLyogZmxleDogMTsgKi9cbn1cblxuLmltZ0JhY2sge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXG4gIGJhY2tncm91bmQtY29sb3I6ICNjYzIwNTM7XG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHNlYWdyXHJcbiAgIGVlbjsgICovXG59XG5cbi5jb2xvckJ1dHRvbiB7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDgwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG5kaXYuY29sb3JCb3ggZGl2OmhvdmVyIHtcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMywgMjYsIDIzMyk7ICovXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDk2ODcyMTtcbn1cblxuLmltYWdlQm94IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNSU7XG59XG5cbi5pbWFnZUJveDpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcbiAgLyogKDE1MCUgem9vbSAtIE5vdGU6IGlmIHRoZSB6b29tIGlzIHRvbyBsYXJnZSwgaXQgd2lsbCBnbyBvdXRzaWRlIG9mIHRoZSB2aWV3cG9ydCkgKi9cbn1cblxuLnByb2R1Y3RUeXBlIHtcbiAgaGVpZ2h0OiAyMzAlO1xuICBtYXJnaW46IC04MCUgMCUgMTAlIC0zNSU7XG59XG5cbi5wcm9kdWN0VHlwZTpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5cbi5pbWFnZURpdiB7XG4gIGhlaWdodDogNDBweDtcbn1cblxuLmltYWdlRGl2OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNkMzY1YWJiO1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG5bcm9sZT1cIm9wdGlvblwiXSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAyNXB4O1xuICB3aWR0aDogMjVweDtcbiAgbWFyZ2luOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXI6IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4ubWFpbi10aXRsZSB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5pbWFnZXMtaXRlbSB7XG4gIHdpZHRoOiA0OCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNXMgZWFzZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNXMgZWFzZTtcbiAgcGFkZGluZzogM3B4O1xuICBtYXgtd2lkdGg6IDEyMHB4O1xufVxuXG4uaW1hZ2VzLWl0ZW06aG92ZXIge1xuICBvcGFjaXR5OiAwLjc7XG59XG5cbi5pbWFnZXMtaXRlbS11cGxvYWQge1xuICB3aWR0aDogODAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IC41cyBlYXNlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IC41cyBlYXNlO1xufVxuXG4uaW1hZ2VzLWl0ZW0tdXBsb2FkOmhvdmVyIHtcbiAgb3BhY2l0eTogMC43O1xufVxuXG4uY3VzdG9tLWl0ZW0gLmN1c3RvbS1pdGVtLXRpdGxlIHtcbiAgY29sb3I6ICM2NjY2NjY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5jdXN0b20taXRlbSAuY3VzdG9tLWl0ZW0tYm9keSB7XG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cblxuLm1heC1oZWlnaHQge1xuICBvdmVyZmxvdzogYXV0bztcbiAgbWF4LWhlaWdodDogMzAwcHg7XG59XG5cbi50YWJCb3hOYXYge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuW2hpZGRlbl0ge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5teUNsYXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdGVhbDtcbn1cblxuW2NvbnRlbnRFZGl0YWJsZT10cnVlXTplbXB0eTpub3QoOmZvY3VzKTpiZWZvcmUge1xuICBjb250ZW50OiBhdHRyKGRhdGEtdGV4dCk7XG59XG5cbi5zZWxlY3RQaWMge1xuICB0b3A6IDIyMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICAvKiBsZWZ0OiAtNTBweDsgKi9cbiAgei1pbmRleDogMTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uY2FudmFzIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgei1pbmRleDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAvKiBib3JkZXI6IDJweCBkYXNoZWQgI2UyMTAxMDsgKi9cbn1cblxuLmRpc3BsYXlOb25lIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLyogLm93bC1pdGVtLmNlbnRlciA+IGRpdjphZnRlciB7XHJcbiAgbWFyZ2luLXRvcDogMzAwcHg7XHJcbiAgY29udGVudDogJ2NlbnRlcic7XHJcbn0gKi9cbi5tZWRpdW0ge1xuICBmaWx0ZXI6IGdyYXlzY2FsZSg1MCUpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB0cmFuc2l0aW9uOiAuN3MgZWFzZSBhbGw7XG4gIC8qIG1hcmdpbjowIDEwcHg7ICovXG4gIG9wYWNpdHk6IDAuNztcbiAgLyogcGFkZGluZy10b3A6IDIwcHg7ICovXG59XG5cbi5iaWcge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB0cmFuc2l0aW9uOiAuN3MgZWFzZSBhbGw7XG4gIGZpbHRlcjogZ3JheXNjYWxlKDApO1xuICBvcGFjaXR5OiAxO1xuICAvKiBwYWRkaW5nLXRvcDogOTBweDsgICovXG59XG5cbi5ob3Jpem9udGFsIHtcbiAgd2lkdGg6IDQ1JTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4udmVydGljYWwge1xuICBwYWRkaW5nLXRvcDogMTMlO1xuICB3aWR0aDogMjklO1xuICBoZWlnaHQ6IDkwJTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICBkaXYub3dsLWl0ZW3igKRhY3RpdmUge1xuICAgIG1hcmdpbjogMDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNyk7XG4gIH1cbn1cblxuaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbmRpdi5vd2wtaXRlbSB7XG4gIGZpbHRlcjogZ3JheXNjYWxlKDgwJSk7XG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZSBhbGw7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuZGl2Lm93bC1pdGVtLmFjdGl2ZSB7XG4gIGZpbHRlcjogZ3JheXNjYWxlKDgwJSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC42KTtcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlIGFsbDtcbiAgLyogbWFyZ2luOjAgMTBweDsgKi9cbiAgb3BhY2l0eTogMC41O1xufVxuXG5kaXYub3dsLWl0ZW0uYWN0aXZlLmNlbnRlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIGZpbHRlcjogZ3JheXNjYWxlKDAlKTtcbiAgb3BhY2l0eTogMTtcbn1cblxuYm9keSB7XG4gIC8qIHBhZGRpbmc6MDsgKi9cbiAgLyogbWFyZ2luOjgwcHggMCAwIDA7ICovXG4gIGZvbnQtZmFtaWx5OiBNZXJyaXdlYXRoZXI7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG59XG5cbmRpdi5vd2wtaXRlbSB7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKSBzY2FsZSgxLCAxKTtcbn1cblxuLmlubmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDMwcHg7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbm5lciBhIHtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgdHJhbnNpdGlvbjogLjNzIGVhc2UgYm9yZGVyLWNvbG9yO1xufVxuXG4uaW5uZXIgYTpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XG59XG5cbi5ibGFjayAuaW5uZXIgYSB7XG4gIGNvbG9yOiAjMDAwO1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxuLmJsYWNrIC5pbm5lciBhOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjMDAwO1xufVxuXG4ub3dsLWNhcm91c2VsOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDglO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTQlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzQzMDMzL2FldHRfbG9nb19zbGlkZXIucG5nKSBuby1yZXBlYXQgY2VudGVyIDUwJTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIGF1dG87XG59XG5cbi5vd2wtY29udHJvbHMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi10b3A6IDMwMHB4O1xufVxuXG4uZmEtY2hldnJvbi1sZWZ0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuXG4uYnV0IHtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4ub3dsLWRvdHMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xufVxuXG4ub3dsLWRvdHMgYnV0dG9uLm93bC1kb3Qge1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZDogI2NjYztcbiAgbWFyZ2luOiAwIDNweDtcbn1cblxuLm93bC1kb3RzIGJ1dHRvbi5vd2wtZG90LmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG59XG5cbi5vd2wtZG90cyBidXR0b24ub3dsLWRvdDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbnNwYW4ge1xuICBmb250LXNpemU6IDEwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTVweDtcbn1cblxuW3JvbGU9XCJvcHRpb25cIl0ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMjVweDtcbiAgd2lkdGg6IDI1cHg7XG4gIG1hcmdpbjogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuI2NhbnZhcyB7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCAjY2NjY2NjO1xufVxuXG4uei1pbmRleCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5vd2wtdGhlbWUgLm93bC1wcmV2LCAub3dsLXRoZW1lIC5vd2wtbmV4dCB7XG4gIHRvcDogNDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBjb2xvcjogaW5oZXJpdDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICB6LWluZGV4OiAxMDA7XG59XG5cbi5vd2wtdGhlbWUgLm93bC1wcmV2IGksIC5vd2wtdGhlbWUgLm93bC1uZXh0IGkge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5vd2wtdGhlbWUgLm93bC1wcmV2IHtcbiAgbGVmdDogMDtcbn1cblxuLm93bC10aGVtZSAub3dsLW5leHQge1xuICByaWdodDogMDtcbn1cblxuLm93bC1uYXYge1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuXG4uY2xhc3MxIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmNsYXNzMiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNzaG93IHtcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogNzBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogMSU7XG59XG4iLCJcclxuLnJlc3BvbnNpdmUge1xyXG4gIHdpZHRoOiAxMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uQ29udGVudF9QcmV2aWV3ICB7XHJcbiAgIHRvcDogMTBweDsgICAgXHJcbiAgIGxlZnQ6IDQ4MHB4O1xyXG4gICB3aWR0aDogY2FsYygxMDAlIC0gNDg4cHgpOyAgIFxyXG4gICBoZWlnaHQ6IDUyMHB4O1xyXG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIHNlYWdyZWVuOyAgKi9cclxuICAgZGlzcGxheTogZmxleDtcclxuICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAvKiBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0OyAqL1xyXG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIFt0eXBlPXJhZGlvXSB7IFxyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIHdpZHRoOiAwO1xyXG4gICAgICBoZWlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qIElNQUdFIFNUWUxFUyAqL1xyXG4gICAgW3R5cGU9cmFkaW9dICsgaW1nIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKiBDSEVDS0VEIFNUWUxFUyAqL1xyXG4gICAgW3R5cGU9cmFkaW9dOmNoZWNrZWQgKyBpbWcge1xyXG4gICAgICBvdXRsaW5lOiAycHggc29saWQgcmdiKDAsIDI1NSwgMzQpO1xyXG4gICAgfVxyXG5cclxuICAgIFt0eXBlPXJhZGlvXTpjaGVja2VkICsgZGl2IHtcclxuICAgICAgb3V0bGluZTogMnB4IHNvbGlkIHJnYigwLCAwLCAwKTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICB9XHJcblxyXG4gICAgW3R5cGU9cmFkaW9dOmRpc2FibGVkICsgZGl2IHtcclxuICAgICAgb3V0bGluZTogMnB4IHNvbGlkIHJnYigyNTUsIDIyMywgMjI5KTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjIzLCAyMjkpO1xyXG4gICAgICBjb2xvcjogcmdiKDI1NSwgMTE2LCAxNDQpO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cclxuIC5zaXplQ29sb3J7XHJcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiB9ICBcclxuICAgIFxyXG5cclxuXHJcbi50b29sTmF2e1xyXG4gIHRvcDogMzBweDtcclxuICAvKiBtYXJnaW4tbGVmdDogMjUwcHg7ICovXHJcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgLyogd2lkdGg6IDQwMHB4OyAqL1xyXG4gIC8qIGhlaWdodDogMjBweDsgKi9cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTtcclxuICAvKiB3aWR0aDogMzAwcHg7ICovXHJcbn1cclxuXHJcbi5zaXNlQm9yZGVye1xyXG4gIFt0eXBlPXJhZGlvXTpjaGVja2VkIHtcclxuICAgIG91dGxpbmU6IDJweCBzb2xpZCByZ2IoMCwgMjU1LCAzNCk7XHJcbiAgfSBcclxufVxyXG5cclxuLnRvb2xzQm94IHtcclxuICAgIC8qIG1hcmdpbi1sZWZ0OiAwcHg7ICovXHJcbiAgICB3aWR0aDogNDgwcHggO1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuICAgIC8qIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7ICovXHJcbn1cclxuXHJcblxyXG4uZGl2diB7XHJcbiAgICAvKiBtaW4td2lkdGg6IDI4MHB4OyAgKi9cclxuICAgIGhlaWdodDogODBweDtcclxufVxyXG5cclxuXHJcbi5pbWdGcm9udCB7XHJcbiAgIHdpZHRoOiAxMDAlO1xyXG4gICBoZWlnaHQ6IDEwMCU7IFxyXG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgIHotaW5kZXg6MFxyXG5cclxufVxyXG5cclxuLmltZ0JveCB7XHJcbiAgLy8gdG9wOiA3MHB4O1xyXG4gIC8qIGxlZnQ6IDEwJTsgKi9cclxuICAvKiBtYXJnaW4tbGVmdDogMjAlOyAqL1xyXG4gIC8vIHdpZHRoOiAzNjBweDsgXHJcbiAgLy8gaGVpZ2h0OiA0NjBweDsgXHJcbiAgLy8gcG9zaXRpb246IHJlbGF0aXZlOyBcclxuICAvKiBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgKi9cclxuICAvKiBmbGV4OiAxOyAqL1xyXG59XHJcblxyXG4uaW1nQmFjayB7XHJcbiAgIHdpZHRoOiAxMDAlO1xyXG4gICBoZWlnaHQ6IDEwMCU7XHJcbiAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cclxuICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNCwgMzIsIDgzKTtcclxuICAgLyogYm9yZGVyOiAxcHggc29saWQgc2VhZ3JcclxuICAgZWVuOyAgKi9cclxufVxyXG5cclxuXHJcbi5jb2xvckJ1dHRvbiB7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIHdpZHRoOiA4MHB4O1xyXG4gIC8vIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG5cclxuZGl2LmNvbG9yQm94IGRpdjpob3ZlciB7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMywgMjYsIDIzMyk7ICovXHJcbiAgLy8gYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgLy8gd2lkdGg6IDE1MHB4O1xyXG4gIC8vIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gIC8vIGhlaWdodDogNDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5Njg3MjE7XHJcbn1cclxuXHJcblxyXG5cclxuLmltYWdlQm94IHtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpOyBcclxuICAvLyBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICBcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgLy8gcGFkZGluZzogNXB4O1xyXG4gIC8vIGJvcmRlcjogMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUlO1xyXG4gIC8vIG1hcmdpbjogLTUwcHg7XHJcbiAgLy8gdG9wOiAtMzVweDtcclxufVxyXG5cclxuLmltYWdlQm94OmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7IC8qICgxNTAlIHpvb20gLSBOb3RlOiBpZiB0aGUgem9vbSBpcyB0b28gbGFyZ2UsIGl0IHdpbGwgZ28gb3V0c2lkZSBvZiB0aGUgdmlld3BvcnQpICovXHJcbn1cclxuXHJcblxyXG4ucHJvZHVjdFR5cGUge1xyXG4gIGhlaWdodDogMjMwJTsgXHJcbiAgbWFyZ2luOiAtODAlIDAlIDEwJSAtMzUlO1xyXG59XHJcblxyXG4ucHJvZHVjdFR5cGU6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbn1cclxuXHJcbi5pbWFnZURpdiAge1xyXG4gIC8vIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbi5pbWFnZURpdjpob3ZlciAge1xyXG4gIC8vIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2QzNjVhYmI7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuXHJcbi8vICAuY29sb3JCb3gge1xyXG4vLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICB3aWR0aDogMjUwcHg7XHJcbi8vICAgb3ZlcmZsb3cteDogYXV0bztcclxuLy8gICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4vLyAgIHBhZGRpbmc6IDBweDtcclxuLy8gICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuLy8gICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbi8vICAgYm94LXNoYWRvdzogNXB4IDEwcHggMThweCAjODg4ODg4O1xyXG4vLyB9IFxyXG5cclxuW3JvbGU9XCJvcHRpb25cIl0ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBoZWlnaHQ6IDI1cHg7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG5cclxuLm1haW4tdGl0bGV7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4uaW1hZ2VzLWl0ZW0ge1xyXG4gIHdpZHRoOiA0OCU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjVzIGVhc2U7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNXMgZWFzZTtcclxuICBwYWRkaW5nOiAzcHg7XHJcbiAgbWF4LXdpZHRoOiAxMjBweDtcclxufVxyXG5cclxuLmltYWdlcy1pdGVtOmhvdmVyIHtcclxuICBvcGFjaXR5OiAwLjc7XHJcbn1cclxuXHJcbi5pbWFnZXMtaXRlbS11cGxvYWQge1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjVzIGVhc2U7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNXMgZWFzZTtcclxufVxyXG5cclxuLmltYWdlcy1pdGVtLXVwbG9hZDpob3ZlciB7XHJcbiAgb3BhY2l0eTogMC43O1xyXG59XHJcblxyXG5cclxuLmN1c3RvbS1pdGVtIC5jdXN0b20taXRlbS10aXRsZSB7XHJcbiAgY29sb3I6ICM2NjY2NjY7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmN1c3RvbS1pdGVtIC5jdXN0b20taXRlbS1ib2R5IHtcclxuICBwYWRkaW5nOiAxMHB4IDA7XHJcbn1cclxuXHJcbi5tYXgtaGVpZ2h0e1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xyXG59XHJcblxyXG5cclxuXHJcbi50YWJCb3hOYXZ7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuXHJcbltoaWRkZW5dIHtcclxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5teUNsYXNze1xyXG4gIGJhY2tncm91bmQtY29sb3IgOiB0ZWFsO1xyXG59XHJcblxyXG5bY29udGVudEVkaXRhYmxlPXRydWVdOmVtcHR5Om5vdCg6Zm9jdXMpOmJlZm9yZXtcclxuICBjb250ZW50OmF0dHIoZGF0YS10ZXh0KVxyXG59XHJcblxyXG4uc2VsZWN0UGlje1xyXG4gIHRvcDogMjIwcHg7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICAvKiBsZWZ0OiAtNTBweDsgKi9cclxuICB6LWluZGV4OiAxO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbn1cclxuXHJcbi5jYW52YXN7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICB6LWluZGV4OiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAvKiBib3JkZXI6IDJweCBkYXNoZWQgI2UyMTAxMDsgKi9cclxufVxyXG5cclxuXHJcbi5kaXNwbGF5Tm9uZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuXHJcbi8qIC5vd2wtaXRlbS5jZW50ZXIgPiBkaXY6YWZ0ZXIge1xyXG4gIG1hcmdpbi10b3A6IDMwMHB4O1xyXG4gIGNvbnRlbnQ6ICdjZW50ZXInO1xyXG59ICovXHJcblxyXG4ubWVkaXVtICB7XHJcblxyXG4gIGZpbHRlcjogZ3JheXNjYWxlKDUwJSk7IFxyXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgdHJhbnNpdGlvbjouN3MgZWFzZSBhbGw7XHJcbiAgLyogbWFyZ2luOjAgMTBweDsgKi9cclxuICBvcGFjaXR5OjAuNztcclxuICAvKiBwYWRkaW5nLXRvcDogMjBweDsgKi9cclxuXHJcbn1cclxuXHJcbi5iaWcgICB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICB0cmFuc2l0aW9uOi43cyBlYXNlIGFsbDtcclxuICBmaWx0ZXI6IGdyYXlzY2FsZSgwKTtcclxuICBvcGFjaXR5OiAxO1xyXG4gIC8qIHBhZGRpbmctdG9wOiA5MHB4OyAgKi8gIFxyXG59IFxyXG5cclxuLmhvcml6b250YWx7XHJcbiAgd2lkdGg6IDQ1JTsgXHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4udmVydGljYWx7XHJcbiAgcGFkZGluZy10b3A6IDEzJTtcclxuICB3aWR0aDogMjklOyBcclxuICBoZWlnaHQ6IDkwJTtcclxufVxyXG5cclxuXHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOjEwMDBweCl7XHJcbiAgZGl2Lm93bC1pdGVt4oCkYWN0aXZle21hcmdpbjowOyB0cmFuc2Zvcm06c2NhbGUoLjcpfVxyXG59XHJcblxyXG5pbWcge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuZGl2Lm93bC1pdGVtIHtcclxuICBmaWx0ZXI6IGdyYXlzY2FsZSg4MCUpOyBcclxuICAvLyBzY2FsZTogMTtcclxuICAvLyB0cmFuc2Zvcm06IHNjYWxlKC42KTtcclxuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UgYWxsO1xyXG4gIC8vICBtYXJnaW46MCAxMHB4OyBcclxuICBvcGFjaXR5OjAuNTtcclxufVxyXG5cclxuZGl2Lm93bC1pdGVtLmFjdGl2ZSB7XHJcbiAgZmlsdGVyOiBncmF5c2NhbGUoODAlKTsgXHJcbiAgLy8gc2NhbGU6IDAuMztcclxuICB0cmFuc2Zvcm06IHNjYWxlKC42KTtcclxuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UgYWxsO1xyXG4gIC8qIG1hcmdpbjowIDEwcHg7ICovXHJcbiAgb3BhY2l0eTowLjU7XHJcbn1cclxuXHJcbmRpdi5vd2wtaXRlbS5hY3RpdmUuY2VudGVyICB7XHJcblxyXG4gIHRyYW5zZm9ybTpzY2FsZSgxKTtcclxuICBmaWx0ZXI6IGdyYXlzY2FsZSgwJSk7IFxyXG4gIG9wYWNpdHk6MTtcclxufVxyXG5cclxuXHJcbmJvZHl7XHJcbiAgLyogcGFkZGluZzowOyAqL1xyXG4gIC8qIG1hcmdpbjo4MHB4IDAgMCAwOyAqL1xyXG4gIGZvbnQtZmFtaWx5Ok1lcnJpd2VhdGhlcjtcclxuICBiYWNrZ3JvdW5kOiNmZmZmZmY7XHJcbn1cclxuXHJcbmRpdi5vd2wtaXRlbSB7XHJcbiAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApIHNjYWxlKDEuMCwgMS4wKTtcclxufVxyXG5cclxuLmlubmVye3Bvc2l0aW9uOmFic29sdXRlOyBib3R0b206MzBweDsgbGVmdDowOyByaWdodDowOyB0ZXh0LWFsaWduOmNlbnRlcjt9XHJcbi5pbm5lciBhe2NvbG9yOiNmZmY7IHRleHQtZGVjb3JhdGlvbjpub25lOyBib3JkZXItYm90dG9tOjJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7IHRyYW5zaXRpb246LjNzIGVhc2UgYm9yZGVyLWNvbG9yfVxyXG4uaW5uZXIgYTpob3Zlcntib3JkZXItY29sb3I6cmdiKDI1NSwgMjU1LCAyNTUpO31cclxuLmJsYWNrIC5pbm5lciBhe2NvbG9yOiMwMDA7IGJvcmRlci1jb2xvcjpyZ2JhKDAsIDAsIDAsIDAuNCl9XHJcbi5ibGFjayAuaW5uZXIgYTpob3Zlcntib3JkZXItY29sb3I6IzAwMDt9XHJcblxyXG4ub3dsLWNhcm91c2VsOmFmdGVye2NvbnRlbnQ6XCJcIjsgZGlzcGxheTpibG9jazsgcG9zaXRpb246YWJzb2x1dGU7IHdpZHRoOjglOyB0b3A6MDsgYm90dG9tOjA7IGxlZnQ6NTAlOyBtYXJnaW4tbGVmdDotNCU7IHBvaW50ZXItZXZlbnRzOiBub25lOyBiYWNrZ3JvdW5kOnVybChodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby80MzAzMy9hZXR0X2xvZ29fc2xpZGVyLnBuZykgbm8tcmVwZWF0IGNlbnRlciA1MCU7IGJhY2tncm91bmQtc2l6ZToxMDAlIGF1dG87XHJcblxyXG59XHJcblxyXG4ub3dsLWNvbnRyb2xze3Bvc2l0aW9uOmFic29sdXRlOyBtYXJnaW4tdG9wOjMwMHB4O31cclxuXHJcbi5mYS1jaGV2cm9uLWxlZnR7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICBtYXJnaW46IDA7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5idXQge1xyXG4gIHdpZHRoOiAxMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi8vICAub3dsLW5hdiBidXR0b24ge1xyXG4vLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICB0b3A6IDUwJTtcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4vLyAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbi8vICAgbWFyZ2luOiAwO1xyXG4vLyAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4vLyB9XHJcbi8vIC5vd2wtbmF2IGJ1dHRvbi5vd2wtcHJldiB7XHJcbi8vICAgbGVmdDogMTAwcHg7XHJcbi8vIH1cclxuLy8gLm93bC1uYXYgYnV0dG9uLm93bC1uZXh0IHtcclxuLy8gICByaWdodDogMHB4O1xyXG4vLyB9XHJcblxyXG4ub3dsLWRvdHMge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogMTVweDtcclxufVxyXG4ub3dsLWRvdHMgYnV0dG9uLm93bC1kb3Qge1xyXG4gIHdpZHRoOiAxNXB4O1xyXG4gIGhlaWdodDogMTVweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJhY2tncm91bmQ6ICNjY2M7XHJcbiAgbWFyZ2luOiAwIDNweDtcclxufVxyXG4ub3dsLWRvdHMgYnV0dG9uLm93bC1kb3QuYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG59XHJcbi5vd2wtZG90cyBidXR0b24ub3dsLWRvdDpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG4vLyAub3dsLW5hdiBidXR0b24ge1xyXG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgdG9wOiA1MCU7XHJcbi8vICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiByZ2JhKDE0NiwgMTgwLCAxMTMsIDAuMjg4KSAhaW1wb3J0YW50O1xyXG4vLyB9XHJcbnNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAxMDBweDsgICAgXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC01cHg7XHJcbn1cclxuLy8gLm93bC1uYXYgYnV0dG9uOmZvY3VzIHtcclxuLy8gICAgIG91dGxpbmU6IG5vbmU7XHJcbi8vIH1cclxuXHJcblxyXG5cclxuW3JvbGU9XCJvcHRpb25cIl0ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBoZWlnaHQ6IDI1cHg7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG5cclxuI2NhbnZhcyB7XHJcbiAgYm9yZGVyOiAycHggZGFzaGVkICNjY2NjY2M7XHJcbn1cclxuXHJcblxyXG4uei1pbmRleCB7XHJcbiAgZGlzcGxheTpub25lOyBcclxufVxyXG4gIFxyXG5cclxuLm93bC10aGVtZSB7XHJcbiAgXHJcblxyXG4gICAgICAub3dsLXByZXYsIC5vd2wtbmV4dCB7XHJcbiAgICAgICAgdG9wOiA0MHB4O1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIHotaW5kZXg6IDEwMDtcclxuXHJcbiAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAub3dsLXByZXYge1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLm93bC1uZXh0IHtcclxuICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICB9XHJcbiAgXHJcbn1cclxuXHJcbi5vd2wtbmF2IHsgXHJcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDsgXHJcbn1cclxuXHJcblxyXG4uY2xhc3MxIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5cclxuLmNsYXNzMiB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuI3Nob3cge1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbiAgICBmbG9hdDpsZWZ0O1xyXG4gICAgbWFyZ2luOiAxJTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */"], encapsulation: 2 });
SiteLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:load')
], SiteLayoutComponent);

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SiteLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-site-layout',
                templateUrl: './site-layout.component.html',
                styleUrls: ['./site-layout.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
            }]
    }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
        args: ['window:load']
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _servises_services__WEBPACK_IMPORTED_MODULE_4__["AuthServices"] }, { type: _servises_categories_service__WEBPACK_IMPORTED_MODULE_5__["CategoriesService"] }, { type: _servises_products_service__WEBPACK_IMPORTED_MODULE_6__["ProdutsService"] }, { type: _servises_productscolor_service__WEBPACK_IMPORTED_MODULE_7__["ProdutsColorService"] }, { type: _servises_fonts_service__WEBPACK_IMPORTED_MODULE_8__["FontService"] }, { type: _servises_data_service__WEBPACK_IMPORTED_MODULE_9__["DataService"] }, { type: src_app_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_10__["MainPageComponent"] }, { type: _servises_order_datas_service__WEBPACK_IMPORTED_MODULE_11__["OrderDatasService"] }]; }, { canvas: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['canvas', { static: false }]
        }], IMG: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['imagePath']
        }], coord: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['coord']
        }], owlElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['owlElement']
        }], inputColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['inputColor']
        }], divvv: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['divvv']
        }] }); })();


/***/ }),

/***/ "./src/app/shared/layouts/site-layout/size-format/size-format.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/shared/layouts/site-layout/size-format/size-format.component.ts ***!
  \*********************************************************************************/
/*! exports provided: SizeFormatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SizeFormatComponent", function() { return SizeFormatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _servises_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../servises/data.service */ "./src/app/shared/layouts/servises/data.service.ts");
/* harmony import */ var _site_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../site-layout.component */ "./src/app/shared/layouts/site-layout/site-layout.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function SizeFormatComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "A3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SizeFormatComponent_div_3_Template_label_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r2.formatValue = "A3"; ctx_r2.obj.topUpDown = 0 - 0.03; ctx_r2.formatA4V(); return ctx_r2.setformatScale(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "A4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SizeFormatComponent_div_3_Template_label_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r4.formatValue = "A4"; ctx_r4.obj.topUpDown = 0 - 0.03; ctx_r4.formatA4H(); return ctx_r4.setformatScale(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SizeFormatComponent_div_3_Template_label_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r5.formatValue = "A4"; ctx_r5.obj.topUpDown = 0.02; ctx_r5.formatA4V(); return ctx_r5.setformatScale(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "hr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "A5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SizeFormatComponent_div_3_Template_label_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r6.formatValue = "A5"; ctx_r6.obj.topUpDown = 0.03; ctx_r6.formatA4H(); return ctx_r6.setformatScale(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SizeFormatComponent_div_3_Template_label_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r7.formatValue = "A5"; ctx_r7.obj.topUpDown = 0.07; ctx_r7.formatA4V(); return ctx_r7.setformatScale(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SizeFormatComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.endPrise);
} }
const _c0 = function (a0) { return { "box": a0 }; };
const _c1 = function (a0, a1, a2, a3) { return { width: a0, height: a1, top: a2, "left.px": a3, "position": "absolute", "pointer-events": "none" }; };
class SizeFormatComponent {
    constructor(dataService, siteLayout) {
        this.dataService = dataService;
        this.siteLayout = siteLayout;
        this.selectOpen = false;
        this.counter = 0;
        this.upDown = null;
        this.canvasSelect = null;
        this.scaleBlock = false;
        this.formatValue = 'A4';
        this.endPrise = 0;
        this.obj = { objectWidth: null, objectWidthHeight: null, topUpDown: 0 };
        this.canvasHtmlWidth = this.dataService.canvasHtmlWidth;
        this.canvasHtmlHeight = this.dataService.canvasHtmlHeight;
        this.canvasSizeFormatTop = this.dataService.canvasSizeFormatTop;
        this.canvasCenteredPosition = this.dataService.canvasCenteredPosition;
        this.canvasSizeFormatWidth = this.dataService.canvasSizeFormatWidth;
        this.canvasSizeFormatHeight = this.dataService.canvasSizeFormatHeight;
        this.canvasSizeFormatLeft = this.dataService.canvasSizeFormatLeft;
        this.sizePrintKey = this.dataService.sizePrintKey;
        this.formatWithHeight = this.dataService.formatWithHeight;
        this.positionTopKey = this.dataService.formatTopKey;
        this.objectWidth = this.dataService.sizePrintKey;
        this.objectWidthHeight = this.dataService.formatWithHeight;
        this.horVert = this.dataService.horVert;
        this.scaleKey = this.dataService.scaleKey;
        this.getUpdatedMessage();
    }
    ;
    ngOnInit() {
        this.dataService.canvasDivSelect.subscribe(res => {
            this.canvasSelect = res;
            // console.log(res);
            this.setFormatHeightTop();
        });
        this.dataService.formatValue1.subscribe(res => {
            this.formatValue = res;
            // console.log(res);
            this.setFormatHeightTop();
        });
        // this.canvas.setHeight(this.canvasHtmlHeight);
        // this.canv = this.dataService.canvasSelect
    }
    getUpdatedMessage() {
        this.dataService.formatA4Horizontal.subscribe(res => {
            this.sizePrintKey = res;
            // console.log(res);
            this.setFormatHeightTop();
        });
        this.dataService.scaleKeyy.subscribe(res => {
            this.scaleKey = res;
            console.log(res);
            this.setFormatHeightTop();
        });
        this.dataService.formatA4Vertical.subscribe(res => {
            this.formatWithHeight = res;
            // console.log(res);
            this.setFormatHeightTop();
        });
        this.dataService.formatTop.subscribe(res => {
            this.positionTopKey = res;
            // console.log(res);
            this.setFormatHeightTop();
        });
        this.dataService.endPriseValue.subscribe(res => {
            this.endPrise = res;
            // console.log(res);
            this.setFormatHeightTop();
        });
        this.dataService.horVertt.subscribe(res => {
            this.horVert = res;
            // console.log(res);
            this.setFormatHeightTop();
        });
        this.setFormatHeightTop();
    }
    changePosition() {
        this.siteLayout.moveWithFormat(this.scaleKey, this.scaleBlock);
    }
    formatA4H() {
        // this.counter = 0;
        this.dataService.horVert = this.horVert = true;
        this.dataService.formatValue = this.formatValue;
        this.scaleBlock = true;
        this.changePosition();
        this.obj.objectWidthHeight = this.objectWidthHeight = 1.414 / 2;
        this.dataService.formatSizeSwich();
        // this.sizePrintKey = 686 / ((686 - 297) / 2);
        // this.dataService.scaleKey = this.canvasSizeFormatWidth / 145;
        // this.obj.objectWidth = this.objectWidth = this.dataService.sizePrintKey;
        // this.obj.topUpDown = 0;
        this.scaleBlock = false;
        this.changePosition();
    }
    formatA4V() {
        // this.counter = 0;
        this.dataService.horVert = this.horVert = false;
        // this.scaleKey = 2.3;
        // this.obj.topUpDown = -0.3;
        this.dataService.formatValue = this.formatValue;
        this.scaleBlock = true;
        this.changePosition();
        this.obj.objectWidthHeight = this.objectWidthHeight = 1.414;
        this.dataService.formatSizeSwich();
        // const cafficient = 1.0229;
        // this.sizePrintKey = 686 * cafficient / ((686 - 210) / 2);
        // this.dataService.scaleKey = this.canvasSizeFormatWidth / 55;
        // this.obj.objectWidth = this.objectWidth = this.dataService.sizePrintKey;
        // this.obj.topUpDown = 0.07;
        this.scaleBlock = false;
        this.changePosition();
    }
    counterNum() {
        // this.counter = 0;
        if (this.upDown) {
            return this.counter = 0.05;
        }
        else {
            return this.counter = -0.05;
        }
    }
    counterTop() {
        this.obj.objectWidth = this.objectWidth;
        this.obj.objectWidthHeight = this.objectWidthHeight;
        this.obj.topUpDown += this.counterNum();
    }
    setformatScale() {
        // this.dataService.sizePrintKey = this.obj.objectWidth;
        this.dataService.formatWithHeight = this.obj.objectWidthHeight;
        this.dataService.formatTopKey = this.obj.topUpDown;
        this.dataService.calcEndPrise();
    }
    onResize() {
        this.dataService.initCalculations();
        // this.counterTop();
        this.formatA4V();
        this.formatA4H();
        // this.setformatScale();
        // this.getUpdatedMessage();
        // this.counterNum();
        this.canvasHtmlWidth = this.dataService.canvasHtmlWidth;
        this.canvasHtmlHeight = this.dataService.canvasHtmlHeight;
        this.canvasCenteredPosition = this.dataService.canvasCenteredPosition;
        this.canvasSizeFormatWidth = this.dataService.canvasSizeFormatWidth;
        this.canvasSizeFormatHeight = this.dataService.canvasSizeFormatHeight;
        this.canvasSizeFormatTop = this.dataService.canvasSizeFormatTop;
        this.canvasSizeFormatLeft = this.dataService.canvasSizeFormatLeft;
        this.siteLayout.moveWithFormat(this.scaleKey, true);
    }
    setFormatHeightTop() {
        // this.dataService.formatTopKey = 0.5;
        let positionTopKey = this.canvasHtmlWidth * this.positionTopKey;
        this.canvasSizeFormatWidth = this.canvasHtmlWidth - 2 * (this.canvasHtmlWidth / this.sizePrintKey + this.canvasHtmlWidth / 40);
        // console.log('width', this.canvasSizeFormatWidth);
        this.canvasSizeFormatTop = this.canvasHtmlWidth / 40 + this.canvasHtmlWidth / this.sizePrintKey - positionTopKey;
        this.canvasSizeFormatHeight = this.canvasSizeFormatWidth * this.formatWithHeight;
        // console.log('height', this.canvasSizeFormatHeight);
        this.canvasSizeFormatLeft = this.canvasHtmlWidth / 40 + this.canvasHtmlWidth / this.sizePrintKey;
        this.canvasCenteredPosition = window.innerWidth / this.dataService.positionKey;
    }
}
SizeFormatComponent.ɵfac = function SizeFormatComponent_Factory(t) { return new (t || SizeFormatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servises_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_site_layout_component__WEBPACK_IMPORTED_MODULE_2__["SiteLayoutComponent"])); };
SizeFormatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SizeFormatComponent, selectors: [["app-size-format"]], decls: 6, vars: 11, consts: [[1, "full-width"], [1, "row"], [1, "col", "s7", "m3", "l4", "xl6", "offset-s2", "offset-m2", "offset-l1", "offset-xl1", 2, "top", "-40px", "position", "absolute", "z-index", "1"], ["style", " max-width: 100%; overflow-x: hidden; width: 80%; height: 300px; max-height: 300px; z-index: 1; margin-top: 5px; position: relative; padding: 10px 10px 0px 0px; background-color: #3d365a73", 4, "ngIf"], [2, "border-spacing", "10px", 3, "ngClass", "ngStyle", "resize"], ["style", "margin-top: -100px; margin-left: -200px;", 4, "ngIf"], [2, "max-width", "100%", "overflow-x", "hidden", "width", "80%", "height", "300px", "max-height", "300px", "z-index", "1", "margin-top", "5px", "position", "relative", "padding", "10px 10px 0px 0px", "background-color", "#3d365a73"], [1, "colorBox", 2, "margin", "0px", "margin-top", "5%"], [1, "imageDiv", 2, "margin", "-5px"], ["for", "", 2, "top", "50%", "transform", "translateY(-50%)", "margin", "0", "left", "13px", "position", "relative", "font-size", "large", "font-family", "Arial, Helvetica, sans-serif", "color", "#ffffff"], [2, "top", "-64%", "margin", "0", "position", "relative", "left", "78%", 3, "click"], ["type", "radio", "name", "test1", "value", "big"], ["src", "../assets/img/oie_aHdWpUcmnmvA.png", 1, "hoverable", "imageBox1", 2, "width", "18%", "height", "90%"], [2, "border", "1px solid rgba(255, 255, 255, 0.507)", "margin-top", "5%"], [2, "top", "-80%", "margin", "0", "left", "8px", "position", "relative", 3, "click"], ["src", "../assets/img/oie_aHdWpUcmnmvA.png", 1, "hoverable", "imageBox1", 2, "margin-left", "35%", "margin-right", "18%", "width", "25%", "height", "auto"], [2, "top", "-64%", "margin", "0", "position", "relative", 3, "click"], [2, "top", "-78%", "margin", "0", "left", "8px", "position", "relative", 3, "click"], [2, "top", "-63%", "margin", "0", "position", "relative", 3, "click"], [2, "margin-top", "-100px", "margin-left", "-200px"]], template: function SizeFormatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SizeFormatComponent_div_3_Template, 28, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function SizeFormatComponent_Template_div_resize_4_listener() { return ctx.onResize(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SizeFormatComponent_div_5_Template, 2, 1, "div", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.canvasSelect))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](6, _c1, ctx.canvasSizeFormatWidth + "px", ctx.canvasSizeFormatHeight + "px", ctx.canvasSizeFormatTop + "px", ctx.canvasSizeFormatLeft));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", true);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"]], styles: [".box[_ngcontent-%COMP%] {\n  border: dashed 2px rgba(0, 0, 0, 0.411);\n}\n\n.radio[_ngcontent-%COMP%] {\n  transform: translateY(-73%);\n}\n\n.radio[_ngcontent-%COMP%]:checked    + img[_ngcontent-%COMP%] {\n  border: 2px solid #00ff22;\n}\n\n.imageBox1[_ngcontent-%COMP%] {\n  background-color: white;\n  width: 25%;\n  height: auto;\n  display: inline-block;\n  margin: 0px;\n  cursor: pointer;\n  border-radius: 5%;\n}\n\n.horizontal[_ngcontent-%COMP%] {\n  width: 45%;\n  height: auto;\n}\n\n.vertical[_ngcontent-%COMP%] {\n  padding-top: 13%;\n  width: 29%;\n  height: 90%;\n}\n\n.imageBox1[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  \n}\n\n.imageDiv[_ngcontent-%COMP%] {\n  height: 40px;\n}\n\n.imageDiv[_ngcontent-%COMP%]:hover {\n  background-color: #3d365abb;\n  margin-left: 5px;\n}\n\n.A4H[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xheW91dHMvc2l0ZS1sYXlvdXQvc2l6ZS1mb3JtYXQvRDpcXEFuZ3VsYXJcXExBU1RfVkVSU0lPTl9PRl9ULVNISVJUXFxDb3B5IG9mIG9yaWdpbiBwcm9qZWN0IFQtc2hpcnRfbGFzdFxcdC1zaGlydFxcdC1zaGlydC1iYWNrZW5kXFxjbGllbnQvc3JjXFxhcHBcXHNoYXJlZFxcbGF5b3V0c1xcc2l0ZS1sYXlvdXRcXHNpemUtZm9ybWF0XFxzaXplLWZvcm1hdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2xheW91dHMvc2l0ZS1sYXlvdXQvc2l6ZS1mb3JtYXQvc2l6ZS1mb3JtYXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1Q0FBdUM7QUNDekM7O0FER0M7RUFDQywyQkFBMkI7QUNBN0I7O0FER0E7RUFDRSx5QkFBaUM7QUNBbkM7O0FES0E7RUFDRSx1QkFBb0M7RUFHckMsVUFBVTtFQUNWLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsV0FBVztFQUNYLGVBQWU7RUFJZixpQkFBaUI7QUNQbEI7O0FEWUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtBQ1RkOztBRFlBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixXQUFXO0FDVGI7O0FEWUE7RUFDQyxxQkFBcUI7RUFBRSxxRkFBQTtBQ1J4Qjs7QURZQTtFQUVFLFlBQVk7QUNWZDs7QURhQTtFQUVFLDJCQUEyQjtFQUMzQixnQkFBZ0I7QUNYbEI7O0FEY0E7RUFDRSxvQkFBb0I7QUNYdEIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbGF5b3V0cy9zaXRlLWxheW91dC9zaXplLWZvcm1hdC9zaXplLWZvcm1hdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3gge1xyXG4gIGJvcmRlcjogZGFzaGVkIDJweCByZ2JhKDAsIDAsIDAsIDAuNDExKTtcclxufVxyXG5cclxuXHJcbiAucmFkaW8ge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNzMlKTtcclxufVxyXG5cclxuLnJhZGlvOmNoZWNrZWQgKyBpbWcge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigwLCAyNTUsIDM0KTtcclxuXHJcbn1cclxuXHJcblxyXG4uaW1hZ2VCb3gxIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7IFxyXG4gLy8gYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiBcclxuIHdpZHRoOiAyNSU7XHJcbiBoZWlnaHQ6IGF1dG87XHJcbiBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiBtYXJnaW46IDBweDtcclxuIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAvLyBwYWRkaW5nOiA1cHg7XHJcbiAvLyBib3JkZXI6IDBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuIGJvcmRlci1yYWRpdXM6IDUlO1xyXG4gLy8gbWFyZ2luOiAtNTBweDtcclxuIC8vIHRvcDogLTM1cHg7XHJcbn1cclxuXHJcbi5ob3Jpem9udGFse1xyXG4gIHdpZHRoOiA0NSU7IFxyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLnZlcnRpY2Fse1xyXG4gIHBhZGRpbmctdG9wOiAxMyU7XHJcbiAgd2lkdGg6IDI5JTsgXHJcbiAgaGVpZ2h0OiA5MCU7XHJcbn1cclxuXHJcbi5pbWFnZUJveDE6aG92ZXIge1xyXG4gdHJhbnNmb3JtOiBzY2FsZSgxLjEpOyAvKiAoMTUwJSB6b29tIC0gTm90ZTogaWYgdGhlIHpvb20gaXMgdG9vIGxhcmdlLCBpdCB3aWxsIGdvIG91dHNpZGUgb2YgdGhlIHZpZXdwb3J0KSAqL1xyXG59XHJcblxyXG5cclxuLmltYWdlRGl2ICB7XHJcbiAgLy8gdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xyXG4gIGhlaWdodDogNDBweDtcclxufVxyXG5cclxuLmltYWdlRGl2OmhvdmVyICB7XHJcbiAgLy8gdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZDM2NWFiYjtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcblxyXG4uQTRIIHtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufSIsIi5ib3gge1xuICBib3JkZXI6IGRhc2hlZCAycHggcmdiYSgwLCAwLCAwLCAwLjQxMSk7XG59XG5cbi5yYWRpbyB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNzMlKTtcbn1cblxuLnJhZGlvOmNoZWNrZWQgKyBpbWcge1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDBmZjIyO1xufVxuXG4uaW1hZ2VCb3gxIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAyNSU7XG4gIGhlaWdodDogYXV0bztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA1JTtcbn1cblxuLmhvcml6b250YWwge1xuICB3aWR0aDogNDUlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi52ZXJ0aWNhbCB7XG4gIHBhZGRpbmctdG9wOiAxMyU7XG4gIHdpZHRoOiAyOSU7XG4gIGhlaWdodDogOTAlO1xufVxuXG4uaW1hZ2VCb3gxOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAvKiAoMTUwJSB6b29tIC0gTm90ZTogaWYgdGhlIHpvb20gaXMgdG9vIGxhcmdlLCBpdCB3aWxsIGdvIG91dHNpZGUgb2YgdGhlIHZpZXdwb3J0KSAqL1xufVxuXG4uaW1hZ2VEaXYge1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5pbWFnZURpdjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZDM2NWFiYjtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLkE0SCB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SizeFormatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-size-format',
                templateUrl: './size-format.component.html',
                styleUrls: ['./size-format.component.scss']
            }]
    }], function () { return [{ type: _servises_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }, { type: _site_layout_component__WEBPACK_IMPORTED_MODULE_2__["SiteLayoutComponent"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/pipes.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/shared/pipes.pipe.ts ***!
  \**************************************/
/*! exports provided: PipesPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesPipe", function() { return PipesPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PipesPipe {
    transform() {
        return 0;
    }
}
PipesPipe.ɵfac = function PipesPipe_Factory(t) { return new (t || PipesPipe)(); };
PipesPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "ret", type: PipesPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PipesPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'ret'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shoping-page/shoping-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/shoping-page/shoping-page.component.ts ***!
  \********************************************************/
/*! exports provided: ShopingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopingPageComponent", function() { return ShopingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_layouts_servises_order_datas_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/layouts/servises/order-datas.service */ "./src/app/shared/layouts/servises/order-datas.service.ts");



class ShopingPageComponent {
    constructor(order) {
        this.order = order;
        this.colorDefoult = this.order.orderDatas.colorDefoult;
        this.props = {
            productTypeName: this.order.orderDatas.productTypeName,
            brendName: this.order.orderDatas.brendName,
            productColor: this.order.orderDatas.productColor,
            colorDefoult: this.order.orderDatas.colorDefoult,
            productSize: this.order.orderDatas.productSize
        };
    }
    ngOnInit() {
        const image = new Image();
        image.src = this.order.imageSrc;
        this.imageSrc = this.order.imageSrc;
        console.log(this.props);
    }
}
ShopingPageComponent.ɵfac = function ShopingPageComponent_Factory(t) { return new (t || ShopingPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_layouts_servises_order_datas_service__WEBPACK_IMPORTED_MODULE_1__["OrderDatasService"])); };
ShopingPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShopingPageComponent, selectors: [["app-shoping-page"]], decls: 15, vars: 7, consts: [[1, "row"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "85%", "height", "85%", "viewBox", "0 0 50 50", 1, "col", "s12", "m10", "l6", "xl12", "offset-s0", "offset-m2", "offset-l3", "offset-xl0", 2, "position", "absolute", "top", "65px", "left", "-10%"], ["x", "0", "y", "0", "height", "100%", "width", "100%"], [1, "col", "s12", "m10", "l6", "xl12", "offset-s0", "offset-m2", "offset-l3", "offset-xl7", 2, "position", "absolute", "top", "65px"], [2, "float", "left", "top", "1%", "margin-top", "0.5%", "margin-right", "1%"], ["role", "option", 1, "card-panel"]], template: function ShopingPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "image", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("href", ctx.imageSrc, null, "xlink");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.props.productTypeName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.props.brendName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.props.productColor === "" ? ctx.colorDefoult : ctx.props.productColor, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.props.productColor === "" ? ctx.colorDefoult : ctx.props.productColor, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.props.productSize, " ");
    } }, styles: ["[type=radio][_ngcontent-%COMP%]:checked    + div[_ngcontent-%COMP%] {\n  outline: 2px solid black;\n  background-color: #000;\n  color: #ffffff;\n}\n\n[type=radio][_ngcontent-%COMP%]:disabled    + div[_ngcontent-%COMP%] {\n  outline: 2px solid #ffdfe5;\n  background-color: #ffdfe5;\n  color: #ff7490;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcGluZy1wYWdlL3Nob3BpbmctcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hvcGluZy1wYWdlL0Q6XFxBbmd1bGFyXFxMQVNUX1ZFUlNJT05fT0ZfVC1TSElSVFxcQ29weSBvZiBvcmlnaW4gcHJvamVjdCBULXNoaXJ0X2xhc3RcXHQtc2hpcnRcXHQtc2hpcnQtYmFja2VuZFxcY2xpZW50L3NyY1xcYXBwXFxzaG9waW5nLXBhZ2VcXHNob3BpbmctcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQ0NJLHdCQUErQjtFQUMvQixzQkFBc0I7RUFDdEIsY0FBYztBRENsQjs7QUFFQTtFQ0NJLDBCQUFxQztFQUNyQyx5QkFBb0M7RUFDcEMsY0FBeUI7QURDN0IiLCJmaWxlIjoic3JjL2FwcC9zaG9waW5nLXBhZ2Uvc2hvcGluZy1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiW3R5cGU9cmFkaW9dOmNoZWNrZWQgKyBkaXYge1xuICBvdXRsaW5lOiAycHggc29saWQgYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG5bdHlwZT1yYWRpb106ZGlzYWJsZWQgKyBkaXYge1xuICBvdXRsaW5lOiAycHggc29saWQgI2ZmZGZlNTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZGZlNTtcbiAgY29sb3I6ICNmZjc0OTA7XG59XG4iLCJbdHlwZT1yYWRpb106Y2hlY2tlZCArIGRpdiB7XHJcbiAgICBvdXRsaW5lOiAycHggc29saWQgcmdiKDAsIDAsIDApO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxuXHJcbiAgW3R5cGU9cmFkaW9dOmRpc2FibGVkICsgZGl2IHtcclxuICAgIG91dGxpbmU6IDJweCBzb2xpZCByZ2IoMjU1LCAyMjMsIDIyOSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyMjMsIDIyOSk7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMTE2LCAxNDQpO1xyXG4gIH1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShopingPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-shoping-page',
                templateUrl: './shoping-page.component.html',
                styleUrls: ['./shoping-page.component.scss']
            }]
    }], function () { return [{ type: _shared_layouts_servises_order_datas_service__WEBPACK_IMPORTED_MODULE_1__["OrderDatasService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/side-design/side-design.component.ts":
/*!******************************************************!*\
  !*** ./src/app/side-design/side-design.component.ts ***!
  \******************************************************/
/*! exports provided: SideDesignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideDesignComponent", function() { return SideDesignComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _editor_pic_editor_pic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../editor-pic/editor-pic.component */ "./src/app/editor-pic/editor-pic.component.ts");




const _c0 = ["canvas"];
function SideDesignComponent_ng_template_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Select color ");
} }
const _c1 = function (a0) { return [a0]; };
const _c2 = function (a0) { return { "backgroundColor": a0 }; };
const _c3 = function () { return { "padding-top": "8px" }; };
class SideDesignComponent {
    constructor() {
        this.title = 'EditorPic';
        this.isOpen = false;
        this.selectColor = '';
        this.colors = [
            { hex: '#cba6a6', name: 'pink' },
            { hex: '#b4a24b', name: 'pino' },
            { hex: '#28e139', name: 'pink' },
            { hex: '#5a7cc6', name: 'pink' },
            { hex: '#cba6a6', name: 'pink' },
            { hex: '#e1a24b', name: 'pino' },
            { hex: '#11e139', name: 'pink' },
            { hex: '#4b2cc6', name: 'pink' }
        ];
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
    }
    rasterize() {
        this.canvas.rasterize();
    }
    rasterizeSVG() {
        this.canvas.rasterizeSVG();
    }
    saveCanvasToJSON() {
        this.canvas.saveCanvasToJSON();
    }
    loadCanvasFromJSON() {
        this.canvas.loadCanvasFromJSON();
    }
    confirmClear() {
        this.canvas.confirmClear();
    }
    changeSize() {
        // this.canvas.changeSize();
    }
    addText() {
        this.canvas.addText();
    }
    getImgPolaroid(event) {
        this.canvas.getImgPolaroid(event);
    }
    addImageOnCanvas(url) {
        this.canvas.addImageOnCanvas(url);
    }
    readUrl(event) {
        this.canvas.readUrl(event);
    }
    removeWhite(url) {
        this.canvas.removeWhite(url);
    }
    addFigure(figure) {
        this.canvas.addFigure(figure);
    }
    removeSelected() {
        this.canvas.removeSelected();
    }
    sendToBack() {
        this.canvas.sendToBack();
    }
    bringToFront() {
        this.canvas.bringToFront();
    }
    clone() {
        this.canvas.clone();
    }
    cleanSelect() {
        this.canvas.cleanSelect();
    }
    setCanvasFill() {
        this.canvas.setCanvasFill();
    }
    setCanvasImage() {
        // this.canvas.setCanvasImage();
    }
    setId() {
        this.canvas.setId();
    }
    setOpacity() {
        this.canvas.setOpacity();
    }
    setFill() {
        this.canvas.setFill();
    }
    setFontFamily() {
        this.canvas.setFontFamily();
    }
    setTextAlign(value) {
        this.canvas.setTextAlign(value);
    }
    setBold() {
        this.canvas.setBold();
    }
    setFontStyle() {
        this.canvas.setFontStyle();
    }
    hasTextDecoration(value) {
        this.canvas.hasTextDecoration(value);
    }
    setTextDecoration(value) {
        this.canvas.setTextDecoration(value);
    }
    setFontSize() {
        this.canvas.setFontSize();
    }
    setLineHeight() {
        // this.canvas.setLineHeight();
    }
    setCharSpacing() {
        this.canvas.setCharSpacing();
    }
    rasterizeJSON() {
        this.canvas.rasterizeJSON();
    }
}
SideDesignComponent.ɵfac = function SideDesignComponent_Factory(t) { return new (t || SideDesignComponent)(); };
SideDesignComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SideDesignComponent, selectors: [["app-side-design"]], viewQuery: function SideDesignComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
    } }, decls: 55, vars: 13, consts: [[1, "full-width"], [1, "row"], [1, "imgBox"], [1, "imgBack", "embed-responsive", 3, "ngStyle"], ["src", "assets/img/Trafaret3.png", "alt", "oo", 1, "imgFront"], [1, "canvas"], ["canvas", ""], [1, "toolNav", "col", "s4", "m3", "l4", "xl4", "red", "offset-s8", "offset-m9", "offset-l8", "offset-xl8"], [1, "nav-wrapper", "teal", "lighten-2"], [1, "brand-logo", "left"], ["href", "#", "data-target", "mobile-links", 1, "right", "sidenav-trigger"], [1, "material-icons"], ["id", "nav-mobile", 1, "tabBox", "center-align", "hide-on-med-and-down"], [1, "tabs", "tabs-fixed-width", "tab-demo", "z-depth-1"], [1, "tab"], ["href", "#test1"], [1, "small", "material-icons", 3, "ngStyle"], ["href", "#test2", 1, "active"], ["href", "#test3"], ["id", "test1", 1, "col", "s12"], [1, "colorConteiner", "left-align"], ["type", "button", "cdkOverlayOrigin", "", 1, "colorButton", 3, "click"], ["display", ""], ["id", "test2", 1, "active", "col", "s12"], ["id", "test3", 1, "col", "s12"], [1, "col", "s12", "m4", "l4"], ["src", "assets/img/Trafaret3.png ", 1, "responsive-img", "materialboxed"], ["src", "assets/img/Trafaret3.png", 1, "responsive-img", "materialboxed"]], template: function SideDesignComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-editor-pic", null, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Your design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "color_lens");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "photo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "format_size");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideDesignComponent_Template_button_click_33_listener() { return ctx.isOpen = !ctx.isOpen; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, SideDesignComponent_ng_template_35_Template, 1, 0, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Test 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "op ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Test 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "lkoihoiogiog ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " 1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " 2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " 3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, ctx.selectColor)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.selectColor || "none", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _editor_pic_editor_pic_component__WEBPACK_IMPORTED_MODULE_2__["EditorPicComponent"]], styles: ["@media(min-width: 750px) {\r\n\r\n    .Content_Preview[_ngcontent-%COMP%]  {\r\n       top: 10px;    \r\n       left: 480px;\r\n       width: calc(100% - 488px);   \r\n       height: 520px;\r\n       position: relative;\r\n       border: 2px solid seagreen; \r\n       display: flex;\r\n       justify-content: flex-start;\r\n       \r\n       align-items: center;\r\n       flex-direction: row;\r\n       flex-wrap: wrap;\r\n    \r\n        }\r\n    }\r\n    \r\n    .toolNav[_ngcontent-%COMP%]{\r\n      position: absolute;\r\n      margin-top: -450px;\r\n      width: 50px;\r\n      height: 200px;\r\n      \r\n    }\r\n    \r\n    .toolsBoxxxxxxxxxxxxxxxxxxx[_ngcontent-%COMP%] {\r\n        \r\n        width: 380px ;\r\n        height: 500px;\r\n        border: 2px solid chartreuse;\r\n        \r\n    }\r\n    \r\n    .divv[_ngcontent-%COMP%] {\r\n        \r\n        height: 80px;\r\n        border: 2px solid rgb(71, 46, 139);\r\n    \r\n    }\r\n    \r\n    @media(min-width: 380px) {\r\n    \r\n    \r\n    }\r\n    \r\n    .imgFront[_ngcontent-%COMP%] {\r\n       width: 100%;\r\n       height: 100%; \r\n       position: absolute;\r\n       z-index:0\r\n    \r\n    }\r\n    \r\n    .imgBack[_ngcontent-%COMP%] {\r\n       width: 100%;\r\n       height: 100%;\r\n       \r\n       background-color: rgb(204, 32, 83);\r\n       border: 1px solid seagreen; \r\n    }\r\n    \r\n    .colorButton[_ngcontent-%COMP%] {\r\n      height: 50px;\r\n      width: 50px;\r\n      border-radius: 50%;\r\n    }\r\n    \r\n    div.colorBox[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover {\r\n      background-color: #777;\r\n      border: 2px solid black;\r\n    }\r\n    \r\n    .colorConteiner[_ngcontent-%COMP%]{\r\n      margin-top: 10px;\r\n      margin-left: 10px;\r\n    }\r\n    \r\n    .colorBox[_ngcontent-%COMP%] {\r\n      position: absolute;\r\n      width: 250px;\r\n      overflow-x: auto;\r\n      white-space: nowrap;\r\n      padding: 0px;\r\n      \r\n      border-radius: 5px;\r\n      box-shadow: 5px 10px 18px #888888;\r\n    }\r\n    \r\n    [role=\"option\"][_ngcontent-%COMP%] {\r\n      display: inline-block;\r\n      height: 25px;\r\n      width: 25px;\r\n      margin: 5px;\r\n      cursor: pointer;\r\n    \r\n      padding: 5px;\r\n      border: 3px solid transparent;\r\n      border-radius: 50%;\r\n    }\r\n    \r\n    #canvas[_ngcontent-%COMP%] {\r\n      border: 2px dashed #cccccc;\r\n    }\r\n    \r\n    .main-title[_ngcontent-%COMP%]{\r\n      margin-top: 10px;\r\n    }\r\n    \r\n    .images-item[_ngcontent-%COMP%] {\r\n      width: 48%;\r\n      cursor: pointer;\r\n      -webkit-transition: .5s ease;\r\n      -webkit-transition: .5s ease;\r\n      padding: 3px;\r\n      max-width: 120px;\r\n    }\r\n    \r\n    .images-item[_ngcontent-%COMP%]:hover {\r\n      opacity: 0.7;\r\n    }\r\n    \r\n    .images-item-upload[_ngcontent-%COMP%] {\r\n      width: 80%;\r\n      cursor: pointer;\r\n      padding-bottom: 10px;\r\n      -webkit-transition: .5s ease;\r\n      -webkit-transition: .5s ease;\r\n    }\r\n    \r\n    .images-item-upload[_ngcontent-%COMP%]:hover {\r\n      opacity: 0.7;\r\n    }\r\n    \r\n    .custom-item[_ngcontent-%COMP%] {\r\n      border-bottom: 2px solid #f3f3f3;\r\n    }\r\n    \r\n    .custom-item[_ngcontent-%COMP%]   .custom-item-title[_ngcontent-%COMP%] {\r\n      color: #666666;\r\n      font-weight: 600;\r\n    }\r\n    \r\n    .custom-item[_ngcontent-%COMP%]   .custom-item-body[_ngcontent-%COMP%] {\r\n      padding: 10px 0;\r\n    }\r\n    \r\n    .max-height[_ngcontent-%COMP%]{\r\n      overflow: auto;\r\n      max-height: 300px;\r\n    }\r\n    \r\n    .canvas[_ngcontent-%COMP%]{\r\n      top: 30px;\r\n      left: 30px;\r\n      position: absolute;\r\n    }\r\n    \r\n    .imgBox[_ngcontent-%COMP%] {\r\n      top: 30px;\r\n      \r\n      margin: auto;\r\n      width: 380px; \r\n      height: 480px; \r\n      position: relative; \r\n      border: 1px solid black;\r\n    \r\n      \r\n    }\r\n    \r\n    .tabBox[_ngcontent-%COMP%] {\r\n     padding-top: 120px;\r\n    }\r\n    \r\n    .tabBoxNav[_ngcontent-%COMP%]{\r\n      padding-top: 20px;\r\n    \r\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZS1kZXNpZ24vc2lkZS1kZXNpZ24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSTtPQUNHLFNBQVM7T0FDVCxXQUFXO09BQ1gseUJBQXlCO09BQ3pCLGFBQWE7T0FDYixrQkFBa0I7T0FDbEIsMEJBQTBCO09BQzFCLGFBQWE7T0FDYiwyQkFBMkI7T0FDM0IsK0JBQStCO09BQy9CLG1CQUFtQjtPQUNuQixtQkFBbUI7T0FDbkIsZUFBZTs7UUFFZDtJQUNKOztJQUVBO01BQ0Usa0JBQWtCO01BQ2xCLGtCQUFrQjtNQUNsQixXQUFXO01BQ1gsYUFBYTtNQUNiLGtCQUFrQjtJQUNwQjs7SUFFQTtRQUNJLHNCQUFzQjtRQUN0QixhQUFhO1FBQ2IsYUFBYTtRQUNiLDRCQUE0QjtRQUM1QiwrQkFBK0I7SUFDbkM7O0lBR0E7UUFDSSx1QkFBdUI7UUFDdkIsWUFBWTtRQUNaLGtDQUFrQzs7SUFFdEM7O0lBR0E7OztJQUdBOztJQUVBO09BQ0csV0FBVztPQUNYLFlBQVk7T0FDWixrQkFBa0I7T0FDbEI7O0lBRUg7O0lBRUE7T0FDRyxXQUFXO09BQ1gsWUFBWTtPQUNaLHdCQUF3QjtPQUN4QixrQ0FBa0M7T0FDbEMsMEJBQTBCO0lBQzdCOztJQUVBO01BQ0UsWUFBWTtNQUNaLFdBQVc7TUFDWCxrQkFBa0I7SUFDcEI7O0lBR0E7TUFDRSxzQkFBc0I7TUFDdEIsdUJBQXVCO0lBQ3pCOztJQUVBO01BQ0UsZ0JBQWdCO01BQ2hCLGlCQUFpQjtJQUNuQjs7SUFFQTtNQUNFLGtCQUFrQjtNQUNsQixZQUFZO01BQ1osZ0JBQWdCO01BQ2hCLG1CQUFtQjtNQUNuQixZQUFZO01BQ1osNkJBQTZCO01BQzdCLGtCQUFrQjtNQUNsQixpQ0FBaUM7SUFDbkM7O0lBRUE7TUFDRSxxQkFBcUI7TUFDckIsWUFBWTtNQUNaLFdBQVc7TUFDWCxXQUFXO01BQ1gsZUFBZTs7TUFFZixZQUFZO01BQ1osNkJBQTZCO01BQzdCLGtCQUFrQjtJQUNwQjs7SUFHQTtNQUNFLDBCQUEwQjtJQUM1Qjs7SUFDQTtNQUNFLGdCQUFnQjtJQUNsQjs7SUFDQTtNQUNFLFVBQVU7TUFDVixlQUFlO01BQ2YsNEJBQTRCO01BQzVCLDRCQUE0QjtNQUM1QixZQUFZO01BQ1osZ0JBQWdCO0lBQ2xCOztJQUVBO01BQ0UsWUFBWTtJQUNkOztJQUVBO01BQ0UsVUFBVTtNQUNWLGVBQWU7TUFDZixvQkFBb0I7TUFDcEIsNEJBQTRCO01BQzVCLDRCQUE0QjtJQUM5Qjs7SUFFQTtNQUNFLFlBQVk7SUFDZDs7SUFFQTtNQUNFLGdDQUFnQztJQUNsQzs7SUFFQTtNQUNFLGNBQWM7TUFDZCxnQkFBZ0I7SUFDbEI7O0lBRUE7TUFDRSxlQUFlO0lBQ2pCOztJQUVBO01BQ0UsY0FBYztNQUNkLGlCQUFpQjtJQUNuQjs7SUFFQTtNQUNFLFNBQVM7TUFDVCxVQUFVO01BQ1Ysa0JBQWtCO0lBQ3BCOztJQUVBO01BQ0UsU0FBUztNQUNULGVBQWU7TUFDZixZQUFZO01BQ1osWUFBWTtNQUNaLGFBQWE7TUFDYixrQkFBa0I7TUFDbEIsdUJBQXVCOztNQUV2QixhQUFhO0lBQ2Y7O0lBRUE7S0FDQyxrQkFBa0I7SUFDbkI7O0lBRUE7TUFDRSxpQkFBaUI7O0lBRW5CIiwiZmlsZSI6InNyYy9hcHAvc2lkZS1kZXNpZ24vc2lkZS1kZXNpZ24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYShtaW4td2lkdGg6IDc1MHB4KSB7XHJcblxyXG4gICAgLkNvbnRlbnRfUHJldmlldyAge1xyXG4gICAgICAgdG9wOiAxMHB4OyAgICBcclxuICAgICAgIGxlZnQ6IDQ4MHB4O1xyXG4gICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQ4OHB4KTsgICBcclxuICAgICAgIGhlaWdodDogNTIwcHg7XHJcbiAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICBib3JkZXI6IDJweCBzb2xpZCBzZWFncmVlbjsgXHJcbiAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgLyogYWxpZ24tY29udGVudDogZmxleC1zdGFydDsgKi9cclxuICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAudG9vbE5hdntcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBtYXJnaW4tdG9wOiAtNDUwcHg7XHJcbiAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAvKiB3aWR0aDogMzAwcHg7ICovXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC50b29sc0JveHh4eHh4eHh4eHh4eHh4eHh4eCB7XHJcbiAgICAgICAgLyogbWFyZ2luLWxlZnQ6IDBweDsgKi9cclxuICAgICAgICB3aWR0aDogMzgwcHggO1xyXG4gICAgICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgY2hhcnRyZXVzZTtcclxuICAgICAgICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOyAqL1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIC5kaXZ2IHtcclxuICAgICAgICAvKiBtaW4td2lkdGg6IDI4MHB4OyAgKi9cclxuICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiKDcxLCA0NiwgMTM5KTtcclxuICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIEBtZWRpYShtaW4td2lkdGg6IDM4MHB4KSB7XHJcbiAgICBcclxuICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuaW1nRnJvbnQge1xyXG4gICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICBoZWlnaHQ6IDEwMCU7IFxyXG4gICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgei1pbmRleDowXHJcbiAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmltZ0JhY2sge1xyXG4gICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXHJcbiAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA0LCAzMiwgODMpO1xyXG4gICAgICAgYm9yZGVyOiAxcHggc29saWQgc2VhZ3JlZW47IFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY29sb3JCdXR0b24ge1xyXG4gICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgZGl2LmNvbG9yQm94IGRpdjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3Nzc7XHJcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY29sb3JDb250ZWluZXJ7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY29sb3JCb3gge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgKi9cclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICBib3gtc2hhZG93OiA1cHggMTBweCAxOHB4ICM4ODg4ODg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFtyb2xlPVwib3B0aW9uXCJdIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICBtYXJnaW46IDVweDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgXHJcbiAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgYm9yZGVyOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICAjY2FudmFzIHtcclxuICAgICAgYm9yZGVyOiAycHggZGFzaGVkICNjY2NjY2M7XHJcbiAgICB9XHJcbiAgICAubWFpbi10aXRsZXtcclxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIH1cclxuICAgIC5pbWFnZXMtaXRlbSB7XHJcbiAgICAgIHdpZHRoOiA0OCU7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNXMgZWFzZTtcclxuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNXMgZWFzZTtcclxuICAgICAgcGFkZGluZzogM3B4O1xyXG4gICAgICBtYXgtd2lkdGg6IDEyMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuaW1hZ2VzLWl0ZW06aG92ZXIge1xyXG4gICAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5pbWFnZXMtaXRlbS11cGxvYWQge1xyXG4gICAgICB3aWR0aDogODAlO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IC41cyBlYXNlO1xyXG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IC41cyBlYXNlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuaW1hZ2VzLWl0ZW0tdXBsb2FkOmhvdmVyIHtcclxuICAgICAgb3BhY2l0eTogMC43O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY3VzdG9tLWl0ZW0ge1xyXG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2YzZjNmMztcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmN1c3RvbS1pdGVtIC5jdXN0b20taXRlbS10aXRsZSB7XHJcbiAgICAgIGNvbG9yOiAjNjY2NjY2O1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY3VzdG9tLWl0ZW0gLmN1c3RvbS1pdGVtLWJvZHkge1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5tYXgtaGVpZ2h0e1xyXG4gICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgbWF4LWhlaWdodDogMzAwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jYW52YXN7XHJcbiAgICAgIHRvcDogMzBweDtcclxuICAgICAgbGVmdDogMzBweDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuaW1nQm94IHtcclxuICAgICAgdG9wOiAzMHB4O1xyXG4gICAgICAvKiBsZWZ0OiA0MCU7ICovXHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgd2lkdGg6IDM4MHB4OyBcclxuICAgICAgaGVpZ2h0OiA0ODBweDsgXHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgXHJcbiAgICAgIC8qIGZsZXg6IDE7ICovXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC50YWJCb3gge1xyXG4gICAgIHBhZGRpbmctdG9wOiAxMjBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnRhYkJveE5hdntcclxuICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBcclxuICAgIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SideDesignComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-side-design',
                templateUrl: './side-design.component.html',
                styleUrls: ['./side-design.component.css']
            }]
    }], function () { return []; }, { canvas: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['canvas', { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    backend_url: 'http://localhost:5000'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var materialize_css_dist_js_materialize_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! materialize-css/dist/js/materialize.js */ "./node_modules/materialize-css/dist/js/materialize.js");
/* harmony import */ var materialize_css_dist_js_materialize_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(materialize_css_dist_js_materialize_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Angular\LAST_VERSION_OF_T-SHIRT\Copy of origin project T-shirt_last\t-shirt\t-shirt-backend\client\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!***********************!*\
  !*** jsdom (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!********************************************************!*\
  !*** jsdom/lib/jsdom/living/generated/utils (ignored) ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!***************************************!*\
  !*** jsdom/lib/jsdom/utils (ignored) ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map