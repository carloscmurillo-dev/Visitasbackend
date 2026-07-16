import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface itemDiscountsbkAttributes {
  gtin: string;
  ruleType: string;
  ruleCode: string;
  value?: string;
  startDate?: string;
  endDate?: string;
  secuency?: string;
  type: string;
}

export type itemDiscountsbkOptionalAttributes = "value" | "startDate" | "endDate" | "secuency";
export type itemDiscountsbkCreationAttributes = Optional<itemDiscountsbkAttributes, itemDiscountsbkOptionalAttributes>;

export class itemDiscountsbk extends Model<itemDiscountsbkAttributes, itemDiscountsbkCreationAttributes> implements itemDiscountsbkAttributes {
  gtin!: string;
  ruleType!: string;
  ruleCode!: string;
  value?: string;
  startDate?: string;
  endDate?: string;
  secuency?: string;
  type!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof itemDiscountsbk {
    return itemDiscountsbk.init({
    gtin: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    ruleType: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    ruleCode: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    value: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    startDate: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    endDate: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    secuency: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'itemDiscountsbk',
    schema: 'dbo',
    timestamps: false
  });
  }
}
