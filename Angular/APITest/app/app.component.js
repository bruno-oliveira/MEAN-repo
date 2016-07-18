"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var http_1 = require('@angular/http');
require('rxjs/Rx');
var CountriesList = (function () {
    function CountriesList(http) {
        var _this = this;
        console.log("Friends are being called");
        http.get('https://restcountries.eu/rest/v1/region/africa')
            .map(function (response) { return response.json(); })
            .subscribe(function (result) { return _this.result = result; });
    }
    CountriesList = __decorate([
        core_1.Component({
            template: "\n    <h1>Countries List</h1>\n    <ul>\n      <li *ngFor=\"#i of result\">\n          {{i.name}}\n      </li>\n    </ul>\n    ",
            directives: [common_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CountriesList);
    return CountriesList;
}());
exports.CountriesList = CountriesList;
//# sourceMappingURL=app.component.js.map