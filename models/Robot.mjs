import mongoose from 'mongoose';

const robotSchema = new mongoose.Schema({
  nombre:         { type: String, required: true, trim: true },
  creador:        { type: String, trim: true },
  universo_ficcion: { type: String, trim: true },
  descripcion:    { type: String, trim: true },
  imagen_url:     { type: String, trim: true },
  tipos:          [{ type: String, trim: true }],
  habilidades:    [{ type: String, trim: true }],
  roles:          [{ type: String, trim: true }],
  amigos:         [{ type: String, trim: true }],
  origen:         { type: String, required: true, trim: true },
  bando:          { type: String, required: true, trim: true },
}, { timestamps: true });

const Robot = mongoose.model('Robot', robotSchema);
export default Robot;
