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

