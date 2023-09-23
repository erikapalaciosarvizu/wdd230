/* CURRENT YEAR */
const currentYear = new Date;

document.querySelector("#year").textContent = currentYear.getFullYear();

/* LAST MODIFIED */
let text = document.lastModified;
document.getElementById("demo").innerHTML = text;
