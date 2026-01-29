// Espera a página carregar tudo, incluindo imagens
window.addEventListener("load", () => {
    const body = document.body;
    const transicao = document.getElementById("transicao");

    // Fade-out da tela de transição
    transicao.style.opacity = 0;
    setTimeout(() => transicao.style.display = "none", 500);

    // Adiciona classe para ativar fade-in de todos os elementos
    body.classList.add("loaded");
});

// Fade-out ao clicar nos botões
document.querySelectorAll('a.botao').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (!href || href.startsWith('#') || href.startsWith('http')) return;

        e.preventDefault();
        document.body.classList.add('fade-out');

        setTimeout(() => { window.location.href = href; }, 700);
    });
});

window.addEventListener("load", () => {
    document.body.classList.add("loaded");

    const transicao = document.getElementById("transicao");
    if (transicao) {
        transicao.style.opacity = "0";
        setTimeout(() => {
            transicao.style.display = "none";
        }, 1500);
    }
});