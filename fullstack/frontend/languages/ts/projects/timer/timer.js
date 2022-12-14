var a = 1;
var b = [];
setInterval(function () {
    b.push(a);
    console.log("inside state", a++, b);
}, 1000);
console.log("outsidee", a);
