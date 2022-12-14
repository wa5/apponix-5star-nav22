var fruites = ['remote', 'mobile', 'desktop'];
fruites.map(function (a) {
    console.log(a);
});
var myobects = [
    { a: 'apple', b: "boll" },
    { a: 'apple', b: "boll", c: 'cat' },
    { a: 'apple', b: "boll", d: 'dog' }
];
console.log(myobects.find(function (item) {
    return item.c == 'cat';
}));
console.log(myobects.filter(function (item) {
    return item.c == 'cat';
}));
