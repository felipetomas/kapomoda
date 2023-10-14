//  Script responsável pela automação do menu hamburger

const btnMobile = document.getElementById('btn-mobile');
// const >> declara a nossa variavel, no uso decorrer do codigo

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventdefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAtrribute('aria-expanded', active);
    if (active){
        event.currentTarget.setAtrribute('arial-label', 'Fechar Menu');
    } else {
        event.currentTarget.setAtrribute('arial-label', 'Abrir Menu');
    }
}
btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)