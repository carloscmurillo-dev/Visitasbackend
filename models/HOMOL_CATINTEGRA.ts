import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface HOMOL_CATINTEGRAAttributes {
  CATEGORIA_ID: number;
  IDCATEGORIA: number;
}

export type HOMOL_CATINTEGRACreationAttributes = HOMOL_CATINTEGRAAttributes;

export class HOMOL_CATINTEGRA extends Model<HOMOL_CATINTEGRAAttributes, HOMOL_CATINTEGRACreationAttributes> implements HOMOL_CATINTEGRAAttributes {
  CATEGORIA_ID!: number;
  IDCATEGORIA!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof HOMOL_CATINTEGRA {
    return HOMOL_CATINTEGRA.init({
    CATEGORIA_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    IDCATEGORIA: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'HOMOL_CATINTEGRA',
    schema: 'dbo',
    timestamps: false
  });
  }
}
