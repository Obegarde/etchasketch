

function etchasketch(number){
    let gridContainer = document.createElement("div");
    gridContainer.setAttribute("class","gridContainer");
    for(let i = 0; i< number; i++){
        let row = document.createElement("div");
        row.setAttribute('class', 'row');
        for(let y = 0; y<number; y++ ){
            let column = document.createElement("div");
            column.setAttribute('class', 'square column');
            row.appendChild(column);
        }
        gridContainer.appendChild(row);

    }
    gridContainer.addEventListener("mouseover", event=>{
        if(event.target.classList.contains("square")){
            event.target.style.backgroundColor = "blue";
        }

        

    });


    document.body.appendChild(gridContainer);
}

let getNumber = prompt("How big do you want your grid ?", 16);


etchasketch(getNumber);

