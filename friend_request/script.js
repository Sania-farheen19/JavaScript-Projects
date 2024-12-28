var istatus = document.querySelector("h5");
 var addFriend = document.querySelector("#add");
 var btn = document.querySelector("button")

 var check =0;
 addFriend.addEventListener("click",function()
 {
    if(check ==0){
    istatus.innerHTML = "Friends";
    istatus.style.color="green";
     addFriend.innerHTML = "Remove Friend";
     addFriend.style.backgroundColor = "gray";

    check=1;
    
 }
 else{
    istatus.innerHTML = "Stranger";
    istatus.style.color="red";
    addFriend.innerHTML = "Add Friend"
    addFriend.style.backgroundColor = "#0091ec";
    check=0;
 }

})

// remove.addEventListener("click",function(){
//     istatus.innerHTML = "Stranger";
//     istatus.style.color="red";
//  })