document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');//aqui é para pegar todos os botões para essa função
    const questions = document.querySelectorAll('[data-faq-question]');

//aqui é a configuração para quando a rolagem passar de um ponto da página os botões aparecerem
    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight; //aqui é para pegar a autura do botão

    //aqui vai pegar a barra de rolagem do eixo Y que é a vertical de cima para baixo
    window.addEventListener('scroll', function() {
        const posicaoAtual = window.scrollY;

        //o IF significa QUANDO, nesse caso fica assim: quando posicaoAtual for menor que alturaHero 
        if (posicaoAtual < alturaHero) {
            ocultaElementosDoHeader(); // aqui é o chamado do elemento de baixo
        } else {
            exibeElementosDoHeader();
        }

    })

    //seção de atraçôes, programação das abas
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) { //aqui  é para adicionar o evento com o click
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondeTodasAbas();
            aba.classList.add('shows__list--is-active');
            removeBotaoAtivo();
            botao.target.classList.add('shows__tabs__button--is-active');
        })
    }
    //seção FAQ, acordion
// adicionando um elemento de clik
    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', abreOuFechaResposta);
    }

})
// aqui adiciona a ação 
function ocultaElementosDoHeader() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}
//aqui remove a ação
function exibeElementosDoHeader() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

function abreOuFechaResposta(elemento) { //esse elemento no caso é o questions
    const classe = 'faq__questions__item--is-open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);
}

function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

function escondeTodasAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}