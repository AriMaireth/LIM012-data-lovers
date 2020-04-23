
export const orderAZ = (order) => {
  const orderlyAZ = order.sort((a, b) => ((a.name > b.name) ? 1 : -1));
  return orderlyAZ;
};

export const orderZA = (order) => {
  const orderlyZA = order.sort((a, b) => ((a.name < b.name) ? 1 : -1));
  return orderlyZA;
};


export const selection = (pokemon, typePokemon) => {
  const pokemonSelected = [];
  for (let i = 0; i < pokemon.length; i += 1) {
    // eslint-disable-next-line eqeqeq
    if (pokemon[i].type.includes(typePokemon)) {
      pokemonSelected.push(pokemon[i]);
    }
  }
  return pokemonSelected;
};

export const calculateStats = (element) => {
  const newData = [];
  element.forEach((x) => {
    const name = x.name;
    const img = x.img;
    const num = x.num;
    const attack = x.stats['base-attack'];
    const defense = x.stats['base-defense'];
    const stamina = x.stats['base-stamina'];
    // eslint-disable-next-line radix
    const average = ((parseInt(attack) + parseInt(defense) + parseInt(stamina)) / 3).toFixed(2);
    const object = {
      name, img, num, average,
    };
    newData.push(object);
  });
  return newData;
};
