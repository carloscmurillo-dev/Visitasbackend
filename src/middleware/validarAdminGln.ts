import { Request, Response, NextFunction } from 'express';

// Debe usarse SIEMPRE después de validarJWT (que llena req.user desde el
// token). Restringe el acceso a las pantallas de mantenimiento (como
// terapeutas) a las cuentas admin, identificadas por gln = '-1'.
export const validarAdminGln = (req: Request, res: Response, next: NextFunction) => {
  if (req.user?.gln !== '-1') {
    return res.status(403).json({ msg: 'No autorizado' });
  }

  next();
};

module.exports = validarAdminGln;
