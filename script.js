const btn = document.querySelector('.btn');
const links = document.querySelector('.links');

btn.addEventListener('click', () => {
  links.classList.toggle('show');
  if (btn.getAttribute('src') == './images/icon-hamburger.svg') {
    btn.src = './images/icon-close.svg'
  } else {
    btn.src = './images/icon-hamburger.svg'
  }
})