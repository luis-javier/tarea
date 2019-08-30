
function quita_todas(){
	alert("muestro todas");
}

function carga_eventos(){
	var bibliotecas_todas = document.getElementById("cbBTodas");
	console.log(bibliotecas_todas);
	bibliotecas_todas.addEventListener("change",quita_todas);
}

carga_eventos();
