import * as dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'
import { createGM, procura, idOc, lerDados, alterar } from './controll.js'

function connection() {

    const getConnection = async () => { await mongoose.connect(process.env.dbAcessKey) }

    getConnection()
        .then(() => { console.log("conectado"); })
        //.then(() => createGM("Marcio", "Augusto Fernandes Alves", 15214, "marcioafalves@gmail.com"))
        //.then(() => lerDados())
        .then(() => procura("Alan"))
        .then(() => alterar("Alan","alanpds@yahoo.com.br"))
        .then(() => procura("Alan"))
        .then(() => { mongoose.disconnect() })
}

connection()