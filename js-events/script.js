function buttonPressed(){
    // select button:
    let btn = document.querySelector("#buttonOne");

    // color background:
    let randomBlue = Math.random()*255; //random value between 0-255
    btn.style.backgroundColor = 'rgb(90, 200, ' + randomBlue + ')';

    // color text:
    let randomRed = Math.random()*255; //random value between 0-255
    btn.style.color = 'rgb(' + randomRed + ', 100, 200)';
}


function sliderChanged(){
    console.log("the slider changed");
}



function goodNews(text){
    console.log("Good News: " + text);
}






// // Select all buttons and the output area
// let buttons = document.querySelectorAll(".btn");
// let display = document.querySelector("#output");

// // Define what happens when a button is clicked
// function activateButton(elm) {
//   elm.addEventListener("click", function() {
//     display.innerText = "You said: " + elm.innerText;
//   });
// }

// // Attach to each button
