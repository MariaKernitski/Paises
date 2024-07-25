const prompt = require("prompt-sync")();

const paises = []

const valida = pais => pais.nome == "" && pais.sigla.length == 2

const leIndice = () => {
    listaPais();

    if(paises.length > 0) {
        const indice = prompt("Digite o índice do país que deseja atualizar/remover: ") - 1;

        if(indice >= 0 && indice < paises.length) {

            return indice;

            }

        else {
            console.log("Índice inválido.")
        }
    }
}

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
 
    const indice = leIndice();

        if(pais != undefined) {
            const pais = modelo();
            paises[indice] = pais;
        }
        else {
            console.log("Índice inválido.")
        }
}

const removePais = () => {
        const indice = leIndice()
        
        if(indice != undefined){
            paises.splice(indice, 1)        
            console.log("País removido com sucesso.")
        }
}

