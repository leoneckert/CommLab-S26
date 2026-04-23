// // old code:
// function spanHovered(eventInfo){
//     console.log("hello");

//     eventInfo.target.style.color = "red";
//     let randomX = Math.random()*200-100; // -100 to 100
//     let randomY = Math.random()*200-100; // -100 to 100
//     eventInfo.target.style.transform = "translate(" + randomX + "px, " + randomY + "px)";
// }

// function addMover(element){
//     element.addEventListener("mouseover", spanHovered);
// }

// let allSpans = document.querySelectorAll("span");
// allSpans.forEach(addMover)



let max_y1 = Math.random()*600-300; // -300, 300  // GLOBAL VARIABLE



window.addEventListener("scroll", function(){
    let percentage = getScrollPercentage();

    console.log("hello")
    // select the first letter
    let firstSpan = document.querySelector("span:nth-child(1)");
    // move it using the "top" attribute 
    let y1 = max_y1*percentage;
    firstSpan.style.top = y1+"px";
    // firstSp)an.style.transform = "translate(0px, "+y+"px)";
    // move it to a point that involves the percentage variable

    document.querySelector("span:nth-child(2)").style.top = (percentage*-200)+"px";
    document.querySelector("span:nth-child(3)").style.top = (percentage*-60)+"px";
    document.querySelector("span:nth-child(4)").style.top = (percentage*1000)+"px";
    document.querySelector("span:nth-child(5)").style.top = (percentage*130)+"px";
    document.querySelector("span:nth-child(6)").style.top = (percentage*-20)+"px";


    
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
    let percentage = (scrolledAlready / possibleScrollSpace);
    return percentage;x
}


// let angle = 360;

function spinElm(element){
    let ranDegree = Math.random() * 1000;
    element.style.transform = "rotate(" + ranDegree + "deg)";
    // angle = angle + 360;
}

function spinAllLetters(){
    let allSpans = document.querySelectorAll("span");
    allSpans.forEach(spinElm)
}

document.querySelector("#spinButton").addEventListener("click", spinAllLetters)