let button = document.querySelector(".sign-btn");
let button2 = document.querySelector(".sign-btn2");
let title = document.querySelector(".call-head");
let text = document.querySelector(".call-text");

button.addEventListener("click", thankFunc);
button2.addEventListener("click", thankFunc);

function thankFunc() {
    title.textContent = "SIKE!"
    text.textContent = "It doesn't do anything"
}

/------------------------------/

let answer = 2 + 32 + 234 + 2 + 2 + 4;

let log = document.querySelector(".quote");

log.addEventListener("click", displayAnswer)

function displayAnswer() {
    log.textContent = answer;
}