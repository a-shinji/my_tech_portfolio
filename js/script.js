function setupModal(modalSelector, openButtonSelector) {
  const modal = document.querySelector(modalSelector)
  const openButton = document.querySelector(openButtonSelector)

  function modalOpen() {
    if (!modal.classList.contains('is-active')) {
      modal.classList.add('is-active');
    }
  }

  function modalClose(e) {
    if (modal.classList.contains('is-active') && e.target == modal) {
      modal.classList.remove('is-active');
    }
  }

  openButton.addEventListener('click', modalOpen);
  modal.addEventListener('click', modalClose);
}

setupModal('.work_experience__js-modal--wellness', '.work_experience__js-modal-open--wellness');
setupModal('.work_experience__js-modal--ev', '.work_experience__js-modal-open--ev');
setupModal('.work_experience__js-modal--ai', '.work_experience__js-modal-open--ai');
setupModal('.work_experience__js-modal--soccer', '.work_experience__js-modal-open--soccer');
setupModal('.work_experience__js-modal--aurora', '.work_experience__js-modal-open--aurora');

const target = document.querySelector('.self-promotion__blog')
const targetImage = document.querySelector('.self-promotion__blog-image')
function invertColor() {
  if (!targetImage.classList.contains('invert-color')) {
    targetImage.classList.add('invert-color');
  }
}
function revertColor() {
  if (targetImage.classList.contains('invert-color')) {
    targetImage.classList.remove('invert-color');
  }
}
target.addEventListener('mouseover', invertColor);
target.addEventListener('mouseout', revertColor);

// 
// フッターに表示している著作権に関する表記の年度を取得するための処理
// 
document.addEventListener('DOMContentLoaded', () => {
  const today = new Date();
  const year = today.getFullYear();
  document.getElementById('current-year').textContent = year;
});
