import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tmpProveedoresAttributes {
  cedula?: number;
  proveedor?: string;
  nombre?: string;
  telefono?: string;
  email?: string;
}

export type tmpProveedoresOptionalAttributes = "cedula" | "proveedor" | "nombre" | "telefono" | "email";
export type tmpProveedoresCreationAttributes = Optional<tmpProveedoresAttributes, tmpProveedoresOptionalAttributes>;

export class tmpProveedores extends Model<tmpProveedoresAttributes, tmpProveedoresCreationAttributes> implements tmpProveedoresAttributes {
  cedula?: number;
  proveedor?: string;
  nombre?: string;
  telefono?: string;
  email?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof tmpProveedores {
    return tmpProveedores.init({
    cedula: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    proveedor: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    telefono: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tmpProveedores',
    schema: 'dbo',
    timestamps: false
  });
  }
}
