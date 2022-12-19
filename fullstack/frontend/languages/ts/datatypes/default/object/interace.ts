interface Imobile{
    a:string,
    b:string,
    c?:string
}
var mobile:Imobile={
    a:'camera',b:'mic'
}
console.log(mobile)
mobile.c='screen'
console.log(mobile)


//generics
interface Imydata{
a:string,
b:string,
[key:string]:string
}
var mydata:Imydata={
    a:'apple',b:'boll'
}
mydata.abc="jj"
mydata.abc1="jj"

//generic data
interface Imyobj3<USERDATA>{
a:string,
b:string,
c?:USERDATA
}
var myobj3:Imyobj3<number>={
    a:'apple',b:'boll'
}