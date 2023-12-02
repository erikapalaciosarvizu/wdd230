const baseURL = "https://erikapalaciosarvizu.github.io/wdd230";
const linksURL = "https://erikapalaciosarvizu.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.lessons);
}

function displayLinks(weeks) {
    const activitiesList = document.getElementById('learning-activities');
    const listContainer = document.createElement('div'); // Contenedor para la lista
    listContainer.className = 'activities-list-container'; // Clase para el contenedor

    weeks.forEach(week => {
        week.links.forEach(link => {
            const p = document.createElement('p');
            const a = document.createElement('a');

            // Asegúrate de que baseURL no tenga una barra diagonal al final
            const baseURLWithoutTrailingSlash = baseURL.endsWith('/') ? baseURL.slice(0, -1) : baseURL;

            a.href = `${baseURLWithoutTrailingSlash}/${link.url}`;
            a.textContent = `${week.lesson}: ${link.title}`;
            p.appendChild(a);
            listContainer.appendChild(p);
        });
    });

    activitiesList.appendChild(listContainer);
}

document.addEventListener('DOMContentLoaded', getLinks);
