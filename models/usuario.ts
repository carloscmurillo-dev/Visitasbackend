import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface usuarioAttributes {
  uid: number;
  nombre?: string;
  correo?: string;
  password?: string;
  img?: string;
  rol?: string;
  estado?: boolean;
  google?: boolean;
  idTerapeuta?: number;
}

export type usuarioPk = "uid";
export type usuarioId = usuario[usuarioPk];
export type usuarioOptionalAttributes = "uid" | "nombre" | "correo" | "password" | "img" | "rol" | "estado" | "google" | "idTerapeuta";
export type usuarioCreationAttributes = Optional<usuarioAttributes, usuarioOptionalAttributes>;

export class usuario extends Model<usuarioAttributes, usuarioCreationAttributes> implements usuarioAttributes {
  uid!: number;
  nombre?: string;
  correo?: string;
  password?: string;
  img?: string;
  rol?: string;
  estado?: boolean;
  google?: boolean;
  idTerapeuta?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof usuario {
    return usuario.init({
    uid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    correo: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    img: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    rol: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    estado: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    google: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    idTerapeuta: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'usuario',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_usuario",
        unique: true,
        fields: [
          { name: "uid" },
        ]
      },
    ]
  });
  }
}
