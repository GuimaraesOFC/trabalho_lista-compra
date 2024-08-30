// Esta função é chamada quando a página termina de carregar
window.onload = function() {
    // Seleciona todos os botões 'Comprar' presentes na página
    var comprarButtons = document.querySelectorAll('.comprar-btn');

    // Verifica se os botões foram selecionados
    console.log(comprarButtons);

    // Adiciona um event listener para cada botão 'Comprar'
    comprarButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Esta função é chamada cada vez que um botão 'Comprar' é clicado
            alert('Produto comprado com sucesso!');
        });
    });
};