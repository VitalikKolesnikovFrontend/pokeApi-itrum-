const pokemonList = document.querySelector('.pokemon__list');
const buttons = document.querySelector('#buttons');
let pokemonUrl = 'https://pokeapi.co/api/v2/pokemon';
let buttonNext;
let buttonBack;
let templateHtml;
const getPokemons = async (url) => {
  try {
    const response = await fetch(url);
    const results = await response.json();
    console.log(results);
    dataPokemons(results.results);
    buttonNext = results.next ? `<button class="btn" data-url=${results.next}>next</button>` : '';
    buttonBack = results.previos ? `<button class="btn" data-url=${results.previos}></button>` : '';
    buttons.innerHTML = buttonBack + ' ' + buttonNext;
  } catch (error) {
    console.log(error);
  }
};
getPokemons(pokemonUrl);

const dataPokemons = async (data) => {
  pokemonList.innerHTML = '';
  try {
    for (let index of data) {
      const resp = await fetch(index.url);
      const res = await resp.json();
      console.log(res);
      templateHtml = `
      <div class="pokemon__items">
      <img src=${res.sprites.front_default} alt=${res.name}/>
      <p>${res.name}</p>
      </div>
      `;
      pokemonList.innerHTML += templateHtml;
    }
  } catch (error) {
    console.log(error);
  }
};

buttons.addEventListener('click', (e) => {
  if (e.target.classList.contains('btn')) {
    let value = e.target.dataset.url;
    getPokemons(value);
  }
});
