import mongoose from "mongoose";

// Documento aninhado
const trackSchema = new mongoose.Schema({
  title: String,
  feat: [String],
  duration: Number
});

const musicaSchema = new mongoose.Schema({
  artist: String,
  album: String,
  year: Number,
  track: [trackSchema] // Array de objetos
});

// Aqui está sendo criado a coleção games no banco de dados
const Musica = mongoose.model("Musica", musicaSchema);

export default Musica;
