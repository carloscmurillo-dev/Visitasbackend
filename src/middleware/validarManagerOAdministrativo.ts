import { Request, Response, NextFunction } from 'express';

// Debe usarse SIEMPRE después de validarJWT. A diferencia de validarManager
// (solo UserType='0'), esta deja pasar también a Administrativo (UserType='2')
// — pantallas de solo lectura como Visitas Históricas admin.
const TIPOS_PERMITIDOS = ['0', '2'];

export const validarManagerOAdministrativo = (req: Request, res: Response, next: NextFunction) => {
  if (!TIPOS_PERMITIDOS.includes(String(req.user?.UserType))) {
    return res.status(403).json({ msg: 'No autorizado' });
  }

  next();
};

module.exports = validarManagerOAdministrativo;
