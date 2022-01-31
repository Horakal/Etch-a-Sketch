const gridContainer = document.getElementById('container');
const defaultColor = document.getElementById('colorPicker');
defaultColor.value = '#00000';
let btnRandom = document.getElementById('random');
btnRandom.onclick = () => selectType('random');
defaultColor.onchange = () => selectType('normal');
let colorType = 'normal';

function createGrid(val){
	gridContainer.style.gridTemplateColumns = `repeat(${val}, 1fr)`;
	gridContainer.style.gridTemplateRows = `repeat(${val}, 1fr)`;
	for (i=0; i<val*val; i+=1) {
		const row = document.createElement("div");
		row.addEventListener('mouseover', changeColor)
		row.className = "row";
	gridContainer.appendChild(row);
	}
	document.getElementById('textInput').textContent = `${val} x ${val}`;
}

function changeColor(e){
	if (colorType == 'normal'){
	e.target.style.backgroundColor = document.getElementById('colorPicker').value;
	}
	else if (colorType == 'random'){
		var randomColor = Math.floor(Math.random()*16777215).toString(16);
		e.target.style.backgroundColor = '#' + randomColor;
	}

}

function updateRange(val){
	document.getElementById('textInput').textContent = `${val} x ${val}`;
}

function clearGrid(val){
	gridContainer.innerHTML = '';
	createGrid(val);
}

function selectType(type){
	if (type === 'random'){
		colorType = 'random';
	}
	else if (type ==='normal'){
		colorType = 'normal'
	}
}

window.onload = () =>{
	createGrid(16);
}
