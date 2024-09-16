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
var Player = /** @class */ (function () {
    function Player(height, weight, power) {
        var _this = this;
        this.height = height;
        this.weight = weight;
        this.power = power;
        this.getHeight = function () {
            return _this.height;
        };
    }
    return Player;
}());
var Player2 = /** @class */ (function (_super) {
    __extends(Player2, _super);
    function Player2(height, weight, power, special) {
        var _this = _super.call(this, height, weight, power) || this;
        _this.special = special;
        return _this;
    }
    return Player2;
}(Player));
var deep2 = new Player2(100, 150, 23, true);
console.log(deep2.weight);
console.log(deep2.special);
