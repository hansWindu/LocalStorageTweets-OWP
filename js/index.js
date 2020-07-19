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
    // Crear elemento y añadirle contenido a la lista
    const tweetEscupido = document.createElement('div');
    tweetEscupido.innerText = tweet;
    tweetEscupido.classList = 'tweets__li';
    listaTweets.appendChild(tweetEscupido);
    // Crear elemento y añadirlo al final del tweet (li)
    const borrarTweet = document.createElement('a');
    borrarTweet.classList = '';
    borrarTweet.innerText = 'X';
    tweetEscupido.appendChild(borrarTweet);    
    

} 
