import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface CADUCIDADAttributes {
  CATEGORIA_ID: number;
  MIN_DIAS: number;
}

export type CADUCIDADCreationAttributes = CADUCIDADAttributes;

export class CADUCIDAD extends Model<CADUCIDADAttributes, CADUCIDADCreationAttributes> implements CADUCIDADAttributes {
  CATEGORIA_ID!: number;
  MIN_DIAS!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof CADUCIDAD {
    return CADUCIDAD.init({
    CATEGORIA_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    MIN_DIAS: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'CADUCIDAD',
    schema: 'dbo',
    timestamps: false
  });
  }
}
