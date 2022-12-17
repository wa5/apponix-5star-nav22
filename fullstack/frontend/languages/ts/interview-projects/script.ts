
var mydata:any[]=[]
function ucv(){
    var userdata=(document.getElementById('root') as HTMLInputElement).value
    mydata.push(userdata)
    console.log(mydata)
   // document.write(userdata)
 

   mydata.map((val)=>{
    h1creator(val)
   })
}

function h1creator(myval){
    var h1=document.createElement('h1')
    h1.innerHTML=myval
    document.getElementById('root2')?.appendChild(h1)
}
