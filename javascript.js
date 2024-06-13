const parentDiv = document.getElementById("container-main");

function createDiv(num){
    let dimension = num;

    if(num >= 100){
        dimension = 100;
    }
    for(let i = 0; i < (dimension*dimension); i++){
        const divG = document.createElement("div");
        divG.classList.add("grid-item");
        divG.style.backgroundColor = "rgb(1, 5, 255)";
        divG.style.width = ((620/dimension) - 1.6) + "px"; 
        divG.style.height = ((620/dimension) - 1.6) + "px";
        parentDiv.appendChild(divG);
        divG.style.margin = "0px";
    }
}

createDiv(16);