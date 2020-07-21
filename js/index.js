// Variables
const listaTweets = document.getElementById('tweets__lista');


// Event Listeners

eventListeners();

function eventListeners() {
    // Cuando se envia el formulario
    document.querySelector('#inserta__formulario').addEventListener('submit', agregarTweet);

    listaTweets.addEventListener('click', borrarTweet)
}

// Funciones 

// Añadir tweet del formulario
function agregarTweet(e) {
    e.preventDefault();
    //leer el valor de const area
    const tweet = document.getElementById('inserta__text').value;
    // Crear elemento y añadirle contenido a la lista
    const tweetEscupido = document.createElement('li');
    tweetEscupido.classList = 'tweets__li';
    tweetEscupido.innerText = tweet;
    listaTweets.appendChild(tweetEscupido);
    // Crear elemento y añadirlo al final del tweet (li)
    const borrarX = document.createElement('a');
    borrarX.classList = 'X';
    borrarX.innerText = 'X';
    tweetEscupido.appendChild(borrarX);    
    // Añadir Local Storage
    agregarTweetLocalStorage(tweet);
}

// Funcion borrar tweet
function borrarTweet(e) {
    e.preventDefault();
    if (e.target.className === 'X') {
        e.target.parentElement.remove();
    }
}

// Funcion Añadir tweet Local Storage
function agregarTweetLocalStorage(tweet) {
    let tweets;
    tweets = obtenerTweetLocalStorage();
    // Añadir el nuevo tweet
    tweets.push(tweet);
    // Convertir de string a arreglo para local storage
    localStorage.setItem('tweets', JSON.stringify(tweets) );
}

function obtenerTweetLocalStorage(){
    let tweets;
    // Revisamos los valores del local Storage
    if(localStorage.getItem('tweets') === null){
        tweets = [];
    } else {
        tweets = JSON.parse(localStorage.getItem('tweets'));
    }
    return tweets;
}