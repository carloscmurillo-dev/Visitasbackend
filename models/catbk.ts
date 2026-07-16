import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface catbkAttributes {
  categoria_id: number;
  categoria_dsc: string;
}

export type catbkCreationAttributes = catbkAttributes;

export class catbk extends Model<catbkAttributes, catbkCreationAttributes> implements catbkAttributes {
  categoria_id!: number;
  categoria_dsc!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof catbk {
    return catbk.init({
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
    tableName: 'catbk',
    schema: 'dbo',
    timestamps: false
  });
  }
}
