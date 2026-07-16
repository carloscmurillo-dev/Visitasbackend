import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface categoriasInfAttributes {
  categoria_id: number;
  categoria_dsc: string;
}

export type categoriasInfCreationAttributes = categoriasInfAttributes;

export class categoriasInf extends Model<categoriasInfAttributes, categoriasInfCreationAttributes> implements categoriasInfAttributes {
  categoria_id!: number;
  categoria_dsc!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof categoriasInf {
    return categoriasInf.init({
    categoria_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    categoria_dsc: {
      type: DataTypes.STRING(500),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'categoriasInf',
    schema: 'dbo',
    timestamps: false
  });
  }
}
