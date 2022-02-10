import renderCards from './renderCards.js';
import { search as getSearch} from './services.js';

const searchForm = document.querySelector('.header__search-form');

const search = () => {
  searchForm.addEventListener('submit', async event => {
    event.preventDefault();
    const query = searchForm[0].value
    renderCards(await getSearch(query))
  })

}

export default search;