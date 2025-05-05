import * as eventService from '../services/eventService.mjs';

// Crear un nuevo evento
export const createEvent = async (req, res) => {
  try {
    const event = await eventService.createEvent(req.body);
    res.status(201).json(event);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Actualizar un evento existente
export const updateEvent = async (req, res) => {
  try {
    const event = await eventService.updateEvent(req.params.id, req.body);
    res.json(event);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Eliminar un evento
export const deleteEvent = async (req, res) => {
  try {
    await eventService.deleteEvent(req.params.id);
    res.json({ message: 'Evento eliminado correctamente' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener un evento por ID
export const getEventById = async (req, res) => {
  try {
    const event = await eventService.getEventById(req.params.id);
    res.json(event);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// Obtener todos los eventos
export const getAllEvents = async (req, res) => {
  try {
    const events = await eventService.getAllEvents();
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Filtrar eventos por robot
export const filterEventsByRobot = async (req, res) => {
  try {
    const { robotId } = req.params;
    const events = await eventService.getEventsByRobotId(robotId);
    res.json(events);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
