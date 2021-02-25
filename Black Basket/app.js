const hamburger = document.querySelector('.fa-bars');
const navLinks = document.querySelector('.nav-links');
const navClose = document.querySelector('.nav-close');
const navItems = document.querySelectorAll('.nav-links li a')
const modalBtn = document.querySelector('.booking')
const modalBg = document.querySelector('.modal-bg')
const modalClose = document.querySelector('.modal-close')
const bookRes = document.querySelector('.book-res')
const reservations = document.querySelector('.reservations')

hamburger.addEventListener('click', () => {
    navLinks.classList.add('nav-active');
    
})

    navClose.addEventListener('click', () => {
        navLinks.classList.remove('nav-active');
})


navItems.forEach((item) => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('nav-active');
        
})
})

modalBtn.addEventListener('click', () => {
    modalBg.classList.add('modal-active')
})

reservations.addEventListener('click', () => {
    modalBg.classList.add('modal-active')
})

modalClose.addEventListener('click', () => {
    modalBg.classList.remove('modal-active')
})

bookRes.addEventListener('click', () => {
    modalBg.classList.remove('modal-active')
    alert("Thank you for booking a table with us!")
})


