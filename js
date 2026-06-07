const aparecer = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('visivel');
        }
    });
}, { threshold: 0.15 });

// aplica nas caixinhas
document.querySelectorAll('.cartao, .sobre, .contato').forEach((el) => {
    aparecer.observe(el);
});
