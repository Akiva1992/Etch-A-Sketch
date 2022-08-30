let sketchPad = document.querySelector(".sketch-pad");
const allBtns =Array.from(document.querySelectorAll("button"));

let range = document.querySelector("#size");
let pixelNum = 16;


for (let i =0; i<pixelNum; i++){
    for (let j=0; j<pixelNum; j++){
        sketchPad.appendChild(document.createElement("div")).classList.add("pixel");
    }
}
let arr= Array.from(document.querySelectorAll('.pixel'));
let divWidth = 100 / pixelNum;

arr.forEach(div => {
    div.style.width =`${divWidth}%`
    let d = div.style.height =`${divWidth}%`
    console.log(d)
});



range.addEventListener("input", ()=>{
    pixelNum = range.value;
    let divWidth = 100 / pixelNum;
    console.log(pixelNum);
    let arr= Array.from(document.querySelectorAll('.pixel'));
    arr.forEach(div => {
        div.remove();
        // console.log(d)
    });
    for (let i =0; i<pixelNum; i++){
        for (let j=0; j<pixelNum; j++){
            sketchPad.appendChild(document.createElement("div")).classList.add("pixel");
        }
    }
    arr= Array.from(document.querySelectorAll('.pixel'));
    arr.forEach(div => {
        div.style.width =`${divWidth}%`
        let d = div.style.height =`${divWidth}%`
        console.log(d)
    });
    allBtns.forEach(btn =>{
        btn.classList.remove("on");
    });
});


console.log(divWidth)



const body = document.getElementsByTagName("body")[0];

let isDown = false;

body.addEventListener("mouseup",() =>{
    isDown = false;
});

body.addEventListener("mousedown",() =>{
    isDown = true;
});



// 

const colorPicker = document.querySelector("#color-picker");

colorPicker.addEventListener("change", () => {
    let color = colorPicker.value;
    arr= Array.from(document.querySelectorAll('.pixel'));
    arr.forEach(div => {
        div.addEventListener("mouseover",() =>{
            if (isDown == true){
                div.style.background=color;
            }
        });
        div.addEventListener("click",() =>{
            div.style.background=color;   
        });
    });
    allBtns.forEach(btn =>{
        btn.classList.remove("on");
    });
    drawBtn.classList.add("on");
    
});


const drawBtn = document.querySelector(".btn.draw");

drawBtn.addEventListener("click", ()=>{
    let color = colorPicker.value;
    arr= Array.from(document.querySelectorAll('.pixel'));
    arr.forEach(div => {
        div.addEventListener("mouseover",() =>{
            if (isDown == true){
                div.style.background=color;
            }
        });
        div.addEventListener("click",() =>{
            div.style.background=color;    
        });
    });
    allBtns.forEach(btn =>{
        btn.classList.remove("on");
    });
    drawBtn.classList.add("on");
});



const eraseBtn = document.querySelector(".btn.erase");

eraseBtn.addEventListener("click", ()=>{
    arr= Array.from(document.querySelectorAll('.pixel'));
    arr.forEach(div => {
        div.addEventListener("mouseover",() =>{
            if (isDown == true){
                div.classList.remove("color");
                div.style.background="";
            }
        });
        div.addEventListener("click",() =>{
            div.classList.remove("color"); 
            div.style.background="";

        });
    });
    allBtns.forEach(btn =>{
        btn.classList.remove("on");
    });
    eraseBtn.classList.add("on");
});


// Clear button listener and functions.
const clearBtn = document.querySelector(".btn.clear");
clearBtn.addEventListener("click", () =>{
    arr= Array.from(document.querySelectorAll('.pixel'));
    arr.forEach(div => {
        div.classList.remove("color");    
    });
    allBtns.forEach(btn =>{
        btn.classList.remove("on");
    });
});








