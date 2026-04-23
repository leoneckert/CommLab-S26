// event listener for scrolling the window
// this works because of the empty divs we included
// on the page ("empty scrolling material")
// they take space and thus we can scroll
window.addEventListener("scroll", function(){
    
    // get our location on the overall page
    let percentage = getScrollPercentage()
    
    // we do the same for each box
    // we want the boxes to each reach their own bottom
    // by the time we reach the bottom of the website
    // because the boxes have differnt amounts of content
    // they will end up scrolling slower and faster


    // box 1:
    let box1 = document.querySelector("#one"); // select box
    let box1ContentHeight = box1.scrollHeight; // how tall is the box's content?
    let box1Height = box1.getBoundingClientRect().height; // how tall is the box itself?
    let box1TotalScrollSpace = box1ContentHeight - box1Height; // how far can we scroll?
    // set the scroll level / force the box to a certain scroll position:
    box1.scrollTop = box1TotalScrollSpace*(percentage/100); 

    // box 2:
    let box2 = document.querySelector("#two");
    let box2ContentHeight = box2.scrollHeight;
    let box2Height = box2.getBoundingClientRect().height;
    let box2TotalScrollSpace = box2ContentHeight - box2Height;
    box2.scrollTop = box2TotalScrollSpace*(percentage/100);

    // box 3:
    let box3 = document.querySelector("#three");
    let box3ContentHeight = box3.scrollHeight;
    let box3Height = box3.getBoundingClientRect().height;
    let box3TotalScrollSpace = box3ContentHeight - box3Height;
    box3.scrollTop = box3TotalScrollSpace*(percentage/100);

})





function getScrollPercentage(){
    // how far have we scrolled
    let scrollTop = window.scrollY;
    // console.log(scrollTop);

    // how far can we scroll in total
    let maxScroll = document.body.scrollHeight - window.innerHeight;

    let perc = (scrollTop/maxScroll) * 100;
    return perc;


}