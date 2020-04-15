import data from './data/pokemon/pokemon.js';

const pokemon = Object.values(data.pokemon);

const firstViewPokemons = document.getElementById('firstViewPokemons');
const showMeTypes = document.getElementById('types');
const subMenu = document.getElementById('subMenu');
const firstPage = document.getElementById('firstPage');
const secondPage = document.getElementById('secondPage');
const pokemonTypes = document.getElementById('pokemonTypes');
const searchBar = document.getElementById('searchBar');
// constantes de Sort()
const ordenarPor = document.querySelectorAll('ordenarPor');
const primeraOpcion = document.getElementById('primeraOpcion');
const orderfromAtoZ = document.getElementById('a-z');
const orderfromZtoA = document.getElementById('z-a');
// constantes de los tipos de pokemon
const water = document.getElementById('water');
const bug = document.getElementById('bug');
const grass = document.getElementById('grass');
const fire = document.getElementById('fire');
const normal = document.getElementById('normal');
const poison = document.getElementById('poison');
const electric = document.getElementById('electric');
const ground = document.getElementById('ground');
const fighting = document.getElementById('fighting');
const psychic = document.getElementById('psychic');
const ghost = document.getElementById('ghost');
const dragon = document.getElementById('dragon');
const flying = document.getElementById('flying');
const fairy = document.getElementById('fairy');
const rock = document.getElementById('rock');
const dark = document.getElementById('dark');
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

// buscador
searchBar.addEventListener('keyup', (e) => {
  const searchString = e.target.value.toLowerCase();
  // console.log(searchString)
  const filtradoCaracteres = pokemon.filter((x) => {
    return x.name.includes(searchString);
  });
  // eslint-disable-next-line no-use-before-define
  pokemonTypes.innerHTML = iteratingData(filtradoCaracteres);
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

// eslint-disable-next-line func-names
const selection = function (typePokemon) {
  const pokemonSelected = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < pokemon.length; i++) {
    // eslint-disable-next-line eqeqeq
    if (pokemon[i].type == typePokemon) {
      pokemonSelected.push(pokemon[i]);
    }
  }
  return pokemonSelected;
};

// filtrado de pokemones
water.addEventListener('click', (event) => {
  event.preventDefault();
  const pokemonSeleccionado = selection(water.id);
  pokemonTypes.innerHTML = iteratingData(pokemonSeleccionado);
});

bug.addEventListener('click', (event) => {
  event.preventDefault();
  const pokemonSeleccionado = selection(bug.id);
  pokemonTypes.innerHTML = iteratingData(pokemonSeleccionado);
});

fire.addEventListener('click', (event) => {
  event.preventDefault();
  const pokemonSeleccionado = selection(fire.id);
  pokemonTypes.innerHTML = iteratingData(pokemonSeleccionado);
});

grass.addEventListener('click', (event) => {
  event.preventDefault();
  const pokemonSeleccionado = selection(grass.id);
  pokemonTypes.innerHTML = iteratingData(pokemonSeleccionado);
});
normal.addEventListener('click', (event) => {
  event.preventDefault();
  const pokemonSeleccionado = selection(normal.id);
  pokemonTypes.innerHTML = iteratingData(pokemonSeleccionado);
});

poison.addEventListener('click', (event) => {
  event.preventDefault();
  const pokemonSeleccionado = selection(poison.id);
  pokemonTypes.innerHTML = iteratingData(pokemonSeleccionado);
});

electric.addEventListener('click', (event) => {
  event.preventDefault();
  const pokemonSeleccionado = selection(electric.id);
  pokemonTypes.innerHTML = iteratingData(pokemonSeleccionado);
});

ground.addEventListener('click', (event) => {
  event.preventDefault();
  const pokemonSeleccionado = selection(ground.id);
  pokemonTypes.innerHTML = iteratingData(pokemonSeleccionado);
});

fighting.addEventListener('click', (event) => {
  event.preventDefault();
  const pokemonSeleccionado = selection(fighting.id);
  pokemonTypes.innerHTML = iteratingData(pokemonSeleccionado);
});

psychic.addEventListener('click', (event) => {
  event.preventDefault();
  const pokemonSeleccionado = selection(psychic.id);
  pokemonTypes.innerHTML = iteratingData(pokemonSeleccionado);
});

ghost.addEventListener('click', (event) => {
  event.preventDefault();
  const pokemonSeleccionado = selection(ghost.id);
  pokemonTypes.innerHTML = iteratingData(pokemonSeleccionado);
});

dragon.addEventListener('click', (event) => {
  event.preventDefault();
  const pokemonSeleccionado = selection(dragon.id);
  pokemonTypes.innerHTML = iteratingData(pokemonSeleccionado);
});

flying.addEventListener('click', (event) => {
  event.preventDefault();
  const pokemonSeleccionado = selection(flying.id);
  pokemonTypes.innerHTML = iteratingData(pokemonSeleccionado);
});

fairy.addEventListener('click', (event) => {
  event.preventDefault();
  const pokemonSeleccionado = selection(fairy.id);
  pokemonTypes.innerHTML = iteratingData(pokemonSeleccionado);
});

rock.addEventListener('click', (event) => {
  event.preventDefault();
  const pokemonSeleccionado = selection(rock.id);
  pokemonTypes.innerHTML = iteratingData(pokemonSeleccionado);
});

dark.addEventListener('click', (event) => {
  event.preventDefault();
  const pokemonSeleccionado = selection(dark.id);
  pokemonTypes.innerHTML = iteratingData(pokemonSeleccionado);
});

const orderAZ = (order) => {
  const orderlyAZ = order.sort((a, b) => { return (a.name > b.name) ? 1 : -1;
  });
  return orderlyAZ;
};

const orderZA = (order) => {
  const orderlyZA = order.sort((a, b) => { return (a.name < b.name) ? 1 : -1;
  });
  return orderlyZA;
};
console.log(orderZA(pokemon));

ordenarPor.addEventListener('change', (e) => {
  console.log(e)
});

// eslint-disable-next-line no-shadow
/*
const orderAZ = (ordenar , value) =>{
  const orderly = ordenar.sort((a,b)=>{
    if (value === 'a-z') {
      (a.name > b.name)
      return 1
    };
    if(a.name < b.name){
      return -1
    };
    return 0
  })
  return orderly;
};


const orderZA = (ordenar) =>{
  const orderly = allPokemons.sort(function(a,b){
    if (a.name < b.name){
      return 1
    };
    if(a.name > b.name){
      return -1
    };
    return 0
  })
  return orderly;
};
 */
