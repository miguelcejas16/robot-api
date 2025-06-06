import { registerUser, loginUser } from '../services/authService.mjs';

export const register = async (req, res) => {
  try {
    const token = await registerUser(req.body);
    res.status(201).json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const token = await loginUser(req.body);
    res.status(200).json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
