const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const { NewUser, getUserByUsername, getUsers,getUser,deleteUser } = require('../../db');
require('dotenv').config({ path: 'variables.env' });



exports.authUser = async (req: any, res: any, next: any) => {
    if (req.error) {
        res.send({ msg: req.error, error: "300" });
    }
    else{
        const { username, password } = req.body;
        console.log('autoriza ',req.body)
        const user = await getUserByUsername(username);
        if(!user){
            res.status(401).send({ msg: 'Usuario o contraseña invalidos', error: "301" });
        }
        else{
            if(bcrypt.compareSync(password, user.passwordHash)){
                const token = jwt.sign({ userId: user.UserId, userName: user.Username, gln: user.gln, adc: user.adc, name: user.Name, categoryId: user.CategoryId, UserType: user.UserType,descuentoFijoProv :user.descuentoFijoProv  }, process.env.SECRET, { expiresIn: '24h' });
                res.send({ msg: 'Usuario autenticado', token: token,usuario: user });
                console.log('EL TOKEN ES:',token)
            }
            else{
                res.status(401).send({ msg: 'Usuario o contraseña invalidos', error: "301" });
            }
            
        }
    }
}
exports.getUsers = async (req: any, res: any, next: any) => {
    const users = await getUsers();
    res.send({ msg: 'Usuarios', users: users });
}

exports.deleteUser = async (req: any, res: any, next: any) => {
    const userId = req.query.userId;
    const userdel = await deleteUser(userId);
    res.send({ msg: 'Usuario eliminado',  userdel });
}

exports.getUserByUsername = async (req: any, res: any, next: any) => {
    const Usuario = req.query.userName;
   // console.log('El Articulo en API:',ArticuloID)
    const UserName = await getUserByUsername(Usuario);
    res.status(200).send({ ok: true, msg: 'get Articulo From API', UserName });
}

exports.getUser = async (req: any, res: any, next: any) => {
    const Usuario = req.query.UserId;
    
    const user = await getUser(Usuario);

    console.log('USUARIOSSSSSS',user)
    res.status(200).send({ ok: true, msg: 'get Articulo From API', user });
}

exports.registerUser = async (req: any, res: any, next: any) => {
    const { username, password, name, gln, adc, selectedUserType } = req.body;
    const salt = await bcrypt.genSalt(10);
    let encryptedPassword = await bcrypt.hash(password, salt);
    await NewUser(username, gln ?? -1, name, encryptedPassword,selectedUserType, adc );
    res.send({ msg: 'Usuario creado correctamente' });
}