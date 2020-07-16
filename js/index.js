// Variables
const listaTweets = document.getElementById('tweets__lista');


// Event Listeners

eventListeners();

function eventListeners() {
    // Cuando se envia el formulario
    document.querySelector('#inserta__formulario').addEventListener('submit', agregarTweet);
}

// Funciones 

// Añadir tweet del formulario
function agregarTweet(e) {
    e.preventDefault();
    //leer el valor de const area
    const tweet = document.getElementById('inserta__text').value;
    console.log(tweet)
    // Crear elemento y añadirle contenido a la lista
    // const li = document.createElement('li');
    // li.innerText = tweet;
    // listaTweets.appendChild(li);
    // console.log(tweet);

} 
