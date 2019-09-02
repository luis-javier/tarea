criterio = 1;

function num_casillas_activas(libro){
	var cont = 0;
	for(var i = 1;i<libro.classList.length;i++){
		if(document.getElementById("cb"+libro.classList[i]).checked){
			cont++;
		}
	}
	return cont;
}

function casilla_activa(libro){
	var cont = num_casillas_activas(libro);
	
	return cont>0?true:false;
}

function buscar(campo){
	var input, filter, table, tr, td, i, valor_txt;
	
	input = document.getElementById("barra_busqueda");
	filter = input.value.toUpperCase();
	table = document.getElementById("tabala_libros");
	tr = document.getElementsByClassName("Biblioteca");
	
	for (i = 0; i < tr.length; i++) {
		valor_txt = tr[i].children[criterio].textContent;
		if(valor_txt.toUpperCase().indexOf(filter)>-1){
				if(casilla_activa(tr[i])){
					tr[i].style.display = "";
				}
		}else{
			tr[i].style.display = "none";
		}
	}
}

function coloca_biblio(biblioteca){
	var biblios = document.getElementsByClassName(biblioteca);
	for(i of biblios){
		i.style.display="";
	}
}

function quita_biblio(biblioteca){
	var biblios = document.getElementsByClassName(biblioteca);
	for(i of biblios){
		if(num_casillas_activas(i)==0){
			i.style.display="none";
		}
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
	document.getElementById("cbBBNM").checked = valor_check;
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

	document.getElementById("barra_busqueda").value="";

	document.getElementById("buscarPorTitulo").checked=true;

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
		comprueba_eleccion(document.getElementById("cbBPIngenieria"),false,"BPIngenieria");
	});

	document.getElementById("cbBAIngenieria").addEventListener("change", function(){
		comprueba_eleccion(document.getElementById("cbBAIngenieria"),false,"BAIngenieria");
	});
	
	document.getElementById("cbBPosIngenieria").addEventListener("change", function(){
		comprueba_eleccion(document.getElementById("cbBPosIngenieria"),false,"BPosIngenieria");
	});

	document.getElementById("cbBBNM").addEventListener("change", function(){
		comprueba_eleccion(document.getElementById("cbBNM"),false,"BBNM");
	});

	document.getElementById("cbBQuimica").addEventListener("change", function(){
		comprueba_eleccion(document.getElementById("cbBQuimica"),false,"BQuimica");
	});

	document.getElementById("cbBCiencias").addEventListener("change", function(){
		comprueba_eleccion(document.getElementById("cbBCiencias"),false,"BCiencias");
	});

	document.getElementById("barra_busqueda").addEventListener("keyup",function(){
		buscar(2);
	});

	document.getElementById("buscarPorTitulo").addEventListener("change",function(){
		criterio=1;
	});

	document.getElementById("buscarPorAutor").addEventListener("change",function(){
		criterio=0;
	});

	document.getElementById("buscarPorEditorial").addEventListener("change",function(){
		criterio=2;
	});

	document.getElementById("buscarPorTemas").addEventListener("change",function(){
		criterio=3;
	});
	
	document.getElementById("buscarPorBiblioteca").addEventListener("change",function(){
		criterio=4;
	});
}

carga_eventos();
