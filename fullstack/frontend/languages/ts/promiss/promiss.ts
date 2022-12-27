var MohihthPrmiss=new Promise((fullfill:Function,notfullfill:Function)=>{

    fullfill('im fullfilled got party')
   // notfullfill('not fullfill')
})

MohihthPrmiss.then((a)=>{console.log(a)}).catch((a)=>{console.log(a)})
console.log()