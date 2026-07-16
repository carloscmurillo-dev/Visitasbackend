import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface provetransiAttributes {
  idprove?: string;
  dsprove?: string;
}

export type provetransiOptionalAttributes = "idprove" | "dsprove";
export type provetransiCreationAttributes = Optional<provetransiAttributes, provetransiOptionalAttributes>;

export class provetransi extends Model<provetransiAttributes, provetransiCreationAttributes> implements provetransiAttributes {
  idprove?: string;
  dsprove?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof provetransi {
    return provetransi.init({
    idprove: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    dsprove: {
      type: DataTypes.STRING(250),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'provetransi',
    schema: 'dbo',
    timestamps: false
  });
  }
}
