import * as robotService from '../services/robotService.mjs';

export const getAllRobots = async (req, res) => {
  try {
    const robots = await robotService.getAllRobots();
    res.json(robots);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getRobotById = async (req, res) => {
  try {
    const robot = await robotService.getRobotById(req.params.id);
    res.json(robot);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const createRobot = async (req, res) => {
  try {
    const robot = await robotService.createRobot(req.body);
    res.status(201).json(robot);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const updateRobot = async (req, res) => {
  try {
    const robot = await robotService.updateRobot(req.params.id, req.body);
    res.json(robot);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteRobot = async (req, res) => {
  try {
    await robotService.deleteRobot(req.params.id);
    res.json({ message: 'Robot eliminado correctamente' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const filterRobotsByOrigen = async (req, res) => {
  try {
    const { origen } = req.query;
    const robots = await robotService.filterRobotsByOrigen(origen);
    res.json(robots);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const filterRobotsByBando = async (req, res) => {
  try {
    const { bando } = req.query;
    const robots = await robotService.filterRobotsByBando(bando);
    res.json(robots);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
