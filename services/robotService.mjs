import Robot from '../models/Robot.mjs';

export const getAllRobots = async () => {
  return Robot.find();
};

export const getRobotById = async (id) => {
  const robot = await Robot.findById(id);
  if (!robot) throw new Error('Robot no encontrado');
  return robot;
};

export const createRobot = async (data) => {
  const newRobot = await Robot.create(data);
  return newRobot;
};

export const updateRobot = async (id, data) => {
  const updated = await Robot.findByIdAndUpdate(id, data, { new: true });
  if (!updated) throw new Error('Robot no encontrado para actualizar');
  return updated;
};

export const deleteRobot = async (id) => {
  const deleted = await Robot.findByIdAndDelete(id);
  if (!deleted) throw new Error('Robot no encontrado para eliminar');
  return deleted;
};

export const filterRobotsByOrigen = async (origen) => {
  return Robot.find({ origen });
};

export const filterRobotsByBando = async (bando) => {
  return Robot.find({ bando });
};
