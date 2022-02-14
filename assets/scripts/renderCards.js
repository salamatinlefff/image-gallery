import renderPopup from './renderPopup.js';

const renderCards = async(data) => {
    const cardsWrapper = document.querySelector('.card__wrapper');
    cardsWrapper.innerHTML = '';
    Promise.all( data.results.map( async item => {
      let div = document.createElement('div')
      div.className = 'card__image-wrapper'
      let img = document.createElement('img')
      img.className = 'card__image'
      img.setAttribute('src', item.urls.regular)
      img.setAttribute('alt', item.alt_description)
      img.setAttribute('width', 320)
      img.setAttribute('height', 220)
      
      div.append(img);

      div.addEventListener('click', () => {
        renderPopup(item, cardsWrapper);
        document.body.classList.add('body__scrollbar-hidden')
      })

      return div
    }))
    .then(cards => {
      cardsWrapper.append(...cards)
    })
}

export default renderCards;