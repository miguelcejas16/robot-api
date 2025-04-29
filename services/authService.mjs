import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.mjs';

export const registerUser = async (userData) => {
  const { username, password } = userData;

  const existingUser = await User.findOne({ username });
  if (existingUser) {
    throw new Error('Usuario ya registrado');
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = await User.create({
    username,
    password: hashedPassword,
    role: 'user',
  });

  const token = generateToken(newUser._id, newUser.role, newUser.username);
  return token;
};

export const loginUser = async (userData) => {
  const { username, password } = userData;

  const user = await User.findOne({ username });
  if (!user) {
    throw new Error('Usuario no encontrado');
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error('Credenciales inválidas');
  }

  const token = generateToken(user._id, user.role, user.username);
  return token;
};

const generateToken = (userId, role, username) => {
  return jwt.sign({ id: userId, role, username }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });
};
