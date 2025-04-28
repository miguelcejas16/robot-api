// Permite especificar roles permitidos: e.g. ['admin']
export const authorize = (...allowedRoles) => {
    return (req, res, next) => {
      if (!req.user) {
        return res.status(401).json({ error: 'No autorizado' });
      }
      if (!allowedRoles.includes(req.user.role)) {
        return res.status(403).json({ error: 'Acceso denegado: permisos insuficientes' });
      }
      next();
    };
  };
  