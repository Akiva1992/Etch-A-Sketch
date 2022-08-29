let sketchPad = document.querySelector(".sketch-pad");

let num = 16;

for (let i =0; i<num; i++){
    for (let j=0; j<num; j++){
        sketchPad.appendChild(document.createElement("div")).classList.add("pixel");
    }
}


let divWidth = 100 / num;
console.log(divWidth)

const divs = document.querySelectorAll('.pixel');
const arr = Array.from(divs);

arr.forEach(div => {
    div.style.width =`${divWidth}%`
    let d = div.style.height =`${divWidth}%`
    console.log(d)

});

const body = document.getElementsByTagName("body")[0];

let isDown = false;

body.addEventListener("mouseup",() =>{
    isDown = false;
});

body.addEventListener("mousedown",() =>{
    isDown = true;
});


arr.forEach(div => {
    div.addEventListener("mouseover",() =>{
        if (isDown == true){
            div.classList.add("color");
        }
    });
});

