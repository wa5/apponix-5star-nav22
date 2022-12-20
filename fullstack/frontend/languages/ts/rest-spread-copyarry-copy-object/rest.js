function giftTaker(a, b, c) {
    var d = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        d[_i - 3] = arguments[_i];
    }
    console.log(a, b, c, d);
}
giftTaker(100, 200, 300);
giftTaker(100, 200, 300, 400, 600);
giftTaker(100, 200, 300, 400, 600, 700, 800);
