// add a event listener to the window
// the event we want to listen to is called "scroll"



function windowWasScrolled() {
    // console.log("scrolled!")
    let percentage = getScrollPercentage();
    console.log("percentage", percentage);

    // rotate first paragraph
    if(percentage > 33){
        // console.log("paragraph appeared");
        document.querySelector(".one p").style.transform = "rotate(360deg)";
    }else{
        document.querySelector(".one p").style.transform = "rotate(0deg)";
    }


    // scale second paragraph     transfrom: scale(2);
    if(percentage > 77){
        // console.log("paragraph appeared");
        document.querySelector(".two p").style.transform = "scale(3)";
        document.querySelector(".two p").style.color = "yellow";
    }else{
        document.querySelector(".two p").style.transform = "scale(1)";
        document.querySelector(".two p").style.color = "black";
    }

    let windowWidth = window.innerWidth;

    let cat_x_max = windowWidth - 100;
    let cat_x = cat_x_max * (percentage/100);
    document.querySelector("#catImg").style.transform = "translate(" + cat_x + "px, 0px)";



}
window.addEventListener("scroll", windowWasScrolled);






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