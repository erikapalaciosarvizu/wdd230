const baseURL = "https://erikapalaciosarvizu.github.io/wdd230";
const linksURL = "https://erikapalaciosarvizu.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.lessons);
}

function isAbsoluteURL(url) {
    // Verifica si la URL ya es una URL absoluta
    return /^https?:\/\//i.test(url);
}

function displayLinks(weeks) {
    const activitiesList = document.getElementById('learning-activities');
    const listContainer = document.createElement('div'); // Contenedor para la lista
    listContainer.className = 'activities-list-container'; // Clase para el contenedor

    weeks.forEach(week => {
        const p = document.createElement('p');
        p.textContent = `${week.lesson}: `;

        week.links.forEach((link, index) => {
            const a = document.createElement('a');
            a.textContent = link.title;

            // Verifica si la URL es absoluta antes de concatenar la baseURL
            a.href = isAbsoluteURL(link.url) ? link.url : `${baseURL}/${link.url}`;

            a.addEventListener('click', function (event) {

            });
            p.appendChild(a);

            // '|' 
            if (index < week.links.length - 1) {
                const separator = document.createTextNode(' | ');
                p.appendChild(separator);
            }
        });

        listContainer.appendChild(p);
    });

    activitiesList.appendChild(listContainer);
}

document.addEventListener('DOMContentLoaded', getLinks);
