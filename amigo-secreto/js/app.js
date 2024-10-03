let amigos = [];

function adicionar() {
    let nomeAmigo = document.getElementById('nome-amigo').value;
    
    console.log(nomeAmigo);

    if (!nomeAmigo || nomeAmigo.trim() === "") {
        alert("Informe um nome de amigo.");
        return;
    }else {
        amigos.push(nomeAmigo);
        document.getElementById('nome-amigo').value = '';
        document.getElementById('lista-amigos').textContent = amigos;
    }   
}

function sortear() {

}

function reiniciar(){

}