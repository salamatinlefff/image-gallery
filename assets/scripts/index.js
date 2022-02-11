import { getData, search as getSearch } from './services.js';
import search from './search.js';
import renderCards from './renderCards.js';

search();
renderCards(await getSearch('random'));
