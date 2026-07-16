import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface itemDiscountsApiAttributes {
  gtin: string;
  ruleType: string;
  ruleCode: string;
  value?: string;
  startDate?: string;
  endDate?: string;
  secuency?: string;
  type: string;
}

export type itemDiscountsApiPk = "gtin" | "ruleType" | "ruleCode" | "type";
export type itemDiscountsApiId = itemDiscountsApi[itemDiscountsApiPk];
export type itemDiscountsApiOptionalAttributes = "value" | "startDate" | "endDate" | "secuency";
export type itemDiscountsApiCreationAttributes = Optional<itemDiscountsApiAttributes, itemDiscountsApiOptionalAttributes>;

export class itemDiscountsApi extends Model<itemDiscountsApiAttributes, itemDiscountsApiCreationAttributes> implements itemDiscountsApiAttributes {
  gtin!: string;
  ruleType!: string;
  ruleCode!: string;
  value?: string;
  startDate?: string;
  endDate?: string;
  secuency?: string;
  type!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof itemDiscountsApi {
    return itemDiscountsApi.init({
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
    tableName: 'itemDiscountsApi',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "itemDiscountsAPI_PK",
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
