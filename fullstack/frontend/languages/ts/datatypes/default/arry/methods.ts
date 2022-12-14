var fruites=['remote','mobile','desktop']
fruites.map((a)=>{
    console.log(a)
})
var myobects=[
    {a:'apple',b:"boll"},
    {a:'apple',b:"boll",c:'cat'},
    {a:'apple',b:"boll",d:'dog'}]
   console.log(myobects.find((item)=>
    item.c=='cat')) 
    console.log(myobects.filter((item)=>
    item.c=='cat')) 
