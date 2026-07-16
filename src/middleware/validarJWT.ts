var jwt = require('jsonwebtoken');
require('dotenv').config({ path: 'variables.env' });
import { Request, Response, NextFunction } from 'express';






interface TokenPayload {
  userId: number;
  userName: string;
  gln: string;
  adc: string;
  name: string;
  categoryId: number;
  UserType: number;
  descuentoFijoProv: number;
}

declare module 'express-serve-static-core' {
  interface Request {
    user?: TokenPayload;
  }
}

export const validarJWT = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('x-token');
console.log('PARTE A VEFIFICAR SI ENTRA*************************************************************************')
  if (!token) {
    return res.status(401).json({ msg: 'No hay token en la petición' });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET as string) as TokenPayload;
    req.user = decoded; // ✅ Ahora TypeScript ya no se quejará
    next();
  } catch (error) {
    return res.status(401).json({ msg: 'Token no válido' });
  }
};


module.exports = validarJWT;









// var jwt = require('jsonwebtoken');
// require('dotenv').config({ path: 'variables.env' });

// module.exports = async (req: any, res: any, next: any) => {
//     //obtener token
//     const authToken = req.get('Authorization');
//     if (!authToken) {
//         res.status(401).send({ msg: 'Token invalido' });
//     }
//     else{
//         if (authToken) {
//             //validar jwt
//             try {
//                 const usuario = jwt.verify(authToken.split(' ')[1], process.env.SECRET);
//                 req.usuario = usuario; 
//                 console.log('Campo req.usuario es ------------',req.usuario)
//                  return next();
//             }
//             catch (error) {
//                 console.log({ msg: 'Token invalido', error });
//                 return next();
//             }
//         }
// }
// }