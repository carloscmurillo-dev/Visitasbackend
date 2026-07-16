import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface Hoja1$Attributes {
  proveedor?: string;
  categoria_dsc?: string;
  proveedor_id?: Date;
  fecha_ventana1?: Date;
  fecha_ventana2?: Date;
  fecha_ventana3?: Date;
  fecha_ventana4?: Date;
}

export type Hoja1$OptionalAttributes = "proveedor" | "categoria_dsc" | "proveedor_id" | "fecha_ventana1" | "fecha_ventana2" | "fecha_ventana3" | "fecha_ventana4";
export type Hoja1$CreationAttributes = Optional<Hoja1$Attributes, Hoja1$OptionalAttributes>;

export class Hoja1$ extends Model<Hoja1$Attributes, Hoja1$CreationAttributes> implements Hoja1$Attributes {
  proveedor?: string;
  categoria_dsc?: string;
  proveedor_id?: Date;
  fecha_ventana1?: Date;
  fecha_ventana2?: Date;
  fecha_ventana3?: Date;
  fecha_ventana4?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof Hoja1$ {
    return Hoja1$.init({
    proveedor: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    categoria_dsc: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    proveedor_id: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fecha_ventana1: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fecha_ventana2: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fecha_ventana3: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fecha_ventana4: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Hoja1$',
    schema: 'dbo',
    timestamps: false
  });
  }
}
