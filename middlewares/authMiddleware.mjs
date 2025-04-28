import jwt from 'jsonwebtoken';
import User from '../models/User.mjs';

export const protect = async (req, res, next) => {
  let token = null;

  // 1) Verificar que venga el header Authorization: Bearer <token>
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer ')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return res.status(401).json({ error: 'No autorizado, token faltante' });
  }

  try {
    // 2) Verificar y decodificar el token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // decoded = { id: 'usuarioId', role: 'user' | 'admin', iat, exp }

    // 3) Adjuntar el usuario de la BD al request (sin la contraseña)
    const user = await User.findById(decoded.id).select('-password');
    if (!user) {
      return res.status(401).json({ error: 'Usuario no encontrado' });
    }

    req.user = user; 
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Token inválido o expirado' });
  }
};
