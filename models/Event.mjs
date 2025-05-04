import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  robot: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Robot',
    required: true,
  },
  descripcion: { type: String, required: true },
  fecha: { type: Date, required: true },
});

const Event = mongoose.model('Event', eventSchema);
export default Event;