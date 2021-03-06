// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => appendJoke(data))
};

const appendJoke = (data) => {
    const container = document.getElementById('jokeContainer');
    container.innerText = data.joke
}

window.onload = () => fetchJoke();