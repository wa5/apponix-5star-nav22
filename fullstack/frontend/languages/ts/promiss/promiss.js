var MohihthPrmiss = new Promise(function (fullfill, notfullfill) {
    fullfill('im fullfilled got party');
    // notfullfill('not fullfill')
});
MohihthPrmiss.then(function (a) { console.log(a); });
MohihthPrmiss["catch"](function (a) { console.log(a); });
console.log();
