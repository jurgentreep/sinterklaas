const santaClausImage = document.querySelector('.santa-claus-image');
const giftBoxImage = document.querySelector('.gift-box-image');
const plantsImage = document.querySelector('.plants-image');
const audio = new Audio('horn.mp3');

giftBoxImage.addEventListener('click', () => {
  giftBoxImage.style.display = 'none';
  plantsImage.style.display = 'inline';
});

santaClausImage.addEventListener('click', () => {
  audio.play();
});