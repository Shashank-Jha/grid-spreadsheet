const row = 100;
const col = 26;

const rowNameContainer = document.querySelector(".row-name-container");
const colNameContainer = document.querySelector(".column-name-container");

for(let i=1;i<=row;i++){
    const rowNameDiv = document.createElement("div");
    rowNameDiv.setAttribute("class", "address-row");
    rowNameDiv.innerText = i;
    rowNameContainer.appendChild(rowNameDiv);
}

for(let i=0;i<=col;i++){
    const colNameDiv = document.createElement("div");
    colNameDiv.setAttribute("class", "address-col");
    colNameDiv.innerText = String.fromCharCode(65+i);
    colNameContainer.appendChild(colNameDiv);
}