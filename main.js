const open = document.querySelector('#open');
const close = document.querySelector('#close');
const modal = document.querySelector('#modal');

eventos();
function eventos() {
  open.addEventListener('click', () =>  modal.style.display = 'block')
  
  close.addEventListener('click', () =>  modal.style.display = 'none')
}
