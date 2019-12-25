import axios from 'axios';

const api = axios.create({ baseURL: `https://pokeapi.co/api/v2` });

const gens = [
  {
    gen: 1,
    name: 'Kanto',
    offset: 0,
    limit: 151,
  },
  {
    gen: 2,
    name: 'Johto',
    offset: 151,
    limit: 100,
  },
  {
    gen: 3,
    name: 'Hoenn',
    offset: 251,
    limit: 135,
  },
  {
    gen: 4,
    name: 'Sinnoh',
    offset: 386,
    limit: 107,
  },
  {
    gen: 5,
    name: 'Unova',
    offset: 493,
    limit: 156,
  },
];

const formatNum = (index, gen) => {
  const { offset } = gens[gen - 1];
  const num = `${index + 1 + offset}`;
  return num.padStart(3, '0');
};

export { api, gens, formatNum };
