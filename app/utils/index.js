import axios from 'axios';

const api = axios.create({ baseURL: `https://pokeapi.co/api/v2` });

const genOffsets = {
  kanto: {
    offset: 0,
    limit: 151,
  },
  johto: {
    offset: 151,
    limit: 100,
  },
  hoenn: {
    offset: 251,
    limit: 135,
  },
  sinnoh: {
    offset: 386,
    limit: 107,
  },
  unova: {
    offset: 493,
    limit: 156,
  },
};

export { api, genOffsets };
