var container = document.querySelector('.container'); 
var button = document.getElementById('newone'); 

function addDiv(numberOfDivsToCreate) {    
    var gridCellDimensions = ((600 / numberOfDivsToCreate) - 2).toFixed(2); 
    var gridSize = Math.pow(numberOfDivsToCreate, 2); 

    while (gridSize > 0) {
        var newDiv = document.createElement('div'); 	
        container.appendChild(newDiv); 
        newDiv.classList.add('grid'); 
        newDiv.style.height = gridCellDimensions + 'px';  
        newDiv.style.width = gridCellDimensions + 'px'; 
        newDiv.style.border = '1px solid black';             
        gridSize--; 
    }

    var gridCells = document.querySelectorAll('.grid'); 
    gridCells.forEach(cell => cell.addEventListener('mouseenter', changeColor)); 
    console.log(gridCellDimensions);
    console.log('Grid has been created!!')
}


function changeColor() {
    this.style.backgroundColor = '#7FFF00'; 
}


function clear() {    	
    var reqGridSize = prompt('How many squares per side?'); 

    if (reqGridSize >= 1 && reqGridSize <= 100) { 
        while (container.hasChildNodes()) {
            container.removeChild(container.lastChild); 
        }
        addDiv(reqGridSize);  
    } else {
        alert ('Please Choose a number between 1-100'); 
        clear();
    }
}

button.addEventListener('click', clear); 
window.onload = addDiv(16); 

