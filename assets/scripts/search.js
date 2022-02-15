import renderCards from './renderCards.js';
import { randomPage, search as getSearch} from './services.js';

const cardWrapper = document.querySelector('.card__wrapper');
const homeLink = document.querySelector('.header__home');
const searchForm = document.querySelector('.header__search-form');
const searchClearButton = document.querySelector('.search__clear-button');

export const inputFocus = () => {
  searchForm[0].focus()
};

const isEmptySearchForm = query => {
  if(query) {
    return false
  } else {
    return true
  }
};

const isEmptyData = (data) => {
  if(data.total_pages === 0) {
    return true
  } else {
    return false
  }
}

const addTextIsEmpty = (text) => {
  const warning = document.createElement('p');
  warning.className = 'card__text';
  warning.textContent = text ? text : 'Please enter a search query before searching';

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

homeLink.addEventListener('click', async() => {
  searchForm[0].value = '';
  renderCards(await getSearch('kitten', randomPage(131)))
})

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
    const isEmptyQuery = isEmptyData(await getSearch(query))

    if(isEmptySearchForm(query)) {
      cardWrapper.classList.add('card_hide');
      setTimeout(addTextIsEmpty, 300)
    } else if(isEmptyQuery) {
      addTextIsEmpty(`Your search "${query}" did not match any listings.`)
    } else {
      renderCards(await getSearch(query));
    }
  })
};

export default search;