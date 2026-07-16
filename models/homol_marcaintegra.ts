import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface homol_marcaintegraAttributes {
  marca_id: number;
  idmarca: number;
}

export type homol_marcaintegraCreationAttributes = homol_marcaintegraAttributes;

export class homol_marcaintegra extends Model<homol_marcaintegraAttributes, homol_marcaintegraCreationAttributes> implements homol_marcaintegraAttributes {
  marca_id!: number;
  idmarca!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof homol_marcaintegra {
    return homol_marcaintegra.init({
    marca_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    idmarca: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'homol_marcaintegra',
    schema: 'dbo',
    timestamps: false
  });
  }
}
