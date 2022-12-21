function days(){
    var random=Math.floor(Math.random()*7+1)
    var div=document.getElementById('root')as HTMLDivElement
   // div.innerHTML=random as any
    // if(random==1){
    //     div.innerHTML='monday' 
    // }
    // if(random==2){
    //     div.innerHTML='tusday' 
    // }
    // if(random==3){
    //     div.innerHTML='wednesday' 
    // }
    // if(random==4){
    //     div.innerHTML='thirsday' 
    // }
    // if(random==5){
    //     div.innerHTML='friday' 
    // }
    // if(random==6){
    //     div.innerHTML='saturday' 
    // }

    switch(random){
        case 1:
            div.innerHTML='monday' ;
            break;
            case 2:
                div.innerHTML='tusday' 
            break;
            case 3:
                div.innerHTML='wednesday' 
            break;
            case 4:
            div.innerHTML='thirsday' ;
            break;
            case 5:
            div.innerHTML='friday' ;
            break;
            case 6:
            div.innerHTML='saturday' ;
            break;
            case 7:
            div.innerHTML='sunday' ;
            break;
    }
}