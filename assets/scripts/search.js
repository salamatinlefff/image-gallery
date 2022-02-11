import renderCards from './renderCards.js';
import { search as getSearch} from './services.js';

const searchForm = document.querySelector('.header__search-form');
const searchClearButton = document.querySelector('.search__clear-button');




const clearSearch = () => {
  searchForm[0].value = '';
  searchClearButton.classList.remove('visible');
};

searchClearButton.addEventListener('click', event => {
  event.preventDefault();
  clearSearch();
});

searchForm.addEventListener('keydown', event => {
  if(event.key === 'Escape') {
    clearSearch();
  }
});

searchForm.addEventListener('input', () => {
  const query = searchForm[0].value;

  if(query) {
    searchClearButton.classList.add('visible');
  } else {
    searchClearButton.classList.remove('visible');
  }
});

const search = () => {
  searchForm.addEventListener('submit', async event => {
    event.preventDefault();
    const query = searchForm[0].value;
    
    renderCards(await getSearch(query));
  })
};

export default search;