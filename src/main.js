/* eslint-disable no-undef */
/* eslint-disable no-plusplus */
import data from './data/pokemon/pokemon.js';
import { orderAZ, orderZA, selection } from './data.js';

const pokemon = data.pokemon;

const firstViewPokemons = document.getElementById('firstViewPokemons');
const showMeTypes = document.getElementById('types');
const subMenu = document.getElementById('subMenu');
const firstPage = document.getElementById('firstPage');
const secondPage = document.getElementById('secondPage');
const pokemonTypes = document.getElementById('pokemonTypes');
const searchBar = document.getElementById('searchBar');
const selectOptionsDirections = document.querySelector('#ordenarPor');

// mostrar mi data en pantalla

let allPokemons = '';
Object.values(pokemon).forEach((show) => {
  allPokemons += `
   <div id="allPokemons" class="allPokemons">
    <ul>
    <li>${show.num}</li>
    <li><img src="${show.img}"</li>
    <li>${show.name}</li>
    </ul>
    </div>
    `;
});
firstViewPokemons.innerHTML = allPokemons;

subMenu.style.display = 'none';
showMeTypes.addEventListener('click', (event) => {
  event.preventDefault();
  subMenu.style.display = 'block';
});

// Filtrado de mis pokemones

const iteratingData = (pokemonSeleccionado) => {
  let showPokemonTypes = '';
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < pokemonSeleccionado.length; i++) {
    subMenu.style.display = 'block';
    firstPage.style.display = 'none';
    secondPage.style.display = 'block';
    showPokemonTypes += `<div id="waterPokemon" class="waterPokemon">
      <ul>
        <li>${pokemonSeleccionado[i].num}</li>
        <li><img src="${pokemonSeleccionado[i].img}"</li>
        <li>${pokemonSeleccionado[i].name}</li>
        </ul>
    </div>`;
  }
  return showPokemonTypes;
};

const listaMenuTipos = document.querySelector('#subMenu');
listaMenuTipos.addEventListener('click', (event) => {
  const tipoSeleccionado = event.target.id;
  const objetosPorTipoSeleccionado = selection(pokemon, tipoSeleccionado);
  pokemonTypes.innerHTML = iteratingData(objetosPorTipoSeleccionado);
});

// buscador

searchBar.addEventListener('keyup', (e) => {
  const searchString = e.target.value.toLowerCase();
  const filtradoCaracteres = pokemon.filter(x => x.name.includes(searchString));
  pokemonTypes.innerHTML = iteratingData(filtradoCaracteres);
});

// Funciones para ordenar con el metodo Sort()
selectOptionsDirections.addEventListener('change', (event) => {
  const ordenSeleccionado = event.target.value;
  if (ordenSeleccionado === 'a-z') {
    const dataOrdenada = orderAZ(pokemon);
    pokemonTypes.innerHTML = iteratingData(dataOrdenada);
  }
  if (ordenSeleccionado === 'z-a') {
    const dataOrdenada = orderZA(pokemon);
    pokemonTypes.innerHTML = iteratingData(dataOrdenada);
  }
});


// console.log(mostrarPromedio(pokemon));

// const topCinco = (elemento) => {
//  const topSeleccion = elemento.sort((a,b) =>
//     b.promedio - a.promedio).slice(0,5);
// return topSeleccion
// }
