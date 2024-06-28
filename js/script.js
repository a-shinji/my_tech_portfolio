// モーダル
const modal = document.querySelector('.work_experience__js-modal')
const openButton = document.querySelector('.work_experience__js-modal-open')

function modalOpen() {
  if (!modal.classList.contains('is-active')) {
    modal.classList.add('is-active');
  }
}
openButton.addEventListener('click', modalOpen);

function modalClose(e) {
  if (modal.classList.contains('is-active') && e.target == modal) {
    modal.classList.remove('is-active');
  }
}
modal.addEventListener('click', modalClose);

// 別のモーダル
const modalSecond = document.querySelector('.work_experience__js-modal--second')
const openButtonSecond = document.querySelector('.work_experience__js-modal-open--second')

function modalOpenSecond() {
  if (!modalSecond.classList.contains('is-active')) {
    modalSecond.classList.add('is-active');
  }
}
openButtonSecond.addEventListener('click', modalOpenSecond);

function modalCloseSecond(e) {
  if (modalSecond.classList.contains('is-active') && e.target == modalSecond) {
    modalSecond.classList.remove('is-active');
  }
}
modalSecond.addEventListener('click', modalCloseSecond);

// 別のモーダル
const modalThird = document.querySelector('.work_experience__js-modal--third')
const openButtonThird = document.querySelector('.work_experience__js-modal-open--third')

function modalOpenThird() {
  if (!modalThird.classList.contains('is-active')) {
    modalThird.classList.add('is-active');
  }
}
openButtonThird.addEventListener('click', modalOpenThird);

function modalCloseThird(e) {
  if (modalThird.classList.contains('is-active') && e.target == modalThird) {
    modalThird.classList.remove('is-active');
  }
}
modalThird.addEventListener('click', modalCloseThird);

// 別のモーダル
const modalFourth = document.querySelector('.work_experience__js-modal--fourth')
const openButtonFourth = document.querySelector('.work_experience__js-modal-open--fourth')

function modalOpenFourth() {
  if (!modalFourth.classList.contains('is-active')) {
    modalFourth.classList.add('is-active');
  }
}
openButtonFourth.addEventListener('click', modalOpenFourth);

function modalCloseFourth(e) {
  if (modalFourth.classList.contains('is-active') && e.target == modalFourth) {
    modalFourth.classList.remove('is-active');
  }
}
modalFourth.addEventListener('click', modalCloseFourth);

