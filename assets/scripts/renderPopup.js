export const closeOverlay = (overlay) => {
  overlay.classList.remove('popup__visible');
  document.body.classList.remove('body__scrollbar-hidden')


  setTimeout(() => {
    overlay.remove()
  }, 405);
};

const renderPopup = (card, wrapper) => {
  const popupOverlay = document.createElement('div');
  popupOverlay.className = 'popup__overlay';


  const image = document.createElement('img');
  image.className = 'popup__image';
  image.setAttribute('src', card.urls.regular);

  const button = document.createElement('button');
  button.className = 'popup__close-button';
  button.innerHTML = '<svg class="popup__clear-button-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="currentColor"><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg>';


  const popupDesc = document.createElement('div');
  popupDesc.className = 'popup__description';

  const descAuthor = document.createElement('span');
  descAuthor.className = 'description__author';
  descAuthor.textContent = `Author: ${card.user.name ? card.user.name : card.user.username}`
  
  const descFullText = document.createElement('p');
  descFullText.className = 'description__full-text';
  descFullText.textContent = `Max resolution(new window): `
  
  const descFullSize = document.createElement('a');
  descFullSize.className = 'description__full-size';
  descFullSize.textContent = `click`;
  descFullSize.setAttribute('href', card.urls.full);
  descFullSize.setAttribute('target', 'blank');

  descFullText.append(descFullSize);
  popupDesc.append(descAuthor, descFullText);
  popupOverlay.append(image, button, popupDesc);
  wrapper.append(popupOverlay);


  setTimeout(() => {
    popupOverlay.classList.add('popup__visible');

    popupOverlay.addEventListener('click', event => {
      if(!event.target.classList.contains('popup__image') && !event.target.classList.contains('description__full-text') && !event.target.classList.contains('description__author')  && !event.target.classList.contains('description__full-size')) {
        closeOverlay(popupOverlay);
      }
    });

    document.body.addEventListener('keydown', event => {
      if(event.key === 'Escape') closeOverlay(popupOverlay)
    })
  }, 0);
  
}

export default renderPopup;
