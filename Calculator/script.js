let input = document.getElementById("input");
let buttons = document.querySelectorAll("button");

buttons.forEach(function(elem) {

    elem.addEventListener("mousedown", function() {
        elem.classList.add("active");
    });

    elem.addEventListener("mouseup", function() {
        elem.classList.remove("active");
    });

    elem.addEventListener("click", function(e) {
        if (e.target.textContent === "C") {
            input.innerText = "";
        }
        else if (e.target.textContent === "<") {
            input.innerText = input.innerText.slice(0, -1);
        }
        else if (e.target.textContent === "=") {
            input.innerText = eval(input.innerText);
        }
        else {
            input.innerText += e.target.textContent;
        }
        
        input.scrollLeft = input.scrollWidth;
    });
});
