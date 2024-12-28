let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg =  document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

// 2. gererating computer choice
const genCompChoice = ()=>{

    const options = ["rock","paper","scissors"];
    let randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

// 4. game draw
const drawGame = () => {
msg.innerText = "Game was draw.";
msg.style.backgroundColor = "#ffab2a";
}

// 5. displaying the winner and increasing the score

const showWinner = (userWin,userChoice,compChoice) =>{
   if(userWin){
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Won!!!  your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
   }
   else{
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost ! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";

   }
}
// 3. playing the game

const playGame = (userChoice)=>{

    const compChoice = genCompChoice();//2
    console.log("comp",compChoice);
    if(userChoice === compChoice){
        drawGame();  //4
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            // comp paper,scissors
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            userWin = compChoice === "rock"? false : true;
        }
        showWinner(userWin,userChoice,compChoice); //5

    }

}

// 1. selecting the user choice

choices.forEach((choice)=>{
choice.addEventListener("click",()=>{
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
})
})
