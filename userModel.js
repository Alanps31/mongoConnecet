import mongoose, { Schema } from "mongoose";

const schema = new Schema({ nome: String, sobrenome: String, mat: Number, email: String })

const novoGM = mongoose.model('guardas', schema)

export { novoGM }