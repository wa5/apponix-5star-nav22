// // var myfun = function () { console.log('testing im working') };
// // console.log(myfun);
// // myfun();
// // (() => { console.log('testing im working fate arrow') })()
// // var a = () => { }
// // var j: string
// // var n: number
// // var j1: string[]
// // var mufun2: () => string
// // mufun2 = () => { return 'shshhs' }
// // (() => { return 'hi youhan' })()
// var child = (a:number) => {console.log(a) }
// var parent1 = (childerns: (a:number) => void) => { 
//     console.log(childerns)
//     var mynum=12345
//     childerns(mynum)
//     return childerns
//  }
// parent1(child)
var j = function () {
    var myval = 123445;
    var exp = function () {
        console.log(myval);
    };
    return exp;
};
console.log(j());
var myfun = j();
myfun();
