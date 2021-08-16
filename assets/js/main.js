// Show and hidden Modal
const buyBtns = document.querySelectorAll('.js-buy-btn');
const ticketModal = document.querySelector('.js-ticketModal');
const modalContent = document.querySelector('.js-modal-content');
const closeBtn = document.querySelector('.js-x-btn');

function showModal() {
    ticketModal.classList.add('show-modal');    
}

function hiddenModal() {
    ticketModal.classList.remove('show-modal');
}

for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showModal)
}

closeBtn.addEventListener('click', hiddenModal);

ticketModal.addEventListener('click', hiddenModal);

modalContent.addEventListener('click', (event) => {
    event.stopPropagation();
})