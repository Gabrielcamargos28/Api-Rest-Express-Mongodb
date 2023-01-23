import mongoose from "mongoose";

const autorShema = new mongoose.Schema(
    {
        id: { type: String },
        nome: { type: String, required: true },
        nacionalidade: { type: String }
    },
    {
        versionKey: false
    }
)

const autores = mongoose.model("autores", autorShema)

export default autores