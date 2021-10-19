// chamando o elemento inputNome
const inputNome = document.getElementById("inputNome")
// adicionando a esse elemento os eventos associados a ele
// se passar o mouse em cima colore a borda e o fundo
// se tirar o mouse volta ao normal
inputNome.addEventListener("mouseover", colNome);
inputNome.addEventListener("mouseout", desNome);

// chamando o elemento inputEndereço
const inputEnd = document.getElementById("inputEnd");
// adicionando a esse elemento os eventos associados a ele
// se passar o mouse em cima colore a borda e o fundo
// se tirar o mouse volta ao normal
inputEnd.addEventListener("mouseover", colEnd);
inputEnd.addEventListener("mouseout", desEnd);

// função para colorir o elemento inputNome
function colNome(){
    // console.log("entrei")
    inputNome.style.border = "1px solid green";
    inputNome.style.backgroundColor = "lightgreen";
}
// função para descolorir o elemento inputNome
function desNome(){
    inputNome.style.border = "1px solid black";
    inputNome.style.backgroundColor = "white";
}

// função para colorir o elemento inputNome
function colEnd(){
    // console.log("entrei")
    inputEnd.style.border = "1px solid red";
    inputEnd.style.backgroundColor = "lightpink";
}
// função para descolorir o elemento inputNome
function desEnd(){
    inputEnd.style.border = "1px solid black";
    inputEnd.style.backgroundColor = "white";
}

// pegando o elemento botão, que vai fazer com que os efeitos parem de aparecer
const botao = document.getElementById("removeEfeito");
botao.addEventListener("click", limpaEventos);

// função disparada pelo click do botão, ela tem que desativar todos os efeitos
function limpaEventos(){
    // removendo o efeito de colorir o inputNome
    inputNome.removeEventListener("mouseover", colNome);
    // removendo o efeito de colorir o inputEndereço
    inputEnd.removeEventListener("mouseover", colEnd);
    // removendo o efeito do botão
    botao.removeEventListener("click", limpaEventos);
    botao.disabled = "true";
    botao.innerHTML = "efeitos desabilitados"
}