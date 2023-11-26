const baseURL = "https://erikapalaciosarvizu.github.io/wdd230";

const linksURL = "https://erikapalaciosarvizu.github.io/wdd230/data/links.json";
const cards = document.querySelector('.div-activities');


async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.lessons);
 }

 function displayLinks(weeks) {
    const activitiesList = document.querySelector('.div-activities');
    activitiesList.innerHTML = ''; // Limpiar el contenido existente
 
    weeks.forEach(week => {
       const card = document.createElement('section');
       card.className = 'card';
       const h3 = document.createElement('h3');
       h3.textContent = `Week ${week.lesson}`;
       const ul = document.createElement('ul');
 
       week.links.forEach(link => {
          const li = document.createElement('li');
          const a = document.createElement('a');
          a.href = `${baseURL}/${link.url}`;
          a.textContent = `${week.lesson}: ${link.title}`;
          li.appendChild(a);
          ul.appendChild(li);
       });
 
       card.appendChild(h3);
       card.appendChild(ul);
       activitiesList.appendChild(card);
    });
 }  
  getLinks();