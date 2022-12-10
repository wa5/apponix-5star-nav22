var myflipkartitems=[{
    img:'../../../tedy.jpg',
    tittle:'teddybear',
    discount:'save upto 90%',
    discription:'lovable tedy bear for kids',
    price:'5000'
},
{
    img:'../../../tedy.jpg',
    tittle:'teddybear',
    discount:'save upto 90%',
    discription:'lovable tedy bear for kids',
    price:'5000'
}]
var img=document.createElement('img')
img.src=myflipkartitems[0].img
document.getElementById('root')?.appendChild(img)

var h1=document.createElement('h1')
h1.innerHTML=myflipkartitems[0].tittle
document.getElementById('root')?.appendChild(h1)

var h3=document.createElement('h3')
h3.innerHTML=myflipkartitems[0].discount
h3.style.color='red'
document.getElementById('root')?.appendChild(h3)

var h3=document.createElement('h3')
h3.innerHTML=myflipkartitems[0].discription
h3.style.color='yellow'
document.getElementById('root')?.appendChild(h3)

var h3=document.createElement('h3')
h3.innerHTML=myflipkartitems[0].price
h3.style.color='red'
h3.style.fontSize='50px'
document.getElementById('root')?.appendChild(h3)



