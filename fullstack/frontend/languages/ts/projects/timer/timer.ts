var a=1
var b:any=[]
setInterval(()=>{
    b.push(a)
    console.log("inside state",a++,b)
},1000)
console.log("outsidee",a)