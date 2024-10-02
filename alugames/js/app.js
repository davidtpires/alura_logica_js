let jogosAlugados = 0;
qtdJogosAlugados();
verificaPalindromo('subi no onibus');
ordenaNumero(4,7,2);


function contarEExibirJogosAlugados() {
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}

function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');

    if (botao.classList.contains('dashboard__item__button--return')){
        if (confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`)){
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = "Alugar";
            imagem.classList.remove('dashboard__item__img--rented');
        } 
    } else {
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = "Devolver";
        imagem.classList.add('dashboard__item__img--rented');
    }

    contarEExibirJogosAlugados();
    // qtdJogosAlugados();
}

document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarEExibirJogosAlugados();
});


function qtdJogosAlugados(){
    let counter = 0;
    
    for (let i = 1; i <= 3; i++){
        let gameClicado = document.getElementById(`game-${i}`);
        let botao = gameClicado.querySelector('.dashboard__item__button');
        if (botao.classList.contains('dashboard__item__button--return')){
            counter++;
        }
    }
    console.log(`A quantidade de jogos aluguados são: ${counter}.`);
}

function verificaPalindromo(palavra){
    palavra = palavra.replace(/\s+/g, '');
    let palavraInvertida = palavra.split('').reverse().join('');

    if(palavra == palavraInvertida){
        console.log('A frase é um palíndromo!');
    } else {
        console.log('A frase não é um palíndromo!');
    }
}

function ordenaNumero(n1, n2, n3){
    const numerosOrdenados = [n1, n2, n3].sort((x, y) => x - y);
    console.log(`Números ordenados: ${numerosOrdenados.join(', ')}`);
}



