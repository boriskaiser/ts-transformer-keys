"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../index");
[];
var fooKeys = ["foo"];
console.log(fooKeys[0]);
["foo", "bar"][1];
var fooBarBazKeys = ["bar"];
fooBarBazKeys.forEach(function (key) { return console.log(key); });
index_1.keys.toString();
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    MyClass.prototype.keys = function () {
        return [];
    };
    return MyClass;
}());
