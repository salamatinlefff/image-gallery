import { randomPage, randomQuery, search as getSearch } from './services.js';
import search, { inputFocus } from './search.js';
import renderCards from './renderCards.js';

inputFocus();
search();
renderCards(await getSearch(randomQuery(), randomPage()));