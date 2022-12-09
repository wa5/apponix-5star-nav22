function givemony(){
    var a=1
    return a++
}
var calling=givemony()
console.log(calling)
console.log(calling)
function* givemony2(){
    var a=1
yield 1
yield 2
yield 3
}
var inmemory=givemony2()
console.log(inmemory.next())
console.log(inmemory.next())
console.log(inmemory.next())
console.log(inmemory.next())