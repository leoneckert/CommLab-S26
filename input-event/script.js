let slider1 = document.querySelector("#one input");
let slider2 = document.querySelector("#two input");
let sliders3 = document.querySelectorAll("#three input");
let sliders4 = document.querySelectorAll("#four input");
let sliders5 = document.querySelectorAll("#five input");

slider1.addEventListener("input", slider1changed);




function slider1changed(eventInfo){
    let value = eventInfo.target.value;
    adjustSlider2(value);
    sliders3.forEach(adjustSlider3);
    sliders4.forEach(adjustSlider4)
    sliders5.forEach(adjustSlider5);
}


function adjustSlider2(value){
    slider2.value = value;
}



function adjustSlider3(elm, i){
    console.log((elm, i))   
    let value = slider1.value;
    let perc = i/6;
    elm.value = Math.abs(value-perc*100);
}
sliders3.forEach(adjustSlider3);

function adjustSlider4(elm, i){
    console.log((elm, i))   
    let value = slider1.value;
    // let perc = i/6;
    elm.value = value;
}
sliders4.forEach(adjustSlider4)

function adjustSlider5(elm, i){
    console.log((elm, i))   
    let value = slider1.value;
    elm.value = value;
    if(i%2==0){
        elm.style.transform = "translate("+(50-value)+"px, 0px)";
    }else{
        elm.style.transform = "translate("+(50-(100-value))+"px, 0px) rotate(180deg)";
    }
    // elm.style.transform = "translate("+(50-value)+"px, 0px) rotate(180deg)";
}
sliders5.forEach(adjustSlider5);