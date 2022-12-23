function totalbill(arry) {
    var total = arry.reduce(function (a, b) { return a + b; }, 0);
    console.log(total);
}
var lateamount = setTimeout(function () { return 500; }, 2000);
totalbill([100, 200, lateamount]);
