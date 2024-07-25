const { listaPais } = require("./pais.js");
const { leIndicePais } = require("./pais.js");

const prompt = require("prompt-sync")();

const estados = []

const valida = estado => estado.nome == "" && estado.sigla.length == 2 && estado.pais != undefined;

const leIndiceEstado = () => {
    listaEstado();

    if(estados.length > 0) {
        const indice = prompt("Digite o índice do estado que deseja atualizar/remover: ") - 1;

        if(indice >= 0 && indice < estados.length) {

            return indice;

            }

        else {
            console.log("Índice inválido.")
        }
    }
}

const modelo = () => {

    let nome = prompt("Digite o nome do estado: ")
    let sigla = prompt("Digite a sigla do estado: ").toUpperCase()
    const pais = leIndicePais();

    listaPais()

    if (valida({nome, sigla, pais})) {
        return {nome, sigla, pais}
    }
}

const criaEstado = () => {
    
    const estado = modelo()

    if(estado != undefined) {
        estados.push({nome, sigla});
        console.log("estado adicionado com sucesso!")
    }
    else {
        console.log("Dados inválidos.")
    }

}

const listaEstado = () => {
    if(estados.length == 0) {
        console.log("Nenhum estado está cadastrado.")
    }
    else {
        estados.forEach((estado, indice) => {
            console.log(`${indice + 1} - ${estado}`);
        })
    }
}

const atualizaEstado = () => {
 
    const indice = leIndice();

        if(indice != undefined) {
            const estado = modelo();
            if (estado != undefined){  
                estados[indice] = estado;
                console.log("Estado atualizado com sucesso!")
            }
        }

}

const removeEstado = () => {
        const indice = leIndice()

        if(indice != undefined){
            estados.splice(indice, 1)        
            console.log("Estado removido com sucesso.")
        }
}

module.exports = {
    criaEstado,
    listaEstado,
    atualizaEstado,
    removeEstado
}