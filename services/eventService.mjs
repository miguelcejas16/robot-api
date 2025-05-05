import Event from '../models/Event.mjs'
import { getRobotById } from './robotService.mjs'

//Crear
export const createEvent = async (event) => {
  try {
    const newEvent = new Event(event)
    await newEvent.save()
    return newEvent
  } catch (error) {
    throw new Error('Error creating event: ' + error.message)
  }
}

//Update
export const updateEvent = async (id, event) => {
  try {
    const updatedEvent = await Event.findByIdAndUpdate(id, event, {
      new: true,
      runValidators: true,
    })
    if (!updatedEvent) {
      throw new Error('Event not found')
    }
    return updatedEvent
    } catch (error) {
    throw new Error('Error updating event: ' + error.message)
    }
}

//Delete
export const deleteEvent = async (id) => {
  try {
    const deletedEvent = await Event.findByIdAndDelete(id)
    if (!deletedEvent) {
      throw new Error('Event not found')
    }
    return deletedEvent
  } catch (error) {
    throw new Error('Error deleting event: ' + error.message)
  }
}

//GetById
export const getEventById = async (id) => {
  try {
    const event = await Event.findById(id).populate('robot')
    if (!event) {
      throw new Error('Event not found')
    }
    return event
  } catch (error) {
    throw new Error('Error fetching event: ' + error.message)
  }
}

//GetAll
export const getAllEvents = async () => { 
    try {
        const events = await Event.find().populate('robot')
        return events
    } catch (error) {
        throw new Error('Error fetching events: ' + error.message)
    }
}

//GetByRobotId
export const getEventsByRobotId = async (robotId) => {
  try {
    const robot = await getRobotById(robotId)
    if (!robot) {
      throw new Error('Robot not found')
    }
    const events = await Event.find({ robot: robotId })
    return events
  } catch (error) {
    throw new Error('Error fetching events by robot ID: ' + error.message)
  }
}
