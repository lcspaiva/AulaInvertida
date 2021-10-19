const botao = document.getElementById("enviarDados");
botao.addEventListener("click", enviarDados)

function enviarDados(e){
    var id = 0;
    let nome = document.getElementById("inputNome");
    let end = document.getElementById("inputEnd");
    let cpf = document.getElementById("inputCpf");

    let dados = document.getElementById("infos");

    let bloco = document.createElement("div")
    bloco.className = "bloco"
    bloco.innerHTML = "id:" + id + "  nome:" + nome.value + "  endereço:" + end.value +  "  cpf:" + cpf.value

    // botao.removeEventListener("click", enviarDados);
    dados.appendChild(bloco);
    
    // console.log("teste")


}