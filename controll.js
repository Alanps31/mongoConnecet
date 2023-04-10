import { registers } from "./ocorrencias.js";
import { novoGM } from "./userModel.js";


async function idOc(text, number) {
    const novoReg = new registers({ nome: text, valor: number })

    await novoReg.save()
}


async function createGM(nome, sobrenome, number, email) {
    const guarda = new novoGM({ nome: nome, sobrenome: sobrenome, mat: number, email: email })

    await guarda.save()

}

 async function lerDados() {

    const leitura = novoGM.find().then((res) => {console.log(res);})

    return leitura
}

async function procura(nameSearch) {

     await novoGM.findOne({nome:nameSearch}).exec().then((res) => {console.log(res);})

}

async function alterar(nomeAgente, newemail) {

    await novoGM.updateOne({nome:nomeAgente},{email:newemail})
}


export { idOc, createGM, lerDados , procura, alterar}