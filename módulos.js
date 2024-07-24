const prompt = require("prompt-sync")();


const modelo = () => {
    let pais = {}

    while(true) {
        pais.nome = prompt("Digite o nome do país: ")
            if (isNaN(pais.nome) || pais.nome == "") {
                console.log("País inválido.")
            }
            else {
                break;
            }
    }

    while(true) {
        pais.estado = prompt("Digite o nome do estado: ");
            if (isNaN(pais.estado) || pais.estado == "") {
                console.log("Estado inválido.");
            }
            else {
                break;
            }
    }

    while(true) {
        pais.cidade = prompt("Digite o nome da cidade: ")
            if (pais.cidade == "" || isNaN(pais.cidade)) {
                console.log("Cidade inválida.")
            }
            else {
                break;
            }
    }
}

const pais = () => {   
}