function coloca_biblio(biblioteca){
	var biblios = document.getElementsByClassName(biblioteca);
	for(i of biblios){
		i.style.display="";
	}
}

function quita_biblio(biblioteca){
	var biblios = document.getElementsByClassName(biblioteca);
	for(i of biblios){
		i.style.display="none";
	}
}

function cambia_todas(valor){
	var todas = document.getElementsByClassName("Biblioteca");
	for(let i of todas){
		i.style.display=valor;
	}
}

function selcciona_todas(valor_check){
	document.getElementById("cbBTodas").checked = valor_check;
	document.getElementById("cbBCentral").checked = valor_check;
	document.getElementById("cbBVasconcelos").checked = valor_check;
	document.getElementById("cbBPIngenieria").checked = valor_check;
	document.getElementById("cbBAIngenieria").checked = valor_check;
	document.getElementById("cbBPosIngenieria").checked = valor_check;
	document.getElementById("cbBNM").checked = valor_check;
	document.getElementById("cbBCiencias").checked = valor_check;
	document.getElementById("cbBQuimica").checked = valor_check;
}

function comprueba_eleccion(check_box,es_todas,biblioteca){
	if(check_box.checked){
		if(es_todas){
			cambia_todas("");
			selcciona_todas(true);
			return;
		}
		coloca_biblio(biblioteca);
	}else{
		if(es_todas){
			cambia_todas("none");
			selcciona_todas(false);
			return;
		}
		quita_biblio(biblioteca);
	}
}

function carga_eventos(){
	selcciona_todas(true);

	document.getElementById("cbBTodas").addEventListener("change", function(){
		comprueba_eleccion(document.getElementById("cbBTodas"),true,"");
	});

	document.getElementById("cbBCentral").addEventListener("change", function(){
		comprueba_eleccion(document.getElementById("cbBCentral"),false,"BCentral");
	});

	document.getElementById("cbBVasconcelos").addEventListener("change", function(){
		comprueba_eleccion(document.getElementById("cbBVasconcelos"),false,"BVasconcelos");
	});

	document.getElementById("cbBPIngenieria").addEventListener("change", function(){
		comprueba_eleccion(document.getElementById("cbBPIngenieria"),false,"PIngenieria");
	});

	document.getElementById("cbBAIngenieria").addEventListener("change", function(){
		comprueba_eleccion(document.getElementById("cbBAIngenieria"),false,"AIngenieria");
	});
	
	document.getElementById("cbBPosIngenieria").addEventListener("change", function(){
		comprueba_eleccion(document.getElementById("cbBPosIngenieria"),false,"PosIngenieria");
	});

	document.getElementById("cbBNM").addEventListener("change", function(){
		comprueba_eleccion(document.getElementById("cbBNM"),false,"BNM");
	});

	document.getElementById("cbBQuimica").addEventListener("change", function(){
		comprueba_eleccion(document.getElementById("cbBQuimica"),false,"Quimica");
	});

	document.getElementById("cbBCiencias").addEventListener("change", function(){
		comprueba_eleccion(document.getElementById("cbBCiencias"),false,"Ciencias");
	});
}

carga_eventos();
