function adicionar(){
    //recuperar valores nome do produto, quantidade e valor
    let nomeProduto = document.getElementById('produto');
    let quantidade = document.getElementById('quantidade');
    

}

function limpar(){

}

//Codigo proprio
// function adicionar(){
//     let produto = document.getElementById(`produto`);
//     let produtoNome = produto.value.split('-')[0].trim();
//     let produtoValor = produto.value.split('-')[1].trim().replace('R$', '');
//     let quantidade = document.getElementById(`quantidade`).value;
//     let carrinhoProdutos = document.getElementById(`lista-produtos`);
//     let valorTotal = document.getElementById(`valor-total`);
//     let calculoValorTotal = parseFloat(valorTotal.innerHTML.replace('R$', ''));

//     if(quantidade == ''){
//         alert('Informe uma quantidade!');
//         return;
//     }else {
//         quantidade = parseInt(quantidade);
//         calculoValorTotal += parseFloat(quantidade) * parseFloat(produtoValor); 
//         valorTotal.innerHTML = 'R$'+calculoValorTotal;
//         console.log(calculoValorTotal);
//     }

//     let novoProduto = document.createElement('section');
//     novoProduto.className = 'carrinho__produtos__produto';
//     novoProduto.innerHTML = `<span class="texto-azul">${quantidade}x</span> ${produtoNome} <span class="texto-azul">R$${produtoValor}</span>`;

//     carrinhoProdutos.appendChild(novoProduto);

// }

// function limpar() {
//     document.getElementById(`lista-produtos`).innerHTML = '';
//     document.getElementById(`valor-total`).innerHTML = 'R$0';
// }