import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface marca_holom_marcaintegraAttributes {
  marca_id: number;
  idmarca: number;
}

export type marca_holom_marcaintegraCreationAttributes = marca_holom_marcaintegraAttributes;

export class marca_holom_marcaintegra extends Model<marca_holom_marcaintegraAttributes, marca_holom_marcaintegraCreationAttributes> implements marca_holom_marcaintegraAttributes {
  marca_id!: number;
  idmarca!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof marca_holom_marcaintegra {
    return marca_holom_marcaintegra.init({
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
    tableName: 'marca_holom_marcaintegra',
    schema: 'dbo',
    timestamps: false
  });
  }
}
