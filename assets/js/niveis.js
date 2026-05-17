function configurarModalMedalhas() {
    const modalElement = document.getElementById('modalMedalhas');
    if (!modalElement) return;

    if (typeof bootstrap === 'undefined' || !bootstrap.Modal) return;

    const modal = bootstrap.Modal.getOrCreateInstance(modalElement);

    const btnVerMedalhas = document.getElementById('btn-ver-medalhas');
    if (!btnVerMedalhas) return;

    btnVerMedalhas.addEventListener('click', () => {
        modal.show();
    });
}

function configurarModalDica() {
    const modalElement = document.getElementById('modalDica');
    if (!modalElement) return;

    if (typeof bootstrap === 'undefined' || !bootstrap.Modal) return;

    const modal = bootstrap.Modal.getOrCreateInstance(modalElement);

    const btnDica = document.getElementById('btn-saiba-mais');
    if (!btnDica) return;

    btnDica.addEventListener('click', (event) => {
        event.preventDefault();
        modal.show();
    });
}

function configurarAnimacoes() {
    const elementos = document.querySelectorAll('.animate-in');
    if (!elementos.length) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1 },
    );

    elementos.forEach((el) => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });
}

function configurarBarraProgresso() {
    const barra = document.querySelector('.barra-fill');
    if (!barra) return;

    const progresso = barra.dataset.progresso || barra.style.width;

    barra.style.transition = 'none';
    barra.style.width = '0%';

    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            barra.style.transition = 'width 1.2s cubic-bezier(0.4, 0, 0.2, 1)';
            barra.style.width = progresso;
        });
    });
}

function inicializar() {
    configurarBarraProgresso();
    configurarAnimacoes();
}

function inicializarAposLayout() {
    configurarModalMedalhas();
    configurarModalDica();
    abrirModalPorURL();
}

function abrirModalPorURL() {
    const params = new URLSearchParams(window.location.search);
    if (params.get('modal') !== 'medalhas') return;

    const modalElement = document.getElementById('modalMedalhas');
    if (!modalElement) return;
    if (typeof bootstrap === 'undefined' || !bootstrap.Modal) return;

    const modal = bootstrap.Modal.getOrCreateInstance(modalElement);
    modal.show();

    history.replaceState(null, '', window.location.pathname);
}

document.addEventListener('DOMContentLoaded', inicializar);

document.addEventListener(
    'layout:carregado',
    inicializarAposLayout,
    { once: true },
);
