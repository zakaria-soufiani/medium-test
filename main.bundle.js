webpackJsonp([1,4],{

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_database_service__ = __webpack_require__(335);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DatabaseComponent = (function () {
    function DatabaseComponent(database) {
        this.database = database;
        this.people = [];
    }
    DatabaseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.database.getInfo("").subscribe(function (data) { return _this.people = data; });
    };
    DatabaseComponent.prototype.refresh = function () {
        var _this = this;
        this.database.getInfo("").subscribe(function (data) { return _this.people = data; });
    };
    DatabaseComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-database',
            template: __webpack_require__(561),
            styles: [__webpack_require__(555)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_database_service__["a" /* DatabaseService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_database_service__["a" /* DatabaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_database_service__["a" /* DatabaseService */]) === 'function' && _a) || Object])
    ], DatabaseComponent);
    return DatabaseComponent;
    var _a;
}());
//# sourceMappingURL=database.component.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_database_service__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FormsComponent = (function () {
    function FormsComponent(database) {
        this.database = database;
    }
    FormsComponent.prototype.ngOnInit = function () {
    };
    FormsComponent.prototype.createPerson = function (lastName, firstName, email, comments, option) {
        var lastname = { lastName: lastName };
        var firstname = { firstName: firstName };
        var Email = { email: email };
        var Comments = { comments: comments };
        var Option = { options: option };
        this.database.createPerson(lastname, firstname, Email, Comments, Option).subscribe(function (data) {
            return true;
        }, function (error) {
            console.error("Error creating item");
            return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error);
        });
    };
    FormsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-forms',
            template: __webpack_require__(562),
            styles: [__webpack_require__(556)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_database_service__["a" /* DatabaseService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_database_service__["a" /* DatabaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_database_service__["a" /* DatabaseService */]) === 'function' && _a) || Object])
    ], FormsComponent);
    return FormsComponent;
    var _a;
}());
//# sourceMappingURL=forms.component.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__(563),
            styles: [__webpack_require__(557)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DatabaseService = (function () {
    function DatabaseService(http) {
        this.http = http;
        /// REPLACE WITH SPECIFIC URL FROM THE API DEPLOYED ///
        this.API_URL = 'https://vwabl3g6ig.execute-api.us-east-1.amazonaws.com/dev/form/';
    }
    DatabaseService.prototype.createPerson = function (lastName, firstName, email, comments, option) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var INFO = Object.assign(lastName, firstName, email, comments, option);
        var body = JSON.stringify(INFO);
        return this.http.post(this.API_URL, body, options).map(function (res) { return res.json(); });
    };
    DatabaseService.prototype.getInfo = function (id) {
        return this.http.get(this.API_URL + id)
            .map(function (res) { return res.json(); });
    };
    DatabaseService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object])
    ], DatabaseService);
    return DatabaseService;
    var _a;
}());
//# sourceMappingURL=database.service.js.map

/***/ }),

/***/ 377:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 377;


/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(500);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(560),
            styles: [__webpack_require__(554)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__navbar_navbar_component__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__database_database_component__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__forms_forms_component__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing__ = __webpack_require__(498);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__database_database_component__["a" /* DatabaseComponent */],
                __WEBPACK_IMPORTED_MODULE_8__forms_forms_component__["a" /* FormsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_9__app_routing__["a" /* routing */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__database_database_component__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forms_forms_component__ = __webpack_require__(333);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });




var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'forms', component: __WEBPACK_IMPORTED_MODULE_3__forms_forms_component__["a" /* FormsComponent */] },
    { path: 'database', component: __WEBPACK_IMPORTED_MODULE_1__database_database_component__["a" /* DatabaseComponent */] }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__(564),
            styles: [__webpack_require__(558)]
        }), 
        __metadata('design:paramtypes', [])
    ], NavbarComponent);
    return NavbarComponent;
}());
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 554:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(64)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 555:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(64)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 556:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(64)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 557:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(64)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 558:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(64)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 560:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"main\">\n  <div class=\"container\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ 561:
/***/ (function(module, exports) {

module.exports = "<h2>Display the contents of the database</h2>\n<br>\n<div>\n  <table class=\"table table-striped table-hover\">\n    <thead>\n    <tr>\n      <th>First Name</th>\n      <th>Last Name</th>\n      <th>Email</th>\n      <th>Comments</th>\n      <th>Preference</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let person of people\" >\n      <td class=\"vert-align\">{{person.lastName}}</td>\n      <td class=\"vert-align\">{{person.firstName}}</td>\n      <td class=\"vert-align\">{{person.email}}</td>\n      <td class=\"vert-align\">{{person.comments}}</td>\n      <td class=\"vert-align\">{{person.options}}</td>\n    </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ 562:
/***/ (function(module, exports) {

module.exports = "<form class=\"form-horizontal\" #f=\"ngForm\">\n  <fieldset>\n    <legend>Input information</legend>\n    <p>Do not enter private information as this domain is public and only for learning purposes !</p>\n    <div class=\"form-group\">\n      <label class=\"col-lg-2 control-label\">First Name</label>\n      <div class=\"col-lg-10\">\n        <input type=\"text\" class=\"form-control\" name=\"inputFirstName\"\n               placeholder=\"First Name\" required [(ngModel)]=\"new_firstName\" #FirstName=\"ngModel\">\n        <div *ngIf=\"FirstName.errors && (FirstName.dirty || FirstName.touched)\"\n             class=\"alert alert-danger\">\n          <div [hidden]=\"!FirstName.errors.required\">\n            First Name is required\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"col-lg-2 control-label\">Last Name</label>\n      <div class=\"col-lg-10\">\n        <input type=\"text\" class=\"form-control\" name=\"inputLastName\"\n               placeholder=\"Last Name\" [(ngModel)]=\"new_lastName\" #LastName=\"ngModel\" required>\n        <div *ngIf=\"LastName.errors && (LastName.dirty || LastName.touched)\" class=\"alert alert-danger\">\n          <div [hidden]=\"!LastName.errors.required\">\n            Last Name is required\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"col-lg-2 control-label\">Email</label>\n      <div class=\"col-lg-10\">\n        <input type=\"email\" class=\"form-control\" name=\"inputEmail\"\n               placeholder=\"Email\" [(ngModel)]=\"new_email\" #email=\"ngModel\" required>\n        <div *ngIf=\"email.errors && (email.dirty || email.touched)\" class=\"alert alert-danger\">\n          <div [hidden]=\"!email.errors.required\">\n            Email is required\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"col-lg-2 control-label\">Comments</label>\n      <div class=\"col-lg-10\">\n        <textarea class=\"form-control\" rows=\"3\" name=\"textArea\" [(ngModel)]=\"new_comments\"\n                  #comments=\"ngModel\" placeholder=\"Enter comments here\" required></textarea>\n        <div *ngIf=\"comments.errors && (comments.dirty || comments.touched)\"\n             class=\"alert alert-danger\">\n          <div [hidden]=\"!comments.errors.required\">\n            Comments are required\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"col-lg-2 control-label\">I prefer</label>\n      <div class=\"col-lg-10\">\n        <div class=\"radio\">\n          <label>\n            <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios1\"\n                   value=\"Spaces\" [(ngModel)]=\"new_options\" #radio=\"ngModel\" required>\n            Spaces\n          </label>\n        </div>\n        <div class=\"radio\">\n          <label>\n            <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios2\"\n                   value=\"Tabs\" [(ngModel)]=\"new_options\" #radio=\"ngModel\" required>\n            Tabs\n          </label>\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <div class=\"col-lg-10 col-lg-offset-2\">\n        <button type=\"reset\" class=\"btn btn-default\" (click)=\"f.reset()\">Cancel</button>\n        <button type=\"submit\" class=\"btn btn-primary\"\n                (click)=\"createPerson(new_lastName, new_firstName,\n                new_email, new_comments, new_options); f.reset()\"\n                [disabled]=\"!f.form.valid\">Submit</button>\n      </div>\n    </div>\n  </fieldset>\n</form>\n"

/***/ }),

/***/ 563:
/***/ (function(module, exports) {

module.exports = "<h2>Angular forms example</h2>\n<p>This app is built using angular, AWS Lambda in Python and DynamoDB</p>\n<p>Use the navbar to navigate to the <strong>Forms</strong> page and enter 'dummy' information.</p>\n<p>The information entered is stored in a DynamoDB database then displayed in a table on the <strong>Database</strong> page.</p>\n<br>\n<p>You can access the guide that explains how to build an app similar to this one\n  <a href=\"https://medium.com/@mz.soufiani/basic-angular-forms-app-with-aws-serverless-backend-in-python-part-2-227f08150c9c\">here</a> !</p>\n<p>The Github repo with all the code can also be accessed:</p>\n<ul>\n  <li><a href=\"https://github.com/zakaria-soufiani/inputform-backend\" target=\"_blank\">Backend</a></li>\n  <li><a href=\"https://github.com/zakaria-soufiani/medium-test\" target=\"_blank\">Frontend</a></li>\n</ul>\n"

/***/ }),

/***/ 564:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\"\n              data-toggle=\"collapse\" data-target=\"#navbar\"\n              aria-expanded=\"false\" aria-controls=\"navbar\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" routerLink=\"/home\" routerLinkActive=\"active\">Angular Forms</a>\n    </div>\n    <div id=\"navbar\" class=\"collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li><a routerLink=\"/home\" routerLinkActive=\"active\">Home</a></li>\n        <li><a routerLink=\"/forms\" routerLinkActive=\"active\">Forms</a></li>\n        <li><a routerLink=\"/database\" routerLinkActive=\"active\">Database</a></li>\n      </ul>\n    </div><!--/.nav-collapse -->\n  </div>\n</nav>\n"

/***/ }),

/***/ 830:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(378);


/***/ })

},[830]);
//# sourceMappingURL=main.bundle.js.map