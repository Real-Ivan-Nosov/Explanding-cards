const container = document.querySelector('.container');

container.addEventListener('click', (evt) => {
    evt.target.classList.toggle('active');
})