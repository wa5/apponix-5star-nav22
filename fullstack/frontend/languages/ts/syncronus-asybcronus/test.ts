function totalbill(arry){
var total=arry.reduce((a,b)=>{return a+b},0)
console.log(total)
}
var lateamount=setTimeout(()=>{return 500},2000)  
totalbill([100,200,lateamount])