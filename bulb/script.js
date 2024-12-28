 var bulb = document.querySelector("#box");
 var on = document.querySelector("#on");
 var off = document.querySelector("#off");

  

 var clicked = 0;
 on.addEventListener("click",function(){
    if( clicked == 0){
    bulb.style.backgroundColor = "yellow";
    clicked = 1;
    }
    else{
        off.addEventListener("click",function(){
            bulb.style.backgroundColor = "white";
    clicked = 0;
        })
    }
 })