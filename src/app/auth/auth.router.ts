import { Router } from 'express';
export const router: Router = Router();
import { GET_USERS_ENDPOINT, LOGIN_ENDPOINT, NEW_USER_ENDPOINT ,GET_USERS_BYUSERNAME,GET_USER_ENDPOINT,DEL_USER_ENDPOINT} from '../../constants/endpoint';
const authController = require('../../controllers/auth/authController');
const validarJWT = require('../../middleware/validarJWT');
const validarManager = require('../../middleware/validarManager');


// Mantenimiento de cuentas: antes estas rutas no pedían ningún token,
// cualquiera podía crear/listar/borrar usuarios o leer el hash de la
// contraseña. Se restringen a cuentas Manager (UserType = '0'), igual que
// el mantenimiento de terapeutas.
router.post(`${NEW_USER_ENDPOINT}`, validarJWT, validarManager, authController.registerUser);

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Autentica un usuario y devuelve un token JWT
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username: {type: string}
 *               password: {type: string}
 *             required: [username, password]
 *     responses:
 *       200:
 *         description: Usuario autenticado, devuelve token y usuario
 *       401:
 *         description: Usuario o contraseña inválidos
 */
router.post(`${LOGIN_ENDPOINT}`, authController.authUser);
router.get(`${GET_USERS_ENDPOINT}`, validarJWT, validarManager, authController.getUsers);
router.get(`${GET_USER_ENDPOINT}`, validarJWT, validarManager, authController.getUser);
router.get(`${GET_USERS_BYUSERNAME}`, validarJWT, validarManager, authController.getUserByUsername);
router.delete(`${DEL_USER_ENDPOINT}`, validarJWT, validarManager, authController.deleteUser);

router.get('/auth', validarJWT, async (req, res) => {
  try {
    // ya tenés los datos del usuario desde el token decodificado
    res.json({ user: req.user });     // error aqui Property 'user' does not exist on type 'Request<{}, any, any, ParsedQs, Record<string, any>>'.ts(2339)
  } catch (error) {
    console.error('Error en /auth:', error);
    res.status(500).json({ msg: 'Error del servidor' });
  }
});