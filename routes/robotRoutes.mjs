import express from 'express';
import {
  getAllRobots,
  getRobotById,
  filterRobotsByOrigen,
  filterRobotsByBando,
  createRobot,
  updateRobot,
  deleteRobot
} from '../controllers/robotController.mjs';
import { authorize } from '../middlewares/roleMiddleware.mjs';

const router = express.Router();

// Lectura (cualquier usuario autenticado)
router.get('/', getAllRobots);
router.get('/filter/origen', filterRobotsByOrigen);
router.get('/filter/bando', filterRobotsByBando);
router.get('/:id', getRobotById);

// Escritura (solo admin)
router.post('/', authorize('admin'), createRobot);
router.put('/:id', authorize('admin'), updateRobot);
router.delete('/:id', authorize('admin'), deleteRobot);

export default router;
