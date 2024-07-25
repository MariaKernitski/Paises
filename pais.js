const prompt = require("prompt-sync")();

const paises = []

const valida = pais => pais.nome == "" && pais.sigla.length == 2

const criaPais = () => {

    let nome = prompt("Digite o nome do país: ")
    let sigla = prompt("Digite a sigla do país: ").toUpperCase()

    if (valida({nome, sigla})) {
        paises.push({nome, sigla});
        console.log("País adicionado com sucesso!")
    }
    else {
        console.log("País inválido.")
    }
}

