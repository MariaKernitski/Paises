const { listaEstado } = require("./estado.js");
const { leIndiceEstado, listaEstado } = require("./estado.js");

const prompt = require("prompt-sync")();

const cidades = []

const valida = cidade => cidade.nome == "" && cidade.sigla.length == 2 && cidade.pais != undefined;

const leIndiceCidade = () => {
    listaCidade();

    if(cidades.length > 0) {
        const indice = prompt("Digite o índice do cidade que deseja atualizar/remover: ") - 1;

        if(indice >= 0 && indice < cidades.length) {

            return indice;

            }

        else {
            console.log("Índice inválido.")
        }
    }
}

const modelo = () => {

    let nome = prompt("Digite o nome do cidade: ")
    let sigla = prompt("Digite a sigla do cidade: ").toUpperCase()
    const estado = leIndiceEstado();

    listaEstado();

    if (valida({nome, estado})) {
        return {nome, estado}
    }
}

const criaCidade = () => {
    
    const cidade = modelo()

    if(cidade != undefined) {
        cidades.push({nome, sigla});
        console.log("Cidade adicionada com sucesso!")
    }
    else {
        console.log("Dados inválidos.")
    }

}

const listaCidade = () => {
    if(cidades.length == 0) {
        console.log("Nenhuma cidade está cadastrada.")
    }
    else {
        cidades.forEach((cidade, indice) => {
            console.log(`${indice + 1} - ${cidade}`);
        })
    }
}

const atualizaCidade = () => {
 
    const indice = leIndice();

        if(indice != undefined) {
            const cidade = modelo();
            if (cidade != undefined){  
                cidades[indice] = cidade;
                console.log("Cidade atualizada com sucesso!")
            }
        }

}

const removeCidade = () => {
        const indice = leIndice()

        if(indice != undefined){
            cidades.splice(indice, 1)        
            console.log("Cidade removida com sucesso.")
        }
}

module.exports = {
    criaCidade,
    listaCidade,
    atualizaCidade,
    removeCidade
}