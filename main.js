const pokeUrl = 'https://pokeapi.co/api/v2/pokemon/';
const searchInput = document.querySelector('#search');
const pokemonList = document.querySelector('.pokemon__list');
const buttonNext = document.querySelector('#button-next');
const buttonBack = document.querySelector('#button-back');

function showError(message) {
  pokemonList.innerHTML = `<p>${message}</p>`;
}

async function searchPokemon() {
  let searchedPokemon = searchInput.value.toLowerCase();

  try {
    let response = await fetch(pokeUrl + searchedPokemon);
    // const response = await fetch(pokeUrl + (+searchedPokemon + 1));
    let data = await response.json();

    if (!response.ok) {
      showError('you entered the wrong name');
      return;
    }

    pokemonList.innerHTML = `
    <div class="pokemon-item">
    <h2>${data.name.toUpperCase()}</h2>
    <p>ID: ${data.id}</p>
    <img src="${data.sprites.front_default}">
    </div>
    `;

    console.log(data);
  } catch (error) {
    console.error(error);
    showError('there was an error in the search...');
  }
}
async function nextPokemon() {
  let searchedPokemon = searchInput.value.toLowerCase();

  try {
    let countNext = +searchedPokemon + 1
    searchInput.value = countNext
    console.log(countNext);
    let response = await fetch(pokeUrl + countNext);
    let data = await response.json();

    if (!response.ok) {
      showError('you entered the wrong name');
      return;
    }

    pokemonList.innerHTML = `
    <div class="pokemon-item">
    <h2>${data.name.toUpperCase()}</h2>
    <p>ID: ${data.id}</p>
    <img src="${data.sprites.front_default}">
    </div>
    `;

    console.log(data);
  } catch (error) {
    console.error(error);
    showError('there was an error in the search...');
  }
}
async function backPokemon() {
  let searchedPokemon = searchInput.value.toLowerCase();

  try {
    let countBack = +searchedPokemon - 1
    searchInput.value = countBack
    console.log(countBack);
    let response = await fetch(pokeUrl + countBack);
    let data = await response.json();

    if (!response.ok) {
      showError('you entered the wrong name');
      return;
    }

    pokemonList.innerHTML = `
    <div class="pokemon-item">
    <h2>${data.name.toUpperCase()}</h2>
    <p>ID: ${data.id}</p>
    <img src="${data.sprites.front_default}">
    </div>
    `;

    console.log(data);
  } catch (error) {
    console.error(error);
    showError('there was an error in the search...');
  }
}

document.querySelector('#button-search').addEventListener('click', searchPokemon);
buttonNext.addEventListener('click', nextPokemon);
buttonBack.addEventListener('click', backPokemon);
