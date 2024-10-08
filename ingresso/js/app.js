function comprar() {
    //recuperar campos tipo de compra, qtde
    let tipoCompra = document.getElementById('tipo-ingresso').value;
    let quantidade = document.getElementById('qtd').value;

    let qtdPista = document.getElementById('qtd-pista');
    let qtdSuperior= document.getElementById('qtd-superior');
    let qtdInferior = document.getElementById('qtd-inferior');

    // Verificar se o produto selecionado é válido
    if (!tipoCompra || tipoCompra.trim() === "") {
        alert("Selecione um tipo de compra válido.");
        return;
    }

    // Verificar se a quantidade inserida é válida
    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Insira uma quantidade válida.");
        return;
    }

    //efetua a compra de ingresso
    if (tipoCompra == 'inferior') {
        comprarIngressos(qtdInferior, quantidade);
    } else if (tipoCompra == 'superior') {
        comprarIngressos(qtdSuperior, quantidade);
    } else {
        comprarIngressos(qtdPista, quantidade);
    }

}

function comprarIngressos(qtdTipo, quantidade){
    if ((qtdTipo.textContent - quantidade) >= 0){
        qtdTipo.textContent = (qtdTipo.textContent - quantidade);
        alert('Compra realizada com sucesso!')
    } else {
        alert('Quantidade de ingresso insuficiente!')
    }
}