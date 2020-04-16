/* eslint-disable no-plusplus */
import data from './data/pokemon/pokemon.js';

const pokemon = Object.values(data.pokemon);

const firstViewPokemons = document.getElementById('firstViewPokemons');
const showMeTypes = document.getElementById('types');
const subMenu = document.getElementById('subMenu');
const firstPage = document.getElementById('firstPage');
const secondPage = document.getElementById('secondPage');
const pokemonTypes = document.getElementById('pokemonTypes');
const searchBar = document.getElementById('searchBar');
const selectOptionsDirections = document.querySelector('#ordenarPor');
/* const all = document.getElementById('all');


 mostrar mi data en pantalla */
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

// funciones para el filtrado

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

const selection = (typePokemon) => {
  const pokemonSelected = [];
  for (let i = 0; i < pokemon.length; i++) {
    if (pokemon[i].type == typePokemon) {
      pokemonSelected.push(pokemon[i]);
    }
  }
  return pokemonSelected;
};

const listaMenuTipos = document.querySelector('#subMenu');
listaMenuTipos.addEventListener('click', (event) => {
  const tipoSeleccionado = event.target.id;
  const objetosPorTipoSeleccionado = selection(tipoSeleccionado);
  pokemonTypes.innerHTML = iteratingData(objetosPorTipoSeleccionado);
});



// buscador
searchBar.addEventListener('keyup', (e) => {
  const searchString = e.target.value.toLowerCase();
  // console.log(searchString)
  const filtradoCaracteres = pokemon.filter(x => x.name.includes(searchString));
  pokemonTypes.innerHTML = iteratingData(filtradoCaracteres);
});

// Funciones para ordenar con el metodo Sort()
const orderAZ = (order) => {
  const orderlyAZ = order.sort((a, b) => { return (a.name > b.name) ? 1 : -1;
  });
  return orderlyAZ;
};

const orderZA = (order) => {
  const orderlyZA = order.sort((a, b) => ((a.name < b.name) ? 1 : -1));
  return orderlyZA;
};
// console.log(orderZA(pokemon));

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
