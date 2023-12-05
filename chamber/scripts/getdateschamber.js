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





// JavaScript para activar/desactivar el modo oscuro
const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;

darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
        darkModeToggle.textContent = "🔆";
    } else {
        darkModeToggle.textContent = "🕶️";
    }
});

/* localStorage */
  const msToDays = 86400000; // 24 * 60 * 60 * 1000

  const sidebarContent = document.querySelector('.discover-sidebar-content');

  function updateVisitDate() {
    const currentDate = new Date();
    localStorage.setItem("lastVisit", currentDate.toISOString());
  }

  function getDaysBetweenVisits() {
    const lastVisit = localStorage.getItem("lastVisit");

    if (!lastVisit) {
      return null; // priera visita
    }

    const daysBetween = (new Date() - new Date(lastVisit)) / msToDays;
    return daysBetween;
  }

  function displayMessage() {
    const daysBetweenVisits = getDaysBetweenVisits();

    if (daysBetweenVisits === null) {
      // First visit
      sidebarContent.innerHTML = `<p>Welcome! Let us know if you have any questions.</p>` + sidebarContent.innerHTML;
    } else if (daysBetweenVisits < 1) {
      // menos de un dia entre las visitas
      sidebarContent.innerHTML = `<p>Back so soon! Awesome!</p>` + sidebarContent.innerHTML;
    } else {
      // mas de un dia
      const pluralSuffix = daysBetweenVisits === 1 ? '' : 's';
      sidebarContent.innerHTML = `<p>You last visited ${daysBetweenVisits.toFixed(0)} day${pluralSuffix} ago.</p>` + sidebarContent.innerHTML;
    }

    // Esto acualiza el dia de visita
    updateVisitDate();
  }

  // llama el displayMessage en la pag
  displayMessage();


document.getElementById("submission_time").value = Date.now();

//BANNER

document.addEventListener("DOMContentLoaded", function() {
  // Display the meet and greet banner only on Mondays, Tuesdays, and Wednesdays
  const today = new Date().getDay();
  if (today >= 1 && today <= 3) {
      document.getElementById("meetAndGreetBanner").style.display = "block";
  }
});

function closeBanner() {
  document.getElementById("meetAndGreetBanner").style.display = "none";
}





