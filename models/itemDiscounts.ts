import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface itemDiscountsAttributes {
  gtin: string;
  ruleType: string;
  ruleCode: string;
  value?: string;
  startDate?: string;
  endDate?: string;
  secuency?: string;
  type: string;
}

export type itemDiscountsPk = "gtin" | "ruleType" | "ruleCode" | "type";
export type itemDiscountsId = itemDiscounts[itemDiscountsPk];
export type itemDiscountsOptionalAttributes = "value" | "startDate" | "endDate" | "secuency";
export type itemDiscountsCreationAttributes = Optional<itemDiscountsAttributes, itemDiscountsOptionalAttributes>;

export class itemDiscounts extends Model<itemDiscountsAttributes, itemDiscountsCreationAttributes> implements itemDiscountsAttributes {
  gtin!: string;
  ruleType!: string;
  ruleCode!: string;
  value?: string;
  startDate?: string;
  endDate?: string;
  secuency?: string;
  type!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof itemDiscounts {
    return itemDiscounts.init({
    gtin: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    ruleType: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    ruleCode: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
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
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'itemDiscounts',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "itemDiscounts_PK",
        unique: true,
        fields: [
          { name: "gtin" },
          { name: "ruleType" },
          { name: "ruleCode" },
          { name: "type" },
        ]
      },
    ]
  });
  }
}
