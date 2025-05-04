import express from 'express';
import { getAllEvents, getEventById, createEvent, updateEvent, deleteEvent, filterEventsByRobot } from '../controllers/eventController.mjs';
import { authorize } from '../middlewares/roleMiddleware.mjs';

const router = express.Router();

// Ruta para obtener todos los eventos
router.get('/', getAllEvents);

// Ruta para obtener un evento por ID
router.get('/:id', getEventById);

// Ruta para filtrar eventos por robot
router.get('/robot/:robotId', filterEventsByRobot);

// Ruta para crear un nuevo evento
router.post('/', authorize('admin') ,createEvent);

// Ruta para actualizar un evento existente
router.put('/:id', authorize('admin'), updateEvent);

// Ruta para eliminar un evento
router.delete('/:id', authorize('admin'), deleteEvent);

export default router;