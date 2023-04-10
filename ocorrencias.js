import mongoose, { Schema } from "mongoose";

const schema = new Schema({ nome: String, valor: Number })

const registers = mongoose.model('ocorrencias', schema)

export { registers }

