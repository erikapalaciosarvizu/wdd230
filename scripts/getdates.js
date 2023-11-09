/* CURRENT YEAR */
const currentYear = new Date;

document.querySelector("#year").textContent = currentYear.getFullYear();

/* LAST MODIFIED */
let text = document.lastModified;
document.getElementById("demo").innerHTML = text;



// PAGE VISITS ----------------------

const visitsDisplay = document.querySelector(".visits");

let numbOfVisits = Number(window.localStorage.getItem("numberOfVisits")) || 0;

if (numbOfVisits !== 0) {
	visitsDisplay.textContent = numbOfVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳`;
}

numbOfVisits++;

localStorage.setItem("numberOfVisits", numbOfVisits);




// HAMBURGER MENU ------------------
function openHamMenu() { //La funcion openHamMenu se puede llamar como yo quiera
	document.getElementById("mySidenav").style.width = "250px";
	//document = objeto que me permite acceder a los objetos del HTML.
	//getElementById = metodo o funcion que permite obtener el objeto del HTML por su ID.
	//style = objeto con el que se accede al estilo del objeto previamente seleccionado por su ID. (CSS)
	//width = Es un parametro dentro del estilo / medida de que aparezca, lo ancho del hamburger menu.
  }
  
  function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
  }

  
  