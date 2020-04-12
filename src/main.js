import data from  './data/pokemon/pokemon.js';
const pokemon = data.pokemon;

const firstViewPokemons = document.getElementById('firstViewPokemons');
const showMeTypes = document.getElementById('types');
const subMenu = document.getElementById('subMenu');
const firstPage = document.getElementById('firstPage');
const secondPage = document.getElementById('secondPage');
const pokemonTypes= document.getElementById('pokemonTypes');
//constantes de Sort()

const ordenarPor= document.getElementById('ordenarPor');
const primeraOpcion = document.getElementById('primeraOpcion');
const orderfromAtoZ = document.getElementById('a-z');
const orderfromZtoA = document.getElementById('z-a');
  //constantes de los tipos de pokemon
const water= document.getElementById('water');
const bug= document.getElementById('bug');
const grass= document.getElementById('grass');
const fire= document.getElementById('fire');
const normal= document.getElementById('normal');
const poison= document.getElementById('poison');
const electric= document.getElementById('electric');
const ground= document.getElementById('ground');
const fighting= document.getElementById('fighting');
const psychic= document.getElementById('psychic');
const ghost= document.getElementById('ghost');
const dragon= document.getElementById('dragon');
const flying= document.getElementById('flying');
const fairy= document.getElementById('fairy');
const rock= document.getElementById('rock');
const dark= document.getElementById('dark');
const all = document.getElementById('all');

  //mostrar mi data en pantalla
let allPokemons= '';
pokemon.forEach(show =>{
  allPokemons += `
  <div id="allPokemons" class="allPokemons">
  <ul>
  <li>${show.num}</li>
  <li><img src="${show.img}"</li>
  <li>${show.name}</li>
  </ul>
  </div>
  `
});
firstViewPokemons.innerHTML= allPokemons;

  
  const orderAZ = (ordenar) =>{
    const orderly = ordenar.sort((a,b)=>{
      if(a.name > b.name){
        return 1
      };
      if(a.name < b.name){
        return -1
      };
      return 0
    })
    return orderly;
  };
  
 /*
  const orderZA = (ordenar) =>{
    const orderly = allPokemons.sort(function(a,b){
      if(a.name < b.name){
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

ordenarPor.addEventListener('change', ()=> {
  const orderSelect= ordenarPor.value;
  orderAZ(allPokemons, orderSelect)
});
  
  //funciones para el filtrado
const recorrido= function(pokemonSeleccionado) {
  let showPokemonTypes ='';
  for (let i = 0; i < pokemonSeleccionado.length; i++) {
    subMenu.style.display = 'block';
    firstPage.style.display= 'none';
    secondPage.style.display= 'block';
    showPokemonTypes+=
    `<div id="waterPokemon" class="waterPokemon">
      <ul>
        <li>${pokemonSeleccionado[i].num}</li>
        <li><img src="${pokemonSeleccionado[i].img}"</li>
        <li>${pokemonSeleccionado[i].name}</li>
        </ul>
    </div>`
 };  
 return showPokemonTypes
};

const selection = function (typePokemon) {
  const pokemonSelected = [];
  for (let i = 0; i < pokemon.length; i++) {
    if (pokemon[i].type == typePokemon) {
      pokemonSelected.push(pokemon[i]); 
     
    }
  };
  return pokemonSelected
};

  //filtrado de pokemones 
subMenu.style.display="none"

types.addEventListener('click', function() {
  event.preventDefault()
  subMenu.style.display= 'block';
  TransitionEvent
});

water.addEventListener('click', function (event) {
  event.preventDefault()
  let pokemonSeleccionado =selection(water.id);
   pokemonTypes.innerHTML= recorrido(pokemonSeleccionado);
});

bug.addEventListener('click', function (event) {
  event.preventDefault()
  let pokemonSeleccionado =selection(bug.id);
   pokemonTypes.innerHTML= recorrido(pokemonSeleccionado);
});

fire.addEventListener('click', function (event) {
  event.preventDefault()
  let pokemonSeleccionado =selection(fire.id);
   pokemonTypes.innerHTML= recorrido(pokemonSeleccionado);
});

grass.addEventListener('click', function (event) {
  event.preventDefault()
  let pokemonSeleccionado =selection(grass.id);
   pokemonTypes.innerHTML= recorrido(pokemonSeleccionado);
});
normal.addEventListener('click', function (event) {
  event.preventDefault()
  let pokemonSeleccionado =selection(normal.id);
   pokemonTypes.innerHTML= recorrido(pokemonSeleccionado);
});

poison.addEventListener('click', function (event) {
  event.preventDefault()
  let pokemonSeleccionado =selection(poison.id);
   pokemonTypes.innerHTML= recorrido(pokemonSeleccionado);
});

electric.addEventListener('click', function (event) {
  event.preventDefault()
  let pokemonSeleccionado =selection(electric.id);
   pokemonTypes.innerHTML= recorrido(pokemonSeleccionado);
});

ground.addEventListener('click', function (event) {
  event.preventDefault()
  let pokemonSeleccionado =selection(ground.id);
   pokemonTypes.innerHTML= recorrido(pokemonSeleccionado);
});

fighting.addEventListener('click', function (event) {
  event.preventDefault()
  let pokemonSeleccionado =selection(fighting.id);
   pokemonTypes.innerHTML= recorrido(pokemonSeleccionado);
});

psychic.addEventListener('click', function (event) {
  event.preventDefault()
  let pokemonSeleccionado =selection(psychic.id);
   pokemonTypes.innerHTML= recorrido(pokemonSeleccionado);
});

ghost.addEventListener('click', function (event) {
  event.preventDefault()
  let pokemonSeleccionado =selection(ghost.id);
   pokemonTypes.innerHTML= recorrido(pokemonSeleccionado);
});

dragon.addEventListener('click', function (event) {
  event.preventDefault()
  let pokemonSeleccionado =selection(dragon.id);
   pokemonTypes.innerHTML= recorrido(pokemonSeleccionado);
});

flying.addEventListener('click', function (event) {
  event.preventDefault()
  let pokemonSeleccionado =selection(flying.id);
   pokemonTypes.innerHTML= recorrido(pokemonSeleccionado);
});

fairy.addEventListener('click', function (event) {
  event.preventDefault()
  let pokemonSeleccionado =selection(fairy.id);
   pokemonTypes.innerHTML= recorrido(pokemonSeleccionado);
});

rock.addEventListener('click', function (event) {
  event.preventDefault()
  let pokemonSeleccionado =selection(rock.id);
   pokemonTypes.innerHTML= recorrido(pokemonSeleccionado);
});

dark.addEventListener('click', function mostrar () {
  event.preventDefault()
  let pokemonSeleccionado =selection(dark.id);
   pokemonTypes.innerHTML= recorrido(pokemonSeleccionado);
});












 











 

 
 