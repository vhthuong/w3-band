//-----Responsive Mobile------
//Header menu 
const header = document.getElementById('header');
const mobileMenu = document.getElementById('mobile-menu');
const headerHeight = header.clientHeight;
mobileMenu.onclick = function() {
    let isClosed = header.clientHeight === headerHeight;
    if (isClosed) {
        header.style.height = 'auto';
    } else {
        header.style.height = null;
    }
}

// Auto close menu when click on menu item
const menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for (let item = 0; item < menuItems.length; item++ ){
    let menuItem = menuItems[item];
    
    menuItem.onclick = function(event) {
        let isParentMenu = menuItem.nextElementSibling && menuItem.nextElementSibling.classList.contains('subnav');
        if (isParentMenu){
            event.preventDefault()
        } 
        else {
            header.style.height = null;
        }
    }
}

// -----------Show and hidden Modal---------
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