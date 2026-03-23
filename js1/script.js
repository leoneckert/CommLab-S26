let name1 = "Sonor";
// alert("what's going on, " + name1 + "?");

// below we overwrite the value
name1 = "Leon";

let language3 = "javascript"; //GLOBAL variable


// defining a function:
function greet(){
    // let language3 = "javascript"; //LOCAL variable
    console.log("speaking", language3);
    alert("this is tricky");
    console.log("this function finished.")
}

function myFunction(){
    console.log(language3 + " is fun.")
}

function greet2(theName){
    console.log("hello, " + theName)
}


let headline = document.querySelector("#programmingLanguage");
function changeHeadline(){
    console.log("function runs. changing headline");
    // document.querySelector("#programmingLanguage").innerText = "javaSCRIPT"
    headline.innerText = "javaSCRIPT"
}


function anotherFunction(){
    headline.innerHTML = "<a href='https://google.com'>google</a>"

}
