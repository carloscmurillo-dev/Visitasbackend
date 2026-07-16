import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface RuleCodeTypesAttributes {
  Id: string;
  Description: string;
}

export type RuleCodeTypesPk = "Id";
export type RuleCodeTypesId = RuleCodeTypes[RuleCodeTypesPk];
export type RuleCodeTypesCreationAttributes = RuleCodeTypesAttributes;

export class RuleCodeTypes extends Model<RuleCodeTypesAttributes, RuleCodeTypesCreationAttributes> implements RuleCodeTypesAttributes {
  Id!: string;
  Description!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof RuleCodeTypes {
    return RuleCodeTypes.init({
    Id: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    Description: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'RuleCodeTypes',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "RuleCodeTypes_PK",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
  }
}
