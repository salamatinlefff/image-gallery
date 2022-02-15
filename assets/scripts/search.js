import renderCards from './renderCards.js';
import { search as getSearch} from './services.js';

const cardWrapper = document.querySelector('.card__wrapper');
const searchForm = document.querySelector('.header__search-form');
const searchClearButton = document.querySelector('.search__clear-button');

export const inputFocus = () => {
  searchForm[0].focus()
};

const isEmpty = query => {
  if(query) {
    return false
  } else {
    return true
  }
};

const addTextIsEmpty = () => {
  const warning = document.createElement('p');
  warning.className = 'card__text';
  warning.textContent = 'Please enter a search query before searching';

  cardWrapper.innerHTML = '';
  cardWrapper.append(warning);

  warning.addEventListener('click', () => {
    searchForm[0].focus();
  });

  cardWrapper.classList.remove('card_hide');
};

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

    if(isEmpty(query)) {
      cardWrapper.classList.add('card_hide');
      setTimeout(addTextIsEmpty, 300)
    } else {
      renderCards(await getSearch(query));
    }
  })
};

export default search;