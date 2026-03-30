

function startButton(){
    console.log("button works!");

    document.querySelector("#firstButton").remove();
    document.body.style.backgroundColor = "black";
    let textBox =  document.querySelector("#gibberishBox");
    textBox.style.display = "block";
    let text =  document.querySelector("#gibberishBox p");
    text.classList.add("animateLetters");
}

function button2(){
    let spans = document.querySelectorAll(".isaiddont");
    spans.forEach(addIsaidDontToSpan);
}
function addIsaidDontToSpan(spanElement){
    spanElement.innerText = "I SAID DO NOT!"
}