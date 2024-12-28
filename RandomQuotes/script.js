const btn = document.getElementById("btn");
const lower = document.querySelector(".lower");

let quotes = ["'Character is power'","'The only impossible journey is the one you never begin'","'Winning is not everything,but wanting to win is'","'Believe you can and you are halfway there'","'The only approval you need is your own'","'Life is either a daring adventure or nothing'","'Life is not about finding yourself.Life is about creating yourself'","'The secret of getting ahead is getting started'"];

btn.addEventListener("click",()=>{
    
    let random = Math.floor(Math.random()*quotes.length)
    
    lower.textContent = quotes[random];
    
})