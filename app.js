/////////////////////////Global Variables//////////////////////////////////////////////////////////////

let sketchPad = document.querySelector(".sketch-pad");
const allBtns =Array.from(document.querySelectorAll("button"));
let range = document.querySelector("#size");
let arr= Array.from(document.querySelectorAll('.pixel'));
const body = document.getElementsByTagName("body")[0];
let sizeSpan= document.querySelector(".size-span");

//////////////////////Makes sure the mouse is down.////////////////////////////////////

let isDown = false;
body.addEventListener("mouseup",() =>{
    isDown = false;
});

body.addEventListener("mousedown",() =>{
    isDown = true;
});

// Prevents drag in sketchpad/
sketchPad.addEventListener("dragstart",(e)=>{
    e.preventDefault()
});

///////////////////////Default pad size//////////////////////////////////////////////////

let pixelNum = 8;

for (let i =0; i<pixelNum; i++){
    for (let j=0; j<pixelNum; j++){
        sketchPad.appendChild(document.createElement("div")).classList.add("pixel");
    }
}
arr= Array.from(document.querySelectorAll('.pixel'));

let divWidth = 100 / pixelNum;
arr.forEach(div => {
        div.style.width =`${divWidth}%`
        div.style.height =`${divWidth}%`
    });

///////////////////////Range pad size listener//////////////////////////////////////////////////

range.addEventListener("input", ()=>{
    pixelNum = range.value;
    let divWidth = 100 / pixelNum;
    console.log(pixelNum);
    sizeSpan.textContent =`${pixelNum}x${pixelNum}`
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
        div.style.height =`${divWidth}%`
    });
    if(showGridBtn.classList.contains("active")){
        arr= Array.from(document.querySelectorAll('.pixel'));
        arr.forEach(div => {
            div.style.border = "#8e8f8f 1px solid "
        });
    }
    allBtns.forEach(btn =>{
        btn.classList.remove("on");
    });
    // showGridBtn.classList.remove("active")
});



///////////////////////Color picker listener//////////////////////////////////////////////////

const colorPicker = document.querySelector("#color-picker");

colorPicker.addEventListener("change", () => {
    let color = colorPicker.value;
    arr= Array.from(document.querySelectorAll('.pixel'));
    arr.forEach(div => {
        div.addEventListener("mouseover",() =>{
            if (isDown == true){
                div.style.backgroundColor=color;
            }
        });
        div.addEventListener("click",() =>{
            div.style.backgroundColor=color;   
        });
    });
    allBtns.forEach(btn =>{
        btn.classList.remove("on");
    });
    drawBtn.classList.add("on");
    
});

///////////////////////Draw btn listener//////////////////////////////////////////////////

const drawBtn = document.querySelector(".btn.draw");

drawBtn.addEventListener("click", ()=>{
    let color = colorPicker.value;
    arr= Array.from(document.querySelectorAll('.pixel'));
    arr.forEach(div => {
        div.addEventListener("mouseover",() =>{
            if (isDown == true){
                div.style.backgroundColor=color;
            }
        });
        div.addEventListener("click",() =>{
            div.style.backgroundColor=color;    
        });
    });
    allBtns.forEach(btn =>{
        btn.classList.remove("on");
    });
    drawBtn.classList.add("on");
});

///////////////////////Erase btn listener//////////////////////////////////////////////////

const eraseBtn = document.querySelector(".btn.erase");

eraseBtn.addEventListener("click", ()=>{
    arr= Array.from(document.querySelectorAll('.pixel'));
    arr.forEach(div => {
        div.addEventListener("mouseover",() =>{
            if (isDown == true){
                div.classList.remove("color");
                div.style.backgroundColor="";
            }
        });
        div.addEventListener("click",() =>{
            div.classList.remove("color"); 
            div.style.backgroundColor="";

        });
    });
    allBtns.forEach(btn =>{
        btn.classList.remove("on");
    });
    eraseBtn.classList.add("on");
});


//////////////////////////// Clear button listener//////////////////////////////////

const clearBtn = document.querySelector(".btn.clear");
clearBtn.addEventListener("click", () =>{
    window.location.reload();
    // arr= Array.from(document.querySelectorAll('.pixel'));
    // arr.forEach(div => {
    //     div.style.backgroundColor="";   
    // });
    // allBtns.forEach(btn =>{
    //     btn.classList.remove("on");
    // });
    // // clearBtn.classList.add("on"); 
});



//////////////////////////// Grid button listener//////////////////////////////////

const showGridBtn = document.querySelector(".btn.grid");

showGridBtn.addEventListener("click", () =>{
    showGridBtn.classList.toggle("active")
    if(showGridBtn.classList.contains("active")){
        arr= Array.from(document.querySelectorAll('.pixel'));
        arr.forEach(div => {
            div.style.border = "#8e8f8f 1px solid "
        });
    }
    else{
        arr.forEach(div => {
            div.style.border = "none"
        });
    }
});

// showGridBtn.addEventListener("touchend", () =>{
//     showGridBtn.classList.remove("active")
// });


//////////////////////////// Random button listener//////////////////////////////////


const randomBtn = document.querySelector(".btn.random");

randomBtn.addEventListener("click", ()=>{
    arr= Array.from(document.querySelectorAll('.pixel'));
    arr.forEach(div => {
        div.addEventListener("mouseover",() =>{
            if (isDown == true){
                div.style.backgroundColor ='#'+Math.floor(Math.random()*16777215).toString(16);
            }
        });
        div.addEventListener("click",() =>{
            div.style.backgroundColor='#'+Math.floor(Math.random()*16777215).toString(16);    
        });
    });
    allBtns.forEach(btn =>{
        btn.classList.remove("on");
    });
    randomBtn.classList.add("on");
});


//////////////////////////// Shade button listener//////////////////////////////////

const shadeBtn = document.querySelector(".btn.shade");

shadeBtn.addEventListener("click", ()=>{
    let color = "rgb(255,255,255)";
    let rgb = 255
    console.log(color)
    arr= Array.from(document.querySelectorAll('.pixel'));
    arr.forEach(div => {
        div.addEventListener("click",() =>{
            color = `rgb(${subtract(rgb)},${subtract(rgb)},${subtract(rgb)})`;
            rgb -= 25.5
            console.log(color)
            div.style.backgroundColor = color;    
        });
        div.addEventListener("mouseover",() =>{
            if (isDown == true){
                div.style.backgroundColor ='';
            }
        });
        div.addEventListener("mouseout",() =>{
            rgb = 255;
        });
    });
    allBtns.forEach(btn =>{
        btn.classList.remove("on");
    });
    shadeBtn.classList.add("on");
});

function subtract(number){
    return number - 25.5
}


// ////////////////////////////////////Touch Events////////////////////

// sketchPad.addEventListener("touchstart", e =>{
//     e.preventDefault();
//     let color = colorPicker.value;
//     arr= Array.from(document.querySelectorAll('.pixel'));
//     arr.forEach(div => {
//         div.addEventListener("touchmove",() =>{
//             div.style.backgroundColor=color;
//         });
//         div.addEventListener("touchstart",() =>{
//             div.style.backgroundColor=color;    
//         });
//     });
//     allBtns.forEach(btn =>{
//         btn.classList.remove("on");
//     });
//     drawBtn.classList.add("on");
    
// });
 

