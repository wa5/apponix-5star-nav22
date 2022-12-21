function game(){
    var random=Math.random()*6+1
    random= Math.floor(random)
  var div= document.getElementById('root')as HTMLDivElement
  div.innerHTML=`${random}`
}