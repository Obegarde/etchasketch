

function etchasketch(number){
    let gridContainer = document.createElement("div");
    gridContainer.setAttribute("class","gridContainer");
    for(let i = 0; i< number; i++){
        let row = document.createElement("div");
        row.setAttribute('class', 'row');
        for(let y = 0; y<number; y++ ){
            let column = document.createElement("div");
            column.setAttribute('class', 'square column');
            column.style.height = (960 / number)+"px";
            column.style.width = (960 / number)+"px";
            row.appendChild(column);
        }
        gridContainer.appendChild(row);

    }
    gridContainer.addEventListener("mouseover", event=>{
        if(event.target.classList.contains("square") && event.target.style.backgroundColor == ""){

            event.target.style.backgroundColor = getRgbCode();
            
        }else if(event.target.classList.contains("square") && event.target.style.backgroundColor != ""){
            let currentRGB = event.target.style.backgroundColor;
            let splitRGB = currentRGB.match(/\d+/g);
            
            event.target.style.backgroundColor = `rgb(${splitRGB[0]*0.9},${splitRGB[1]*0.9},${splitRGB[2]*0.9})`



        }

        

    });


    document.body.appendChild(gridContainer);
}

const randomBetween = (min, max)=> min + Math.floor(Math.random() * (max - min + 1));
function getRgbCode(){
    let r = randomBetween(0,255);
    let g = randomBetween(0,255);
    let b = randomBetween(0,255);
   
    return `rgb(${r},${g},${b})`;
}



//let getNumber = prompt("How big do you want your grid ?", 16);

let generateButton = document.querySelector("#generateButton");
generateButton.addEventListener("click",()=>{
    let gridContainer=document.querySelector(".gridContainer");
    if(gridContainer != null){
        gridContainer.remove();
    }
    etchasketch(prompt("How big do you want your grid ?", 16));
});


