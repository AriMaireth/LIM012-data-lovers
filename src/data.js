// estas funciones son de ejemplo
export const orderAZ = (ordenar, condition) => {
  if (condition === 'a-z') {
    ordenar.sort((a, b) => ((a.name > b.name) ? -1 : 1));
  } else {
    ordenar.sort((a, b) => ((a.name < b.name) ? -1 : 1));
  }
};
/* export const filtrarProductoPorValor = (array, number, orden) => {
    const newArray = [];
    if(array[i].valor > number){
          newArray.push(array[i])
        }
      if(orden === 'menor'){
        if(array[i].valor < number){
          newArray.push(array[i])
        }
      }
    return newArray
  }

  console.log(filtrarProductoPorValor)
  console.log(dataProductos);
  
  const inputDelValor = document.getElementById('valorcito');
  const inputDelOrden = document.getElementById('ordencito');
  const botonConsultar = document.getElementById('btn-consultar');
  
  botonConsultar.addEventListener('click', () => {
     const valorUsuario = parseInt(inputDelValor.value);
     const ordenUsuario = inputDelOrden.value;
     const resultado = filtrarProductoPorValor(dataProductos, valorUsuario, ordenUsuario)
     let stringTempalte = '';
     for(let i = 0; i < resultado.length; i++){
      stringTempalte += `<div>${resultado[i].nombre}</div>
                        <div>${resultado[i].valor}</div>`
     }
  
     document.getElementById('mostrar-productos').innerHTML = stringTempalte
  })


  const viewAll = function name(params) {
    const firstViewPokemons = document.getElementById('firstViewPokemons');
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
    return
  }
  */
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
  
  
