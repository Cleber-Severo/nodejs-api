import mongoose from 'mongoose'

const autorSchema = new mongoose.Scheema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String, required: true },
    nacionalidade: { type: String }
}, { versionKey: false })

const autor = mongoose.model("autores", autorSchema)

export { autor, autorSchema }