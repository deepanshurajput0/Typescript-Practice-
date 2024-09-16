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
        this.height = height;
        this.weight = weight;
        this.power = power;
    }
    Object.defineProperty(Player.prototype, "getHeight", {
        get: function () {
            return this.height;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "changeHeight", {
        set: function (val) {
            this.height = val;
        },
        enumerable: false,
        configurable: true
    });
    return Player;
}());
var deep = new Player(100, 150, 23);
deep.changeHeight = 120;
console.log(deep.getHeight);
var Player2 = /** @class */ (function (_super) {
    __extends(Player2, _super);
    function Player2(height, weight, power, special) {
        var _this = _super.call(this, height, weight, power) || this;
        _this.special = special;
        return _this;
    }
    return Player2;
}(Player));
// const deep2 = new Player2(100,150,23,true)
// console.log(deep2.weight)
// console.log(deep2.special)
