const parentDiv = document.getElementById("container-main");
const GRIDSIZE = 620;
function createDiv(num){
    let dimension = num;

    if(num >= 100){
        dimension = 100;
    }
    for(let i = 0; i < (dimension*dimension); i++){
        const divG = document.createElement("div");
        divG.classList.add("grid-item");
        divG.style.backgroundColor = "rgb(1, 5, 255)";
        divG.style.width = ((GRIDSIZE/dimension) - 1.6) + "px"; 
        divG.style.height = ((GRIDSIZE/dimension) - 1.6) + "px";
        parentDiv.appendChild(divG);
        divG.style.margin = "0px";

        divG.addEventListener("mouseover", function() {
            divG.style.backgroundColor = randomColor();
        });
    }
}

function randomColor(){
    return "rgb(" + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ")";
}



createDiv(16);