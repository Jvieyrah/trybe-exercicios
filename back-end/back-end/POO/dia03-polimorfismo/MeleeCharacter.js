"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var character_1 = require("./character");
var MeleeCharacter = /** @class */ (function (_super) {
    __extends(MeleeCharacter, _super);
    function MeleeCharacter(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        name = _this.name;
        return _this;
    }
    MeleeCharacter.prototype.talk = function () {
        console.log("I'm ".concat(this.name, ", a melee character"));
    };
    MeleeCharacter.prototype.specialMove = function () {
        console.log("".concat(this.name, " uses a special move"));
    };
    return MeleeCharacter;
}(character_1.default));
exports.default = MeleeCharacter;
