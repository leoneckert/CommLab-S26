window.scrollTo(0, 100);

function getScrollPercentage() {
  const scrollTop = window.scrollY;                  // how far we've scrolled
  const maxScroll = document.body.scrollHeight - window.innerHeight; // total scrollable distance

//   if (maxScroll === 0) return 0;

  let percentage = (scrollTop / maxScroll) * 100;

  return percentage;
}

window.addEventListener("scroll", function (e) {
  console.log(getScrollPercentage(), e);
  let perc = getScrollPercentage();
  if(perc>95){
    // document.body.innerHTML += '<div class="scrollWrapper"></div>'
    // document.body.scrollTop = 0;
    window.scrollTo(0, 100);
  }else if(perc<5){
    window.scrollTo(0, 800);
  }
});