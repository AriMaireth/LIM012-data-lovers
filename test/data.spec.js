import {
  // eslint-disable-next-line import/named
  orderAZ, orderZA, selection, calculateStats,
} from '../src/data.js';

describe('Debe ser una función', () => {
  it('Comprobar que orderAZ es una función', () => {
    expect(typeof orderAZ).toBe('function');
  });
  it('comprobar que ordene de la A-Z', () => {
    const input = [
      { name: 'bulbasaur' },
      { name: 'ivysaur' },
      { name: 'venusaur' },
      { name: 'charmander' }];

    const output = [
      { name: 'bulbasaur' },
      { name: 'charmander' },
      { name: 'ivysaur' },
      { name: 'venusaur' },
    ];
    expect(orderAZ(input)).toEqual(output);
  });
});

describe('orderZA debe ser una función', () => {
  it('Comprobar que orderZA es una función', () => {
    expect(typeof orderZA).toBe('function');
  });
  it('comprobar que ordene de la Z-A', () => {
    const input = [
      { name: 'bulbasaur' },
      { name: 'ivysaur' },
      { name: 'venusaur' },
      { name: 'charmander' }];

    const output = [
      { name: 'venusaur' },
      { name: 'ivysaur' },
      { name: 'charmander' },
      { name: 'bulbasaur' },
    ];
    expect(orderZA(input)).toEqual(output);
  });
});

describe('selection debe ser una función', () => {
  it('Comprobar que selection es una función', () => {
    expect(typeof selection).toBe('function');
  });
  it('selection debe arrojar un nuevo array con los tipos de pokemon', () => {
    const input = [
      {
        num: '001',
        name: 'bulbasaur',
        type: ['fire', 'flying'],
      },
      {
        num: '035',
        name: 'ivysaur',
        type: ['bug'],
      },
      {
        num: '685',
        name: 'wartortle',
        type: ['grass'],
      },
      {
        num: '420',
        name: 'squirtel',
        type: ['water', 'fairy'],
      },
    ];
    const output = [
      {
        num: '420',
        name: 'squirtel',
        type: ['water', 'fairy'],
      },
    ];
    expect(selection(input, 'water')).toEqual(output);
  });
});


describe('calculateStats debe ser una funcion', () => {
  it('Comprobar que calculateStats es una función', () => {
    expect(typeof calculateStats).toBe('function');
  });
  it('calculateStats debe arrojar un nuevo array de objetos', () => {
    const input = [
      {
        name: 'bulbasaur',
        img: 'http1',
        num: '001',
        stats: {
          'base-attack': '116',
          'base-defense': '93',
          'base-stamina': '118',
        },
      },
      {
        name: 'ivysaur',
        img: 'http1',
        num: '035',
        stats: {
          'base-attack': '336',
          'base-defense': '85',
          'base-stamina': '658',
        },
      },
      {
        name: 'wartortle',
        img: 'http1',
        num: '685',
        stats: {
          'base-attack': '869',
          'base-defense': '13',
          'base-stamina': '758',
        },
      },
      {
        name: 'squirtel',
        img: 'http1',
        num: '685',
        stats: {
          'base-attack': '856',
          'base-defense': '15',
          'base-stamina': '235',
        },
      },
    ];
    const output = [
      {
        name: 'bulbasaur',
        img: 'http1',
        num: '001',
        average: '109.00',
      },
      {
        name: 'ivysaur',
        img: 'http1',
        num: '035',
        average: '359.67',
      },
      {
        name: 'wartortle',
        img: 'http1',
        num: '685',
        average: '546.67',
      },
      {
        name: 'squirtel',
        img: 'http1',
        num: '685',
        average: '368.67',
      },
    ];
    expect(calculateStats(input)).toEqual(output);
  });
});
