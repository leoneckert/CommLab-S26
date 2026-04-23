window.scrollTo(0, 100);

function getScrollPercentage() {
  const scrollTop = window.scrollY;                  // how far we've scrolled
  const maxScroll = document.body.scrollHeight - window.innerHeight; // total scrollable distance

//   if (maxScroll === 0) return 0;

  let percentage = (scrollTop / maxScroll) * 100;

  return percentage;
}

window.addEventListener("scroll", function (e) {
  
  let perc = getScrollPercentage();
  console.log(perc);

  if(perc > 33){
    document.querySelector(".one p").style.transform = "rotate(360deg)";
  }else{
    document.querySelector(".one p").style.transform = "rotate(0deg)";
  }

  if(perc > 77){
    document.querySelector(".two p").style.transform = "scale(1)";
    document.querySelector(".two p").style.opacity = "1";
  }else{
    document.querySelector(".two p").style.transform = "scale(3)";
    document.querySelector(".two p").style.opacity = "0";
  }


});