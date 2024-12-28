const questions = [
  {
      question: "What is the capital of Japan?",
      options: [ "Seoul", "Tokyo","Beijing", "Bangkok"],
      correct: "Tokyo"
  },
  {
      question: "What is the smallest prime number?",
      options: ["0", "1", "2", "3"],
      correct: "2"
  },
  {
      question: "Which planet is closest to the sun?",
      options: [ "Venus", "Earth", "Mars","Mercury"],
      correct: "Mercury"
  },
  {
      question: "Who developed the theory of relativity?",
      options: [ "Isaac Newton","Albert Einstein", "Nikola Tesla", "Galileo Galilei"],
      correct: "Albert Einstein"
  },
  {
      question: "What is the chemical formula for water?",
      options: ["H2O", "CO2", "O2", "CH4"],
      correct: "H2O"
  },
  {
      question: "What is the highest mountain in the world?",
      options: [ "K2", "Kangchenjunga","Mount Everest", "Lhotse"],
      correct: "Mount Everest"
  },
  {
      question: "What is the largest mammal on Earth?",
      options: ["Blue Whale", "Elephant", "Giraffe", "Hippopotamus"],
      correct: "Blue Whale"
  },
  {
      question: "What is the currency of the United States?",
      options: [ "Euro", "Yen", "Pound","Dollar"],
      correct: "Dollar"
  },
  {
      question: "Who painted the Starry Night?",
      options: [ "Claude Monet", "Pablo Picasso","Vincent van Gogh", "Leonardo da Vinci"],
      correct: "Vincent van Gogh"
  },
  {
      question: "What is the freezing point of water in Celsius?",
      options: [ "32°C","0°C", "100°C", "273°C"],
      correct: "0°C"
  }
];

  

let currentQuestionIdx = 0;
let score = 0;



const questionElem = document.querySelector(".question");
const optionsElems = document.querySelectorAll(".option");
const scoreElem =  document.querySelector(".score");

const loadQuestion =()=>{
    const currentQuestion = questions[currentQuestionIdx];
    questionElem.innerText = currentQuestion.question;
    optionsElems.forEach((button,index)=>{
        // console.log(button,index);
        button.textContent = currentQuestion.options[index];
        button.onclick =()=>{ 
            checkAnswer(button.textContent);
            
        }
        })

    }


const checkAnswer = (selectedOption) => {
  

    let correctAns = questions[currentQuestionIdx].correct;

    if(selectedOption === correctAns){
        score++;
       
    
    }
    currentQuestionIdx++;
    if(currentQuestionIdx < questions.length){
        loadQuestion();
    }
    else{
        endQuiz();

    }
    updateScore();
}

const updateScore = () =>{
    scoreElem.textContent = `Score: ${score}`;
}
const endQuiz = ()=>{
    questionElem.textContent = `Quiz Over! Your total score is ${score}`;
    questionElem.style.fontSize = "30px";
    questionElem.style.backgroundColor = "#759344";
    scoreElem.style.display = "none";
    optionsElems.forEach(button => button.style.display = "none");
}

loadQuestion();