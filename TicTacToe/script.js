let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let turnO = true;//playerX,playerO
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

 let winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        // console.log("box cicked");
        if(turnO){
            box.innerText = "O";//playerO
            box.style.color = "#be0707";
            turnO = false;
        }
        else{
            box.innerText = "X"; //playerX
            box.style.color = "#2324a4";

            turnO = true;
        
        }
        box.disabled = true;
        checkWinner();
    });

});

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}


const showWinner = (winner) =>{
    if(winner ==="X"){
        msg.textContent = `Congratulations, Winner is ${winner}`;
        msg.style.color = "#2324a4";
     msgContainer.classList.remove("hide");
     disableBoxes();
    }
    else{
    msg.textContent = `Congratulations, Winner is ${winner}`;
    msg.style.color = "#be0707";
     msgContainer.classList.remove("hide");
     disableBoxes();
    }
}
// const noWinner = () =>{
//     msg.textContent = "No Winner";
// }
const checkWinner = () => {
    for(let pattern of winPatterns){
        // console.log(pattern[0],pattern[1],pattern[2]);
      let pos1Val = boxes[pattern[0]].innerText;
      let pos2Val = boxes[pattern[1]].innerText;
      let pos3Val = boxes[pattern[2]].innerText;

      if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
        if(pos1Val == pos2Val && pos2Val == pos3Val){
            // console.log("winner",pos1Val);
            showWinner(pos1Val);
        }
        // else{
        //     noWinner();
        // }
      }
    }

}
newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);



