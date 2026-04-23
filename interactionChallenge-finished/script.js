// old code:
function spanHovered(eventInfo){
    console.log("hello");

    let btn  = document.querySelector("button");

    eventInfo.target.style.color = "red";
    let randomX = Math.random()*200-100; // -100 to 100
    let randomY = Math.random()*200-100; // -100 to 100
    eventInfo.target.style.transform = "translate(" + randomX + "px, " + randomY + "px)";
}

function addMover(element){
    element.addEventListener("mouseover", spanHovered);
}

let allSpans = document.querySelectorAll("span");
allSpans.forEach(addMover)






window.addEventListener("scroll", function(){
    let percentage = getScrollPercentage();

    let firstLetter = document.querySelector("span:nth-child(1)")
    console.log("firstLetter", firstLetter);
    let max_y = 140;
    let y_offset = (1-(percentage/100))*max_y;
    firstLetter.style.top = y_offset + "px";

    let secondLetter = document.querySelector("span:nth-child(2)")
    console.log("firstLetter", firstLetter);
    max_y = -340;
    y_offset = (1-(percentage/100))*max_y;
    secondLetter.style.top = y_offset + "px";

    let thirdLetter = document.querySelector("span:nth-child(3)")
    console.log("thirdLetter", thirdLetter);
    max_y = 217;
    y_offset = (1-(percentage/100))*max_y;
    thirdLetter.style.top = y_offset + "px";

let fourthLetter = document.querySelector("span:nth-child(4)")
    console.log("fourthLetter", fourthLetter);
    max_y = -183;
    y_offset = (1-(percentage/100))*max_y;
    fourthLetter.style.top = y_offset + "px";

let fifthLetter = document.querySelector("span:nth-child(5)")
    console.log("fifthLetter", fifthLetter);
    max_y = 356;
    y_offset = (1-(percentage/100))*max_y;
    fifthLetter.style.top = y_offset + "px";

let sixthLetter = document.querySelector("span:nth-child(6)")
    console.log("sixthLetter", sixthLetter);
    max_y = -274;
    y_offset = (1-(percentage/100))*max_y;
    sixthLetter.style.top = y_offset + "px";

let seventhLetter = document.querySelector("span:nth-child(7)")
    console.log("seventhLetter", seventhLetter);
    max_y = 391;
    y_offset = (1-(percentage/100))*max_y;
    seventhLetter.style.top = y_offset + "px";

let eighthLetter = document.querySelector("span:nth-child(8)")
    console.log("eighthLetter", eighthLetter);
    max_y = -142;
    y_offset = (1-(percentage/100))*max_y;
    eighthLetter.style.top = y_offset + "px";

let ninthLetter = document.querySelector("span:nth-child(9)")
    console.log("ninthLetter", ninthLetter);
    max_y = 308;
    y_offset = (1-(percentage/100))*max_y;
    ninthLetter.style.top = y_offset + "px";

let tenthLetter = document.querySelector("span:nth-child(10)")
    console.log("tenthLetter", tenthLetter);
    max_y = -229;
    y_offset = (1-(percentage/100))*max_y;
    tenthLetter.style.top = y_offset + "px";

let eleventhLetter = document.querySelector("span:nth-child(11)")
    console.log("eleventhLetter", eleventhLetter);
    max_y = 174;
    y_offset = (1-(percentage/100))*max_y;
    eleventhLetter.style.top = y_offset + "px";
    
})


function getScrollPercentage() {
    // how many pixels have we scrolled yet?
    let scrolledAlready = window.scrollY;

    // how high is our page?
    let pageHeight = document.body.scrollHeight;

    // how high is the window?
    let windowHeight = window.innerHeight;

    // how far can we scroll?
    let possibleScrollSpace = pageHeight - windowHeight;

    // console.log(scrolledAlready, possibleScrollSpace);
    let percentage = (scrolledAlready / possibleScrollSpace) * 100;
    return percentage;
}

function spinElm(element){
    element.style.transform = "rotate(360deg)";
}
function spinAllSpans(){
    allSpans.forEach(spinElm)
}