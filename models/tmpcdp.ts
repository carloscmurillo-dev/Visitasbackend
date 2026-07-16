import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tmpcdpAttributes {
  distrito?: string;
  canton?: string;
  provincia?: string;
  codigopostal?: number;
}

export type tmpcdpOptionalAttributes = "distrito" | "canton" | "provincia" | "codigopostal";
export type tmpcdpCreationAttributes = Optional<tmpcdpAttributes, tmpcdpOptionalAttributes>;

export class tmpcdp extends Model<tmpcdpAttributes, tmpcdpCreationAttributes> implements tmpcdpAttributes {
  distrito?: string;
  canton?: string;
  provincia?: string;
  codigopostal?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof tmpcdp {
    return tmpcdp.init({
    distrito: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    canton: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    provincia: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    codigopostal: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tmpcdp',
    schema: 'dbo',
    timestamps: false
  });
  }
}
