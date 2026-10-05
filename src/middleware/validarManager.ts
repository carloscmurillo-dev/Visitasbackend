import { Request, Response, NextFunction } from 'express';

// Debe usarse SIEMPRE después de validarJWT (que llena req.user desde el
// token). Restringe el acceso a las pantallas de mantenimiento (terapeutas,
// usuarios) a las cuentas Manager, identificadas por UserType = '0'.
export const validarManager = (req: Request, res: Response, next: NextFunction) => {
  // El token declara UserType como number, pero en la práctica viaja como
  // string (la columna en BD es varchar) — se compara como texto para no
  // depender de cuál de las dos formas llegue.
  if (String(req.user?.UserType) !== '0') {
    return res.status(403).json({ msg: 'No autorizado' });
  }

  next();
};

module.exports = validarManager;
