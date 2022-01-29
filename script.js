const cont = document.getElementById('container');

function grid(val){
	cont.style.gridTemplateColumns = `repeat(${val}, 1fr)`;
	cont.style.gridTemplateRows = `repeat(${val}, 1fr)`;
	for (i=0; i<val*val; i+=1) {
		const row = document.createElement("div");
		row.addEventListener('mouseover', changeColor)
		row.className = "row";
	cont.appendChild(row);
	}
	document.getElementById('textInput').textContent = `${val} x ${val}`;
}

grid(16);


function changeColor(e){
	e.target.style.backgroundColor = '#333333';
}

function updateRange(val){
	document.getElementById('textInput').textContent = `${val} x ${val}`;
}

function clearGrid(val){
	cont.innerHTML = '';
	grid(val);
}
