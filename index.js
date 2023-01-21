var res = document.querySelector("#res");
var contador = 0;
var atual = res.innerHTML = `O contador está com <strong>${contador}</strong> cliques`
var sVazio = ""

function clicou() {
    res.innerHTML = ""
    contador++
    res.innerHTML += `O contador está com <strong>${contador}</strong> cliques`;
}

function resetar() {
    res.innerHTML = sVazio;
    contador = '';
}
