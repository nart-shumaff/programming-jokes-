const API_JOKE = 'https://sv443.net/jokeapi/v2/joke/Programming,Miscellaneous?blacklistFlags=nsfw,sexist&type=single';
const JokeDiv = document.querySelector(".joke-div");
const ActivB = document.querySelector(".getMore");
async function getJoke(){
    JokeDiv.innerHTML = ''
    const respons  = await fetch(API_JOKE);
    const json = await respons.json();

    // console.log(json.joke);  

    const jokeElement = document.createElement('div');
    jokeElement.classList.add('joke-div');

    const jokeElementText = document.createElement('h2');
    jokeElementText.textContent = json['joke'];

    jokeElementText.classList.add('joke-text');

    jokeElement.appendChild(jokeElementText);

    JokeDiv.appendChild(jokeElement);
}


ActivB.addEventListener('click',getJoke);