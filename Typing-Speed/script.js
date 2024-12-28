const input = document.querySelector(".wrapper .input-field");
const TypingText = document.querySelector(".typing-text p");
const Time = document.querySelector(".time span b");
const Mistakes = document.querySelector(".mistakes span");
const Wpm = document.querySelector(".wpm span");
const Cpm = document.querySelector(".cpm span");
const btn = document.querySelector("button");
//set values
let timer;
let maxTime = 60;
let timeLeft = maxTime;
let charIndex = 0;
let mistake = 0;
let isTyping = false;

function loadParagraph() {
  const paragraphs = [
    "The sun dipped below the horizon, casting a warm orange glow across the sky. Birds chirped softly as the world slowly quieted down for the night. Somewhere in the distance, a dog barked, echoing through the calm evening air.",
    "Technology has transformed the way we communicate, from handwritten letters to instant messages. With each advancement, the world becomes smaller, and people from different corners of the globe can connect in an instant, sharing ideas and experiences.",
    "She walked through the dense forest, her footsteps muffled by the soft carpet of leaves. Sunlight filtered through the canopy above, creating patches of light on the ground. The scent of pine filled the air, refreshing and invigorating.",
    "Ancient civilizations left behind artifacts that tell the story of humanity's early days. From cave paintings to the pyramids of Egypt, these remnants remind us of our collective past and the incredible achievements of those who came before us.",
    "In the bustling city, life moves at a breakneck pace. Cars honk, people rush to their destinations, and buildings tower over the streets below. Yet, amidst the chaos, there are pockets of peace: a quiet cafe, a small park, a moment of solitude.",
    "Rain fell softly, creating ripples in the puddles that dotted the street. People hurried by, umbrellas in hand, their footsteps splashing through the water. The city took on a reflective quality, as if the rain had washed away its usual hurried nature.",
    "The library was a haven of knowledge, with shelves stretching from floor to ceiling. The scent of old books filled the air, and there was a calmness in the quiet sound of pages turning. It was a place where time seemed to slow down, allowing thoughts to flourish.",
    "Across the globe, cultures vary in ways that are both subtle and profound. From food to language to customs, each society has its own unique identity. Despite these differences, the shared experiences of joy, love, and resilience bind humanity together.",
    "The ocean waves crashed against the shore, pulling at the sand and carrying it back into the depths. Seagulls soared overhead, their cries mixing with the sound of the surf. The vastness of the sea was both humbling and inspiring.",
    "In the heart of the desert, the heat was relentless. Sand stretched as far as the eye could see, and waves of heat distorted the horizon. It was a place of stark beauty, where survival demanded respect and resilience.",
    "As she opened the old wooden door, the scent of vanilla and cinnamon wafted out, wrapping her in a warm embrace. Inside, shelves were lined with jars of spices, herbs, and teas, each promising its own unique journey for the senses.",
    "Mountains loomed on the horizon, their peaks capped with snow. A river wound its way through the valley below, shimmering in the sunlight. Nature's grandeur lay all around, a reminder of the Earth's enduring power and beauty.",
    "The city park was alive with activity. Children laughed as they played on the swings, dogs barked excitedly, and joggers passed by with rhythmic strides. Amidst it all, a group of artists sketched, capturing the vibrancy of the scene.",
    "The castle stood tall on the cliffside, a silent guardian watching over the village below. Its stone walls had withstood the test of time, bearing witness to countless stories of bravery, betrayal, and love.",
    "Winter descended upon the town, blanketing it in a layer of snow. Chimneys puffed out wisps of smoke, and windows glowed warmly, hinting at the life within. It was a season of quiet reflection, where nature took a moment to rest.",
    "Music filled the air, a blend of strings and piano that created a soothing melody. The audience sat in rapt attention, each note resonating within them. In that moment, words were unnecessary; only the beauty of sound mattered.",
    "The marketplace was a swirl of colors and sounds, with vendors calling out to customers and the aroma of fresh spices filling the air. Stalls displayed fruits, textiles, and trinkets, each one a small window into the region's culture.",
    "As the plane ascended, the city below became a patchwork quilt of lights. Rows of buildings and streets shrank until they resembled a miniature model. It was a humbling sight, a reminder of how small we are in the grand scheme of things.",
    "In the early morning fog, the world felt like a dream. Trees were shrouded in mist, and the sound of birds was muffled, as if nature itself were still waking up. It was a magical time, brief but filled with quiet wonder.",
    "Underneath the starry sky, he felt a profound sense of peace. The night was quiet, with only the sound of the wind rustling the leaves. Looking up at the stars, he felt connected to the universe, a small part of something much larger.",
  ];

  let random = Math.floor(Math.random() * paragraphs.length);
  TypingText.innerHTML = "";

  for (const charIndex of paragraphs[random]) {
    TypingText.innerHTML += `<span>${charIndex}</span>`;
  }
  TypingText.querySelectorAll("span")[0].classList.add("active");
  document.addEventListener("keydown", ()=>input.focus());
  TypingText.addEventListener("click",()=>input.focus())
}

function initTyping() {
  const char = TypingText.querySelectorAll("span");

  const TypedChar = input.value.charAt(charIndex);
  if (charIndex < char.length && timeLeft > 0) {

if(!isTyping){
    timer= setInterval(initTime,1000);
    isTyping = true;
}


    if (char[charIndex].innerText === TypedChar) {
      char[charIndex].classList.add("correct");
      console.log("correct")
    } 
    else {
        mistake++;
      char[charIndex].classList.add("incorrect");
      console.log("incorrect")
    };

    charIndex++;
    char[charIndex].classList.add("active");
    Mistakes.innerText = mistake;
    Cpm.innerText = charIndex - mistake;
  }
  else{
clearInterval( timer);
input.value = '';
  }
}

function initTime(){
    if(timeLeft>0){
        timeLeft--;
        Time.innerHTML = timeLeft;
        const wpm = Math.round(((charIndex - mistake)/5) /(maxTime - timeLeft)*60);
        Wpm.innerText = wpm;
    }
    else{
        clearInterval(timer);
    }
}
function reset(){
    loadParagraph();
    clearInterval(timer);
    timeLeft= maxTime;
    Time.innerHTML = timeLeft;
    input.value = '';
 charIndex = 0;
 mistake = 0;
 isTyping = false;
 Wpm.innerText = 0;
 Cpm.innerText = 0;
 Mistakes.innerText = 0;

}

input.addEventListener("input", initTyping);
btn.addEventListener("click",reset);
loadParagraph();
