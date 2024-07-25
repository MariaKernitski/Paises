const prompt = require("prompt-sync")();

const paises = []

const valida = pais => pais.nome == "" && pais.sigla.length == 2

const modelo = () => {

    let nome = prompt("Digite o nome do país: ")
    let sigla = prompt("Digite a sigla do país: ").toUpperCase()

    if (valida({nome, sigla})) {
        return {nome, sigla}
    }

}

const criaPais = () => {
    
    const pais = modelo()

    if(pais != undefined) {
        paises.push({nome, sigla});
        console.log("País adicionado com sucesso!")
    }
    else {
        console.log("Dados inválidos.")
    }

}

const listaPais = () => {
    if(paises.length == 0) {
        console.log("Nenhum país está cadastrado.")
    }
    else {
        paises.forEach((pais, indice) => {
            console.log(`${indice + 1} - ${pais}`);
        })
    }
}

const atualizaPais = () => {

}

