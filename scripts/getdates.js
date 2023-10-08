/* CURRENT YEAR */
const currentYear = new Date;

document.querySelector("#year").textContent = currentYear.getFullYear();

/* LAST MODIFIED */
let text = document.lastModified;
document.getElementById("demo").innerHTML = text;


function openHamMenu() { //La funcion openHamMenu se puede llamar como yo quiera
	document.getElementById("nnav_links-menu").style.width = "250px";
	//document = objeto que me permite acceder a los objetos del HTML.
	//getElementById = metodo o funcion que permite obtener el objeto del HTML por su ID.
	//style = objeto con el que se accede al estilo del objeto previamente seleccionado por su ID. (CSS)
	//width = Es un parametro dentro del estilo / medida de que aparezca, lo ancho del hamburger menu.
  }
  
  function closeNav() {
	document.getElementById("nav_links-menu").style.width = "0";
  }

  