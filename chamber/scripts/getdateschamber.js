/*HAMBURGER MENU*/
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

/* CURRENT YEAR */
const currentYear = new Date;

document.querySelector("#year").textContent = currentYear.getFullYear();

/* LAST MODIFIED */
let text = document.lastModified;
document.getElementById("lastModified").textContent = text;