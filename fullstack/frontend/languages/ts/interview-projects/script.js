var mydata = [];
function ucv() {
    var userdata = document.getElementById('root').value;
    mydata.push(userdata);
    console.log(mydata);
    // document.write(userdata)
    mydata.map(function (val) {
        h1creator(val);
    });
}
function h1creator(myval) {
    var _a;
    var h1 = document.createElement('h1');
    h1.innerHTML = myval;
    (_a = document.getElementById('root2')) === null || _a === void 0 ? void 0 : _a.appendChild(h1);
}
