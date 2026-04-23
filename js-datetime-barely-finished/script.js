

let prev_m;

function getTheTime(){
    let now = new Date();

    let h = now.getHours();      // 0–23
    let m = now.getMinutes();    // 0–59
    let s = now.getSeconds();    // 0–59
    // console.log( h, m, s );
    // addSecondsDiv()
    
    
    document.querySelector(".seconds").innerHTML = "";
    repeat(s, addSecondsDiv);

    if(m != prev_m){
      console.log("minute changed")
    }else{
      console.log("still in the same minute", m)
    }



    prev_m = m;
}

setInterval(getTheTime, 400)




function addSecondsDiv(){
  let div = document.createElement("div");
  document.querySelector(".seconds").append(div);
}







// Leon's Helper function:
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}



// to turn a number like 52 into the 
// component 5 and 2, we have to 
// first turn the number into a string
// and then slice each digit from it
// let's say the number is in the variable "m"
// we can turn m's value into a string like so:
let string_m = String(m);
// and then slide the first and second digit:
let first_m = string_m.slice(0, 1);
let second_m = string_m.slice(1, 2);