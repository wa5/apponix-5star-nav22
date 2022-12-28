var Bottel = /** @class */ (function () {
    function Bottel() {
        this.cap = true;
        this.color = 'white';
        this.height = "5inch";
    }
    Bottel.prototype.withbottel = function () {
        console.log('we strore wateer');
    };
    Bottel.prototype.withcap = function () {
        console.log('we preserve water');
    };
    return Bottel;
}());
var samsung = new Bottel();
samsung.withbottel();
samsung.withcap();
