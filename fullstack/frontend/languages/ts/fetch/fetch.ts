var data=fetch('https://fakestoreapi.com/products')
data.then((a)=>{return a.json()}).then((b)=>{console.log(b)})

async function simple(){
    var data1=fetch('https://fakestoreapi.com/products')
    console.log(await(await data1).json())
}
simple()