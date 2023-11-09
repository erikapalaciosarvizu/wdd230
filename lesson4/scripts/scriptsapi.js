// Declarar tres variables constantes que mantengan referencias a los elementos input, button y .list.

const entrada = document.querySelector('#favchap');
const boton = document.querySelector('button');
const lista = document.querySelector('#list');

// Declare an array named chaptersArray and assign it to the results of a defined function named getChapterList 
let chaptersArray = getChapterList() || [];


chaptersArray.forEach(capitulo => {
  displayList(capitulo);
});

// Change the button click event listener to only do the following tasks 

boton.addEventListener('click', () => {
  if (entrada.value != '') {
    displayList(entrada.value);
    chaptersArray.push(entrada.value);
    setChapterList();
    entrada.value = '';
    entrada.focus();
  }
});

// Create the displayList defined function that receives one parameter named item.

function displayList(item) {
  let li = document.createElement('li');
  let deletebutton = document.createElement('button');
  li.textContent = item;
  deletebutton.textContent = '❌';
  deletebutton.classList.add('delete');
  li.append(deletebutton);
  lista.append(li);
  deletebutton.addEventListener('click', function () {
    lista.removeChild(li);
    deleteChapter(li.textContent);
    entrada.focus();
  });
  console.log('I like to copy code instead of typing it out myself and trying to understand it.');
}

// Define the setChapterList function to set the localStorage item that you have already named. Use JSON.stringify() to stringify the array.
function setChapterList() {
  localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

// Define the getChapterList function to get the localStorage item. No parameter is needed. 
// Since this function returns to an awaiting array, we will need to use JSON.parse on the string.

function getChapterList() {
  return JSON.parse(localStorage.getItem('myFavBOMList'));
}

// Finally, define the deleteChapter function with a parameter named chapter that does three things.

function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1);
  chaptersArray = chaptersArray.filter(item => item !== chapter);
  setChapterList();
}
