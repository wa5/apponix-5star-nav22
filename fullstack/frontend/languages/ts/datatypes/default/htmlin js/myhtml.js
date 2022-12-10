var _a, _b, _c, _d, _e;
var myflipkartitems = [{
        img: '../../../tedy.jpg',
        tittle: 'teddybear',
        discount: 'save upto 90%',
        discription: 'lovable tedy bear for kids',
        price: '5000'
    },
    {
        img: '../../../tedy.jpg',
        tittle: 'teddybear',
        discount: 'save upto 90%',
        discription: 'lovable tedy bear for kids',
        price: '5000'
    }];
var img = document.createElement('img');
img.src = myflipkartitems[0].img;
(_a = document.getElementById('root')) === null || _a === void 0 ? void 0 : _a.appendChild(img);
var h1 = document.createElement('h1');
h1.innerHTML = myflipkartitems[0].tittle;
(_b = document.getElementById('root')) === null || _b === void 0 ? void 0 : _b.appendChild(h1);
var h3 = document.createElement('h3');
h3.innerHTML = myflipkartitems[0].discount;
h3.style.color = 'red';
(_c = document.getElementById('root')) === null || _c === void 0 ? void 0 : _c.appendChild(h3);
var h3 = document.createElement('h3');
h3.innerHTML = myflipkartitems[0].discription;
h3.style.color = 'yellow';
(_d = document.getElementById('root')) === null || _d === void 0 ? void 0 : _d.appendChild(h3);
var h3 = document.createElement('h3');
h3.innerHTML = myflipkartitems[0].price;
h3.style.color = 'red';
h3.style.fontSize = '50px';
(_e = document.getElementById('root')) === null || _e === void 0 ? void 0 : _e.appendChild(h3);
