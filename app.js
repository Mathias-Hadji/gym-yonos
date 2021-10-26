const btns = document.querySelectorAll('.btn-modale');
const blocModale = document.querySelector('.bloc-modale');
const imgIndex = document.querySelector('.bloc-modale img');

if(window.matchMedia("(min-width: 850px)").matches) {
    for(let i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', (e) => {
            imgIndex.src = `ressources/img${e.target.getAttribute('data-index')}-equip.jpg`;
            blocModale.classList.add('active-modale');
        });
    };
    
    blocModale.addEventListener('click', () => {
        blocModale.classList.remove('active-modale');
    });
}