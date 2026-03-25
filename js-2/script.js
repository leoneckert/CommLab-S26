let container = document.querySelector(".boxContainer");


//define functions:
function addParagraph(){
    // create an element in JS world
    let paragraph = document.createElement('p');

    // manipulate / configure the element
    paragraph.innerText = "does this work?";
    
    // put the element onto the actual page
    document.body.append(paragraph);
}

function addBox(){
    let box = document.createElement("div");
    box.className = "box";

    // select the container which the box should 
    // go into:
    // let container = document.querySelector(".boxContainer");

    // apend box to container:
    container.append(box);

}

function removeAll(){
    // let container = document.querySelector(".boxContainer");
    container.remove();
}

function moveContainer(){

    let randomNumber = (Math.random()*200)-100;
    console.log(randomNumber);

    // let container = document.querySelector(".boxContainer");
    container.style.left = randomNumber+"px";
}