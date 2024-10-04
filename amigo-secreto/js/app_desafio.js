let amigos = [];
let amigosSorteados = [];

function adicionar() {
    let nomeAmigo = document.getElementById('nome-amigo').value;

    if (!nomeAmigo || nomeAmigo.trim() === "") {
        alert("Informe um nome de amigo.");
        return;
    }else {
        for (const amigo of amigos) {
            if (amigo == nomeAmigo){
                alert(`Nome: ${nomeAmigo} já registrado, escolha outro:`);
                return;
            }        
        }
        amigos.push(nomeAmigo);
        document.getElementById('nome-amigo').value = '';
        document.getElementById('lista-amigos').textContent = amigos;
    }   
}

function sortear() {
    console.clear();
    amigosSorteados = amigos.slice();
    document.getElementById('lista-sorteio').innerHTML = '';

    for (const amigo of amigos) {
        sortearAmigo(amigo, amigosSorteados);         
    }

}

function reiniciar(){
    document.getElementById('nome-amigo').value = '';
    document.getElementById('lista-amigos').textContent = '';
    amigos = [];
}

function sortearAmigo(amigo, amigosSorteados){
    // console.log(amigosSorteados);
    nrAleatorio = obterNumeroAleatorio(amigosSorteados.length) - 1;
    //Verifica se amigo e a propria pessoa
    if (amigo == amigosSorteados[nrAleatorio]) {
        //Verifica se e a ultima restante e ser for refaz o sorteio
        if (amigosSorteados.length == 1){
            console.log("Erro. fazendo denovo");
            amigosSorteados = amigos.slice();
            sortear();
            return;
        }
        sortearAmigo(amigo, amigosSorteados);
        
    } else{
        amigoSorteado = amigosSorteados[nrAleatorio];
        console.log(`${amigo} -> ${amigoSorteado}`);
        document.getElementById('lista-sorteio').innerHTML += `${amigo} -> ${amigoSorteado}</br>`;
        amigosSorteados.splice(nrAleatorio,1);
    }
    
}

function obterNumeroAleatorio(qtd){
    return Math.floor(Math.random() * qtd + 1);
}