import Vue from 'nativescript-vue';
import axios from 'axios';

const EventBus = new Vue();

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

const typeColors = {
  bug: '#99C32E',
  dark: '#5F5A6B',
  dragon: '#086CC0',
  electric: '#F4D644',
  fairy: '#EB92E5',
  fighting: '#D34364',
  fire: '#FEA152',
  flying: '#93ADDF',
  ghost: '#5F6CBA',
  grass: '#5CBB57',
  ground: '#D97F4D',
  ice: '#79D1C6',
  normal: '#919B9F',
  poison: '#A965C7',
  psychic: '#F77277',
  rock: '#C8B88B',
  steel: '#548D9E',
  water: '#59A0DB',
};

export { EventBus, api, gens, formatNum, typeColors };
